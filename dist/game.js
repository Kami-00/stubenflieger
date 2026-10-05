var Mp=0,wh=1,Sp=2,yn=1,bp=2,Zn=3,Br=0,Kt=1,qt=2,nr=0,Qn=1,Th=2,Rh=3,Ah=4,Ep=5,mn=100,wp=101,Tp=102,Rp=103,Ap=104,Cp=200,Pp=201,Lp=202,Np=203,eu=204,tu=205,Dp=206,Up=207,Ip=208,Op=209,Fp=210,Bp=211,zp=212,Vp=213,Hp=214,Lo=0,No=1,Do=2,na=3,Uo=4,Io=5,Oo=6,Fo=7,iu=0,Gp=1,kp=2,Ui=0,ru=1,nu=2,au=3,xs=4,su=5,ou=6,lu=7,hu=300,zr=301,bn=302,Hs=303,Gs=304,ys=306,Bo=1e3,rr=1001,zo=1002,Ft=1003,Wp=1004,Ea=1005,Vt=1006,ks=1007,Or=1008,ti=1009,cu=1010,uu=1011,aa=1012,wl=1013,Oi=1014,Li=1015,Fi=1016,Tl=1017,Rl=1018,sa=1020,du=35902,pu=35899,fu=1021,mu=1022,mi=1023,sr=1026,Fr=1027,gu=1028,Al=1029,Vr=1030,Cl=1031,Pl=1033,is=33776,rs=33777,ns=33778,as=33779,Vo=35840,Ho=35841,Go=35842,ko=35843,Wo=36196,qo=37492,jo=37496,Xo=37488,Zo=37489,cs=37490,Yo=37491,Ko=37808,$o=37809,Jo=37810,Qo=37811,el=37812,tl=37813,il=37814,rl=37815,nl=37816,al=37817,sl=37818,ol=37819,ll=37820,hl=37821,cl=36492,ul=36494,dl=36495,pl=36283,fl=36284,us=36285,ml=36286,ds=2300,gl=2301,Ws=2302,Ch=2303,Ph=2400,Lh=2401,Nh=2402,qp=3200,vl=0,jp=1,Sr="",Zt="srgb",ps="srgb-linear",fs="linear",ut="srgb",qs=7680,Xp=519,Zp=512,Yp=513,Kp=514,Ll=515,$p=516,Jp=517,Nl=518,Qp=519,ef=35044,Dh="300 es",Ni=2e3,oa=2001;function tf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ms(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nf(){let t=ms("canvas");return t.style.display="block",t}var Uh={},En=null;function Ih(...t){let e="THREE."+t.shift();En?En("log",e,...t):console.log(e,...t)}function vu(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=vu(t);let e="THREE."+t.shift();if(En)En("warn",e,...t);else{let i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function qe(...t){t=vu(t);let e="THREE."+t.shift();if(En)En("error",e,...t);else{let i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Mn(...t){let e=t.join(" ");e in Uh||(Uh[e]=!0,He(...t))}function af(t,e,i){return new Promise(function(r,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:r()}}setTimeout(a,i)})}var sf={[Lo]:No,[Do]:Oo,[Uo]:Fo,[na]:Io,[No]:Lo,[Oo]:Do,[Fo]:Uo,[Io]:na},Gr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let n=r.indexOf(e);n!==-1&&r.splice(n,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,t);t.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,ea=Math.PI/180,la=180/Math.PI;function kr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[i&63|128]+Bt[i>>8&255]+"-"+Bt[i>>16&255]+Bt[i>>24&255]+Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]).toLowerCase()}function et(t,e,i){return Math.max(e,Math.min(i,t))}function Dl(t,e){return(t%e+e)%e}function of(t,e,i,r,n){return r+(t-e)*(n-r)/(i-e)}function lf(t,e,i){return t!==e?(i-t)/(e-t):0}function ta(t,e,i){return(1-i)*t+i*e}function hf(t,e,i,r){return ta(t,e,1-Math.exp(-i*r))}function cf(t,e=1){return e-Math.abs(Dl(t,e*2)-e)}function uf(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function df(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function pf(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ff(t,e){return t+Math.random()*(e-t)}function mf(t){return t*(.5-Math.random())}function gf(t){t!==void 0&&(Oh=t);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(t){return t*ea}function _f(t){return t*la}function xf(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function yf(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Mf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Sf(t,e,i,r,n){let a=Math.cos,s=Math.sin,o=a(i/2),l=s(i/2),h=a((e+r)/2),c=s((e+r)/2),d=a((e-r)/2),u=s((e-r)/2),p=a((r-e)/2),g=s((r-e)/2);switch(n){case"XYX":t.set(o*c,l*d,l*u,o*h);break;case"YZY":t.set(l*u,o*c,l*d,o*h);break;case"ZXZ":t.set(l*d,l*u,o*c,o*h);break;case"XZX":t.set(o*c,l*g,l*p,o*h);break;case"YXY":t.set(l*p,o*c,l*g,o*h);break;case"ZYZ":t.set(l*g,l*p,o*c,o*h);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ms={DEG2RAD:ea,RAD2DEG:la,generateUUID:kr,clamp:et,euclideanModulo:Dl,mapLinear:of,inverseLerp:lf,lerp:ta,damp:hf,pingpong:cf,smoothstep:uf,smootherstep:df,randInt:pf,randFloat:ff,randFloatSpread:mf,seededRandom:gf,degToRad:vf,radToDeg:_f,isPowerOfTwo:xf,ceilPowerOfTwo:yf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:Sf,normalize:kt,denormalize:gn},xe=class _u{static{_u.prototype.isVector2=!0}constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),n=Math.sin(i),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wr=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,n,a,s){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=n[a+0],u=n[a+1],p=n[a+2],g=n[a+3];if(c!==g||o!==d||l!==u||h!==p){let v=o*d+l*u+h*p+c*g;v<0&&(d=-d,u=-u,p=-p,g=-g,v=-v);let m=1-s;if(v<.9995){let f=Math.acos(v),S=Math.sin(f);m=Math.sin(m*f)/S,s=Math.sin(s*f)/S,o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+g*s}else{o=o*m+d*s,l=l*m+u*s,h=h*m+p*s,c=c*m+g*s;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,r,n,a){let s=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=n[a],d=n[a+1],u=n[a+2],p=n[a+3];return t[e]=s*p+h*c+o*u-l*d,t[e+1]=o*p+h*d+l*c-s*u,t[e+2]=l*p+h*u+s*d-o*c,t[e+3]=h*p-s*c-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,n=t._z,a=t._order,s=Math.cos,o=Math.sin,l=s(i/2),h=s(r/2),c=s(n/2),d=o(i/2),u=o(r/2),p=o(n/2);switch(a){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=i+s+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(n-l)*u,this._z=(a-r)*u}else if(i>s&&i>c){let u=2*Math.sqrt(1+i-s-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(n+l)/u}else if(s>c){let u=2*Math.sqrt(1+s-i-c);this._w=(n-l)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-s);this._w=(a-r)/u,this._x=(n+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(et(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,n=t._z,a=t._w,s=e._x,o=e._y,l=e._z,h=e._w;return this._x=i*h+a*s+r*l-n*o,this._y=r*h+a*o+n*s-i*l,this._z=n*h+a*l+i*o-r*s,this._w=a*h-i*s-r*o-n*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,n=t._z,a=t._w,s=this.dot(t);s<0&&(i=-i,r=-r,n=-n,a=-a,s=-s);let o=1-e;if(s<.9995){let l=Math.acos(s),h=Math.sin(l);o=Math.sin(o*l)/h,e=Math.sin(e*l)/h,this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+a*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class xu{static{xu.prototype.isVector3=!0}constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Fh.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*i+a[3]*r+a[6]*n,this.y=a[1]*i+a[4]*r+a[7]*n,this.z=a[2]*i+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*i+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*i+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*i+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*i+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){let i=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,h=2*(s*n-o*r),c=2*(o*i-a*n),d=2*(a*r-s*i);return this.x=i+l*h+s*d-o*c,this.y=r+l*c+o*h-a*d,this.z=n+l*d+a*c-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*i+a[4]*r+a[8]*n,this.y=a[1]*i+a[5]*r+a[9]*n,this.z=a[2]*i+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this.z=et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this.z=et(this.z,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,n=e.y,a=e.z,s=i.x,o=i.y,l=i.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return i*i+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let n=Math.sin(i)*e;return this.x=n*Math.sin(r),this.y=Math.cos(i)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},js=new V,Fh=new Wr,Ye=class yu{static{yu.prototype.isMatrix3=!0}constructor(e,i,r,n,a,s,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,n,a,s,o,l,h)}set(e,i,r,n,a,s,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=i,c[4]=a,c[5]=l,c[6]=r,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,a=this.elements,s=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],g=r[8],v=n[0],m=n[3],f=n[6],S=n[1],w=n[4],_=n[7],b=n[2],A=n[5],C=n[8];return a[0]=s*v+o*S+l*b,a[3]=s*m+o*w+l*A,a[6]=s*f+o*_+l*C,a[1]=h*v+c*S+d*b,a[4]=h*m+c*w+d*A,a[7]=h*f+c*_+d*C,a[2]=u*v+p*S+g*b,a[5]=u*m+p*w+g*A,a[8]=u*f+p*_+g*C,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return i*s*c-i*o*h-r*a*c+r*o*l+n*a*h-n*s*l}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*s-o*h,u=o*l-c*a,p=h*a-s*l,g=i*d+r*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(n*h-c*r)*v,e[2]=(o*r-n*s)*v,e[3]=u*v,e[4]=(c*i-n*l)*v,e[5]=(n*a-o*i)*v,e[6]=p*v,e[7]=(r*l-h*i)*v,e[8]=(s*i-r*a)*v,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,n,a,s,o){let l=Math.cos(a),h=Math.sin(a);return this.set(r*l,r*h,-r*(l*s+h*o)+s+e,-n*h,n*l,-n*(-h*s+l*o)+o+i,0,0,1),this}scale(e,i){return Mn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xs.makeScale(e,i)),this}rotate(e){return Mn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xs.makeRotation(-e)),this}translate(e,i){return Mn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xs.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xs=new Ye,Bh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){let t={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ut&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(n.r=Sn(n.r),n.g=Sn(n.g),n.b=Sn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Sr?fs:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return Mn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return Mn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[ps]:{primaries:e,whitePoint:r,transfer:fs,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:r,transfer:ut,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),t}var rt=bf();function ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sn(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Jr,Ef=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=ms("canvas")),Jr.width=t.width,Jr.height=t.height;let r=Jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ms("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=ar(n[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ar(e[i]/255)*255):e[i]=ar(e[i]);return{data:e,width:t.width,height:t.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,Ul=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?n.push(Zs(r[a].image)):n.push(Zs(r[a]))}else n=Zs(r);i.url=n}return e||(t.images[this.uuid]=i),i}};function Zs(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ef.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Tf=0,Ys=new V,vi=class ss extends Gr{constructor(e=ss.DEFAULT_IMAGE,i=ss.DEFAULT_MAPPING,r=rr,n=rr,a=Vt,s=Or,o=mi,l=ti,h=ss.DEFAULT_ANISOTROPY,c=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=kr(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ys).x}get height(){return this.source.getSize(Ys).y}get depth(){return this.source.getSize(Ys).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let r=e[i];if(r===void 0){He(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){He(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=hu;vi.DEFAULT_ANISOTROPY=1;var Ct=class Mu{static{Mu.prototype.isVector4=!0}constructor(e=0,i=0,r=0,n=1){this.x=e,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*i+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*i+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*i+s[7]*r+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,n,a,s=e.elements,o=s[0],l=s[4],h=s[8],c=s[1],d=s[5],u=s[9],p=s[2],g=s[6],v=s[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,S=(d+1)/2,w=(v+1)/2,_=(l+c)/4,b=(h+p)/4,A=(u+g)/4;return f>S&&f>w?f<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(f),n=_/r,a=b/r):S>w?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=_/n,a=A/n):w<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(w),r=b/a,n=A/a),this.set(r,n,a,i),this}let m=Math.sqrt((g-u)*(g-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this.z=et(this.z,e.z,i.z),this.w=et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this.z=et(this.z,e,i),this.w=et(this.w,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rf=class extends Gr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ct(0,0,t,e),this.scissorTest=!1,this.viewport=new Ct(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},n=new vi(r),a=i.count;for(let s=0;s<a;s++)this.textures[s]=n.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ul(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Rf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Su=class extends vi{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Af=class extends vi{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Rt=class _l{static{_l.prototype.isMatrix4=!0}constructor(e,i,r,n,a,s,o,l,h,c,d,u,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,a,s,o,l,h,c,d,u,p,g,v,m)}set(e,i,r,n,a,s,o,l,h,c,d,u,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=i,f[8]=r,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _l().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let i=this.elements,r=e.elements,n=1/Qr.setFromMatrixColumn(e,0).length(),a=1/Qr.setFromMatrixColumn(e,1).length(),s=1/Qr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*a,i[5]=r[5]*a,i[6]=r[6]*a,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),h=Math.sin(n),c=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let u=s*c,p=s*d,g=o*c,v=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=u-v*h,i[9]=-o*l,i[2]=v-u*h,i[6]=g+p*h,i[10]=s*l}else if(e.order==="YXZ"){let u=l*c,p=l*d,g=h*c,v=h*d;i[0]=u+v*o,i[4]=g*o-p,i[8]=s*h,i[1]=s*d,i[5]=s*c,i[9]=-o,i[2]=p*o-g,i[6]=v+u*o,i[10]=s*l}else if(e.order==="ZXY"){let u=l*c,p=l*d,g=h*c,v=h*d;i[0]=u-v*o,i[4]=-s*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*c,i[9]=v-u*o,i[2]=-s*h,i[6]=o,i[10]=s*l}else if(e.order==="ZYX"){let u=s*c,p=s*d,g=o*c,v=o*d;i[0]=l*c,i[4]=g*h-p,i[8]=u*h+v,i[1]=l*d,i[5]=v*h+u,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=s*l}else if(e.order==="YZX"){let u=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-u*d,i[8]=g*d+p,i[1]=d,i[5]=s*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+g,i[10]=u-v*d}else if(e.order==="XZY"){let u=s*l,p=s*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+v,i[5]=s*c,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*c,i[10]=v*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Pf)}lookAt(e,i,r){let n=this.elements;return Qt.subVectors(e,i),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),mr.crossVectors(r,Qt),mr.lengthSq()===0&&(Math.abs(r.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),mr.crossVectors(r,Qt)),mr.normalize(),wa.crossVectors(Qt,mr),n[0]=mr.x,n[4]=wa.x,n[8]=Qt.x,n[1]=mr.y,n[5]=wa.y,n[9]=Qt.y,n[2]=mr.z,n[6]=wa.z,n[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,a=this.elements,s=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],S=r[3],w=r[7],_=r[11],b=r[15],A=n[0],C=n[4],y=n[8],T=n[12],I=n[1],P=n[5],L=n[9],H=n[13],N=n[2],U=n[6],j=n[10],q=n[14],ie=n[3],K=n[7],Q=n[11],$=n[15];return a[0]=s*A+o*I+l*N+h*ie,a[4]=s*C+o*P+l*U+h*K,a[8]=s*y+o*L+l*j+h*Q,a[12]=s*T+o*H+l*q+h*$,a[1]=c*A+d*I+u*N+p*ie,a[5]=c*C+d*P+u*U+p*K,a[9]=c*y+d*L+u*j+p*Q,a[13]=c*T+d*H+u*q+p*$,a[2]=g*A+v*I+m*N+f*ie,a[6]=g*C+v*P+m*U+f*K,a[10]=g*y+v*L+m*j+f*Q,a[14]=g*T+v*H+m*q+f*$,a[3]=S*A+w*I+_*N+b*ie,a[7]=S*C+w*P+_*U+b*K,a[11]=S*y+w*L+_*j+b*Q,a[15]=S*T+w*H+_*q+b*$,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],S=l*p-h*u,w=o*p-h*d,_=o*u-l*d,b=s*p-h*c,A=s*u-l*c,C=s*d-o*c;return i*(v*S-m*w+f*_)-r*(g*S-m*b+f*A)+n*(g*w-v*b+f*C)-a*(g*_-v*A+m*C)}determinantAffine(){let e=this.elements,i=e[0],r=e[4],n=e[8],a=e[1],s=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return i*(s*c-o*h)-r*(a*c-o*l)+n*(a*h-s*l)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=i*o-r*s,w=i*l-n*s,_=i*h-a*s,b=r*l-n*o,A=r*h-a*o,C=n*h-a*l,y=c*v-d*g,T=c*m-u*g,I=c*f-p*g,P=d*m-u*v,L=d*f-p*v,H=u*f-p*m,N=S*H-w*L+_*P+b*I-A*T+C*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return e[0]=(o*H-l*L+h*P)*U,e[1]=(n*L-r*H-a*P)*U,e[2]=(v*C-m*A+f*b)*U,e[3]=(u*A-d*C-p*b)*U,e[4]=(l*I-s*H-h*T)*U,e[5]=(i*H-n*I+a*T)*U,e[6]=(m*_-g*C-f*w)*U,e[7]=(c*C-u*_+p*w)*U,e[8]=(s*L-o*I+h*y)*U,e[9]=(r*I-i*L-a*y)*U,e[10]=(g*A-v*_+f*S)*U,e[11]=(d*_-c*A-p*S)*U,e[12]=(o*T-s*P-l*y)*U,e[13]=(i*P-r*T+n*y)*U,e[14]=(v*w-g*b-m*S)*U,e[15]=(c*b-d*w+u*S)*U,this}scale(e){let i=this.elements,r=e.x,n=e.y,a=e.z;return i[0]*=r,i[4]*=n,i[8]*=a,i[1]*=r,i[5]*=n,i[9]*=a,i[2]*=r,i[6]*=n,i[10]*=a,i[3]*=r,i[7]*=n,i[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),n=Math.sin(i),a=1-r,s=e.x,o=e.y,l=e.z,h=a*s,c=a*o;return this.set(h*s+r,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+r,c*l-n*s,0,h*l-n*o,c*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){let n=this.elements,a=i._x,s=i._y,o=i._z,l=i._w,h=a+a,c=s+s,d=o+o,u=a*h,p=a*c,g=a*d,v=s*c,m=s*d,f=o*d,S=l*h,w=l*c,_=l*d,b=r.x,A=r.y,C=r.z;return n[0]=(1-(v+f))*b,n[1]=(p+_)*b,n[2]=(g-w)*b,n[3]=0,n[4]=(p-_)*A,n[5]=(1-(u+f))*A,n[6]=(m+S)*A,n[7]=0,n[8]=(g+w)*C,n[9]=(m-S)*C,n[10]=(1-(u+v))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let a=this.determinantAffine();if(a===0)return r.set(1,1,1),i.identity(),this;let s=Qr.set(n[0],n[1],n[2]).length(),o=Qr.set(n[4],n[5],n[6]).length(),l=Qr.set(n[8],n[9],n[10]).length();a<0&&(s=-s),ui.copy(this);let h=1/s,c=1/o,d=1/l;return ui.elements[0]*=h,ui.elements[1]*=h,ui.elements[2]*=h,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,i.setFromRotationMatrix(ui),r.x=s,r.y=o,r.z=l,this}makePerspective(e,i,r,n,a,s,o=Ni,l=!1){let h=this.elements,c=2*a/(i-e),d=2*a/(r-n),u=(i+e)/(i-e),p=(r+n)/(r-n),g,v;if(l)g=a/(s-a),v=s*a/(s-a);else if(o===Ni)g=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===oa)g=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,n,a,s,o=Ni,l=!1){let h=this.elements,c=2/(i-e),d=2/(r-n),u=-(i+e)/(i-e),p=-(r+n)/(r-n),g,v;if(l)g=1/(s-a),v=s/(s-a);else if(o===Ni)g=-2/(s-a),v=-(s+a)/(s-a);else if(o===oa)g=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},Qr=new V,ui=new Rt,Cf=new V(0,0,0),Pf=new V(1,1,1),mr=new V,wa=new V,Qt=new V,Vh=new Rt,Hh=new Wr,wn=class bu{constructor(e=0,i=0,r=0,n=bu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Eu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,Gh=new V,en=new Wr,Zi=new Rt,Ta=new V,On=new V,Nf=new V,Df=new Wr,kh=new V(1,0,0),Wh=new V(0,1,0),qh=new V(0,0,1),jh={type:"added"},Uf={type:"removed"},tn={type:"childadded",child:null},Ks={type:"childremoved",child:null},$t=class os extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=os.DEFAULT_UP.clone();let e=new V,i=new wn,r=new Wr,n=new V(1,1,1);function a(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ye}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=os.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=os.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return en.setFromAxisAngle(e,i),this.quaternion.multiply(en),this}rotateOnWorldAxis(e,i){return en.setFromAxisAngle(e,i),this.quaternion.premultiply(en),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,i){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ta.copy(e):Ta.set(e,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(On,Ta,this.up):Zi.lookAt(Ta,On,this.up),this.quaternion.setFromRotationMatrix(Zi),n&&(Zi.extractRotation(n.matrixWorld),en.setFromRotationMatrix(Zi),this.quaternion.premultiply(en.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),tn.child=e,this.dispatchEvent(tn),tn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Uf),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),tn.child=e,this.dispatchEvent(tn),tn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let a=this.children[r].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let i=e.x,r=e.y,n=e.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*r-a[8]*n,a[13]+=r-a[1]*i-a[5]*r-a[9]*n,a[14]+=n-a[2]*i-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(a(e.animations,l))}}if(i){let o=s(e.geometries),l=s(e.materials),h=s(e.textures),c=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new V(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,n=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(n=e.getPose(t.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));s!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(If)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Js(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,rt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=rt.workingColorSpace){return this.r=t,this.g=e,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=rt.workingColorSpace){if(t=Dl(t,1),e=et(e,0,1),i=et(i,0,1),e===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+e):i+e-i*e,a=2*i-n;this.r=Js(a,n,t+1/3),this.g=Js(a,n,t),this.b=Js(a,n,t-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(t,e=Zt){function i(n){n!==void 0&&parseFloat(n)<1&&He("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let n,a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:He("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(n,16),e);He("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zt){let i=wu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):He("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zt){return rt.workingToColorSpace(zt.copy(this),t),Math.round(et(zt.r*255,0,255))*65536+Math.round(et(zt.g*255,0,255))*256+Math.round(et(zt.b*255,0,255))}getHexString(t=Zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),e);let i=zt.r,r=zt.g,n=zt.b,a=Math.max(i,r,n),s=Math.min(i,r,n),o,l,h=(s+a)/2;if(s===a)o=0,l=0;else{let c=a-s;switch(l=h<=.5?c/(a+s):c/(2-a-s),a){case i:o=(r-n)/c+(r<n?6:0);break;case r:o=(n-i)/c+2;break;case n:o=(i-r)/c+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),e),t.r=zt.r,t.g=zt.g,t.b=zt.b,t}getStyle(t=Zt){rt.workingToColorSpace(zt.copy(this),t);let e=zt.r,i=zt.g,r=zt.b;return t!==Zt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+e,gr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gr),t.getHSL(Ra);let i=ta(gr.h,Ra.h,e),r=ta(gr.s,Ra.s,e),n=ta(gr.l,Ra.l,e);return this.setHSL(i,r,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*r,this.g=n[1]*e+n[4]*i+n[7]*r,this.b=n[2]*e+n[5]*i+n[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new tt;tt.NAMES=wu;var Tu=class Ru{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=i,this.far=r}clone(){return new Ru(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Au=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new V,Yi=new V,Qs=new V,Ki=new V,rn=new V,nn=new V,Xh=new V,eo=new V,to=new V,io=new V,ro=new Ct,no=new Ct,ao=new Ct,Fn=class vn{constructor(e=new V,i=new V,r=new V){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),di.subVectors(e,i),n.cross(di);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,i,r,n,a){di.subVectors(n,i),Yi.subVectors(r,i),Qs.subVectors(e,i);let s=di.dot(di),o=di.dot(Yi),l=di.dot(Qs),h=Yi.dot(Yi),c=Yi.dot(Qs),d=s*h-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,g=(s*c-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,i,r,n,a,s,o,l){return this.getBarycoord(e,i,r,n,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ki.x),l.addScaledVector(s,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,i,r,n,a,s){return ro.setScalar(0),no.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,i),no.fromBufferAttribute(e,r),ao.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ro,a.x),s.addScaledVector(no,a.y),s.addScaledVector(ao,a.z),s}static isFrontFacing(e,i,r,n){return di.subVectors(r,i),Yi.subVectors(e,i),di.cross(Yi).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),di.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vn.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,a){return vn.getInterpolation(e,this.a,this.b,this.c,i,r,n,a)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,n=this.b,a=this.c,s,o;rn.subVectors(n,r),nn.subVectors(a,r),eo.subVectors(e,r);let l=rn.dot(eo),h=nn.dot(eo);if(l<=0&&h<=0)return i.copy(r);to.subVectors(e,n);let c=rn.dot(to),d=nn.dot(to);if(c>=0&&d<=c)return i.copy(n);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return s=l/(l-c),i.copy(r).addScaledVector(rn,s);io.subVectors(e,a);let p=rn.dot(io),g=nn.dot(io);if(g>=0&&p<=g)return i.copy(a);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(nn,o);let m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Xh.subVectors(a,n),o=(d-c)/(d-c+(p-g)),i.copy(n).addScaledVector(Xh,o);let f=1/(m+v+u);return s=v*f,o=u*f,i.copy(r).addScaledVector(rn,s).addScaledVector(nn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pa=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let a=0,s=n.count;a<s;a++)t.isMesh===!0?t.getVertexPosition(a,pi):pi.fromBufferAttribute(n,a),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let r=t.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bn),Ca.subVectors(this.max,Bn),an.subVectors(t.a,Bn),sn.subVectors(t.b,Bn),on.subVectors(t.c,Bn),vr.subVectors(sn,an),_r.subVectors(on,sn),Ar.subVectors(an,on);let e=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Ar.z,Ar.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Ar.z,0,-Ar.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Ar.y,Ar.x,0];return!so(e,an,sn,on,Ca)||(e=[1,0,0,0,1,0,0,0,1],!so(e,an,sn,on,Ca))?!1:(Pa.crossVectors(vr,_r),e=[Pa.x,Pa.y,Pa.z],so(e,an,sn,on,Ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new V,new V,new V,new V,new V,new V,new V,new V],pi=new V,Aa=new pa,an=new V,sn=new V,on=new V,vr=new V,_r=new V,Ar=new V,Bn=new V,Ca=new V,Pa=new V,Cr=new V;function so(t,e,i,r,n){for(let a=0,s=t.length-3;a<=s;a+=3){Cr.fromArray(t,a);let o=n.x*Math.abs(Cr.x)+n.y*Math.abs(Cr.y)+n.z*Math.abs(Cr.z),l=e.dot(Cr),h=i.dot(Cr),c=r.dot(Cr);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Lt=new V,La=new xe,Of=0,si=class extends Gr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ef,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)La.fromBufferAttribute(this,e),La.applyMatrix3(t),this.setXY(e,La.x,La.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Lt.fromBufferAttribute(this,e),Lt.applyMatrix3(t),this.setXYZ(e,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Lt.fromBufferAttribute(this,e),Lt.applyMatrix4(t),this.setXYZ(e,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Lt.fromBufferAttribute(this,e),Lt.applyNormalMatrix(t),this.setXYZ(e,Lt.x,Lt.y,Lt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Lt.fromBufferAttribute(this,e),Lt.transformDirection(t),this.setXYZ(e,Lt.x,Lt.y,Lt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=kt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),i=kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,n){return t*=this.itemSize,this.normalized&&(e=kt(e,this.array),i=kt(i,this.array),r=kt(r,this.array),n=kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=class extends si{constructor(t,e,i){super(new Uint16Array(t),e,i)}},Pu=class extends si{constructor(t,e,i){super(new Uint32Array(t),e,i)}},Mt=class extends si{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ff=new pa,zn=new V,oo=new V,Ss=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ff.setFromPoints(t).getCenter(i);let r=0;for(let n=0,a=t.length;n<a;n++)r=Math.max(r,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zn.subVectors(t,this.center);let e=zn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(zn,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zn.copy(t.center).add(oo)),this.expandByPoint(zn.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bf=0,ai=new Rt,lo=new $t,ln=new V,ei=new pa,Vn=new pa,Ot=new V,Ht=class Lu extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?Pu:Cu)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let a=new Ye().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ln).negate(),this.translate(ln.x,ln.y,ln.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,a=e.length;n<a;n++){let s=e[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Mt(r,3))}else{let r=Math.min(e.length,i.count);for(let n=0;n<r;n++){let a=e[n];i.setXYZ(n,a.x,a.y,a.z||0)}e.length>i.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){let a=i[r];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let a=0,s=i.length;a<s;a++){let o=i[a];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ei.min,Vn.min),ei.expandByPoint(Ot),Ot.addVectors(ei.max,Vn.max),ei.expandByPoint(Ot)):(ei.expandByPoint(Vn.min),ei.expandByPoint(Vn.max))}ei.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)Ot.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(Ot));if(i)for(let a=0,s=i.length;a<s;a++){let o=i[a],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ot.fromBufferAttribute(o,h),l&&(ln.fromBufferAttribute(e,h),Ot.add(ln)),n=Math.max(n,r.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,a=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new si(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let y=0;y<r.count;y++)o[y]=new V,l[y]=new V;let h=new V,c=new V,d=new V,u=new xe,p=new xe,g=new xe,v=new V,m=new V;function f(y,T,I){h.fromBufferAttribute(r,y),c.fromBufferAttribute(r,T),d.fromBufferAttribute(r,I),u.fromBufferAttribute(a,y),p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,I),c.sub(h),d.sub(h),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),o[y].add(v),o[T].add(v),o[I].add(v),l[y].add(m),l[T].add(m),l[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,T=S.length;y<T;++y){let I=S[y],P=I.start,L=I.count;for(let H=P,N=P+L;H<N;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new V,_=new V,b=new V,A=new V;function C(y){b.fromBufferAttribute(n,y),A.copy(b);let T=o[y];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(A,T);let I=_.dot(l[y])<0?-1:1;s.setXYZW(y,w.x,w.y,w.z,I)}for(let y=0,T=S.length;y<T;++y){let I=S[y],P=I.start,L=I.count;for(let H=P,N=P+L;H<N;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let n=new V,a=new V,s=new V,o=new V,l=new V,h=new V,c=new V,d=new V;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(i,g),a.fromBufferAttribute(i,v),s.fromBufferAttribute(i,m),c.subVectors(s,a),d.subVectors(n,a),c.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)n.fromBufferAttribute(i,u+0),a.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),c.subVectors(s,a),d.subVectors(n,a),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Ot.fromBufferAttribute(e,i),Ot.normalize(),e.setXYZ(i,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let f=0;f<c;f++)u[g++]=h[p++]}return new si(u,c,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Lu,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],h=e(l,r);i.setAttribute(o,h)}let a=this.morphAttributes;for(let o in a){let l=[],h=a[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=e(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let h=s[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},a=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(i))}let a=e.morphAttributes;for(let h in a){let c=[],d=a[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let h=0,c=s.length;h<c;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ho=new V,zf=new V,Vf=new Ye,Mr=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=ho.subVectors(i,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(ho),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/n;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Vf.getNormalMatrix(t),r=this.coplanarPoint(ho).applyMatrix4(t),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hf=0,Cn=class extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Qn,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){He(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){He(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){let a=[];for(let s in n){let o=n[s];delete o.metadata,a.push(o)}return a}if(e){let n=r(t.textures),a=r(t.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mr().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ji=new V,co=new V,Na=new V,Da=new V,Nu=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){co.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Da.copy(this.origin).sub(co);let n=t.distanceTo(e)*.5,a=-this.direction.dot(Na),s=Da.dot(this.direction),o=-Da.dot(Na),l=Da.lengthSq(),h=Math.abs(1-a*a),c,d,u,p;if(h>0)if(c=a*o-s,d=a*s-o,p=n*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+a*d+2*s)+d*(a*c+d+2*o)+l}else d=n,c=Math.max(0,-(a*d+s)),u=-c*c+d*(d+2*o)+l;else d=-n,c=Math.max(0,-(a*d+s)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-a*n+s)),d=c>0?-n:Math.min(Math.max(-n,-o),n),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-n,-o),n),u=d*(d+2*o)+l):(c=Math.max(0,-(a*n+s)),d=c>0?n:Math.min(Math.max(-n,-o),n),u=-c*c+d*(d+2*o)+l);else d=a>0?-n:n,c=Math.max(0,-(a*d+s)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(co).addScaledVector(Na,d),u}intersectSphere(t,e){if(t.radius<0)return null;Ji.subVectors(t.center,this.origin);let i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,n=t.radius*t.radius;if(r>n)return null;let a=Math.sqrt(n-r),s=i-a,o=i+a;return o<0?null:s<0?this.at(o,e):this.at(s,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,n,a,s,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(n=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(n=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||n>r||((n>i||isNaN(i))&&(i=n),(a<r||isNaN(r))&&(r=a),c>=0?(s=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(s=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,i,r,n){let a=this.origin,s=this.direction,o=s.x,l=s.y,h=s.z,c=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,g=e.y-a.y,v=e.z-a.z,m=i.x-a.x,f=i.y-a.y,S=i.z-a.z,w=Math.abs(o),_=Math.abs(l),b=Math.abs(h),A,C,y,T,I,P,L,H,N,U,j,q;if(w>=_&&w>=b?(y=o,P=c,N=p,q=m,o>=0?(A=l,C=h,T=d,I=u,L=g,H=v,U=f,j=S):(A=h,C=l,T=u,I=d,L=v,H=g,U=S,j=f)):_>=b?(y=l,P=d,N=g,q=f,l>=0?(A=h,C=o,T=u,I=c,L=v,H=p,U=S,j=m):(A=o,C=h,T=c,I=u,L=p,H=v,U=m,j=S)):(y=h,P=u,N=v,q=S,h>=0?(A=o,C=l,T=c,I=d,L=p,H=g,U=m,j=f):(A=l,C=o,T=d,I=c,L=g,H=p,U=f,j=m)),y===0)return null;let ie=A/y,K=C/y,Q=1/y,$=T-ie*P,Oe=I-K*P,Me=L-ie*N,Je=H-K*N,Ge=U-ie*q,te=j-K*q,de=Ge*Je-te*Me,pe=$*te-Oe*Ge,Ue=Me*Oe-Je*$;if(r){if(de<0||pe<0||Ue<0)return null}else if((de<0||pe<0||Ue<0)&&(de>0||pe>0||Ue>0))return null;let Ve=de+pe+Ue;if(Ve===0)return null;let _e=Q*(de*P+pe*N+Ue*q);return(Ve>0?_e<0:_e>0)?null:this.at(_e/Ve,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zi=class extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new Rt,Pr=new Nu,Ua=new Ss,Yh=new V,Ia=new V,Oa=new V,Fa=new V,uo=new V,Ba=new V,Kh=new V,za=new V,Et=class extends $t{constructor(t=new Ht,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let s=this.morphTargetInfluences;if(n&&s){Ba.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let h=s[o],c=n[o];h!==0&&(uo.fromBufferAttribute(c,t),a?Ba.addScaledVector(uo,h):Ba.addScaledVector(uo.sub(e),h))}e.add(Ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(n),Pr.copy(t.ray).recast(t.near),!(Ua.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Ua,Yh)===null||Pr.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Zh.copy(n).invert(),Pr.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,i){let r,n=this.geometry,a=this.material,s=n.index,o=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv1,c=n.attributes.normal,d=n.groups,u=n.drawRange;if(s!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=a[v.materialIndex],f=Math.max(v.start,u.start),S=Math.min(s.count,Math.min(v.start+v.count,u.start+u.count));for(let w=f,_=S;w<_;w+=3){let b=s.getX(w),A=s.getX(w+1),C=s.getX(w+2);r=Va(this,m,t,i,l,h,c,b,A,C),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){let f=s.getX(v),S=s.getX(v+1),w=s.getX(v+2);r=Va(this,a,t,i,l,h,c,f,S,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=a[v.materialIndex],f=Math.max(v.start,u.start),S=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let w=f,_=S;w<_;w+=3){let b=w,A=w+1,C=w+2;r=Va(this,m,t,i,l,h,c,b,A,C),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){let f=v,S=v+1,w=v+2;r=Va(this,a,t,i,l,h,c,f,S,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}};function Gf(t,e,i,r,n,a,s,o){let l;if(e.side===Kt?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===Br,o),l===null)return null;za.copy(o),za.applyMatrix4(t.matrixWorld);let h=i.ray.origin.distanceTo(za);return h<i.near||h>i.far?null:{distance:h,point:za.clone(),object:t}}function Va(t,e,i,r,n,a,s,o,l,h){t.getVertexPosition(o,Ia),t.getVertexPosition(l,Oa),t.getVertexPosition(h,Fa);let c=Gf(t,e,i,r,Ia,Oa,Fa,Kh);if(c){let d=new V;Fn.getBarycoord(Kh,Ia,Oa,Fa,d),n&&(c.uv=Fn.getInterpolatedAttribute(n,o,l,h,d,new xe)),a&&(c.uv1=Fn.getInterpolatedAttribute(a,o,l,h,d,new xe)),s&&(c.normal=Fn.getInterpolatedAttribute(s,o,l,h,d,new V),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new V,materialIndex:0};Fn.getNormal(Ia,Oa,Fa,u.normal),c.face=u,c.barycoord=d}return c}var kf=class extends vi{constructor(t=null,e=1,i=1,r,n,a,s,o,l=Ft,h=Ft,c,d){super(null,a,s,o,l,h,r,n,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lr=new Ss,Wf=new xe(.5,.5),Ha=new V,Il=class{constructor(t=new Mr,e=new Mr,i=new Mr,r=new Mr,n=new Mr,a=new Mr){this.planes=[t,e,i,r,n,a]}set(t,e,i,r,n,a){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni,i=!1){let r=this.planes,n=t.elements,a=n[0],s=n[1],o=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],S=n[13],w=n[14],_=n[15];if(r[0].setComponents(l-a,u-h,m-p,_-f).normalize(),r[1].setComponents(l+a,u+h,m+p,_+f).normalize(),r[2].setComponents(l+s,u+c,m+g,_+S).normalize(),r[3].setComponents(l-s,u-c,m-g,_-S).normalize(),i)r[4].setComponents(o,d,v,w).normalize(),r[5].setComponents(l-o,u-d,m-v,_-w).normalize();else if(r[4].setComponents(l-o,u-d,m-v,_-w).normalize(),e===Ni)r[5].setComponents(l+o,u+d,m+v,_+w).normalize();else if(e===oa)r[5].setComponents(o,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){Lr.center.set(0,0,0);let e=Wf.distanceTo(t.center);return Lr.radius=.7071067811865476+e,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let n=0;n<6;n++)if(e[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ha.x=r.normal.x>0?t.max.x:t.min.x,Ha.y=r.normal.y>0?t.max.y:t.min.y,Ha.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ol=class extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gs=new V,vs=new V,$h=new Rt,Hn=new Nu,Ga=new Ss,po=new V,Jh=new V,Du=class extends $t{constructor(t=new Ht,e=new Ol){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,n=e.count;r<n;r++)gs.fromBufferAttribute(e,r-1),vs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=gs.distanceTo(vs);t.setAttribute("lineDistance",new Mt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,n=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=n,t.ray.intersectsSphere(Ga)===!1)return;$h.copy(r).invert(),Hn.copy(t.ray).applyMatrix4($h);let s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,h=i.index,c=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,g=u-1;p<g;p+=l){let v=h.getX(p),m=h.getX(p+1),f=ka(this,t,Hn,o,v,m,p);f&&e.push(f)}if(this.isLineLoop){let p=h.getX(u-1),g=h.getX(d),v=ka(this,t,Hn,o,p,g,u-1);v&&e.push(v)}}else{let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,g=u-1;p<g;p+=l){let v=ka(this,t,Hn,o,p,p+1,p);v&&e.push(v)}if(this.isLineLoop){let p=ka(this,t,Hn,o,u-1,d,u-1);p&&e.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ka(t,e,i,r,n,a,s){let o=t.geometry.attributes.position;if(gs.fromBufferAttribute(o,n),vs.fromBufferAttribute(o,a),i.distanceSqToSegment(gs,vs,po,Jh)>r)return;po.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(po);if(!(l<e.near||l>e.far))return{distance:l,point:Jh.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}var Uu=class extends vi{constructor(t=[],e=zr,i,r,n,a,s,o,l,h){super(t,e,i,r,n,a,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ha=class extends vi{constructor(t,e,i=Oi,r,n,a,s=Ft,o=Ft,l,h=sr,c=1){if(h!==sr&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:c};super(d,r,n,a,s,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ul(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qf=class extends ha{constructor(t,e=Oi,i=zr,r,n,a=Ft,s=Ft,o,l=sr){let h={width:t,height:t,depth:1},c=[h,h,h,h,h,h];super(t,t,e,i,r,n,a,s,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Iu=class extends vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fa=class Ou extends Ht{constructor(e=1,i=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,e,s,a,0),g("z","y","x",1,-1,r,i,-e,s,a,1),g("x","z","y",1,1,e,r,i,n,s,2),g("x","z","y",1,-1,e,r,-i,n,s,3),g("x","y","z",1,-1,e,i,r,n,a,4),g("x","y","z",-1,-1,e,i,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(d,2));function g(v,m,f,S,w,_,b,A,C,y,T){let I=_/C,P=b/y,L=_/2,H=b/2,N=A/2,U=C+1,j=y+1,q=0,ie=0,K=new V;for(let Q=0;Q<j;Q++){let $=Q*P-H;for(let Oe=0;Oe<U;Oe++){let Me=Oe*I-L;K[v]=Me*S,K[m]=$*w,K[f]=N,h.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=A>0?1:-1,c.push(K.x,K.y,K.z),d.push(Oe/C),d.push(1-Q/y),q+=1}}for(let Q=0;Q<y;Q++)for(let $=0;$<C;$++){let Oe=u+$+U*Q,Me=u+$+U*(Q+1),Je=u+($+1)+U*(Q+1),Ge=u+($+1)+U*Q;l.push(Oe,Me,Ge),l.push(Me,Je,Ge),ie+=6}o.addGroup(p,ie,T),p+=ie,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},bs=class Fu extends Ht{constructor(e=1,i=1,r=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),a=Math.floor(a);let c=[],d=[],u=[],p=[],g=0,v=[],m=r/2,f=0;S(),s===!1&&(e>0&&w(!0),i>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(p,2));function S(){let _=new V,b=new V,A=0,C=(i-e)/r;for(let y=0;y<=a;y++){let T=[],I=y/a,P=I*(i-e)+e;for(let L=0;L<=n;L++){let H=L/n,N=H*l+o,U=Math.sin(N),j=Math.cos(N);b.x=P*U,b.y=-I*r+m,b.z=P*j,d.push(b.x,b.y,b.z),_.set(U,C,j).normalize(),u.push(_.x,_.y,_.z),p.push(H,1-I),T.push(g++)}v.push(T)}for(let y=0;y<n;y++)for(let T=0;T<a;T++){let I=v[T][y],P=v[T+1][y],L=v[T+1][y+1],H=v[T][y+1];(e>0||T!==0)&&(c.push(I,P,H),A+=3),(i>0||T!==a-1)&&(c.push(P,L,H),A+=3)}h.addGroup(f,A,0),f+=A}function w(_){let b=g,A=new xe,C=new V,y=0,T=_===!0?e:i,I=_===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*I,0),u.push(0,I,0),p.push(.5,.5),g++;let P=g;for(let L=0;L<=n;L++){let H=L/n*l+o,N=Math.cos(H),U=Math.sin(H);C.x=T*U,C.y=m*I,C.z=T*N,d.push(C.x,C.y,C.z),u.push(0,I,0),A.x=N*.5+.5,A.y=U*.5*I+.5,p.push(A.x,A.y),g++}for(let L=0;L<n;L++){let H=b+L,N=P+L;_===!0?c.push(N,N+1,H):c.push(N+1,N,H),y+=3}h.addGroup(f,y,_===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bu=class zu extends bs{constructor(e=1,i=1,r=32,n=1,a=!1,s=0,o=Math.PI*2){super(0,e,i,r,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new zu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jf=class Vu extends Ht{constructor(e=[],i=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:n};let a=[],s=[];o(n),h(r),c(),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(a.slice(),3)),this.setAttribute("uv",new Mt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new V,_=new V,b=new V;for(let A=0;A<i.length;A+=3)p(i[A+0],w),p(i[A+1],_),p(i[A+2],b),l(w,_,b,S)}function l(S,w,_,b){let A=b+1,C=[];for(let y=0;y<=A;y++){C[y]=[];let T=S.clone().lerp(_,y/A),I=w.clone().lerp(_,y/A),P=A-y;for(let L=0;L<=P;L++)L===0&&y===A?C[y][L]=T:C[y][L]=T.clone().lerp(I,L/P)}for(let y=0;y<A;y++)for(let T=0;T<2*(A-y)-1;T++){let I=Math.floor(T/2);T%2===0?(u(C[y][I+1]),u(C[y+1][I]),u(C[y][I])):(u(C[y][I+1]),u(C[y+1][I+1]),u(C[y+1][I]))}}function h(S){let w=new V;for(let _=0;_<a.length;_+=3)w.x=a[_+0],w.y=a[_+1],w.z=a[_+2],w.normalize().multiplyScalar(S),a[_+0]=w.x,a[_+1]=w.y,a[_+2]=w.z}function c(){let S=new V;for(let w=0;w<a.length;w+=3){S.x=a[w+0],S.y=a[w+1],S.z=a[w+2];let _=m(S)/2/Math.PI+.5,b=f(S)/Math.PI+.5;s.push(_,1-b)}g(),d()}function d(){for(let S=0;S<s.length;S+=6){let w=s[S+0],_=s[S+2],b=s[S+4],A=Math.max(w,_,b),C=Math.min(w,_,b);A>.9&&C<.1&&(w<.2&&(s[S+0]+=1),_<.2&&(s[S+2]+=1),b<.2&&(s[S+4]+=1))}}function u(S){a.push(S.x,S.y,S.z)}function p(S,w){let _=S*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function g(){let S=new V,w=new V,_=new V,b=new V,A=new xe,C=new xe,y=new xe;for(let T=0,I=0;T<a.length;T+=9,I+=6){S.set(a[T+0],a[T+1],a[T+2]),w.set(a[T+3],a[T+4],a[T+5]),_.set(a[T+6],a[T+7],a[T+8]),A.set(s[I+0],s[I+1]),C.set(s[I+2],s[I+3]),y.set(s[I+4],s[I+5]),b.copy(S).add(w).add(_).divideScalar(3);let P=m(b);v(A,I+0,S,P),v(C,I+2,w,P),v(y,I+4,_,P)}}function v(S,w,_,b){b<0&&S.x===1&&(s[w]=S.x-1),_.x===0&&_.z===0&&(s[w]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.vertices,e.indices,e.radius,e.detail)}},Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),n=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),n+=i.distanceTo(r),e.push(n),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,n=i.length,a;e?a=e:a=t*i[n-1];let s=0,o=n-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-a,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===a)return r/(n-1);let h=i[r],c=i[r+1]-h,d=(a-h)/c;return(r+d)/(n-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),a=this.getPoint(r),s=e||(n.isVector2?new xe:new V);return s.copy(a).sub(n).normalize(),s}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new V,r=[],n=[],a=[],s=new V,o=new Rt;for(let u=0;u<=t;u++){let p=u/t;r[u]=this.getTangentAt(p,new V)}n[0]=new V,a[0]=new V;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],s),a[0].crossVectors(r[0],n[0]);for(let u=1;u<=t;u++){if(n[u]=n[u-1].clone(),a[u]=a[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(et(r[u-1].dot(r[u]),-1,1));n[u].applyMatrix4(o.makeRotationAxis(s,p))}a[u].crossVectors(r[u],n[u])}if(e===!0){let u=Math.acos(et(n[0].dot(n[t]),-1,1));u/=t,r[0].dot(s.crossVectors(n[0],n[t]))>0&&(u=-u);for(let p=1;p<=t;p++)n[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),a[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fl=class extends Vi{constructor(t=0,e=0,i=1,r=1,n=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(t,e=new xe){let i=e,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(a?n=0:n=r),this.aClockwise===!0&&!a&&(n===r?n=-r:n=n-r);let s=this.aStartAngle+t*n,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xf=class extends Fl{constructor(t,e,i,r,n,a){super(t,e,i,i,r,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let t=0,e=0,i=0,r=0;function n(a,s,o,l){t=a,e=o,i=-3*a+3*s-2*o-l,r=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,h){n(s,o,h*(o-a),h*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,h,c,d){let u=(s-a)/h-(o-a)/(h+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+d)+(l-o)/d;u*=c,p*=c,n(s,o,u,p)},calc:function(a){let s=a*a,o=s*a;return t+e*a+i*s+r*o}}}var Qh=new V,ec=new V,fo=new Bl,mo=new Bl,go=new Bl,Zf=class extends Vi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new V){let i=e,r=this.points,n=r.length,a=(n-(this.closed?0:1))*t,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:o===0&&s===n-1&&(s=n-2,o=1);let l,h;this.closed||s>0?l=r[(s-1)%n]:(ec.subVectors(r[0],r[1]).add(r[0]),l=ec);let c=r[s%n],d=r[(s+1)%n];if(this.closed||s+2<n?h=r[(s+2)%n]:(Qh.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=Qh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),fo.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,g,v),mo.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,g,v),go.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),mo.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),go.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(fo.calc(o),mo.calc(o),go.calc(o)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new V().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tc(t,e,i,r,n){let a=(r-e)*.5,s=(n-i)*.5,o=t*t,l=t*o;return(2*i-2*r+a+s)*l+(-3*i+3*r-2*a-s)*o+a*t+i}function Yf(t,e){let i=1-t;return i*i*e}function Kf(t,e){return 2*(1-t)*t*e}function $f(t,e){return t*t*e}function ia(t,e,i,r){return Yf(t,e)+Kf(t,i)+$f(t,r)}function Jf(t,e){let i=1-t;return i*i*i*e}function Qf(t,e){let i=1-t;return 3*i*i*t*e}function em(t,e){return 3*(1-t)*t*t*e}function tm(t,e){return t*t*t*e}function ra(t,e,i,r,n){return Jf(t,e)+Qf(t,i)+em(t,r)+tm(t,n)}var Hu=class extends Vi{constructor(t=new xe,e=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new xe){let i=e,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(ra(t,r.x,n.x,a.x,s.x),ra(t,r.y,n.y,a.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},im=class extends Vi{constructor(t=new V,e=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new V){let i=e,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(ra(t,r.x,n.x,a.x,s.x),ra(t,r.y,n.y,a.y,s.y),ra(t,r.z,n.z,a.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gu=class extends Vi{constructor(t=new xe,e=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xe){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xe){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rm=class extends Vi{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ku=class extends Vi{constructor(t=new xe,e=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xe){let i=e,r=this.v0,n=this.v1,a=this.v2;return i.set(ia(t,r.x,n.x,a.x),ia(t,r.y,n.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nm=class extends Vi{constructor(t=new V,e=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new V){let i=e,r=this.v0,n=this.v1,a=this.v2;return i.set(ia(t,r.x,n.x,a.x),ia(t,r.y,n.y,a.y),ia(t,r.z,n.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wu=class extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xe){let i=e,r=this.points,n=(r.length-1)*t,a=Math.floor(n),s=n-a,o=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],c=r[a>r.length-3?r.length-1:a+2];return i.set(tc(s,o.x,l.x,h.x,c.x),tc(s,o.y,l.y,h.y,c.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new xe().fromArray(r))}return this}},xl=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:Zf,CubicBezierCurve:Hu,CubicBezierCurve3:im,EllipseCurve:Fl,LineCurve:Gu,LineCurve3:rm,QuadraticBezierCurve:ku,QuadraticBezierCurve3:nm,SplineCurve:Wu}),am=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),n=0;for(;n<r.length;){if(r[n]>=i){let a=r[n]-i,s=this.curves[n],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,e)}n++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,n=this.curves;r<n.length;r++){let a=n[r],s=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,o=a.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new xl[r.type]().fromJSON(r))}return this}},ic=class extends am{constructor(t){super(),this.type="Path",this.currentPoint=new xe,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Gu(this.currentPoint.clone(),new xe(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let n=new ku(this.currentPoint.clone(),new xe(t,e),new xe(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,n,a){let s=new Hu(this.currentPoint.clone(),new xe(t,e),new xe(i,r),new xe(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Wu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,n,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+s,e+o,i,r,n,a),this}absarc(t,e,i,r,n,a){return this.absellipse(t,e,i,i,r,n,a),this}ellipse(t,e,i,r,n,a,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,n,a,s,o),this}absellipse(t,e,i,r,n,a,s,o){let l=new Fl(t,e,i,r,n,a,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Es=class extends ic{constructor(t){super(t),this.uuid=kr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new ic().fromJSON(r))}return this}};function sm(t,e,i=2){let r=e&&e.length,n=r?e[0]*i:t.length,a=qu(t,0,n,i,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,h;if(r&&(a=um(t,e,a,i)),t.length>80*i){o=t[0],l=t[1];let c=o,d=l;for(let u=i;u<n;u+=i){let p=t[u],g=t[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return ca(a,s,i,o,l,h,0),s}function qu(t,e,i,r,n){let a;if(n===Sm(t,e,i,r)>0)for(let s=e;s<i;s+=r)a=rc(s/r|0,t[s],t[s+1],a);else for(let s=i-r;s>=e;s-=r)a=rc(s/r|0,t[s],t[s+1],a);return a&&Tn(a,a.next)&&(da(a),a=a.next),a}function Hr(t,e){if(!t)return t;e||(e=t);let i=t,r;do if(r=!1,!i.steiner&&(Tn(i,i.next)||bt(i.prev,i,i.next)===0)){if(da(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function ca(t,e,i,r,n,a,s){if(!t)return;!s&&a&&gm(t,r,n,a);let o=t;for(;t.prev!==t.next;){let l=t.prev,h=t.next;if(a?lm(t,r,n,a):om(t)){e.push(l.i,t.i,h.i),da(t),t=h.next,o=h.next;continue}if(t=h,t===o){s?s===1?(t=hm(Hr(t),e),ca(t,e,i,r,n,a,2)):s===2&&cm(t,e,i,r,n,a):ca(Hr(t),e,i,r,n,a,1);break}}}function om(t){let e=t.prev,i=t,r=t.next;if(bt(e,i,r)>=0)return!1;let n=e.x,a=i.x,s=r.x,o=e.y,l=i.y,h=r.y,c=Math.min(n,a,s),d=Math.min(o,l,h),u=Math.max(n,a,s),p=Math.max(o,l,h),g=r.next;for(;g!==e;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&Yn(n,o,a,l,s,h,g.x,g.y)&&bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lm(t,e,i,r){let n=t.prev,a=t,s=t.next;if(bt(n,a,s)>=0)return!1;let o=n.x,l=a.x,h=s.x,c=n.y,d=a.y,u=s.y,p=Math.min(o,l,h),g=Math.min(c,d,u),v=Math.max(o,l,h),m=Math.max(c,d,u),f=yl(p,g,e,i,r),S=yl(v,m,e,i,r),w=t.prevZ,_=t.nextZ;for(;w&&w.z>=f&&_&&_.z<=S;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==n&&w!==s&&Yn(o,c,l,d,h,u,w.x,w.y)&&bt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==s&&Yn(o,c,l,d,h,u,_.x,_.y)&&bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==n&&w!==s&&Yn(o,c,l,d,h,u,w.x,w.y)&&bt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==s&&Yn(o,c,l,d,h,u,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function hm(t,e){let i=t;do{let r=i.prev,n=i.next.next;!Tn(r,n)&&Xu(r,i,i.next,n)&&ua(r,n)&&ua(n,r)&&(e.push(r.i,i.i,n.i),da(i),da(i.next),i=t=n),i=i.next}while(i!==t);return Hr(i)}function cm(t,e,i,r,n,a){let s=t;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&xm(s,o)){let l=Zu(s,o);s=Hr(s,s.next),l=Hr(l,l.next),ca(s,e,i,r,n,a,0),ca(l,e,i,r,n,a,0);return}o=o.next}s=s.next}while(s!==t)}function um(t,e,i,r){let n=[];for(let a=0,s=e.length;a<s;a++){let o=e[a]*r,l=a<s-1?e[a+1]*r:t.length,h=qu(t,o,l,r,!1);h===h.next&&(h.steiner=!0),n.push(_m(h))}n.sort(dm);for(let a=0;a<n.length;a++)i=pm(n[a],i);return i}function dm(t,e){let i=t.x-e.x;if(i===0&&(i=t.y-e.y,i===0)){let r=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);i=r-n}return i}function pm(t,e){let i=fm(t,e);if(!i)return e;let r=Zu(i,t);return Hr(r,r.next),Hr(i,i.next)}function fm(t,e){let i=e,r=t.x,n=t.y,a=-1/0,s;if(Tn(t,i))return i;do{if(Tn(t,i.next))return i.next;if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>a&&(a=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==e);if(!s)return null;let o=s,l=s.x,h=s.y,c=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&ju(n<h?r:a,n,l,h,n<h?a:r,n,i.x,i.y)){let d=Math.abs(n-i.y)/(r-i.x);ua(i,t)&&(d<c||d===c&&(i.x>s.x||i.x===s.x&&mm(s,i)))&&(s=i,c=d)}i=i.next}while(i!==o);return s}function mm(t,e){return bt(t.prev,t,e.prev)<0&&bt(e.next,t,t.next)<0}function gm(t,e,i,r){let n=t;do n.z===0&&(n.z=yl(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,vm(n)}function vm(t){let e,i=1;do{let r=t,n;t=null;let a=null;for(e=0;r;){e++;let s=r,o=0;for(let h=0;h<i&&(o++,s=s.nextZ,!!s);h++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(n=r,r=r.nextZ,o--):(n=s,s=s.nextZ,l--),a?a.nextZ=n:t=n,n.prevZ=a,a=n;r=s}a.nextZ=null,i*=2}while(e>1);return t}function yl(t,e,i,r,n){return t=(t-i)*n|0,e=(e-r)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _m(t){let e=t,i=t;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==t);return i}function ju(t,e,i,r,n,a,s,o){return(n-s)*(e-o)>=(t-s)*(a-o)&&(t-s)*(r-o)>=(i-s)*(e-o)&&(i-s)*(a-o)>=(n-s)*(r-o)}function Yn(t,e,i,r,n,a,s,o){return!(t===s&&e===o)&&ju(t,e,i,r,n,a,s,o)}function xm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!ym(t,e)&&(ua(t,e)&&ua(e,t)&&Mm(t,e)&&(bt(t.prev,t,e.prev)||bt(t,e.prev,e))||Tn(t,e)&&bt(t.prev,t,t.next)>0&&bt(e.prev,e,e.next)>0)}function bt(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function Tn(t,e){return t.x===e.x&&t.y===e.y}function Xu(t,e,i,r){let n=qa(bt(t,e,i)),a=qa(bt(t,e,r)),s=qa(bt(i,r,t)),o=qa(bt(i,r,e));return!!(n!==a&&s!==o||n===0&&Wa(t,i,e)||a===0&&Wa(t,r,e)||s===0&&Wa(i,t,r)||o===0&&Wa(i,e,r))}function Wa(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function qa(t){return t>0?1:t<0?-1:0}function ym(t,e){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&Xu(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function ua(t,e){return bt(t.prev,t,t.next)<0?bt(t,e,t.next)>=0&&bt(t,t.prev,e)>=0:bt(t,e,t.prev)<0||bt(t,t.next,e)<0}function Mm(t,e){let i=t,r=!1,n=(t.x+e.x)/2,a=(t.y+e.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&n<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}function Zu(t,e){let i=Ml(t.i,t.x,t.y),r=Ml(e.i,e.x,e.y),n=t.next,a=e.prev;return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,a.next=r,r.prev=a,r}function rc(t,e,i,r){let n=Ml(t,e,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function da(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ml(t,e,i){return{i:t,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sm(t,e,i,r){let n=0;for(let a=e,s=i-r;a<i;a+=r)n+=(t[s]-t[a])*(t[a+1]+t[s+1]),s=a;return n}var bm=class{static triangulate(t,e,i=2){return sm(t,e,i)}},ja=class Yu{static area(e){let i=e.length,r=0;for(let n=i-1,a=0;a<i;n=a++)r+=e[n].x*e[a].y-e[a].x*e[n].y;return r*.5}static isClockWise(e){return Yu.area(e)<0}static triangulateShape(e,i){let r=[],n=[],a=[];nc(e),ac(r,e);let s=e.length;i.forEach(nc);for(let l=0;l<i.length;l++)n.push(s),s+=i[l].length,ac(r,i[l]);let o=bm.triangulate(r,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function nc(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ac(t,e){for(let i=0;i<e.length;i++)t.push(e[i].x),t.push(e[i].y)}var zl=class Ku extends Ht{constructor(e=new Es([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];let r=this,n=[],a=[];for(let o=0,l=e.length;o<l;o++){let h=e[o];s(h)}this.setAttribute("position",new Mt(n,3)),this.setAttribute("uv",new Mt(a,2)),this.computeVertexNormals();function s(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:Em,w,_=!1,b,A,C,y;if(f){w=f.getSpacedPoints(c),_=!0,u=!1;let ae=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(c,ae),A=new V,C=new V,y=new V}u||(m=0,p=0,g=0,v=0);let T=o.extractPoints(h),I=T.shape,P=T.holes;if(!ja.isClockWise(I)){I=I.reverse();for(let ae=0,se=P.length;ae<se;ae++){let me=P[ae];ja.isClockWise(me)&&(P[ae]=me.reverse())}}function L(ae){let se=10000000000000001e-36,me=ae[0];for(let Se=1;Se<=ae.length;Se++){let Te=Se%ae.length,Ce=ae[Te],ze=Ce.x-me.x,Xe=Ce.y-me.y,Ze=ze*ze+Xe*Xe,F=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(me.x),Math.abs(me.y)),B=se*F*F;if(Ze<=B){ae.splice(Te,1),Se--;continue}me=Ce}}L(I),P.forEach(L);let H=P.length,N=I;for(let ae=0;ae<H;ae++){let se=P[ae];I=I.concat(se)}function U(ae,se,me){return se||qe("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(se,me)}let j=I.length;function q(ae,se,me){let Se,Te,Ce,ze=ae.x-se.x,Xe=ae.y-se.y,Ze=me.x-ae.x,F=me.y-ae.y,B=ze*ze+Xe*Xe,O=ze*F-Xe*Ze;if(Math.abs(O)>Number.EPSILON){let X=Math.sqrt(B),M=Math.sqrt(Ze*Ze+F*F),x=se.x-Xe/X,D=se.y+ze/X,G=me.x-F/M,J=me.y+Ze/M,re=((G-x)*F-(J-D)*Ze)/(ze*F-Xe*Ze);Se=x+ze*re-ae.x,Te=D+Xe*re-ae.y;let he=Se*Se+Te*Te;if(he<=2)return new xe(Se,Te);Ce=Math.sqrt(he/2)}else{let X=!1;ze>Number.EPSILON?Ze>Number.EPSILON&&(X=!0):ze<-Number.EPSILON?Ze<-Number.EPSILON&&(X=!0):Math.sign(Xe)===Math.sign(F)&&(X=!0),X?(Se=-Xe,Te=ze,Ce=Math.sqrt(B)):(Se=ze,Te=Xe,Ce=Math.sqrt(B/2))}return new xe(Se/Ce,Te/Ce)}let ie=[];for(let ae=0,se=N.length,me=se-1,Se=ae+1;ae<se;ae++,me++,Se++)me===se&&(me=0),Se===se&&(Se=0),ie[ae]=q(N[ae],N[me],N[Se]);let K=[],Q,$=ie.concat();for(let ae=0,se=H;ae<se;ae++){let me=P[ae];Q=[];for(let Se=0,Te=me.length,Ce=Te-1,ze=Se+1;Se<Te;Se++,Ce++,ze++)Ce===Te&&(Ce=0),ze===Te&&(ze=0),Q[Se]=q(me[Se],me[Ce],me[ze]);K.push(Q),$=$.concat(Q)}let Oe;if(m===0)Oe=ja.triangulateShape(N,P);else{let ae=[],se=[];for(let me=0;me<m;me++){let Se=me/m,Te=p*Math.cos(Se*Math.PI/2),Ce=g*Math.sin(Se*Math.PI/2)+v;for(let ze=0,Xe=N.length;ze<Xe;ze++){let Ze=U(N[ze],ie[ze],Ce);pe(Ze.x,Ze.y,-Te),Se===0&&ae.push(Ze)}for(let ze=0,Xe=H;ze<Xe;ze++){let Ze=P[ze];Q=K[ze];let F=[];for(let B=0,O=Ze.length;B<O;B++){let X=U(Ze[B],Q[B],Ce);pe(X.x,X.y,-Te),Se===0&&F.push(X)}Se===0&&se.push(F)}}Oe=ja.triangulateShape(ae,se)}let Me=Oe.length,Je=g+v;for(let ae=0;ae<j;ae++){let se=u?U(I[ae],$[ae],Je):I[ae];_?(C.copy(b.normals[0]).multiplyScalar(se.x),A.copy(b.binormals[0]).multiplyScalar(se.y),y.copy(w[0]).add(C).add(A),pe(y.x,y.y,y.z)):pe(se.x,se.y,0)}for(let ae=1;ae<=c;ae++)for(let se=0;se<j;se++){let me=u?U(I[se],$[se],Je):I[se];_?(C.copy(b.normals[ae]).multiplyScalar(me.x),A.copy(b.binormals[ae]).multiplyScalar(me.y),y.copy(w[ae]).add(C).add(A),pe(y.x,y.y,y.z)):pe(me.x,me.y,d/c*ae)}for(let ae=m-1;ae>=0;ae--){let se=ae/m,me=p*Math.cos(se*Math.PI/2),Se=g*Math.sin(se*Math.PI/2)+v;for(let Te=0,Ce=N.length;Te<Ce;Te++){let ze=U(N[Te],ie[Te],Se);pe(ze.x,ze.y,d+me)}for(let Te=0,Ce=P.length;Te<Ce;Te++){let ze=P[Te];Q=K[Te];for(let Xe=0,Ze=ze.length;Xe<Ze;Xe++){let F=U(ze[Xe],Q[Xe],Se);_?pe(F.x,F.y+w[c-1].y,w[c-1].x+me):pe(F.x,F.y,d+me)}}}Ge(),te();function Ge(){let ae=n.length/3;if(u){let se=0,me=j*se;for(let Se=0;Se<Me;Se++){let Te=Oe[Se];Ue(Te[2]+me,Te[1]+me,Te[0]+me)}se=c+m*2,me=j*se;for(let Se=0;Se<Me;Se++){let Te=Oe[Se];Ue(Te[0]+me,Te[1]+me,Te[2]+me)}}else{for(let se=0;se<Me;se++){let me=Oe[se];Ue(me[2],me[1],me[0])}for(let se=0;se<Me;se++){let me=Oe[se];Ue(me[0]+j*c,me[1]+j*c,me[2]+j*c)}}r.addGroup(ae,n.length/3-ae,0)}function te(){let ae=n.length/3,se=0;de(N,se),se+=N.length;for(let me=0,Se=P.length;me<Se;me++){let Te=P[me];de(Te,se),se+=Te.length}r.addGroup(ae,n.length/3-ae,1)}function de(ae,se){let me=ae.length;for(;--me>=0;){let Se=me,Te=me-1;Te<0&&(Te=ae.length-1);for(let Ce=0,ze=c+m*2;Ce<ze;Ce++){let Xe=j*Ce,Ze=j*(Ce+1),F=se+Se+Xe,B=se+Te+Xe,O=se+Te+Ze,X=se+Se+Ze;Ve(F,B,O,X)}}}function pe(ae,se,me){l.push(ae),l.push(se),l.push(me)}function Ue(ae,se,me){_e(ae),_e(se),_e(me);let Se=n.length/3,Te=S.generateTopUV(r,n,Se-3,Se-2,Se-1);Ke(Te[0]),Ke(Te[1]),Ke(Te[2])}function Ve(ae,se,me,Se){_e(ae),_e(se),_e(Se),_e(se),_e(me),_e(Se);let Te=n.length/3,Ce=S.generateSideWallUV(r,n,Te-6,Te-3,Te-2,Te-1);Ke(Ce[0]),Ke(Ce[1]),Ke(Ce[3]),Ke(Ce[1]),Ke(Ce[2]),Ke(Ce[3])}function _e(ae){n.push(l[ae*3+0]),n.push(l[ae*3+1]),n.push(l[ae*3+2])}function Ke(ae){a.push(ae.x),a.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return wm(i,r,e)}static fromJSON(e,i){let r=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=i[e.shapes[a]];r.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new xl[n.type]().fromJSON(n)),new Ku(r,e.options)}},Em={generateTopUV:function(t,e,i,r,n){let a=e[i*3],s=e[i*3+1],o=e[r*3],l=e[r*3+1],h=e[n*3],c=e[n*3+1];return[new xe(a,s),new xe(o,l),new xe(h,c)]},generateSideWallUV:function(t,e,i,r,n,a){let s=e[i*3],o=e[i*3+1],l=e[i*3+2],h=e[r*3],c=e[r*3+1],d=e[r*3+2],u=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[a*3],m=e[a*3+1],f=e[a*3+2];return Math.abs(o-c)<Math.abs(s-h)?[new xe(s,1-l),new xe(h,1-d),new xe(u,1-g),new xe(v,1-f)]:[new xe(o,1-l),new xe(c,1-d),new xe(p,1-g),new xe(m,1-f)]}};function wm(t,e,i){if(i.shapes=[],Array.isArray(t))for(let r=0,n=t.length;r<n;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}var $u=class Ju extends jf{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Ju(e.radius,e.detail)}},Qu=class ed extends Ht{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};let a=e/2,s=i/2,o=Math.floor(r),l=Math.floor(n),h=o+1,c=l+1,d=e/o,u=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){let S=f*u-s;for(let w=0;w<h;w++){let _=w*d-a;g.push(_,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let w=S+h*f,_=S+h*(f+1),b=S+1+h*(f+1),A=S+1+h*f;p.push(w,_,A),p.push(_,b,A)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.width,e.height,e.widthSegments,e.heightSegments)}},Vl=class td extends Ht{constructor(e=.5,i=1,r=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:n,thetaStart:a,thetaLength:s},r=Math.max(3,r),n=Math.max(1,n);let o=[],l=[],h=[],c=[],d=e,u=(i-e)/n,p=new V,g=new xe;for(let v=0;v<=n;v++){for(let m=0;m<=r;m++){let f=a+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){let m=v*(r+1);for(let f=0;f<r;f++){let S=f+m,w=S,_=S+r+1,b=S+r+2,A=S+1;o.push(w,_,A),o.push(_,b,A)}}this.setIndex(o),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Hl=class id extends Ht{constructor(e=1,i=.4,r=12,n=48,a=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:n,arc:a,thetaStart:s,thetaLength:o},r=Math.floor(r),n=Math.floor(n);let l=[],h=[],c=[],d=[],u=new V,p=new V,g=new V;for(let v=0;v<=r;v++){let m=s+v/r*o;for(let f=0;f<=n;f++){let S=f/n*a;p.x=(e+i*Math.cos(m))*Math.cos(S),p.y=(e+i*Math.cos(m))*Math.sin(S),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(p,u).normalize(),c.push(g.x,g.y,g.z),d.push(f/n),d.push(v/r)}}for(let v=1;v<=r;v++)for(let m=1;m<=n;m++){let f=(n+1)*v+m-1,S=(n+1)*(v-1)+m-1,w=(n+1)*(v-1)+m,_=(n+1)*v+m;l.push(f,S,_),l.push(S,w,_)}this.setIndex(l),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Rn(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let n=t[i][r];if(sc(n))n.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone();else if(Array.isArray(n))if(sc(n[0])){let a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();e[i][r]=a}else e[i][r]=n.slice();else e[i][r]=n}}return e}function Wt(t){let e={};for(let i=0;i<t.length;i++){let r=Rn(t[i]);for(let n in r)e[n]=r[n]}return e}function sc(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Tm(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function rd(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Rm={clone:Rn,merge:Wt},Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rn(t.uniforms),this.uniformsGroups=Tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?e.uniforms[r]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[r]={type:"m4",value:n.toArray()}:e.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Rt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pm=class extends Bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ws=class extends Cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Lm=class extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nm=class extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hn(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function vo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var ma=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],n=e[i-1];i:{e:{let a;t:{r:if(!(t<r)){for(let s=i+2;;){if(r===void 0){if(t<n)break r;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(n=r,r=e[++i],t<r)break e}a=e.length;break t}if(!(t>=n)){let s=e[1];t<s&&(i=2,n=s);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=n,n=e[--i-1],t>=n)break e}a=i,i=0;break t}break i}for(;i<a;){let s=i+a>>>1;t<e[s]?a=s:i=s+1}if(r=e[i],n=e[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=t*r;for(let a=0;a!==r;++a)e[a]=i[n+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dm=class extends ma{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ph,endingEnd:Ph}}intervalChanged_(t,e,i){let r=this.parameterPositions,n=t-2,a=t+1,s=r[n],o=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case Lh:n=t,s=2*e-i;break;case Nh:n=r.length-2,s=e+r[n]-r[n+1];break;default:n=t,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Lh:a=t,o=2*i-e;break;case Nh:a=1,o=i+r[1]-r[0];break;default:a=t-1,o=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-s),this._weightNext=l/(o-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(t,e,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-e)/(r-e),g=p*p,v=g*p,m=-d*v+2*d*g-d*p,f=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*p+1,S=(-1-u)*v+(1.5+u)*g+.5*p,w=u*v-u*g;for(let _=0;_!==s;++_)n[_]=m*a[h+_]+f*a[l+_]+S*a[o+_]+w*a[c+_];return n}},Um=class extends ma{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=(i-e)/(r-e),c=1-h;for(let d=0;d!==s;++d)n[d]=a[l+d]*c+a[o+d]*h;return n}},Im=class extends ma{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Om=class extends ma{interpolate_(t,e,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-e)/(r-e),g=1-p;for(let v=0;v!==s;++v)n[v]=a[l+v]*g+a[o+v]*p;return n}let d=s*2,u=t-1;for(let p=0;p!==s;++p){let g=a[l+p],v=a[o+p],m=u*d+p*2,f=c[m],S=c[m+1],w=t*d+p*2,_=h[w],b=h[w+1],A=Bm(i,e,f,_,r);n[p]=nd(A,g,S,b,v)}return n}};function nd(t,e,i,r,n){let a=1-t;return a*a*a*e+3*a*a*t*i+3*a*t*t*r+t*t*t*n}function Fm(t,e,i,r,n){let a=1-t;return 3*a*a*(i-e)+6*a*t*(r-i)+3*t*t*(n-r)}function Bm(t,e,i,r,n){let a=(t-e)/(n-e);for(let s=0;s<8;s++){let o=nd(a,e,i,r,n)-t;if(Math.abs(o)<1e-10)break;let l=Fm(a,e,i,r,n);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Hi=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hn(e,this.TimeBufferType),this.values=hn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hn(t.times,Array),values:hn(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),vo(t.settings)&&(i.settings={inTangents:hn(t.settings.inTangents,Array),outTangents:hn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Im(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Om(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ds:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case Ws:e=this.InterpolantFactoryMethodSmooth;break;case Ch:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return Ws;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;vo(this.settings)&&(oc(this.settings.inTangents,t),oc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,n=0,a=r-1;for(;n!==r&&i[n]<t;)++n;for(;a!==-1&&i[a]>e;)--a;if(++a,n!==0||a!==r){n>=a&&(a=Math.max(a,1),n=a-1);let s=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*s,a*s)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,n=i.length;n===0&&(qe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let s=0;s!==n;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){qe("KeyframeTrack: Time is not a valid number.",this,s,o),t=!1;break}if(a!==null&&a>o){qe("KeyframeTrack: Out of order keys.",this,s,o,a),t=!1;break}a=o}if(r!==void 0&&rf(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,s,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ws,n=t.length-1,a=1;for(let s=1;s<n;++s){let o=!1,l=t[s],h=t[s+1];if(l!==h&&(s!==1||l!==t[0]))if(r)o=!0;else{let c=s*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let g=e[c+p];if(g!==e[d+p]||g!==e[u+p]){o=!0;break}}}if(o){if(s!==a){t[a]=t[s];let c=s*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[c+u]}++a}}if(n>0){t[a]=t[n];for(let s=n*i,o=a*i,l=0;l!==i;++l)e[o+l]=e[s+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,vo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function oc(t,e){for(let i=0,r=t.length;i!==r;i+=2)t[i]*=e}Hi.prototype.ValueTypeName="";Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=gl;var ga=class extends Hi{constructor(t,e,i){super(t,e,i)}};ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=ds;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var zm=class extends Hi{constructor(t,e,i,r){super(t,e,i,r)}};zm.prototype.ValueTypeName="color";var Vm=class extends Hi{constructor(t,e,i,r){super(t,e,i,r)}};Vm.prototype.ValueTypeName="number";var Hm=class extends ma{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(i-e)/(r-e),l=t*s;for(let h=l+s;l!==h;l+=4)Wr.slerpFlat(n,0,a,l-s,a,l,o);return n}},ad=class extends Hi{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new Hm(this.times,this.values,this.getValueSize(),t)}};ad.prototype.ValueTypeName="quaternion";ad.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends Hi{constructor(t,e,i){super(t,e,i)}};va.prototype.ValueTypeName="string";va.prototype.ValueBufferType=Array;va.prototype.DefaultInterpolation=ds;va.prototype.InterpolantFactoryMethodLinear=void 0;va.prototype.InterpolantFactoryMethodSmooth=void 0;var Gm=class extends Hi{constructor(t,e,i,r){super(t,e,i,r)}};Gm.prototype.ValueTypeName="vector";var km=class{constructor(t,e,i){let r=this,n=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){s++,n===!1&&r.onStart!==void 0&&r.onStart(h,a,s),n=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,s),a===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wm=new km,qm=class{constructor(t){this.manager=t!==void 0?t:Wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,n){i.load(t,r,e,n)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qm.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gl=class extends $t{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},sd=class extends Gl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_o=new Rt,lc=new V,hc=new V,od=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(_o,t.coordinateSystem,t.reversedDepth);let n=this._frameExtents,a=r?r.z/n.x:1,s=r?r.w/n.y:1,o=r?r.x/n.x:0,l=r?r.y/n.y:0;t.coordinateSystem===oa||t.reversedDepth?e.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),e.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xa=new V,Za=new Wr,bi=new V,ld=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xa,Za,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Xa,Za,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,Za,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xr=new V,cc=new xe,uc=new xe,Yt=class extends ld{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,e){return this.getViewBounds(t,cc,uc),e.subVectors(uc,cc)}setViewOffset(t,e,i,r,n,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ea*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,n=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;n+=a.offsetX*r/o,e-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}let s=this.filmOffset;s!==0&&(n+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},jm=class extends od{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},hd=class extends Gl{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},kl=class extends ld{constructor(t=-1,e=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-t,a=i+t,s=r+e,o=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,a=n+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xm=class extends od{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cd=class extends Gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Xm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},cn=-90,un=1,Zm=class extends $t{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(cn,un,t,e);r.layers=this.layers,this.add(r);let n=new Yt(cn,un,t,e);n.layers=this.layers,this.add(n);let a=new Yt(cn,un,t,e);a.layers=this.layers,this.add(a);let s=new Yt(cn,un,t,e);s.layers=this.layers,this.add(s);let o=new Yt(cn,un,t,e);o.layers=this.layers,this.add(o);let l=new Yt(cn,un,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,n,a,s,o]=e;for(let l of e)this.remove(l);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[n,a,s,o,l,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,n),t.setRenderTarget(i,1,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,3,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,4,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(c,d,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ym=class extends Yt{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Wl="\\[\\]\\.:\\/",Km=new RegExp("["+Wl+"]","g"),ql="[^"+Wl+"]",$m="[^"+Wl.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",ql),Qm=/(WCOD+)?/.source.replace("WCOD",$m),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),ig=new RegExp("^"+Jm+Qm+eg+tg+"$"),rg=["material","materials","bones","map"],ng=class{constructor(t,e,i){let r=i||Tt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Tt=class _n{constructor(e,i,r){this.path=i,this.parsedPath=r||_n.parseTrackName(i),this.node=_n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new _n.Composite(e,i,r):new _n(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(e){let i=ig.exec(e);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=r.nodeName.substring(n+1);rg.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)e[i++]=r[n]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,n=i.propertyName,a=i.propertyIndex;if(e||(e=_n.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let s=e[n];if(s===void 0){let h=i.nodeName;qe("PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=ng;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var OM=new Float32Array(1),FM=class ud{static{ud.prototype.isMatrix2=!0}constructor(e,i,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,n){let a=this.elements;return a[0]=e,a[2]=i,a[1]=r,a[3]=n,this}};function dc(t,e,i,r){let n=ag(r);switch(i){case fu:return t*e;case gu:return t*e/n.components*n.byteLength;case Al:return t*e/n.components*n.byteLength;case Vr:return t*e*2/n.components*n.byteLength;case Cl:return t*e*2/n.components*n.byteLength;case mu:return t*e*3/n.components*n.byteLength;case mi:return t*e*4/n.components*n.byteLength;case Pl:return t*e*4/n.components*n.byteLength;case is:case rs:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ns:case as:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ho:case ko:return Math.max(t,16)*Math.max(e,8)/4;case Vo:case Go:return Math.max(t,8)*Math.max(e,8)/2;case Wo:case qo:case Xo:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jo:case cs:case Yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case dl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pl:case fl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case us:case ml:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ag(t){switch(t){case ti:case cu:return{byteLength:1,components:1};case aa:case uu:case Fi:return{byteLength:2,components:1};case Tl:case Rl:return{byteLength:2,components:4};case Oi:case wl:case Li:return{byteLength:4,components:1};case du:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dd(){let t=null,e=!1,i=null,r=null;function n(a,s){r=t.requestAnimationFrame(n),i(a,s)}return{start:function(){e!==!0&&i!==null&&t!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){i=a},setContext:function(a){t=a}}}function sg(t){let e=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=t.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=t.SHORT;else if(h instanceof Uint32Array)p=t.UNSIGNED_INT;else if(h instanceof Int32Array)p=t.INT;else if(h instanceof Int8Array)p=t.BYTE;else if(h instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(t.bindBuffer(h,o),d.length===0)t.bufferSubData(h,0,c);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];t.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:n,remove:a,update:s}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,a0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Rv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Lv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Dv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:og,alphahash_pars_fragment:lg,alphamap_fragment:hg,alphamap_pars_fragment:cg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:fg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:vg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:yg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:wg,color_fragment:Tg,color_pars_fragment:Rg,color_pars_vertex:Ag,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ug,emissivemap_fragment:Ig,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:kg,fog_vertex:Wg,fog_pars_vertex:qg,fog_fragment:jg,fog_pars_fragment:Xg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:$g,lights_pars_begin:Jg,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:n0,lights_physical_pars_fragment:a0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:l0,lightprobes_pars_fragment:h0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:f0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:v0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:x0,morphinstance_vertex:y0,morphcolor_vertex:M0,morphnormal_vertex:S0,morphtarget_pars_vertex:b0,morphtarget_vertex:E0,normal_fragment_begin:w0,normal_fragment_maps:T0,normal_pars_fragment:R0,normal_pars_vertex:A0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:U0,opaque_fragment:I0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:B0,dithering_fragment:z0,dithering_pars_fragment:V0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:W0,shadowmap_vertex:q0,shadowmask_pars_fragment:j0,skinbase_vertex:X0,skinning_pars_vertex:Z0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:$0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:iv,uv_pars_fragment:rv,uv_pars_vertex:nv,uv_vertex:av,worldpos_vertex:sv,background_vert:ov,background_frag:lv,backgroundCube_vert:hv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:dv,depth_vert:pv,depth_frag:fv,distance_vert:mv,distance_frag:gv,equirect_vert:vv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:Mv,meshbasic_frag:Sv,meshlambert_vert:bv,meshlambert_frag:Ev,meshmatcap_vert:wv,meshmatcap_frag:Tv,meshnormal_vert:Rv,meshnormal_frag:Av,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Dv,meshtoon_frag:Uv,points_vert:Iv,points_frag:Ov,shadow_vert:Fv,shadow_frag:Bv,sprite_vert:zv,sprite_frag:Vv},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Pi={basic:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Wt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Wt([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Pi.physical={uniforms:Wt([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ya={r:0,b:0,g:0},Hv=new Rt,pd=new Ye;pd.set(-1,0,0,0,1,0,0,0,1);function Gv(t,e,i,r,n,a){let s=new tt(0),o=n===!0?0:1,l,h,c=null,d=0,u=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let _=S.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(S){let w=!1,_=p(S);_===null?m(s,o):_&&_.isColor&&(m(_,1),w=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(S,w){let _=p(w);_&&(_.isCubeTexture||_.mapping===ys)?(h===void 0&&(h=new Et(new fa(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Rn(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pd),h.material.toneMapped=rt.getTransfer(_.colorSpace)!==ut,(c!==_||d!==_.version||u!==t.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,u=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Et(new Qu(2,2),new Bi({name:"BackgroundMaterial",uniforms:Rn(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=rt.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,u=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(Ya,rd(t)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,w,a)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,w=1){s.set(S),o=w,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:g,addToRenderList:v,dispose:f}}function kv(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=u(null),a=n,s=!1;function o(P,L,H,N,U){let j=!1,q=d(P,N,H,L);a!==q&&(a=q,h(a.object)),j=p(P,N,H,U),j&&g(P,N,H,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,_(P,L,H,N),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function h(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function d(P,L,H,N){let U=N.wireframe===!0,j=r[L.id];j===void 0&&(j={},r[L.id]=j);let q=P.isInstancedMesh===!0?P.id:0,ie=j[q];ie===void 0&&(ie={},j[q]=ie);let K=ie[H.id];K===void 0&&(K={},ie[H.id]=K);let Q=K[U];return Q===void 0&&(Q=u(l()),K[U]=Q),Q}function u(P){let L=[],H=[],N=[];for(let U=0;U<i;U++)L[U]=0,H[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:N,object:P,attributes:{},index:null}}function p(P,L,H,N){let U=a.attributes,j=L.attributes,q=0,ie=H.getAttributes();for(let K in ie)if(ie[K].location>=0){let Q=U[K],$=j[K];if($===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),Q===void 0||Q.attribute!==$||$&&Q.data!==$.data)return!0;q++}return a.attributesNum!==q||a.index!==N}function g(P,L,H,N){let U={},j=L.attributes,q=0,ie=H.getAttributes();for(let K in ie)if(ie[K].location>=0){let Q=j[K];Q===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let $={};$.attribute=Q,Q&&Q.data&&($.data=Q.data),U[K]=$,q++}a.attributes=U,a.attributesNum=q,a.index=N}function v(){let P=a.newAttributes;for(let L=0,H=P.length;L<H;L++)P[L]=0}function m(P){f(P,0)}function f(P,L){let H=a.newAttributes,N=a.enabledAttributes,U=a.attributeDivisors;H[P]=1,N[P]===0&&(t.enableVertexAttribArray(P),N[P]=1),U[P]!==L&&(t.vertexAttribDivisor(P,L),U[P]=L)}function S(){let P=a.newAttributes,L=a.enabledAttributes;for(let H=0,N=L.length;H<N;H++)L[H]!==P[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function w(P,L,H,N,U,j,q){q===!0?t.vertexAttribIPointer(P,L,H,U,j):t.vertexAttribPointer(P,L,H,N,U,j)}function _(P,L,H,N){v();let U=N.attributes,j=H.getAttributes(),q=L.defaultAttributeValues;for(let ie in j){let K=j[ie];if(K.location>=0){let Q=U[ie];if(Q===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let $=Q.normalized,Oe=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;let Je=Me.buffer,Ge=Me.type,te=Me.bytesPerElement,de=Ge===t.INT||Ge===t.UNSIGNED_INT||Q.gpuType===wl;if(Q.isInterleavedBufferAttribute){let pe=Q.data,Ue=pe.stride,Ve=Q.offset;if(pe.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)f(K.location+_e,pe.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<K.locationSize;_e++)m(K.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let _e=0;_e<K.locationSize;_e++)w(K.location+_e,Oe/K.locationSize,Ge,$,Ue*te,(Ve+Oe/K.locationSize*_e)*te,de)}else{if(Q.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)f(K.location+pe,Q.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pe=0;pe<K.locationSize;pe++)m(K.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let pe=0;pe<K.locationSize;pe++)w(K.location+pe,Oe/K.locationSize,Ge,$,Oe*te,Oe/K.locationSize*pe*te,de)}}else if(q!==void 0){let $=q[ie];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(K.location,$);break;case 3:t.vertexAttrib3fv(K.location,$);break;case 4:t.vertexAttrib4fv(K.location,$);break;default:t.vertexAttrib1fv(K.location,$)}}}}S()}function b(){T();for(let P in r){let L=r[P];for(let H in L){let N=L[H];for(let U in N){let j=N[U];for(let q in j)c(j[q].object),delete j[q];delete N[U]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let L=r[P.id];for(let H in L){let N=L[H];for(let U in N){let j=N[U];for(let q in j)c(j[q].object),delete j[q];delete N[U]}}delete r[P.id]}function C(P){for(let L in r){let H=r[L];for(let N in H){let U=H[N];if(U[P.id]===void 0)continue;let j=U[P.id];for(let q in j)c(j[q].object),delete j[q];delete U[P.id]}}}function y(P){for(let L in r){let H=r[L],N=P.isInstancedMesh===!0?P.id:0,U=H[N];if(U!==void 0){for(let j in U){let q=U[j];for(let ie in q)c(q[ie].object),delete q[ie];delete U[j]}delete H[N],Object.keys(H).length===0&&delete r[L]}}}function T(){I(),s=!0,a!==n&&(a=n,h(a.object))}function I(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Wv(t,e,i){let r;function n(l){r=l}function a(l,h){t.drawArrays(r,l,h),i.update(h,r,1)}function s(l,h,c){c!==0&&(t.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function qv(t,e,i,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){return!(C!==mi&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ti&&C!==Li&&!y&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(He("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:_,maxSamples:b,samples:A}}function jv(t){let e=this,i=null,r=0,n=!1,a=!1,s=new Mr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||n;return n=u,r=d.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!n||g===null||g.length===0||a&&!m)a?c(null):h();else{let S=a?0:r,w=S*4,_=f.clippingState||null;l.value=_,_=c(g,u,w,p);for(let b=0;b!==w;++b)_[b]=i[b];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(d,u,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,_=p;w!==v;++w,_+=4)s.copy(d[w]).applyMatrix4(S,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var xn=4,Xv=6,Zv=20,Yv=256,Gn=new kl,pc=new tt,xo=null,yo=0,Mo=0,So=!1,Kv=new V,Nr=new V,fc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,n={}){let{size:a=256,position:s=Kv}=n;xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o,s),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,yo,Mo),this._renderer.xr.enabled=So,t.scissorTest=!1,dn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zr||t.mapping===bn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Fi,format:mi,colorSpace:ps,depthBuffer:!1},r=mc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(t,e,i);let{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$v(n)),this._blurMaterial=Qv(n,t,e),this._ggxMaterial=Jv(n,t,e)}return r}_compileMaterial(t){let e=new Et(new Ht,t);this._renderer.compile(e,Gn)}_sceneToCubeUV(t,e,i,r,n){let a=new Yt(90,1,e,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(pc),l.toneMapping=Ui,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new fa,new zi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,p=!0):(u.color.copy(pc),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(a.up.set(0,s[v],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x+o[v],n.y,n.z)):m===1?(a.up.set(0,0,s[v]),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y+o[v],n.z)):(a.up.set(0,s[v],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y,n.z+o[v]));let f=this._cubeSize;dn(r,m*f,v>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,a),l.render(t,a)}l.toneMapping=c,l.autoClear=h,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===zr||t.mapping===bn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());let n=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=n;let s=n.uniforms;s.envMap.value=t;let o=this._cubeSize;dn(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(a,Gn)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let n=1;n<r;n++)this._applyGGXFilter(t,n-1,n);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,n=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;let o=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,g=this._sizeLods[i],v=3*g*(i>p-xn?i-p+xn:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,dn(n,v,m,3*g,2*g),r.setRenderTarget(n),r.render(s,Gn),o.envMap.value=n.texture,o.roughness.value=0,o.mipInt.value=p-i,dn(t,v,m,3*g,2*g),r.setRenderTarget(t),r.render(s,Gn)}_blur(t,e,i,r){let n=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,n,e,i,a),this._blurPass(n,t,i,i,a)}_blurPass(t,e,i,r,n){let a=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=t.texture,l.sigma.value=n,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-xn?r-this._lodMax+xn:0),d=4*(this._cubeSize-h);dn(e,c,d,3*h,2*h),a.setRenderTarget(e),a.render(o,Gn)}};function $v(t){let e=[],i=[],r=t,n=t-xn+1+Xv;for(let a=0;a<n;a++){let s=Math.pow(2,r);e.push(s);let o=1/(s-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,g=new Float32Array(p*u*d),v=new Float32Array(p*u*d);for(let f=0;f<d;f++){let S=f%3*2/3-1,w=f>2?0:-1,_=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(_,p*u*f);for(let b=0;b<u;b++){let A=c[b*2]*2-1,C=c[b*2+1]*2-1;f===0?Nr.set(1,C,A):f===1?Nr.set(-A,1,-C):f===2?Nr.set(-A,C,1):f===3?Nr.set(-1,C,-A):f===4?Nr.set(-A,-1,C):Nr.set(A,C,-1),Nr.toArray(v,(f*u+b)*p)}}let m=new Ht;m.setAttribute("position",new si(g,p)),m.setAttribute("outputDirection",new si(v,p)),i.push(new Et(m,null)),r>xn&&r--}return{lodMeshes:i,sizeLods:e}}function mc(t,e,i){let r=new gi(t,e,i);return r.texture.mapping=ys,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dn(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function Jv(t,e,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Qv(t,e,i){return new Bi({name:"SphericalGaussianBlur",defines:{SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function gc(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function vc(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fd=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Uu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fa(5,5,5),n=new Bi({name:"CubemapFromEquirect",uniforms:Rn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:nr});n.uniforms.tEquirect.value=e;let a=new Et(r,n),s=e.minFilter;return e.minFilter===Or&&(e.minFilter=Vt),new Zm(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let n=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(n)}};function e_(t){let e=new WeakMap,i=new WeakMap,r=null;function n(u,p=!1){return u==null?null:p?s(u):a(u)}function a(u){if(u&&u.isTexture){let p=u.mapping;if(p===Hs||p===Gs)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new fd(g.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",h),o(v.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,g=p===Hs||p===Gs,v=p===zr||p===bn;if(g||v){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new fc(t)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(r===null&&(r=new fc(t)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===Hs?u.mapping=zr:p===Gs&&(u.mapping=bn),u}function l(u){let p=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function t_(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let n=t.getExtension(r);return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&Mn("WebGLRenderer: "+r+" extension not supported."),n}}}function i_(t,e,i,r){let n={},a=new WeakMap;function s(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete n[u.id];let p=a.get(u);p&&(e.remove(p),a.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let S=p.array;v=p.version;for(let w=0,_=S.length;w<_;w+=3){let b=S[w+0],A=S[w+1],C=S[w+2];u.push(b,A,A,C,C,b)}}else{let S=g.array;v=g.version;for(let w=0,_=S.length/3-1;w<_;w+=3){let b=w+0,A=w+1,C=w+2;u.push(b,A,A,C,C,b)}}let m=new(g.count>=65535?Pu:Cu)(u,1);m.version=v;let f=a.get(d);f&&e.remove(f),a.set(d,m)}function c(d){let u=a.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function r_(t,e,i){let r;function n(d){r=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,u){t.drawElements(r,u,a,d*s),i.update(u,r,1)}function h(d,u,p){p!==0&&(t.drawElementsInstanced(r,u,a,d*s,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,a,d,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];i.update(g,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function n_(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(i.calls++,s){case t.TRIANGLES:i.triangles+=o*(a/3);break;case t.LINES:i.lines+=o*(a/2);break;case t.LINE_STRIP:i.lines+=o*(a-1);break;case t.LINE_LOOP:i.lines+=o*a;break;case t.POINTS:i.points+=o*a;break;default:qe("WebGLInfo: Unknown draw mode:",s);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}function a_(t,e,i){let r=new WeakMap,n=new Ct;function a(s,o,l){let h=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){y.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],_=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let b=o.attributes.position.count*_,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let C=new Float32Array(b*A*4*d),y=new Su(C,b,A,d);y.type=Li,y.needsUpdate=!0;let T=_*4;for(let I=0;I<d;I++){let P=f[I],L=S[I],H=w[I],N=b*A*4*I;for(let U=0;U<P.count;U++){let j=U*T;g===!0&&(n.fromBufferAttribute(P,U),C[N+j+0]=n.x,C[N+j+1]=n.y,C[N+j+2]=n.z,C[N+j+3]=0),v===!0&&(n.fromBufferAttribute(L,U),C[N+j+4]=n.x,C[N+j+5]=n.y,C[N+j+6]=n.z,C[N+j+7]=0),m===!0&&(n.fromBufferAttribute(H,U),C[N+j+8]=n.x,C[N+j+9]=n.y,C[N+j+10]=n.z,C[N+j+11]=H.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new xe(b,A)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:a}}function s_(t,e,i,r,n){let a=new WeakMap;function s(h){let c=n.render.frame,d=h.geometry,u=e.get(h,d);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),a.get(h)!==c&&(i.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,t.ARRAY_BUFFER),a.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return u}function o(){a=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:o}}var o_={[ru]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[lu]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function l_(t,e,i,r,n,a){let s=new gi(e,i,{type:t,depthBuffer:n,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Ht;h.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let c=new Pm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Et(h,c),u=new kl(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,S=[],w=!1;this.setSize=function(_,b){s.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let A=0;A<S.length;A++){let C=S[A];C.setSize&&C.setSize(_,b)}},this.setEffects=function(_){S=_,w=S.length>0&&S[0].isRenderPass===!0;let b=s.width,A=s.height;S.length>0&&o===null&&(o=new gi(b,A,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new gi(b,A,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let y=S[C];y.setSize&&y.setSize(b,A)}},this.begin=function(_,b){if(v||_.toneMapping===Ui&&S.length===0)return!1;if(f=b,b!==null){let A=b.width,C=b.height;(s.width!==A||s.height!==C)&&this.setSize(A,C)}return w===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=Ui,!0},this.hasRenderPass=function(){return w},this.end=function(_,b){_.toneMapping=m,v=!0;let A=s,C=o;for(let y=0;y<S.length;y++){let T=S[y];T.enabled!==!1&&(T.render(_,C,A,b),T.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,c.defines={},rt.getTransfer(p)===ut&&(c.defines.SRGB_TRANSFER="");let y=o_[g];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(f),_.render(d,u),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var md=new vi,Sl=new ha(1,1),gd=new Su,vd=new Af,_d=new Uu,_c=[],xc=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Pn(t,e,i){let r=t[0];if(r<=0||r>0)return t;let n=e*i,a=_c[n];if(a===void 0&&(a=new Float32Array(n),_c[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=i,t[s].toArray(a,o)}return a}function Ut(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function It(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Rs(t,e){let i=xc[e];i===void 0&&(i=new Int32Array(e),xc[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function h_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function c_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ut(i,e))return;t.uniform2fv(this.addr,e),It(i,e)}}function u_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Ut(i,e))return;t.uniform3fv(this.addr,e),It(i,e)}}function d_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ut(i,e))return;t.uniform4fv(this.addr,e),It(i,e)}}function p_(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Ut(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(i,e)}else{if(Ut(i,r))return;Sc.set(r),t.uniformMatrix2fv(this.addr,!1,Sc),It(i,r)}}function f_(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Ut(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(i,e)}else{if(Ut(i,r))return;Mc.set(r),t.uniformMatrix3fv(this.addr,!1,Mc),It(i,r)}}function m_(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Ut(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(i,e)}else{if(Ut(i,r))return;yc.set(r),t.uniformMatrix4fv(this.addr,!1,yc),It(i,r)}}function g_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function v_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ut(i,e))return;t.uniform2iv(this.addr,e),It(i,e)}}function __(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ut(i,e))return;t.uniform3iv(this.addr,e),It(i,e)}}function x_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ut(i,e))return;t.uniform4iv(this.addr,e),It(i,e)}}function y_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function M_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ut(i,e))return;t.uniform2uiv(this.addr,e),It(i,e)}}function S_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ut(i,e))return;t.uniform3uiv(this.addr,e),It(i,e)}}function b_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ut(i,e))return;t.uniform4uiv(this.addr,e),It(i,e)}}function E_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(Sl.compareFunction=i.isReversedDepthBuffer()?Nl:Ll,a=Sl):a=md,i.setTexture2D(e||a,n)}function w_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||vd,n)}function T_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||_d,n)}function R_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||gd,n)}function A_(t){switch(t){case 5126:return h_;case 35664:return c_;case 35665:return u_;case 35666:return d_;case 35674:return p_;case 35675:return f_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return M_;case 36295:return S_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return R_}}function C_(t,e){t.uniform1fv(this.addr,e)}function P_(t,e){let i=Pn(e,this.size,2);t.uniform2fv(this.addr,i)}function L_(t,e){let i=Pn(e,this.size,3);t.uniform3fv(this.addr,i)}function N_(t,e){let i=Pn(e,this.size,4);t.uniform4fv(this.addr,i)}function D_(t,e){let i=Pn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function U_(t,e){let i=Pn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function I_(t,e){let i=Pn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function O_(t,e){t.uniform1iv(this.addr,e)}function F_(t,e){t.uniform2iv(this.addr,e)}function B_(t,e){t.uniform3iv(this.addr,e)}function z_(t,e){t.uniform4iv(this.addr,e)}function V_(t,e){t.uniform1uiv(this.addr,e)}function H_(t,e){t.uniform2uiv(this.addr,e)}function G_(t,e){t.uniform3uiv(this.addr,e)}function k_(t,e){t.uniform4uiv(this.addr,e)}function W_(t,e,i){let r=this.cache,n=e.length,a=Rs(i,n);Ut(r,a)||(t.uniform1iv(this.addr,a),It(r,a));let s;this.type===t.SAMPLER_2D_SHADOW?s=Sl:s=md;for(let o=0;o!==n;++o)i.setTexture2D(e[o]||s,a[o])}function q_(t,e,i){let r=this.cache,n=e.length,a=Rs(i,n);Ut(r,a)||(t.uniform1iv(this.addr,a),It(r,a));for(let s=0;s!==n;++s)i.setTexture3D(e[s]||vd,a[s])}function j_(t,e,i){let r=this.cache,n=e.length,a=Rs(i,n);Ut(r,a)||(t.uniform1iv(this.addr,a),It(r,a));for(let s=0;s!==n;++s)i.setTextureCube(e[s]||_d,a[s])}function X_(t,e,i){let r=this.cache,n=e.length,a=Rs(i,n);Ut(r,a)||(t.uniform1iv(this.addr,a),It(r,a));for(let s=0;s!==n;++s)i.setTexture2DArray(e[s]||gd,a[s])}function Z_(t){switch(t){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return N_;case 35674:return D_;case 35675:return U_;case 35676:return I_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return V_;case 36294:return H_;case 36295:return G_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return X_}}var Y_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}},K_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z_(e.type)}},$_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let n=0,a=r.length;n!==a;++n){let s=r[n];s.setValue(t,e[s.id],i)}}},bo=/(\w+)(\])?(\[|\.)?/g;function bc(t,e){t.seq.push(e),t.map[e.id]=e}function J_(t,e,i){let r=t.name,n=r.length;for(bo.lastIndex=0;;){let a=bo.exec(r),s=bo.lastIndex,o=a[1],l=a[2]==="]",h=a[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===n){bc(i,h===void 0?new Y_(o,t,e):new K_(o,t,e));break}else{let c=i.map[o];c===void 0&&(c=new $_(o),bc(i,c)),i=c}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=t.getActiveUniform(e,a),o=t.getUniformLocation(e,s.name);J_(s,o,this)}let r=[],n=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):n.push(a);r.length>0&&(this.seq=r.concat(n))}setValue(t,e,i,r){let n=this.map[e];n!==void 0&&n.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let n=0,a=e.length;n!==a;++n){let s=e[n],o=i[s.id];o.needsUpdate!==!1&&s.setValue(t,o.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,n=t.length;r!==n;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function Ec(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var Q_=37297,ex=0;function tx(t,e){let i=t.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,i.length);for(let s=n;s<a;s++){let o=s+1;r.push(`${o===e?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var wc=new Ye;function ix(t){rt._getMatrix(wc,rt.workingColorSpace,t);let e=`mat3( ${wc.elements.map(i=>i.toFixed(4))} )`;switch(rt.getTransfer(t)){case fs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Tc(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),n=(t.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return i.toUpperCase()+`

`+n+`

`+tx(t.getShaderSource(e),s)}else return n}function rx(t,e){let i=ix(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var nx={[ru]:"Linear",[nu]:"Reinhard",[au]:"Cineon",[xs]:"ACESFilmic",[ou]:"AgX",[lu]:"Neutral",[su]:"Custom"};function ax(t,e){let i=nx[e];return i===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ka=new V;function sx(){rt.getLuminanceCoefficients(Ka);let t=Ka.x.toFixed(4),e=Ka.y.toFixed(4),i=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kn).join(`
`)}function lx(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function hx(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let a=t.getActiveAttrib(e,n),s=a.name,o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),i[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return i}function Kn(t){return t!==""}function Rc(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(t){return t.replace(cx,dx)}var ux=new Map;function dx(t,e){let i=$e[e];if(i===void 0){let r=ux.get(e);if(r!==void 0)i=$e[r],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bl(i)}var px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(t){return t.replace(px,fx)}function fx(t,e,i,r){let n="";for(let a=parseInt(e);a<parseInt(i);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Pc(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mx={[yn]:"SHADOWMAP_TYPE_PCF",[Zn]:"SHADOWMAP_TYPE_VSM"};function gx(t){return mx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vx={[zr]:"ENVMAP_TYPE_CUBE",[bn]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE_UV"};function _x(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":vx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var xx={[bn]:"ENVMAP_MODE_REFRACTION"};function yx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":xx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mx={[iu]:"ENVMAP_BLENDING_MULTIPLY",[Gp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function Sx(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Mx[t.combine]||"ENVMAP_BLENDING_NONE"}function bx(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ex(t,e,i,r){let n=t.getContext(),a=i.defines,s=i.vertexShader,o=i.fragmentShader,l=gx(i),h=_x(i),c=yx(i),d=Sx(i),u=bx(i),p=ox(i),g=lx(a),v=n.createProgram(),m,f,S=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Kn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Kn).join(`
`),f.length>0&&(f+=`
`)):(m=[Pc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kn).join(`
`),f=[Pc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ui?"#define TONE_MAPPING":"",i.toneMapping!==Ui?$e.tonemapping_pars_fragment:"",i.toneMapping!==Ui?ax("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,rx("linearToOutputTexel",i.outputColorSpace),sx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Kn).join(`
`)),s=bl(s),s=Rc(s,i),s=Ac(s,i),o=bl(o),o=Rc(o,i),o=Ac(o,i),s=Cc(s),o=Cc(o),i.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=S+m+s,_=S+f+o,b=Ec(n,n.VERTEX_SHADER,w),A=Ec(n,n.FRAGMENT_SHADER,_);n.attachShader(v,b),n.attachShader(v,A),i.index0AttributeName!==void 0?n.bindAttribLocation(v,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function C(P){if(t.debug.checkShaderErrors){let L=n.getProgramInfoLog(v)||"",H=n.getShaderInfoLog(b)||"",N=n.getShaderInfoLog(A)||"",U=L.trim(),j=H.trim(),q=N.trim(),ie=!0,K=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,v,b,A);else{let Q=Tc(n,b,"vertex"),$=Tc(n,A,"fragment");qe("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Q+`
`+$)}else U!==""?He("WebGLProgram: Program Info Log:",U):(j===""||q==="")&&(K=!1);K&&(P.diagnostics={runnable:ie,programLog:U,vertexShader:{log:j,prefix:m},fragmentShader:{log:q,prefix:f}})}n.deleteShader(b),n.deleteShader(A),y=new ls(n,v),T=hx(n,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(v,Q_)),I},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}var wx=0,Tx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Rx(t),e.set(t,i)),i}},Rx=class{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}};function Ax(t){return t===Vr||t===cs||t===us}function Cx(t,e,i,r,n,a){let s=new Eu,o=new Tx,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,I,P,L,H){let N=P.fog,U=L.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ie=e.get(y.envMap||j,q),K=ie&&ie.mapping===ys?ie.image.height:null,Q=p[y.type];y.precision!==null&&(u=r.getMaxPrecision(y.precision),u!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Oe=$!==void 0?$.length:0,Me=0;U.morphAttributes.position!==void 0&&(Me=1),U.morphAttributes.normal!==void 0&&(Me=2),U.morphAttributes.color!==void 0&&(Me=3);let Je,Ge,te,de;if(Q){let Nt=Pi[Q];Je=Nt.vertexShader,Ge=Nt.fragmentShader}else{Je=y.vertexShader,Ge=y.fragmentShader;let Nt=o.getVertexShaderStage(y),ht=o.getFragmentShaderStage(y);o.update(y,Nt,ht),te=Nt.id,de=ht.id}let pe=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),Ve=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Ke=!!y.map,ae=!!y.matcap,se=!!ie,me=!!y.aoMap,Se=!!y.lightMap,Te=!!y.bumpMap&&y.wireframe===!1,Ce=!!y.normalMap,ze=!!y.displacementMap,Xe=!!y.emissiveMap,Ze=!!y.metalnessMap,F=!!y.roughnessMap,B=y.anisotropy>0,O=y.clearcoat>0,X=y.dispersion>0,M=y.retroreflectivity>0,x=y.iridescence>0,D=y.sheen>0,G=y.transmission>0,J=B&&!!y.anisotropyMap,re=O&&!!y.clearcoatMap,he=O&&!!y.clearcoatNormalMap,z=O&&!!y.clearcoatRoughnessMap,oe=x&&!!y.iridescenceMap,ge=x&&!!y.iridescenceThicknessMap,Ee=D&&!!y.sheenColorMap,ce=D&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Be=!!y.specularColorMap,je=!!y.specularIntensityMap,lt=G&&!!y.transmissionMap,W=G&&!!y.thicknessMap,ne=!!y.gradientMap,ue=!!y.alphaMap,Re=y.alphaTest>0,Ne=!!y.alphaHash,fe=!!y.extensions,we=Ui;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(we=t.toneMapping);let We={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:Ge,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&L.instanceColor!==null,instancingMorph:Ve&&L.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:ae,envMap:se,envMapMode:se&&ie.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:Se,bumpMap:Te,normalMap:Ce,displacementMap:ze,emissiveMap:Xe,normalMapObjectSpace:Ce&&y.normalMapType===jp,normalMapTangentSpace:Ce&&y.normalMapType===vl,packedNormalMap:Ce&&y.normalMapType===vl&&Ax(y.normalMap.format),metalnessMap:Ze,roughnessMap:F,anisotropy:B,anisotropyMap:J,clearcoat:O,clearcoatMap:re,clearcoatNormalMap:he,clearcoatRoughnessMap:z,dispersion:X,retroreflection:M,iridescence:x,iridescenceMap:oe,iridescenceThicknessMap:ge,sheen:D,sheenColorMap:Ee,sheenRoughnessMap:ce,specularMap:Ie,specularColorMap:Be,specularIntensityMap:je,transmission:G,transmissionMap:lt,thicknessMap:W,gradientMap:ne,opaque:y.transparent===!1&&y.blending===Qn&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:Ne,combine:y.combine,mapUv:Ke&&g(y.map.channel),aoMapUv:me&&g(y.aoMap.channel),lightMapUv:Se&&g(y.lightMap.channel),bumpMapUv:Te&&g(y.bumpMap.channel),normalMapUv:Ce&&g(y.normalMap.channel),displacementMapUv:ze&&g(y.displacementMap.channel),emissiveMapUv:Xe&&g(y.emissiveMap.channel),metalnessMapUv:Ze&&g(y.metalnessMap.channel),roughnessMapUv:F&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:re&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(y.sheenRoughnessMap.channel),specularMapUv:Ie&&g(y.specularMap.channel),specularColorMapUv:Be&&g(y.specularColorMap.channel),specularIntensityMapUv:je&&g(y.specularIntensityMap.channel),transmissionMapUv:lt&&g(y.transmissionMap.channel),thicknessMapUv:W&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||B),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Ke||ue),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Ce===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:Xe&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(T,y),S(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function f(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function w(y){let T=p[y.type],I;if(T){let P=Pi[T];I=Rm.clone(P.uniforms)}else I=y.uniforms;return I}function _(y,T){let I=c.get(T);return I!==void 0?++I.usedTimes:(I=new Ex(t,T,y,n),h.push(I),c.set(T,I)),I}function b(y){if(--y.usedTimes===0){let T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),c.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:C}}function Px(){let t=new WeakMap;function e(s){return t.has(s)}function i(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function r(s){t.delete(s)}function n(s,o,l){t.get(s)[o]=l}function a(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:a}}function Lx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Lc(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nc(){let t=[],e=0,i=[],r=[],n=[];function a(){e=0,i.length=0,r.length=0,n.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,v,m,f){let S=t[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:g,materialVariant:s(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:f},t[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=g,S.materialVariant=s(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function l(u,p,g,v,m,f,S){S.reversedDepth===!0&&(m=-m);let w=o(u,p,g,v,m,f);g.transmission>0?r.push(w):g.transparent===!0?n.push(w):i.push(w)}function h(u,p,g,v,m,f){let S=o(u,p,g,v,m,f);g.transmission>0?r.unshift(S):g.transparent===!0?n.unshift(S):i.unshift(S)}function c(u,p){i.length>1&&i.sort(u||Lx),r.length>1&&r.sort(p||Lc),n.length>1&&n.sort(p||Lc)}function d(){for(let u=e,p=t.length;u<p;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:n,init:a,push:l,unshift:h,finish:d,sort:c}}function Nx(){let t=new WeakMap;function e(r,n){let a=t.get(r),s;return a===void 0?(s=new Nc,t.set(r,[s])):n>=a.length?(s=new Nc,a.push(s)):s=a[n],s}function i(){t=new WeakMap}return{get:e,dispose:i}}function Dx(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new V,color:new tt};break;case"SpotLight":i={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":i={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=i,i}}}function Ux(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var Ix=0;function Ox(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Fx(t){let e=new Dx,i=Ux(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new V);let n=new V,a=new Rt,s=new Rt;function o(h){let c=0,d=0,u=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,w=0,_=0,b=0,A=0,C=0,y=0,T=0,I=0;h.sort(Ox);for(let L=0,H=h.length;L<H;L++){let N=h[L],U=N.color,j=N.intensity,q=N.distance,ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Vr?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)c+=U.r*j,d+=U.g*j,u+=U.b*j;else if(N.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(N.sh.coefficients[K],j);I++}else if(N.isSunLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,$=i.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[g]=$,r.sunShadowMap[g]=ie;let Oe=Q.getViewportCount();for(let Me=0;Me<Oe;Me++)r.sunShadowMatrix[v+Me]=Q.getMatrix(Me),r.sunShadowCascade[v+Me]=Q._cascadeData[Me];v+=Oe,g++}r.sun[p]=K,p++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,$=i.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=ie,r.directionalShadowMatrix[m]=N.shadow.matrix,b++}r.directional[m]=K,m++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(U).multiplyScalar(j),K.distance=q,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,r.spot[S]=K;let Q=N.shadow;if(N.map&&(r.spotLightMap[y]=N.map,y++,Q.updateMatrices(N),N.castShadow&&T++),r.spotLightMatrix[S]=Q.matrix,N.castShadow){let $=i.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,r.spotShadow[S]=$,r.spotShadowMap[S]=ie,C++}S++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy(U).multiplyScalar(j),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=K,w++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let Q=N.shadow,$=i.get(N);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,r.pointShadow[f]=$,r.pointShadowMap[f]=ie,r.pointShadowMatrix[f]=N.shadow.matrix,A++}r.point[f]=K,f++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(j),K.groundColor.copy(N.groundColor).multiplyScalar(j),r.hemi[_]=K,_++}}w>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==S||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==A||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==I)&&(r.sun.length=p,r.directional.length=m,r.spot.length=S,r.rectArea.length=w,r.point.length=f,r.hemi.length=_,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=v,r.sunShadowCascade.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+y-T,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=I,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=S,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=A,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=I,r.version=Ix++)}function l(h,c){let d=0,u=0,p=0,g=0,v=0,m=0,f=c.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){let _=h[S];if(_.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),d++}else if(_.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),u++}else if(_.isSpotLight){let b=r.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let b=r.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),s.identity(),a.copy(_.matrixWorld),a.premultiply(f),s.extractRotation(a),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){let b=r.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Dc(t){let e=new Fx(t),i=[],r=[],n=[];function a(u){d.camera=u,i.length=0,r.length=0,n.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){n.push(u)}function h(){e.setup(i)}function c(u){e.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:h,setupLightsView:c,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Bx(t){let e=new WeakMap;function i(n,a=0){let s=e.get(n),o;return s===void 0?(o=new Dc(t),e.set(n,[o])):a>=s.length?(o=new Dc(t),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:i,dispose:r}}var zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Gx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Uc=new Rt,kn=new V,Eo=new V;function kx(t,e,i){let r=new Il,n=new xe,a=new xe,s=new Ct,o=new Lm,l=new Nm,h={},c=i.maxTextureSize,d={[Br]:Kt,[Kt]:Br,[qt]:qt},u=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:zx,fragmentShader:Vx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yn;let f=this.type;this.render=function(A,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===bp&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yn);let T=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),L=t.state;L.setBlending(nr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=f!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(U=>U.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,U=A.length;N<U;N++){let j=A[N],q=j.shadow;if(q===void 0){He("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let ie=q.getFrameExtents();n.multiply(ie),a.copy(q.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/ie.x),n.x=a.x*ie.x,q.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/ie.y),n.y=a.y*ie.y,q.mapSize.y=a.y));let K=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Zn){if(j.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new gi(n.x,n.y,{format:Vr,type:Fi,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new ha(n.x,n.y,Li),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=sr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ft,q.map.depthTexture.magFilter=Ft}else j.isPointLight?(q.map=new fd(n.x),q.map.depthTexture=new qf(n.x,Oi)):(q.map=new gi(n.x,n.y),q.map.depthTexture=new ha(n.x,n.y,Oi)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=sr,this.type===yn?(q.map.depthTexture.compareFunction=K?Nl:Ll,q.map.depthTexture.minFilter=Vt,q.map.depthTexture.magFilter=Vt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ft,q.map.depthTexture.magFilter=Ft);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==n.x||q.map.height!==n.y)&&q.map.setSize(n.x,n.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,y);for(let $=0;$<Q;$++){let Oe=q.getCamera($);if(j.isPointLight){let Me=q.camera,Je=q.matrix,Ge=j.distance||Me.far;Ge!==Me.far&&(Me.far=Ge,Me.updateProjectionMatrix()),kn.setFromMatrixPosition(j.matrixWorld),Me.position.copy(kn),Eo.copy(Me.position),Eo.add(Hx[$]),Me.up.copy(Gx[$]),Me.lookAt(Eo),Me.updateMatrixWorld(),Je.makeTranslation(-kn.x,-kn.y,-kn.z),Uc.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Uc,Me.coordinateSystem,Me.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,$),t.clear();else{$===0&&(t.setRenderTarget(q.map),t.clear());let Me=q.getViewport($);s.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),L.viewport(s)}r=q.getFrustum($),_(C,y,Oe,j,this.type)}q.isPointLightShadow!==!0&&this.type===Zn&&S(q,y),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,I,P)};function S(A,C){let y=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new gi(n.x,n.y,{format:Vr,type:Fi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,y,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,y,p,v,null)}function w(A,C,y,T){let I=null,P=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=I.uuid,H=C.uuid,N=h[L];N===void 0&&(N={},h[L]=N);let U=N[H];U===void 0&&(U=I.clone(),N[H]=U,C.addEventListener("dispose",b)),I=U}if(I.visible=C.visible,I.wireframe=C.wireframe,T===Zn?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=t.properties.get(I);L.light=y}return I}function _(A,C,y,T,I){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===Zn)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let L=e.update(A),H=A.material;if(Array.isArray(H)){let N=L.groups;for(let U=0,j=N.length;U<j;U++){let q=N[U],ie=H[q.materialIndex];if(ie&&ie.visible){let K=w(A,ie,T,I);A.onBeforeShadow(t,A,C,y,L,K,q),t.renderBufferDirect(y,null,L,K,A,q),A.onAfterShadow(t,A,C,y,L,K,q)}}}else if(H.visible){let N=w(A,H,T,I);A.onBeforeShadow(t,A,C,y,L,N,null),t.renderBufferDirect(y,null,L,N,A,null),A.onAfterShadow(t,A,C,y,L,N,null)}}let P=A.children;for(let L=0,H=P.length;L<H;L++)_(P[L],C,y,T,I)}function b(A){A.target.removeEventListener("dispose",b);for(let C in h){let y=h[C],T=A.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Wx(t,e){function i(){let W=!1,ne=new Ct,ue=null,Re=new Ct(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!W&&(t.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){W=Ne},setClear:function(Ne,fe,we,We,Nt){Nt===!0&&(Ne*=We,fe*=We,we*=We),ne.set(Ne,fe,we,We),Re.equals(ne)===!1&&(t.clearColor(Ne,fe,we,We),Re.copy(ne))},reset:function(){W=!1,ue=null,Re.set(-1,0,0,0)}}}function r(){let W=!1,ne=!1,ue=null,Re=null,Ne=null;return{setReversed:function(fe){if(ne!==fe){let we=e.get("EXT_clip_control");fe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ne=fe;let We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return ne},setTest:function(fe){fe?pe(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(fe){ue!==fe&&!W&&(t.depthMask(fe),ue=fe)},setFunc:function(fe){if(ne&&(fe=sf[fe]),Re!==fe){switch(fe){case Lo:t.depthFunc(t.NEVER);break;case No:t.depthFunc(t.ALWAYS);break;case Do:t.depthFunc(t.LESS);break;case na:t.depthFunc(t.LEQUAL);break;case Uo:t.depthFunc(t.EQUAL);break;case Io:t.depthFunc(t.GEQUAL);break;case Oo:t.depthFunc(t.GREATER);break;case Fo:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=fe}},setLocked:function(fe){W=fe},setClear:function(fe){Ne!==fe&&(Ne=fe,ne&&(fe=1-fe),t.clearDepth(fe))},reset:function(){W=!1,ue=null,Re=null,Ne=null,ne=!1}}}function n(){let W=!1,ne=null,ue=null,Re=null,Ne=null,fe=null,we=null,We=null,Nt=null;return{setTest:function(ht){W||(ht?pe(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(ht){ne!==ht&&!W&&(t.stencilMask(ht),ne=ht)},setFunc:function(ht,Mi,Xi){(ue!==ht||Re!==Mi||Ne!==Xi)&&(t.stencilFunc(ht,Mi,Xi),ue=ht,Re=Mi,Ne=Xi)},setOp:function(ht,Mi,Xi){(fe!==ht||we!==Mi||We!==Xi)&&(t.stencilOp(ht,Mi,Xi),fe=ht,we=Mi,We=Xi)},setLocked:function(ht){W=ht},setClear:function(ht){Nt!==ht&&(t.clearStencil(ht),Nt=ht)},reset:function(){W=!1,ne=null,ue=null,Re=null,Ne=null,fe=null,we=null,We=null,Nt=null}}}let a=new i,s=new r,o=new n,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,g=[],v=null,m=!1,f=null,S=null,w=null,_=null,b=null,A=null,C=null,y=new tt(0,0,0),T=0,I=!1,P=null,L=null,H=null,N=null,U=null,j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ie>=1):K.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ie>=2);let Q=null,$={},Oe=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Je=new Ct().fromArray(Oe),Ge=new Ct().fromArray(Me);function te(W,ne,ue,Re){let Ne=new Uint8Array(4),fe=t.createTexture();t.bindTexture(W,fe),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ue;we++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(ne+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return fe}let de={};de[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(na),Te(!1),Ce(wh),pe(t.CULL_FACE),me(nr);function pe(W){c[W]!==!0&&(t.enable(W),c[W]=!0)}function Ue(W){c[W]!==!1&&(t.disable(W),c[W]=!1)}function Ve(W,ne){return u[W]!==ne?(t.bindFramebuffer(W,ne),u[W]=ne,W===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ne),W===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ne),!0):!1}function _e(W,ne){let ue=g,Re=!1;if(W){ue=p.get(ne),ue===void 0&&(ue=[],p.set(ne,ue));let Ne=W.textures;if(ue.length!==Ne.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,we=Ne.length;fe<we;fe++)ue[fe]=t.COLOR_ATTACHMENT0+fe;ue.length=Ne.length,Re=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&t.drawBuffers(ue)}function Ke(W){return v!==W?(t.useProgram(W),v=W,!0):!1}let ae={[mn]:t.FUNC_ADD,[wp]:t.FUNC_SUBTRACT,[Tp]:t.FUNC_REVERSE_SUBTRACT};ae[Rp]=t.MIN,ae[Ap]=t.MAX;let se={[Cp]:t.ZERO,[Pp]:t.ONE,[Lp]:t.SRC_COLOR,[eu]:t.SRC_ALPHA,[Fp]:t.SRC_ALPHA_SATURATE,[Ip]:t.DST_COLOR,[Dp]:t.DST_ALPHA,[Np]:t.ONE_MINUS_SRC_COLOR,[tu]:t.ONE_MINUS_SRC_ALPHA,[Op]:t.ONE_MINUS_DST_COLOR,[Up]:t.ONE_MINUS_DST_ALPHA,[Bp]:t.CONSTANT_COLOR,[zp]:t.ONE_MINUS_CONSTANT_COLOR,[Vp]:t.CONSTANT_ALPHA,[Hp]:t.ONE_MINUS_CONSTANT_ALPHA};function me(W,ne,ue,Re,Ne,fe,we,We,Nt,ht){if(W===nr){m===!0&&(Ue(t.BLEND),m=!1);return}if(m===!1&&(pe(t.BLEND),m=!0),W!==Ep){if(W!==f||ht!==I){if((S!==mn||b!==mn)&&(t.blendEquation(t.FUNC_ADD),S=mn,b=mn),ht)switch(W){case Qn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Th:t.blendFunc(t.ONE,t.ONE);break;case Rh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ah:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:qe("WebGLState: Invalid blending: ",W);break}else switch(W){case Qn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Th:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",W);break}w=null,_=null,A=null,C=null,y.set(0,0,0),T=0,f=W,I=ht}return}Ne=Ne||ne,fe=fe||ue,we=we||Re,(ne!==S||Ne!==b)&&(t.blendEquationSeparate(ae[ne],ae[Ne]),S=ne,b=Ne),(ue!==w||Re!==_||fe!==A||we!==C)&&(t.blendFuncSeparate(se[ue],se[Re],se[fe],se[we]),w=ue,_=Re,A=fe,C=we),(We.equals(y)===!1||Nt!==T)&&(t.blendColor(We.r,We.g,We.b,Nt),y.copy(We),T=Nt),f=W,I=!1}function Se(W,ne){W.side===qt?Ue(t.CULL_FACE):pe(t.CULL_FACE);let ue=W.side===Kt;ne&&(ue=!ue),Te(ue),W.blending===Qn&&W.transparent===!1?me(nr):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),a.setMask(W.colorWrite);let Re=W.stencilWrite;o.setTest(Re),Re&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(W){P!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),P=W)}function Ce(W){W!==Mp?(pe(t.CULL_FACE),W!==L&&(W===wh?t.cullFace(t.BACK):W===Sp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),L=W}function ze(W){W!==H&&(q&&t.lineWidth(W),H=W)}function Xe(W,ne,ue){W?(pe(t.POLYGON_OFFSET_FILL),(N!==ne||U!==ue)&&(N=ne,U=ue,s.getReversed()&&(ne=-ne),t.polygonOffset(ne,ue))):Ue(t.POLYGON_OFFSET_FILL)}function Ze(W){W?pe(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function F(W){W===void 0&&(W=t.TEXTURE0+j-1),Q!==W&&(t.activeTexture(W),Q=W)}function B(W,ne,ue){ue===void 0&&(Q===null?ue=t.TEXTURE0+j-1:ue=Q);let Re=$[ue];Re===void 0&&(Re={type:void 0,texture:void 0},$[ue]=Re),(Re.type!==W||Re.texture!==ne)&&(Q!==ue&&(t.activeTexture(ue),Q=ue),t.bindTexture(W,ne||de[W]),Re.type=W,Re.texture=ne)}function O(){let W=$[Q];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function X(){try{t.compressedTexImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function M(){try{t.compressedTexImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function x(){try{t.texSubImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function D(){try{t.texSubImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function re(){try{t.texStorage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function he(){try{t.texStorage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function z(){try{t.texImage2D(...arguments)}catch(W){qe("WebGLState:",W)}}function oe(){try{t.texImage3D(...arguments)}catch(W){qe("WebGLState:",W)}}function ge(W){return d[W]!==void 0?d[W]:t.getParameter(W)}function Ee(W,ne){d[W]!==ne&&(t.pixelStorei(W,ne),d[W]=ne)}function ce(W){Je.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),Je.copy(W))}function Ie(W){Ge.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function Be(W,ne){let ue=h.get(ne);ue===void 0&&(ue=new WeakMap,h.set(ne,ue));let Re=ue.get(W);Re===void 0&&(Re=t.getUniformBlockIndex(ne,W.name),ue.set(W,Re))}function je(W,ne){let ue=h.get(ne).get(W);l.get(ne)!==ue&&(t.uniformBlockBinding(ne,ue,W.__bindingPointIndex),l.set(ne,ue))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},Q=null,$={},u={},p=new WeakMap,g=[],v=null,m=!1,f=null,S=null,w=null,_=null,b=null,A=null,C=null,y=new tt(0,0,0),T=0,I=!1,P=null,L=null,H=null,N=null,U=null,Je.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:pe,disable:Ue,bindFramebuffer:Ve,drawBuffers:_e,useProgram:Ke,setBlending:me,setMaterial:Se,setFlipSided:Te,setCullFace:Ce,setLineWidth:ze,setPolygonOffset:Xe,setScissorTest:Ze,activeTexture:F,bindTexture:B,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:M,texImage2D:z,texImage3D:oe,pixelStorei:Ee,getParameter:ge,updateUBOMapping:Be,uniformBlockBinding:je,texStorage2D:re,texStorage3D:he,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:ce,viewport:Ie,reset:lt}}function qx(t,e,i,r,n,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xe,c=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return g?new OffscreenCanvas(M,x):ms("canvas")}function m(M,x,D){let G=1,J=X(M);if((J.width>D||J.height>D)&&(G=D/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let re=Math.floor(G*J.width),he=Math.floor(G*J.height);u===void 0&&(u=v(re,he));let z=x?v(re,he):u;return z.width=re,z.height=he,z.getContext("2d").drawImage(M,0,0,re,he),He("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+he+")."),z}else return"data"in M&&He("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function f(M){return M.generateMipmaps}function S(M){t.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(M,x,D,G,J,re=!1){if(M!==null){if(t[M]!==void 0)return t[M];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=x;if(x===t.RED&&(D===t.FLOAT&&(z=t.R32F),D===t.HALF_FLOAT&&(z=t.R16F),D===t.UNSIGNED_BYTE&&(z=t.R8),D===t.UNSIGNED_SHORT&&he&&(z=he.R16_EXT),D===t.SHORT&&he&&(z=he.R16_SNORM_EXT)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.R8UI),D===t.UNSIGNED_SHORT&&(z=t.R16UI),D===t.UNSIGNED_INT&&(z=t.R32UI),D===t.BYTE&&(z=t.R8I),D===t.SHORT&&(z=t.R16I),D===t.INT&&(z=t.R32I)),x===t.RG&&(D===t.FLOAT&&(z=t.RG32F),D===t.HALF_FLOAT&&(z=t.RG16F),D===t.UNSIGNED_BYTE&&(z=t.RG8),D===t.UNSIGNED_SHORT&&he&&(z=he.RG16_EXT),D===t.SHORT&&he&&(z=he.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RG8UI),D===t.UNSIGNED_SHORT&&(z=t.RG16UI),D===t.UNSIGNED_INT&&(z=t.RG32UI),D===t.BYTE&&(z=t.RG8I),D===t.SHORT&&(z=t.RG16I),D===t.INT&&(z=t.RG32I)),x===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGB8UI),D===t.UNSIGNED_SHORT&&(z=t.RGB16UI),D===t.UNSIGNED_INT&&(z=t.RGB32UI),D===t.BYTE&&(z=t.RGB8I),D===t.SHORT&&(z=t.RGB16I),D===t.INT&&(z=t.RGB32I)),x===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),D===t.UNSIGNED_INT&&(z=t.RGBA32UI),D===t.BYTE&&(z=t.RGBA8I),D===t.SHORT&&(z=t.RGBA16I),D===t.INT&&(z=t.RGBA32I)),x===t.RGB&&(D===t.UNSIGNED_SHORT&&he&&(z=he.RGB16_EXT),D===t.SHORT&&he&&(z=he.RGB16_SNORM_EXT),D===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(z=t.R11F_G11F_B10F)),x===t.RGBA){let oe=re?fs:rt.getTransfer(J);D===t.FLOAT&&(z=t.RGBA32F),D===t.HALF_FLOAT&&(z=t.RGBA16F),D===t.UNSIGNED_BYTE&&(z=oe===ut?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT&&he&&(z=he.RGBA16_EXT),D===t.SHORT&&he&&(z=he.RGBA16_SNORM_EXT),D===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(M,x){let D;return M?x===null||x===Oi||x===sa?D=t.DEPTH24_STENCIL8:x===Li?D=t.DEPTH32F_STENCIL8:x===aa&&(D=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===sa?D=t.DEPTH_COMPONENT24:x===Li?D=t.DEPTH_COMPONENT32F:x===aa&&(D=t.DEPTH_COMPONENT16),D}function A(M,x){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ft&&M.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function C(M){let x=M.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&c.delete(x),x.isHTMLTexture&&d.delete(x)}function y(M){let x=M.target;x.removeEventListener("dispose",y),P(x)}function T(M){let x=r.get(M);if(x.__webglInit===void 0)return;let D=M.source,G=p.get(D);if(G){let J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(M),Object.keys(G).length===0&&p.delete(D)}r.remove(M)}function I(M){let x=r.get(M);t.deleteTexture(x.__webglTexture);let D=M.source,G=p.get(D);delete G[x.__cacheKey],s.memory.textures--}function P(M){let x=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[G][J]);else t.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)t.deleteFramebuffer(x.__webglFramebuffer[G]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=M.textures;for(let G=0,J=D.length;G<J;G++){let re=r.get(D[G]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),r.remove(D[G])}r.remove(M)}let L=0;function H(){L=0}function N(){return L}function U(M){L=M}function j(){let M=L;return M>=n.maxTextures&&He("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,M}function q(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function ie(M,x){let D=r.get(M);if(M.isVideoTexture&&B(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){let G=M.image;if(G===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(D,M,x);return}}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function K(M,x){let D=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Ue(D,M,x);return}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function Q(M,x){let D=r.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Ue(D,M,x);return}i.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function $(M,x){let D=r.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){Ve(D,M,x);return}i.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}let Oe={[Bo]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[zo]:t.MIRRORED_REPEAT},Me={[Ft]:t.NEAREST,[Wp]:t.NEAREST_MIPMAP_NEAREST,[Ea]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[ks]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR},Je={[Zp]:t.NEVER,[Qp]:t.ALWAYS,[Yp]:t.LESS,[Ll]:t.LEQUAL,[Kp]:t.EQUAL,[Nl]:t.GEQUAL,[$p]:t.GREATER,[Jp]:t.NOTEQUAL};function Ge(M,x){if(x.type===Li&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===ks||x.magFilter===Ea||x.magFilter===Or||x.minFilter===Vt||x.minFilter===ks||x.minFilter===Ea||x.minFilter===Or)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,Oe[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,Oe[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,Oe[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Je[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==Ea&&x.minFilter!==Or||x.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function te(M,x){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",C));let G=x.source,J=p.get(G);J===void 0&&(J={},p.set(G,J));let re=q(x);if(re!==M.__cacheKey){J[re]===void 0&&(J[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,D=!0),J[re].usedTimes++;let he=J[M.__cacheKey];he!==void 0&&(J[M.__cacheKey].usedTimes--,he.usedTimes===0&&I(x)),M.__cacheKey=re,M.__webglTexture=J[re].texture}return D}function de(M,x,D){return Math.floor(Math.floor(M/D)/x)}function pe(M,x,D,G){let J=M.updateRanges;if(J.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,D,G,x.data);else{J.sort((ge,Ee)=>ge.start-Ee.start);let re=0;for(let ge=1;ge<J.length;ge++){let Ee=J[re],ce=J[ge],Ie=Ee.start+Ee.count,Be=de(ce.start,x.width,4),je=de(Ee.start,x.width,4);ce.start<=Ie+1&&Be===je&&de(ce.start+ce.count-1,x.width,4)===Be?Ee.count=Math.max(Ee.count,ce.start+ce.count-Ee.start):(++re,J[re]=ce)}J.length=re+1;let he=i.getParameter(t.UNPACK_ROW_LENGTH),z=i.getParameter(t.UNPACK_SKIP_PIXELS),oe=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let ge=0,Ee=J.length;ge<Ee;ge++){let ce=J[ge],Ie=Math.floor(ce.start/4),Be=Math.ceil(ce.count/4),je=Ie%x.width,lt=Math.floor(Ie/x.width),W=Be;i.pixelStorei(t.UNPACK_SKIP_PIXELS,je),i.pixelStorei(t.UNPACK_SKIP_ROWS,lt),i.texSubImage2D(t.TEXTURE_2D,0,je,lt,W,1,D,G,x.data)}M.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,he),i.pixelStorei(t.UNPACK_SKIP_PIXELS,z),i.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function Ue(M,x,D){let G=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=t.TEXTURE_3D);let J=te(M,x),re=x.source;i.bindTexture(G,M.__webglTexture,t.TEXTURE0+D);let he=r.get(re);if(re.version!==he.__version||J===!0){if(i.activeTexture(t.TEXTURE0+D),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){let ne=rt.getPrimaries(rt.workingColorSpace),ue=x.colorSpace===Sr?null:rt.getPrimaries(x.colorSpace),Re=x.colorSpace===Sr||ne===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}i.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let z=m(x.image,!1,n.maxTextureSize);z=O(x,z);let oe=a.convert(x.format,x.colorSpace),ge=a.convert(x.type),Ee=_(x.internalFormat,oe,ge,x.normalized,x.colorSpace,x.isVideoTexture);Ge(G,x);let ce,Ie=x.mipmaps,Be=x.isVideoTexture!==!0,je=he.__version===void 0||J===!0,lt=re.dataReady,W=A(x,z);if(x.isDepthTexture)Ee=b(x.format===Fr,x.type),je&&(Be?i.texStorage2D(t.TEXTURE_2D,1,Ee,z.width,z.height):i.texImage2D(t.TEXTURE_2D,0,Ee,z.width,z.height,0,oe,ge,null));else if(x.isDataTexture)if(Ie.length>0){Be&&je&&i.texStorage2D(t.TEXTURE_2D,W,Ee,Ie[0].width,Ie[0].height);for(let ne=0,ue=Ie.length;ne<ue;ne++)ce=Ie[ne],Be?lt&&i.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,oe,ge,ce.data):i.texImage2D(t.TEXTURE_2D,ne,Ee,ce.width,ce.height,0,oe,ge,ce.data);x.generateMipmaps=!1}else Be?(je&&i.texStorage2D(t.TEXTURE_2D,W,Ee,z.width,z.height),lt&&pe(x,z,oe,ge)):i.texImage2D(t.TEXTURE_2D,0,Ee,z.width,z.height,0,oe,ge,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&je&&i.texStorage3D(t.TEXTURE_2D_ARRAY,W,Ee,Ie[0].width,Ie[0].height,z.depth);for(let ne=0,ue=Ie.length;ne<ue;ne++)if(ce=Ie[ne],x.format!==mi)if(oe!==null)if(Be){if(lt)if(x.layerUpdates.size>0){let Re=dc(ce.width,ce.height,x.format,x.type);for(let Ne of x.layerUpdates){let fe=ce.data.subarray(Ne*Re/ce.data.BYTES_PER_ELEMENT,(Ne+1)*Re/ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ne,ce.width,ce.height,1,oe,fe)}}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,z.depth,oe,ce.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Ee,ce.width,ce.height,z.depth,0,ce.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?lt&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,z.depth,oe,ge,ce.data):i.texImage3D(t.TEXTURE_2D_ARRAY,ne,Ee,ce.width,ce.height,z.depth,0,oe,ge,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Be&&je&&i.texStorage2D(t.TEXTURE_2D,W,Ee,Ie[0].width,Ie[0].height);for(let ne=0,ue=Ie.length;ne<ue;ne++)ce=Ie[ne],x.format!==mi?oe!==null?Be?lt&&i.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,oe,ce.data):i.compressedTexImage2D(t.TEXTURE_2D,ne,Ee,ce.width,ce.height,0,ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?lt&&i.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce.width,ce.height,oe,ge,ce.data):i.texImage2D(t.TEXTURE_2D,ne,Ee,ce.width,ce.height,0,oe,ge,ce.data)}else if(x.isDataArrayTexture)if(Be){if(je&&i.texStorage3D(t.TEXTURE_2D_ARRAY,W,Ee,z.width,z.height,z.depth),lt)if(x.layerUpdates.size>0){let ne=dc(z.width,z.height,x.format,x.type);for(let ue of x.layerUpdates){let Re=z.data.subarray(ue*ne/z.data.BYTES_PER_ELEMENT,(ue+1)*ne/z.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,z.width,z.height,1,oe,ge,Re)}x.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,oe,ge,z.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,z.width,z.height,z.depth,0,oe,ge,z.data);else if(x.isData3DTexture)Be?(je&&i.texStorage3D(t.TEXTURE_3D,W,Ee,z.width,z.height,z.depth),lt&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,oe,ge,z.data)):i.texImage3D(t.TEXTURE_3D,0,Ee,z.width,z.height,z.depth,0,oe,ge,z.data);else if(x.isFramebufferTexture){if(je)if(Be)i.texStorage2D(t.TEXTURE_2D,W,Ee,z.width,z.height);else{let ne=z.width,ue=z.height;for(let Re=0;Re<W;Re++)i.texImage2D(t.TEXTURE_2D,Re,Ee,ne,ue,0,oe,ge,null),ne>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),z.parentNode!==ne){ne.appendChild(z),d.add(x),ne.onpaint=ue=>{let Re=ue.changedElements;for(let Ne of d)Re.includes(Ne.image)&&(Ne.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,z);else{let ue=t.RGBA,Re=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ue,Re,Ne,z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&je){let ne=X(Ie[0]);i.texStorage2D(t.TEXTURE_2D,W,Ee,ne.width,ne.height)}for(let ne=0,ue=Ie.length;ne<ue;ne++)ce=Ie[ne],Be?lt&&i.texSubImage2D(t.TEXTURE_2D,ne,0,0,oe,ge,ce):i.texImage2D(t.TEXTURE_2D,ne,Ee,oe,ge,ce);x.generateMipmaps=!1}else if(Be){if(je){let ne=X(z);i.texStorage2D(t.TEXTURE_2D,W,Ee,ne.width,ne.height)}lt&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,ge,z)}else i.texImage2D(t.TEXTURE_2D,0,Ee,oe,ge,z);f(x)&&S(G),he.__version=re.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Ve(M,x,D){if(x.image.length!==6)return;let G=te(M,x),J=x.source;i.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+D);let re=r.get(J);if(J.version!==re.__version||G===!0){i.activeTexture(t.TEXTURE0+D);let he=rt.getPrimaries(rt.workingColorSpace),z=x.colorSpace===Sr?null:rt.getPrimaries(x.colorSpace),oe=x.colorSpace===Sr||he===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ge=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let fe=0;fe<6;fe++)!ge&&!Ee?ce[fe]=m(x.image[fe],!0,n.maxCubemapSize):ce[fe]=Ee?x.image[fe].image:x.image[fe],ce[fe]=O(x,ce[fe]);let Ie=ce[0],Be=a.convert(x.format,x.colorSpace),je=a.convert(x.type),lt=_(x.internalFormat,Be,je,x.normalized,x.colorSpace),W=x.isVideoTexture!==!0,ne=re.__version===void 0||G===!0,ue=J.dataReady,Re=A(x,Ie);Ge(t.TEXTURE_CUBE_MAP,x);let Ne;if(ge){W&&ne&&i.texStorage2D(t.TEXTURE_CUBE_MAP,Re,lt,Ie.width,Ie.height);for(let fe=0;fe<6;fe++){Ne=ce[fe].mipmaps;for(let we=0;we<Ne.length;we++){let We=Ne[we];x.format!==mi?Be!==null?W?ue&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we,0,0,We.width,We.height,Be,We.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we,lt,We.width,We.height,0,We.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ue&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we,0,0,We.width,We.height,Be,je,We.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we,lt,We.width,We.height,0,Be,je,We.data)}}}else{if(Ne=x.mipmaps,W&&ne){Ne.length>0&&Re++;let fe=X(ce[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,Re,lt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ee){W?ue&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ce[fe].width,ce[fe].height,Be,je,ce[fe].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,ce[fe].width,ce[fe].height,0,Be,je,ce[fe].data);for(let we=0;we<Ne.length;we++){let We=Ne[we].image[fe].image;W?ue&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we+1,0,0,We.width,We.height,Be,je,We.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we+1,lt,We.width,We.height,0,Be,je,We.data)}}else{W?ue&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,je,ce[fe]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Be,je,ce[fe]);for(let we=0;we<Ne.length;we++){let We=Ne[we];W?ue&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we+1,0,0,Be,je,We.image[fe]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we+1,lt,Be,je,We.image[fe])}}}f(x)&&S(t.TEXTURE_CUBE_MAP),re.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _e(M,x,D,G,J,re){let he=a.convert(D.format,D.colorSpace),z=a.convert(D.type),oe=_(D.internalFormat,he,z,D.normalized,D.colorSpace),ge=r.get(x),Ee=r.get(D);if(Ee.__renderTarget=x,!ge.__hasExternalTextures){let ce=Math.max(1,x.width>>re),Ie=Math.max(1,x.height>>re);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?i.texImage3D(J,re,oe,ce,Ie,x.depth,0,he,z,null):i.texImage2D(J,re,oe,ce,Ie,0,he,z,null)}i.bindFramebuffer(t.FRAMEBUFFER,M),F(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,J,Ee.__webglTexture,0,Ze(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,J,Ee.__webglTexture,re),i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(M,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){let G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,re=b(x.stencilBuffer,J),he=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;F(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(x),re,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(x),re,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,re,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,M)}else{let G=x.textures;for(let J=0;J<G.length;J++){let re=G[J],he=a.convert(re.format,re.colorSpace),z=a.convert(re.type),oe=_(re.internalFormat,he,z,re.normalized,re.colorSpace);F(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(x),oe,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(M,x,D){let G=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=r.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x.depthTexture);let ge=a.convert(x.depthTexture.format),Ee=a.convert(x.depthTexture.type),ce;x.depthTexture.format===sr?ce=t.DEPTH_COMPONENT24:x.depthTexture.format===Fr&&(ce=t.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,ce,x.width,x.height,0,ge,Ee,null)}}else ie(x.depthTexture,0);let re=J.__webglTexture,he=Ze(x),z=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,oe=x.depthTexture.format===Fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===sr)F(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,z,re,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,oe,z,re,0);else if(x.depthTexture.format===Fr)F(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,z,re,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,oe,z,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(M){let x=r.get(M),D=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let G=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let G=0;G<6;G++)ae(x.__webglFramebuffer[G],M,G);else{let G=M.texture.mipmaps;G&&G.length>0?ae(x.__webglFramebuffer[0],M,0):ae(x.__webglFramebuffer,M,0)}else if(D){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=t.createRenderbuffer(),Ke(x.__webglDepthbuffer[G],M,!1);else{let J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,re)}}else{let G=M.texture.mipmaps;if(G&&G.length>0?i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ke(x.__webglDepthbuffer,M,!1);else{let J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,re)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function me(M,x,D){let G=r.get(M);x!==void 0&&_e(G.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&se(M)}function Se(M){let x=M.texture,D=r.get(M),G=r.get(x);M.addEventListener("dispose",y);let J=M.textures,re=M.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=x.version,s.memory.textures++),re){D.__webglFramebuffer=[];for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[z]=[];for(let oe=0;oe<x.mipmaps.length;oe++)D.__webglFramebuffer[z][oe]=t.createFramebuffer()}else D.__webglFramebuffer[z]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let z=0;z<x.mipmaps.length;z++)D.__webglFramebuffer[z]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(he)for(let z=0,oe=J.length;z<oe;z++){let ge=r.get(J[z]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),s.memory.textures++)}if(M.samples>0&&F(M)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let z=0;z<J.length;z++){let oe=J[z];D.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[z]);let ge=a.convert(oe.format,oe.colorSpace),Ee=a.convert(oe.type),ce=_(oe.internalFormat,ge,Ee,oe.normalized,oe.colorSpace,M.isXRRenderTarget===!0),Ie=Ze(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,D.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Ke(D.__webglDepthRenderbuffer,M,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){i.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let z=0;z<6;z++)if(x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)_e(D.__webglFramebuffer[z][oe],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,oe);else _e(D.__webglFramebuffer[z],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);f(x)&&S(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(he){for(let z=0,oe=J.length;z<oe;z++){let ge=J[z],Ee=r.get(ge),ce=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ce,Ee.__webglTexture),Ge(ce,ge),_e(D.__webglFramebuffer,M,ge,t.COLOR_ATTACHMENT0+z,ce,0),f(ge)&&S(ce)}i.unbindTexture()}else{let z=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(z=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(z,G.__webglTexture),Ge(z,x),x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)_e(D.__webglFramebuffer[oe],M,x,t.COLOR_ATTACHMENT0,z,oe);else _e(D.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,z,0);f(x)&&S(z),i.unbindTexture()}M.depthBuffer&&se(M)}function Te(M){let x=M.textures;for(let D=0,G=x.length;D<G;D++){let J=x[D];if(f(J)){let re=w(M),he=r.get(J).__webglTexture;i.bindTexture(re,he),S(re),i.unbindTexture()}}}let Ce=[],ze=[];function Xe(M){if(M.samples>0){if(F(M)===!1){let x=M.textures,D=M.width,G=M.height,J=t.COLOR_BUFFER_BIT,re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=r.get(M),z=x.length>1;if(z)for(let ge=0;ge<x.length;ge++)i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let oe=M.texture.mipmaps;oe&&oe.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let Ee=r.get(x[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,D,G,0,0,D,G,J,t.NEAREST),l===!0&&(Ce.length=0,ze.length=0,Ce.push(t.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(Ce.push(re),ze.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let ge=0;ge<x.length;ge++){i.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,he.__webglColorRenderbuffer[ge]);let Ee=r.get(x[ge]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ee,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Ze(M){return Math.min(n.maxSamples,M.samples)}function F(M){let x=r.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(M){let x=s.render.frame;c.get(M)!==x&&(c.set(M,x),M.update())}function O(M,x){let D=M.colorSpace,G=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==ps&&D!==Sr&&(rt.getTransfer(D)===ut?(G!==mi||J!==ti)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",D)),x}function X(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=me,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function jx(t,e){function i(r,n=Sr){let a,s=rt.getTransfer(n);if(r===ti)return t.UNSIGNED_BYTE;if(r===Tl)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Rl)return t.UNSIGNED_SHORT_5_5_5_1;if(r===du)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===pu)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===cu)return t.BYTE;if(r===uu)return t.SHORT;if(r===aa)return t.UNSIGNED_SHORT;if(r===wl)return t.INT;if(r===Oi)return t.UNSIGNED_INT;if(r===Li)return t.FLOAT;if(r===Fi)return t.HALF_FLOAT;if(r===fu)return t.ALPHA;if(r===mu)return t.RGB;if(r===mi)return t.RGBA;if(r===sr)return t.DEPTH_COMPONENT;if(r===Fr)return t.DEPTH_STENCIL;if(r===gu)return t.RED;if(r===Al)return t.RED_INTEGER;if(r===Vr)return t.RG;if(r===Cl)return t.RG_INTEGER;if(r===Pl)return t.RGBA_INTEGER;if(r===is||r===rs||r===ns||r===as)if(s===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===is)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===is)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===as)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vo||r===Ho||r===Go||r===ko)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Vo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wo||r===qo||r===jo||r===Xo||r===Zo||r===cs||r===Yo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wo||r===qo)return s===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===jo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xo)return a.COMPRESSED_R11_EAC;if(r===Zo)return a.COMPRESSED_SIGNED_R11_EAC;if(r===cs)return a.COMPRESSED_RG11_EAC;if(r===Yo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ko||r===$o||r===Jo||r===Qo||r===el||r===tl||r===il||r===rl||r===nl||r===al||r===sl||r===ol||r===ll||r===hl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ko)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$o)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qo)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===el)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tl)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===il)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rl)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nl)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===al)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sl)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ol)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ll)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hl)return s===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cl||r===ul||r===dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cl)return s===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pl||r===fl||r===us||r===ml)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===pl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===us)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ml)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,Yx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bi({vertexShader:Xx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Qu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kx=class extends Gr{constructor(t,e){super();let i=this,r=null,n=1,a=null,s="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",v=new Yx,m={},f=e.getContextAttributes(),S=null,w=null,_=[],b=[],A=new xe,C=null,y=null,T=new Yt;T.viewport=new Ct;let I=new Yt;I.viewport=new Ct;let P=[T,I],L=new Ym,H=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=_[te];return de===void 0&&(de=new $s,_[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=_[te];return de===void 0&&(de=new $s,_[te]=de),de.getGripSpace()},this.getHand=function(te){let de=_[te];return de===void 0&&(de=new $s,_[te]=de),de.getHandSpace()};function U(te){let de=b.indexOf(te.inputSource);if(de===-1)return;let pe=_[de];pe!==void 0&&(pe.update(te.inputSource,te.frame,l||a),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",q);for(let te=0;te<_.length;te++){let de=b[te];de!==null&&(b[te]=null,_[te].disconnect(de))}H=null,N=null,v.reset();for(let te in m)delete m[te];if(t.setRenderTarget(S),u=null,d=null,c=null,r=null,w=null,Ge.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),y!==null){let te=y.camera;te.fov=y.fov,te.zoom=y.zoom,te.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){n=te,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){s=te,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,e)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,pe=null,Ue=null;f.depth&&(Ue=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,de=f.stencil?Fr:sr,pe=f.stencil?sa:Oi);let Ve={colorFormat:e.RGBA8,depthFormat:Ue,scaleFactor:n};c=this.getBinding(),d=c.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new gi(d.textureWidth,d.textureHeight,{format:mi,type:ti,depthTexture:new ha(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};u=new XRWebGLLayer(r,e,de),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new gi(u.framebufferWidth,u.framebufferHeight,{format:mi,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(s),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(te){for(let de=0;de<te.removed.length;de++){let pe=te.removed[de],Ue=b.indexOf(pe);Ue>=0&&(b[Ue]=null,_[Ue].disconnect(pe))}for(let de=0;de<te.added.length;de++){let pe=te.added[de],Ue=b.indexOf(pe);if(Ue===-1){for(let _e=0;_e<_.length;_e++)if(_e>=b.length){b.push(pe),Ue=_e;break}else if(b[_e]===null){b[_e]=pe,Ue=_e;break}if(Ue===-1)break}let Ve=_[Ue];Ve&&Ve.connect(pe)}}let ie=new V,K=new V;function Q(te,de,pe){ie.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);let Ue=ie.distanceTo(K),Ve=de.projectionMatrix.elements,_e=pe.projectionMatrix.elements,Ke=Ve[14]/(Ve[10]-1),ae=Ve[14]/(Ve[10]+1),se=(Ve[9]+1)/Ve[5],me=(Ve[9]-1)/Ve[5],Se=(Ve[8]-1)/Ve[0],Te=(_e[8]+1)/_e[0],Ce=Ke*Se,ze=Ke*Te,Xe=Ue/(-Se+Te),Ze=Xe*-Se;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(Xe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let F=Ke+Xe,B=ae+Xe,O=Ce-Ze,X=ze+(Ue-Ze),M=se*ae/B*F,x=me*ae/B*F;te.projectionMatrix.makePerspective(O,X,M,x,F,B),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function $(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,pe=te.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),L.near=I.near=T.near=de,L.far=I.far=T.far=pe,(H!==L.near||N!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,N=L.far),L.layers.mask=te.layers.mask|6,T.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;let Ue=te.parent,Ve=L.cameras;$(L,Ue);for(let _e=0;_e<Ve.length;_e++)$(Ve[_e],Ue);Ve.length===2?Q(L,T,I):L.projectionMatrix.copy(T.projectionMatrix),y===null&&te.isPerspectiveCamera&&(y={camera:te,fov:te.fov,zoom:te.zoom}),Oe(te,L,Ue)};function Oe(te,de,pe){pe===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=la*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(te){o=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(te){return m[te]};let Me=null;function Je(te,de){if(h=de.getViewerPose(l||a),p=de,h!==null){let pe=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let Ue=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let _e=0;_e<pe.length;_e++){let Ke=pe[_e],ae=null;if(u!==null)ae=u.getViewport(Ke);else{let me=c.getViewSubImage(d,Ke);ae=me.viewport,_e===0&&(t.setRenderTargetTextures(w,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(w))}let se=P[_e];se===void 0&&(se=new Yt,se.layers.enable(_e),se.viewport=new Ct,P[_e]=se),se.matrix.fromArray(Ke.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ke.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ae.x,ae.y,ae.width,ae.height),_e===0&&(L.matrix.copy(se.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(se)}let Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=i.getBinding();let _e=c.getDepthInformation(pe[0]);_e&&_e.isValid&&_e.texture&&v.init(_e,r.renderState)}if(Ve&&Ve.includes("camera-access")&&g){t.state.unbindTexture(),c=i.getBinding();for(let _e=0;_e<pe.length;_e++){let Ke=pe[_e].camera;if(Ke){let ae=m[Ke];ae||(ae=new Iu,m[Ke]=ae);let se=c.getCameraImage(Ke);ae.sourceTexture=se}}}}for(let pe=0;pe<_.length;pe++){let Ue=b[pe],Ve=_[pe];Ue!==null&&Ve!==void 0&&Ve.update(Ue,de,l||a)}Me&&Me(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),p=null}let Ge=new dd;Ge.setAnimationLoop(Je),this.setAnimationLoop=function(te){Me=te},this.dispose=function(){}}},$x=new Rt,xd=new Ye;xd.set(-1,0,0,0,1,0,0,0,1);function Jx(t,e){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,rd(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,S,w,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),w=S.envMap,_=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Qx(t,e,i,r){let n={},a={},s=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let A=b.program;r.uniformBlockBinding(_,A)}function h(_,b){let A=n[_.id];A===void 0&&(m(_),A=c(_),n[_.id]=A,_.addEventListener("dispose",S));let C=b.program;r.updateUBOMapping(_,C);let y=e.render.frame;a[_.id]!==y&&(u(_),a[_.id]=y)}function c(_){let b=d();_.__bindingPointIndex=b;let A=t.createBuffer(),C=_.__size,y=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,A),A}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=n[_.id],A=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let y=0,T=A.length;y<T;y++){let I=A[y];if(Array.isArray(I))for(let P=0,L=I.length;P<L;P++)p(I[P],y,P,C);else p(I,y,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,b,A,C){if(v(_,b,A,C)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let I=0;for(let P=0;P<T.length;P++){let L=T[P],H=f(L);g(L,_.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,_.__data)}}function g(_,b,A){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,A)}function v(_,b,A,C){let y=_.value,T=b+"_"+A;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let I=C[T];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(_){let b=_.uniforms,A=0,C=16;for(let T=0,I=b.length;T<I;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,H=P.length;L<H;L++){let N=P[L],U=Array.isArray(N.value)?N.value:[N.value];for(let j=0,q=U.length;j<q;j++){let ie=U[j],K=f(ie),Q=A%C,$=Q%K.boundary,Oe=Q+$;A+=$,Oe!==0&&C-Oe<K.storage&&(A+=C-Oe),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=K.storage}}}let y=A%C;return y>0&&(A+=C-y),_.__size=A,_.__cache={},this}function f(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){let b=_.target;b.removeEventListener("dispose",S);let A=s.indexOf(b.__bindingPointIndex);s.splice(A,1),t.deleteBuffer(n[b.id]),delete n[b.id],delete a[b.id]}function w(){for(let _ in n)t.deleteBuffer(n[_]);s=[],n={},a={}}return{bind:l,update:h,dispose:w}}var ey=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function ty(){return Ei===null&&(Ei=new kf(ey,16,16,Vr,Fi),Ei.name="DFG_LUT",Ei.minFilter=Vt,Ei.magFilter=Vt,Ei.wrapS=rr,Ei.wrapT=rr,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var yd=class{constructor(t={}){let{canvas:e=nf(),context:i=null,depth:r=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ti}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=u,v=new Set([Pl,Cl,Al]),m=new Set([ti,Oi,aa,sa,Tl,Rl]),f=new Uint32Array(4),S=new Int32Array(4),w=new V,_=null,b=null,A=[],C=[],y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,P=null,L=null,H=null,N=null;this._outputColorSpace=Zt;let U=0,j=0,q=null,ie=-1,K=null,Q=new Ct,$=new Ct,Oe=null,Me=new tt(0),Je=0,Ge=e.width,te=e.height,de=1,pe=null,Ue=null,Ve=new Ct(0,0,Ge,te),_e=new Ct(0,0,Ge,te),Ke=!1,ae=new Il,se=!1,me=!1,Se=new Rt,Te=new V,Ce=new Ct,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ze(){return q===null?de:1}let F=i;function B(E,k){return e.getContext(E,k)}let O,X,M,x,D,G,J,re,he,z,oe,ge,Ee,ce,Ie,Be,je,lt,W,ne,ue,Re,Ne;try{let E={alpha:!0,depth:r,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",We,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){let k="webgl2";if(F=B(k,E),F===null)throw B(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}fe()}catch(E){throw e.removeEventListener("webglcontextlost",We,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),qe("WebGLRenderer: "+E.message),E}function fe(){O=new t_(F),O.init(),ue=new jx(F,O),X=new qv(F,O,t,ue),M=new Wx(F,O),X.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),L=F.createFramebuffer(),H=F.createFramebuffer(),N=F.createFramebuffer(),x=new n_(F),D=new Px,G=new qx(F,O,M,D,X,ue,x),J=new e_(T),re=new sg(F),Re=new kv(F,re),he=new i_(F,re,x,Re),z=new s_(F,he,re,Re,x),lt=new a_(F,X,G),Ie=new jv(D),oe=new Cx(T,J,O,X,Re,Ie),ge=new Jx(T,D),Ee=new Nx,ce=new Bx(O),je=new Gv(T,J,M,z,p,o),Be=new kx(T,z,X),Ne=new Qx(F,x,X,M),W=new Wv(F,O,x),ne=new r_(F,O,x),x.programs=oe.programs,T.capabilities=X,T.extensions=O,T.properties=D,T.renderLists=Ee,T.shadowMap=Be,T.state=M,T.info=x}g!==ti&&(y=new l_(g,e.width,e.height,s,r,n));let we=new Kx(T,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=O.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=O.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(Ge,te,!1))},this.getSize=function(E){return E.set(Ge,te)},this.setSize=function(E,k,ee=!0){if(we.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=E,te=k,e.width=Math.floor(E*de),e.height=Math.floor(k*de),ee===!0&&(e.style.width=E+"px",e.style.height=k+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Ge*de,te*de).floor()},this.setDrawingBufferSize=function(E,k,ee){Ge=E,te=k,de=ee,e.width=Math.floor(E*ee),e.height=Math.floor(k*ee),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(g===ti){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(Ve)},this.setViewport=function(E,k,ee,Y){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,k,ee,Y),M.viewport(Q.copy(Ve).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(_e)},this.setScissor=function(E,k,ee,Y){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,k,ee,Y),M.scissor($.copy(_e).multiplyScalar(de).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){M.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,ee=!0){let Y=0;if(E){let Z=!1;if(q!==null){let ve=q.texture.format;Z=v.has(ve)}if(Z){let ve=q.texture.type,be=m.has(ve),Ae=je.getClearColor(),Pe=je.getClearAlpha(),ke=Ae.r,it=Ae.g,at=Ae.b;be?(f[0]=ke,f[1]=it,f[2]=at,f[3]=Pe,F.clearBufferuiv(F.COLOR,0,f)):(S[0]=ke,S[1]=it,S[2]=at,S[3]=Pe,F.clearBufferiv(F.COLOR,0,S))}else Y|=F.COLOR_BUFFER_BIT}k&&(Y|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){e.removeEventListener("webglcontextlost",We,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),je.dispose(),Ee.dispose(),ce.dispose(),D.dispose(),J.dispose(),z.dispose(),Re.dispose(),Ne.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",gh),we.removeEventListener("sessionend",vh),Tr.stop()};function We(E){E.preventDefault(),Ih("WebGLRenderer: Context Lost."),I=!0}function Nt(){Ih("WebGLRenderer: Context Restored."),I=!1;let E=x.autoReset,k=Be.enabled,ee=Be.autoUpdate,Y=Be.needsUpdate,Z=Be.type;fe(),x.autoReset=E,Be.enabled=k,Be.autoUpdate=ee,Be.needsUpdate=Y,Be.type=Z}function ht(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mi(E){let k=E.target;k.removeEventListener("dispose",Mi),Xi(k)}function Xi(E){mp(E),D.remove(E)}function mp(E){let k=D.get(E).programs;k!==void 0&&(k.forEach(function(ee){oe.releaseProgram(ee)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,ee,Y,Z,ve){k===null&&(k=ze);let be=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ae=_p(E,k,ee,Y,Z);M.setMaterial(Y,be);let Pe=ee.index,ke=1;if(Y.wireframe===!0){if(Pe=he.getWireframeAttribute(ee),Pe===void 0)return;ke=2}let it=ee.drawRange,at=ee.attributes.position,Fe=it.start*ke,dt=(it.start+it.count)*ke;ve!==null&&(Fe=Math.max(Fe,ve.start*ke),dt=Math.min(dt,(ve.start+ve.count)*ke)),Pe!==null?(Fe=Math.max(Fe,0),dt=Math.min(dt,Pe.count)):at!=null&&(Fe=Math.max(Fe,0),dt=Math.min(dt,at.count));let Pt=dt-Fe;if(Pt<0||Pt===1/0)return;Re.setup(Z,Y,Ae,ee,Pe);let gt,vt=W;if(Pe!==null&&(gt=re.get(Pe),vt=ne,vt.setIndex(gt)),Z.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*Ze()),vt.setMode(F.LINES)):vt.setMode(F.TRIANGLES);else if(Z.isLine){let wt=Y.linewidth;wt===void 0&&(wt=1),M.setLineWidth(wt*Ze()),Z.isLineSegments?vt.setMode(F.LINES):Z.isLineLoop?vt.setMode(F.LINE_LOOP):vt.setMode(F.LINE_STRIP)}else Z.isPoints?vt.setMode(F.POINTS):Z.isSprite&&vt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(O.get("WEBGL_multi_draw"))vt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let wt=Z._multiDrawStarts,De=Z._multiDrawCounts,Gt=Z._multiDrawCount,Rr=Pe?re.get(Pe).bytesPerElement:1,ni=D.get(Y).currentProgram.getUniforms();for(let Si=0;Si<Gt;Si++)ni.setValue(F,"_gl_DrawID",Si),vt.render(wt[Si]/Rr,De[Si])}else if(Z.isInstancedMesh)vt.renderInstances(Fe,Pt,Z.count);else if(ee.isInstancedBufferGeometry){let wt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,De=Math.min(ee.instanceCount,wt);vt.renderInstances(Fe,Pt,De)}else vt.render(Fe,Pt)};function mh(E,k,ee,Y){P!==null&&E.isNodeMaterial&&P.setObject(Y,E),se===!0&&Ie.setState(E,ee,!1),E.transparent===!0&&E.side===qt&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,ba(E,k,Y),E.side=Br,E.needsUpdate=!0,ba(E,k,Y),E.side=qt):ba(E,k,Y)}this.compile=function(E,k,ee=null){ee===null&&(ee=E),P!==null&&P.renderStart(E,k,ee),b=ce.get(ee),b.init(k),C.push(b),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),E!==ee&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),me=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,me),se===!0&&Ie.setGlobalState(this.clippingPlanes,k),P!==null&&Be.render(b.state.shadowsArray,ee,k);let Y=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let ve=Z.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){let Ae=ve[be];mh(Ae,ee,k,Z),Y.add(Ae)}else mh(ve,ee,k,Z),Y.add(ve)}),b=C.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(E,k,ee=null){let Y=this.compile(E,k,ee);return new Promise(Z=>{function ve(){if(Y.forEach(function(be){let Ae=D.get(be).currentProgram;(Ae===void 0||Ae.isReady())&&Y.delete(be)}),Y.size===0){Z(E);return}setTimeout(ve,10)}O.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let zs=null;function gp(E){zs&&zs(E)}function gh(){Tr.stop()}function vh(){Tr.start()}let Tr=new dd;Tr.setAnimationLoop(gp),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(E){zs=E,we.setAnimationLoop(E),E===null?Tr.stop():Tr.start()},we.addEventListener("sessionstart",gh),we.addEventListener("sessionend",vh),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(E,k);let ee=we.enabled===!0&&we.isPresenting===!0,Y=y!==null&&(q===null||ee)&&y.begin(T,q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(k),k=we.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,k,q),b=ce.get(E,C.length),b.init(k),b.state.textureUnits=G.getTextureUnits(),C.push(b),Se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ae.setFromProjectionMatrix(Se,Ni,k.reversedDepth),me=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,me),_=Ee.get(E,A.length),_.init(),A.push(_),we.enabled===!0&&we.isPresenting===!0){let ve=T.xr.getDepthSensingMesh();ve!==null&&Vs(ve,k,-1/0,T.sortObjects)}Vs(E,k,0,T.sortObjects),_.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&_.sort(pe,Ue),Xe=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Xe&&je.addToRenderList(_,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();let Z=b.state.shadowsArray;if(Be.render(Z,E,k),se===!0&&Ie.endShadows(),(Y&&y.hasRenderPass())===!1){let ve=_.opaque,be=_.transmissive;if(b.setupLights(),k.isArrayCamera){let Ae=k.cameras;if(be.length>0)for(let Pe=0,ke=Ae.length;Pe<ke;Pe++){let it=Ae[Pe];xh(ve,be,E,it)}Xe&&je.render(E);for(let Pe=0,ke=Ae.length;Pe<ke;Pe++){let it=Ae[Pe];_h(_,E,it,it.viewport)}}else be.length>0&&xh(ve,be,E,k),Xe&&je.render(E),_h(_,E,k)}q!==null&&j===0&&(G.updateMultisampleRenderTarget(q),G.updateRenderTargetMipmap(q)),Y&&y.end(T),E.isScene===!0&&E.onAfterRender(T,E,k),Re.resetDefaultState(),ie=-1,K=null,C.pop(),C.length>0?(b=C[C.length-1],G.setTextureUnits(b.state.textureUnits),se===!0&&Ie.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,P!==null&&P.renderEnd()};function Vs(E,k,ee,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ae)){Y&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);let ve=z.update(E),be=E.material;be.visible&&_.push(E,ve,be,ee,Ce.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ae))){let ve=z.update(E),be=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ce.copy(ve.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){let Ae=ve.groups;for(let Pe=0,ke=Ae.length;Pe<ke;Pe++){let it=Ae[Pe],at=be[it.materialIndex];at&&at.visible&&_.push(E,ve,at,ee,Ce.z,it,k)}}else be.visible&&_.push(E,ve,be,ee,Ce.z,null,k)}}let Z=E.children;for(let ve=0,be=Z.length;ve<be;ve++)Vs(Z[ve],k,ee,Y)}function _h(E,k,ee,Y){let{opaque:Z,transmissive:ve,transparent:be}=E;b.setupLightsView(ee),se===!0&&Ie.setGlobalState(T.clippingPlanes,ee),Y&&M.viewport(Q.copy(Y)),Z.length>0&&Sa(Z,k,ee),ve.length>0&&Sa(ve,k,ee),be.length>0&&Sa(be,k,ee),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function xh(E,k,ee,Y){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let at=O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new gi(1,1,{generateMipmaps:!0,type:at?Fi:ti,minFilter:Or,samples:Math.max(4,X.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Z=b.state.transmissionRenderTarget[Y.id],ve=Y.viewport||Q;Z.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);let be=T.getRenderTarget(),Ae=T.getActiveCubeFace(),Pe=T.getActiveMipmapLevel();T.setRenderTarget(Z),T.getClearColor(Me),Je=T.getClearAlpha(),Je<1&&T.setClearColor(16777215,.5),T.clear(),Xe&&je.render(ee);let ke=T.toneMapping;T.toneMapping=Ui;let it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),se===!0&&Ie.setGlobalState(T.clippingPlanes,Y),Sa(E,ee,Y),G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z),O.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Fe=0,dt=k.length;Fe<dt;Fe++){let Pt=k[Fe],{object:gt,geometry:vt,material:wt,group:De}=Pt;if(wt.side===qt&&gt.layers.test(Y.layers)){let Gt=wt.side;wt.side=Kt,wt.needsUpdate=!0,yh(gt,ee,Y,vt,wt,De),wt.side=Gt,wt.needsUpdate=!0,at=!0}}at===!0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z))}T.setRenderTarget(be,Ae,Pe),T.setClearColor(Me,Je),it!==void 0&&(Y.viewport=it),T.toneMapping=ke}function Sa(E,k,ee){let Y=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,ve=E.length;Z<ve;Z++){let be=E[Z],{object:Ae,geometry:Pe,group:ke}=be,it=be.material;it.allowOverride===!0&&Y!==null&&(it=Y),Ae.layers.test(ee.layers)&&yh(Ae,k,ee,Pe,it,ke)}}function yh(E,k,ee,Y,Z,ve){P!==null&&Z.isNodeMaterial&&P.setObject(E,Z),E.onBeforeRender(T,k,ee,Y,Z,ve),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(T,k,ee,Y,E,ve),Z.transparent===!0&&Z.side===qt&&Z.forceSinglePass===!1?(Z.side=Kt,Z.needsUpdate=!0,T.renderBufferDirect(ee,k,Y,Z,E,ve),Z.side=Br,Z.needsUpdate=!0,T.renderBufferDirect(ee,k,Y,Z,E,ve),Z.side=qt):T.renderBufferDirect(ee,k,Y,Z,E,ve),E.onAfterRender(T,k,ee,Y,Z,ve)}function ba(E,k,ee){k.isScene!==!0&&(k=ze);let Y=D.get(E),Z=b.state.lights,ve=b.state.shadowsArray,be=Z.state.version,Ae=oe.getParameters(E,Z.state,ve,k,ee,b.state.lightProbeGridArray),Pe=oe.getProgramCacheKey(Ae),ke=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let it=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=J.get(E.envMap||Y.environment,it),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Mi),ke=new Map,Y.programs=ke);let at=ke.get(Pe);if(at!==void 0){if(Y.currentProgram===at&&Y.lightsStateVersion===be)return Sh(E,Ae),at}else Ae.uniforms=oe.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,ee,Ae),E.onBeforeCompile(Ae,T),at=oe.acquireProgram(Ae,Pe),ke.set(Pe,at),Y.uniforms=Ae.uniforms;let Fe=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Ie.uniform),Sh(E,Ae),Y.needsLights=yp(E),Y.lightsStateVersion=be,Y.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.sunLights.value=Z.state.sun,Fe.sunLightShadows.value=Z.state.sunShadow,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Fe.sunShadowCascade.value=Z.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=at,Y.uniformsList=null,at}function Mh(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ls.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Sh(E,k){let ee=D.get(E);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function vp(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;w.setFromMatrixPosition(k.matrixWorld);for(let ee=0,Y=E.length;ee<Y;ee++){let Z=E[ee];if(Z.texture!==null&&Z.boundingBox.containsPoint(w))return Z}return null}function _p(E,k,ee,Y,Z){k.isScene!==!0&&(k=ze),G.resetTextureUnits();let ve=k.fog,be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Ae=q===null?T.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:rt.workingColorSpace,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ke=J.get(Y.envMap||be,Pe),it=Y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,at=!!ee.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,Pt=!!ee.morphAttributes.color,gt=Ui;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(gt=T.toneMapping);let vt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,wt=vt!==void 0?vt.length:0,De=D.get(Y),Gt=b.state.lights;if(se===!0&&(me===!0||E!==K)){let ft=E===K&&Y.id===ie;Ie.setState(Y,E,ft)}let Rr=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Gt.state.version||De.outputColorSpace!==Ae||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==ke||Y.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ie.numPlanes||De.numIntersection!==Ie.numIntersection)||De.vertexAlphas!==it||De.vertexTangents!==at||De.morphTargets!==Fe||De.morphNormals!==dt||De.morphColors!==Pt||De.toneMapping!==gt||De.morphTargetsCount!==wt||!!De.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Rr=!0):(Rr=!0,De.__version=Y.version);let ni=De.currentProgram;Rr===!0&&(ni=ba(Y,k,Z),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,ni,De));let Si=!1,pr=!1,Kr=!1,pt=ni.getUniforms(),At=De.uniforms;if(M.useProgram(ni.program)&&(Si=!0,pr=!0,Kr=!0),Y.id!==ie&&(ie=Y.id,pr=!0),De.needsLights){let ft=vp(b.state.lightProbeGridArray,Z);De.lightProbeGrid!==ft&&(De.lightProbeGrid=ft,pr=!0)}if(Si||K!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",E.projectionMatrix),pt.setValue(F,"viewMatrix",E.matrixWorldInverse);let ft=pt.map.cameraPosition;ft!==void 0&&ft.setValue(F,Te.setFromMatrixPosition(E.matrixWorld)),X.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,pr=!0,Kr=!0)}if(De.needsLights&&(Gt.state.sunShadowMap.length>0&&pt.setValue(F,"sunShadowMap",Gt.state.sunShadowMap,G),Gt.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",Gt.state.directionalShadowMap,G),Gt.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",Gt.state.spotShadowMap,G),Gt.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",Gt.state.pointShadowMap,G)),Z.isSkinnedMesh){pt.setOptional(F,Z,"bindMatrix"),pt.setOptional(F,Z,"bindMatrixInverse");let ft=Z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),pt.setValue(F,"boneTexture",ft.boneTexture,G))}Z.isBatchedMesh&&(pt.setOptional(F,Z,"batchingTexture"),pt.setValue(F,"batchingTexture",Z._matricesTexture,G),pt.setOptional(F,Z,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",Z._indirectTexture,G),pt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",Z._colorsTexture,G));let fr=ee.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&lt.update(Z,ee,ni),(pr||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,pt.setValue(F,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(At.envMapIntensity.value=k.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=ty()),pr){if(pt.setValue(F,"toneMappingExposure",T.toneMappingExposure),De.needsLights&&xp(At,Kr),ve&&Y.fog===!0&&ge.refreshFogUniforms(At,ve),ge.refreshMaterialUniforms(At,Y,de,te,b.state.transmissionRenderTarget[E.id]),De.needsLights&&De.lightProbeGrid){let ft=De.lightProbeGrid;At.probesSH.value=ft.texture,At.probesMin.value.copy(ft.boundingBox.min),At.probesMax.value.copy(ft.boundingBox.max),At.probesResolution.value.copy(ft.resolution)}ls.upload(F,Mh(De),At,G)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ls.upload(F,Mh(De),At,G),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(F,"center",Z.center),pt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),pt.setValue(F,"normalMatrix",Z.normalMatrix),pt.setValue(F,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let ft=Y.uniformsGroups;for(let In=0,$r=ft.length;In<$r;In++){let Eh=ft[In];Ne.update(Eh,ni),Ne.bind(Eh,ni)}}return ni}function xp(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function yp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(E,k,ee){let Y=D.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),D.get(E.texture).__webglTexture=k,D.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:ee,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let ee=D.get(E);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,ee=0){q=E,U=k,j=ee;let Y=null,Z=!1,ve=!1;if(E){let be=D.get(E);if(be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),Q.copy(E.viewport),$.copy(E.scissor),Oe=E.scissorTest,M.viewport(Q),M.scissor($),M.setScissorTest(Oe),ie=-1;return}else if(be.__webglFramebuffer===void 0)G.setupRenderTarget(E);else if(be.__hasExternalTextures)G.rebindTextures(E,D.get(E.texture).__webglTexture,D.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ke=E.depthTexture;if(be.__boundDepthTexture!==ke){if(ke!==null&&D.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(E)}}let Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);let Pe=D.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?Y=Pe[k][ee]:Y=Pe[k],Z=!0):E.samples>0&&G.useMultisampledRTT(E)===!1?Y=D.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[ee]:Y=Pe,Q.copy(E.viewport),$.copy(E.scissor),Oe=E.scissorTest}else Q.copy(Ve).multiplyScalar(de).floor(),$.copy(_e).multiplyScalar(de).floor(),Oe=Ke;if(ee!==0&&(Y=L),M.bindFramebuffer(F.FRAMEBUFFER,Y)&&M.drawBuffers(E,Y),M.viewport(Q),M.scissor($),M.setScissorTest(Oe),Z){let be=D.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,ee)}else if(ve){let be=k;for(let Ae=0;Ae<E.textures.length;Ae++){let Pe=D.get(E.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,ee,be)}}else if(E!==null&&ee!==0){let be=D.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,ee)}ie=-1};function bh(E){let k=D.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=X.textureFormatReadable(E.format),k.__typeReadable=X.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,ee,Y,Z,ve,be,Ae=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=D.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){M.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let ke=E.textures[Ae],it=ke.format,at=ke.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Fe=bh(ke);if(Fe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&ee>=0&&ee<=E.height-Z&&F.readPixels(k,ee,Y,Z,ue.convert(it),ue.convert(at),ve)}finally{let ke=q!==null?D.get(q).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,k,ee,Y,Z,ve,be,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=D.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(k>=0&&k<=E.width-Y&&ee>=0&&ee<=E.height-Z){M.bindFramebuffer(F.FRAMEBUFFER,Pe);let ke=E.textures[Ae],it=ke.format,at=ke.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Fe=bh(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(k,ee,Y,Z,ue.convert(it),ue.convert(at),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Pt=q!==null?D.get(q).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Pt);let gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await af(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(gt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,ee=0){let Y=Math.pow(2,-ee),Z=Math.floor(E.image.width*Y),ve=Math.floor(E.image.height*Y),be=k!==null?k.x:0,Ae=k!==null?k.y:0;G.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,be,Ae,Z,ve),M.unbindTexture()},this.copyTextureToTexture=function(E,k,ee=null,Y=null,Z=0,ve=0){let be,Ae,Pe,ke,it,at,Fe,dt,Pt,gt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(ee!==null)be=ee.max.x-ee.min.x,Ae=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,ke=ee.min.x,it=ee.min.y,at=ee.isBox3?ee.min.z:0;else{let At=Math.pow(2,-Z);be=Math.floor(gt.width*At),Ae=Math.floor(gt.height*At),E.isDataArrayTexture?Pe=gt.depth:E.isData3DTexture?Pe=Math.floor(gt.depth*At):Pe=1,ke=0,it=0,at=0}Y!==null?(Fe=Y.x,dt=Y.y,Pt=Y.z):(Fe=0,dt=0,Pt=0);let vt=ue.convert(k.format),wt=ue.convert(k.type),De;k.isData3DTexture?(G.setTexture3D(k,0),De=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(G.setTexture2DArray(k,0),De=F.TEXTURE_2D_ARRAY):(G.setTexture2D(k,0),De=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Gt=M.getParameter(F.UNPACK_ROW_LENGTH),Rr=M.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=M.getParameter(F.UNPACK_SKIP_PIXELS),Si=M.getParameter(F.UNPACK_SKIP_ROWS),pr=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(F.UNPACK_SKIP_ROWS,it),M.pixelStorei(F.UNPACK_SKIP_IMAGES,at);let Kr=E.isDataArrayTexture||E.isData3DTexture,pt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let At=D.get(E),fr=D.get(k),ft=D.get(At.__renderTarget),In=D.get(fr.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let $r=0;$r<Pe;$r++)Kr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,D.get(E).__webglTexture,Z,at+$r),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,D.get(k).__webglTexture,ve,Pt+$r)),F.blitFramebuffer(ke,it,be,Ae,Fe,dt,be,Ae,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||D.has(E)){let At=D.get(E),fr=D.get(k);M.bindFramebuffer(F.READ_FRAMEBUFFER,H),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let ft=0;ft<Pe;ft++)Kr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,Z,at+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,Z),pt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fr.__webglTexture,ve,Pt+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fr.__webglTexture,ve),Z!==0?F.blitFramebuffer(ke,it,be,Ae,Fe,dt,be,Ae,F.COLOR_BUFFER_BIT,F.NEAREST):pt?F.copyTexSubImage3D(De,ve,Fe,dt,Pt+ft,ke,it,be,Ae):F.copyTexSubImage2D(De,ve,Fe,dt,ke,it,be,Ae);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(De,ve,Fe,dt,Pt,be,Ae,Pe,vt,wt,gt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(De,ve,Fe,dt,Pt,be,Ae,Pe,vt,gt.data):F.texSubImage3D(De,ve,Fe,dt,Pt,be,Ae,Pe,vt,wt,gt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Fe,dt,be,Ae,vt,wt,gt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Fe,dt,gt.width,gt.height,vt,gt.data):F.texSubImage2D(F.TEXTURE_2D,ve,Fe,dt,be,Ae,vt,wt,gt);M.pixelStorei(F.UNPACK_ROW_LENGTH,Gt),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rr),M.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),M.pixelStorei(F.UNPACK_SKIP_ROWS,Si),M.pixelStorei(F.UNPACK_SKIP_IMAGES,pr),ve===0&&k.generateMipmaps&&F.generateMipmap(De),M.unbindTexture()},this.initRenderTarget=function(E){D.get(E).__webglFramebuffer===void 0&&G.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?G.setTextureCube(E,0):E.isData3DTexture?G.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?G.setTexture2DArray(E,0):G.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){U=0,j=0,q=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(t),e.unpackColorSpace=rt._getUnpackColorSpace()}},An=class $n{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let i=this.elements;i[0]=e.x,i[4]=e.y,i[8]=e.z}getTrace(e){e===void 0&&(e=new R);let i=this.elements;return e.x=i[0],e.y=i[4],e.z=i[8],e}vmult(e,i){i===void 0&&(i=new R);let r=this.elements,n=e.x,a=e.y,s=e.z;return i.x=r[0]*n+r[1]*a+r[2]*s,i.y=r[3]*n+r[4]*a+r[5]*s,i.z=r[6]*n+r[7]*a+r[8]*s,i}smult(e){for(let i=0;i<this.elements.length;i++)this.elements[i]*=e}mmult(e,i){i===void 0&&(i=new $n);let r=this.elements,n=e.elements,a=i.elements,s=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],p=r[7],g=r[8],v=n[0],m=n[1],f=n[2],S=n[3],w=n[4],_=n[5],b=n[6],A=n[7],C=n[8];return a[0]=s*v+o*S+l*b,a[1]=s*m+o*w+l*A,a[2]=s*f+o*_+l*C,a[3]=h*v+c*S+d*b,a[4]=h*m+c*w+d*A,a[5]=h*f+c*_+d*C,a[6]=u*v+p*S+g*b,a[7]=u*m+p*w+g*A,a[8]=u*f+p*_+g*C,i}scale(e,i){i===void 0&&(i=new $n);let r=this.elements,n=i.elements;for(let a=0;a!==3;a++)n[3*a+0]=e.x*r[3*a+0],n[3*a+1]=e.y*r[3*a+1],n[3*a+2]=e.z*r[3*a+2];return i}solve(e,i){i===void 0&&(i=new R);let r=3,n=4,a=[],s,o;for(s=0;s<r*n;s++)a.push(0);for(s=0;s<3;s++)for(o=0;o<3;o++)a[s+n*o]=this.elements[s+3*o];a[3]=e.x,a[7]=e.y,a[11]=e.z;let l=3,h=l,c,d=4,u;do{if(s=h-l,a[s+n*s]===0){for(o=s+1;o<h;o++)if(a[s+n*o]!==0){c=d;do u=d-c,a[u+n*s]+=a[u+n*o];while(--c);break}}if(a[s+n*s]!==0)for(o=s+1;o<h;o++){let p=a[s+n*o]/a[s+n*s];c=d;do u=d-c,a[u+n*o]=u<=s?0:a[u+n*o]-a[u+n*s]*p;while(--c)}}while(--l);if(i.z=a[2*n+3]/a[2*n+2],i.y=(a[1*n+3]-a[1*n+2]*i.z)/a[1*n+1],i.x=(a[0*n+3]-a[0*n+2]*i.z-a[0*n+1]*i.y)/a[0*n+0],isNaN(i.x)||isNaN(i.y)||isNaN(i.z)||i.x===1/0||i.y===1/0||i.z===1/0)throw`Could not solve equation! Got x=[${i.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return i}e(e,i,r){if(r===void 0)return this.elements[i+3*e];this.elements[i+3*e]=r}copy(e){for(let i=0;i<e.elements.length;i++)this.elements[i]=e.elements[i];return this}toString(){let e="";for(let i=0;i<9;i++)e+=this.elements[i]+",";return e}reverse(e){e===void 0&&(e=new $n);let i=3,r=6,n=iy,a,s;for(a=0;a<3;a++)for(s=0;s<3;s++)n[a+r*s]=this.elements[a+3*s];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let o=3,l=o,h,c=r,d;do{if(a=l-o,n[a+r*a]===0){for(s=a+1;s<l;s++)if(n[a+r*s]!==0){h=c;do d=c-h,n[d+r*a]+=n[d+r*s];while(--h);break}}if(n[a+r*a]!==0)for(s=a+1;s<l;s++){let u=n[a+r*s]/n[a+r*a];h=c;do d=c-h,n[d+r*s]=d<=a?0:n[d+r*s]-n[d+r*a]*u;while(--h)}}while(--o);a=2;do{s=a-1;do{let u=n[a+r*s]/n[a+r*a];h=r;do d=r-h,n[d+r*s]=n[d+r*s]-n[d+r*a]*u;while(--h)}while(s--)}while(--a);a=2;do{let u=1/n[a+r*a];h=r;do d=r-h,n[d+r*a]=n[d+r*a]*u;while(--h)}while(a--);a=2;do{s=2;do{if(d=n[i+s+r*a],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(a,s,d)}while(s--)}while(a--);return e}setRotationFromQuaternion(e){let i=e.x,r=e.y,n=e.z,a=e.w,s=i+i,o=r+r,l=n+n,h=i*s,c=i*o,d=i*l,u=r*o,p=r*l,g=n*l,v=a*s,m=a*o,f=a*l,S=this.elements;return S[0]=1-(u+g),S[1]=c-f,S[2]=d+m,S[3]=c+f,S[4]=1-(h+g),S[5]=p-v,S[6]=d-m,S[7]=p+v,S[8]=1-(h+u),this}transpose(e){e===void 0&&(e=new $n);let i=this.elements,r=e.elements,n;return r[0]=i[0],r[4]=i[4],r[8]=i[8],n=i[1],r[1]=i[3],r[3]=n,n=i[2],r[2]=i[6],r[6]=n,n=i[5],r[5]=i[7],r[7]=n,e}},iy=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],R=class Ai{constructor(e,i,r){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),this.x=e,this.y=i,this.z=r}cross(e,i){i===void 0&&(i=new Ai);let r=e.x,n=e.y,a=e.z,s=this.x,o=this.y,l=this.z;return i.x=o*a-l*n,i.y=l*r-s*a,i.z=s*n-o*r,i}set(e,i,r){return this.x=e,this.y=i,this.z=r,this}setZero(){this.x=this.y=this.z=0}vadd(e,i){if(i)i.x=e.x+this.x,i.y=e.y+this.y,i.z=e.z+this.z;else return new Ai(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,i){if(i)i.x=this.x-e.x,i.y=this.y-e.y,i.z=this.z-e.z;else return new Ai(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new An([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,i=this.y,r=this.z,n=Math.sqrt(e*e+i*i+r*r);if(n>0){let a=1/n;this.x*=a,this.y*=a,this.z*=a}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new Ai);let i=this.x,r=this.y,n=this.z,a=Math.sqrt(i*i+r*r+n*n);return a>0?(a=1/a,e.x=i*a,e.y=r*a,e.z=n*a):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,i=this.y,r=this.z;return Math.sqrt(e*e+i*i+r*r)}lengthSquared(){return this.dot(this)}distanceTo(e){let i=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z;return Math.sqrt((a-i)*(a-i)+(s-r)*(s-r)+(o-n)*(o-n))}distanceSquared(e){let i=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z;return(a-i)*(a-i)+(s-r)*(s-r)+(o-n)*(o-n)}scale(e,i){i===void 0&&(i=new Ai);let r=this.x,n=this.y,a=this.z;return i.x=e*r,i.y=e*n,i.z=e*a,i}vmul(e,i){return i===void 0&&(i=new Ai),i.x=e.x*this.x,i.y=e.y*this.y,i.z=e.z*this.z,i}addScaledVector(e,i,r){return r===void 0&&(r=new Ai),r.x=this.x+e*i.x,r.y=this.y+e*i.y,r.z=this.z+e*i.z,r}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new Ai),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,i){let r=this.length();if(r>0){let n=ry,a=1/r;n.set(this.x*a,this.y*a,this.z*a);let s=ny;Math.abs(n.x)<.9?(s.set(1,0,0),n.cross(s,e)):(s.set(0,1,0),n.cross(s,e)),n.cross(e,i)}else e.set(1,0,0),i.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,i,r){let n=this.x,a=this.y,s=this.z;r.x=n+(e.x-n)*i,r.y=a+(e.y-a)*i,r.z=s+(e.z-s)*i}almostEquals(e,i){return i===void 0&&(i=1e-6),!(Math.abs(this.x-e.x)>i||Math.abs(this.y-e.y)>i||Math.abs(this.z-e.z)>i)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,i){return this.negate(Ic),Ic.almostEquals(e,i)}clone(){return new Ai(this.x,this.y,this.z)}};R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);var ry=new R,ny=new R,Ic=new R,_i=class Md{constructor(e){e===void 0&&(e={}),this.lowerBound=new R,this.upperBound=new R,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,i,r,n){let a=this.lowerBound,s=this.upperBound,o=r;a.copy(e[0]),o&&o.vmult(a,a),s.copy(a);for(let l=1;l<e.length;l++){let h=e[l];o&&(o.vmult(h,Oc),h=Oc),h.x>s.x&&(s.x=h.x),h.x<a.x&&(a.x=h.x),h.y>s.y&&(s.y=h.y),h.y<a.y&&(a.y=h.y),h.z>s.z&&(s.z=h.z),h.z<a.z&&(a.z=h.z)}return i&&(i.vadd(a,a),i.vadd(s,s)),n&&(a.x-=n,a.y-=n,a.z-=n,s.x+=n,s.y+=n,s.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Md().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,a=e.upperBound,s=n.x<=r.x&&r.x<=a.x||i.x<=a.x&&a.x<=r.x,o=n.y<=r.y&&r.y<=a.y||i.y<=a.y&&a.y<=r.y,l=n.z<=r.z&&r.z<=a.z||i.z<=a.z&&a.z<=r.z;return s&&o&&l}volume(){let e=this.lowerBound,i=this.upperBound;return(i.x-e.x)*(i.y-e.y)*(i.z-e.z)}contains(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,a=e.upperBound;return i.x<=n.x&&r.x>=a.x&&i.y<=n.y&&r.y>=a.y&&i.z<=n.z&&r.z>=a.z}getCorners(e,i,r,n,a,s,o,l){let h=this.lowerBound,c=this.upperBound;e.copy(h),i.set(c.x,h.y,h.z),r.set(c.x,c.y,h.z),n.set(h.x,c.y,c.z),a.set(c.x,h.y,c.z),s.set(h.x,c.y,h.z),o.set(h.x,h.y,c.z),l.copy(c)}toLocalFrame(e,i){let r=Fc,n=r[0],a=r[1],s=r[2],o=r[3],l=r[4],h=r[5],c=r[6],d=r[7];this.getCorners(n,a,s,o,l,h,c,d);for(let u=0;u!==8;u++){let p=r[u];e.pointToLocal(p,p)}return i.setFromPoints(r)}toWorldFrame(e,i){let r=Fc,n=r[0],a=r[1],s=r[2],o=r[3],l=r[4],h=r[5],c=r[6],d=r[7];this.getCorners(n,a,s,o,l,h,c,d);for(let u=0;u!==8;u++){let p=r[u];e.pointToWorld(p,p)}return i.setFromPoints(r)}overlapsRay(e){let{direction:i,from:r}=e,n=1/i.x,a=1/i.y,s=1/i.z,o=(this.lowerBound.x-r.x)*n,l=(this.upperBound.x-r.x)*n,h=(this.lowerBound.y-r.y)*a,c=(this.upperBound.y-r.y)*a,d=(this.lowerBound.z-r.z)*s,u=(this.upperBound.z-r.z)*s,p=Math.max(Math.max(Math.min(o,l),Math.min(h,c)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(h,c)),Math.max(d,u));return!(g<0||p>g)}},Oc=new R,Fc=[new R,new R,new R,new R,new R,new R,new R,new R],Bc=class{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:r}=e;if(r>i){let n=r;r=i,i=n}return this.matrix[(i*(i+1)>>1)+r-1]}set(t,e,i){let{index:r}=t,{index:n}=e;if(n>r){let a=n;n=r,r=a}this.matrix[(r*(r+1)>>1)+n-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Sd=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let i=this._listeners;if(i[t]===void 0)return this;let r=i[t].indexOf(e);return r!==-1&&i[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let e=this._listeners[t.type];if(e!==void 0){t.target=this;for(let i=0,r=e.length;i<r;i++)e[i].call(this,t)}return this}},ii=class Ur{constructor(e,i,r,n){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),n===void 0&&(n=1),this.x=e,this.y=i,this.z=r,this.w=n}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,i){let r=Math.sin(i*.5);return this.x=e.x*r,this.y=e.y*r,this.z=e.z*r,this.w=Math.cos(i*.5),this}toAxisAngle(e){e===void 0&&(e=new R),this.normalize();let i=2*Math.acos(this.w),r=Math.sqrt(1-this.w*this.w);return r<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/r,e.y=this.y/r,e.z=this.z/r),[e,i]}setFromVectors(e,i){if(e.isAntiparallelTo(i)){let r=ay,n=sy;e.tangents(r,n),this.setFromAxisAngle(r,Math.PI)}else{let r=e.cross(i);this.x=r.x,this.y=r.y,this.z=r.z,this.w=Math.sqrt(e.length()**2*i.length()**2)+e.dot(i),this.normalize()}return this}mult(e,i){i===void 0&&(i=new Ur);let r=this.x,n=this.y,a=this.z,s=this.w,o=e.x,l=e.y,h=e.z,c=e.w;return i.x=r*c+s*o+n*h-a*l,i.y=n*c+s*l+a*o-r*h,i.z=a*c+s*h+r*l-n*o,i.w=s*c-r*o-n*l-a*h,i}inverse(e){e===void 0&&(e=new Ur);let i=this.x,r=this.y,n=this.z,a=this.w;this.conjugate(e);let s=1/(i*i+r*r+n*n+a*a);return e.x*=s,e.y*=s,e.z*=s,e.w*=s,e}conjugate(e){return e===void 0&&(e=new Ur),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,i){i===void 0&&(i=new R);let r=e.x,n=e.y,a=e.z,s=this.x,o=this.y,l=this.z,h=this.w,c=h*r+o*a-l*n,d=h*n+l*r-s*a,u=h*a+s*n-o*r,p=-s*r-o*n-l*a;return i.x=c*h+p*-s+d*-l-u*-o,i.y=d*h+p*-o+u*-s-c*-l,i.z=u*h+p*-l+c*-o-d*-s,i}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,i){i===void 0&&(i="YZX");let r,n,a,s=this.x,o=this.y,l=this.z,h=this.w;switch(i){case"YZX":let c=s*o+l*h;if(c>.499&&(r=2*Math.atan2(s,h),n=Math.PI/2,a=0),c<-.499&&(r=-2*Math.atan2(s,h),n=-Math.PI/2,a=0),r===void 0){let d=s*s,u=o*o,p=l*l;r=Math.atan2(2*o*h-2*s*l,1-2*u-2*p),n=Math.asin(2*c),a=Math.atan2(2*s*h-2*o*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${i} not supported yet.`)}e.y=r,e.z=n,e.x=a}setFromEuler(e,i,r,n){n===void 0&&(n="XYZ");let a=Math.cos(e/2),s=Math.cos(i/2),o=Math.cos(r/2),l=Math.sin(e/2),h=Math.sin(i/2),c=Math.sin(r/2);return n==="XYZ"?(this.x=l*s*o+a*h*c,this.y=a*h*o-l*s*c,this.z=a*s*c+l*h*o,this.w=a*s*o-l*h*c):n==="YXZ"?(this.x=l*s*o+a*h*c,this.y=a*h*o-l*s*c,this.z=a*s*c-l*h*o,this.w=a*s*o+l*h*c):n==="ZXY"?(this.x=l*s*o-a*h*c,this.y=a*h*o+l*s*c,this.z=a*s*c+l*h*o,this.w=a*s*o-l*h*c):n==="ZYX"?(this.x=l*s*o-a*h*c,this.y=a*h*o+l*s*c,this.z=a*s*c-l*h*o,this.w=a*s*o+l*h*c):n==="YZX"?(this.x=l*s*o+a*h*c,this.y=a*h*o+l*s*c,this.z=a*s*c-l*h*o,this.w=a*s*o-l*h*c):n==="XZY"&&(this.x=l*s*o-a*h*c,this.y=a*h*o-l*s*c,this.z=a*s*c+l*h*o,this.w=a*s*o+l*h*c),this}clone(){return new Ur(this.x,this.y,this.z,this.w)}slerp(e,i,r){r===void 0&&(r=new Ur);let n=this.x,a=this.y,s=this.z,o=this.w,l=e.x,h=e.y,c=e.z,d=e.w,u,p,g,v,m;return p=n*l+a*h+s*c+o*d,p<0&&(p=-p,l=-l,h=-h,c=-c,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-i)*u)/g,m=Math.sin(i*u)/g):(v=1-i,m=i),r.x=v*n+m*l,r.y=v*a+m*h,r.z=v*s+m*c,r.w=v*o+m*d,r}integrate(e,i,r,n){n===void 0&&(n=new Ur);let a=e.x*r.x,s=e.y*r.y,o=e.z*r.z,l=this.x,h=this.y,c=this.z,d=this.w,u=i*.5;return n.x+=u*(a*d+s*c-o*h),n.y+=u*(s*d+o*l-a*c),n.z+=u*(o*d+a*h-s*l),n.w+=u*(-a*l-s*h-o*c),n}},ay=new R,sy=new R,oy={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Le=class bd{constructor(e){e===void 0&&(e={}),this.id=bd.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,i){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,i,r,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Le.idCounter=0;Le.types=oy;var mt=class El{constructor(e){e===void 0&&(e={}),this.position=new R,this.quaternion=new ii,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,i){return El.pointToLocalFrame(this.position,this.quaternion,e,i)}pointToWorld(e,i){return El.pointToWorldFrame(this.position,this.quaternion,e,i)}vectorToWorldFrame(e,i){return i===void 0&&(i=new R),this.quaternion.vmult(e,i),i}static pointToLocalFrame(e,i,r,n){return n===void 0&&(n=new R),r.vsub(e,n),i.conjugate(zc),zc.vmult(n,n),n}static pointToWorldFrame(e,i,r,n){return n===void 0&&(n=new R),i.vmult(r,n),n.vadd(e,n),n}static vectorToWorldFrame(e,i,r){return r===void 0&&(r=new R),e.vmult(i,r),r}static vectorToLocalFrame(e,i,r,n){return n===void 0&&(n=new R),i.w*=-1,i.vmult(r,n),i.w*=-1,n}},zc=new ii,ly=class hs extends Le{constructor(e){e===void 0&&(e={});let{vertices:i=[],faces:r=[],normals:n=[],axes:a,boundingSphereRadius:s}=e;super({type:Le.types.CONVEXPOLYHEDRON}),this.vertices=i,this.faces=r,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),s?this.boundingSphereRadius=s:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=a?a.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,i=this.vertices,r=this.uniqueEdges;r.length=0;let n=new R;for(let a=0;a!==e.length;a++){let s=e[a],o=s.length;for(let l=0;l!==o;l++){let h=(l+1)%o;i[s[l]].vsub(i[s[h]],n),n.normalize();let c=!1;for(let d=0;d!==r.length;d++)if(r[d].almostEquals(n)||r[d].almostEquals(n)){c=!0;break}c||r.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);let i=this.faceNormals[e]||new R;this.getFaceNormal(e,i),i.negate(i),this.faceNormals[e]=i;let r=this.vertices[this.faces[e][0]];if(i.dot(r)<0){console.error(`.faceNormals[${e}] = Vec3(${i.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,i){let r=this.faces[e],n=this.vertices[r[0]],a=this.vertices[r[1]],s=this.vertices[r[2]];hs.computeNormal(n,a,s,i)}static computeNormal(e,i,r,n){let a=new R,s=new R;i.vsub(e,s),r.vsub(i,a),a.cross(s,n),n.isZero()||n.normalize()}clipAgainstHull(e,i,r,n,a,s,o,l,h){let c=new R,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<r.faces.length;g++){c.copy(r.faceNormals[g]),a.vmult(c,c);let v=c.dot(s);v>u&&(u=v,d=g)}let p=[];for(let g=0;g<r.faces[d].length;g++){let v=r.vertices[r.faces[d][g]],m=new R;m.copy(v),a.vmult(m,m),n.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(s,e,i,p,o,l,h)}findSeparatingAxis(e,i,r,n,a,s,o,l){let h=new R,c=new R,d=new R,u=new R,p=new R,g=new R,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){r.vmult(m.uniqueAxes[f],h);let S=m.testSepAxis(h,e,i,r,n,a);if(S===!1)return!1;S<v&&(v=S,s.copy(h))}else{let f=o?o.length:m.faces.length;for(let S=0;S<f;S++){let w=o?o[S]:S;h.copy(m.faceNormals[w]),r.vmult(h,h);let _=m.testSepAxis(h,e,i,r,n,a);if(_===!1)return!1;_<v&&(v=_,s.copy(h))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){a.vmult(e.uniqueAxes[f],c);let S=m.testSepAxis(c,e,i,r,n,a);if(S===!1)return!1;S<v&&(v=S,s.copy(c))}else{let f=l?l.length:e.faces.length;for(let S=0;S<f;S++){let w=l?l[S]:S;c.copy(e.faceNormals[w]),a.vmult(c,c);let _=m.testSepAxis(c,e,i,r,n,a);if(_===!1)return!1;_<v&&(v=_,s.copy(c))}}for(let f=0;f!==m.uniqueEdges.length;f++){r.vmult(m.uniqueEdges[f],u);for(let S=0;S!==e.uniqueEdges.length;S++)if(a.vmult(e.uniqueEdges[S],p),u.cross(p,g),!g.almostZero()){g.normalize();let w=m.testSepAxis(g,e,i,r,n,a);if(w===!1)return!1;w<v&&(v=w,s.copy(g))}}return n.vsub(i,d),d.dot(s)>0&&s.negate(s),!0}testSepAxis(e,i,r,n,a,s){let o=this;hs.project(o,e,r,n,wo),hs.project(i,e,a,s,To);let l=wo[0],h=wo[1],c=To[0],d=To[1];if(l<d||c<h)return!1;let u=l-d,p=c-h;return u<p?u:p}calculateLocalInertia(e,i){let r=new R,n=new R;this.computeLocalAABB(n,r);let a=r.x-n.x,s=r.y-n.y,o=r.z-n.z;i.x=1/12*e*(2*s*2*s+2*o*2*o),i.y=1/12*e*(2*a*2*a+2*o*2*o),i.z=1/12*e*(2*s*2*s+2*a*2*a)}getPlaneConstantOfFace(e){let i=this.faces[e],r=this.faceNormals[e],n=this.vertices[i[0]];return-r.dot(n)}clipFaceAgainstHull(e,i,r,n,a,s,o){let l=new R,h=new R,c=new R,d=new R,u=new R,p=new R,g=new R,v=new R,m=this,f=[],S=n,w=f,_=-1,b=Number.MAX_VALUE;for(let I=0;I<m.faces.length;I++){l.copy(m.faceNormals[I]),r.vmult(l,l);let P=l.dot(e);P<b&&(b=P,_=I)}if(_<0)return;let A=m.faces[_];A.connectedFaces=[];for(let I=0;I<m.faces.length;I++)for(let P=0;P<m.faces[I].length;P++)A.indexOf(m.faces[I][P])!==-1&&I!==_&&A.connectedFaces.indexOf(I)===-1&&A.connectedFaces.push(I);let C=A.length;for(let I=0;I<C;I++){let P=m.vertices[A[I]],L=m.vertices[A[(I+1)%C]];P.vsub(L,h),c.copy(h),r.vmult(c,c),i.vadd(c,c),d.copy(this.faceNormals[_]),r.vmult(d,d),i.vadd(d,d),c.cross(d,u),u.negate(u),p.copy(P),r.vmult(p,p),i.vadd(p,p);let H=A.connectedFaces[I];g.copy(this.faceNormals[H]);let N=this.getPlaneConstantOfFace(H);v.copy(g),r.vmult(v,v);let U=N-v.dot(i);for(this.clipFaceAgainstPlane(S,w,v,U);S.length;)S.shift();for(;w.length;)S.push(w.shift())}g.copy(this.faceNormals[_]);let y=this.getPlaneConstantOfFace(_);v.copy(g),r.vmult(v,v);let T=y-v.dot(i);for(let I=0;I<S.length;I++){let P=v.dot(S[I])+T;if(P<=a&&(console.log(`clamped: depth=${P} to minDist=${a}`),P=a),P<=s){let L=S[I];if(P<=1e-6){let H={point:L,normal:v,depth:P};o.push(H)}}}}clipFaceAgainstPlane(e,i,r,n){let a,s,o=e.length;if(o<2)return i;let l=e[e.length-1],h=e[0];a=r.dot(l)+n;for(let c=0;c<o;c++){if(h=e[c],s=r.dot(h)+n,a<0)if(s<0){let d=new R;d.copy(h),i.push(d)}else{let d=new R;l.lerp(h,a/(a-s),d),i.push(d)}else if(s<0){let d=new R;l.lerp(h,a/(a-s),d),i.push(d),i.push(h)}l=h,a=s}return i}computeWorldVertices(e,i){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);let r=this.vertices,n=this.worldVertices;for(let a=0;a!==this.vertices.length;a++)i.vmult(r[a],n[a]),e.vadd(n[a],n[a]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,i){let r=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),i.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){let a=r[n];a.x<e.x?e.x=a.x:a.x>i.x&&(i.x=a.x),a.y<e.y?e.y=a.y:a.y>i.y&&(i.y=a.y),a.z<e.z?e.z=a.z:a.z>i.z&&(i.z=a.z)}}computeWorldFaceNormals(e){let i=this.faceNormals.length;for(;this.worldFaceNormals.length<i;)this.worldFaceNormals.push(new R);let r=this.faceNormals,n=this.worldFaceNormals;for(let a=0;a!==i;a++)e.vmult(r[a],n[a]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,i=this.vertices;for(let r=0;r!==i.length;r++){let n=i[r].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,i,r,n){let a=this.vertices,s,o,l,h,c,d,u=new R;for(let p=0;p<a.length;p++){u.copy(a[p]),i.vmult(u,u),e.vadd(u,u);let g=u;(s===void 0||g.x<s)&&(s=g.x),(h===void 0||g.x>h)&&(h=g.x),(o===void 0||g.y<o)&&(o=g.y),(c===void 0||g.y>c)&&(c=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}r.set(s,o,l),n.set(h,c,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new R);let i=this.vertices;for(let r=0;r<i.length;r++)e.vadd(i[r],e);return e.scale(1/i.length,e),e}transformAllPoints(e,i){let r=this.vertices.length,n=this.vertices;if(i){for(let a=0;a<r;a++){let s=n[a];i.vmult(s,s)}for(let a=0;a<this.faceNormals.length;a++){let s=this.faceNormals[a];i.vmult(s,s)}}if(e)for(let a=0;a<r;a++){let s=n[a];s.vadd(e,s)}}pointIsInside(e){let i=this.vertices,r=this.faces,n=this.faceNormals,a=null,s=new R;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let l=n[o],h=i[r[o][0]],c=new R;e.vsub(h,c);let d=l.dot(c),u=new R;s.vsub(h,u);let p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return a?1:-1}static project(e,i,r,n,a){let s=e.vertices.length,o=hy,l=0,h=0,c=cy,d=e.vertices;c.setZero(),mt.vectorToLocalFrame(r,n,i,o),mt.pointToLocalFrame(r,n,c,c);let u=c.dot(o);h=l=d[0].dot(o);for(let p=1;p<s;p++){let g=d[p].dot(o);g>l&&(l=g),g<h&&(h=g)}if(h-=u,l-=u,h>l){let p=h;h=l,l=p}a[0]=l,a[1]=h}},wo=[],To=[],BM=new R,hy=new R,cy=new R,As=class Ed extends Le{constructor(e){super({type:Le.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,i=this.halfExtents.y,r=this.halfExtents.z,n=R,a=[new n(-e,-i,-r),new n(e,-i,-r),new n(e,i,-r),new n(-e,i,-r),new n(-e,-i,r),new n(e,-i,r),new n(e,i,r),new n(-e,i,r)],s=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new ly({vertices:a,faces:s,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,i){return i===void 0&&(i=new R),Ed.calculateInertia(this.halfExtents,e,i),i}static calculateInertia(e,i,r){let n=e;r.x=1/12*i*(2*n.y*2*n.y+2*n.z*2*n.z),r.y=1/12*i*(2*n.x*2*n.x+2*n.z*2*n.z),r.z=1/12*i*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,i){let r=e,n=this.halfExtents;if(r[0].set(n.x,0,0),r[1].set(0,n.y,0),r[2].set(0,0,n.z),r[3].set(-n.x,0,0),r[4].set(0,-n.y,0),r[5].set(0,0,-n.z),i!==void 0)for(let a=0;a!==r.length;a++)i.vmult(r[a],r[a]);return r}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,i,r){let n=this.halfExtents,a=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let s=0;s<a.length;s++)yr.set(a[s][0],a[s][1],a[s][2]),i.vmult(yr,yr),e.vadd(yr,yr),r(yr.x,yr.y,yr.z)}calculateWorldAABB(e,i,r,n){let a=this.halfExtents;wi[0].set(a.x,a.y,a.z),wi[1].set(-a.x,a.y,a.z),wi[2].set(-a.x,-a.y,a.z),wi[3].set(-a.x,-a.y,-a.z),wi[4].set(a.x,-a.y,-a.z),wi[5].set(a.x,a.y,-a.z),wi[6].set(-a.x,a.y,-a.z),wi[7].set(a.x,-a.y,a.z);let s=wi[0];i.vmult(s,s),e.vadd(s,s),n.copy(s),r.copy(s);for(let o=1;o<8;o++){let l=wi[o];i.vmult(l,l),e.vadd(l,l);let h=l.x,c=l.y,d=l.z;h>n.x&&(n.x=h),c>n.y&&(n.y=c),d>n.z&&(n.z=d),h<r.x&&(r.x=h),c<r.y&&(r.y=c),d<r.z&&(r.z=d)}}},yr=new R,wi=[new R,new R,new R,new R,new R,new R,new R,new R],jl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Xl={AWAKE:0,SLEEPY:1,SLEEPING:2},Qe=class ct extends Sd{constructor(e){e===void 0&&(e={}),super(),this.id=ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new R,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new R,this.force=new R;let i=typeof e.mass=="number"?e.mass:0;this.mass=i,this.invMass=i>0?1/i:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=i<=0?ct.STATIC:ct.DYNAMIC,typeof e.type==typeof ct.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ct.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new ii,this.initQuaternion=new ii,this.previousQuaternion=new ii,this.interpolatedQuaternion=new ii,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new R,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new An,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new An,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new R(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new R(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new _i,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=ct.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ct.SLEEPING&&this.dispatchEvent(ct.wakeupEvent)}sleep(){this.sleepState=ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let i=this.sleepState,r=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;i===ct.AWAKE&&r<n?(this.sleepState=ct.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ct.sleepyEvent)):i===ct.SLEEPY&&r>n?this.wakeUp():i===ct.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ct.SLEEPING||this.type===ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,i){return i===void 0&&(i=new R),e.vsub(this.position,i),this.quaternion.conjugate().vmult(i,i),i}vectorToLocalFrame(e,i){return i===void 0&&(i=new R),this.quaternion.conjugate().vmult(e,i),i}pointToWorldFrame(e,i){return i===void 0&&(i=new R),this.quaternion.vmult(e,i),i.vadd(this.position,i),i}vectorToWorldFrame(e,i){return i===void 0&&(i=new R),this.quaternion.vmult(e,i),i}addShape(e,i,r){let n=new R,a=new ii;return i&&n.copy(i),r&&a.copy(r),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(a),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let i=this.shapes.indexOf(e);return i===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(i,1),this.shapeOffsets.splice(i,1),this.shapeOrientations.splice(i,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,i=this.shapeOffsets,r=e.length,n=0;for(let a=0;a!==r;a++){let s=e[a];s.updateBoundingSphereRadius();let o=i[a].length(),l=s.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){let e=this.shapes,i=this.shapeOffsets,r=this.shapeOrientations,n=e.length,a=uy,s=dy,o=this.quaternion,l=this.aabb,h=py;for(let c=0;c!==n;c++){let d=e[c];o.vmult(i[c],a),a.vadd(this.position,a),o.mult(r[c],s),d.calculateWorldAABB(a,s,h.lowerBound,h.upperBound),c===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let i=this.invInertia;if(!(i.x===i.y&&i.y===i.z&&!e)){let r=fy,n=my;r.setRotationFromQuaternion(this.quaternion),r.transpose(n),r.scale(i,r),r.mmult(n,this.invInertiaWorld)}}applyForce(e,i){if(i===void 0&&(i=new R),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();let r=gy;i.cross(e,r),this.force.vadd(e,this.force),this.torque.vadd(r,this.torque)}applyLocalForce(e,i){if(i===void 0&&(i=new R),this.type!==ct.DYNAMIC)return;let r=vy,n=_y;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyForce(r,n)}applyTorque(e){this.type===ct.DYNAMIC&&(this.sleepState===ct.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,i){if(i===void 0&&(i=new R),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();let r=i,n=xy;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);let a=yy;r.cross(e,a),this.invInertiaWorld.vmult(a,a),this.angularVelocity.vadd(a,this.angularVelocity)}applyLocalImpulse(e,i){if(i===void 0&&(i=new R),this.type!==ct.DYNAMIC)return;let r=My,n=Sy;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyImpulse(r,n)}updateMassProperties(){let e=by;this.invMass=this.mass>0?1/this.mass:0;let i=this.inertia,r=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),As.calculateInertia(e,this.mass,i),this.invInertia.set(i.x>0&&!r?1/i.x:0,i.y>0&&!r?1/i.y:0,i.z>0&&!r?1/i.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,i){let r=new R;return e.vsub(this.position,r),this.angularVelocity.cross(r,i),this.velocity.vadd(i,i),i}integrate(e,i,r){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ct.DYNAMIC||this.type===ct.KINEMATIC)||this.sleepState===ct.SLEEPING)return;let n=this.velocity,a=this.angularVelocity,s=this.position,o=this.force,l=this.torque,h=this.quaternion,c=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=c*e;n.x+=o.x*p*u.x,n.y+=o.y*p*u.y,n.z+=o.z*p*u.z;let g=d.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,S=l.z*v.z;a.x+=e*(g[0]*m+g[1]*f+g[2]*S),a.y+=e*(g[3]*m+g[4]*f+g[5]*S),a.z+=e*(g[6]*m+g[7]*f+g[8]*S),s.x+=n.x*e,s.y+=n.y*e,s.z+=n.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),i&&(r?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Qe.idCounter=0;Qe.COLLIDE_EVENT_NAME="collide";Qe.DYNAMIC=jl.DYNAMIC;Qe.STATIC=jl.STATIC;Qe.KINEMATIC=jl.KINEMATIC;Qe.AWAKE=Xl.AWAKE;Qe.SLEEPY=Xl.SLEEPY;Qe.SLEEPING=Xl.SLEEPING;Qe.wakeupEvent={type:"wakeup"};Qe.sleepyEvent={type:"sleepy"};Qe.sleepEvent={type:"sleep"};var uy=new R,dy=new ii,py=new _i,fy=new An,my=new An,zM=new An,gy=new R,vy=new R,_y=new R,xy=new R,yy=new R,My=new R,Sy=new R,by=new R,wd=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Qe.STATIC)!==0||t.sleepState===Qe.SLEEPING)&&((e.type&Qe.STATIC)!==0||e.sleepState===Qe.SLEEPING))}intersectionTest(t,e,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,r):this.doBoundingSphereBroadphase(t,e,i,r)}doBoundingSphereBroadphase(t,e,i,r){let n=Ey;e.position.vsub(t.position,n);let a=(t.boundingRadius+e.boundingRadius)**2;n.lengthSquared()<a&&(i.push(t),r.push(e))}doBoundingBoxBroadphase(t,e,i,r){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),r.push(e))}makePairsUnique(t,e){let i=wy,r=Ty,n=Ry,a=t.length;for(let s=0;s!==a;s++)r[s]=t[s],n[s]=e[s];t.length=0,e.length=0;for(let s=0;s!==a;s++){let o=r[s].id,l=n[s].id,h=o<l?`${o},${l}`:`${l},${o}`;i[h]=s,i.keys.push(h)}for(let s=0;s!==i.keys.length;s++){let o=i.keys.pop(),l=i[o];t.push(r[l]),e.push(n[l]),delete i[o]}}setWorld(t){}static boundingSphereCheck(t,e){let i=new R;t.position.vsub(e.position,i);let r=t.shapes[0],n=e.shapes[0];return Math.pow(r.boundingSphereRadius+n.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Ey=new R;new R;new ii;new R;var wy={keys:[]},Ty=[],Ry=[];new R;var VM=new R;new R;var Ay=class extends wd{constructor(){super()}collisionPairs(t,e,i){let r=t.bodies,n=r.length,a,s;for(let o=0;o!==n;o++)for(let l=0;l!==o;l++)a=r[o],s=r[l],this.needBroadphaseCollision(a,s)&&this.intersectionTest(a,s,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let r=0;r<t.bodies.length;r++){let n=t.bodies[r];n.aabbNeedsUpdate&&n.updateAABB(),n.aabb.overlaps(e)&&i.push(n)}return i}},_s=class{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,r,n,a,s){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=n,this.body=a,this.distance=s}},Td,Rd,Ad,Cd,Pd,Ld,Nd,Zl={CLOSEST:1,ANY:2,ALL:4};Td=Le.types.SPHERE;Rd=Le.types.PLANE;Ad=Le.types.BOX;Cd=Le.types.CYLINDER;Pd=Le.types.CONVEXPOLYHEDRON;Ld=Le.types.HEIGHTFIELD;Nd=Le.types.TRIMESH;var Ii=class Ci{get[Td](){return this._intersectSphere}get[Rd](){return this._intersectPlane}get[Ad](){return this._intersectBox}get[Cd](){return this._intersectConvex}get[Pd](){return this._intersectConvex}get[Ld](){return this._intersectHeightfield}get[Nd](){return this._intersectTrimesh}constructor(e,i){e===void 0&&(e=new R),i===void 0&&(i=new R),this.from=e.clone(),this.to=i.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ci.ANY,this.result=new _s,this.hasHit=!1,this.callback=r=>{}}intersectWorld(e,i){return this.mode=i.mode||Ci.ANY,this.result=i.result||new _s,this.skipBackfaces=!!i.skipBackfaces,this.collisionFilterMask=typeof i.collisionFilterMask<"u"?i.collisionFilterMask:-1,this.collisionFilterGroup=typeof i.collisionFilterGroup<"u"?i.collisionFilterGroup:-1,this.checkCollisionResponse=typeof i.checkCollisionResponse<"u"?i.checkCollisionResponse:!0,i.from&&this.from.copy(i.from),i.to&&this.to.copy(i.to),this.callback=i.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Vc),Ro.length=0,e.broadphase.aabbQuery(e,Vc,Ro),this.intersectBodies(Ro),this.hasHit}intersectBody(e,i){i&&(this.result=i,this.updateDirection());let r=this.checkCollisionResponse;if(r&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let n=Cy,a=Py;for(let s=0,o=e.shapes.length;s<o;s++){let l=e.shapes[s];if(!(r&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[s],a),e.quaternion.vmult(e.shapeOffsets[s],n),n.vadd(e.position,n),this.intersectShape(l,a,n,e),this.result.shouldStop))break}}intersectBodies(e,i){i&&(this.result=i,this.updateDirection());for(let r=0,n=e.length;!this.result.shouldStop&&r<n;r++)this.intersectBody(e[r])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,i,r,n){let a=this.from;if(Wy(a,this.direction,r)>e.boundingSphereRadius)return;let s=this[e.type];s&&s.call(this,e,i,r,n,e)}_intersectBox(e,i,r,n,a){return this._intersectConvex(e.convexPolyhedronRepresentation,i,r,n,a)}_intersectPlane(e,i,r,n,a){let s=this.from,o=this.to,l=this.direction,h=new R(0,0,1);i.vmult(h,h);let c=new R;s.vsub(r,c);let d=c.dot(h);o.vsub(r,c);let u=c.dot(h);if(d*u>0||s.distanceTo(o)<d)return;let p=h.dot(l);if(Math.abs(p)<this.precision)return;let g=new R,v=new R,m=new R;s.vsub(r,g);let f=-h.dot(g)/p;l.scale(f,v),s.vadd(v,m),this.reportIntersection(h,m,a,n,-1)}getAABB(e){let{lowerBound:i,upperBound:r}=e,n=this.to,a=this.from;i.x=Math.min(n.x,a.x),i.y=Math.min(n.y,a.y),i.z=Math.min(n.z,a.z),r.x=Math.max(n.x,a.x),r.y=Math.max(n.y,a.y),r.z=Math.max(n.z,a.z)}_intersectHeightfield(e,i,r,n,a){e.data,e.elementSize;let s=Ly;s.from.copy(this.from),s.to.copy(this.to),mt.pointToLocalFrame(r,i,s.from,s.from),mt.pointToLocalFrame(r,i,s.to,s.to),s.updateDirection();let o=Ny,l,h,c,d;l=h=0,c=d=e.data.length-1;let u=new _i;s.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),h=Math.max(h,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),c=Math.min(c,o[0]+1),d=Math.min(d,o[1]+1);for(let p=l;p<c;p++)for(let g=h;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(s)){if(e.getConvexTrianglePillar(p,g,!1),mt.pointToWorldFrame(r,i,e.pillarOffset,$a),this._intersectConvex(e.pillarConvex,i,$a,n,a,Hc),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),mt.pointToWorldFrame(r,i,e.pillarOffset,$a),this._intersectConvex(e.pillarConvex,i,$a,n,a,Hc)}}}_intersectSphere(e,i,r,n,a){let s=this.from,o=this.to,l=e.radius,h=(o.x-s.x)**2+(o.y-s.y)**2+(o.z-s.z)**2,c=2*((o.x-s.x)*(s.x-r.x)+(o.y-s.y)*(s.y-r.y)+(o.z-s.z)*(s.z-r.z)),d=(s.x-r.x)**2+(s.y-r.y)**2+(s.z-r.z)**2-l**2,u=c**2-4*h*d,p=Dy,g=Uy;if(!(u<0))if(u===0)s.lerp(o,u,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,a,n,-1);else{let v=(-c-Math.sqrt(u))/(2*h),m=(-c+Math.sqrt(u))/(2*h);if(v>=0&&v<=1&&(s.lerp(o,v,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,a,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(s.lerp(o,m,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,a,n,-1))}}_intersectConvex(e,i,r,n,a,s){let o=Iy,l=Gc,h=s&&s.faceList||null,c=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=h?h.length:c.length,S=this.result;for(let w=0;!S.shouldStop&&w<f;w++){let _=h?h[w]:w,b=c[_],A=u[_],C=i,y=r;l.copy(d[b[0]]),C.vmult(l,l),l.vadd(y,l),l.vsub(g,l),C.vmult(A,o);let T=p.dot(o);if(Math.abs(T)<this.precision)continue;let I=o.dot(l)/T;if(!(I<0)){p.scale(I,Xt),Xt.vadd(g,Xt),fi.copy(d[b[0]]),C.vmult(fi,fi),y.vadd(fi,fi);for(let P=1;!S.shouldStop&&P<b.length-1;P++){Ti.copy(d[b[P]]),Ri.copy(d[b[P+1]]),C.vmult(Ti,Ti),C.vmult(Ri,Ri),y.vadd(Ti,Ti),y.vadd(Ri,Ri);let L=Xt.distanceTo(g);!(Ci.pointInTriangle(Xt,fi,Ti,Ri)||Ci.pointInTriangle(Xt,Ti,fi,Ri))||L>m||this.reportIntersection(o,Xt,a,n,_)}}}}_intersectTrimesh(e,i,r,n,a,s){let o=Oy,l=Gy,h=ky,c=Gc,d=Fy,u=By,p=zy,g=Hy,v=Vy,m=e.indices;e.vertices;let f=this.from,S=this.to,w=this.direction;h.position.copy(r),h.quaternion.copy(i),mt.vectorToLocalFrame(r,i,w,d),mt.pointToLocalFrame(r,i,f,u),mt.pointToLocalFrame(r,i,S,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();let _=u.distanceSquared(p);e.tree.rayQuery(this,h,l);for(let b=0,A=l.length;!this.result.shouldStop&&b!==A;b++){let C=l[b];e.getNormal(C,o),e.getVertex(m[C*3],fi),fi.vsub(u,c);let y=d.dot(o),T=o.dot(c)/y;if(T<0)continue;d.scale(T,Xt),Xt.vadd(u,Xt),e.getVertex(m[C*3+1],Ti),e.getVertex(m[C*3+2],Ri);let I=Xt.distanceSquared(u);!(Ci.pointInTriangle(Xt,Ti,fi,Ri)||Ci.pointInTriangle(Xt,fi,Ti,Ri))||I>_||(mt.vectorToWorldFrame(i,o,v),mt.pointToWorldFrame(r,i,Xt,g),this.reportIntersection(v,g,a,n,C))}l.length=0}reportIntersection(e,i,r,n,a){let s=this.from,o=this.to,l=s.distanceTo(i),h=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(h.hitFaceIndex=typeof a<"u"?a:-1,this.mode){case Ci.ALL:this.hasHit=!0,h.set(s,o,e,i,r,n,l),h.hasHit=!0,this.callback(h);break;case Ci.CLOSEST:(l<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(s,o,e,i,r,n,l));break;case Ci.ANY:this.hasHit=!0,h.hasHit=!0,h.set(s,o,e,i,r,n,l),h.shouldStop=!0;break}}static pointInTriangle(e,i,r,n){n.vsub(i,Ir),r.vsub(i,Wn),e.vsub(i,Ao);let a=Ir.dot(Ir),s=Ir.dot(Wn),o=Ir.dot(Ao),l=Wn.dot(Wn),h=Wn.dot(Ao),c,d;return(c=l*o-s*h)>=0&&(d=a*h-s*o)>=0&&c+d<a*l-s*s}};Ii.CLOSEST=Zl.CLOSEST;Ii.ANY=Zl.ANY;Ii.ALL=Zl.ALL;var Vc=new _i,Ro=[],Wn=new R,Ao=new R,Cy=new R,Py=new ii,Xt=new R,fi=new R,Ti=new R,Ri=new R;new R;new _s;var Hc={faceList:[0]},$a=new R,Ly=new Ii,Ny=[],Dy=new R,Uy=new R,Iy=new R,HM=new R,GM=new R,Gc=new R,Oy=new R,Fy=new R,By=new R,zy=new R,Vy=new R,Hy=new R;new _i;var Gy=[],ky=new mt,Ir=new R,Ja=new R;function Wy(t,e,i){i.vsub(t,Ir);let r=Ir.dot(e);return e.scale(r,Ja),Ja.vadd(t,Ja),i.distanceTo(Ja)}var Dd=class Jn extends wd{static checkBounds(e,i,r){let n,a;r===0?(n=e.position.x,a=i.position.x):r===1?(n=e.position.y,a=i.position.y):r===2&&(n=e.position.z,a=i.position.z);let s=e.boundingRadius,o=i.boundingRadius,l=n+s;return a-o<l}static insertionSortX(e){for(let i=1,r=e.length;i<r;i++){let n=e[i],a;for(a=i-1;a>=0&&!(e[a].aabb.lowerBound.x<=n.aabb.lowerBound.x);a--)e[a+1]=e[a];e[a+1]=n}return e}static insertionSortY(e){for(let i=1,r=e.length;i<r;i++){let n=e[i],a;for(a=i-1;a>=0&&!(e[a].aabb.lowerBound.y<=n.aabb.lowerBound.y);a--)e[a+1]=e[a];e[a+1]=n}return e}static insertionSortZ(e){for(let i=1,r=e.length;i<r;i++){let n=e[i],a;for(a=i-1;a>=0&&!(e[a].aabb.lowerBound.z<=n.aabb.lowerBound.z);a--)e[a+1]=e[a];e[a+1]=n}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let i=this.axisList;this._addBodyHandler=r=>{i.push(r.body)},this._removeBodyHandler=r=>{let n=i.indexOf(r.body);n!==-1&&i.splice(n,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let i=0;i<e.bodies.length;i++)this.axisList.push(e.bodies[i]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,i,r){let n=this.axisList,a=n.length,s=this.axisIndex,o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==a;o++){let h=n[o];for(l=o+1;l<a;l++){let c=n[l];if(this.needBroadphaseCollision(h,c)){if(!Jn.checkBounds(h,c,s))break;this.intersectionTest(h,c,i,r)}}}}sortList(){let e=this.axisList,i=this.axisIndex,r=e.length;for(let n=0;n!==r;n++){let a=e[n];a.aabbNeedsUpdate&&a.updateAABB()}i===0?Jn.insertionSortX(e):i===1?Jn.insertionSortY(e):i===2&&Jn.insertionSortZ(e)}autoDetectAxis(){let e=0,i=0,r=0,n=0,a=0,s=0,o=this.axisList,l=o.length,h=1/l;for(let p=0;p!==l;p++){let g=o[p],v=g.position.x;e+=v,i+=v*v;let m=g.position.y;r+=m,n+=m*m;let f=g.position.z;a+=f,s+=f*f}let c=i-e*e*h,d=n-r*r*h,u=s-a*a*h;c>d?c>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,i,r){r===void 0&&(r=[]),this.dirty&&(this.sortList(),this.dirty=!1);let n=this.axisIndex,a="x";n===1&&(a="y"),n===2&&(a="z");let s=this.axisList;i.lowerBound[a],i.upperBound[a];for(let o=0;o<s.length;o++){let l=s[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(i)&&r.push(l)}return r}},Ud=class{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}},qy=class Id{constructor(e,i,r){r===void 0&&(r={}),r=Ud.defaults(r,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=i,this.id=Id.idCounter++,this.collideConnected=r.collideConnected,r.wakeUpBodies&&(e&&e.wakeUp(),i&&i.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!0}disable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!1}};qy.idCounter=0;var kc=class{constructor(){this.spatial=new R,this.rotational=new R}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Yl=class Od{constructor(e,i,r,n){r===void 0&&(r=-1e6),n===void 0&&(n=1e6),this.id=Od.idCounter++,this.minForce=r,this.maxForce=n,this.bi=e,this.bj=i,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kc,this.jacobianElementB=new kc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,i,r){let n=i,a=e,s=r;this.a=4/(s*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(s*s*a*(1+4*n))}computeB(e,i,r){let n=this.computeGW(),a=this.computeGq(),s=this.computeGiMf();return-a*e-n*i-s*r}computeGq(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,a=r.position,s=n.position;return e.spatial.dot(a)+i.spatial.dot(s)}computeGW(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,a=r.velocity,s=n.velocity,o=r.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(a,o)+i.multiplyVectors(s,l)}computeGWlambda(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,a=r.vlambda,s=n.vlambda,o=r.wlambda,l=n.wlambda;return e.multiplyVectors(a,o)+i.multiplyVectors(s,l)}computeGiMf(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,a=r.force,s=r.torque,o=n.force,l=n.torque,h=r.invMassSolve,c=n.invMassSolve;return a.scale(h,Wc),o.scale(c,qc),r.invInertiaWorldSolve.vmult(s,jc),n.invInertiaWorldSolve.vmult(l,Xc),e.multiplyVectors(Wc,jc)+i.multiplyVectors(qc,Xc)}computeGiMGt(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,a=r.invMassSolve,s=n.invMassSolve,o=r.invInertiaWorldSolve,l=n.invInertiaWorldSolve,h=a+s;return o.vmult(e.rotational,Qa),h+=Qa.dot(e.rotational),l.vmult(i.rotational,Qa),h+=Qa.dot(i.rotational),h}addToWlambda(e){let i=this.jacobianElementA,r=this.jacobianElementB,n=this.bi,a=this.bj,s=jy;n.vlambda.addScaledVector(n.invMassSolve*e,i.spatial,n.vlambda),a.vlambda.addScaledVector(a.invMassSolve*e,r.spatial,a.vlambda),n.invInertiaWorldSolve.vmult(i.rotational,s),n.wlambda.addScaledVector(e,s,n.wlambda),a.invInertiaWorldSolve.vmult(r.rotational,s),a.wlambda.addScaledVector(e,s,a.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Yl.idCounter=0;var Wc=new R,qc=new R,jc=new R,Xc=new R,Qa=new R,jy=new R,Xy=class extends Yl{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new R,this.rj=new R,this.ni=new R}computeB(t){let e=this.a,i=this.b,r=this.bi,n=this.bj,a=this.ri,s=this.rj,o=Zy,l=Yy,h=r.velocity,c=r.angularVelocity;r.force,r.torque;let d=n.velocity,u=n.angularVelocity;n.force,n.torque;let p=Ky,g=this.jacobianElementA,v=this.jacobianElementB,m=this.ni;a.cross(m,o),s.cross(m,l),m.negate(g.spatial),o.negate(g.rotational),v.spatial.copy(m),v.rotational.copy(l),p.copy(n.position),p.vadd(s,p),p.vsub(r.position,p),p.vsub(a,p);let f=m.dot(p),S=this.restitution+1,w=S*d.dot(m)-S*h.dot(m)+u.dot(l)-c.dot(o),_=this.computeGiMf();return-f*e-w*i-t*_}getImpactVelocityAlongNormal(){let t=$y,e=Jy,i=Qy,r=e1,n=t1;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(r,e),t.vsub(e,n),this.ni.dot(n)}},Zy=new R,Yy=new R,Ky=new R,$y=new R,Jy=new R,Qy=new R,e1=new R,t1=new R,kM=new R,WM=new R,qM=new R,jM=new R;new R;new R;var XM=new R,ZM=new R,YM=new R,KM=new R,Zc=class extends Yl{constructor(t,e,i){super(t,e,-i,i),this.ri=new R,this.rj=new R,this.t=new R}computeB(t){this.a;let e=this.b;this.bi,this.bj;let i=this.ri,r=this.rj,n=i1,a=r1,s=this.t;i.cross(s,n),r.cross(s,a);let o=this.jacobianElementA,l=this.jacobianElementB;s.negate(o.spatial),n.negate(o.rotational),l.spatial.copy(s),l.rotational.copy(a);let h=this.computeGW(),c=this.computeGiMf();return-h*e-t*c}},i1=new R,r1=new R,Fd=class Bd{constructor(e,i,r){r=Ud.defaults(r,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Bd.idCounter++,this.materials=[e,i],this.friction=r.friction,this.restitution=r.restitution,this.contactEquationStiffness=r.contactEquationStiffness,this.contactEquationRelaxation=r.contactEquationRelaxation,this.frictionEquationStiffness=r.frictionEquationStiffness,this.frictionEquationRelaxation=r.frictionEquationRelaxation}};Fd.idCounter=0;var zd=class Vd{constructor(e){e===void 0&&(e={});let i="";typeof e=="string"&&(i=e,e={}),this.name=i,this.id=Vd.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};zd.idCounter=0;var $M=new R,JM=new R,QM=new R,eS=new R,tS=new R,iS=new R,rS=new R,nS=new R,aS=new R,sS=new R,oS=new R,lS=new R,hS=new R;new R;new R;new R;var cS=new R,uS=new R,dS=new R;new Ii;new R;var pS=new R,fS=new R,mS=[new R(1,0,0),new R(0,1,0),new R(0,0,1)],gS=new R,vS=new R,_S=new R,xS=new R,yS=new R,MS=new R,SS=new R,bS=new R,ES=new R,wS=new R,TS=new R,Hd=class extends Le{constructor(t){if(super({type:Le.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new R);let i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,i,r){let n=this.radius,a=["x","y","z"];for(let s=0;s<a.length;s++){let o=a[s];i[o]=t[o]-n,r[o]=t[o]+n}}},RS=new R,AS=new R,CS=new R,PS=new R,LS=new R,NS=new R,DS=new R,US=new R,IS=new R,OS=new R,FS=new R,BS=new R,zS=new R,VS=new R,HS=new R,GS=new R,kS=new R,WS=new R,qS=new R,jS=new R,XS=new _i,ZS=new R,YS=new _i,KS=new R,$S=new R,JS=new R,QS=new R,eb=new R,tb=new R,ib=new R,rb=new _i,nb=new R,ab=new mt,sb=new _i,n1=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}},a1=class extends n1{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0,r=this.iterations,n=this.tolerance*this.tolerance,a=this.equations,s=a.length,o=e.bodies,l=o.length,h=t,c,d,u,p,g,v;if(s!==0)for(let w=0;w!==l;w++)o[w].updateSolveMassProperties();let m=o1,f=l1,S=s1;m.length=s,f.length=s,S.length=s;for(let w=0;w!==s;w++){let _=a[w];S[w]=0,f[w]=_.computeB(h),m[w]=1/_.computeC()}if(s!==0){for(let b=0;b!==l;b++){let A=o[b],C=A.vlambda,y=A.wlambda;C.set(0,0,0),y.set(0,0,0)}for(i=0;i!==r;i++){p=0;for(let b=0;b!==s;b++){let A=a[b];c=f[b],d=m[b],v=S[b],g=A.computeGWlambda(),u=d*(c-g-A.eps*v),v+u<A.minForce?u=A.minForce-v:v+u>A.maxForce&&(u=A.maxForce-v),S[b]+=u,p+=u>0?u:-u,A.addToWlambda(u)}if(p*p<n)break}for(let b=0;b!==l;b++){let A=o[b],C=A.velocity,y=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),C.vadd(A.vlambda,C),A.wlambda.vmul(A.angularFactor,A.wlambda),y.vadd(A.wlambda,y)}let w=a.length,_=1/h;for(;w--;)a[w].multiplier=S[w]*_}return i}},s1=[],o1=[],l1=[],ob=Qe.STATIC,h1=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},c1=class extends h1{constructor(){super(...arguments),this.type=R}constructObject(){return new R}},xt={sphereSphere:Le.types.SPHERE,spherePlane:Le.types.SPHERE|Le.types.PLANE,boxBox:Le.types.BOX|Le.types.BOX,sphereBox:Le.types.SPHERE|Le.types.BOX,planeBox:Le.types.PLANE|Le.types.BOX,convexConvex:Le.types.CONVEXPOLYHEDRON,sphereConvex:Le.types.SPHERE|Le.types.CONVEXPOLYHEDRON,planeConvex:Le.types.PLANE|Le.types.CONVEXPOLYHEDRON,boxConvex:Le.types.BOX|Le.types.CONVEXPOLYHEDRON,sphereHeightfield:Le.types.SPHERE|Le.types.HEIGHTFIELD,boxHeightfield:Le.types.BOX|Le.types.HEIGHTFIELD,convexHeightfield:Le.types.CONVEXPOLYHEDRON|Le.types.HEIGHTFIELD,sphereParticle:Le.types.PARTICLE|Le.types.SPHERE,planeParticle:Le.types.PLANE|Le.types.PARTICLE,boxParticle:Le.types.BOX|Le.types.PARTICLE,convexParticle:Le.types.PARTICLE|Le.types.CONVEXPOLYHEDRON,cylinderCylinder:Le.types.CYLINDER,sphereCylinder:Le.types.SPHERE|Le.types.CYLINDER,planeCylinder:Le.types.PLANE|Le.types.CYLINDER,boxCylinder:Le.types.BOX|Le.types.CYLINDER,convexCylinder:Le.types.CONVEXPOLYHEDRON|Le.types.CYLINDER,heightfieldCylinder:Le.types.HEIGHTFIELD|Le.types.CYLINDER,particleCylinder:Le.types.PARTICLE|Le.types.CYLINDER,sphereTrimesh:Le.types.SPHERE|Le.types.TRIMESH,planeTrimesh:Le.types.PLANE|Le.types.TRIMESH},u1=class{get[xt.sphereSphere](){return this.sphereSphere}get[xt.spherePlane](){return this.spherePlane}get[xt.boxBox](){return this.boxBox}get[xt.sphereBox](){return this.sphereBox}get[xt.planeBox](){return this.planeBox}get[xt.convexConvex](){return this.convexConvex}get[xt.sphereConvex](){return this.sphereConvex}get[xt.planeConvex](){return this.planeConvex}get[xt.boxConvex](){return this.boxConvex}get[xt.sphereHeightfield](){return this.sphereHeightfield}get[xt.boxHeightfield](){return this.boxHeightfield}get[xt.convexHeightfield](){return this.convexHeightfield}get[xt.sphereParticle](){return this.sphereParticle}get[xt.planeParticle](){return this.planeParticle}get[xt.boxParticle](){return this.boxParticle}get[xt.convexParticle](){return this.convexParticle}get[xt.cylinderCylinder](){return this.convexConvex}get[xt.sphereCylinder](){return this.sphereConvex}get[xt.planeCylinder](){return this.planeConvex}get[xt.boxCylinder](){return this.boxConvex}get[xt.convexCylinder](){return this.convexConvex}get[xt.heightfieldCylinder](){return this.heightfieldCylinder}get[xt.particleCylinder](){return this.particleCylinder}get[xt.sphereTrimesh](){return this.sphereTrimesh}get[xt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c1,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,r,n,a){let s;this.contactPointPool.length?(s=this.contactPointPool.pop(),s.bi=t,s.bj=e):s=new Xy(t,e),s.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&r.collisionResponse;let o=this.currentContactMaterial;s.restitution=o.restitution,s.setSpookParams(o.contactEquationStiffness,o.contactEquationRelaxation,this.world.dt);let l=i.material||t.material,h=r.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(s.restitution=l.restitution*h.restitution),s.si=n||i,s.sj=a||r,s}createFrictionEquationsFromContact(t,e){let i=t.bi,r=t.bj,n=t.si,a=t.sj,s=this.world,o=this.currentContactMaterial,l=o.friction,h=n.material||i.material,c=a.material||r.material;if(h&&c&&h.friction>=0&&c.friction>=0&&(l=h.friction*c.friction),l>0){let d=l*(s.frictionGravity||s.gravity).length(),u=i.invMass+r.invMass;u>0&&(u=1/u);let p=this.frictionEquationPool,g=p.length?p.pop():new Zc(i,r,d*u),v=p.length?p.pop():new Zc(i,r,d*u);return g.bi=v.bi=i,g.bj=v.bj=r,g.minForce=v.minForce=-d*u,g.maxForce=v.maxForce=d*u,g.ri.copy(t.ri),g.rj.copy(t.rj),v.ri.copy(t.ri),v.rj.copy(t.rj),t.ni.tangents(g.t,v.t),g.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,s.dt),v.setSpookParams(o.frictionEquationStiffness,o.frictionEquationRelaxation,s.dt),g.enabled=v.enabled=t.enabled,e.push(g,v),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Dr.setZero(),pn.setZero(),fn.setZero();let n=e.bi;e.bj;for(let s=0;s!==t;s++)e=this.result[this.result.length-1-s],e.bi!==n?(Dr.vadd(e.ni,Dr),pn.vadd(e.ri,pn),fn.vadd(e.rj,fn)):(Dr.vsub(e.ni,Dr),pn.vadd(e.rj,pn),fn.vadd(e.ri,fn));let a=1/t;pn.scale(a,i.ri),fn.scale(a,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Dr.normalize(),Dr.tangents(i.t,r.t)}getContacts(t,e,i,r,n,a,s){this.contactPointPool=n,this.frictionEquationPool=s,this.result=r,this.frictionResult=a;let o=f1,l=m1,h=d1,c=p1;for(let d=0,u=t.length;d!==u;d++){let p=t[d],g=e[d],v=null;p.material&&g.material&&(v=i.getContactMaterial(p.material,g.material)||null);let m=p.type&Qe.KINEMATIC&&g.type&Qe.STATIC||p.type&Qe.STATIC&&g.type&Qe.KINEMATIC||p.type&Qe.KINEMATIC&&g.type&Qe.KINEMATIC;for(let f=0;f<p.shapes.length;f++){p.quaternion.mult(p.shapeOrientations[f],o),p.quaternion.vmult(p.shapeOffsets[f],h),h.vadd(p.position,h);let S=p.shapes[f];for(let w=0;w<g.shapes.length;w++){g.quaternion.mult(g.shapeOrientations[w],l),g.quaternion.vmult(g.shapeOffsets[w],c),c.vadd(g.position,c);let _=g.shapes[w];if(!(S.collisionFilterMask&_.collisionFilterGroup&&_.collisionFilterMask&S.collisionFilterGroup)||h.distanceTo(c)>S.boundingSphereRadius+_.boundingSphereRadius)continue;let b=null;S.material&&_.material&&(b=i.getContactMaterial(S.material,_.material)||null),this.currentContactMaterial=b||v||i.defaultContactMaterial;let A=S.type|_.type,C=this[A];if(C){let y=!1;S.type<_.type?y=C.call(this,S,_,h,c,o,l,p,g,S,_,m):y=C.call(this,_,S,c,h,l,o,g,p,S,_,m),y&&m&&(i.shapeOverlapKeeper.set(S.id,_.id),i.bodyOverlapKeeper.set(p.id,g.id))}}}}}sphereSphere(t,e,i,r,n,a,s,o,l,h,c){if(c)return i.distanceSquared(r)<(t.radius+e.radius)**2;let d=this.createContactEquation(s,o,t,e,l,h);r.vsub(i,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(i,d.ri),d.ri.vsub(s.position,d.ri),d.rj.vadd(r,d.rj),d.rj.vsub(o.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,i,r,n,a,s,o,l,h,c){let d=this.createContactEquation(s,o,t,e,l,h);if(d.ni.set(0,0,1),a.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),i.vsub(r,es),d.ni.scale(d.ni.dot(es),Yc),es.vsub(Yc,d.rj),-es.dot(d.ni)<=t.radius){if(c)return!0;let u=d.ri,p=d.rj;u.vadd(i,u),u.vsub(s.position,u),p.vadd(r,p),p.vsub(o.position,p),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,i,r,n,a,s,o,l,h,c){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,r,n,a,s,o,t,e,c)}sphereBox(t,e,i,r,n,a,s,o,l,h,c){let d=this.v3pool,u=H1;i.vsub(r,ts),e.getSideNormals(u,a);let p=t.radius,g=!1,v=k1,m=W1,f=q1,S=null,w=0,_=0,b=0,A=null;for(let U=0,j=u.length;U!==j&&g===!1;U++){let q=B1;q.copy(u[U]);let ie=q.length();q.normalize();let K=ts.dot(q);if(K<ie+p&&K>0){let Q=z1,$=V1;Q.copy(u[(U+1)%3]),$.copy(u[(U+2)%3]);let Oe=Q.length(),Me=$.length();Q.normalize(),$.normalize();let Je=ts.dot(Q),Ge=ts.dot($);if(Je<Oe&&Je>-Oe&&Ge<Me&&Ge>-Me){let te=Math.abs(K-ie-p);if((A===null||te<A)&&(A=te,_=Je,b=Ge,S=ie,v.copy(q),m.copy(Q),f.copy($),w++,c))return!0}}}if(w){g=!0;let U=this.createContactEquation(s,o,t,e,l,h);v.scale(-p,U.ri),U.ni.copy(v),U.ni.negate(U.ni),v.scale(S,v),m.scale(_,m),v.vadd(m,v),f.scale(b,f),v.vadd(f,U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(s.position,U.ri),U.rj.vadd(r,U.rj),U.rj.vsub(o.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let C=d.get(),y=G1;for(let U=0;U!==2&&!g;U++)for(let j=0;j!==2&&!g;j++)for(let q=0;q!==2&&!g;q++)if(C.set(0,0,0),U?C.vadd(u[0],C):C.vsub(u[0],C),j?C.vadd(u[1],C):C.vsub(u[1],C),q?C.vadd(u[2],C):C.vsub(u[2],C),r.vadd(C,y),y.vsub(i,y),y.lengthSquared()<p*p){if(c)return!0;g=!0;let ie=this.createContactEquation(s,o,t,e,l,h);ie.ri.copy(y),ie.ri.normalize(),ie.ni.copy(ie.ri),ie.ri.scale(p,ie.ri),ie.rj.copy(C),ie.ri.vadd(i,ie.ri),ie.ri.vsub(s.position,ie.ri),ie.rj.vadd(r,ie.rj),ie.rj.vsub(o.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}d.release(C),C=null;let T=d.get(),I=d.get(),P=d.get(),L=d.get(),H=d.get(),N=u.length;for(let U=0;U!==N&&!g;U++)for(let j=0;j!==N&&!g;j++)if(U%3!==j%3){u[j].cross(u[U],T),T.normalize(),u[U].vadd(u[j],I),P.copy(i),P.vsub(I,P),P.vsub(r,P);let q=P.dot(T);T.scale(q,L);let ie=0;for(;ie===U%3||ie===j%3;)ie++;H.copy(i),H.vsub(L,H),H.vsub(I,H),H.vsub(r,H);let K=Math.abs(q),Q=H.length();if(K<u[ie].length()&&Q<p){if(c)return!0;g=!0;let $=this.createContactEquation(s,o,t,e,l,h);I.vadd(L,$.rj),$.rj.copy($.rj),H.negate($.ni),$.ni.normalize(),$.ri.copy($.rj),$.ri.vadd(r,$.ri),$.ri.vsub(i,$.ri),$.ri.normalize(),$.ri.scale(p,$.ri),$.ri.vadd(i,$.ri),$.ri.vsub(s.position,$.ri),$.rj.vadd(r,$.rj),$.rj.vsub(o.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}d.release(T,I,P,L,H)}planeBox(t,e,i,r,n,a,s,o,l,h,c){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,r,n,a,s,o,t,e,c)}convexConvex(t,e,i,r,n,a,s,o,l,h,c,d,u){let p=sM;if(!(i.distanceTo(r)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,n,r,a,p,d,u)){let g=[],v=oM;t.clipAgainstHull(i,n,e,r,a,p,-100,100,g);let m=0;for(let f=0;f!==g.length;f++){if(c)return!0;let S=this.createContactEquation(s,o,t,e,l,h),w=S.ri,_=S.rj;p.negate(S.ni),g[f].normal.negate(v),v.scale(g[f].depth,v),g[f].point.vadd(v,w),_.copy(g[f].point),w.vsub(i,w),_.vsub(r,_),w.vadd(i,w),w.vsub(s.position,w),_.vadd(r,_),_.vsub(o.position,_),this.result.push(S),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,i,r,n,a,s,o,l,h,c){let d=this.v3pool;i.vsub(r,j1);let u=e.faceNormals,p=e.faces,g=e.vertices,v=t.radius,m=!1;for(let f=0;f!==g.length;f++){let S=g[f],w=K1;a.vmult(S,w),r.vadd(w,w);let _=Y1;if(w.vsub(i,_),_.lengthSquared()<v*v){if(c)return!0;m=!0;let b=this.createContactEquation(s,o,t,e,l,h);b.ri.copy(_),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(v,b.ri),w.vsub(r,b.rj),b.ri.vadd(i,b.ri),b.ri.vsub(s.position,b.ri),b.rj.vadd(r,b.rj),b.rj.vsub(o.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let f=0,S=p.length;f!==S&&m===!1;f++){let w=u[f],_=p[f],b=$1;a.vmult(w,b);let A=J1;a.vmult(g[_[0]],A),A.vadd(r,A);let C=Q1;b.scale(-v,C),i.vadd(C,C);let y=eM;C.vsub(A,y);let T=y.dot(b),I=tM;if(i.vsub(A,I),T<0&&I.dot(b)>0){let P=[];for(let L=0,H=_.length;L!==H;L++){let N=d.get();a.vmult(g[_[L]],N),r.vadd(N,N),P.push(N)}if(F1(P,b,i)){if(c)return!0;m=!0;let L=this.createContactEquation(s,o,t,e,l,h);b.scale(-v,L.ri),b.negate(L.ni);let H=d.get();b.scale(-T,H);let N=d.get();b.scale(-v,N),i.vsub(r,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(H,L.rj),L.rj.vadd(r,L.rj),L.rj.vsub(o.position,L.rj),L.ri.vadd(i,L.ri),L.ri.vsub(s.position,L.ri),d.release(H),d.release(N),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let U=0,j=P.length;U!==j;U++)d.release(P[U]);return}else for(let L=0;L!==_.length;L++){let H=d.get(),N=d.get();a.vmult(g[_[(L+1)%_.length]],H),a.vmult(g[_[(L+2)%_.length]],N),r.vadd(H,H),r.vadd(N,N);let U=X1;N.vsub(H,U);let j=Z1;U.unit(j);let q=d.get(),ie=d.get();i.vsub(H,ie);let K=ie.dot(j);j.scale(K,q),q.vadd(H,q);let Q=d.get();if(q.vsub(i,Q),K>0&&K*K<U.lengthSquared()&&Q.lengthSquared()<v*v){if(c)return!0;let $=this.createContactEquation(s,o,t,e,l,h);q.vsub(r,$.rj),q.vsub(i,$.ni),$.ni.normalize(),$.ni.scale(v,$.ri),$.rj.vadd(r,$.rj),$.rj.vsub(o.position,$.rj),$.ri.vadd(i,$.ri),$.ri.vsub(s.position,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(let Oe=0,Me=P.length;Oe!==Me;Oe++)d.release(P[Oe]);d.release(H),d.release(N),d.release(q),d.release(Q),d.release(ie);return}d.release(H),d.release(N),d.release(q),d.release(Q),d.release(ie)}for(let L=0,H=P.length;L!==H;L++)d.release(P[L])}}}planeConvex(t,e,i,r,n,a,s,o,l,h,c){let d=iM,u=rM;u.set(0,0,1),n.vmult(u,u);let p=0,g=nM;for(let v=0;v!==e.vertices.length;v++)if(d.copy(e.vertices[v]),a.vmult(d,d),r.vadd(d,d),d.vsub(i,g),u.dot(g)<=0){if(c)return!0;let m=this.createContactEquation(s,o,t,e,l,h),f=aM;u.scale(u.dot(g),f),d.vsub(f,f),f.vsub(i,m.ri),m.ni.copy(u),d.vsub(r,m.rj),m.ri.vadd(i,m.ri),m.ri.vsub(s.position,m.ri),m.rj.vadd(r,m.rj),m.rj.vsub(o.position,m.rj),this.result.push(m),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(m,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,i,r,n,a,s,o,l,h,c){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,r,n,a,s,o,t,e,c)}sphereHeightfield(t,e,i,r,n,a,s,o,l,h,c){let d=e.data,u=t.radius,p=e.elementSize,g=xM,v=_M;mt.pointToLocalFrame(r,a,i,v);let m=Math.floor((v.x-u)/p)-1,f=Math.ceil((v.x+u)/p)+1,S=Math.floor((v.y-u)/p)-1,w=Math.ceil((v.y+u)/p)+1;if(f<0||w<0||m>d.length||S>d[0].length)return;m<0&&(m=0),f<0&&(f=0),S<0&&(S=0),w<0&&(w=0),m>=d.length&&(m=d.length-1),f>=d.length&&(f=d.length-1),w>=d[0].length&&(w=d[0].length-1),S>=d[0].length&&(S=d[0].length-1);let _=[];e.getRectMinMax(m,S,f,w,_);let b=_[0],A=_[1];if(v.z-u>A||v.z+u<b)return;let C=this.result;for(let y=m;y<f;y++)for(let T=S;T<w;T++){let I=C.length,P=!1;if(e.getConvexTrianglePillar(y,T,!1),mt.pointToWorldFrame(r,a,e.pillarOffset,g),i.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.sphereConvex(t,e.pillarConvex,i,g,n,a,s,o,t,e,c)),c&&P||(e.getConvexTrianglePillar(y,T,!0),mt.pointToWorldFrame(r,a,e.pillarOffset,g),i.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.sphereConvex(t,e.pillarConvex,i,g,n,a,s,o,t,e,c)),c&&P))return!0;if(C.length-I>2)return}}boxHeightfield(t,e,i,r,n,a,s,o,l,h,c){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,r,n,a,s,o,t,e,c)}convexHeightfield(t,e,i,r,n,a,s,o,l,h,c){let d=e.data,u=e.elementSize,p=t.boundingSphereRadius,g=gM,v=vM,m=mM;mt.pointToLocalFrame(r,a,i,m);let f=Math.floor((m.x-p)/u)-1,S=Math.ceil((m.x+p)/u)+1,w=Math.floor((m.y-p)/u)-1,_=Math.ceil((m.y+p)/u)+1;if(S<0||_<0||f>d.length||w>d[0].length)return;f<0&&(f=0),S<0&&(S=0),w<0&&(w=0),_<0&&(_=0),f>=d.length&&(f=d.length-1),S>=d.length&&(S=d.length-1),_>=d[0].length&&(_=d[0].length-1),w>=d[0].length&&(w=d[0].length-1);let b=[];e.getRectMinMax(f,w,S,_,b);let A=b[0],C=b[1];if(!(m.z-p>C||m.z+p<A))for(let y=f;y<S;y++)for(let T=w;T<_;T++){let I=!1;if(e.getConvexTrianglePillar(y,T,!1),mt.pointToWorldFrame(r,a,e.pillarOffset,g),i.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,i,g,n,a,s,o,null,null,c,v,null)),c&&I||(e.getConvexTrianglePillar(y,T,!0),mt.pointToWorldFrame(r,a,e.pillarOffset,g),i.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,i,g,n,a,s,o,null,null,c,v,null)),c&&I))return!0}}sphereParticle(t,e,i,r,n,a,s,o,l,h,c){let d=uM;if(d.set(0,0,1),r.vsub(i,d),d.lengthSquared()<=t.radius*t.radius){if(c)return!0;let u=this.createContactEquation(o,s,e,t,l,h);d.normalize(),u.rj.copy(d),u.rj.scale(t.radius,u.rj),u.ni.copy(d),u.ni.negate(u.ni),u.ri.set(0,0,0),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}planeParticle(t,e,i,r,n,a,s,o,l,h,c){let d=lM;d.set(0,0,1),s.quaternion.vmult(d,d);let u=hM;if(r.vsub(s.position,u),d.dot(u)<=0){if(c)return!0;let p=this.createContactEquation(o,s,e,t,l,h);p.ni.copy(d),p.ni.negate(p.ni),p.ri.set(0,0,0);let g=cM;d.scale(d.dot(r),g),r.vsub(g,g),p.rj.copy(g),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,i,r,n,a,s,o,l,h,c){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,r,n,a,s,o,t,e,c)}convexParticle(t,e,i,r,n,a,s,o,l,h,c){let d=-1,u=pM,p=fM,g=null,v=dM;if(v.copy(r),v.vsub(i,v),n.conjugate(Kc),Kc.vmult(v,v),t.pointIsInside(v)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,n),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(n);for(let m=0,f=t.faces.length;m!==f;m++){let S=[t.worldVertices[t.faces[m][0]]],w=t.worldFaceNormals[m];r.vsub(S[0],$c);let _=-w.dot($c);if(g===null||Math.abs(_)<Math.abs(g)){if(c)return!0;g=_,d=m,u.copy(w)}}if(d!==-1){let m=this.createContactEquation(o,s,e,t,l,h);u.scale(g,p),p.vadd(r,p),p.vsub(i,p),m.rj.copy(p),u.negate(m.ni),m.ri.set(0,0,0);let f=m.ri,S=m.rj;f.vadd(r,f),f.vsub(o.position,f),S.vadd(i,S),S.vsub(s.position,S),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,r,n,a,s,o,l,h,c){return this.convexHeightfield(e,t,r,i,a,n,o,s,l,h,c)}particleCylinder(t,e,i,r,n,a,s,o,l,h,c){return this.convexParticle(e,t,r,i,a,n,o,s,l,h,c)}sphereTrimesh(t,e,i,r,n,a,s,o,l,h,c){let d=b1,u=E1,p=w1,g=T1,v=R1,m=A1,f=N1,S=S1,w=y1,_=D1;mt.pointToLocalFrame(r,a,i,v);let b=t.radius;f.lowerBound.set(v.x-b,v.y-b,v.z-b),f.upperBound.set(v.x+b,v.y+b,v.z+b),e.getTrianglesInAABB(f,_);let A=M1,C=t.radius*t.radius;for(let L=0;L<_.length;L++)for(let H=0;H<3;H++)if(e.getVertex(e.indices[_[L]*3+H],A),A.vsub(v,w),w.lengthSquared()<=C){if(S.copy(A),mt.pointToWorldFrame(r,a,S,A),A.vsub(i,w),c)return!0;let N=this.createContactEquation(s,o,t,e,l,h);N.ni.copy(w),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(i,N.ri),N.ri.vsub(s.position,N.ri),N.rj.copy(A),N.rj.vsub(o.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let L=0;L<_.length;L++)for(let H=0;H<3;H++){e.getVertex(e.indices[_[L]*3+H],d),e.getVertex(e.indices[_[L]*3+(H+1)%3],u),u.vsub(d,p),v.vsub(u,m);let N=m.dot(p);v.vsub(d,m);let U=m.dot(p);if(U>0&&N<0&&(v.vsub(d,m),g.copy(p),g.normalize(),U=m.dot(g),g.scale(U,m),m.vadd(d,m),m.distanceTo(v)<t.radius)){if(c)return!0;let j=this.createContactEquation(s,o,t,e,l,h);m.vsub(v,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(i,j.ri),j.ri.vsub(s.position,j.ri),mt.pointToWorldFrame(r,a,m,m),m.vsub(o.position,j.rj),mt.vectorToWorldFrame(a,j.ni,j.ni),mt.vectorToWorldFrame(a,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}let y=C1,T=P1,I=L1,P=x1;for(let L=0,H=_.length;L!==H;L++){e.getTriangleVertices(_[L],y,T,I),e.getNormal(_[L],P),v.vsub(y,m);let N=m.dot(P);if(P.scale(N,m),v.vsub(m,m),N=m.distanceTo(v),Ii.pointInTriangle(m,y,T,I)&&N<t.radius){if(c)return!0;let U=this.createContactEquation(s,o,t,e,l,h);m.vsub(v,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(i,U.ri),U.ri.vsub(s.position,U.ri),mt.pointToWorldFrame(r,a,m,m),m.vsub(o.position,U.rj),mt.vectorToWorldFrame(a,U.ni,U.ni),mt.vectorToWorldFrame(a,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}_.length=0}planeTrimesh(t,e,i,r,n,a,s,o,l,h,c){let d=new R,u=g1;u.set(0,0,1),n.vmult(u,u);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,d);let g=new R;g.copy(d),mt.pointToWorldFrame(r,a,g,d);let v=v1;if(d.vsub(i,v),u.dot(v)<=0){if(c)return!0;let m=this.createContactEquation(s,o,t,e,l,h);m.ni.copy(u);let f=_1;u.scale(v.dot(u),f),d.vsub(f,f),m.ri.copy(f),m.ri.vsub(s.position,m.ri),m.rj.copy(d),m.rj.vsub(o.position,m.rj),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}}},Dr=new R,pn=new R,fn=new R,d1=new R,p1=new R,f1=new ii,m1=new ii,g1=new R,v1=new R,_1=new R,x1=new R,y1=new R;new R;var M1=new R,S1=new R,b1=new R,E1=new R,w1=new R,T1=new R,R1=new R,A1=new R,C1=new R,P1=new R,L1=new R,N1=new _i,D1=[],es=new R,Yc=new R,U1=new R,I1=new R,O1=new R;function F1(t,e,i){let r=null,n=t.length;for(let a=0;a!==n;a++){let s=t[a],o=U1;t[(a+1)%n].vsub(s,o);let l=I1;o.cross(e,l);let h=O1;i.vsub(s,h);let c=l.dot(h);if(r===null||c>0&&r===!0||c<=0&&r===!1){r===null&&(r=c>0);continue}else return!1}return!0}var ts=new R,B1=new R,z1=new R,V1=new R,H1=[new R,new R,new R,new R,new R,new R],G1=new R,k1=new R,W1=new R,q1=new R,j1=new R,X1=new R,Z1=new R,Y1=new R,K1=new R,$1=new R,J1=new R,Q1=new R,eM=new R,tM=new R;new R;new R;var iM=new R,rM=new R,nM=new R,aM=new R,sM=new R,oM=new R,lM=new R,hM=new R,cM=new R,uM=new R,Kc=new ii,dM=new R;new R;var pM=new R,$c=new R,fM=new R,mM=new R,gM=new R,vM=[0],_M=new R,xM=new R,Jc=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let i=e;e=t,t=i}return t<<16|e}set(t,e){let i=this.getKey(t,e),r=this.current,n=0;for(;i>r[n];)n++;if(i!==r[n]){for(let a=r.length-1;a>=n;a--)r[a+1]=r[a];r[n]=i}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let i=this.current,r=this.previous,n=i.length,a=r.length,s=0;for(let o=0;o<n;o++){let l=!1,h=i[o];for(;h>r[s];)s++;l=h===r[s],l||Qc(t,h)}s=0;for(let o=0;o<a;o++){let l=!1,h=r[o];for(;h>i[s];)s++;l=i[s]===h,l||Qc(e,h)}}};function Qc(t,e){t.push((e&4294901760)>>16,e&65535)}var Co=(t,e)=>t<e?`${t}-${e}`:`${e}-${t}`,yM=class{constructor(){this.data={keys:[]}}get(t,e){let i=Co(t,e);return this.data[i]}set(t,e,i){let r=Co(t,e);this.get(t,e)||this.data.keys.push(r),this.data[r]=i}delete(t,e){let i=Co(t,e),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let i=e.pop();delete t[i]}}},Gd=class extends Sd{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new R,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new R,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ay,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new a1,this.constraints=[],this.narrowphase=new u1(this),this.collisionMatrix=new Bc,this.collisionMatrixPrevious=new Bc,this.bodyOverlapKeeper=new Jc,this.shapeOverlapKeeper=new Jc,this.contactmaterials=[],this.contactMaterialTable=new yM,this.defaultMaterial=new zd("default"),this.defaultContactMaterial=new Fd(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof _s?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,r){return i===void 0&&(i={}),i.mode=Ii.ALL,i.from=t,i.to=e,i.callback=r,Po.intersectWorld(this,i)}raycastAny(t,e,i,r){return i===void 0&&(i={}),i.mode=Ii.ANY,i.from=t,i.to=e,i.result=r,Po.intersectWorld(this,i)}raycastClosest(t,e,i,r){return i===void 0&&(i={}),i.mode=Ii.CLOSEST,i.from=t,i.to=e,i.result=r,Po.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Qe&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,i=this.bodies,r=i.indexOf(t);if(r!==-1){i.splice(r,1);for(let n=0;n!==i.length;n++)i[n].index=n;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let i=0;i<e.length;i++){let r=e[i].shapes;for(let n=0;n<r.length;n++){let a=r[n];if(a.id===t)return a}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let i=Dt.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let r=i-this.lastCallTime;this.step(t,r,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let r=Dt.now(),n=0;for(;this.accumulator>=t&&n<i&&(this.internalStep(t),this.accumulator-=t,n++,!(Dt.now()-r>t*1e3)););this.accumulator=this.accumulator%t;let a=this.accumulator/t;for(let s=0;s!==this.bodies.length;s++){let o=this.bodies[s];o.previousPosition.lerp(o.position,a,o.interpolatedPosition),o.previousQuaternion.slerp(o.quaternion,a,o.interpolatedQuaternion),o.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,i=wM,r=TM,n=this.bodies.length,a=this.bodies,s=this.solver,o=this.gravity,l=this.doProfiling,h=this.profile,c=Qe.DYNAMIC,d=-1/0,u=this.constraints,p=EM;o.length();let g=o.x,v=o.y,m=o.z,f=0;for(l&&(d=Dt.now()),f=0;f!==n;f++){let P=a[f];if(P.type===c){let L=P.force,H=P.mass;L.x+=H*g,L.y+=H*v,L.z+=H*m}}for(let P=0,L=this.subsystems.length;P!==L;P++)this.subsystems[P].update();l&&(d=Dt.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),l&&(h.broadphase=Dt.now()-d);let S=u.length;for(f=0;f!==S;f++){let P=u[f];if(!P.collideConnected)for(let L=i.length-1;L>=0;L-=1)(P.bodyA===i[L]&&P.bodyB===r[L]||P.bodyB===i[L]&&P.bodyA===r[L])&&(i.splice(L,1),r.splice(L,1))}this.collisionMatrixTick(),l&&(d=Dt.now());let w=bM,_=e.length;for(f=0;f!==_;f++)w.push(e[f]);e.length=0;let b=this.frictionEquations.length;for(f=0;f!==b;f++)p.push(this.frictionEquations[f]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,e,w,this.frictionEquations,p),l&&(h.narrowphase=Dt.now()-d),l&&(d=Dt.now()),f=0;f<this.frictionEquations.length;f++)s.addEquation(this.frictionEquations[f]);let A=e.length;for(let P=0;P!==A;P++){let L=e[P],H=L.bi,N=L.bj,U=L.si,j=L.sj,q;if(H.material&&N.material?q=this.getContactMaterial(H.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,H.material&&N.material&&(H.material.friction>=0&&N.material.friction>=0&&H.material.friction*N.material.friction,H.material.restitution>=0&&N.material.restitution>=0&&(L.restitution=H.material.restitution*N.material.restitution)),s.addEquation(L),H.allowSleep&&H.type===Qe.DYNAMIC&&H.sleepState===Qe.SLEEPING&&N.sleepState===Qe.AWAKE&&N.type!==Qe.STATIC){let ie=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),K=N.sleepSpeedLimit**2;ie>=K*2&&(H.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Qe.DYNAMIC&&N.sleepState===Qe.SLEEPING&&H.sleepState===Qe.AWAKE&&H.type!==Qe.STATIC){let ie=H.velocity.lengthSquared()+H.angularVelocity.lengthSquared(),K=H.sleepSpeedLimit**2;ie>=K*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(H,N,!0),this.collisionMatrixPrevious.get(H,N)||(qn.body=N,qn.contact=L,H.dispatchEvent(qn),qn.body=H,N.dispatchEvent(qn)),this.bodyOverlapKeeper.set(H.id,N.id),this.shapeOverlapKeeper.set(U.id,j.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Dt.now()-d,d=Dt.now()),f=0;f!==n;f++){let P=a[f];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(S=u.length,f=0;f!==S;f++){let P=u[f];P.update();for(let L=0,H=P.equations.length;L!==H;L++){let N=P.equations[L];s.addEquation(N)}}s.solve(t,this),l&&(h.solve=Dt.now()-d),s.removeAllEquations();let C=Math.pow;for(f=0;f!==n;f++){let P=a[f];if(P.type&c){let L=C(1-P.linearDamping,t),H=P.velocity;H.scale(L,H);let N=P.angularVelocity;if(N){let U=C(1-P.angularDamping,t);N.scale(U,N)}}}this.dispatchEvent(SM),l&&(d=Dt.now());let y=this.stepnumber%(this.quatNormalizeSkip+1)===0,T=this.quatNormalizeFast;for(f=0;f!==n;f++)a[f].integrate(t,y,T);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Dt.now()-d),this.stepnumber+=1,this.dispatchEvent(MM);let I=!0;if(this.allowSleep)for(I=!1,f=0;f!==n;f++){let P=a[f];P.sleepTick(this.time),P.sleepState!==Qe.SLEEPING&&(I=!0)}this.hasActiveBodies=I}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Qi,er),t){for(let n=0,a=Qi.length;n<a;n+=2)jn.bodyA=this.getBodyById(Qi[n]),jn.bodyB=this.getBodyById(Qi[n+1]),this.dispatchEvent(jn);jn.bodyA=jn.bodyB=null}if(e){for(let n=0,a=er.length;n<a;n+=2)Xn.bodyA=this.getBodyById(er[n]),Xn.bodyB=this.getBodyById(er[n+1]),this.dispatchEvent(Xn);Xn.bodyA=Xn.bodyB=null}Qi.length=er.length=0;let i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(Qi,er),i){for(let n=0,a=Qi.length;n<a;n+=2){let s=this.getShapeById(Qi[n]),o=this.getShapeById(Qi[n+1]);tr.shapeA=s,tr.shapeB=o,s&&(tr.bodyA=s.body),o&&(tr.bodyB=o.body),this.dispatchEvent(tr)}tr.bodyA=tr.bodyB=tr.shapeA=tr.shapeB=null}if(r){for(let n=0,a=er.length;n<a;n+=2){let s=this.getShapeById(er[n]),o=this.getShapeById(er[n+1]);ir.shapeA=s,ir.shapeB=o,s&&(ir.bodyA=s.body),o&&(ir.bodyB=o.body),this.dispatchEvent(ir)}ir.bodyA=ir.bodyB=ir.shapeA=ir.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let i=0;i!==e;i++){let r=t[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}};new _i;var Po=new Ii,Dt=globalThis.performance||{};if(!Dt.now){let t=Date.now();Dt.timing&&Dt.timing.navigationStart&&(t=Dt.timing.navigationStart),Dt.now=()=>Date.now()-t}new R;var MM={type:"postStep"},SM={type:"preStep"},qn={type:Qe.COLLIDE_EVENT_NAME,body:null,contact:null},bM=[],EM=[],wM=[],TM=[],Qi=[],er=[],jn={type:"beginContact",bodyA:null,bodyB:null},Xn={type:"endContact",bodyA:null,bodyB:null},tr={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ir={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var RM=[{x:0,z:0,type:"living"},{x:0,z:-34,type:"kitchen"},{x:26,z:-34,type:"office"},{x:26,z:0,type:"bedroom"},{x:26,z:-68,type:"library"},{x:0,z:-68,type:"workshop"},{x:52,z:-68,type:"studio"},{x:52,z:-34,type:"greenhouse"}],kd=["Erste Runde","Durch die K\xFCche","Besuch im Arbeitszimmer","Eine ganze Wohnung","Bis zur Bibliothek","Gro\xDFe Hausrunde","Das Atelier","Das ganze Haus"],AM=[[-5,3.8,8],[0,4.8,3],[5,5.8,-3],[5,6.8,-9],[0,7.8,-12],[-5,6.8,-10],[-7,5.8,-3],[-5,4.8,3],[0,3.5,8],[6,2.8,11],[7,4.2,5],[2,6,0]];function CM(t){let e=t+1,i=RM.slice(0,e).map(a=>({...a})),r=i.flatMap((a,s)=>AM.map(([o,l,h],c)=>({id:`${e}-${s+1}-${c+1}`,x:a.x+o,y:l+(s%2?.25:0),z:a.z+h}))),n=i.map((a,s)=>({x:a.x+(s%2?5:-5),z:a.z+(s%2?6:-8),layers:5+s%3}));return n.push({x:5,z:6,layers:5}),{id:e,name:kd[t],rooms:i,ceiling:10,goalBlocks:12+t*8,collectibles:r,towers:n,thermals:i.map((a,s)=>({x:a.x+(s%2?-3:3),z:a.z+(s%2?3:-3),r:2.5})),start:{x:0,y:2.7,z:11},bounds:{minX:Math.min(...i.map(a=>a.x))-26/2,maxX:Math.max(...i.map(a=>a.x))+26/2,minZ:Math.min(...i.map(a=>a.z))-34/2,maxZ:Math.max(...i.map(a=>a.z))+34/2}}}var or=kd.map((t,e)=>CM(e));function Cs(t=0){return or[Math.max(0,Math.min(or.length-1,Math.floor(Number(t)||0)))]}function Ps(t){let e=new Map(t.rooms.map(a=>[`${a.x},${a.z}`,a])),i=new Set,r=[],n=[{side:"west",dx:-26,dz:0,axis:"z",length:34},{side:"east",dx:26,dz:0,axis:"z",length:34},{side:"north",dx:0,dz:-34,axis:"x",length:26},{side:"south",dx:0,dz:34,axis:"x",length:26}];for(let a of t.rooms)for(let s of n){let o=a.x+s.dx/2,l=a.z+s.dz/2,h=`${s.axis}:${o},${l}`;if(i.has(h))continue;i.add(h);let c=e.has(`${a.x+s.dx},${a.z+s.dz}`),d=(u,p,g,v)=>{r.push({key:`${h}:${r.length}`,side:s.side,interior:c,door:c,size:s.axis==="x"?[u,p,.3]:[.3,p,u],position:[o+(s.axis==="x"?g:0),v,l+(s.axis==="z"?g:0)]})};if(c){let u=(s.length-9)/2,p=(s.length+9)/4;d(u,t.ceiling,-p,t.ceiling/2),d(u,t.ceiling,p,t.ceiling/2),d(9,t.ceiling-7.4,0,(t.ceiling+7.4)/2)}else d(s.length,t.ceiling,0,t.ceiling/2)}return r}function qd(t=Cs(0)){let e=new Gd({gravity:new R(0,-9.82,0),allowSleep:!0});e.broadphase=new Dd(e),e.solver.iterations=10,e.defaultContactMaterial.friction=.55,e.defaultContactMaterial.restitution=.08;let i=[];function r(h,c,d="solid"){let u=new Qe({mass:0,shape:new As(new R(...h.map(p=>p/2))),position:new R(...c)});return u.kind=d,e.addBody(u),u}for(let h of t.rooms)r([26,.4,34],[h.x,-.2,h.z]),r([26,.4,34],[h.x,t.ceiling+.2,h.z],"ceiling");for(let h of Ps(t))r(h.size,h.position);for(let h of t.towers)for(let c=0;c<h.layers;c++)for(let d=0;d<3;d++){let u=c%2===1,p=u?[.43,.45,1.5]:[1.5,.45,.43],g=new R(h.x+(u?(d-1)*.47:0),.225+c*.455,h.z+(u?0:(d-1)*.47)),v=new Qe({mass:.24,shape:new As(new R(...p.map(m=>m/2))),position:g.clone(),linearDamping:.12,angularDamping:.2,sleepSpeedLimit:.12,sleepTimeLimit:1});v.kind="block",e.addBody(v),i.push({body:v,size:p,home:g,scored:!1})}let n=new Qe({mass:1.8,shape:new Hd(.18),position:new R(t.start.x,t.start.y,t.start.z),linearDamping:0,angularDamping:1,fixedRotation:!0,collisionFilterMask:0,allowSleep:!1});n.kind="plane",e.addBody(n);function a(h,c){h.position.copy(c),h.previousPosition.copy(c),h.interpolatedPosition.copy(c),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion),h.velocity.setZero(),h.angularVelocity.setZero(),h.force.setZero(),h.torque.setZero(),h.aabbNeedsUpdate=!0,h.wakeUp()}function s(){for(let h of i)a(h.body,h.home),h.scored=!1;a(n,new R(t.start.x,t.start.y,t.start.z)),n.collisionFilterMask=0,e.accumulator=0,e.time=0,e.stepnumber=0,e.lastCallTime=void 0,e.contacts.length=0,e.frictionEquations.length=0,e.collisionMatrix.reset(),e.collisionMatrixPrevious.reset(),e.bodyOverlapKeeper.current.length=0,e.bodyOverlapKeeper.previous.length=0,e.shapeOverlapKeeper.current.length=0,e.shapeOverlapKeeper.previous.length=0,e.broadphase.dirty=!0}function o(){let h=0;for(let c of i)!c.scored&&(c.body.position.distanceTo(c.home)>.55||Math.abs(c.body.quaternion.w)<.92)&&(c.scored=!0),c.scored&&h++;return h}function l(){let h=t.ceiling-.18;return n.position.y<=h?!1:(n.position.y=h,n.previousPosition.y=Math.min(n.previousPosition.y,h),n.interpolatedPosition.y=Math.min(n.interpolatedPosition.y,h),n.velocity.y=Math.min(0,n.velocity.y),n.force.y=Math.min(0,n.force.y),n.aabbNeedsUpdate=!0,e.broadphase.dirty=!0,!0)}return{world:e,plane:n,blocks:i,solid:r,reset:s,countFallen:o,enforceCeiling:l,level:t}}var jd=(t,e,i)=>Math.max(e,Math.min(i,t)),Xd={living:["#b98d60","#759a91","#d7d6bd","#bf744e"],kitchen:["#cbb898","#97b8ad","#f1dfbc","#76a19a"],office:["#a87d52","#7594a2","#d9d9c7","#6b8493"],bedroom:["#b29479","#b7a8b8","#e2d2ca","#b88583"],library:["#b48b5f","#6f8a78","#d8ceb7","#8c5a44"],workshop:["#b09271","#a2a09a","#d9d3c2","#bd824e"],studio:["#c4a588","#b09da3","#e5dfcf","#b67666"],greenhouse:["#b3b390","#89b69c","#d8e4c7","#86a36c"]};function Zd(t,e,i){let r=e.level,n=new yd({canvas:t,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),n.shadowMap.enabled=!0,n.shadowMap.type=yn,n.outputColorSpace=Zt,n.toneMapping=xs,n.toneMappingExposure=1.16;let a=new Au;a.background=new tt("#b1c6c1"),a.fog=new Tu("#c3d0c2",64,160);let s=new Yt(57,1,.08,230);s.position.set(0,6,19),s.lookAt(0,2.7,8),a.add(new sd(16774364,6780760,2.35));let o=new cd(16770491,3.2);o.position.set(-8,18,8),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.camera.left=-22,o.shadow.camera.right=22,o.shadow.camera.top=24,o.shadow.camera.bottom=-24,o.shadow.camera.near=.5,o.shadow.camera.far=55,o.shadow.normalBias=.04,o.shadow.bias=-2e-4,a.add(o,o.target);let l=new Map,h=new Map,c=[],d=[],u=[],p=[],g=new fa(1,1,1);h.set("box",g);function v(B){return l.has(B)||l.set(B,new ws({color:B,roughness:.86,flatShading:!0})),l.get(B)}function m(B,O){return h.has(B)||h.set(B,O()),h.get(B)}function f(B,O,X,M,x,D,G,J=a){let re=new Et(g,v(G));return re.scale.set(B,O,X),re.position.set(M,x,D),re.castShadow=!0,re.receiveShadow=!0,J.add(re),re}function S(B,O,X,M,x,D,G,J=10,re=a){let he=new Et(m(`c:${B}:${O}:${X}:${J}`,()=>new bs(B,O,X,J)),v(G));return he.position.set(M,x,D),he.castShadow=!0,he.receiveShadow=!0,re.add(he),he}function w(B,O,X,M,x=a){let D=new V(...B),G=new V(...O),J=G.clone().sub(D),re=S(X,X,1,0,0,0,M,6,x);return re.scale.y=J.length(),re.position.copy(D.add(G).multiplyScalar(.5)),re.quaternion.setFromUnitVectors(new V(0,1,0),J.normalize()),re}function _(B,O,X){e.solid(O,[B.x+X[0],X[1],B.z+X[2]])}function b(B,O,X,M=3,x="#bd925e"){S(.65,.5,.95,O,.5,X,x,8,B);for(let D=0;D<5;D++){let G=D*2.4,J=[O+Math.sin(G)*.7,M-D%2*.55,X+Math.cos(G)*.65];w([O,.7,X],J,.035,"#496f4a",B);let re=new Et(m("leaf",()=>new $u(.7,0)),v(D%2?"#72975d":"#4b795a"));re.position.set(...J),re.scale.set(.65,1.15,.45),re.rotation.z=Math.sin(G)*.8,B.add(re)}}function A(B,O,X,M,x=5.5,D=5.3){f(D,x,.25,X,x/2,M-.5,"#765237",O);for(let J of[-1,1])f(.18,x,1.25,X+J*D/2,x/2,M,"#986e47",O);let G=["#6c9690","#d39c4e","#bd7156","#ddcc9d","#426c6a"];for(let J=0;J<3;J++){let re=.3+J*1.65;f(D+.2,.15,1.35,X,re,M,"#aa7f52",O);for(let he=0;he<8;he++){let z=.65+(he*7+J*3)%5*.15;f(.36,z,.9,X-D/2+.45+he*.6,re+.1+z/2,M+.03,G[(he+J)%5],O)}}_(B,[D+.35,x,1.45],[X,x/2,M])}function C(B,O,X,M,x=4,D=3,G=2.7){f(x,.25,D,X,G,M,"#b68b5b",O);for(let J of[-1,1])for(let re of[-1,1])f(.22,G,.22,X+J*(x/2-.25),G/2,M+re*(D/2-.25),"#735840",O);_(B,[x,G+.2,D],[X,(G+.2)/2,M])}function y(B,O){f(4.2,.7,8.3,-10.1,.8,-1.8,"#345e58",O),f(.75,2.5,8.3,-11.75,1.7,-1.8,"#47726a",O);for(let M of[-4.6,-1.8,1])f(3.4,.6,2.6,-9.85,1.4,M,"#719078",O),f(.6,1.45,2.55,-11.1,2.1,M,"#668872",O);for(let M of[-5.75,2.15])f(4.2,1.5,.6,-10.1,1.7,M,"#4d7467",O);let X=f(.6,1.2,1.4,-10.3,2.1,-4.2,"#e2b665",O);X.rotation.z=-.18,_(B,[4.3,2.65,8.4],[-10.2,1.325,-1.8])}function T(B,O,X,M,x="#d39a4e"){f(3.2,.6,3.2,X,1.3,M,x,O),f(3.2,2.4,.65,X,2,M-1.35,x,O);for(let D of[-1.35,1.35])f(.45,1.2,3.1,X+D,1.6,M,x,O);for(let D of[-1.2,1.2])for(let G of[-1.2,1.2])S(.12,.1,.7,X+D,.35,M+G,"#604c37",6,O);_(B,[3.4,3.2,3.4],[X,1.6,M])}function I(B,O,X,M=5.8){f(M+.5,4.65,.09,O,6.15,X,"#eee7cb",B);let x=f(M,4.2,.1,O,6.15,X+.06,"#bde0dc",B);x.material=v("#bde0dc"),f(.12,4.2,.13,O,6.15,X+.14,"#fff4d3",B),f(M,.12,.13,O,6.15,X+.14,"#fff4d3",B),f(M+.75,.15,.55,O,3.95,X+.23,"#e1d3b4",B)}function P(B,O){let X=B.type||"living";if(X==="living"){y(B,O),T(B,O,9.6,-3.5),A(B,O,8,-15.8),b(O,-10,-12.8,3.2),_(B,[2,3.8,2],[-10,1.9,-12.8]),S(1.6,1.6,.2,-9.6,1.65,7,"#89613e",12,O);for(let x=0;x<3;x++){let D=x*Math.PI*2/3;w([-9.6,1.5,7],[-9.6+Math.sin(D)*1.3,.1,7+Math.cos(D)*1.3],.1,"#594833",O)}_(B,[3.2,1.8,3.2],[-9.6,.9,7]),f(1.1,.18,.85,-9.9,1.87,7,"#d49e51",O),S(.28,.24,.45,-8.8,2.02,6.7,"#efe1c3",10,O),S(.7,.75,.15,10,.08,7.5,"#455a4b",10,O),w([10,.1,7.5],[10,5.4,7.5],.07,"#455a4b",O),S(.55,1.05,1.25,10,5.6,7.5,"#ecdab2",8,O),_(B,[1.1,5.5,1.1],[10,2.75,7.5]);let M=new hd(16763028,6,7,2);M.position.set(10,5.1,7.5),O.add(M)}else if(X==="kitchen"){for(let M of[-9.5,9.5]){f(4.9,2.65,4,M,1.33,-13.7,"#91aa94",O),f(5.15,.22,4.2,M,2.78,-13.7,"#f1e5c7",O);for(let x of[-1.15,1.15])f(2.2,2.3,.09,M+x,1.35,-11.64,"#b8c6a8",O),f(.5,.08,.12,M+x,2.15,-11.55,"#7a805c",O);_(B,[5.2,2.9,4.3],[M,1.45,-13.7])}f(2,.11,1.5,-9.5,2.94,-13.7,"#728580",O),w([-9.5,2.95,-14.1],[-9.5,3.8,-14.1],.08,"#b7c9c2",O),S(.8,.65,.8,9.5,3.26,-13.7,"#aa7e4a",10,O),b(O,-10.4,9,3),T(B,O,10,4,"#d7b671")}else if(X==="office")C(B,O,-9.5,-12,5.4,3.5),f(2.1,1.45,.18,-9.5,3.6,-13,"#405b60",O),f(1.9,1.2,.09,-9.5,3.6,-12.85,"#91c3bf",O),f(1.8,.1,.7,-9.5,2.9,-11.5,"#eee5cd",O),T(B,O,-10,-7,"#709592"),A(B,O,8.8,-15.8,5.4,4.2),b(O,10.2,8.8,3.6);else if(X==="bedroom"){f(4.6,.8,9.2,-9.9,.65,-2,"#96745a",O),f(4.45,.7,9,-9.9,1.25,-2,"#f1d9bc",O),f(4.45,.22,6.6,-9.9,1.72,-.8,"#bb8790",O),f(4.6,2.8,.45,-9.9,1.7,-6.5,"#876655",O);for(let M of[-11,-8.8])f(1.75,.3,1.4,M,1.8,-5.1,"#e9dac8",O);_(B,[4.7,3.1,9.5],[-9.9,1.55,-2]),f(4.2,2.65,2.5,9.6,1.33,-13.7,"#d4b28f",O);for(let M=0;M<3;M++)f(3.8,.72,.06,9.6,.52+M*.8,-12.4,"#e1bfa0",O),f(.55,.1,.1,9.6,.52+M*.8,-12.32,"#8c7359",O);_(B,[4.3,2.9,2.6],[9.6,1.45,-13.7]),b(O,10,9,2.8)}else if(X==="library")A(B,O,-8.5,-15.8,6.3,5.7),A(B,O,8.5,-15.8,6.3,5.7),T(B,O,-10,-2,"#87718c"),T(B,O,10,4,"#688674"),b(O,-10,10,3.3);else if(X==="workshop"){C(B,O,-9.5,-12.7,5.6,4,2.8),f(5.5,3,.15,-9.5,5.3,-16.6,"#ae8c5f",O);for(let M=0;M<5;M++)f(.15,1.3,.15,-11.4+M*.95,5.4,-16.4,"#5f706b",O),f(.62,.2,.23,-11.4+M*.95,6,-16.35,"#90a299",O);for(let M of[-13.4,-10.4])f(3.8,2,2.6,10,1,M,"#bd874c",O),f(3.5,.08,.15,10,1.7,M+1.32,"#e4bb78",O),_(B,[3.9,2.1,2.7],[10,1.05,M])}else if(X==="studio")C(B,O,9.5,-13,5.2,3.6),f(2.8,3.3,.18,-10,3.8,-12.5,"#f0e5cf",O),w([-11.3,0,-12.5],[-10,6,-12.5],.13,"#9b784d",O),w([-8.7,0,-12.5],[-10,6,-12.5],.13,"#9b784d",O),f(1.2,1.1,.06,-10.2,4.1,-12.36,"#c98165",O),f(1.7,.55,.06,-9.9,3.1,-12.35,"#779d8b",O),_(B,[3.2,6,1.2],[-10,3,-12.5]),y(B,O);else{for(let M of[-10,10])for(let x of[-12.5,-5,4.5,12])b(O,M,x,3+(x+20)%3*.6,"#bd8c5d"),_(B,[2.2,3.8,2.2],[M,1.9,x]);C(B,O,9.5,-15,4.5,2.4,2.7)}}for(let B of r.rooms){let O=Xd[B.type]||Xd.living,X=new Di;if(X.position.set(B.x,0,B.z),a.add(X),f(26,.26,34,0,-.15,0,O[0],X),B.type==="kitchen")for(let x=0;x<6;x++)for(let D=0;D<8;D++)(x+D)%2===0&&(f(4.3,.014,4.2,-10.8+x*4.32,0,-14.7+D*4.2,"#dfd0ad",X).castShadow=!1);else{for(let x=-15;x<=15;x+=2)f(26-.2,.01,.035,0,0,x,"#947452",X).castShadow=!1;for(let x=-9;x<=9;x+=6)f(.025,.01,34,x,0,0,"#ab835a",X).castShadow=!1}f(11,.028,17,.1,.03,0,O[3],X).castShadow=!1,f(10.45,.015,16.45,.1,.055,0,B.type==="living"?"#bc8758":O[0],X).castShadow=!1,r.rooms.some(x=>x.x===B.x&&x.z===B.z-34)||I(X,-7.9,-34/2+.23,6),P(B,X)}for(let B of Ps(r)){let[O,X,M]=B.size,[x,D,G]=B.position,J=B.interior?"#d3d1b9":O>M?"#7fa198":"#d6d7bf",re=f(O,X,M,x,D,G,J);re.material=new ws({color:J,roughness:.9,transparent:!0,opacity:1}),c.push({mesh:re,size:B.size,center:B.position}),D-X/2<.1&&(f(O+(O<M?.03:0),.24,M+(M<O?.03:0),x,.12,G,"#ece5cb").castShadow=!1)}let L=new Set;for(let B of r.rooms)for(let O of r.rooms){let X=O.x===B.x+26&&O.z===B.z,M=O.x===B.x&&O.z===B.z-34;if(!X&&!M)continue;let x=`${B.x},${B.z},${X?"e":"n"}`;if(!L.has(x))if(L.add(x),X){let D=B.x+26/2;for(let G of[-1,1])f(.47,7.4,.18,D,7.4/2,B.z+G*(9/2+.11),"#efe2c0");f(.47,.2,9+.42,D,7.4+.11,B.z,"#efe2c0")}else{let D=B.z-34/2;for(let G of[-1,1])f(.18,7.4,.47,B.x+G*(9/2+.11),7.4/2,D,"#efe2c0");f(9+.42,.2,.47,B.x,7.4+.11,D,"#efe2c0")}}function H(B,O){let X=[],M=-B/2,x=B/2,D=-O/2,G=O/2;function J(he,z,oe){let ge=[];for(let Ee=0;Ee<he.length;Ee++){let ce=he[Ee],Ie=he[(Ee+1)%he.length],Be=z(ce),je=z(Ie);Be&&ge.push(ce),Be!==je&&ge.push(oe(ce,Ie))}return ge}for(let he=D-x-2;he<G-M+2;he+=2.45){let z=[[M,M+he],[x,x+he],[x,x+he+.7],[M,M+he+.7]];if(z=J(z,oe=>oe[1]>=D,(oe,ge)=>{let Ee=(D-oe[1])/(ge[1]-oe[1]);return[oe[0]+Ee*(ge[0]-oe[0]),D]}),!(z.length<3)){z=J(z,oe=>oe[1]<=G,(oe,ge)=>{let Ee=(G-oe[1])/(ge[1]-oe[1]);return[oe[0]+Ee*(ge[0]-oe[0]),G]});for(let oe=1;oe<z.length-1;oe++)for(let ge of[z[0],z[oe],z[oe+1]])X.push(ge[0],0,ge[1])}}let re=new Ht;return re.setAttribute("position",new si(new Float32Array(X),3)),re.computeVertexNormals(),re}let N=m("ceiling-stripes",()=>H(26,34));for(let B of r.rooms){let O=new zi({color:"#ffe5d3",transparent:!0,opacity:0,depthWrite:!1,side:qt}),X=new zi({color:"#ef3538",transparent:!0,opacity:0,depthWrite:!1,side:qt}),M=new Et(g,O);M.scale.set(26-.15,.012,34-.15),M.position.set(B.x,10-.05,B.z);let x=new Et(N,X);x.position.set(B.x,10-.08,B.z),M.renderOrder=20,x.renderOrder=21,M.visible=!1,x.visible=!1,a.add(M,x),d.push({room:B,background:M,stripes:x,backgroundMaterial:O,stripesMaterial:X})}let U=e.blocks.map((B,O)=>{let X=B.home.toArray?B.home.toArray():[B.home.x,B.home.y,B.home.z];return f(...B.size,...X,["#edbd76","#dca15e","#efc88b","#c88b47"][O%4])});for(let B of r.towers||[]){let O=new Et(m("tower-target",()=>new Vl(1.72,1.8,32)),new zi({color:"#eabe72",transparent:!0,opacity:.5,side:qt}));O.rotation.x=-Math.PI/2,O.position.set(B.x,.1,B.z),a.add(O)}for(let B of r.thermals||[]){let O=new Di;O.position.set(B.x,0,B.z),a.add(O);let X=new Et(m(`thermal-column:${B.r}`,()=>new bs(B.r*.8,B.r,8.2,16,1,!0)),new zi({color:"#8be6c4",transparent:!0,opacity:.025,side:qt,depthWrite:!1}));X.position.y=4.3,O.add(X);let M=new Et(m(`thermal-rim:${B.r}`,()=>new Vl(B.r-.065,B.r,32)),new zi({color:"#9feac9",transparent:!0,opacity:.6,side:qt,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.13,O.add(M);for(let x=0;x<4;x++){let D=new Et(m(`thermal-ring:${B.r}`,()=>new Hl(B.r*.72,.02,4,24,Math.PI*1.5)),new zi({color:"#b5efcf",transparent:!0,opacity:.4,depthWrite:!1}));D.rotation.x=Math.PI/2,O.add(D),u.push({mesh:D,phase:x/4})}}let j=new Di;j.scale.setScalar(.48),a.add(j),f(.19,.17,1.65,0,0,0,"#d79c56",j);let q=new Et(m("plane-nose",()=>new Bu(.13,.48,6)),v("#e77b45"));q.rotation.x=-Math.PI/2,q.position.z=-1,q.castShadow=!0,j.add(q);function ie(B,O){let X=new Es;B.forEach(([D,G],J)=>J?X.lineTo(D,G):X.moveTo(D,G)),X.closePath();let M=new zl(X,{depth:.045,bevelEnabled:!1});M.rotateX(Math.PI/2),h.set(`wing:${O}`,M);let x=new Et(M,v(O));x.position.y=.09,x.castShadow=!0,j.add(x)}ie([[-1.5,.1],[-1.5,-.2],[0,-.55],[1.5,-.2],[1.5,.1],[.15,.35],[-.15,.35]],"#f3d79c"),ie([[-.65,.72],[-.65,.48],[0,.35],[.65,.48],[.65,.72]],"#efbe6e");for(let B of[-1.28,1.28])f(.2,.025,.42,B,.105,-.02,"#d16d43",j);f(.04,.43,.5,0,.23,.57,"#e68e4c",j).rotation.x=-.2;let K=new Di,Q=r.start||{x:0,y:2.7,z:11};K.position.set(Q.x,0,Q.z),a.add(K),f(1.35,.12,1.1,0,.06,0,"#86613d",K),w([0,.1,0],[0,1.5,0],.11,"#b17d46",K),w([0,1.5,0],[-.66,2.82,0],.1,"#c49354",K),w([0,1.5,0],[.66,2.82,0],.1,"#c49354",K);let $=[-.66,.66].map(B=>({x:B,mesh:S(.028,.028,1,0,0,0,"#d75e49",6,K)}));function Oe(B=0){for(let O of $){let X=new V(O.x,2.82,0),M=new V(0,Q.y,B*1.8),x=M.clone().sub(X);O.mesh.position.copy(X.add(M).multiplyScalar(.5)),O.mesh.scale.y=x.length(),O.mesh.quaternion.setFromUnitVectors(new V(0,1,0),x.normalize())}}Oe();let Me=new Float32Array(180),Je=new Ht;Je.setAttribute("position",new si(Me,3)),h.set("trail",Je);let Ge=new Du(Je,new Ol({color:"#ffdeaf",transparent:!0,opacity:.32,depthWrite:!1}));Ge.frustumCulled=!1,a.add(Ge);function te(B){for(let O=0;O<60;O++)Me[O*3]=B.x,Me[O*3+1]=B.y,Me[O*3+2]=B.z;Je.attributes.position.needsUpdate=!0}function de(B){Me.copyWithin(3,0,177),Me[0]=B.x,Me[1]=B.y,Me[2]=B.z,Je.attributes.position.needsUpdate=!0}te(Q);let pe=new Es;for(let B=0;B<10;B++){let O=B*Math.PI/5+Math.PI/2,X=B%2?.25:.55,M=Math.cos(O)*X,x=Math.sin(O)*X;B?pe.lineTo(M,x):pe.moveTo(M,x)}pe.closePath();let Ue=m("star",()=>new zl(pe,{depth:.13,bevelEnabled:!1})),Ve=new ws({color:"#ffcc58",emissive:"#8c5309",emissiveIntensity:.42,roughness:.4,flatShading:!0}),_e=m("star-halo",()=>new Hl(.72,.025,4,20)),Ke=new zi({color:"#ffe294",transparent:!0,opacity:.75,depthWrite:!1});for(let B of r.collectibles||r.stars||[]){let O=new Di;O.position.set(B.x,B.y,B.z);let X=new Et(Ue,Ve);X.position.z=-.065,O.add(X,new Et(_e,Ke)),a.add(O),p.push({mesh:O,position:B,collected:!1})}let ae=0;function se(B){let O=0;for(let X of p){if(X.collected)continue;let M=X.position.x-B.x,x=X.position.y-B.y,D=X.position.z-B.z;M*M+x*x+D*D<=.85*.85&&(X.collected=!0,X.mesh.visible=!1,O++)}return ae+=O,O}function me(){ae=0;for(let B of p)B.collected=!1,B.mesh.visible=!0}let Se={ceiling:!1,distance:10-Q.y,intensity:0};function Te(B){let O=Math.max(0,10-B.y),X=jd((2.2-O)/1.75,0,1);Se.ceiling=O<2.2,Se.distance=O,Se.intensity=X;for(let M of d){let x=Math.max(0,Math.abs(B.x-M.room.x)-26/2),D=Math.max(0,Math.abs(B.z-M.room.z)-34/2),G=jd(1-Math.hypot(x,D)/9,0,1),J=X*G;M.background.visible=M.stripes.visible=J>.002,M.backgroundMaterial.opacity=J*.13,M.stripesMaterial.opacity=J*.68}return Se.ceiling}function Ce(B,O){let X=0,M=1,x=[s.position.x,s.position.y,s.position.z],D=[O.x,O.y,O.z];for(let G=0;G<3;G++){let J=D[G]-x[G],re=B.center[G]-B.size[G]/2-.08,he=B.center[G]+B.size[G]/2+.08;if(Math.abs(J)<1e-4){if(x[G]<re||x[G]>he)return!1}else{let z=(re-x[G])/J,oe=(he-x[G])/J;if(X=Math.max(X,Math.min(z,oe)),M=Math.min(M,Math.max(z,oe)),M<X)return!1}}return M>0&&X<.96}function ze(){e.blocks.forEach((B,O)=>{U[O].position.copy(B.body.position),U[O].quaternion.copy(B.body.quaternion)});for(let B of c){let O=Ce(B,e.plane.position);B.mesh.material.opacity=O?.1:1,B.mesh.material.depthWrite=!O,B.mesh.castShadow=!O}o.target.position.set(e.plane.position.x,0,e.plane.position.z),o.position.set(e.plane.position.x-8,18,e.plane.position.z+8),o.target.updateMatrixWorld()}function Xe(B){for(let O of u){let X=(B*.22+O.phase)%1;O.mesh.position.y=.2+X*8.2,O.mesh.rotation.z=B*.6+O.phase*6,O.mesh.material.opacity=Math.sin(X*Math.PI)*.42}for(let O=0;O<p.length;O++){let X=p[O];X.collected||(X.mesh.rotation.y=B*.95+O*.45,X.mesh.position.y=X.position.y+Math.sin(B*1.8+O*1.7)*.09)}}function Ze(){let B=i(),O=Math.max(1,B.width),X=Math.max(1,B.height);n.setSize(O,X,!1),s.aspect=O/X,s.updateProjectionMatrix()}Ze(),window.addEventListener("gameviewportchange",Ze);function F(){window.removeEventListener("gameviewportchange",Ze);let B=new Set(l.values()),O=new Set(h.values());a.traverse(X=>{if(X.geometry&&O.add(X.geometry),X.material)for(let M of Array.isArray(X.material)?X.material:[X.material])B.add(M);X.shadow?.map&&X.shadow.map.dispose()});for(let X of O)X.dispose();for(let X of B){for(let M of Object.values(X))M?.isTexture&&M.dispose();X.dispose()}a.clear(),n.dispose()}return{renderer:n,scene:a,camera:s,plane:j,sling:K,thermals:r.thermals||[],sync:ze,wind:Xe,updateSling:Oe,resetTrail:te,updateTrail:de,updateCeiling:Te,warnings:Se,collect:se,get collected(){return ae},totalCollectibles:p.length,resetCollectibles:me,dispose:F}}var st=t=>document.getElementById(t);async function Kl(t,e={}){let i=await fetch(t,{...e,signal:AbortSignal.timeout(1e4)}),r=await i.json();if(!i.ok)throw new Error(r.error||"Die Bestenliste ist gerade nicht erreichbar.");return r}function Yd(){let t=null,e=null,i=0;try{st("pilot-name").value=localStorage.getItem("stubenflieger.pilot")||""}catch{}function r(s){t=Kl("/api/runs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:s})}).then(o=>o.run).catch(()=>null),e=null}function n(s,o,l,h){e={blocks:s,stars:o,flightMs:Math.round(l*1e3),level:h,ticket:t,saved:!1},st("save-score").disabled=l<.5,st("save-score").textContent="Eintragen",st("pilot-name").disabled=!1,st("score-status").textContent=l<.5?"Dieser Flug war zu kurz f\xFCr die Bestenliste.":"Trage deinen Flug mit einem frei gew\xE4hlten Pilotnamen ein."}async function a(){let s=++i,o=document.activeElement;!st("leaderboard").hidden&&(o===st("refresh-leaderboard")||st("ranking-table").contains(o))&&st("close-leaderboard").focus(),st("leaderboard-status").textContent="Bestenliste wird geladen \u2026",st("ranking-table").hidden=!0,st("refresh-leaderboard").disabled=!0;try{let{entries:l}=await Kl("/api/leaderboard");if(s!==i)return;st("ranking-body").replaceChildren(),l.forEach((h,c)=>{let d=document.createElement("tr");for(let u of[c+1,h.name,`L${h.level||1} \xB7 ${h.stars||0} \u2605 / ${h.blocks} \u25A3 / ${(h.flightMs/1e3).toFixed(1)} s`,h.points.toLocaleString("de-DE")]){let p=document.createElement("td");p.textContent=String(u),d.append(p)}st("ranking-body").append(d)}),st("ranking-table").hidden=l.length===0,st("leaderboard-status").textContent=l.length?"Die 20 besten Fl\xFCge \xB7 alle Level":"Noch keine Eintr\xE4ge. Fliege die erste Bestmarke!"}catch{st("leaderboard-status").textContent="Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal."}finally{s===i&&(st("refresh-leaderboard").disabled=!1)}}return st("refresh-leaderboard").onclick=()=>{a()},st("score-form").addEventListener("submit",async s=>{if(s.preventDefault(),!e||e.saved)return;let o=e,l=st("pilot-name").value.trim();document.activeElement===st("save-score")&&st("pilot-name").focus(),st("save-score").disabled=!0,st("score-status").textContent="Dein Flug wird eingetragen \u2026";try{let h=await o.ticket;if(!h)throw new Error("Dieser Flug konnte nicht online gestartet werden. Pr\xFCfe deine Verbindung und fliege noch eine Runde.");let c=await Kl("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({run:h,name:l,blocks:o.blocks,stars:o.stars,flightMs:o.flightMs,level:o.level})});if(o!==e)return;o.saved=!0,st("save-score").textContent="\u2713 Gespeichert",!st("result").hidden&&document.activeElement===st("pilot-name")&&st("result-leaderboard").focus(),st("pilot-name").disabled=!0,st("score-status").textContent=`${c.points.toLocaleString("de-DE")} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;try{localStorage.setItem("stubenflieger.pilot",l)}catch{}}catch(h){o===e&&(st("score-status").textContent=h.message,st("save-score").disabled=!1)}}),{beginRun:r,setResult:n,refresh:a}}var PM=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),Kd='input,textarea,select,[contenteditable]:not([contenteditable="false"])';function $d({window:t,document:e,keys:i,getState:r,getDialog:n,launcher:a,actions:s}){let o=!1;function l(){i.clear(),o=!1,s.cancelCharge()}function h(p){if(p.defaultPrevented||p.isComposing||p.ctrlKey||p.altKey||p.metaKey)return;let g=n();if(p.code==="Tab"){l(),!g&&r()==="flying"&&(p.preventDefault(),s.pause());return}if(p.code==="Escape"){if(p.preventDefault(),p.repeat)return;l(),g==="leaderboard"?s.closeBoard():g==="menu"?s.closeMenu():g==="result"?s.reset():g!=="error"&&s.pause();return}if(p.target.closest?.(Kd)||g==="error")return;let m={KeyR:"reset",KeyM:g==="menu"?"closeMenu":g==="leaderboard"?"closeBoard":"menu",KeyB:"board",KeyT:"sound"}[p.code];if(m){p.preventDefault(),p.repeat||(l(),s[m]());return}if(p.code==="KeyP"){(!g||g==="paused")&&(p.preventDefault(),p.repeat||(l(),s.pause()));return}if(g)return;let f=p.target.closest?.('button,a[href],[role="button"]');if(p.code==="Space"){if(f&&f!==a)return;p.preventDefault(),!p.repeat&&r()==="ready"&&(o=s.beginCharge()===!0);return}if(p.code==="Enter"){!f&&r()==="ready"&&(p.preventDefault(),p.repeat||s.quickLaunch());return}PM.has(p.code)&&(r()==="ready"||r()==="flying")&&(p.preventDefault(),i.add(p.code))}function c(p){i.delete(p.code),p.code==="Space"&&o&&(p.preventDefault(),o=!1,!n()&&r()==="ready"&&!p.target.closest?.(Kd)?s.release():s.cancelCharge())}function d(){l(),s.suspend()}function u(){e.hidden&&d()}return e.addEventListener("keydown",h),e.addEventListener("keyup",c),t.addEventListener("blur",d),e.addEventListener("visibilitychange",u),{clear:l,destroy(){l(),e.removeEventListener("keydown",h),e.removeEventListener("keyup",c),t.removeEventListener("blur",d),e.removeEventListener("visibilitychange",u)}}}function Jd(t,e){let i=[...e.querySelectorAll(".modal")],r='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])',n=null;function a(){return n?[...n.querySelectorAll(r)].filter(l=>!l.closest("[hidden],[inert]")&&l.getClientRects().length):[]}function s(l){(l||a()[0]||n)?.focus({preventScroll:!1})}function o(l,h){n=l?t.getElementById(l):null;for(let c of i)c.hidden=c!==n,c.tabIndex=-1;for(let c of e.children)c.inert=!!n&&c!==n;s(h)}return t.addEventListener("keydown",l=>{if(!n||l.key!=="Tab")return;let h=a(),c=h[0],d=h.at(-1),u=t.activeElement;h.length?h.includes(u)?l.shiftKey&&u===c?(l.preventDefault(),s(d)):!l.shiftKey&&u===d&&(l.preventDefault(),s(c)):(l.preventDefault(),s(l.shiftKey?d:c)):(l.preventDefault(),s(n))}),t.addEventListener("focusin",l=>{n&&!n.contains(l.target)&&s()}),{open:o,close(l){o(null,l)},current(){return n?.id??null}}}var le=t=>document.getElementById(t),hi=(t,e)=>{le(t).hidden=!e},ri=(t,e,i)=>Math.max(e,Math.min(i,t)),St=Jd(document,le("app")),wr;le("retry").onclick=()=>location.reload();var ur=0,yi=0;try{let t=Number(localStorage.getItem("stubenflieger.rotation"));[0,90,180,270].includes(t)&&(ur=t),yi=ri(Number(localStorage.getItem("stubenflieger.level"))||0,0,or.length-1)}catch{}var ah=()=>ur%180?{width:innerHeight,height:innerWidth}:{width:innerWidth,height:innerHeight};function sh(){let{width:t,height:e}=ah();Object.assign(le("app").style,{width:t+"px",height:e+"px",transform:`translate(-50%, -50%) rotate(${ur}deg)`}),le("rotation-value").textContent=ur+"\xB0",window.dispatchEvent(new Event("gameviewportchange"))}le("rotate-view").onclick=()=>{ur=(ur+90)%360;try{localStorage.setItem("stubenflieger.rotation",String(ur))}catch{}sh()};window.addEventListener("resize",sh);sh();var oh=Yd(),_t,nt,ot,yt="ready",ci=!1,Xr=!1,li=0,tp=0,ya=0,Nn=0,br=0,lr=0,_a=0,Un=0,Dn=0,ip=0,rp="",hr=!1,qr=0,jr=0,cr=null,Er=null,eh={x:0,y:0},Os={steer:0,pitch:0},qi={steer:0,pitch:0},Yr=!1,jt=null,ji=null,np=0,th,ih=!1,Is=!1,xa=!1,xi,Qd=-10,Jt=new Set,ki=new V,$l=new V,Wi=new V,Ds=new V,rh=new V,Ma=t=>{le("hint").textContent=t};function Zr(t,e=.12,i="sine",r=.06){if(xa)try{xi??=new(window.AudioContext||window.webkitAudioContext),xi.state==="suspended"&&xi.resume();let n=xi.createOscillator(),a=xi.createGain();n.type=i,n.frequency.setValueAtTime(t,xi.currentTime),n.frequency.exponentialRampToValueAtTime(Math.max(35,t*.55),xi.currentTime+e),a.gain.setValueAtTime(r,xi.currentTime),a.gain.exponentialRampToValueAtTime(.001,xi.currentTime+e),n.connect(a),a.connect(xi.destination),n.start(),n.stop(xi.currentTime+e)}catch{}}le("sound").onclick=()=>{xa=!xa,le("sound").textContent=xa?"\u266A AN":"\u266A AUS",le("sound").setAttribute("aria-label",xa?"Ton ausschalten":"Ton einschalten"),Zr(600)};function LM(){wr?.clear(),ch(),dr(),Jt.clear(),Os={steer:0,pitch:0},qi={steer:0,pitch:0},le("stick").style.transform="translate(0,0)"}function NM(){let t=String(ot.id).padStart(2,"0");le("level-name").textContent=`${t} / ${ot.name.toUpperCase()}`,le("level-tagline").innerHTML=ot.rooms.length===1?"Kleine Fl\xFCgel.<br>Gro\xDFes Chaos.":`${ot.rooms.length} R\xE4ume.<br>Ein gro\xDFer Flug.`,le("mission-copy").textContent=`Sammle alle ${ot.collectibles.length} Flugsterne und wirf ${ot.goalBlocks} Holzkl\xF6tze um. ${ot.rooms.length===1?"\xDCbe im Wohnzimmer.":"Fliege durch die offenen T\xFCren in die n\xE4chsten R\xE4ume."} T\xFCrkise Aufwinde helfen dir. Raumh\xF6he: ${(ot.ceiling*.28).toFixed(1)} m.`,le("block-goal").textContent=" / "+ot.goalBlocks,le("star-goal").textContent=" / "+ot.collectibles.length,le("height-limit").textContent=`H\xD6HE \xB7 MAX. ${(ot.ceiling*.28).toFixed(1)} m`,le("flight-level").textContent=`LEVEL ${ot.id} \xB7 ${ot.rooms.length} ${ot.rooms.length===1?"RAUM":"R\xC4UME"}`,le("level-select").value=String(yi)}function Fs(){yt="ready",ci=!1,li=ya=Nn=br=Un=qr=jr=0,hr=ih=Is=!1,LM(),_t.reset(),nt.resetCollectibles(),nt.plane.rotation.set(0,0,0),nt.plane.position.copy(_t.plane.position),nt.resetTrail(nt.plane.position),nt.updateSling(0),nt.updateCeiling(nt.plane.position),le("power-fill").style.transform="scaleX(0)",le("launch-label").textContent="Ziehen & loslassen",le("power-label").textContent="GUMMISCHLEUDER \u2197",le("ceiling-warning").hidden=!0;for(let t of["result","paused","stats","flight-controls","pause","wind-toast","menu","leaderboard"])hi(t,!1);for(let t of["launch-panel","level-label","footer"])hi(t,!0);document.body.classList.remove("flying"),le("height").classList.remove("danger"),NM(),pp(),Ma("Dein Zuhause. Deine Flugbahn. Sammle die goldenen Sterne."),Yr&&jt&&(ji={...jt}),St.close(le("launch"))}function lh(t){yi=ri(t,0,or.length-1),ot=Cs(yi),nt?.dispose(),_t=qd(ot),nt=Zd(le("game"),_t,ah),_t.plane.addEventListener("collide",e=>{yt==="flying"&&(e.body.kind==="solid"||e.body.kind==="ceiling"?Us(e.body.kind==="ceiling"?"Die Decke war zu nah. Achte auf die roten Streifen.":"Ein M\xF6belst\xFCck oder eine Wand war im Weg."):e.body.kind==="block"&&Dn-Qd>.08&&(Qd=Dn,lr=Math.max(3.8,lr*.97),Zr(170,.09,"triangle",.1),Ma("Volltreffer! Die Kl\xF6tze fallen.")))}),nt.camera.position.set(10,13,22),rh.set(-1,1.8,-3);try{localStorage.setItem("stubenflieger.level",String(yi))}catch{}Fs()}for(let[t,e]of or.entries()){let i=document.createElement("option");i.value=String(t),i.textContent=`${e.id} \xB7 ${e.name} \xB7 ${e.rooms.length} ${e.rooms.length===1?"Raum":"R\xE4ume"}`,le("level-select").append(i)}le("next-level").onclick=()=>lh(yi+1);le("reset").onclick=Fs;le("again").onclick=Fs;le("menu-restart").onclick=()=>lh(Number(le("level-select").value));function hh(){return yt!=="ready"||ci||Xr||St.current()?!1:(Xr=!0,tp=performance.now(),ya=0,li=.12,Zr(160,.07),!0)}function ch(){cr!==null&&le("launch").hasPointerCapture(cr)&&le("launch").releasePointerCapture(cr),cr=null,Xr=!1,li=ya=0,nt?.updateSling(0),le("power-fill").style.transform="scaleX(0)",le("launch-label").textContent="Ziehen & loslassen",le("power-label").textContent="GUMMISCHLEUDER \u2197"}function ap(){hh()&&(li=.75,uh())}function uh(){if(!Xr||yt!=="ready"||St.current())return;Xr=!1,yt="flying",oh.beginRun(ot.id),Un=0,br=Nn,lr=5.5+li*5.5,_a=.8+li*.7;let t=ot.start;_t.plane.position.set(t.x,t.y,t.z+li*1.8),_t.plane.velocity.setZero(),_t.plane.collisionFilterMask=-1,_t.plane.wakeUp(),nt.resetTrail(new V().copy(_t.plane.position)),nt.updateSling(0),Yr&&jt&&(ji={...jt});for(let e of["launch-panel","level-label","footer"])hi(e,!1);for(let e of["stats","flight-controls","pause"])hi(e,!0);document.body.classList.add("flying"),Ma("Gold sammeln. T\xFCrkis gibt Aufwind. Rot warnt vor der Decke."),Zr(480,.4,"triangle",.12),le("game").focus({preventScroll:!0})}function sp(t,e){let i=ur*Math.PI/180;return{x:t*Math.cos(i)+e*Math.sin(i),y:-t*Math.sin(i)+e*Math.cos(i)}}le("launch").addEventListener("pointerdown",t=>{cr!==null||!hh()||(t.preventDefault(),cr=t.pointerId,eh={x:t.clientX,y:t.clientY},le("launch").setPointerCapture(t.pointerId))});le("launch").addEventListener("pointermove",t=>{if(t.pointerId!==cr||!Xr)return;let e=sp(t.clientX-eh.x,t.clientY-eh.y);ya=ri(e.y/130,0,1),Nn=ri(e.x/250,-.45,.45)});le("launch").addEventListener("pointerup",t=>{t.pointerId===cr&&(cr=null,uh())});le("launch").addEventListener("pointercancel",ch);le("launch").addEventListener("click",t=>{t.detail===0&&ap()});function DM(t,e,i){let r=t*Math.PI/180,n=e*Math.PI/180,a=i*Math.PI/180,s=-Math.cos(r)*Math.sin(n),o=Math.sin(r),l=Math.cos(r)*Math.cos(n),h=s*Math.cos(a)-o*Math.sin(a),c=s*Math.sin(a)+o*Math.cos(a);return{roll:Math.atan2(-h,Math.hypot(c,l))*180/Math.PI,pitch:Math.atan2(c,l)*180/Math.PI}}function op(){jt&&(ji={...jt},Ma("Diese Haltung ist jetzt die Mitte."),le("control-note").textContent="Kalibriert. Seitlich neigen zum Lenken, vor/zur\xFCck f\xFCr die H\xF6he.")}async function lp(){if(!window.DeviceOrientationEvent){le("control-note").textContent="Keine Sensoren verf\xFCgbar. Nutze Touch oder WASD / Pfeiltasten.";return}try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){le("control-note").textContent="Sensorzugriff abgelehnt. Die Touch-Steuerung funktioniert weiter.";return}Yr=!0,ji=null,le("gyro").textContent="Warte auf Sensor \u2026",le("control-note").textContent="Halte dein iPhone in deiner normalen Spielhaltung.",clearTimeout(th),th=setTimeout(()=>{jt||(le("gyro").textContent="Sensoren erneut versuchen",le("control-note").textContent="Kein Sensorsignal. In Safari \xF6ffnen oder Touch nutzen.")},3e3)}catch{le("control-note").textContent="Sensoren nicht verf\xFCgbar. Nutze den Touch-Kreis."}}window.addEventListener("deviceorientation",t=>{!Yr||!Number.isFinite(t.beta)||!Number.isFinite(t.gamma)||(jt=DM(t.beta,t.gamma,(screen.orientation?.angle??window.orientation??0)+ur),np=performance.now(),ji||(ji={...jt},le("gyro").textContent="\u2713 Neigung aktiv",le("control-note").textContent="Aktiv. Beim Start wird deine Haltung kalibriert.",clearTimeout(th)))});var dh=()=>{jt=ji=null};window.addEventListener("orientationchange",dh);screen.orientation?.addEventListener("change",dh);window.addEventListener("gameviewportchange",dh);le("gyro").onclick=()=>Yr&&jt?op():void lp();le("calibrate").onclick=()=>Yr&&jt?op():void lp();function hp(t){let e=le("joystick").getBoundingClientRect(),i=le("joystick").clientWidth*.32,r=sp(t.clientX-e.left-e.width/2,t.clientY-e.top-e.height/2),n=Math.min(1,i/(Math.hypot(r.x,r.y)||1));Os={steer:r.x*n/i,pitch:-r.y*n/i},le("stick").style.transform=`translate(${r.x*n}px,${r.y*n}px)`}le("joystick").addEventListener("pointerdown",t=>{Er===null&&(t.preventDefault(),Er=t.pointerId,le("joystick").setPointerCapture(t.pointerId),hp(t))});le("joystick").addEventListener("pointermove",t=>{t.pointerId===Er&&hp(t)});function dr(){Er!==null&&le("joystick").hasPointerCapture(Er)&&le("joystick").releasePointerCapture(Er),Er=null,Os={steer:0,pitch:0},le("stick").style.transform="translate(0,0)"}le("joystick").addEventListener("pointerup",dr);le("joystick").addEventListener("pointercancel",dr);function ph(t=!ci){yt==="flying"&&(ci=t,wr?.clear(),dr(),ci?St.open("paused",le("resume")):St.close(le("game")))}le("pause").onclick=()=>ph();le("resume").onclick=()=>ph(!1);function UM(){dr(),yt==="flying"&&(ci=!0,St.current()||St.open("paused",le("resume")))}function Us(t,e=!1){yt==="flying"&&(wr?.clear(),dr(),yt="ending",rp=t,hr=e,ip=Dn,hi("wind-toast",!1),hi("flight-controls",!1),hi("pause",!1),le("game").focus({preventScroll:!0}),Zr(e?740:120,.5,e?"sine":"triangle",.1),e&&(_t.plane.velocity.setZero(),_t.plane.collisionFilterMask=0))}function IM(){yt="result",qr=_t.countFallen(),le("result-eyebrow").textContent=hr?"LEVEL GESCHAFFT":"FLUG BEENDET",le("result-title").textContent=hr?"Alle Sterne an Bord.":"Noch eine Runde?",le("result-copy").textContent=hr?yi<or.length-1?"Im n\xE4chsten Level warten mehr R\xE4ume, mehr Sterne und mehr Holzt\xFCrme.":"Das ganze Haus geh\xF6rt dir! Spiele deine Lieblingslevel noch einmal.":`${rp} Ziel: ${ot.collectibles.length} Sterne und ${ot.goalBlocks} Kl\xF6tze.`,le("result-time").textContent=Un.toFixed(1)+" s",le("result-blocks").textContent=qr,le("result-stars").textContent=`${jr} / ${ot.collectibles.length}`,hi("next-level",hr&&yi<or.length-1),le("again").textContent="Dieses Level noch einmal \u2197",oh.setResult(qr,jr,Un,ot.id),wr?.clear(),St.open("result",le(hr&&yi<or.length-1?"next-level":"again"))}var nh="menu",cp=null;function Bs(){cp=St.current(),wr?.clear(),dr(),le("level-select").value=String(yi),yt==="flying"&&(ci=!0),St.open("menu",le("close-menu"))}function up(){yt==="flying"&&ci?St.open("paused",le("resume")):cp==="result"?St.open("result",le("result-menu")):St.close(le("menu-button"))}function fh(t){nh=t,wr?.clear(),dr(),yt==="flying"&&(ci=!0),St.open("leaderboard",le("close-leaderboard")),oh.refresh()}function dp(){nh==="menu"?St.open("menu",le("menu-leaderboard")):nh==="result"?St.open("result",le("result-leaderboard")):yt==="flying"&&ci?St.open("paused",le("resume")):St.close(le(yt==="ready"?"launch":"game"))}le("menu-button").onclick=Bs;le("close-menu").onclick=up;le("menu-leaderboard").onclick=()=>fh("menu");le("result-leaderboard").onclick=()=>fh("result");le("close-leaderboard").onclick=dp;le("pause-menu").onclick=Bs;le("result-menu").onclick=Bs;wr=$d({window,document,keys:Jt,getState:()=>yt,getDialog:()=>St.current(),launcher:le("launch"),actions:{beginCharge:hh,cancelCharge:ch,release:uh,quickLaunch:ap,reset:Fs,pause:()=>ph(),suspend:UM,menu:Bs,closeMenu:up,closeBoard:dp,board:()=>{St.current()!=="leaderboard"&&fh(St.current())},sound:()=>le("sound").click()}});function pp(){le("time").textContent=Un.toFixed(1)+" s",le("height").textContent=(ri(_t.plane.position.y,0,ot.ceiling)*.28).toFixed(1)+" m",le("fallen").textContent=qr,le("stars").textContent=jr,le("height").classList.toggle("danger",Is),hi("ceiling-warning",Is&&yt==="flying")}var ep=performance.now(),Jl=0;function fp(t){requestAnimationFrame(fp);let e=Math.min((t-ep)/1e3,.04);if(ep=t,!!nt){if(ci||St.current()){nt.renderer.render(nt.scene,nt.camera);return}if(Dn+=e,nt.wind(Dn),yt==="ready"){let i=Number(Jt.has("ArrowRight")||Jt.has("KeyD"))-Number(Jt.has("ArrowLeft")||Jt.has("KeyA"));Nn=ri(Nn+i*.6*e,-.45,.45),Xr&&(li=Math.max(.12,ya,ri((t-tp)/1400,0,1)),le("power-fill").style.transform=`scaleX(${li})`,le("launch-label").textContent=Math.round(li*100)+" % gespannt",le("power-label").textContent="LOSLASSEN \u2197",nt.updateSling(li)),_t.plane.position.set(ot.start.x,ot.start.y,ot.start.z+li*1.8),_t.plane.velocity.setZero(),nt.plane.position.copy(_t.plane.position),nt.plane.rotation.set(.03,-Nn,0);let r=ah(),n=r.height>r.width;Wi.set(n?9:10,n?16:13,n?25:22),Ds.set(n?0:-1,n?1:1.8,n?11:-3)}if(yt==="flying"){Un+=e;let i=0,r=0;if(Yr&&jt&&ji&&t-np<1500){let s=(o,l)=>(o-l+540)%360-180;i=ri(s(jt.roll,ji.roll)/28,-1,1),r=ri(s(jt.pitch,ji.pitch)/28,-1,1),Math.abs(i)<.06&&(i=0),Math.abs(r)<.06&&(r=0)}Er!==null&&({steer:i,pitch:r}=Os),(Jt.has("ArrowLeft")||Jt.has("KeyA"))&&(i=-1),(Jt.has("ArrowRight")||Jt.has("KeyD"))&&(i=1),(Jt.has("ArrowUp")||Jt.has("KeyW"))&&(r=1),(Jt.has("ArrowDown")||Jt.has("KeyS"))&&(r=-1),qi.steer=Ms.damp(qi.steer,i,7,e),qi.pitch=Ms.damp(qi.pitch,r,6,e),br+=qi.steer*1.65*e,ki.copy(_t.plane.position);let n=ot.thermals.some(s=>Math.hypot(ki.x-s.x,ki.z-s.z)<s.r&&ki.y<8.4);hi("wind-toast",n),n&&!ih&&Zr(800,.4,"sine",.045),ih=n,lr=ri(lr+((n?.8:0)-.12-Math.max(0,qi.pitch)*.55+Math.max(0,-qi.pitch)*.6)*e,3.6,11);let a=-.55+qi.pitch*2.25+(n?4.1:0)-(lr<4.3?.65:0);_a=Ms.damp(_a,a,2.1,e),_t.plane.velocity.set(Math.sin(br)*lr,_a,-Math.cos(br)*lr),_t.plane.force.y=_t.plane.mass*9.82,nt.plane.rotation.set(Math.atan2(_a,lr),-br,-qi.steer*.6)}if(yt!=="result"&&!(yt==="ending"&&hr)&&_t.world.step(1/90,e,4),_t.enforceCeiling()&&Us("Die Decke war zu nah. Achte auf die roten Streifen."),nt.sync(),Is=nt.updateCeiling(_t.plane.position),yt!=="ready"){nt.plane.position.copy(_t.plane.position),ki.copy(nt.plane.position),$l.set(Math.sin(br),0,-Math.cos(br)),Wi.copy(ki).addScaledVector($l,-5.4),Wi.y+=2.55;let i=ot.bounds;if(Wi.x=ri(Wi.x,i.minX+.7,i.maxX-.7),Wi.z=ri(Wi.z,i.minZ+.7,i.maxZ-.7),Wi.y=ri(Wi.y,1.1,ot.ceiling-.6),Ds.copy(ki).addScaledVector($l,2.8),Ds.y+=.35,yt==="flying"){nt.updateTrail(ki),qr=_t.countFallen();let r=nt.collect(ki);r&&(jr+=r,Zr(1100,.12),Ma(`Flugstern! ${jr} / ${ot.collectibles.length} gesammelt.`)),jr>=ot.collectibles.length&&qr>=ot.goalBlocks?Us("Alle Ziele erreicht.",!0):ki.y<.22&&Us("Der Boden kam n\xE4her als geplant.")}yt==="ending"&&(hr||(nt.plane.rotation.z+=e*1.2),Dn-ip>1.3&&IM())}nt.camera.position.lerp(Wi,1-Math.exp(-e*(yt==="ready"?2:5))),rh.lerp(Ds,1-Math.exp(-e*6)),nt.camera.lookAt(rh),Jl+=e,Jl>.1&&(Jl=0,pp()),nt.renderer.render(nt.scene,nt.camera)}}try{lh(yi),hi("loading",!1),requestAnimationFrame(fp)}catch(t){console.error(t),hi("loading",!1),St.open("error")}le("game").addEventListener("webglcontextlost",t=>{t.preventDefault(),wr.clear(),dr(),ci=!0,le("error-copy").textContent="Die 3D-Darstellung wurde unterbrochen. Lade das Spiel neu.",St.open("error")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
