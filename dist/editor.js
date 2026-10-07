var tp=Object.defineProperty;var np=(n,e)=>{for(var t in e)tp(n,t,{get:e[t],enumerable:!0})};var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,uc=1,Ru=2;var Ur=1,Cu=2,ki=3,Oi=0,kt=1,_n=2,Zn=0,qs=1,dc=2,fc=3,pc=4,Pu=5;var os=100,Iu=101,Lu=102,Nu=103,Du=104,Uu=200,Fu=201,ku=202,Ou=203,mc=204,gc=205,Bu=206,zu=207,Vu=208,Hu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,Ua=0,Fa=1,ka=2,Ls=3,Oa=4,Ba=5,za=6,Va=7,_c=0,$u=1,Zu=2,Dn=0,xc=1,yc=2,vc=3,Fr=4,Mc=5,Ys=6,bc=7;var Sc=300,Bi=301,ls=302,mo=303,go=304,kr=306,Ns=1e3,qn=1001,Ha=1002,Ut=1003,Ku=1004;var Or=1005;var Ct=1006,_o=1007;var Kn=1008;var ln=1009,Ec=1010,wc=1011,$s=1012,xo=1013,Un=1014,En=1015,Fn=1016,yo=1017,vo=1018,Zs=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,cn=1023,Yn=1026,zi=1027,Mo=1028,bo=1029,Vi=1030,So=1031;var Eo=1033,Br=33776,zr=33777,Vr=33778,Hr=33779,wo=35840,To=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,Io=37496,Lo=37488,No=37489,Gr=37490,Do=37491,Uo=37808,Fo=37809,ko=37810,Oo=37811,Bo=37812,zo=37813,Vo=37814,Ho=37815,Go=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,$o=37821,Zo=36492,Ko=36494,Jo=36495,jo=36283,Qo=36284,Wr=36285,el=36286;var yr=2300,Ga=2301,Na=2302,sc=2303,rc=2400,ac=2401,oc=2402;var Ju=3200;var tl=0,ju=1,kn="",Qt="srgb",vr="srgb-linear",Mr="linear",it="srgb";var Da=7680;var Qu=519,ed=512,td=513,nd=514,nl=515,id=516,sd=517,il=518,rd=519,ad=35044;var Pc="300 es",Ln=2e3,Ds=2001;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function od(){let n=br("canvas");return n.style.display="block",n}var tu={},Us=null;function Ic(...n){let e="THREE."+n.shift();Us?Us("log",e,...n):console.log(e,...n)}function ld(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=ld(n);let e="THREE."+n.shift();if(Us)Us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){n=ld(n);let e="THREE."+n.shift();if(Us)Us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function is(...n){let e=n.join(" ");e in tu||(tu[e]=!0,De(...n))}function cd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var hd={[Ua]:Fa,[ka]:za,[Oa]:Va,[Ls]:Ba,[Fa]:Ua,[za]:ka,[Va]:Oa,[Ba]:Ls},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=1234567,_r=Math.PI/180,Fs=180/Math.PI;function Ks(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Lc(n,e){return(n%e+e)%e}function rp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ap(n,e,t){return n!==e?(t-n)/(e-n):0}function xr(n,e,t){return(1-t)*n+t*e}function op(n,e,t,i){return xr(n,e,1-Math.exp(-t*i))}function lp(n,e=1){return e-Math.abs(Lc(n,e*2)-e)}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dp(n,e){return n+Math.random()*(e-n)}function fp(n){return n*(.5-Math.random())}function pp(n){n!==void 0&&(nu=n);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(n){return n*_r}function gp(n){return n*Fs}function _p(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xe={DEG2RAD:_r,RAD2DEG:Fs,generateUUID:Ks,clamp:Ve,euclideanModulo:Lc,mapLinear:rp,inverseLerp:ap,lerp:xr,damp:op,pingpong:lp,smoothstep:cp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:_p,ceilPowerOfTwo:xp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:vp,normalize:jt,denormalize:Ps},Oc=class Oc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oc.prototype.isVector2=!0;var ae=Oc,dt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bc=class Bc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dl.copy(this).projectOnVector(e),this.sub(Dl)}reflect(e){return this.sub(Dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bc.prototype.isVector3=!0;var C=Bc,Dl=new C,iu=new dt,zc=class zc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],y=s[7],S=s[2],E=s[5],R=s[8];return r[0]=a*x+o*_+l*S,r[3]=a*m+o*M+l*E,r[6]=a*p+o*y+l*R,r[1]=c*x+h*_+d*S,r[4]=c*m+h*M+d*E,r[7]=c*p+h*y+d*R,r[2]=u*x+f*_+g*S,r[5]=u*m+f*M+g*E,r[8]=u*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zc.prototype.isMatrix3=!0;var Be=zc,Ul=new Be,su=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let n={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vr]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:su,fromXYZ:ru,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}var Je=Mp();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gs,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=br("canvas")),gs.width=e.width,gs.height=e.height;let s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bp=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fl(s[a].image)):r.push(Fl(s[a]))}else r=Fl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Sp=0,kl=new C,an=class n extends Nn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=qn,s=qn,r=Ct,a=Kn,o=cn,l=ln,c=n.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ks(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Sc;an.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,S=(p+1)/2,E=(h+u)/4,R=(d+x)/4,v=(g+m)/4;return M>y&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=R/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=v/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var vt=Vc,Xa=class extends Nn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new an(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Xa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sr=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var po=class po{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new po().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,wp)}lookAt(e,t,i){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(i,fn),bi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(i,fn)),bi.normalize(),fa.crossVectors(fn,bi),s[0]=bi.x,s[4]=fa.x,s[8]=fn.x,s[1]=bi.y,s[5]=fa.y,s[9]=fn.y,s[2]=bi.z,s[6]=fa.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],M=i[7],y=i[11],S=i[15],E=s[0],R=s[4],v=s[8],w=s[12],A=s[1],L=s[5],D=s[9],N=s[13],I=s[2],U=s[6],F=s[10],V=s[14],Y=s[3],k=s[7],H=s[11],W=s[15];return r[0]=a*E+o*A+l*I+c*Y,r[4]=a*R+o*L+l*U+c*k,r[8]=a*v+o*D+l*F+c*H,r[12]=a*w+o*N+l*V+c*W,r[1]=h*E+d*A+u*I+f*Y,r[5]=h*R+d*L+u*U+f*k,r[9]=h*v+d*D+u*F+f*H,r[13]=h*w+d*N+u*V+f*W,r[2]=g*E+x*A+m*I+p*Y,r[6]=g*R+x*L+m*U+p*k,r[10]=g*v+x*D+m*F+p*H,r[14]=g*w+x*N+m*V+p*W,r[3]=_*E+M*A+y*I+S*Y,r[7]=_*R+M*L+y*U+S*k,r[11]=_*v+M*D+y*F+S*H,r[15]=_*w+M*N+y*V+S*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=l*f-c*u,M=o*f-c*d,y=o*u-l*d,S=a*f-c*h,E=a*u-l*h,R=a*d-o*h;return t*(x*_-m*M+p*y)-i*(g*_-m*S+p*E)+s*(g*M-x*S+p*R)-r*(g*y-x*E+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=t*o-i*a,M=t*l-s*a,y=t*c-r*a,S=i*l-s*o,E=i*c-r*o,R=s*c-r*l,v=h*x-d*g,w=h*m-u*g,A=h*p-f*g,L=d*m-u*x,D=d*p-f*x,N=u*p-f*m,I=_*N-M*D+y*L+S*A-E*w+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return e[0]=(o*N-l*D+c*L)*U,e[1]=(s*D-i*N-r*L)*U,e[2]=(x*R-m*E+p*S)*U,e[3]=(u*E-d*R-f*S)*U,e[4]=(l*A-a*N-c*w)*U,e[5]=(t*N-s*A+r*w)*U,e[6]=(m*y-g*R-p*M)*U,e[7]=(h*R-u*y+f*M)*U,e[8]=(a*D-o*A+c*v)*U,e[9]=(i*A-t*D-r*v)*U,e[10]=(g*E-x*y+p*_)*U,e[11]=(d*y-h*E-f*_)*U,e[12]=(o*w-a*L-l*v)*U,e[13]=(t*L-i*w+s*v)*U,e[14]=(x*M-g*S-m*_)*U,e[15]=(h*S-d*M+u*_)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,_=l*c,M=l*h,y=l*d,S=i.x,E=i.y,R=i.z;return s[0]=(1-(x+p))*S,s[1]=(f+y)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+M)*R,s[9]=(m-_)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,h=1/o,d=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Ln)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};po.prototype.isMatrix4=!0;var Oe=po,_s=new C,Cn=new Oe,Ep=new C(0,0,0),wp=new C(1,1,1),bi=new C,fa=new C,fn=new C,au=new Oe,ou=new dt,ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(au,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tp=0,lu=new C,xs=new dt,ii=new Oe,pa=new C,ur=new C,Ap=new C,Rp=new dt,cu=new C(1,0,0),hu=new C(0,1,0),uu=new C(0,0,1),du={type:"added"},Cp={type:"removed"},ys={type:"childadded",child:null},Ol={type:"childremoved",child:null},tn=class n extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ci,i=new dt,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ur,pa,this.up):ii.lookAt(pa,ur,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ii),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),ys.child=e,this.dispatchEvent(ys),ys.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cp),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new C(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pp={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new We;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Lc(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Bl(a,r,e+1/3),this.g=Bl(a,r,e),this.b=Bl(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){let i=ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.workingToColorSpace(qt.copy(this),e),Math.round(Ve(qt.r*255,0,255))*65536+Math.round(Ve(qt.g*255,0,255))*256+Math.round(Ve(qt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Qt){Je.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ma);let i=xr(Si.h,ma.h,t),s=xr(Si.s,ma.s,t),r=xr(Si.l,ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ue;Ue.NAMES=ud;var ss=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new C,si=new C,zl=new C,ri=new C,vs=new C,Ms=new C,fu=new C,Vl=new C,Hl=new C,Gl=new C,Wl=new vt,Xl=new vt,ql=new vt,Ai=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),si.subVectors(i,t),zl.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(si),l=Pn.dot(zl),c=si.dot(si),h=si.dot(zl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Wl.setScalar(0),Xl.setScalar(0),ql.setScalar(0),Wl.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wl,r.x),a.addScaledVector(Xl,r.y),a.addScaledVector(ql,r.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),si.subVectors(e,t),Pn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,i),Ms.subVectors(r,i),Vl.subVectors(e,i);let l=vs.dot(Vl),c=Ms.dot(Vl);if(l<=0&&c<=0)return t.copy(i);Hl.subVectors(e,s);let h=vs.dot(Hl),d=Ms.dot(Hl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(vs,a);Gl.subVectors(e,r);let f=vs.dot(Gl),g=Ms.dot(Gl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ms,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return fu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(fu,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(i).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ft=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),_a.subVectors(this.max,dr),bs.subVectors(e.a,dr),Ss.subVectors(e.b,dr),Es.subVectors(e.c,dr),Ei.subVectors(Ss,bs),wi.subVectors(Es,Ss),Qi.subVectors(bs,Es);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Qi.z,Qi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Qi.z,0,-Qi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Qi.y,Qi.x,0];return!Yl(t,bs,Ss,Es,_a)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,bs,Ss,Es,_a))?!1:(xa.crossVectors(Ei,wi),t=[xa.x,xa.y,xa.z],Yl(t,bs,Ss,Es,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ai=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,ga=new Ft,bs=new C,Ss=new C,Es=new C,Ei=new C,wi=new C,Qi=new C,dr=new C,_a=new C,xa=new C,es=new C;function Yl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){es.fromArray(n,r);let o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var At=new C,ya=new ae,Ip=0,en=class extends Nn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ad,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Tr=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var He=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Lp=new Ft,fr=new C,$l=new C,Ri=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add($l)),this.expandByPoint(fr.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Np=0,bn=new Oe,Zl=new tn,ws=new C,pn=new Ft,pr=new Ft,Dt=new C,ct=class n extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?Tr:wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(pn.min,pr.min),pn.expandByPoint(Dt),Dt.addVectors(pn.max,pr.max),pn.expandByPoint(Dt)):(pn.expandByPoint(pr.min),pn.expandByPoint(pr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),Dt.add(ws)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new C,l[v]=new C;let c=new C,h=new C,d=new C,u=new ae,f=new ae,g=new ae,x=new C,m=new C;function p(v,w,A){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[v].add(x),o[w].add(x),o[A].add(x),l[v].add(m),l[w].add(m),l[A].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,w=_.length;v<w;++v){let A=_[v],L=A.start,D=A.count;for(let N=L,I=L+D;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new C,y=new C,S=new C,E=new C;function R(v){S.fromBufferAttribute(s,v),E.copy(S);let w=o[v];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(E,w);let L=y.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,L)}for(let v=0,w=_.length;v<w;++v){let A=_[v],L=A.start,D=A.count;for(let N=L,I=L+D;N<I;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new en(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kl=new C,Dp=new C,Up=new Be,mn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Kl.subVectors(i,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Kl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Up.getNormalMatrix(e),s=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fp=0,hi=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=qs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var oi=new C,Jl=new C,va=new C,Ma=new C,Bs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jl.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Ma.copy(this.origin).sub(Jl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=Ma.dot(this.direction),l=-Ma.dot(va),c=Ma.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jl).addScaledVector(va,u),f}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,_=i.y-a.y,M=i.z-a.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(h),R,v,w,A,L,D,N,I,U,F,V,Y;if(y>=S&&y>=E?(w=l,D=d,U=g,Y=p,l>=0?(R=c,v=h,A=u,L=f,N=x,I=m,F=_,V=M):(R=h,v=c,A=f,L=u,N=m,I=x,F=M,V=_)):S>=E?(w=c,D=u,U=x,Y=_,c>=0?(R=h,v=l,A=f,L=d,N=m,I=g,F=M,V=p):(R=l,v=h,A=d,L=f,N=g,I=m,F=p,V=M)):(w=h,D=f,U=m,Y=M,h>=0?(R=l,v=c,A=d,L=u,N=g,I=x,F=p,V=_):(R=c,v=l,A=u,L=d,N=x,I=g,F=_,V=p)),w===0)return null;let k=R/w,H=v/w,W=1/w,ie=A-k*D,se=L-H*D,Ie=N-k*U,Le=I-H*U,qe=F-k*Y,Z=V-H*Y,ee=qe*Le-Z*Ie,ye=ie*Z-se*qe,Ce=Ie*se-Le*ie;if(s){if(ee<0||ye<0||Ce<0)return null}else if((ee<0||ye<0||Ce<0)&&(ee>0||ye>0||Ce>0))return null;let xe=ee+ye+Ce;if(xe===0)return null;let ke=W*(ee*D+ye*U+Ce*Y);return(xe>0?ke<0:ke>0)?null:this.at(ke/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ci=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pu=new Oe,ts=new Bs,ba=new Ri,mu=new C,Sa=new C,Ea=new C,wa=new C,jl=new C,Ta=new C,gu=new C,Aa=new C,st=class extends tn{constructor(e=new ct,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(jl.fromBufferAttribute(d,e),a?Ta.addScaledVector(jl,h):Ta.addScaledVector(jl.sub(t),h))}t.add(Ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(ba.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ba,mu)===null||ts.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(pu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){let E=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);s=Ra(this,p,e,i,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=Ra(this,a,e,i,c,h,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,S=M;y<S;y+=3){let E=y,R=y+1,v=y+2;s=Ra(this,p,e,i,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,y=m+2;s=Ra(this,a,e,i,c,h,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function kp(n,e,t,i,s,r,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:n}}function Ra(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Sa),n.getVertexPosition(l,Ea),n.getVertexPosition(c,wa);let h=kp(n,e,t,i,Sa,Ea,wa,gu);if(h){let d=new C;Ai.getBarycoord(gu,Sa,Ea,wa,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,d,new ae)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,d,new ae)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Ai.getNormal(Sa,Ea,wa,u.normal),h.face=u,h.barycoord=d}return h}var rs=class extends an{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,h=Ut,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Oe,_u=new Oe,Ca=[],xu=new Ft,Op=new Oe,mr=new st,gr=new Ri,Sn=class extends st{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Op)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),xu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),gr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),_u.multiplyMatrices(i,Ts),mr.matrixWorld=_u,mr.raycast(e,Ca);for(let a=0,o=Ca.length;a<o;a++){let l=Ca[a];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rs(new Float32Array(s*this.count),s,this.count,Mo,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new Ri,Bp=new ae(.5,.5),Pa=new C,Vs=class{constructor(e=new mn,t=new mn,i=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-_).normalize(),s[1].setComponents(c+a,f+h,p+g,S+_).normalize(),s[2].setComponents(c+o,f+d,p+x,S+M).normalize(),s[3].setComponents(c-o,f-d,p-x,S-M).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,S-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-y).normalize(),t===Ln)s[5].setComponents(c+l,f+u,p+m,S+y).normalize();else if(t===Ds)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=Bp.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Pa.x=s.normal.x>0?e.max.x:e.min.x,Pa.y=s.normal.y>0?e.max.y:e.min.y,Pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends an{constructor(e=[],t=Bi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Pi=class extends an{constructor(e,t,i=Un,s,r,a,o=Ut,l=Ut,c,h=Yn,d=1){if(h!==Yn&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ya=class extends Pi{constructor(e,t=Un,i=Bi,s,r,a=Ut,o=Ut,l,c=Yn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rr=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$n=class n extends ct{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(x,m,p,_,M,y,S,E,R,v,w){let A=y/R,L=S/v,D=y/2,N=S/2,I=E/2,U=R+1,F=v+1,V=0,Y=0,k=new C;for(let H=0;H<F;H++){let W=H*L-N;for(let ie=0;ie<U;ie++){let se=ie*A-D;k[x]=se*_,k[m]=W*M,k[p]=I,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[p]=E>0?1:-1,h.push(k.x,k.y,k.z),d.push(ie/R),d.push(1-H/v),V+=1}}for(let H=0;H<v;H++)for(let W=0;W<R;W++){let ie=u+W+U*H,se=u+W+U*(H+1),Ie=u+(W+1)+U*(H+1),Le=u+(W+1)+U*H;l.push(ie,se,Le),l.push(se,Ie,Le),Y+=6}o.addGroup(f,Y,w),f+=Y,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $t=class n extends ct{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=i/2,p=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2));function _(){let y=new C,S=new C,E=0,R=(t-e)/i;for(let v=0;v<=r;v++){let w=[],A=v/r,L=A*(t-e)+e;for(let D=0;D<=s;D++){let N=D/s,I=N*l+o,U=Math.sin(I),F=Math.cos(I);S.x=L*U,S.y=-A*i+m,S.z=L*F,d.push(S.x,S.y,S.z),y.set(U,R,F).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-A),w.push(g++)}x.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let A=x[w][v],L=x[w+1][v],D=x[w+1][v+1],N=x[w][v+1];(e>0||w!==0)&&(h.push(A,L,N),E+=3),(t>0||w!==r-1)&&(h.push(L,D,N),E+=3)}c.addGroup(p,E,0),p+=E}function M(y){let S=g,E=new ae,R=new C,v=0,w=y===!0?e:t,A=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let I=D/s*l+o,U=Math.cos(I),F=Math.sin(I);R.x=w*F,R.y=m*A,R.z=w*U,d.push(R.x,R.y,R.z),u.push(0,A,0),E.x=U*.5+.5,E.y=F*.5*A+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){let N=S+D,I=L+D;y===!0?h.push(I,I+1,N):h.push(I+1,I,N),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $a=class n extends ct{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new C,y=new C,S=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],S),l(M,y,S,_)}function l(_,M,y,S){let E=S+1,R=[];for(let v=0;v<=E;v++){R[v]=[];let w=_.clone().lerp(y,v/E),A=M.clone().lerp(y,v/E),L=E-v;for(let D=0;D<=L;D++)D===0&&v===E?R[v][D]=w:R[v][D]=w.clone().lerp(A,D/L)}for(let v=0;v<E;v++)for(let w=0;w<2*(E-v)-1;w++){let A=Math.floor(w/2);w%2===0?(u(R[v][A+1]),u(R[v+1][A]),u(R[v][A])):(u(R[v][A+1]),u(R[v+1][A+1]),u(R[v+1][A]))}}function c(_){let M=new C;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(_),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let _=new C;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let y=m(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;a.push(y,1-S)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let M=a[_+0],y=a[_+2],S=a[_+4],E=Math.max(M,y,S),R=Math.min(M,y,S);E>.9&&R<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),S<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let _=new C,M=new C,y=new C,S=new C,E=new ae,R=new ae,v=new ae;for(let w=0,A=0;w<r.length;w+=9,A+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),v.set(a[A+4],a[A+5]),S.copy(_).add(M).add(y).divideScalar(3);let L=m(S);x(E,A+0,_,L),x(R,A+2,M,L),x(v,A+4,y,L)}}function x(_,M,y,S){S<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Za=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new Oe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Nc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var yu=new C,vu=new C,Ql=new Nc,ec=new Nc,tc=new Nc,Ii=class extends Za{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vu.subVectors(s[0],s[1]).add(s[0]),c=vu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ql.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),ec.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),tc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ec.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),tc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ql.calc(l),ec.calc(l),tc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Hs=class n extends $a{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Gs=class n extends ct{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new C,u=new ae,f=new C,g=new C,x=new C,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let M=i+_*h*s,y=Math.sin(M),S=Math.cos(M);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*S,a.push(d.x,d.y,d.z),u.x=_/t,u.y=E/(e.length-1),o.push(u.x,u.y);let R=l[3*E+0]*y,v=l[3*E+1],w=l[3*E+0]*S;c.push(R,v,w)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,S=y,E=y+e.length,R=y+e.length+1,v=y+1;r.push(S,E,v),r.push(R,v,E)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ui=class n extends ct{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*u-a;for(let M=0;M<c;M++){let y=M*d-r;g.push(y,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let M=_+c*p,y=_+c*(p+1),S=_+1+c*(p+1),E=_+1+c*p;f.push(M,y,E),f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var as=class n extends ct{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],M=p/i,y=a+M*o,S=e*Math.cos(y),E=Math.sqrt(e*e-S*S),R=0;p===0&&a===0?R=.5/t:p===i&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){let w=v/t,A=s+w*r;d.x=-E*Math.cos(A),d.y=S,d.z=E*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(w+R,1-M),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let M=h[p][_+1],y=h[p][_],S=h[p+1][_],E=h[p+1][_+1];(p!==0||a>0)&&f.push(M,y,E),(p!==i-1||l<Math.PI)&&f.push(y,S,E)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var nn=class n extends ct{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let p=0;p<=s;p++){let _=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(p,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Cr=class extends hi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Mu(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Mu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=cs(n[t]);for(let s in i)e[s]=i[s]}return e}function Mu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var dd={clone:cs,merge:Zt},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ka=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pr=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},di=class extends Pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ja=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function As(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Li{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ac:r=e,o=2*t-i;break;case oc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ac:a=e,l=2*i-t;break;case oc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+_*a[c+S]+M*a[l+S]+y*a[d+S];return r}},eo=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},to=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},no=class extends Li{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=f*u+g*2,_=d[p],M=d[p+1],y=e*u+g*2,S=h[y],E=h[y+1],R=Wp(i,t,_,S,s);r[g]=fd(R,x,M,E,m)}return r}};function fd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Gp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Wp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=fd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Gp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=As(t,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:As(e.times,Array),values:As(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),nc(e.settings)&&(i.settings={inTangents:As(e.settings.inTangents,Array),outTangents:As(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new no(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break;case sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;nc(this.settings)&&(bu(this.settings.inTangents,e),bu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Na,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,nc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ga;var Ni=class extends gn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=yr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};io.prototype.ValueTypeName="color";var so=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};so.prototype.ValueTypeName="number";var ro=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)dt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ir=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends gn{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=yr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends gn{constructor(e,t,i,s){super(e,t,i,s)}};ao.prototype.ValueTypeName="vector";var oo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pd=new oo,lo=class{constructor(e){this.manager=e!==void 0?e:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ic=new Oe,Su=new C,Eu=new C,ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ic,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ds||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new C,La=new dt,Xn=new C,Lr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ia,La,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new C,wu=new ae,Tu=new ae,Yt=class extends Lr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Tu),t.subVectors(Tu,wu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ws=class extends Lr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lc=class extends ho{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Nr=class extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rs=-90,Cs=1,uo=class extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Yt(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fo=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Uc="\\[\\]\\.:\\/",Xp=new RegExp("["+Uc+"]","g"),Fc="[^"+Uc+"]",qp="[^"+Uc.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Fc),$p=/(WCOD+)?/.source.replace("WCOD",qp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),Jp=new RegExp("^"+Yp+$p+Zp+Kp+"$"),jp=["material","materials","bones","map"],cc=class{constructor(e,t,i){let s=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(e){let t=Jp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=cc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sv=new Float32Array(1);var Xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hc=class Hc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Hc.prototype.isMatrix2=!0;var hc=Hc;var Dr=class extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function kc(n,e,t,i){let s=Qp(i);switch(t){case Rc:return n*e;case Mo:return n*e/s.components*s.byteLength;case bo:return n*e/s.components*s.byteLength;case Vi:return n*e*2/s.components*s.byteLength;case So:return n*e*2/s.components*s.byteLength;case Cc:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case Eo:return n*e*4/s.components*s.byteLength;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ro:return Math.max(n,16)*Math.max(e,8)/4;case wo:case Ao:return Math.max(n,8)*Math.max(e,8)/2;case Co:case Po:case Lo:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Io:case Gr:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zo:case Ko:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wr:case el:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(n){switch(n){case ln:case Ec:return{byteLength:1,components:1};case $s:case wc:case Fn:return{byteLength:2,components:1};case yo:case vo:return{byteLength:2,components:4};case Un:case xo:case En:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Fd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function am(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qm=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,D0=`#define TOON
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
}`,U0=`uniform float size;
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
}`,F0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:dm,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:gm,begin_vertex:_m,beginnormal_vertex:xm,bsdfs:ym,iridescence_fragment:vm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:wm,color_fragment:Tm,color_pars_fragment:Am,color_pars_vertex:Rm,color_vertex:Cm,common:Pm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Fm,colorspace_fragment:km,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Vm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Qm,envmap_vertex:Gm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Zm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:Jm,lights_pars_begin:jm,lights_toon_fragment:eg,lights_toon_pars_fragment:tg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:_g,metalnessmap_fragment:xg,metalnessmap_pars_fragment:yg,morphinstance_vertex:vg,morphcolor_vertex:Mg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Eg,normal_fragment_begin:wg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Dg,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:kg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:$g,skinning_vertex:Zg,skinnormal_vertex:Kg,specularmap_fragment:Jg,specularmap_pars_fragment:jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:a0,background_vert:o0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distance_vert:m0,distance_frag:g0,equirect_vert:_0,equirect_frag:x0,linedashed_vert:y0,linedashed_frag:v0,meshbasic_vert:M0,meshbasic_frag:b0,meshlambert_vert:S0,meshlambert_frag:E0,meshmatcap_vert:w0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:N0,meshtoon_frag:D0,points_vert:U0,points_frag:F0,shadow_vert:k0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},me={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},jn={basic:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Zt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Zt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Zt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Zt([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Zt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Zt([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Zt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Zt([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Zt([me.common,me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Zt([me.lights,me.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};jn.physical={uniforms:Zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var sl={r:0,b:0,g:0},V0=new Oe,kd=new Be;kd.set(-1,0,0,0,1,0,0,0,1);function H0(n,e,t,i,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1,y=f(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,M){let y=f(M);y&&(y.isCubeTexture||y.mapping===kr)?(c===void 0&&(c=new st(new $n(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:cs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kd),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==it,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new st(new ui(2,2),new sn({name:"BackgroundMaterial",uniforms:cs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(sl,Dc(n)),t.buffers.color.setClear(sl.r,sl.g,sl.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:x,dispose:p}}function G0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,D,N,I,U){let F=!1,V=d(L,I,N,D);r!==V&&(r=V,c(r.object)),F=f(L,I,N,U),F&&g(L,I,N,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(L,D,N,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function d(L,D,N,I){let U=I.wireframe===!0,F=i[D.id];F===void 0&&(F={},i[D.id]=F);let V=L.isInstancedMesh===!0?L.id:0,Y=F[V];Y===void 0&&(Y={},F[V]=Y);let k=Y[N.id];k===void 0&&(k={},Y[N.id]=k);let H=k[U];return H===void 0&&(H=u(l()),k[U]=H),H}function u(L){let D=[],N=[],I=[];for(let U=0;U<t;U++)D[U]=0,N[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,N,I){let U=r.attributes,F=D.attributes,V=0,Y=N.getAttributes();for(let k in Y)if(Y[k].location>=0){let W=U[k],ie=F[k];if(ie===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function g(L,D,N,I){let U={},F=D.attributes,V=0,Y=N.getAttributes();for(let k in Y)if(Y[k].location>=0){let W=F[k];W===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),U[k]=ie,V++}r.attributes=U,r.attributesNum=V,r.index=I}function x(){let L=r.newAttributes;for(let D=0,N=L.length;D<N;D++)L[D]=0}function m(L){p(L,0)}function p(L,D){let N=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;N[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),U[L]!==D&&(n.vertexAttribDivisor(L,D),U[L]=D)}function _(){let L=r.newAttributes,D=r.enabledAttributes;for(let N=0,I=D.length;N<I;N++)D[N]!==L[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function M(L,D,N,I,U,F,V){V===!0?n.vertexAttribIPointer(L,D,N,U,F):n.vertexAttribPointer(L,D,N,I,U,F)}function y(L,D,N,I){x();let U=I.attributes,F=N.getAttributes(),V=D.defaultAttributeValues;for(let Y in F){let k=F[Y];if(k.location>=0){let H=U[Y];if(H===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let W=H.normalized,ie=H.itemSize,se=e.get(H);if(se===void 0)continue;let Ie=se.buffer,Le=se.type,qe=se.bytesPerElement,Z=Le===n.INT||Le===n.UNSIGNED_INT||H.gpuType===xo;if(H.isInterleavedBufferAttribute){let ee=H.data,ye=ee.stride,Ce=H.offset;if(ee.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)p(k.location+xe,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let xe=0;xe<k.locationSize;xe++)m(k.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let xe=0;xe<k.locationSize;xe++)M(k.location+xe,ie/k.locationSize,Le,W,ye*qe,(Ce+ie/k.locationSize*xe)*qe,Z)}else{if(H.isInstancedBufferAttribute){for(let ee=0;ee<k.locationSize;ee++)p(k.location+ee,H.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ee=0;ee<k.locationSize;ee++)m(k.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ee=0;ee<k.locationSize;ee++)M(k.location+ee,ie/k.locationSize,Le,W,ie*qe,ie/k.locationSize*ee*qe,Z)}}else if(V!==void 0){let W=V[Y];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(k.location,W);break;case 3:n.vertexAttrib3fv(k.location,W);break;case 4:n.vertexAttrib4fv(k.location,W);break;default:n.vertexAttrib1fv(k.location,W)}}}}_()}function S(){w();for(let L in i){let D=i[L];for(let N in D){let I=D[N];for(let U in I){let F=I[U];for(let V in F)h(F[V].object),delete F[V];delete I[U]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let D=i[L.id];for(let N in D){let I=D[N];for(let U in I){let F=I[U];for(let V in F)h(F[V].object),delete F[V];delete I[U]}}delete i[L.id]}function R(L){for(let D in i){let N=i[D];for(let I in N){let U=N[I];if(U[L.id]===void 0)continue;let F=U[L.id];for(let V in F)h(F[V].object),delete F[V];delete U[L.id]}}}function v(L){for(let D in i){let N=i[D],I=L.isInstancedMesh===!0?L.id:0,U=N[I];if(U!==void 0){for(let F in U){let V=U[F];for(let Y in V)h(V[Y].object),delete V[Y];delete U[F]}delete N[I],Object.keys(N).length===0&&delete i[D]}}}function w(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function W0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function X0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&R!==En&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:S,samples:E}}function q0(n){let e=this,t=null,i=0,s=!1,r=!1,a=new mn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,M=_*4,y=p.clippingState||null;l.value=y,y=h(g,u,M,f);for(let S=0;S!==M;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==x;++M,y+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var js=4,Y0=6,$0=20,Z0=256,Xr=new Ws,md=new Ue,Gc=null,Wc=0,Xc=0,qc=!1,K0=new C,hs=new C,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=K0}=r;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Fn,format:cn,colorSpace:vr,depthBuffer:!1},s=gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J0(r)),this._blurMaterial=Q0(r,e,t),this._ggxMaterial=j0(r,e,t)}return s}_compileMaterial(e){let t=new st(new ct,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,i,s,r){let l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(md),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new $n,new Ci({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(md),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;Js(s,y*S,M>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Bi||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-js?i-g+js:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Js(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Js(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Xr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-js?s-this._lodMax+js:0),u=4*(this._cubeSize-h);Js(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Xr)}};function J0(n){let e=[],t=[],i=n,s=n-js+1+Y0;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let _=p%3*2/3-1,M=p>2?0:-1,y=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(y,f*u*p);for(let S=0;S<u;S++){let E=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?hs.set(1,R,E):p===1?hs.set(-E,1,-R):p===2?hs.set(-E,R,1):p===3?hs.set(-1,R,-E):p===4?hs.set(-E,-1,R):hs.set(E,R,-1),hs.toArray(x,(p*u+S)*f)}}let m=new ct;m.setAttribute("position",new en(g,f)),m.setAttribute("outputDirection",new en(x,f)),t.push(new st(m,null)),i>js&&i--}return{lodMeshes:t,sizeLods:e}}function gd(n,e,t){let i=new on(n,e,t);return i.texture.mapping=kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function j0(n,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Q0(n,e,t){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function _d(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function xd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Zn});r.uniforms.tEquirect.value=t;let a=new st(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Ct),new uo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function e_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===mo||f===go)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new al(g.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===mo||f===go,x=f===Bi||f===ls;if(g||x){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new er(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new er(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===mo?u.mapping=Bi:f===go&&(u.mapping=ls),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function t_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&is("WebGLRenderer: "+i+" extension not supported."),s}}}function n_(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let M=0,y=_.length;M<y;M+=3){let S=_[M+0],E=_[M+1],R=_[M+2];u.push(S,E,E,R,R,S)}}else{let _=g.array;x=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let S=M+0,E=M+1,R=M+2;u.push(S,E,E,R,R,S)}}let m=new(g.count>=65535?Tr:wr)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function i_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function s_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r_(n,e,t){let i=new WeakMap,s=new vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=o.attributes.position.count*M,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*d),R=new Sr(E,y,S,d);R.type=En,R.needsUpdate=!0;let v=M*4;for(let A=0;A<d;A++){let L=m[A],D=p[A],N=_[A],I=y*S*4*A;for(let U=0;U<L.count;U++){let F=U*v;f===!0&&(s.fromBufferAttribute(L,U),E[I+F+0]=s.x,E[I+F+1]=s.y,E[I+F+2]=s.z,E[I+F+3]=0),g===!0&&(s.fromBufferAttribute(D,U),E[I+F+4]=s.x,E[I+F+5]=s.y,E[I+F+6]=s.z,E[I+F+7]=0),x===!0&&(s.fromBufferAttribute(N,U),E[I+F+8]=s.x,E[I+F+9]=s.y,E[I+F+10]=s.z,E[I+F+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new ae(y,S)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function a_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var o_={[xc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[Fr]:"ACES_FILMIC_TONE_MAPPING",[Ys]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function l_(n,e,t,i,s,r){let a=new on(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ct;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));let h=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new st(c,h),u=new Ws(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,_=[],M=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let E=0;E<_.length;E++){let R=_[E];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){_=y,M=_.length>0&&_[0].isRenderPass===!0;let S=a.width,E=a.height;_.length>0&&o===null&&(o=new on(S,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new on(S,E,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){let v=_[R];v.setSize&&v.setSize(S,E)}},this.begin=function(y,S){if(x||y.toneMapping===Dn&&_.length===0)return!1;if(p=S,S!==null){let E=S.width,R=S.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return M===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Dn,!0},this.hasRenderPass=function(){return M},this.end=function(y,S){y.toneMapping=m,x=!0;let E=a,R=o;for(let v=0;v<_.length;v++){let w=_[v];w.enabled!==!1&&(w.render(y,R,E,S),w.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},Je.getTransfer(f)===it&&(h.defines.SRGB_TRANSFER="");let v=o_[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Od=new an,Zc=new Pi(1,1),Bd=new Sr,zd=new qa,Vd=new Ar,yd=[],vd=[],Md=new Float32Array(16),bd=new Float32Array(9),Sd=new Float32Array(4);function tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cl(n,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function u_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function f_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),It(t,i)}}function p_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;bd.set(i),n.uniformMatrix3fv(this.addr,!1,bd),It(t,i)}}function m_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),It(t,i)}}function g_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function x_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function v_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function E_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zc.compareFunction=t.isReversedDepthBuffer()?il:nl,r=Zc):r=Od,t.setTexture2D(e||r,s)}function w_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zd,s)}function T_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vd,s)}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bd,s)}function R_(n){switch(n){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return M_;case 36295:return b_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function C_(n,e){n.uniform1fv(this.addr,e)}function P_(n,e){let t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function I_(n,e){let t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function L_(n,e){let t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function N_(n,e){let t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D_(n,e){let t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U_(n,e){let t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F_(n,e){n.uniform1iv(this.addr,e)}function k_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function V_(n,e){n.uniform2uiv(this.addr,e)}function H_(n,e){n.uniform3uiv(this.addr,e)}function G_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Zc:a=Od;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function X_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zd,r[a])}function q_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vd,r[a])}function Y_(n,e,t){let i=this.cache,s=e.length,r=cl(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function $_(n){switch(n){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return N_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return V_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}var Kc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R_(t.type)}},Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$_(t.type)}},jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function Ed(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){let i=n.name,s=i.length;for(Yc.lastIndex=0;;){let r=Yc.exec(i),a=Yc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ed(t,c===void 0?new Kc(o,n,e):new Jc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jc(o),Ed(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Z_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function wd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var K_=37297,J_=0;function j_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Td=new Be;function Q_(n){Je._getMatrix(Td,Je.workingColorSpace,n);let e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ad(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+j_(n.getShaderSource(e),o)}else return r}function ex(n,e){let t=Q_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var tx={[xc]:"Linear",[yc]:"Reinhard",[vc]:"Cineon",[Fr]:"ACESFilmic",[Ys]:"AgX",[bc]:"Neutral",[Mc]:"Custom"};function nx(n,e){let t=tx[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rl=new C;function ix(){Je.getLuminanceCoefficients(rl);let n=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function rx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ax(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Yr(n){return n!==""}function Rd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(ox,cx)}var lx=new Map;function cx(n,e){let t=Ge[e];if(t===void 0){let i=lx.get(e);if(i!==void 0)t=Ge[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qc(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(n){return n.replace(hx,ux)}function ux(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var dx={[Ur]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};function fx(n){return dx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var px={[Bi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE_UV"};function mx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":px[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var gx={[ls]:"ENVMAP_MODE_REFRACTION"};function _x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xx={[_c]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function yx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xx[n.combine]||"ENVMAP_BLENDING_NONE"}function vx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Mx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=fx(t),c=mx(t),h=_x(t),d=yx(t),u=vx(t),f=sx(t),g=rx(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Dn?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Qc(a),a=Rd(a,t),a=Cd(a,t),o=Qc(o),o=Rd(o,t),o=Cd(o,t),a=Pd(a),o=Pd(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+a,y=_+p+o,S=wd(s,s.VERTEX_SHADER,M),E=wd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(S)||"",I=s.getShaderInfoLog(E)||"",U=D.trim(),F=N.trim(),V=I.trim(),Y=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,E);else{let H=Ad(s,S,"vertex"),W=Ad(s,E,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+H+`
`+W)}else U!==""?De("WebGLProgram: Program Info Log:",U):(F===""||V==="")&&(k=!1);k&&(L.diagnostics={runnable:Y,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(S),s.deleteShader(E),v=new Qs(s,x),w=ax(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,K_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}var bx=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new th(e),t.set(e,i)),i}},th=class{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}};function Sx(n){return n===Vi||n===Gr||n===Wr}function Ex(n,e,t,i,s,r){let a=new Er,o=new eh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,A,L,D,N){let I=L.fog,U=D.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||F,V),k=Y&&Y.mapping===kr?Y.image.height:null,H=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=W!==void 0?W.length:0,se=0;U.morphAttributes.position!==void 0&&(se=1),U.morphAttributes.normal!==void 0&&(se=2),U.morphAttributes.color!==void 0&&(se=3);let Ie,Le,qe,Z;if(H){let pt=jn[H];Ie=pt.vertexShader,Le=pt.fragmentShader}else{Ie=v.vertexShader,Le=v.fragmentShader;let pt=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,pt,tt),qe=pt.id,Z=tt.id}let ee=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,ke=!!v.map,bt=!!v.matcap,$e=!!Y,et=!!v.aoMap,ft=!!v.lightMap,Ke=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Nt=!!v.displacementMap,rn=!!v.emissiveMap,Mt=!!v.metalnessMap,wt=!!v.roughnessMap,z=v.anisotropy>0,Gt=v.clearcoat>0,at=v.dispersion>0,P=v.retroreflectivity>0,b=v.iridescence>0,G=v.sheen>0,$=v.transmission>0,J=z&&!!v.anisotropyMap,re=Gt&&!!v.clearcoatMap,ce=Gt&&!!v.clearcoatNormalMap,j=Gt&&!!v.clearcoatRoughnessMap,te=b&&!!v.iridescenceMap,he=b&&!!v.iridescenceThicknessMap,Ae=G&&!!v.sheenColorMap,pe=G&&!!v.sheenRoughnessMap,ue=!!v.specularMap,Re=!!v.specularColorMap,Ne=!!v.specularIntensityMap,ze=$&&!!v.transmissionMap,B=$&&!!v.thicknessMap,de=!!v.gradientMap,Q=!!v.alphaMap,fe=v.alphaTest>0,ve=!!v.alphaHash,ne=!!v.extensions,Pe=Dn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let we={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:Ie,fragmentShader:Le,defines:v.defines,customVertexShaderID:qe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:bt,envMap:$e,envMapMode:$e&&Y.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:ft,bumpMap:Ke,normalMap:yt,displacementMap:Nt,emissiveMap:rn,normalMapObjectSpace:yt&&v.normalMapType===ju,normalMapTangentSpace:yt&&v.normalMapType===tl,packedNormalMap:yt&&v.normalMapType===tl&&Sx(v.normalMap.format),metalnessMap:Mt,roughnessMap:wt,anisotropy:z,anisotropyMap:J,clearcoat:Gt,clearcoatMap:re,clearcoatNormalMap:ce,clearcoatRoughnessMap:j,dispersion:at,retroreflection:P,iridescence:b,iridescenceMap:te,iridescenceThicknessMap:he,sheen:G,sheenColorMap:Ae,sheenRoughnessMap:pe,specularMap:ue,specularColorMap:Re,specularIntensityMap:Ne,transmission:$,transmissionMap:ze,thicknessMap:B,gradientMap:de,opaque:v.transparent===!1&&v.blending===qs&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:fe,alphaHash:ve,combine:v.combine,mapUv:ke&&g(v.map.channel),aoMapUv:et&&g(v.aoMap.channel),lightMapUv:ft&&g(v.lightMap.channel),bumpMapUv:Ke&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:Nt&&g(v.displacementMap.channel),emissiveMapUv:rn&&g(v.emissiveMap.channel),metalnessMapUv:Mt&&g(v.metalnessMap.channel),roughnessMapUv:wt&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:re&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:Re&&g(v.specularColorMap.channel),specularIntensityMapUv:Ne&&g(v.specularIntensityMap.channel),transmissionMapUv:ze&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:Q&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||z),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ke||Q),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:rn&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_n,flipSided:v.side===kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)w.push(A),w.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(p(w,v),_(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function _(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){let w=f[v.type],A;if(w){let L=jn[w];A=dd.clone(L.uniforms)}else A=v.uniforms;return A}function y(v,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new Mx(n,w,v,s),c.push(A),h.set(w,A)),A}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:R}}function wx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},n[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function l(u,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let M=o(u,f,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(u,f,g,x,m,p){let _=o(u,f,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||Tx),i.length>1&&i.sort(f||Ld),s.length>1&&s.sort(f||Ld)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ax(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Nd,n.set(i,[a])):s>=r.length?(a=new Nd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Cx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Px=0;function Ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lx(n){let e=new Rx,t=Cx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new Oe,a=new Oe;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,M=0,y=0,S=0,E=0,R=0,v=0,w=0,A=0;c.sort(Ix);for(let D=0,N=c.length;D<N;D++){let I=c[D],U=I.color,F=I.intensity,V=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vi?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*F,d+=U.g*F,u+=U.b*F;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],F);A++}else if(I.isSunLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,W=t.get(I);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[g]=W,i.sunShadowMap[g]=Y;let ie=H.getViewportCount();for(let se=0;se<ie;se++)i.sunShadowMatrix[x+se]=H.getMatrix(se),i.sunShadowCascade[x+se]=H._cascadeData[se];x+=ie,g++}i.sun[f]=k,f++}else if(I.isDirectionalLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,W=t.get(I);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=k,m++}else if(I.isSpotLight){let k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(U).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[_]=k;let H=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,H.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=H.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=Y,R++}_++}else if(I.isRectAreaLight){let k=e.get(I);k.color.copy(U).multiplyScalar(F),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=k,M++}else if(I.isPointLight){let k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let H=I.shadow,W=t.get(I);W.shadowIntensity=H.intensity,W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=I.shadow.matrix,E++}i.point[p]=k,p++}else if(I.isHemisphereLight){let k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(F),k.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[y]=k,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=A,i.version=Px++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let y=c[_];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Dd(n){let e=new Lx(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Nx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Dd(n),e.set(s,[o])):r>=a.length?(o=new Dd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`,Fx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],kx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ud=new Oe,qr=new C,$c=new C;function Ox(n,e,t){let i=new Vs,s=new ae,r=new ae,a=new vt,o=new Ja,l=new ja,c={},h=t.maxTextureSize,d={[Oi]:kt,[kt]:Oi,[_n]:_n},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Dx,fragmentShader:Ux}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new st(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(E,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Cu&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let w=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Zn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=E.length;I<U;I++){let F=E[I],V=F.shadow;if(V===void 0){De("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Y=V.getFrameExtents();s.multiply(Y),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y));let k=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ki){if(F.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new on(s.x,s.y,{format:Vi,type:Fn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new Pi(s.x,s.y,En),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Yn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut}else F.isPointLight?(V.map=new al(s.x),V.map.depthTexture=new Ya(s.x,Un)):(V.map=new on(s.x,s.y),V.map.depthTexture=new Pi(s.x,s.y,Un)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Yn,this.type===Ur?(V.map.depthTexture.compareFunction=k?il:nl,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let H=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();F.isPointLight!==!0&&V.updateMatrices(F,v);for(let W=0;W<H;W++){let ie=V.getCamera(W);if(F.isPointLight){let se=V.camera,Ie=V.matrix,Le=F.distance||se.far;Le!==se.far&&(se.far=Le,se.updateProjectionMatrix()),qr.setFromMatrixPosition(F.matrixWorld),se.position.copy(qr),$c.copy(se.position),$c.add(Fx[W]),se.up.copy(kx[W]),se.lookAt($c),se.updateMatrixWorld(),Ie.makeTranslation(-qr.x,-qr.y,-qr.z),Ud.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ud,se.coordinateSystem,se.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,W),n.clear();else{W===0&&(n.setRenderTarget(V.map),n.clear());let se=V.getViewport(W);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),D.viewport(a)}i=V.getFrustum(W),y(R,v,ie,F,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&_(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,A,L)};function _(E,R){let v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:Vi,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,v,f,x,null)}function M(E,R,v,w){let A=null,L=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=A.uuid,N=R.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let U=I[N];U===void 0&&(U=A.clone(),I[N]=U,R.addEventListener("dispose",S)),A=U}if(A.visible=R.visible,A.wireframe=R.wireframe,w===ki?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=n.properties.get(A);D.light=v}return A}function y(E,R,v,w,A){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===ki)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let N=e.update(E),I=E.material;if(Array.isArray(I)){let U=N.groups;for(let F=0,V=U.length;F<V;F++){let Y=U[F],k=I[Y.materialIndex];if(k&&k.visible){let H=M(E,k,w,A);E.onBeforeShadow(n,E,R,v,N,H,Y),n.renderBufferDirect(v,null,N,H,E,Y),E.onAfterShadow(n,E,R,v,N,H,Y)}}}else if(I.visible){let U=M(E,I,w,A);E.onBeforeShadow(n,E,R,v,N,U,null),n.renderBufferDirect(v,null,N,U,E,null),E.onAfterShadow(n,E,R,v,N,U,null)}}let D=E.children;for(let N=0,I=D.length;N<I;N++)y(D[N],R,v,w,A)}function S(E){E.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],A=E.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function Bx(n,e){function t(){let B=!1,de=new vt,Q=null,fe=new vt(0,0,0,0);return{setMask:function(ve){Q!==ve&&!B&&(n.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){B=ve},setClear:function(ve,ne,Pe,we,pt){pt===!0&&(ve*=we,ne*=we,Pe*=we),de.set(ve,ne,Pe,we),fe.equals(de)===!1&&(n.clearColor(ve,ne,Pe,we),fe.copy(de))},reset:function(){B=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let B=!1,de=!1,Q=null,fe=null,ve=null;return{setReversed:function(ne){if(de!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=ne;let we=ve;ve=null,this.setClear(we)}},getReversed:function(){return de},setTest:function(ne){ne?ee(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!B&&(n.depthMask(ne),Q=ne)},setFunc:function(ne){if(de&&(ne=hd[ne]),fe!==ne){switch(ne){case Ua:n.depthFunc(n.NEVER);break;case Fa:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case Oa:n.depthFunc(n.EQUAL);break;case Ba:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=ne}},setLocked:function(ne){B=ne},setClear:function(ne){ve!==ne&&(ve=ne,de&&(ne=1-ne),n.clearDepth(ne))},reset:function(){B=!1,Q=null,fe=null,ve=null,de=!1}}}function s(){let B=!1,de=null,Q=null,fe=null,ve=null,ne=null,Pe=null,we=null,pt=null;return{setTest:function(tt){B||(tt?ee(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(tt){de!==tt&&!B&&(n.stencilMask(tt),de=tt)},setFunc:function(tt,Rn,Gn){(Q!==tt||fe!==Rn||ve!==Gn)&&(n.stencilFunc(tt,Rn,Gn),Q=tt,fe=Rn,ve=Gn)},setOp:function(tt,Rn,Gn){(ne!==tt||Pe!==Rn||we!==Gn)&&(n.stencilOp(tt,Rn,Gn),ne=tt,Pe=Rn,we=Gn)},setLocked:function(tt){B=tt},setClear:function(tt){pt!==tt&&(n.clearStencil(tt),pt=tt)},reset:function(){B=!1,de=null,Q=null,fe=null,ve=null,ne=null,Pe=null,we=null,pt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,y=null,S=null,E=null,R=null,v=new Ue(0,0,0),w=0,A=!1,L=null,D=null,N=null,I=null,U=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Y=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Y>=2);let H=null,W={},ie=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Ie=new vt().fromArray(ie),Le=new vt().fromArray(se);function qe(B,de,Q,fe){let ve=new Uint8Array(4),ne=n.createTexture();n.bindTexture(B,ne),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Q;Pe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(de+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ne}let Z={};Z[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(Ls),Ke(!1),yt(uc),ee(n.CULL_FACE),et(Zn);function ee(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function ye(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ce(B,de){return u[B]!==de?(n.bindFramebuffer(B,de),u[B]=de,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function xe(B,de){let Q=g,fe=!1;if(B){Q=f.get(de),Q===void 0&&(Q=[],f.set(de,Q));let ve=B.textures;if(Q.length!==ve.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Pe=ve.length;ne<Pe;ne++)Q[ne]=n.COLOR_ATTACHMENT0+ne;Q.length=ve.length,fe=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Q)}function ke(B){return x!==B?(n.useProgram(B),x=B,!0):!1}let bt={[os]:n.FUNC_ADD,[Iu]:n.FUNC_SUBTRACT,[Lu]:n.FUNC_REVERSE_SUBTRACT};bt[Nu]=n.MIN,bt[Du]=n.MAX;let $e={[Uu]:n.ZERO,[Fu]:n.ONE,[ku]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Gu]:n.SRC_ALPHA_SATURATE,[Vu]:n.DST_COLOR,[Bu]:n.DST_ALPHA,[Ou]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[Hu]:n.ONE_MINUS_DST_COLOR,[zu]:n.ONE_MINUS_DST_ALPHA,[Wu]:n.CONSTANT_COLOR,[Xu]:n.ONE_MINUS_CONSTANT_COLOR,[qu]:n.CONSTANT_ALPHA,[Yu]:n.ONE_MINUS_CONSTANT_ALPHA};function et(B,de,Q,fe,ve,ne,Pe,we,pt,tt){if(B===Zn){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),B!==Pu){if(B!==p||tt!==A){if((_!==os||S!==os)&&(n.blendEquation(n.FUNC_ADD),_=os,S=os),tt)switch(B){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",B);break}else switch(B){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fc:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",B);break}M=null,y=null,E=null,R=null,v.set(0,0,0),w=0,p=B,A=tt}return}ve=ve||de,ne=ne||Q,Pe=Pe||fe,(de!==_||ve!==S)&&(n.blendEquationSeparate(bt[de],bt[ve]),_=de,S=ve),(Q!==M||fe!==y||ne!==E||Pe!==R)&&(n.blendFuncSeparate($e[Q],$e[fe],$e[ne],$e[Pe]),M=Q,y=fe,E=ne,R=Pe),(we.equals(v)===!1||pt!==w)&&(n.blendColor(we.r,we.g,we.b,pt),v.copy(we),w=pt),p=B,A=!1}function ft(B,de){B.side===_n?ye(n.CULL_FACE):ee(n.CULL_FACE);let Q=B.side===kt;de&&(Q=!Q),Ke(Q),B.blending===qs&&B.transparent===!1?et(Zn):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let fe=B.stencilWrite;o.setTest(fe),fe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),rn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){L!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),L=B)}function yt(B){B!==Au?(ee(n.CULL_FACE),B!==D&&(B===uc?n.cullFace(n.BACK):B===Ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),D=B}function Nt(B){B!==N&&(V&&n.lineWidth(B),N=B)}function rn(B,de,Q){B?(ee(n.POLYGON_OFFSET_FILL),(I!==de||U!==Q)&&(I=de,U=Q,a.getReversed()&&(de=-de),n.polygonOffset(de,Q))):ye(n.POLYGON_OFFSET_FILL)}function Mt(B){B?ee(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function wt(B){B===void 0&&(B=n.TEXTURE0+F-1),H!==B&&(n.activeTexture(B),H=B)}function z(B,de,Q){Q===void 0&&(H===null?Q=n.TEXTURE0+F-1:Q=H);let fe=W[Q];fe===void 0&&(fe={type:void 0,texture:void 0},W[Q]=fe),(fe.type!==B||fe.texture!==de)&&(H!==Q&&(n.activeTexture(Q),H=Q),n.bindTexture(B,de||Z[B]),fe.type=B,fe.texture=de)}function Gt(){let B=W[H];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(B){Fe("WebGLState:",B)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(B){Fe("WebGLState:",B)}}function b(){try{n.texSubImage2D(...arguments)}catch(B){Fe("WebGLState:",B)}}function G(){try{n.texSubImage3D(...arguments)}catch(B){Fe("WebGLState:",B)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Fe("WebGLState:",B)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Fe("WebGLState:",B)}}function re(){try{n.texStorage2D(...arguments)}catch(B){Fe("WebGLState:",B)}}function ce(){try{n.texStorage3D(...arguments)}catch(B){Fe("WebGLState:",B)}}function j(){try{n.texImage2D(...arguments)}catch(B){Fe("WebGLState:",B)}}function te(){try{n.texImage3D(...arguments)}catch(B){Fe("WebGLState:",B)}}function he(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function Ae(B,de){d[B]!==de&&(n.pixelStorei(B,de),d[B]=de)}function pe(B){Ie.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function ue(B){Le.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Le.copy(B))}function Re(B,de){let Q=c.get(de);Q===void 0&&(Q=new WeakMap,c.set(de,Q));let fe=Q.get(B);fe===void 0&&(fe=n.getUniformBlockIndex(de,B.name),Q.set(B,fe))}function Ne(B,de){let fe=c.get(de).get(B);l.get(de)!==fe&&(n.uniformBlockBinding(de,fe,B.__bindingPointIndex),l.set(de,fe))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},H=null,W={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,y=null,S=null,E=null,R=null,v=new Ue(0,0,0),w=0,A=!1,L=null,D=null,N=null,I=null,U=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ye,bindFramebuffer:Ce,drawBuffers:xe,useProgram:ke,setBlending:et,setMaterial:ft,setFlipSided:Ke,setCullFace:yt,setLineWidth:Nt,setPolygonOffset:rn,setScissorTest:Mt,activeTexture:wt,bindTexture:z,unbindTexture:Gt,compressedTexImage2D:at,compressedTexImage3D:P,texImage2D:j,texImage3D:te,pixelStorei:Ae,getParameter:he,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:re,texStorage3D:ce,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:pe,viewport:ue,reset:ze}}function zx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return g?new OffscreenCanvas(P,b):br("canvas")}function m(P,b,G){let $=1,J=at(P);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let re=Math.floor($*J.width),ce=Math.floor($*J.height);u===void 0&&(u=x(re,ce));let j=b?x(re,ce):u;return j.width=re,j.height=ce,j.getContext("2d").drawImage(P,0,0,re,ce),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+ce+")."),j}else return"data"in P&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function _(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(P,b,G,$,J,re=!1){if(P!==null){if(n[P]!==void 0)return n[P];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;$&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===n.RED&&(G===n.FLOAT&&(j=n.R32F),G===n.HALF_FLOAT&&(j=n.R16F),G===n.UNSIGNED_BYTE&&(j=n.R8),G===n.UNSIGNED_SHORT&&ce&&(j=ce.R16_EXT),G===n.SHORT&&ce&&(j=ce.R16_SNORM_EXT)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.R8UI),G===n.UNSIGNED_SHORT&&(j=n.R16UI),G===n.UNSIGNED_INT&&(j=n.R32UI),G===n.BYTE&&(j=n.R8I),G===n.SHORT&&(j=n.R16I),G===n.INT&&(j=n.R32I)),b===n.RG&&(G===n.FLOAT&&(j=n.RG32F),G===n.HALF_FLOAT&&(j=n.RG16F),G===n.UNSIGNED_BYTE&&(j=n.RG8),G===n.UNSIGNED_SHORT&&ce&&(j=ce.RG16_EXT),G===n.SHORT&&ce&&(j=ce.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RG8UI),G===n.UNSIGNED_SHORT&&(j=n.RG16UI),G===n.UNSIGNED_INT&&(j=n.RG32UI),G===n.BYTE&&(j=n.RG8I),G===n.SHORT&&(j=n.RG16I),G===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGB8UI),G===n.UNSIGNED_SHORT&&(j=n.RGB16UI),G===n.UNSIGNED_INT&&(j=n.RGB32UI),G===n.BYTE&&(j=n.RGB8I),G===n.SHORT&&(j=n.RGB16I),G===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),G===n.UNSIGNED_INT&&(j=n.RGBA32UI),G===n.BYTE&&(j=n.RGBA8I),G===n.SHORT&&(j=n.RGBA16I),G===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_SHORT&&ce&&(j=ce.RGB16_EXT),G===n.SHORT&&ce&&(j=ce.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){let te=re?Mr:Je.getTransfer(J);G===n.FLOAT&&(j=n.RGBA32F),G===n.HALF_FLOAT&&(j=n.RGBA16F),G===n.UNSIGNED_BYTE&&(j=te===it?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ce&&(j=ce.RGBA16_EXT),G===n.SHORT&&ce&&(j=ce.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,b){let G;return P?b===null||b===Un||b===Zs?G=n.DEPTH24_STENCIL8:b===En?G=n.DEPTH32F_STENCIL8:b===$s&&(G=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Un||b===Zs?G=n.DEPTH_COMPONENT24:b===En?G=n.DEPTH_COMPONENT32F:b===$s&&(G=n.DEPTH_COMPONENT16),G}function E(P,b){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ut&&P.minFilter!==Ct?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){let b=P.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function v(P){let b=P.target;b.removeEventListener("dispose",v),L(b)}function w(P){let b=i.get(P);if(b.__webglInit===void 0)return;let G=P.source,$=f.get(G);if($){let J=$[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(P),Object.keys($).length===0&&f.delete(G)}i.remove(P)}function A(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let G=P.source,$=f.get(G);delete $[b.__cacheKey],a.memory.textures--}function L(P){let b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let J=0;J<b.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(b.__webglFramebuffer[$][J]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let $=0,J=G.length;$<J;$++){let re=i.get(G[$]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(G[$])}i.remove(P)}let D=0;function N(){D=0}function I(){return D}function U(P){D=P}function F(){let P=D;return P>=s.maxTextures&&De("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function V(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){let G=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let $=P.image;if($===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(G,P,b);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function k(P,b){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ye(G,P,b);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function H(P,b){let G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){ye(G,P,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function W(P,b){let G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ce(G,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let ie={[Ns]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},se={[Ut]:n.NEAREST,[Ku]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Ct]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},Ie={[ed]:n.NEVER,[rd]:n.ALWAYS,[td]:n.LESS,[nl]:n.LEQUAL,[nd]:n.EQUAL,[il]:n.GEQUAL,[id]:n.GREATER,[sd]:n.NOTEQUAL};function Le(P,b){if(b.type===En&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ct||b.magFilter===_o||b.magFilter===Or||b.magFilter===Kn||b.minFilter===Ct||b.minFilter===_o||b.minFilter===Or||b.minFilter===Kn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ie[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ie[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ie[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ut||b.minFilter!==Or&&b.minFilter!==Kn||b.type===En&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function qe(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));let $=b.source,J=f.get($);J===void 0&&(J={},f.set($,J));let re=V(b);if(re!==P.__cacheKey){J[re]===void 0&&(J[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[re].usedTimes++;let ce=J[P.__cacheKey];ce!==void 0&&(J[P.__cacheKey].usedTimes--,ce.usedTimes===0&&A(b)),P.__cacheKey=re,P.__webglTexture=J[re].texture}return G}function Z(P,b,G){return Math.floor(Math.floor(P/G)/b)}function ee(P,b,G,$){let re=P.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,$,b.data);else{re.sort((Ae,pe)=>Ae.start-pe.start);let ce=0;for(let Ae=1;Ae<re.length;Ae++){let pe=re[ce],ue=re[Ae],Re=pe.start+pe.count,Ne=Z(ue.start,b.width,4),ze=Z(pe.start,b.width,4);ue.start<=Re+1&&Ne===ze&&Z(ue.start+ue.count-1,b.width,4)===Ne?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++ce,re[ce]=ue)}re.length=ce+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,pe=re.length;Ae<pe;Ae++){let ue=re[Ae],Re=Math.floor(ue.start/4),Ne=Math.ceil(ue.count/4),ze=Re%b.width,B=Math.floor(Re/b.width),de=Ne,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,ze,B,de,Q,G,$,b.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function ye(P,b,G){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);let J=qe(P,b),re=b.source;t.bindTexture($,P.__webglTexture,n.TEXTURE0+G);let ce=i.get(re);if(re.version!==ce.__version||J===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Q=Je.getPrimaries(Je.workingColorSpace),fe=b.colorSpace===kn?null:Je.getPrimaries(b.colorSpace),ve=b.colorSpace===kn||Q===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let te=m(b.image,!1,s.maxTextureSize);te=Gt(b,te);let he=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type),pe=y(b.internalFormat,he,Ae,b.normalized,b.colorSpace,b.isVideoTexture);Le($,b);let ue,Re=b.mipmaps,Ne=b.isVideoTexture!==!0,ze=ce.__version===void 0||J===!0,B=re.dataReady,de=E(b,te);if(b.isDepthTexture)pe=S(b.format===zi,b.type),ze&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,pe,te.width,te.height,0,he,Ae,null));else if(b.isDataTexture)if(Re.length>0){Ne&&ze&&t.texStorage2D(n.TEXTURE_2D,de,pe,Re[0].width,Re[0].height);for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],Ne?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,Q,pe,ue.width,ue.height,0,he,Ae,ue.data);b.generateMipmaps=!1}else Ne?(ze&&t.texStorage2D(n.TEXTURE_2D,de,pe,te.width,te.height),B&&ee(b,te,he,Ae)):t.texImage2D(n.TEXTURE_2D,0,pe,te.width,te.height,0,he,Ae,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ne&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,pe,Re[0].width,Re[0].height,te.depth);for(let Q=0,fe=Re.length;Q<fe;Q++)if(ue=Re[Q],b.format!==cn)if(he!==null)if(Ne){if(B)if(b.layerUpdates.size>0){let ve=kc(ue.width,ue.height,b.format,b.type);for(let ne of b.layerUpdates){let Pe=ue.data.subarray(ne*ve/ue.data.BYTES_PER_ELEMENT,(ne+1)*ve/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ne,ue.width,ue.height,1,he,Pe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,he,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,pe,ue.width,ue.height,te.depth,0,ue.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,te.depth,he,Ae,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,pe,ue.width,ue.height,te.depth,0,he,Ae,ue.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ne&&ze&&t.texStorage2D(n.TEXTURE_2D,de,pe,Re[0].width,Re[0].height);for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],b.format!==cn?he!==null?Ne?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,pe,ue.width,ue.height,0,ue.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,he,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,Q,pe,ue.width,ue.height,0,he,Ae,ue.data)}else if(b.isDataArrayTexture)if(Ne){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,pe,te.width,te.height,te.depth),B)if(b.layerUpdates.size>0){let Q=kc(te.width,te.height,b.format,b.type);for(let fe of b.layerUpdates){let ve=te.data.subarray(fe*Q/te.data.BYTES_PER_ELEMENT,(fe+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,he,Ae,ve)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,he,Ae,te.data);else if(b.isData3DTexture)Ne?(ze&&t.texStorage3D(n.TEXTURE_3D,de,pe,te.width,te.height,te.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,he,Ae,te.data);else if(b.isFramebufferTexture){if(ze)if(Ne)t.texStorage2D(n.TEXTURE_2D,de,pe,te.width,te.height);else{let Q=te.width,fe=te.height;for(let ve=0;ve<de;ve++)t.texImage2D(n.TEXTURE_2D,ve,pe,Q,fe,0,he,Ae,null),Q>>=1,fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),te.parentNode!==Q){Q.appendChild(te),d.add(b),Q.onpaint=fe=>{let ve=fe.changedElements;for(let ne of d)ve.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let ve=n.RGBA,ne=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,ne,Pe,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ne&&ze){let Q=at(Re[0]);t.texStorage2D(n.TEXTURE_2D,de,pe,Q.width,Q.height)}for(let Q=0,fe=Re.length;Q<fe;Q++)ue=Re[Q],Ne?B&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he,Ae,ue):t.texImage2D(n.TEXTURE_2D,Q,pe,he,Ae,ue);b.generateMipmaps=!1}else if(Ne){if(ze){let Q=at(te);t.texStorage2D(n.TEXTURE_2D,de,pe,Q.width,Q.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,pe,he,Ae,te);p(b)&&_($),ce.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ce(P,b,G){if(b.image.length!==6)return;let $=qe(P,b),J=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);let re=i.get(J);if(J.version!==re.__version||$===!0){t.activeTexture(n.TEXTURE0+G);let ce=Je.getPrimaries(Je.workingColorSpace),j=b.colorSpace===kn?null:Je.getPrimaries(b.colorSpace),te=b.colorSpace===kn||ce===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let he=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!he&&!Ae?pe[ne]=m(b.image[ne],!0,s.maxCubemapSize):pe[ne]=Ae?b.image[ne].image:b.image[ne],pe[ne]=Gt(b,pe[ne]);let ue=pe[0],Re=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type),ze=y(b.internalFormat,Re,Ne,b.normalized,b.colorSpace),B=b.isVideoTexture!==!0,de=re.__version===void 0||$===!0,Q=J.dataReady,fe=E(b,ue);Le(n.TEXTURE_CUBE_MAP,b);let ve;if(he){B&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ze,ue.width,ue.height);for(let ne=0;ne<6;ne++){ve=pe[ne].mipmaps;for(let Pe=0;Pe<ve.length;Pe++){let we=ve[Pe];b.format!==cn?Re!==null?B?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ze,we.width,we.height,0,we.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,we.width,we.height,Re,Ne,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,ze,we.width,we.height,0,Re,Ne,we.data)}}}else{if(ve=b.mipmaps,B&&de){ve.length>0&&fe++;let ne=at(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Re,Ne,pe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,pe[ne].width,pe[ne].height,0,Re,Ne,pe[ne].data);for(let Pe=0;Pe<ve.length;Pe++){let pt=ve[Pe].image[ne].image;B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,pt.width,pt.height,Re,Ne,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ze,pt.width,pt.height,0,Re,Ne,pt.data)}}else{B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,Ne,pe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Re,Ne,pe[ne]);for(let Pe=0;Pe<ve.length;Pe++){let we=ve[Pe];B?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Re,Ne,we.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,ze,Re,Ne,we.image[ne])}}}p(b)&&_(n.TEXTURE_CUBE_MAP),re.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xe(P,b,G,$,J,re){let ce=r.convert(G.format,G.colorSpace),j=r.convert(G.type),te=y(G.internalFormat,ce,j,G.normalized,G.colorSpace),he=i.get(b),Ae=i.get(G);if(Ae.__renderTarget=b,!he.__hasExternalTextures){let pe=Math.max(1,b.width>>re),ue=Math.max(1,b.height>>re);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,re,te,pe,ue,b.depth,0,ce,j,null):t.texImage2D(J,re,te,pe,ue,0,ce,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,Ae.__webglTexture,0,Mt(b)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,Ae.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(P,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let $=b.depthTexture,J=$&&$.isDepthTexture?$.type:null,re=S(b.stencilBuffer,J),ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(b),re,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(b),re,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,re,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,P)}else{let $=b.textures;for(let J=0;J<$.length;J++){let re=$[J],ce=r.convert(re.format,re.colorSpace),j=r.convert(re.type),te=y(re.internalFormat,ce,j,re.normalized,re.colorSpace);wt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(b),te,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(b),te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(P,b,G){let $=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Le(n.TEXTURE_CUBE_MAP,b.depthTexture);let he=r.convert(b.depthTexture.format),Ae=r.convert(b.depthTexture.type),pe;b.depthTexture.format===Yn?pe=n.DEPTH_COMPONENT24:b.depthTexture.format===zi&&(pe=n.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,b.width,b.height,0,he,Ae,null)}}else Y(b.depthTexture,0);let re=J.__webglTexture,ce=Mt(b),j=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,te=b.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Yn)wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,re,0);else if(b.depthTexture.format===zi)wt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,re,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(P){let b=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)bt(b.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?bt(b.__webglFramebuffer[0],P,0):bt(b.__webglFramebuffer,P,0)}else if(G){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[$],P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,re)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(P,b,G){let $=i.get(P);b!==void 0&&xe($.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&$e(P)}function ft(P){let b=P.texture,G=i.get(P),$=i.get(b);P.addEventListener("dispose",v);let J=P.textures,re=P.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,a.memory.textures++),re){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let te=0;te<b.mipmaps.length;te++)G.__webglFramebuffer[j][te]=n.createFramebuffer()}else G.__webglFramebuffer[j]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)G.__webglFramebuffer[j]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ce)for(let j=0,te=J.length;j<te;j++){let he=i.get(J[j]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&wt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let te=J[j];G.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let he=r.convert(te.format,te.colorSpace),Ae=r.convert(te.type),pe=y(te.internalFormat,he,Ae,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),ue=Mt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,G.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Le(n.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)xe(G.__webglFramebuffer[j][te],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else xe(G.__webglFramebuffer[j],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(b)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let j=0,te=J.length;j<te;j++){let he=J[j],Ae=i.get(he),pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ae.__webglTexture),Le(pe,he),xe(G.__webglFramebuffer,P,he,n.COLOR_ATTACHMENT0+j,pe,0),p(he)&&_(pe)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,$.__webglTexture),Le(j,b),b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)xe(G.__webglFramebuffer[te],P,b,n.COLOR_ATTACHMENT0,j,te);else xe(G.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,j,0);p(b)&&_(j),t.unbindTexture()}P.depthBuffer&&$e(P)}function Ke(P){let b=P.textures;for(let G=0,$=b.length;G<$;G++){let J=b[G];if(p(J)){let re=M(P),ce=i.get(J).__webglTexture;t.bindTexture(re,ce),_(re),t.unbindTexture()}}}let yt=[],Nt=[];function rn(P){if(P.samples>0){if(wt(P)===!1){let b=P.textures,G=P.width,$=P.height,J=n.COLOR_BUFFER_BIT,re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(P),j=b.length>1;if(j)for(let he=0;he<b.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<b.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Ae=i.get(b[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ae,0)}n.blitFramebuffer(0,0,G,$,0,0,G,$,J,n.NEAREST),l===!0&&(yt.length=0,Nt.length=0,yt.push(n.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(yt.push(re),Nt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let he=0;he<b.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Ae=i.get(b[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Mt(P){return Math.min(s.maxSamples,P.samples)}function wt(P){let b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function z(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Gt(P,b){let G=P.colorSpace,$=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==vr&&G!==kn&&(Je.getTransfer(G)===it?($!==cn||J!==ln)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",G)),b}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=et,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vx(n,e){function t(i,s=kn){let r,a=Je.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===wc)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===xo)return n.INT;if(i===Un)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===Rc)return n.ALPHA;if(i===Cc)return n.RGB;if(i===cn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Mo)return n.RED;if(i===bo)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===So)return n.RG_INTEGER;if(i===Eo)return n.RGBA_INTEGER;if(i===Br||i===zr||i===Vr||i===Hr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===To||i===Ao||i===Ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Po||i===Io||i===Lo||i===No||i===Gr||i===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Co||i===Po)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lo)return r.COMPRESSED_R11_EAC;if(i===No)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gr)return r.COMPRESSED_RG11_EAC;if(i===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uo||i===Fo||i===ko||i===Oo||i===Bo||i===zo||i===Vo||i===Ho||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Ko||i===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jo||i===Qo||i===Wr||i===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:Hx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends Nn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new nh,p={},_=t.getContextAttributes(),M=null,y=null,S=[],E=[],R=new ae,v=null,w=null,A=new Yt;A.viewport=new vt;let L=new Yt;L.viewport=new vt;let D=[A,L],N=new fo,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Os,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Os,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new Os,S[Z]=ee),ee.getHandSpace()};function F(Z){let ee=E.indexOf(Z.inputSource);if(ee===-1)return;let ye=S[ee];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<S.length;Z++){let ee=E[Z];ee!==null&&(E[Z]=null,S[Z].disconnect(ee))}I=null,U=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(M),f=null,u=null,d=null,s=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ce=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=_.stencil?zi:Yn,Ce=_.stencil?Zs:Un);let ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new on(u.textureWidth,u.textureHeight,{format:cn,type:ln,depthTexture:new Pi(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new on(f.framebufferWidth,f.framebufferHeight,{format:cn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let ee=0;ee<Z.removed.length;ee++){let ye=Z.removed[ee],Ce=E.indexOf(ye);Ce>=0&&(E[Ce]=null,S[Ce].disconnect(ye))}for(let ee=0;ee<Z.added.length;ee++){let ye=Z.added[ee],Ce=E.indexOf(ye);if(Ce===-1){for(let ke=0;ke<S.length;ke++)if(ke>=E.length){E.push(ye),Ce=ke;break}else if(E[ke]===null){E[ke]=ye,Ce=ke;break}if(Ce===-1)break}let xe=S[Ce];xe&&xe.connect(ye)}}let k=new C,H=new C;function W(Z,ee,ye){k.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(ye.matrixWorld);let Ce=k.distanceTo(H),xe=ee.projectionMatrix.elements,ke=ye.projectionMatrix.elements,bt=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),et=(xe[9]+1)/xe[5],ft=(xe[9]-1)/xe[5],Ke=(xe[8]-1)/xe[0],yt=(ke[8]+1)/ke[0],Nt=bt*Ke,rn=bt*yt,Mt=Ce/(-Ke+yt),wt=Mt*-Ke;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Mt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let z=bt+Mt,Gt=$e+Mt,at=Nt-wt,P=rn+(Ce-wt),b=et*$e/Gt*z,G=ft*$e/Gt*z;Z.projectionMatrix.makePerspective(at,P,b,G,z,Gt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),N.near=L.near=A.near=ee,N.far=L.far=A.far=ye,(I!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,U=N.far),N.layers.mask=Z.layers.mask|6,A.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let Ce=Z.parent,xe=N.cameras;ie(N,Ce);for(let ke=0;ke<xe.length;ke++)ie(xe[ke],Ce);xe.length===2?W(N,A,L):N.projectionMatrix.copy(A.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),se(Z,N,Ce)};function se(Z,ee,ye){ye===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let Ie=null;function Le(Z,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ce=!1;ye.length!==N.cameras.length&&(N.cameras.length=0,Ce=!0);for(let $e=0;$e<ye.length;$e++){let et=ye[$e],ft=null;if(f!==null)ft=f.getViewport(et);else{let yt=d.getViewSubImage(u,et);ft=yt.viewport,$e===0&&(e.setRenderTargetTextures(y,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(y))}let Ke=D[$e];Ke===void 0&&(Ke=new Yt,Ke.layers.enable($e),Ke.viewport=new vt,D[$e]=Ke),Ke.matrix.fromArray(et.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(et.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ft.x,ft.y,ft.width,ft.height),$e===0&&(N.matrix.copy(Ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ce===!0&&N.cameras.push(Ke)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let $e=d.getDepthInformation(ye[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let $e=0;$e<ye.length;$e++){let et=ye[$e].camera;if(et){let ft=p[et];ft||(ft=new Rr,p[et]=ft);let Ke=d.getCameraImage(et);ft.sourceTexture=Ke}}}}for(let ye=0;ye<S.length;ye++){let Ce=E[ye],xe=S[ye];Ce!==null&&xe!==void 0&&xe.update(Ce,ee,c||a)}Ie&&Ie(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let qe=new Fd;qe.setAnimationLoop(Le),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}},Wx=new Oe,Hd=new Be;Hd.set(-1,0,0,0,1,0,0,0,1);function Xx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Hd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qx(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let E=S.program;i.uniformBlockBinding(y,E)}function c(y,S){let E=s[y.id];E===void 0&&(m(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",_));let R=S.program;i.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let S=d();y.__bindingPointIndex=S;let E=n.createBuffer(),R=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],E=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,w=E.length;v<w;v++){let A=E[v];if(Array.isArray(A))for(let L=0,D=A.length;L<D;L++)f(A[L],v,L,R);else f(A,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,S,E,R){if(x(y,S,E,R)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let A=0;for(let L=0;L<w.length;L++){let D=w[L],N=p(D);g(D,y.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function x(y,S,E,R){let v=y.value,w=S+"_"+E;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let A=R[w];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(y){let S=y.uniforms,E=0,R=16;for(let w=0,A=S.length;w<A;w++){let L=Array.isArray(S[w])?S[w]:[S[w]];for(let D=0,N=L.length;D<N;D++){let I=L[D],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,V=U.length;F<V;F++){let Y=U[F],k=p(Y),H=E%R,W=H%k.boundary,ie=H+W;E+=W,ie!==0&&R-ie<k.storage&&(E+=R-ie),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=k.storage}}}let v=E%R;return v>0&&(E+=R-v),y.__size=E,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),S}function _(y){let S=y.target;S.removeEventListener("dispose",_);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var Yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function $x(){return Jn===null&&(Jn=new rs(Yx,16,16,Vi,Fn),Jn.name="DFG_LUT",Jn.minFilter=Ct,Jn.magFilter=Ct,Jn.wrapS=qn,Jn.wrapT=qn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var ol=class{constructor(e={}){let{canvas:t=od(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Eo,So,bo]),p=new Set([ln,Un,$s,Zs,yo,vo]),_=new Uint32Array(4),M=new Int32Array(4),y=new C,S=null,E=null,R=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,N=null,I=null,U=null;this._outputColorSpace=Qt;let F=0,V=0,Y=null,k=-1,H=null,W=new vt,ie=new vt,se=null,Ie=new Ue(0),Le=0,qe=t.width,Z=t.height,ee=1,ye=null,Ce=null,xe=new vt(0,0,qe,Z),ke=new vt(0,0,qe,Z),bt=!1,$e=new Vs,et=!1,ft=!1,Ke=new Oe,yt=new C,Nt=new vt,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function wt(){return Y===null?ee:1}let z=i;function Gt(T,O){return t.getContext(T,O)}let at,P,b,G,$,J,re,ce,j,te,he,Ae,pe,ue,Re,Ne,ze,B,de,Q,fe,ve,ne;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),z===null){let O="webgl2";if(z=Gt(O,T),z===null)throw Gt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),Fe("WebGLRenderer: "+T.message),T}function Pe(){at=new t_(z),at.init(),fe=new Vx(z,at),P=new X0(z,at,e,fe),b=new Bx(z,at),P.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),N=z.createFramebuffer(),I=z.createFramebuffer(),U=z.createFramebuffer(),G=new s_(z),$=new wx,J=new zx(z,at,b,$,P,fe,G),re=new e_(A),ce=new am(z),ve=new G0(z,ce),j=new n_(z,ce,G,ve),te=new a_(z,j,ce,ve,G),B=new r_(z,P,J),Re=new q0($),he=new Ex(A,re,at,P,ve,Re),Ae=new Xx(A,$),pe=new Ax,ue=new Nx(at),ze=new H0(A,re,b,te,g,l),Ne=new Ox(A,te,P),ne=new qx(z,G,P,b),de=new W0(z,at,G),Q=new i_(z,at,G),G.programs=he.programs,A.capabilities=P,A.extensions=at,A.properties=$,A.renderLists=pe,A.shadowMap=Ne,A.state=b,A.info=G}x!==ln&&(w=new l_(x,t.width,t.height,o,s,r));let we=new ih(A,z);this.xr=we,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(qe,Z,!1))},this.getSize=function(T){return T.set(qe,Z)},this.setSize=function(T,O,K=!0){if(we.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=T,Z=O,t.width=Math.floor(T*ee),t.height=Math.floor(O*ee),K===!0&&(t.style.width=T+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(qe*ee,Z*ee).floor()},this.setDrawingBufferSize=function(T,O,K){qe=T,Z=O,ee=K,t.width=Math.floor(T*K),t.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(x===ln){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,O,K,X){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,O,K,X),b.viewport(W.copy(xe).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,O,K,X){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,O,K,X),b.scissor(ie.copy(ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){b.setScissorTest(bt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Ce=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let X=0;if(T){let q=!1;if(Y!==null){let _e=Y.texture.format;q=m.has(_e)}if(q){let _e=Y.texture.type,be=p.has(_e),ge=ze.getClearColor(),Se=ze.getClearAlpha(),Te=ge.r,Ye=ge.g,Ze=ge.b;be?(_[0]=Te,_[1]=Ye,_[2]=Ze,_[3]=Se,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Te,M[1]=Ye,M[2]=Ze,M[3]=Se,z.clearBufferiv(z.COLOR,0,M))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),ze.dispose(),pe.dispose(),ue.dispose(),$.dispose(),re.dispose(),te.dispose(),ve.dispose(),ne.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",qh),we.removeEventListener("sessionend",Yh),ji.stop()};function pt(T){T.preventDefault(),Ic("WebGLRenderer: Context Lost."),L=!0}function tt(){Ic("WebGLRenderer: Context Restored."),L=!1;let T=G.autoReset,O=Ne.enabled,K=Ne.autoUpdate,X=Ne.needsUpdate,q=Ne.type;Pe(),G.autoReset=T,Ne.enabled=O,Ne.autoUpdate=K,Ne.needsUpdate=X,Ne.type=q}function Rn(T){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gn(T){let O=T.target;O.removeEventListener("dispose",Gn),$f(O)}function $f(T){Zf(T),$.remove(T)}function Zf(T){let O=$.get(T).programs;O!==void 0&&(O.forEach(function(K){he.releaseProgram(K)}),T.isShaderMaterial&&he.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,X,q,_e){O===null&&(O=rn);let be=q.isMesh&&q.matrixWorld.determinantAffine()<0,ge=jf(T,O,K,X,q);b.setMaterial(X,be);let Se=K.index,Te=1;if(X.wireframe===!0){if(Se=j.getWireframeAttribute(K),Se===void 0)return;Te=2}let Ye=K.drawRange,Ze=K.attributes.position,Ee=Ye.start*Te,nt=(Ye.start+Ye.count)*Te;_e!==null&&(Ee=Math.max(Ee,_e.start*Te),nt=Math.min(nt,(_e.start+_e.count)*Te)),Se!==null?(Ee=Math.max(Ee,0),nt=Math.min(nt,Se.count)):Ze!=null&&(Ee=Math.max(Ee,0),nt=Math.min(nt,Ze.count));let Tt=nt-Ee;if(Tt<0||Tt===1/0)return;ve.setup(q,X,ge,K,Se);let gt,ut=de;if(Se!==null&&(gt=ce.get(Se),ut=Q,ut.setIndex(gt)),q.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*wt()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(q.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),b.setLineWidth(Wt*wt()),q.isLineSegments?ut.setMode(z.LINES):q.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else q.isPoints?ut.setMode(z.POINTS):q.isSprite&&ut.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Wt=q._multiDrawStarts,Me=q._multiDrawCounts,Jt=q._multiDrawCount,Qe=Se?ce.get(Se).bytesPerElement:1,Mn=$.get(X).currentProgram.getUniforms();for(let Wn=0;Wn<Jt;Wn++)Mn.setValue(z,"_gl_DrawID",Wn),ut.render(Wt[Wn]/Qe,Me[Wn])}else if(q.isInstancedMesh)ut.renderInstances(Ee,Tt,q.count);else if(K.isInstancedBufferGeometry){let Wt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Wt);ut.renderInstances(Ee,Tt,Me)}else ut.render(Ee,Tt)};function Xh(T,O,K,X){D!==null&&T.isNodeMaterial&&D.setObject(X,T),et===!0&&Re.setState(T,K,!1),T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,da(T,O,X),T.side=Oi,T.needsUpdate=!0,da(T,O,X),T.side=_n):da(T,O,X)}this.compile=function(T,O,K=null){K===null&&(K=T),D!==null&&D.renderStart(T,O,K),E=ue.get(K),E.init(O),v.push(E),K.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ft=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ft),et===!0&&Re.setGlobalState(this.clippingPlanes,O),D!==null&&Ne.render(E.state.shadowsArray,K,O);let X=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let _e=q.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){let ge=_e[be];Xh(ge,K,O,q),X.add(ge)}else Xh(_e,K,O,q),X.add(_e)}),E=v.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(T,O,K=null){let X=this.compile(T,O,K);return new Promise(q=>{function _e(){if(X.forEach(function(be){let Se=$.get(be).currentProgram;(Se===void 0||Se.isReady())&&X.delete(be)}),X.size===0){q(T);return}setTimeout(_e,10)}at.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ll=null;function Kf(T){Ll&&Ll(T)}function qh(){ji.stop()}function Yh(){ji.start()}let ji=new Fd;ji.setAnimationLoop(Kf),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(T){Ll=T,we.setAnimationLoop(T),T===null?ji.stop():ji.start()},we.addEventListener("sessionstart",qh),we.addEventListener("sessionend",Yh),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,O);let K=we.enabled===!0&&we.isPresenting===!0,X=w!==null&&(Y===null||K)&&w.begin(A,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(O),O=we.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,O,Y),E=ue.get(T,v.length),E.init(O),E.state.textureUnits=J.getTextureUnits(),v.push(E),Ke.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$e.setFromProjectionMatrix(Ke,Ln,O.reversedDepth),ft=this.localClippingEnabled,et=Re.init(this.clippingPlanes,ft),S=pe.get(T,R.length),S.init(),R.push(S),we.enabled===!0&&we.isPresenting===!0){let be=A.xr.getDepthSensingMesh();be!==null&&Nl(be,O,-1/0,A.sortObjects)}Nl(T,O,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(ye,Ce),Mt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Mt&&ze.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Re.beginShadows();let q=E.state.shadowsArray;if(Ne.render(q,T,O),et===!0&&Re.endShadows(),(X&&w.hasRenderPass())===!1){let be=S.opaque,ge=S.transmissive;if(E.setupLights(),O.isArrayCamera){let Se=O.cameras;if(ge.length>0)for(let Te=0,Ye=Se.length;Te<Ye;Te++){let Ze=Se[Te];Zh(be,ge,T,Ze)}Mt&&ze.render(T);for(let Te=0,Ye=Se.length;Te<Ye;Te++){let Ze=Se[Te];$h(S,T,Ze,Ze.viewport)}}else ge.length>0&&Zh(be,ge,T,O),Mt&&ze.render(T),$h(S,T,O)}Y!==null&&V===0&&(J.updateMultisampleRenderTarget(Y),J.updateRenderTargetMipmap(Y)),X&&w.end(A),T.isScene===!0&&T.onAfterRender(A,T,O),ve.resetDefaultState(),k=-1,H=null,v.pop(),v.length>0?(E=v[v.length-1],J.setTextureUnits(E.state.textureUnits),et===!0&&Re.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,D!==null&&D.renderEnd()};function Nl(T,O,K,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum($e)){X&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);let be=te.update(T),ge=T.material;ge.visible&&S.push(T,be,ge,K,Nt.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum($e))){let be=te.update(T),ge=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Nt.copy(be.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(ge)){let Se=be.groups;for(let Te=0,Ye=Se.length;Te<Ye;Te++){let Ze=Se[Te],Ee=ge[Ze.materialIndex];Ee&&Ee.visible&&S.push(T,be,Ee,K,Nt.z,Ze,O)}}else ge.visible&&S.push(T,be,ge,K,Nt.z,null,O)}}let _e=T.children;for(let be=0,ge=_e.length;be<ge;be++)Nl(_e[be],O,K,X)}function $h(T,O,K,X){let{opaque:q,transmissive:_e,transparent:be}=T;E.setupLightsView(K),et===!0&&Re.setGlobalState(A.clippingPlanes,K),X&&b.viewport(W.copy(X)),q.length>0&&ua(q,O,K),_e.length>0&&ua(_e,O,K),be.length>0&&ua(be,O,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Zh(T,O,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Ee=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new on(1,1,{generateMipmaps:!0,type:Ee?Fn:ln,minFilter:Kn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let _e=E.state.transmissionRenderTarget[X.id],be=X.viewport||W;_e.setSize(be.z*A.transmissionResolutionScale,be.w*A.transmissionResolutionScale);let ge=A.getRenderTarget(),Se=A.getActiveCubeFace(),Te=A.getActiveMipmapLevel();A.setRenderTarget(_e),A.getClearColor(Ie),Le=A.getClearAlpha(),Le<1&&A.setClearColor(16777215,.5),A.clear(),Mt&&ze.render(K);let Ye=A.toneMapping;A.toneMapping=Dn;let Ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),et===!0&&Re.setGlobalState(A.clippingPlanes,X),ua(T,K,X),J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let nt=0,Tt=O.length;nt<Tt;nt++){let gt=O[nt],{object:ut,geometry:Wt,material:Me,group:Jt}=gt;if(Me.side===_n&&ut.layers.test(X.layers)){let Qe=Me.side;Me.side=kt,Me.needsUpdate=!0,Kh(ut,K,X,Wt,Me,Jt),Me.side=Qe,Me.needsUpdate=!0,Ee=!0}}Ee===!0&&(J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e))}A.setRenderTarget(ge,Se,Te),A.setClearColor(Ie,Le),Ze!==void 0&&(X.viewport=Ze),A.toneMapping=Ye}function ua(T,O,K){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,_e=T.length;q<_e;q++){let be=T[q],{object:ge,geometry:Se,group:Te}=be,Ye=be.material;Ye.allowOverride===!0&&X!==null&&(Ye=X),ge.layers.test(K.layers)&&Kh(ge,O,K,Se,Ye,Te)}}function Kh(T,O,K,X,q,_e){D!==null&&q.isNodeMaterial&&D.setObject(T,q),T.onBeforeRender(A,O,K,X,q,_e),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(A,O,K,X,T,_e),q.transparent===!0&&q.side===_n&&q.forceSinglePass===!1?(q.side=kt,q.needsUpdate=!0,A.renderBufferDirect(K,O,X,q,T,_e),q.side=Oi,q.needsUpdate=!0,A.renderBufferDirect(K,O,X,q,T,_e),q.side=_n):A.renderBufferDirect(K,O,X,q,T,_e),T.onAfterRender(A,O,K,X,q,_e)}function da(T,O,K){O.isScene!==!0&&(O=rn);let X=$.get(T),q=E.state.lights,_e=E.state.shadowsArray,be=q.state.version,ge=he.getParameters(T,q.state,_e,O,K,E.state.lightProbeGridArray),Se=he.getProgramCacheKey(ge),Te=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let Ye=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=re.get(T.envMap||X.environment,Ye),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Te===void 0&&(T.addEventListener("dispose",Gn),Te=new Map,X.programs=Te);let Ze=Te.get(Se);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===be)return jh(T,ge),Ze}else ge.uniforms=he.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,K,ge),T.onBeforeCompile(ge,A),Ze=he.acquireProgram(ge,Se),Te.set(Se,Ze),X.uniforms=ge.uniforms;let Ee=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=Re.uniform),jh(T,ge),X.needsLights=ep(T),X.lightsStateVersion=be,X.needsLights&&(Ee.ambientLightColor.value=q.state.ambient,Ee.lightProbe.value=q.state.probe,Ee.sunLights.value=q.state.sun,Ee.sunLightShadows.value=q.state.sunShadow,Ee.directionalLights.value=q.state.directional,Ee.directionalLightShadows.value=q.state.directionalShadow,Ee.spotLights.value=q.state.spot,Ee.spotLightShadows.value=q.state.spotShadow,Ee.rectAreaLights.value=q.state.rectArea,Ee.ltc_1.value=q.state.rectAreaLTC1,Ee.ltc_2.value=q.state.rectAreaLTC2,Ee.pointLights.value=q.state.point,Ee.pointLightShadows.value=q.state.pointShadow,Ee.hemisphereLights.value=q.state.hemi,Ee.sunShadowMatrix.value=q.state.sunShadowMatrix,Ee.sunShadowCascade.value=q.state.sunShadowCascade,Ee.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ee.spotLightMatrix.value=q.state.spotLightMatrix,Ee.spotLightMap.value=q.state.spotLightMap,Ee.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Ze,X.uniformsList=null,Ze}function Jh(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function jh(T,O){let K=$.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Jf(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let K=0,X=T.length;K<X;K++){let q=T[K];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function jf(T,O,K,X,q){O.isScene!==!0&&(O=rn),J.resetTextureUnits();let _e=O.fog,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,ge=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Je.workingColorSpace,Se=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Te=re.get(X.envMap||be,Se),Ye=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ee=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,Tt=!!K.morphAttributes.color,gt=Dn;X.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(gt=A.toneMapping);let ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Wt=ut!==void 0?ut.length:0,Me=$.get(X),Jt=E.state.lights;if(et===!0&&(ft===!0||T!==H)){let mt=T===H&&X.id===k;Re.setState(X,T,mt)}let Qe=!1;X.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Jt.state.version||Me.outputColorSpace!==ge||q.isBatchedMesh&&Me.batching===!1||!q.isBatchedMesh&&Me.batching===!0||q.isBatchedMesh&&Me.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Me.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Me.instancing===!1||!q.isInstancedMesh&&Me.instancing===!0||q.isSkinnedMesh&&Me.skinning===!1||!q.isSkinnedMesh&&Me.skinning===!0||q.isInstancedMesh&&Me.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Me.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Me.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Me.instancingMorph===!1&&q.morphTexture!==null||Me.envMap!==Te||X.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Re.numPlanes||Me.numIntersection!==Re.numIntersection)||Me.vertexAlphas!==Ye||Me.vertexTangents!==Ze||Me.morphTargets!==Ee||Me.morphNormals!==nt||Me.morphColors!==Tt||Me.toneMapping!==gt||Me.morphTargetsCount!==Wt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Me.__version=X.version);let Mn=Me.currentProgram;Qe===!0&&(Mn=da(X,O,q),D&&X.isNodeMaterial&&D.onUpdateProgram(X,Mn,Me));let Wn=!1,yi=!1,ps=!1,lt=Mn.getUniforms(),St=Me.uniforms;if(b.useProgram(Mn.program)&&(Wn=!0,yi=!0,ps=!0),X.id!==k&&(k=X.id,yi=!0),Me.needsLights){let mt=Jf(E.state.lightProbeGridArray,q);Me.lightProbeGrid!==mt&&(Me.lightProbeGrid=mt,yi=!0)}if(Wn||H!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(z,"projectionMatrix",T.projectionMatrix),lt.setValue(z,"viewMatrix",T.matrixWorldInverse);let Mi=lt.map.cameraPosition;Mi!==void 0&&Mi.setValue(z,yt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&lt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,yi=!0,ps=!0)}if(Me.needsLights&&(Jt.state.sunShadowMap.length>0&&lt.setValue(z,"sunShadowMap",Jt.state.sunShadowMap,J),Jt.state.directionalShadowMap.length>0&&lt.setValue(z,"directionalShadowMap",Jt.state.directionalShadowMap,J),Jt.state.spotShadowMap.length>0&&lt.setValue(z,"spotShadowMap",Jt.state.spotShadowMap,J),Jt.state.pointShadowMap.length>0&&lt.setValue(z,"pointShadowMap",Jt.state.pointShadowMap,J)),q.isSkinnedMesh){lt.setOptional(z,q,"bindMatrix"),lt.setOptional(z,q,"bindMatrixInverse");let mt=q.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),lt.setValue(z,"boneTexture",mt.boneTexture,J))}q.isBatchedMesh&&(lt.setOptional(z,q,"batchingTexture"),lt.setValue(z,"batchingTexture",q._matricesTexture,J),lt.setOptional(z,q,"batchingIdTexture"),lt.setValue(z,"batchingIdTexture",q._indirectTexture,J),lt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(z,"batchingColorTexture",q._colorsTexture,J));let vi=K.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&B.update(q,K,Mn),(yi||Me.receiveShadow!==q.receiveShadow)&&(Me.receiveShadow=q.receiveShadow,lt.setValue(z,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(St.envMapIntensity.value=O.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=$x()),yi){if(lt.setValue(z,"toneMappingExposure",A.toneMappingExposure),Me.needsLights&&Qf(St,ps),_e&&X.fog===!0&&Ae.refreshFogUniforms(St,_e),Ae.refreshMaterialUniforms(St,X,ee,Z,E.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){let mt=Me.lightProbeGrid;St.probesSH.value=mt.texture,St.probesMin.value.copy(mt.boundingBox.min),St.probesMax.value.copy(mt.boundingBox.max),St.probesResolution.value.copy(mt.resolution)}Qs.upload(z,Jh(Me),St,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qs.upload(z,Jh(Me),St,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(z,"center",q.center),lt.setValue(z,"modelViewMatrix",q.modelViewMatrix),lt.setValue(z,"normalMatrix",q.normalMatrix),lt.setValue(z,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let mt=X.uniformsGroups;for(let Mi=0,ms=mt.length;Mi<ms;Mi++){let eu=mt[Mi];ne.update(eu,Mn),ne.bind(eu,Mn)}}return Mn}function Qf(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function ep(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,O,K){let X=$.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=O,$.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let K=$.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,K=0){Y=T,F=O,V=K;let X=null,q=!1,_e=!1;if(T){let ge=$.get(T);if(ge.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),W.copy(T.viewport),ie.copy(T.scissor),se=T.scissorTest,b.viewport(W),b.scissor(ie),b.setScissorTest(se),k=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(ge.__hasExternalTextures)J.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ye=T.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&$.has(Ye)&&(T.width!==Ye.image.width||T.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(_e=!0);let Te=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Te[O])?X=Te[O][K]:X=Te[O],q=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?X=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Te)?X=Te[K]:X=Te,W.copy(T.viewport),ie.copy(T.scissor),se=T.scissorTest}else W.copy(xe).multiplyScalar(ee).floor(),ie.copy(ke).multiplyScalar(ee).floor(),se=bt;if(K!==0&&(X=N),b.bindFramebuffer(z.FRAMEBUFFER,X)&&b.drawBuffers(T,X),b.viewport(W),b.scissor(ie),b.setScissorTest(se),q){let ge=$.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,K)}else if(_e){let ge=O;for(let Se=0;Se<T.textures.length;Se++){let Te=$.get(T.textures[Se]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Se,Te.__webglTexture,K,ge)}}else if(T!==null&&K!==0){let ge=$.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,K)}k=-1};function Qh(T){let O=$.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=P.textureFormatReadable(T.format),O.__typeReadable=P.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,K,X,q,_e,be,ge=0){if(!(T&&T.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){b.bindFramebuffer(z.FRAMEBUFFER,Se);try{let Te=T.textures[ge],Ye=Te.format,Ze=Te.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ee=Qh(Te);if(Ee.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&K>=0&&K<=T.height-q&&z.readPixels(O,K,X,q,fe.convert(Ye),fe.convert(Ze),_e)}finally{let Te=Y!==null?$.get(Y).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,X,q,_e,be,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se)if(O>=0&&O<=T.width-X&&K>=0&&K<=T.height-q){b.bindFramebuffer(z.FRAMEBUFFER,Se);let Te=T.textures[ge],Ye=Te.format,Ze=Te.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Ee=Qh(Te);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.bufferData(z.PIXEL_PACK_BUFFER,_e.byteLength,z.STREAM_READ),z.readPixels(O,K,X,q,fe.convert(Ye),fe.convert(Ze),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Tt=Y!==null?$.get(Y).__webglFramebuffer:null;b.bindFramebuffer(z.FRAMEBUFFER,Tt);let gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await cd(z,gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_e),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(nt),z.deleteSync(gt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){let X=Math.pow(2,-K),q=Math.floor(T.image.width*X),_e=Math.floor(T.image.height*X),be=O!==null?O.x:0,ge=O!==null?O.y:0;J.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,be,ge,q,_e),b.unbindTexture()},this.copyTextureToTexture=function(T,O,K=null,X=null,q=0,_e=0){let be,ge,Se,Te,Ye,Ze,Ee,nt,Tt,gt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(K!==null)be=K.max.x-K.min.x,ge=K.max.y-K.min.y,Se=K.isBox3?K.max.z-K.min.z:1,Te=K.min.x,Ye=K.min.y,Ze=K.isBox3?K.min.z:0;else{let St=Math.pow(2,-q);be=Math.floor(gt.width*St),ge=Math.floor(gt.height*St),T.isDataArrayTexture?Se=gt.depth:T.isData3DTexture?Se=Math.floor(gt.depth*St):Se=1,Te=0,Ye=0,Ze=0}X!==null?(Ee=X.x,nt=X.y,Tt=X.z):(Ee=0,nt=0,Tt=0);let ut=fe.convert(O.format),Wt=fe.convert(O.type),Me;O.isData3DTexture?(J.setTexture3D(O,0),Me=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Me=z.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Me=z.TEXTURE_2D),b.activeTexture(z.TEXTURE0),b.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let Jt=b.getParameter(z.UNPACK_ROW_LENGTH),Qe=b.getParameter(z.UNPACK_IMAGE_HEIGHT),Mn=b.getParameter(z.UNPACK_SKIP_PIXELS),Wn=b.getParameter(z.UNPACK_SKIP_ROWS),yi=b.getParameter(z.UNPACK_SKIP_IMAGES);b.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),b.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(z.UNPACK_SKIP_IMAGES,Ze);let ps=T.isDataArrayTexture||T.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let St=$.get(T),vi=$.get(O),mt=$.get(St.__renderTarget),Mi=$.get(vi.__renderTarget);b.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ms=0;ms<Se;ms++)ps&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(T).__webglTexture,q,Ze+ms),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(O).__webglTexture,_e,Tt+ms)),z.blitFramebuffer(Te,Ye,be,ge,Ee,nt,be,ge,z.DEPTH_BUFFER_BIT,z.NEAREST);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||$.has(T)){let St=$.get(T),vi=$.get(O);b.bindFramebuffer(z.READ_FRAMEBUFFER,I),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let mt=0;mt<Se;mt++)ps?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,q,Ze+mt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,q),lt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vi.__webglTexture,_e,Tt+mt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vi.__webglTexture,_e),q!==0?z.blitFramebuffer(Te,Ye,be,ge,Ee,nt,be,ge,z.COLOR_BUFFER_BIT,z.NEAREST):lt?z.copyTexSubImage3D(Me,_e,Ee,nt,Tt+mt,Te,Ye,be,ge):z.copyTexSubImage2D(Me,_e,Ee,nt,Te,Ye,be,ge);b.bindFramebuffer(z.READ_FRAMEBUFFER,null),b.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else lt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Me,_e,Ee,nt,Tt,be,ge,Se,ut,Wt,gt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Me,_e,Ee,nt,Tt,be,ge,Se,ut,gt.data):z.texSubImage3D(Me,_e,Ee,nt,Tt,be,ge,Se,ut,Wt,gt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_e,Ee,nt,be,ge,ut,Wt,gt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_e,Ee,nt,gt.width,gt.height,ut,gt.data):z.texSubImage2D(z.TEXTURE_2D,_e,Ee,nt,be,ge,ut,Wt,gt);b.pixelStorei(z.UNPACK_ROW_LENGTH,Jt),b.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(z.UNPACK_SKIP_PIXELS,Mn),b.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),b.pixelStorei(z.UNPACK_SKIP_IMAGES,yi),_e===0&&O.generateMipmaps&&z.generateMipmap(Me),b.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){F=0,V=0,Y=null,b.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function Wd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new ct,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Gd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let g=Gd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Gd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new en(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function hl(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,M=o.length;_<M;_++){let y=o[_],S=n.attributes[y];l[y]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let E=n.morphAttributes[y];E&&(c[y]||(c[y]=[]),E.forEach((R,v)=>{let w=new R.array.constructor(R.count*R.itemSize);c[y][v]=new R.constructor(w,R.itemSize,R.normalized)}))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=f*x;for(let _=0;_<r;_++){let M=i?i.getX(_):_,y="";for(let S=0,E=o.length;S<E;S++){let R=o[S],v=n.getAttribute(R),w=v.itemSize;for(let A=0;A<w;A++)y+=`${Math.trunc(v[d[A]](M)*x+m)},`}if(y in t)h.push(t[y]);else{for(let S=0,E=o.length;S<E;S++){let R=o[S],v=n.getAttribute(R),w=n.morphAttributes[R],A=v.itemSize,L=l[R],D=c[R];for(let N=0;N<A;N++){let I=d[N],U=u[N];if(L[U](a,v[I](M)),w)for(let F=0,V=w.length;F<V;F++)D[F][U](a,w[F][I](M))}}t[y]=a,h.push(a),a++}}let p=n.clone();for(let _ in n.attributes){let M=l[_];if(p.setAttribute(_,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),_ in c)for(let y=0;y<c[_].length;y++){let S=c[_][y];p.morphAttributes[_][y]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var ul=new Map;function Zx(n,e){let t=ul.get(n);return t||(t={wert:e(),zaehler:0},ul.set(n,t)),t.zaehler++,t.wert}function Kx(n){let e=ul.get(n);e&&(e.zaehler--,e.zaehler<=0&&(ul.delete(n),qd(e.wert)))}function qd(n){if(n){if(n.isMaterial)for(let e of["normalMap","iridescenceThicknessMap","roughnessMap","map"])n[e]&&n[e].isTexture&&n[e].dispose();typeof n.dispose=="function"&&n.dispose()}}var nr=class{constructor(){this.schluessel=[],this.eigene=new Set,this.entsorgt=!1}geteilt(e,t){return this.schluessel.push(e),Zx(e,t)}eigen(e){return e&&this.eigene.add(e),e}dispose(){if(!this.entsorgt){this.entsorgt=!0;for(let e of this.schluessel)Kx(e);for(let e of this.eigene)qd(e);this.schluessel.length=0,this.eigene.clear()}}};function On(n,e,t,i){return n.includes(e)?n.replace(e,t):(console.warn(`[schmuck] Shader-Stelle '${e}' fehlt (${i}); Effekt deaktiviert.`),n)}var Zr={gold:{name:"Gold",farbe:[1,.66,.24],agx:[1,.75,.2],kante:[1,.87,.6],tiefe:.75,rauheit:.11,klarlack:0},silber:{name:"Silber",farbe:[.95,.94,.92],kante:[1,1,1],tiefe:0,rauheit:.12,klarlack:.1},rosegold:{name:"Ros\xE9gold",farbe:[1,.64,.5],agx:[1,.68,.5],kante:[1,.86,.8],tiefe:.6,rauheit:.12,klarlack:0},weissgold:{name:"Wei\xDFgold",farbe:[.9,.89,.86],kante:[1,1,.98],tiefe:.1,rauheit:.11,klarlack:.1}};function dl(n){let e=Zr[n]||Zr.gold;return"#"+new Ue().setRGB(e.farbe[0]*.8,e.farbe[1]*.8,e.farbe[2]*.8).getHexString()}function Ot(n,e="gold",t="poliert"){let i=Zr[e]?e:"gold";return n.geteilt(`metall:${i}:${t}`,()=>Jx(Zr[i],t,i))}function Jx(n,e="poliert",t="metall"){let i=new di({name:`metall-${t}-${e}`,metalness:1,roughness:n.rauheit,clearcoat:n.klarlack||0,clearcoatRoughness:.04,envMapIntensity:1});i.color.setRGB(n.farbe[0],n.farbe[1],n.farbe[2]),i.userData.metallName=t,e==="matt"?(i.roughness=Math.max(.3,n.rauheit*2.6),i.clearcoat=0):e==="schlange"&&(i.normalMap=jx(),i.normalScale.set(.9,.9),i.roughness=n.rauheit+.02);let s=n.kante||[1,1,1],r=Math.max(...n.farbe),a={metallTon:{value:new C(n.farbe[0]/r,n.farbe[1]/r,n.farbe[2]/r)},metallKante:{value:new C(...s)},metallTiefe:{value:n.tiefe??0},metallAgx:{value:new C(1,1,1)}};return n.agx&&a.metallAgx.value.set(n.agx[0]/n.farbe[0],n.agx[1]/n.farbe[1],n.agx[2]/n.farbe[2]),i.userData.metall=a,i.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.toneMapping===Ys&&(o.defines={...o.defines,METALL_AGX:""}),o.fragmentShader=On(o.fragmentShader,"#include <common>",`#include <common>
uniform vec3 metallAgx;
uniform vec3 metallTon;
uniform vec3 metallKante;
uniform float metallTiefe;`,"metall"),o.fragmentShader=On(o.fragmentShader,"#include <transmission_fragment>",`#include <transmission_fragment>
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
}`,"metall")},i.customProgramCacheKey=()=>"schmuck-metall-1",i}function jx(){let t=new Float32Array(2048);for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=l/64,h=o/32,d=(c*2+Math.abs(h-.5)*1.2)%1;t[o*64+l]=Math.sqrt(Math.max(0,d))*(1-d*.25)}let i=new Uint8Array(2048*4),s=2.2,r=new C;for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=(f,g)=>t[(g+32)%32*64+(f+64)%64],h=(c(l+1,o)-c(l-1,o))*s,d=(c(l,o+1)-c(l,o-1))*s*.5;r.set(-h,-d,1).normalize();let u=(o*64+l)*4;i[u]=Math.round((r.x*.5+.5)*255),i[u+1]=Math.round((r.y*.5+.5)*255),i[u+2]=Math.round((r.z*.5+.5)*255),i[u+3]=255}let a=new rs(i,64,32,cn);return a.wrapS=a.wrapT=Ns,a.magFilter=Ct,a.minFilter=Kn,a.generateMipmaps=!0,a.colorSpace=kn,a.needsUpdate=!0,a}var sh={weiss:{name:"Wei\xDF",grund:[.63,.59,.56],rand:[.42,.36,.44],orientA:[1,.72,.82],orientB:[.82,1,.9],orient:1,irid:.5,film:[300,520]},creme:{name:"Creme",grund:[.62,.53,.42],rand:[.46,.37,.34],orientA:[1,.78,.76],orientB:[.9,.98,.82],orient:.8,irid:.45,film:[320,540]},rose:{name:"Ros\xE9",grund:[.64,.5,.49],rand:[.46,.33,.4],orientA:[1,.7,.84],orientB:[.86,.94,.98],orient:.9,irid:.5,film:[300,520]},champagner:{name:"Champagner",grund:[.56,.43,.3],rand:[.46,.34,.26],orientA:[1,.8,.68],orientB:[.88,.94,.78],orient:.8,irid:.45,film:[340,560]},grau:{name:"Grau",grund:[.26,.27,.3],rand:[.62,.6,.7],orientA:[.9,.8,1],orientB:[.78,1,.88],orient:.8,irid:.45,film:[280,500]}},$r=3,Xd=[{glanz:0,phase:0,orient:1,film:0},{glanz:.012,phase:.37,orient:.85,film:30},{glanz:-.008,phase:.71,orient:1.15,film:-25}];function us(n,e="weiss",t=0){let i=sh[e]?e:"weiss",s=(Math.round(t)%$r+$r)%$r;return n.geteilt(`perle:${i}:${s}`,()=>Qx(sh[i],s,i))}function Qx(n,e=0,t="perle"){let i=Xd[e%Xd.length],s=n.film||[300,520],r=1.53,a=new di({name:`perle-${t}-${e}`,metalness:0,roughness:n.rauheit??.3,clearcoat:1,clearcoatRoughness:Math.max(0,(n.glanz??.035)+i.glanz),iridescence:n.irid??.5,iridescenceIOR:n.filmIor??1.6,iridescenceThicknessRange:[s[0]+i.film,s[1]+i.film],ior:r,specularIntensity:1,envMapIntensity:1});a.color.setRGB(n.grund[0],n.grund[1],n.grund[2]);let o=((r-1)/(r+1))**2;a.specularColor.setScalar((n.spiegel??.15)/o);let l={perlRand:{value:new C(...n.rand)},perlOrientA:{value:new C(...n.orientA)},perlOrientB:{value:new C(...n.orientB)},perlOrient:{value:(n.orient??.5)*i.orient},perlPhase:{value:i.phase},perlDurch:{value:n.durch??.2},perlMuster:{value:n.muster??.55},perlRandBreite:{value:n.randBreite??.95}};return a.userData.perle=l,a.onBeforeCompile=c=>{Object.assign(c.uniforms,l),c.toneMapping===Ys&&(c.defines={...c.defines,PERLE_AGX:""}),c.vertexShader=On(c.vertexShader,"#include <common>",`#include <common>
varying vec3 vPerlOrt;`,"perle"),c.vertexShader=On(c.vertexShader,"#include <begin_vertex>",`#include <begin_vertex>
vPerlOrt = position;
#ifdef USE_INSTANCING
  vPerlOrt += instanceMatrix[3].xyz * 1.7;
#endif`,"perle"),c.fragmentShader=On(c.fragmentShader,"#include <common>",`#include <common>
uniform vec3 perlRand;
uniform vec3 perlOrientA;
uniform vec3 perlOrientB;
uniform float perlOrient;
uniform float perlPhase;
uniform float perlDurch;
uniform float perlMuster;
uniform float perlRandBreite;
varying vec3 vPerlOrt;`,"perle");let h=Ge.lights_physical_fragment.replace("material.iridescenceThickness = iridescenceThicknessMaximum;",`{
        vec3 q = vPerlOrt * perlMuster * 1.3 + perlPhase * 5.0;
        float t = 0.5 + 0.25 * sin( q.x * 1.7 + sin( q.y * 2.3 + q.z ) * 1.5 ) + 0.25 * sin( q.z * 2.1 - q.y * 1.3 + perlPhase * 9.0 );
        material.iridescenceThickness = mix( iridescenceThicknessMinimum, iridescenceThicknessMaximum, t );
      }`);c.fragmentShader=On(c.fragmentShader,"#include <lights_physical_fragment>",h,"perle"),c.fragmentShader=On(c.fragmentShader,"#include <aomap_fragment>",`#include <aomap_fragment>
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
  // Durchscheinen: Licht aus der Umgebung hinter der Perle tritt weich aus (Mitte leuchtet)
  #ifdef USE_ENVMAP
    vec3 pIrr = getIBLIrradiance( normalize( pN * 0.5 - pV ) ) * RECIPROCAL_PI;
    reflectedLight.indirectDiffuse += pIrr * diffuseColor.rgb * perlDurch * ( 0.35 + 0.65 * pNdV ) * mix( vec3( 1.0 ), orient, 0.5 );
  #endif
  // Spiegelung der Grundschicht leicht im Orient getoent
  reflectedLight.indirectSpecular *= mix( vec3( 1.0 ), orient, orientMenge * 0.6 );
}`,"perle")},a.customProgramCacheKey=()=>"schmuck-perle-1",a}function Yd(n,e=new Ue){let t=1-n()*.08,i=(n()-.5)*.06,s=(n()-.5)*.04;return e.setRGB(t*(1+i*.5+s),t*(1-s*.3),t*(1-i))}var rh={diamant:{name:"Diamant",farbe:"#ffffff",ior:2.42,dispersion:4,daempfung:null},zirkonia:{name:"Zirkonia",farbe:"#ffffff",ior:2.42,dispersion:5,daempfung:null},saphir:{name:"Saphir",farbe:"#1d3fae",ior:1.77,dispersion:1.2,daempfung:1.2},rubin:{name:"Rubin",farbe:"#b0102c",ior:1.77,dispersion:1.2,daempfung:1.2},smaragd:{name:"Smaragd",farbe:"#0f7a45",ior:1.58,dispersion:.8,daempfung:1.4}};function pi(n,e="zirkonia",t=null){let i=rh[e]?e:"zirkonia",s=(t||rh[i].farbe).toLowerCase();return n.geteilt(`stein:${i}:${s}`,()=>ey(i,s))}function ey(n,e){let t=rh[n],i=e!=="#ffffff",s=new di({name:`stein-${n}`,metalness:0,roughness:.04,ior:Math.min(2.333,t.ior),specularIntensity:1,envMapIntensity:1});s.color=new Ue(e);let r={steinIor:{value:t.ior},steinFeuer:{value:t.dispersion*.02},steinBrillanz:{value:i?1.4:1.5},steinKontrast:{value:i?.6:.9}};return s.userData.stein=r,s.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=On(a.vertexShader,"#include <common>",`#include <common>
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`,"stein"),a.vertexShader=On(a.vertexShader,"#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
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
}`,"stein"),a.fragmentShader=On(a.fragmentShader,"#include <common>",`#include <common>
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
}`,"stein"),a.fragmentShader=On(a.fragmentShader,"#include <opaque_fragment>",`
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
#include <opaque_fragment>`,"stein")},s.customProgramCacheKey=()=>"schmuck-stein-1",s}var ht=Math.PI,Bt=Math.PI*2,xn=new C,ty=new C,ny=new C,$d=new Oe;function Kr(n=1){let e=(Math.floor(n*9973)^2654435769)>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Jd(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e5}function iy(n,e=new C){let t=n()*2-1,i=n()*Bt,s=Math.sqrt(1-t*t);return e.set(s*Math.cos(i),s*Math.sin(i),t)}function Zd(n,{wellen:e=8,freqMin:t=.5,freqMax:i=1.5}={}){let s=[],r=0;for(let o=0;o<e;o++){let l=t+(i-t)*n(),c=1/l;s.push({d:iy(n),f:l*ht,p:n()*Bt,a:c}),r+=c*c*.5}let a=1/Math.sqrt(r);return(o,l,c)=>{let h=0;for(let d of s)h+=d.a*Math.sin(d.f*(d.d.x*o+d.d.y*l+d.d.z*c)+d.p);return h*a}}var hn=class{constructor(e,{geschlossen:t=!1,normalen:i=null}={}){this.punkte=e,this.geschlossen=t;let s=e.length;this.anzahlSeg=t?s:s-1,this.s=new Float64Array(this.anzahlSeg+1);for(let r=0;r<this.anzahlSeg;r++)this.s[r+1]=this.s[r]+e[r].distanceTo(e[(r+1)%s]);this.laenge=this.s[this.anzahlSeg],this.tangenten=oh(e,t),i?this.normalen=i.map((r,a)=>{let o=this.tangenten[a];return r.clone().addScaledVector(o,-r.dot(o)).normalize()}):this.normalen=jd(e,this.tangenten,t)}_ort(e){let t=this.laenge;this.geschlossen?e=(e%t+t)%t:e=Math.min(Math.max(e,0),t);let i=0,s=this.anzahlSeg;for(;s-i>1;){let a=i+s>>1;this.s[a]<=e?i=a:s=a}let r=this.s[i+1]-this.s[i];return{i,j:(i+1)%this.punkte.length,t:r>0?(e-this.s[i])/r:0}}punkt(e,t=new C){let i=this._ort(e);return t.lerpVectors(this.punkte[i.i],this.punkte[i.j],i.t)}tangente(e,t=new C){let i=this._ort(e);return t.lerpVectors(this.tangenten[i.i],this.tangenten[i.j],i.t).normalize()}normale(e,t=new C){let i=this._ort(e);t.lerpVectors(this.normalen[i.i],this.normalen[i.j],i.t);let s=this.tangente(e,ny);return t.addScaledVector(s,-t.dot(s)).normalize()}abtasten(e,t,i){let s=Math.max(2,Math.ceil(Math.abs(t-e)/i)+1),r=[],a=[];for(let o=0;o<s;o++){let l=e+(t-e)*(o/(s-1));r.push(this.punkt(l)),a.push(this.normale(l))}return{punkte:r,normalen:a}}};function oh(n,e){let t=n.length,i=[];for(let s=0;s<t;s++){let r,a;e?(r=n[(s-1+t)%t],a=n[(s+1)%t]):(r=n[Math.max(0,s-1)],a=n[Math.min(t-1,s+1)]);let o=new C().subVectors(a,r);o.lengthSq()<1e-20&&o.set(0,1,0),i.push(o.normalize())}return i}function sy(n){let e=Math.abs(n.x)<.9?new C(1,0,0):new C(0,1,0);return e.addScaledVector(n,-e.dot(n)).normalize()}function jd(n,e,t,i=null){let s=n.length,r=new Array(s),a=i?i.clone():sy(e[0]);r[0]=a.addScaledVector(e[0],-a.dot(e[0])).normalize();let o=(l,c,h,d,u)=>{let f=xn.subVectors(h,c),g=f.dot(f);if(g<1e-20)return l.clone();let x=l.clone().addScaledVector(f,-2/g*f.dot(l)),m=d.clone().addScaledVector(f,-2/g*f.dot(d)),p=ty.subVectors(u,m),_=p.dot(p);return _<1e-20?x:x.addScaledVector(p,-2/_*p.dot(x))};for(let l=0;l<s-1;l++)r[l+1]=o(r[l],n[l],n[l+1],e[l],e[l+1]).normalize();if(t&&s>2){let l=o(r[s-1],n[s-1],n[0],e[s-1],e[0]).normalize(),c=e[0],h=Math.atan2(xn.crossVectors(l,r[0]).dot(c),l.dot(r[0])),d=new dt;for(let u=1;u<s;u++)d.setFromAxisAngle(e[u],h*(u/s)),r[u].applyQuaternion(d).normalize()}return r}function Qd(n,e,t=!1){let i=new hn(n,{geschlossen:t,normalen:n.map(()=>new C(0,0,1))}),s=[],r=t?e:e-1;for(let a=0;a<e;a++)s.push(i.punkt(i.laenge*(a/r)));return s}function Bn(n,{radius:e=.5,ellipse:t=[1,1],segmente:i=8,geschlossen:s=!1,kappen:r="rund",normalen:a=null,uvLaenge:o=0,uvUmfang:l=1,winkel0:c=0}={}){let h=n,d=a,u=oh(n,s),f,g;d?g=d.map((k,H)=>k.clone().addScaledVector(u[H],-k.dot(u[H])).normalize()):g=jd(n,u,s),f=u,s&&(h=[...n,n[0]],f=[...u,u[0]],g=[...g,g[0]]);let x=h.length,m=new Float64Array(x);for(let k=1;k<x;k++)m[k]=m[k-1]+h[k].distanceTo(h[k-1]);let p=m[x-1]||1,_=new Float64Array(x);for(let k=0;k<x;k++)_[k]=typeof e=="function"?e(s?k%n.length:k,m[k]/p):e;let M=i,y=[],S=[],E=[],R=[],v=new C,w=new C,A=new C,L=[],D=(k,H,W,ie,se,Ie,Le=0,qe=1)=>{v.crossVectors(H,W);let Z=y.length/3,ee=ie*t[0]*qe,ye=ie*t[1]*qe;for(let Ce=0;Ce<=M;Ce++){let xe=c+Ce/M*Bt,ke=Math.cos(xe),bt=Math.sin(xe);A.copy(k).addScaledVector(W,ke*ee).addScaledVector(v,bt*ye),y.push(A.x,A.y,A.z),w.set(0,0,0).addScaledVector(W,ke/Math.max(t[0],1e-6)).addScaledVector(v,bt/Math.max(t[1],1e-6)).normalize(),Le!==0?w.multiplyScalar(Math.cos(Le)).addScaledVector(H,Math.sin(Le)):se&&w.addScaledVector(H,-se),w.normalize(),S.push(w.x,w.y,w.z),E.push(Ie,Ce/M*l)}return L.push(Z),Z},N=(k,H)=>{for(let W=0;W<M;W++){let ie=k+W,se=k+W+1,Ie=H+W,Le=H+W+1;R.push(ie,se,Ie,se,Le,Ie)}},I=k=>o>0?k/o:k/p,U=!s,F=Math.max(2,Math.round(M/2)),V=-1;if(U&&r==="rund"){let k=f[0];for(let H=F;H>=1;H--){let W=H/F*(ht/2),ie=xn.copy(h[0]).addScaledVector(k,-_[0]*Math.sin(W)*Math.max(t[0],t[1])*.9),se=D(ie,k,g[0],_[0],0,I(0),-W,Math.cos(W));V>=0&&N(V,se),V=se}}else if(U&&r==="flach"){let k=y.length/3;y.push(h[0].x,h[0].y,h[0].z),S.push(-f[0].x,-f[0].y,-f[0].z),E.push(I(0),0);let H=D(h[0],f[0],g[0],_[0],0,I(0),-ht/2,1);for(let W=0;W<M;W++)R.push(k,H+W+1,H+W);V=-1}for(let k=0;k<x;k++){let H=Math.max(0,k-1),W=Math.min(x-1,k+1),ie=m[W]-m[H],se=ie>1e-9?(_[W]-_[H])/ie:0,Ie=D(h[k],f[k],g[k],_[k],se,I(m[k]));V>=0&&N(V,Ie),V=Ie}if(U&&r==="rund"){let k=f[x-1];for(let H=1;H<=F;H++){let W=H/F*(ht/2),ie=xn.copy(h[x-1]).addScaledVector(k,_[x-1]*Math.sin(W)*Math.max(t[0],t[1])*.9),se=D(ie,k,g[x-1],_[x-1],0,I(p),W,Math.cos(W));N(V,se),V=se}}else if(U&&r==="flach"){let k=D(h[x-1],f[x-1],g[x-1],_[x-1],0,I(p),ht/2,1),H=y.length/3;y.push(h[x-1].x,h[x-1].y,h[x-1].z),S.push(f[x-1].x,f[x-1].y,f[x-1].z),E.push(I(p),0);for(let W=0;W<M;W++)R.push(H,k+W,k+W+1)}let Y=new ct;return Y.setAttribute("position",new He(y,3)),Y.setAttribute("normal",new He(S,3)),Y.setAttribute("uv",new He(E,2)),Y.setIndex(R),Y}function ef(n,e,{segmente:t=8,aufloesung:i=.25,kappen:s="rund",geschlossen:r=!1}={}){let a=new Ii(n,r,"centripetal"),o=Math.max(8,Math.ceil(a.getLength()/i)),l=a.getSpacedPoints(o);return r&&l.pop(),Bn(l,{radius:e,segmente:t,kappen:s,geschlossen:r})}function yn(n){let e=n.filter(Boolean).map(i=>{let s=i;if(!s.index){let r=s.attributes.position.count,a=new Array(r);for(let o=0;o<r;o++)a[o]=o;s.setIndex(a)}s.attributes.uv||s.setAttribute("uv",new He(new Float32Array(s.attributes.position.count*2),2));for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);return s.morphAttributes={},s});if(e.length===1)return e[0];let t=Wd(e,!1);for(let i of e)i.dispose();return t}function ry(n,e,t,i){let s=n.attributes.position,r=n.attributes.normal;for(let a=0;a<s.count;a++)s.setXYZ(a,s.getX(a)*e,s.getY(a)*t,s.getZ(a)*i),r&&(xn.set(r.getX(a)/e,r.getY(a)/t,r.getZ(a)/i).normalize(),r.setXYZ(a,xn.x,xn.y,xn.z));return s.needsUpdate=!0,r&&(r.needsUpdate=!0),n}function tf(n,e=48){let t=n.map(([s,r])=>new ae(Math.max(s,0),r)),i=new Gs(t,e);return i.rotateX(ht/2),i}function mi(n,{mitte:e=new ae,hoehe:t=1,rueckHoehe:i=.4,ringe:s=12,form:r=.5}={}){let a=n.length,o=[],l=[],c=s,h=_=>Math.sin(_/c*(ht/2)),d=_=>Math.pow(Math.max(0,1-_*_),r);o.push(e.x,e.y,t);let u=[];for(let _=1;_<=c;_++){let M=h(_);u.push(o.length/3);for(let y=0;y<a;y++){let S=n[y];o.push(e.x+(S.x-e.x)*M,e.y+(S.y-e.y)*M,t*d(M))}}let f=[];for(let _=c-1;_>=1;_--){let M=h(_);f.push(o.length/3);for(let y=0;y<a;y++){let S=n[y];o.push(e.x+(S.x-e.x)*M,e.y+(S.y-e.y)*M,-i*d(M))}}let g=o.length/3;o.push(e.x,e.y,-i);for(let _=0;_<a;_++)l.push(0,u[0]+_,u[0]+(_+1)%a);let x=(_,M)=>{for(let y=0;y<a;y++){let S=(y+1)%a;l.push(_+y,M+y,M+S,_+y,M+S,_+S)}};for(let _=0;_<c-1;_++)x(u[_],u[_+1]);let m=u[c-1];for(let _ of f)x(m,_),m=_;for(let _=0;_<a;_++)l.push(g,m+(_+1)%a,m+_);let p=new ct;if(p.setAttribute("position",new He(o,3)),p.setIndex(l),p.computeVertexNormals(),p.attributes.normal.getZ(0)<0){let _=p.index.array;for(let M=0;M<_.length;M+=3){let y=_[M+1];_[M+1]=_[M+2],_[M+2]=y}p.index.needsUpdate=!0,p.computeVertexNormals()}return p}function nf({radius:n,vorn:e,hinten:t,ringe:i=30,randDichte:s=1.4}){let r=i,a=u=>1-Math.pow(1-u/r,s),o=[[[0,0,0]]];for(let u=1;u<=r;u++){let f=6*u,g=a(u),x=[];for(let m=0;m<f;m++){let p=m/f*Bt;x.push([Math.cos(p)*g*n,Math.sin(p)*g*n,g])}o.push(x)}let l=[],c=[];for(let u of[1,-1]){let f=[];for(let g of o){f.push(l.length/3);for(let[x,m,p]of g){let _=u>0?e(x,m,p):-t(x,m,p);l.push(x,m,_)}}for(let g=0;g<r;g++){let x=o[g].length,m=o[g+1].length,p=E=>f[g]+E%x,_=E=>f[g+1]+E%m,M=(E,R,v)=>u>0?c.push(E,R,v):c.push(E,v,R);if(x===1){for(let E=0;E<m;E++)M(p(0),_(E),_(E+1));continue}let y=0,S=0;for(;y<x||S<m;){let E=(y+1)/x,R=(S+1)/m;S<m&&(R<=E||y>=x)?(M(p(y),_(S),_(S+1)),S++):(M(p(y),_(S),p(y+1)),y++)}}}let h=new ct;h.setAttribute("position",new He(l,3)),h.setIndex(c);let d=hl(h,1e-5);return h.dispose(),d.computeVertexNormals(),d}var fl={anker:{name:"Ankerkette",laenge:1.42,draht:.24,exponent:2.4,flach:.92,abwechselnd:!0},erbs:{name:"Erbskette",laenge:1.16,draht:.27,exponent:2,flach:.74,abwechselnd:!0},panzer:{name:"Panzerkette",laenge:1.55,draht:.31,exponent:2.3,flach:1,verdrillt:!0,abflachung:.62,schnitt:.86},figaro:{name:"Figarokette",laenge:1.45,draht:.29,exponent:2.3,flach:1,verdrillt:!0,abflachung:.6,schnitt:.86,langLaenge:2.9},paperclip:{name:"Paperclip",laenge:2.9,draht:.2,exponent:5,flach:.78,abwechselnd:!0},kugel:{name:"Kugelkette"},schlange:{name:"Schlangenkette"},seil:{name:"Kordelkette"}};function ah(n,e,{pfadSeg:t=16,radSeg:i=6,laengeFaktor:s=null}={}){let r=fl[n]||fl.anker,a=r.draht*e,o=(s||r.laenge)*e,l=o/2-a/2,c=e/2-a/2,h=r.exponent,d=[];for(let g=0;g<256;g++){let x=g/256*Bt,m=Math.cos(x),p=Math.sin(x);d.push(new C(c*Math.sign(m)*Math.pow(Math.abs(m),2/h),l*Math.sign(p)*Math.pow(Math.abs(p),2/h),0))}let u=Qd(d,t,!0),f=Bn(u,{radius:a/2,ellipse:[r.flach,1],segmente:i,geschlossen:!0,normalen:u.map(()=>new C(0,0,1))});if(f.deleteAttribute("uv"),r.verdrillt){let g=f.attributes.position,x=f.attributes.normal,m=ht/4,p=0;for(let M=0;M<g.count;M++){let y=g.getY(M),S=m*Xe.clamp(y/(l+a/2),-1,1),E=Math.cos(S),R=Math.sin(S),v=g.getX(M),w=g.getZ(M),A=x.getX(M),L=x.getZ(M),D=v*E+w*R,N=(-v*R+w*E)*r.abflachung;g.setXYZ(M,D,y,N),xn.set(A*E+L*R,x.getY(M),(-A*R+L*E)/r.abflachung).normalize(),x.setXYZ(M,xn.x,xn.y,xn.z),p=Math.max(p,Math.abs(N))}let _=p*r.schnitt;for(let M=0;M<g.count;M++){let y=g.getZ(M);Math.abs(y)>=_&&(g.setZ(M,Math.sign(y)*_),x.setXYZ(M,0,0,Math.sign(y)))}}return f.computeBoundingSphere(),{geometrie:f,innen:o-2*a,aussen:o,draht:a}}function wn(n,{typ:e="anker",staerkeMm:t=1.2,s0:i=0,s1:s=null,material:r,res:a,saat:o=1,qualitaet:l=1}){let c=new We;c.name=`kette-${e}`,s===null&&(s=i+n.laenge);let h=s-i,d=n.geschlossen&&Math.abs(h-n.laenge)<1e-6,u=t,f=Kr(o);if(e==="kugel")return ay(n,i,s,u,r,a,c);if(e==="schlange")return oy(n,i,s,u,a,c,r);if(e==="seil")return ly(n,i,s,u,r,a,c,l);let g=fl[e]||fl.anker,x=h/((g.laenge-2*g.draht)*u),m=9e4*l,p=18,_=7;for(;x*p*_*2>m&&p>10;)p-=2,_=Math.max(5,_-1);let M=[];if(e==="figaro"){let H=ah("figaro",u,{pfadSeg:p,radSeg:_}),W=ah("figaro",u,{pfadSeg:p+6,radSeg:_,laengeFaktor:g.langLaenge});M.push({geo:a.eigen(H.geometrie),innen:H.innen},{geo:a.eigen(W.geometrie),innen:W.innen})}else{let H=ah(e,u,{pfadSeg:p,radSeg:_});M.push({geo:a.eigen(H.geometrie),innen:H.innen})}let y=e==="figaro"?[0,0,0,1]:[0],S=y.reduce((H,W)=>H+M[W].innen,0),E=Math.max(2,Math.round(h/S*y.length));d&&g.abwechselnd&&E%2&&E++;let R=0;for(let H=0;H<E;H++)R+=M[y[H%y.length]].innen;let v=h/R,w=M.map(()=>[]),A=new C,L=new C,D=new C,N=new C,I=new C,U=new C,F=new C,V=new C,Y=i,k=g.verdrillt?0:ht/4;for(let H=0;H<E;H++){let W=y[H%y.length],ie=M[W].innen*v;n.punkt(Y,A),n.punkt(Y+ie,L),D.addVectors(A,L).multiplyScalar(.5),N.subVectors(L,A).normalize(),n.normale(Y+ie/2,I),I.addScaledVector(N,-I.dot(N)).normalize(),U.crossVectors(N,I);let se=k+(g.abwechselnd&&H%2?ht/2:0)+(f()-.5)*(g.verdrillt?.08:.22);V.copy(I).multiplyScalar(Math.cos(se)).addScaledVector(U,Math.sin(se)),F.crossVectors(N,V);let Ie=new Oe().makeBasis(F,N,V).setPosition(D);w[W].push(Ie),Y+=ie}return M.forEach((H,W)=>{if(!w[W].length)return;let ie=new Sn(H.geo,r,w[W].length);w[W].forEach((se,Ie)=>ie.setMatrixAt(Ie,se)),ie.instanceMatrix.needsUpdate=!0,ie.computeBoundingSphere(),ie.castShadow=!0,ie.name="glieder",c.add(ie)}),c.userData.gliederAnzahl=E,c}function ay(n,e,t,i,s,r,a){let o=i*1.32,l=Math.max(2,Math.round((t-e)/o)),c=(t-e)/l,h=r.eigen(Tn(i/2,3)),d=r.eigen(new $t(i*.13,i*.13,c,6,1,!0)),u=new Sn(h,s,l),f=new Sn(d,s,l),g=new C,x=new C,m=new C,p=new dt,_=new C(1,1,1);for(let M=0;M<l;M++){let y=e+c*(M+.5);n.punkt(y,g),u.setMatrixAt(M,$d.compose(g,p.identity(),_)),n.punkt(y+c*.5,x),n.tangente(y+c*.5,m),p.setFromUnitVectors(new C(0,1,0),m),f.setMatrixAt(M,$d.compose(x,p,_))}u.name="glieder",f.name="stege";for(let M of[u,f])M.instanceMatrix.needsUpdate=!0,M.computeBoundingSphere(),M.castShadow=!0,a.add(M);return a}function oy(n,e,t,i,s,r,a){let{punkte:o,normalen:l}=n.abtasten(e,t,Math.max(.25,i*.35)),c=s.eigen(Bn(o,{radius:i/2,segmente:12,kappen:"rund",normalen:l,uvLaenge:i*.62,uvUmfang:4})),h=a&&a.userData&&a.userData.metallName,d=new st(c,h?Ot(s,h,"schlange"):a);return d.castShadow=!0,d.name="schlange",r.add(d),r}function ly(n,e,t,i,s,r,a,o){let c=i*2.3,h=i*.29,d=i*.23,u=Math.max(.12,c/(o>=1?12:9)),{punkte:f,normalen:g}=n.abtasten(e,t,u),x=oh(f,!1),m=[];for(let _=0;_<3;_++){let M=[],y=0;for(let E=0;E<f.length;E++){E&&(y+=f[E].distanceTo(f[E-1]));let R=y/c*Bt+_/3*Bt,v=g[E],w=xn.crossVectors(x[E],v);M.push(f[E].clone().addScaledVector(v,Math.cos(R)*d).addScaledVector(w,Math.sin(R)*d))}let S=Bn(M,{radius:(E,R)=>h*(.9+.1*Math.abs(Math.cos(R*(f.length*u)/(c/3)*ht))),segmente:6,kappen:"rund"});S.deleteAttribute("uv"),m.push(S)}let p=new st(r.eigen(yn(m)),s);return p.castShadow=!0,p.name="kordel",a.add(p),a}function Tn(n,e=3){let t=new Hs(n,e);t.deleteAttribute("uv"),t.deleteAttribute("normal");let i=hl(t);return t.dispose(),i.computeVertexNormals(),i}function Jr({durchmesser:n=6,form:e="rund",saat:t=1,detail:i=null}){let s=i??Xe.clamp(Math.round(n*1.15),5,14),r=new Hs(1,s);r.deleteAttribute("uv"),r.deleteAttribute("normal");let a=hl(r);r.dispose();let o=Kr(t*7.31+3),l=Zd(o,{wellen:7,freqMin:.35,freqMax:.9}),c=Zd(o,{wellen:9,freqMin:1,freqMax:1.8}),h=1+(o()-.5)*.05,d=1+(o()-.5)*.06,u=1+(o()-.5)*.05,f=1.12+o()*.22,g=a.attributes.position,x=n/2;for(let m=0;m<g.count;m++){let p=g.getX(m),_=g.getY(m),M=g.getZ(m),y;switch(e){case"barock":{y=1+.085*l(p,_,M)+.035*c(p,_,M),_*=f;break}case"tropfen":{y=1+.018*l(p,_,M)+.006*c(p,_,M);let S=Math.max(0,_),E=1-.3*Math.pow(S,1.6);p*=E,M*=E,_=_*1.24+.06*(1-_*_);break}case"button":{y=1+.02*l(p,_,M)+.006*c(p,_,M),_=_>0?_*.8:_*.52;break}case"reis":{y=1+.03*l(p,_,M)+.01*c(p,_,M),_*=1.5;break}default:y=1+.02*l(p,_,M)+.006*c(p,_,M),p*=h,_*=d,M*=u}g.setXYZ(m,p*y*x,_*y*x,M*y*x)}return a.computeVertexNormals(),a.computeBoundingBox(),a.computeBoundingSphere(),a}function gi(n){return{barock:1.25,tropfen:1.3,button:.66,reis:1.5}[n]||1}function ir(n,{durchmesser:e,form:t="rund",farbe:i="weiss",res:s,saat:r=1,formVarianten:a=3,detail:o=null}){let l=new We;l.name="perlen";let c=Kr(r+11),h=[];for(let x=0;x<a;x++)h.push(s.geteilt(`perlgeo:${e.toFixed(2)}:${t}:${x}:${o}`,()=>Jr({durchmesser:e,form:t,saat:x+1,detail:o})));let d=new Map,u=new Ue,f=new C(1,1,1),g=new C;n.forEach(x=>{let m=Math.floor(c()*a),p=Math.floor(c()*$r),_=m*10+p;d.has(_)||d.set(_,{gv:m,mv:p,eintraege:[]});let M=new dt().setFromAxisAngle(new C(0,1,0),c()*Bt),y=x.quaternion.clone().multiply(M),S=1+(c()-.5)*.06;g.copy(f).multiplyScalar(S),d.get(_).eintraege.push({m:new Oe().compose(x.position,y,g.clone()),c:Yd(c,u).clone()})});for(let x of d.values()){let m=us(s,i,x.mv),p=new Sn(h[x.gv],m,x.eintraege.length);x.eintraege.forEach((_,M)=>{p.setMatrixAt(M,_.m),p.setColorAt(M,_.c)}),p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0),p.computeBoundingSphere(),p.castShadow=!0,p.name="perlen",l.add(p)}return l}function jr({durchmesser:n,form:e="rund",farbe:t="weiss",res:i,saat:s=1,detail:r=null}){let a=i.geteilt(`perlgeo:${n.toFixed(2)}:${e}:s${s}:${r}`,()=>Jr({durchmesser:n,form:e,saat:s,detail:r})),o=new st(a,us(i,t,s));return o.castShadow=!0,o.name="perle",o}function Hi({groesse:n=4,schliff:e="brillant"}={}){if(e==="smaragd")return cy(n);let t=n/2,i=.575*t,s=Xe.degToRad(34.5),r=Xe.degToRad(40.8),a=.03*n,o=(t-i)*Math.tan(s),l=t*Math.tan(r),c=Math.cos(ht/8),h=i*c+.52*(t-i*c),d=(t-h*c)*Math.tan(s),u=.24*t,f=-(t-u*c)*Math.tan(r),g=a/2,x=(N,I,U)=>new C(N*Math.cos(I),N*Math.sin(I),U),m=[],p=[],_=[],M=[],y=[],S=[],E=[];for(let N=0;N<8;N++){let I=N*ht/4,U=I+ht/8;m.push(x(i,I,g+o)),p.push(x(h,U,g+d)),_.push(x(t,I,g)),M.push(x(t,U,g)),y.push(x(t,I,-g)),S.push(x(t,U,-g)),E.push(x(u,U,-g+f))}let R=new C(0,0,g+o),v=new C(0,0,-g-l),w=[],A=(N,I,U)=>w.push([N,I,U]);for(let N=0;N<8;N++){let I=(N+1)%8,U=(N+7)%8;A(R,m[N],m[I]),A(m[N],m[I],p[N]),A(m[N],p[U],_[N]),A(m[N],_[N],p[N]),A(p[N],_[N],M[N]),A(p[N],M[N],_[I]),A(_[N],y[N],M[N]),A(M[N],y[N],S[N]),A(M[N],S[N],_[I]),A(_[I],S[N],y[I]),A(y[N],S[N],E[N]),A(S[N],y[I],E[N]),A(y[N],E[N],v),A(y[N],v,E[U])}let L=t,D=t;if(e==="oval"||e==="tropfen"){D=t*1.38;let I=new Set;w.forEach(U=>U.forEach(F=>I.add(F)));for(let U of I)if(U.y*=1.38,e==="tropfen"){let F=Xe.clamp(U.y/D,-1,1);U.x*=1-.42*Math.pow(Math.max(0,F),1.35),U.y+=.08*t*(1-F*F)}}return{geometrie:sf(w),rx:L,ry:D,krone:o+g,pavillon:l+g,rundiste:a}}function cy(n){let e=n/2,t=e*1.4,i=.28,s=n*.14,r=n*.42,a=n*.03,o=a/2,l=(g,x,m)=>{let p=i*Math.min(g,x);return[[g-p,x],[-g+p,x],[-g,x-p],[-g,-x+p],[-g+p,-x],[g-p,-x],[g,-x+p],[g,x-p]].map(([_,M])=>new C(_,M,m))},c=[l(e*.7,t*.78,o+s),l(e*.8,t*.86,o+s*.68),l(e*.9,t*.93,o+s*.34),l(e,t,o),l(e,t,-o),l(e*.72,t*.8,-o-r*.36),l(e*.42,t*.58,-o-r*.72),l(e*.06,t*.32,-o-r)],h=[],d=new C(0,0,o+s);for(let g=0;g<8;g++)h.push([d,c[0][g],c[0][(g+1)%8]]);for(let g=0;g<c.length-1;g++)for(let x=0;x<8;x++){let m=(x+1)%8;h.push([c[g][x],c[g+1][x],c[g+1][m]],[c[g][x],c[g+1][m],c[g][m]])}let u=new C(0,0,-o-r),f=c[c.length-1];for(let g=0;g<8;g++)h.push([u,f[(g+1)%8],f[g]]);return{geometrie:sf(h),rx:e,ry:t,krone:s+o,pavillon:r+o,rundiste:a}}function sf(n){let e=[],t=new C,i=0;n.forEach(c=>c.forEach(h=>{t.add(h),i++})),t.multiplyScalar(1/i);let s=new C,r=new C,a=new C,o=new C;for(let[c,h,d]of n)s.subVectors(h,c),r.subVectors(d,c),a.crossVectors(s,r),!(a.lengthSq()<1e-14)&&(o.addVectors(c,h).add(d).multiplyScalar(1/3).sub(t),a.dot(o)>=0?e.push(c.x,c.y,c.z,h.x,h.y,h.z,d.x,d.y,d.z):e.push(c.x,c.y,c.z,d.x,d.y,d.z,h.x,h.y,h.z));let l=new ct;return l.setAttribute("position",new He(e,3)),l.computeVertexNormals(),l}function sr({stein:n,anzahl:e=4,winkel0:t=ht/4,draht:i=null,tiefe:s=1,leicht:r=!1}){let{rx:a,ry:o,krone:l,pavillon:c}=n,h=Math.max(a,o),d=i??Math.max(.42,h*.17),u=-c*s-d*.6,f=[];for(let m=0;m<e;m++){let p=t+m/e*Bt,_=Math.cos(p)*a,M=Math.sin(p)*o,y=Math.hypot(_,M),S=_/y,E=M/y,R=(A,L)=>new C(S*A,E*A,L),v=y+d*.55,w=[R(y*.34,u+d*.2),R(y*.62,-c*.62),R(v,-c*.16),R(v,l*.22),R(y*.9,l*.46+d*.15)];f.push(hy(w,d/2,.82,r?5:8,r?.3:.12))}let g=r?20:48,x=r?5:8;return f.push(Kd(a*.74,o*.74,-c*.5,d*.36,g,x)),r||f.push(Kd(a*.36,o*.36,u+d*.25,d*.42,g,x)),{geometrie:yn(f),basisZ:u,draht:d}}function hy(n,e,t,i,s=.12){let r=new Ii(n,!1,"centripetal"),a=Math.max(8,Math.ceil(r.getLength()/s)),o=r.getSpacedPoints(a-1);return Bn(o,{radius:(l,c)=>e*(1-(1-t)*c),segmente:i,kappen:"rund"})}function Kd(n,e,t,i,s=48,r=8){let a=[];for(let o=0;o<s;o++){let l=o/s*Bt;a.push(new C(Math.cos(l)*n,Math.sin(l)*e,t))}return Bn(a,{radius:i,segmente:r,geschlossen:!0,normalen:a.map(()=>new C(0,0,1))})}function Qr({stein:n,wand:e=null,boden:t=!0}){let{rx:i,ry:s,krone:r,pavillon:a}=n,o=i,l=e??Math.max(.32,o*.15),c=r*.32,h=-a*.6,d=o*.07,u=[];t?u.push([0,h],[o*.55,h]):u.push([o*.62,h+l*.2],[o*.75,h]),u.push([o*.86,h+l*.05],[o+l*.72,h+l*.32],[o+l,h+l*.9],[o+l,c-l*.45],[o+l*.93,c-l*.15],[o+l*.72,c],[o+l*.3,c+l*.02],[o-d*.3,c-l*.12],[o-d,c-l*.42],[o*.995,0],[o*.97,-a*.3],[o*.7,h+l*.75]),t&&u.push([0,h+l*.75]);let f=tf(u,64);return Math.abs(s-i)>1e-6&&ry(f,1,s/i,1),{geometrie:f,basisZ:h,aussenRadius:o+l}}function pl(n){let e=n*.24,t=n*.12,i=[[0,-t*.35],[e*.45,-t*.35],[e*.85,-t*.05],[e*1,t*.45],[e*.95,t*.62],[e*.6,t*.42],[0,t*.3]];return{geometrie:tf(i,40),hoehe:t}}function rf(n,{blaetter:e=6}={}){let t=n*.3,i=n*.2,s=[[0,i*.6],[t*.4,i*.55],[t*.7,i*.32],[t*.9,i*.02],[t*.98,i*.08],[t*.82,i*.48],[t*.55,i*.82],[t*.25,i*1],[0,i*1.05]],r=new Gs(s.map(([o,l])=>new ae(o,l)),48),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),h=a.getZ(o),d=Math.atan2(h,l),u=Math.hypot(l,h)/t,f=.5+.5*Math.cos(d*e);a.setY(o,c-(1-f)*i*.35*Math.pow(u,3))}return r.computeVertexNormals(),{geometrie:r,hoehe:i}}function ea(n,e,{luecke:t=.06,segmente:i=28,radSeg:s=8}={}){let r=new nn(n,e,s,i,Bt-t);return r.rotateZ(ht+t/2),r}function ta(n=5.5){let e=n*.11,t=n/2-e,i=n*.17,s=e*.75,r=i+s+t+e*.6,a=new nn(t,e,10,40);a.translate(0,r,0);let o=new nn(i,s,8,20),l=Xe.degToRad(35),c=new $t(e*.75,e*.85,e*2.2,10);c.rotateZ(-l),c.translate(Math.sin(l)*(t+e*1.3),r+Math.cos(l)*(t+e*1.3),0);let h=new $t(s*1.2,s*1.2,r-t-i+e,10);return h.translate(0,(i+r-t)/2,0),{geometrie:yn([a,o,c,h]),laenge:r+t+e}}function af(n=9){let e=n,t=e*.52,i=e*.085,s=e*.035,r=i+s*.5,a=[];for(let d=0;d<96;d++){let u=d/96*Bt,f=Math.sin(u),x=(1-Math.cos(u))/2,m=t*.5*Math.pow(Math.sin(ht*Math.min(1,x*1.02)),.75)*(1-.35*x),p=f*m-.12*t*x*x;a.push(new C(p,r+x*e*.92,0))}let o=(d,u)=>{let f=u*Bt;return e*(.06+.035*Math.max(0,-Math.sin(f)))},l=Bn(Qd(a,64,!0),{radius:o,ellipse:[.75,1],segmente:10,geschlossen:!0,normalen:Array.from({length:64},()=>new C(0,0,1))}),c=new nn(i,s,8,20);c.rotateY(ht/2);let h=new $n(e*.05,e*.16,e*.09,1,1,1);return h.translate(t*.38,r+e*.3,0),h.deleteAttribute("uv"),{geometrie:yn([l,c,h]),laenge:r+e*.95}}function of(n=6){let e=n*.55,t=n*.08,i=[];for(let a=0;a<48;a++){let o=a/48*Bt;i.push(new ae(Math.cos(o)*e/2,Math.sin(o)*n/2))}let s=mi(i,{hoehe:t*.6,rueckHoehe:t*.6,ringe:6,form:.15});s.translate(0,-n/2-n*.12,0);let r=new nn(n*.12,t*.55,8,16);return{geometrie:yn([s,r]),laenge:n*1.12}}function uy(n="halbrund",e=28){let t=[];if(n==="rund"){for(let a=0;a<e;a++){let o=a/e*Bt;t.push([.5+.5*Math.cos(o),.5*Math.sin(o)])}return t}if(n==="flach"){let o=[[.808,.18],[.192,.18],[.192,-.18],[.808,-.18]],l=[[0,ht/2],[ht/2,ht],[ht,1.5*ht],[1.5*ht,Bt]],c=Math.max(3,Math.round(e/4));for(let h=0;h<4;h++)for(let d=0;d<c;d++){let u=l[h][0]+(l[h][1]-l[h][0])*(d/c);t.push([o[h][0]+Math.cos(u)*.32*.6,o[h][1]+Math.sin(u)*.32])}return t}let i=.1,s=Math.round(e*.65);for(let a=0;a<=s;a++){let o=-ht/2+a/s*ht,l=Math.cos(o),c=Math.sin(o);t.push([i+(1-i)*Math.pow(l,.85),.5*Math.sign(c)*Math.pow(Math.abs(c),.9)])}let r=e-s-1;for(let a=1;a<=r;a++){let l=.5-a/(r+1);t.push([i*4*l*l,l*.98])}return t}function Qn({radiusX:n=8.5,radiusZ:e=null,breite:t=2,dicke:i=1.4,profil:s="halbrund",segmente:r=128,profilSegmente:a=28,bogen:o=null,yVersatz:l=null,flachOben:c=null}){let h=e??n,d=uy(s,a),u=d.length,f=!!o,g=f?o[0]:0,x=f?o[1]:Bt,m=f?r+1:r,p=(w,A)=>typeof w=="function"?w(A):w,_=[],M=[];for(let w=0;w<m;w++){let A=g+(x-g)*(w/r);M.push(A);let L=Math.sin(A),D=Math.cos(A),N=L/n,I=D/h,U=Math.hypot(N,I),F=N/U,V=I/U,Y=L*n,k=D*h,H=p(t,A),W=p(i,A),ie=l?l(A):0;for(let se=0;se<u;se++){let[Ie,Le]=d[se],qe=Y+F*Ie*W,Z=k+V*Ie*W;c!==null&&Z>c&&(Z=c),_.push(qe,Le*H+ie,Z)}}let y=[],S=f?m-1:m;for(let w=0;w<S;w++){let A=(w+1)%m;for(let L=0;L<u;L++){let D=(L+1)%u,N=w*u+L,I=A*u+L,U=A*u+D,F=w*u+D;y.push(N,F,I,I,F,U)}}if(f)for(let w of[0,m-1]){let A=M[w],L=w===0?-1:1,D=Math.cos(A)*L,N=-Math.sin(A)*L,I=p(t,A),U=p(i,A),F=w*u,V=0,Y=0,k=0;for(let se=0;se<u;se++)V+=_[(F+se)*3],Y+=_[(F+se)*3+1],k+=_[(F+se)*3+2];V/=u,Y/=u,k/=u;let H=4,W=F,ie=Math.min(I,U)*.5;for(let se=1;se<=H;se++){let Ie=se/H*(ht/2),Le=Math.cos(Ie),qe=_.length/3;for(let Z=0;Z<u;Z++){let ee=_[(F+Z)*3],ye=_[(F+Z)*3+1],Ce=_[(F+Z)*3+2];_.push(V+(ee-V)*Le+D*Math.sin(Ie)*ie,Y+(ye-Y)*Le,k+(Ce-k)*Le+N*Math.sin(Ie)*ie)}for(let Z=0;Z<u;Z++){let ee=(Z+1)%u,ye=W+Z,Ce=qe+Z,xe=qe+ee,ke=W+ee;w===0?y.push(ye,Ce,ke,Ce,xe,ke):y.push(ye,ke,Ce,Ce,ke,xe)}W=qe}}let E=new ct;if(E.setAttribute("position",new He(_,3)),E.setIndex(y),E.computeVertexNormals(),c!==null){let w=E.attributes.position,A=E.attributes.normal;for(let L=0;L<w.count;L++)w.getZ(L)>=c-1e-6&&A.getZ(L)>.5&&A.setXYZ(L,0,0,1)}let R=0,v=E.attributes.position;for(let w=0;w<v.count;w++)v.getZ(w)>v.getZ(R)&&(R=w);if(E.attributes.normal.getZ(R)<0){let w=E.index.array;for(let A=0;A<w.length;A+=3){let L=w[A+1];w[A+1]=w[A+2],w[A+2]=L}E.index.needsUpdate=!0,E.computeVertexNormals()}return E}function lf(n,e){return ht*(3*(n+e)-Math.sqrt((3*n+e)*(n+3*e)))}function je(n,e,t=""){let i=new st(n,e);return i.castShadow=!0,i.name=t,i}var Gi=Math.PI;function lh(n,e){return n==="rund"?e:n==="flach"?Xe.clamp(.42*e+.3,1,2.2):Xe.clamp(.5*e+.25,1,2.4)}function cf(n,e){let t=n.ring,i=Ot(e,n.metall),s=new We;s.name="ring";let r=t.innenDurchmesserMm/2,a=t.schieneMm,o=lh(t.profil,a),l=n._saat||1;switch(t.typ){case"solitaer":d();break;case"perle":u();break;case"offen":f();break;case"siegel":g();break;case"kette":x();break;default:c()}return{gruppe:s,masse:{innenRadiusMm:r},pendel:[]};function c(){s.add(je(e.eigen(Qn({radiusX:r,breite:a,dicke:o,profil:t.profil})),i,"schiene"))}function h(m){return p=>{let _=.5+.5*Math.cos(p);return a*(1-(1-m)*_*_)}}function d(){let m=n.stein,p=Hi({groesse:m.groesseMm,schliff:m.schliff}),_=t.krappen===6?6:4,M=sr({stein:p,anzahl:_,winkel0:_===4?Gi/4:Gi/2}),y=o*.9;s.add(je(e.eigen(Qn({radiusX:r,breite:h(.78),dicke:R=>o-(o-y)*(.5+.5*Math.cos(R)),profil:t.profil})),i,"schiene"));let S=new We;S.name="kopf";let E=r+y*.75-M.basisZ;S.position.z=E,S.add(je(e.eigen(p.geometrie),pi(e,m.art,m.farbe),"stein")),S.add(je(e.eigen(M.geometrie),i,"krappen")),s.add(S)}function u(){let m=n.perlen,p=m.groesseMm;s.add(je(e.eigen(Qn({radiusX:r,breite:h(.8),dicke:o,profil:t.profil})),i,"schiene"));let _=pl(p),M=r+o*.92,y=je(e.eigen(_.geometrie),i,"schale");y.position.z=M,s.add(y);let S=jr({durchmesser:p,form:m.form,farbe:m.farbe,res:e,saat:l,detail:14});S.rotation.x=Gi/2,S.position.z=M+_.hoehe*.3+p*gi(m.form)/2*.98,s.add(S)}function f(){let m=n.perlen,p=m.groesseMm,_=Math.max(1,Math.min(2,Math.round(m.anzahl||2))),M=Xe.degToRad(26),y=p*.36,S=M,E=2*Gi-M,R=A=>y*((A-Gi)/(Gi-M));s.add(je(e.eigen(Qn({radiusX:r,breite:a,dicke:o,profil:"rund",bogen:[S,E],yVersatz:R})),i,"schiene"));let v=r+o/2;[{th:S,richtung:-1,y:-y},{th:E,richtung:1,y}].forEach((A,L)=>{let D=new C(Math.sin(A.th)*v,A.y,Math.cos(A.th)*v),N=new C(Math.cos(A.th)*v,y/(Gi-M),-Math.sin(A.th)*v).normalize().multiplyScalar(A.richtung),I=L===1||_===2,U=I?L===0?p*.82:p:Math.max(2.4,a*1.5),F=I?U*gi(m.form):U,V=new C(Math.sin(A.th),0,Math.cos(A.th)),Y=D.clone().addScaledVector(N,F*.22),k=Math.hypot(Y.x,Y.z);Y.addScaledVector(V,Math.max(0,r+.25+U/2-k));let H;I?(H=jr({durchmesser:U,form:m.form,farbe:m.farbe,res:e,saat:l+L,detail:13}),H.quaternion.setFromUnitVectors(new C(0,1,0),Y.clone().sub(D).normalize())):H=je(e.eigen(Tn(U/2,3)),i,"kugel"),H.position.copy(Y),s.add(H)})}function g(){let m=Math.max(a*2.6,8.5),p=Math.max(o*1.9,2.8),_=v=>{let w=Math.atan2(Math.sin(v),Math.cos(v)),A=Math.max(0,Math.cos(w*1.45));return A*A},M=v=>a+(m-a)*_(v),y=v=>o+(p-o)*_(v),S=m*.46,E=Math.asin(Math.min(.9,S/(r+p))),R=(r+y(E))*Math.cos(E);s.add(je(e.eigen(Qn({radiusX:r,breite:M,dicke:y,profil:"flach",segmente:160,profilSegmente:32,flachOben:R})),i,"schiene"))}function x(){let m=Math.max(1.2,a),p=n.kette?.typ&&n.kette.typ!=="perlenstrang"?n.kette.typ:"anker",_=E=>{let R=[],v=[];for(let w=0;w<256;w++){let A=w/256*2*Gi;R.push(new C(Math.sin(A)*E,0,Math.cos(A)*E)),v.push(new C(Math.sin(A),0,Math.cos(A)))}return new hn(R,{geschlossen:!0,normalen:v})},M=r+m*.4,y=wn(_(M),{typ:p,staerkeMm:m,material:i,res:new nr,saat:l}),S=dy(y);y.traverse(E=>{E.isMesh&&E.geometry.dispose()}),s.add(wn(_(M+(r-S)),{typ:p,staerkeMm:m,material:i,res:e,saat:l}))}}function dy(n){n.updateMatrixWorld(!0);let e=new C,t=new Oe,i=new Oe,s=1/0;return n.traverse(r=>{if(!r.isMesh)return;let a=r.geometry.attributes.position,o=r.isInstancedMesh?r.count:1;for(let l=0;l<o;l++){r.isInstancedMesh?(r.getMatrixAt(l,i),t.multiplyMatrices(r.matrixWorld,i)):t.copy(r.matrixWorld);for(let c=0;c<a.count;c++)e.fromBufferAttribute(a,c).applyMatrix4(t),s=Math.min(s,Math.hypot(e.x,e.z))}}),s}var ei=Math.PI,Wi=Math.PI*2,uf=["perle","sonne","blume","mond","herz","muenze","tropfen","stein","stern","muschel"];function hh(n,{spec:e,groesseMm:t=12,res:i,saat:s=1}){let r=Ot(i,e.metall),a=t,o=[],l=hf[n]||hf.perle,c={G:a,spec:e,res:i,metall:r,teile:o,saat:s,aufhaengung:null};l(c);let h=new We;h.name=`motiv-${n}`;for(let x of o){let m=x.isObject3D?x:je(i.eigen(x.geo),x.material||r,n);h.add(m)}let d=new Ft().setFromObject(h),u=(d.min.x+d.max.x)/2,f=(d.min.y+d.max.y)/2;for(let x of h.children)x.position.x-=u,x.position.y-=f;d.translate(new C(-u,-f,0));let g=c.aufhaengung?new ae(c.aufhaengung.x-u,c.aufhaengung.y-f):new ae(0,d.max.y);return{gruppe:h,hoehe:d.max.y-d.min.y,breite:d.max.x-d.min.x,dicke:d.max.z-d.min.z,rueckZ:d.min.z,obenY:d.max.y,untenY:d.min.y,aufhaengung:g}}function Xi(n,{spec:e,groesseMm:t=12,kettenRadius:i=.6,res:s,saat:r=1}){let a=Ot(s,e.metall),o=hh(n,{spec:e,groesseMm:t,res:s,saat:r}),l=new We;l.name=`anhaenger-${n}`;let c=t,h=Xe.clamp(.035*c+.12,.3,.5),d=Math.max(i+h+.4,.95),u=i+h-d,f=je(s.eigen(ea(d,h,{luecke:.05,segmente:28})),a,"biegering");f.rotation.y=ei/2,f.position.y=u,l.add(f);let g=h*.95,x=Xe.clamp(.05*c+.45,.65,1.1),m=u-d+h+g-x,p=je(s.eigen(new nn(x,g,8,24)),a,"oese");p.position.y=m,l.add(p);let _=m-x+g*.6,M=n==="perle"?_-o.aufhaengung.y+g*.4:_-o.aufhaengung.y;o.gruppe.position.set(-o.aufhaengung.x,M,0),l.add(o.gruppe);let y=M+o.untenY,S=-(M+(o.obenY+o.untenY)/2);return{gruppe:l,hoeheMm:-y,breiteMm:o.breite,dickeMm:o.dicke,rueckZ:o.rueckZ,schwerpunktMm:Math.max(1,S)}}function fy(n,e){let t=[];for(let i=0;i<e;i++){let s=i/e*Wi;t.push(new ae(Math.cos(s)*n,Math.sin(s)*n))}return t}function py({laenge:n,breite:e,vorn:t,hinten:i,nL:s=14,nW:r=8}){let a=[],o=[];for(let c of[1,-1]){let h=a.length/3,d=c>0?t:i;for(let u=0;u<=s;u++){let f=u/s,g=e(f);for(let x=0;x<=r;x++){let m=-1+2*x/r,p=c*d*Math.pow(Math.max(0,1-m*m),.55)*(1-.55*f);a.push(m*g,f*n,p)}}for(let u=0;u<s;u++)for(let f=0;f<r;f++){let g=h+u*(r+1)+f,x=g+r+1;c>0?o.push(g,g+1,x,g+1,x+1,x):o.push(g,x,g+1,g+1,x,x+1)}}let l=new ct;return l.setAttribute("position",new He(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function my(n){let e=[];for(let[i,s,r]of n)e.push(i.x,i.y,i.z,s.x,s.y,s.z,r.x,r.y,r.z);let t=new ct;return t.setAttribute("position",new He(e,3)),t.computeVertexNormals(),t}var hf={perle({G:n,spec:e,res:t,metall:i,teile:s,saat:r}){let a=e.perlen||{},o=a.groesseMm||n*.7,l=a.form&&a.form!=="rund"?a.form:"tropfen",c=t.geteilt(`perlgeo:${o.toFixed(2)}:${l}:a${r}`,()=>Jr({durchmesser:o,form:l,saat:r+5,detail:14}));c.computeBoundingBox();let h=new st(c,us(t,a.farbe||"weiss",r));h.castShadow=!0,h.name="perle";let d=rf(o),u=d.hoehe;d.geometrie.translate(0,-1.05*u,0),h.position.y=-.42*u-c.boundingBox.max.y,s.push({geo:d.geometrie},h)},sonne({G:n,teile:e}){let t=n/2,i=.3*n,s=.06*n+.25,r=mi(fy(i,72),{hoehe:s*.6,rueckHoehe:s*.35,ringe:12,form:.12}),a=new nn(i*1.02,s*.22,8,72);a.translate(0,0,s*.05);let o=12,l=[r,a];for(let c=0;c<o;c++){let h=ei/2+c/o*Wi,d=c%2===0,u=d?t:t*.84,f=i*.86,g=Wi/o*(d?.5:.42)*f,x=u-f,m=py({laenge:x,breite:p=>g*(1-p)*(1-.12*Math.sin(ei*p))+.04,vorn:s*.42,hinten:s*.22});m.translate(0,f,0),m.rotateZ(h-ei/2),l.push(m)}e.push({geo:yn(l)})},blume({G:n,spec:e,res:t,teile:i,saat:s}){let r=n/2,a=5,o=r*.98,l=n*.4;for(let f=0;f<a;f++){let g=[];for(let p=0;p<64;p++){let _=p/64*Wi,M=.42+.58*Math.pow((1-Math.cos(_))/2,.8);g.push(new ae(l/2*Math.sin(_)*M,o*.08+o*.92/2*(1-Math.cos(_))))}let x=mi(g,{mitte:new ae(0,o*.55),hoehe:n*.042,rueckHoehe:n*.028,ringe:10,form:.16}),m=x.attributes.position;for(let p=0;p<m.count;p++){let _=m.getY(p),M=m.getX(p),y=Xe.clamp(_/o,0,1),S=M/(l/2);m.setZ(p,m.getZ(p)+n*.05*S*S*Math.sin(ei*Math.min(1,y*1.1))+n*.06*y*y)}x.computeVertexNormals(),x.rotateZ(f/a*Wi),i.push({geo:x})}let c=e.perlen||{},h=Math.min(c.groesseMm||n*.36,n*.42),d=t.geteilt(`perlgeo:${h.toFixed(2)}:rund:b${s}`,()=>Jr({durchmesser:h,form:"rund",saat:s+9,detail:10})),u=new st(d,us(t,c.farbe||"weiss",s+1));u.castShadow=!0,u.rotation.x=ei/2,u.position.z=n*.05+h*.3,u.name="perle",i.push(u)},mond(n){let{G:e,teile:t}=n,i=.33*e,s=.3*e,r=Xe.degToRad(42),a=Xe.degToRad(318),o=y=>s/2*(.05+.95*Math.pow(Math.sin(ei*y),.85)),l=[],c=[],h=90,d=0,u=0;for(let y=0;y<=h;y++){let S=y/h,E=r+(a-r)*S;l.push(new C(Math.cos(E)*i,Math.sin(E)*i,0)),c.push(new C(0,0,1));let R=o(S)**2;d+=Math.cos(E)*i*R,u+=R}let f=Bn(l,{radius:(y,S)=>o(S),ellipse:[.5,1],segmente:14,kappen:"rund",normalen:c}),g=d/u,x=Xe.degToRad(100),m=(x-r)/(a-r),p=i+o(m)*.92,_=new ae(Math.cos(x)*p,Math.sin(x)*p),M=ei/2-Math.atan2(_.y,_.x-g);f.rotateZ(M),n.aufhaengung=_.rotateAround(new ae,M),t.push({geo:f})},herz(n){let{G:e,teile:t}=n,i=e/31,s=[];for(let a=0;a<128;a++){let o=a/128*Wi,l=16*Math.pow(Math.sin(o),3),c=13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o);s.push(new ae(l*i,c*i))}ch(s)<0&&s.reverse();let r=mi(s,{mitte:new ae(0,-1.5*i),hoehe:e*.2,rueckHoehe:e*.1,ringe:14,form:.55});n.aufhaengung=new ae(0,5*i+e*.02),t.push({geo:r})},muenze({G:n,teile:e,saat:t}){let i=n/2,s=.075*n+.25,r=Math.min(s*.55,i*.12)/i,a=Kr(t*3+17),o=[],l=1.25;for(let u=-i-l;u<=i+l;u+=l*.87)for(let f=-i-l;f<=i+l;f+=l){let g=Math.round(u/(l*.87))%2*l*.5;o.push([f+g+(a()-.5)*l*.6,u+(a()-.5)*l*.6,.6+a()*.6])}let c=(u,f,g)=>{let x=1e9,m=1;for(let _ of o){let M=(u-_[0])**2+(f-_[1])**2;M<x&&(x=M,m=_[2])}let p=Xe.smoothstep(1-r*1.3-g,0,.1);return Math.max(0,(1-x/(l*l*.5))*.07*m*p)},h=u=>{let f=(u-(1-r))/r;return f<=0?1:Math.sqrt(Math.max(0,1-f*f))},d=nf({radius:i,ringe:Math.max(24,Math.round(i/.17)),randDichte:1.35,vorn:(u,f,g)=>s/2*h(g)-c(u,f,g),hinten:(u,f,g)=>s/2*h(g)-c(-u*.93+.4,f*.97-.3,g)*.8});e.push({geo:d})},tropfen({G:n,teile:e}){let t=n,i=.62*n,s=[];for(let a=0;a<96;a++){let o=a/96*Wi;s.push(new ae(i/2*Math.sin(o)*Math.pow((1-Math.cos(o))/2,.75),t/2*Math.cos(o)))}ch(s)<0&&s.reverse();let r=mi(s,{mitte:new ae(0,-.18*t),hoehe:i*.26,rueckHoehe:i*.16,ringe:14,form:.55});e.push({geo:r})},stein({G:n,spec:e,res:t,teile:i}){let s=e.stein||{},r=s.groesseMm||n*.6,a=Hi({groesse:r,schliff:s.schliff||"brillant"}),o=Qr({stein:a});i.push({geo:a.geometrie,material:pi(t,s.art||"zirkonia",s.farbe)},{geo:o.geometrie})},stern({G:n,teile:e}){let t=n/2,i=t*.46,s=n*.15,r=n*.05,a=.12,o=new C(0,0,s),l=new C(0,0,-r),c=[];for(let d=0;d<10;d++){let u=ei/2+d/10*Wi,f=d%2?i:t;c.push([Math.cos(u)*f,Math.sin(u)*f])}let h=[];for(let d=0;d<10;d++){let[u,f]=c[d],[g,x]=c[(d+1)%10],m=new C(u,f,a),p=new C(g,x,a),_=new C(u,f,-a),M=new C(g,x,-a);h.push([o,m,p],[l,M,_],[m,_,M],[m,M,p])}e.push({geo:my(h)})},muschel({G:n,teile:e}){let t=.78*n,i=13,s=Xe.degToRad(46),r=i*ei/s/2,a=[];a.push(new ae(-.2*n,.02*n),new ae(-.21*n,-.06*n),new ae(-.12*n,-.13*n));let o=120;for(let d=0;d<=o;d++){let u=-s+2*s*d/o,f=t*(.985+.015*Math.cos(u*r*2));a.push(new ae(Math.sin(u)*f,-Math.cos(u)*f))}a.push(new ae(.12*n,-.13*n),new ae(.21*n,-.06*n),new ae(.2*n,.02*n));let l=[];for(let d=0;d<a.length;d++){let u=a[d],f=a[(d+1)%a.length],g=Math.max(1,Math.ceil(u.distanceTo(f)/(n*.03)));for(let x=0;x<g;x++)l.push(u.clone().lerp(f,x/g))}ch(l)<0&&l.reverse();let c=mi(l,{mitte:new ae(0,-.45*t),hoehe:n*.17,rueckHoehe:n*.05,ringe:16,form:.6}),h=c.attributes.position;for(let d=0;d<h.count;d++){let u=h.getX(d),f=h.getY(d),g=h.getZ(d);if(g<=0)continue;let x=Math.atan2(u,-f),m=Math.hypot(u,f)/t,p=.5+.5*Math.cos(x*r*2),_=Xe.smoothstep(m,.12,.65);h.setZ(d,g+n*.045*_*(p-.5)*Math.min(1,g/(n*.05)))}c.computeVertexNormals(),e.push({geo:c})}};function ch(n){let e=0;for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e+=i.x*s.y-s.x*i.y}return e/2}var Kt=Math.PI,gy=1.24;function ml(n,e=gy){let t=n/lf(e,1);return{a:t*e,b:t}}function uh(n,e,t=360){let i=[],s=[];for(let r=0;r<t;r++){let a=Kt+r/t*2*Kt;i.push(new C(Math.sin(a)*n,0,Math.cos(a)*e)),s.push(new C(Math.sin(a)/n,0,Math.cos(a)/e).normalize())}return new hn(i,{geschlossen:!0,normalen:s})}function _y(n,e,t,i){let s=n.punkte.map((o,l)=>{let c=0;for(let h of e){let d=Math.abs(n.s[l]-h);d=Math.min(d,n.laenge-d),d<i&&(c=Math.max(c,.5+.5*Math.cos(Kt*d/i)))}return o.clone().addScaledVector(n.normalen[l],t*c)}),r=new hn(s,{geschlossen:!0,normalen:n.normalen}),a=o=>{let l=0;for(;l<n.punkte.length-1&&n.s[l+1]<=o;)l++;return l};return{pfad:r,stellen:e.map(o=>r.s[a(o)])}}function qi(n,e){let t=n.punkt(e),i=n.tangente(e),s=n.normale(e),r=new C().crossVectors(i,s);return{position:t,quaternion:new dt().setFromRotationMatrix(new Oe().makeBasis(r,i,s))}}function xy(n,e,t){let i=new We;i.name=t;let s=n.punkt(e),r=n.tangente(e),a=n.normale(e),o=new C().crossVectors(a,r).normalize(),l=new C().crossVectors(o,a);return i.quaternion.setFromRotationMatrix(new Oe().makeBasis(l,o,a)),i.position.copy(s),i}function df(n,e){let t=n.armband,i;switch(t.typ){case"perlen":i=My(n,e);break;case"reif":i=by(n,e);break;case"tennis":i=Sy(n,e);break;default:i=vy(n,e)}let s=i.masse.innenRadienMm,r=yy(i.gruppe,s.x,s.z,i.pendel.map(a=>a.knoten));return i.masse.innenRadienMm={x:s.x*r,z:s.z*r},i}function yy(n,e,t,i){n.updateMatrixWorld(!0);let s=new Set;for(let c of i)c.traverse(h=>s.add(h));let r=new C,a=new Oe,o=new Oe,l=1/0;return n.traverse(c=>{if(!c.isMesh||s.has(c))return;let h=c.geometry.attributes.position,d=c.isInstancedMesh?c.count:1;for(let u=0;u<d;u++){c.isInstancedMesh?(c.getMatrixAt(u,o),a.multiplyMatrices(c.matrixWorld,o)):a.copy(c.matrixWorld);for(let f=0;f<h.count;f++)r.fromBufferAttribute(h,f).applyMatrix4(a),l=Math.min(l,Math.hypot(r.x/e,r.z/t))}}),Number.isFinite(l)?Math.min(l,1.05):1}function vy(n,e){let t=n.armband,i=n.kette,s=Ot(e,n.metall),r=new We;r.name="armband";let a=[],o=n._saat||1,l=i.staerkeMm,{a:c,b:h}=ml(t.laengeCm*10),d=uh(c,h),u=n.perlen,f=[];if(u.anordnung==="stationen"&&u.anzahl>0){let F=Math.round(u.anzahl);for(let Y=0;Y<F;Y++)f.push(d.laenge/2+(Y-(F-1)/2)*u.abstandMm);let V=u.groesseMm/2-l/2;if(V>0){let Y=_y(d,f,V,V*5+3);d=Y.pfad,f=Y.stellen}}let g=d.laenge,m=l>=2.2?af(Xe.clamp(l*4.5,8,13)):ta(Xe.clamp(l*3.4+1.6,4.5,6.5)),p=Math.max(.3,l*.22),_=Math.max(l*.55+p,1),M=m.laenge+_*2,y=M/2,S=g-M/2,E=je(e.eigen(m.geometrie),s,"verschluss"),R=qi(d,y);E.position.copy(R.position),E.quaternion.copy(R.quaternion).multiply(new dt().setFromAxisAngle(new C(0,0,1),Kt)),r.add(E);let v=je(e.eigen(ea(_,p)),s,"biegering"),w=qi(d,S+_*.3);v.position.copy(w.position),v.position.addScaledVector(d.normale(S+_*.3),Math.max(0,_+p-l/2)),v.quaternion.copy(w.quaternion).multiply(new dt().setFromAxisAngle(new C(0,1,0),Kt/2)),r.add(v);let A=[],L=y;for(let F of f)A.push([L,F-u.groesseMm*.42]),L=F+u.groesseMm*.42;A.push([L,S]),A.forEach(([F,V],Y)=>{V-F>l&&r.add(wn(d,{typ:i.typ==="perlenstrang"?"anker":i.typ,staerkeMm:l,s0:F,s1:V,material:s,res:e,saat:o+Y}))}),f.length&&r.add(ir(f.map(F=>qi(d,F)),{durchmesser:u.groesseMm,form:u.form,farbe:u.farbe,res:e,saat:o}));let D=[],N=n.anhaenger;if(N&&N.typ!=="keiner"&&D.push({typ:N.typ,groesse:N.groesseMm}),u.anordnung==="einzeln"&&u.anzahl>0)for(let F=0;F<Math.min(3,Math.round(u.anzahl));F++)D.push({typ:"perle",groesse:u.groesseMm});let I=7.5;D.forEach((F,V)=>{let Y=(V-(D.length-1)/2)*I,k=xy(d,g/2+Y,`charm-${F.typ}`),H=Xi(F.typ,{spec:n,groesseMm:F.groesse,kettenRadius:l/2,res:e,saat:o+V});k.add(H.gruppe),r.add(k),a.push({knoten:k,laengeMm:H.schwerpunktMm,achse:"frei"})});let U=t.verlaengerungCm*10;if(U>3){let F=new We;F.name="verlaengerung",F.position.copy(d.punkt(S+_*.3)),F.position.z-=_*.8,F.rotation.x=Kt/2;let V=[],Y=[];for(let ie=0;ie<=40;ie++)V.push(new C(0,-(ie/40)*U,0)),Y.push(new C(0,0,1));let k=new hn(V,{normalen:Y}),H=Math.max(l*1.15,1.4);F.add(wn(k,{typ:"anker",staerkeMm:H,material:s,res:e,saat:o+7}));let W=new We;if(W.position.y=-U,u.anzahl>0){let ie=Xi("perle",{spec:{...n,perlen:{...u,groesseMm:Math.min(4.5,u.groesseMm),form:"tropfen"}},groesseMm:4,kettenRadius:H*.3,res:e,saat:o+13});W.add(ie.gruppe)}else{let ie=je(e.eigen(Tn(1.4,3)),s,"endkugel");ie.position.y=-1.6,W.add(ie)}F.add(W),r.add(F),a.push({knoten:F,laengeMm:U*.6,achse:"frei"})}return{gruppe:r,masse:{innenRadienMm:{x:c-l/2,z:h-l/2},laengeMm:t.laengeCm*10},pendel:a}}function My(n,e){let t=n.armband,i=n.perlen,s=Ot(e,n.metall),r=new We;r.name="perlenarmband";let a=n._saat||1,o=i.groesseMm,l=o*gi(i.form),c=t.zwischenperlenMm,{a:h,b:d}=ml(t.laengeCm*10),u=uh(h,d),f=u.laenge,g=ta(4.8),x=g.laenge+2.2,m=f-x,p=l+.25+(c>0?c+.25:0),_=Math.max(4,Math.floor(m/p)),M=(m-_*p)/2,y=[],S=[];for(let D=0;D<_;D++){let N=x/2+M+p*D+(l+.25)/2+(c>0?(c+.25)/2:0);y.push(qi(u,N)),c>0&&(S.push(N-(l+.25)/2-(c+.25)/2),D===_-1&&S.push(N+(l+.25)/2+(c+.25)/2))}if(r.add(ir(y,{durchmesser:o,form:i.form,farbe:i.farbe,res:e,saat:a})),S.length){let D=e.eigen(Tn(c/2,2)),N=new Sn(D,s,S.length);S.forEach((I,U)=>N.setMatrixAt(U,new Oe().setPosition(u.punkt(I)))),N.instanceMatrix.needsUpdate=!0,N.computeBoundingSphere(),N.castShadow=!0,N.name="zwischenperlen",r.add(N)}let E=x/2+M-.2,R=f-x/2-M+.2;r.add(wn(u,{typ:"anker",staerkeMm:1,s0:x/2-.3,s1:E,material:s,res:e,saat:a})),r.add(wn(u,{typ:"anker",staerkeMm:1,s0:R,s1:f-x/2+.3,material:s,res:e,saat:a+1}));let v=je(e.eigen(g.geometrie),s,"verschluss"),w=qi(u,x/2-.3);v.position.copy(w.position),v.quaternion.copy(w.quaternion).multiply(new dt().setFromAxisAngle(new C(0,0,1),Kt)),r.add(v);let A=je(e.eigen(ea(1.1,.32)),s,"biegering"),L=qi(u,f-x/2+.6);return A.position.copy(L.position),A.quaternion.copy(L.quaternion).multiply(new dt().setFromAxisAngle(new C(0,1,0),Kt/2)),r.add(A),{gruppe:r,masse:{innenRadienMm:{x:h-o/2,z:d-o/2},laengeMm:t.laengeCm*10},pendel:[]}}function by(n,e){let t=n.armband,i=Ot(e,n.metall),s=new We;s.name="armreif";let r=t.laengeCm*10,{a,b:o}=ml(r,1.2),l=t.breiteMm,c=n.ring?.profil||"halbrund",h=lh(c,l)*.9,d=t.offen?[Kt+.32,3*Kt-.32]:null,u=Qn({radiusX:a,radiusZ:o,breite:l,dicke:h,profil:c,segmente:160,bogen:d});if(s.add(je(e.eigen(u),i,"reif")),t.offen){let g=n.perlen;for(let x of[Kt+.32,3*Kt-.32]){let m=f(g,x);m&&s.add(m)}}function f(g,x){let m=Math.max(l*.75,2.2),p=je(e.eigen(Tn(m,3)),i,"endkugel"),_=Math.sin(x)/a,M=Math.cos(x)/o,y=Math.hypot(_,M);return p.position.set(Math.sin(x)*a+_/y*h*.5,0,Math.cos(x)*o+M/y*h*.5),p}return{gruppe:s,masse:{innenRadienMm:{x:a,z:o},laengeMm:r},pendel:[]}}function Sy(n,e){let t=n.armband,i=n.stein,s=Ot(e,n.metall),r=new We;r.name="tennisarmband";let a=Xe.clamp(i.groesseMm,1.8,5),o=Hi({groesse:a,schliff:"brillant"}),l=sr({stein:o,anzahl:4,winkel0:Kt/4,draht:a*.13,tiefe:.9,leicht:!0}),c=new $t(a*.52,a*.4,o.pavillon*.75,4,1,!0);c.rotateY(Kt/4),c.rotateX(Kt/2),c.translate(0,0,-o.pavillon*.55),c.computeVertexNormals();let h=new $t(a*.11,a*.11,a*.95,8);h.rotateZ(Kt/2),h.translate(0,a*.52,-o.pavillon*.75);let d=e.eigen(yn([l.geometrie,c,h])),u=o.pavillon+a*.15,{a:f,b:g}=ml(t.laengeCm*10),x=uh(f+u*.5,g+u*.5),m=x.laenge,p=a*2.2,_=a+.62,M=Math.max(6,Math.floor((m-p)/_)),y=(m-p)/M,S=pi(e,i.art,i.farbe),E=new Sn(e.eigen(o.geometrie),S,M),R=new Sn(d,s,M),v=new Oe;for(let D=0;D<M;D++){let N=qi(x,p/2+y*(D+.5));v.compose(N.position,N.quaternion,new C(1,1,1)),E.setMatrixAt(D,v),R.setMatrixAt(D,v)}for(let D of[E,R])D.instanceMatrix.needsUpdate=!0,D.computeBoundingSphere(),D.castShadow=!0,r.add(D);let w=new $n(a*1.05,p*.95,o.pavillon*.9,2,2,2);w.deleteAttribute("uv");let A=je(e.eigen(w),s,"schloss"),L=qi(x,0);return A.position.copy(L.position),A.quaternion.copy(L.quaternion),A.translateZ(-o.pavillon*.3),r.add(A),{gruppe:r,masse:{innenRadienMm:{x:f,z:g},laengeMm:t.laengeCm*10},pendel:[]}}var Yi=Math.PI,rr={halsRadius:55,halsMitteZ:-55,halsTiefeHinten:48,brustNeigung:Xe.degToRad(25),rueckenHoehe:40,seitenHoehe:12,rundung:.0042},na=[[300,3.4],[400,3.1],[450,2.2],[500,1.6],[600,1.4],[1e3,1.4]];function Ey(n){for(let e=1;e<na.length;e++){let[t,i]=na[e],[s,r]=na[e-1];if(n<=t)return r+(i-r)*(n-s)/(t-s)}return na[na.length-1][1]}var ff=2.6,pf=7;function wy(n){return 1/(1+Math.exp(-n))}function Ty(n,e){let t=rr,i=t.halsRadius,s=Math.max(1e-6,i*i-n*n),r=t.halsMitteZ+Math.sqrt(s),a=-n/Math.sqrt(s),o=Math.tan(t.brustNeigung),l=6,c=l*Math.log1p(Math.exp(e/l)),h=-o*e-(ff-o)*c-t.rundung*n*n,d=-o-(ff-o)*wy(e/l),u=-2*t.rundung*n,f=Xe.clamp(.5+.5*(r-h)/pf,0,1),g=h+(r-h)*f+pf*f*(1-f)*.5,x=u+(a-u)*f,m=d*(1-f);return{z:g,zx:x,zy:m}}function Ay(n,{abstand:e=.6,anhaenger:t=!1,aufloesung:i=.6}={}){let s=Xe.clamp(n,300,1e3),r=Ey(s)-(t?.15:0),a=m=>mf(m,e,r,140),o=m=>_f(a(m).punkte),l=-rr.seitenHoehe+4,c=380;o(l)>s&&(c=l);for(let m=0;m<40&&c-l>.02;m++){let p=(l+c)/2;o(p)<s?l=p:c=p}let h=(l+c)/2,d=mf(h,e,r,420),u=new hn(d.punkte,{geschlossen:!0,normalen:d.normalen}),f=Math.max(200,Math.round(u.laenge/i)),g=[],x=[];for(let m=0;m<f;m++){let p=u.laenge*m/f;g.push(u.punkt(p)),x.push(u.normale(p))}return{punkte:g,normalen:x,tiefe:h,laenge:u.laenge}}function _f(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t].distanceTo(n[(t+1)%n.length]);return e}function mf(n,e,t,i){let s=rr,r=s.halsRadius,a=s.halsTiefeHinten,o=t,l=t,c=[],h=[],d=Math.round(i*.35);for(let M=0;M<=d;M++){let y=Yi-M/d*(Yi/2),S=(Yi-y)/(Yi/2),E=s.rueckenHoehe+(s.seitenHoehe-s.rueckenHoehe)*(1-Math.cos(S*Yi))/2,R=new C(Math.sin(y)/r,0,Math.cos(y)/a).normalize();c.push(new C(Math.sin(y)*r,E,s.halsMitteZ+Math.cos(y)*a).addScaledVector(R,e)),h.push(R)}let u=[],f=[],g=i,x=s.seitenHoehe;for(let M=1;M<=g;M++){let y=M/g*(Yi/2),S=r*Math.pow(Math.cos(y),2/o),E=x-(x+n)*Math.pow(Math.sin(y),2/l),R=Ty(Math.min(S,r-1e-4),E),v=new C(-R.zx,-R.zy,1).normalize();u.push(new C(S,E,R.z).addScaledVector(v,e)),f.push(v)}let m=[...c,...u],p=[...h,...f],_=M=>new C(-M.x,M.y,M.z);for(let M=m.length-2;M>=1;M--)m.push(_(m[M])),p.push(_(p[M]));return{punkte:m,normalen:p}}function xf(n,e){let t=n.kette,i=Ot(e,n.metall),s=new We;s.name="kette";let r=[],a=n._saat||1,o=t.laengeCm*10,l=t.typ==="perlenstrang",c=n.perlen,h=t.staerkeMm,d=l?c.groesseMm/2*(c.form==="barock"?1.2:1.1):h/2,u=n.anhaenger,f=u&&u.typ!=="keiner",g=!f&&c.anordnung==="einzeln"&&c.anzahl>0&&!l,x=Ay(o,{abstand:d,anhaenger:f||g}),m=[],p=_f(x.punkte);if(!l&&c.anordnung==="stationen"&&c.anzahl>0){let U=Math.round(c.anzahl);for(let F=0;F<U;F++)m.push(p/2+(F-(U-1)/2)*c.abstandMm);Ry(x,m,c.groesseMm/2-d)}let _=new hn(x.punkte,{geschlossen:!0,normalen:x.normalen}),M=_.laenge,y=M/2,S=Xe.clamp(h*3.6+1.6,4.5,7),E=ta(S),R=of(Xe.clamp(S*.95,4.5,6.5)),v=E.laenge+R.laenge*.9,w=v/2,A=M-v/2,L=new We;L.name="verschluss";let D=je(e.eigen(E.geometrie),i,"federring");D.position.y=0,L.add(D);let N=je(e.eigen(R.geometrie),i,"plaettchen");if(L.add(N),gf(D,_,w,-1),gf(N,_,A,-1),s.add(L),l){let U=c.groesseMm,V=U*gi(c.form)+.35,Y=1.6,k=A-w-2*Y,H=Math.max(3,Math.floor(k/V)),W=(k-H*V)/2,ie=[];for(let Ie=0;Ie<H;Ie++){let Le=w+Y+W+V*(Ie+.5);ie.push(dh(_,Le))}s.add(ir(ie,{durchmesser:U,form:c.form,farbe:c.farbe,res:e,saat:a}));let se=e.eigen(Tn(.9,2));for(let Ie of[w+Y*.55+W*.5,A-Y*.55-W*.5]){let Le=je(se,i,"kalotte");_.punkt(Ie,Le.position),s.add(Le)}}else{let U=[],F=w,V=c.groesseMm*.42;for(let Y of m)U.push([F,Y-V]),F=Y+V;if(U.push([F,A]),U.forEach(([Y,k],H)=>{k-Y>h&&s.add(wn(_,{typ:t.typ,staerkeMm:h,s0:Y,s1:k,material:i,res:e,saat:a+H}))}),m.length){let Y=m.map(k=>dh(_,k));s.add(ir(Y,{durchmesser:c.groesseMm,form:c.form,farbe:c.farbe,res:e,saat:a+3}))}}let I=0;if(f||g){let U=f?u.typ:"perle",F=Xi(U,{spec:n,groesseMm:f?u.groesseMm:c.groesseMm,kettenRadius:d,res:e,saat:a}),V=new We;V.name="anhaenger";let Y=_.punkt(y),k=_.normale(y),H=new C(1,0,0),W=new C().crossVectors(k,H).normalize(),ie=new C().crossVectors(H,W);V.quaternion.setFromRotationMatrix(new Oe().makeBasis(H,W,ie)),V.position.copy(Y);let se=-F.rueckZ-d;if(se>0){let Ie=Math.atan2(se,Math.max(2,F.hoeheMm*.8));V.quaternion.multiply(new dt().setFromAxisAngle(new C(1,0,0),-Ie))}V.add(F.gruppe),s.add(V),r.push({knoten:V,laengeMm:F.schwerpunktMm,achse:"z"}),I=F.hoeheMm}return{gruppe:s,masse:{halsRadiusMm:rr.halsRadius,laengeMm:M,tiefeMm:x.tiefe+I},pendel:r}}function dh(n,e){let t=n.punkt(e),i=n.tangente(e),s=n.normale(e),r=new C().crossVectors(i,s),a=new dt().setFromRotationMatrix(new Oe().makeBasis(r,i,s));return{position:t,quaternion:a}}function gf(n,e,t,i){let s=dh(e,t);n.position.copy(s.position),n.quaternion.copy(s.quaternion),i<0&&n.quaternion.multiply(new dt().setFromAxisAngle(new C(0,0,1),Yi))}function Ry(n,e,t){if(t<=0)return;let i=n.punkte,s=n.normalen,r=[0];for(let o=1;o<i.length;o++)r.push(r[o-1]+i[o].distanceTo(i[o-1]));let a=t*6+4;for(let o=0;o<i.length;o++){let l=0;for(let c of e){let h=Math.abs(r[o]-c);h<a&&(l=Math.max(l,.5+.5*Math.cos(Yi*h/a)))}l>0&&i[o].addScaledVector(s[o],t*l)}}var An=Math.PI,Cy=Math.PI*2,zn=1.6,Py=Xe.degToRad(10);function yf(n,e){let t=n.ohrring,i=Ot(e,n.metall),s=new We;s.name="ohrring";let r=[],a=n._saat||1,o=0;switch(t.typ){case"creole":u(!1);break;case"huggie":u(!0);break;case"haenger":f();break;case"perlenstecker":d();break;default:h()}s.updateMatrixWorld(!0);let l=new Ft().setFromObject(s);return o=Math.max(o,-l.min.y),{gruppe:s,masse:{laengeMm:o,hoeheMm:l.max.y-l.min.y},pendel:r};function c(g){let m=new $t(.4,.4,g+9.4,10);m.rotateZ(An/2),m.translate((g-9.4)/2,0,0);let p=new as(.4,10,6);p.translate(-9.4,0,0);let _=-zn-.25,M=[];for(let R=0;R<48;R++){let v=R/48*Cy,w=Math.cos(v),A=Math.sin(v);M.push(new ae(2.4*Math.sign(w)*Math.pow(Math.abs(w),.6),1.55*Math.sign(A)*Math.pow(Math.abs(A),.6)))}let y=mi(M,{hoehe:.14,rueckHoehe:.14,ringe:4,form:.2});y.rotateY(-An/2),y.translate(_,0,0);let S=new $t(.75,.8,1.5,16,1);S.rotateZ(An/2),S.translate(_-.75,0,0);let E=[m,p,y,S];for(let R of[1,-1]){let v=[[_-.05,2.25],[_-.75,2.55],[_-1.45,2.05],[_-1.4,1.2],[_-.95,.9]].map(([L,D])=>new C(L,0,D*R)),A=new Ii(v,!1,"centripetal").getSpacedPoints(24);E.push(Bn(A,{radius:1.25,ellipse:[1,.12],segmente:12,kappen:"flach",normalen:A.map(()=>new C(0,1,0))}))}s.add(je(e.eigen(yn(E)),i,"stift"))}function h(){let g=n.anhaenger,x;if(g&&g.typ!=="keiner"&&g.typ!=="stein"){let m=hh(g.typ,{spec:n,groesseMm:g.groesseMm,res:e,saat:a});x=m.gruppe,x.rotation.y=An/2,x.position.x=zn-m.rueckZ,o=m.hoehe/2}else{let m=n.stein,p=Hi({groesse:m.groesseMm,schliff:m.schliff}),_=m.groesseMm>5?sr({stein:p,anzahl:4,winkel0:An/4}):Qr({stein:p});x=new We,x.add(je(e.eigen(p.geometrie),pi(e,m.art,m.farbe),"stein")),x.add(je(e.eigen(_.geometrie),i,"fassung")),x.rotation.y=An/2,x.position.x=zn-_.basisZ,o=p.ry+.4}s.add(x),c(zn+.3)}function d(){let g=n.perlen,x=g.groesseMm,m=g.form==="tropfen"||g.form==="reis"?"rund":g.form,p=pl(x),_=je(e.eigen(p.geometrie),i,"schale");_.rotation.y=An/2,_.position.x=zn+p.hoehe*.35,s.add(_);let M=jr({durchmesser:x,form:m,farbe:g.farbe,res:e,saat:a,detail:14});M.rotation.z=-An/2,M.position.x=zn+p.hoehe*.65+x*gi(m)/2*.97,s.add(M),o=x/2,c(zn+p.hoehe*.4)}function u(g){let x=t.durchmesserMm,m=t.staerkeMm,p=t.profil||"rund",_=g?m*.82:p==="rund"?m:m*.8,M=x/2-_,y=M+_/2,S=new We;S.name=g?"huggie":"creole";let E=Qn({radiusX:M,breite:m,dicke:_,profil:p,segmente:96}),R=je(e.eigen(E),i,"reif");R.rotation.z=-An/2,R.position.y=-y,S.add(R),S.rotation.y=Py,s.add(S),o=2*y+_/2;let v=n.anhaenger;if(v&&v.typ!=="keiner"){let w=new We;w.name="tropfen",w.position.set(0,-2*y,0),w.rotation.y=An/2;let A=Xi(v.typ,{spec:n,groesseMm:v.groesseMm,kettenRadius:_/2,res:e,saat:a});w.add(A.gruppe),S.add(w),r.push({knoten:w,laengeMm:A.schwerpunktMm,achse:"frei"}),o=2*y+A.hoeheMm}g||r.push({knoten:S,laengeMm:y,achse:"frei"})}function f(){let g=n.anhaenger&&n.anhaenger.typ!=="keiner"?n.anhaenger:{typ:"perle",groesseMm:n.perlen.groesseMm},x=.95,m;if(t.befestigung==="haken"){let E=[[-3.5,-11],[-5.2,-6.5],[-4.4,-1.6],[-2.2,.6],[0,.6],[2.2,.2],[3.4,-1.6],[3.5,-4.2],[3.5,-5.6]].map(([A,L])=>new C(A,L,0)),R=ef(E,.4,{segmente:8}),v=new nn(.75,.38,8,20);v.translate(3.5,-6.5,0);let w=Tn(.9,2);w.translate(3.5,-2.6,0),s.add(je(e.eigen(yn([R,v,w])),i,"haken")),m=new C(3.5,-6.5-.75+.38,0)}else{let R=Tn(1.8,3);R.translate(zn+1.8*.95,0,0);let v=new nn(.6,.3,8,18);v.rotateY(An/2),v.translate(zn+1.8*.95,-1.8-.35,0),s.add(je(e.eigen(yn([R,v])),i,"kugel")),c(zn+.3),m=new C(zn+1.8*.95,-1.8-.35-.6+.3,0)}let p=new We;p.name="haenger",p.position.copy(m);let _=Xi(g.typ,{spec:n,groesseMm:g.groesseMm,kettenRadius:x*.3,res:e,saat:a}),M=Math.max(0,t.laengeMm- -m.y-_.hoeheMm),y=0;if(M>2.5){let E=[],R=[];for(let v=0;v<=20;v++)E.push(new C(0,-(v/20)*M,0)),R.push(new C(1,0,0));p.add(wn(new hn(E,{normalen:R}),{typ:"anker",staerkeMm:x,material:i,res:e,saat:a})),y=-M}let S=new We;S.position.y=y,S.rotation.y=An/2,S.add(_.gruppe),p.add(S),s.add(p),r.push({knoten:p,laengeMm:(M+_.hoeheMm)*.6,achse:"frei"}),o=-m.y+M+_.hoeheMm}}function Iy(n,e=["gold","silber"]){let t={gold:"Gold",silber:"Silber",rosegold:"Ros\xE9gold",weissgold:"Wei\xDFgold"};return e.map(i=>({name:t[i],spec:{...n,metall:i,name:t[i]}}))}function zt(n,e,t,i){let s=Iy(t,i);return{name:n,beschreibung:e,spec:s[0].spec,varianten:s}}var Rt={"perlentropfen-ohrringe":zt("Perlentropfen-Ohrringe","Goldene Huggie-Creole (12 mm) mit beweglichem S\xFC\xDFwasserperlen-Tropfen.",{art:"ohrringe",metall:"gold",ohrring:{typ:"huggie",durchmesserMm:12,staerkeMm:2.1},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"weiss"}}),"basic-creolen":zt("Basic Creolen","Schlichte, runde Creolen, 18 mm, hochglanzpoliert.",{art:"ohrringe",metall:"gold",ohrring:{typ:"creole",durchmesserMm:18,staerkeMm:2.2,profil:"rund"}}),"sonnen-ohrstecker":zt("Sonnen-Ohrstecker","Kleine Sonne mit facettierten Strahlen als Ohrstecker, 9 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"stecker"},anhaenger:{typ:"sonne",groesseMm:9}}),"perlen-ohrstecker":zt("Perlen-Ohrstecker","Klassische S\xFC\xDFwasserperle (7 mm, Button) auf goldener Schale.",{art:"ohrringe",metall:"gold",ohrring:{typ:"perlenstecker"},perlen:{groesseMm:7,form:"button",farbe:"weiss"}}),"perlen-haenger":zt("Perlen-H\xE4nger","Goldkugel-Stecker mit feinem Kettchen und tropfenf\xF6rmiger Perle, ca. 30 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"haenger",laengeMm:30},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"creme"}}),"lunara-armband":zt("Lunara Armband","Feine Ankerkette mit Mond-Charm und kleiner S\xFC\xDFwasserperle, 17 cm + 4 cm Verl\xE4ngerung.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:4},kette:{typ:"anker",staerkeMm:1.3},anhaenger:{typ:"mond",groesseMm:9},perlen:{anordnung:"einzeln",anzahl:1,groesseMm:4.5,form:"tropfen",farbe:"weiss"}}),"perlen-armband":zt("Perlen-Armband","S\xFC\xDFwasserperlen (6 mm) auf Draht, getrennt durch goldene Zwischenperlen.",{art:"armband",metall:"gold",armband:{typ:"perlen",laengeCm:17,zwischenperlenMm:2.5},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"zartes-perlenarmband":zt("Zartes Perlenarmband","Hauchfeine Ankerkette mit einer einzelnen S\xFC\xDFwasserperle.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:3},kette:{typ:"anker",staerkeMm:1},perlen:{anordnung:"stationen",anzahl:1,groesseMm:5,form:"rund",farbe:"weiss"}}),"florea-kette":zt("Florea Kette","Feine Ankerkette (45 cm) mit Bl\xFCtenanh\xE4nger und Perle in der Mitte.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.2,laengeCm:45},anhaenger:{typ:"blume",groesseMm:12},perlen:{groesseMm:4,farbe:"weiss"}}),perlenkette:zt("Perlenkette","Strang aus S\xFC\xDFwasserperlen (6 mm), 42 cm, mit goldenem Federring.",{art:"kette",metall:"gold",kette:{typ:"perlenstrang",laengeCm:42},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"perlen-station-kette":zt("Perlen-Station-Kette","Feine Ankerkette mit f\xFCnf kleinen S\xFC\xDFwasserperlen im Abstand von 3,5 cm.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.1,laengeCm:45},perlen:{anordnung:"stationen",anzahl:5,abstandMm:35,groesseMm:5,form:"rund",farbe:"weiss"}}),"muenz-kette":zt("M\xFCnz-Kette","Geh\xE4mmerte M\xFCnze (13 mm) an einer Figarokette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"figaro",staerkeMm:1.6,laengeCm:45},anhaenger:{typ:"muenze",groesseMm:13}}),"herz-kette":zt("Herz-Kette","Gew\xF6lbtes Herz (11 mm) an feiner Erbskette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"erbs",staerkeMm:1.3,laengeCm:45},anhaenger:{typ:"herz",groesseMm:11}},["gold","silber","rosegold"]),"solitaer-ring":zt("Solit\xE4r-Ring","Zarte Schiene mit Zirkonia-Brillant (5 mm) in Sechs-Krappen-Fassung.",{art:"ring",metall:"gold",ring:{typ:"solitaer",schieneMm:1.8,profil:"rund",innenDurchmesserMm:17,krappen:6},stein:{art:"zirkonia",groesseMm:5,schliff:"brillant"}},["gold","silber","weissgold"]),"perlen-ring":zt("Perlen-Ring","S\xFC\xDFwasserperle (7 mm) auf zarter, halbrunder Schiene.",{art:"ring",metall:"gold",ring:{typ:"perle",schieneMm:1.6,profil:"halbrund",innenDurchmesserMm:17},perlen:{groesseMm:7,form:"rund",farbe:"weiss"}}),"band-ring":zt("Band-Ring","Schlichter, hochglanzpolierter Bandring, 3 mm, halbrund.",{art:"ring",metall:"gold",ring:{typ:"band",schieneMm:3,profil:"halbrund",innenDurchmesserMm:17}}),"offener-perlenring":zt("Offener Perlenring","Offene Schiene mit zwei S\xFC\xDFwasserperlen an den Enden (Toi et Moi).",{art:"ring",metall:"gold",ring:{typ:"offen",schieneMm:1.5,profil:"rund",innenDurchmesserMm:17},perlen:{groesseMm:6,anzahl:2,form:"rund",farbe:"weiss"}})};var vf=["ring","armband","kette","ohrringe"],Ly={ohrring:"ohrringe",ohrstecker:"ohrringe",creolen:"ohrringe",halskette:"kette",collier:"kette",armreif:"armband",ringe:"ring"},fh={metall:["gold","silber","rosegold","weissgold"],"kette.typ":["anker","erbs","figaro","panzer","schlange","kugel","paperclip","seil","perlenstrang"],"perlen.form":["rund","barock","tropfen","button","reis"],"perlen.farbe":["weiss","creme","rose","champagner","grau"],"perlen.anordnung":["strang","stationen","einzeln"],"anhaenger.typ":["keiner",...uf],"ohrring.typ":["stecker","creole","huggie","haenger","perlenstecker"],"ohrring.profil":["rund","flach","halbrund"],"ohrring.befestigung":["stecker","haken"],"ring.typ":["band","solitaer","perle","offen","siegel","kette"],"ring.profil":["halbrund","rund","flach"],"stein.art":["zirkonia","diamant","saphir","rubin","smaragd","perle"],"stein.schliff":["brillant","oval","tropfen","smaragd"],"armband.typ":["kette","perlen","reif","tennis"]},ph={"kette.staerkeMm":[.6,6,1.2],"kette.laengeCm":[30,100,45],"perlen.groesseMm":[2,16,6],"perlen.abstandMm":[5,200,30],"perlen.anzahl":[0,200,0],"anhaenger.groesseMm":[4,40,12],"ohrring.durchmesserMm":[6,70,14],"ohrring.staerkeMm":[.8,8,2],"ohrring.laengeMm":[8,90,30],"ring.schieneMm":[1,12,2],"ring.innenDurchmesserMm":[12,26,17],"ring.krappen":[4,6,4],"stein.groesseMm":[1,14,4],"armband.laengeCm":[12,26,18],"armband.verlaengerungCm":[0,8,3],"armband.zwischenperlenMm":[0,6,2.5],"armband.breiteMm":[1,30,3]},Ny=["kette","perlen","anhaenger","ohrring","ring","stein","armband"],bf={auswahl:fh,zahlen:ph},Dy=new Set(["ohrring.profil"]);function gl(n){return n&&typeof n=="object"&&!Array.isArray(n)}function _l(n){let e=[],t=gl(n)?n:{};gl(n)||e.push("Spec fehlt oder ist kein Objekt.");let i={},s=typeof t.art=="string"?t.art.toLowerCase().trim():"";s=Ly[s]||s,vf.includes(s)||(e.push(`art '${t.art}' unbekannt (erlaubt: ${vf.join(", ")}); 'kette' verwendet.`),s="kette"),i.art=s,typeof t.name=="string"&&(i.name=t.name),i.metall=Mf("metall",t.metall,e);for(let r of Ny){let a=gl(t[r])?t[r]:{};t[r]!==void 0&&!gl(t[r])&&e.push(`${r} muss ein Objekt sein.`);let o={...a};for(let l of Object.keys(fh)){let[c,h]=l.split(".");if(!(c!==r||!h)){if(Dy.has(l)&&(a[h]===void 0||a[h]===null||a[h]==="")){delete o[h];continue}o[h]=Mf(l,a[h],e)}}for(let l of Object.keys(ph)){let[c,h]=l.split(".");c===r&&(o[h]=Uy(l,a[h],e))}i[r]=o}return i.ring.krappen!==4&&i.ring.krappen!==6&&(i.ring.krappen=i.ring.krappen>5?6:4),i.stein.farbe!==void 0&&i.stein.farbe!==null&&!/^#[0-9a-f]{6}$/i.test(String(i.stein.farbe))&&(e.push(`stein.farbe '${i.stein.farbe}' ist keine Farbe wie '#aabbcc'; Standard verwendet.`),i.stein.farbe=null),i.stein.farbe===void 0&&(i.stein.farbe=null),s==="ring"&&i.ring.typ==="solitaer"&&i.stein.art==="perle"&&(i.ring.typ="perle"),i.stein.art==="perle"&&(i.stein.art="zirkonia"),i.ohrring.befestigung===void 0&&(i.ohrring.befestigung="stecker"),i.armband.offen!==void 0?i.armband.offen=!!i.armband.offen:i.armband.offen=!1,{ok:e.length===0,fehler:e,spec:i}}function Mf(n,e,t){let i=fh[n];if(e==null||e==="")return i[0];let s=String(e).toLowerCase().trim().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/é/g,"e");return i.includes(s)?s:(t.push(`${n} '${e}' unbekannt (erlaubt: ${i.join(", ")}); '${i[0]}' verwendet.`),i[0])}function Uy(n,e,t){let[i,s,r]=ph[n];if(e==null||e==="")return r;let a=typeof e=="number"?e:parseFloat(String(e).replace(",","."));if(!Number.isFinite(a))return t.push(`${n} '${e}' ist keine Zahl; ${r} verwendet.`),r;if(a<i||a>s){let o=Math.min(s,Math.max(i,a));return t.push(`${n} ${a} ausserhalb ${i}\u2026${s}; auf ${o} begrenzt.`),o}return a}var Fy={ring:cf,armband:df,kette:xf,ohrringe:yf};function mh(n){let{spec:e,fehler:t}=_l(n);t.length&&typeof console<"u"&&console.warn("[schmuck] Spec-Hinweise:",t);let{name:i,...s}=e;e._saat=Jd(JSON.stringify({...s,metall:void 0}))+1;let r=new nr,a;try{a=Fy[e.art](e,r)}catch(h){return console.error("[schmuck] Bau fehlgeschlagen, Standardmodell verwendet:",h),r.dispose(),mh({art:e.art,metall:e.metall})}let o=a.gruppe;o.name=`schmuck-${e.art}`,o.userData.spec=e,o.userData.einheit="mm";let l={...a.masse};e.art==="kette"&&(l.halsRadiusMm=l.halsRadiusMm??55);let c=!1;return{art:e.art,gruppe:o,masse:l,pendel:a.pendel||[],dispose(){c||(c=!0,ky(o),r.dispose())}}}function ky(n){n.traverse(e=>{e.isInstancedMesh&&e.dispose()})}var Sf={type:"change"},_h={type:"start"},wf={type:"end"},xl=new Bs,Ef=new mn,Oy=Math.cos(70*Xe.DEG2RAD),Lt=new C,un=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gh=1e-6,yl=class extends Dr{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new dt,this._lastTargetPosition=new C,this._quat=new dt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xs,this._sphericalDelta=new Xs,this._scale=1,this._panOffset=new C,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new C,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zy.bind(this),this._onPointerDown=By.bind(this),this._onPointerUp=Vy.bind(this),this._onContextMenu=$y.bind(this),this._onMouseWheel=Wy.bind(this),this._onKeyDown=Xy.bind(this),this._onTouchStart=qy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=Hy.bind(this),this._onMouseMove=Gy.bind(this),this._interceptControlDown=Zy.bind(this),this._interceptControlUp=Ky.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ot.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sf),this.update(),this.state=ot.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<Oy?this.object.lookAt(this.target):(Ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Ef,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gh||this._lastTargetPosition.distanceToSquared(this.target)>gh?(this.dispatchEvent(Sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function By(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wf),this.state=ot.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case Ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case Ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(_h)}function Gy(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Wy(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(_h),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(wf))}function Xy(n){this.enabled!==!1&&this._handleKeyDown(n)}function qy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(_h)}function Yy(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function $y(n){this.enabled!==!1&&n.preventDefault()}function Zy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ky(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vl={mitte:"#FFFDF9",rand:"#EEE7DC",unten:"#E9E1D5"},Tf=`radial-gradient(120% 95% at 50% 38%, ${vl.mitte} 0%, #F8F3EB 48%, ${vl.rand} 100%)`;function Af(n,e,t){let i=Math.hypot(e*1.2,t*.95)/2,s=n.createRadialGradient(e/2,t*.38,0,e/2,t*.38,i*1.15);s.addColorStop(0,vl.mitte),s.addColorStop(.48,"#F8F3EB"),s.addColorStop(1,vl.rand),n.fillStyle=s,n.fillRect(0,0,e,t)}function Jy(){let n=new ss,e=new st(new as(40,48,24),new sn({side:kt,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vP;
        void main(){
          vec3 d = normalize(vP);
          float boden = smoothstep(0.04, -0.3, d.y);
          vec3 wand = mix(vec3(0.17, 0.155, 0.14), vec3(0.46, 0.43, 0.40), smoothstep(-0.15, 0.85, d.y));
          wand *= mix(1.0, 0.8, smoothstep(0.25, 0.95, d.z));
          vec3 tisch = vec3(0.92, 0.88, 0.82);
          gl_FragColor = vec4(mix(wand, tisch, boden), 1.0);
        }`}));n.add(e);let t=(i,s,r,a,o)=>{let l=new st(new ui(i,s),new Ci({color:new Ue(r).multiplyScalar(a),side:_n}));l.position.set(...o),l.lookAt(0,0,0),n.add(l)};return t(30,30,16777215,3,[0,30,2]),t(14,18,16775406,6.5,[-20,13,18]),t(5,26,15988223,3.4,[26,6,-4]),t(22,7,16777215,2,[0,9,-30]),t(16,7,16775920,1.6,[4,3,28]),n}function Rf(n){let e=new er(n),t=Jy(),i=e.fromScene(t,.02,.1,100).texture;return t.traverse(s=>{s.geometry&&s.geometry.dispose(),s.material&&s.material.dispose()}),e.dispose(),i}function Cf({farbe:n="#A08F80",glanz:e="#CDBFB2"}={}){let t=rr,i=-260,s=150,r=-210,a=120,o=Math.tan(t.brustNeigung),l=2.6,c=(A,L)=>-o*L-(l-o)*6*Math.log1p(Math.exp(L/6))-t.rundung*A*A,h=A=>{let L=Xe.smoothstep(A,-30,52);return t.halsRadius+118*Math.pow(1-L,.85)},d=[];for(let A=i;A<-40;A+=6)d.push(A);for(let A=-40;A<80;A+=1.5)d.push(A);for(let A=80;A<=s;A+=4)d.push(A);let u=d.length-1,f=[],g=[];for(let A=0;A<=u;A++){let L=d[A],D=h(L),N=Math.min(48,Math.max(0,D-t.halsRadius-4));for(let I=0;I<=a;I++){let F=(I/a*2-1)*D,V=c(F,L);if(N>0){let Y=Xe.clamp((Math.abs(F)-(D-N))/N,0,1);V-=N*1.5*Y*Y}f.push(F,L,Math.max(V,r))}}let x=a+1;for(let A=0;A<u;A++)for(let L=0;L<a;L++){let D=A*x+L,N=D+1,I=D+x,U=I+1;g.push(D,N,U,D,U,I)}let m=new ct;m.setAttribute("position",new He(f,3)),m.setIndex(g),m.computeVertexNormals();let p=new di({color:n,roughness:.9,metalness:0,sheen:1,sheenColor:new Ue(e),sheenRoughness:.45,side:_n}),_=new We;_.name="bueste";let M=new st(m,p);M.receiveShadow=!0,_.add(M);let y=(t.halsRadius+t.halsTiefeHinten)/2,S=new $t(t.halsRadius,t.halsRadius,s+30,72,1,!1);S.scale(1,1,y/t.halsRadius),S.translate(0,(s-30)/2,t.halsMitteZ-(t.halsTiefeHinten-t.halsRadius)/2);let E=new st(S,p);E.receiveShadow=!0,_.add(E);let R=new Ci({colorWrite:!1}),v=new $t(t.halsRadius-1.5,t.halsRadius-1.5,190,48,1,!1);v.scale(1,1,(t.halsRadius+t.halsTiefeHinten)/2/t.halsRadius),v.translate(0,75,t.halsMitteZ-(t.halsTiefeHinten-t.halsRadius)/2);let w=new st(v,R);return w.name="hals-verdecker",w.renderOrder=-1,{bueste:_,verdecker:w,dispose(){m.dispose(),S.dispose(),v.dispose(),p.dispose(),R.dispose()}}}var Vt=Math.PI/180,jy=25.4,ia=96/jy,ar={ring:{euler:[-90,0,0],luft:0,ansichten:{produkt:[-32,16],vorn:[0,4],seite:[-90,6],oben:[0,80]}},armband:{euler:[0,-42,0],luft:0,ansichten:{produkt:[-18,34],vorn:[0,10],seite:[-90,12],oben:[0,84]}},ohrringe:{euler:[0,-90,0],luft:7,ansichten:{produkt:[-16,10],vorn:[0,3],seite:[-90,6],oben:[0,70]}},kette:{euler:[0,0,0],luft:0,ansichten:{produkt:[-10,8],vorn:[0,4],seite:[-62,8],oben:[0,55]}}},Ml=class{constructor(e,{onAenderung:t=null,pixelRatio:i=null,studioHintergrund:s=!0,linealUnten:r=0,buesteFarbe:a=null}={}){this.buesteFarbe=a,this.rand=null,this.detail=!1,this.huelle=e,this.onAenderung=t,this.optionen={drehteller:!1,bueste:!0,paar:!0,echteGroesse:!1,lineal:!0},this.bildschirmPxProMm=ia,this.modell=null,this.art=null,this.ansichtName="produkt",this.flug=null,this.schmutzig=!0,this.entsorgt=!1,s&&(e.style.background=Tf),getComputedStyle(e).position==="static"&&(e.style.position="relative");let o=document.createElement("canvas");o.className="vorschau-leinwand",o.style.cssText="position:absolute;left:0;top:0;display:block;touch-action:none;outline:none;",o.setAttribute("aria-label","3D-Vorschau: ziehen zum Drehen, Mausrad oder zwei Finger zum Zoomen"),o.setAttribute("role","img"),e.appendChild(o),this.canvas=o;let l=new ol({canvas:o,antialias:!0,alpha:!0,powerPreference:"high-performance"});l.setPixelRatio(i||Math.min(2,window.devicePixelRatio||1)),l.outputColorSpace=Qt,l.toneMapping=Fr,l.toneMappingExposure=1,l.shadowMap.enabled=!0,l.shadowMap.type=ki,l.setClearColor(0,0),this.renderer=l,this.szene=new ss,this.umgebung=Rf(l),this.szene.environment=this.umgebung,this.kamera=new Yt(22,1,1,6e3),this.steuerung=new yl(this.kamera,o);let c=this.steuerung;c.enableDamping=!0,c.dampingFactor=.09,c.rotateSpeed=.7,c.zoomSpeed=.8,c.enablePan=!0,c.screenSpacePanning=!0,c.autoRotateSpeed=1.6,c.addEventListener("change",()=>{this.schmutzig=!0}),c.addEventListener("start",()=>{this.flug=null}),o.addEventListener("wheel",()=>{this.optionen.echteGroesse&&this.setze({echteGroesse:!1},!0)},{passive:!0}),this.licht=new Nr(16774892,1.15),this.licht.castShadow=!0,this.licht.shadow.mapSize.set(1024,1024),this.licht.shadow.radius=10,this.licht.shadow.blurSamples=24,this.licht.shadow.bias=-5e-4,this.szene.add(this.licht,this.licht.target),this.boden=new st(new ui(6e3,6e3),new Cr({opacity:.16})),this.boden.rotation.x=-Math.PI/2,this.boden.receiveShadow=!0,this.szene.add(this.boden),this.halter=new We,this.szene.add(this.halter),this.buesteTeile=null,this.lineal=document.createElement("canvas"),this.lineal.className="vorschau-lineal",this.lineal.setAttribute("aria-hidden","true"),this.lineal.style.cssText=`position:absolute;left:0;top:auto;bottom:${r}px;pointer-events:none;`,e.appendChild(this.lineal),this.linealStand="",this.groesse={b:1,h:1},this.beobachter=new ResizeObserver(()=>this.passeGroesseAn()),this.beobachter.observe(e),this.passeGroesseAn(),this.zeit=performance.now(),this.schleife=this.schleife.bind(this),this.raf=requestAnimationFrame(this.schleife)}zeige(e,{halteAnsicht:t=!1}={}){let i=!this.modell||this.modell.art!==e.art;this.leereHalter(),this.modell&&this.modell.dispose(),this.modell=e,this.art=e.art;let s=ar[e.art]||ar.ring;e.gruppe.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!1)});let r=new We;if(r.rotation.set(s.euler[0]*Vt,s.euler[1]*Vt,s.euler[2]*Vt),r.add(e.gruppe),this.halter.add(r),e.art==="ohrringe"&&this.optionen.paar){r.updateMatrixWorld(!0);let a=new Ft().setFromObject(r),o=a.max.x-a.min.x,l=Math.max(o+7,16),c=new We;c.scale.x=-1;let h=r.clone(!0);c.add(h),r.position.x+=l/2,c.position.x-=l/2,this.halter.add(c)}e.art==="kette"&&(this.buesteTeile||(this.buesteTeile=Cf(this.buesteFarbe?{farbe:this.buesteFarbe}:{})),r.add(this.optionen.bueste?this.buesteTeile.bueste:this.buesteTeile.verdecker)),this.richteAus(),i||!t?this.ansicht(t?this.ansichtName:"produkt",{sofort:!0,rahmen:!0}):this.rahmeNeu(!1),this.schmutzig=!0}leereHalter(){this.buesteTeile&&(this.buesteTeile.bueste.removeFromParent(),this.buesteTeile.verdecker.removeFromParent()),this.modell&&this.modell.gruppe.removeFromParent(),this.halter.clear(),this.halter.position.set(0,0,0)}richteAus(){let e=ar[this.art]||ar.ring;this.halter.position.set(0,0,0),this.halter.updateMatrixWorld(!0);let t=this.schmuckBox(),i=t.getCenter(new C);this.art==="kette"?(this.halter.position.set(0,0,0),this.boden.position.y=-400):(this.halter.position.set(-i.x,-t.min.y+e.luft,-i.z),this.boden.position.y=0),this.halter.updateMatrixWorld(!0);let s=this.schmuckBox(),r=s.getSize(new C),a=Math.max(10,r.length()/2),o=s.getCenter(new C),l=(this.art==="ohrringe"?new C(-.18,1,.22):new C(-.32,1,.38)).normalize();this.licht.target.position.copy(o),this.licht.position.copy(o).addScaledVector(l,a*6);let c=this.licht.shadow.camera,h=this.art==="kette"?a*1.6:a*1.25;c.left=-h,c.right=h,c.top=h,c.bottom=-h,c.near=a*2,c.far=a*12,c.updateProjectionMatrix();let d=this.art==="kette"?1.2:this.art==="ohrringe"?3.2:2;this.licht.shadow.radius=Xe.clamp(d/(2*h/this.licht.shadow.mapSize.x),1.5,25),this.boden.material.opacity=this.art==="ohrringe"?.12:.16,this.licht.shadow.needsUpdate=!0}schmuckBox(){let e=new Ft;return this.halter.updateMatrixWorld(!0),this.halter.traverse(t=>{if(!t.isMesh||!t.visible)return;let i=t;for(;i;){if(i.name==="bueste"||i.name==="hals-verdecker")return;i=i.parent}if(t.isInstancedMesh){let s=new Oe;t.geometry.boundingBox||t.geometry.computeBoundingBox();for(let r=0;r<t.count;r++)t.getMatrixAt(r,s),e.union(t.geometry.boundingBox.clone().applyMatrix4(s.premultiply(t.matrixWorld)))}else e.expandByObject(t,!0)}),e.isEmpty()&&e.setFromCenterAndSize(new C,new C(20,20,20)),e}setze(e,t=!1){let i={...this.optionen};Object.assign(this.optionen,e);let s=this.optionen;if(this.steuerung.autoRotate=!!s.drehteller,this.modell&&(i.bueste!==s.bueste||i.paar!==s.paar)){let r=this.modell;this.modell=null,this.leereHalter(),this.zeigeOhneEntsorgen(r)}i.echteGroesse!==s.echteGroesse&&(this.steuerung.enableZoom=!0,this.rahmeNeu(!0)),this.lineal.style.display=s.lineal?"":"none",this.linealStand="",this.schmutzig=!0,t&&this.onAenderung&&this.onAenderung({...s})}zeigeOhneEntsorgen(e){let t=this.ansichtName,i=this.steuerung.target.clone(),s=this.kamera.position.clone();this.modell=null,this.zeige(e,{halteAnsicht:!0}),this.ansichtName=t,this.steuerung.target.copy(i),this.kamera.position.copy(s),this.rahmeNeu(!1)}setzeBildschirmMass(e){this.bildschirmPxProMm=e>0?e:ia,this.optionen.echteGroesse&&this.rahmeNeu(!0),this.linealStand="",this.schmutzig=!0}ansicht(e,{sofort:t=!1,rahmen:i=!0}={}){let s=ar[this.art]||ar.ring,[r,a]=s.ansichten[e]||s.ansichten.produkt;this.ansichtName=e;let{ziel:o,abstand:l}=this.rahmenFuer(),c=new C(Math.sin(r*Vt)*Math.cos(a*Vt),Math.sin(a*Vt),Math.cos(r*Vt)*Math.cos(a*Vt)),h=i?l:this.kamera.position.distanceTo(this.steuerung.target),d=o.clone().addScaledVector(c,h);this.begrenze(),t?(this.flug=null,this.steuerung.target.copy(o),this.kamera.position.copy(d),this.steuerung.update()):this.flug={t:0,dauer:.55,vonZiel:this.steuerung.target.clone(),nachZiel:o,vonPos:this.kamera.position.clone(),nachPos:d},this.schmutzig=!0}rahmenFuer(){let e=this.schmuckBox(),t=e.getCenter(new C),i=e.getSize(new C),s=Math.max(4,i.length()/2);if(this.art==="kette"){let c=new Ft(new C(e.min.x,e.min.y,-20),e.max.clone());c.max.y=Math.min(e.max.y,30),c.getCenter(t);let h=c.getSize(new C);s=Math.max(h.x,h.y)*.68,t.y-=h.y*.06,this.detail&&(s=Math.max(38,h.x*.5),t.y=e.min.y+s*.6)}let r=this.kamera.fov*Vt,a=2*Math.atan(Math.tan(r/2)*this.kamera.aspect),o=Math.min(r,a)/2,l=s/Math.sin(o)*(this.rand??(this.art==="kette"?1:1.12));return this.optionen.echteGroesse&&(l=this.abstandFuerMass(this.bildschirmPxProMm)),{ziel:t,abstand:l}}abstandFuerMass(e){return this.groesse.h/(2*Math.tan(this.kamera.fov*Vt/2)*e)}rahmeNeu(e){let{ziel:t,abstand:i}=this.rahmenFuer(),s=this.kamera.position.clone().sub(this.steuerung.target).normalize();(!Number.isFinite(s.x)||s.lengthSq()<.5)&&s.set(0,.2,1).normalize();let r=e||this.optionen.echteGroesse?i:this.kamera.position.distanceTo(this.steuerung.target);this.flug=null,this.steuerung.target.copy(t),this.kamera.position.copy(t).addScaledVector(s,r),this.begrenze(),this.steuerung.update(),this.schmutzig=!0}begrenze(){let{abstand:e}=this.rahmenFuerOhneMass(),t=this.steuerung;t.minDistance=e*.18,t.maxDistance=Math.max(e*4,this.abstandFuerMass(this.bildschirmPxProMm)*1.5),this.art==="kette"&&this.optionen.bueste?(t.minAzimuthAngle=-75*Vt,t.maxAzimuthAngle=75*Vt,t.maxPolarAngle=100*Vt):(t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t.maxPolarAngle=92*Vt)}rahmenFuerOhneMass(){let e=this.optionen.echteGroesse;this.optionen.echteGroesse=!1;let t=this.rahmenFuer();return this.optionen.echteGroesse=e,t}pxProMm(){let e=this.kamera.position.distanceTo(this.steuerung.target);return this.groesse.h/(2*Math.tan(this.kamera.fov*Vt/2)*e)}passeGroesseAn(){let e=Math.max(1,this.huelle.clientWidth),t=Math.max(1,this.huelle.clientHeight);if(e===this.groesse.b&&t===this.groesse.h)return;this.groesse={b:e,h:t},this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.kamera.aspect=e/t,this.kamera.updateProjectionMatrix();let i=Math.min(2,window.devicePixelRatio||1);this.lineal.width=Math.round(e*i),this.lineal.height=Math.round(64*i),this.lineal.style.width=e+"px",this.lineal.style.height="64px",this.linealStand="",this.modell&&this.rahmeNeu(!0),this.schmutzig=!0,this.zeichne()}schleife(){if(this.entsorgt)return;this.raf=requestAnimationFrame(this.schleife);let e=performance.now(),t=Math.min(.05,(e-this.zeit)/1e3);if(this.zeit=e,this.flug){let s=this.flug;s.t+=t/s.dauer;let r=s.t>=1?1:1-Math.pow(1-s.t,3);this.steuerung.target.lerpVectors(s.vonZiel,s.nachZiel,r);let a=s.vonPos.clone().sub(s.vonZiel),o=s.nachPos.clone().sub(s.nachZiel),l=a.length(),c=o.length(),h=a.normalize().lerp(o.normalize(),r).normalize();this.kamera.position.copy(this.steuerung.target).addScaledVector(h,l+(c-l)*r),s.t>=1&&(this.flug=null),this.schmutzig=!0}(this.steuerung.update(t)||this.steuerung.autoRotate)&&(this.schmutzig=!0),this.schmutzig&&this.zeichne()}zeichne(){this.schmutzig=!1,this.renderer.render(this.szene,this.kamera),this.zeichneLineal()}zeichneLineal(){if(!this.optionen.lineal)return;let e=this.pxProMm(),t=`${e.toFixed(3)}|${this.groesse.b}|${this.optionen.echteGroesse}`;if(t===this.linealStand)return;this.linealStand=t;let i=this.lineal,s=i.getContext("2d"),r=i.width/this.groesse.b;s.setTransform(r,0,0,r,0,0),s.clearRect(0,0,this.groesse.b,64);let a=Math.min(this.groesse.b*.62,560),o=[5,10,20,30,50,100,200,300,500],l=o[0];for(let _ of o)_*e<=a&&(l=_);let c=e>=4?1:e>=1.6?5:10,h=l<=30?5:l<=100?10:50,d=l<=20?5:l<=100?10:l<=200?50:100,u=Math.round((this.groesse.b-l*e)/2)+.5,f=40.5,g=this.optionen.echteGroesse?108:26,x=u-16,m=u+l*e+g;s.fillStyle="rgba(255,253,249,0.66)",s.beginPath(),s.roundRect?s.roundRect(x,15,m-x,34,17):s.rect(x,15,m-x,34),s.fill(),s.strokeStyle="rgba(30,27,24,0.55)",s.fillStyle="rgba(30,27,24,0.72)",s.lineWidth=1,s.beginPath(),s.moveTo(u,f),s.lineTo(u+l*e,f);for(let _=0;_<=l+1e-6;_+=c){let M=Math.round(u+_*e)+0,y=_%h===0?9:_%5===0?6:3.5;s.moveTo(M,f),s.lineTo(M,f-y)}s.stroke(),s.font='500 10px system-ui, -apple-system, "Segoe UI", sans-serif',s.textAlign="center",s.textBaseline="alphabetic";for(let _=0;_<=l+1e-6;_+=d)s.fillText(String(_),u+_*e,f-13);s.textAlign="left",s.font='500 9px system-ui, -apple-system, "Segoe UI", sans-serif';let p=this.optionen.echteGroesse?"MM \xB7 ECHTE GR\xD6SSE":"MM";s.fillText(p,u+l*e+8,f-1)}async alsBild({groesse:e=2048,hintergrund:t="hell",typ:i="image/png",qualitaet:s=.92}={}){let r=this.renderer,a=r.getPixelRatio(),o=this.kamera.aspect,l=document.createElement("canvas");l.width=l.height=e;let c=l.getContext("2d");t==="hell"&&Af(c,e,e);try{r.setPixelRatio(1),r.setSize(e,e,!1),this.kamera.aspect=1;let h=this.kamera.fov;o<1&&(this.kamera.fov=2*Math.atan(Math.tan(h*Vt/2)*o)/Vt),this.kamera.updateProjectionMatrix(),this.licht.shadow.needsUpdate=!0,r.render(this.szene,this.kamera),c.drawImage(r.domElement,0,0,e,e),this.kamera.fov=h}finally{r.setPixelRatio(a),r.setSize(this.groesse.b,this.groesse.h,!1),this.kamera.aspect=o,this.kamera.updateProjectionMatrix(),this.zeichne()}return new Promise((h,d)=>l.toBlob(u=>u?h(u):d(new Error("Bild konnte nicht erzeugt werden")),i,s))}dispose(){this.entsorgt||(this.entsorgt=!0,cancelAnimationFrame(this.raf),this.beobachter.disconnect(),this.leereHalter(),this.modell&&this.modell.dispose(),this.buesteTeile&&this.buesteTeile.dispose(),this.steuerung.dispose(),this.boden.geometry.dispose(),this.boden.material.dispose(),this.umgebung.dispose(),this.renderer.dispose(),this.canvas.remove(),this.lineal.remove())}};var bl=class{constructor({ebene:e,daneben:t,bereich:i,onAenderung:s=()=>{}}){this.ebene=e,this.danebenEl=t,this.bereich=i,this.onAenderung=s,this.url=null,this.modus="darueber",this.deckkraft=.5,this.ausrichten=!1,this.lage={x:0,y:0,s:1},this.bildOben=document.createElement("img"),this.bildOben.alt="Produktfoto (Abgleich)",this.bildOben.draggable=!1,this.ebene.appendChild(this.bildOben),this.bildDaneben=document.createElement("img"),this.bildDaneben.alt="Produktfoto",this.danebenEl.appendChild(this.bildDaneben),this.ziehen=null,this.ebene.addEventListener("pointerdown",r=>this.start(r)),this.ebene.addEventListener("pointermove",r=>this.bewege(r)),this.ebene.addEventListener("pointerup",r=>this.ende(r)),this.ebene.addEventListener("pointercancel",r=>this.ende(r)),this.ebene.addEventListener("wheel",r=>this.rad(r),{passive:!1}),this.ebene.addEventListener("keydown",r=>this.taste(r)),this.zeige()}get geladen(){return!!this.url}async lade(e){if(!e||!/^image\//.test(e.type))throw new Error("Bitte ein Bild (JPG, PNG, WebP) w\xE4hlen.");let t=URL.createObjectURL(e);await new Promise((i,s)=>{let r=new Image;r.onload=i,r.onerror=()=>s(new Error("Das Bild konnte nicht ge\xF6ffnet werden.")),r.src=t}),this.url&&URL.revokeObjectURL(this.url),this.url=t,this.bildOben.src=t,this.bildDaneben.src=t,this.lage={x:0,y:0,s:1},this.zeige()}setzeModus(e){this.modus=e==="daneben"?"daneben":"darueber",this.zeige()}setzeDeckkraft(e){this.deckkraft=Math.min(1,Math.max(.05,e)),this.zeige()}setzeAusrichten(e){this.ausrichten=!!e,this.zeige(),e&&this.ebene.focus({preventScroll:!0})}zuruecksetzen(){this.lage={x:0,y:0,s:1},this.zeige()}entferne(){this.url&&URL.revokeObjectURL(this.url),this.url=null,this.bildOben.removeAttribute("src"),this.bildDaneben.removeAttribute("src"),this.ausrichten=!1,this.zeige()}zeige(){let e=!!this.url,t=e&&this.modus==="darueber";this.ebene.hidden=!t,this.ebene.classList.toggle("ausrichten",t&&this.ausrichten),this.ebene.tabIndex=t&&this.ausrichten?0:-1,this.bildOben.style.opacity=String(this.deckkraft);let{x:i,y:s,s:r}=this.lage;this.bildOben.style.transform=`translate(${i}px, ${s}px) scale(${r})`,this.bereich.classList.toggle("mit-foto-daneben",e&&this.modus==="daneben"),this.danebenEl.hidden=!(e&&this.modus==="daneben"),this.onAenderung(this)}start(e){!this.ausrichten||e.button>0||(this.ebene.setPointerCapture(e.pointerId),this.ziehen={id:e.pointerId,x:e.clientX,y:e.clientY,x0:this.lage.x,y0:this.lage.y},e.preventDefault())}bewege(e){!this.ziehen||e.pointerId!==this.ziehen.id||(this.lage.x=this.ziehen.x0+(e.clientX-this.ziehen.x),this.lage.y=this.ziehen.y0+(e.clientY-this.ziehen.y),this.zeige())}ende(e){this.ziehen&&e.pointerId===this.ziehen.id&&(this.ziehen=null)}rad(e){if(!this.ausrichten)return;e.preventDefault();let t=Math.exp(-e.deltaY*.0012);this.skaliere(t,e.clientX,e.clientY)}skaliere(e,t,i){let s=this.ebene.getBoundingClientRect(),r=(t??s.left+s.width/2)-(s.left+s.width/2),a=(i??s.top+s.height/2)-(s.top+s.height/2),o=this.lage.s,l=Math.min(8,Math.max(.15,o*e)),c=l/o;this.lage.x=r-(r-this.lage.x)*c,this.lage.y=a-(a-this.lage.y)*c,this.lage.s=l,this.zeige()}taste(e){if(!this.ausrichten)return;let t=e.shiftKey?10:1,i={ArrowLeft:[-t,0],ArrowRight:[t,0],ArrowUp:[0,-t],ArrowDown:[0,t]}[e.key];i&&(this.lage.x+=i[0],this.lage.y+=i[1],this.zeige(),e.preventDefault()),(e.key==="+"||e.key==="=")&&(this.skaliere(1.02),e.preventDefault()),e.key==="-"&&(this.skaliere(1/1.02),e.preventDefault())}};var xt=(n,{b:e=24,klasse:t="sym"}={})=>`<svg class="${t}" viewBox="0 0 ${e} ${e}" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${n}</svg>`,rt={drehen:xt('<path d="M4.5 12a7.5 7.5 0 0 1 13.1-5"/><path d="M17.9 3.6v3.6h-3.6"/><path d="M19.5 12a7.5 7.5 0 0 1-13.1 5"/><path d="M6.1 20.4v-3.6h3.6"/>'),lineal:xt('<rect x="2.5" y="8.5" width="19" height="7" rx="1"/><path d="M6 8.5v3M9.5 8.5v2M13 8.5v3M16.5 8.5v2M20 8.5v3"/>'),massstab:xt('<path d="M4 7v10M20 7v10M4 12h16"/><path d="M7 9.5 4 12l3 2.5M17 9.5l3 2.5-3 2.5"/>'),bueste:xt('<path d="M9 3.5h6v5.5c0 1 .4 1.6 1.4 2l3.6 1.6c.9.4 1.5 1.3 1.5 2.3V20.5h-19v-5.6c0-1 .6-1.9 1.5-2.3L7.6 11c1-.4 1.4-1 1.4-2z"/><path d="M8.7 11.6c.8 2.6 1.9 3.9 3.3 3.9s2.5-1.3 3.3-3.9"/>'),paar:xt('<circle cx="7.5" cy="8" r="3.2"/><circle cx="16.5" cy="8" r="3.2"/><path d="M7.5 11.2v2.3M16.5 11.2v2.3"/><ellipse cx="7.5" cy="16.6" rx="1.9" ry="2.6"/><ellipse cx="16.5" cy="16.6" rx="1.9" ry="2.6"/>'),bild:xt('<rect x="3" y="4.5" width="18" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.7"/><path d="m3.5 17.5 5-4.5 3.5 3 3-2.5 5.5 4.5"/>'),kamera:xt('<path d="M4 8.5h3l1.6-2.5h6.8L17 8.5h3a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.3" r="3.4"/>'),laden:xt('<path d="M12 15.5V4M7.5 8.5 12 4l4.5 4.5"/><path d="M4 15v3.5c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V15"/>'),speichern:xt('<path d="M12 4v11.5M7.5 11 12 15.5l4.5-4.5"/><path d="M4 15v3.5c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V15"/>'),kopieren:xt('<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>'),haken:xt('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),plus:xt('<path d="M12 5v14M5 12h14"/>'),kreuz:xt('<path d="M6 6l12 12M18 6 6 18"/>'),info:xt('<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.4"/>'),achtung:xt('<path d="M12 4 21 19.5H3z"/><path d="M12 10v4.5M12 17v.3"/>'),verschieben:xt('<path d="M12 3v18M3 12h18"/><path d="m9.5 5.5 2.5-2.5 2.5 2.5M9.5 18.5l2.5 2.5 2.5-2.5M5.5 9.5 3 12l2.5 2.5M18.5 9.5 21 12l-2.5 2.5"/>'),vorlagen:xt('<rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/>'),neu:xt('<path d="M13.5 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5z"/><path d="M13.5 3.5v5h5M12 11.5v6M9 14.5h6"/>'),buch:xt('<path d="M12 6.5C10.3 5 7.9 4.5 4 4.5v13c3.9 0 6.3.5 8 2 1.7-1.5 4.1-2 8-2v-13c-3.9 0-6.3.5-8 2z"/><path d="M12 6.5v13"/>'),pfeil:xt('<path d="m9 6 6 6-6 6"/>'),zurueck:xt('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4v3.5H8"/>'),ring:xt('<ellipse cx="12" cy="14" rx="6.5" ry="6.5"/><ellipse cx="12" cy="14" rx="5" ry="5"/><path d="m9.8 7.7 2.2-3.2 2.2 3.2"/><path d="M10.3 5.6h3.4"/>'),kette:xt('<path d="M4 3.5c0 7 3.6 11 8 11s8-4 8-11"/><path d="M12 14.5v1.2"/><path d="M12 15.7c-1.6 0-2.6 1.1-2.6 2.4 0 1.5 1.3 2.4 2.6 2.4s2.6-.9 2.6-2.4c0-1.3-1-2.4-2.6-2.4z"/>'),ohrringe:xt('<circle cx="12" cy="7.5" r="4"/><path d="M12 11.5v1.8"/><path d="M12 13.3c-1.8 0-3 1.6-3 3.4 0 2 1.4 3.3 3 3.3s3-1.3 3-3.3c0-1.8-1.2-3.4-3-3.4z"/>'),armband:xt('<ellipse cx="12" cy="12" rx="8.5" ry="5"/><ellipse cx="12" cy="12.6" rx="6.6" ry="3.4"/><path d="M12 17v1.6"/><circle cx="12" cy="19.6" r="1.1"/>')};var Lh={};np(Lh,{ABSCHNITTE:()=>Al,ARTEN:()=>aa,ART_NAMEN:()=>or,AUSWAHL:()=>$i,METALL_HINWEIS:()=>Sl,METALL_NAMEN:()=>Zi,PERL_TUPFER:()=>vh,STEIN_TUPFER:()=>wl,VORLAGEN:()=>Rt,ZAHLEN:()=>ra,alsJson:()=>Pl,bereichVon:()=>wh,exportPfade:()=>Pf,gleicheAn:()=>Ah,kompakt:()=>oa,leseJson:()=>Rh,lies:()=>Tl,naechstesMetall:()=>Ih,optionenVon:()=>Eh,perlenAn:()=>Vn,pruefeAusgabe:()=>Ch,schreibe:()=>Mh,setzeWert:()=>Th,sichtbareAbschnitte:()=>Cl,text:()=>Rl,vollstaendig:()=>ds,vorlagenNachArt:()=>Ph,wertName:()=>El});var{auswahl:$i,zahlen:ra}=bf,aa=[{wert:"ohrringe",name:"Ohrringe"},{wert:"kette",name:"Kette"},{wert:"armband",name:"Armband"},{wert:"ring",name:"Ring"}],or=Object.fromEntries(aa.map(n=>[n.wert,n.name])),Zi={gold:"Gold",silber:"Silber",rosegold:"Ros\xE9gold",weissgold:"Wei\xDFgold"},Sl={gold:"18k PVD-vergoldet",silber:"Edelstahl, silberfarben",rosegold:"PVD ros\xE9gold",weissgold:"hell, rhodiniert"},Qy={metall:Zi,"kette.typ":{anker:"Anker",erbs:"Erbs",figaro:"Figaro",panzer:"Panzer",schlange:"Schlange",kugel:"Kugel",paperclip:"Paperclip",seil:"Kordel",perlenstrang:"Perlenstrang"},"perlen.form":{rund:"Rund",barock:"Barock",tropfen:"Tropfen",button:"Button",reis:"Reis"},"perlen.farbe":{weiss:"Wei\xDF",creme:"Creme",rose:"Ros\xE9",champagner:"Champagner",grau:"Grau"},"anhaenger.typ":{keiner:"Keiner",perle:"Perle",sonne:"Sonne",blume:"Blume",mond:"Mond",herz:"Herz",muenze:"M\xFCnze",tropfen:"Tropfen",stein:"Stein",stern:"Stern",muschel:"Muschel"},"ohrring.typ":{stecker:"Stecker",creole:"Creole",huggie:"Huggie",haenger:"H\xE4nger",perlenstecker:"Perlenstecker"},"ohrring.profil":{"":"Automatisch",rund:"Rund",halbrund:"Halbrund",flach:"Flach"},"ohrring.befestigung":{stecker:"Kugelstecker",haken:"Haken"},"ring.typ":{band:"Band",solitaer:"Solit\xE4r",perle:"Perle",offen:"Offen",siegel:"Siegel",kette:"Kette"},"ring.profil":{halbrund:"Halbrund",rund:"Rund",flach:"Flach"},"ring.krappen":{4:"4 Krappen",6:"6 Krappen"},"stein.art":{zirkonia:"Zirkonia",diamant:"Diamant",saphir:"Saphir",rubin:"Rubin",smaragd:"Smaragd"},"stein.schliff":{brillant:"Brillant",oval:"Oval",tropfen:"Tropfen",smaragd:"Treppe"},"armband.typ":{kette:"Kette",perlen:"Perlen",reif:"Reif",tennis:"Tennis"},perlenAn:{keine:"Keine",stationen:"Stationen",einzeln:"Einzeln"}};function El(n,e){let t=Qy[n];return t&&t[e]||String(e)}var vh={weiss:"#F4F1EC",creme:"#EFE3CF",rose:"#F1DDD8",champagner:"#E3CDAE",grau:"#8D8C92"},wl={zirkonia:"#F4F6F8",diamant:"#FFFFFF",saphir:"#2B4FA8",rubin:"#B3123A",smaragd:"#1E8A55"};function Tl(n,e){return e.split(".").reduce((t,i)=>t?.[i],n)}function Mh(n,e,t){let i=e.split("."),s=n;for(let a=0;a<i.length-1;a++)(!s[i[a]]||typeof s[i[a]]!="object")&&(s[i[a]]={}),s=s[i[a]];let r=i[i.length-1];t===void 0?delete s[r]:s[r]=t}var xh=n=>n.ohrring.typ==="creole"||n.ohrring.typ==="huggie",ti=n=>n.anhaenger.typ,ev=n=>ti(n)==="perle"||ti(n)==="blume";function Vn(n){return n.perlen.anzahl>0?n.perlen.anordnung==="einzeln"?"einzeln":n.perlen.anordnung==="stationen"?"stationen":"keine":"keine"}var bh=n=>n.art==="ohrringe"&&n.ohrring.typ!=="perlenstecker"||n.art==="kette"||n.art==="armband"&&n.armband.typ==="kette",Sh=n=>{switch(n.art){case"ohrringe":return n.ohrring.typ==="perlenstecker";case"kette":return n.kette.typ==="perlenstrang"||Vn(n)!=="keine";case"armband":return n.armband.typ==="perlen"||n.armband.typ==="kette"&&Vn(n)!=="keine";case"ring":return n.ring.typ==="perle"||n.ring.typ==="offen";default:return!1}},yh=n=>Sh(n)||bh(n)&&ev(n),tv=n=>Sh(n)||bh(n)&&ti(n)==="perle",nv=n=>{switch(n.art){case"ohrringe":return n.ohrring.typ==="stecker"&&(ti(n)==="keiner"||ti(n)==="stein")||n.ohrring.typ!=="perlenstecker"&&ti(n)==="stein";case"kette":return ti(n)==="stein";case"armband":return n.armband.typ==="tennis"||n.armband.typ==="kette"&&ti(n)==="stein";case"ring":return n.ring.typ==="solitaer";default:return!1}},sa=n=>n.art==="kette"&&n.kette.typ!=="perlenstrang"||n.art==="armband"&&n.armband.typ==="kette",Al=[{id:"ohrring",titel:"Ohrring",wenn:n=>n.art==="ohrringe",felder:[{pfad:"ohrring.typ",label:"Typ",typ:"wahl"},{pfad:"ohrring.durchmesserMm",label:"Durchmesser",typ:"zahl",einheit:"mm",schritt:.5,bereich:()=>[8,50],wenn:xh},{pfad:"ohrring.staerkeMm",label:"St\xE4rke",typ:"zahl",einheit:"mm",schritt:.1,bereich:()=>[1,6],wenn:xh},{pfad:"ohrring.profil",label:"Profil",typ:"wahl",optionen:()=>["","rund","halbrund","flach"],wenn:xh},{pfad:"ohrring.laengeMm",label:"Gesamtl\xE4nge",typ:"zahl",einheit:"mm",schritt:1,bereich:()=>[12,80],wenn:n=>n.ohrring.typ==="haenger",hinweis:()=>"vom Ohrloch bis zum tiefsten Punkt"},{pfad:"ohrring.befestigung",label:"Befestigung",typ:"wahl",wenn:n=>n.ohrring.typ==="haenger"}]},{id:"ring",titel:"Ring",wenn:n=>n.art==="ring",felder:[{pfad:"ring.typ",label:"Typ",typ:"wahl"},{pfad:"ring.innenDurchmesserMm",label:"Innendurchmesser",typ:"zahl",einheit:"mm",schritt:.1,bereich:()=>[14,22],hinweis:(n,e)=>`Ringgr\xF6\xDFe ${Math.round(e*Math.PI)} (Innenumfang in mm)`},{pfad:"ring.schieneMm",label:n=>n.ring.typ==="kette"?"Gliedst\xE4rke":"Schienenbreite",typ:"zahl",einheit:"mm",schritt:.1,bereich:()=>[1,8]},{pfad:"ring.profil",label:"Profil",typ:"wahl",wenn:n=>["band","solitaer","perle"].includes(n.ring.typ)},{pfad:"ring.krappen",label:"Fassung",typ:"wahl",optionen:()=>[4,6],wenn:n=>n.ring.typ==="solitaer"}]},{id:"armband",titel:"Armband",wenn:n=>n.art==="armband",felder:[{pfad:"armband.typ",label:"Typ",typ:"wahl"},{pfad:"armband.laengeCm",label:n=>n.armband.typ==="reif"?"Innenumfang":"L\xE4nge",typ:"zahl",einheit:"cm",schritt:.5,bereich:()=>[14,22]},{pfad:"armband.verlaengerungCm",label:"Verl\xE4ngerung",typ:"zahl",einheit:"cm",schritt:.5,bereich:()=>[0,6],wenn:n=>n.armband.typ==="kette"},{pfad:"armband.zwischenperlenMm",label:"Goldkugeln dazwischen",typ:"zahl",einheit:"mm",schritt:.5,bereich:()=>[0,5],wenn:n=>n.armband.typ==="perlen",hinweis:(n,e)=>e>0?"Durchmesser der Zwischenkugeln":"keine Zwischenkugeln"},{pfad:"armband.breiteMm",label:"Breite",typ:"zahl",einheit:"mm",schritt:.5,bereich:()=>[1,20],wenn:n=>n.armband.typ==="reif"},{pfad:"ring.profil",label:"Profil",typ:"wahl",wenn:n=>n.armband.typ==="reif"},{pfad:"armband.offen",label:"Offene Spange",typ:"schalter",wenn:n=>n.armband.typ==="reif"}]},{id:"kette",titel:n=>n.art==="kette"?"Kette":n.art==="ring"?"Glieder":"Kette",wenn:n=>n.art==="kette"||n.art==="armband"&&n.armband.typ==="kette"||n.art==="ring"&&n.ring.typ==="kette",felder:[{pfad:"kette.typ",label:"Kettenart",typ:"wahl",optionen:n=>$i["kette.typ"].filter(e=>n.art==="kette"||e!=="perlenstrang")},{pfad:"kette.staerkeMm",label:"St\xE4rke",typ:"zahl",einheit:"mm",schritt:.1,bereich:()=>[.6,5],wenn:n=>n.art!=="ring"&&n.kette.typ!=="perlenstrang"},{pfad:"kette.laengeCm",label:"L\xE4nge",typ:"zahl",einheit:"cm",schritt:.5,bereich:()=>[35,90],wenn:n=>n.art==="kette",hinweis:(n,e)=>iv(e)}]},{id:"anhaenger",titel:n=>n.art==="ohrringe"&&n.ohrring.typ==="stecker"?"Motiv":"Anh\xE4nger",wenn:bh,felder:[{pfad:"anhaenger.typ",label:"Form",typ:"wahl",optionen:n=>{let e=$i["anhaenger.typ"];return n.art==="ohrringe"&&(n.ohrring.typ==="haenger"||n.ohrring.typ==="stecker")?e.filter(t=>t!=="keiner"):e}},{pfad:"anhaenger.groesseMm",label:"Gr\xF6\xDFe",typ:"zahl",einheit:"mm",schritt:.5,bereich:()=>[5,30],wenn:n=>!["keiner","perle","stein"].includes(ti(n))}]},{id:"perlen",titel:n=>n.kette&&n.art==="kette"&&n.kette.typ==="perlenstrang"?"Perlenstrang":"Perlen",wenn:n=>sa(n)||yh(n),felder:[{pfad:"perlenAn",label:"Perlen an der Kette",typ:"perlenAn",wenn:sa},{pfad:"perlen.anzahl",label:"Anzahl",typ:"zahl",schritt:1,bereich:n=>n.art==="ring"?[1,2]:Vn(n)==="einzeln"?[1,3]:[1,15],wenn:n=>sa(n)&&Vn(n)==="stationen"||n.art==="armband"&&sa(n)&&Vn(n)==="einzeln"||n.art==="ring"&&n.ring.typ==="offen",hinweis:n=>n.art==="armband"&&Vn(n)==="einzeln"?"Perlen-Charms neben dem Anh\xE4nger":n.art==="ring"?"Perlen an den Enden":""},{pfad:"perlen.abstandMm",label:"Abstand",typ:"zahl",einheit:"mm",schritt:1,bereich:()=>[8,120],wenn:n=>sa(n)&&Vn(n)==="stationen"&&n.perlen.anzahl>1},{pfad:"perlen.groesseMm",label:"Gr\xF6\xDFe",typ:"zahl",einheit:"mm",schritt:.5,bereich:()=>[3,12],wenn:yh,hinweis:n=>Sh(n)?"":ti(n)==="blume"?"Perle in der Bl\xFCtenmitte":"Perle am Anh\xE4nger"},{pfad:"perlen.form",label:"Form",typ:"wahl",wenn:tv},{pfad:"perlen.farbe",label:"Farbe",typ:"perlfarbe",wenn:yh}]},{id:"stein",titel:"Stein",wenn:nv,felder:[{pfad:"stein.art",label:"Art",typ:"wahl",optionen:()=>$i["stein.art"].filter(n=>n!=="perle")},{pfad:"stein.farbe",label:"Eigene Farbe",typ:"farbe"},{pfad:"stein.groesseMm",label:"Gr\xF6\xDFe",typ:"zahl",einheit:"mm",schritt:.1,bereich:n=>n.art==="armband"?[1.8,5]:[1.5,10]},{pfad:"stein.schliff",label:"Schliff",typ:"wahl",wenn:n=>!(n.art==="armband"&&n.armband.typ==="tennis")}]}];function iv(n){return n<=40?"Choker \u2013 liegt eng am Halsansatz":n<=43?"Halsansatz":n<=47?"Klassisch \u2013 auf dem Schl\xFCsselbein":n<=55?"Unter dem Schl\xFCsselbein":n<=65?"Auf der Brust":"Lang"}function Rl(n,e){return typeof n=="function"?n(e):n}function Eh(n,e){return n.optionen?n.optionen(e):n.typ==="perlenAn"?["keine","stationen","einzeln"]:$i[n.pfad]||[]}function wh(n,e){let[t,i]=ra[n.pfad]||[0,100],[s,r]=n.bereich?n.bereich(e):[t,i];return[Math.max(t,s),Math.min(i,r)]}function Cl(n){return Al.filter(e=>e.wenn(n)).map(e=>({...e,felder:e.felder.filter(t=>!t.wenn||t.wenn(n))})).filter(e=>e.felder.length)}function Th(n,e,t){return e==="perlenAn"?(t==="keine"?n.perlen.anzahl=0:t==="einzeln"?(n.perlen.anordnung="einzeln",n.perlen.anzahl=1):(n.perlen.anordnung="stationen",n.perlen.anzahl=Math.max(3,Math.min(15,n.perlen.anzahl||0))),t!=="keine"&&n.perlen.groesseMm>8&&(n.perlen.groesseMm=5),n):e==="stein.farbe"?(n.stein.farbe=t||null,n):e==="ohrring.profil"&&!t?(delete n.ohrring.profil,n):(Mh(n,e,t),Ah(n))}function Ah(n){return n.art==="ohrringe"&&(n.ohrring.typ==="stecker"&&n.anhaenger.typ==="keiner"&&(n.anhaenger.typ="stein"),n.ohrring.typ==="haenger"&&n.anhaenger.typ==="keiner"&&(n.anhaenger.typ="perle")),n.art==="armband"&&n.kette.typ==="perlenstrang"&&(n.kette.typ="anker"),n.art==="ring"&&n.ring.typ==="offen"&&!(n.perlen.anzahl>=1)&&(n.perlen.anzahl=2),n}function ds(n){let{spec:e,fehler:t}=_l(n);return{spec:Ah(e),fehler:t}}function Pf(n){let e=[];for(let t of Cl(n))for(let i of t.felder){if(i.pfad==="perlenAn"){Vn(n)!=="keine"&&e.push("perlen.anordnung","perlen.anzahl");continue}i.pfad==="stein.farbe"&&!n.stein.farbe||i.pfad==="ohrring.profil"&&!n.ohrring.profil||e.includes(i.pfad)||e.push(i.pfad)}return e}var sv=["ohrring","ring","armband","kette","anhaenger","perlen","stein"];function oa(n){let e={};n.name&&(e.name=n.name),e.art=n.art,e.metall=n.metall;let t=Pf(n);for(let i of sv)for(let s of t){if(!s.startsWith(i+"."))continue;let r=Tl(n,s);typeof r=="number"&&(r=Math.round(r*100)/100),Mh(e,s,r)}return e}function Pl(n,{eingerueckt:e=!0,zeilenBreite:t=40}={}){let i=n.map(oa);if(!e)return JSON.stringify(i);let s=a=>JSON.stringify(a).replace(/,"/g,', "').replace(/":/g,'": ').replace(/^\{"/,'{ "').replace(/\}$/," }");return`[
`+i.map(a=>`  {
    `+Object.entries(a).map(([l,c])=>{let h=`${JSON.stringify(l)}: ${c&&typeof c=="object"?s(c):JSON.stringify(c)}`;if(!(c&&typeof c=="object")||h.length<=t)return h;let d=Object.entries(c).map(([u,f])=>`      ${JSON.stringify(u)}: ${JSON.stringify(f)}`).join(`,
`);return`${JSON.stringify(l)}: {
${d}
    }`}).join(`,
    `)+`
  }`).join(`,
`)+`
]`}function Rh(n){let e;try{e=JSON.parse(String(n||"").trim())}catch(a){throw new Error(`Das ist kein g\xFCltiges JSON (${a.message}).`)}let t=[];if(Array.isArray(e))t=e;else if(e&&Array.isArray(e.varianten)){let{varianten:a,...o}=e;t=a.map(l=>l&&l.spec?{...l,spec:{...o,...l.spec}}:{...o,...l})}else e&&typeof e=="object"&&(t=[e]);if(t=t.filter(a=>a&&typeof a=="object"),!t.length)throw new Error('Keine Variante gefunden. Erwartet wird eine Liste wie [{ "name": "Gold", "art": "kette", \u2026 }].');let i=[],s=t.map((a,o)=>{let l=a.spec&&typeof a.spec=="object"?{...a.spec,name:a.name||a.spec.name}:{...a};if(l.vorlage&&Rt[l.vorlage]){let{vorlage:d,...u}=l;l={...Rt[d].spec,...u}}(l.glb||l.glbUrl)&&i.push(`Variante ${o+1}: GLB-Verweis wird im Editor nicht angezeigt (nur parametrische Modelle).`);let{spec:c,fehler:h}=ds(l);c.name||(c.name=Zi[c.metall]||`Variante ${o+1}`);for(let d of h)i.push(`${c.name}: ${d}`);return c}),r=s[0].art;if(s.some(a=>a.art!==r)){i.push(`Varianten haben verschiedene Arten; alle als \u201E${or[r]}\u201C \xFCbernommen.`);for(let a of s)a.art!==r&&Object.assign(a,ds({...a,art:r}).spec)}return{varianten:s,hinweise:i}}function Ch(n){let e=[],t=new Set;return n.forEach((i,s)=>{let r=oa(i),{fehler:a}=_l(r);for(let l of a)e.push(`${r.name||"Variante "+(s+1)}: ${l}`);let o=(r.name||"").trim().toLowerCase();o?t.has(o)&&e.push(`Der Name \u201E${r.name}\u201C kommt doppelt vor.`):e.push(`Variante ${s+1} hat keinen Namen.`),t.add(o)}),e}function Ph(){return aa.map(n=>({art:n.wert,name:n.name,vorlagen:Object.entries(Rt).filter(([,e])=>e.spec.art===n.wert).map(([e,t])=>({id:e,...t}))}))}function Ih(n){let e=new Set(n.map(t=>t.metall));return $i.metall.find(t=>!e.has(t))||"gold"}var Uf="anprobe-editor:entwurf",Ff="anprobe-editor:px-pro-mm",kf="anprobe-editor:ansicht",lr="perlentropfen-ohrringe",Ki=2048,Et=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),le=(n,e=document)=>e.querySelector(n),hr=(n,e=document)=>[...e.querySelectorAll(n)],ni=(n,e=1)=>(Math.round(n*10**e)/10**e).toLocaleString("de-DE",{maximumFractionDigits:e}),If=n=>String(n||"").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"schmuck";function Dh(n){try{return localStorage.getItem(n)}catch{return null}}function zh(n,e){try{localStorage.setItem(n,e)}catch{}}var oe={varianten:[],aktiv:0,gemeinsam:!0,vorlage:null,produktname:""},cr=[],Hn=null,_i=null,Vh="",vn=()=>oe.varianten[oe.aktiv],Of=()=>JSON.stringify({varianten:oe.varianten,aktiv:oe.aktiv,gemeinsam:oe.gemeinsam,vorlage:oe.vorlage,produktname:oe.produktname});function dn(){let n=Of();cr[cr.length-1]!==n&&cr.push(n),cr.length>60&&cr.shift()}function Il(){let n=cr.pop();if(!n){Ht("Nichts zum R\xFCckg\xE4ngigmachen.");return}Uh(JSON.parse(n)),ha({rahmen:!1}),Ht("R\xFCckg\xE4ngig gemacht.")}function Uh(n){oe.varianten=(n.varianten||[]).map(e=>ds(e).spec),oe.varianten.length||(oe.varianten=la(lr)),oe.aktiv=Math.min(Math.max(0,n.aktiv|0),oe.varianten.length-1),oe.gemeinsam=n.gemeinsam!==!1,oe.vorlage=n.vorlage&&Rt[n.vorlage]?n.vorlage:null,oe.produktname=typeof n.produktname=="string"?n.produktname:""}function la(n){let e=Rt[n];return(e.varianten&&e.varianten.length?e.varianten:[{name:"Gold",spec:e.spec}]).map(t=>ds({...t.spec,name:t.name}).spec)}function rv(){let n=aa.map(t=>`
    <button type="button" class="ed-art" role="radio" data-art="${t.wert}" aria-checked="false">
      ${rt[t.wert]}<span>${Et(t.name)}</span>
    </button>`).join(""),e=$i.metall.map(t=>`
    <button type="button" class="ed-metall" role="radio" data-metall="${t}" aria-checked="false" title="${Et(Sl[t])}">
      <span class="ed-metall-tupfer" style="--tupfer:${dl(t)}"></span><span>${Et(Zi[t])}</span>
    </button>`).join("");return`
<div class="ed">
  <header class="ed-kopf">
    <div class="ed-marke"><span class="ed-marke-name">ARLISE</span><span class="ed-marke-strich" aria-hidden="true"></span><span class="ed-marke-titel">Anprobe-Editor</span></div>
    <label class="ed-produkt">
      <span class="ed-vh">Produktname</span>
      <input id="ed-produktname" type="text" placeholder="Produktname (f\xFCr Dateinamen)" autocomplete="off" spellcheck="false">
    </label>
    <nav class="ed-kopf-aktionen" aria-label="Aktionen">
      <button type="button" class="ed-knopf-leise" data-aktion="vorlagen" title="Vorlage w\xE4hlen">${rt.vorlagen}<span>Vorlagen</span></button>
      <button type="button" class="ed-knopf-leise" data-aktion="import" title="JSON importieren">${rt.laden}<span>Importieren</span></button>
      <button type="button" class="ed-knopf-leise" data-aktion="anleitung" title="Anleitung">${rt.buch}<span>Anleitung</span></button>
    </nav>
  </header>

  <main class="ed-flaeche">
    <aside class="ed-konfig" aria-label="Einstellungen">
      <section class="ed-block">
        <h2 class="ed-titel">Schmuckart</h2>
        <div class="ed-arten" role="radiogroup" aria-label="Schmuckart">${n}</div>
        <button type="button" class="ed-vorlage-wahl" data-aktion="vorlagen" aria-label="Vorlage w\xE4hlen">
          <span class="ed-vorlage-bild" aria-hidden="true"></span>
          <span class="ed-vorlage-text"><small>Ausgangsvorlage</small><b></b></span>
          <span class="ed-vorlage-pfeil">${rt.pfeil}</span>
        </button>
      </section>

      <section class="ed-block ed-varianten">
        <div class="ed-block-kopf">
          <h2 class="ed-titel">Varianten</h2>
          <button type="button" class="ed-mini" data-aktion="variante-neu">${rt.plus}<span>Variante</span></button>
        </div>
        <div class="ed-variantenliste" role="tablist" aria-label="Varianten"></div>
        <div class="ed-feld">
          <div class="ed-feld-kopf"><label class="ed-label" for="ed-variantenname">Name</label><span class="ed-feld-info">wie die Variante in Shopify</span></div>
          <input id="ed-variantenname" class="ed-text" type="text" autocomplete="off" maxlength="40">
        </div>
        <div class="ed-feld">
          <div class="ed-feld-kopf"><span class="ed-label">Metall</span><span class="ed-feld-info ed-metall-info"></span></div>
          <div class="ed-metalle" role="radiogroup" aria-label="Metall">${e}</div>
        </div>
        <label class="ed-schalter">
          <input type="checkbox" id="ed-gemeinsam" checked>
          <span class="ed-schalter-bahn" aria-hidden="true"></span>
          <span>Form gilt f\xFCr alle Varianten</span>
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
            <button type="button" class="ed-ikon" data-schalter="drehteller" aria-pressed="false" title="Drehteller">${rt.drehen}<span class="ed-vh">Drehteller</span></button>
            <button type="button" class="ed-ikon" data-schalter="lineal" aria-pressed="true" title="mm-Lineal">${rt.lineal}<span class="ed-vh">mm-Lineal</span></button>
            <button type="button" class="ed-ikon" data-schalter="echteGroesse" aria-pressed="false" title="Echte Gr\xF6\xDFe (1:1)">${rt.massstab}<span class="ed-vh">Echte Gr\xF6\xDFe</span></button>
            <button type="button" class="ed-ikon" data-schalter="bueste" aria-pressed="true" title="B\xFCste" hidden>${rt.bueste}<span class="ed-vh">B\xFCste</span></button>
            <button type="button" class="ed-ikon" data-schalter="paar" aria-pressed="true" title="Als Paar zeigen" hidden>${rt.paar}<span class="ed-vh">Paar</span></button>
            <span class="ed-leiste-strich" aria-hidden="true"></span>
            <div class="ed-menue-halter">
              <button type="button" class="ed-knopf-glas" data-aktion="bild-menue" aria-haspopup="menu" aria-expanded="false" title="Vorschau als Bild speichern">${rt.kamera}<span>Bild speichern</span></button>
              <div class="ed-menue" role="menu" hidden>
                <button type="button" role="menuitem" data-aktion="bild" data-hintergrund="hell"><b>PNG mit Studio-Hintergrund</b><small>${Ki} \xD7 ${Ki} px, Elfenbein</small></button>
                <button type="button" role="menuitem" data-aktion="bild" data-hintergrund="transparent"><b>PNG freigestellt</b><small>${Ki} \xD7 ${Ki} px, transparent</small></button>
              </div>
            </div>
          </div>

          <div class="ed-foto-panel">
            <button type="button" class="ed-knopf-glas ed-foto-laden" data-aktion="foto-laden" title="Produktfoto laden und mit dem Modell vergleichen">${rt.bild}<span>Produktfoto vergleichen</span></button>
            <div class="ed-foto-steuerung" hidden>
              <span class="ed-foto-mini" aria-hidden="true"></span>
              <div class="ed-segment ed-segment-klein" role="radiogroup" aria-label="Foto-Anordnung">
                <button type="button" role="radio" data-fotomodus="darueber" aria-checked="true">Dar\xFCber</button>
                <button type="button" role="radio" data-fotomodus="daneben" aria-checked="false">Daneben</button>
              </div>
              <label class="ed-foto-deckkraft"><span class="ed-vh">Deckkraft</span><input type="range" min="0.1" max="1" step="0.05" value="0.5" aria-label="Deckkraft des Fotos"></label>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-ausrichten" aria-pressed="false" title="Foto verschieben und skalieren">${rt.verschieben}<span class="ed-vh">Foto ausrichten</span></button>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-zurueck" title="Fotolage zur\xFCcksetzen">${rt.zurueck}<span class="ed-vh">Fotolage zur\xFCcksetzen</span></button>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-weg" title="Foto entfernen">${rt.kreuz}<span class="ed-vh">Foto entfernen</span></button>
            </div>
            <input type="file" id="ed-foto-datei" accept="image/*" hidden>
          </div>

          <div class="ed-masse" aria-live="polite"></div>
          <button type="button" class="ed-kalibrieren" data-aktion="kalibrieren" hidden>Ma\xDFstab kalibrieren</button>
          <div class="ed-ausrichten-hinweis" hidden>Foto ziehen zum Verschieben \xB7 Mausrad zum Skalieren \xB7 Pfeiltasten fein</div>
          <div class="ed-arbeitet" hidden><span></span>Berechne Modell \u2026</div>
        </div>
        <div class="ed-foto-daneben" hidden></div>
      </div>
    </section>

    <aside class="ed-ausgabe" aria-label="JSON f\xFCr Shopify">
      <section class="ed-block">
        <div class="ed-block-kopf">
          <h2 class="ed-titel">JSON f\xFCr Shopify</h2>
          <span class="ed-status"></span>
        </div>
        <p class="ed-klein">Metafeld <code>anprobe.modell</code> \xB7 Typ JSON</p>
        <pre class="ed-json" tabindex="0" aria-label="JSON-Beschreibung"><code></code></pre>
        <div class="ed-hinweise" role="status"></div>
        <div class="ed-knopfreihe">
          <button type="button" class="ed-knopf" data-aktion="kopieren">${rt.kopieren}<span>JSON kopieren</span></button>
          <button type="button" class="ed-knopf-rand" data-aktion="json-datei" title="Als .json-Datei speichern">${rt.speichern}<span class="ed-vh">Als Datei speichern</span></button>
          <button type="button" class="ed-knopf-rand" data-aktion="import" title="JSON importieren">${rt.laden}<span class="ed-vh">JSON importieren</span></button>
        </div>
      </section>
      <section class="ed-block ed-schritte">
        <h2 class="ed-titel">So kommt es in den Shop</h2>
        <ol>
          <li><b>Kopieren</b><span>\u201EJSON kopieren\u201C klicken.</span></li>
          <li><b>Produkt \xF6ffnen</b><span>Shopify-Admin \u2192 Produkte \u2192 dieses Produkt.</span></li>
          <li><b>Einf\xFCgen</b><span>Unten bei <i>Metafelder</i> ins Feld \u201EAnprobe-Modell\u201C einf\xFCgen und speichern.</span></li>
          <li><b>Pr\xFCfen</b><span>Produktseite \xF6ffnen \u2192 \u201EVirtuell anprobieren\u201C.</span></li>
        </ol>
        <button type="button" class="ed-link" data-aktion="anleitung">Ausf\xFChrliche Anleitung, auch zum einmaligen Einrichten</button>
      </section>
    </aside>
  </main>

  <dialog class="ed-dialog ed-dialog-breit" id="ed-dlg-vorlagen" aria-labelledby="ed-dlg-vorlagen-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-vorlagen-titel">Vorlage w\xE4hlen</h2><button type="button" class="ed-ikon" data-schliessen>${rt.kreuz}<span class="ed-vh">Schlie\xDFen</span></button></div>
    <p class="ed-klein">Nimm die Vorlage, die dem St\xFCck am n\xE4chsten kommt, und passe danach Ma\xDFe und Details an.</p>
    <div class="ed-vorlagen"></div>
  </dialog>

  <dialog class="ed-dialog" id="ed-dlg-import" aria-labelledby="ed-dlg-import-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-import-titel">JSON importieren</h2><button type="button" class="ed-ikon" data-schliessen>${rt.kreuz}<span class="ed-vh">Schlie\xDFen</span></button></div>
    <p class="ed-klein">F\xFCge den Inhalt des Metafelds <code>anprobe.modell</code> ein oder w\xE4hle eine .json-Datei. Das aktuelle Modell wird ersetzt.</p>
    <textarea id="ed-import-text" class="ed-textfeld" rows="10" spellcheck="false" placeholder='[{ "name": "Gold", "art": "kette", "metall": "gold", \u2026 }]'></textarea>
    <div class="ed-fehler" role="alert"></div>
    <div class="ed-knopfreihe ed-rechts">
      <label class="ed-knopf-rand ed-datei">${rt.laden}<span>Datei w\xE4hlen</span><input type="file" accept=".json,application/json,text/plain" id="ed-import-datei"></label>
      <button type="button" class="ed-knopf" data-aktion="import-ok">\xDCbernehmen</button>
    </div>
  </dialog>

  <dialog class="ed-dialog ed-dialog-text" id="ed-dlg-anleitung" aria-labelledby="ed-dlg-anleitung-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-anleitung-titel">Anleitung</h2><button type="button" class="ed-ikon" data-schliessen>${rt.kreuz}<span class="ed-vh">Schlie\xDFen</span></button></div>
    <div class="ed-anleitung">
      <h3>Einmalig: Metafeld anlegen</h3>
      <ol>
        <li>Shopify-Admin \u2192 <b>Einstellungen</b> \u2192 <b>Benutzerdefinierte Daten</b> \u2192 <b>Produkte</b> \u2192 <b>Definition hinzuf\xFCgen</b>.</li>
        <li>Name <b>Anprobe-Modell</b>, Namespace und Schl\xFCssel <code>anprobe.modell</code>.</li>
        <li>Typ <b>JSON</b> w\xE4hlen und speichern.</li>
      </ol>
      <h3>F\xFCr jedes Produkt</h3>
      <ol>
        <li><b>Vorlage oder Art w\xE4hlen</b>, die dem St\xFCck am n\xE4chsten kommt.</li>
        <li><b>Produktfoto laden</b> (\u201EProduktfoto vergleichen\u201C) und halbtransparent \xFCber die Vorschau legen. Mit \u201EAusrichten\u201C verschieben und skalieren, bis es passt.</li>
        <li><b>Werte anpassen</b>: Kettenart, St\xE4rke, L\xE4nge, Perlen, Anh\xE4nger \u2026 Das mm-Lineal und \u201EEchte Gr\xF6\xDFe\u201C helfen beim Abgleich der Ma\xDFe.</li>
        <li><b>Varianten anlegen</b> (z. B. Gold und Silber). Die Namen erscheinen in der Anprobe als Auswahl, am besten genau wie die Varianten in Shopify.</li>
        <li><b>JSON kopieren</b> und beim Produkt unten unter <i>Metafelder</i> ins Feld \u201EAnprobe-Modell\u201C einf\xFCgen. Speichern.</li>
        <li>Auf der Produktseite <b>\u201EVirtuell anprobieren\u201C</b> testen.</li>
      </ol>
      <h3>Gut zu wissen</h3>
      <ul>
        <li>Ohne Metafeld w\xE4hlt die Anprobe eine \xE4hnliche Vorlage nach Art und Titel \u2013 das ist nur eine Notl\xF6sung.</li>
        <li>Ein vorhandenes Modell \xE4ndern: JSON aus dem Metafeld kopieren, hier <b>Importieren</b>, anpassen, wieder einf\xFCgen.</li>
        <li><b>Bild speichern</b> erzeugt ein quadratisches PNG (${Ki} px) der aktuellen Ansicht, z. B. als Produktbild.</li>
        <li><b>Echte Gr\xF6\xDFe</b> zeigt das St\xFCck 1:1 auf dem Bildschirm. Einmal kalibrieren: Bankkarte an den Bildschirm halten und den Rahmen anpassen.</li>
        <li>Der Entwurf wird automatisch in diesem Browser gespeichert. R\xFCckg\xE4ngig: <kbd>Strg</kbd> + <kbd>Z</kbd>.</li>
      </ul>
    </div>
  </dialog>

  <dialog class="ed-dialog" id="ed-dlg-kalibrieren" aria-labelledby="ed-dlg-kalibrieren-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-kalibrieren-titel">Ma\xDFstab kalibrieren</h2><button type="button" class="ed-ikon" data-schliessen>${rt.kreuz}<span class="ed-vh">Schlie\xDFen</span></button></div>
    <p class="ed-klein">Halte eine Bank- oder Kundenkarte (85,6 \xD7 54 mm) an den Bildschirm und ver\xE4ndere die Gr\xF6\xDFe, bis der Rahmen genau so gro\xDF ist wie die Karte.</p>
    <div class="ed-karte-buehne"><div class="ed-karte"><span>85,6 \xD7 54 mm</span></div></div>
    <input type="range" id="ed-kalib-regler" min="2.2" max="7" step="0.005" aria-label="Bildschirmma\xDFstab">
    <div class="ed-knopfreihe ed-rechts">
      <button type="button" class="ed-knopf-rand" data-aktion="kalib-standard">Standard</button>
      <button type="button" class="ed-knopf" data-aktion="kalib-ok">\xDCbernehmen</button>
    </div>
  </dialog>

  <div class="ed-toast" role="status" aria-live="polite"><span class="ed-toast-text"></span><button type="button" class="ed-toast-knopf" hidden></button></div>
</div>`}function av(n,e){let t="f-"+n.pfad.replace(/\./g,"-"),i=Rl(n.label,e),s=n.pfad==="perlenAn"?Vn(e):Tl(e,n.pfad);if(n.typ==="zahl"){let[o,l]=wh(n,e);o=Math.min(o,s),l=Math.max(l,s);let c=n.schritt||.1,h=c<1?(String(c).split(".")[1]||"").length:0,d=n.hinweis?n.hinweis(e,s):"";return`
      <div class="ed-feld ed-zahl" data-pfad="${n.pfad}" data-stellen="${h}">
        <div class="ed-feld-kopf">
          <label class="ed-label" for="${t}">${Et(i)}</label>
          <span class="ed-zahl-eingabe"><input id="${t}-z" type="text" inputmode="decimal" value="${Et(ni(s,h))}" aria-label="${Et(i)}${n.einheit?" in "+n.einheit:""}">${n.einheit?`<span>${n.einheit}</span>`:""}</span>
        </div>
        <input id="${t}" type="range" min="${o}" max="${l}" step="${c}" value="${s}" style="--anteil:${(s-o)/(l-o||1)*100}%">
        ${d||n.hinweis?`<div class="ed-hinweis">${Et(d)}</div>`:""}
      </div>`}if(n.typ==="schalter")return`
      <div class="ed-feld" data-pfad="${n.pfad}">
        <label class="ed-schalter"><input type="checkbox" id="${t}" ${s?"checked":""}><span class="ed-schalter-bahn" aria-hidden="true"></span><span>${Et(i)}</span></label>
      </div>`;if(n.typ==="farbe"){let o=!s,l=s||wl[e.stein.art]||"#ffffff";return`
      <div class="ed-feld" data-pfad="${n.pfad}">
        <div class="ed-feld-kopf"><span class="ed-label">Farbe</span><span class="ed-feld-info">${o?"typisch f\xFCr "+Et(El("stein.art",e.stein.art)):Et(String(s).toUpperCase())}</span></div>
        <div class="ed-chips">
          <button type="button" class="ed-chip" data-farbe-standard aria-pressed="${o}"><span class="ed-tupfer" style="--tupfer:${wl[e.stein.art]||"#fff"}"></span>Standard</button>
          <label class="ed-chip ed-farbwahl" aria-pressed="${!o}"><span class="ed-tupfer" style="--tupfer:${l}"></span>Eigene<input type="color" value="${l}" aria-label="Eigene Steinfarbe"></label>
        </div>
      </div>`}let a=Eh(n,e).map(o=>{let l=String(o)===String(s??""),c=n.typ==="perlfarbe"?`<span class="ed-tupfer ed-tupfer-perle" style="--tupfer:${vh[o]}"></span>`:"";return`<button type="button" class="ed-chip" role="radio" aria-checked="${l}" data-wert="${Et(o)}" data-zahl="${typeof o=="number"?1:0}">${c}${Et(El(n.pfad,o))}</button>`}).join("");return`
    <div class="ed-feld" data-pfad="${n.pfad}">
      <div class="ed-feld-kopf"><span class="ed-label" id="${t}-l">${Et(i)}</span></div>
      <div class="ed-chips" role="radiogroup" aria-labelledby="${t}-l">${a}</div>
    </div>`}function xi(){let n=vn(),e=le("#ed-felder"),t=le(".ed-konfig").scrollTop,i=document.activeElement&&document.activeElement.id;e.innerHTML=Cl(n).map(s=>`
    <section class="ed-block" data-abschnitt="${s.id}">
      <h2 class="ed-titel">${Et(Rl(s.titel,n))}</h2>
      ${s.felder.map(r=>av(r,n)).join("")}
    </section>`).join(""),le(".ed-konfig").scrollTop=t,i&&document.getElementById(i)&&document.getElementById(i).focus({preventScroll:!0})}function Hh(){let n=vn();for(let s of hr(".ed-art"))s.setAttribute("aria-checked",String(s.dataset.art===n.art));let e=oe.vorlage&&Rt[oe.vorlage];le(".ed-vorlage-text b").textContent=e?e.name:`Grundform ${or[n.art]}`,le(".ed-vorlage-bild").innerHTML=e?`<img src="${Wf(oe.vorlage)}" alt="" onerror="this.replaceWith(document.createRange().createContextualFragment(this.dataset.ersatz))" data-ersatz="${Et(rt[n.art])}">`:rt[n.art],le(".ed-variantenliste").innerHTML=oe.varianten.map((s,r)=>`
    <button type="button" class="ed-variante" role="tab" aria-selected="${r===oe.aktiv}" data-index="${r}">
      <span class="ed-metall-tupfer" style="--tupfer:${dl(s.metall)}"></span><span>${Et(s.name||"Ohne Namen")}</span>
    </button>`).join("");let t=le("#ed-variantenname");document.activeElement!==t&&(t.value=n.name||"");for(let s of hr(".ed-metall"))s.setAttribute("aria-checked",String(s.dataset.metall===n.metall));le(".ed-metall-info").textContent=Sl[n.metall]||"",le("#ed-gemeinsam").checked=oe.gemeinsam,le(".ed-variante-weg").hidden=oe.varianten.length<2,le('[data-aktion="variante-neu"]').disabled=oe.varianten.length>=8;let i=le("#ed-produktname");document.activeElement!==i&&(i.value=oe.produktname),le('[data-schalter="bueste"]').hidden=n.art!=="kette",le('[data-schalter="paar"]').hidden=n.art!=="ohrringe"}var ov=new Set(["metall","name"]);function fs(n,e){let t=oe.gemeinsam&&!ov.has(n)?oe.varianten:[vn()];for(let i of t)Th(i,n,e);Ji()}function Ji({felder:n=!1,kopf:e=!1,bauen:t=!0}={}){e&&Hh(),n&&xi(),Vf(),t&&zf(),Wh()}function ha({rahmen:n=!0}={}){Hh(),xi(),Vf(),zf({rahmen:n}),Wh()}function lv(n){if(!Rt[n])return;dn();let e=oe.vorlage&&Rt[oe.vorlage]?Rt[oe.vorlage].name:"";oe.varianten=la(n),oe.aktiv=0,oe.vorlage=n,(!oe.produktname||oe.produktname===e)&&(oe.produktname=Rt[n].name),ha()}function cv(n){vn().art!==n&&(dn(),oe.varianten=oe.varianten.map(e=>ds({art:n,metall:e.metall,name:e.name}).spec),oe.vorlage&&Rt[oe.vorlage]&&oe.produktname===Rt[oe.vorlage].name&&(oe.produktname=""),oe.vorlage=null,ha(),Ht(`Grundform ${or[n]} \u2013 oder eine passende Vorlage w\xE4hlen.`,{knopf:"Vorlagen",aktion:Xf}))}function hv(){dn();let n=vn(),e=Ih(oe.varianten),t=JSON.parse(JSON.stringify(n));t.metall=e,t.name=Zi[e],oe.varianten.push(t),oe.aktiv=oe.varianten.length-1,Ji({kopf:!0,felder:!0}),le("#ed-variantenname").focus(),le("#ed-variantenname").select()}function uv(){if(oe.varianten.length<2)return;dn();let n=vn().name;oe.varianten.splice(oe.aktiv,1),oe.aktiv=Math.max(0,oe.aktiv-1),Ji({kopf:!0,felder:!0}),Ht(`Variante \u201E${n}\u201C entfernt.`,{knopf:"R\xFCckg\xE4ngig",aktion:Il})}function dv(n){n===oe.aktiv||!oe.varianten[n]||(oe.aktiv=n,Ji({kopf:!0,felder:!0}))}function fv(n){if(dn(),oe.gemeinsam=n,n&&oe.varianten.length>1){let e=vn();oe.varianten=oe.varianten.map((t,i)=>i===oe.aktiv?t:{...JSON.parse(JSON.stringify(e)),name:t.name,metall:t.metall}),Ht(`Form von \u201E${e.name}\u201C gilt jetzt f\xFCr alle Varianten.`,{knopf:"R\xFCckg\xE4ngig",aktion:Il})}Ji({kopf:!0})}var Nh=!1,ca=!1,Bf=0;function zf({rahmen:n=!1}={}){if(ca=ca||n,Nh)return;Nh=!0;let e=Math.max(0,50-(performance.now()-Bf)),t=setTimeout(()=>{le(".ed-arbeitet").hidden=!1},180);setTimeout(()=>requestAnimationFrame(()=>{Nh=!1,pv(),clearTimeout(t),le(".ed-arbeitet").hidden=!0}),e)}function pv(){let n=vn(),e;try{e=mh(n)}catch(t){console.error("[editor]",t),Ht("Das Modell konnte mit diesen Werten nicht gebaut werden.");return}Hn.zeige(e,{halteAnsicht:!ca}),ca&&Yf("produkt"),ca=!1,Bf=performance.now(),mv(e,n)}function mv(n,e){let t=n.masse||{},i="";e.art==="ring"?i=`Innen-\xD8 ${ni(e.ring.innenDurchmesserMm)} mm \xB7 Gr\xF6\xDFe ${Math.round(e.ring.innenDurchmesserMm*Math.PI)}`:e.art==="kette"?i=`L\xE4nge ${ni(e.kette.laengeCm)} cm`:e.art==="armband"?i=e.armband.typ==="reif"?`Innenumfang ${ni(e.armband.laengeCm)} cm`:`L\xE4nge ${ni(e.armband.laengeCm)} cm${e.armband.typ==="kette"&&e.armband.verlaengerungCm>0?` + ${ni(e.armband.verlaengerungCm)} cm`:""}`:e.art==="ohrringe"&&(i=t.laengeMm?`L\xE4nge ab Ohrloch ${ni(t.laengeMm)} mm`:""),le(".ed-masse").textContent=i}function gv(n){return Et(n).replace(/(&quot;[^&]*?&quot;)(\s*:)/g,'<span class="j-k">$1</span>$2').replace(/(:\s*)(&quot;[^&]*?&quot;)/g,'$1<span class="j-s">$2</span>').replace(/(:\s*)(-?\d+(?:\.\d+)?)/g,'$1<span class="j-z">$2</span>').replace(/(:\s*)(true|false|null)/g,'$1<span class="j-w">$2</span>')}function Vf(){let n=Pl(oe.varianten);Vh=n,le(".ed-json code").innerHTML=gv(n);let e=Ch(oe.varianten),t=oe.varianten.length,i=le(".ed-status");i.className="ed-status "+(e.length?"warn":"ok"),i.innerHTML=e.length?`${rt.achtung}<span>Bitte pr\xFCfen</span>`:`${rt.haken}<span>G\xFCltig \xB7 ${t} ${t===1?"Variante":"Varianten"}</span>`,le(".ed-hinweise").innerHTML=e.map(s=>`<p>${Et(s)}</p>`).join("")}async function _v(){let n=Vh||Pl(oe.varianten),e=!1;try{await navigator.clipboard.writeText(n),e=!0}catch{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.cssText="position:fixed;opacity:0;top:0;left:0",document.body.appendChild(t),t.select();try{e=document.execCommand("copy")}catch{e=!1}t.remove()}if(e){let t=le('[data-aktion="kopieren"]');t.classList.add("erledigt"),t.querySelector("span").textContent="Kopiert",setTimeout(()=>{t.classList.remove("erledigt"),t.querySelector("span").textContent="JSON kopieren"},1800),Ht("JSON kopiert \u2013 jetzt im Produkt beim Metafeld \u201EAnprobe-Modell\u201C einf\xFCgen.")}else{let t=document.createRange();t.selectNodeContents(le(".ed-json code"));let i=getSelection();i.removeAllRanges(),i.addRange(t),Ht("Kopieren nicht erlaubt \u2013 Text ist markiert, bitte mit Strg + C kopieren.")}}function Hf(n,e=!1){let t=vn();return`${If(oe.produktname||oe.vorlage&&Rt[oe.vorlage]?.name||or[t.art])}${e&&t.name?"-"+If(t.name):""}.${n}`}function Gf(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),4e3)}function xv(n){let e=le("#ed-dlg-import .ed-fehler");e.textContent="";let t;try{t=Rh(n)}catch(r){return e.textContent=r.message,!1}dn(),oe.varianten=t.varianten,oe.aktiv=0,oe.vorlage=null;let i=new Set(t.varianten.map(r=>JSON.stringify({...oa(r),name:0,metall:0})));oe.gemeinsam=i.size===1,ha();let s=t.varianten.length;return Ht(t.hinweise.length?`Importiert mit ${t.hinweise.length} Hinweis(en): ${t.hinweise[0]}`:`${s} ${s===1?"Variante":"Varianten"} importiert.`,{knopf:"R\xFCckg\xE4ngig",aktion:Il,dauer:t.hinweise.length?9e3:4e3}),!0}async function yv(n){Fh();let e=le('[data-aktion="bild-menue"]');e.disabled=!0;try{let t=await Hn.alsBild({groesse:Ki,hintergrund:n});Gf(t,Hf("png",!0)),Ht(`Bild gespeichert (${Ki} \xD7 ${Ki} px).`)}catch(t){console.error("[editor]",t),Ht("Das Bild konnte nicht erzeugt werden.")}finally{e.disabled=!1}}function Fh(){le(".ed-menue").hidden=!0,le('[data-aktion="bild-menue"]').setAttribute("aria-expanded","false")}function Wf(n){return new URL(`bilder/vorlagen/${n}.webp`,document.baseURI).href}function Xf(){let n=le(".ed-vorlagen");n.dataset.fertig||(n.innerHTML=Ph().map(e=>`
      <section class="ed-vorlagen-gruppe">
        <h3 class="ed-titel">${Et(e.name)}</h3>
        <div class="ed-vorlagen-raster">
          ${e.vorlagen.map(t=>`
            <button type="button" class="ed-vorlage" data-vorlage="${t.id}">
              <span class="ed-vorlage-foto"><img src="${Wf(t.id)}" alt="" loading="lazy" onerror="this.parentNode.classList.add('ohne')"><span class="ed-vorlage-ersatz">${rt[e.art]}</span></span>
              <b>${Et(t.name)}</b>
              <small>${Et(t.beschreibung)}</small>
            </button>`).join("")}
        </div>
      </section>`).join(""),n.dataset.fertig="1");for(let e of hr(".ed-vorlage",n))e.classList.toggle("aktiv",e.dataset.vorlage===oe.vorlage);le("#ed-dlg-vorlagen").showModal()}function Gh(){let n=parseFloat(Dh(Ff));return Number.isFinite(n)&&n>1&&n<10?n:null}function qf(){let n=le("#ed-kalib-regler");n.value=String(Gh()||ia),kh(),le("#ed-dlg-kalibrieren").showModal()}function kh(){let n=parseFloat(le("#ed-kalib-regler").value),e=le(".ed-karte");e.style.width=`${85.6*n}px`,e.style.height=`${53.98*n}px`}var Lf=null,Oh=null;function Ht(n,{knopf:e=null,aktion:t=null,dauer:i=4200}={}){let s=le(".ed-toast");le(".ed-toast-text",s).textContent=n;let r=le(".ed-toast-knopf",s);r.hidden=!e,r.textContent=e||"",Oh=t,s.classList.add("sichtbar"),clearTimeout(Lf),Lf=setTimeout(()=>s.classList.remove("sichtbar"),i)}var Nf=null;function Wh(){clearTimeout(Nf),Nf=setTimeout(()=>zh(Uf,Of()),400)}function Yf(n){for(let e of hr("[data-ansicht]"))e.setAttribute("aria-checked",String(e.dataset.ansicht===n))}function Bh(n,e){let t=le(`[data-schalter="${n}"]`);t&&t.setAttribute("aria-pressed",String(!!e)),n==="echteGroesse"&&(le(".ed-kalibrieren").hidden=!e,e&&!Gh()&&Ht("F\xFCr genaue 1:1-Darstellung einmal den Bildschirm kalibrieren.",{knopf:"Kalibrieren",aktion:qf,dauer:7e3}))}function vv(){let n=Hn.optionen;zh(kf,JSON.stringify({drehteller:n.drehteller,lineal:n.lineal,bueste:n.bueste,paar:n.paar}))}function Mv(){le(".ed").addEventListener("click",a=>{let o=a.target.closest("[data-aktion], [data-art], [data-metall], [data-index], [data-ansicht], [data-schalter], [data-fotomodus], [data-vorlage], [data-schliessen]");if(!o){a.target.closest(".ed-menue-halter")||Fh();return}if(o.dataset.schliessen!==void 0){o.closest("dialog").close();return}if(o.dataset.vorlage){le("#ed-dlg-vorlagen").close(),lv(o.dataset.vorlage);return}if(o.dataset.art){cv(o.dataset.art);return}if(o.dataset.metall){dn();let l=vn();(!l.name||l.name===Zi[l.metall])&&(l.name=Zi[o.dataset.metall]),l.metall=o.dataset.metall,Ji({kopf:!0});return}if(o.dataset.index){dv(Number(o.dataset.index));return}if(o.dataset.ansicht){Yf(o.dataset.ansicht),Hn.ansicht(o.dataset.ansicht);return}if(o.dataset.schalter){let l=o.dataset.schalter,c=o.getAttribute("aria-pressed")!=="true";Hn.setze({[l]:c}),Bh(l,c),vv();return}if(o.dataset.fotomodus){for(let l of hr("[data-fotomodus]"))l.setAttribute("aria-checked",String(l===o));_i.setzeModus(o.dataset.fotomodus);return}switch(o.dataset.aktion){case"vorlagen":Xf();break;case"import":le("#ed-import-text").value="",le("#ed-dlg-import .ed-fehler").textContent="",le("#ed-dlg-import").showModal();break;case"import-ok":xv(le("#ed-import-text").value)&&le("#ed-dlg-import").close();break;case"anleitung":le("#ed-dlg-anleitung").showModal();break;case"variante-neu":hv();break;case"variante-weg":uv();break;case"kopieren":_v();break;case"json-datei":Gf(new Blob([Vh+`
`],{type:"application/json"}),Hf("json"));break;case"bild-menue":{let l=le(".ed-menue");l.hidden=!l.hidden,o.setAttribute("aria-expanded",String(!l.hidden)),l.hidden||l.querySelector("button").focus();break}case"bild":yv(o.dataset.hintergrund);break;case"foto-laden":le("#ed-foto-datei").click();break;case"foto-ausrichten":{let l=o.getAttribute("aria-pressed")!=="true";o.setAttribute("aria-pressed",String(l)),_i.setzeAusrichten(l);break}case"foto-zurueck":_i.zuruecksetzen();break;case"foto-weg":_i.entferne();break;case"kalibrieren":qf();break;case"kalib-standard":le("#ed-kalib-regler").value=String(ia),kh();break;case"kalib-ok":{let l=parseFloat(le("#ed-kalib-regler").value);zh(Ff,String(l)),Hn.setzeBildschirmMass(l),le("#ed-dlg-kalibrieren").close(),Ht("Ma\xDFstab gespeichert \u2013 \u201EEchte Gr\xF6\xDFe\u201C zeigt jetzt 1:1.");break}default:break}});let e=le("#ed-felder");e.addEventListener("click",a=>{let o=a.target.closest("[data-wert]");if(o){let l=o.closest("[data-pfad]").dataset.pfad,c=o.dataset.zahl==="1"?Number(o.dataset.wert):o.dataset.wert;dn(),fs(l,c),xi(),Hh();return}a.target.closest("[data-farbe-standard]")&&(dn(),fs("stein.farbe",null),xi())});let t=null;e.addEventListener("input",a=>{let o=a.target.closest("[data-pfad]");if(!o)return;let l=o.dataset.pfad;if(a.target.type==="range"){t||(dn(),t=Date.now());let c=parseFloat(a.target.value),h=Number(o.dataset.stellen||0);le('input[type="text"]',o).value=ni(c,h),a.target.style.setProperty("--anteil",`${(c-a.target.min)/(a.target.max-a.target.min||1)*100}%`),fs(l,c);let d=le(".ed-hinweis",o),u=Al.flatMap(f=>f.felder).find(f=>f.pfad===l&&f.hinweis);d&&u&&(d.textContent=u.hinweis(vn(),c))}else a.target.type==="color"&&fs("stein.farbe",a.target.value)}),e.addEventListener("change",a=>{let o=a.target.closest("[data-pfad]");if(!o)return;let l=o.dataset.pfad;if(a.target.type==="range")t=null,xi();else if(a.target.type==="text"){let c=parseFloat(String(a.target.value).replace(",",".")),[h,d]=ra[l]||[-1/0,1/0];Number.isFinite(c)&&(dn(),fs(l,Math.min(d,Math.max(h,c))),(c<h||c>d)&&Ht(`Erlaubt sind ${ni(h,2)} bis ${ni(d,2)}.`)),xi()}else a.target.type==="checkbox"?(dn(),fs(l,a.target.checked),xi()):a.target.type==="color"&&xi()}),e.addEventListener("keydown",a=>{if(a.target.type==="text"&&(a.key==="ArrowUp"||a.key==="ArrowDown")){let o=a.target.closest("[data-pfad]"),l=le('input[type="range"]',o),c=parseFloat(l.step)*(a.shiftKey?10:1)*(a.key==="ArrowUp"?1:-1),h=parseFloat(String(a.target.value).replace(",","."))+c,[d,u]=ra[o.dataset.pfad];dn(),fs(o.dataset.pfad,Math.min(u,Math.max(d,Math.round(h/parseFloat(l.step))*parseFloat(l.step)))),xi(),a.preventDefault()}else a.target.type==="text"&&a.key==="Enter"&&a.target.blur()});let i=le("#ed-variantenname");i.addEventListener("focus",()=>dn()),i.addEventListener("input",()=>{vn().name=i.value;let a=le(`.ed-variante[data-index="${oe.aktiv}"] span:last-child`);a&&(a.textContent=i.value||"Ohne Namen"),Ji({bauen:!1})}),i.addEventListener("change",()=>{vn().name=i.value.trim(),Ji({kopf:!0,bauen:!1})});let s=le("#ed-produktname");s.addEventListener("input",()=>{oe.produktname=s.value,Wh()}),le("#ed-gemeinsam").addEventListener("change",a=>fv(a.target.checked)),le("#ed-foto-datei").addEventListener("change",async a=>{let o=a.target.files&&a.target.files[0];if(a.target.value="",!!o)try{await _i.lade(o),Ht("Foto liegt \xFCber der Vorschau. Mit \u201EAusrichten\u201C verschieben und skalieren.")}catch(l){Ht(l.message)}}),le(".ed-foto-deckkraft input").addEventListener("input",a=>_i.setzeDeckkraft(parseFloat(a.target.value)));let r=le("#ed-buehne");r.addEventListener("dragover",a=>{[...a.dataTransfer?.items||[]].some(o=>o.kind==="file")&&(a.preventDefault(),r.classList.add("ziehen"))}),r.addEventListener("dragleave",()=>r.classList.remove("ziehen")),r.addEventListener("drop",async a=>{r.classList.remove("ziehen");let o=a.dataTransfer?.files?.[0];if(o){a.preventDefault();try{await _i.lade(o)}catch(l){Ht(l.message)}}}),le("#ed-import-datei").addEventListener("change",async a=>{let o=a.target.files&&a.target.files[0];a.target.value="",o&&(le("#ed-import-text").value=await o.text())}),le("#ed-kalib-regler").addEventListener("input",kh),le(".ed-toast-knopf").addEventListener("click",()=>{le(".ed-toast").classList.remove("sichtbar"),Oh&&Oh()});for(let a of hr("dialog"))a.addEventListener("click",o=>{o.target===a&&a.close()});document.addEventListener("keydown",a=>{let o=/^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName||"")&&document.activeElement.type!=="range"&&document.activeElement.type!=="checkbox";(a.ctrlKey||a.metaKey)&&!a.shiftKey&&a.key.toLowerCase()==="z"&&!o&&!le("dialog[open]")&&(a.preventDefault(),Il()),a.key==="Escape"&&Fh()})}function Df(){(document.querySelector("[data-editor]")||document.body).insertAdjacentHTML("beforeend",rv()),Hn=new Ml(le("#ed-buehne"),{linealUnten:46,onAenderung:s=>{Bh("echteGroesse",s.echteGroesse)}});try{let s=JSON.parse(Dh(kf)||"null");if(s){Hn.setze({drehteller:!!s.drehteller,lineal:s.lineal!==!1,bueste:s.bueste!==!1,paar:s.paar!==!1});for(let r of["drehteller","lineal","bueste","paar"])Bh(r,Hn.optionen[r])}}catch{}let e=Gh();e&&Hn.setzeBildschirmMass(e),_i=new bl({ebene:le(".ed-foto-ebene"),daneben:le(".ed-foto-daneben"),bereich:le(".ed-buehne-bereich"),onAenderung:s=>{le(".ed-foto-laden").hidden=s.geladen,le(".ed-foto-steuerung").hidden=!s.geladen,le(".ed-foto-deckkraft").hidden=s.modus!=="darueber",le('[data-aktion="foto-ausrichten"]').hidden=s.modus!=="darueber",le('[data-aktion="foto-zurueck"]').hidden=s.modus!=="darueber",le('[data-aktion="foto-ausrichten"]').setAttribute("aria-pressed",String(s.ausrichten)),le(".ed-ausrichten-hinweis").hidden=!(s.geladen&&s.ausrichten&&s.modus==="darueber");let r=le(".ed-foto-mini");r.style.backgroundImage=s.url?`url("${s.url}")`:""}}),Mv();let t=new URLSearchParams(location.search),i=Dh(Uf);if(t.get("vorlage")&&Rt[t.get("vorlage")])oe.varianten=la(t.get("vorlage")),oe.vorlage=t.get("vorlage"),oe.produktname=Rt[oe.vorlage].name;else if(i&&!t.has("neu"))try{Uh(JSON.parse(i))}catch{Uh({varianten:la(lr),vorlage:lr})}else oe.varianten=la(lr),oe.vorlage=lr,oe.produktname=Rt[lr].name;ha(),window.__editor={zustand:oe,vorschau:Hn,foto:_i,F:Lh}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Df,{once:!0}):Df();
//# sourceMappingURL=editor.js.map
