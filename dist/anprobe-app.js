var Up=0,mu=1,Fp=2;var Da=1,Op=2,zr=3,On=0,Ft=1,on=2,mi=0,as=1,Ua=2,gu=3,xu=4,Bp=5;var Os=100,Hp=101,Vp=102,Gp=103,Wp=104,Xp=200,qp=201,$p=202,Kp=203,_u=204,vu=205,Yp=206,Zp=207,jp=208,Jp=209,Qp=210,em=211,tm=212,nm=213,im=214,jo=0,Jo=1,Qo=2,xr=3,el=4,tl=5,nl=6,il=7,wl=0,sm=1,rm=2,ei=0,yu=1,Mu=2,bu=3,Fa=4,Su=5,os=6,Eu=7,iu="attached",am="detached",wu=300,ls=301,Bs=302,Tl=303,Al=304,Oa=306,ci=1e3,Nn=1001,_r=1002,Ct=1003,Rl=1004;var Hs=1005;var it=1006,Nr=1007;var An=1008;var Yt=1009,Tu=1010,Au=1011,Dr=1012,Cl=1013,_n=1014,Rn=1015,Cn=1016,kl=1017,Il=1018,Ur=1020,Ru=35902,Cu=35899,ku=1021,Iu=1022,vn=1023,hi=1026,cs=1027,Pl=1028,Ll=1029,hs=1030,zl=1031;var Nl=1033,Ba=33776,Ha=33777,Va=33778,Ga=33779,Dl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,Hl=37492,Vl=37496,Gl=37488,Wl=37489,Wa=37490,Xl=37491,ql=37808,$l=37809,Kl=37810,Yl=37811,Zl=37812,jl=37813,Jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,Xa=36285,uc=36286;var Is=2300,Ps=2301,Ko=2302,su=2303,ru=2400,au=2401,ou=2402,om=2500;var Pu=0,qa=1,Fr=2,lm=3200;var $a=0,cm=1,yn="",pt="srgb",mn="srgb-linear",pa="linear",ot="srgb";var Yo=7680;var hm=519,um=512,fm=513,dm=514,fc=515,pm=516,mm=517,dc=518,gm=519,Lu=35044,pc=35048;var zu="300 es",jn=2e3,vr=2001;function Mx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xm(){let s=yr("canvas");return s.style.display="block",s}var Zd={},Mr=null;function ma(...s){let e="THREE."+s.shift();Mr?Mr("log",e,...s):console.log(e,...s)}function _m(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=_m(s);let e="THREE."+s.shift();if(Mr)Mr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function De(...s){s=_m(s);let e="THREE."+s.shift();if(Mr)Mr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ks(...s){let e=s.join(" ");e in Zd||(Zd[e]=!0,ke(...s))}function vm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ym={[jo]:Jo,[Qo]:nl,[el]:il,[xr]:tl,[Jo]:jo,[nl]:Qo,[il]:el,[tl]:xr},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,fa=Math.PI/180,Ls=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Nu(s,e){return(s%e+e)%e}function Sx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ex(s,e,t){return s!==e?(t-s)/(e-s):0}function da(s,e,t){return(1-t)*s+t*e}function wx(s,e,t,n){return da(s,e,1-Math.exp(-t*n))}function Tx(s,e=1){return e-Math.abs(Nu(s,e*2)-e)}function Ax(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Rx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kx(s,e){return s+Math.random()*(e-s)}function Ix(s){return s*(.5-Math.random())}function Px(s){s!==void 0&&(jd=s);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lx(s){return s*fa}function zx(s){return s*Ls}function Nx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Dx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ux(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qe={DEG2RAD:fa,RAD2DEG:Ls,generateUUID:Jn,clamp:Xe,euclideanModulo:Nu,mapLinear:Sx,inverseLerp:Ex,lerp:da,damp:wx,pingpong:Tx,smoothstep:Ax,smootherstep:Rx,randInt:Cx,randFloat:kx,randFloatSpread:Ix,seededRandom:Px,degToRad:Lx,radToDeg:zx,isPowerOfTwo:Nx,ceilPowerOfTwo:Dx,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:Fx,normalize:ct,denormalize:Zn},Hu=class Hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hu.prototype.isVector2=!0;var re=Hu,$e=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);m=Math.sin(m*_)/y,o=Math.sin(o*_)/y,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vu=class Vu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vu.prototype.isVector3=!0;var T=Vu,Ch=new T,Jd=new $e,Gu=class Gu{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],y=i[4],v=i[7],b=i[2],S=i[5],A=i[8];return r[0]=a*x+o*_+l*b,r[3]=a*g+o*y+l*S,r[6]=a*m+o*v+l*A,r[1]=c*x+h*_+f*b,r[4]=c*g+h*y+f*S,r[7]=c*m+h*v+f*A,r[2]=u*x+d*_+p*b,r[5]=u*g+d*y+p*S,r[8]=u*m+d*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;var Oe=Gu,kh=new Oe,Qd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let s={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mn]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),s}var qe=Ox();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Js,sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=yr("canvas")),Js.width=e.width,Js.height=e.height;let i=Js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bx=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ih(i[a].image)):r.push(Ih(i[a]))}else r=Ih(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Hx=0,Ph=new T,Et=class s extends ui{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Nn,i=Nn,r=it,a=An,o=vn,l=Yt,c=s.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Jn(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=wu;Et.DEFAULT_ANISOTROPY=1;var Wu=class Wu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(d+1)/2,b=(m+1)/2,S=(h+u)/4,A=(f+x)/4,M=(p+g)/4;return y>v&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=A/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=M/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;var Je=Wu,rl=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:it,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Et(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:it,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new br(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var al=class extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var El=class El{constructor(e,t,n,i,r,a,o,l,c,h,f,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,x,g)}set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new El().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),a=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,p=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u+x*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,p=o*h,x=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*l,d=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vx,e,Gx)}lookAt(e,t,n){let i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Zi.crossVectors(n,En),Zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Zi.crossVectors(n,En)),Zi.normalize(),yo.crossVectors(En,Zi),i[0]=Zi.x,i[4]=yo.x,i[8]=En.x,i[1]=Zi.y,i[5]=yo.y,i[9]=En.y,i[2]=Zi.z,i[6]=yo.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],y=n[7],v=n[11],b=n[15],S=i[0],A=i[4],M=i[8],w=i[12],R=i[1],k=i[5],z=i[9],I=i[13],L=i[2],N=i[6],D=i[10],O=i[14],W=i[3],F=i[7],U=i[11],G=i[15];return r[0]=a*S+o*R+l*L+c*W,r[4]=a*A+o*k+l*N+c*F,r[8]=a*M+o*z+l*D+c*U,r[12]=a*w+o*I+l*O+c*G,r[1]=h*S+f*R+u*L+d*W,r[5]=h*A+f*k+u*N+d*F,r[9]=h*M+f*z+u*D+d*U,r[13]=h*w+f*I+u*O+d*G,r[2]=p*S+x*R+g*L+m*W,r[6]=p*A+x*k+g*N+m*F,r[10]=p*M+x*z+g*D+m*U,r[14]=p*w+x*I+g*O+m*G,r[3]=_*S+y*R+v*L+b*W,r[7]=_*A+y*k+v*N+b*F,r[11]=_*M+y*z+v*D+b*U,r[15]=_*w+y*I+v*O+b*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],_=l*d-c*u,y=o*d-c*f,v=o*u-l*f,b=a*d-c*h,S=a*u-l*h,A=a*f-o*h;return t*(x*_-g*y+m*v)-n*(p*_-g*b+m*S)+i*(p*y-x*b+m*A)-r*(p*v-x*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=t*o-n*a,y=t*l-i*a,v=t*c-r*a,b=n*l-i*o,S=n*c-r*o,A=i*c-r*l,M=h*x-f*p,w=h*g-u*p,R=h*m-d*p,k=f*g-u*x,z=f*m-d*x,I=u*m-d*g,L=_*I-y*z+v*k+b*R-S*w+A*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/L;return e[0]=(o*I-l*z+c*k)*N,e[1]=(i*z-n*I-r*k)*N,e[2]=(x*A-g*S+m*b)*N,e[3]=(u*S-f*A-d*b)*N,e[4]=(l*R-a*I-c*w)*N,e[5]=(t*I-i*R+r*w)*N,e[6]=(g*v-p*A-m*y)*N,e[7]=(h*A-u*v+d*y)*N,e[8]=(a*z-o*R+c*M)*N,e[9]=(n*R-t*z-r*M)*N,e[10]=(p*S-x*v+m*_)*N,e[11]=(f*v-h*S-d*_)*N,e[12]=(o*w-a*k-l*M)*N,e[13]=(t*k-n*w+i*M)*N,e[14]=(x*y-p*b-g*_)*N,e[15]=(h*b-f*y+u*_)*N,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,x=a*h,g=a*f,m=o*f,_=l*c,y=l*h,v=l*f,b=n.x,S=n.y,A=n.z;return i[0]=(1-(x+m))*b,i[1]=(d+v)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(u+m))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(p+y)*A,i[9]=(g-_)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Qs.set(i[0],i[1],i[2]).length(),o=Qs.set(i[4],i[5],i[6]).length(),l=Qs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),qn.copy(this);let c=1/a,h=1/o,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===jn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===vr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===jn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===vr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};El.prototype.isMatrix4=!0;var _e=El,Qs=new T,qn=new _e,Vx=new T(0,0,0),Gx=new T(1,1,1),Zi=new T,yo=new T,En=new T,tp=new _e,np=new $e,fi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wx=0,ip=new T,er=new $e,Si=new _e,Mo=new T,ta=new T,Xx=new T,qx=new $e,sp=new T(1,0,0),rp=new T(0,1,0),ap=new T(0,0,1),op={type:"added"},$x={type:"removed"},tr={type:"childadded",child:null},Lh={type:"childremoved",child:null},_t=class s extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new fi,n=new $e,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Oe}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ta,Mo,this.up):Si.lookAt(Mo,ta,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),er.setFromRotationMatrix(Si),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),tr.child=e,this.dispatchEvent(tr),tr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($x),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,Xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new T(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kx={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},bo={h:0,s:0,l:0};function zh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Nu(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zh(a,r,e+1/3),this.g=zh(a,r,e),this.b=zh(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return qe.workingToColorSpace(rn.copy(this),e),Math.round(Xe(rn.r*255,0,255))*65536+Math.round(Xe(rn.g*255,0,255))*256+Math.round(Xe(rn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,r=rn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=pt){qe.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,i=rn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(bo);let n=da(ji.h,bo.h,t),i=da(ji.s,bo.s,t),r=da(ji.l,bo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Se;Se.NAMES=Mm;var Tn=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new T,Ei=new T,Nh=new T,wi=new T,nr=new T,ir=new T,lp=new T,Dh=new T,Uh=new T,Fh=new T,Oh=new Je,Bh=new Je,Hh=new Je,Ci=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),Ei.subVectors(n,t),Nh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ei),l=$n.dot(Nh),c=Ei.dot(Ei),h=Ei.dot(Nh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Oh.setScalar(0),Bh.setScalar(0),Hh.setScalar(0),Oh.fromBufferAttribute(e,t),Bh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Oh,r.x),a.addScaledVector(Bh,r.y),a.addScaledVector(Hh,r.z),a}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),Ei.subVectors(e,t),$n.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;nr.subVectors(i,n),ir.subVectors(r,n),Dh.subVectors(e,n);let l=nr.dot(Dh),c=ir.dot(Dh);if(l<=0&&c<=0)return t.copy(n);Uh.subVectors(e,i);let h=nr.dot(Uh),f=ir.dot(Uh);if(h>=0&&f<=h)return t.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(nr,a);Fh.subVectors(e,r);let d=nr.dot(Fh),p=ir.dot(Fh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ir,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return lp.subVectors(r,i),o=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(lp,o);let m=1/(g+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Eo.subVectors(this.max,na),sr.subVectors(e.a,na),rr.subVectors(e.b,na),ar.subVectors(e.c,na),Ji.subVectors(rr,sr),Qi.subVectors(ar,rr),Ts.subVectors(sr,ar);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Ts.z,Ts.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Ts.z,0,-Ts.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Ts.y,Ts.x,0];return!Vh(t,sr,rr,ar,Eo)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,sr,rr,ar,Eo))?!1:(wo.crossVectors(Ji,Qi),t=[wo.x,wo.y,wo.z],Vh(t,sr,rr,ar,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new T,new T,new T,new T,new T,new T,new T,new T],Kn=new T,So=new wt,sr=new T,rr=new T,ar=new T,Ji=new T,Qi=new T,Ts=new T,na=new T,Eo=new T,wo=new T,As=new T;function Vh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){As.fromArray(s,r);let o=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nt=new T,To=new re,Yx=0,bt=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var va=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zx=new wt,ia=new T,Gh=new T,jt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Gh)),this.expandByPoint(ia.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jx=0,zn=new _e,Wh=new _t,or=new T,wn=new wt,sa=new wt,Wt=new T,tt=class s extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?va:_a)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(wn.min,sa.min),wn.expandByPoint(Wt),Wt.addVectors(wn.max,sa.max),wn.expandByPoint(Wt)):(wn.expandByPoint(sa.min),wn.expandByPoint(sa.max))}wn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),Wt.add(or)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new T,l[M]=new T;let c=new T,h=new T,f=new T,u=new re,d=new re,p=new re,x=new T,g=new T;function m(M,w,R){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let k=1/(d.x*p.y-p.x*d.y);isFinite(k)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(k),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(k),o[M].add(x),o[w].add(x),o[R].add(x),l[M].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,w=_.length;M<w;++M){let R=_[M],k=R.start,z=R.count;for(let I=k,L=k+z;I<L;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new T,v=new T,b=new T,S=new T;function A(M){b.fromBufferAttribute(i,M),S.copy(b);let w=o[M];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(S,w);let k=v.dot(l[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,k)}for(let M=0,w=_.length;M<w;++M){let R=_[M],k=R.start,z=R.count;for(let I=k,L=k+z;I<L;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,f=new T;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new bt(u,h,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pn=new T,ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xh=new T,Jx=new T,Qx=new Oe,Yn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Xh.subVectors(n,t).cross(Jx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qx.getNormalMatrix(e),i=this.coplanarPoint(Xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},e_=0,an=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=as,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=vu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Er=class extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,ra=new T,cr=new T,hr=new T,ur=new re,aa=new re,bm=new _e,Ao=new T,oa=new T,Ro=new T,cp=new re,qh=new re,hp=new re,ya=class extends _t{constructor(e=new Er){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zs(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new ns(n,3,0,!1)),lr.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=lr,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),bm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Co(Ao.set(-.5,-.5,0),hr,a,cr,i,r),Co(oa.set(.5,-.5,0),hr,a,cr,i,r),Co(Ro.set(.5,.5,0),hr,a,cr,i,r),cp.set(0,0),qh.set(1,0),hp.set(1,1);let o=e.ray.intersectTriangle(Ao,oa,Ro,!1,ra);if(o===null&&(Co(oa.set(-.5,.5,0),hr,a,cr,i,r),qh.set(0,1),o=e.ray.intersectTriangle(Ao,Ro,oa,!1,ra),o===null))return;let l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||t.push({distance:l,point:ra.clone(),uv:Ci.getInterpolation(ra,Ao,oa,Ro,cp,qh,hp,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Co(s,e,t,n,i,r){ur.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(aa.x=r*ur.x-i*ur.y,aa.y=i*ur.x+r*ur.y):aa.copy(ur),s.copy(e),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(bm)}var Ai=new T,$h=new T,ko=new T,Io=new T,Ns=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$h.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Io.copy(this.origin).sub($h);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ko),o=Io.dot(this.direction),l=-Io.dot(ko),c=Io.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($h).addScaledVector(ko,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,y=n.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),A,M,w,R,k,z,I,L,N,D,O,W;if(v>=b&&v>=S?(w=l,z=f,N=p,W=m,l>=0?(A=c,M=h,R=u,k=d,I=x,L=g,D=_,O=y):(A=h,M=c,R=d,k=u,I=g,L=x,D=y,O=_)):b>=S?(w=c,z=u,N=x,W=_,c>=0?(A=h,M=l,R=d,k=f,I=g,L=p,D=y,O=m):(A=l,M=h,R=f,k=d,I=p,L=g,D=m,O=y)):(w=h,z=d,N=g,W=y,h>=0?(A=l,M=c,R=f,k=u,I=p,L=x,D=m,O=_):(A=c,M=l,R=u,k=f,I=x,L=p,D=_,O=m)),w===0)return null;let F=A/w,U=M/w,G=1/w,ne=R-F*z,ie=k-U*z,ye=I-F*N,Ee=L-U*N,ze=D-F*W,K=O-U*W,J=ze*Ee-K*ye,le=ne*K-ie*ze,we=ye*ie-Ee*ne;if(i){if(J<0||le<0||we<0)return null}else if((J<0||le<0||we<0)&&(J>0||le>0||we>0))return null;let xe=J+le+we;if(xe===0)return null;let Fe=G*(J*z+le*N+we*W);return(xe>0?Fe<0:Fe>0)?null:this.at(Fe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},up=new _e,Rs=new Ns,Po=new jt,fp=new T,Lo=new T,zo=new T,No=new T,Kh=new T,Do=new T,dp=new T,Uo=new T,Ve=class extends _t{constructor(e=new tt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Kh.fromBufferAttribute(f,e),a?Do.addScaledVector(Kh,h):Do.addScaledVector(Kh.sub(t),h))}t.add(Do)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Po.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Po,fp)===null||Rs.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(up.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,b=y;v<b;v+=3){let S=o.getX(v),A=o.getX(v+1),M=o.getX(v+2);i=Fo(this,m,e,n,c,h,f,S,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=Fo(this,a,e,n,c,h,f,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,b=y;v<b;v+=3){let S=v,A=v+1,M=v+2;i=Fo(this,m,e,n,c,h,f,S,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let _=g,y=g+1,v=g+2;i=Fo(this,a,e,n,c,h,f,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function t_(s,e,t,n,i,r,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===On,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:s}}function Fo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Lo),s.getVertexPosition(l,zo),s.getVertexPosition(c,No);let h=t_(s,e,t,n,Lo,zo,No,dp);if(h){let f=new T;Ci.getBarycoord(dp,Lo,zo,No,f),i&&(h.uv=Ci.getInterpolatedAttribute(i,o,l,c,f,new re)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,f,new re)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,f,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};Ci.getNormal(Lo,zo,No,u.normal),h.face=u,h.barycoord=f}return h}var la=new Je,pp=new Je,mp=new Je,n_=new Je,gp=new _e,Oo=new T,Yh=new jt,xp=new _e,Zh=new Ns,Ma=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yh.copy(this.boundingSphere),Yh.applyMatrix4(i),e.ray.intersectsSphere(Yh)!==!1&&(xp.copy(i).invert(),Zh.copy(e.ray).applyMatrix4(xp),!(this.boundingBox!==null&&Zh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===am?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;pp.fromBufferAttribute(i.attributes.skinIndex,e),mp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=mp.getComponent(r);if(a!==0){let o=pp.getComponent(r);gp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(n_.copy(la).applyMatrix4(gp),a)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},is=class extends Et{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ct,h=Ct,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_p=new _e,i_=new _e,ba=class s{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:i_;_p.multiplyMatrices(o,t[r]),_p.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new is(t,e,e,vn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new _e,vp=new _e,Bo=[],yp=new wt,s_=new _e,ca=new Ve,ha=new jt,$t=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),yp.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),ha.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fr),vp.multiplyMatrices(n,fr),ca.matrixWorld=vp,ca.raycast(e,Bo);for(let a=0,o=Bo.length;a<o;a++){let l=Bo[a];l.instanceId=r,l.object=this,t.push(l)}Bo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(i*this.count),i,this.count,Pl,Rn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new jt,r_=new re(.5,.5),Ho=new T,Tr=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],y=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,m-p,b-_).normalize(),i[1].setComponents(c+a,d+h,m+p,b+_).normalize(),i[2].setComponents(c+o,d+f,m+x,b+y).normalize(),i[3].setComponents(c-o,d-f,m-x,b-y).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,d-u,m-g,b-v).normalize();else if(i[4].setComponents(c-l,d-u,m-g,b-v).normalize(),t===jn)i[5].setComponents(c+l,d+u,m+g,b+v).normalize();else if(t===vr)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=r_.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ol=new T,ll=new T,Mp=new _e,ua=new Ns,Vo=new jt,jh=new T,bp=new T,Ds=class extends _t{constructor(e=new tt,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ol.fromBufferAttribute(t,i-1),ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ol.distanceTo(ll);e.setAttribute("lineDistance",new He(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Mp.copy(i).invert(),ua.copy(e.ray).applyMatrix4(Mp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),y=Go(this,e,ua,l,m,_,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=Go(this,e,ua,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=c){let m=Go(this,e,ua,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Go(this,e,ua,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Go(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(ol.fromBufferAttribute(o,i),ll.fromBufferAttribute(o,r),t.distanceSqToSegment(ol,ll,jh,bp)>n)return;jh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(jh);if(!(c<e.near||c>e.far))return{distance:c,point:bp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Sp=new T,Ep=new T,Sa=class extends Ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Sp.fromBufferAttribute(t,i),Ep.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sp.distanceTo(Ep);e.setAttribute("lineDistance",new He(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ea=class extends Ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rr=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wp=new _e,lu=new Ns,Wo=new jt,Xo=new T,wa=class extends _t{constructor(e=new tt,t=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;wp.copy(i).invert(),lu.copy(e.ray).applyMatrix4(wp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++){let g=c.getX(p);Xo.fromBufferAttribute(f,g),Tp(Xo,g,l,i,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,x=d;p<x;p++)Xo.fromBufferAttribute(f,p),Tp(Xo,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Tp(s,e,t,n,i,r,a){let o=lu.distanceSqToPoint(s);if(o<t){let l=new T;lu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ta=class extends Et{constructor(e,t,n,i,r=it,a=it,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function f(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Aa=class extends Et{constructor(e=[],t=ls,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Dn=class extends Et{constructor(e,t,n=_n,i,r,a,o=Ct,l=Ct,c,h=hi,f=1){if(h!==hi&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cl=class extends Dn{constructor(e,t=_n,n=ls,i,r,a=Ct,o=Ct,l,c=hi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Un=class s extends tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2));function p(x,g,m,_,y,v,b,S,A,M,w){let R=v/A,k=b/M,z=v/2,I=b/2,L=S/2,N=A+1,D=M+1,O=0,W=0,F=new T;for(let U=0;U<D;U++){let G=U*k-I;for(let ne=0;ne<N;ne++){let ie=ne*R-z;F[x]=ie*_,F[g]=G*y,F[m]=L,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=S>0?1:-1,h.push(F.x,F.y,F.z),f.push(ne/A),f.push(1-U/M),O+=1}}for(let U=0;U<M;U++)for(let G=0;G<A;G++){let ne=u+G+N*U,ie=u+G+N*(U+1),ye=u+(G+1)+N*(U+1),Ee=u+(G+1)+N*U;l.push(ne,ie,Ee),l.push(ie,ye,Ee),W+=6}o.addGroup(d,W,w),d+=W,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var gn=class s extends tt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],g=n/2,m=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new He(f,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(d,2));function _(){let v=new T,b=new T,S=0,A=(t-e)/n;for(let M=0;M<=r;M++){let w=[],R=M/r,k=R*(t-e)+e;for(let z=0;z<=i;z++){let I=z/i,L=I*l+o,N=Math.sin(L),D=Math.cos(L);b.x=k*N,b.y=-R*n+g,b.z=k*D,f.push(b.x,b.y,b.z),v.set(N,A,D).normalize(),u.push(v.x,v.y,v.z),d.push(I,1-R),w.push(p++)}x.push(w)}for(let M=0;M<i;M++)for(let w=0;w<r;w++){let R=x[w][M],k=x[w+1][M],z=x[w+1][M+1],I=x[w][M+1];(e>0||w!==0)&&(h.push(R,k,I),S+=3),(t>0||w!==r-1)&&(h.push(k,z,I),S+=3)}c.addGroup(m,S,0),m+=S}function y(v){let b=p,S=new re,A=new T,M=0,w=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;let k=p;for(let z=0;z<=i;z++){let L=z/i*l+o,N=Math.cos(L),D=Math.sin(L);A.x=w*D,A.y=g*R,A.z=w*N,f.push(A.x,A.y,A.z),u.push(0,R,0),S.x=N*.5+.5,S.y=D*.5*R+.5,d.push(S.x,S.y),p++}for(let z=0;z<i;z++){let I=b+z,L=k+z;v===!0?h.push(L,L+1,I):h.push(L+1,L,I),M+=3}c.addGroup(m,M,v===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hl=class s extends tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new T,v=new T,b=new T;for(let S=0;S<t.length;S+=3)d(t[S+0],y),d(t[S+1],v),d(t[S+2],b),l(y,v,b,_)}function l(_,y,v,b){let S=b+1,A=[];for(let M=0;M<=S;M++){A[M]=[];let w=_.clone().lerp(v,M/S),R=y.clone().lerp(v,M/S),k=S-M;for(let z=0;z<=k;z++)z===0&&M===S?A[M][z]=w:A[M][z]=w.clone().lerp(R,z/k)}for(let M=0;M<S;M++)for(let w=0;w<2*(S-M)-1;w++){let R=Math.floor(w/2);w%2===0?(u(A[M][R+1]),u(A[M+1][R]),u(A[M][R])):(u(A[M][R+1]),u(A[M+1][R+1]),u(A[M+1][R]))}}function c(_){let y=new T;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new T;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=g(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;a.push(v,1-b)}p(),f()}function f(){for(let _=0;_<a.length;_+=6){let y=a[_+0],v=a[_+2],b=a[_+4],S=Math.max(y,v,b),A=Math.min(y,v,b);S>.9&&A<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let _=new T,y=new T,v=new T,b=new T,S=new re,A=new re,M=new re;for(let w=0,R=0;w<r.length;w+=9,R+=6){_.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),S.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),b.copy(_).add(y).add(v).divideScalar(3);let k=g(b);x(S,R+0,_,k),x(A,R+2,y,k),x(M,R+4,v,k)}}function x(_,y,v,b){b<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var ul=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,i=[],r=[],a=[],o=new T,l=new _e;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Xe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Xe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Du(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Ap=new T,Rp=new T,Jh=new Du,Qh=new Du,eu=new Du,ss=class extends ul{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Rp.subVectors(i[0],i[1]).add(i[0]),c=Rp);let f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ap.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ap),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Jh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,g),Qh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,g),eu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Qh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),eu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Jh.calc(l),Qh.calc(l),eu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Cr=class s extends hl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},kr=class s extends tt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Xe(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new T,u=new re,d=new T,p=new T,x=new T,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=t;_++){let y=n+_*h*i,v=Math.sin(y),b=Math.cos(y);for(let S=0;S<=e.length-1;S++){f.x=e[S].x*v,f.y=e[S].y,f.z=e[S].x*b,a.push(f.x,f.y,f.z),u.x=_/t,u.y=S/(e.length-1),o.push(u.x,u.y);let A=l[3*S+0]*v,M=l[3*S+1],w=l[3*S+0]*b;c.push(A,M,w)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,b=v,S=v+e.length,A=v+e.length+1,M=v+1;r.push(b,S,M),r.push(A,M,S)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Li=class s extends tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*u-a;for(let y=0;y<c;y++){let v=y*f-r;p.push(v,-_,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let y=_+c*m,v=_+c*(m+1),b=_+1+c*(m+1),S=_+1+c*m;d.push(y,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var zi=class s extends tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new T,u=new T,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],y=m/n,v=a+y*o,b=e*Math.cos(v),S=Math.sqrt(e*e-b*b),A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let w=M/t,R=i+w*r;f.x=-S*Math.cos(R),f.y=b,f.z=S*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(w+A,1-y),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let y=h[m][_+1],v=h[m][_],b=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&d.push(y,v,S),(m!==n-1||l<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xn=class s extends tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new T,d=new T,p=new T;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=i;m++){let _=m/i*r;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,_=(i+1)*(x-1)+g-1,y=(i+1)*(x-1)+g,v=(i+1)*x+g;l.push(m,_,v),l.push(_,y,v)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Vs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Cp(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Cp(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Vs(s[t]);for(let i in n)e[i]=n[i]}return e}function Cp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function a_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Uu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Sm={clone:Vs,merge:ln},o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new T().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fl=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qn=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends Qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ca=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dl=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ts(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Zo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function c_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function h_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var di=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends di{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:r=e,o=2*t-n;break;case ou:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=e,l=2*n-t;break;case ou:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+_*a[c+b]+y*a[l+b]+v*a[f+b];return r}},gl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},xl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_l=class extends di{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,d=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=d*u+p*2,_=f[m],y=f[m+1],v=e*u+p*2,b=h[v],S=h[v+1],A=f_(n,t,_,b,i);r[p]=Em(A,x,y,S,g)}return r}};function Em(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function u_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function f_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Em(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=u_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Zo(e.settings)&&(n.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _l(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Ko:t=this.InterpolantFactoryMethodSmooth;break;case su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Ko;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Zo(this.settings)&&(Ip(this.settings.inTangents,e),Ip(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&bx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[u+p]||x!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Zo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ip(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ps;var Ni=class extends bn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Is;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};ka.prototype.ValueTypeName="color";var Di=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};Di.prototype.ValueTypeName="number";var vl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ui=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends bn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Is;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};rs.prototype.ValueTypeName="vector";var Ia=class{constructor(e="",t=-1,n=[],i=om){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=c_(l);l=kp(l,1,h),c=kp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let f=h[1],u=i[f];u||(i[f]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function d_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return rs;case"color":return ka;case"quaternion":return Ui;case"bool":case"boolean":return Ni;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function p_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=d_(s.type);if(s.times===void 0){let n=[],i=[];h_(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Zo(s.settings)&&(t.settings={inTangents:ts(s.settings.inTangents,Float32Array),outTangents:ts(s.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Pp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Pp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wm=new yl,pi=class{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},cu=class extends Error{constructor(e,t){super(e),this.response=t}},Ir=class extends pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ri[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0,x=0,g=new ReadableStream({start(m){_();function _(){f.read().then(({done:y,value:v})=>{if(y)m.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let S=0,A=h.length;S<A;S++){let M=h[S];M.onProgress&&M.onProgress(b)}m.enqueue(v),_()}},y=>{m.error(y)})}}});return new Response(g)}else throw new cu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{li.add(`file:${e}`,c);let h=Ri[e];delete Ri[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=new WeakMap,Ml=class extends pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=dr.get(a);f===void 0&&(f=[],dr.set(a,f)),f.push({onLoad:t,onError:i})}return a}let o=yr("img");function l(){h(),t&&t(this);let f=dr.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}dr.delete(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),li.remove(`image:${e}`);let u=dr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onError&&p.onError(f)}dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Pa=class extends pi{constructor(e){super(e)}load(e,t,n,i){let r=new Et,a=new Ml(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Pr=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var tu=new _e,Lp=new T,zp=new T,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qo=new T,$o=new $e,oi=new T,La=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,$o,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qo,$o,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,$o,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new T,Np=new re,Dp=new re,Xt=class extends La{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Dp),t.subVectors(Dp,Np)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hu=class extends Lr{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},za=class extends Pr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uu=class extends Lr{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends Pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fn=class extends La{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fu=class extends Lr{constructor(){super(new Fn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Oi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var nu=new WeakMap,Na=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{nu.has(a)===!0?(i&&i(nu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),nu.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pr=-90,mr=1,bl=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(pr,mr,e,t);i.layers=this.layers,this.add(i);let r=new Xt(pr,mr,e,t);r.layers=this.layers,this.add(r);let a=new Xt(pr,mr,e,t);a.layers=this.layers,this.add(a);let o=new Xt(pr,mr,e,t);o.layers=this.layers,this.add(o);let l=new Xt(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fu="\\[\\]\\.:\\/",m_=new RegExp("["+Fu+"]","g"),Ou="[^"+Fu+"]",g_="[^"+Fu.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",Ou),__=/(WCOD+)?/.source.replace("WCOD",g_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),M_=new RegExp("^"+x_+__+v_+y_+"$"),b_=["material","materials","bones","map"],du=class{constructor(e,t,n){let i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(e){let t=M_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);b_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=du;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jw=new Float32Array(1);var Xu=class Xu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Xu.prototype.isMatrix2=!0;var pu=Xu;function Bu(s,e,t,n){let i=S_(n);switch(t){case ku:return s*e;case Pl:return s*e/i.components*i.byteLength;case Ll:return s*e/i.components*i.byteLength;case hs:return s*e*2/i.components*i.byteLength;case zl:return s*e*2/i.components*i.byteLength;case Iu:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case Nl:return s*e*4/i.components*i.byteLength;case Ba:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(s,16)*Math.max(e,8)/4;case Dl:case Fl:return Math.max(s,8)*Math.max(e,8)/2;case Bl:case Hl:case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Wa:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ac:case oc:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xa:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S_(s){switch(s){case Yt:case Tu:return{byteLength:1,components:1};case Dr:case Au:case Cn:return{byteLength:2,components:1};case kl:case Il:return{byteLength:2,components:4};case _n:case Cl:case Rn:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $m(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function w_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P_=`#ifdef USE_AOMAP
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
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O_=`#ifdef USE_IRIDESCENCE
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
#endif`,B_=`#ifdef USE_BUMPMAP
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Y_=`#define PI 3.141592653589793
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
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
}`,wv=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,Zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uy=`float getShadowMask() {
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
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
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
}`,Ly=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Ny=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define MATCAP
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
}`,Xy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,$y=`#define NORMAL
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
}`,Ky=`#define PHONG
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
}`,Yy=`#define PHONG
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
}`,Zy=`#define STANDARD
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
}`,jy=`#define STANDARD
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
}`,Jy=`#define TOON
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
}`,Qy=`#define TOON
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
}`,eM=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 color;
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
}`,sM=`uniform float rotation;
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
}`,rM=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:R_,alphamap_pars_fragment:C_,alphatest_fragment:k_,alphatest_pars_fragment:I_,aomap_fragment:P_,aomap_pars_fragment:L_,batching_pars_vertex:z_,batching_vertex:N_,begin_vertex:D_,beginnormal_vertex:U_,bsdfs:F_,iridescence_fragment:O_,bumpmap_pars_fragment:B_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:G_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:$_,color_vertex:K_,common:Y_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:j_,displacementmap_pars_vertex:J_,displacementmap_vertex:Q_,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,colorspace_fragment:nv,colorspace_pars_fragment:iv,envmap_fragment:sv,envmap_common_pars_fragment:rv,envmap_pars_fragment:av,envmap_pars_vertex:ov,envmap_physical_pars_fragment:_v,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:hv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:pv,lights_lambert_fragment:mv,lights_lambert_pars_fragment:gv,lights_pars_begin:xv,lights_toon_fragment:vv,lights_toon_pars_fragment:yv,lights_phong_fragment:Mv,lights_phong_pars_fragment:bv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Ev,lights_fragment_begin:wv,lights_fragment_maps:Tv,lights_fragment_end:Av,lightprobes_pars_fragment:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Pv,map_fragment:Lv,map_pars_fragment:zv,map_particle_fragment:Nv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Gv,normal_fragment_begin:Wv,normal_fragment_maps:Xv,normal_pars_fragment:qv,normal_pars_vertex:$v,normal_vertex:Kv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:Zv,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:ay,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:hy,shadowmask_pars_fragment:uy,skinbase_vertex:fy,skinning_pars_vertex:dy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:xy,tonemapping_fragment:_y,tonemapping_pars_fragment:vy,transmission_fragment:yy,transmission_pars_fragment:My,uv_pars_fragment:by,uv_pars_vertex:Sy,uv_vertex:Ey,worldpos_vertex:wy,background_vert:Ty,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:ky,cube_frag:Iy,depth_vert:Py,depth_frag:Ly,distance_vert:zy,distance_frag:Ny,equirect_vert:Dy,equirect_frag:Uy,linedashed_vert:Fy,linedashed_frag:Oy,meshbasic_vert:By,meshbasic_frag:Hy,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:$y,meshphong_vert:Ky,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:jy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:sM,sprite_frag:rM},pe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},xi={basic:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:ln([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:ln([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:ln([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:ln([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:ln([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:ln([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:ln([pe.common,pe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:ln([pe.lights,pe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var mc={r:0,b:0,g:0},aM=new _e,Km=new Oe;Km.set(-1,0,0,0,1,0,0,0,1);function oM(s,e,t,n,i,r){let a=new Se(0),o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=e.get(y,v)}return y}function p(_){let y=!1,v=d(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),y=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===Oa)?(c===void 0&&(c=new Ve(new Un(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Vs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Km),c.material.toneMapped=qe.getTransfer(v.colorSpace)!==ot,(h!==v||f!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ve(new Li(2,2),new Ut({name:"BackgroundMaterial",uniforms:Vs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(mc,Uu(s)),t.buffers.color.setClear(mc.r,mc.g,mc.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:x,dispose:m}}function lM(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(k,z,I,L,N){let D=!1,O=f(k,L,I,z);r!==O&&(r=O,c(r.object)),D=d(k,L,I,N),D&&p(k,L,I,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(k,z,I,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(k){return s.bindVertexArray(k)}function h(k){return s.deleteVertexArray(k)}function f(k,z,I,L){let N=L.wireframe===!0,D=n[z.id];D===void 0&&(D={},n[z.id]=D);let O=k.isInstancedMesh===!0?k.id:0,W=D[O];W===void 0&&(W={},D[O]=W);let F=W[I.id];F===void 0&&(F={},W[I.id]=F);let U=F[N];return U===void 0&&(U=u(l()),F[N]=U),U}function u(k){let z=[],I=[],L=[];for(let N=0;N<t;N++)z[N]=0,I[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:L,object:k,attributes:{},index:null}}function d(k,z,I,L){let N=r.attributes,D=z.attributes,O=0,W=I.getAttributes();for(let F in W)if(W[F].location>=0){let G=N[F],ne=D[F];if(ne===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function p(k,z,I,L){let N={},D=z.attributes,O=0,W=I.getAttributes();for(let F in W)if(W[F].location>=0){let G=D[F];G===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(G=k.instanceColor));let ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),N[F]=ne,O++}r.attributes=N,r.attributesNum=O,r.index=L}function x(){let k=r.newAttributes;for(let z=0,I=k.length;z<I;z++)k[z]=0}function g(k){m(k,0)}function m(k,z){let I=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;I[k]=1,L[k]===0&&(s.enableVertexAttribArray(k),L[k]=1),N[k]!==z&&(s.vertexAttribDivisor(k,z),N[k]=z)}function _(){let k=r.newAttributes,z=r.enabledAttributes;for(let I=0,L=z.length;I<L;I++)z[I]!==k[I]&&(s.disableVertexAttribArray(I),z[I]=0)}function y(k,z,I,L,N,D,O){O===!0?s.vertexAttribIPointer(k,z,I,N,D):s.vertexAttribPointer(k,z,I,L,N,D)}function v(k,z,I,L){x();let N=L.attributes,D=I.getAttributes(),O=z.defaultAttributeValues;for(let W in D){let F=D[W];if(F.location>=0){let U=N[W];if(U===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(U=k.instanceColor)),U!==void 0){let G=U.normalized,ne=U.itemSize,ie=e.get(U);if(ie===void 0)continue;let ye=ie.buffer,Ee=ie.type,ze=ie.bytesPerElement,K=Ee===s.INT||Ee===s.UNSIGNED_INT||U.gpuType===Cl;if(U.isInterleavedBufferAttribute){let J=U.data,le=J.stride,we=U.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<F.locationSize;xe++)m(F.location+xe,J.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<F.locationSize;xe++)g(F.location+xe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let xe=0;xe<F.locationSize;xe++)y(F.location+xe,ne/F.locationSize,Ee,G,le*ze,(we+ne/F.locationSize*xe)*ze,K)}else{if(U.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)m(F.location+J,U.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let J=0;J<F.locationSize;J++)g(F.location+J);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let J=0;J<F.locationSize;J++)y(F.location+J,ne/F.locationSize,Ee,G,ne*ze,ne/F.locationSize*J*ze,K)}}else if(O!==void 0){let G=O[W];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(F.location,G);break;case 3:s.vertexAttrib3fv(F.location,G);break;case 4:s.vertexAttrib4fv(F.location,G);break;default:s.vertexAttrib1fv(F.location,G)}}}}_()}function b(){w();for(let k in n){let z=n[k];for(let I in z){let L=z[I];for(let N in L){let D=L[N];for(let O in D)h(D[O].object),delete D[O];delete L[N]}}delete n[k]}}function S(k){if(n[k.id]===void 0)return;let z=n[k.id];for(let I in z){let L=z[I];for(let N in L){let D=L[N];for(let O in D)h(D[O].object),delete D[O];delete L[N]}}delete n[k.id]}function A(k){for(let z in n){let I=n[z];for(let L in I){let N=I[L];if(N[k.id]===void 0)continue;let D=N[k.id];for(let O in D)h(D[O].object),delete D[O];delete N[k.id]}}}function M(k){for(let z in n){let I=n[z],L=k.isInstancedMesh===!0?k.id:0,N=I[L];if(N!==void 0){for(let D in N){let O=N[D];for(let W in O)h(O[W].object),delete O[W];delete N[D]}delete I[L],Object.keys(I).length===0&&delete n[z]}}}function w(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function cM(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==vn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let M=A===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yt&&A!==Rn&&!M&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:S}}function uM(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Yn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,y=_*4,v=m.clippingState||null;l.value=v,v=h(p,u,y,d);for(let b=0;b!==y;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=d;y!==x;++y,v+=4)a.copy(f[y]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Br=4,fM=6,dM=20,pM=256,Ka=new Fn,Tm=new Se,qu=null,$u=0,Ku=0,Yu=!1,mM=new T,Gs=new T,Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=mM}=r;qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,$u,Ku),this._renderer.xr.enabled=Yu,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:it,minFilter:it,generateMipmaps:!1,type:Cn,format:vn,colorSpace:mn,depthBuffer:!1},i=Am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gM(r)),this._blurMaterial=_M(r,e,t),this._ggxMaterial=xM(r,e,t)}return i}_compileMaterial(e){let t=new Ve(new tt,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Tm),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Un,new qt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(Tm),m=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let b=this._cubeSize;Or(i,v*b,y>2?b:0,b,b),f.setRenderTarget(i),m&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===Bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Br?n-p+Br:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Or(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Ka),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Or(e,g,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Ka)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Br?i-this._lodMax+Br:0),u=4*(this._cubeSize-h);Or(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ka)}};function gM(s){let e=[],t=[],n=s,i=s-Br+1+fM;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){let _=m%3*2/3-1,y=m>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];p.set(v,d*u*m);for(let b=0;b<u;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?Gs.set(1,A,S):m===1?Gs.set(-S,1,-A):m===2?Gs.set(-S,A,1):m===3?Gs.set(-1,A,-S):m===4?Gs.set(-S,-1,A):Gs.set(S,A,-1),Gs.toArray(x,(m*u+b)*d)}}let g=new tt;g.setAttribute("position",new bt(p,d)),g.setAttribute("outputDirection",new bt(x,d)),t.push(new Ve(g,null)),n>Br&&n--}return{lodMeshes:t,sizeLods:e}}function Am(s,e,t){let n=new Dt(s,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xM(s,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _M(s,e,t){return new Ut({name:"SphericalGaussianBlur",defines:{SAMPLES:dM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Rm(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Cm(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Aa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Un(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:mi});r.uniforms.tEquirect.value=t;let a=new Ve(i,r),o=t.minFilter;return t.minFilter===An&&(t.minFilter=it),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function vM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Tl||d===Al)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new xc(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===Tl||d===Al,x=d===ls||d===Bs;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Vr(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Vr(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Tl?u.mapping=ls:d===Al&&(u.mapping=Bs),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function yM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ks("WebGLRenderer: "+n+" extension not supported."),i}}}function MM(s,e,t,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let b=_[y+0],S=_[y+1],A=_[y+2];u.push(b,S,S,A,A,b)}}else{let _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let b=y+0,S=y+1,A=y+2;u.push(b,S,S,A,A,b)}}let g=new(p.count>=65535?va:_a)(u,1);g.version=x;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function bM(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function SM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function EM(s,e,t){let n=new WeakMap,i=new Je;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*b*4*f),A=new ga(S,v,b,f);A.type=Rn,A.needsUpdate=!0;let M=y*4;for(let R=0;R<f;R++){let k=g[R],z=m[R],I=_[R],L=v*b*4*R;for(let N=0;N<k.count;N++){let D=N*M;d===!0&&(i.fromBufferAttribute(k,N),S[L+D+0]=i.x,S[L+D+1]=i.y,S[L+D+2]=i.z,S[L+D+3]=0),p===!0&&(i.fromBufferAttribute(z,N),S[L+D+4]=i.x,S[L+D+5]=i.y,S[L+D+6]=i.z,S[L+D+7]=0),x===!0&&(i.fromBufferAttribute(I,N),S[L+D+8]=i.x,S[L+D+9]=i.y,S[L+D+10]=i.z,S[L+D+11]=I.itemSize===4?i.w:1)}}u={count:f,texture:A,size:new re(v,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function wM(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var TM={[yu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[bu]:"CINEON_TONE_MAPPING",[Fa]:"ACES_FILMIC_TONE_MAPPING",[os]:"AGX_TONE_MAPPING",[Eu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};function AM(s,e,t,n,i,r){let a=new Dt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new tt;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));let h=new fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ve(c,h),u=new Fn(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,_=[],y=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<_.length;S++){let A=_[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let b=a.width,S=a.height;_.length>0&&o===null&&(o=new Dt(b,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new Dt(b,S,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let M=_[A];M.setSize&&M.setSize(b,S)}},this.begin=function(v,b){if(x||v.toneMapping===ei&&_.length===0)return!1;if(m=b,b!==null){let S=b.width,A=b.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return y===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return y},this.end=function(v,b){v.toneMapping=g,x=!0;let S=a,A=o;for(let M=0;M<_.length;M++){let w=_[M];w.enabled!==!1&&(w.render(v,A,S,b),w.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},qe.getTransfer(d)===ot&&(h.defines.SRGB_TRANSFER="");let M=TM[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ym=new Et,Ju=new Dn(1,1),Zm=new ga,jm=new al,Jm=new Aa,km=[],Im=[],Pm=new Float32Array(16),Lm=new Float32Array(9),zm=new Float32Array(4);function Gr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=km[i];if(r===void 0&&(r=new Float32Array(i),km[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yc(s,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function RM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function CM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function kM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function IM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function PM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;zm.set(n),s.uniformMatrix2fv(this.addr,!1,zm),Bt(t,n)}}function LM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Lm.set(n),s.uniformMatrix3fv(this.addr,!1,Lm),Bt(t,n)}}function zM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Pm.set(n),s.uniformMatrix4fv(this.addr,!1,Pm),Bt(t,n)}}function NM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function DM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function UM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function FM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function OM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function BM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function HM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function VM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function GM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?dc:fc,r=Ju):r=Ym,t.setTexture2D(e||r,i)}function WM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jm,i)}function XM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jm,i)}function qM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function $M(s){switch(s){case 5126:return RM;case 35664:return CM;case 35665:return kM;case 35666:return IM;case 35674:return PM;case 35675:return LM;case 35676:return zM;case 5124:case 35670:return NM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function KM(s,e){s.uniform1fv(this.addr,e)}function YM(s,e){let t=Gr(e,this.size,2);s.uniform2fv(this.addr,t)}function ZM(s,e){let t=Gr(e,this.size,3);s.uniform3fv(this.addr,t)}function jM(s,e){let t=Gr(e,this.size,4);s.uniform4fv(this.addr,t)}function JM(s,e){let t=Gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function QM(s,e){let t=Gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eb(s,e){let t=Gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tb(s,e){s.uniform1iv(this.addr,e)}function nb(s,e){s.uniform2iv(this.addr,e)}function ib(s,e){s.uniform3iv(this.addr,e)}function sb(s,e){s.uniform4iv(this.addr,e)}function rb(s,e){s.uniform1uiv(this.addr,e)}function ab(s,e){s.uniform2uiv(this.addr,e)}function ob(s,e){s.uniform3uiv(this.addr,e)}function lb(s,e){s.uniform4uiv(this.addr,e)}function cb(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ju:a=Ym;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function hb(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jm,r[a])}function ub(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jm,r[a])}function fb(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Ot(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zm,r[a])}function db(s){switch(s){case 5126:return KM;case 35664:return YM;case 35665:return ZM;case 35666:return jM;case 35674:return JM;case 35675:return QM;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ab;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}var Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$M(t.type)}},ef=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}},tf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Zu=/(\w+)(\])?(\[|\.)?/g;function Nm(s,e){s.seq.push(e),s.map[e.id]=e}function pb(s,e,t){let n=s.name,i=n.length;for(Zu.lastIndex=0;;){let r=Zu.exec(n),a=Zu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nm(t,c===void 0?new Qu(o,s,e):new ef(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new tf(o),Nm(t,f)),t=f}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pb(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Dm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var mb=37297,gb=0;function xb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Um=new Oe;function _b(s){qe._getMatrix(Um,qe.workingColorSpace,s);let e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case pa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xb(s.getShaderSource(e),o)}else return r}function vb(s,e){let t=_b(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var yb={[yu]:"Linear",[Mu]:"Reinhard",[bu]:"Cineon",[Fa]:"ACESFilmic",[os]:"AgX",[Eu]:"Neutral",[Su]:"Custom"};function Mb(s,e){let t=yb[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new T;function bb(){qe.getLuminanceCoefficients(gc);let s=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function Eb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Za(s){return s!==""}function Om(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(s){return s.replace(Tb,Rb)}var Ab=new Map;function Rb(s,e){let t=Ge[e];if(t===void 0){let n=Ab.get(e);if(n!==void 0)t=Ge[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(t)}var Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(s){return s.replace(Cb,kb)}function kb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Ib={[Da]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Pb(s){return Ib[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lb={[ls]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function zb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Lb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nb={[Bs]:"ENVMAP_MODE_REFRACTION"};function Db(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ub={[wl]:"ENVMAP_BLENDING_MULTIPLY",[sm]:"ENVMAP_BLENDING_MIX",[rm]:"ENVMAP_BLENDING_ADD"};function Fb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ub[s.combine]||"ENVMAP_BLENDING_NONE"}function Ob(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Pb(t),c=zb(t),h=Db(t),f=Fb(t),u=Ob(t),d=Sb(t),p=Eb(r),x=i.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Za).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(g=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[Vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ei?Mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vb("linearToOutputTexel",t.outputColorSpace),bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=nf(a),a=Om(a,t),a=Bm(a,t),o=nf(o),o=Om(o,t),o=Bm(o,t),a=Hm(a),o=Hm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+a,v=_+m+o,b=Dm(i,i.VERTEX_SHADER,y),S=Dm(i,i.FRAGMENT_SHADER,v);i.attachShader(x,b),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(k){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x)||"",I=i.getShaderInfoLog(b)||"",L=i.getShaderInfoLog(S)||"",N=z.trim(),D=I.trim(),O=L.trim(),W=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,S);else{let U=Fm(i,b,"vertex"),G=Fm(i,S,"fragment");De("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+N+`
`+U+`
`+G)}else N!==""?ke("WebGLProgram: Program Info Log:",N):(D===""||O==="")&&(F=!1);F&&(k.diagnostics={runnable:W,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(b),i.deleteShader(S),M=new Hr(i,x),w=wb(i,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,mb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var Hb=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rf(e),t.set(e,n)),n}},rf=class{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}};function Vb(s){return s===hs||s===Wa||s===Xa}function Gb(s,e,t,n,i,r){let a=new xa,o=new sf,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,w,R,k,z,I){let L=k.fog,N=z.geometry,D=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=e.get(M.envMap||D,O),F=W&&W.mapping===Oa?W.image.height:null,U=d[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&ke("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=G!==void 0?G.length:0,ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let ye,Ee,ze,K;if(U){let gt=xi[U];ye=gt.vertexShader,Ee=gt.fragmentShader}else{ye=M.vertexShader,Ee=M.fragmentShader;let gt=o.getVertexShaderStage(M),rt=o.getFragmentShaderStage(M);o.update(M,gt,rt),ze=gt.id,K=rt.id}let J=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,Fe=!!M.map,St=!!M.matcap,Ye=!!W,st=!!M.aoMap,mt=!!M.lightMap,je=!!M.bumpMap&&M.wireframe===!1,yt=!!M.normalMap,Gt=!!M.displacementMap,Mn=!!M.emissiveMap,Mt=!!M.metalnessMap,Lt=!!M.roughnessMap,V=M.anisotropy>0,tn=M.clearcoat>0,lt=M.dispersion>0,P=M.retroreflectivity>0,E=M.iridescence>0,X=M.sheen>0,Y=M.transmission>0,j=V&&!!M.anisotropyMap,ae=tn&&!!M.clearcoatMap,oe=tn&&!!M.clearcoatNormalMap,Q=tn&&!!M.clearcoatRoughnessMap,te=E&&!!M.iridescenceMap,ce=E&&!!M.iridescenceThicknessMap,Ie=X&&!!M.sheenColorMap,de=X&&!!M.sheenRoughnessMap,he=!!M.specularMap,Pe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Be=Y&&!!M.transmissionMap,H=Y&&!!M.thicknessMap,ue=!!M.gradientMap,ee=!!M.alphaMap,fe=M.alphaTest>0,ve=!!M.alphaHash,se=!!M.extensions,Le=ei;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Le=s.toneMapping);let Re={shaderID:U,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:Ee,defines:M.defines,customVertexShaderID:ze,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Fe,matcap:St,envMap:Ye,envMapMode:Ye&&W.mapping,envMapCubeUVHeight:F,aoMap:st,lightMap:mt,bumpMap:je,normalMap:yt,displacementMap:Gt,emissiveMap:Mn,normalMapObjectSpace:yt&&M.normalMapType===cm,normalMapTangentSpace:yt&&M.normalMapType===$a,packedNormalMap:yt&&M.normalMapType===$a&&Vb(M.normalMap.format),metalnessMap:Mt,roughnessMap:Lt,anisotropy:V,anisotropyMap:j,clearcoat:tn,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Q,dispersion:lt,retroreflection:P,iridescence:E,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:X,sheenColorMap:Ie,sheenRoughnessMap:de,specularMap:he,specularColorMap:Pe,specularIntensityMap:Ne,transmission:Y,transmissionMap:Be,thicknessMap:H,gradientMap:ue,opaque:M.transparent===!1&&M.blending===as&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:ve,combine:M.combine,mapUv:Fe&&p(M.map.channel),aoMapUv:st&&p(M.aoMap.channel),lightMapUv:mt&&p(M.lightMap.channel),bumpMapUv:je&&p(M.bumpMap.channel),normalMapUv:yt&&p(M.normalMap.channel),displacementMapUv:Gt&&p(M.displacementMap.channel),emissiveMapUv:Mn&&p(M.emissiveMap.channel),metalnessMapUv:Mt&&p(M.metalnessMap.channel),roughnessMapUv:Lt&&p(M.roughnessMap.channel),anisotropyMapUv:j&&p(M.anisotropyMap.channel),clearcoatMapUv:ae&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(M.sheenRoughnessMap.channel),specularMapUv:he&&p(M.specularMap.channel),specularColorMapUv:Pe&&p(M.specularColorMap.channel),specularIntensityMapUv:Ne&&p(M.specularIntensityMap.channel),transmissionMapUv:Be&&p(M.transmissionMap.channel),thicknessMapUv:H&&p(M.thicknessMap.channel),alphaMapUv:ee&&p(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(yt||V),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Fe||ee),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&yt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:Mn&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:se&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&M.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function y(M){let w=d[M.type],R;if(w){let k=xi[w];R=Sm.clone(k.uniforms)}else R=M.uniforms;return R}function v(M,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new Bb(s,w,M,i),c.push(R),h.set(w,R)),R}function b(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){o.remove(M)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function Wb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Xb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,x,g,m){let _=s[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=m),e++,_}function l(u,d,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let y=o(u,d,p,x,g,m);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):t.push(y)}function c(u,d,p,x,g,m){let _=o(u,d,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(u,d){t.length>1&&t.sort(u||Xb),n.length>1&&n.sort(d||Gm),i.length>1&&i.sort(d||Gm)}function f(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function qb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Wm,s.set(n,[a])):i>=r.length?(a=new Wm,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function $b(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function Kb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Yb=0;function Zb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jb(s){let e=new $b,t=Kb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new _e,a=new _e;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,_=0,y=0,v=0,b=0,S=0,A=0,M=0,w=0,R=0;c.sort(Zb);for(let z=0,I=c.length;z<I;z++){let L=c[z],N=L.color,D=L.intensity,O=L.distance,W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*D,f+=N.g*D,u+=N.b*D;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],D);R++}else if(L.isSunLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let U=L.shadow,G=t.get(L);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=W;let ne=U.getViewportCount();for(let ie=0;ie<ne;ie++)n.sunShadowMatrix[x+ie]=U.getMatrix(ie),n.sunShadowCascade[x+ie]=U._cascadeData[ie];x+=ne,p++}n.sun[d]=F,d++}else if(L.isDirectionalLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let U=L.shadow,G=t.get(L);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=L.shadow.matrix,b++}n.directional[g]=F,g++}else if(L.isSpotLight){let F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(N).multiplyScalar(D),F.distance=O,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[_]=F;let U=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,U.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=U.matrix,L.castShadow){let G=t.get(L);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=W,A++}_++}else if(L.isRectAreaLight){let F=e.get(L);F.color.copy(N).multiplyScalar(D),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=F,y++}else if(L.isPointLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let U=L.shadow,G=t.get(L);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=F,m++}else if(L.isHemisphereLight){let F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(D),F.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[v]=F,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let k=n.hash;(k.sunLength!==d||k.directionalLength!==g||k.pointLength!==m||k.spotLength!==_||k.rectAreaLength!==y||k.hemiLength!==v||k.numSunShadows!==p||k.numDirectionalShadows!==b||k.numPointShadows!==S||k.numSpotShadows!==A||k.numSpotMaps!==M||k.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,k.sunLength=d,k.directionalLength=g,k.pointLength=m,k.spotLength=_,k.rectAreaLength=y,k.hemiLength=v,k.numSunShadows=p,k.numDirectionalShadows=b,k.numPointShadows=S,k.numSpotShadows=A,k.numSpotMaps=M,k.numLightProbes=R,n.version=Yb++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Xm(s){let e=new jb(s),t=[],n=[],i=[];function r(u){f.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Jb(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Xm(s),e.set(i,[o])):r>=a.length?(o=new Xm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],n1=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],qm=new _e,Ya=new T,ju=new T;function i1(s,e,t){let n=new Tr,i=new re,r=new re,a=new Je,o=new dl,l=new pl,c={},h=t.maxTextureSize,f={[On]:Ft,[Ft]:On,[on]:on},u=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Qb,fragmentShader:e1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new tt;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ve(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da;let m=this.type;this.render=function(S,A,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Op&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Da);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),z=s.state;z.setBlending(mi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let I=m!==this.type;I&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=S.length;L<N;L++){let D=S[L],O=D.shadow;if(O===void 0){ke("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let W=O.getFrameExtents();i.multiply(W),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,O.mapSize.y=r.y));let F=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zr){if(D.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Dt(i.x,i.y,{format:hs,type:Cn,minFilter:it,magFilter:it,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new Dn(i.x,i.y,Rn),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct}else D.isPointLight?(O.map=new xc(i.x),O.map.depthTexture=new cl(i.x,_n)):(O.map=new Dt(i.x,i.y),O.map.depthTexture=new Dn(i.x,i.y,_n)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Da?(O.map.depthTexture.compareFunction=F?dc:fc,O.map.depthTexture.minFilter=it,O.map.depthTexture.magFilter=it):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let U=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();D.isPointLight!==!0&&O.updateMatrices(D,M);for(let G=0;G<U;G++){let ne=O.getCamera(G);if(D.isPointLight){let ie=O.camera,ye=O.matrix,Ee=D.distance||ie.far;Ee!==ie.far&&(ie.far=Ee,ie.updateProjectionMatrix()),Ya.setFromMatrixPosition(D.matrixWorld),ie.position.copy(Ya),ju.copy(ie.position),ju.add(t1[G]),ie.up.copy(n1[G]),ie.lookAt(ju),ie.updateMatrixWorld(),ye.makeTranslation(-Ya.x,-Ya.y,-Ya.z),qm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qm,ie.coordinateSystem,ie.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,G),s.clear();else{G===0&&(s.setRenderTarget(O.map),s.clear());let ie=O.getViewport(G);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),z.viewport(a)}n=O.getFrustum(G),v(A,M,ne,D,this.type)}O.isPointLightShadow!==!0&&this.type===zr&&_(O,M),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,R,k)};function _(S,A){let M=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Dt(i.x,i.y,{format:hs,type:Cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,M,u,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,M,d,x,null)}function y(S,A,M,w){let R=null,k=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)R=k;else if(R=M.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let z=R.uuid,I=A.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let N=L[I];N===void 0&&(N=R.clone(),L[I]=N,A.addEventListener("dispose",b)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,w===zr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=s.properties.get(R);z.light=M}return R}function v(S,A,M,w,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===zr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let I=e.update(S),L=S.material;if(Array.isArray(L)){let N=I.groups;for(let D=0,O=N.length;D<O;D++){let W=N[D],F=L[W.materialIndex];if(F&&F.visible){let U=y(S,F,w,R);S.onBeforeShadow(s,S,A,M,I,U,W),s.renderBufferDirect(M,null,I,U,S,W),S.onAfterShadow(s,S,A,M,I,U,W)}}}else if(L.visible){let N=y(S,L,w,R);S.onBeforeShadow(s,S,A,M,I,N,null),s.renderBufferDirect(M,null,I,N,S,null),S.onAfterShadow(s,S,A,M,I,N,null)}}let z=S.children;for(let I=0,L=z.length;I<L;I++)v(z[I],A,M,w,R)}function b(S){S.target.removeEventListener("dispose",b);for(let M in c){let w=c[M],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function s1(s,e){function t(){let H=!1,ue=new Je,ee=null,fe=new Je(0,0,0,0);return{setMask:function(ve){ee!==ve&&!H&&(s.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){H=ve},setClear:function(ve,se,Le,Re,gt){gt===!0&&(ve*=Re,se*=Re,Le*=Re),ue.set(ve,se,Le,Re),fe.equals(ue)===!1&&(s.clearColor(ve,se,Le,Re),fe.copy(ue))},reset:function(){H=!1,ee=null,fe.set(-1,0,0,0)}}}function n(){let H=!1,ue=!1,ee=null,fe=null,ve=null;return{setReversed:function(se){if(ue!==se){let Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=se;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return ue},setTest:function(se){se?J(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(se){ee!==se&&!H&&(s.depthMask(se),ee=se)},setFunc:function(se){if(ue&&(se=ym[se]),fe!==se){switch(se){case jo:s.depthFunc(s.NEVER);break;case Jo:s.depthFunc(s.ALWAYS);break;case Qo:s.depthFunc(s.LESS);break;case xr:s.depthFunc(s.LEQUAL);break;case el:s.depthFunc(s.EQUAL);break;case tl:s.depthFunc(s.GEQUAL);break;case nl:s.depthFunc(s.GREATER);break;case il:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=se}},setLocked:function(se){H=se},setClear:function(se){ve!==se&&(ve=se,ue&&(se=1-se),s.clearDepth(se))},reset:function(){H=!1,ee=null,fe=null,ve=null,ue=!1}}}function i(){let H=!1,ue=null,ee=null,fe=null,ve=null,se=null,Le=null,Re=null,gt=null;return{setTest:function(rt){H||(rt?J(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!H&&(s.stencilMask(rt),ue=rt)},setFunc:function(rt,Xn,ri){(ee!==rt||fe!==Xn||ve!==ri)&&(s.stencilFunc(rt,Xn,ri),ee=rt,fe=Xn,ve=ri)},setOp:function(rt,Xn,ri){(se!==rt||Le!==Xn||Re!==ri)&&(s.stencilOp(rt,Xn,ri),se=rt,Le=Xn,Re=ri)},setLocked:function(rt){H=rt},setClear:function(rt){gt!==rt&&(s.clearStencil(rt),gt=rt)},reset:function(){H=!1,ue=null,ee=null,fe=null,ve=null,se=null,Le=null,Re=null,gt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,y=null,v=null,b=null,S=null,A=null,M=new Se(0,0,0),w=0,R=!1,k=null,z=null,I=null,L=null,N=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,W=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=W>=2);let U=null,G={},ne=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),ye=new Je().fromArray(ne),Ee=new Je().fromArray(ie);function ze(H,ue,ee,fe){let ve=new Uint8Array(4),se=s.createTexture();s.bindTexture(H,se),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ee;Le++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ue+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return se}let K={};K[s.TEXTURE_2D]=ze(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(xr),je(!1),yt(mu),J(s.CULL_FACE),st(mi);function J(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function le(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function we(H,ue){return u[H]!==ue?(s.bindFramebuffer(H,ue),u[H]=ue,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(H,ue){let ee=p,fe=!1;if(H){ee=d.get(ue),ee===void 0&&(ee=[],d.set(ue,ee));let ve=H.textures;if(ee.length!==ve.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Le=ve.length;se<Le;se++)ee[se]=s.COLOR_ATTACHMENT0+se;ee.length=ve.length,fe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ee)}function Fe(H){return x!==H?(s.useProgram(H),x=H,!0):!1}let St={[Os]:s.FUNC_ADD,[Hp]:s.FUNC_SUBTRACT,[Vp]:s.FUNC_REVERSE_SUBTRACT};St[Gp]=s.MIN,St[Wp]=s.MAX;let Ye={[Xp]:s.ZERO,[qp]:s.ONE,[$p]:s.SRC_COLOR,[_u]:s.SRC_ALPHA,[Qp]:s.SRC_ALPHA_SATURATE,[jp]:s.DST_COLOR,[Yp]:s.DST_ALPHA,[Kp]:s.ONE_MINUS_SRC_COLOR,[vu]:s.ONE_MINUS_SRC_ALPHA,[Jp]:s.ONE_MINUS_DST_COLOR,[Zp]:s.ONE_MINUS_DST_ALPHA,[em]:s.CONSTANT_COLOR,[tm]:s.ONE_MINUS_CONSTANT_COLOR,[nm]:s.CONSTANT_ALPHA,[im]:s.ONE_MINUS_CONSTANT_ALPHA};function st(H,ue,ee,fe,ve,se,Le,Re,gt,rt){if(H===mi){g===!0&&(le(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),H!==Bp){if(H!==m||rt!==R){if((_!==Os||b!==Os)&&(s.blendEquation(s.FUNC_ADD),_=Os,b=Os),rt)switch(H){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFunc(s.ONE,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",H);break}else switch(H){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gu:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",H);break}y=null,v=null,S=null,A=null,M.set(0,0,0),w=0,m=H,R=rt}return}ve=ve||ue,se=se||ee,Le=Le||fe,(ue!==_||ve!==b)&&(s.blendEquationSeparate(St[ue],St[ve]),_=ue,b=ve),(ee!==y||fe!==v||se!==S||Le!==A)&&(s.blendFuncSeparate(Ye[ee],Ye[fe],Ye[se],Ye[Le]),y=ee,v=fe,S=se,A=Le),(Re.equals(M)===!1||gt!==w)&&(s.blendColor(Re.r,Re.g,Re.b,gt),M.copy(Re),w=gt),m=H,R=!1}function mt(H,ue){H.side===on?le(s.CULL_FACE):J(s.CULL_FACE);let ee=H.side===Ft;ue&&(ee=!ee),je(ee),H.blending===as&&H.transparent===!1?st(mi):st(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let fe=H.stencilWrite;o.setTest(fe),fe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Mn(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(H){k!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),k=H)}function yt(H){H!==Up?(J(s.CULL_FACE),H!==z&&(H===mu?s.cullFace(s.BACK):H===Fp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),z=H}function Gt(H){H!==I&&(O&&s.lineWidth(H),I=H)}function Mn(H,ue,ee){H?(J(s.POLYGON_OFFSET_FILL),(L!==ue||N!==ee)&&(L=ue,N=ee,a.getReversed()&&(ue=-ue),s.polygonOffset(ue,ee))):le(s.POLYGON_OFFSET_FILL)}function Mt(H){H?J(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function Lt(H){H===void 0&&(H=s.TEXTURE0+D-1),U!==H&&(s.activeTexture(H),U=H)}function V(H,ue,ee){ee===void 0&&(U===null?ee=s.TEXTURE0+D-1:ee=U);let fe=G[ee];fe===void 0&&(fe={type:void 0,texture:void 0},G[ee]=fe),(fe.type!==H||fe.texture!==ue)&&(U!==ee&&(s.activeTexture(ee),U=ee),s.bindTexture(H,ue||K[H]),fe.type=H,fe.texture=ue)}function tn(){let H=G[U];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function E(){try{s.texSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function X(){try{s.texSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function ae(){try{s.texStorage2D(...arguments)}catch(H){De("WebGLState:",H)}}function oe(){try{s.texStorage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Q(){try{s.texImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function te(){try{s.texImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function ce(H){return f[H]!==void 0?f[H]:s.getParameter(H)}function Ie(H,ue){f[H]!==ue&&(s.pixelStorei(H,ue),f[H]=ue)}function de(H){ye.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function he(H){Ee.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ee.copy(H))}function Pe(H,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let fe=ee.get(H);fe===void 0&&(fe=s.getUniformBlockIndex(ue,H.name),ee.set(H,fe))}function Ne(H,ue){let fe=c.get(ue).get(H);l.get(ue)!==fe&&(s.uniformBlockBinding(ue,fe,H.__bindingPointIndex),l.set(ue,fe))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},U=null,G={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,_=null,y=null,v=null,b=null,S=null,A=null,M=new Se(0,0,0),w=0,R=!1,k=null,z=null,I=null,L=null,N=null,ye.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:le,bindFramebuffer:we,drawBuffers:xe,useProgram:Fe,setBlending:st,setMaterial:mt,setFlipSided:je,setCullFace:yt,setLineWidth:Gt,setPolygonOffset:Mn,setScissorTest:Mt,activeTexture:Lt,bindTexture:V,unbindTexture:tn,compressedTexImage2D:lt,compressedTexImage3D:P,texImage2D:Q,texImage3D:te,pixelStorei:Ie,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:oe,texSubImage2D:E,texSubImage3D:X,compressedTexSubImage2D:Y,compressedTexSubImage3D:j,scissor:de,viewport:he,reset:Be}}function r1(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return p?new OffscreenCanvas(P,E):yr("canvas")}function g(P,E,X){let Y=1,j=lt(P);if((j.width>X||j.height>X)&&(Y=X/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ae=Math.floor(Y*j.width),oe=Math.floor(Y*j.height);u===void 0&&(u=x(ae,oe));let Q=E?x(ae,oe):u;return Q.width=ae,Q.height=oe,Q.getContext("2d").drawImage(P,0,0,ae,oe),ke("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+oe+")."),Q}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,E,X,Y,j,ae=!1){if(P!==null){if(s[P]!==void 0)return s[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe;Y&&(oe=e.get("EXT_texture_norm16"),oe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===s.RED&&(X===s.FLOAT&&(Q=s.R32F),X===s.HALF_FLOAT&&(Q=s.R16F),X===s.UNSIGNED_BYTE&&(Q=s.R8),X===s.UNSIGNED_SHORT&&oe&&(Q=oe.R16_EXT),X===s.SHORT&&oe&&(Q=oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.R8UI),X===s.UNSIGNED_SHORT&&(Q=s.R16UI),X===s.UNSIGNED_INT&&(Q=s.R32UI),X===s.BYTE&&(Q=s.R8I),X===s.SHORT&&(Q=s.R16I),X===s.INT&&(Q=s.R32I)),E===s.RG&&(X===s.FLOAT&&(Q=s.RG32F),X===s.HALF_FLOAT&&(Q=s.RG16F),X===s.UNSIGNED_BYTE&&(Q=s.RG8),X===s.UNSIGNED_SHORT&&oe&&(Q=oe.RG16_EXT),X===s.SHORT&&oe&&(Q=oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RG8UI),X===s.UNSIGNED_SHORT&&(Q=s.RG16UI),X===s.UNSIGNED_INT&&(Q=s.RG32UI),X===s.BYTE&&(Q=s.RG8I),X===s.SHORT&&(Q=s.RG16I),X===s.INT&&(Q=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),X===s.UNSIGNED_INT&&(Q=s.RGB32UI),X===s.BYTE&&(Q=s.RGB8I),X===s.SHORT&&(Q=s.RGB16I),X===s.INT&&(Q=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),X===s.UNSIGNED_INT&&(Q=s.RGBA32UI),X===s.BYTE&&(Q=s.RGBA8I),X===s.SHORT&&(Q=s.RGBA16I),X===s.INT&&(Q=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_SHORT&&oe&&(Q=oe.RGB16_EXT),X===s.SHORT&&oe&&(Q=oe.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),E===s.RGBA){let te=ae?pa:qe.getTransfer(j);X===s.FLOAT&&(Q=s.RGBA32F),X===s.HALF_FLOAT&&(Q=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Q=te===ot?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&oe&&(Q=oe.RGBA16_EXT),X===s.SHORT&&oe&&(Q=oe.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(P,E){let X;return P?E===null||E===_n||E===Ur?X=s.DEPTH24_STENCIL8:E===Rn?X=s.DEPTH32F_STENCIL8:E===Dr&&(X=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_n||E===Ur?X=s.DEPTH_COMPONENT24:E===Rn?X=s.DEPTH_COMPONENT32F:E===Dr&&(X=s.DEPTH_COMPONENT16),X}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==it?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){let E=P.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function M(P){let E=P.target;E.removeEventListener("dispose",M),k(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let X=P.source,Y=d.get(X);if(Y){let j=Y[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(P),Object.keys(Y).length===0&&d.delete(X)}n.remove(P)}function R(P){let E=n.get(P);s.deleteTexture(E.__webglTexture);let X=P.source,Y=d.get(X);delete Y[E.__cacheKey],a.memory.textures--}function k(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let j=0;j<E.__webglFramebuffer[Y].length;j++)s.deleteFramebuffer(E.__webglFramebuffer[Y][j]);else s.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)s.deleteFramebuffer(E.__webglFramebuffer[Y]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=P.textures;for(let Y=0,j=X.length;Y<j;Y++){let ae=n.get(X[Y]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(X[Y])}n.remove(P)}let z=0;function I(){z=0}function L(){return z}function N(P){z=P}function D(){let P=z;return P>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),z+=1,P}function O(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){let X=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let Y=P.image;if(Y===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{le(X,P,E);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function F(P,E){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){le(X,P,E);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function U(P,E){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){le(X,P,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function G(P,E){let X=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){we(X,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}let ne={[ci]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[_r]:s.MIRRORED_REPEAT},ie={[Ct]:s.NEAREST,[Rl]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[it]:s.LINEAR,[Nr]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},ye={[um]:s.NEVER,[gm]:s.ALWAYS,[fm]:s.LESS,[fc]:s.LEQUAL,[dm]:s.EQUAL,[dc]:s.GEQUAL,[pm]:s.GREATER,[mm]:s.NOTEQUAL};function Ee(P,E){if(E.type===Rn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===it||E.magFilter===Nr||E.magFilter===Hs||E.magFilter===An||E.minFilter===it||E.minFilter===Nr||E.minFilter===Hs||E.minFilter===An)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ne[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ie[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ct||E.minFilter!==Hs&&E.minFilter!==An||E.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ze(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));let Y=E.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let ae=O(E);if(ae!==P.__cacheKey){j[ae]===void 0&&(j[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[ae].usedTimes++;let oe=j[P.__cacheKey];oe!==void 0&&(j[P.__cacheKey].usedTimes--,oe.usedTimes===0&&R(E)),P.__cacheKey=ae,P.__webglTexture=j[ae].texture}return X}function K(P,E,X){return Math.floor(Math.floor(P/X)/E)}function J(P,E,X,Y){let ae=P.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,Y,E.data);else{ae.sort((Ie,de)=>Ie.start-de.start);let oe=0;for(let Ie=1;Ie<ae.length;Ie++){let de=ae[oe],he=ae[Ie],Pe=de.start+de.count,Ne=K(he.start,E.width,4),Be=K(de.start,E.width,4);he.start<=Pe+1&&Ne===Be&&K(he.start+he.count-1,E.width,4)===Ne?de.count=Math.max(de.count,he.start+he.count-de.start):(++oe,ae[oe]=he)}ae.length=oe+1;let Q=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ie=0,de=ae.length;Ie<de;Ie++){let he=ae[Ie],Pe=Math.floor(he.start/4),Ne=Math.ceil(he.count/4),Be=Pe%E.width,H=Math.floor(Pe/E.width),ue=Ne,ee=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,Be,H,ue,ee,X,Y,E.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function le(P,E,X){let Y=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=s.TEXTURE_3D);let j=ze(P,E),ae=E.source;t.bindTexture(Y,P.__webglTexture,s.TEXTURE0+X);let oe=n.get(ae);if(ae.version!==oe.__version||j===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ee=qe.getPrimaries(qe.workingColorSpace),fe=E.colorSpace===yn?null:qe.getPrimaries(E.colorSpace),ve=E.colorSpace===yn||ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let te=g(E.image,!1,i.maxTextureSize);te=tn(E,te);let ce=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),de=v(E.internalFormat,ce,Ie,E.normalized,E.colorSpace,E.isVideoTexture);Ee(Y,E);let he,Pe=E.mipmaps,Ne=E.isVideoTexture!==!0,Be=oe.__version===void 0||j===!0,H=ae.dataReady,ue=S(E,te);if(E.isDepthTexture)de=b(E.format===cs,E.type),Be&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,de,te.width,te.height,0,ce,Ie,null));else if(E.isDataTexture)if(Pe.length>0){Ne&&Be&&t.texStorage2D(s.TEXTURE_2D,ue,de,Pe[0].width,Pe[0].height);for(let ee=0,fe=Pe.length;ee<fe;ee++)he=Pe[ee],Ne?H&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Ie,he.data):t.texImage2D(s.TEXTURE_2D,ee,de,he.width,he.height,0,ce,Ie,he.data);E.generateMipmaps=!1}else Ne?(Be&&t.texStorage2D(s.TEXTURE_2D,ue,de,te.width,te.height),H&&J(E,te,ce,Ie)):t.texImage2D(s.TEXTURE_2D,0,de,te.width,te.height,0,ce,Ie,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,de,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,fe=Pe.length;ee<fe;ee++)if(he=Pe[ee],E.format!==vn)if(ce!==null)if(Ne){if(H)if(E.layerUpdates.size>0){let ve=Bu(he.width,he.height,E.format,E.type);for(let se of E.layerUpdates){let Le=he.data.subarray(se*ve/he.data.BYTES_PER_ELEMENT,(se+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,se,he.width,he.height,1,ce,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ce,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,de,he.width,he.height,te.depth,0,he.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ce,Ie,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,de,he.width,he.height,te.depth,0,ce,Ie,he.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ne&&Be&&t.texStorage2D(s.TEXTURE_2D,ue,de,Pe[0].width,Pe[0].height);for(let ee=0,fe=Pe.length;ee<fe;ee++)he=Pe[ee],E.format!==vn?ce!==null?Ne?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,de,he.width,he.height,0,he.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?H&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Ie,he.data):t.texImage2D(s.TEXTURE_2D,ee,de,he.width,he.height,0,ce,Ie,he.data)}else if(E.isDataArrayTexture)if(Ne){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,de,te.width,te.height,te.depth),H)if(E.layerUpdates.size>0){let ee=Bu(te.width,te.height,E.format,E.type);for(let fe of E.layerUpdates){let ve=te.data.subarray(fe*ee/te.data.BYTES_PER_ELEMENT,(fe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ce,Ie,ve)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ie,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,ce,Ie,te.data);else if(E.isData3DTexture)Ne?(Be&&t.texStorage3D(s.TEXTURE_3D,ue,de,te.width,te.height,te.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ie,te.data)):t.texImage3D(s.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,ce,Ie,te.data);else if(E.isFramebufferTexture){if(Be)if(Ne)t.texStorage2D(s.TEXTURE_2D,ue,de,te.width,te.height);else{let ee=te.width,fe=te.height;for(let ve=0;ve<ue;ve++)t.texImage2D(s.TEXTURE_2D,ve,de,ee,fe,0,ce,Ie,null),ee>>=1,fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let ee=s.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),f.add(E),ee.onpaint=fe=>{let ve=fe.changedElements;for(let se of f)ve.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{let ve=s.RGBA,se=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,se,Le,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ne&&Be){let ee=lt(Pe[0]);t.texStorage2D(s.TEXTURE_2D,ue,de,ee.width,ee.height)}for(let ee=0,fe=Pe.length;ee<fe;ee++)he=Pe[ee],Ne?H&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce,Ie,he):t.texImage2D(s.TEXTURE_2D,ee,de,ce,Ie,he);E.generateMipmaps=!1}else if(Ne){if(Be){let ee=lt(te);t.texStorage2D(s.TEXTURE_2D,ue,de,ee.width,ee.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Ie,te)}else t.texImage2D(s.TEXTURE_2D,0,de,ce,Ie,te);m(E)&&_(Y),oe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,X){if(E.image.length!==6)return;let Y=ze(P,E),j=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);let ae=n.get(j);if(j.version!==ae.__version||Y===!0){t.activeTexture(s.TEXTURE0+X);let oe=qe.getPrimaries(qe.workingColorSpace),Q=E.colorSpace===yn?null:qe.getPrimaries(E.colorSpace),te=E.colorSpace===yn||oe===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,de=[];for(let se=0;se<6;se++)!ce&&!Ie?de[se]=g(E.image[se],!0,i.maxCubemapSize):de[se]=Ie?E.image[se].image:E.image[se],de[se]=tn(E,de[se]);let he=de[0],Pe=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type),Be=v(E.internalFormat,Pe,Ne,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,ue=ae.__version===void 0||Y===!0,ee=j.dataReady,fe=S(E,he);Ee(s.TEXTURE_CUBE_MAP,E);let ve;if(ce){H&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Be,he.width,he.height);for(let se=0;se<6;se++){ve=de[se].mipmaps;for(let Le=0;Le<ve.length;Le++){let Re=ve[Le];E.format!==vn?Pe!==null?H?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,Be,Re.width,Re.height,0,Re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,Re.width,Re.height,Pe,Ne,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,Be,Re.width,Re.height,0,Pe,Ne,Re.data)}}}else{if(ve=E.mipmaps,H&&ue){ve.length>0&&fe++;let se=lt(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Be,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){H?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,de[se].width,de[se].height,Pe,Ne,de[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,de[se].width,de[se].height,0,Pe,Ne,de[se].data);for(let Le=0;Le<ve.length;Le++){let gt=ve[Le].image[se].image;H?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,gt.width,gt.height,Pe,Ne,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,Be,gt.width,gt.height,0,Pe,Ne,gt.data)}}else{H?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Ne,de[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Pe,Ne,de[se]);for(let Le=0;Le<ve.length;Le++){let Re=ve[Le];H?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,Pe,Ne,Re.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,Be,Pe,Ne,Re.image[se])}}}m(E)&&_(s.TEXTURE_CUBE_MAP),ae.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function xe(P,E,X,Y,j,ae){let oe=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),te=v(X.internalFormat,oe,Q,X.normalized,X.colorSpace),ce=n.get(E),Ie=n.get(X);if(Ie.__renderTarget=E,!ce.__hasExternalTextures){let de=Math.max(1,E.width>>ae),he=Math.max(1,E.height>>ae);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,te,de,he,E.depth,0,oe,Q,null):t.texImage2D(j,ae,te,de,he,0,oe,Q,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Lt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,j,Ie.__webglTexture,0,Mt(E)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,j,Ie.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(P,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){let Y=E.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,ae=b(E.stencilBuffer,j),oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Lt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(E),ae,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(E),ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,P)}else{let Y=E.textures;for(let j=0;j<Y.length;j++){let ae=Y[j],oe=r.convert(ae.format,ae.colorSpace),Q=r.convert(ae.type),te=v(ae.internalFormat,oe,Q,ae.normalized,ae.colorSpace);Lt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(E),te,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(E),te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(P,E,X){let Y=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(E.depthTexture);if(j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,E.depthTexture);let ce=r.convert(E.depthTexture.format),Ie=r.convert(E.depthTexture.type),de;E.depthTexture.format===hi?de=s.DEPTH_COMPONENT24:E.depthTexture.format===cs&&(de=s.DEPTH24_STENCIL8);for(let he=0;he<6;he++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,E.width,E.height,0,ce,Ie,null)}}else W(E.depthTexture,0);let ae=j.__webglTexture,oe=Mt(E),Q=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,te=E.depthTexture.format===cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===hi)Lt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,ae,0);else if(E.depthTexture.format===cs)Lt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){let E=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=Y}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let Y=0;Y<6;Y++)St(E.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?St(E.__webglFramebuffer[0],P,0):St(E.__webglFramebuffer,P,0)}else if(X){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[Y],P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(P,E,X){let Y=n.get(P);E!==void 0&&xe(Y.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ye(P)}function mt(P){let E=P.texture,X=n.get(P),Y=n.get(E);P.addEventListener("dispose",M);let j=P.textures,ae=P.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=E.version,a.memory.textures++),ae){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let te=0;te<E.mipmaps.length;te++)X.__webglFramebuffer[Q][te]=s.createFramebuffer()}else X.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)X.__webglFramebuffer[Q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(oe)for(let Q=0,te=j.length;Q<te;Q++){let ce=n.get(j[Q]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Lt(P)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let te=j[Q];X.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let ce=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),de=v(te.internalFormat,ce,Ie,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),he=Mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,de,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(X.__webglFramebuffer[Q][te],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else xe(X.__webglFramebuffer[Q],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Q=0,te=j.length;Q<te;Q++){let ce=j[Q],Ie=n.get(ce),de=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Ie.__webglTexture),Ee(de,ce),xe(X.__webglFramebuffer,P,ce,s.COLOR_ATTACHMENT0+Q,de,0),m(ce)&&_(de)}t.unbindTexture()}else{let Q=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),Ee(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(X.__webglFramebuffer[te],P,E,s.COLOR_ATTACHMENT0,Q,te);else xe(X.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Q,0);m(E)&&_(Q),t.unbindTexture()}P.depthBuffer&&Ye(P)}function je(P){let E=P.textures;for(let X=0,Y=E.length;X<Y;X++){let j=E[X];if(m(j)){let ae=y(P),oe=n.get(j).__webglTexture;t.bindTexture(ae,oe),_(ae),t.unbindTexture()}}}let yt=[],Gt=[];function Mn(P){if(P.samples>0){if(Lt(P)===!1){let E=P.textures,X=P.width,Y=P.height,j=s.COLOR_BUFFER_BIT,ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(P),Q=E.length>1;if(Q)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);let Ie=n.get(E[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,X,Y,0,0,X,Y,j,s.NEAREST),l===!0&&(yt.length=0,Gt.length=0,yt.push(s.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(yt.push(ae),Gt.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);let Ie=n.get(E[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Mt(P){return Math.min(i.maxSamples,P.samples)}function Lt(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function tn(P,E){let X=P.colorSpace,Y=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==mn&&X!==yn&&(qe.getTransfer(X)===ot?(Y!==vn||j!==Yt)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",X)),E}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=L,this.setTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=st,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a1(s,e){function t(n,i=yn){let r,a=qe.getTransfer(i);if(n===Yt)return s.UNSIGNED_BYTE;if(n===kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tu)return s.BYTE;if(n===Au)return s.SHORT;if(n===Dr)return s.UNSIGNED_SHORT;if(n===Cl)return s.INT;if(n===_n)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===ku)return s.ALPHA;if(n===Iu)return s.RGB;if(n===vn)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===Pl)return s.RED;if(n===Ll)return s.RED_INTEGER;if(n===hs)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===Nl)return s.RGBA_INTEGER;if(n===Ba||n===Ha||n===Va||n===Ga)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Hl||n===Vl||n===Gl||n===Wl||n===Wa||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===Hl)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===$l||n===Kl||n===Yl||n===Zl||n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===oc||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===Xa||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:o1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},of=class extends ui{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new af,m={},_=t.getContextAttributes(),y=null,v=null,b=[],S=[],A=new re,M=null,w=null,R=new Xt;R.viewport=new Je;let k=new Xt;k.viewport=new Je;let z=[R,k],I=new Sl,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=b[K];return J===void 0&&(J=new Sr,b[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=b[K];return J===void 0&&(J=new Sr,b[K]=J),J.getGripSpace()},this.getHand=function(K){let J=b[K];return J===void 0&&(J=new Sr,b[K]=J),J.getHandSpace()};function D(K){let J=S.indexOf(K.inputSource);if(J===-1)return;let le=b[J];le!==void 0&&(le.update(K.inputSource,K.frame,c||a),le.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let K=0;K<b.length;K++){let J=S[K];J!==null&&(S[K]=null,b[K].disconnect(J))}L=null,N=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(y),d=null,u=null,f=null,i=null,v=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?cs:hi,we=_.stencil?Ur:_n);let Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Dt(u.textureWidth,u.textureHeight,{format:vn,type:Yt,depthTexture:new Dn(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Dt(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(K){for(let J=0;J<K.removed.length;J++){let le=K.removed[J],we=S.indexOf(le);we>=0&&(S[we]=null,b[we].disconnect(le))}for(let J=0;J<K.added.length;J++){let le=K.added[J],we=S.indexOf(le);if(we===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=S.length){S.push(le),we=Fe;break}else if(S[Fe]===null){S[Fe]=le,we=Fe;break}if(we===-1)break}let xe=b[we];xe&&xe.connect(le)}}let F=new T,U=new T;function G(K,J,le){F.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);let we=F.distanceTo(U),xe=J.projectionMatrix.elements,Fe=le.projectionMatrix.elements,St=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),st=(xe[9]+1)/xe[5],mt=(xe[9]-1)/xe[5],je=(xe[8]-1)/xe[0],yt=(Fe[8]+1)/Fe[0],Gt=St*je,Mn=St*yt,Mt=we/(-je+yt),Lt=Mt*-je;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Lt),K.translateZ(Mt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let V=St+Mt,tn=Ye+Mt,lt=Gt-Lt,P=Mn+(we-Lt),E=st*Ye/tn*V,X=mt*Ye/tn*V;K.projectionMatrix.makePerspective(lt,P,E,X,V,tn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,le=K.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(le=g.depthFar)),I.near=k.near=R.near=J,I.far=k.far=R.far=le,(L!==I.near||N!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,N=I.far),I.layers.mask=K.layers.mask|6,R.layers.mask=I.layers.mask&-5,k.layers.mask=I.layers.mask&-3;let we=K.parent,xe=I.cameras;ne(I,we);for(let Fe=0;Fe<xe.length;Fe++)ne(xe[Fe],we);xe.length===2?G(I,R,k):I.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ie(K,I,we)};function ie(K,J,le){le===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ls*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let ye=null;function Ee(K,J){if(h=J.getViewerPose(c||a),p=J,h!==null){let le=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;le.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Ye=0;Ye<le.length;Ye++){let st=le[Ye],mt=null;if(d!==null)mt=d.getViewport(st);else{let yt=f.getViewSubImage(u,st);mt=yt.viewport,Ye===0&&(e.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(v))}let je=z[Ye];je===void 0&&(je=new Xt,je.layers.enable(Ye),je.viewport=new Je,z[Ye]=je),je.matrix.fromArray(st.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(st.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(mt.x,mt.y,mt.width,mt.height),Ye===0&&(I.matrix.copy(je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(je)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ye=f.getDepthInformation(le[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,i.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Ye=0;Ye<le.length;Ye++){let st=le[Ye].camera;if(st){let mt=m[st];mt||(mt=new Ra,m[st]=mt);let je=f.getCameraImage(st);mt.sourceTexture=je}}}}for(let le=0;le<b.length;le++){let we=S[le],xe=b[le];we!==null&&xe!==void 0&&xe.update(we,J,c||a)}ye&&ye(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let ze=new $m;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(K){ye=K},this.dispose=function(){}}},c1=new _e,Qm=new Oe;Qm.set(-1,0,0,0,1,0,0,0,1);function h1(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Uu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ft&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ft&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Qm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u1(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",_));let A=b.program;n.updateUBOMapping(v,A);let M=e.render.frame;r[v.id]!==M&&(u(v),r[v.id]=M)}function h(v){let b=f();v.__bindingPointIndex=b;let S=s.createBuffer(),A=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=i[v.id],S=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,w=S.length;M<w;M++){let R=S[M];if(Array.isArray(R))for(let k=0,z=R.length;k<z;k++)d(R[k],M,k,A);else d(R,M,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,b,S,A){if(x(v,b,S,A)===!0){let M=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let k=0;k<w.length;k++){let z=w[k],I=m(z);p(z,v.__data,R),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function p(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function x(v,b,S,A){let M=v.value,w=b+"_"+S;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:ArrayBuffer.isView(M)?A[w]=M.slice():A[w]=M.clone(),!0;{let R=A[w];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function g(v){let b=v.uniforms,S=0,A=16;for(let w=0,R=b.length;w<R;w++){let k=Array.isArray(b[w])?b[w]:[b[w]];for(let z=0,I=k.length;z<I;z++){let L=k[z],N=Array.isArray(L.value)?L.value:[L.value];for(let D=0,O=N.length;D<O;D++){let W=N[D],F=m(W),U=S%A,G=U%F.boundary,ne=U+G;S+=G,ne!==0&&A-ne<F.storage&&(S+=A-ne),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=F.storage}}}let M=S%A;return M>0&&(S+=A-M),v.__size=S,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){let b=v.target;b.removeEventListener("dispose",_);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function y(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:y}}var f1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function d1(){return gi===null&&(gi=new is(f1,16,16,hs,Cn),gi.name="DFG_LUT",gi.minFilter=it,gi.magFilter=it,gi.wrapS=Nn,gi.wrapT=Nn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var _c=class{constructor(e={}){let{canvas:t=xm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Yt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=d,g=new Set([Nl,zl,Ll]),m=new Set([Yt,_n,Dr,Ur,kl,Il]),_=new Uint32Array(4),y=new Int32Array(4),v=new T,b=null,S=null,A=[],M=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1,z=null,I=null,L=null,N=null;this._outputColorSpace=pt;let D=0,O=0,W=null,F=-1,U=null,G=new Je,ne=new Je,ie=null,ye=new Se(0),Ee=0,ze=t.width,K=t.height,J=1,le=null,we=null,xe=new Je(0,0,ze,K),Fe=new Je(0,0,ze,K),St=!1,Ye=new Tr,st=!1,mt=!1,je=new _e,yt=new T,Gt=new Je,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Lt(){return W===null?J:1}let V=n;function tn(C,B){return t.getContext(C,B)}let lt,P,E,X,Y,j,ae,oe,Q,te,ce,Ie,de,he,Pe,Ne,Be,H,ue,ee,fe,ve,se;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),V===null){let B="webgl2";if(V=tn(B,C),V===null)throw tn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(C){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),De("WebGLRenderer: "+C.message),C}function Le(){lt=new yM(V),lt.init(),fe=new a1(V,lt),P=new hM(V,lt,e,fe),E=new s1(V,lt),P.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),I=V.createFramebuffer(),L=V.createFramebuffer(),N=V.createFramebuffer(),X=new SM(V),Y=new Wb,j=new r1(V,lt,E,Y,P,fe,X),ae=new vM(R),oe=new w_(V),ve=new lM(V,oe),Q=new MM(V,oe,X,ve),te=new wM(V,Q,oe,ve,X),H=new EM(V,P,j),Pe=new uM(Y),ce=new Gb(R,ae,lt,P,ve,Pe),Ie=new h1(R,Y),de=new qb,he=new Jb(lt),Be=new oM(R,ae,E,te,p,l),Ne=new i1(R,te,P),se=new u1(V,X,P,E),ue=new cM(V,lt,X),ee=new bM(V,lt,X),X.programs=ce.programs,R.capabilities=P,R.extensions=lt,R.properties=Y,R.renderLists=de,R.shadowMap=Ne,R.state=E,R.info=X}x!==Yt&&(w=new AM(x,t.width,t.height,o,i,r));let Re=new of(R,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(ze,K,!1))},this.getSize=function(C){return C.set(ze,K)},this.setSize=function(C,B,Z=!0){if(Re.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=C,K=B,t.width=Math.floor(C*J),t.height=Math.floor(B*J),Z===!0&&(t.style.width=C+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(ze*J,K*J).floor()},this.setDrawingBufferSize=function(C,B,Z){ze=C,K=B,J=Z,t.width=Math.floor(C*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(x===Yt){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,B,Z,q){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,B,Z,q),E.viewport(G.copy(xe).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(Fe)},this.setScissor=function(C,B,Z,q){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,B,Z,q),E.scissor(ne.copy(Fe).multiplyScalar(J).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){E.setScissorTest(St=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){we=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,Z=!0){let q=0;if(C){let $=!1;if(W!==null){let ge=W.texture.format;$=g.has(ge)}if($){let ge=W.texture.type,be=m.has(ge),me=Be.getClearColor(),Te=Be.getClearAlpha(),Ce=me.r,We=me.g,Ze=me.b;be?(_[0]=Ce,_[1]=We,_[2]=Ze,_[3]=Te,V.clearBufferuiv(V.COLOR,0,_)):(y[0]=Ce,y[1]=We,y[2]=Ze,y[3]=Te,V.clearBufferiv(V.COLOR,0,y))}else q|=V.COLOR_BUFFER_BIT}B&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),z=C},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Be.dispose(),de.dispose(),he.dispose(),Y.dispose(),ae.dispose(),te.dispose(),ve.dispose(),se.dispose(),ce.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Hd),Re.removeEventListener("sessionend",Vd),ws.stop()};function gt(C){C.preventDefault(),ma("WebGLRenderer: Context Lost."),k=!0}function rt(){ma("WebGLRenderer: Context Restored."),k=!1;let C=X.autoReset,B=Ne.enabled,Z=Ne.autoUpdate,q=Ne.needsUpdate,$=Ne.type;Le(),X.autoReset=C,Ne.enabled=B,Ne.autoUpdate=Z,Ne.needsUpdate=q,Ne.type=$}function Xn(C){De("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ri(C){let B=C.target;B.removeEventListener("dispose",ri),px(B)}function px(C){mx(C),Y.remove(C)}function mx(C){let B=Y.get(C).programs;B!==void 0&&(B.forEach(function(Z){ce.releaseProgram(Z)}),C.isShaderMaterial&&ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Z,q,$,ge){B===null&&(B=Mn);let be=$.isMesh&&$.matrixWorld.determinantAffine()<0,me=_x(C,B,Z,q,$);E.setMaterial(q,be);let Te=Z.index,Ce=1;if(q.wireframe===!0){if(Te=Q.getWireframeAttribute(Z),Te===void 0)return;Ce=2}let We=Z.drawRange,Ze=Z.attributes.position,Ae=We.start*Ce,at=(We.start+We.count)*Ce;ge!==null&&(Ae=Math.max(Ae,ge.start*Ce),at=Math.min(at,(ge.start+ge.count)*Ce)),Te!==null?(Ae=Math.max(Ae,0),at=Math.min(at,Te.count)):Ze!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,Ze.count));let zt=at-Ae;if(zt<0||zt===1/0)return;ve.setup($,q,me,Z,Te);let vt,ft=ue;if(Te!==null&&(vt=oe.get(Te),ft=ee,ft.setIndex(vt)),$.isMesh)q.wireframe===!0?(E.setLineWidth(q.wireframeLinewidth*Lt()),ft.setMode(V.LINES)):ft.setMode(V.TRIANGLES);else if($.isLine){let nn=q.linewidth;nn===void 0&&(nn=1),E.setLineWidth(nn*Lt()),$.isLineSegments?ft.setMode(V.LINES):$.isLineLoop?ft.setMode(V.LINE_LOOP):ft.setMode(V.LINE_STRIP)}else $.isPoints?ft.setMode(V.POINTS):$.isSprite&&ft.setMode(V.TRIANGLES);if($.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let nn=$._multiDrawStarts,Me=$._multiDrawCounts,dn=$._multiDrawCount,nt=Te?oe.get(Te).bytesPerElement:1,Ln=Y.get(q).currentProgram.getUniforms();for(let ai=0;ai<dn;ai++)Ln.setValue(V,"_gl_DrawID",ai),ft.render(nn[ai]/nt,Me[ai])}else if($.isInstancedMesh)ft.renderInstances(Ae,zt,$.count);else if(Z.isInstancedBufferGeometry){let nn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Me=Math.min(Z.instanceCount,nn);ft.renderInstances(Ae,zt,Me)}else ft.render(Ae,zt)};function Bd(C,B,Z,q){z!==null&&C.isNodeMaterial&&z.setObject(q,C),st===!0&&Pe.setState(C,Z,!1),C.transparent===!0&&C.side===on&&C.forceSinglePass===!1?(C.side=Ft,C.needsUpdate=!0,vo(C,B,q),C.side=On,C.needsUpdate=!0,vo(C,B,q),C.side=on):vo(C,B,q)}this.compile=function(C,B,Z=null){Z===null&&(Z=C),z!==null&&z.renderStart(C,B,Z),S=he.get(Z),S.init(B),M.push(S),Z.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),mt=this.localClippingEnabled,st=Pe.init(this.clippingPlanes,mt),st===!0&&Pe.setGlobalState(this.clippingPlanes,B),z!==null&&Ne.render(S.state.shadowsArray,Z,B);let q=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ge=$.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let me=ge[be];Bd(me,Z,B,$),q.add(me)}else Bd(ge,Z,B,$),q.add(ge)}),S=M.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(C,B,Z=null){let q=this.compile(C,B,Z);return new Promise($=>{function ge(){if(q.forEach(function(be){let Te=Y.get(be).currentProgram;(Te===void 0||Te.isReady())&&q.delete(be)}),q.size===0){$(C);return}setTimeout(ge,10)}lt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ah=null;function gx(C){Ah&&Ah(C)}function Hd(){ws.stop()}function Vd(){ws.start()}let ws=new $m;ws.setAnimationLoop(gx),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(C){Ah=C,Re.setAnimationLoop(C),C===null?ws.stop():ws.start()},Re.addEventListener("sessionstart",Hd),Re.addEventListener("sessionend",Vd),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;z!==null&&z.renderStart(C,B);let Z=Re.enabled===!0&&Re.isPresenting===!0,q=w!==null&&(W===null||Z)&&w.begin(R,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(B),B=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,B,W),S=he.get(C,M.length),S.init(B),S.state.textureUnits=j.getTextureUnits(),M.push(S),je.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ye.setFromProjectionMatrix(je,jn,B.reversedDepth),mt=this.localClippingEnabled,st=Pe.init(this.clippingPlanes,mt),b=de.get(C,A.length),b.init(),A.push(b),Re.enabled===!0&&Re.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&Rh(be,B,-1/0,R.sortObjects)}Rh(C,B,0,R.sortObjects),b.finish(),z!==null&&z.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(le,we),Mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Mt&&Be.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Pe.beginShadows();let $=S.state.shadowsArray;if(Ne.render($,C,B),st===!0&&Pe.endShadows(),(q&&w.hasRenderPass())===!1){let be=b.opaque,me=b.transmissive;if(S.setupLights(),B.isArrayCamera){let Te=B.cameras;if(me.length>0)for(let Ce=0,We=Te.length;Ce<We;Ce++){let Ze=Te[Ce];Wd(be,me,C,Ze)}Mt&&Be.render(C);for(let Ce=0,We=Te.length;Ce<We;Ce++){let Ze=Te[Ce];Gd(b,C,Ze,Ze.viewport)}}else me.length>0&&Wd(be,me,C,B),Mt&&Be.render(C),Gd(b,C,B)}W!==null&&O===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),q&&w.end(R),C.isScene===!0&&C.onAfterRender(R,C,B),ve.resetDefaultState(),F=-1,U=null,M.pop(),M.length>0?(S=M[M.length-1],j.setTextureUnits(S.state.textureUnits),st===!0&&Pe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,z!==null&&z.renderEnd()};function Rh(C,B,Z,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Ye)){q&&Gt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);let be=te.update(C),me=C.material;me.visible&&b.push(C,be,me,Z,Gt.z,null,B)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Ye))){let be=te.update(C),me=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Gt.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Gt.copy(be.boundingSphere.center)),Gt.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(me)){let Te=be.groups;for(let Ce=0,We=Te.length;Ce<We;Ce++){let Ze=Te[Ce],Ae=me[Ze.materialIndex];Ae&&Ae.visible&&b.push(C,be,Ae,Z,Gt.z,Ze,B)}}else me.visible&&b.push(C,be,me,Z,Gt.z,null,B)}}let ge=C.children;for(let be=0,me=ge.length;be<me;be++)Rh(ge[be],B,Z,q)}function Gd(C,B,Z,q){let{opaque:$,transmissive:ge,transparent:be}=C;S.setupLightsView(Z),st===!0&&Pe.setGlobalState(R.clippingPlanes,Z),q&&E.viewport(G.copy(q)),$.length>0&&_o($,B,Z),ge.length>0&&_o(ge,B,Z),be.length>0&&_o(be,B,Z),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Wd(C,B,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Ae=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Dt(1,1,{generateMipmaps:!0,type:Ae?Cn:Yt,minFilter:An,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ge=S.state.transmissionRenderTarget[q.id],be=q.viewport||G;ge.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(ye),Ee=R.getClearAlpha(),Ee<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&Be.render(Z);let We=R.toneMapping;R.toneMapping=ei;let Ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),st===!0&&Pe.setGlobalState(R.clippingPlanes,q),_o(C,Z,q),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,zt=B.length;at<zt;at++){let vt=B[at],{object:ft,geometry:nn,material:Me,group:dn}=vt;if(Me.side===on&&ft.layers.test(q.layers)){let nt=Me.side;Me.side=Ft,Me.needsUpdate=!0,Xd(ft,Z,q,nn,Me,dn),Me.side=nt,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,Te,Ce),R.setClearColor(ye,Ee),Ze!==void 0&&(q.viewport=Ze),R.toneMapping=We}function _o(C,B,Z){let q=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ge=C.length;$<ge;$++){let be=C[$],{object:me,geometry:Te,group:Ce}=be,We=be.material;We.allowOverride===!0&&q!==null&&(We=q),me.layers.test(Z.layers)&&Xd(me,B,Z,Te,We,Ce)}}function Xd(C,B,Z,q,$,ge){z!==null&&$.isNodeMaterial&&z.setObject(C,$),C.onBeforeRender(R,B,Z,q,$,ge),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(R,B,Z,q,C,ge),$.transparent===!0&&$.side===on&&$.forceSinglePass===!1?($.side=Ft,$.needsUpdate=!0,R.renderBufferDirect(Z,B,q,$,C,ge),$.side=On,$.needsUpdate=!0,R.renderBufferDirect(Z,B,q,$,C,ge),$.side=on):R.renderBufferDirect(Z,B,q,$,C,ge),C.onAfterRender(R,B,Z,q,$,ge)}function vo(C,B,Z){B.isScene!==!0&&(B=Mn);let q=Y.get(C),$=S.state.lights,ge=S.state.shadowsArray,be=$.state.version,me=ce.getParameters(C,$.state,ge,B,Z,S.state.lightProbeGridArray),Te=ce.getProgramCacheKey(me),Ce=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let We=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=ae.get(C.envMap||q.environment,We),q.envMapRotation=q.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",ri),Ce=new Map,q.programs=Ce);let Ze=Ce.get(Te);if(Ze!==void 0){if(q.currentProgram===Ze&&q.lightsStateVersion===be)return $d(C,me),Ze}else me.uniforms=ce.getUniforms(C),z!==null&&C.isNodeMaterial&&z.build(C,Z,me),C.onBeforeCompile(me,R),Ze=ce.acquireProgram(me,Te),Ce.set(Te,Ze),q.uniforms=me.uniforms;let Ae=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),$d(C,me),q.needsLights=yx(C),q.lightsStateVersion=be,q.needsLights&&(Ae.ambientLightColor.value=$.state.ambient,Ae.lightProbe.value=$.state.probe,Ae.sunLights.value=$.state.sun,Ae.sunLightShadows.value=$.state.sunShadow,Ae.directionalLights.value=$.state.directional,Ae.directionalLightShadows.value=$.state.directionalShadow,Ae.spotLights.value=$.state.spot,Ae.spotLightShadows.value=$.state.spotShadow,Ae.rectAreaLights.value=$.state.rectArea,Ae.ltc_1.value=$.state.rectAreaLTC1,Ae.ltc_2.value=$.state.rectAreaLTC2,Ae.pointLights.value=$.state.point,Ae.pointLightShadows.value=$.state.pointShadow,Ae.hemisphereLights.value=$.state.hemi,Ae.sunShadowMatrix.value=$.state.sunShadowMatrix,Ae.sunShadowCascade.value=$.state.sunShadowCascade,Ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ae.spotLightMatrix.value=$.state.spotLightMatrix,Ae.spotLightMap.value=$.state.spotLightMap,Ae.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=Ze,q.uniformsList=null,Ze}function qd(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=Hr.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function $d(C,B){let Z=Y.get(C);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function xx(C,B){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let Z=0,q=C.length;Z<q;Z++){let $=C[Z];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function _x(C,B,Z,q,$){B.isScene!==!0&&(B=Mn),j.resetTextureUnits();let ge=B.fog,be=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qe.workingColorSpace,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ce=ae.get(q.envMap||be,Te),We=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,zt=!!Z.morphAttributes.color,vt=ei;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(vt=R.toneMapping);let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nn=ft!==void 0?ft.length:0,Me=Y.get(q),dn=S.state.lights;if(st===!0&&(mt===!0||C!==U)){let xt=C===U&&q.id===F;Pe.setState(q,C,xt)}let nt=!1;q.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==dn.state.version||Me.outputColorSpace!==me||$.isBatchedMesh&&Me.batching===!1||!$.isBatchedMesh&&Me.batching===!0||$.isBatchedMesh&&Me.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Me.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Me.instancing===!1||!$.isInstancedMesh&&Me.instancing===!0||$.isSkinnedMesh&&Me.skinning===!1||!$.isSkinnedMesh&&Me.skinning===!0||$.isInstancedMesh&&Me.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Me.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Me.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Me.instancingMorph===!1&&$.morphTexture!==null||Me.envMap!==Ce||q.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Pe.numPlanes||Me.numIntersection!==Pe.numIntersection)||Me.vertexAlphas!==We||Me.vertexTangents!==Ze||Me.morphTargets!==Ae||Me.morphNormals!==at||Me.morphColors!==zt||Me.toneMapping!==vt||Me.morphTargetsCount!==nn||!!Me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Me.__version=q.version);let Ln=Me.currentProgram;nt===!0&&(Ln=vo(q,B,$),z&&q.isNodeMaterial&&z.onUpdateProgram(q,Ln,Me));let ai=!1,$i=!1,Zs=!1,ht=Ln.getUniforms(),Rt=Me.uniforms;if(E.useProgram(Ln.program)&&(ai=!0,$i=!0,Zs=!0),q.id!==F&&(F=q.id,$i=!0),Me.needsLights){let xt=xx(S.state.lightProbeGridArray,$);Me.lightProbeGrid!==xt&&(Me.lightProbeGrid=xt,$i=!0)}if(ai||U!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ht.setValue(V,"projectionMatrix",C.projectionMatrix),ht.setValue(V,"viewMatrix",C.matrixWorldInverse);let Yi=ht.map.cameraPosition;Yi!==void 0&&Yi.setValue(V,yt.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&ht.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ht.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),U!==C&&(U=C,$i=!0,Zs=!0)}if(Me.needsLights&&(dn.state.sunShadowMap.length>0&&ht.setValue(V,"sunShadowMap",dn.state.sunShadowMap,j),dn.state.directionalShadowMap.length>0&&ht.setValue(V,"directionalShadowMap",dn.state.directionalShadowMap,j),dn.state.spotShadowMap.length>0&&ht.setValue(V,"spotShadowMap",dn.state.spotShadowMap,j),dn.state.pointShadowMap.length>0&&ht.setValue(V,"pointShadowMap",dn.state.pointShadowMap,j)),$.isSkinnedMesh){ht.setOptional(V,$,"bindMatrix"),ht.setOptional(V,$,"bindMatrixInverse");let xt=$.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ht.setValue(V,"boneTexture",xt.boneTexture,j))}$.isBatchedMesh&&(ht.setOptional(V,$,"batchingTexture"),ht.setValue(V,"batchingTexture",$._matricesTexture,j),ht.setOptional(V,$,"batchingIdTexture"),ht.setValue(V,"batchingIdTexture",$._indirectTexture,j),ht.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&ht.setValue(V,"batchingColorTexture",$._colorsTexture,j));let Ki=Z.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&H.update($,Z,Ln),($i||Me.receiveShadow!==$.receiveShadow)&&(Me.receiveShadow=$.receiveShadow,ht.setValue(V,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(Rt.envMapIntensity.value=B.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=d1()),$i){if(ht.setValue(V,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&vx(Rt,Zs),ge&&q.fog===!0&&Ie.refreshFogUniforms(Rt,ge),Ie.refreshMaterialUniforms(Rt,q,J,K,S.state.transmissionRenderTarget[C.id]),Me.needsLights&&Me.lightProbeGrid){let xt=Me.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}Hr.upload(V,qd(Me),Rt,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Hr.upload(V,qd(Me),Rt,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ht.setValue(V,"center",$.center),ht.setValue(V,"modelViewMatrix",$.modelViewMatrix),ht.setValue(V,"normalMatrix",$.normalMatrix),ht.setValue(V,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let xt=q.uniformsGroups;for(let Yi=0,js=xt.length;Yi<js;Yi++){let Yd=xt[Yi];se.update(Yd,Ln),se.bind(Yd,Ln)}}return Ln}function vx(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.sunLights.needsUpdate=B,C.sunLightShadows.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function yx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,B,Z){let q=Y.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Y.get(C.texture).__webglTexture=B,Y.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){let Z=Y.get(C);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Z=0){W=C,D=B,O=Z;let q=null,$=!1,ge=!1;if(C){let me=Y.get(C);if(me.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,me.__webglFramebuffer),G.copy(C.viewport),ne.copy(C.scissor),ie=C.scissorTest,E.viewport(G),E.scissor(ne),E.setScissorTest(ie),F=-1;return}else if(me.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(me.__hasExternalTextures)j.rebindTextures(C,Y.get(C.texture).__webglTexture,Y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let We=C.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&Y.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}let Te=C.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);let Ce=Y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ce[B])?q=Ce[B][Z]:q=Ce[B],$=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?q=Y.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?q=Ce[Z]:q=Ce,G.copy(C.viewport),ne.copy(C.scissor),ie=C.scissorTest}else G.copy(xe).multiplyScalar(J).floor(),ne.copy(Fe).multiplyScalar(J).floor(),ie=St;if(Z!==0&&(q=I),E.bindFramebuffer(V.FRAMEBUFFER,q)&&E.drawBuffers(C,q),E.viewport(G),E.scissor(ne),E.setScissorTest(ie),$){let me=Y.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,Z)}else if(ge){let me=B;for(let Te=0;Te<C.textures.length;Te++){let Ce=Y.get(C.textures[Te]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,Z,me)}}else if(C!==null&&Z!==0){let me=Y.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,me.__webglTexture,Z)}F=-1};function Kd(C){let B=Y.get(C);return(B.__readFormat!==C.format||B.__readType!==C.type)&&(B.__readFormat=C.format,B.__readType=C.type,B.__formatReadable=P.textureFormatReadable(C.format),B.__typeReadable=P.textureTypeReadable(C.type)),B}this.readRenderTargetPixels=function(C,B,Z,q,$,ge,be,me=0){if(!(C&&C.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){E.bindFramebuffer(V.FRAMEBUFFER,Te);try{let Ce=C.textures[me],We=Ce.format,Ze=Ce.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let Ae=Kd(Ce);if(Ae.__formatReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&Z>=0&&Z<=C.height-$&&V.readPixels(B,Z,q,$,fe.convert(We),fe.convert(Ze),ge)}finally{let Ce=W!==null?Y.get(W).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,B,Z,q,$,ge,be,me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te)if(B>=0&&B<=C.width-q&&Z>=0&&Z<=C.height-$){E.bindFramebuffer(V.FRAMEBUFFER,Te);let Ce=C.textures[me],We=Ce.format,Ze=Ce.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let Ae=Kd(Ce);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,at),V.bufferData(V.PIXEL_PACK_BUFFER,ge.byteLength,V.STREAM_READ),V.readPixels(B,Z,q,$,fe.convert(We),fe.convert(Ze),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let zt=W!==null?Y.get(W).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,zt);let vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vm(V,vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,at),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ge),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(at),V.deleteSync(vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,Z=0){let q=Math.pow(2,-Z),$=Math.floor(C.image.width*q),ge=Math.floor(C.image.height*q),be=B!==null?B.x:0,me=B!==null?B.y:0;j.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,be,me,$,ge),E.unbindTexture()},this.copyTextureToTexture=function(C,B,Z=null,q=null,$=0,ge=0){let be,me,Te,Ce,We,Ze,Ae,at,zt,vt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(Z!==null)be=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,We=Z.min.y,Ze=Z.isBox3?Z.min.z:0;else{let Rt=Math.pow(2,-$);be=Math.floor(vt.width*Rt),me=Math.floor(vt.height*Rt),C.isDataArrayTexture?Te=vt.depth:C.isData3DTexture?Te=Math.floor(vt.depth*Rt):Te=1,Ce=0,We=0,Ze=0}q!==null?(Ae=q.x,at=q.y,zt=q.z):(Ae=0,at=0,zt=0);let ft=fe.convert(B.format),nn=fe.convert(B.type),Me;B.isData3DTexture?(j.setTexture3D(B,0),Me=V.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(j.setTexture2DArray(B,0),Me=V.TEXTURE_2D_ARRAY):(j.setTexture2D(B,0),Me=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,B.unpackAlignment);let dn=E.getParameter(V.UNPACK_ROW_LENGTH),nt=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(V.UNPACK_SKIP_PIXELS),ai=E.getParameter(V.UNPACK_SKIP_ROWS),$i=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,vt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ce),E.pixelStorei(V.UNPACK_SKIP_ROWS,We),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);let Zs=C.isDataArrayTexture||C.isData3DTexture,ht=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){let Rt=Y.get(C),Ki=Y.get(B),xt=Y.get(Rt.__renderTarget),Yi=Y.get(Ki.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,xt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let js=0;js<Te;js++)Zs&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Y.get(C).__webglTexture,$,Ze+js),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,ge,zt+js)),V.blitFramebuffer(Ce,We,be,me,Ae,at,be,me,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Y.has(C)){let Rt=Y.get(C),Ki=Y.get(B);E.bindFramebuffer(V.READ_FRAMEBUFFER,L),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,N);for(let xt=0;xt<Te;xt++)Zs?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rt.__webglTexture,$,Ze+xt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rt.__webglTexture,$),ht?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ki.__webglTexture,ge,zt+xt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ki.__webglTexture,ge),$!==0?V.blitFramebuffer(Ce,We,be,me,Ae,at,be,me,V.COLOR_BUFFER_BIT,V.NEAREST):ht?V.copyTexSubImage3D(Me,ge,Ae,at,zt+xt,Ce,We,be,me):V.copyTexSubImage2D(Me,ge,Ae,at,Ce,We,be,me);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ht?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Me,ge,Ae,at,zt,be,me,Te,ft,nn,vt.data):B.isCompressedArrayTexture?V.compressedTexSubImage3D(Me,ge,Ae,at,zt,be,me,Te,ft,vt.data):V.texSubImage3D(Me,ge,Ae,at,zt,be,me,Te,ft,nn,vt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ge,Ae,at,be,me,ft,nn,vt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ge,Ae,at,vt.width,vt.height,ft,vt.data):V.texSubImage2D(V.TEXTURE_2D,ge,Ae,at,be,me,ft,nn,vt);E.pixelStorei(V.UNPACK_ROW_LENGTH,dn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nt),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(V.UNPACK_SKIP_ROWS,ai),E.pixelStorei(V.UNPACK_SKIP_IMAGES,$i),ge===0&&B.generateMipmaps&&V.generateMipmap(Me),E.unbindTexture()},this.initRenderTarget=function(C){Y.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){D=0,O=0,W=null,E.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Zt={vision:new Map,wasm:new Map,erkenner:new Map},Mc={wasm:13e6,hand:78e5,gesicht:38e5,koerper:58e5},ja={wasm:"Erkennung wird geladen",hand:"Handerkennung wird geladen",gesicht:"Gesichtserkennung wird geladen",koerper:"K\xF6rpererkennung wird geladen",start:"Erkennung wird gestartet",fertig:"Bereit"},ng=s=>String(s||"").replace(/\/+$/,""),p1=25e3,eg=new Map,lf=class{constructor(e){this.melde=typeof e=="function"?e:null,this.dateien=new Map,this.anteilStart=0,this.text=ja.wasm}datei(e,t){return this.dateien.has(e)||this.dateien.set(e,{geladen:0,gesamt:t||1e6,fertig:!1}),this.dateien.get(e)}aktualisiere(e,t,n,i){let r=this.datei(e);n&&(r.gesamt=n),r.geladen=t,i&&(this.text=i),this.sende()}fertig(e){let t=this.datei(e);t.fertig=!0,t.geladen=t.gesamt,this.sende()}setzeStart(e,t){this.anteilStart=e,t&&(this.text=t),this.sende()}wert(){let e=0,t=0;for(let i of this.dateien.values())t+=i.gesamt,e+=i.fertig?i.gesamt:Math.min(i.geladen,i.gesamt*.98);let n=t>0?e/t:1;return Math.min(1,n*.9+this.anteilStart*.1)}sende(){if(this.melde)try{this.melde(this.wert(),this.text)}catch{}}};async function cf(s,{schaetzung:e=0,onBytes:t,stillstandMs:n=p1}={}){let i=typeof AbortController<"u"?new AbortController:null,r=0,a=()=>{i&&(clearTimeout(r),r=setTimeout(()=>i.abort(),n))};a();try{return await m1(s,{schaetzung:e,onBytes:t,signal:i&&i.signal,weiter:a})}catch(o){throw i&&i.signal.aborted?new Error(`Laden ins Stocken geraten: ${s}`):o}finally{clearTimeout(r)}}async function m1(s,{schaetzung:e,onBytes:t,signal:n,weiter:i}){let r=await fetch(s,{credentials:"same-origin",signal:n||void 0});if(i(),!r.ok)throw new Error(`Laden fehlgeschlagen: ${s} (${r.status})`);let a=Number(r.headers.get("content-length"))||0,o=a||e||0;if(a&&e&&a<e*.7&&(o=e),!r.body||!r.body.getReader){let d=new Uint8Array(await r.arrayBuffer());return t&&t(d.length,d.length),d}let l=r.body.getReader(),c=[],h=0;for(;;){let{done:d,value:p}=await l.read();if(d)break;c.push(p),h+=p.length,i(),h>o&&(o=h*1.05),t&&t(h,o)}if(a&&!r.headers.get("content-encoding")&&h<a)throw new Error(`Laden unvollstaendig: ${s} (${h} von ${a} Bytes)`);if(c.length===1)return c[0];let f=new Uint8Array(h),u=0;for(let d of c)f.set(d,u),u+=d.length;return f}function g1(s,e){let t=ng(s&&s.mediapipe);if(!t)return Promise.reject(new Error("konfig.mediapipe fehlt"));if(!Zt.vision.has(t)){let n=(async()=>{let i=eg.get(t)||0,r=i?`?versuch=${i}`:"",a;try{a=await import(`${t}/vision_bundle.mjs${r}`)}catch(l){throw eg.set(t,i+1),l}let o=await a.FilesetResolver.forVisionTasks(`${t}/wasm`);return{mp:a,filesetDirekt:o}})();n.catch(()=>Zt.vision.delete(t)),Zt.vision.set(t,n)}return Zt.vision.get(t).then(async n=>{let i=String(n.filesetDirekt.wasmBinaryPath),r=null;try{r=await x1(i,e)}catch{r=null}e&&e.dateien.has("wasm")&&e.fertig("wasm");let a=r?{...n.filesetDirekt,wasmBinaryPath:r}:n.filesetDirekt;return{mp:n.mp,fileset:a,filesetDirekt:n.filesetDirekt}})}function x1(s,e){if(!Zt.wasm.has(s)){if(typeof URL>"u"||!URL.createObjectURL)return Promise.resolve(null);let t=cf(s,{schaetzung:Mc.wasm,onBytes:(n,i)=>e&&e.aktualisiere("wasm",n,i,ja.wasm)}).then(n=>URL.createObjectURL(new Blob([n],{type:"application/wasm"})));t.catch(()=>Zt.wasm.delete(s)),Zt.wasm.set(s,t)}return Zt.wasm.get(s)}var hf=class{constructor(e,t,n,i){this.art=e,this.task=t,this.delegate=n,this.modus="VIDEO",this.letzteZeit=0,this.fehlerInFolge=0,this.neuBauen=i,this.wirdNeuGebaut=!1,this.letzterFehler=null,this.haende=e==="hand"?1:null}setzeHaende(e){if(this.art!=="hand"||!this.task||this.haende===e)return;let t=this.task.setOptions({numHands:e});t&&t.catch&&t.catch(()=>{}),this.haende=e}setzeModus(e){if(this.modus===e)return;let t=this.task.setOptions({runningMode:e});t&&t.catch&&t.catch(()=>{}),this.modus=e}erkenne(e,t){if(!this.task||this.wirdNeuGebaut)return null;try{let n;if(t==null)this.setzeModus("IMAGE"),n=this.task.detect(e),this.letzteZeit+=1;else{this.setzeModus("VIDEO");let i=Math.max(Number(t)||0,this.letzteZeit+1);this.letzteZeit=i,n=this.task.detectForVideo(e,i)}return this.fehlerInFolge=0,n}catch(n){return this.letzterFehler=n,this.fehlerInFolge++,this.fehlerInFolge>=3&&this.delegate==="GPU"&&this.neuBauen&&this.aufCpuWechseln(),null}}async aufCpuWechseln(){if(!this.wirdNeuGebaut){this.wirdNeuGebaut=!0;try{let e=await this.neuBauen("CPU");try{this.task.close()}catch{}this.task=e,this.delegate="CPU",this.modus="VIDEO",this.haende=this.art==="hand"?1:null,this.letzteZeit=0,this.fehlerInFolge=0}catch(e){this.letzterFehler=e}finally{this.wirdNeuGebaut=!1}}}schliessen(){try{this.task&&this.task.close()}catch{}this.task=null}};function _1(s,e,t){let n={modelAssetBuffer:e,delegate:t};return s==="hand"?{baseOptions:n,runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}:s==="gesicht"?{baseOptions:n,runningMode:"VIDEO",numFaces:1,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}:{baseOptions:n,runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5,outputSegmentationMasks:!1}}function v1(s,e){return{hand:s.HandLandmarker,gesicht:s.FaceLandmarker,koerper:s.PoseLandmarker}[e]}async function tg(s,e,t,n){let i=v1(s.mp,e),r=n==="CPU"?["CPU"]:["GPU","CPU"],a=s.fileset===s.filesetDirekt?[s.fileset]:[s.fileset,s.filesetDirekt],o=null;for(let l of a)for(let c of r)try{return{task:await i.createFromOptions(l,_1(e,t,c)),delegate:c}}catch(h){o=h}throw o||new Error(`MediaPipe-Task ${e} konnte nicht erzeugt werden`)}async function uf(s,e,t){let n=new lf(t),i=e&&e.modelle||{},r=e&&String(e.delegate||"").toUpperCase()==="CPU"?"CPU":null,a=ng(e&&e.mediapipe),o=[];for(let d of s){if(!i[d])throw new Error(`konfig.modelle.${d} fehlt`);let p=`${a}|${d}|${i[d]}`;Zt.erkenner.has(p)||o.push({art:d,schluessel:p,url:i[d]})}o.length&&!Zt.wasm.size&&n.datei("wasm",Mc.wasm);for(let d of o)n.datei(d.art,Mc[d.art]);n.sende();let l=g1(e,n),c=new Map(o.map(d=>[d.art,cf(d.url,{schaetzung:Mc[d.art],onBytes:(p,x)=>n.aktualisiere(d.art,p,x,ja[d.art])}).then(p=>(n.fertig(d.art),p))]));for(let d of c.values())d.catch(()=>{});let h=await l,f=0;for(let d of o){if(Zt.erkenner.has(d.schluessel))continue;let p=(async()=>{let x=await c.get(d.art);n.setzeStart(f/Math.max(1,o.length),ja.start);let{task:g,delegate:m}=await tg(h,d.art,x,r),_=async y=>(await tg(h,d.art,await cf(d.url),y)).task;return new hf(d.art,g,m,_)})();p.catch(()=>Zt.erkenner.delete(d.schluessel)),Zt.erkenner.set(d.schluessel,p),await p,f++}let u={mp:h.mp};for(let d of s)u[d]=await Zt.erkenner.get(`${a}|${d}|${i[d]}`);return n.setzeStart(1,ja.fertig),u}async function ig(){let s=[...Zt.erkenner.values()];Zt.erkenner.clear();for(let e of s)try{(await e).schliessen()}catch{}for(let e of Zt.wasm.values())try{let t=await e;t&&URL.revokeObjectURL(t)}catch{}Zt.wasm.clear()}var y1=2*Math.PI;function Wr(s,e){return 1/(1+1/(y1*s)/e)}function ff(s,e){let t=s-e;return t>1e-4?Math.min(t,.5):1e-4}var ti=class{constructor({minCutoff:e=1,beta:t=0,dCutoff:n=1}={}){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.zuruecksetzen()}zuruecksetzen(){this.x=null,this.dx=0,this.t=0}setze(e,t){return this.x=e,this.dx=0,this.t=t,e}filtere(e,t,n=1){if(this.x===null||!Number.isFinite(this.x))return this.setze(e,t);let i=ff(t,this.t),r=(e-this.x)/i;this.dx+=Wr(this.dCutoff,i)*(r-this.dx);let a=this.minCutoff+this.beta*Math.abs(this.dx)/(n||1);return this.x+=Wr(a,i)*(e-this.x),this.t=t,this.x}},Ja=class{constructor(e,{minCutoff:t=1,beta:n=0,dCutoff:i=1,punktDim:r=3}={}){this.dim=e,this.minCutoff=t,this.beta=n,this.dCutoff=i,this.punkte=Math.max(1,e/r),this.x=new Float64Array(e),this.dx=new Float64Array(e),this.t=0,this.leer=!0,this.letzterCutoff=t}zuruecksetzen(){this.leer=!0,this.dx.fill(0)}setze(e,t){for(let n=0;n<this.dim;n++)this.x[n]=e[n];return this.dx.fill(0),this.t=t,this.leer=!1,this.x}filtere(e,t,n=1){if(this.leer)return this.setze(e,t);let i=ff(t,this.t),r=Wr(this.dCutoff,i),a=0;for(let h=0;h<this.dim;h++){let f=(e[h]-this.x[h])/i;this.dx[h]+=r*(f-this.dx[h]),a+=this.dx[h]*this.dx[h]}let o=Math.sqrt(a/this.punkte)/(n||1),l=this.minCutoff+this.beta*o;this.letzterCutoff=l;let c=Wr(l,i);for(let h=0;h<this.dim;h++)this.x[h]+=c*(e[h]-this.x[h]);return this.t=t,this.x}},bc=class{constructor(e){this.f=new Ja(3,{...e,punktDim:3}),this.aus=new T,this.puffer=[0,0,0]}zuruecksetzen(){this.f.zuruecksetzen()}get leer(){return this.f.leer}setze(e,t){this.puffer[0]=e.x,this.puffer[1]=e.y,this.puffer[2]=e.z;let n=this.f.setze(this.puffer,t);return this.aus.set(n[0],n[1],n[2])}filtere(e,t,n=1){this.puffer[0]=e.x,this.puffer[1]=e.y,this.puffer[2]=e.z;let i=this.f.filtere(this.puffer,t,n);return this.aus.set(i[0],i[1],i[2])}},Qa=class{constructor({minCutoff:e=1,beta:t=.5,dCutoff:n=1}={}){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.q=new $e,this.hilf=new $e,this.omega=0,this.t=0,this.leer=!0}zuruecksetzen(){this.leer=!0,this.omega=0}setze(e,t){return this.q.copy(e).normalize(),this.omega=0,this.t=t,this.leer=!1,this.q}filtere(e,t){if(this.leer)return this.setze(e,t);let n=ff(t,this.t);this.hilf.copy(e).normalize(),this.hilf.dot(this.q)<0&&this.hilf.set(-this.hilf.x,-this.hilf.y,-this.hilf.z,-this.hilf.w);let i=2*Math.acos(Math.min(1,Math.abs(this.hilf.dot(this.q))));this.omega+=Wr(this.dCutoff,n)*(i/n-this.omega);let r=this.minCutoff+this.beta*this.omega;return this.q.slerp(this.hilf,Wr(r,n)),this.t=t,this.q}},Sc=class{constructor(e=.25,t=.3){this.dauerEin=e,this.dauerAus=t,this.wert=0}schritt(e,t){if(!(t>0))return this.wert;let n=e>this.wert?this.dauerEin:this.dauerAus,i=t/Math.max(.001,n);return e>this.wert?this.wert=Math.min(e,this.wert+i):this.wert=Math.max(e,this.wert-i),this.wert}setze(e){return this.wert=e,e}};function df(s,e,t,n,i){let r=s.length,a=i&&i.length===r*3?i:new Float64Array(r*3);for(let o=0;o<r;o++){let l=s[o];a[o*3]=(n?1-l.x:l.x)*e,a[o*3+1]=(1-l.y)*t,a[o*3+2]=-(l.z||0)*e}return a}function pf(s,e){let t=s.length/3,n=e&&e.length===t?e:Array.from({length:t},()=>new T);for(let i=0;i<t;i++)n[i].set(s[i*3],s[i*3+1],s[i*3+2]);return n}function eo(s,e,t=new T){t.set(0,0,0);for(let n of e)t.add(s[n]);return t.multiplyScalar(1/e.length)}function Ht(s,e,t){return s<e?e:s>t?t:s}function Bi(s,e,t){let n=Ht((s-e)/(t-e),0,1);return n*n*(3-2*n)}function Ec(s,e){let t=s.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t));return n.lengthSq()<1e-12&&n.set(0,0,1).addScaledVector(t,-t.z),n.normalize(),{x:new T().crossVectors(t,n).normalize(),y:t,z:n}}function Xr(s,e){let t=s.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t));n.lengthSq()<1e-12&&n.set(0,1,0).addScaledVector(t,-t.y),n.normalize();let i=new T().crossVectors(t,n).normalize();return{x:t,y:n,z:i}}var sg=new _e;function _i(s,e=new $e){return sg.makeBasis(s.x,s.y,s.z),e.setFromRotationMatrix(sg)}function rg(s,e,t=new T){t.set(0,0,0);for(let n=0;n<e.length;n++){let i=s[e[n]],r=s[e[(n+1)%e.length]];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize()}function Bn(s,e,t,n,i,r,a=new T){return a.copy(s).addScaledVector(e.x,t*r).addScaledVector(e.y,n*r).addScaledVector(e.z,i*r)}var cn=(s,e,t)=>({typ:"kapsel",a:s.clone(),b:e.clone(),r:t}),wc=(s,e,t,n,i)=>({typ:"ellipsenzylinder",a:s.clone(),b:e.clone(),quer:t.clone().normalize(),rQuer:n,rTiefe:i}),qr=(s,e,t)=>({typ:"ellipsoid",mitte:s.clone(),quaternion:e.clone(),radien:t.clone()});var Hi={daumen:{gelenke:[1,2,3,4],ring:[2,3],anker:[.5,.5],durchmesserMm:21},zeige:{gelenke:[5,6,7,8],ring:[5,6],anker:[.48,.6],durchmesserMm:18},mittel:{gelenke:[9,10,11,12],ring:[9,10],anker:[.48,.6],durchmesserMm:18.5},ring:{gelenke:[13,14,15,16],ring:[13,14],anker:[.48,.62],durchmesserMm:17},klein:{gelenke:[17,18,19,20],ring:[17,18],anker:[.5,.6],durchmesserMm:15}},fs=Object.keys(Hi),M1=[[0,5,94],[0,9,90],[0,13,87],[0,17,78],[5,17,62]],b1=62,S1=18,us={quer:26.5,tiefe:18.5},E1=150,ag=[.78,1.12],og=.3,w1=10,lg=55*Math.PI/180,T1=[.9,.8,.72],hg=.92,A1={"hand-zeigen":"Halte deine Hand ins Bild",naeher:"Etwas n\xE4her heran","ganz-ins-bild":"Zeig die ganze Hand im Bild","finger-spreizen":"Spreiz die Finger ein wenig"};function ug(s){return s?{code:s,text:A1[s]}:null}function R1(s){let e=[...s].sort((n,i)=>n-i),t=e.length>4?e.slice(1,-1):e;return t.reduce((n,i)=>n+i,0)/t.length}function Ac(s){return R1(M1.map(([e,t,n])=>s[e].distanceTo(s[t])/n))}function gf(s,e,t,n=new T){return rg(s,[0,5,9,13,17],n),e!==t?n.negate():n}var cg=[6,7,8,10,11,12,14,15,16,18,19,20],C1=[2,3,4],k1=.5;function mf(s,e,t){let n=eo(s,[0,5,9,13,17]),i=s[0].distanceTo(s[9])||1,r=0;for(let a of t)r+=(s[a].x-n.x)*e.x+(s[a].y-n.y)*e.y+(s[a].z-n.z)*e.z;return r/t.length/i}function I1(s,e,t){let n=0,i=0,r=gf(s,!0,t);return n+=mf(s,r,C1)+mf(s,r,cg),i+=2,e&&e.length===21&&(n+=mf(e,gf(e,!0,t),cg),i+=1),Ht(-4*n/i,-1,1)}function xf(s,e,t,n){let i=0;if(s){let r=s.categoryName==="Right"?s.score??.5:1-(s.score??.5);i+=2*r-1}return i+k1*I1(e,t,n)}function _f(s,{W:e,H:t,spiegel:n=!1,rechts:i=!0,armWinkel:r=0,armMessung:a=null,fingerMessung:o=null}){let l=Ac(s),c=gf(s,i,n),f=eo(s,[5,9,13,17]).clone().sub(s[0]).normalize(),u=Ec(f,c),d=s[5].distanceTo(s[17])/l,p=Ht(d/b1,.85,1.2),x=.5+.5*p,g=s[5].clone().sub(s[17]);g.addScaledVector(u.z,-g.dot(u.z)).normalize();let m=u.z.clone().multiplyScalar(Math.cos(lg)).addScaledVector(g,Math.sin(lg)),_=Bi(c.z,-.35,.35),y={},v={};for(let N of fs){let D=Hi[N],O=s[D.ring[0]],W=s[D.ring[1]],F=W.clone().sub(O),U;N==="daumen"?U=m:(U=new T().crossVectors(u.x,F),U.lengthSq()<1e-9&&(U=u.z));let G=Ec(F,U),ne=O.clone().lerp(W,D.anker[0]+(D.anker[1]-D.anker[0])*_),ie=o&&o[N];if(ie){let ye=.5*D.durchmesserMm*l;y[N]=ye*Ht(ie.faktor,ag[0],ag[1]);let Ee=Math.hypot(W.x-O.x,W.y-O.y);if(Ee>1e-6){let ze=Ht(ie.versatz,-og,og)*ye;ne.x+=-(W.y-O.y)/Ee*ze,ne.y+=(W.x-O.x)/Ee*ze}}else y[N]=.5*D.durchmesserMm*l*x;v[N]={position:ne,quaternion:_i(G),pxProMm:l,rahmen:G}}for(let N of fs)v[N].sichtbar=L1(N,s,v[N].rahmen,y);let b=Ec(r?N1(f,r):f,c),S={quer:us.quer*l*x,tiefe:us.tiefe*l*x},A=s[0].clone(),M=1,w=hg,R=null;if(a&&a.breite>0){let N=new T(b.y.y,-b.y.x,0);if(N.lengthSq()>1e-6){N.normalize();let D=Math.hypot(S.quer*b.x.dot(N),S.tiefe*b.z.dot(N)),O=us.quer*l,W=Ht((a.breiteNah||a.breite)*O/Math.max(D,1e-6),.72,1.5),F=Ht(a.breite*O/Math.max(D,1e-6),.72,1.9);M=Math.max(1,F/W),w=1,R={f:+W.toFixed(3),fArm:+F.toFixed(3),projiziert:Math.round(D),gemessenNah:Math.round((a.breiteNah||a.breite)*O)};let U=(S.quer*b.x.dot(N))**2/Math.max(D*D,1e-6);S.quer*=1+(W-1)*U,S.tiefe*=1+(W-1)*(1-U);let G=Math.hypot(S.quer*b.x.dot(N),S.tiefe*b.z.dot(N)),ne=G>1e-6?W*D/G:1;S.quer*=ne,S.tiefe*=ne;let ie=Ht((a.versatz||0)*us.quer*l,-.35*D*W,.35*D*W);A.addScaledVector(N,ie)}}let k=A.clone().addScaledVector(b.y,-S1*l),z={position:k,quaternion:_i(b),pxProMm:l,rahmen:b},{verdecker:I,schatten:L}=z1(s,y,S,b,k,l,A,M,w);return{anker:{ring:v,armband:z},masse:{fingerRadiusPx:y,handgelenkRadienPx:S},verdecker:I,schatten:L,hinweisCode:null,info:{ppm:l,kBreite:p,nRuecken:c,rueckenZurKamera:c.z>0,ruecken:_,hand:u,arm:R}}}var P1={zeige:["mittel"],mittel:["zeige","ring"],ring:["mittel","klein"],klein:["ring"],daumen:[]};function L1(s,e,t,n){let i=Hi[s],r=e[i.ring[0]],a=e[i.ring[1]],o=n[s],l=1-Bi(Math.abs(t.y.z),.62,.8),c=Math.hypot(a.x-r.x,a.y-r.y);l*=Bi(c/(2*o),.5,.85);let h=Tc(e,i.ring);for(let f of P1[s]){let u=Tc(e,Hi[f].ring),d=Math.hypot(h.x-u.x,h.y-u.y)/(.5*(o+n[f]));l*=Bi(d,.85,1.3)}return Ht(l,0,1)}function z1(s,e,t,n,i,r,a=s[0],o=1,l=hg){let c=[],h=[];for(let _ of fs){let y=Hi[_].gelenke,v=e[_],b=_==="daumen"?[[2,3],[3,4]]:[[y[0],y[1]],[y[1],y[2]],[y[2],y[3]]];b.forEach(([S,A],M)=>{let w=_==="daumen"?[.9,.78][M]:T1[M],R=v*w,k=s[A];if(M===b.length-1){let z=s[A].clone().sub(s[S]),I=z.length();k=s[S].clone().addScaledVector(z,Math.max(.2,(I-R)/Math.max(I,1e-6)))}c.push(cn(s[S],k,R)),M<2&&h.push(cn(s[S],s[A],v*[1,.9][M]))})}let f=(s[5].distanceTo(s[9])+s[9].distanceTo(s[13])+s[13].distanceTo(s[17]))/3,u=Math.max(.42*f,7*r),d=[];for(let _ of[5,9,13,17])d.push(cn(s[0],s[_],u));d.push(cn(s[5],s[17],u*.95));let p=e.daumen;d.push(cn(s[0],s[1],p)),d.push(cn(s[1],s[2],p*.92)),c.push(...d);let x=a.clone().addScaledVector(n.y,4*r),g=i.clone().addScaledVector(n.y,-E1*r);if(c.push(wc(x,g,n.x,t.quer*l,t.tiefe*l)),o>1.04){let _=i.clone().addScaledVector(n.y,-w1*r),y=l*o;c.push(wc(_,g,n.x,t.quer*y,t.tiefe*y))}let m=[wc(x,g,n.x,t.quer,t.tiefe),...d];return{verdecker:c,schatten:{ring:h,armband:m}}}function fg(s,e,{W:t,H:n,art:i}){let r=.01*Math.min(t,n),a=i==="armband"?[0,1,5,9,13,17]:[0,2,3,5,6,9,10,13,14,17,18];for(let l of a){let c=s[l];if(c.x<r||c.x>t-r||c.y<r||c.y>n-r)return"ganz-ins-bild"}if(i==="armband"){let l=e.anker.armband.position;if(l.x<0||l.x>t||l.y<0||l.y>n)return"ganz-ins-bild"}if(Math.hypot(s[9].x-s[0].x,s[9].y-s[0].y)<.12*Math.min(t,n))return"naeher";if(i==="ring"){let l=e.masse.fingerRadiusPx,c=[["zeige","mittel"],["mittel","ring"],["ring","klein"]];for(let[h,f]of c){let u=Tc(s,Hi[h].ring),d=Tc(s,Hi[f].ring);if(Math.hypot(u.x-d.x,u.y-d.y)<.9*(l[h]+l[f])*.5)return"finger-spreizen"}}return null}function Tc(s,[e,t]){return{x:(s[e].x+s[t].x)/2,y:(s[e].y+s[t].y)/2}}function N1(s,e){let t=Math.cos(e),n=Math.sin(e);return new T(s.x*t-s.y*n,s.x*n+s.y*t,s.z)}var to=75*Math.PI/180,dg=5*Math.PI/180,D1=[12,20,28,36,46,56,68,80,95,110],U1=[-.55,0,.55],Rc=.035,F1=.5,O1=.12,B1=40,H1=[14,24,34,44,54,64,76],pg=.22,V1=1.2,G1=30,W1=2,Cc=class{constructor(){this.canvas=null,this.ctx=null,this.daten=null,this.b=0,this.h=0,this.k=1,this.fehler=!1}lese(e,t,n){if(this.fehler)return!1;try{let i=224/Math.max(t,n),r=Math.max(8,Math.round(t*i)),a=Math.max(8,Math.round(n*i));return this.canvas||(this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,a):document.createElement("canvas"),this.ctx=null),(this.canvas.width!==r||this.canvas.height!==a)&&(this.canvas.width=r,this.canvas.height=a),this.ctx||(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})),this.ctx.drawImage(e,0,0,r,a),this.daten=this.ctx.getImageData(0,0,r,a).data,this.b=r,this.h=a,this.k=i,!0}catch{return this.fehler=!0,!1}}farbe(e,t,n,i,r){let a=Math.round((r?n-e:e)*this.k-.5),o=Math.round((i-t)*this.k-.5);if(a<0||o<0||a>=this.b||o>=this.h)return null;let l=(o*this.b+a)*4,c=this.daten,h=c[l],f=c[l+1],u=c[l+2],d=h+f+u+3;return[(h+1)/d,(f+1)/d,d]}schaetze(e,t,n,i,{W:r,H:a,spiegel:o}){if(!e||!(n>0)||!this.lese(e,r,a))return null;let l=[0,0,0],c=0;for(let R of[.3,.5])for(let k of[5,9,13,17]){let z=this.farbe(t[0].x+R*(t[k].x-t[0].x),t[0].y+R*(t[k].y-t[0].y),r,a,o);z&&(l[0]+=z[0],l[1]+=z[1],l[2]+=Math.log(z[2]),c++)}if(c<4)return null;l[0]/=c,l[1]/=c,l[2]/=c;let h=(t[5].x+t[9].x+t[13].x+t[17].x)/4,f=(t[5].y+t[9].y+t[13].y+t[17].y)/4,u=t[0].x-h,d=t[0].y-f,p=Math.hypot(u,d);if(p<.001)return null;u/=p,d/=p;let x=R=>{let k=(R[0]-l[0])/Rc,z=(R[1]-l[1])/Rc,I=(Math.log(R[2])-l[2])/F1;return Math.exp(-.5*(k*k+z*z+I*I))},g=[];for(let R=-to;R<=to+1e-6;R+=dg){let k=Math.cos(R),z=Math.sin(R),I=u*k-d*z,L=u*z+d*k,N=0,D=0,O=0,W=0,F=0,U=0;D1.forEach((ne,ie)=>{let ye=1/(1+ie/4);for(let Ee of U1){let ze=Ee*i*n,K=t[0].x+I*ne*n-L*ze,J=t[0].y+L*ne*n+I*ze;W+=ye;let le=this.farbe(K,J,r,a,o);if(!le)continue;let we=x(le);O+=ye,N+=ye*we,D+=ye,ne>=B1&&(F+=we,U++)}});let G=O/W>=.35?N/D-O1*(R/to)**2:null;g.push({w:R,wert:G,fern:U?F/U:0,drin:O/W})}let m=g.filter(R=>R.wert!=null);if(m.length<5)return null;let _=0;g.forEach((R,k)=>{R.wert!=null&&(g[_].wert==null||R.wert>g[_].wert)&&(_=k)});let y=g[_],v=y.w,b=g[_-1],S=g[_+1];if(b&&S&&b.wert!=null&&S.wert!=null){let R=b.wert-2*y.wert+S.wert;R<-1e-6&&(v+=dg*Math.max(-.5,Math.min(.5,.5*(b.wert-S.wert)/R)))}let A=m.reduce((R,k)=>R+k.wert,0)/m.length,M=Math.max(0,Math.min(1,(y.fern-.3)/.25))*Math.max(0,Math.min(1,(y.wert-.25)/.25))*Math.max(0,Math.min(1,(y.wert-A)/.15))*Math.max(0,Math.min(1,(y.drin-.4)/.35));if(M<=.01)return null;let w=null;for(let R=0;R<3;R++){let k=this.querschnitte(t[0],v,u,d,n,i,x,r,a,o);if(!k||(w=k,k.winkelKorrektur==null)||(v=Math.max(-to,Math.min(to,v+k.winkelKorrektur*k.guete)),Math.abs(k.winkelKorrektur)<.02))break}return{winkel:v,guete:M,arm:w}}querschnitte(e,t,n,i,r,a,o,l,c,h){let f=Math.cos(t),u=Math.sin(t),d=n*f-i*u,p=n*u+i*f,x=-p,g=d,m=.75/this.k,_=W1*a*r,y=(U,G,ne,ie,ye)=>{let Ee=K=>{let J=(K[0]-ye[0])/Rc,le=(K[1]-ye[1])/Rc,we=Math.log(K[2]/ye[2])/V1;return Math.exp(-.5*(J*J+le*le+we*we))},ze=0;for(let K=m;K<=_;K+=m){let J=this.farbe(U+ne*K,G+ie*K,l,c,h);if(!J)return null;if(o(J)<pg&&Ee(J)<pg){if(++ze>=2)return K-m*1.5}else ze=0}return null},v=[],b=[],S=[];for(let U of H1){let G=e.x+d*U*r,ne=e.y+p*U*r,ie=this.farbe(G,ne,l,c,h);if(!ie||o(ie)<.35)continue;let ye=y(G,ne,x,g,ie),Ee=y(G,ne,-x,-g,ie);if(ye==null||Ee==null)continue;let ze=(ye+Ee)/2;ze<.45*a*r||ze>1.6*a*r||(b.push(ze),U<=G1&&S.push(ze),v.push({s:U*r,q:(ye-Ee)/2,l:ye,r:Ee}))}if(b.length<3)return null;b.sort((U,G)=>U-G);let A=b[Math.floor(b.length/2)],M=v.length,w=0,R=0,k=0,z=0;for(let U of v)w+=U.s,R+=U.q,k+=U.s*U.s,z+=U.s*U.q;let I=M*k-w*w,L=0,N=R/M;I>1e-6&&(L=(M*z-w*R)/I,N=(R-L*w)/M);let D=(b[b.length-1]-b[0])/A,O=0;for(let U of v)O+=(U.q-N-L*U.s)**2;O=Math.sqrt(O/M)/A;let W=Math.min(1,(M-2)/3)*Math.max(0,Math.min(1,(.9-D)/.5))*Math.max(0,Math.min(1,(.45-O)/.3));if(W<=.05)return null;let F=Math.atan(L);return S.sort((U,G)=>U-G),{halbBreitePx:A,halbBreiteNahPx:S.length?S[Math.floor(S.length/2)]:A,versatzPx:N,winkelKorrektur:Math.abs(F)<.5?F:null,guete:W,schnitte:v}}};var mg=[-.06,.08,.22],X1=.45,q1=1.6,$1=.12,K1=4,kc=class{constructor(){this.canvas=null,this.ctx=null,this.daten=null,this.fehler=!1}lese(e,t,n,i,r){if(this.fehler||!e)return!1;let a=1/0,o=-1/0,l=1/0,c=-1/0;for(let g of t){let m=r?n-g.x:g.x,_=i-g.y;m<a&&(a=m),m>o&&(o=m),_<l&&(l=_),_>c&&(c=_)}let h=.12*Math.max(o-a,c-l);a=Math.max(0,Math.floor(a-h)),l=Math.max(0,Math.floor(l-h)),o=Math.min(n,Math.ceil(o+h)),c=Math.min(i,Math.ceil(c+h));let f=o-a,u=c-l;if(f<8||u<8)return!1;let d=Math.min(1,288/Math.max(f,u)),p=Math.max(1,Math.round(f*d)),x=Math.max(1,Math.round(u*d));try{this.canvas||(this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(p,x):document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})),(this.canvas.width!==p||this.canvas.height!==x)&&(this.canvas.width=p,this.canvas.height=x),this.ctx.drawImage(e,a,l,f,u,0,0,p,x),this.daten=this.ctx.getImageData(0,0,p,x).data}catch{return this.fehler=!0,!1}return this.bereich={x0:a,y0:l,k:d,b:p,h:x,W:n,H:i,spiegel:r},!0}farbe(e,t){let{x0:n,y0:i,k:r,b:a,h:o,W:l,H:c,spiegel:h}=this.bereich,f=Math.round(((h?l-e:e)-n)*r-.5),u=Math.round((c-t-i)*r-.5);if(f<0||u<0||f>=a||u>=o)return null;let d=(u*a+f)*4,p=this.daten,x=p[d],g=p[d+1],m=p[d+2],_=x+g+m+3;return[(x+1)/_,(g+1)/_,_]}miss(e,t,n,i){if(!this.daten)return null;let r=t.x-e.x,a=t.y-e.y,o=Math.hypot(r,a);if(o<2||!(i>0))return null;let l=r/o,c=a/o,h=-c,f=l,u=Math.max(.5,.5/this.bereich.k),d=1/this.bereich.k,p=[],x=[];for(let v of mg){let b=(n+v)*o,S=e.x+l*b,A=e.y+c*b;if(!this.farbe(S,A))continue;let M=(k,z)=>{let I=0,L=null;for(let N=X1*i;N<=q1*i;N+=u){let D=this.farbe(S+k*(N-d),A+z*(N-d)),O=this.farbe(S+k*(N+d),A+z*(N+d));if(!D||!O)return null;let W=Math.abs(O[2]-D[2])/(O[2]+D[2])+K1*Math.hypot(O[0]-D[0],O[1]-D[1]);W>I&&(I=W,L=N)}return I>=$1?L:null},w=M(h,f),R=M(-h,-f);w==null||R==null||(p.push((w+R)/2),x.push((w-R)/2))}if(p.length<2)return null;let g=[...p].sort((v,b)=>v-b)[p.length>>1],m=0,_=0,y=0;return p.forEach((v,b)=>{Math.abs(v-g)>.2*g||(m+=v,_+=x[b],y++)}),y<2?null:{halb:m/y,versatz:_/y,guete:y===mg.length?1:.7}}};var Y1=11.7,Z1=.89,j1=126,J1=[[234,454],[93,323],[132,361],[127,356],[33,263],[133,362],[61,291],[58,288],[172,397],[162,389],[21,251]],Q1=[[152,10],[175,151],[199,9],[200,8]],yf={bezug:{L:[127,234,93,132,58],R:[356,454,323,361,288]},aussenMm:4.3,obenMm:-7.4,vornMm:-45.9,rahmen:"matrix"},gg=[22,40],eS=15*Math.PI/180,xg={obenMm:1.5,radien:[1.3,8.5,6.5]},Ic=[66,110,90],Lc={brennweiteAnteil:.75,abstandMm:[350,1500],einzelbildAbstandMm:700,tiefeOhrMm:75,tiefeHalsMm:50};function Mf(s,{W:e,H:t,einzel:n=!1},i,r=Lc){if(!(s>0)||!(i>0))return 1;let a=n?r.einzelbildAbstandMm:Ht(r.brennweiteAnteil*Math.max(e,t)/s,r.abstandMm[0],r.abstandMm[1]);return a/(a+i)}var tS={"gesicht-zeigen":"Schau direkt in die Kamera","kopf-drehen":"Dreh den Kopf leicht zur Seite",naeher:"Etwas n\xE4her heran"};function bf(s){return s?{code:s,text:tS[s]}:null}var Pc=null;function vg(s){if(Pc)return Pc;if(!s||!s.length)return null;let e=[],t=s.length%3===0;for(let n=0;t&&n<s.length;n+=3){let i=s[n],r=s[n+1],a=s[n+2];i.end!==r.start||r.end!==a.start||a.end!==i.start?t=!1:e.push(i.start,r.start,a.start)}if(!t){e.length=0;let n=new Map,i=(a,o)=>{n.has(a)||n.set(a,new Set),n.get(a).add(o)};for(let a of s)i(a.start,a.end),i(a.end,a.start);let r=new Set;for(let[a,o]of n)for(let l of o)if(!(l<=a))for(let c of n.get(l)){if(c<=l||!o.has(c))continue;let h=`${a},${l},${c}`;r.has(h)||(r.add(h),e.push(a,l,c))}}return Pc=new Uint16Array(e),Pc}function Sf(s,e,t=null){let n=t?{x:t.x.clone(),y:t.y.clone(),z:t.z.clone()}:null,i=!!n;if(!n){let r=new T;for(let[o,l]of J1)r.add(s[l]).sub(s[o]);e&&r.negate();let a=new T;for(let[o,l]of Q1)a.add(s[l]).sub(s[o]);n=Xr(r,a)}return n.ausMatrix=i,n.ursprung=s[234].clone().add(s[454]).multiplyScalar(.5),n.quaternion=_i(n),n.gier=Math.atan2(n.z.x,n.z.z),n.nick=Math.asin(Ht(n.z.y,-1,1)),n}function yg(s,e){if(!s||s.length<16)return null;let t=e?-1:1,n=new T(s[0],t*s[1],t*s[2]),i=new T(t*s[4],s[5],s[6]);return n.lengthSq()>1e-6&&i.lengthSq()>1e-6?Xr(n,i):null}var vf=[0,-25,-60];function Mg(s,e){return Bn(s.ursprung,s,vf[0],vf[1],vf[2],e)}function nS(s){let e=0,t=0;for(let[n,i,r,a]of[[469,471,470,472],[474,476,475,477]]){if(!s[i])continue;let o=Math.hypot(s[n].x-s[i].x,s[n].y-s[i].y),l=Math.hypot(s[r].x-s[a].x,s[r].y-s[a].y),c=Math.max(o,l/Z1);e+=c*c*c,t+=c*c}return t>0?e/t:0}function Ef(s){let e=s[234].distanceTo(s[454])/j1,t=nS(s),n=t/Y1;if(!(n>0))return e;let i=Ht(n,e*.85,e*1.15),r=Ht(.4+(t-6)*.04,.4,.6);return Math.exp(r*Math.log(i)+(1-r)*Math.log(e))}function _g(s,e,t,n,i,r=yf,a=t){let l=eo(s,n==="L"!==i?r.bezug.L:r.bezug.R),c=n==="L"?-1:1,h=Bn(l,e,c*r.aussenMm,r.obenMm,r.vornMm,t),f=c*e.gier*180/Math.PI,u=1-Bi(f,gg[0],gg[1]),d=c*eS,p=e.x.clone().multiplyScalar(Math.cos(d)).addScaledVector(e.z,Math.sin(d)),x=_i(Xr(p,e.y));return{position:h,quaternion:x,pxProMm:a,sichtbar:u,bezug:l}}function wf(s,e,t,n,{mitHals:i=!0,ohren:r=null}={}){let a=[];if(n){let u=new Float32Array(1404);for(let d=0;d<468;d++)u[d*3]=s[d].x,u[d*3+1]=s[d].y,u[d*3+2]=s[d].z;a.push({typ:"netz",positionen:u,index:n})}let o=e.ursprung,l=Ic[0],c=0,h=[];for(let u of r||[])h.push(u.position.clone().sub(o).dot(e.x)/t);h.length===2&&(c=(h[0]+h[1])/2,l=Ht(Math.abs(h[1]-h[0])/2-6,48,Ic[0]));let f=Bn(o,e,c,10,-40,t);if(a.push(qr(f,e.quaternion,new T(l,Ic[1],Ic[2]).multiplyScalar(t))),i){let u=Bn(o,e,0,-45,-35,t),d=Bn(o,e,0,-170,-45,t);a.push(cn(u,d,50*t))}for(let u of r||[]){let d=new T(0,xg.obenMm,0).applyQuaternion(u.quaternion).multiplyScalar(u.pxProMm).add(u.position);a.push(qr(d,u.quaternion,new T(...xg.radien).multiplyScalar(u.pxProMm)))}return a}function bg(s,{W:e,H:t,spiegel:n=!1,index:i=null,ppm:r=null,achsen:a=null,einzel:o=!1}){let l=Sf(s,n,a),c=Ef(s),h=r||c,f=h*Mf(h,{W:e,H:t,einzel:o},Lc.tiefeOhrMm),u=_g(s,l,h,"L",n,yf,f),d=_g(s,l,h,"R",n,yf,f),p=wf(s,l,h,i,{ohren:[u,d]}),x=p.find(g=>g.typ==="kapsel");return{rahmen:l,ppmRoh:c,anker:{ohrL:u,ohrR:d},verdecker:p,schatten:x&&x.typ==="kapsel"?[cn(x.a,x.b,x.r/.96)]:[],info:{gierGrad:l.gier*180/Math.PI,nickGrad:l.nick*180/Math.PI,perspektive:f/h}}}function Sg(s,e,{W:t,H:n}){return Math.hypot(s[234].x-s[454].x,s[234].y-s[454].y)<.2*Math.min(t,n)?"naeher":null}var Eg={schulterbreiteMm:270,drosselObenMm:24,kinnDrosselMm:42,kinnGewicht:.5,drosselVornMm:55,kinnZug:.5,halsZuKiefer:.47,halsRadiusNormMm:55,halsRadiusGrenzenMm:[44,64],kinnAbstandMinMm:15,drosselVorKopfMm:25},iS=100,sS={sichtbarMin:.5,vorSchulterMm:30,tiefeVorDrosselMm:95,unterarmMm:30,handMinMm:36,daumenMm:11,fingerUeberstandMm:30},rS={schultern:"Etwas mehr Abstand, damit Hals und Schultern zu sehen sind","gesicht-zeigen":"Schau direkt in die Kamera",naeher:"Etwas n\xE4her heran"};function wg(s){return s?{code:s,text:rS[s]}:null}function Tf(s,e,t){if(!s)return!1;let n=.005*Math.min(e,t);for(let i of[11,12]){let r=s.P[i];if((s.sichtbarkeit[i]??1)<.5||r.x<n||r.x>e-n||r.y<n||r.y>t-n)return!1}return!0}function Af(s,e){if(!s.welt)return 0;let t=e?s.welt[12]:s.welt[11],n=e?s.welt[11]:s.welt[12],i=t.clone().sub(n),r=Math.hypot(i.x,i.y);return r>.001?Ht(i.z/r,-2,2):0}function Tg(s,e,t=null){let n=s.P,i=e?n[12]:n[11],r=e?n[11]:n[12],a=i.clone().sub(r);a.z=0;let o=a.length(),l=t??Af(s,e);return{linie:new T(a.x,a.y,l*o),schulterTiefe:l}}function Ag(s,e,t=Eg){return Tg(s,e).linie.length()/t.schulterbreiteMm}function Rg(s,e,{W:t,H:n,spiegel:i=!1,ppm:r=null,index:a=null,einzel:o=!1,schulterTiefe:l=null,kal:c=Eg}){let h=s.P,{linie:f,schulterTiefe:u}=Tg(s,i,l),d=f.length(),p=d/c.schulterbreiteMm,x=e&&e.ppm?e.ppm:p,g=r||x,m=g*Mf(g,{W:t,H:n,einzel:o},Lc.tiefeHalsMm),_=new T(0,0,1).cross(f),y=Xr(f,_),v=h[11].clone().add(h[12]).multiplyScalar(.5),b=Bn(v,y,0,c.drosselObenMm,c.drosselVornMm,g);if(e&&(b.z=e.rahmen.ursprung.z+c.drosselVorKopfMm*g),e){let z=e.P[152],I=Math.abs(e.rahmen.gier)*180/Math.PI,L=c.kinnZug*(1-Bi(I,10,30));b.addScaledVector(y.x,L*z.clone().sub(b).dot(y.x));let N=z.clone().sub(b).dot(y.y)-c.kinnDrosselMm*g;b.addScaledVector(y.y,c.kinnGewicht*N);let D=z.clone().sub(b).dot(y.y),O=c.kinnAbstandMinMm*g;D<O&&b.addScaledVector(y.y,D-O)}let S=c.halsRadiusNormMm;if(e){let z=e.P[172].distanceTo(e.P[397])/m;S=Ht(c.halsZuKiefer*z,c.halsRadiusGrenzenMm[0],c.halsRadiusGrenzenMm[1])}let A=_i(y),M={position:b,quaternion:A,pxProMm:m},{verdecker:w,schatten:R}=aS(b,y,A,m,g,S,e,a),k=oS(s,b,y,m,i,e);return w.push(...k),{anker:M,rahmen:y,ppmRoh:x,halsRadiusMm:S,verdecker:w,schatten:R,info:{schulterMm:d/g,schulterTiefe:u,schulterMitte:v}}}function aS(s,e,t,n,i,r,a,o){let l=r*n,c=Bn(s,e,0,-10,-r,n),h=Bn(s,e,0,120,-r-10,n);if(a){let x=Bn(a.rahmen.ursprung,a.rahmen,0,-50,-40,i);h=h.lerp(x,.5)}let f=[cn(c,h,l*.94)],u=Bn(s,e,0,-200,-95,n),d=new T(190,225,100).multiplyScalar(n);f.push(qr(u,t,d)),a&&f.push(...wf(a.P,a.rahmen,i,o,{mitHals:!1}));let p=[cn(c,h,l),qr(u,t,d)];return{verdecker:f,schatten:p}}function oS(s,e,t,n,i,r,a=sS){let o=s.P,l=d=>s.sichtbarkeit[d]??1,c=[];if(!s.welt)return c;let h=(s.welt[11].z+s.welt[12].z)/2,f=e.z+a.tiefeVorDrosselMm*n,u=r?r.P[152].y:e.y+60*n;for(let[d,p,x,g,m]of[[13,15,17,19,21],[14,16,18,20,22]]){if(l(p)<a.sichtbarMin||Math.min(l(x),l(g))<a.sichtbarMin||s.welt[p].z-h<a.vorSchulterMm||o[p].y>u&&o[x].y>u&&o[g].y>u)continue;let _=M=>new T(M.x,M.y,f),y=_(o[p]),v=_(o[x].clone().add(o[g]).multiplyScalar(.5)),b=v.clone().sub(y),S=b.length();S>.001&&v.addScaledVector(b,a.fingerUeberstandMm*n/S);let A=Math.max(.55*o[x].distanceTo(o[g]),a.handMinMm*n);c.push(cn(y,v,A)),l(m)>=a.sichtbarMin&&c.push(cn(y,_(o[m]),a.daumenMm*n)),l(d)>=a.sichtbarMin&&c.push(cn(_(o[d]),y,a.unterarmMm*n))}return c}function Cg(s,e,{W:t,H:n}){if(!Tf(s,t,n))return"schultern";let i=e.anker.position;return i.x<0||i.x>t||i.y<0||i.y>n||i.y-iS*e.anker.pxProMm<0?"schultern":Math.hypot(s.P[11].x-s.P[12].x,s.P[11].y-s.P[12].y)<.22*Math.min(t,n)?"naeher":null}var zc={ring:["hand"],armband:["hand"],ohrringe:["gesicht"],kette:["gesicht","koerper"]},kg=.3,lS=.25,cS=.1,hS=1,uS=.6,fS=.25,Ig=.1,dS=.35,pS=40,mS=1.2,hn={punkte:{minCutoff:1.6,beta:3,dCutoff:1.5},koerperPunkte:{minCutoff:.35,beta:2,dCutoff:1},koerperRelativ:{minCutoff:.12,beta:1.5,dCutoff:1},koerperDrehung:{minCutoff:.12,beta:.4,dCutoff:1},punkteDrehung:{minCutoff:1.6,beta:1,dCutoff:1.5},position:{minCutoff:2.5,beta:4,dCutoff:1.5},rotation:{minCutoff:1.2,beta:.8,dCutoff:1.5},massstab:{minCutoff:.25,beta:2,dCutoff:1},masse:{minCutoff:.2,beta:1,dCutoff:1},sichtbar:{minCutoff:2,beta:0,dCutoff:1},unterarm:{minCutoff:.6,beta:.4,dCutoff:1}},Pg=.5,gS=10,xS=2.5,_S=4;function vS(s,e,t){let n=0;for(let r=0;r<s.length;r+=3){let a=e[s[r]],o=e[s[r+1]],l=e[s[r+2]];n+=(o.x-a.x)*(l.y-a.y)-(o.y-a.y)*(l.x-a.x)}let i=new Uint16Array(s.length);for(let r=0;r<s.length;r+=3)i[r]=s[r],i[r+1]=s[r+2],i[r+2]=s[r+1];return t&&(n=-n),n>=0?{ccw:s,cw:i}:{ccw:i,cw:s}}var Cf=class{constructor(){this.pos=new bc(hn.position),this.rot=new Qa(hn.rotation),this.ppm=new ti(hn.massstab),this.sicht=new ti(hn.sichtbar),this.blende=new Sc(.25,.3),this.letzter=null}zuruecksetzen(){this.pos.zuruecksetzen(),this.rot.zuruecksetzen(),this.ppm.zuruecksetzen(),this.sicht.zuruecksetzen()}filtere(e,t,n){let i=this.pos.filtere(e.position,t,n).clone(),r=this.rot.filtere(e.quaternion,t).clone(),a=e.pxProMm>0||!this.letzter?Math.exp(this.ppm.filtere(Math.log(Math.max(e.pxProMm,1e-6)),t)):this.letzter.pxProMm,o=e.sichtbar==null?1:e.sichtbar,l=Math.min(1,Math.max(0,this.sicht.filtere(o,t)));return this.letzter={position:i,quaternion:r,pxProMm:a,sichtbarRoh:l},this.letzter}};function Rf(){return{format:null,punkte:{},puffer:{},vektoren:{},anker:{},masse:{},zuletztGefunden:-1/0,zuletztT:null,leitpunkt:null,sprungKandidat:null,haendigkeit:0,letztes:null,hinweisAktiv:null,hinweisKandidat:null,hinweisSeit:0,frontalSeit:null,kopfDrehenGezeigt:0,kopfDrehung:null,takt:0,roh:{},unterarm:null,finger:null}}var Nc=class{constructor(e,{konfig:t,onFortschritt:n}={}){if(!zc[e])throw new Error(`Unbekannte Schmuckart: ${e}`);this.art=e,this.konfig=t||typeof window<"u"&&window.AnprobeKonfig||{},this.onFortschritt=n,this.erkenner=null,this.index=null,this.netz=null,this.schwerkraft=new T(0,-1,0),this.mitPunkten=this.konfig.debug!==!1,this.z=Rf()}async laden(){let e=await uf(zc[this.art],this.konfig,this.onFortschritt);return this.erkenner=e,zc[this.art].includes("gesicht")&&(this.index=vg(e.mp.FaceLandmarker.FACE_LANDMARKS_TESSELATION)),this.art==="ohrringe"&&!this.handZusatzLaden&&this.konfig.handVerdeckung!==!1&&this.konfig.modelle&&this.konfig.modelle.hand&&(this.handZusatzLaden=uf(["hand"],this.konfig).then(t=>{this.handZusatz=t.hand},()=>{})),this}zuruecksetzen(){this.z=Rf()}dispose(){this.erkenner=null,this.z=Rf()}static entladeAlles(){return ig()}verarbeite(e,t,{W:n,H:i,spiegel:r=!1,sparen:a=!1}){if(!this.erkenner)throw new Error("Tracker: zuerst laden()");let o=t==null,l=`${n}x${i}${r?"s":""}`;(o||this.z.format!==l)&&this.zuruecksetzen(),this.z.format=l;let c=o?0:t/1e3,h=o?0:this.z.zuletztT==null?1/30:Math.max(0,c-this.z.zuletztT);this.z.zuletztT=c;let f={};this.z.takt++,this.erkenner.hand&&this.erkenner.hand.setzeHaende&&this.erkenner.hand.setzeHaende(1);for(let p of zc[this.art]){let x=this.z.roh[p];if(!o&&a&&p==="koerper"&&this.z.takt%2===1&&x&&c-x.t>=0&&c-x.t<fS){f[p]=x.e;continue}f[p]=this.erkenner[p].erkenne(e,t),o||(this.z.roh[p]={e:f[p],t:c})}if(this.art==="ohrringe"&&this.handZusatz&&this.handZusatz.task){let p=this.z.roh.hand;o||!p||this.z.takt%(a?4:3)===0?(this.handZusatz.setzeHaende(2),f.hand=this.handZusatz.erkenne(e,t),o||(this.z.roh.hand={e:f.hand,t:c})):c-p.t>=0&&c-p.t<dS&&(f.hand=p.e)}let u={W:n,H:i,spiegel:r,einzel:o,t:c,quelle:e},d=null;return this.art==="ring"||this.art==="armband"?d=this.misseHand(f.hand,u):this.art==="ohrringe"?d=this.misseGesicht(f.gesicht,u,f.hand):d=this.misseKette(f.gesicht,f.koerper,u),this.ergebnisBauen(d,u,h)}rohpunkte(e,t,n){let i=df(t,n.W,n.H,n.spiegel,this.z.puffer[e]);return this.z.puffer[e]=i,i}filterePunkte(e,t,n,i,r=hn.punkte){let a=t;if(!n.einzel){let l=this.z.punkte[e];(!l||l.dim!==t.length)&&(l=this.z.punkte[e]=new Ja(t.length,r)),a=l.filtere(t,n.t,i)}let o=pf(a,this.z.vektoren[e]);return this.z.vektoren[e]=o,o}pruefeSprung(e,t){if(t.einzel)return"ok";let n=this.z,i=t.t-n.zuletztGefunden>kg;if(!n.leitpunkt||i)return n.sprungKandidat=null,"neu";if(Math.hypot(e.x-n.leitpunkt.x,e.y-n.leitpunkt.y)<=lS*t.W)return n.sprungKandidat=null,"ok";let a=n.sprungKandidat;return a&&Math.hypot(e.x-a.x,e.y-a.y)<cS*t.W?(n.sprungKandidat=null,"neu"):(n.sprungKandidat={x:e.x,y:e.y},"verwerfen")}filterNeu(){for(let e of Object.values(this.z.punkte))e.zuruecksetzen();for(let e of Object.values(this.z.anker))e.zuruecksetzen();for(let e of Object.values(this.z.masse))e.zuruecksetzen();this.z.kopfDrehung&&this.z.kopfDrehung.zuruecksetzen()}unterarmWinkel(e,t){this.unterarm||(this.unterarm=new Cc);let n=this.z,i=n.unterarm,r=null;if(!t.einzel&&i&&t.t-i.t>=0&&t.t-i.t<Ig)r=i.roh;else{try{let h=Ac(e);r=this.unterarm.schaetze(t.quelle,e,h,us.quer,t),r&&(r.ppm=h)}catch{r=null}t.einzel||(n.unterarm={t:t.t,roh:r})}if(t.einzel)return{winkel:r?r.winkel*r.guete:0,roh:r};let a=n.masse["arm.winkel"]||(n.masse["arm.winkel"]=new ti(hn.unterarm)),o=a.letzterWert!=null?a.letzterWert:0,l=r?o+(r.winkel-o)*r.guete:o*.9,c=a.filtere(l,t.t);return a.letzterWert=c,{winkel:c,roh:r}}fingerMessung(e,t){this.fingerMesser||(this.fingerMesser=new kc);let n=this.z,i=Ac(e),r=null,a=n.finger;if(!t.einzel&&a&&t.t-a.t>=0&&t.t-a.t<Ig)r=a.roh;else{r={};try{if(this.fingerMesser.lese(t.quelle,e,t.W,t.H,t.spiegel))for(let l of fs){let c=Hi[l],h=.5*c.durchmesserMm*i,f=this.fingerMesser.miss(e[c.ring[0]],e[c.ring[1]],.5,h);f&&(r[l]={f:f.halb/h,v:f.versatz/h,guete:f.guete})}}catch{r={}}t.einzel||(n.finger={t:t.t,roh:r})}let o={};for(let l of fs){let c=r[l];if(t.einzel){c&&c.guete>0&&(o[l]={faktor:c.f,versatz:c.v});continue}let h=n.masse[`finger.${l}.f`]||(n.masse[`finger.${l}.f`]=new ti(hn.unterarm)),f=n.masse[`finger.${l}.v`]||(n.masse[`finger.${l}.v`]=new ti(hn.unterarm)),u=h.letzterWert,d=f.letzterWert!=null?f.letzterWert:0;if(u==null&&!(c&&c.guete>0))continue;let p=u??c.f,x=c?p+(c.f-p)*c.guete:p+(1-p)*.03,g=c?d+(c.v-d)*c.guete:d*.95;h.letzterWert=h.filtere(x,t.t),f.letzterWert=f.filtere(g,t.t),o[l]={faktor:h.letzterWert,versatz:f.letzterWert}}return o}armMessung(e,t){let n=e&&e.arm;if(t.einzel){if(!n)return null;let x=us.quer*e.ppm;return{breite:n.halbBreitePx/x,breiteNah:n.halbBreiteNahPx/x,versatz:n.versatzPx/x}}let i=this.z,r=x=>i.masse[x]||(i.masse[x]=new ti(hn.unterarm)),a=r("arm.breite"),o=r("arm.breiteNah"),l=r("arm.versatz"),c=a.letzterWert!=null?a.letzterWert:1,h=o.letzterWert!=null?o.letzterWert:1,f=l.letzterWert!=null?l.letzterWert:0,u=c+(1-c)*.05,d=h+(1-h)*.05,p=f*.95;if(n){let x=us.quer*e.ppm;u=c+(n.halbBreitePx/x-c)*n.guete,d=h+(n.halbBreiteNahPx/x-h)*n.guete,p=f+(n.versatzPx/x-f)*n.guete}return a.letzterWert=a.filtere(u,t.t),o.letzterWert=o.filtere(d,t.t),l.letzterWert=l.filtere(p,t.t),{breite:a.letzterWert,breiteNah:o.letzterWert,versatz:l.letzterWert}}misseHand(e,t){if(!e||!e.landmarks||!e.landmarks.length)return null;let n=this.rohpunkte("hand",e.landmarks[0],t),i={x:n[0],y:n[1]},r=this.pruefeSprung(i,t);if(r==="verwerfen")return null;r==="neu"&&this.filterNeu();let a=Math.max(1,Math.hypot(n[27]-n[0],n[28]-n[1])),o=this.filterePunkte("hand",n,t,a),l=e.handedness&&e.handedness[0]&&e.handedness[0][0],c=e.worldLandmarks&&e.worldLandmarks[0],h=c&&c.length===21?c.map(y=>new T(t.spiegel?-y.x:y.x,-y.y,-y.z).multiplyScalar(1e3)):null,f=xf(l,o,h,t.spiegel);(t.einzel||t.t-this.z.zuletztGefunden>hS)&&(this.z.haendigkeit=0),this.z.haendigkeit=Lg(this.z.haendigkeit*.95+f,8);let u=this.z.haendigkeit>=0,d=0,p=null;if(this.art==="armband"){let y=this.unterarmWinkel(o,t);d=y.winkel,p=this.armMessung(y.roh,t)}let x=this.art==="ring"?this.fingerMessung(o,t):null,g=_f(o,{W:t.W,H:t.H,spiegel:t.spiegel,rechts:u,armWinkel:d,armMessung:p,fingerMessung:x}),m=this.art==="ring"?Object.fromEntries(fs.map(y=>[`ring.${y}`,g.anker.ring[y]])):{armband:g.anker.armband},_=this.art==="ring"?Object.fromEntries(fs.map(y=>[`fingerRadiusPx.${y}`,g.masse.fingerRadiusPx[y]])):{"handgelenkRadienPx.quer":g.masse.handgelenkRadienPx.quer,"handgelenkRadienPx.tiefe":g.masse.handgelenkRadienPx.tiefe};return{leit:o[0],groesse:a,anker:m,masse:_,verdecker:g.verdecker,schatten:this.art==="ring"?g.schatten.ring:g.schatten.armband,hinweisCode:fg(o,g,{W:t.W,H:t.H,art:this.art}),debug:{punkte2d:this.mitPunkten?o.map(y=>({x:y.x,y:y.y})):[],rechts:u,haendigkeitRoh:l?`${l.categoryName} ${(l.score||0).toFixed(2)}`:null,haendigkeit:+f.toFixed(2),rueckenZurKamera:g.info.rueckenZurKamera,kBreite:g.info.kBreite,armWinkelGrad:Math.round(d*1800/Math.PI)/10,armBreite:p?+p.breite.toFixed(3):null,armInfo:g.info.arm,armBreiteNah:p&&p.breiteNah!=null?+p.breiteNah.toFixed(3):null,armVersatz:p?+p.versatz.toFixed(3):null}}}gesichtsPunkte(e,t,{pruefen:n=!0}={}){if(!e||!e.faceLandmarks||!e.faceLandmarks.length)return null;let i=e.faceLandmarks[0];if(i.length<468)return null;let r=this.rohpunkte("gesicht",i,t);if(n){let f=this.pruefeSprung({x:r[3],y:r[4]},t);if(f==="verwerfen")return null;f==="neu"&&this.filterNeu()}let a=Math.max(1,Math.hypot(r[702]-r[454*3],r[703]-r[454*3+1])),o=this.filterePunkte("gesicht",r,t,a),l=Ef(o),c=this.filtereMass("gesicht.ppm",l,t,hn.massstab);this.index&&!this.netz&&(this.netz=vS(this.index,o,t.spiegel));let h=this.kopfAchsen(e,t);return{P:o,ppm:c,ppmRoh:l,groesse:a,achsen:h}}kopfAchsen(e,t){let n=e.facialTransformationMatrixes&&e.facialTransformationMatrixes[0],i=yg(n&&n.data,t.spiegel);if(!i||t.einzel)return i;this.z.kopfDrehung||(this.z.kopfDrehung=new Qa(hn.punkteDrehung));let r=this.z.kopfDrehung.filtere(_i(i),t.t);return{x:new T(1,0,0).applyQuaternion(r),y:new T(0,1,0).applyQuaternion(r),z:new T(0,0,1).applyQuaternion(r)}}handVerdeckerAmKopf(e,t,n,i){let r=e&&e.landmarks||[],a=[];if(!n.length)return a;let o=-1/0;for(let l of n)o=Math.max(o,l.position.z);return o+=pS*i,r.forEach((l,c)=>{if(!l||l.length!==21)return;let h=pf(df(l,t.W,t.H,t.spiegel)),f=1/0;for(let x of n)for(let g of h)f=Math.min(f,Math.hypot(g.x-x.position.x,g.y-x.position.y));if(f>120*i)return;let u=e.handedness&&e.handedness[c]&&e.handedness[c][0],d=xf(u,h,null,t.spiegel)>=0,p=_f(h,{W:t.W,H:t.H,spiegel:t.spiegel,rechts:d});for(let x of p.verdecker){let g=yS(x,o,mS);g&&a.push(g)}}),a}misseGesicht(e,t,n=null){let i=this.gesichtsPunkte(e,t);if(!i)return null;let r=this.netz?t.spiegel?this.netz.cw:this.netz.ccw:null,a=bg(i.P,{W:t.W,H:t.H,spiegel:t.spiegel,index:r,ppm:i.ppm,achsen:i.achsen,einzel:t.einzel}),o=n?this.handVerdeckerAmKopf(n,t,[a.anker.ohrL,a.anker.ohrR],i.ppm):[],l=Sg(i.P,a.rahmen,t);if(!l&&!t.einzel){let c=Math.abs(a.info.gierGrad)<gS;c?this.z.frontalSeit==null&&(this.z.frontalSeit=t.t):this.z.frontalSeit=null,c&&t.t-this.z.frontalSeit>xS&&this.z.kopfDrehenGezeigt<_S&&(l="kopf-drehen")}return{leit:i.P[1],groesse:i.groesse,anker:{ohrL:a.anker.ohrL,ohrR:a.anker.ohrR},masse:{},verdecker:o.length?[...a.verdecker,...o]:a.verdecker,schatten:a.schatten,hinweisCode:l,debug:{punkte2d:this.mitPunkten?i.P.map(c=>({x:c.x,y:c.y})):[],gierGrad:a.info.gierGrad,nickGrad:a.info.nickGrad,ppmRoh:i.ppmRoh,ohrBezug:{L:a.anker.ohrL.bezug,R:a.anker.ohrR.bezug},handVerdecker:o.length}}}misseKette(e,t,n){let i=t&&t.landmarks&&t.landmarks.length,r=e&&e.faceLandmarks&&e.faceLandmarks.length;if(!i&&!r)return null;if(!i)return{nurHinweis:!0,hinweisCode:"schultern"};let a=t.landmarks[0],o=this.rohpunkte("koerper",a,n),l={x:(o[33]+o[36])/2,y:(o[34]+o[37])/2},c=this.pruefeSprung(l,n);if(c==="verwerfen")return null;c==="neu"&&this.filterNeu();let h=Math.max(1,Math.hypot(o[33]-o[36],o[34]-o[37])),f=null,u=r?this.gesichtsPunkte(e,n,{pruefen:!1}):null;u&&Math.hypot(o[0]-u.P[1].x,o[1]-u.P[1].y)<.6*u.groesse+.1*h&&(f={P:u.P,rahmen:Sf(u.P,n.spiegel,u.achsen),ppm:u.ppm});let d=f?Mg(f.rahmen,f.ppm):null,p=this.filtereKoerper(o,n,h,d),x=t.worldLandmarks&&t.worldLandmarks[0],g=x?x.map(S=>new T(n.spiegel?-S.x:S.x,-S.y,-S.z).multiplyScalar(1e3)):null,m={P:p,welt:g,sichtbarkeit:a.map(S=>S.visibility==null?1:S.visibility)};if(!Tf(m,n.W,n.H))return{nurHinweis:!0,hinweisCode:"schultern"};let _=Af(m,n.spiegel);n.einzel||(this.z.masse["koerper.tiefe"]||(this.z.masse["koerper.tiefe"]=new ti(hn.koerperDrehung)),_=this.z.masse["koerper.tiefe"].filtere(_,n.t)),_=Lg(uS*_,.4);let y=this.netz?n.spiegel?this.netz.cw:this.netz.ccw:null,v=f?null:this.filtereMass("koerper.ppm",Ag(m,n.spiegel),n,hn.massstab),b=Rg(m,f,{W:n.W,H:n.H,spiegel:n.spiegel,ppm:v,index:y,einzel:n.einzel,schulterTiefe:_});return f&&(b.info.schulterMm<170||b.info.schulterMm>450)?{nurHinweis:!0,hinweisCode:"schultern"}:{leit:{x:(p[11].x+p[12].x)/2,y:(p[11].y+p[12].y)/2},groesse:h,anker:{kette:b.anker},masse:{halsRadiusMm:b.halsRadiusMm},verdecker:b.verdecker,schatten:b.schatten,hinweisCode:Cg(m,b,n),debug:{punkte2d:this.mitPunkten?p.map(S=>({x:S.x,y:S.y})):[],gesicht2d:f&&this.mitPunkten?f.P.map(S=>({x:S.x,y:S.y})):null,drosselgrube:b.anker.position.clone(),drehpunkt:d,schulterMitte:{x:(p[11].x+p[12].x)/2,y:(p[11].y+p[12].y)/2},kinn:f?{x:f.P[152].x,y:f.P[152].y}:null,schulterMm:b.info.schulterMm,schulterTiefe:b.info.schulterTiefe}}}filtereKoerper(e,t,n,i){if(t.einzel)return this.filterePunkte("koerper",e,t,n);if(!i)return this.filterePunkte("koerper",e,t,n,hn.koerperPunkte);let r=this.z.puffer.koerperRel;(!r||r.length!==e.length)&&(r=this.z.puffer.koerperRel=new Float64Array(e.length));for(let o=0;o<e.length;o+=3)r[o]=e[o]-i.x,r[o+1]=e[o+1]-i.y,r[o+2]=e[o+2];let a=this.filterePunkte("koerperRel",r,t,n,hn.koerperRelativ);for(let o of a)o.x+=i.x,o.y+=i.y;return a}filtereMass(e,t,n,i,r){let a=t??(r?r():null);if(!(a>0)||n.einzel)return a;let o=this.z.masse[e];return o||(o=this.z.masse[e]=new ti(i)),Math.exp(o.filtere(Math.log(a),n.t))}ergebnisBauen(e,t,n){let i=this.z,r=e&&!e.nurHinweis,a=null;if(r){i.zuletztGefunden=t.t,i.leitpunkt={x:e.leit.x,y:e.leit.y};let f={};for(let[d,p]of Object.entries(e.anker))t.einzel?f[d]={position:p.position.clone(),quaternion:p.quaternion.clone(),pxProMm:p.pxProMm,sichtbarRoh:p.sichtbar==null?1:p.sichtbar}:(i.anker[d]||(i.anker[d]=new Cf),f[d]=i.anker[d].filtere(p,t.t,e.groesse));let u={};for(let[d,p]of Object.entries(e.masse))u[d]=this.filtereMass(`m.${d}`,p,t,hn.masse);i.letztes={anker:f,masse:u,verdecker:e.verdecker,schatten:e.schatten,debug:e.debug},a=e.hinweisCode}else e&&e.nurHinweis&&(a=e.hinweisCode);let o=!r&&!t.einzel&&t.t-i.zuletztGefunden<=kg,l=r||o;!l&&!a&&(a=this.art==="ohrringe"||this.art==="kette"?"gesicht-zeigen":"hand-zeigen"),o&&(a=i.hinweisAktiv);let c={gefunden:l,hinweis:null,anker:{},masse:{},verdecker:[],schattenflaechen:[],schwerkraft:this.schwerkraft.clone(),debug:{punkte2d:[]}},h=i.letztes;if(h){let f=!1;for(let[u,d]of Object.entries(h.anker)){let p=1;if(t.einzel)l||(p=0);else{let m=i.anker[u];p=m?m.blende.schritt(l?1:0,n):0}let x=p*(d.sichtbarRoh==null?1:d.sichtbarRoh);if(p<=0)continue;f=!0;let g={position:d.position.clone(),quaternion:d.quaternion.clone(),pxProMm:d.pxProMm,sichtbar:x};u.startsWith("ring.")?(c.anker.ring=c.anker.ring||{},c.anker.ring[u.slice(5)]=g):c.anker[u]=g}if(f){for(let[u,d]of Object.entries(h.masse)){let[p,x]=u.split(".");x?(c.masse[p]=c.masse[p]||{},c.masse[p][x]=d):c.masse[p]=d}c.verdecker=h.verdecker,c.schattenflaechen=h.schatten||[],c.debug={...h.debug}}}return!r&&c.debug&&(c.debug.gehalten=o),c.hinweis=this.hinweisEntprellen(a,t,n),c}hinweisEntprellen(e,t,n){let i=this.z;if(t.einzel)i.hinweisAktiv=e;else{e!==i.hinweisKandidat&&(i.hinweisKandidat=e,i.hinweisSeit=t.t);let a=e?Pg:Pg*.6;i.hinweisAktiv!==e&&t.t-i.hinweisSeit>=a&&(i.hinweisAktiv=e),i.hinweisAktiv==="kopf-drehen"&&(i.kopfDrehenGezeigt+=n)}let r=i.hinweisAktiv;return r?this.art==="ring"||this.art==="armband"?ug(r):this.art==="ohrringe"?bf(r):wg(r)||bf(r):null}};function yS(s,e,t=1){return s.typ==="kapsel"?{...s,a:s.a.clone().setZ(e),b:s.b.clone().setZ(e),r:s.r*t}:s.typ==="ellipsenzylinder"?{...s,a:s.a.clone().setZ(e),b:s.b.clone().setZ(e),rQuer:s.rQuer*t,rTiefe:s.rTiefe*t}:null}function Lg(s,e){return s>e?e:s<-e?-e:s}var ds=new _e,no=new $e,kf=new T,$r=new T,Vi=new T,zg=new T,Ws=new T,Dc=new T,MS=new T(0,1,0),Kr=null,Fc=null,Uc=0;function bS(){return Kr||(Kr=new gn(1,1,1,24,1,!1),Fc=new zi(1,24,16)),Uc++,{zylinderGeo:Kr,kugelGeo:Fc}}function SS(){Uc--,Uc<=0&&Kr&&(Kr.dispose(),Fc.dispose(),Kr=Fc=null,Uc=0)}function If({doppelseitig:s=!1}={}){let e=new qt({colorWrite:!1,depthWrite:!0,depthTest:!0});return e.side=s?on:On,e.name="verdecker",e}var io=class{constructor(e,{kapazitaet:t=48,name:n="primitive",schatten:i=!1,netzMaterial:r=null,renderOrder:a=0}={}){this.material=e,this.netzMaterial=r||e,this.schatten=i,this.renderOrder=a,this.objekt=new Ue,this.objekt.name=n;let{zylinderGeo:o,kugelGeo:l}=bS();this.zylinderGeo=o,this.kugelGeo=l,this.zylinder=null,this.kugeln=null,this.baueInstanzen(t,t*2),this.netze=[],this.skala=1}baueInstanzen(e,t){for(let n of[this.zylinder,this.kugeln])n&&(this.objekt.remove(n),n.dispose());this.zylinder=this.instanz(this.zylinderGeo,e,"zylinder"),this.kugeln=this.instanz(this.kugelGeo,t,"kugeln")}instanz(e,t,n){let i=new $t(e,this.material,t);return i.name=n,i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(pc),i.receiveShadow=this.schatten,i.castShadow=!1,i.renderOrder=this.renderOrder,this.objekt.add(i),i}netzMesh(e){let t=this.netze[e];if(!t){let n=new tt;t=new Ve(n,this.netzMaterial),t.name=`netz${e}`,t.frustumCulled=!1,t.receiveShadow=this.schatten,t.renderOrder=this.renderOrder,t.userData.index=null,this.netze.push(t),this.objekt.add(t)}return t}aktualisiere(e,t=1){let n=Array.isArray(e)?e:[],i=0,r=0;for(let c of n)c&&(c.typ==="kapsel"?(i++,r+=2):c.typ==="ellipsenzylinder"?i++:c.typ==="ellipsoid"&&r++);(i>this.zylinder.instanceMatrix.count||r>this.kugeln.instanceMatrix.count)&&this.baueInstanzen(Math.max(i,this.zylinder.instanceMatrix.count)*2,Math.max(r,this.kugeln.instanceMatrix.count)*2);let a=0,o=0,l=0;for(let c of n)if(c)switch(c.typ){case"kapsel":{let h=c.r*t;kf.subVectors(c.b,c.a);let f=kf.length();f>1e-6&&(no.setFromUnitVectors(MS,kf.divideScalar(f)),Dc.addVectors(c.a,c.b).multiplyScalar(.5),ds.compose(Dc,no,Ws.set(h,f,h)),this.zylinder.setMatrixAt(a++,ds)),no.identity(),Ws.set(h,h,h),this.kugeln.setMatrixAt(o++,ds.compose(c.a,no,Ws)),this.kugeln.setMatrixAt(o++,ds.compose(c.b,no,Ws));break}case"ellipsenzylinder":{Vi.subVectors(c.b,c.a);let h=Vi.length();if(h<1e-6)break;Vi.divideScalar(h),$r.copy(c.quer).addScaledVector(Vi,-c.quer.dot(Vi)),$r.lengthSq()<1e-10&&$r.set(1,0,0).addScaledVector(Vi,-Vi.x),$r.normalize(),zg.crossVectors($r,Vi),ds.makeBasis($r,Vi,zg).scale(Ws.set(c.rQuer*t,h,c.rTiefe*t)),Dc.addVectors(c.a,c.b).multiplyScalar(.5),ds.setPosition(Dc),this.zylinder.setMatrixAt(a++,ds);break}case"ellipsoid":{Ws.copy(c.radien).multiplyScalar(t),this.kugeln.setMatrixAt(o++,ds.compose(c.mitte,c.quaternion,Ws));break}case"netz":{if(!c.positionen||!c.index)break;let h=this.netzMesh(l++),f=h.geometry,u=f.getAttribute("position");(!u||u.array.length!==c.positionen.length)&&(u=new bt(new Float32Array(c.positionen.length),3),u.setUsage(pc),f.setAttribute("position",u)),u.array.set(c.positionen),u.needsUpdate=!0,h.userData.index!==c.index&&(f.setIndex(new bt(c.index,1)),h.userData.index=c.index),h.visible=!0;break}default:break}this.zylinder.count=a,this.kugeln.count=o,this.zylinder.instanceMatrix.needsUpdate=a>0,this.kugeln.instanceMatrix.needsUpdate=o>0,this.zylinder.visible=a>0,this.kugeln.visible=o>0;for(let c=l;c<this.netze.length;c++)this.netze[c].visible=!1;this.anzahl=a+o+l}leeren(){this.aktualisiere(null)}dispose(){this.zylinder.dispose(),this.kugeln.dispose();for(let e of this.netze)e.geometry.dispose();this.netze.length=0,this.objekt.clear(),this.zylinderGeo&&(this.zylinderGeo=this.kugelGeo=null,SS())}},ES=`
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
`,Ng=new WeakSet,Oc=class{constructor({radiusPx:e=2.5,toleranzPx:t=1.5,tiefenBereich:n=2e4}={}){this.radiusPx=e,this.toleranzPx=t,this.tiefenBereich=n,this.uniforms={verdeckTiefe:{value:null},verdeckParam:{value:new Je(0,e,t/n,0)},verdeckAufloesung:{value:new re(1,1)}},this.ziel=null,this.aktiv=!1}bereite(e,t){if(e=Math.max(1,Math.round(e)),t=Math.max(1,Math.round(t)),this.ziel)(this.ziel.width!==e||this.ziel.height!==t)&&this.ziel.setSize(e,t);else{let n=new Dn(e,t);n.type=_n,this.ziel=new Dt(e,t,{depthBuffer:!0,depthTexture:n,type:Yt,generateMipmaps:!1}),this.ziel.texture.name="verdeckFarbe"}this.uniforms.verdeckTiefe.value=this.ziel.depthTexture,this.uniforms.verdeckAufloesung.value.set(e,t)}setzeAktiv(e){this.aktiv=!!e,this.uniforms.verdeckParam.value.x=this.aktiv?1:0}setzeRadius(e){this.uniforms.verdeckParam.value.y=Math.max(.5,e)}patche(e){if(!e||Ng.has(e))return e;let t=e.onBeforeCompile,n=e.customProgramCacheKey(),i=this.uniforms;return e.onBeforeCompile=function(r,a){t&&t.call(this,r,a),Object.assign(r.uniforms,i);let o=r.fragmentShader;if(!o.includes("#include <tonemapping_fragment>")||!o.includes("void main() {")){console.warn("[render] weiche Verdeckung: Shader-Stelle fehlt in",e.type);return}o=o.replace("void main() {",`${ES}
void main() {`),o=o.replace("#include <tonemapping_fragment>",`gl_FragColor.a *= verdeckSicht();
	#include <tonemapping_fragment>`),r.fragmentShader=o},e.customProgramCacheKey=()=>`${n}|verdeck1`,Ng.add(e),e.needsUpdate=!0,e}dispose(){this.ziel&&(this.ziel.depthTexture.dispose(),this.ziel.dispose(),this.ziel=null),this.uniforms.verdeckTiefe.value=null}};var Bc=class extends Tn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Un;e.deleteAttribute("uv");let t=new Qn({side:Ft}),n=new Qn,i=new Us(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $t(e,n,6),o=new _t;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ve(e,Yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ve(e,Yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ve(e,Yr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Ve(e,Yr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Ve(e,Yr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Ve(e,Yr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Yr(s){return new Ca({color:0,emissive:16777215,emissiveIntensity:s})}var Pf={hoch:{studioGroesse:128,raumGroesse:128,intervall:.5},mittel:{studioGroesse:128,raumGroesse:128,intervall:1},niedrig:{studioGroesse:128,raumGroesse:0,intervall:1/0}},Lf=.26,wS=.85,Dg=.36,TS=`
varying vec3 vRichtung;
void main() {
  vRichtung = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,AS=`
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
`,Hc=class{constructor(e,{qualitaet:t="hoch",mischung:n=.62}={}){this.mischungHell=n,this.renderer=e,this.einstellung=Pf[t]||Pf.hoch,this.pmrem=new Vr(e),this.studio=new Bc,this.studioZiel=this.pmrem.fromScene(this.studio,.04,.1,100,{size:this.einstellung.studioGroesse}),this.raumZiel=null,this.uhr=0,this.faellig=!1,this.kameraAn=this.einstellung.raumGroesse>0,this.lichtFaktor=1,this.lichtFarbe=new Se(1,1,1),this.baueRaumSzene(n)}get textur(){return(this.raumZiel||this.studioZiel).texture}baueRaumSzene(e){this.raumSzene=new Tn,this.karte=null,this.kugelMaterial=new Ut({vertexShader:TS,fragmentShader:AS,uniforms:{karte:{value:null},mischung:{value:e},staerke:{value:1.15},grau:{value:new Se(.55,.55,.55)},boden:{value:new Se(Lf,Lf,Lf)}},side:Ft,depthWrite:!1}),this.kugel=new Ve(new zi(40,32,16),this.kugelMaterial),this.kugel.renderOrder=-1,this.raumSzene.add(this.kugel),this.studio.updateMatrixWorld(!0),this.flaechen=[],this.studio.traverse(t=>{if(!t.isMesh||!t.material||!t.material.isMeshLambertMaterial)return;let n=t.material.emissiveIntensity,i=new qt({color:new Se(n,n,n),toneMapped:!1}),r=new Ve(t.geometry,i);r.matrixAutoUpdate=!1,r.matrix.copy(t.matrixWorld),r.userData.staerke=n,this.raumSzene.add(r),this.flaechen.push(r)})}setzeQualitaet(e){this.einstellung=Pf[e]||this.einstellung,this.setzeKameraAn(this.einstellung.raumGroesse>0),this.faellig=this.kameraAn}setzeKamerabild(e){this.karte&&this.karte.image===e||(this.karte&&this.karte.dispose(),this.karte=e?new Pi(e):null,this.karte&&(this.karte.colorSpace=pt,this.karte.minFilter=it,this.karte.generateMipmaps=!1),this.kugelMaterial.uniforms.karte.value=this.karte)}setzeLicht(e,t){this.lichtFaktor=e,t&&this.lichtFarbe.copy(t)}setzeKameraAn(e){this.kameraAn=!!e&&this.einstellung.raumGroesse>0,!this.kameraAn&&this.raumZiel&&(this.raumZiel.dispose(),this.raumZiel=null)}aktualisiere(e,t=!0){!this.kameraAn||!this.karte||(this.uhr+=e,this.uhr>=this.einstellung.intervall&&t&&(this.faellig=!0))}erzeuge(){if(!this.kameraAn||!this.karte)return!1;this.faellig=!1,this.uhr=0,this.karte.needsUpdate=!0;let e=this.lichtFaktor,t=this.lichtFarbe,n=Math.max(wS,e);for(let c of this.flaechen){let h=c.userData.staerke*n;c.material.color.setRGB(h*(.5+.5*t.r),h*(.5+.5*t.g),h*(.5+.5*t.b))}let i=.5*e,r=this.kugelMaterial.uniforms;r.grau.value.setRGB(i*t.r,i*t.g,i*t.b);let a=Math.min(1,Math.max(0,(e-.6)/.4));r.mischung.value=Dg+(this.mischungHell-Dg)*a;let o=this.pmrem.fromScene(this.raumSzene,0,.1,100,{size:this.einstellung.raumGroesse}),l=this.raumZiel;return this.raumZiel=o,l&&l.dispose(),!0}dispose(){this.raumZiel?.dispose(),this.studioZiel?.dispose(),this.raumZiel=this.studioZiel=null,this.karte?.dispose(),this.kugel.geometry.dispose(),this.kugelMaterial.dispose();for(let e of this.flaechen)e.material.dispose();this.flaechen.length=0,this.studio.dispose(),this.pmrem.dispose()}};var zf=.2126,Nf=.7152,Df=.0722,Ug=.16,Gc=new Float32Array(256);for(let s=0;s<256;s++){let e=s/255;Gc[s]=e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Bg(s,e){if(typeof document<"u"){let t=document.createElement("canvas");return t.width=s,t.height=e,t}return new OffscreenCanvas(s,e)}var Xc=class{constructor({breite:e=32,intervallSek:t=.2,tau:n=.9}={}){this.breite=e,this.hoehe=Math.round(e*.75),this.intervall=t,this.tau=n,this.canvas=Bg(this.breite,this.hoehe),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0,alpha:!1}),this.quelle=null,this.spiegel=!1,this.uhr=1/0,this.gemessen=!1,this.fehler=!1,this.luminanz=Ug,this.faktor=1,this.farbe=new Se(1,1,1),this.version=0,this._roh=new Se}setzeQuelle(e,{W:t,H:n,spiegel:i=!1}={}){this.quelle=e,this.spiegel=!!i;let r=t||e?.videoWidth||e?.width||4,a=n||e?.videoHeight||e?.height||3,o=Math.max(8,Math.round(this.breite*a/r));o!==this.hoehe&&(this.hoehe=o,this.canvas.height=o),this.uhr=1/0,this.gemessen=!1,this.fehler=!1}aktualisiere(e){if(!this.quelle||this.fehler)return!1;if(this.uhr+=e,this.uhr<this.intervall)return this.glaette(e),!1;let t=Number.isFinite(this.uhr)?this.uhr:0;return this.uhr=0,this.messe()?(this.glaette(t,!0),this.version++,!0):!1}messe(){let e=this.quelle;if(e.readyState!==void 0&&e.readyState<2)return!1;let{ctx:t,breite:n,hoehe:i}=this;try{t.setTransform(this.spiegel?-1:1,0,0,1,this.spiegel?n:0,0),t.drawImage(e,0,0,n,i),t.setTransform(1,0,0,1,0,0);let r=t.getImageData(0,0,n,i).data,a=0,o=0,l=0,c=0;for(let h=0,f=r.length;h<f;h+=4){let u=Gc[r[h]],d=Gc[r[h+1]],p=Gc[r[h+2]],g=zf*u+Nf*d+Df*p>.8?.3:1;a+=u*g,o+=d*g,l+=p*g,c+=g}return a/=c,o/=c,l/=c,this._roh.setRGB(a,o,l),this.gemessen=!0,!0}catch{return this.fehler=!0,!1}}glaette(e,t=!1){if(!this.gemessen)return;let n=this._roh,i=Math.max(1e-4,zf*n.r+Nf*n.g+Df*n.b),r=this.version===0&&t?1:1-Math.exp(-e/this.tau);this.luminanz+=(i-this.luminanz)*r;let a=Math.min(1.35,Math.max(.45,Math.pow(this.luminanz/Ug,.45)));this.faktor+=(a-this.faktor)*r;let o=.5+.5*n.r/i,l=.5+.5*n.g/i,c=.5+.5*n.b/i,h=zf*o+Nf*l+Df*c;this.farbe.r+=(Math.min(1.6,o/h)-this.farbe.r)*r,this.farbe.g+=(Math.min(1.6,l/h)-this.farbe.g)*r,this.farbe.b+=(Math.min(1.6,c/h)-this.farbe.b)*r}dispose(){this.quelle=null,this.canvas.width=this.canvas.height=1}},Fg=2.5,RS=`
uniform mat4 kontaktMatrix;
varying vec4 vKontakt;
`,CS=`
vec4 kontaktWelt = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
kontaktWelt = instanceMatrix * kontaktWelt;
#endif
vKontakt = kontaktMatrix * (modelMatrix * kontaktWelt);
`,kS=`
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
`,IS=new T,PS=new _e().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),qc=class{constructor({maxGroesse:e=1024,richtung:t=new T(-.22,.55,.8),staerke:n=.8,taps:i=12}={}){this.maxGroesse=e,this.richtung=t.clone().normalize(),this.grundStaerke=n,this.taps=i,this.licht=new Fs(16777215,n),this.licht.name="kontaktlicht",this.licht.castShadow=!1,this.kamera=new Fn(-1,1,1,-1,1,100),this.groesse=256;let r=new Dn(this.groesse,this.groesse);r.type=_n,this.ziel=new Dt(this.groesse,this.groesse,{depthBuffer:!0,depthTexture:r,generateMipmaps:!1}),this.tiefenMaterial=new qt({colorWrite:!1,side:on}),this.uniforms={kontaktTiefe:{value:r},kontaktMatrix:{value:new _e},kontaktParam:{value:new Je(1/this.groesse,Fg,100,6)},kontaktAktiv:{value:0}},this.weichMm=1.1,this.abklingMm=2.2,this.aktiv=!1,this.materialien=[]}fuegeHinzu(e){e.add(this.licht),e.add(this.licht.target)}setzeAktiv(e){this.aktiv=!!e,this.uniforms.kontaktAktiv.value=this.aktiv?1:0}material({farbe:e=2365198,deckkraft:t=.42}={}){let n=new qt({color:e,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1});n.name="schattenflaeche",n.userData.grundDeckkraft=t;let i=this.uniforms,r=this.taps;return n.onBeforeCompile=a=>{Object.assign(a.uniforms,i),a.vertexShader=a.vertexShader.replace("void main() {",`${RS}
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
${CS}`),a.fragmentShader=a.fragmentShader.replace("void main() {",`#define KONTAKT_TAPS ${r}
${kS}
void main() {`).replace("#include <tonemapping_fragment>",`gl_FragColor.a *= kontaktSchatten();
	#include <tonemapping_fragment>`)},n.customProgramCacheKey=()=>`kontakt-${r}`,this.materialien.push(n),n}setzeBereich(e,t,n){let i=Math.max(4,t*1.1),r=i*2+10,a=this.kamera;a.position.copy(e).addScaledVector(this.richtung,r),a.up.set(0,1,0),a.lookAt(IS.copy(e)),a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=1,a.far=r+i*4,a.updateProjectionMatrix(),a.updateMatrixWorld(),this.uniforms.kontaktMatrix.value.multiplyMatrices(PS,a.projectionMatrix).multiply(a.matrixWorldInverse);let o=Math.max(.75,this.weichMm*n),l=2*i*Fg/o;if(l>this.groesse*1.45||l<this.groesse/1.45){let h=64;for(;h<l&&h<this.maxGroesse;)h*=2;h!==this.groesse&&(this.groesse=h,this.ziel.setSize(h,h))}let c=this.uniforms.kontaktParam.value;c.x=1/this.groesse,c.y=Math.min(8,Math.max(1,o*this.groesse/(2*i))),c.z=a.far-a.near,c.w=Math.max(1,this.abklingMm*n),this.licht.position.copy(e).addScaledVector(this.richtung,r),this.licht.target.position.copy(e),this.licht.target.updateMatrixWorld(),this.licht.updateMatrixWorld()}zeichne(e,t,n,i){if(!this.aktiv)return;n();let r=t.overrideMaterial;t.overrideMaterial=this.tiefenMaterial,e.setRenderTarget(this.ziel),e.clear(!0,!0,!1),e.render(t,this.kamera),e.setRenderTarget(null),t.overrideMaterial=r,i()}setzeLicht(e,t){this.licht.intensity=this.grundStaerke*e,t&&this.licht.color.copy(t)}dispose(){this.ziel.depthTexture.dispose(),this.ziel.dispose(),this.tiefenMaterial.dispose();for(let e of this.materialien)e.dispose();this.materialien.length=0,this.licht.dispose(),this.licht.removeFromParent(),this.licht.target.removeFromParent()}},ps=null,Wc=0;function LS(){if(Wc++,ps)return ps;let s=64,e=Bg(s,s),t=e.getContext("2d"),n=t.createImageData(s,s);for(let i=0;i<s;i++)for(let r=0;r<s;r++){let a=(r+.5)/s*2-1,o=(i+.5)/s*2-1,l=Math.hypot(a,o),c=Math.exp(-l*l*60),h=Math.exp(-l*l*9)*.35,f=(m,_)=>Math.exp(-(_*_)*900)*Math.pow(Math.max(0,1-Math.abs(m)),2.2),u=(a+o)*.7071,d=(a-o)*.7071,p=f(a,o)+f(o,a)+.35*(f(u,d)+f(d,u)),x=Math.min(1,c+h+p*.9),g=(i*s+r)*4;n.data[g]=255,n.data[g+1]=255,n.data[g+2]=255,n.data[g+3]=Math.round(x*255)}return t.putImageData(n,0,0),ps=new Pi(e),ps.colorSpace=pt,ps}function zS(){Wc--,Wc<=0&&ps&&(ps.dispose(),ps=null,Wc=0)}var Vc=new T,Og=new _e,$c=class{constructor({anzahl:e=5,patch:t=null}={}){this.objekt=new Ue,this.objekt.name="funkeln",this.funken=[];let n=LS();for(let i=0;i<e;i++){let r=new Er({map:n,color:new Se(1,.97,.9),transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,blending:Ua,toneMapped:!1});t&&t(r);let a=new ya(r);a.visible=!1,a.renderOrder=20,a.frustumCulled=!1,this.objekt.add(a),this.funken.push({sprite:a,t:0,dauer:.2,groesse:1,quelle:null,punkt:new T,instanz:-1})}this.quellen=[],this.aktiv=!0}setzeQuellen(e){this.quellen=e||[];for(let t of this.funken)t.sprite.visible=!1,t.quelle=null}aktualisiere(e,t=0){if(!this.aktiv||this.quellen.length===0){for(let i of this.funken)i.sprite.visible=!1;return}let n=(.18+1.8*Math.min(1,t))*Math.min(6,this.quellen.length);Math.random()<n*e&&this.entzuende(this.frei());for(let i of this.funken){if(!i.quelle)continue;i.t+=e;let r=i.quelle,a=r.deckkraft?r.deckkraft():1;if(i.t>=i.dauer||a<.05||!r.mesh.visible){i.quelle=null,i.sprite.visible=!1;continue}let o=i.t/i.dauer,l=Math.pow(Math.sin(Math.PI*o),2);Vc.copy(i.punkt),i.instanz>=0&&r.mesh.isInstancedMesh&&(r.mesh.getMatrixAt(i.instanz,Og),Vc.applyMatrix4(Og)),Vc.applyMatrix4(r.mesh.matrixWorld);let c=r.mesh.matrixWorld.getMaxScaleOnAxis()*r.radius;i.sprite.position.copy(Vc),i.sprite.position.z+=c*.6;let h=c*i.groesse*(.75+.25*l);i.sprite.scale.set(h,h,1),i.sprite.material.opacity=l*.85*a,i.sprite.visible=!0}}frei(){for(let e of this.funken)if(!e.quelle)return e;return null}entzuende(e){if(!e)return;let t=this.quellen[Math.floor(Math.random()*this.quellen.length)];if(!t||!t.mesh.visible||t.deckkraft&&t.deckkraft()<.5)return;let n=t.mesh.geometry.getAttribute("position");if(!n)return;let i=0,r=-1/0;for(let a=0;a<3;a++){let o=Math.floor(Math.random()*n.count),l=n.getY(o)+n.getZ(o);l>r&&(r=l,i=o)}e.punkt.fromBufferAttribute(n,i),e.instanz=t.mesh.isInstancedMesh?Math.floor(Math.random()*t.mesh.count):-1,e.quelle=t,e.t=0,e.dauer=.16+Math.random()*.14,e.groesse=1.6+Math.random()*1.4,e.sprite.material.rotation=Math.random()*Math.PI*.5}dispose(){for(let e of this.funken)e.sprite.material.dispose();this.funken.length=0,this.objekt.clear(),this.objekt.removeFromParent(),zS()}};var NS=9810,Kc=Math.PI/180,Uf={ohrringe:{schwerkraft:1,rueckstell:0,daempfung:3.2,maxWinkel:80*Kc,traegheit:1},kette:{schwerkraft:.3,rueckstell:650,daempfung:22,maxWinkel:16*Kc,traegheit:.35},armband:{schwerkraft:1,rueckstell:8,daempfung:4,maxWinkel:160*Kc,traegheit:.9},ring:{schwerkraft:1,rueckstell:60,daempfung:4,maxWinkel:50*Kc,traegheit:.8}},Wg=1/120,Yc=new T,Zc=new T,eh=new T,Xs=new T,so=new T,Gi=new T,Hg=new T,DS=new T,Vg=new $e,jc=new T,Jc=new T,Qc=new T;function US(s,e,t,n){let i=s.elements;e.set(i[0],i[1],i[2]).normalize(),t.set(i[4],i[5],i[6]).normalize(),n.set(i[8],i[9],i[10]).normalize()}function Gg(s,e,t,n,i){return i.set(e.x*s.x+t.x*s.y+n.x*s.z,e.y*s.x+t.y*s.y+n.y*s.z,e.z*s.x+t.z*s.y+n.z*s.z)}function FS(s,e,t,n,i){return i.set(e.dot(s),t.dot(s),n.dot(s))}var Ff=class{constructor({tau:e=.07,maxMm:t=4e4}={}){this.tau=e,this.maxMm=t,this.a=new T,this.v=new T,this.p=new T,this.bereit=0}zuruecksetzen(){this.bereit=0,this.a.set(0,0,0),this.v.set(0,0,0)}messe(e,t,n){if(!(n>1e-4)||n>.25||!(t>0))return n>.25&&this.zuruecksetzen(),e&&this.p.copy(e),this.a;if(Yc.subVectors(e,this.p).divideScalar(t*n),this.p.copy(e),this.bereit===0)return this.bereit=1,this.v.set(0,0,0),this.a;if(this.bereit===1)return this.bereit=2,this.v.copy(Yc),this.a;Zc.subVectors(Yc,this.v).divideScalar(n),this.v.copy(Yc);let i=Zc.length();i>this.maxMm&&Zc.multiplyScalar(this.maxMm/i);let r=1-Math.exp(-n/this.tau);return this.a.lerp(Zc,r),this.a}},Of=class{constructor({knoten:e,laengeMm:t=20,achse:n="frei"},i=Uf.ohrringe){this.knoten=e,this.laenge=Math.max(2,t||20),this.profil=i,this.q0=e.quaternion.clone(),this.ruheLokal=new T(0,-1,0).applyQuaternion(this.q0).normalize(),this.achseLokal=n==="x"?new T(1,0,0).applyQuaternion(this.q0):n==="z"?new T(0,0,1).applyQuaternion(this.q0):null,this.u=new T(0,-1,0),this.w=new T,this.bereit=!1}zuruecksetzen(){this.bereit=!1,this.w.set(0,0,0),this.knoten.quaternion.copy(this.q0)}begrenze(e){let t=this.profil.maxWinkel,n=this.u.dot(e);if(n>=Math.cos(t))return;Gi.copy(this.u).addScaledVector(e,-n),Gi.lengthSq()<1e-10&&Gi.set(1,0,0).addScaledVector(e,-e.x),Gi.normalize(),this.u.copy(e).multiplyScalar(Math.cos(t)).addScaledVector(Gi,Math.sin(t)).normalize();let i=this.w.dot(Gi);i>0&&this.w.addScaledVector(Gi,-i),this.w.addScaledVector(this.u,-this.w.dot(this.u))}schritt(e,t,n){let i=this.knoten.parent;if(!i)return;let r=this.profil;US(i.matrixWorld,jc,Jc,Qc),Gg(this.ruheLokal,jc,Jc,Qc,Xs).normalize();let a=this.achseLokal?Gg(this.achseLokal,jc,Jc,Qc,DS).normalize():null,o=NS*r.schwerkraft,l=this.laenge;if(!this.bereit)this.u.copy(t).multiplyScalar(o).addScaledVector(Xs,r.rueckstell*l),this.u.lengthSq()<1e-8&&this.u.copy(Xs),this.u.normalize(),a&&this.u.addScaledVector(a,-this.u.dot(a)).normalize(),this.w.set(0,0,0),this.begrenze(Xs),this.bereit=!0;else{let c=Math.min(8,Math.max(1,Math.ceil(e/Wg))),h=e/c,f=Math.exp(-r.daempfung*h);for(let u=0;u<c;u++)so.copy(t).multiplyScalar(o).addScaledVector(n,-r.traegheit),r.rueckstell>0&&so.addScaledVector(eh.subVectors(Xs,this.u),r.rueckstell*l),so.addScaledVector(this.u,-so.dot(this.u)),this.w.addScaledVector(so,h).multiplyScalar(f),Gi.copy(this.u).multiplyScalar(l).addScaledVector(this.w,h),this.u.copy(Gi).normalize(),a&&(this.u.addScaledVector(a,-this.u.dot(a)),this.u.lengthSq()<1e-10&&this.u.copy(Xs),this.u.normalize(),this.w.addScaledVector(a,-this.w.dot(a))),this.w.addScaledVector(this.u,-this.w.dot(this.u)),this.begrenze(Xs)}FS(this.u,jc,Jc,Qc,Hg).normalize(),Vg.setFromUnitVectors(this.ruheLokal,Hg),this.knoten.quaternion.multiplyQuaternions(Vg,this.q0)}},th=class{constructor(e,t="ohrringe"){let n=Uf[t]||Uf.ohrringe;this.pendel=(e||[]).filter(i=>i&&i.knoten).map(i=>new Of(i,n)),this.bewegung=new Ff}get leer(){return this.pendel.length===0}zuruecksetzen(){this.bewegung.zuruecksetzen();for(let e of this.pendel)e.zuruecksetzen()}aktualisiere(e,t,n,i){let r=this.bewegung.messe(t,n,e);if(this.pendel.length===0||!(e>0))return;let a=Math.min(e,.1);for(let o of this.pendel)o.schritt(a,i,r),o.knoten.updateMatrixWorld(!0)}dispose(){for(let e of this.pendel)e.knoten.quaternion.copy(e.q0);this.pendel.length=0}},nh=class{constructor(e=14,t=.8){this.omega=e,this.zeta=t,this.x=new T,this.v=new T,this.bereit=!1}setze(e){this.x.copy(e),this.v.set(0,0,0),this.bereit=!0}schritt(e,t,n=null){if(!this.bereit)return this.setze(e),this.x;let i=Math.min(8,Math.max(1,Math.ceil(t/Wg))),r=t/i,a=this.omega*this.omega,o=2*this.zeta*this.omega;for(let l=0;l<i;l++)eh.subVectors(e,this.x).multiplyScalar(a).addScaledVector(this.v,-o),n&&eh.add(n),this.v.addScaledVector(eh,r),this.x.addScaledVector(this.v,r);return this.x}};var It=64,ih=3,sh=.5,OS=1.5,BS=6,HS=1,Xg=.65,VS=.8,GS=2.5,WS=4,XS=.35;function qS(s,e){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(s,e);let t=document.createElement("canvas");return t.width=s,t.height=e,t}function qg(s,e){let t=0,n=0;for(let i=ih;i<e-ih;i++){let r=i*e;for(let a=ih;a<e-ih;a++){let o=r+a,l=(s[o+1]-s[o-1])*.5,c=(s[o+e]-s[o-e])*.5;t+=l*l+c*c,n++}}return n?t/n:0}function $S(s,e,t,n){for(let i=0;i<e;i++){let r=i*e;for(let a=2;a<e-2;a++){let o=r+a;t[o]=(s[o-2]+4*s[o-1]+6*s[o]+4*s[o+1]+s[o+2])*.0625}t[r]=s[r],t[r+1]=s[r+1],t[r+e-2]=s[r+e-2],t[r+e-1]=s[r+e-1]}for(let i=2;i<e-2;i++)for(let r=0;r<e;r++){let a=i*e+r;n[a]=(t[a-2*e]+4*t[a-e]+6*t[a]+4*t[a+e]+t[a+2*e])*.0625}}function KS(s,e,t){let n=qg(s,e);if(!(n>=BS))return null;let i=t?.tmp||new Float32Array(e*e),r=t?.b||new Float32Array(e*e);$S(s,e,i,r);let a=Math.min(.97,Math.max(.05,qg(r,e)/n));return HS*a/Math.sqrt(1-a*a)}var rh=class{constructor(){this.canvas=null,this.ctx=null,this.L=new Float32Array(It*It),this.puffer={tmp:new Float32Array(It*It),b:new Float32Array(It*It)},this.uhr=sh,this.sigma=null,this.roh=null,this.fehler=0}zuruecksetzen(){this.uhr=sh,this.sigma=null,this.roh=null}aktualisiere(e,t,n,i,r=!1){if(!e||!e.element||this.fehler>3)return this.sigma;if(this.uhr+=i,!r&&this.uhr<sh)return this.sigma;this.uhr=0;let{element:a,W:o,H:l,spiegel:c}=e;if(!(o>It&&l>It))return this.sigma;try{this.ctx||(this.canvas=qS(It,It),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0,alpha:!1}));let h=Math.round(Math.min(o-It,Math.max(0,(c?o-t:t)-It/2))),f=Math.round(Math.min(l-It,Math.max(0,l-n-It/2)));this.ctx.drawImage(a,h,f,It,It,0,0,It,It);let u=this.ctx.getImageData(0,0,It,It).data,d=this.L;for(let x=0,g=0;x<d.length;x++,g+=4)d[x]=.299*u[g]+.587*u[g+1]+.114*u[g+2];let p=KS(d,It,this.puffer);this.roh=p,p!=null&&(this.sigma==null||r?this.sigma=p:this.sigma+=(p-this.sigma)*(1-Math.exp(-sh/OS)))}catch{this.fehler++}return this.sigma}geraeteSigma(e){if(this.sigma==null||!(e>0))return 0;let t=this.sigma,n=Math.min(GS,VS*Math.sqrt(Math.max(0,t*t-Xg*Xg))),i=Math.min(WS,n*e);return i>=XS?i:0}dispose(){this.ctx=null,this.canvas=null}},ah=16,YS=(()=>{let s=[];for(let e=0;e<ah;e++){let t=Math.sqrt((e+.5)/ah),n=e*2.39996323;s.push(new re(t*Math.cos(n),t*Math.sin(n)))}return s})(),ZS=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,jS=`
uniform sampler2D karte;
uniform vec2 aufloesung;
uniform float sigma;
uniform vec2 spirale[${ah}];
void main() {
  vec2 uv = gl_FragCoord.xy / aufloesung;
  vec4 s = texture2D(karte, uv);
  if (sigma > 0.0) {
    float radius = 2.2 * sigma;
    float k = -0.5 / (sigma * sigma);
    float summe = 1.0;
    for (int i = 0; i < ${ah}; i++) {
      vec2 o = spirale[i] * radius;
      float w = exp(dot(o, o) * k);
      s += texture2D(karte, uv + o / aufloesung) * w;
      summe += w;
    }
    s /= summe;
  }
  float a = s.a;
  if (a < 0.002) discard;
  gl_FragColor = vec4(s.rgb / a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = vec4(gl_FragColor.rgb * a, a);
}`,oh=class{constructor(e,{samples:t=4}={}){let n=e.extensions,i=!1;try{i=!!(n&&(n.has("EXT_color_buffer_float")||n.has("EXT_color_buffer_half_float")))}catch{i=!1}this.halbfloat=i,this.samples=t,this.ziel=null,this.uniforms={karte:{value:null},aufloesung:{value:new re(1,1)},sigma:{value:0},spirale:{value:YS}},this.material=new Ut({name:"schmuck-komposit",vertexShader:ZS,fragmentShader:jS,uniforms:this.uniforms,transparent:!0,premultipliedAlpha:!0,blending:as,depthTest:!1,depthWrite:!1,toneMapped:!0}),this.flaeche=new Ve(new Li(1,1),this.material),this.flaeche.frustumCulled=!1,this.szene=new Tn,this.szene.add(this.flaeche)}bereite(e,t,n=this.samples){return e=Math.max(1,Math.round(e)),t=Math.max(1,Math.round(t)),this.ziel&&this.ziel.samples!==n&&(this.ziel.dispose(),this.ziel=null),this.ziel?(this.ziel.width!==e||this.ziel.height!==t)&&this.ziel.setSize(e,t):(this.ziel=new Dt(e,t,{type:this.halbfloat?Cn:Yt,colorSpace:this.halbfloat?yn:pt,samples:n,depthBuffer:!0,generateMipmaps:!1,minFilter:it,magFilter:it}),this.ziel.texture.name="schmuck"),this.uniforms.karte.value=this.ziel.texture,this.uniforms.aufloesung.value.set(e,t),this.ziel}setzeBereich(e,t,n,i,r){this.flaeche.position.set(e,t,r),this.flaeche.scale.set(Math.max(1,2*n),Math.max(1,2*i),1)}dispose(){this.ziel?.dispose(),this.ziel=null,this.flaeche.geometry.dispose(),this.material.dispose(),this.szene.clear()}};var ro={hoch:{pixelRatioMax:2,schatten:1024,weich:!0,funkeln:!0,umgebung:"hoch"},mittel:{pixelRatioMax:1.5,schatten:512,weich:!1,funkeln:!1,umgebung:"mittel"},niedrig:{pixelRatioMax:1.25,schatten:0,weich:!1,funkeln:!1,umgebung:"niedrig"}},JS=1e4,QS=.55,eE=9,$g=[.25,.3],Kg=1.05,Yg=.88,tE=9,Zg=1,jg=2e4,nE=-9e3,iE=.35,sE=.25,rE=.12,aE=.22,Jg=32e5,oE=1.6,Qg=55,lE=`
uniform vec4 uvTrafo;
varying vec2 vUv;
void main() {
  vUv = uv * uvTrafo.xy + uvTrafo.zw;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,cE=`
uniform sampler2D karte;
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(texture2D(karte, vUv).rgb, 1.0);
}
`,Bf=new _e,e0=new _e,un=new T,Wi=new T,t0=new T,qs=new T,Hf=new $e,ms=new T,Vf=new re,hE=new T(0,-1,0),Zr=24,s0=new Float32Array(Zr),r0=new Float32Array(Zr);for(let s=0;s<Zr;s++)s0[s]=Math.cos(s/Zr*Math.PI*2),r0[s]=Math.sin(s/Zr*Math.PI*2);var gs=(s,e,t)=>Math.min(t,Math.max(e,s)),Gf=s=>s*s*(3-2*s);function uE(s,e,t){return Gf(gs((t-s)/(e-s),0,1))}function n0(s,e){let t=[],n=e;for(;n&&n!==s;){if(!n.parent)return null;t.unshift(n.parent.children.indexOf(n)),n=n.parent}return n===s?t:null}function i0(s,e){let t=s;for(let n of e)t=t&&t.children[n];return t||null}function fE(s,e,t,n,i,r,a){for(let o=0;o<Zr;o++){let l=(s*s0[o]-a*i)/t,c=(e*r0[o]-a*r)/n;if(l*l+c*c>1)return!1}return!0}var lh=class{constructor(e,{pixelRatio:t,qualitaet:n="hoch",tonemapping:i="aces",schaerfeAngleich:r=!0}={}){this.canvas=e,this.qualitaetName=ro[n]?n:"hoch",this.q=ro[this.qualitaetName],this.weichMoeglich=this.q.weich;let a={alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"},o=new _c({canvas:e,antialias:!r,...a}),l=t??(typeof window<"u"?window.devicePixelRatio:1)??1;this.pixelRatioWunsch=l||1,this.pixelRatio=Math.min(this.pixelRatioWunsch,this.q.pixelRatioMax,2),o.setPixelRatio(this.pixelRatio),o.outputColorSpace=pt,o.toneMapping=i==="agx"?os:Fa,this.belichtungBasis=i==="agx"?1.35:1,o.toneMappingExposure=this.belichtungBasis,o.autoClear=!1,o.setClearColor(0,0),o.shadowMap.enabled=!1,this.renderer=o,this.verloren=!1,this.onKontextVerlust=null,this.beiKontextVerlust=c=>{c.preventDefault(),!this.entsorgt&&(this.verloren=!0,typeof this.onKontextVerlust=="function"&&this.onKontextVerlust())},e.addEventListener("webglcontextlost",this.beiKontextVerlust),this.kamera=new Fn(0,1,1,0,Zg,jg),this.kamera.position.set(0,0,JS),this.kamera.updateMatrixWorld(),this.szeneHintergrund=new Tn,this.szeneVerdecker=new Tn,this.szene=new Tn,this.hgMaterial=new Ut({vertexShader:lE,fragmentShader:cE,uniforms:{karte:{value:null},uvTrafo:{value:new Je(1,1,0,0)}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.hintergrund=new Ve(new Li(1,1),this.hgMaterial),this.hintergrund.frustumCulled=!1,this.hintergrund.visible=!1,this.szeneHintergrund.add(this.hintergrund),this.hgTextur=null,this.weich=new Oc({tiefenBereich:jg-Zg}),this.verdecker=new io(If(),{name:"verdecker",netzMaterial:If({doppelseitig:!0})}),this.szeneVerdecker.add(this.verdecker.objekt),this.verdeckerSkala=1,this.umgebung=new Hc(o,{qualitaet:this.q.umgebung}),this.szene.environment=this.umgebung.textur,this.licht=new Xc,this.umgebung.setzeKamerabild(this.licht.canvas),this.schatten=new qc({maxGroesse:this.q.schatten||256,taps:this.q.weich?12:8}),this.schatten.fuegeHinzu(this.szene),this.empfaengerMaterial=this.schatten.material(),this.empfaenger=new io(this.empfaengerMaterial,{name:"schattenflaechen",renderOrder:5}),this.weichMoeglich&&this.weich.patche(this.empfaengerMaterial),this.szene.add(this.empfaenger.objekt),this.versteckeFuerSchatten=()=>{this.empfaenger.objekt.visible=!1,this.funkeln.objekt.visible=!1},this.zeigeNachSchatten=()=>{this.empfaenger.objekt.visible=!0,this.funkeln.objekt.visible=!0},this.lichtVersion=-1,this.belichtungZiel=this.belichtungBasis,this.schaerfe=new rh,this.wz=r?new oh(o):null,this.wzBereich={aktiv:!1,x:0,y:0,r:0},this.wzSigma=0,this.funkeln=new $c({patch:this.weichMoeglich?c=>this.weich.patche(c):null}),this.funkeln.aktiv=this.q.funkeln,this.szene.add(this.funkeln.objekt),this.eintraege=[],this.finger="ring",this.anpassung={skala:1,versatz:new T},this.schwerkraft=new T(0,-1,0),this.quelle=null,this.ansicht={breite:e.clientWidth||e.width||1,hoehe:e.clientHeight||e.height||1,modus:"cover"},this.sicht={links:0,rechts:1,unten:0,oben:1,cssProPx:1},this.fokus=null,this.letztesDt=1/30,this.entsorgt=!1,this.setzeAnsicht(this.ansicht.breite,this.ansicht.hoehe,"cover")}setzeQuelle(e,{W:t,H:n,spiegel:i=!1,statisch:r=!1}={}){if(this.hgTextur&&(this.hgTextur.dispose(),this.hgTextur=null),!e){this.quelle=null,this.hintergrund.visible=!1;return}let a=typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement,o=typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas,l=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,c;a?c=new Ta(e):o?c=new Pi(e):(c=new Et(e),c.needsUpdate=!0),c.colorSpace=yn,c.minFilter=it,c.magFilter=it,c.generateMipmaps=!1,l&&(c.flipY=!1),this.hgTextur=c,t=t||e.videoWidth||e.naturalWidth||e.width,n=n||e.videoHeight||e.naturalHeight||e.height,this.quelle={element:e,W:t,H:n,spiegel:!!i,art:a?"video":o?"canvas":"bild",statisch:!!r};let h=this.hgMaterial.uniforms;h.karte.value=c,h.uvTrafo.value.set(i?-1:1,l?-1:1,i?1:0,l?1:0),this.hintergrund.scale.set(t,n,1),this.hintergrund.position.set(t/2,n/2,nE),this.hintergrund.visible=!0,this.licht.setzeQuelle(e,{W:t,H:n,spiegel:i}),this.schaerfe.zuruecksetzen();for(let f of this.eintraege)for(let u of f.instanzen)u.pendel.zuruecksetzen();this.aktualisiereKamera()}setzeAnsicht(e,t,n="cover"){let i=Math.max(1,Math.round(e)),r=Math.max(1,Math.round(t));this.ansicht={breite:i,hoehe:r,modus:n==="contain"?"contain":"cover"},this.renderer.setSize(i,r,!0),this.aktualisiereKamera(),this.bereiteWeich()}aktualisiereKamera(){let{breite:e,hoehe:t,modus:n}=this.ansicht,i=this.quelle?this.quelle.W:e,r=this.quelle?this.quelle.H:t,a=this.fokus,o=(n==="contain"?Math.min(e/i,t/r):Math.max(e/i,t/r))*(a?a.zoom:1),l=e/o,c=t/o,h=(d,p,x)=>p>=x?(x-p)/2:Math.min(x-p,Math.max(0,d-p/2)),f=a?h(a.x,l,i):(i-l)/2,u=a?h(a.y,c,r):(r-c)/2;this.sicht={links:f,rechts:f+l,unten:u,oben:u+c,cssProPx:o},this.setzeFrustum(f,f+l,u,u+c)}setzeFrustum(e,t,n,i){let r=this.kamera;r.left=e,r.right=t,r.bottom=n,r.top=i,r.updateProjectionMatrix()}bereiteWeich(){let e=this.q.weich;if(this.weich.setzeAktiv(e),!e)return;let t=this.renderer.getDrawingBufferSize(Vf);this.weich.bereite(t.x,t.y),this.weich.setzeRadius(oE*this.renderer.getPixelRatio())}setzeQualitaet(e){let t=null;if(e&&typeof e=="object"&&(t=e.pixelRatio>0?e.pixelRatio:null,e=e.qualitaet||this.qualitaetName),!ro[e])return;let n=this.pixelRatioWunsch;if(t&&(this.pixelRatioWunsch=Math.min(n,t)),e===this.qualitaetName&&this.pixelRatioWunsch===n)return;this.qualitaetName=e,this.q={...ro[e],weich:ro[e].weich&&this.weichMoeglich},this.funkeln.aktiv=this.q.funkeln,this.schatten.maxGroesse=this.q.schatten||256,this.umgebung.setzeQualitaet(this.q.umgebung),this.szene.environment=this.umgebung.textur;let i=Math.min(this.pixelRatioWunsch,this.q.pixelRatioMax,2);i!==this.renderer.getPixelRatio()&&(this.pixelRatio=i,this.renderer.setPixelRatio(i)),this.setzeAnsicht(this.ansicht.breite,this.ansicht.hoehe,this.ansicht.modus)}setzeFokus(e){this.fokus=e&&e.zoom>1.01?{x:e.x,y:e.y,zoom:Math.min(4,e.zoom)}:null,this.aktualisiereKamera()}bildschirmZuBuehne(e,t){let n=this.canvas.getBoundingClientRect(),i=(e-n.left)/Math.max(1,n.width),r=(t-n.top)/Math.max(1,n.height),a=this.sicht;return{x:a.links+i*(a.rechts-a.links),y:a.oben-r*(a.oben-a.unten)}}setzeSchmuck(e,{finger:t,freigeben:n=!0}={}){t&&(this.finger=t);let i=this.eintraege.find(a=>!a.aus);if(i&&e&&i.modell===e)return;if(i&&(i.aus=!0),!e||!e.gruppe){this.aktualisiereFunkenQuellen();return}let r=this.eintraege.find(a=>a.modell===e);r&&this.entferneEintrag(r,!1),this.eintraege.push(this.baueEintrag(e,n)),this.aktualisiereFunkenQuellen()}setzeFinger(e){e&&(this.finger=e)}setzeAnpassung({skala:e,versatzMm:t}={}){Number.isFinite(e)&&e>0&&(this.anpassung.skala=gs(e,.5,2)),t&&this.anpassung.versatz.set(t.x||0,t.y||0,t.z||0)}baueEintrag(e,t){let n=e.art,i=e.gruppe;i.parent&&i.parent.remove(i),i.updateMatrixWorld(!0);let r=new wt().setFromObject(i),a=r.isEmpty()?new jt(new T,20):r.getBoundingSphere(new jt),o=n==="ohrringe"?[{key:"ohrR",spiegel:!1},{key:"ohrL",spiegel:!0}]:[{key:n,spiegel:!1}],l=o.map((h,f)=>f===0?i:i.clone(!0)),c=o.map((h,f)=>this.baueInstanz(e,l[f],f===0,h));return{modell:e,art:n,freigeben:t,kugel:a,instanzen:c,ein:0,aus:!1,finger:this.finger,fingerBlende:1}}baueInstanz(e,t,n,{key:i,spiegel:r}){let a=new Ue;a.name=`schmuck-${i}`,a.matrixAutoUpdate=!1,a.visible=!1,a.add(t);let o=new Map,l=[],c=[],h=e.art==="kette"||e.art==="ring"?{nackenEbene:{value:new Je(0,0,1,-1e9)},nackenBreite:{value:1}}:null,f=e.art==="armband"?{tiefeVorschub:{value:0}}:null,u=new Map,d=new Set;if(f)for(let m of e.pendel||[]){let _=n?null:n0(e.gruppe,m.knoten),y=n?m.knoten:_?i0(t,_):null;y&&y.traverse(v=>{v.isMesh&&d.add(v)})}let p=(m,_=!1)=>{if(!m)return m;let y=_?u:o,v=y.get(m);return v||(v=m.clone(),v.onBeforeCompile=m.onBeforeCompile,v.customProgramCacheKey=m.customProgramCacheKey,v.userData=m.userData,v.transparent=!0,v.depthWrite=!0,h&&pE(v,h),_&&dE(v,f),this.weichMoeglich&&this.weich.patche(v),y.set(m,v)),v};t.traverse(m=>{if(!m.isMesh)return;l.push([m,m.material]);let _=Array.isArray(m.material)?m.material.some(v=>v.userData?.stein):!!m.material?.userData?.stein,y=d.has(m);m.material=Array.isArray(m.material)?m.material.map(v=>p(v,y)):p(m.material,y),m.castShadow=!1,m.receiveShadow=!1,_&&(m.geometry.boundingSphere||m.geometry.computeBoundingSphere(),c.push(m))});let x=e.pendel||[];n||(x=x.map(m=>{let _=n0(e.gruppe,m.knoten),y=_?i0(t,_):null;return y?{...m,knoten:y}:null}).filter(Boolean));let g={key:i,spiegel:r,original:n,wurzel:a,gruppe:t,kopien:[...o.values(),...u.values()],grundDeckkraft:[...o.keys(),...u.keys()].map(m=>m.opacity),vorn:f,originale:l,steine:c,pendel:new th(x,e.art),feder:new nh(12,.55),sicht:0,deckkraft:0,gesetzteDeckkraft:-1,hatLage:!1,skalaGl:0,position:new T,pxProMm:1,letzteQuat:new $e,drehung:0,versatz:new T,ziel:new T,weite:1,weiteZ:1,nacken:h};return this.szene.add(a),g}entferneEintrag(e,t=!0){for(let i of e.instanzen){i.pendel.dispose();for(let[r,a]of i.originale)r.material=a;for(let r of i.kopien)r.dispose();i.wurzel.remove(i.gruppe),i.wurzel.removeFromParent(),i.original||i.gruppe.traverse(r=>{r.isInstancedMesh&&r.dispose()})}e.instanzen.length=0,e.freigeben&&e.modell&&typeof e.modell.dispose=="function"&&e.modell.dispose();let n=this.eintraege.indexOf(e);n>=0&&this.eintraege.splice(n,1),t&&this.aktualisiereFunkenQuellen()}aktualisiereFunkenQuellen(){let e=[];for(let t of this.eintraege)if(!t.aus)for(let n of t.instanzen)for(let i of n.steine)e.push({mesh:i,radius:i.geometry.boundingSphere?.radius||1,deckkraft:()=>n.deckkraft});this.funkeln.setzeQuellen(e)}aktualisiere(e,t=1/30){if(this.entsorgt)return;let n=gs(Number.isFinite(t)?t:1/30,0,1),i=Math.min(n,.1);this.letztesDt=i;let r=e||null;r&&r.schwerkraft&&r.schwerkraft.lengthSq()>1e-6?this.schwerkraft.copy(r.schwerkraft).normalize():this.schwerkraft.copy(hE),this.aktualisiereLicht(i),this.verdecker.aktualisiere(r?r.verdecker:null,this.verdeckerSkala);let a=0,o=0,l=0;ms.set(0,0,0);let c=1,h=0;for(let x=this.eintraege.length-1;x>=0;x--){let g=this.eintraege[x];if(g.aus?g.ein-=n/sE:g.ein=Math.min(1,g.ein+n/iE),g.aus&&g.ein<=0){this.entferneEintrag(g);continue}if(g.art==="ring"&&g.finger!==this.finger){if(g.fingerBlende-=n/rE,g.fingerBlende<=0){g.fingerBlende=0,g.finger=this.finger;for(let _ of g.instanzen)_.skalaGl=0,_.pendel.zuruecksetzen()}}else g.fingerBlende=Math.min(1,g.fingerBlende+n/aE);let m=Gf(gs(g.ein,0,1))*Gf(g.fingerBlende);for(let _ of g.instanzen){this.platziere(g,_,r,i,m);let y=_.deckkraft;if(y>.01){a=Math.max(a,y),un.copy(g.kugel.center).applyMatrix4(_.wurzel.matrix);let v=g.kugel.radius*_.wurzel.matrix.getMaxScaleOnAxis();if(o===0)ms.copy(un),l=v;else{let b=ms.distanceTo(un);if(b+l<=v)ms.copy(un),l=v;else if(b+v>l){let S=(b+l+v)/2;ms.lerp(un,(S-l)/b),l=S}}o++,c=_.pxProMm,h=Math.max(h,_.drehung)}}}let f=this.q.schatten>0&&a>.01,u=f&&r?this.waehleSchattenflaechen(r.schattenflaechen):null,d=1;f&&r&&(!u||u.length===0)&&(u=r.verdecker,d=1.03),this.empfaenger.aktualisiere(u,d),this.empfaengerMaterial.opacity=this.empfaengerMaterial.userData.grundDeckkraft*a;let p=this.wzBereich;p.aktiv=o>0,p.aktiv&&(p.x=ms.x,p.y=ms.y,p.r=l,this.wz&&this.schaerfe.aktualisiere(this.quelle,p.x,p.y,n)),this.schatten.setzeAktiv(f),f&&o>0&&this.schatten.setzeBereich(ms,l,c),this.funkeln.aktualisiere(i,h)}holeAnker(e,t,n){let i=e&&e.anker;if(!i)return null;switch(t.art){case"ring":return i.ring&&i.ring[t.finger]||null;case"armband":return i.armband||null;case"kette":return i.kette||null;case"ohrringe":return i[n.key]||null;default:return i[t.art]||null}}waehleSchattenflaechen(e){if(!e)return null;if(Array.isArray(e))return e;for(let t of this.eintraege)if(!t.aus)return e[t.art]||null;return null}platziere(e,t,n,i,r){let a=this.holeAnker(n,e,t),o=a&&a.position&&a.quaternion&&a.pxProMm>0;if(o){let c=a.sichtbar??1;t.sicht<.02&&t.pendel.zuruecksetzen(),t.sicht=c,this.berechneMatrix(e,t,a,n,i,r),t.hatLage=!0}else t.sicht*=Math.exp(-i/.15),t.sicht<.01&&(t.sicht=0);let l=t.hatLage?r*t.sicht:0;if(t.deckkraft=l,t.wurzel.visible=l>.01,Math.abs(l-t.gesetzteDeckkraft)>.002){for(let c=0;c<t.kopien.length;c++)t.kopien[c].opacity=t.grundDeckkraft[c]*l;t.gesetzteDeckkraft=l}o&&t.wurzel.visible&&t.pendel.aktualisiere(i,a.position,a.pxProMm,this.schwerkraft)}berechneMatrix(e,t,n,i,r,a){let o=i&&i.masse||{},l=e.modell.masse||{},c=n.pxProMm,h=c,f=1,u=1;if(t.versatz.copy(this.anpassung.versatz),e.art==="ring"){let g=o.fingerRadiusPx?o.fingerRadiusPx[e.finger]:0,m=l.innenRadiusMm||8.5;g>0&&(h=gs(g/m,c*.6,c*1.6))}else if(e.art==="kette"){let g=l.halsRadiusMm||Qg,m=o.halsRadiusMm||g;f=u=gs(m/g,.8,1.25)}t.skalaGl>0?t.skalaGl+=(h-t.skalaGl)*(1-Math.exp(-r/.08)):t.skalaGl=h,h=t.skalaGl*this.anpassung.skala,h*=.97+.03*a,e.art==="armband"&&(this.armbandSitz(e,t,n,o,l,h,r),t.vorn&&(t.vorn.tiefeVorschub.value=tE*h),f=t.weite,u=t.weiteZ),t0.set((t.spiegel?-1:1)*h*f,h,h*u),Bf.compose(n.position,n.quaternion,t0),e0.makeTranslation(t.versatz.x,t.versatz.y,t.versatz.z),Bf.multiply(e0);let d=t.wurzel;d.matrix.copy(Bf),d.matrixWorldNeedsUpdate=!0,d.updateMatrixWorld(!0),t.nacken&&e.art==="kette"?this.setzeNackenEbene(t,l,h):t.nacken&&this.setzeRingEbene(t,l,h),t.hatLage||t.letzteQuat.copy(n.quaternion);let p=t.letzteQuat.angleTo(n.quaternion);t.letzteQuat.copy(n.quaternion);let x=r>0?gs(p/r/2.5,0,1):0;t.drehung+=(x-t.drehung)*(1-Math.exp(-r/.2)),t.pxProMm=h,t.position.copy(n.position)}setzeNackenEbene(e,t,n){let i=t.halsRadiusMm||Qg,r=e.wurzel.matrixWorld.elements;un.set(r[8],r[9],r[10]).normalize(),Wi.set(0,0,-QS*i).applyMatrix4(e.wurzel.matrixWorld),e.nacken.nackenEbene.value.set(un.x,un.y,un.z,un.dot(Wi)),e.nacken.nackenBreite.value=Math.max(.5,eE*n)}setzeRingEbene(e,t,n){let i=e.wurzel.matrixWorld,r=i.elements;if(un.set(r[4],r[5],r[6]).normalize(),Wi.set(0,0,1).addScaledVector(un,-un.z),Wi.lengthSq()<1e-4){e.nacken.nackenEbene.value.set(0,0,1,-1e9);return}Wi.normalize(),qs.setFromMatrixPosition(i);let a=((t.innenRadiusMm||8.5)+2)*n;e.nacken.nackenEbene.value.set(Wi.x,Wi.y,Wi.z,Wi.dot(qs)-$g[0]*a),e.nacken.nackenBreite.value=Math.max(.5,$g[1]*a)}armbandSitz(e,t,n,i,r,a,o){let l=i.handgelenkRadienPx,c=r.innenRadienMm||{x:30,z:24};if(t.ziel.set(0,0,0),t.weite=1,t.weiteZ=1,Hf.copy(n.quaternion).invert(),l&&l.quer>0&&l.tiefe>0){let h=l.quer*1.02,f=l.tiefe*1.02;if(r.starr)t.weite=Math.max(1,h/(c.x*a),f/(c.z*a)),t.weiteZ=t.weite;else{let x=h*Kg/(c.x*a),g=f*Kg/(c.z*a),m=Math.max(x,g);t.weite=Math.max(x,m*Yg),t.weiteZ=Math.max(g,m*Yg)}let u=c.x*a*t.weite,d=c.z*a*t.weiteZ;qs.copy(this.schwerkraft).applyQuaternion(Hf);let p=Math.hypot(qs.x,qs.z);if(p>.001){let x=qs.x/p,g=qs.z/p,m=0,_=Math.max(u,d);for(let v=0;v<12;v++){let b=(m+_)/2;fE(h,f,u,d,x,g,b)?m=b:_=b}let y=m*uE(.05,.6,p)/a;t.ziel.set(x*y,0,g*y)}}un.copy(t.pendel.bewegung.a).multiplyScalar(-.15).applyQuaternion(Hf),un.y=0,t.versatz.add(t.feder.schritt(t.ziel,o,un))}aktualisiereLicht(e){let t=this.licht,n=t.aktualisiere(e);if(t.gemessen){let r=this.belichtungBasis*gs(Math.pow(t.faktor,.5),.72,1.12);this.belichtungZiel=r,this.umgebung.setzeLicht(t.faktor,t.farbe),this.schatten.setzeLicht(t.faktor,t.farbe)}let i=this.renderer;i.toneMappingExposure+=(this.belichtungZiel-i.toneMappingExposure)*(1-Math.exp(-e/.4)),this.umgebung.aktualisiere(e,n||t.version!==this.lichtVersion),this.lichtVersion=t.version}blendeSofort(){for(let e of this.eintraege)e.aus||(e.ein=1,(e.art!=="ring"||e.finger===this.finger)&&(e.fingerBlende=1))}rendere(){if(this.entsorgt||this.verloren)return;let e=this.renderer;this.quelle&&this.quelle.art==="canvas"&&!this.quelle.statisch&&this.hgTextur&&(this.hgTextur.needsUpdate=!0),this.umgebung.faellig&&this.umgebung.erzeuge()&&(this.szene.environment=this.umgebung.textur),this.schatten.aktiv&&this.schatten.zeichne(e,this.szene,this.versteckeFuerSchatten,this.zeigeNachSchatten);let t=this.weich.aktiv&&this.weich.ziel;t&&(e.setRenderTarget(this.weich.ziel),e.clear(!0,!0,!1),e.render(this.szeneVerdecker,this.kamera),e.setRenderTarget(null)),this.wz?this.zeichneMitAngleich(e,t):(e.clear(!0,!0,!0),e.render(this.szeneHintergrund,this.kamera),t||e.render(this.szeneVerdecker,this.kamera),e.render(this.szene,this.kamera)),this.setzeZaun()}zeichneMitAngleich(e,t){let n=this.wz,i=this.wzBereich,r=e.getDrawingBufferSize(Vf);if(i.aktiv){let h=n.bereite(r.x,r.y,r.x*r.y>Jg?2:4);e.setRenderTarget(h),e.clear(!0,!0,!0),t||e.render(this.szeneVerdecker,this.kamera),e.render(this.szene,this.kamera),e.setRenderTarget(null)}if(e.clear(!0,!0,!0),e.render(this.szeneHintergrund,this.kamera),!i.aktiv)return;let a=this.kamera,o=r.x/Math.max(1e-6,a.right-a.left),l=this.schaerfe.geraeteSigma(o);this.wzSigma=l,n.uniforms.sigma.value=l;let c=i.r*1.3+(3*l+6)/o;n.setzeBereich(i.x,i.y,c,c,0),e.render(n.szene,a)}setzeZaun(){let e=this.renderer.getContext();typeof e.fenceSync=="function"&&(this.zaun&&e.deleteSync(this.zaun),this.zaun=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),e.flush())}gpuFertig(){if(!this.zaun||this.entsorgt||this.verloren)return!0;let e=this.renderer.getContext();return e.getSyncParameter(this.zaun,e.SYNC_STATUS)!==e.SIGNALED?!1:(e.deleteSync(this.zaun),this.zaun=null,!0)}async aufnahme({breite:e,wasserzeichen:t=!1,jpegQualitaet:n=.92}={}){if(this.entsorgt)throw new Error("Buehne entsorgt");let i=this.renderer,r=this.quelle?this.quelle.W:this.ansicht.breite,a=this.quelle?this.quelle.H:this.ansicht.hoehe,o=this.sicht,l=Math.max(o.links,0),c=Math.min(o.rechts,r),h=Math.max(o.unten,0),f=Math.min(o.oben,a),u=Math.max(1,c-l),d=Math.max(1,f-h),p=i.getContext(),x=Math.min(4096,p.getParameter(p.MAX_RENDERBUFFER_SIZE)||4096,(p.getParameter(p.MAX_VIEWPORT_DIMS)||[4096])[0]),g=Math.round(e||Math.max(1080,u)),m=Math.round(g*d/u),_=Math.max(g,m)/x;_>1&&(g=Math.floor(g/_),m=Math.floor(m/_));let y=document.createElement("canvas");y.width=g,y.height=m;let v=y.getContext("2d");v.fillStyle="#000",v.fillRect(0,0,g,m);let b=i.getPixelRatio(),S=i.getSize(new re),A=this.weich.uniforms.verdeckParam.value.y;try{i.setPixelRatio(1),i.setSize(g,m,!1),this.setzeFrustum(l,c,h,f),this.weich.aktiv&&(this.weich.bereite(g,m),this.weich.setzeRadius(A*(g/Math.max(1,(c-l)*o.cssProPx*b)))),this.rendere(),v.drawImage(i.domElement,0,0,g,m)}finally{i.setPixelRatio(b),i.setSize(S.x,S.y,!1),this.aktualisiereKamera(),this.bereiteWeich(),this.rendere()}return t&&this.zeichneWasserzeichen(v,g,m,t),new Promise((M,w)=>{y.toBlob(R=>R?M(R):w(new Error("JPEG fehlgeschlagen")),"image/jpeg",n)})}zeichneWasserzeichen(e,t,n,i){let r=typeof i=="string"?{text:i}:i===!0?{}:i,a=String(r.text||"ARLISE").toUpperCase(),o=Math.min(t,n),l=Math.max(11,Math.round(o*.024)),c=l*.42,h=r.schrift||this.schriftFamilie();e.save(),e.font=`400 ${l}px ${h}`,e.textBaseline="alphabetic";let f=0,u=[...a],d=u.map(S=>e.measureText(S).width);for(let S of d)f+=S;f+=c*(u.length-1);let p=Math.round(o*.045),x=t-p-f,g=n-p,m=l*1.8,_=Math.max(0,Math.floor(x-l*.9-m)),v=this.mittlereHelligkeit(e,_,Math.max(0,Math.floor(g-l)),Math.ceil(t-p-_),Math.ceil(l*1.2))>.62;e.fillStyle=r.farbe||(v?"rgba(30, 27, 24, 0.78)":"rgba(255, 255, 255, 0.9)"),e.shadowColor=v?"rgba(255, 255, 255, 0.35)":"rgba(0, 0, 0, 0.28)",e.shadowBlur=l*.6,u.forEach((S,A)=>{e.fillText(S,x,g),x+=d[A]+c});let b=Math.max(1,l/16);e.fillRect(t-p-f-l*.9-m,g-l*.36-b/2,m,b),e.restore()}mittlereHelligkeit(e,t,n,i,r){try{let a=e.getImageData(t,n,Math.max(1,i),Math.max(1,r)).data,o=0;for(let l=0;l<a.length;l+=4)o+=.2126*a[l]+.7152*a[l+1]+.0722*a[l+2];return o/(255*(a.length/4))}catch{return .5}}schriftFamilie(){let e='"Helvetica Neue", Helvetica, Arial, sans-serif';try{let t=getComputedStyle(this.canvas),n=t.getPropertyValue("--anprobe-schrift-titel").trim();return n&&n!=="inherit"?n:t.fontFamily||e}catch{return e}}dispose({kontextFreigeben:e=!0}={}){if(!this.entsorgt){if(this.zaun&&!this.verloren)try{this.renderer.getContext().deleteSync(this.zaun)}catch{}this.zaun=null,this.entsorgt=!0;for(let t of[...this.eintraege])this.entferneEintrag(t,!1);this.funkeln.dispose(),this.verdecker.material.dispose(),this.verdecker.netzMaterial.dispose(),this.verdecker.dispose(),this.empfaenger.dispose(),this.weich.dispose(),this.wz?.dispose(),this.schaerfe.dispose(),this.schatten.dispose(),this.umgebung.dispose(),this.licht.dispose(),this.hgTextur?.dispose(),this.hgTextur=null,this.hintergrund.geometry.dispose(),this.hgMaterial.dispose(),this.szene.environment=null,this.szene.clear(),this.szeneVerdecker.clear(),this.szeneHintergrund.clear(),this.quelle=null,this.canvas.removeEventListener("webglcontextlost",this.beiKontextVerlust),this.renderer.dispose(),e&&!this.verloren&&this.renderer.forceContextLoss()}}async vorbereiten(){if(this.entsorgt||this.verloren)return;let e=this.renderer;if(typeof e.compileAsync!="function")return;let t=[];for(let h of this.eintraege)for(let f of h.instanzen||[])f.wurzel&&!f.wurzel.visible&&(f.wurzel.visible=!0,t.push(f.wurzel));let n=e.extensions&&typeof e.extensions.has=="function"&&e.extensions.has("KHR_parallel_shader_compile"),i=null,r=e.getDrawingBufferSize(Vf),a=this.wz?this.wz.bereite(r.x,r.y,r.x*r.y>Jg?2:4):null,o=this.weich.aktiv&&this.weich.ziel,l=[[this.szene,a],[this.szeneVerdecker,o?this.weich.ziel:a],[this.szeneHintergrund,null]];this.wz&&l.push([this.wz.szene,null]);let c=e.getRenderTarget();try{let h=[];for(let[f,u]of l)e.setRenderTarget(u),n?h.push(e.compileAsync(f,this.kamera)):e.compile(f,this.kamera);h.length&&(i=Promise.all(h))}finally{e.setRenderTarget(c);for(let h of t)h.visible=!1}i&&await i}};function dE(s,e){let t=s.onBeforeCompile,n=s.customProgramCacheKey();s.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,e);let a=i.vertexShader;a.includes("#include <project_vertex>")&&(i.vertexShader=a.replace("void main() {",`uniform float tiefeVorschub;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.z += tiefeVorschub;
gl_Position = projectionMatrix * mvPosition;`))},s.customProgramCacheKey=()=>`${n}|vorschub1`,s.needsUpdate=!0}function pE(s,e){let t=s.onBeforeCompile,n=s.customProgramCacheKey();s.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,e);let a=i.vertexShader,o=i.fragmentShader;!a.includes("#include <project_vertex>")||!o.includes("#include <tonemapping_fragment>")||(i.vertexShader=a.replace("void main() {",`varying vec3 vNackenWelt;
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
	#include <tonemapping_fragment>`))},s.customProgramCacheKey=()=>`${n}|nacken1`,s.needsUpdate=!0}function o0(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new tt,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=a0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let p=a0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function a0(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+f,p,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ch(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,a=0,o=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,y=o.length;_<y;_++){let v=o[_],b=s.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((A,M)=>{let w=new A.array.constructor(A.count*A.itemSize);c[v][M]=new A.constructor(w,A.itemSize,A.normalized)}))}let d=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),g=d*x;for(let _=0;_<r;_++){let y=n?n.getX(_):_,v="";for(let b=0,S=o.length;b<S;b++){let A=o[b],M=s.getAttribute(A),w=M.itemSize;for(let R=0;R<w;R++)v+=`${Math.trunc(M[f[R]](y)*x+g)},`}if(v in t)h.push(t[v]);else{for(let b=0,S=o.length;b<S;b++){let A=o[b],M=s.getAttribute(A),w=s.morphAttributes[A],R=M.itemSize,k=l[A],z=c[A];for(let I=0;I<R;I++){let L=f[I],N=u[I];if(k[N](a,M[L](y)),w)for(let D=0,O=w.length;D<O;D++)z[D][N](a,w[D][L](y))}}t[v]=a,h.push(a),a++}}let m=s.clone();for(let _ in s.attributes){let y=l[_];if(m.setAttribute(_,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),_ in c)for(let v=0;v<c[_].length;v++){let b=c[_][v];m.morphAttributes[_][v]=new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(h),m}function Wf(s,e){if(e===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Fr||e===qa){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Fr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function l0(s){let e=new Map,t=new Map,n=s.clone();return c0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function c0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)c0(s.children[n],e.children[n],t)}var hh=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new uh(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uh(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new hd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Oi.extractUrlBase(e);a=Oi.resolveURL(c,this.path)}else a=Oi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ir(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===p0){try{a[Ke.KHR_BINARY_GLTF]=new ud(e)}catch(f){i&&i(f);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case Ke.KHR_MATERIALS_UNLIT:a[f]=new Yf;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[f]=new fd(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[f]=new dd;break;case Ke.KHR_MESH_QUANTIZATION:a[f]=new pd;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function mE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Pt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Kf=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],mn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Us(h),c.distance=f;break;case"spot":c=new za(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Yf=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(i)}},Zf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},jf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(i)}},Jf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Qf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},ed=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,pt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},td=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},nd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],mn),Promise.all(i)}},id=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},sd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],mn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,pt)),Promise.all(i)}},rd=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},ad=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},od=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ld=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},cd=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},uh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}},hd=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],u=c[0].count,d=[];for(let p of f){let x=new _e,g=new T,m=new $e,_=new T(1,1,1),y=new $t(p.geometry,p.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(g,m,_));let v=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];y.instanceColor=new Ii(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let A=y.geometry;v=new tt,v.name=A.name;for(let M in A.attributes)v.setAttribute(M,A.attributes[M]);for(let M in A.morphAttributes)v.morphAttributes[M]=A.morphAttributes[M];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let M of A.groups)v.addGroup(M.start,M.count,M.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),y.geometry=v}let S=l[b];v.setAttribute(b,new Ii(S.array,S.itemSize,S.normalized))}_t.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},p0="glTF",ao=12,h0={JSON:1313821514,BIN:5130562},ud=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==p0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ao,r=new DataView(e,ao),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===h0.JSON){let c=new Uint8Array(e,ao+a,o);this.content=n.decode(c)}else if(l===h0.BIN){let c=ao+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},fd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let f=gd[h]||h.toLowerCase();o[f]=a[h]}for(let h in e.attributes){let f=gd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],d=jr[u.componentType];c[f]=d.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}f(d)},o,c,mn,u)})})}},dd=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},pd=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},fh=class extends di{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,f=(n-t)/h,u=f*f,d=u*f,p=e*c,x=p-c,g=-2*d+3*u,m=d-u,_=1-g,y=m-u+f;for(let v=0;v!==o;v++){let b=a[x+v+o],S=a[x+v+l]*h,A=a[p+v+o],M=a[p+v]*h;r[v]=_*b+y*S+g*A+m*M}return r}},gE=new $e,md=class extends fh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return gE.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},u0={9728:Ct,9729:it,9984:Rl,9985:Nr,9986:Hs,9987:An},f0={33071:Nn,33648:_r,10497:ci},Xf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xE={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Is},qf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _E(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function $s(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;a.push(u)}if(i){let u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function yE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ME(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$f(t.attributes):e=s.indices+":"+$f(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$f(s.targets[n]);return e}function $f(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var SE=new _e,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Pa(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $s(r,o,i),vi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Oi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Xf[i.type],o=jr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new bt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Xf[i.type],c=jr[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(d&&d!==f){let m=Math.floor(u/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,y=t.cache.get(_);y||(x=new c(o,m*d,i.count*d/h),y=new zs(x,d/h),t.cache.add(_,y)),g=new ns(y,l,u%d/h,p)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),g=new bt(x,l,p);if(i.sparse!==void 0){let m=Xf.SCALAR,_=jr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new _(a[1],y,i.sparse.count*m),S=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,M=b.length;A<M;A++){let w=b[A];if(g.setX(w,S[A*l]),l>=2&&g.setY(w,S[A*l+1]),l>=3&&g.setZ(w,S[A*l+2]),l>=4&&g.setW(w,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=u0[u.magFilter]||it,h.minFilter=u0[u.minFilter]||An,h.wrapS=f0[u.wrapS]||ci,h.wrapT=f0[u.wrapT]||ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==it,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;let u=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(f){return new Promise(function(u,d){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Et(x);g.needsUpdate=!0,u(g)}),t.load(Oi.resolveURL(f,r.path),p,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),vi(f,a),f.userData.mimeType=a.mimeType||bE(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Rr,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ar,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){let f=i[Ke.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],mn),o.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,pt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let h=r.alphaMode||qf.OPAQUE;if(h===qf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===qf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==qt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==qt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==qt){let f=r.emissiveFactor;o.emissive=new Se().setRGB(f[0],f[1],f[2],mn)}return r.emissiveTexture!==void 0&&a!==qt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let f=new a(o);return r.name&&(f.name=r.name),vi(f,r),t.associations.set(f,{materials:e}),r.extensions&&$s(i,f,r),f})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return d0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=ME(c),f=i[h];if(f)a.push(f.promise);else{let u;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=d0(new tt,c,t),c.mode===Hn.TRIANGLE_STRIP?u=u.then(d=>Wf(d,qa)):c.mode===Hn.TRIANGLE_FAN&&(u=u.then(d=>Wf(d,Fr))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?_E(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],g=a[d],m,_=c[d];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0){let y=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=y&&v?new Ma(x,_):new Ve(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Hn.LINES)m=new Sa(x,_);else if(g.mode===Hn.LINE_STRIP)m=new Ds(x,_);else if(g.mode===Hn.LINE_LOOP)m=new Ea(x,_);else if(g.mode===Hn.POINTS)m=new wa(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&yE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),vi(m,r),g.extensions&&$s(i,m,g),t.assignFinalMaterial(m),f.push(m)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&$s(i,f[0],r),f[0];let u=new Ue;r.extensions&&$s(i,u,r),t.associations.set(u,{meshes:e});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Qe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let f=a[c];if(f){o.push(f);let u=new _e;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ba(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let f=0,u=i.channels.length;f<u;f++){let d=i.channels[f],p=i.samplers[d.sampler],x=d.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],p=f[2],x=f[3],g=f[4],m=[];for(let y=0,v=u.length;y<v;y++){let b=u[y],S=d[y],A=p[y],M=x[y],w=g[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,S,A,M,w);if(R)for(let k=0;k<R.length;k++)m.push(R[k])}let _=new Ia(r,void 0,m);return vi(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],f=c[1],u=c[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,SE)});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);if(h.userData.pivot!==void 0&&f.length>0){let d=h.userData.pivot,p=f[0];h.pivot=new T().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new wr:c.length>1?h=new Ue:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let f=0,u=c.length;f<u;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=a),vi(h,r),r.extensions&&$s(n,h,r),r.matrix!==void 0){let f=new _e;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ue;n.name&&(r.name=i.createUniqueName(n.name)),vi(r,n),n.extensions&&$s(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,f=l.length;h<f;h++){let u=l[h];u.parent!==null?r.add(l0(u)):r.add(u)}let c=h=>{let f=new Map;for(let[u,d]of i.associations)(u instanceof an||u instanceof Et)&&f.set(u,d);return h.traverse(u=>{let d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}xs[r.path]===xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(xs[r.path]){case xs.weights:h=Di;break;case xs.rotation:h=Ui;break;case xs.translation:case xs.scale:h=rs;break;default:n.itemSize===1?h=Di:h=rs;break}let f=i.interpolation!==void 0?xE[i.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+xs[r.path],t.array,u,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ui?md:fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function EE(s,e,t){let n=e.attributes,i=new wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=xd(jr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let u=t.json.accessors[f.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),u.normalized){let x=xd(jr[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new jt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function d0(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=gd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return qe.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),vi(s,e),EE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vE(s,e.targets,t):s})}var dh=new Map;function wE(s,e){let t=dh.get(s);return t||(t={wert:e(),zaehler:0},dh.set(s,t)),t.zaehler++,t.wert}function TE(s){let e=dh.get(s);e&&(e.zaehler--,e.zaehler<=0&&(dh.delete(s),g0(e.wert)))}function g0(s){if(s){if(s.isMaterial)for(let e of["normalMap","iridescenceThicknessMap","roughnessMap","map"])s[e]&&s[e].isTexture&&s[e].dispose();typeof s.dispose=="function"&&s.dispose()}}var Ks=class{constructor(){this.schluessel=[],this.eigene=new Set,this.entsorgt=!1}geteilt(e,t){return this.schluessel.push(e),wE(e,t)}eigen(e){return e&&this.eigene.add(e),e}dispose(){if(!this.entsorgt){this.entsorgt=!0;for(let e of this.schluessel)TE(e);for(let e of this.eigene)g0(e);this.schluessel.length=0,this.eigene.clear()}}};function ni(s,e,t,n){return s.includes(e)?s.replace(e,t):(console.warn(`[schmuck] Shader-Stelle '${e}' fehlt (${n}); Effekt deaktiviert.`),s)}var vd={gold:{name:"Gold",farbe:[1,.66,.24],agx:[1,.75,.2],kante:[1,.87,.6],tiefe:.75,rauheit:.11,klarlack:0},silber:{name:"Silber",farbe:[.95,.94,.92],kante:[1,1,1],tiefe:0,rauheit:.12,klarlack:.1},rosegold:{name:"Ros\xE9gold",farbe:[1,.64,.5],agx:[1,.68,.5],kante:[1,.86,.8],tiefe:.6,rauheit:.12,klarlack:0},weissgold:{name:"Wei\xDFgold",farbe:[.9,.89,.86],kante:[1,1,.98],tiefe:.1,rauheit:.11,klarlack:.1}};function Vt(s,e="gold",t="poliert"){let n=vd[e]?e:"gold";return s.geteilt(`metall:${n}:${t}`,()=>AE(vd[n],t,n))}function AE(s,e="poliert",t="metall"){let n=new Kt({name:`metall-${t}-${e}`,metalness:1,roughness:s.rauheit,clearcoat:s.klarlack||0,clearcoatRoughness:.04,envMapIntensity:1});n.color.setRGB(s.farbe[0],s.farbe[1],s.farbe[2]),n.userData.metallName=t,e==="matt"?(n.roughness=Math.max(.3,s.rauheit*2.6),n.clearcoat=0):e==="motiv"?(n.roughness=Math.max(.22,s.rauheit*2),n.clearcoat=0):e==="schlange"&&(n.normalMap=RE(),n.normalScale.set(.9,.9),n.roughness=s.rauheit+.02);let i=s.kante||[1,1,1],r=Math.max(...s.farbe),a={metallTon:{value:new T(s.farbe[0]/r,s.farbe[1]/r,s.farbe[2]/r)},metallKante:{value:new T(...i)},metallTiefe:{value:s.tiefe??0},metallAgx:{value:new T(1,1,1)}};return s.agx&&a.metallAgx.value.set(s.agx[0]/s.farbe[0],s.agx[1]/s.farbe[1],s.agx[2]/s.farbe[2]),n.userData.metall=a,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.toneMapping===os&&(o.defines={...o.defines,METALL_AGX:""}),o.fragmentShader=ni(o.fragmentShader,"#include <common>",`#include <common>
uniform vec3 metallAgx;
uniform vec3 metallTon;
uniform vec3 metallKante;
uniform float metallTiefe;`,"metall"),o.fragmentShader=ni(o.fragmentShader,"#include <transmission_fragment>",`#include <transmission_fragment>
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
}`,"metall")},n.customProgramCacheKey=()=>"schmuck-metall-1",n}function RE(){let t=new Float32Array(2048);for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=l/64,h=o/32,f=(c*2+Math.abs(h-.5)*1.2)%1;t[o*64+l]=Math.sqrt(Math.max(0,f))*(1-f*.25)}let n=new Uint8Array(2048*4),i=2.2,r=new T;for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=(d,p)=>t[(p+32)%32*64+(d+64)%64],h=(c(l+1,o)-c(l-1,o))*i,f=(c(l,o+1)-c(l,o-1))*i*.5;r.set(-h,-f,1).normalize();let u=(o*64+l)*4;n[u]=Math.round((r.x*.5+.5)*255),n[u+1]=Math.round((r.y*.5+.5)*255),n[u+2]=Math.round((r.z*.5+.5)*255),n[u+3]=255}let a=new is(n,64,32,vn);return a.wrapS=a.wrapT=ci,a.magFilter=it,a.minFilter=An,a.generateMipmaps=!0,a.colorSpace=yn,a.needsUpdate=!0,a}var yd={weiss:{name:"Wei\xDF",grund:[.63,.6,.57],rand:[.36,.33,.34],orientA:[1,.84,.89],orientB:[.86,1,.93],orient:.72,irid:.5,film:[300,520],randBreite:.8},creme:{name:"Creme",grund:[.62,.53,.42],rand:[.46,.37,.34],orientA:[1,.78,.76],orientB:[.9,.98,.82],orient:.8,irid:.45,film:[320,540]},rose:{name:"Ros\xE9",grund:[.64,.5,.49],rand:[.46,.33,.4],orientA:[1,.7,.84],orientB:[.86,.94,.98],orient:.9,irid:.5,film:[300,520]},champagner:{name:"Champagner",grund:[.56,.43,.3],rand:[.46,.34,.26],orientA:[1,.8,.68],orientB:[.88,.94,.78],orient:.8,irid:.45,film:[340,560]},grau:{name:"Grau",grund:[.26,.27,.3],rand:[.62,.6,.7],orientA:[.9,.8,1],orientB:[.78,1,.88],orient:.8,irid:.45,film:[280,500]}},oo=3,m0=[{glanz:0,phase:0,orient:1,film:0},{glanz:.012,phase:.37,orient:.85,film:30},{glanz:-.008,phase:.71,orient:1.15,film:-25}];function _s(s,e="weiss",t=0){let n=yd[e]?e:"weiss",i=(Math.round(t)%oo+oo)%oo;return s.geteilt(`perle:${n}:${i}`,()=>CE(yd[n],i,n))}function CE(s,e=0,t="perle"){let n=m0[e%m0.length],i=s.film||[300,520],r=1.53,a=new Kt({name:`perle-${t}-${e}`,metalness:0,roughness:s.rauheit??.3,clearcoat:1,clearcoatRoughness:Math.max(0,(s.glanz??.035)+n.glanz),iridescence:s.irid??.5,iridescenceIOR:s.filmIor??1.6,iridescenceThicknessRange:[i[0]+n.film,i[1]+n.film],ior:r,specularIntensity:1,envMapIntensity:1});a.color.setRGB(s.grund[0],s.grund[1],s.grund[2]);let o=((r-1)/(r+1))**2;a.specularColor.setScalar((s.spiegel??.22)/o);let l={perlRand:{value:new T(...s.rand)},perlOrientA:{value:new T(...s.orientA)},perlOrientB:{value:new T(...s.orientB)},perlOrient:{value:(s.orient??.5)*n.orient},perlPhase:{value:n.phase},perlDurch:{value:s.durch??.2},perlMuster:{value:s.muster??.55},perlRandBreite:{value:s.randBreite??.95}};return a.userData.perle=l,a.onBeforeCompile=c=>{Object.assign(c.uniforms,l),c.toneMapping===os&&(c.defines={...c.defines,PERLE_AGX:""}),c.vertexShader=ni(c.vertexShader,"#include <common>",`#include <common>
varying vec3 vPerlOrt;`,"perle"),c.vertexShader=ni(c.vertexShader,"#include <begin_vertex>",`#include <begin_vertex>
vPerlOrt = position;
#ifdef USE_INSTANCING
  vPerlOrt += instanceMatrix[3].xyz * 1.7;
#endif`,"perle"),c.fragmentShader=ni(c.fragmentShader,"#include <common>",`#include <common>
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
      }`);c.fragmentShader=ni(c.fragmentShader,"#include <lights_physical_fragment>",h,"perle"),c.fragmentShader=ni(c.fragmentShader,"#include <aomap_fragment>",`#include <aomap_fragment>
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
}`,"perle")},a.customProgramCacheKey=()=>"schmuck-perle-2",a}function x0(s,e=new Se){let t=1-s()*.08,n=(s()-.5)*.06,i=(s()-.5)*.04;return e.setRGB(t*(1+n*.5+i),t*(1-i*.3),t*(1-n))}var Md={diamant:{name:"Diamant",farbe:"#ffffff",ior:2.42,dispersion:4,daempfung:null},zirkonia:{name:"Zirkonia",farbe:"#ffffff",ior:2.42,dispersion:5,daempfung:null},saphir:{name:"Saphir",farbe:"#1d3fae",ior:1.77,dispersion:1.2,daempfung:1.2},rubin:{name:"Rubin",farbe:"#b0102c",ior:1.77,dispersion:1.2,daempfung:1.2},smaragd:{name:"Smaragd",farbe:"#0f7a45",ior:1.58,dispersion:.8,daempfung:1.4}};function yi(s,e="zirkonia",t=null){let n=Md[e]?e:"zirkonia",i=(t||Md[n].farbe).toLowerCase();return s.geteilt(`stein:${n}:${i}`,()=>kE(n,i))}function kE(s,e){let t=Md[s],n=e!=="#ffffff",i=new Kt({name:`stein-${s}`,metalness:0,roughness:.04,ior:Math.min(2.333,t.ior),specularIntensity:1,envMapIntensity:1});i.color=new Se(e);let r={steinIor:{value:t.ior},steinFeuer:{value:t.dispersion*.02},steinBrillanz:{value:n?1.4:1.5},steinKontrast:{value:n?.6:.9}};return i.userData.stein=r,i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=ni(a.vertexShader,"#include <common>",`#include <common>
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`,"stein"),a.vertexShader=ni(a.vertexShader,"#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
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
}`,"stein"),a.fragmentShader=ni(a.fragmentShader,"#include <common>",`#include <common>
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
}`,"stein"),a.fragmentShader=ni(a.fragmentShader,"#include <opaque_fragment>",`
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
#include <opaque_fragment>`,"stein")},i.customProgramCacheKey=()=>"schmuck-stein-1",i}var ut=Math.PI,Jt=Math.PI*2,kn=new T,IE=new T,PE=new T,_0=new _e;function lo(s=1){let e=(Math.floor(s*9973)^2654435769)>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function M0(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e5}function LE(s,e=new T){let t=s()*2-1,n=s()*Jt,i=Math.sqrt(1-t*t);return e.set(i*Math.cos(n),i*Math.sin(n),t)}function v0(s,{wellen:e=8,freqMin:t=.5,freqMax:n=1.5}={}){let i=[],r=0;for(let o=0;o<e;o++){let l=t+(n-t)*s(),c=1/l;i.push({d:LE(s),f:l*ut,p:s()*Jt,a:c}),r+=c*c*.5}let a=1/Math.sqrt(r);return(o,l,c)=>{let h=0;for(let f of i)h+=f.a*Math.sin(f.f*(f.d.x*o+f.d.y*l+f.d.z*c)+f.p);return h*a}}var Sn=class{constructor(e,{geschlossen:t=!1,normalen:n=null}={}){this.punkte=e,this.geschlossen=t;let i=e.length;this.anzahlSeg=t?i:i-1,this.s=new Float64Array(this.anzahlSeg+1);for(let r=0;r<this.anzahlSeg;r++)this.s[r+1]=this.s[r]+e[r].distanceTo(e[(r+1)%i]);this.laenge=this.s[this.anzahlSeg],this.tangenten=Sd(e,t),n?this.normalen=n.map((r,a)=>{let o=this.tangenten[a];return r.clone().addScaledVector(o,-r.dot(o)).normalize()}):this.normalen=b0(e,this.tangenten,t)}_ort(e){let t=this.laenge;this.geschlossen?e=(e%t+t)%t:e=Math.min(Math.max(e,0),t);let n=0,i=this.anzahlSeg;for(;i-n>1;){let a=n+i>>1;this.s[a]<=e?n=a:i=a}let r=this.s[n+1]-this.s[n];return{i:n,j:(n+1)%this.punkte.length,t:r>0?(e-this.s[n])/r:0}}punkt(e,t=new T){let n=this._ort(e);return t.lerpVectors(this.punkte[n.i],this.punkte[n.j],n.t)}tangente(e,t=new T){let n=this._ort(e);return t.lerpVectors(this.tangenten[n.i],this.tangenten[n.j],n.t).normalize()}normale(e,t=new T){let n=this._ort(e);t.lerpVectors(this.normalen[n.i],this.normalen[n.j],n.t);let i=this.tangente(e,PE);return t.addScaledVector(i,-t.dot(i)).normalize()}abtasten(e,t,n){let i=Math.max(2,Math.ceil(Math.abs(t-e)/n)+1),r=[],a=[];for(let o=0;o<i;o++){let l=e+(t-e)*(o/(i-1));r.push(this.punkt(l)),a.push(this.normale(l))}return{punkte:r,normalen:a}}};function Sd(s,e){let t=s.length,n=[];for(let i=0;i<t;i++){let r,a;e?(r=s[(i-1+t)%t],a=s[(i+1)%t]):(r=s[Math.max(0,i-1)],a=s[Math.min(t-1,i+1)]);let o=new T().subVectors(a,r);o.lengthSq()<1e-20&&o.set(0,1,0),n.push(o.normalize())}return n}function zE(s){let e=Math.abs(s.x)<.9?new T(1,0,0):new T(0,1,0);return e.addScaledVector(s,-e.dot(s)).normalize()}function b0(s,e,t,n=null){let i=s.length,r=new Array(i),a=n?n.clone():zE(e[0]);r[0]=a.addScaledVector(e[0],-a.dot(e[0])).normalize();let o=(l,c,h,f,u)=>{let d=kn.subVectors(h,c),p=d.dot(d);if(p<1e-20)return l.clone();let x=l.clone().addScaledVector(d,-2/p*d.dot(l)),g=f.clone().addScaledVector(d,-2/p*d.dot(f)),m=IE.subVectors(u,g),_=m.dot(m);return _<1e-20?x:x.addScaledVector(m,-2/_*m.dot(x))};for(let l=0;l<i-1;l++)r[l+1]=o(r[l],s[l],s[l+1],e[l],e[l+1]).normalize();if(t&&i>2){let l=o(r[i-1],s[i-1],s[0],e[i-1],e[0]).normalize(),c=e[0],h=Math.atan2(kn.crossVectors(l,r[0]).dot(c),l.dot(r[0])),f=new $e;for(let u=1;u<i;u++)f.setFromAxisAngle(e[u],h*(u/i)),r[u].applyQuaternion(f).normalize()}return r}function S0(s,e,t=!1){let n=new Sn(s,{geschlossen:t,normalen:s.map(()=>new T(0,0,1))}),i=[],r=t?e:e-1;for(let a=0;a<e;a++)i.push(n.punkt(n.laenge*(a/r)));return i}function ii(s,{radius:e=.5,ellipse:t=[1,1],segmente:n=8,geschlossen:i=!1,kappen:r="rund",normalen:a=null,uvLaenge:o=0,uvUmfang:l=1,winkel0:c=0}={}){let h=s,f=a,u=Sd(s,i),d,p;f?p=f.map((F,U)=>F.clone().addScaledVector(u[U],-F.dot(u[U])).normalize()):p=b0(s,u,i),d=u,i&&(h=[...s,s[0]],d=[...u,u[0]],p=[...p,p[0]]);let x=h.length,g=new Float64Array(x);for(let F=1;F<x;F++)g[F]=g[F-1]+h[F].distanceTo(h[F-1]);let m=g[x-1]||1,_=new Float64Array(x);for(let F=0;F<x;F++)_[F]=typeof e=="function"?e(i?F%s.length:F,g[F]/m):e;let y=n,v=[],b=[],S=[],A=[],M=new T,w=new T,R=new T,k=[],z=(F,U,G,ne,ie,ye,Ee=0,ze=1)=>{M.crossVectors(U,G);let K=v.length/3,J=ne*t[0]*ze,le=ne*t[1]*ze;for(let we=0;we<=y;we++){let xe=c+we/y*Jt,Fe=Math.cos(xe),St=Math.sin(xe);R.copy(F).addScaledVector(G,Fe*J).addScaledVector(M,St*le),v.push(R.x,R.y,R.z),w.set(0,0,0).addScaledVector(G,Fe/Math.max(t[0],1e-6)).addScaledVector(M,St/Math.max(t[1],1e-6)).normalize(),Ee!==0?w.multiplyScalar(Math.cos(Ee)).addScaledVector(U,Math.sin(Ee)):ie&&w.addScaledVector(U,-ie),w.normalize(),b.push(w.x,w.y,w.z),S.push(ye,we/y*l)}return k.push(K),K},I=(F,U)=>{for(let G=0;G<y;G++){let ne=F+G,ie=F+G+1,ye=U+G,Ee=U+G+1;A.push(ne,ie,ye,ie,Ee,ye)}},L=F=>o>0?F/o:F/m,N=!i,D=Math.max(2,Math.round(y/2)),O=-1;if(N&&r==="rund"){let F=d[0];for(let U=D;U>=1;U--){let G=U/D*(ut/2),ne=kn.copy(h[0]).addScaledVector(F,-_[0]*Math.sin(G)*Math.max(t[0],t[1])*.9),ie=z(ne,F,p[0],_[0],0,L(0),-G,Math.cos(G));O>=0&&I(O,ie),O=ie}}else if(N&&r==="flach"){let F=v.length/3;v.push(h[0].x,h[0].y,h[0].z),b.push(-d[0].x,-d[0].y,-d[0].z),S.push(L(0),0);let U=z(h[0],d[0],p[0],_[0],0,L(0),-ut/2,1);for(let G=0;G<y;G++)A.push(F,U+G+1,U+G);O=-1}for(let F=0;F<x;F++){let U=Math.max(0,F-1),G=Math.min(x-1,F+1),ne=g[G]-g[U],ie=ne>1e-9?(_[G]-_[U])/ne:0,ye=z(h[F],d[F],p[F],_[F],ie,L(g[F]));O>=0&&I(O,ye),O=ye}if(N&&r==="rund"){let F=d[x-1];for(let U=1;U<=D;U++){let G=U/D*(ut/2),ne=kn.copy(h[x-1]).addScaledVector(F,_[x-1]*Math.sin(G)*Math.max(t[0],t[1])*.9),ie=z(ne,F,p[x-1],_[x-1],0,L(m),G,Math.cos(G));I(O,ie),O=ie}}else if(N&&r==="flach"){let F=z(h[x-1],d[x-1],p[x-1],_[x-1],0,L(m),ut/2,1),U=v.length/3;v.push(h[x-1].x,h[x-1].y,h[x-1].z),b.push(d[x-1].x,d[x-1].y,d[x-1].z),S.push(L(m),0);for(let G=0;G<y;G++)A.push(U,F+G,F+G+1)}let W=new tt;return W.setAttribute("position",new He(v,3)),W.setAttribute("normal",new He(b,3)),W.setAttribute("uv",new He(S,2)),W.setIndex(A),W}function E0(s,e,{segmente:t=8,aufloesung:n=.25,kappen:i="rund",geschlossen:r=!1}={}){let a=new ss(s,r,"centripetal"),o=Math.max(8,Math.ceil(a.getLength()/n)),l=a.getSpacedPoints(o);return r&&l.pop(),ii(l,{radius:e,segmente:t,kappen:i,geschlossen:r})}function In(s){let e=s.filter(Boolean).map(n=>{let i=n;if(!i.index){let r=i.attributes.position.count,a=new Array(r);for(let o=0;o<r;o++)a[o]=o;i.setIndex(a)}i.attributes.uv||i.setAttribute("uv",new He(new Float32Array(i.attributes.position.count*2),2));for(let r of Object.keys(i.attributes))["position","normal","uv"].includes(r)||i.deleteAttribute(r);return i.morphAttributes={},i});if(e.length===1)return e[0];let t=o0(e,!1);for(let n of e)n.dispose();return t}function NE(s,e,t,n){let i=s.attributes.position,r=s.attributes.normal;for(let a=0;a<i.count;a++)i.setXYZ(a,i.getX(a)*e,i.getY(a)*t,i.getZ(a)*n),r&&(kn.set(r.getX(a)/e,r.getY(a)/t,r.getZ(a)/n).normalize(),r.setXYZ(a,kn.x,kn.y,kn.z));return i.needsUpdate=!0,r&&(r.needsUpdate=!0),s}function w0(s,e=48){let t=s.map(([i,r])=>new re(Math.max(i,0),r)),n=new kr(t,e);return n.rotateX(ut/2),n}function Xi(s,{mitte:e=new re,hoehe:t=1,rueckHoehe:n=.4,ringe:i=12,form:r=.5}={}){let a=s.length,o=[],l=[],c=i,h=_=>Math.sin(_/c*(ut/2)),f=_=>Math.pow(Math.max(0,1-_*_),r);o.push(e.x,e.y,t);let u=[];for(let _=1;_<=c;_++){let y=h(_);u.push(o.length/3);for(let v=0;v<a;v++){let b=s[v];o.push(e.x+(b.x-e.x)*y,e.y+(b.y-e.y)*y,t*f(y))}}let d=[];for(let _=c-1;_>=1;_--){let y=h(_);d.push(o.length/3);for(let v=0;v<a;v++){let b=s[v];o.push(e.x+(b.x-e.x)*y,e.y+(b.y-e.y)*y,-n*f(y))}}let p=o.length/3;o.push(e.x,e.y,-n);for(let _=0;_<a;_++)l.push(0,u[0]+_,u[0]+(_+1)%a);let x=(_,y)=>{for(let v=0;v<a;v++){let b=(v+1)%a;l.push(_+v,y+v,y+b,_+v,y+b,_+b)}};for(let _=0;_<c-1;_++)x(u[_],u[_+1]);let g=u[c-1];for(let _ of d)x(g,_),g=_;for(let _=0;_<a;_++)l.push(p,g+(_+1)%a,g+_);let m=new tt;if(m.setAttribute("position",new He(o,3)),m.setIndex(l),m.computeVertexNormals(),m.attributes.normal.getZ(0)<0){let _=m.index.array;for(let y=0;y<_.length;y+=3){let v=_[y+1];_[y+1]=_[y+2],_[y+2]=v}m.index.needsUpdate=!0,m.computeVertexNormals()}return m}function T0({radius:s,vorn:e,hinten:t,ringe:n=30,randDichte:i=1.4}){let r=n,a=u=>1-Math.pow(1-u/r,i),o=[[[0,0,0]]];for(let u=1;u<=r;u++){let d=6*u,p=a(u),x=[];for(let g=0;g<d;g++){let m=g/d*Jt;x.push([Math.cos(m)*p*s,Math.sin(m)*p*s,p])}o.push(x)}let l=[],c=[];for(let u of[1,-1]){let d=[];for(let p of o){d.push(l.length/3);for(let[x,g,m]of p){let _=u>0?e(x,g,m):-t(x,g,m);l.push(x,g,_)}}for(let p=0;p<r;p++){let x=o[p].length,g=o[p+1].length,m=S=>d[p]+S%x,_=S=>d[p+1]+S%g,y=(S,A,M)=>u>0?c.push(S,A,M):c.push(S,M,A);if(x===1){for(let S=0;S<g;S++)y(m(0),_(S),_(S+1));continue}let v=0,b=0;for(;v<x||b<g;){let S=(v+1)/x,A=(b+1)/g;b<g&&(A<=S||v>=x)?(y(m(v),_(b),_(b+1)),b++):(y(m(v),_(b),m(v+1)),v++)}}}let h=new tt;h.setAttribute("position",new He(l,3)),h.setIndex(c);let f=ch(h,1e-5);return h.dispose(),f.computeVertexNormals(),f}var ph={anker:{name:"Ankerkette",laenge:1.42,draht:.24,exponent:2.4,flach:.92,abwechselnd:!0},erbs:{name:"Erbskette",laenge:1.16,draht:.27,exponent:2,flach:.74,abwechselnd:!0},panzer:{name:"Panzerkette",laenge:1.55,draht:.31,exponent:2.3,flach:1,verdrillt:!0,abflachung:.62,schnitt:.86},figaro:{name:"Figarokette",laenge:1.45,draht:.29,exponent:2.3,flach:1,verdrillt:!0,abflachung:.6,schnitt:.86,langLaenge:2.9},paperclip:{name:"Paperclip",laenge:2.9,draht:.2,exponent:5,flach:.78,abwechselnd:!0},kugel:{name:"Kugelkette"},schlange:{name:"Schlangenkette"},seil:{name:"Kordelkette"}};function bd(s,e,{pfadSeg:t=16,radSeg:n=6,laengeFaktor:i=null}={}){let r=ph[s]||ph.anker,a=r.draht*e,o=(i||r.laenge)*e,l=o/2-a/2,c=e/2-a/2,h=r.exponent,f=[];for(let p=0;p<256;p++){let x=p/256*Jt,g=Math.cos(x),m=Math.sin(x);f.push(new T(c*Math.sign(g)*Math.pow(Math.abs(g),2/h),l*Math.sign(m)*Math.pow(Math.abs(m),2/h),0))}let u=S0(f,t,!0),d=ii(u,{radius:a/2,ellipse:[r.flach,1],segmente:n,geschlossen:!0,normalen:u.map(()=>new T(0,0,1))});if(d.deleteAttribute("uv"),r.verdrillt){let p=d.attributes.position,x=d.attributes.normal,g=ut/4,m=0;for(let y=0;y<p.count;y++){let v=p.getY(y),b=g*Qe.clamp(v/(l+a/2),-1,1),S=Math.cos(b),A=Math.sin(b),M=p.getX(y),w=p.getZ(y),R=x.getX(y),k=x.getZ(y),z=M*S+w*A,I=(-M*A+w*S)*r.abflachung;p.setXYZ(y,z,v,I),kn.set(R*S+k*A,x.getY(y),(-R*A+k*S)/r.abflachung).normalize(),x.setXYZ(y,kn.x,kn.y,kn.z),m=Math.max(m,Math.abs(I))}let _=m*r.schnitt;for(let y=0;y<p.count;y++){let v=p.getZ(y);Math.abs(v)>=_&&(p.setZ(y,Math.sign(v)*_),x.setXYZ(y,0,0,Math.sign(v)))}}return d.computeBoundingSphere(),{geometrie:d,innen:o-2*a,aussen:o,draht:a}}function Vn(s,{typ:e="anker",staerkeMm:t=1.2,s0:n=0,s1:i=null,material:r,res:a,saat:o=1,qualitaet:l=1}){let c=new Ue;c.name=`kette-${e}`,i===null&&(i=n+s.laenge);let h=i-n,f=s.geschlossen&&Math.abs(h-s.laenge)<1e-6,u=t,d=lo(o);if(e==="kugel")return DE(s,n,i,u,r,a,c);if(e==="schlange")return UE(s,n,i,u,a,c,r);if(e==="seil")return FE(s,n,i,u,r,a,c,l);let p=ph[e]||ph.anker,x=h/((p.laenge-2*p.draht)*u),g=9e4*l,m=18,_=7;for(;x*m*_*2>g&&m>10;)m-=2,_=Math.max(5,_-1);let y=[];if(e==="figaro"){let U=bd("figaro",u,{pfadSeg:m,radSeg:_}),G=bd("figaro",u,{pfadSeg:m+6,radSeg:_,laengeFaktor:p.langLaenge});y.push({geo:a.eigen(U.geometrie),innen:U.innen},{geo:a.eigen(G.geometrie),innen:G.innen})}else{let U=bd(e,u,{pfadSeg:m,radSeg:_});y.push({geo:a.eigen(U.geometrie),innen:U.innen})}let v=e==="figaro"?[0,0,0,1]:[0],b=v.reduce((U,G)=>U+y[G].innen,0),S=Math.max(2,Math.round(h/b*v.length));f&&p.abwechselnd&&S%2&&S++;let A=0;for(let U=0;U<S;U++)A+=y[v[U%v.length]].innen;let M=h/A,w=y.map(()=>[]),R=new T,k=new T,z=new T,I=new T,L=new T,N=new T,D=new T,O=new T,W=n,F=p.verdrillt?0:ut/4;for(let U=0;U<S;U++){let G=v[U%v.length],ne=y[G].innen*M;s.punkt(W,R),s.punkt(W+ne,k),z.addVectors(R,k).multiplyScalar(.5),I.subVectors(k,R).normalize(),s.normale(W+ne/2,L),L.addScaledVector(I,-L.dot(I)).normalize(),N.crossVectors(I,L);let ie=F+(p.abwechselnd&&U%2?ut/2:0)+(d()-.5)*(p.verdrillt?.08:.22);O.copy(L).multiplyScalar(Math.cos(ie)).addScaledVector(N,Math.sin(ie)),D.crossVectors(I,O);let ye=new _e().makeBasis(D,I,O).setPosition(z);w[G].push(ye),W+=ne}return y.forEach((U,G)=>{if(!w[G].length)return;let ne=new $t(U.geo,r,w[G].length);w[G].forEach((ie,ye)=>ne.setMatrixAt(ye,ie)),ne.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),ne.castShadow=!0,ne.name="glieder",c.add(ne)}),c.userData.gliederAnzahl=S,c}function DE(s,e,t,n,i,r,a){let o=n*1.32,l=Math.max(2,Math.round((t-e)/o)),c=(t-e)/l,h=r.eigen(Gn(n/2,3)),f=r.eigen(new gn(n*.13,n*.13,c,6,1,!0)),u=new $t(h,i,l),d=new $t(f,i,l),p=new T,x=new T,g=new T,m=new $e,_=new T(1,1,1);for(let y=0;y<l;y++){let v=e+c*(y+.5);s.punkt(v,p),u.setMatrixAt(y,_0.compose(p,m.identity(),_)),s.punkt(v+c*.5,x),s.tangente(v+c*.5,g),m.setFromUnitVectors(new T(0,1,0),g),d.setMatrixAt(y,_0.compose(x,m,_))}u.name="glieder",d.name="stege";for(let y of[u,d])y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),y.castShadow=!0,a.add(y);return a}function UE(s,e,t,n,i,r,a){let{punkte:o,normalen:l}=s.abtasten(e,t,Math.max(.25,n*.35)),c=i.eigen(ii(o,{radius:n/2,segmente:12,kappen:"rund",normalen:l,uvLaenge:n*.62,uvUmfang:4})),h=a&&a.userData&&a.userData.metallName,f=new Ve(c,h?Vt(i,h,"schlange"):a);return f.castShadow=!0,f.name="schlange",r.add(f),r}function FE(s,e,t,n,i,r,a,o){let c=n*2.3,h=n*.29,f=n*.23,u=Math.max(.12,c/(o>=1?12:9)),{punkte:d,normalen:p}=s.abtasten(e,t,u),x=Sd(d,!1),g=[];for(let _=0;_<3;_++){let y=[],v=0;for(let S=0;S<d.length;S++){S&&(v+=d[S].distanceTo(d[S-1]));let A=v/c*Jt+_/3*Jt,M=p[S],w=kn.crossVectors(x[S],M);y.push(d[S].clone().addScaledVector(M,Math.cos(A)*f).addScaledVector(w,Math.sin(A)*f))}let b=ii(y,{radius:(S,A)=>h*(.9+.1*Math.abs(Math.cos(A*(d.length*u)/(c/3)*ut))),segmente:6,kappen:"rund"});b.deleteAttribute("uv"),g.push(b)}let m=new Ve(r.eigen(In(g)),i);return m.castShadow=!0,m.name="kordel",a.add(m),a}function Gn(s,e=3){let t=new Cr(s,e);t.deleteAttribute("uv"),t.deleteAttribute("normal");let n=ch(t);return t.dispose(),n.computeVertexNormals(),n}function co({durchmesser:s=6,form:e="rund",saat:t=1,detail:n=null}){let i=n??Qe.clamp(Math.round(s*1.15),5,14),r=new Cr(1,i);r.deleteAttribute("uv"),r.deleteAttribute("normal");let a=ch(r);r.dispose();let o=lo(t*7.31+3),l=v0(o,{wellen:7,freqMin:.35,freqMax:.9}),c=v0(o,{wellen:9,freqMin:1,freqMax:1.8}),h=1+(o()-.5)*.05,f=1+(o()-.5)*.06,u=1+(o()-.5)*.05,d=1.12+o()*.22,p=a.attributes.position,x=s/2;for(let g=0;g<p.count;g++){let m=p.getX(g),_=p.getY(g),y=p.getZ(g),v;switch(e){case"barock":{v=1+.085*l(m,_,y)+.035*c(m,_,y),_*=d;break}case"tropfen":{v=1+.018*l(m,_,y)+.006*c(m,_,y);let b=Math.max(0,_),S=1-.3*Math.pow(b,1.6);m*=S,y*=S,_=_*1.24+.06*(1-_*_);break}case"button":{v=1+.02*l(m,_,y)+.006*c(m,_,y),_=_>0?_*.8:_*.52;break}case"reis":{v=1+.03*l(m,_,y)+.01*c(m,_,y),_*=1.5;break}default:v=1+.02*l(m,_,y)+.006*c(m,_,y),m*=h,_*=f,y*=u}p.setXYZ(g,m*v*x,_*v*x,y*v*x)}return a.computeVertexNormals(),a.computeBoundingBox(),a.computeBoundingSphere(),a}function qi(s){return{barock:1.25,tropfen:1.3,button:.66,reis:1.5}[s]||1}function Jr(s,{durchmesser:e,form:t="rund",farbe:n="weiss",res:i,saat:r=1,formVarianten:a=3,detail:o=null}){let l=new Ue;l.name="perlen";let c=lo(r+11),h=[];for(let x=0;x<a;x++)h.push(i.geteilt(`perlgeo:${e.toFixed(2)}:${t}:${x}:${o}`,()=>co({durchmesser:e,form:t,saat:x+1,detail:o})));let f=new Map,u=new Se,d=new T(1,1,1),p=new T;s.forEach(x=>{let g=Math.floor(c()*a),m=Math.floor(c()*oo),_=g*10+m;f.has(_)||f.set(_,{gv:g,mv:m,eintraege:[]});let y=new $e().setFromAxisAngle(new T(0,1,0),c()*Jt),v=x.quaternion.clone().multiply(y),b=1+(c()-.5)*.06;p.copy(d).multiplyScalar(b),f.get(_).eintraege.push({m:new _e().compose(x.position,v,p.clone()),c:x0(c,u).clone()})});for(let x of f.values()){let g=_s(i,n,x.mv),m=new $t(h[x.gv],g,x.eintraege.length);x.eintraege.forEach((_,y)=>{m.setMatrixAt(y,_.m),m.setColorAt(y,_.c)}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.computeBoundingSphere(),m.castShadow=!0,m.name="perlen",l.add(m)}return l}function ho({durchmesser:s,form:e="rund",farbe:t="weiss",res:n,saat:i=1,detail:r=null}){let a=n.geteilt(`perlgeo:${s.toFixed(2)}:${e}:s${i}:${r}`,()=>co({durchmesser:s,form:e,saat:i,detail:r})),o=new Ve(a,_s(n,t,i));return o.castShadow=!0,o.name="perle",o}function vs({groesse:s=4,schliff:e="brillant"}={}){if(e==="smaragd")return OE(s);let t=s/2,n=.575*t,i=Qe.degToRad(34.5),r=Qe.degToRad(40.8),a=.03*s,o=(t-n)*Math.tan(i),l=t*Math.tan(r),c=Math.cos(ut/8),h=n*c+.52*(t-n*c),f=(t-h*c)*Math.tan(i),u=.24*t,d=-(t-u*c)*Math.tan(r),p=a/2,x=(I,L,N)=>new T(I*Math.cos(L),I*Math.sin(L),N),g=[],m=[],_=[],y=[],v=[],b=[],S=[];for(let I=0;I<8;I++){let L=I*ut/4,N=L+ut/8;g.push(x(n,L,p+o)),m.push(x(h,N,p+f)),_.push(x(t,L,p)),y.push(x(t,N,p)),v.push(x(t,L,-p)),b.push(x(t,N,-p)),S.push(x(u,N,-p+d))}let A=new T(0,0,p+o),M=new T(0,0,-p-l),w=[],R=(I,L,N)=>w.push([I,L,N]);for(let I=0;I<8;I++){let L=(I+1)%8,N=(I+7)%8;R(A,g[I],g[L]),R(g[I],g[L],m[I]),R(g[I],m[N],_[I]),R(g[I],_[I],m[I]),R(m[I],_[I],y[I]),R(m[I],y[I],_[L]),R(_[I],v[I],y[I]),R(y[I],v[I],b[I]),R(y[I],b[I],_[L]),R(_[L],b[I],v[L]),R(v[I],b[I],S[I]),R(b[I],v[L],S[I]),R(v[I],S[I],M),R(v[I],M,S[N])}let k=t,z=t;if(e==="oval"||e==="tropfen"){z=t*1.38;let L=new Set;w.forEach(N=>N.forEach(D=>L.add(D)));for(let N of L)if(N.y*=1.38,e==="tropfen"){let D=Qe.clamp(N.y/z,-1,1);N.x*=1-.42*Math.pow(Math.max(0,D),1.35),N.y+=.08*t*(1-D*D)}}return{geometrie:A0(w),rx:k,ry:z,krone:o+p,pavillon:l+p,rundiste:a}}function OE(s){let e=s/2,t=e*1.4,n=.28,i=s*.14,r=s*.42,a=s*.03,o=a/2,l=(p,x,g)=>{let m=n*Math.min(p,x);return[[p-m,x],[-p+m,x],[-p,x-m],[-p,-x+m],[-p+m,-x],[p-m,-x],[p,-x+m],[p,x-m]].map(([_,y])=>new T(_,y,g))},c=[l(e*.7,t*.78,o+i),l(e*.8,t*.86,o+i*.68),l(e*.9,t*.93,o+i*.34),l(e,t,o),l(e,t,-o),l(e*.72,t*.8,-o-r*.36),l(e*.42,t*.58,-o-r*.72),l(e*.06,t*.32,-o-r)],h=[],f=new T(0,0,o+i);for(let p=0;p<8;p++)h.push([f,c[0][p],c[0][(p+1)%8]]);for(let p=0;p<c.length-1;p++)for(let x=0;x<8;x++){let g=(x+1)%8;h.push([c[p][x],c[p+1][x],c[p+1][g]],[c[p][x],c[p+1][g],c[p][g]])}let u=new T(0,0,-o-r),d=c[c.length-1];for(let p=0;p<8;p++)h.push([u,d[(p+1)%8],d[p]]);return{geometrie:A0(h),rx:e,ry:t,krone:i+o,pavillon:r+o,rundiste:a}}function A0(s){let e=[],t=new T,n=0;s.forEach(c=>c.forEach(h=>{t.add(h),n++})),t.multiplyScalar(1/n);let i=new T,r=new T,a=new T,o=new T;for(let[c,h,f]of s)i.subVectors(h,c),r.subVectors(f,c),a.crossVectors(i,r),!(a.lengthSq()<1e-14)&&(o.addVectors(c,h).add(f).multiplyScalar(1/3).sub(t),a.dot(o)>=0?e.push(c.x,c.y,c.z,h.x,h.y,h.z,f.x,f.y,f.z):e.push(c.x,c.y,c.z,f.x,f.y,f.z,h.x,h.y,h.z));let l=new tt;return l.setAttribute("position",new He(e,3)),l.computeVertexNormals(),l}function Qr({stein:s,anzahl:e=4,winkel0:t=ut/4,draht:n=null,tiefe:i=1,leicht:r=!1}){let{rx:a,ry:o,krone:l,pavillon:c}=s,h=Math.max(a,o),f=n??Math.max(.42,h*.17),u=-c*i-f*.6,d=[];for(let g=0;g<e;g++){let m=t+g/e*Jt,_=Math.cos(m)*a,y=Math.sin(m)*o,v=Math.hypot(_,y),b=_/v,S=y/v,A=(R,k)=>new T(b*R,S*R,k),M=v+f*.55,w=[A(v*.34,u+f*.2),A(v*.62,-c*.62),A(M,-c*.16),A(M,l*.22),A(v*.9,l*.46+f*.15)];d.push(BE(w,f/2,.82,r?5:8,r?.3:.12))}let p=r?20:48,x=r?5:8;return d.push(y0(a*.74,o*.74,-c*.5,f*.36,p,x)),r||d.push(y0(a*.36,o*.36,u+f*.25,f*.42,p,x)),{geometrie:In(d),basisZ:u,draht:f}}function BE(s,e,t,n,i=.12){let r=new ss(s,!1,"centripetal"),a=Math.max(8,Math.ceil(r.getLength()/i)),o=r.getSpacedPoints(a-1);return ii(o,{radius:(l,c)=>e*(1-(1-t)*c),segmente:n,kappen:"rund"})}function y0(s,e,t,n,i=48,r=8){let a=[];for(let o=0;o<i;o++){let l=o/i*Jt;a.push(new T(Math.cos(l)*s,Math.sin(l)*e,t))}return ii(a,{radius:n,segmente:r,geschlossen:!0,normalen:a.map(()=>new T(0,0,1))})}function uo({stein:s,wand:e=null,boden:t=!0}){let{rx:n,ry:i,krone:r,pavillon:a}=s,o=n,l=e??Math.max(.32,o*.15),c=r*.32,h=-a*.6,f=o*.07,u=[];t?u.push([0,h],[o*.55,h]):u.push([o*.62,h+l*.2],[o*.75,h]),u.push([o*.86,h+l*.05],[o+l*.72,h+l*.32],[o+l,h+l*.9],[o+l,c-l*.45],[o+l*.93,c-l*.15],[o+l*.72,c],[o+l*.3,c+l*.02],[o-f*.3,c-l*.12],[o-f,c-l*.42],[o*.995,0],[o*.97,-a*.3],[o*.7,h+l*.75]),t&&u.push([0,h+l*.75]);let d=w0(u,64);return Math.abs(i-n)>1e-6&&NE(d,1,i/n,1),{geometrie:d,basisZ:h,aussenRadius:o+l}}function mh(s){let e=s*.24,t=s*.12,n=[[0,-t*.35],[e*.45,-t*.35],[e*.85,-t*.05],[e*1,t*.45],[e*.95,t*.62],[e*.6,t*.42],[0,t*.3]];return{geometrie:w0(n,40),hoehe:t}}function R0(s,{blaetter:e=6}={}){let t=s*.3,n=s*.2,i=[[0,n*.6],[t*.4,n*.55],[t*.7,n*.32],[t*.9,n*.02],[t*.98,n*.08],[t*.82,n*.48],[t*.55,n*.82],[t*.25,n*1],[0,n*1.05]],r=new kr(i.map(([o,l])=>new re(o,l)),48),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),h=a.getZ(o),f=Math.atan2(h,l),u=Math.hypot(l,h)/t,d=.5+.5*Math.cos(f*e);a.setY(o,c-(1-d)*n*.35*Math.pow(u,3))}return r.computeVertexNormals(),{geometrie:r,hoehe:n}}function fo(s,e,{luecke:t=.06,segmente:n=28,radSeg:i=8}={}){let r=new xn(s,e,i,n,Jt-t);return r.rotateZ(ut+t/2),r}function po(s=5.5){let e=s*.11,t=s/2-e,n=s*.17,i=e*.75,r=n+i+t+e*.6,a=new xn(t,e,10,40);a.translate(0,r,0);let o=new xn(n,i,8,20),l=Qe.degToRad(35),c=new gn(e*.75,e*.85,e*2.2,10);c.rotateZ(-l),c.translate(Math.sin(l)*(t+e*1.3),r+Math.cos(l)*(t+e*1.3),0);let h=new gn(i*1.2,i*1.2,r-t-n+e,10);return h.translate(0,(n+r-t)/2,0),{geometrie:In([a,o,c,h]),laenge:r+t+e}}function C0(s=9){let e=s,t=e*.52,n=e*.085,i=e*.035,r=n+i*.5,a=[];for(let f=0;f<96;f++){let u=f/96*Jt,d=Math.sin(u),x=(1-Math.cos(u))/2,g=t*.5*Math.pow(Math.sin(ut*Math.min(1,x*1.02)),.75)*(1-.35*x),m=d*g-.12*t*x*x;a.push(new T(m,r+x*e*.92,0))}let o=(f,u)=>{let d=u*Jt;return e*(.06+.035*Math.max(0,-Math.sin(d)))},l=ii(S0(a,64,!0),{radius:o,ellipse:[.75,1],segmente:10,geschlossen:!0,normalen:Array.from({length:64},()=>new T(0,0,1))}),c=new xn(n,i,8,20);c.rotateY(ut/2);let h=new Un(e*.05,e*.16,e*.09,1,1,1);return h.translate(t*.38,r+e*.3,0),h.deleteAttribute("uv"),{geometrie:In([l,c,h]),laenge:r+e*.95}}function k0(s=6){let e=s*.55,t=s*.08,n=[];for(let a=0;a<48;a++){let o=a/48*Jt;n.push(new re(Math.cos(o)*e/2,Math.sin(o)*s/2))}let i=Xi(n,{hoehe:t*.6,rueckHoehe:t*.6,ringe:6,form:.15});i.translate(0,-s/2-s*.12,0);let r=new xn(s*.12,t*.55,8,16);return{geometrie:In([i,r]),laenge:s*1.12}}function HE(s="halbrund",e=28){let t=[];if(s==="rund"){for(let a=0;a<e;a++){let o=a/e*Jt;t.push([.5+.5*Math.cos(o),.5*Math.sin(o)])}return t}if(s==="flach"){let o=[[.808,.18],[.192,.18],[.192,-.18],[.808,-.18]],l=[[0,ut/2],[ut/2,ut],[ut,1.5*ut],[1.5*ut,Jt]],c=Math.max(3,Math.round(e/4));for(let h=0;h<4;h++)for(let f=0;f<c;f++){let u=l[h][0]+(l[h][1]-l[h][0])*(f/c);t.push([o[h][0]+Math.cos(u)*.32*.6,o[h][1]+Math.sin(u)*.32])}return t}let n=.1,i=Math.round(e*.65);for(let a=0;a<=i;a++){let o=-ut/2+a/i*ut,l=Math.cos(o),c=Math.sin(o);t.push([n+(1-n)*Math.pow(l,.85),.5*Math.sign(c)*Math.pow(Math.abs(c),.9)])}let r=e-i-1;for(let a=1;a<=r;a++){let l=.5-a/(r+1);t.push([n*4*l*l,l*.98])}return t}function Mi({radiusX:s=8.5,radiusZ:e=null,breite:t=2,dicke:n=1.4,profil:i="halbrund",segmente:r=128,profilSegmente:a=28,bogen:o=null,yVersatz:l=null,flachOben:c=null}){let h=e??s,f=HE(i,a),u=f.length,d=!!o,p=d?o[0]:0,x=d?o[1]:Jt,g=d?r+1:r,m=(w,R)=>typeof w=="function"?w(R):w,_=[],y=[];for(let w=0;w<g;w++){let R=p+(x-p)*(w/r);y.push(R);let k=Math.sin(R),z=Math.cos(R),I=k/s,L=z/h,N=Math.hypot(I,L),D=I/N,O=L/N,W=k*s,F=z*h,U=m(t,R),G=m(n,R),ne=l?l(R):0;for(let ie=0;ie<u;ie++){let[ye,Ee]=f[ie],ze=W+D*ye*G,K=F+O*ye*G;c!==null&&K>c&&(K=c),_.push(ze,Ee*U+ne,K)}}let v=[],b=d?g-1:g;for(let w=0;w<b;w++){let R=(w+1)%g;for(let k=0;k<u;k++){let z=(k+1)%u,I=w*u+k,L=R*u+k,N=R*u+z,D=w*u+z;v.push(I,D,L,L,D,N)}}if(d)for(let w of[0,g-1]){let R=y[w],k=w===0?-1:1,z=Math.cos(R)*k,I=-Math.sin(R)*k,L=m(t,R),N=m(n,R),D=w*u,O=0,W=0,F=0;for(let ie=0;ie<u;ie++)O+=_[(D+ie)*3],W+=_[(D+ie)*3+1],F+=_[(D+ie)*3+2];O/=u,W/=u,F/=u;let U=4,G=D,ne=Math.min(L,N)*.5;for(let ie=1;ie<=U;ie++){let ye=ie/U*(ut/2),Ee=Math.cos(ye),ze=_.length/3;for(let K=0;K<u;K++){let J=_[(D+K)*3],le=_[(D+K)*3+1],we=_[(D+K)*3+2];_.push(O+(J-O)*Ee+z*Math.sin(ye)*ne,W+(le-W)*Ee,F+(we-F)*Ee+I*Math.sin(ye)*ne)}for(let K=0;K<u;K++){let J=(K+1)%u,le=G+K,we=ze+K,xe=ze+J,Fe=G+J;w===0?v.push(le,we,Fe,we,xe,Fe):v.push(le,Fe,we,we,Fe,xe)}G=ze}}let S=new tt;if(S.setAttribute("position",new He(_,3)),S.setIndex(v),S.computeVertexNormals(),c!==null){let w=S.attributes.position,R=S.attributes.normal;for(let k=0;k<w.count;k++)w.getZ(k)>=c-1e-6&&R.getZ(k)>.5&&R.setXYZ(k,0,0,1)}let A=0,M=S.attributes.position;for(let w=0;w<M.count;w++)M.getZ(w)>M.getZ(A)&&(A=w);if(S.attributes.normal.getZ(A)<0){let w=S.index.array;for(let R=0;R<w.length;R+=3){let k=w[R+1];w[R+1]=w[R+2],w[R+2]=k}S.index.needsUpdate=!0,S.computeVertexNormals()}return S}function I0(s,e){return ut*(3*(s+e)-Math.sqrt((3*s+e)*(s+3*e)))}function et(s,e,t=""){let n=new Ve(s,e);return n.castShadow=!0,n.name=t,n}var ys=Math.PI;function Ed(s,e){return s==="rund"?e:s==="flach"?Qe.clamp(.42*e+.3,1,2.2):Qe.clamp(.5*e+.25,1,2.4)}function P0(s,e){let t=s.ring,n=Vt(e,s.metall),i=new Ue;i.name="ring";let r=t.innenDurchmesserMm/2,a=t.schieneMm,o=Ed(t.profil,a),l=s._saat||1;switch(t.typ){case"solitaer":f();break;case"perle":u();break;case"offen":d();break;case"siegel":p();break;case"kette":x();break;default:c()}return{gruppe:i,masse:{innenRadiusMm:r},pendel:[]};function c(){i.add(et(e.eigen(Mi({radiusX:r,breite:a,dicke:o,profil:t.profil})),n,"schiene"))}function h(g){return m=>{let _=.5+.5*Math.cos(m);return a*(1-(1-g)*_*_)}}function f(){let g=s.stein,m=vs({groesse:g.groesseMm,schliff:g.schliff}),_=t.krappen===6?6:4,y=Qr({stein:m,anzahl:_,winkel0:_===4?ys/4:ys/2}),v=o*.9;i.add(et(e.eigen(Mi({radiusX:r,breite:h(.78),dicke:A=>o-(o-v)*(.5+.5*Math.cos(A)),profil:t.profil})),n,"schiene"));let b=new Ue;b.name="kopf";let S=r+v*.75-y.basisZ;b.position.z=S,b.add(et(e.eigen(m.geometrie),yi(e,g.art,g.farbe),"stein")),b.add(et(e.eigen(y.geometrie),n,"krappen")),i.add(b)}function u(){let g=s.perlen,m=g.groesseMm;i.add(et(e.eigen(Mi({radiusX:r,breite:h(.8),dicke:o,profil:t.profil})),n,"schiene"));let _=mh(m),y=r+o*.92,v=et(e.eigen(_.geometrie),n,"schale");v.position.z=y,i.add(v);let b=ho({durchmesser:m,form:g.form,farbe:g.farbe,res:e,saat:l,detail:14});b.rotation.x=ys/2,b.position.z=y+_.hoehe*.3+m*qi(g.form)/2*.98,i.add(b)}function d(){let g=s.perlen,m=g.groesseMm,_=Math.max(1,Math.min(2,Math.round(g.anzahl||2))),y=Qe.degToRad(26),v=m*.36,b=y,S=2*ys-y,A=R=>v*((R-ys)/(ys-y));i.add(et(e.eigen(Mi({radiusX:r,breite:a,dicke:o,profil:"rund",bogen:[b,S],yVersatz:A})),n,"schiene"));let M=r+o/2;[{th:b,richtung:-1,y:-v},{th:S,richtung:1,y:v}].forEach((R,k)=>{let z=new T(Math.sin(R.th)*M,R.y,Math.cos(R.th)*M),I=new T(Math.cos(R.th)*M,v/(ys-y),-Math.sin(R.th)*M).normalize().multiplyScalar(R.richtung),L=k===1||_===2,N=L?k===0?m*.82:m:Math.max(2.4,a*1.5),D=L?N*qi(g.form):N,O=new T(Math.sin(R.th),0,Math.cos(R.th)),W=z.clone().addScaledVector(I,D*.22),F=Math.hypot(W.x,W.z);W.addScaledVector(O,Math.max(0,r+.25+N/2-F));let U;L?(U=ho({durchmesser:N,form:g.form,farbe:g.farbe,res:e,saat:l+k,detail:13}),U.quaternion.setFromUnitVectors(new T(0,1,0),W.clone().sub(z).normalize())):U=et(e.eigen(Gn(N/2,3)),n,"kugel"),U.position.copy(W),i.add(U)})}function p(){let g=Math.max(a*2.6,8.5),m=Math.max(o*1.9,2.8),_=M=>{let w=Math.atan2(Math.sin(M),Math.cos(M)),R=Math.max(0,Math.cos(w*1.45));return R*R},y=M=>a+(g-a)*_(M),v=M=>o+(m-o)*_(M),b=g*.46,S=Math.asin(Math.min(.9,b/(r+m))),A=(r+v(S))*Math.cos(S);i.add(et(e.eigen(Mi({radiusX:r,breite:y,dicke:v,profil:"flach",segmente:160,profilSegmente:32,flachOben:A})),n,"schiene"))}function x(){let g=Math.max(1.2,a),m=s.kette?.typ&&s.kette.typ!=="perlenstrang"?s.kette.typ:"anker",_=S=>{let A=[],M=[];for(let w=0;w<256;w++){let R=w/256*2*ys;A.push(new T(Math.sin(R)*S,0,Math.cos(R)*S)),M.push(new T(Math.sin(R),0,Math.cos(R)))}return new Sn(A,{geschlossen:!0,normalen:M})},y=r+g*.4,v=Vn(_(y),{typ:m,staerkeMm:g,material:n,res:new Ks,saat:l}),b=VE(v);v.traverse(S=>{S.isMesh&&S.geometry.dispose()}),i.add(Vn(_(y+(r-b)),{typ:m,staerkeMm:g,material:n,res:e,saat:l}))}}function VE(s){s.updateMatrixWorld(!0);let e=new T,t=new _e,n=new _e,i=1/0;return s.traverse(r=>{if(!r.isMesh)return;let a=r.geometry.attributes.position,o=r.isInstancedMesh?r.count:1;for(let l=0;l<o;l++){r.isInstancedMesh?(r.getMatrixAt(l,n),t.multiplyMatrices(r.matrixWorld,n)):t.copy(r.matrixWorld);for(let c=0;c<a.count;c++)e.fromBufferAttribute(a,c).applyMatrix4(t),i=Math.min(i,Math.hypot(e.x,e.z))}}),i}var bi=Math.PI,Ms=Math.PI*2,z0=["perle","sonne","blume","mond","herz","muenze","tropfen","stein","stern","muschel"];function Td(s,{spec:e,groesseMm:t=12,res:n,saat:i=1}){let r=Vt(n,e.metall),a=t,o=[],l=L0[s]||L0.perle,c={G:a,spec:e,res:n,metall:r,teile:o,saat:i,aufhaengung:null};l(c);let h=new Ue;h.name=`motiv-${s}`;for(let x of o){let g=x.isObject3D?x:et(n.eigen(x.geo),x.material||r,s);h.add(g)}let f=new wt().setFromObject(h),u=(f.min.x+f.max.x)/2,d=(f.min.y+f.max.y)/2;for(let x of h.children)x.position.x-=u,x.position.y-=d;f.translate(new T(-u,-d,0));let p=c.aufhaengung?new re(c.aufhaengung.x-u,c.aufhaengung.y-d):new re(0,f.max.y);return{gruppe:h,hoehe:f.max.y-f.min.y,breite:f.max.x-f.min.x,dicke:f.max.z-f.min.z,rueckZ:f.min.z,obenY:f.max.y,untenY:f.min.y,aufhaengung:p}}function bs(s,{spec:e,groesseMm:t=12,kettenRadius:n=.6,res:i,saat:r=1}){let a=Vt(i,e.metall),o=Td(s,{spec:e,groesseMm:t,res:i,saat:r}),l=new Ue;l.name=`anhaenger-${s}`;let c=t,h=Qe.clamp(.035*c+.12,.3,.5),f=Math.max(n+h+.4,.95),u=n+h-f,d=et(i.eigen(fo(f,h,{luecke:.05,segmente:28})),a,"biegering");d.rotation.y=bi/2,d.position.y=u,l.add(d);let p=h*.95,x=Qe.clamp(.05*c+.45,.65,1.1),g=u-f+h+p-x,m=et(i.eigen(new xn(x,p,8,24)),a,"oese");m.position.y=g,l.add(m);let _=g-x+p*.6,y=s==="perle"?_-o.aufhaengung.y+p*.4:_-o.aufhaengung.y;o.gruppe.position.set(-o.aufhaengung.x,y,0),l.add(o.gruppe);let v=y+o.untenY,b=-(y+(o.obenY+o.untenY)/2);return{gruppe:l,hoeheMm:-v,breiteMm:o.breite,dickeMm:o.dicke,rueckZ:o.rueckZ,schwerpunktMm:Math.max(1,b)}}function GE(s,e){let t=[];for(let n=0;n<e;n++){let i=n/e*Ms;t.push(new re(Math.cos(i)*s,Math.sin(i)*s))}return t}function WE({laenge:s,breite:e,vorn:t,hinten:n,nL:i=14,nW:r=8}){let a=[],o=[];for(let c of[1,-1]){let h=a.length/3,f=c>0?t:n;for(let u=0;u<=i;u++){let d=u/i,p=e(d);for(let x=0;x<=r;x++){let g=-1+2*x/r,m=c*f*Math.pow(Math.max(0,1-g*g),.55)*(1-.55*d);a.push(g*p,d*s,m)}}for(let u=0;u<i;u++)for(let d=0;d<r;d++){let p=h+u*(r+1)+d,x=p+r+1;c>0?o.push(p,p+1,x,p+1,x+1,x):o.push(p,x,p+1,p+1,x,x+1)}}let l=new tt;return l.setAttribute("position",new He(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function XE(s){let e=[];for(let[n,i,r]of s)e.push(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z);let t=new tt;return t.setAttribute("position",new He(e,3)),t.computeVertexNormals(),t}var L0={perle({G:s,spec:e,res:t,metall:n,teile:i,saat:r}){let a=e.perlen||{},o=a.groesseMm||s*.7,l=a.form&&a.form!=="rund"?a.form:"tropfen",c=t.geteilt(`perlgeo:${o.toFixed(2)}:${l}:a${r}`,()=>co({durchmesser:o,form:l,saat:r+5,detail:14}));c.computeBoundingBox();let h=new Ve(c,_s(t,a.farbe||"weiss",r));h.castShadow=!0,h.name="perle";let f=R0(o),u=f.hoehe;f.geometrie.translate(0,-1.05*u,0),h.position.y=-.42*u-c.boundingBox.max.y,i.push({geo:f.geometrie},h)},sonne({G:s,teile:e}){let t=s/2,n=.3*s,i=.06*s+.25,r=Xi(GE(n,72),{hoehe:i*.6,rueckHoehe:i*.35,ringe:12,form:.12}),a=new xn(n*1.02,i*.22,8,72);a.translate(0,0,i*.05);let o=12,l=[r,a];for(let c=0;c<o;c++){let h=bi/2+c/o*Ms,f=c%2===0,u=f?t:t*.84,d=n*.86,p=Ms/o*(f?.5:.42)*d,x=u-d,g=WE({laenge:x,breite:m=>p*(1-m)*(1-.12*Math.sin(bi*m))+.04,vorn:i*.42,hinten:i*.22});g.translate(0,d,0),g.rotateZ(h-bi/2),l.push(g)}e.push({geo:In(l)})},blume({G:s,spec:e,res:t,teile:n,saat:i}){let r=s/2,a=5,o=r*.98,l=s*.4;for(let d=0;d<a;d++){let p=[];for(let m=0;m<64;m++){let _=m/64*Ms,y=.42+.58*Math.pow((1-Math.cos(_))/2,.8);p.push(new re(l/2*Math.sin(_)*y,o*.08+o*.92/2*(1-Math.cos(_))))}let x=Xi(p,{mitte:new re(0,o*.55),hoehe:s*.058,rueckHoehe:s*.028,ringe:10,form:.4}),g=x.attributes.position;for(let m=0;m<g.count;m++){let _=g.getY(m),y=g.getX(m),v=Qe.clamp(_/o,0,1),b=y/(l/2);g.setZ(m,g.getZ(m)+s*.05*b*b*Math.sin(bi*Math.min(1,v*1.1))+s*.06*v*v)}x.computeVertexNormals(),x.rotateZ(d/a*Ms),n.push({geo:x,material:Vt(t,e.metall,"motiv")})}let c=e.perlen||{},h=Math.min(c.groesseMm||s*.36,s*.42),f=t.geteilt(`perlgeo:${h.toFixed(2)}:rund:b${i}`,()=>co({durchmesser:h,form:"rund",saat:i+9,detail:10})),u=new Ve(f,_s(t,c.farbe||"weiss",i+1));u.castShadow=!0,u.rotation.x=bi/2,u.position.z=s*.05+h*.3,u.name="perle",n.push(u)},mond(s){let{G:e,teile:t}=s,n=.33*e,i=.3*e,r=Qe.degToRad(42),a=Qe.degToRad(318),o=v=>i/2*(.05+.95*Math.pow(Math.sin(bi*v),.85)),l=[],c=[],h=90,f=0,u=0;for(let v=0;v<=h;v++){let b=v/h,S=r+(a-r)*b;l.push(new T(Math.cos(S)*n,Math.sin(S)*n,0)),c.push(new T(0,0,1));let A=o(b)**2;f+=Math.cos(S)*n*A,u+=A}let d=ii(l,{radius:(v,b)=>o(b),ellipse:[.5,1],segmente:14,kappen:"rund",normalen:c}),p=f/u,x=Qe.degToRad(100),g=(x-r)/(a-r),m=n+o(g)*.92,_=new re(Math.cos(x)*m,Math.sin(x)*m),y=bi/2-Math.atan2(_.y,_.x-p);d.rotateZ(y),s.aufhaengung=_.rotateAround(new re,y),t.push({geo:d})},herz(s){let{G:e,teile:t}=s,n=e/31,i=[];for(let a=0;a<128;a++){let o=a/128*Ms,l=16*Math.pow(Math.sin(o),3),c=13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o);i.push(new re(l*n,c*n))}wd(i)<0&&i.reverse();let r=Xi(i,{mitte:new re(0,-1.5*n),hoehe:e*.2,rueckHoehe:e*.1,ringe:14,form:.55});s.aufhaengung=new re(0,5*n+e*.02),t.push({geo:r})},muenze({G:s,teile:e,saat:t}){let n=s/2,i=.075*s+.25,r=Math.min(i*.55,n*.12)/n,a=lo(t*3+17),o=[],l=1.25;for(let u=-n-l;u<=n+l;u+=l*.87)for(let d=-n-l;d<=n+l;d+=l){let p=Math.round(u/(l*.87))%2*l*.5;o.push([d+p+(a()-.5)*l*.6,u+(a()-.5)*l*.6,.6+a()*.6])}let c=(u,d,p)=>{let x=1e9,g=1;for(let _ of o){let y=(u-_[0])**2+(d-_[1])**2;y<x&&(x=y,g=_[2])}let m=Qe.smoothstep(1-r*1.3-p,0,.1);return Math.max(0,(1-x/(l*l*.5))*.07*g*m)},h=u=>{let d=(u-(1-r))/r;return d<=0?1:Math.sqrt(Math.max(0,1-d*d))},f=T0({radius:n,ringe:Math.max(24,Math.round(n/.17)),randDichte:1.35,vorn:(u,d,p)=>i/2*h(p)-c(u,d,p),hinten:(u,d,p)=>i/2*h(p)-c(-u*.93+.4,d*.97-.3,p)*.8});e.push({geo:f})},tropfen({G:s,teile:e}){let t=s,n=.62*s,i=[];for(let a=0;a<96;a++){let o=a/96*Ms;i.push(new re(n/2*Math.sin(o)*Math.pow((1-Math.cos(o))/2,.75),t/2*Math.cos(o)))}wd(i)<0&&i.reverse();let r=Xi(i,{mitte:new re(0,-.18*t),hoehe:n*.26,rueckHoehe:n*.16,ringe:14,form:.55});e.push({geo:r})},stein({G:s,spec:e,res:t,teile:n}){let i=e.stein||{},r=i.groesseMm||s*.6,a=vs({groesse:r,schliff:i.schliff||"brillant"}),o=uo({stein:a});n.push({geo:a.geometrie,material:yi(t,i.art||"zirkonia",i.farbe)},{geo:o.geometrie})},stern({G:s,teile:e}){let t=s/2,n=t*.46,i=s*.15,r=s*.05,a=.12,o=new T(0,0,i),l=new T(0,0,-r),c=[];for(let f=0;f<10;f++){let u=bi/2+f/10*Ms,d=f%2?n:t;c.push([Math.cos(u)*d,Math.sin(u)*d])}let h=[];for(let f=0;f<10;f++){let[u,d]=c[f],[p,x]=c[(f+1)%10],g=new T(u,d,a),m=new T(p,x,a),_=new T(u,d,-a),y=new T(p,x,-a);h.push([o,g,m],[l,y,_],[g,_,y],[g,y,m])}e.push({geo:XE(h)})},muschel({G:s,teile:e}){let t=.78*s,n=13,i=Qe.degToRad(46),r=n*bi/i/2,a=[];a.push(new re(-.2*s,.02*s),new re(-.21*s,-.06*s),new re(-.12*s,-.13*s));let o=120;for(let f=0;f<=o;f++){let u=-i+2*i*f/o,d=t*(.985+.015*Math.cos(u*r*2));a.push(new re(Math.sin(u)*d,-Math.cos(u)*d))}a.push(new re(.12*s,-.13*s),new re(.21*s,-.06*s),new re(.2*s,.02*s));let l=[];for(let f=0;f<a.length;f++){let u=a[f],d=a[(f+1)%a.length],p=Math.max(1,Math.ceil(u.distanceTo(d)/(s*.03)));for(let x=0;x<p;x++)l.push(u.clone().lerp(d,x/p))}wd(l)<0&&l.reverse();let c=Xi(l,{mitte:new re(0,-.45*t),hoehe:s*.17,rueckHoehe:s*.05,ringe:16,form:.6}),h=c.attributes.position;for(let f=0;f<h.count;f++){let u=h.getX(f),d=h.getY(f),p=h.getZ(f);if(p<=0)continue;let x=Math.atan2(u,-d),g=Math.hypot(u,d)/t,m=.5+.5*Math.cos(x*r*2),_=Qe.smoothstep(g,.12,.65);h.setZ(f,p+s*.045*_*(m-.5)*Math.min(1,p/(s*.05)))}c.computeVertexNormals(),e.push({geo:c})}};function wd(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n.x*i.y-i.x*n.y}return e/2}var fn=Math.PI,qE=1.24;function gh(s,e=qE){let t=s/I0(e,1);return{a:t*e,b:t}}function Ad(s,e,t=360){let n=[],i=[];for(let r=0;r<t;r++){let a=fn+r/t*2*fn;n.push(new T(Math.sin(a)*s,0,Math.cos(a)*e)),i.push(new T(Math.sin(a)/s,0,Math.cos(a)/e).normalize())}return new Sn(n,{geschlossen:!0,normalen:i})}function $E(s,e,t,n){let i=s.punkte.map((o,l)=>{let c=0;for(let h of e){let f=Math.abs(s.s[l]-h);f=Math.min(f,s.laenge-f),f<n&&(c=Math.max(c,.5+.5*Math.cos(fn*f/n)))}return o.clone().addScaledVector(s.normalen[l],t*c)}),r=new Sn(i,{geschlossen:!0,normalen:s.normalen}),a=o=>{let l=0;for(;l<s.punkte.length-1&&s.s[l+1]<=o;)l++;return l};return{pfad:r,stellen:e.map(o=>r.s[a(o)])}}function Ss(s,e){let t=s.punkt(e),n=s.tangente(e),i=s.normale(e),r=new T().crossVectors(n,i);return{position:t,quaternion:new $e().setFromRotationMatrix(new _e().makeBasis(r,n,i))}}function KE(s,e,t){let n=new Ue;n.name=t;let i=s.punkt(e),r=s.tangente(e),a=s.normale(e),o=new T().crossVectors(a,r).normalize(),l=new T().crossVectors(o,a);return n.quaternion.setFromRotationMatrix(new _e().makeBasis(l,o,a)),n.position.copy(i),n}function N0(s,e){let t=s.armband,n;switch(t.typ){case"perlen":n=jE(s,e);break;case"reif":n=JE(s,e);break;case"tennis":n=QE(s,e);break;default:n=ZE(s,e)}let i=n.masse.innenRadienMm,r=YE(n.gruppe,i.x,i.z,n.pendel.map(a=>a.knoten));return n.masse.innenRadienMm={x:i.x*r,z:i.z*r},n}function YE(s,e,t,n){s.updateMatrixWorld(!0);let i=new Set;for(let c of n)c.traverse(h=>i.add(h));let r=new T,a=new _e,o=new _e,l=1/0;return s.traverse(c=>{if(!c.isMesh||i.has(c))return;let h=c.geometry.attributes.position,f=c.isInstancedMesh?c.count:1;for(let u=0;u<f;u++){c.isInstancedMesh?(c.getMatrixAt(u,o),a.multiplyMatrices(c.matrixWorld,o)):a.copy(c.matrixWorld);for(let d=0;d<h.count;d++)r.fromBufferAttribute(h,d).applyMatrix4(a),l=Math.min(l,Math.hypot(r.x/e,r.z/t))}}),Number.isFinite(l)?Math.min(l,1.05):1}function ZE(s,e){let t=s.armband,n=s.kette,i=Vt(e,s.metall),r=new Ue;r.name="armband";let a=[],o=s._saat||1,l=n.staerkeMm,{a:c,b:h}=gh(t.laengeCm*10),f=Ad(c,h),u=s.perlen,d=[];if(u.anordnung==="stationen"&&u.anzahl>0){let D=Math.round(u.anzahl);for(let W=0;W<D;W++)d.push(f.laenge/2+(W-(D-1)/2)*u.abstandMm);let O=u.groesseMm/2-l/2;if(O>0){let W=$E(f,d,O,O*5+3);f=W.pfad,d=W.stellen}}let p=f.laenge,g=l>=2.2?C0(Qe.clamp(l*4.5,8,13)):po(Qe.clamp(l*3.4+1.6,4.5,6.5)),m=Math.max(.3,l*.22),_=Math.max(l*.55+m,1),y=g.laenge+_*2,v=y/2,b=p-y/2,S=et(e.eigen(g.geometrie),i,"verschluss"),A=Ss(f,v);S.position.copy(A.position),S.quaternion.copy(A.quaternion).multiply(new $e().setFromAxisAngle(new T(0,0,1),fn)),r.add(S);let M=et(e.eigen(fo(_,m)),i,"biegering"),w=Ss(f,b+_*.3);M.position.copy(w.position),M.position.addScaledVector(f.normale(b+_*.3),Math.max(0,_+m-l/2)),M.quaternion.copy(w.quaternion).multiply(new $e().setFromAxisAngle(new T(0,1,0),fn/2)),r.add(M);let R=[],k=v;for(let D of d)R.push([k,D-u.groesseMm*.42]),k=D+u.groesseMm*.42;R.push([k,b]),R.forEach(([D,O],W)=>{O-D>l&&r.add(Vn(f,{typ:n.typ==="perlenstrang"?"anker":n.typ,staerkeMm:l,s0:D,s1:O,material:i,res:e,saat:o+W}))}),d.length&&r.add(Jr(d.map(D=>Ss(f,D)),{durchmesser:u.groesseMm,form:u.form,farbe:u.farbe,res:e,saat:o}));let z=[],I=s.anhaenger;if(I&&I.typ!=="keiner"&&z.push({typ:I.typ,groesse:I.groesseMm}),u.anordnung==="einzeln"&&u.anzahl>0)for(let D=0;D<Math.min(3,Math.round(u.anzahl));D++)z.push({typ:"perle",groesse:u.groesseMm});let L=7.5;z.forEach((D,O)=>{let W=(O-(z.length-1)/2)*L,F=KE(f,p/2+W,`charm-${D.typ}`),U=bs(D.typ,{spec:s,groesseMm:D.groesse,kettenRadius:l/2,res:e,saat:o+O});F.add(U.gruppe),r.add(F),a.push({knoten:F,laengeMm:U.schwerpunktMm,achse:"frei"})});let N=t.verlaengerungCm*10;if(N>3){let D=new Ue;D.name="verlaengerung",D.position.copy(f.punkt(b+_*.3)),D.position.z-=_*.8,D.rotation.x=fn/2;let O=[],W=[];for(let ne=0;ne<=40;ne++)O.push(new T(0,-(ne/40)*N,0)),W.push(new T(0,0,1));let F=new Sn(O,{normalen:W}),U=Math.max(l*1.15,1.4);D.add(Vn(F,{typ:"anker",staerkeMm:U,material:i,res:e,saat:o+7}));let G=new Ue;if(G.position.y=-N,u.anzahl>0){let ne=bs("perle",{spec:{...s,perlen:{...u,groesseMm:Math.min(4.5,u.groesseMm),form:"tropfen"}},groesseMm:4,kettenRadius:U*.3,res:e,saat:o+13});G.add(ne.gruppe)}else{let ne=et(e.eigen(Gn(1.4,3)),i,"endkugel");ne.position.y=-1.6,G.add(ne)}D.add(G),r.add(D),a.push({knoten:D,laengeMm:N*.6,achse:"frei"})}return{gruppe:r,masse:{innenRadienMm:{x:c-l/2,z:h-l/2},laengeMm:t.laengeCm*10},pendel:a}}function jE(s,e){let t=s.armband,n=s.perlen,i=Vt(e,s.metall),r=new Ue;r.name="perlenarmband";let a=s._saat||1,o=n.groesseMm,l=o*qi(n.form),c=t.zwischenperlenMm,{a:h,b:f}=gh(t.laengeCm*10),u=Ad(h,f),d=u.laenge,p=po(4.8),x=p.laenge+2.2,g=d-x,m=l+.25+(c>0?c+.25:0),_=Math.max(4,Math.floor(g/m)),y=(g-_*m)/2,v=[],b=[];for(let z=0;z<_;z++){let I=x/2+y+m*z+(l+.25)/2+(c>0?(c+.25)/2:0);v.push(Ss(u,I)),c>0&&(b.push(I-(l+.25)/2-(c+.25)/2),z===_-1&&b.push(I+(l+.25)/2+(c+.25)/2))}if(r.add(Jr(v,{durchmesser:o,form:n.form,farbe:n.farbe,res:e,saat:a})),b.length){let z=e.eigen(Gn(c/2,2)),I=new $t(z,i,b.length);b.forEach((L,N)=>I.setMatrixAt(N,new _e().setPosition(u.punkt(L)))),I.instanceMatrix.needsUpdate=!0,I.computeBoundingSphere(),I.castShadow=!0,I.name="zwischenperlen",r.add(I)}let S=x/2+y-.2,A=d-x/2-y+.2;r.add(Vn(u,{typ:"anker",staerkeMm:1,s0:x/2-.3,s1:S,material:i,res:e,saat:a})),r.add(Vn(u,{typ:"anker",staerkeMm:1,s0:A,s1:d-x/2+.3,material:i,res:e,saat:a+1}));let M=et(e.eigen(p.geometrie),i,"verschluss"),w=Ss(u,x/2-.3);M.position.copy(w.position),M.quaternion.copy(w.quaternion).multiply(new $e().setFromAxisAngle(new T(0,0,1),fn)),r.add(M);let R=et(e.eigen(fo(1.1,.32)),i,"biegering"),k=Ss(u,d-x/2+.6);return R.position.copy(k.position),R.quaternion.copy(k.quaternion).multiply(new $e().setFromAxisAngle(new T(0,1,0),fn/2)),r.add(R),{gruppe:r,masse:{innenRadienMm:{x:h-o/2,z:f-o/2},laengeMm:t.laengeCm*10},pendel:[]}}function JE(s,e){let t=s.armband,n=Vt(e,s.metall),i=new Ue;i.name="armreif";let r=t.laengeCm*10,{a,b:o}=gh(r,1.2),l=t.breiteMm,c=s.ring?.profil||"halbrund",h=Ed(c,l)*.9,f=t.offen?[fn+.32,3*fn-.32]:null,u=Mi({radiusX:a,radiusZ:o,breite:l,dicke:h,profil:c,segmente:160,bogen:f});if(i.add(et(e.eigen(u),n,"reif")),t.offen){let p=s.perlen;for(let x of[fn+.32,3*fn-.32]){let g=d(p,x);g&&i.add(g)}}function d(p,x){let g=Math.max(l*.75,2.2),m=et(e.eigen(Gn(g,3)),n,"endkugel"),_=Math.sin(x)/a,y=Math.cos(x)/o,v=Math.hypot(_,y);return m.position.set(Math.sin(x)*a+_/v*h*.5,0,Math.cos(x)*o+y/v*h*.5),m}return{gruppe:i,masse:{innenRadienMm:{x:a,z:o},laengeMm:r,starr:!0},pendel:[]}}function QE(s,e){let t=s.armband,n=s.stein,i=Vt(e,s.metall),r=new Ue;r.name="tennisarmband";let a=Qe.clamp(n.groesseMm,1.8,5),o=vs({groesse:a,schliff:"brillant"}),l=Qr({stein:o,anzahl:4,winkel0:fn/4,draht:a*.13,tiefe:.9,leicht:!0}),c=new gn(a*.52,a*.4,o.pavillon*.75,4,1,!0);c.rotateY(fn/4),c.rotateX(fn/2),c.translate(0,0,-o.pavillon*.55),c.computeVertexNormals();let h=new gn(a*.11,a*.11,a*.95,8);h.rotateZ(fn/2),h.translate(0,a*.52,-o.pavillon*.75);let f=e.eigen(In([l.geometrie,c,h])),u=o.pavillon+a*.15,{a:d,b:p}=gh(t.laengeCm*10),x=Ad(d+u*.5,p+u*.5),g=x.laenge,m=a*2.2,_=a+.62,y=Math.max(6,Math.floor((g-m)/_)),v=(g-m)/y,b=yi(e,n.art,n.farbe),S=new $t(e.eigen(o.geometrie),b,y),A=new $t(f,i,y),M=new _e;for(let z=0;z<y;z++){let I=Ss(x,m/2+v*(z+.5));M.compose(I.position,I.quaternion,new T(1,1,1)),S.setMatrixAt(z,M),A.setMatrixAt(z,M)}for(let z of[S,A])z.instanceMatrix.needsUpdate=!0,z.computeBoundingSphere(),z.castShadow=!0,r.add(z);let w=new Un(a*1.05,m*.95,o.pavillon*.9,2,2,2);w.deleteAttribute("uv");let R=et(e.eigen(w),i,"schloss"),k=Ss(x,0);return R.position.copy(k.position),R.quaternion.copy(k.quaternion),R.translateZ(-o.pavillon*.3),r.add(R),{gruppe:r,masse:{innenRadienMm:{x:d,z:p},laengeMm:t.laengeCm*10},pendel:[]}}var Es=Math.PI,xh={halsRadius:55,halsMitteZ:-55,halsTiefeHinten:48,brustNeigung:Qe.degToRad(25),rueckenHoehe:40,seitenHoehe:12,rundung:.0042},mo=[[300,3.4],[400,3.1],[450,2.2],[500,1.6],[600,1.4],[1e3,1.4]];function ew(s){for(let e=1;e<mo.length;e++){let[t,n]=mo[e],[i,r]=mo[e-1];if(s<=t)return r+(n-r)*(s-i)/(t-i)}return mo[mo.length-1][1]}var D0=2.6,U0=7;function tw(s){return 1/(1+Math.exp(-s))}function nw(s,e){let t=xh,n=t.halsRadius,i=Math.max(1e-6,n*n-s*s),r=t.halsMitteZ+Math.sqrt(i),a=-s/Math.sqrt(i),o=Math.tan(t.brustNeigung),l=6,c=l*Math.log1p(Math.exp(e/l)),h=-o*e-(D0-o)*c-t.rundung*s*s,f=-o-(D0-o)*tw(e/l),u=-2*t.rundung*s,d=Qe.clamp(.5+.5*(r-h)/U0,0,1),p=h+(r-h)*d+U0*d*(1-d)*.5,x=u+(a-u)*d,g=f*(1-d);return{z:p,zx:x,zy:g}}function iw(s,{abstand:e=.6,anhaenger:t=!1,aufloesung:n=.6}={}){let i=Qe.clamp(s,300,1e3),r=ew(i)-(t?.15:0),a=g=>F0(g,e,r,140),o=g=>B0(a(g).punkte),l=-xh.seitenHoehe+4,c=380;o(l)>i&&(c=l);for(let g=0;g<40&&c-l>.02;g++){let m=(l+c)/2;o(m)<i?l=m:c=m}let h=(l+c)/2,f=F0(h,e,r,420),u=new Sn(f.punkte,{geschlossen:!0,normalen:f.normalen}),d=Math.max(200,Math.round(u.laenge/n)),p=[],x=[];for(let g=0;g<d;g++){let m=u.laenge*g/d;p.push(u.punkt(m)),x.push(u.normale(m))}return{punkte:p,normalen:x,tiefe:h,laenge:u.laenge}}function B0(s){let e=0;for(let t=0;t<s.length;t++)e+=s[t].distanceTo(s[(t+1)%s.length]);return e}function F0(s,e,t,n){let i=xh,r=i.halsRadius,a=i.halsTiefeHinten,o=t,l=t,c=[],h=[],f=Math.round(n*.35);for(let y=0;y<=f;y++){let v=Es-y/f*(Es/2),b=(Es-v)/(Es/2),S=i.rueckenHoehe+(i.seitenHoehe-i.rueckenHoehe)*(1-Math.cos(b*Es))/2,A=new T(Math.sin(v)/r,0,Math.cos(v)/a).normalize();c.push(new T(Math.sin(v)*r,S,i.halsMitteZ+Math.cos(v)*a).addScaledVector(A,e)),h.push(A)}let u=[],d=[],p=n,x=i.seitenHoehe;for(let y=1;y<=p;y++){let v=y/p*(Es/2),b=r*Math.pow(Math.cos(v),2/o),S=x-(x+s)*Math.pow(Math.sin(v),2/l),A=nw(Math.min(b,r-1e-4),S),M=new T(-A.zx,-A.zy,1).normalize();u.push(new T(b,S,A.z).addScaledVector(M,e)),d.push(M)}let g=[...c,...u],m=[...h,...d],_=y=>new T(-y.x,y.y,y.z);for(let y=g.length-2;y>=1;y--)g.push(_(g[y])),m.push(_(m[y]));return{punkte:g,normalen:m}}function H0(s,e){let t=s.kette,n=Vt(e,s.metall),i=new Ue;i.name="kette";let r=[],a=s._saat||1,o=t.laengeCm*10,l=t.typ==="perlenstrang",c=s.perlen,h=t.staerkeMm,f=l?c.groesseMm/2*(c.form==="barock"?1.2:1.1):h/2,u=s.anhaenger,d=u&&u.typ!=="keiner",p=!d&&c.anordnung==="einzeln"&&c.anzahl>0&&!l,x=iw(o,{abstand:f,anhaenger:d||p}),g=[],m=B0(x.punkte);if(!l&&c.anordnung==="stationen"&&c.anzahl>0){let N=Math.round(c.anzahl);for(let D=0;D<N;D++)g.push(m/2+(D-(N-1)/2)*c.abstandMm);sw(x,g,c.groesseMm/2-f)}let _=new Sn(x.punkte,{geschlossen:!0,normalen:x.normalen}),y=_.laenge,v=y/2,b=Qe.clamp(h*3.6+1.6,4.5,7),S=po(b),A=k0(Qe.clamp(b*.95,4.5,6.5)),M=S.laenge+A.laenge*.9,w=M/2,R=y-M/2,k=new Ue;k.name="verschluss";let z=et(e.eigen(S.geometrie),n,"federring");z.position.y=0,k.add(z);let I=et(e.eigen(A.geometrie),n,"plaettchen");if(k.add(I),O0(z,_,w,-1),O0(I,_,R,-1),i.add(k),l){let N=c.groesseMm,O=N*qi(c.form)+.35,W=1.6,F=R-w-2*W,U=Math.max(3,Math.floor(F/O)),G=(F-U*O)/2,ne=[];for(let ye=0;ye<U;ye++){let Ee=w+W+G+O*(ye+.5);ne.push(Rd(_,Ee))}i.add(Jr(ne,{durchmesser:N,form:c.form,farbe:c.farbe,res:e,saat:a}));let ie=e.eigen(Gn(.9,2));for(let ye of[w+W*.55+G*.5,R-W*.55-G*.5]){let Ee=et(ie,n,"kalotte");_.punkt(ye,Ee.position),i.add(Ee)}}else{let N=[],D=w,O=c.groesseMm*.42;for(let W of g)N.push([D,W-O]),D=W+O;if(N.push([D,R]),N.forEach(([W,F],U)=>{F-W>h&&i.add(Vn(_,{typ:t.typ,staerkeMm:h,s0:W,s1:F,material:n,res:e,saat:a+U}))}),g.length){let W=g.map(F=>Rd(_,F));i.add(Jr(W,{durchmesser:c.groesseMm,form:c.form,farbe:c.farbe,res:e,saat:a+3}))}}let L=0;if(d||p){let N=d?u.typ:"perle",D=bs(N,{spec:s,groesseMm:d?u.groesseMm:c.groesseMm,kettenRadius:f,res:e,saat:a}),O=new Ue;O.name="anhaenger";let W=_.punkt(v),F=_.normale(v),U=new T(1,0,0),G=new T().crossVectors(F,U).normalize(),ne=new T().crossVectors(U,G);O.quaternion.setFromRotationMatrix(new _e().makeBasis(U,G,ne)),O.position.copy(W);let ie=-D.rueckZ-f;if(ie>0){let ye=Math.atan2(ie,Math.max(2,D.hoeheMm*.8));O.quaternion.multiply(new $e().setFromAxisAngle(new T(1,0,0),-ye))}O.add(D.gruppe),i.add(O),r.push({knoten:O,laengeMm:D.schwerpunktMm,achse:"z"}),L=D.hoeheMm}return{gruppe:i,masse:{halsRadiusMm:xh.halsRadius,laengeMm:y,tiefeMm:x.tiefe+L},pendel:r}}function Rd(s,e){let t=s.punkt(e),n=s.tangente(e),i=s.normale(e),r=new T().crossVectors(n,i),a=new $e().setFromRotationMatrix(new _e().makeBasis(r,n,i));return{position:t,quaternion:a}}function O0(s,e,t,n){let i=Rd(e,t);s.position.copy(i.position),s.quaternion.copy(i.quaternion),n<0&&s.quaternion.multiply(new $e().setFromAxisAngle(new T(0,0,1),Es))}function sw(s,e,t){if(t<=0)return;let n=s.punkte,i=s.normalen,r=[0];for(let o=1;o<n.length;o++)r.push(r[o-1]+n[o].distanceTo(n[o-1]));let a=t*6+4;for(let o=0;o<n.length;o++){let l=0;for(let c of e){let h=Math.abs(r[o]-c);h<a&&(l=Math.max(l,.5+.5*Math.cos(Es*h/a)))}l>0&&n[o].addScaledVector(i[o],t*l)}}var Wn=Math.PI,rw=Math.PI*2,si=1.6,aw=Qe.degToRad(24);function V0(s,e){let t=s.ohrring,n=Vt(e,s.metall),i=new Ue;i.name="ohrring";let r=[],a=s._saat||1,o=0;switch(t.typ){case"creole":u(!1);break;case"huggie":u(!0);break;case"haenger":d();break;case"perlenstecker":f();break;default:h()}i.updateMatrixWorld(!0);let l=new wt().setFromObject(i);return o=Math.max(o,-l.min.y),{gruppe:i,masse:{laengeMm:o,hoeheMm:l.max.y-l.min.y},pendel:r};function c(p){let g=new gn(.4,.4,p+9.4,10);g.rotateZ(Wn/2),g.translate((p-9.4)/2,0,0);let m=new zi(.4,10,6);m.translate(-9.4,0,0);let _=-si-.25,y=[];for(let A=0;A<48;A++){let M=A/48*rw,w=Math.cos(M),R=Math.sin(M);y.push(new re(2.4*Math.sign(w)*Math.pow(Math.abs(w),.6),1.55*Math.sign(R)*Math.pow(Math.abs(R),.6)))}let v=Xi(y,{hoehe:.14,rueckHoehe:.14,ringe:4,form:.2});v.rotateY(-Wn/2),v.translate(_,0,0);let b=new gn(.75,.8,1.5,16,1);b.rotateZ(Wn/2),b.translate(_-.75,0,0);let S=[g,m,v,b];for(let A of[1,-1]){let M=[[_-.05,2.25],[_-.75,2.55],[_-1.45,2.05],[_-1.4,1.2],[_-.95,.9]].map(([k,z])=>new T(k,0,z*A)),R=new ss(M,!1,"centripetal").getSpacedPoints(24);S.push(ii(R,{radius:1.25,ellipse:[1,.12],segmente:12,kappen:"flach",normalen:R.map(()=>new T(0,1,0))}))}i.add(et(e.eigen(In(S)),n,"stift"))}function h(){let p=s.anhaenger,x;if(p&&p.typ!=="keiner"&&p.typ!=="stein"){let g=Td(p.typ,{spec:s,groesseMm:p.groesseMm,res:e,saat:a});x=g.gruppe,x.rotation.y=Wn/2,x.position.x=si-g.rueckZ,o=g.hoehe/2}else{let g=s.stein,m=vs({groesse:g.groesseMm,schliff:g.schliff}),_=g.groesseMm>5?Qr({stein:m,anzahl:4,winkel0:Wn/4}):uo({stein:m});x=new Ue,x.add(et(e.eigen(m.geometrie),yi(e,g.art,g.farbe),"stein")),x.add(et(e.eigen(_.geometrie),n,"fassung")),x.rotation.y=Wn/2,x.position.x=si-_.basisZ,o=m.ry+.4}i.add(x),c(si+.3)}function f(){let p=s.perlen,x=p.groesseMm,g=p.form==="tropfen"||p.form==="reis"?"rund":p.form,m=mh(x),_=et(e.eigen(m.geometrie),n,"schale");_.rotation.y=Wn/2,_.position.x=si+m.hoehe*.35,i.add(_);let y=ho({durchmesser:x,form:g,farbe:p.farbe,res:e,saat:a,detail:14});y.rotation.z=-Wn/2,y.position.x=si+m.hoehe*.65+x*qi(g)/2*.97,i.add(y),o=x/2,c(si+m.hoehe*.4)}function u(p){let x=t.durchmesserMm,g=t.staerkeMm,m=t.profil||"rund",_=p?g*.82:m==="rund"?g:g*.8,y=x/2-_,v=y+_/2,b=new Ue;b.name=p?"huggie":"creole";let S=Mi({radiusX:y,breite:g,dicke:_,profil:m,segmente:96}),A=et(e.eigen(S),n,"reif");A.rotation.z=-Wn/2,A.position.y=-v,b.add(A),b.rotation.y=aw,i.add(b),o=2*v+_/2;let M=s.anhaenger;if(M&&M.typ!=="keiner"){let w=new Ue;w.name="tropfen",w.position.set(0,-2*v,0),w.rotation.y=Wn/2;let R=bs(M.typ,{spec:s,groesseMm:M.groesseMm,kettenRadius:_/2,res:e,saat:a});w.add(R.gruppe),b.add(w),r.push({knoten:w,laengeMm:R.schwerpunktMm,achse:"frei"}),o=2*v+R.hoeheMm}p||r.push({knoten:b,laengeMm:v,achse:"frei"})}function d(){let p=s.anhaenger&&s.anhaenger.typ!=="keiner"?s.anhaenger:{typ:"perle",groesseMm:s.perlen.groesseMm},x=.95,g;if(t.befestigung==="haken"){let S=[[-3.5,-11],[-5.2,-6.5],[-4.4,-1.6],[-2.2,.6],[0,.6],[2.2,.2],[3.4,-1.6],[3.5,-4.2],[3.5,-5.6]].map(([R,k])=>new T(R,k,0)),A=E0(S,.4,{segmente:8}),M=new xn(.75,.38,8,20);M.translate(3.5,-6.5,0);let w=Gn(.9,2);w.translate(3.5,-2.6,0),i.add(et(e.eigen(In([A,M,w])),n,"haken")),g=new T(3.5,-6.5-.75+.38,0)}else{let A=Gn(1.8,3);A.translate(si+1.8*.95,0,0);let M=new xn(.6,.3,8,18);M.rotateY(Wn/2),M.translate(si+1.8*.95,-1.8-.35,0),i.add(et(e.eigen(In([A,M])),n,"kugel")),c(si+.3),g=new T(si+1.8*.95,-1.8-.35-.6+.3,0)}let m=new Ue;m.name="haenger",m.position.copy(g);let _=bs(p.typ,{spec:s,groesseMm:p.groesseMm,kettenRadius:x*.3,res:e,saat:a}),y=Math.max(0,t.laengeMm- -g.y-_.hoeheMm),v=0;if(y>2.5){let S=[],A=[];for(let M=0;M<=20;M++)S.push(new T(0,-(M/20)*y,0)),A.push(new T(1,0,0));m.add(Vn(new Sn(S,{normalen:A}),{typ:"anker",staerkeMm:x,material:n,res:e,saat:a})),v=-y}let b=new Ue;b.position.y=v,b.rotation.y=Wn/2,b.add(_.gruppe),m.add(b),i.add(m),r.push({knoten:m,laengeMm:(y+_.hoeheMm)*.6,achse:"frei"}),o=-g.y+y+_.hoeheMm}}function ow(s,e=["gold","silber"]){let t={gold:"Gold",silber:"Silber",rosegold:"Ros\xE9gold",weissgold:"Wei\xDFgold"};return e.map(n=>({name:t[n],spec:{...s,metall:n,name:t[n]}}))}function Qt(s,e,t,n){let i=ow(t,n);return{name:s,beschreibung:e,spec:i[0].spec,varianten:i}}var G0={"perlentropfen-ohrringe":Qt("Perlentropfen-Ohrringe","Goldene Huggie-Creole (12 mm) mit beweglichem S\xFC\xDFwasserperlen-Tropfen.",{art:"ohrringe",metall:"gold",ohrring:{typ:"huggie",durchmesserMm:12,staerkeMm:2.1},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"weiss"}}),"basic-creolen":Qt("Basic Creolen","Schlichte, runde Creolen, 18 mm, hochglanzpoliert.",{art:"ohrringe",metall:"gold",ohrring:{typ:"creole",durchmesserMm:18,staerkeMm:2.2,profil:"rund"}}),"sonnen-ohrstecker":Qt("Sonnen-Ohrstecker","Kleine Sonne mit facettierten Strahlen als Ohrstecker, 9 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"stecker"},anhaenger:{typ:"sonne",groesseMm:9}}),"perlen-ohrstecker":Qt("Perlen-Ohrstecker","Klassische S\xFC\xDFwasserperle (7 mm, Button) auf goldener Schale.",{art:"ohrringe",metall:"gold",ohrring:{typ:"perlenstecker"},perlen:{groesseMm:7,form:"button",farbe:"weiss"}}),"perlen-haenger":Qt("Perlen-H\xE4nger","Goldkugel-Stecker mit feinem Kettchen und tropfenf\xF6rmiger Perle, ca. 30 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"haenger",laengeMm:30},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"creme"}}),"lunara-armband":Qt("Lunara Armband","Feine Ankerkette mit Mond-Charm und kleiner S\xFC\xDFwasserperle, 17 cm + 4 cm Verl\xE4ngerung.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:4},kette:{typ:"anker",staerkeMm:1.3},anhaenger:{typ:"mond",groesseMm:9},perlen:{anordnung:"einzeln",anzahl:1,groesseMm:4.5,form:"tropfen",farbe:"weiss"}}),"perlen-armband":Qt("Perlen-Armband","S\xFC\xDFwasserperlen (6 mm) auf Draht, getrennt durch goldene Zwischenperlen.",{art:"armband",metall:"gold",armband:{typ:"perlen",laengeCm:17,zwischenperlenMm:2.5},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"zartes-perlenarmband":Qt("Zartes Perlenarmband","Hauchfeine Ankerkette mit einer einzelnen S\xFC\xDFwasserperle.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:3},kette:{typ:"anker",staerkeMm:1},perlen:{anordnung:"stationen",anzahl:1,groesseMm:5,form:"rund",farbe:"weiss"}}),"florea-kette":Qt("Florea Kette","Feine Ankerkette (45 cm) mit Bl\xFCtenanh\xE4nger und Perle in der Mitte.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.2,laengeCm:45},anhaenger:{typ:"blume",groesseMm:12},perlen:{groesseMm:4,farbe:"weiss"}}),perlenkette:Qt("Perlenkette","Strang aus S\xFC\xDFwasserperlen (6 mm), 42 cm, mit goldenem Federring.",{art:"kette",metall:"gold",kette:{typ:"perlenstrang",laengeCm:42},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"perlen-station-kette":Qt("Perlen-Station-Kette","Feine Ankerkette mit f\xFCnf kleinen S\xFC\xDFwasserperlen im Abstand von 3,5 cm.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.1,laengeCm:45},perlen:{anordnung:"stationen",anzahl:5,abstandMm:35,groesseMm:5,form:"rund",farbe:"weiss"}}),"muenz-kette":Qt("M\xFCnz-Kette","Geh\xE4mmerte M\xFCnze (13 mm) an einer Figarokette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"figaro",staerkeMm:1.6,laengeCm:45},anhaenger:{typ:"muenze",groesseMm:13}}),"herz-kette":Qt("Herz-Kette","Gew\xF6lbtes Herz (11 mm) an feiner Erbskette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"erbs",staerkeMm:1.3,laengeCm:45},anhaenger:{typ:"herz",groesseMm:11}},["gold","silber","rosegold"]),"solitaer-ring":Qt("Solit\xE4r-Ring","Zarte Schiene mit Zirkonia-Brillant (5 mm) in Sechs-Krappen-Fassung.",{art:"ring",metall:"gold",ring:{typ:"solitaer",schieneMm:1.8,profil:"rund",innenDurchmesserMm:17,krappen:6},stein:{art:"zirkonia",groesseMm:5,schliff:"brillant"}},["gold","silber","weissgold"]),"perlen-ring":Qt("Perlen-Ring","S\xFC\xDFwasserperle (7 mm) auf zarter, halbrunder Schiene.",{art:"ring",metall:"gold",ring:{typ:"perle",schieneMm:1.6,profil:"halbrund",innenDurchmesserMm:17},perlen:{groesseMm:7,form:"rund",farbe:"weiss"}}),"band-ring":Qt("Band-Ring","Schlichter, hochglanzpolierter Bandring, 3 mm, halbrund.",{art:"ring",metall:"gold",ring:{typ:"band",schieneMm:3,profil:"halbrund",innenDurchmesserMm:17}}),"offener-perlenring":Qt("Offener Perlenring","Offene Schiene mit zwei S\xFC\xDFwasserperlen an den Enden (Toi et Moi).",{art:"ring",metall:"gold",ring:{typ:"offen",schieneMm:1.5,profil:"rund",innenDurchmesserMm:17},perlen:{groesseMm:6,anzahl:2,form:"rund",farbe:"weiss"}})};var W0=["ring","armband","kette","ohrringe"],lw={ohrring:"ohrringe",ohrstecker:"ohrringe",creolen:"ohrringe",halskette:"kette",collier:"kette",armreif:"armband",ringe:"ring"},q0={metall:["gold","silber","rosegold","weissgold"],"kette.typ":["anker","erbs","figaro","panzer","schlange","kugel","paperclip","seil","perlenstrang"],"perlen.form":["rund","barock","tropfen","button","reis"],"perlen.farbe":["weiss","creme","rose","champagner","grau"],"perlen.anordnung":["strang","stationen","einzeln"],"anhaenger.typ":["keiner",...z0],"ohrring.typ":["stecker","creole","huggie","haenger","perlenstecker"],"ohrring.profil":["rund","flach","halbrund"],"ohrring.befestigung":["stecker","haken"],"ring.typ":["band","solitaer","perle","offen","siegel","kette"],"ring.profil":["halbrund","rund","flach"],"stein.art":["zirkonia","diamant","saphir","rubin","smaragd","perle"],"stein.schliff":["brillant","oval","tropfen","smaragd"],"armband.typ":["kette","perlen","reif","tennis"]},$0={"kette.staerkeMm":[.6,6,1.2],"kette.laengeCm":[30,100,45],"perlen.groesseMm":[2,16,6],"perlen.abstandMm":[5,200,30],"perlen.anzahl":[0,200,0],"anhaenger.groesseMm":[4,40,12],"ohrring.durchmesserMm":[6,70,14],"ohrring.staerkeMm":[.8,8,2],"ohrring.laengeMm":[8,90,30],"ring.schieneMm":[1,12,2],"ring.innenDurchmesserMm":[12,26,17],"ring.krappen":[4,6,4],"stein.groesseMm":[1,14,4],"armband.laengeCm":[12,26,18],"armband.verlaengerungCm":[0,8,3],"armband.zwischenperlenMm":[0,6,2.5],"armband.breiteMm":[1,30,3]},cw=["kette","perlen","anhaenger","ohrring","ring","stein","armband"];var hw=new Set(["ohrring.profil"]);function _h(s){return s&&typeof s=="object"&&!Array.isArray(s)}function K0(s){let e=[],t=_h(s)?s:{};_h(s)||e.push("Spec fehlt oder ist kein Objekt.");let n={},i=typeof t.art=="string"?t.art.toLowerCase().trim():"";i=lw[i]||i,W0.includes(i)||(e.push(`art '${t.art}' unbekannt (erlaubt: ${W0.join(", ")}); 'kette' verwendet.`),i="kette"),n.art=i,typeof t.name=="string"&&(n.name=t.name),n.metall=X0("metall",t.metall,e);for(let r of cw){let a=_h(t[r])?t[r]:{};t[r]!==void 0&&!_h(t[r])&&e.push(`${r} muss ein Objekt sein.`);let o={...a};for(let l of Object.keys(q0)){let[c,h]=l.split(".");if(!(c!==r||!h)){if(hw.has(l)&&(a[h]===void 0||a[h]===null||a[h]==="")){delete o[h];continue}o[h]=X0(l,a[h],e)}}for(let l of Object.keys($0)){let[c,h]=l.split(".");c===r&&(o[h]=uw(l,a[h],e))}n[r]=o}return n.ring.krappen!==4&&n.ring.krappen!==6&&(n.ring.krappen=n.ring.krappen>5?6:4),n.stein.farbe!==void 0&&n.stein.farbe!==null&&!/^#[0-9a-f]{6}$/i.test(String(n.stein.farbe))&&(e.push(`stein.farbe '${n.stein.farbe}' ist keine Farbe wie '#aabbcc'; Standard verwendet.`),n.stein.farbe=null),n.stein.farbe===void 0&&(n.stein.farbe=null),i==="ring"&&n.ring.typ==="solitaer"&&n.stein.art==="perle"&&(n.ring.typ="perle"),n.stein.art==="perle"&&(n.stein.art="zirkonia"),n.ohrring.befestigung===void 0&&(n.ohrring.befestigung="stecker"),n.armband.offen!==void 0?n.armband.offen=!!n.armband.offen:n.armband.offen=!1,{ok:e.length===0,fehler:e,spec:n}}function X0(s,e,t){let n=q0[s];if(e==null||e==="")return n[0];let i=String(e).toLowerCase().trim().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/é/g,"e");return n.includes(i)?i:(t.push(`${s} '${e}' unbekannt (erlaubt: ${n.join(", ")}); '${n[0]}' verwendet.`),n[0])}function uw(s,e,t){let[n,i,r]=$0[s];if(e==null||e==="")return r;let a=typeof e=="number"?e:parseFloat(String(e).replace(",","."));if(!Number.isFinite(a))return t.push(`${s} '${e}' ist keine Zahl; ${r} verwendet.`),r;if(a<n||a>i){let o=Math.min(i,Math.max(n,a));return t.push(`${s} ${a} ausserhalb ${n}\u2026${i}; auf ${o} begrenzt.`),o}return a}var fw={ring:P0,armband:N0,kette:H0,ohrringe:V0};function vh(s){let{spec:e,fehler:t}=K0(s);t.length&&typeof console<"u"&&console.warn("[schmuck] Spec-Hinweise:",t);let{name:n,...i}=e;e._saat=M0(JSON.stringify({...i,metall:void 0}))+1;let r=new Ks,a;try{a=fw[e.art](e,r)}catch(h){return console.error("[schmuck] Bau fehlgeschlagen, Standardmodell verwendet:",h),r.dispose(),vh({art:e.art,metall:e.metall})}let o=a.gruppe;o.name=`schmuck-${e.art}`,o.userData.spec=e,o.userData.einheit="mm";let l={...a.masse};e.art==="kette"&&(l.halsRadiusMm=l.halsRadiusMm??55);let c=!1;return{art:e.art,gruppe:o,masse:l,pendel:a.pendel||[],dispose(){c||(c=!0,Y0(o),r.dispose())}}}function Y0(s){s.traverse(e=>{e.isInstancedMesh&&e.dispose()})}async function Z0(s,e={}){let{spec:t}=K0({art:"kette",...e}),i=await new hh().loadAsync(s),r=new Ks,a=new Ue;a.name=`glb-${t.art}`;let o=i.scene;a.add(o);let l=new Set,c=[];o.traverse(p=>{if(p.isMesh){p.geometry&&l.add(p.geometry);let x=g=>{let m=(g&&g.name?g.name:"").toLowerCase();return/^(metall|metal|gold|silber|silver)/.test(m)?Vt(r,t.metall):/^(perle|pearl)/.test(m)?_s(r,t.perlen.farbe,0):/^(stein|diamant|stone|gem)/.test(m)?yi(r,t.stein.art,t.stein.farbe):(l.add(g),g)};p.material=Array.isArray(p.material)?p.material.map(x):x(p.material),p.castShadow=!0}if(/^pendel/i.test(p.name)){let x=new wt().setFromObject(p);c.push({knoten:p,laengeMm:Number(p.userData.laengeMm)||Math.max(1,(x.max.y-x.min.y)/2),achse:["frei","x","z"].includes(p.userData.achse)?p.userData.achse:"frei"})}});let h=new wt().setFromObject(o),u={...o.userData&&o.userData.masse?o.userData.masse:{}};t.art==="ring"&&u.innenRadiusMm===void 0&&(u.innenRadiusMm=t.ring.innenDurchmesserMm/2),t.art==="kette"&&u.halsRadiusMm===void 0&&(u.halsRadiusMm=55),t.art==="ohrringe"&&u.laengeMm===void 0&&(u.laengeMm=Math.max(0,-h.min.y)),t.art==="armband"&&u.innenRadienMm===void 0&&(u.innenRadienMm={x:Math.max(20,-h.min.x-1),z:Math.max(15,-h.min.z-1)});let d=!1;return{art:t.art,gruppe:a,masse:u,pendel:c,dispose(){if(!d){d=!0,Y0(a);for(let p of l){if(p.isMaterial)for(let x of Object.keys(p))p[x]&&p[x].isTexture&&p[x].dispose();p.dispose()}r.dispose()}}}}var j0=`
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
.a-warenkorb[data-stand="laeuft"] { opacity: .75; cursor: progress; }
.a-warenkorb[data-stand="fehler"] { background: transparent; color: var(--a-tinte); border-color: rgba(30, 27, 24, .35); }

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
`;var Tt=(s,{groesse:e=24,strich:t=1.25,klasse:n=""}={})=>`<svg class="sym ${n}" viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${s}</svg>`,J0=(s,e,t)=>{let n=t*.16;return`M${s} ${e-t}C${s+n} ${e-n} ${s+n} ${e-n} ${s+t} ${e}C${s+n} ${e+n} ${s+n} ${e+n} ${s} ${e+t}C${s-n} ${e+n} ${s-n} ${e+n} ${s-t} ${e}C${s-n} ${e-n} ${s-n} ${e-n} ${s} ${e-t}Z`},en={funkeln:Tt(`<path d="${J0(10,13,7.5)}"/><path d="${J0(18.5,5.5,3)}"/>`,{strich:1.1}),schliessen:Tt('<path d="M6 6l12 12M18 6L6 18"/>'),kamera:Tt('<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.6l1.4-2h6l1.4 2H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/><circle cx="12" cy="12.8" r="3.4"/>'),wechseln:Tt('<path d="M4 9.5A8 8 0 0 1 18.6 7M20 14.5A8 8 0 0 1 5.4 17"/><path d="M18.9 3.6l-.3 3.6-3.6-.3M5.1 20.4l.3-3.6 3.6.3"/><circle cx="12" cy="12" r="2.4"/>'),foto:Tt('<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="9.5" r="1.6"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/>'),teilen:Tt('<path d="M12 3.5v11M8 7.2l4-3.7 4 3.7"/><path d="M8.5 10.5H6.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/>'),tasche:Tt('<path d="M5.5 8.5h13l-1 11a1 1 0 0 1-1 .9h-9a1 1 0 0 1-1-.9z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/>'),speichern:Tt('<path d="M12 4v11M7.8 10.8L12 15l4.2-4.2"/><path d="M5 19.5h14"/>'),zurueck:Tt('<path d="M14.5 6l-6 6 6 6"/>'),schloss:Tt('<rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',{groesse:16}),zuruecksetzen:Tt('<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5"/><path d="M4.5 4.5v3.6h3.6"/>',{groesse:18}),hand:Tt('<path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/>'),perle:Tt('<circle cx="12" cy="12" r="6.5"/><path d="M9 9.6a3.6 3.6 0 0 1 2.6-1.6"/>'),fehler:Tt('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.2v.1"/>',{groesse:28,strich:1.1})},Q0={hand:Tt('<g class="hs-winken"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>',{groesse:18}),naeher:Tt('<g class="hs-zoom"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></g><circle cx="12" cy="12" r="2.2"/>',{groesse:18}),rahmen:Tt('<path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><g class="hs-atmen"><rect x="8" y="8" width="8" height="8" rx="1"/></g>',{groesse:18}),spreizen:Tt('<g class="hs-spreizen"><path d="M12 20v-9M12 11l-4.5-6M12 11l4.5-6M12 11V3.5"/></g>',{groesse:18}),gesicht:Tt('<ellipse cx="12" cy="11.5" rx="6" ry="7.5"/><g class="hs-blinzeln"><path d="M9.6 10.5h.1M14.3 10.5h.1"/></g><path d="M10.4 15.2c1 .6 2.2.6 3.2 0"/>',{groesse:18}),kopfDrehen:Tt('<ellipse cx="12" cy="12" rx="5.5" ry="7"/><g class="hs-drehen"><path d="M10 10.5h.1M13.4 10.5h.1M11.5 12.5l-.4 1.6h1"/></g><path d="M2.8 9.5c-.8 1.6-.8 3.4 0 5M21.2 9.5c.8 1.6.8 3.4 0 5"/>',{groesse:18}),schultern:Tt('<circle cx="12" cy="7" r="3.2"/><path d="M10.6 10v2.2M13.4 10v2.2"/><g class="hs-atmen"><path d="M3.5 20c.6-4 3.6-6.5 8.5-6.5s7.9 2.5 8.5 6.5"/></g>',{groesse:18}),wenden:Tt('<g class="hs-wenden"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>',{groesse:18}),punkt:'<span class="hs-punkt" aria-hidden="true"></span>'};function ex(s){return Q0[{"hand-zeigen":"hand",naeher:"naeher","ganz-ins-bild":"rahmen","finger-spreizen":"spreizen","gesicht-zeigen":"gesicht","kopf-drehen":"kopfDrehen",schultern:"schultern",handruecken:"wenden"}[s]]||Q0.punkt}var Cd={daumen:"Daumen",zeige:"Zeigefinger",mittel:"Mittelfinger",ring:"Ringfinger",klein:"Kleiner Finger"},kd={ring:{titel:"Zeig deine Hand",schritte:["Halte die Hand mit dem Handr\xFCcken zur Kamera, die Finger leicht gespreizt.","Dreh sie langsam \u2013 der Ring folgt jeder Bewegung.","Tippe auf die kleine Hand, um den Finger zu w\xE4hlen."]},armband:{titel:"Zeig dein Handgelenk",schritte:["Halte Hand und Handgelenk mit dem Handr\xFCcken zur Kamera.","Dreh die Hand langsam hin und her.","Ruhiges, helles Licht l\xE4sst das Gold am sch\xF6nsten wirken."]},ohrringe:{titel:"Zeig deine Ohren",schritte:["Streich die Haare hinters Ohr.","Dreh den Kopf leicht zur Seite \u2013 die Ohrringe schwingen mit.","Gleichm\xE4\xDFiges Licht von vorn ist ideal."]},kette:{titel:"Zeig Hals und Schultern",schritte:["Geh etwas auf Abstand zur Kamera, sodass Hals und Schultern zu sehen sind.","Ein offener Kragen zeigt die Kette am sch\xF6nsten.","Schau entspannt in die Kamera."]}},ea=6,go={klein:{x:130.5+ea,y:139,winkel:10,laenge:52,breite:15},ring:{x:114+ea,y:127,winkel:4,laenge:70,breite:17},mittel:{x:96+ea,y:124,winkel:-1,laenge:77,breite:18},zeige:{x:77.5+ea,y:128,winkel:-7,laenge:67,breite:17.5},daumen:{x:55.3+ea,y:156.4,winkel:-42,laenge:47,breite:20}},At=s=>Math.round(s*10)/10;function yh(s){let e=s.winkel*Math.PI/180,t={x:Math.sin(e),y:-Math.cos(e)},n={x:Math.cos(e),y:Math.sin(e)},i={x:s.x+t.x*s.laenge,y:s.y+t.y*s.laenge},r=s.breite/2,a=s.breite*.88/2,o=(l,c,h)=>({x:At(l.x+n.x*c*h),y:At(l.y+n.y*c*h)});return{rechtsUnten:o(s,1,r),linksUnten:o(s,-1,r),rechtsOben:o(i,1,a),linksOben:o(i,-1,a),rSpitze:At(a),dir:t,quer:n,spitze:i}}function dw(s,e){let t=yh(s);return{x:s.x+t.dir.x*s.laenge*e,y:s.y+t.dir.y*s.laenge*e,quer:t.quer,breite:s.breite}}var Pn=s=>At(s+ea);function pw(){let s=["klein","ring","mittel","zeige"],e=`M${Pn(129)} 238C${Pn(128.5)} 228 ${Pn(128)} 220 ${Pn(128.5)} 212C${Pn(131.5)} 192 ${Pn(138)} 166 ${Pn(137.9)} 141`,t=null;for(let i of s){let r=yh(go[i]);if(t){let a=(t.x+r.rechtsUnten.x)/2,o=Math.max(t.y,r.rechtsUnten.y)+5;e+=`Q${At(a)} ${At(o)} ${r.rechtsUnten.x} ${r.rechtsUnten.y}`}else e+=`L${r.rechtsUnten.x} ${r.rechtsUnten.y}`;e+=`L${r.rechtsOben.x} ${r.rechtsOben.y}A${r.rSpitze} ${r.rSpitze} 0 0 0 ${r.linksOben.x} ${r.linksOben.y}L${r.linksUnten.x} ${r.linksUnten.y}`,t=r.linksUnten}let n=yh(go.daumen);return e+=`C${At(t.x-1.5)} ${At(t.y+8)} ${At(n.rechtsUnten.x+2.5)} ${At(n.rechtsUnten.y-6)} ${n.rechtsUnten.x} ${n.rechtsUnten.y}`,e+=`L${n.rechtsOben.x} ${n.rechtsOben.y}A${n.rSpitze} ${n.rSpitze} 0 0 0 ${n.linksOben.x} ${n.linksOben.y}`,e+=`L${n.linksUnten.x} ${n.linksUnten.y}C${Pn(51)} 178 ${Pn(66)} 194 ${Pn(71)} 211C${Pn(72)} 220 ${Pn(72)} 230 ${Pn(71.5)} 238`,e}function mw(s){let e=go[s],t=yh(e),n={x:e.x-t.dir.x*8,y:e.y-t.dir.y*8},i=t.quer,r=e.breite/2+1;return`M${At(n.x+i.x*r)} ${At(n.y+i.y*r)}L${t.rechtsOben.x} ${t.rechtsOben.y}A${t.rSpitze} ${t.rSpitze} 0 0 0 ${t.linksOben.x} ${t.linksOben.y}L${At(n.x-i.x*r)} ${At(n.y-i.y*r)}Z`}function tx(s,e=.3,t=1.8){let n=dw(go[s],e),i=n.breite/2+t,r={x:At(n.x-n.quer.x*i),y:At(n.y-n.quer.y*i)},a={x:At(n.x+n.quer.x*i),y:At(n.y+n.quer.y*i)};return{d:`M${r.x} ${r.y}Q${At(n.x)} ${At(n.y+3.2)} ${a.x} ${a.y}`,mitte:{x:At(n.x),y:At(n.y+1.6)}}}function Mh(s,e,t){let n=t*.18;return`M${s} ${e-t}Q${s+n} ${e-n} ${s+t} ${e}Q${s+n} ${e+n} ${s} ${e+t}Q${s-n} ${e+n} ${s-t} ${e}Q${s-n} ${e-n} ${s} ${e-t}Z`}var nx=pw();function gw(s){let e=tx("ring"),t=s==="ring"?`<path class="anl-gold anl-ring" d="${e.d}"/>
       <path class="anl-funkeln" d="${Mh(e.mitte.x+9,e.mitte.y-9,4.5)}"/>`:`<path class="anl-gold anl-kettchen" d="M73 206Q100 218 127 206"/>
       <g class="anl-pendel" style="transform-origin:100px 212px"><path class="anl-gold-fein" d="M100 212v6"/><circle class="anl-perle" cx="100" cy="222" r="3.6"/></g>
       <path class="anl-funkeln" d="${Mh(134,196,4.5)}"/>`;return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-pfeile"><path d="M30 92a78 78 0 0 0 0 64"/><path d="M26 150l4 6.5 5.5-5"/><path d="M170 156a78 78 0 0 0 0-64"/><path d="M174 98l-4-6.5-5.5 5"/></g>
    <g class="anl-figur anl-drehen">
      <path class="anl-linie anl-zeichnen" pathLength="1" d="${nx}"/>
      ${t}
    </g>
  </svg>`}function xw(){return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
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
    <path class="anl-funkeln anl-funkeln-ohr" d="${Mh(166,118,4.5)}"/>
  </svg>`}function _w(){let s=(e,t,n,i)=>`M${e} ${t+i*16}V${t}H${e+n*16}`;return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
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
    <path class="anl-funkeln" d="${Mh(122,150,4.5)}"/>
  </svg>`}function ix(s){return s==="ohrringe"?xw():s==="kette"?_w():gw(s)}function sx(s="ring"){let e=Object.keys(go).map(t=>{let n=tx(t,t==="daumen"?.42:.32,1.2),i=t===s;return`<g class="fw-finger${i?" aktiv":""}" data-finger="${t}" role="radio" tabindex="${i?0:-1}" aria-checked="${i}" aria-label="${Cd[t]}">
      <path class="fw-flaeche" d="${mw(t)}"/>
      <path class="fw-band" d="${n.d}"/>
    </g>`}).join("");return`<svg class="fw-svg" viewBox="24 40 136 190" role="radiogroup" aria-label="Finger w\xE4hlen">
    <path class="fw-umriss" d="${nx}"/>
    ${e}
  </svg>`}var rx={gold:"radial-gradient(circle at 32% 28%, #FFF4D6 0%, #EBCB86 26%, #C9A05A 58%, #94702F 100%)",silber:"radial-gradient(circle at 32% 28%, #FFFFFF 0%, #EDEFF1 30%, #BFC3C7 65%, #8A8F95 100%)",rosegold:"radial-gradient(circle at 32% 28%, #FFEFE7 0%, #EEC2AD 30%, #CF937C 64%, #9A6553 100%)",weissgold:"radial-gradient(circle at 32% 28%, #FFFFFF 0%, #F3EFE6 28%, #D2CBBC 64%, #A0988A 100%)"},bh=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),vw=()=>typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,yw=s=>`
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
          <button type="button" class="a-knopf" data-aktion="kameraStarten">${en.kamera}<span>Kamera starten</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="fotoWaehlen">${en.foto}<span>Foto w\xE4hlen</span></button>
        </div>
        <p class="a-datenschutz a-klein">${en.schloss}<span>Die Kamera wird nur auf deinem Ger\xE4t ausgewertet. Es werden keine Bilder gespeichert oder \xFCbertragen.</span></p>
      </div>
    </section>

    <section class="a-seite a-laden" aria-labelledby="a-laden-titel">
      <div class="a-inhalt">
        <div class="a-ladesymbol">${en.funkeln}</div>
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
      <button type="button" class="a-rund glas a-zuruecksetzen" data-aktion="zuruecksetzen" aria-label="Position und Gr\xF6\xDFe zur\xFCcksetzen">${en.zuruecksetzen}</button>
      <div class="a-fingerwahl glas" hidden><div class="a-fingergrafik"></div><span class="a-fingername"></span></div>
      <div class="a-unten">
        <div class="a-varianten glas" hidden>
          <div class="a-swatches" role="radiogroup" aria-label="Variante w\xE4hlen"></div>
          <span class="a-variantenname" aria-hidden="true"></span>
        </div>
        <div class="a-leiste">
          <button type="button" class="a-rund glas a-links" data-aktion="fotoWaehlen" aria-label="Foto w\xE4hlen">${en.foto}</button>
          <button type="button" class="a-ausloeser" data-aktion="ausloesen" aria-label="Foto aufnehmen">${en.speichern}</button>
          <button type="button" class="a-rund glas a-rechts" data-aktion="kameraWechseln" aria-label="Kamera wechseln" hidden>${en.wechseln}</button>
        </div>
      </div>
    </div>

    <section class="a-seite a-ergebnis" aria-labelledby="a-ergebnis-titel">
      <div class="a-inhalt">
        <div class="a-rahmen"><img alt="Deine Anprobe"></div>
        <div class="a-ergebnis-text">
          <span class="a-label">${bh(s)} \xB7 Anprobe</span>
          <h3 class="a-titel" id="a-ergebnis-titel">Deine Anprobe</h3>
          <p class="a-text a-ergebnis-produkt"></p>
          <button type="button" class="a-knopf a-warenkorb" data-aktion="warenkorb" hidden>${en.tasche}<span>In den Warenkorb</span></button>
          <div class="a-knoepfe-paar">
            <button type="button" class="a-knopf" data-aktion="teilen" hidden>${en.teilen}<span>Teilen</span></button>
            <button type="button" class="a-knopf zweit" data-aktion="speichern">${en.speichern}<span>Speichern</span></button>
          </div>
          <button type="button" class="a-textknopf" data-aktion="zurueck">Zur\xFCck zur Anprobe</button>
        </div>
      </div>
    </section>

    <section class="a-seite a-fehler" role="alert" aria-labelledby="a-fehler-titel">
      <div class="a-inhalt">
        ${en.fehler}
        <h3 class="a-titel" id="a-fehler-titel"></h3>
        <p class="a-text a-fehler-text"></p>
        <div class="a-aktionen">
          <button type="button" class="a-knopf" data-aktion="fotoWaehlen">${en.foto}<span>Foto w\xE4hlen</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="erneut"><span>Erneut versuchen</span></button>
        </div>
      </div>
    </section>

    <header class="a-kopf">
      <div class="a-produkt"><img alt="" hidden><div class="a-produkt-text"><span class="a-produkt-name"></span><span class="a-produkt-preis"></span></div></div>
      <button type="button" class="a-rund a-schliessen" data-aktion="schliessen" aria-label="Anprobe schlie\xDFen">${en.schliessen}</button>
    </header>
    <div class="a-unsichtbar a-ansage" aria-live="polite"></div>
    <input type="file" accept="image/*" class="a-unsichtbar a-datei" tabindex="-1" aria-hidden="true">
  </div>
</div>`,Sh=class{constructor(e,{shopName:t="ARLISE",aktionen:n={}}={}){this.wurzel=e,this.aktionen=n,this.zustand="intro",this.produkt=null,this.vorherFokus=null,this.tippTimer=0;let i=document.createElement("style");i.textContent=j0,e.appendChild(i);let r=document.createElement("div");r.innerHTML=yw(t),this.el=r.firstElementChild,e.appendChild(this.el);let a=o=>this.el.querySelector(o);this.$=a,this.buehne=a(".a-buehne"),this.video=a(".a-video"),this.fotogrund=a(".a-fotogrund"),this.datei=a(".a-datei"),this.canvas=null,this.el.addEventListener("click",o=>this.beiKlick(o)),this.el.addEventListener("keydown",o=>this.beiTaste(o)),this.beiTasteAussen=o=>{if(!(!this.istOffen||o.composedPath().includes(this.el))){if(o.key==="Escape")o.preventDefault(),this.melde("schliessen");else if(o.key==="Tab"){o.preventDefault();let l=this.fokussierbare();l[0]&&l[0].focus({preventScroll:!0})}}},this.datei.addEventListener("change",()=>{let o=this.datei.files&&this.datei.files[0];this.datei.value="",o&&this.melde("fotoGewaehlt",o)}),this.richteGestenEin()}melde(e,...t){let n=this.aktionen[e];typeof n=="function"&&n(...t)}oeffne(e){this.produkt=e;let t=e.art;for(let o of[".a-produkt",".a-produktzeile"]){let l=this.$(o);l.querySelector(".a-produkt-name").textContent=e.titel,l.querySelector(".a-produkt-preis").textContent=e.preis||"";let c=l.querySelector("img");e.bildUrl?(c.hidden=!1,c.onerror=()=>{c.hidden=!0},c.src=e.bildUrl):(c.hidden=!0,c.removeAttribute("src"))}let n=kd[t]||kd.ring;this.$("#a-intro-titel").textContent=n.titel,this.$(".a-schritte").innerHTML=n.schritte.map(o=>`<li>${bh(o)}</li>`).join("");let i=this.$(".a-anleitung");i.dataset.art=t,i.innerHTML=ix(t),this.$(".a-ergebnis-produkt").textContent=[e.titel,e.preis].filter(Boolean).join(" \xB7 "),this.$("#a-dialogtitel").textContent=`Virtuelle Anprobe: ${e.titel}`,this.setzeHinweis(null),this.setzeAnpassungAktiv(!1);let r=this.wurzel.getRootNode(),a=document.activeElement;for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;this.vorherFokus=a&&a!==document.body?a:null,r&&r.host&&r.host.contains&&r.host.contains(a)&&(this.vorherFokus=null),this.oeffnungen=(this.oeffnungen||0)+1,this.el.hidden=!1,this.zustand=null,this.setzeZustand("intro"),document.addEventListener("keydown",this.beiTasteAussen,!0),requestAnimationFrame(()=>requestAnimationFrame(()=>this.el.classList.add("offen")))}schliesse(){let e=this.oeffnungen;return document.removeEventListener("keydown",this.beiTasteAussen,!0),new Promise(t=>{this.el.classList.remove("offen"),clearTimeout(this.tippTimer);let n=()=>{if(e!==this.oeffnungen){t();return}if(this.el.hidden=!0,this.$(".a-anleitung").innerHTML="",this.$(".a-rahmen img").removeAttribute("src"),this.fotogrund.style.backgroundImage="",this.vorherFokus&&this.vorherFokus.isConnected)try{this.vorherFokus.focus({preventScroll:!0})}catch{}this.vorherFokus=null,t()},i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;setTimeout(n,i?0:280)})}get istOffen(){return!this.el.hidden}setzeZustand(e){let t=this.zustand;this.zustand=e,this.el.dataset.zustand=e;let n=e==="live"||e==="foto";this.buehne.tabIndex=n?0:-1;let i=this.$(".a-links");if(e==="foto"?(i.setAttribute("aria-label","Anderes Foto w\xE4hlen"),this.$(".a-ausloeser").setAttribute("aria-label","Bild speichern")):e==="live"&&(i.setAttribute("aria-label","Foto w\xE4hlen"),this.$(".a-ausloeser").setAttribute("aria-label","Foto aufnehmen")),e!==t){let r={laden:"Die Anprobe wird vorbereitet.",live:"Die Kamera ist aktiv.",foto:"Dein Foto wird angezeigt.",ergebnis:"Deine Anprobe ist fertig."}[e];r&&this.sage(r);let a={intro:'[data-aktion="kameraStarten"]',laden:".a-laden .a-textknopf",live:".a-ausloeser",foto:".a-ausloeser",ergebnis:".a-ergebnis .a-knopf:not([hidden])",fehler:".a-fehler .a-knopf:not([hidden])"}[e];requestAnimationFrame(()=>{let o=a&&this.$(a);if(o&&this.zustand===e)try{o.focus({preventScroll:!0})}catch{}})}}setzeFortschritt(e,t){let n=Math.max(0,Math.min(1,e||0)),i=Math.round(n*100);this.$(".a-balken > span").style.transform=`scaleX(${n})`,this.$(".a-prozent").textContent=`${i} %`,this.$(".a-fortschritt").setAttribute("aria-valuenow",String(i)),t&&(this.$(".a-ladetext").textContent=t)}setzeVideo(e,t){this.video.srcObject=e||null,this.video.classList.toggle("gespiegelt",!!t)}setzeFotoGrund(e){this.fotogrund.style.backgroundImage=e?`url("${e}")`:""}neuesCanvas(){this.canvas&&this.canvas.remove();let e=document.createElement("canvas");return e.className="a-canvas",e.setAttribute("aria-hidden","true"),this.buehne.insertBefore(e,this.$(".a-blitz")),this.canvas=e,e}entferneCanvas(){this.canvas&&this.canvas.remove(),this.canvas=null}setzeHinweis(e){let t=e&&e.text?`${e.code}|${e.text}`:"";if(t===this.hinweisSchluessel)return;this.hinweisSchluessel=t;let n=this.$(".a-hinweis");if(!t){n.classList.remove("an");return}this.$(".a-hinweis-symbol").innerHTML=ex(e.code),this.$(".a-hinweis-text").textContent=e.text,n.classList.add("an")}setzeVarianten(e,t){let n=this.$(".a-varianten"),i=this.$(".a-swatches");if(!e||e.length<2){n.hidden=!0,i.innerHTML="";return}n.hidden=!1,i.innerHTML=e.map((r,a)=>{let o=r.spec&&r.spec.metall||"gold",l=a===t;return`<button type="button" class="a-swatch" role="radio" aria-checked="${l}" tabindex="${l?0:-1}" data-variante="${a}" aria-label="${bh(r.name)}" title="${bh(r.name)}"><i style="background:${rx[o]||rx.gold}"></i></button>`}).join(""),this.$(".a-variantenname").textContent=e[t]?e[t].name:""}setzeFingerSeite(e){this.$(".a-fingerwahl").classList.toggle("rechts",!!e)}fingerRechteck(){let e=this.$(".a-fingerwahl");return e.hidden?null:e.getBoundingClientRect()}setzeMilchglas(e){this.$(".a-laden").classList.toggle("milchglas",!!e)}setzeFinger(e){let t=this.$(".a-fingerwahl");if(!e){t.hidden=!0;return}t.hidden=!1;let n=this.wurzel.getRootNode().activeElement,i=n&&t.contains(n);if(this.$(".a-fingergrafik").innerHTML=sx(e),this.$(".a-fingername").textContent=Cd[e]||"",i){let r=t.querySelector(`[data-finger="${e}"]`);r&&r.focus({preventScroll:!0})}}setzeKameraWechsel(e){this.$(".a-rechts").hidden=!e}setzeFotoModus(e,t=!0){let n=this.$(".a-rechts");e?(n.dataset.aktion="zurKamera",n.setAttribute("aria-label","Zur Live-Kamera"),n.innerHTML=en.kamera,n.hidden=!t):(n.dataset.aktion="kameraWechseln",n.setAttribute("aria-label","Kamera wechseln"),n.innerHTML=en.wechseln)}setzeAnpassungAktiv(e){this.$(".a-zuruecksetzen").classList.toggle("an",!!e)}setzeAusloeserAktiv(e){this.$(".a-ausloeser").disabled=!e}zeigeTipp(e,t=5200){let n=this.$(".a-tipp");n.textContent=e||(vw()?"Ziehen: verschieben \xB7 Zwei Finger: Gr\xF6\xDFe":"Ziehen: verschieben \xB7 Mausrad: Gr\xF6\xDFe \xB7 Doppelklick: zur\xFCck"),clearTimeout(this.tippTimer),requestAnimationFrame(()=>n.classList.add("an")),this.tippTimer=setTimeout(()=>n.classList.remove("an"),t)}blitz(){let e=this.$(".a-blitz");e.classList.remove("an"),e.offsetWidth,e.classList.add("an")}setzeErgebnis(e,{teilenMoeglich:t,warenkorb:n=!1}){let i=this.$(".a-rahmen img");i.src=e;let r=this.$('[data-aktion="teilen"]');r.hidden=!t,r.classList.toggle("zweit",!!n),this.$('[data-aktion="speichern"]').classList.toggle("zweit",!!(t||n)),this.$('[data-aktion="warenkorb"]').hidden=!n,this.setzeWarenkorb("bereit")}setzeWarenkorb(e){let t=this.$('[data-aktion="warenkorb"]');if(!t)return;let n={bereit:"In den Warenkorb",laeuft:"Wird hinzugef\xFCgt \u2026",fertig:"Im Warenkorb \xB7 Ansehen",fehler:"Bitte auf der Produktseite w\xE4hlen"};t.querySelector("span").textContent=n[e]||n.bereit,t.dataset.stand=e,e==="laeuft"?t.setAttribute("aria-busy","true"):t.removeAttribute("aria-busy")}setzeFehler({titel:e,text:t,foto:n=!0,erneut:i=!0}){this.$("#a-fehler-titel").textContent=e,this.$(".a-fehler-text").textContent=t,this.$('.a-fehler [data-aktion="fotoWaehlen"]').hidden=!n,this.$('.a-fehler [data-aktion="erneut"]').hidden=!i,this.$('.a-fehler [data-aktion="erneut"]').classList.toggle("zweit",n)}waehleFoto(){this.datei.click()}sage(e){let t=this.$(".a-ansage");t.textContent="",setTimeout(()=>{t.textContent=e},30)}beiKlick(e){let t=e.target.closest("[data-aktion], [data-variante], [data-finger]");if(!t||!this.el.contains(t))return;if(t.dataset.variante!=null){this.melde("variante",Number(t.dataset.variante));return}if(t.dataset.finger){this.melde("finger",t.dataset.finger);return}let n=t.dataset.aktion;n==="fotoWaehlen"?this.waehleFoto():this.melde(n)}beiTaste(e){if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.melde("schliessen");return}if(e.key==="Tab"){this.fokusFalle(e);return}let t=e.composedPath(),n=t.find(i=>i instanceof Element&&i.getAttribute&&i.getAttribute("role")==="radio");if(n&&/^(ArrowLeft|ArrowRight|ArrowUp|ArrowDown)$/.test(e.key)){e.preventDefault();let i=[...n.closest('[role="radiogroup"]').querySelectorAll('[role="radio"]')],r=i.indexOf(n),a=e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1,o=i[(r+a+i.length)%i.length];o.dataset.variante!=null?this.melde("variante",Number(o.dataset.variante)):o.dataset.finger&&this.melde("finger",o.dataset.finger),requestAnimationFrame(()=>{let l=o.dataset.variante!=null?`[data-variante="${o.dataset.variante}"]`:`[data-finger="${o.dataset.finger}"]`,c=this.$(l);c&&c.focus({preventScroll:!0})});return}if(n&&(e.key==="Enter"||e.key===" ")&&n.dataset.finger){e.preventDefault(),this.melde("finger",n.dataset.finger);return}if(t.includes(this.buehne)&&(this.zustand==="live"||this.zustand==="foto")){let i=e.shiftKey?12:4,r={ArrowLeft:[-i,0],ArrowRight:[i,0],ArrowUp:[0,-i],ArrowDown:[0,i]}[e.key];if(r){e.preventDefault(),this.melde("verschieben",r[0],r[1]);return}if(e.key==="+"||e.key==="="){e.preventDefault(),this.melde("skalieren",1.05);return}if(e.key==="-"||e.key==="_"){e.preventDefault(),this.melde("skalieren",1/1.05);return}e.key==="0"&&(e.preventDefault(),this.melde("zuruecksetzen"))}}fokussierbare(){return[...this.el.querySelectorAll("button, [tabindex], input:not(.a-datei), a[href]")].filter(t=>{if(t.disabled||t.tabIndex<0||t.hidden||!t.getClientRects().length)return!1;let n=getComputedStyle(t);return n.visibility==="visible"&&n.display!=="none"})}fokusFalle(e){let t=this.fokussierbare();if(!t.length){e.preventDefault();return}let n=this.wurzel.getRootNode().activeElement,i=t.indexOf(n),r=null;e.shiftKey?r=i<=0?t[t.length-1]:null:r=i===-1||i===t.length-1?t[0]:null,r&&(e.preventDefault(),r.focus({preventScroll:!0}))}fokusHalten(e){if(!this.istOffen)return;let t=this.wurzel.getRootNode().host;if(t&&!e.composedPath().includes(t)){let n=this.fokussierbare();n[0]&&n[0].focus({preventScroll:!0})}}richteGestenEin(){let e=this.buehne,t=new Map,n=0,i={t:0,x:0,y:0},r=!1,a=null,o=()=>this.zustand==="live"||this.zustand==="foto",l=()=>{let[h,f]=[...t.values()];return Math.hypot(h.x-f.x,h.y-f.y)};e.addEventListener("pointerdown",h=>{if(!(!o()||h.target.closest("button"))&&!(h.pointerType==="mouse"&&h.button!==0)){try{e.setPointerCapture(h.pointerId)}catch{}t.set(h.pointerId,{x:h.clientX,y:h.clientY}),t.size===1?(r=!1,a={x:h.clientX,y:h.clientY,t:performance.now()},this.melde("ziehen",{phase:"start",clientX:h.clientX,clientY:h.clientY})):t.size===2&&(this.melde("ziehen",{phase:"ende",clientX:h.clientX,clientY:h.clientY}),n=l(),r=!0)}}),e.addEventListener("pointermove",h=>{if(t.has(h.pointerId)){if(t.set(h.pointerId,{x:h.clientX,y:h.clientY}),t.size===1)a&&Math.hypot(h.clientX-a.x,h.clientY-a.y)>6&&(r=!0),r&&this.melde("ziehen",{phase:"bewegung",clientX:h.clientX,clientY:h.clientY});else if(t.size===2&&n>0){let f=l();f>0&&(this.melde("skalieren",f/n),n=f)}}});let c=h=>{if(t.has(h.pointerId)){if(t.delete(h.pointerId),t.size===0){this.melde("ziehen",{phase:"ende",clientX:h.clientX,clientY:h.clientY});let f=performance.now();!r&&a&&f-a.t<300&&h.type==="pointerup"&&(f-i.t<320&&Math.hypot(h.clientX-i.x,h.clientY-i.y)<40?(this.melde("zuruecksetzen"),i={t:0,x:0,y:0}):i={t:f,x:h.clientX,y:h.clientY}),a=null}else if(t.size===1){let[f]=[...t.values()];this.melde("ziehen",{phase:"start",clientX:f.x,clientY:f.y})}}};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("wheel",h=>{if(!o())return;h.preventDefault();let f=h.deltaMode===1?h.deltaY*16:h.deltaY;this.melde("skalieren",Math.exp(-f*.0015))},{passive:!1}),e.addEventListener("gesturestart",h=>h.preventDefault())}};var Mw="1.1.0",Id="https://storage.googleapis.com/mediapipe-models",bw=Object.freeze({mediapipe:`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${Mw}`,modelle:Object.freeze({hand:`${Id}/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,gesicht:`${Id}/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,koerper:`${Id}/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`}),delegate:"auto",qualitaet:"auto",shopName:"ARLISE",debug:!1,knopfText:"Virtuell anprobieren",aufnahmeBreite:1440,warenkorb:!0});function Pd(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)}function Ld(s,e){let t={...s};if(!Pd(e))return t;for(let[n,i]of Object.entries(e))i!==void 0&&(t[n]=Pd(i)&&Pd(s[n])?Ld(s[n],i):i);return t}function Sw(){try{let s=new URL(window.location.href);return s.searchParams.has("anprobe-debug")?s.searchParams.get("anprobe-debug")!=="0":/(^|[#&])anprobe-debug\b/.test(s.hash.slice(1))}catch{return!1}}function Ew(s){let e=typeof window<"u"?window.AnprobeKonfig:null,t=Ld(Ld(bw,e),s);return typeof window<"u"&&Sw()&&(t.debug=!0),t.debug=!!t.debug,t}var zd=Ew();function Ys(s){return String(s||"").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"")}function ax(s,e,t=null){if(!s||!s.varianten.length)return null;let n=s.varianten.filter(r=>r.verfuegbar);if(!n.length)return null;if(n.length===1&&s.varianten.length===1)return n[0];let i=Ys(e);if(i){let r=n.find(l=>Ys(l.titel)===i);if(r)return r;let a=l=>Ys(l).split(/\s*[/|,·-]\s*|\s+/).filter(Boolean),o=n.filter(l=>a(l.titel).includes(i)||a(l.titel).join(" ").includes(i));if(o.length)return(t?o.find(c=>Ys(c.titel)===Ys(t)):null)||o[0]}return null}var ww={ring:"environment",armband:"environment",kette:"user",ohrringe:"user"},Tw={ring:10,armband:25,kette:60,ohrringe:12},Aw=.7,Rw=1.4,Eh=[{pixelRatio:2,qualitaet:"hoch"},{pixelRatio:1.5,qualitaet:"mittel"},{pixelRatio:1,qualitaet:"mittel"}],Cw=24,Od=.5,ox=.6,kw=1.5,Nd=[120,600],Iw=8e3,Pw=4e3,Lw=450,zw=.8,Nw=.45,lx=2500,Dw=1e4,Uw={ring:55,armband:80,kette:170,ohrringe:90},Fw=3,Ow=15e3,Bw=-.3,Hw=1e3,cx=9e3,Vw=2e4,Gw=new T,hx={verweigert:{titel:"Kein Zugriff auf die Kamera",text:"Erlaube den Kamerazugriff in den Einstellungen deines Browsers \u2013 oder probiere den Schmuck an einem Foto von dir an."},"keine-kamera":{titel:"Keine Kamera gefunden",text:"Auf diesem Ger\xE4t ist keine Kamera verf\xFCgbar. W\xE4hle stattdessen ein Foto von dir."},belegt:{titel:"Die Kamera ist gerade belegt",text:"Schlie\xDFe andere Apps oder Tabs, die die Kamera nutzen, und versuche es erneut. Oder w\xE4hle ein Foto."},unsicher:{titel:"Kamera nicht verf\xFCgbar",text:"Die Kamera l\xE4sst sich nur auf sicheren Seiten (https) nutzen. Du kannst aber ein Foto w\xE4hlen."},laden:{titel:"Die Anprobe konnte nicht geladen werden",text:"Bitte pr\xFCfe deine Internetverbindung und versuche es noch einmal.",foto:!1},webgl:{titel:"3D-Darstellung nicht m\xF6glich",text:"Dein Browser unterst\xFCtzt die n\xF6tige 3D-Grafik leider nicht. Probiere es mit einem aktuellen Browser.",foto:!1,erneut:!1},foto:{titel:"Das Foto konnte nicht ge\xF6ffnet werden",text:"Bitte w\xE4hle ein anderes Bild (JPEG oder PNG).",erneut:!1},allgemein:{titel:"Etwas ist schiefgelaufen",text:"Bitte versuche es noch einmal."}},Ww=new Set(["verweigert","keine-kamera","belegt","unsicher"]),Xw={ring:"Auf dem Foto ist keine Hand zu erkennen",armband:"Auf dem Foto ist keine Hand zu erkennen",ohrringe:"Auf dem Foto ist kein Gesicht zu erkennen",kette:"Auf dem Foto sind Hals und Schultern nicht zu erkennen"},xo=class extends Error{constructor(){super("abgebrochen"),this.name="Abbruch"}},Dd=new Map;function Ud(s,e=zd){let t=Dd.get(s);if(t)return t;let n={anteil:0,text:"",fertig:!1,hoerer:new Set};return n.tracker=new Nc(s,{konfig:e,onFortschritt:(i,r)=>{n.anteil=Math.max(n.anteil,i||0),r&&(n.text=r);for(let a of n.hoerer)a(n.anteil,n.text)}}),n.bereit=n.tracker.laden().then(()=>{n.fertig=!0,n.anteil=1;for(let i of n.hoerer)i(1,n.text);return n.tracker},i=>{throw n.fehler=i,Dd.delete(s),i}),n.bereit.catch(()=>{}),Dd.set(s,n),n}function Fd(s){let e=s&&s.name;return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"verweigert":e==="NotFoundError"||e==="DevicesNotFoundError"||e==="OverconstrainedError"?"keine-kamera":e==="NotReadableError"||e==="TrackStartError"||e==="AbortError"?"belegt":e==="NichtSicher"?"unsicher":"allgemein"}function ux(s,e=40){return Ys(s).replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,e).replace(/-+$/,"")||"schmuck"}function qw(s=new Date){let e=t=>String(t).padStart(2,"0");return`${s.getFullYear()}${e(s.getMonth()+1)}${e(s.getDate())}-${e(s.getHours())}${e(s.getMinutes())}`}async function $w(s){let e=URL.createObjectURL(s);try{let t=new Image;t.decoding="async",t.src=e,await t.decode();let n=t.naturalWidth,i=t.naturalHeight;if(!n||!i)throw new Error("Bild leer");let r=Math.min(1,1920/Math.max(n,i)),a=document.createElement("canvas");a.width=Math.round(n*r),a.height=Math.round(i*r);let o=a.getContext("2d");return o.imageSmoothingQuality="high",o.drawImage(t,0,0,a.width,a.height),{canvas:a,url:e}}catch(t){throw URL.revokeObjectURL(e),t}}function Th(s,e,t){return s<e?e:s>t?t:s}function Kw(s,e){if(s<=Od*e)return 0;let t=Th((s-Nd[0])/(Nd[1]-Nd[0]),0,1),n=ox+(kw-ox)*t*t*(3-2*t);return Math.min(Iw,s*n)}function Yw(){try{let s=navigator.scheduling;return!!(s&&typeof s.isInputPending=="function"&&s.isInputPending())}catch{return!1}}function Zw(s,e,t){return new Promise((n,i)=>{let r=0,a=0,o=c=>{clearTimeout(r),clearInterval(a),s.removeEventListener("loadedmetadata",l),c()},l=()=>o(n);if(s.readyState>=1){n();return}s.addEventListener("loadedmetadata",l),r=setTimeout(()=>o(()=>{let c=new Error("Die Kamera liefert kein Bild");c.name="NotReadableError",i(c)}),t),a=setInterval(()=>{s.srcObject!==e&&o(()=>i(new xo))},200)})}function wh(s){return new Promise(e=>setTimeout(e,s))}var fx=class{constructor(e,{konfig:t}={}){this.konfig=t||zd,this.zustand="zu",this.sitzung=0,this.produkt=null,this.vorrat=null,this.tracker=null,this.buehne=null,this.stream=null,this.spiegel=!0,this.richtung="user",this.geraete=0,this.modelle=new Map,this.variante=0,this.finger=null,this.anpassung={skala:1,versatzMm:new T},this.ergebnis=null,this.fotoQuelle=null,this.objektUrls=new Set,this.stufe=0,this.laufId=0,this.kameraNr=0,this.wechselt=!1,this.nimmtAuf=!1,this.statistik=this.neueStatistik(),this.debugObjekt=null,this.fenster=new Sh(e,{shopName:this.konfig.shopName,aktionen:{kameraStarten:()=>this.kameraStarten(),fotoGewaehlt:n=>this.fotoGewaehlt(n),schliessen:()=>this.schliesse(),ausloesen:()=>this.ausloesen(),kameraWechseln:()=>this.kameraWechseln(),zurKamera:()=>this.kameraStarten(),variante:n=>this.waehleVariante(n),finger:n=>this.waehleFinger(n),teilen:()=>this.teilen(),speichern:()=>this.speichern(),warenkorb:()=>this.inDenWarenkorb(),zurueck:()=>this.zurueckZurAnprobe(),erneut:()=>this.kameraStarten(),ziehen:n=>this.ziehen(n),verschieben:(n,i)=>this.verschiebeUm(n,i),skalieren:n=>this.skaliere(n),zuruecksetzen:()=>this.setzeAnpassungZurueck()}}),this.eingabeBis=0,this.beiEingabe=()=>{this.eingabeBis=performance.now()+Lw};for(let n of["pointerdown","keydown","wheel","touchstart"])this.fenster.el.addEventListener(n,this.beiEingabe,{capture:!0,passive:!0});this.beiSichtbarkeit=()=>this.sichtbarkeitGeaendert(),this.beiFokus=n=>this.fenster.fokusHalten(n),this.groesse=new ResizeObserver(()=>this.ansichtAnpassen()),this.richteDebugEin()}async oeffne(e){if(!e||!e.art)throw new Error("Anprobe: Produkt ohne Art");this.zustand!=="zu"&&await this.schliesse(),this.sitzung++,this.wechselt=!1,this.nimmtAuf=!1,this.pausiert=!1,this.entsorgeBuehne(),this.fotoQuelle=null,this.ergebnis=null,this.produkt=e,this.variante=e.startVariante>0&&e.startVariante<e.varianten.length?e.startVariante:0,this.finger=e.art==="ring"?e.finger||"ring":null,this.anpassung={skala:1,versatzMm:new T},this.richtung=ww[e.art]||"user",this.geraetId=null,this.stufe=0,this.statistik=this.neueStatistik(),this.tippGezeigt=!1,this.richteDebugEin(),this.scrollGesperrt||(this.scrollGesperrt=!0,this.scrollVorher=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden"),document.addEventListener("visibilitychange",this.beiSichtbarkeit),document.addEventListener("focusin",this.beiFokus),this.groesse.observe(this.fenster.buehne),this.fenster.setzeFinger(null),this.fingerRechts=!1,this.fenster.setzeFingerSeite(!1),this.fenster.setzeVarianten(e.varianten,this.variante),this.fenster.setzeFotoModus(!1),this.fenster.setzeKameraWechsel(!1),this.fenster.oeffne(e),this.setzeZustand("intro"),this.vorrat=Ud(e.art,this.konfig)}async schliesse(){if(this.zustand!=="zu"&&(this.sitzung++,this.kameraNr++,this.wechselt=!1,this.nimmtAuf=!1,this.pausiert=!1,clearTimeout(this.ergebnisKameraUhr),this.setzeZustand("zu"),this.stoppeSchleife(),this.stoppeKamera(),this.fenster.setzeVideo(null),document.removeEventListener("visibilitychange",this.beiSichtbarkeit),document.removeEventListener("focusin",this.beiFokus),this.groesse.disconnect(),this.vorrat&&this.ladeHoerer&&this.vorrat.hoerer.delete(this.ladeHoerer),await this.fenster.schliesse(),this.zustand==="zu")){this.entsorgeBuehne(),this.tracker&&this.tracker.zuruecksetzen();for(let e of this.objektUrls)URL.revokeObjectURL(e);this.objektUrls.clear(),this.fotoQuelle=null,this.ergebnis=null,this.ergebnisBlob=null,this.scrollGesperrt&&(this.scrollGesperrt=!1,document.documentElement.style.overflow=this.scrollVorher||"")}}setzeZustand(e){this.zustand=e,e!=="zu"&&this.fenster.setzeZustand(e),this.debugObjekt&&(this.debugObjekt.zustand=e)}ladeFortschrittVerfolgen(){let e=this.vorrat;this.ladeHoerer&&e.hoerer.delete(this.ladeHoerer);let t=(n,i)=>{if(this.zustand!=="laden")return;let r=.9*n+.05*(this.kameraBereit?1:0)+.05*(this.buehne?1:0),a=n>=1&&!this.kameraBereit?"Kamera wird gestartet":i||e.text||"Lade";this.fenster.setzeFortschritt(r,a)};return this.ladeHoerer=t,e.hoerer.add(t),t(e.anteil,e.text),t}async kameraStarten(){let e=this.sitzung;if(this.zustand==="zu"||this.zustand==="laden")return;this.stoppeSchleife(),this.fotoQuelle=null,this.buehne&&this.buehne.setzeFokus(null),this.fenster.setzeFotoGrund(null),this.fenster.setzeFotoModus(!1),(!this.vorrat||this.vorrat.fehler)&&(this.vorrat=Ud(this.produkt.art,this.konfig)),this.kameraBereit=!1,this.fenster.setzeMilchglas(!1),this.setzeZustand("laden");let t=this.ladeFortschrittVerfolgen();t(this.vorrat.anteil,this.vorrat.text||"Starte Kamera");let n=this.starteKamera(e).then(()=>{this.kameraBereit=!0,this.fenster.setzeMilchglas(!0),t(this.vorrat.anteil)});n.catch(o=>{e===this.sitzung&&this.zustand==="laden"&&o.name!=="Abbruch"&&this.zeigeFehler(Fd(o),o)});let i=null;try{if(await wh(16),e!==this.sitzung)return;this.bereiteBuehne(),t(this.vorrat.anteil)}catch(o){i=o}let[r,a]=await Promise.allSettled([n,this.vorrat.bereit]);if(e===this.sitzung){if(this.zustand!=="laden"){this.stoppeKamera();return}if(r.status!=="rejected"){if(i){this.stoppeKamera(),this.zeigeFehler("webgl",i);return}if(a.status==="rejected"){this.stoppeKamera(),this.zeigeFehler("laden",a.reason);return}this.tracker=a.value,this.tracker.zuruecksetzen();try{await this.zeigeVariante(this.variante,e)}catch(o){if(e!==this.sitzung)return;this.stoppeKamera(),this.zeigeFehler("allgemein",o);return}if(!(e!==this.sitzung||this.zustand!=="laden")){try{this.quelleSetzen(!0),await Promise.race([this.buehne.vorbereiten(),wh(4e3)])}catch(o){this.meldeFehler(o)}e!==this.sitzung||this.zustand!=="laden"||(this.fenster.setzeFortschritt(1,"Bereit"),this.quelleSetzen(!0),this.ansichtAnpassen(),this.fenster.setzeFinger(this.finger),this.fenster.setzeVarianten(this.produkt.varianten,this.variante),await wh(180),!(e!==this.sitzung||this.zustand!=="laden")&&(this.setzeZustand("live"),this.starteSchleife(),this.tippGezeigt||(this.tippGezeigt=!0,setTimeout(()=>{e===this.sitzung&&this.zustand==="live"&&this.fenster.zeigeTipp()},1400))))}}}}festeQualitaet(){let e=this.konfig.qualitaet;return e==="hoch"||e==="mittel"||e==="niedrig"?e:null}bereiteBuehne(){if(this.buehne)return this.buehne;let e=this.fenster.neuesCanvas(),t=Eh[this.stufe];return this.buehne=new lh(e,{pixelRatio:Math.min(window.devicePixelRatio||1,t.pixelRatio),qualitaet:this.festeQualitaet()||t.qualitaet}),this.quelleInfo=null,this.buehne.onKontextVerlust=()=>this.kontextVerloren(),this.ansichtAnpassen(),this.buehne}kontextVerloren(){this.meldeFehler(new Error("WebGL-Kontext verloren")),this.stoppeSchleife(),this.kontextNeuNoetig=!0,document.visibilityState==="visible"&&setTimeout(()=>this.kontextWiederherstellen(),300)}async kontextWiederherstellen(){if(!this.kontextNeuNoetig||this.zustand==="zu"||document.visibilityState!=="visible")return;this.kontextNeuNoetig=!1;let e=this.sitzung,t=this.zustand;this.entsorgeBuehne();try{this.bereiteBuehne(),await this.zeigeVariante(this.variante,e)}catch(n){e===this.sitzung&&this.zeigeFehler("webgl",n);return}e===this.sitzung&&(this.quelleSetzen(!0),this.zustand==="live"||this.zustand==="foto"?this.starteSchleife():t==="ergebnis"&&this.rendereEinmal())}entsorgeBuehne(){if(this.buehne)try{this.buehne.dispose()}catch(e){this.meldeFehler(e)}this.buehne=null,this.fenster.entferneCanvas();for(let e of this.modelle.values())try{e.dispose()}catch{}this.modelle.clear()}kameraBedingungen(){let e=window.innerHeight>window.innerWidth&&Math.min(window.innerWidth,window.innerHeight)<900,t={width:{ideal:e?720:1280},height:{ideal:e?1280:720},frameRate:{ideal:30}};return this.geraetId?t.deviceId={exact:this.geraetId}:t.facingMode={ideal:this.richtung},{audio:!1,video:t}}async starteKamera(e){if(!window.isSecureContext){let l=new Error("Kamera nur ueber https");throw l.name="NichtSicher",l}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){let l=new Error("getUserMedia fehlt");throw l.name="NotFoundError",l}let t=++this.kameraNr;this.stoppeKamera();let n;try{n=await navigator.mediaDevices.getUserMedia(this.kameraBedingungen())}catch(l){if(this.geraetId&&(l.name==="OverconstrainedError"||l.name==="NotFoundError"))this.geraetId=null,n=await navigator.mediaDevices.getUserMedia(this.kameraBedingungen());else throw l}let i=()=>{if(!(e===this.sitzung&&this.zustand!=="zu"&&t===this.kameraNr)){for(let l of n.getTracks())l.stop();throw this.stream===n&&(this.stream=null,this.richteDebugKamera()),new xo}};i(),this.stream&&this.stream!==n&&this.stoppeKamera(),this.stream=n;let r=n.getVideoTracks()[0],a=r&&r.getSettings&&r.getSettings()||{};this.spiegel=a.facingMode!=="environment",(a.facingMode==="user"||a.facingMode==="environment")&&(this.richtung=a.facingMode),this.kameraFps=a.frameRate||30,r.addEventListener("ended",()=>{this.stream===n&&this.zustand==="live"&&this.zeigeFehler("belegt",new Error("Kamera beendet"))});let o=this.fenster.video;this.fenster.setzeVideo(n,this.spiegel);try{await Zw(o,n,Dw)}catch(l){for(let c of n.getTracks())c.stop();throw this.stream===n&&(this.stream=null,this.richteDebugKamera()),i(),l}i();try{await o.play()}catch{}if(i(),this.stream!==n)throw new xo;try{let l=await navigator.mediaDevices.enumerateDevices();this.kameras=l.filter(c=>c.kind==="videoinput"),this.geraete=this.kameras.length}catch{this.geraete=1}return this.fenster.setzeKameraWechsel(this.geraete>1),this.aktuellesGeraet=a.deviceId||null,this.richteDebugKamera(),n}stoppeKamera(){if(this.stream)for(let e of this.stream.getTracks())e.stop();this.stream=null,this.richteDebugKamera()}async kameraWechseln(){if(this.wechselt||this.zustand!=="live"||this.geraete<2)return;this.wechselt=!0;let e=this.sitzung,t={richtung:this.richtung,geraetId:this.geraetId};try{if(this.stoppeSchleife(),this.richtung&&this.aktuellesGeraetHatRichtung())this.geraetId=null,this.richtung=this.richtung==="user"?"environment":"user";else{let n=(this.kameras||[]).map(r=>r.deviceId).filter(Boolean),i=n.indexOf(this.aktuellesGeraet);this.geraetId=n.length?n[(i+1)%n.length]:null}if(await this.starteKamera(e),e!==this.sitzung)return;this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife()}catch(n){if(e!==this.sitzung||n.name==="Abbruch")return;this.richtung=t.richtung,this.geraetId=t.geraetId;try{if(await this.starteKamera(e),e!==this.sitzung||this.zustand!=="live")return;this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife(),this.fenster.sage("Die andere Kamera ist gerade nicht verf\xFCgbar.")}catch(i){e===this.sitzung&&i.name!=="Abbruch"&&this.zeigeFehler(Fd(i),i)}}finally{e===this.sitzung&&(this.wechselt=!1)}}aktuellesGeraetHatRichtung(){let e=this.stream&&this.stream.getVideoTracks()[0],t=e&&e.getSettings?e.getSettings().facingMode:null;return t==="user"||t==="environment"}sichtbarkeitGeaendert(){if(document.hidden){this.stream&&(this.pausiert=!0,this.zustand==="live"&&this.stoppeSchleife(),this.stoppeKamera());return}if(this.kontextNeuNoetig&&this.kontextWiederherstellen(),!this.pausiert||(this.pausiert=!1,this.zustand!=="live"&&this.zustand!=="laden"))return;let e=this.sitzung;this.starteKamera(e).then(()=>{e!==this.sitzung||this.zustand!=="live"||(this.tracker&&this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife())},t=>{e===this.sitzung&&t.name!=="Abbruch"&&this.zeigeFehler(Fd(t),t)})}quelleSetzen(e=!1){if(!this.buehne)return!1;let t,n,i,r;if(this.fotoQuelle?(t=this.fotoQuelle.canvas,n=t.width,i=t.height,r=!1):(t=this.fenster.video,n=t.videoWidth,i=t.videoHeight,r=this.spiegel),!n||!i)return!1;let a=this.quelleInfo;return!e&&a&&a.quelle===t&&a.W===n&&a.H===i&&a.spiegel===r||(this.quelleInfo={quelle:t,W:n,H:i,spiegel:r},this.buehne.setzeQuelle(t,{W:n,H:i,spiegel:r,statisch:!!this.fotoQuelle}),this.ansichtAnpassen()),!0}ansichtAnpassen(){if(!this.buehne)return;let e=this.fenster.buehne.getBoundingClientRect();e.width<2||e.height<2||(this.buehne.setzeAnsicht(e.width,e.height,this.fotoQuelle?"contain":"cover"),(this.zustand==="foto"||this.zustand==="ergebnis")&&this.rendereEinmal(),this.weckeFoto())}rendereEinmal(){if(!(!this.buehne||!this.ergebnis))try{this.buehne.aktualisiere(this.ergebnis,0),this.buehne.rendere()}catch(e){this.meldeFehler(e)}}starteSchleife(){this.stoppeSchleife();let e=++this.laufId,t=this.fenster.video,n=!!this.fotoQuelle,i=!n&&typeof t.requestVideoFrameCallback=="function";this.letzterFrame=null,this.letztePraesentiert=null,this.letzteVideoZeit=null,this.fotoSchlaeft=!1,n&&(this.fotoRuheAb=performance.now()+lx);let r=(o,l)=>{if(e!==this.laufId)return;if(this.raf=0,this.rvfc=null,!n){if(Yw()){this.pauseTimer=setTimeout(a,0);return}let d=this.eingabeBis-performance.now();if(d>0&&this.statistik.schrittMs>Od*1e3/Th(this.kameraFps||30,10,60)){this.pauseTimer=setTimeout(a,d);return}if(!i){let p=t.currentTime;if(p===this.letzteVideoZeit&&!t.paused){a();return}this.letzteVideoZeit=p}}let c=performance.now();if(this.frame(o,l),e!==this.laufId)return;let h=performance.now()-c;if(n){if(performance.now()>this.fotoRuheAb){this.fotoSchlaeft=!0;return}a();return}let f=1e3/Th(this.kameraFps||30,10,60);if(h<=Od*f){a();return}let u=()=>{if(this.pauseTimer=0,e!==this.laufId)return;let d=performance.now();if(this.buehne&&!this.buehne.gpuFertig()&&d-c<Pw){this.pauseTimer=setTimeout(u,8);return}let p=Kw(d-c,f);p>=4?this.pauseTimer=setTimeout(a,p):a()};u()},a=()=>{this.pauseTimer=0,e===this.laufId&&(i?this.rvfc={video:t,id:t.requestVideoFrameCallback(r)}:this.raf=requestAnimationFrame(r))};a()}stoppeSchleife(){this.laufId++,this.raf&&cancelAnimationFrame(this.raf),this.rvfc&&this.rvfc.video.cancelVideoFrameCallback&&this.rvfc.video.cancelVideoFrameCallback(this.rvfc.id),this.pauseTimer&&clearTimeout(this.pauseTimer),this.raf=0,this.rvfc=null,this.pauseTimer=0}weckeFoto(){this.zustand!=="foto"||!this.buehne||(this.fotoRuheAb=performance.now()+lx,(this.fotoSchlaeft||!this.raf&&!this.rvfc&&!this.pauseTimer)&&this.starteSchleife())}frame(e,t){if(!this.buehne||!this.tracker)return;if(t&&t.presentedFrames!=null){let c=this.statistik;if(this.letztePraesentiert!=null){let h=t.presentedFrames-this.letztePraesentiert;h>0&&(c.gezeigt+=h,c.verpasst+=h-1)}this.letztePraesentiert=t.presentedFrames}let n=!!this.fotoQuelle;if(!this.quelleSetzen())return;let{W:i,H:r,spiegel:a,quelle:o}=this.quelleInfo,l=this.letzterFrame==null?1/30:Math.min(1,Math.max(0,(e-this.letzterFrame)/1e3));this.letzterFrame=e;try{let c=performance.now();if(!n){let u=performance.now();this.letzteZeit!=null&&u<=this.letzteZeit&&(u=this.letzteZeit+1),this.letzteZeit=u;let d=1e3/Th(this.kameraFps||30,10,60),p=this.statistik;p.schrittMs>zw*d?this.sparen=!0:p.schrittMs<Nw*d&&(this.sparen=!1),this.ergebnis=this.tracker.verarbeite(o,u,{W:i,H:r,spiegel:a,sparen:!!this.sparen})}let h=performance.now();this.buehne.aktualisiere(this.ergebnis,l),this.buehne.rendere();let f=performance.now();if(this.fehlerFolge=0,this.messe(e,n?this.statistik.trackingMs:h-c,f-h),!n){let u=this.hinweisFuer(this.ergebnis);this.fenster.setzeHinweis(u),this.debugObjekt&&(this.debugObjekt.hinweis=u&&u.code||null)}this.fingerKachelAusweichen(e)}catch(c){this.meldeFehler(c),this.fehlerFolge=(this.fehlerFolge||0)+1,this.fehlerFolge>45&&(this.stoppeSchleife(),this.stoppeKamera(),this.zeigeFehler("allgemein",c))}if(this.debugObjekt){let c=this.debugObjekt;c.ergebnis=this.ergebnis,c.fps=this.statistik.fps,c.renderMs=this.statistik.renderMs,c.trackingMs=this.statistik.trackingMs,c.sparen=!!this.sparen}}fingerKachelAusweichen(e){if(!this.finger||!this.buehne||!this.buehne.sicht||this.kachelPruefung&&e-this.kachelPruefung<300)return;this.kachelPruefung=e;let t=this.aktuellerAnker(),n=this.fenster.fingerRechteck();if(!t||!n||!(t.sichtbar>.05)||!this.fenster.canvas)return;let i=this.fenster.canvas.getBoundingClientRect(),r=this.buehne.sicht,a=i.left+(t.position.x-r.links)*r.cssProPx,o=i.top+(r.oben-t.position.y)*r.cssProPx,l=28+12*t.pxProMm*r.cssProPx;a>n.left-l&&a<n.right+l&&o>n.top-l&&o<n.bottom+l&&(this.fingerRechts=!this.fingerRechts,this.fenster.setzeFingerSeite(this.fingerRechts))}ringMitOberteil(){let e=this.produkt&&this.produkt.varianten[this.variante],t=e&&e.spec&&e.spec.ring&&e.spec.ring.typ;return!!t&&t!=="band"&&t!=="kette"}ringOberteilAbgewandt(e){if(!e||!e.gefunden||this.produkt.art!=="ring"||!this.ringMitOberteil())return!1;let t=e.anker&&e.anker.ring&&e.anker.ring[this.finger];return!t||!t.quaternion?!1:Gw.set(0,0,1).applyQuaternion(t.quaternion).z<Bw}hinweisFuer(e){let t=e&&e.hinweis;if(t&&t.code!=="finger-spreizen")return this.rueckenSeit=null,t;if(!this.ringOberteilAbgewandt(e))return this.rueckenSeit=null,t;let n=performance.now();if(this.rueckenSeit==null&&(this.rueckenSeit=n,this.rueckenGezeigtSeit=null),n-this.rueckenSeit<Hw)return t;this.rueckenGezeigtSeit==null&&(this.rueckenGezeigtSeit=n);let i=n-this.rueckenGezeigtSeit;return i<cx?{code:"handruecken",text:"Dreh die Hand \u2013 Handr\xFCcken zur Kamera"}:(i>cx+Vw&&(this.rueckenGezeigtSeit=n),t)}neueStatistik(){return{fps:0,renderMs:0,trackingMs:0,schrittMs:0,fpsStart:0,fpsFrames:0,fensterStart:0,frames:0,schlecht:0,gezeigt:0,verpasst:0}}messe(e,t,n){let i=this.statistik,r=.1;i.trackingMs=i.trackingMs?i.trackingMs+r*(t-i.trackingMs):t,i.renderMs=i.renderMs?i.renderMs+r*(n-i.renderMs):n;let a=t+n;if(i.schrittMs=i.schrittMs?i.schrittMs+.25*(a-i.schrittMs):a,!i.fpsStart)i.fpsStart=e;else{i.fpsFrames++;let o=e-i.fpsStart;if(o>=1e3){let l=i.fpsFrames*1e3/o;i.fps=i.fps?.5*(i.fps+l):l,i.fpsStart=e,i.fpsFrames=0}}if(i.fensterStart||(i.fensterStart=e),i.frames++,e-i.fensterStart>=2e3){let o=i.frames*1e3/(e-i.fensterStart),l=i.gezeigt>0?i.verpasst/i.gezeigt:0,c=i.trackingMs+i.renderMs,h=o<Cw&&(c>28||l>.25&&c>16);i.schlecht=h?i.schlecht+1:0,i.fensterStart=e,i.frames=0,i.gezeigt=0,i.verpasst=0,i.schlecht>=2&&document.visibilityState==="visible"&&!this.festeQualitaet()&&(i.schlecht=0,this.senkeQualitaet())}}senkeQualitaet(){if(this.stufe>=Eh.length-1||!this.buehne)return;this.stufe++;let e=Eh[this.stufe],t=Math.min(window.devicePixelRatio||1,e.pixelRatio);if(this.debugObjekt&&(this.debugObjekt.qualitaet={stufe:this.stufe,...e}),typeof this.buehne.setzeQualitaet=="function"){this.buehne.setzeQualitaet({pixelRatio:t,qualitaet:e.qualitaet}),this.ansichtAnpassen();return}let n=this.modelle.get(this.variante);try{this.buehne.dispose()}catch(i){this.meldeFehler(i)}this.buehne=null,this.bereiteBuehne(),n&&this.buehne.setzeSchmuck(n,{finger:this.finger||void 0,freigeben:!1}),this.buehne.setzeAnpassung(this.anpassung),this.quelleSetzen(!0),this.fenster.canvas&&(this.fenster.canvas.style.transition="none")}async baueModell(e,t=this.sitzung){if(this.modelle.has(e))return this.modelle.get(e);let n=this.produkt.varianten[e],i;if(n.glbUrl)try{i=await Z0(n.glbUrl,{...n.spec,art:this.produkt.art})}catch(r){this.meldeFehler(r),i=vh({...n.spec,art:this.produkt.art})}else i=vh({...n.spec,art:this.produkt.art});if(t!==this.sitzung){try{i.dispose()}catch{}return null}if(this.modelle.has(e)){try{i.dispose()}catch{}return this.modelle.get(e)}return this.modelle.set(e,i),i}async zeigeVariante(e,t=this.sitzung){let n=await this.baueModell(e,t);!n||t!==this.sitzung||!this.buehne||(this.variante=e,this.buehne.setzeSchmuck(n,{finger:this.finger||void 0,freigeben:!1}),this.buehne.setzeAnpassung(this.anpassung),this.debugObjekt&&(this.debugObjekt.variante=e))}async waehleVariante(e){if(!(!this.produkt||!this.produkt.varianten[e]||e===this.variante)){this.fenster.setzeVarianten(this.produkt.varianten,e),this.variante=e;try{await this.zeigeVariante(e),this.fenster.sage(`Variante ${this.produkt.varianten[e].name}`),this.zustand==="foto"&&(this.rendereEinmal(),this.weckeFoto())}catch(t){this.meldeFehler(t)}}}waehleFinger(e){!this.finger||e===this.finger||(this.finger=e,this.anpassung.versatzMm.set(0,0,0),this.fenster.setzeFinger(e),this.buehne&&(this.buehne.setzeFinger(e),this.buehne.setzeAnpassung(this.anpassung)),this.anpassungGeaendert(),this.weckeFoto(),this.debugObjekt&&(this.debugObjekt.finger=e))}aktuellerAnker(){let e=this.ergebnis&&this.ergebnis.anker;if(!e)return null;switch(this.produkt.art){case"ring":return e.ring?e.ring[this.finger]:null;case"armband":return e.armband||null;case"kette":return e.kette||null;default:{let t=e.ohrR,n=e.ohrL;return t&&(!n||(t.sichtbar||0)>=(n.sichtbar||0))?t:n||null}}}bildschirmZuMm(e,t,n,i){let r=this.aktuellerAnker();if(!r||!r.pxProMm||!this.buehne)return null;let a=this.buehne.bildschirmZuBuehne(e,t),o=this.buehne.bildschirmZuBuehne(n,i);if(!a||!o)return null;let l=r.pxProMm*(this.anpassung.skala||1),c=new T((o.x-a.x)/l,(o.y-a.y)/l,0);c.applyQuaternion(r.quaternion.clone().invert());let h=this.produkt.art;return h==="ring"||h==="armband"?c.set(0,c.y,0):c.z=0,c}ziehen({phase:e,clientX:t,clientY:n}){if(e==="start"){this.zug={x:t,y:n,versatz:this.anpassung.versatzMm.clone()};return}if(e==="ende"){this.zug=null;return}if(!this.zug)return;let i=this.bildschirmZuMm(this.zug.x,this.zug.y,t,n);i&&this.setzeVersatz(this.zug.versatz.clone().add(i))}verschiebeUm(e,t){let n=this.fenster.buehne.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2,a=this.bildschirmZuMm(i,r,i+e,r+t);a&&this.setzeVersatz(this.anpassung.versatzMm.clone().add(a))}setzeVersatz(e){let t=Tw[this.produkt.art]||20;e.length()>t&&e.setLength(t),this.anpassung.versatzMm.copy(e),this.anpassungUebernehmen()}skaliere(e){e>0&&(this.anpassung.skala=Math.min(Rw,Math.max(Aw,this.anpassung.skala*e)),this.anpassungUebernehmen())}setzeAnpassungZurueck(){this.anpassung.skala=1,this.anpassung.versatzMm.set(0,0,0),this.anpassungUebernehmen()}anpassungUebernehmen(){this.buehne&&this.buehne.setzeAnpassung(this.anpassung),this.anpassungGeaendert(),this.zustand==="foto"&&(this.rendereEinmal(),this.weckeFoto())}anpassungGeaendert(){let e=this.anpassung;this.fenster.setzeAnpassungAktiv(Math.abs(e.skala-1)>.01||e.versatzMm.length()>.3),this.debugObjekt&&(this.debugObjekt.anpassung={skala:e.skala,versatzMm:e.versatzMm.toArray()})}async fotoGewaehlt(e){if(this.zustand==="zu")return;let t=this.sitzung;this.stoppeSchleife(),this.kameraNr++,this.stoppeKamera(),this.fenster.setzeVideo(null),this.fenster.setzeMilchglas(!1),this.setzeZustand("laden"),(!this.vorrat||this.vorrat.fehler)&&(this.vorrat=Ud(this.produkt.art,this.konfig)),this.kameraBereit=!0;let n=this.ladeFortschrittVerfolgen(),i;try{i=await $w(e)}catch(l){t===this.sitzung&&this.zeigeFehler("foto",l);return}if(t!==this.sitzung){URL.revokeObjectURL(i.url);return}this.objektUrls.add(i.url);try{this.bereiteBuehne(),n(this.vorrat.anteil)}catch(l){this.zeigeFehler("webgl",l);return}let r;try{r=await this.vorrat.bereit}catch(l){t===this.sitzung&&this.zeigeFehler("laden",l);return}if(t!==this.sitzung)return;this.tracker=r,this.fotoQuelle=i;try{if(await this.zeigeVariante(this.variante,t),t!==this.sitzung)return;let{canvas:l}=i;this.ergebnis=r.verarbeite(l,null,{W:l.width,H:l.height,spiegel:!1}),r.zuruecksetzen()}catch(l){t===this.sitzung&&this.zeigeFehler("allgemein",l);return}this.debugObjekt&&(this.debugObjekt.ergebnis=this.ergebnis),this.fenster.setzeFortschritt(1,"Bereit"),this.fenster.setzeFotoGrund(i.url),this.fenster.setzeFotoModus(!0,!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)),this.fenster.setzeFinger(this.finger),this.fenster.setzeVarianten(this.produkt.varianten,this.variante),this.quelleSetzen(!0),this.fotoEinpassen(),this.buehne&&this.buehne.blendeSofort();let a=this.ergebnis,o=a&&a.gefunden?null:{code:a&&a.hinweis&&a.hinweis.code||"kein-fund",text:Xw[this.produkt.art]};!o&&this.ringOberteilAbgewandt(a)&&(o={code:"handruecken",text:"Am sch\xF6nsten mit einem Foto vom Handr\xFCcken"}),this.fenster.setzeHinweis(o),await wh(120),!(t!==this.sitzung||this.zustand!=="laden")&&(this.setzeZustand("foto"),this.starteSchleife())}fotoEinpassen(){let e=this.buehne,t=this.ergebnis;if(!e||!t||!t.gefunden||!this.fotoQuelle){e&&e.setzeFokus(null);return}let n=t.anker||{},i=null,r=0,a=Uw[this.produkt.art]||80;if(this.produkt.art==="ohrringe"){let p=[n.ohrL,n.ohrR].filter(x=>x&&x.position);p.length&&(i=p.reduce((x,g)=>x.add(g.position),new T).multiplyScalar(1/p.length),r=p[0].pxProMm,p.length===2&&(a=Math.max(a,p[0].position.distanceTo(p[1].position)/(2*r)+40)))}else{let p=this.aktuellerAnker();p&&p.position&&(i=p.position.clone(),r=p.pxProMm)}if(!i||!(r>0)){e.setzeFokus(null);return}this.produkt.art==="kette"&&(i.y-=60*r);let{breite:o,hoehe:l}=e.ansicht,{W:c,H:h}=this.quelleInfo,f=Math.min(o/c,l/h),u=2*a*r*f,d=Math.min(Fw,Math.min(o,l)/Math.max(1,u));e.setzeFokus(d>1.15?{x:i.x,y:i.y,zoom:d}:null)}async ausloesen(){if(this.zustand!=="live"&&this.zustand!=="foto"||!this.buehne||this.nimmtAuf)return;let e=this.sitzung;this.nimmtAuf=!0,this.fenster.setzeAusloeserAktiv(!1),this.fenster.blitz();try{let t=this.buehne.sicht,n=this.quelleInfo?this.quelleInfo.W:0,i=n?Math.min(t.rechts,n)-Math.max(t.links,0):0,r=this.konfig.aufnahmeBreite||1440,a=i>0?Math.min(r,Math.max(720,Math.round(2*i))):r,o=await this.buehne.aufnahme({breite:a,jpegQualitaet:.97});if(e!==this.sitzung)return;let l=await this.mitSignatur(o);if(e!==this.sitzung)return;this.vorherZustand=this.zustand,this.stoppeSchleife(),this.ergebnisBlob=l;let c=URL.createObjectURL(l);this.objektUrls.add(c),this.ergebnisDatei=new File([l],this.dateiname(),{type:"image/jpeg"});let h=!1;try{h=!!(navigator.canShare&&navigator.canShare({files:[this.ergebnisDatei]}))}catch{}let f=this.produkt.varianten[this.variante];this.kaufVariante=this.konfig.warenkorb===!1?null:ax(this.produkt.shop,f&&f.name,this.produkt.seitenVariante),this.warenkorbStand="bereit",this.fenster.setzeErgebnis(c,{teilenMoeglich:h,warenkorb:!!this.kaufVariante}),this.setzeZustand("ergebnis"),clearTimeout(this.ergebnisKameraUhr),this.ergebnisKameraUhr=setTimeout(()=>{e===this.sitzung&&this.zustand==="ergebnis"&&this.stoppeKamera()},Ow)}catch(t){this.meldeFehler(t)}finally{this.nimmtAuf=!1,this.fenster.setzeAusloeserAktiv(!0)}}dateiname(){return`${ux(this.konfig.shopName||"anprobe",20)}-anprobe-${ux(this.produkt.titel)}-${qw()}.jpg`}async mitSignatur(e){let t=String(this.konfig.shopName||"").trim();if(!t)return e;let n=URL.createObjectURL(e);try{let i=new Image;i.src=n,await i.decode();let r=document.createElement("canvas");r.width=i.naturalWidth,r.height=i.naturalHeight;let a=r.getContext("2d");a.drawImage(i,0,0);let o=r.width,l=r.height,c=Math.min(o,l),h=jw(a,o,l)>.58,f=h?"251,248,243":"30,27,24",u=a.createLinearGradient(0,l*.8,0,l);u.addColorStop(0,`rgba(${f},0)`),u.addColorStop(1,`rgba(${f},${h?.32:.26})`),a.fillStyle=u,a.fillRect(0,l*.8,o,l*.2);let d=getComputedStyle(this.fenster.$(".a-titel")).fontFamily||"serif",p=getComputedStyle(this.fenster.el).fontFamily||"sans-serif",x=h?"30,27,24":"255,255,255";a.fillStyle=`rgba(${x},0.92)`,a.textBaseline="alphabetic";let g=Math.round(c*.034),m=Math.round(c*.016),_=l-c*.05;return dx(a,t.toUpperCase(),o/2,_-m*2.2,d,"400",g,.32,o*.88),a.fillStyle=`rgba(${x},0.76)`,dx(a,`${this.produkt.titel}`.toUpperCase(),o/2,_,p,"500",m,.22,o*.88),await new Promise(y=>r.toBlob(v=>y(v||e),"image/jpeg",.92))}catch(i){return this.meldeFehler(i),e}finally{URL.revokeObjectURL(n)}}async teilen(){if(this.ergebnisDatei)try{await navigator.share({files:[this.ergebnisDatei],title:`${this.produkt.titel} \u2013 ${this.konfig.shopName||""}`.replace(/ – $/,""),text:`Meine Anprobe: ${this.produkt.titel}`})}catch(e){if(e&&e.name==="AbortError")return;this.meldeFehler(e),this.speichern()}}async inDenWarenkorb(){let e=this.kaufVariante,t=this.produkt&&this.produkt.shop;if(!e||!t||this.zustand!=="ergebnis")return;if(this.warenkorbStand==="fertig"){window.location.assign(t.warenkorb);return}if(this.warenkorbStand==="laeuft")return;let n=this.sitzung;this.warenkorbStand="laeuft",this.fenster.setzeWarenkorb("laeuft");try{let i=await fetch(t.hinzufuegen,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({items:[{id:e.id,quantity:1}]})});if(!i.ok)throw new Error(`Warenkorb: HTTP ${i.status}`);if(n!==this.sitzung)return;this.warenkorbStand="fertig",this.fenster.setzeWarenkorb("fertig"),this.fenster.sage(`${this.produkt.titel} liegt im Warenkorb.`),document.dispatchEvent(new CustomEvent("anprobe:warenkorb",{detail:{id:e.id,variante:e.titel,titel:this.produkt.titel}}))}catch(i){if(n!==this.sitzung)return;console.warn("[anprobe]",i&&i.message),this.warenkorbStand="fehler",this.fenster.setzeWarenkorb("fehler"),this.fenster.sage("Das hat nicht geklappt. Bitte leg das St\xFCck auf der Produktseite in den Warenkorb."),setTimeout(()=>{n===this.sitzung&&this.warenkorbStand==="fehler"&&(this.warenkorbStand="bereit",this.fenster.setzeWarenkorb("bereit"))},5e3)}}speichern(){if(!this.ergebnisBlob)return;let e=URL.createObjectURL(this.ergebnisBlob),t=document.createElement("a");t.href=e,t.download=this.ergebnisDatei?this.ergebnisDatei.name:this.dateiname(),t.rel="noopener",t.style.display="none",document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(e),3e4),this.fenster.sage("Bild gespeichert.")}zurueckZurAnprobe(){if(this.zustand==="ergebnis"){if(clearTimeout(this.ergebnisKameraUhr),this.vorherZustand==="foto"){this.setzeZustand("foto"),this.starteSchleife();return}if(!this.stream){this.kameraStarten();return}this.setzeZustand("live"),this.starteSchleife()}}zeigeFehler(e,t){if(t&&Ww.has(e)?(this.debugObjekt&&(this.debugObjekt.kameraFehler=`${t.name||"Fehler"}: ${t.message||""}`),typeof console<"u"&&console.info("[anprobe] Kamera:",e,t.name||t)):t&&this.meldeFehler(t),this.zustand==="zu")return;this.stoppeSchleife(),e!=="foto"&&this.stoppeKamera();let n=hx[e]||hx.allgemein;this.fenster.setzeFehler({titel:n.titel,text:n.text,foto:n.foto!==!1,erneut:n.erneut!==!1}),this.setzeZustand("fehler"),this.debugObjekt&&(this.debugObjekt.fehlerArt=e)}meldeFehler(e){let t=e&&e.message?`${e.name||"Fehler"}: ${e.message}`:String(e);this.debugObjekt&&(this.debugObjekt.fehler.push(t),this.debugObjekt.fehler.length>50&&this.debugObjekt.fehler.shift()),typeof console<"u"&&console.warn("[anprobe]",e)}richteDebugEin(){if(!this.konfig.debug){this.debugObjekt=null;return}let e=window.__anprobe;this.debugObjekt={zustand:this.zustand,ergebnis:null,fps:0,renderMs:0,trackingMs:0,fehler:e&&Array.isArray(e.fehler)?e.fehler:[],produkt:this.produkt,variante:this.variante,finger:this.finger,kameraAktiv:!1,spiegel:this.spiegel,qualitaet:{stufe:this.stufe,...Eh[this.stufe]},anpassung:{skala:1,versatzMm:[0,0,0]},app:this},window.__anprobe=this.debugObjekt}richteDebugKamera(){this.debugObjekt&&(this.debugObjekt.kameraAktiv=!!(this.stream&&this.stream.getVideoTracks().some(e=>e.readyState==="live")),this.debugObjekt.spiegel=this.spiegel)}};function jw(s,e,t){try{let n=Math.max(1,Math.round(e*.6)),i=Math.max(1,Math.round(t*.12)),r=s.getImageData(Math.round(e*.2),t-i,n,i).data,a=0,o=0;for(let l=0;l<r.length;l+=64)a+=.2126*r[l]+.7152*r[l+1]+.0722*r[l+2],o++;return o?a/o/255:.5}catch{return .5}}function dx(s,e,t,n,i,r,a,o,l=1/0){let c=[...e],h=m=>{s.font=`${r} ${m}px ${i}`;let _=c.map(y=>s.measureText(y).width);return{b:_,gesamt:_.reduce((y,v)=>y+v,0)+m*o*(c.length-1)}},f=a,u=h(f);u.gesamt>l&&(f=Math.max(8,Math.floor(f*l/u.gesamt)),u=h(f));let d=u.b,p=f*o,x=u.gesamt,g=t-x/2;s.textAlign="left",c.forEach((m,_)=>{s.fillText(m,g,n),g+=d[_]+p})}export{fx as AnprobeApp,Ud as vorladen};
//# sourceMappingURL=anprobe-app.js.map
