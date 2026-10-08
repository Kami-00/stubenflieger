var nf=0,Bh=1,sf=2;var Es=1,rf=2,xr=3,$i=0,pn=1,Dn=2,ai=0,vr=1,Oh=2,zh=3,kh=4,of=5;var As=100,af=101,lf=102,cf=103,hf=104,uf=200,df=201,ff=202,pf=203,Vh=204,Gh=205,mf=206,gf=207,xf=208,vf=209,_f=210,yf=211,bf=212,Sf=213,Mf=214,Va=0,Ga=1,Ha=2,ir=3,Wa=4,qa=5,Xa=6,Ya=7,Hh=0,wf=1,Ef=2,Zn=0,Wh=1,qh=2,Xh=3,Co=4,Yh=5,$h=6,Zh=7;var Kh=300,Zi=301,Ts=302,wl=303,El=304,Ro=306,sr=1e3,ii=1001,$a=1002,Yt=1003,Af=1004;var Io=1005;var jt=1006,Al=1007;var Ki=1008;var bn=1009,jh=1010,Jh=1011,_r=1012,Tl=1013,Kn=1014,Fn=1015,jn=1016,Cl=1017,Rl=1018,yr=1020,Qh=35902,eu=35899,tu=1021,nu=1022,Un=1023,si=1026,ji=1027,Il=1028,Pl=1029,Ji=1030,Ll=1031;var Nl=1033,Po=33776,Lo=33777,No=33778,Do=33779,Dl=35840,Fl=35841,Ul=35842,Bl=35843,Ol=36196,zl=37492,kl=37496,Vl=37488,Gl=37489,Fo=37490,Hl=37491,Wl=37808,ql=37809,Xl=37810,Yl=37811,$l=37812,Zl=37813,Kl=37814,jl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,lc=36284,Uo=36285,cc=36286;var $r=2300,Za=2301,za=2302,Eh=2303,Ah=2400,Th=2401,Ch=2402;var Tf=3200;var hc=0,Cf=1,Ai="",Zt="srgb",Zr="srgb-linear",Kr="linear",ft="srgb";var ka=7680;var Rf=519,If=512,Pf=513,Lf=514,uc=515,Nf=516,Df=517,dc=518,Ff=519,Uf=35044;var iu="300 es",Xn=2e3,rr=2001;function sg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=jr("canvas");return i.style.display="block",i}var Ed={},or=null;function su(...i){let e="THREE."+i.shift();or?or("log",e,...i):console.log(e,...i)}function Of(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Of(i);let e="THREE."+i.shift();if(or)or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Of(i);let e="THREE."+i.shift();if(or)or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){let e=i.join(" ");e in Ed||(Ed[e]=!0,Xe(...i))}function zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kf={[Va]:Ga,[Ha]:Xa,[Wa]:Ya,[ir]:qa,[Ga]:Va,[Xa]:Ha,[Ya]:Wa,[qa]:ir},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jc=Math.PI/180,Ka=180/Math.PI;function br(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function og(i,e){return(i%e+e)%e}function Qc(i,e,t){return(1-t)*i+t*e}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Se=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),A=Math.sin(y);g=Math.sin(g*y)/A,a=Math.sin(a*y)/A,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new z,Ad=new Vt,je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],A=s[4],b=s[7],M=s[2],S=s[5],w=s[8];return r[0]=o*x+a*y+l*M,r[3]=o*m+a*A+l*S,r[6]=o*g+a*b+l*w,r[1]=c*x+u*y+d*M,r[4]=c*m+u*A+d*S,r[7]=c*g+u*b+d*w,r[2]=h*x+f*y+p*M,r[5]=h*m+f*A+p*S,r[8]=h*g+f*b+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(th.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(th.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},th=new je,Td=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){let i={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zr]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:Td,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Td,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var rt=ag();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=jr("canvas")),Gs.width=e.width,Gs.height=e.height;let s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lg=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nh(s[o].image)):r.push(nh(s[o]))}else r=nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var cg=0,ih=new z,dn=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,s=ii,r=jt,o=Ki,a=Un,l=bn,c=i.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=br(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Kh;dn.DEFAULT_ANISOTROPY=1;var Rt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,b=(f+1)/2,M=(g+1)/2,S=(u+h)/4,w=(d+x)/4,_=(p+m)/4;return A>b&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=w/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,ug)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Oi.crossVectors(n,En),Oi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Oi.crossVectors(n,En)),Oi.normalize(),ma.crossVectors(En,Oi),s[0]=Oi.x,s[4]=ma.x,s[8]=En.x,s[1]=Oi.y,s[5]=ma.y,s[9]=En.y,s[2]=Oi.z,s[6]=ma.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],A=n[7],b=n[11],M=n[15],S=s[0],w=s[4],_=s[8],T=s[12],P=s[1],N=s[5],U=s[9],D=s[13],L=s[2],F=s[6],B=s[10],W=s[14],X=s[3],H=s[7],Y=s[11],j=s[15];return r[0]=o*S+a*P+l*L+c*X,r[4]=o*w+a*N+l*F+c*H,r[8]=o*_+a*U+l*B+c*Y,r[12]=o*T+a*D+l*W+c*j,r[1]=u*S+d*P+h*L+f*X,r[5]=u*w+d*N+h*F+f*H,r[9]=u*_+d*U+h*B+f*Y,r[13]=u*T+d*D+h*W+f*j,r[2]=p*S+x*P+m*L+g*X,r[6]=p*w+x*N+m*F+g*H,r[10]=p*_+x*U+m*B+g*Y,r[14]=p*T+x*D+m*W+g*j,r[3]=y*S+A*P+b*L+M*X,r[7]=y*w+A*N+b*F+M*H,r[11]=y*_+A*U+b*B+M*Y,r[15]=y*T+A*D+b*W+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*h,A=a*f-c*d,b=a*h-l*d,M=o*f-c*u,S=o*h-l*u,w=o*d-a*u;return t*(x*y-m*A+g*b)-n*(p*y-m*M+g*S)+s*(p*A-x*M+g*w)-r*(p*b-x*S+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,A=t*l-s*o,b=t*c-r*o,M=n*l-s*a,S=n*c-r*a,w=s*c-r*l,_=u*x-d*p,T=u*m-h*p,P=u*g-f*p,N=d*m-h*x,U=d*g-f*x,D=h*g-f*m,L=y*D-A*U+b*N+M*P-S*T+w*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(a*D-l*U+c*N)*F,e[1]=(s*U-n*D-r*N)*F,e[2]=(x*w-m*S+g*M)*F,e[3]=(h*S-d*w-f*M)*F,e[4]=(l*P-o*D-c*T)*F,e[5]=(t*D-s*P+r*T)*F,e[6]=(m*b-p*w-g*A)*F,e[7]=(u*w-h*b+f*A)*F,e[8]=(o*U-a*P+c*_)*F,e[9]=(n*P-t*U-r*_)*F,e[10]=(p*S-x*b+g*y)*F,e[11]=(d*b-u*S-f*y)*F,e[12]=(a*T-o*N-l*_)*F,e[13]=(t*N-n*T+s*_)*F,e[14]=(x*A-p*M-m*y)*F,e[15]=(u*M-d*A+h*y)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,y=l*c,A=l*u,b=l*d,M=n.x,S=n.y,w=n.z;return s[0]=(1-(x+g))*M,s[1]=(f+b)*M,s[2]=(p-A)*M,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(h+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+A)*w,s[9]=(m-y)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===rr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new z,Gn=new at,hg=new z(0,0,0),ug=new z(1,1,1),Oi=new z,ma=new z,En=new z,Rd=new at,Id=new Vt,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dg=0,Pd=new z,Ws=new Vt,vi=new at,ga=new z,Or=new z,fg=new z,pg=new Vt,Ld=new z(1,0,0),Nd=new z(0,1,0),Dd=new z(0,0,1),Fd={type:"added"},mg={type:"removed"},qs={type:"childadded",child:null},sh={type:"childremoved",child:null},Jt=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new fn,n=new Vt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new je}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Or,ga,this.up):vi.lookAt(ga,Or,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(vi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),qs.child=e,this.dispatchEvent(qs),qs.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=og(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rh(o,r,e+1/3),this.g=rh(o,r,e),this.b=rh(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return rt.workingToColorSpace(on.copy(this),e),Math.round(st(on.r*255,0,255))*65536+Math.round(st(on.g*255,0,255))*256+Math.round(st(on.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Zt){rt.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(xa);let n=Qc(zi.h,xa.h,t),s=Qc(zi.s,xa.s,t),r=Qc(zi.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Je;Je.NAMES=Vf;var eo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},to=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new z,_i=new z,oh=new z,yi=new z,Xs=new z,Ys=new z,Ud=new z,ah=new z,lh=new z,ch=new z,hh=new Rt,uh=new Rt,dh=new Rt,Hi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),_i.subVectors(n,t),oh.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(_i),l=Hn.dot(oh),c=_i.dot(_i),u=_i.dot(oh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hh.setScalar(0),uh.setScalar(0),dh.setScalar(0),hh.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,n),dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hh,r.x),o.addScaledVector(uh,r.y),o.addScaledVector(dh,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),_i.subVectors(e,t),Hn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),Ys.subVectors(r,n),ah.subVectors(e,n);let l=Xs.dot(ah),c=Ys.dot(ah);if(l<=0&&c<=0)return t.copy(n);lh.subVectors(e,s);let u=Xs.dot(lh),d=Ys.dot(lh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xs,o);ch.subVectors(e,r);let f=Xs.dot(ch),p=Ys.dot(ch);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ys,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Ud.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Ud,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(n).addScaledVector(Xs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),_a.subVectors(this.max,zr),$s.subVectors(e.a,zr),Zs.subVectors(e.b,zr),Ks.subVectors(e.c,zr),ki.subVectors(Zs,$s),Vi.subVectors(Ks,Zs),gs.subVectors($s,Ks);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-gs.z,gs.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,gs.z,0,-gs.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-gs.y,gs.x,0];return!fh(t,$s,Zs,Ks,_a)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,$s,Zs,Ks,_a))?!1:(ya.crossVectors(ki,Vi),t=[ya.x,ya.y,ya.z],fh(t,$s,Zs,Ks,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,va=new oi,$s=new z,Zs=new z,Ks=new z,ki=new z,Vi=new z,gs=new z,zr=new z,_a=new z,ya=new z,xs=new z;function fh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xs.fromArray(i,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Bt=new z,ba=new Se,xg=0,un=class extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uf,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var no=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}},vg=new oi,kr=new z,ph=new z,wi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);let t=kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(ph)),this.expandByPoint(kr.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_g=0,Nn=new at,mh=new Jt,js=new z,An=new oi,Vr=new oi,Xt=new z,Ot=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?io:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(An.min,Vr.min),An.expandByPoint(Xt),Xt.addVectors(An.max,Vr.max),An.expandByPoint(Xt)):(An.expandByPoint(Vr.min),An.expandByPoint(Vr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),Xt.add(js)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new z,l[_]=new z;let c=new z,u=new z,d=new z,h=new Se,f=new Se,p=new Se,x=new z,m=new z;function g(_,T,P){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(N),a[_].add(x),a[T].add(x),a[P].add(x),l[_].add(m),l[T].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let P=y[_],N=P.start,U=P.count;for(let D=N,L=N+U;D<L;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let A=new z,b=new z,M=new z,S=new z;function w(_){M.fromBufferAttribute(s,_),S.copy(M);let T=a[_];A.copy(T),A.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(S,T);let N=b.dot(l[_])<0?-1:1;o.setXYZW(_,A.x,A.y,A.z,N)}for(let _=0,T=y.length;_<T;++_){let P=y[_],N=P.start,U=P.count;for(let D=N,L=N+U;D<L;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new un(h,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gh=new z,yg=new z,bg=new je,qn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gh.subVectors(n,t).cross(yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bg.getNormalMatrix(e),s=this.coplanarPoint(gh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sg=0,Ei=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=br(),this.name="",this.type="Material",this.blending=vr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new z,xh=new z,Sa=new z,Ma=new z,so=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xh.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),Ma.copy(this.origin).sub(xh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sa),a=Ma.dot(this.direction),l=-Ma.dot(Sa),c=Ma.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xh).addScaledVector(Sa,h),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,A=n.z-o.z,b=Math.abs(l),M=Math.abs(c),S=Math.abs(u),w,_,T,P,N,U,D,L,F,B,W,X;if(b>=M&&b>=S?(T=l,U=d,F=p,X=g,l>=0?(w=c,_=u,P=h,N=f,D=x,L=m,B=y,W=A):(w=u,_=c,P=f,N=h,D=m,L=x,B=A,W=y)):M>=S?(T=c,U=h,F=x,X=y,c>=0?(w=u,_=l,P=f,N=d,D=m,L=p,B=A,W=g):(w=l,_=u,P=d,N=f,D=p,L=m,B=g,W=A)):(T=u,U=f,F=m,X=A,u>=0?(w=l,_=c,P=d,N=h,D=p,L=x,B=g,W=y):(w=c,_=l,P=h,N=d,D=x,L=p,B=y,W=g)),T===0)return null;let H=w/T,Y=_/T,j=1/T,te=P-H*U,me=N-Y*U,pe=D-H*F,Ce=L-Y*F,Ze=B-H*X,Q=W-Y*X,ne=Ze*Ce-Q*pe,xe=te*Q-me*Ze,Ve=pe*me-Ce*te;if(s){if(ne<0||xe<0||Ve<0)return null}else if((ne<0||xe<0||Ve<0)&&(ne>0||xe>0||Ve>0))return null;let Me=ne+xe+Ve;if(Me===0)return null;let We=j*(ne*U+xe*F+Ve*X);return(Me>0?We<0:We>0)?null:this.at(We/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new at,vs=new so,wa=new wi,Od=new z,Ea=new z,Aa=new z,Ta=new z,vh=new z,Ca=new z,zd=new z,Ra=new z,yt=class extends Jt{constructor(e=new Ot,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(vh.fromBufferAttribute(d,e),o?Ca.addScaledVector(vh,u):Ca.addScaledVector(vh.sub(t),u))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(wa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(wa,Od)===null||vs.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Bd.copy(r).invert(),vs.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=A;b<M;b+=3){let S=a.getX(b),w=a.getX(b+1),_=a.getX(b+2);s=Ia(this,g,e,n,c,u,d,S,w,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);s=Ia(this,o,e,n,c,u,d,y,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,M=A;b<M;b+=3){let S=b,w=b+1,_=b+2;s=Ia(this,g,e,n,c,u,d,S,w,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,A=m+1,b=m+2;s=Ia(this,o,e,n,c,u,d,y,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mg(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:i}}function Ia(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ea),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ta);let u=Mg(i,e,t,n,Ea,Aa,Ta,zd);if(u){let d=new z;Hi.getBarycoord(zd,Ea,Aa,Ta,d),s&&(u.uv=Hi.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=Hi.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};Hi.getNormal(Ea,Aa,Ta,h.normal),u.face=h,u.barycoord=d}return u}var ro=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Yt,u=Yt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oo=class extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new at,kd=new at,Pa=[],Vd=new oi,wg=new at,Gr=new yt,Hr=new wi,Ss=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Vd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Hr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),kd.multiplyMatrices(n,Js),Gr.matrixWorld=kd,Gr.raycast(e,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,Il,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new wi,Eg=new Se(.5,.5),La=new z,cr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],A=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,g-p,M-y).normalize(),s[1].setComponents(c+o,f+u,g+p,M+y).normalize(),s[2].setComponents(c+a,f+d,g+x,M+A).normalize(),s[3].setComponents(c-a,f-d,g-x,M-A).normalize(),n)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,g-m,M-b).normalize();else if(s[4].setComponents(c-l,f-h,g-m,M-b).normalize(),t===Xn)s[5].setComponents(c+l,f+h,g+m,M+b).normalize();else if(t===rr)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=Eg.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(La.x=s.normal.x>0?e.max.x:e.min.x,La.y=s.normal.y>0?e.max.y:e.min.y,La.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hr=class extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},el=new z,tl=new z,Gd=new at,Wr=new so,Na=new wi,_h=new z,Hd=new z,ao=class extends Jt{constructor(e=new Ot,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)el.fromBufferAttribute(t,s-1),tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=el.distanceTo(tl);e.setAttribute("lineDistance",new _t(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Gd.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),A=Da(this,e,Wr,l,g,y,x);A&&t.push(A)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=Da(this,e,Wr,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Da(this,e,Wr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Da(this,e,Wr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Da(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(el.fromBufferAttribute(a,s),tl.fromBufferAttribute(a,r),t.distanceSqToSegment(el,tl,_h,Hd)>n)return;_h.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_h);if(!(c<e.near||c>e.far))return{distance:c,point:Hd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var lo=class extends dn{constructor(e=[],t=Zi,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ur=class extends dn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends dn{constructor(e,t,n=Kn,s,r,o,a=Yt,l=Yt,c,u=si,d=1){if(u!==si&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends Wi{constructor(e,t=Kn,n=Zi,s,r,o=Yt,a=Yt,l,c=si){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},co=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function p(x,m,g,y,A,b,M,S,w,_,T){let P=b/w,N=M/_,U=b/2,D=M/2,L=S/2,F=w+1,B=_+1,W=0,X=0,H=new z;for(let Y=0;Y<B;Y++){let j=Y*N-D;for(let te=0;te<F;te++){let me=te*P-U;H[x]=me*y,H[m]=j*A,H[g]=L,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),d.push(te/w),d.push(1-Y/_),W+=1}}for(let Y=0;Y<_;Y++)for(let j=0;j<w;j++){let te=h+j+F*Y,me=h+j+F*(Y+1),pe=h+(j+1)+F*(Y+1),Ce=h+(j+1)+F*Y;l.push(te,me,Ce),l.push(me,pe,Ce),X+=6}a.addGroup(f,X,T),f+=X,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new at;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},dr=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},il=class extends dr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ru(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Wd=new z,qd=new z,yh=new ru,bh=new ru,Sh=new ru,sl=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(qd.subVectors(s[0],s[1]).add(s[0]),c=qd);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Wd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),yh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),bh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),Sh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),bh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Sh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(yh.calc(l),bh.calc(l),Sh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ag(i,e){let t=1-i;return t*t*e}function Tg(i,e){return 2*(1-i)*i*e}function Cg(i,e){return i*i*e}function Xr(i,e,t,n){return Ag(i,e)+Tg(i,t)+Cg(i,n)}function Rg(i,e){let t=1-i;return t*t*t*e}function Ig(i,e){let t=1-i;return 3*t*t*i*e}function Pg(i,e){return 3*(1-i)*i*i*e}function Lg(i,e){return i*i*i*e}function Yr(i,e,t,n,s){return Rg(i,e)+Ig(i,t)+Pg(i,n)+Lg(i,s)}var ho=class extends Cn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Cn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(e,s.x,r.x,o.x,a.x),Yr(e,s.y,r.y,o.y,a.y),Yr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends Cn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Cn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Cn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(e,s.x,r.x,o.x),Xr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Cn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(e,s.x,r.x,o.x),Xr(e,s.y,r.y,o.y),Xr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Xd(a,l.x,c.x,u.x,d.x),Xd(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Rh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:sl,CubicBezierCurve:ho,CubicBezierCurve3:rl,EllipseCurve:dr,LineCurve:uo,LineCurve3:ol,QuadraticBezierCurve:fo,QuadraticBezierCurve3:al,SplineCurve:po}),ll=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Rh[s.type]().fromJSON(s))}return this}},mo=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new uo(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new fo(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ho(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new dr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fr=class extends mo{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mo().fromJSON(s))}return this}};function Ng(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Og(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return go(r,o,t,a,l,c,0),o}function Gf(i,e,t,n,s){let r;if(s===Zg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yd(o/n|0,i[o],i[o+1],r);return r&&pr(r,r.next)&&(vo(r),r=r.next),r}function Ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Hg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fg(i,n,s,r):Dg(i)){e.push(l.i,i.i,c.i),vo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ug(Ms(i),e),go(i,e,t,n,s,r,2)):o===2&&Bg(i,e,t,n,s,r):go(Ms(i),e,t,n,s,r,1);break}}}function Dg(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&qr(s,a,r,l,o,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Ih(f,p,e,t,n),y=Ih(x,m,e,t,n),A=i.prevZ,b=i.nextZ;for(;A&&A.z>=g&&b&&b.z<=y;){if(A.x>=f&&A.x<=x&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&qr(a,u,l,d,c,h,A.x,A.y)&&Lt(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&qr(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=g;){if(A.x>=f&&A.x<=x&&A.y>=p&&A.y<=m&&A!==s&&A!==o&&qr(a,u,l,d,c,h,A.x,A.y)&&Lt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&qr(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ug(i,e){let t=i;do{let n=t.prev,s=t.next.next;!pr(n,s)&&Wf(n,t,t.next,s)&&xo(n,s)&&xo(s,n)&&(e.push(n.i,t.i,s.i),vo(t),vo(t.next),t=i=s),t=t.next}while(t!==i);return Ms(t)}function Bg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xg(o,a)){let l=qf(o,a);o=Ms(o,o.next),l=Ms(l,l.next),go(o,e,t,n,s,r,0),go(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Og(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Gf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(qg(c))}s.sort(zg);for(let r=0;r<s.length;r++)t=kg(s[r],t);return t}function zg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function kg(i,e){let t=Vg(i,e);if(!t)return e;let n=qf(t,i);return Ms(n,n.next),Ms(t,t.next)}function Vg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(pr(i,t))return t;do{if(pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Hf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);xo(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Gg(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Gg(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function Hg(i,e,t,n){let s=i;do s.z===0&&(s.z=Ih(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wg(s)}function Wg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ih(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function qr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Hf(i,e,t,n,s,r,o,a)}function Xg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yg(i,e)&&(xo(i,e)&&xo(e,i)&&$g(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||pr(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pr(i,e){return i.x===e.x&&i.y===e.y}function Wf(i,e,t,n){let s=Ua(Lt(i,e,t)),r=Ua(Lt(i,e,n)),o=Ua(Lt(t,n,i)),a=Ua(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&Fa(i,t,e)||r===0&&Fa(i,n,e)||o===0&&Fa(t,i,n)||a===0&&Fa(t,e,n))}function Fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ua(i){return i>0?1:i<0?-1:0}function Yg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function $g(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qf(i,e){let t=Ph(i.i,i.x,i.y),n=Ph(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yd(i,e,t,n){let s=Ph(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ph(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Lh=class{static triangulate(e,t,n=2){return Ng(e,t,n)}},ys=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];$d(e),Zd(n,e);let o=e.length;t.forEach($d);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Zd(n,t[l]);let a=Lh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $d(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _o=class i extends Ot{constructor(e=new fr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Kg,A,b=!1,M,S,w,_;if(g){A=g.getSpacedPoints(u),b=!0,h=!1;let re=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,re),S=new z,w=new z,_=new z}h||(m=0,f=0,p=0,x=0);let T=a.extractPoints(c),P=T.shape,N=T.holes;if(!ys.isClockWise(P)){P=P.reverse();for(let re=0,ce=N.length;re<ce;re++){let ue=N[re];ys.isClockWise(ue)&&(N[re]=ue.reverse())}}function D(re){let ue=10000000000000001e-36,he=re[0];for(let ge=1;ge<=re.length;ge++){let Ge=ge%re.length,Ue=re[Ge],Ye=Ue.x-he.x,Ke=Ue.y-he.y,I=Ye*Ye+Ke*Ke,le=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(he.x),Math.abs(he.y)),$=ue*le*le;if(I<=$){re.splice(Ge,1),ge--;continue}he=Ue}}D(P),N.forEach(D);let L=N.length,F=P;for(let re=0;re<L;re++){let ce=N[re];P=P.concat(ce)}function B(re,ce,ue){return ce||$e("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ce,ue)}let W=P.length;function X(re,ce,ue){let he,ge,Ge,Ue=re.x-ce.x,Ye=re.y-ce.y,Ke=ue.x-re.x,I=ue.y-re.y,le=Ue*Ue+Ye*Ye,$=Ue*I-Ye*Ke;if(Math.abs($)>Number.EPSILON){let R=Math.sqrt(le),v=Math.sqrt(Ke*Ke+I*I),k=ce.x-Ye/R,O=ce.y+Ue/R,q=ue.x-I/v,de=ue.y+Ke/v,fe=((q-k)*I-(de-O)*Ke)/(Ue*I-Ye*Ke);he=k+Ue*fe-re.x,ge=O+Ye*fe-re.y;let ee=he*he+ge*ge;if(ee<=2)return new Se(he,ge);Ge=Math.sqrt(ee/2)}else{let R=!1;Ue>Number.EPSILON?Ke>Number.EPSILON&&(R=!0):Ue<-Number.EPSILON?Ke<-Number.EPSILON&&(R=!0):Math.sign(Ye)===Math.sign(I)&&(R=!0),R?(he=-Ye,ge=Ue,Ge=Math.sqrt(le)):(he=Ue,ge=Ye,Ge=Math.sqrt(le/2))}return new Se(he/Ge,ge/Ge)}let H=[];for(let re=0,ce=F.length,ue=ce-1,he=re+1;re<ce;re++,ue++,he++)ue===ce&&(ue=0),he===ce&&(he=0),H[re]=X(F[re],F[ue],F[he]);let Y=[],j,te=H.concat();for(let re=0,ce=L;re<ce;re++){let ue=N[re];j=[];for(let he=0,ge=ue.length,Ge=ge-1,Ue=he+1;he<ge;he++,Ge++,Ue++)Ge===ge&&(Ge=0),Ue===ge&&(Ue=0),j[he]=X(ue[he],ue[Ge],ue[Ue]);Y.push(j),te=te.concat(j)}let me;if(m===0)me=ys.triangulateShape(F,N);else{let re=[],ce=[];for(let ue=0;ue<m;ue++){let he=ue/m,ge=f*Math.cos(he*Math.PI/2),Ge=p*Math.sin(he*Math.PI/2)+x;for(let Ue=0,Ye=F.length;Ue<Ye;Ue++){let Ke=B(F[Ue],H[Ue],Ge);xe(Ke.x,Ke.y,-ge),he===0&&re.push(Ke)}for(let Ue=0,Ye=L;Ue<Ye;Ue++){let Ke=N[Ue];j=Y[Ue];let I=[];for(let le=0,$=Ke.length;le<$;le++){let R=B(Ke[le],j[le],Ge);xe(R.x,R.y,-ge),he===0&&I.push(R)}he===0&&ce.push(I)}}me=ys.triangulateShape(re,ce)}let pe=me.length,Ce=p+x;for(let re=0;re<W;re++){let ce=h?B(P[re],te[re],Ce):P[re];b?(w.copy(M.normals[0]).multiplyScalar(ce.x),S.copy(M.binormals[0]).multiplyScalar(ce.y),_.copy(A[0]).add(w).add(S),xe(_.x,_.y,_.z)):xe(ce.x,ce.y,0)}for(let re=1;re<=u;re++)for(let ce=0;ce<W;ce++){let ue=h?B(P[ce],te[ce],Ce):P[ce];b?(w.copy(M.normals[re]).multiplyScalar(ue.x),S.copy(M.binormals[re]).multiplyScalar(ue.y),_.copy(A[re]).add(w).add(S),xe(_.x,_.y,_.z)):xe(ue.x,ue.y,d/u*re)}for(let re=m-1;re>=0;re--){let ce=re/m,ue=f*Math.cos(ce*Math.PI/2),he=p*Math.sin(ce*Math.PI/2)+x;for(let ge=0,Ge=F.length;ge<Ge;ge++){let Ue=B(F[ge],H[ge],he);xe(Ue.x,Ue.y,d+ue)}for(let ge=0,Ge=N.length;ge<Ge;ge++){let Ue=N[ge];j=Y[ge];for(let Ye=0,Ke=Ue.length;Ye<Ke;Ye++){let I=B(Ue[Ye],j[Ye],he);b?xe(I.x,I.y+A[u-1].y,A[u-1].x+ue):xe(I.x,I.y,d+ue)}}}Ze(),Q();function Ze(){let re=s.length/3;if(h){let ce=0,ue=W*ce;for(let he=0;he<pe;he++){let ge=me[he];Ve(ge[2]+ue,ge[1]+ue,ge[0]+ue)}ce=u+m*2,ue=W*ce;for(let he=0;he<pe;he++){let ge=me[he];Ve(ge[0]+ue,ge[1]+ue,ge[2]+ue)}}else{for(let ce=0;ce<pe;ce++){let ue=me[ce];Ve(ue[2],ue[1],ue[0])}for(let ce=0;ce<pe;ce++){let ue=me[ce];Ve(ue[0]+W*u,ue[1]+W*u,ue[2]+W*u)}}n.addGroup(re,s.length/3-re,0)}function Q(){let re=s.length/3,ce=0;ne(F,ce),ce+=F.length;for(let ue=0,he=N.length;ue<he;ue++){let ge=N[ue];ne(ge,ce),ce+=ge.length}n.addGroup(re,s.length/3-re,1)}function ne(re,ce){let ue=re.length;for(;--ue>=0;){let he=ue,ge=ue-1;ge<0&&(ge=re.length-1);for(let Ge=0,Ue=u+m*2;Ge<Ue;Ge++){let Ye=W*Ge,Ke=W*(Ge+1),I=ce+he+Ye,le=ce+ge+Ye,$=ce+ge+Ke,R=ce+he+Ke;Me(I,le,$,R)}}}function xe(re,ce,ue){l.push(re),l.push(ce),l.push(ue)}function Ve(re,ce,ue){We(re),We(ce),We(ue);let he=s.length/3,ge=y.generateTopUV(n,s,he-3,he-2,he-1);ht(ge[0]),ht(ge[1]),ht(ge[2])}function Me(re,ce,ue,he){We(re),We(ce),We(he),We(ce),We(ue),We(he);let ge=s.length/3,Ge=y.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);ht(Ge[0]),ht(Ge[1]),ht(Ge[3]),ht(Ge[1]),ht(Ge[2]),ht(Ge[3])}function We(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function ht(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rh[s.type]().fromJSON(s)),new i(n,e.options)}},Kg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(h,1-p),new Se(x,1-g)]:[new Se(a,1-l),new Se(u,1-d),new Se(f,1-p),new Se(m,1-g)]}};function jg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yo=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*h-o;for(let A=0;A<c;A++){let b=A*d-r;p.push(b,-y,0),x.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let A=y+c*g,b=y+c*(g+1),M=y+1+c*(g+1),S=y+1+c*g;f.push(A,b,S),f.push(b,M,S)}this.setIndex(f),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var bo=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new z,h=new z,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],A=g/n,b=o+A*a,M=e*Math.cos(b),S=Math.sqrt(e*e-M*M),w=0;g===0&&o===0?w=.5/t:g===n&&l===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let T=_/t,P=s+T*r;d.x=-S*Math.cos(P),d.y=M,d.z=S*Math.sin(P),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(T+w,1-A),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let A=u[g][y+1],b=u[g][y],M=u[g+1][y],S=u[g+1][y+1];(g!==0||o>0)&&f.push(A,b,S),(g!==n-1||l<Math.PI)&&f.push(b,M,S)}this.setIndex(f),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ws=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new z,f=new z,p=new z;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,b=(s+1)*x+m;l.push(g,y,b),l.push(y,A,b)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kd(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Kd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ou(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Xf={clone:Cs,merge:ln},Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cl=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var hl=class extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-n;break;case Ch:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*n-t;break;case Ch:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,A=(-1-f)*m+(1.5+f)*x+.5*p,b=f*m-f*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+y*o[c+M]+A*o[l+M]+b*o[d+M];return r}},fl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},pl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ml=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,y=d[g],A=d[g+1],b=e*h+p*2,M=u[b],S=u[b+1],w=n0(n,t,y,M,s);r[p]=Yf(w,x,A,S,m)}return r}};function Yf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function t0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function n0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Yf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=t0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Mh(e.settings)&&(n.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break;case Eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Mh(this.settings)&&(jd(this.settings.inTangents,e),jd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Mh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Za;var Xi=class extends In{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=$r;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="color";var xl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};xl.prototype.ValueTypeName="number";var vl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},So=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends In{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=$r;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="vector";var yl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$f=new yl,bl=class{constructor(e){this.manager=e!==void 0?e:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mo=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wh=new at,Jd=new z,Qd=new z,wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=new z,Oa=new Vt,ni=new z,Eo=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,Oa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ba,Oa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Oa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new z,ef=new Se,tf=new Se,Kt=class extends Eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nh=class extends wo{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},Ao=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gr=class extends Eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends wo{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},To=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var er=-90,tr=1,Sl=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(er,tr,e,t);r.layers=this.layers,this.add(r);let o=new Kt(er,tr,e,t);o.layers=this.layers,this.add(o);let a=new Kt(er,tr,e,t);a.layers=this.layers,this.add(a);let l=new Kt(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ml=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var au="\\[\\]\\.:\\/",i0=new RegExp("["+au+"]","g"),lu="[^"+au+"]",s0="[^"+au.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",lu),o0=/(WCOD+)?/.source.replace("WCOD",s0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),c0=new RegExp("^"+r0+o0+a0+l0+"$"),h0=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=c0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Fh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);var Uh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function cu(i,e,t,n){let s=u0(n);switch(t){case tu:return i*e;case Il:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case Ll:return i*e*2/s.components*s.byteLength;case nu:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Nl:return i*e*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Dl:case Ul:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case zl:case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:case Fo:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sc:case rc:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ac:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uo:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u0(i){switch(i){case bn:case jh:return{byteLength:1,components:1};case _r:case Jh:case jn:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case Kn:case Tl:case Fn:return{byteLength:4,components:1};case Qh:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function gp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function f0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,dx=`uniform sampler2D dfgLUT;
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
}`,fx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qx=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,Sv=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Pv=`#define LAMBERT
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
}`,Lv=`#define MATCAP
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
}`,Nv=`#define MATCAP
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
}`,Dv=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,Uv=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,Ov=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,Vv=`#define TOON
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
}`,Gv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:x0,alphatest_fragment:v0,alphatest_pars_fragment:_0,aomap_fragment:y0,aomap_pars_fragment:b0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:w0,beginnormal_vertex:E0,bsdfs:A0,iridescence_fragment:T0,bumpmap_pars_fragment:C0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:N0,color_pars_fragment:D0,color_pars_vertex:F0,color_vertex:U0,common:B0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:z0,displacementmap_pars_vertex:k0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:H0,colorspace_fragment:W0,colorspace_pars_fragment:q0,envmap_fragment:X0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:$0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:ox,envmap_vertex:K0,fog_vertex:j0,fog_pars_vertex:J0,fog_fragment:Q0,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:px,lights_fragment_end:mx,lightprobes_pars_fragment:gx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:yx,map_fragment:bx,map_pars_fragment:Sx,map_particle_fragment:Mx,map_particle_pars_fragment:wx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Ax,morphinstance_vertex:Tx,morphcolor_vertex:Cx,morphnormal_vertex:Rx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Px,normal_fragment_begin:Lx,normal_fragment_maps:Nx,normal_pars_fragment:Dx,normal_pars_vertex:Fx,normal_vertex:Ux,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Vx,opaque_fragment:Gx,packing:Hx,premultiplied_alpha_fragment:Wx,project_vertex:qx,dithering_fragment:Xx,dithering_pars_fragment:Yx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:jx,shadowmap_vertex:Jx,shadowmask_pars_fragment:Qx,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:sv,specularmap_pars_fragment:rv,tonemapping_fragment:ov,tonemapping_pars_fragment:av,transmission_fragment:lv,transmission_pars_fragment:cv,uv_pars_fragment:hv,uv_pars_vertex:uv,uv_vertex:dv,worldpos_vertex:fv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:xv,cube_vert:vv,cube_frag:_v,depth_vert:yv,depth_frag:bv,distance_vert:Sv,distance_frag:Mv,equirect_vert:wv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:Tv,meshbasic_vert:Cv,meshbasic_frag:Rv,meshlambert_vert:Iv,meshlambert_frag:Pv,meshmatcap_vert:Lv,meshmatcap_frag:Nv,meshnormal_vert:Dv,meshnormal_frag:Fv,meshphong_vert:Uv,meshphong_frag:Bv,meshphysical_vert:Ov,meshphysical_frag:zv,meshtoon_vert:kv,meshtoon_frag:Vv,points_vert:Gv,points_frag:Hv,shadow_vert:Wv,shadow_frag:qv,sprite_vert:Xv,sprite_frag:Yv},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ln([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ln([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ln([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ln([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ln([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ln([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:ln([Ee.common,Ee.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:ln([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var fc={r:0,b:0,g:0},$v=new at,xp=new je;xp.set(-1,0,0,0,1,0,0,0,1);function Zv(i,e,t,n,s,r){let o=new Je(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){let b=y.backgroundBlurriness>0;A=e.get(A,b)}return A}function p(y){let A=!1,b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,A){let b=f(A);b&&(b.isCubeTexture||b.mapping===Ro)?(c===void 0&&(c=new yt(new Yn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Cs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xp),c.material.toneMapped=rt.getTransfer(b.colorSpace)!==ft,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new yt(new yo(2,2),new Rn({name:"BackgroundMaterial",uniforms:Cs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=rt.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,A){y.getRGB(fc,ou(i)),t.buffers.color.setClear(fc.r,fc.g,fc.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,A=1){o.set(y),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Kv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,U,D,L,F){let B=!1,W=d(N,L,D,U);r!==W&&(r=W,c(r.object)),B=f(N,L,D,F),B&&p(N,L,D,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(N,U,D,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,U,D,L){let F=L.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let W=N.isInstancedMesh===!0?N.id:0,X=B[W];X===void 0&&(X={},B[W]=X);let H=X[D.id];H===void 0&&(H={},X[D.id]=H);let Y=H[F];return Y===void 0&&(Y=h(l()),H[F]=Y),Y}function h(N){let U=[],D=[],L=[];for(let F=0;F<t;F++)U[F]=0,D[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,U,D,L){let F=r.attributes,B=U.attributes,W=0,X=D.getAttributes();for(let H in X)if(X[H].location>=0){let j=F[H],te=B[H];if(te===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(N,U,D,L){let F={},B=U.attributes,W=0,X=D.getAttributes();for(let H in X)if(X[H].location>=0){let j=B[H];j===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let te={};te.attribute=j,j&&j.data&&(te.data=j.data),F[H]=te,W++}r.attributes=F,r.attributesNum=W,r.index=L}function x(){let N=r.newAttributes;for(let U=0,D=N.length;U<D;U++)N[U]=0}function m(N){g(N,0)}function g(N,U){let D=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;D[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),F[N]!==U&&(i.vertexAttribDivisor(N,U),F[N]=U)}function y(){let N=r.newAttributes,U=r.enabledAttributes;for(let D=0,L=U.length;D<L;D++)U[D]!==N[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function A(N,U,D,L,F,B,W){W===!0?i.vertexAttribIPointer(N,U,D,F,B):i.vertexAttribPointer(N,U,D,L,F,B)}function b(N,U,D,L){x();let F=L.attributes,B=D.getAttributes(),W=U.defaultAttributeValues;for(let X in B){let H=B[X];if(H.location>=0){let Y=F[X];if(Y===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){let j=Y.normalized,te=Y.itemSize,me=e.get(Y);if(me===void 0)continue;let pe=me.buffer,Ce=me.type,Ze=me.bytesPerElement,Q=Ce===i.INT||Ce===i.UNSIGNED_INT||Y.gpuType===Tl;if(Y.isInterleavedBufferAttribute){let ne=Y.data,xe=ne.stride,Ve=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)g(H.location+Me,ne.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Me=0;Me<H.locationSize;Me++)A(H.location+Me,te/H.locationSize,Ce,j,xe*Ze,(Ve+te/H.locationSize*Me)*Ze,Q)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)g(H.location+ne,Y.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<H.locationSize;ne++)m(H.location+ne);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ne=0;ne<H.locationSize;ne++)A(H.location+ne,te/H.locationSize,Ce,j,te*Ze,te/H.locationSize*ne*Ze,Q)}}else if(W!==void 0){let j=W[X];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}y()}function M(){T();for(let N in n){let U=n[N];for(let D in U){let L=U[D];for(let F in L){let B=L[F];for(let W in B)u(B[W].object),delete B[W];delete L[F]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let D in U){let L=U[D];for(let F in L){let B=L[F];for(let W in B)u(B[W].object),delete B[W];delete L[F]}}delete n[N.id]}function w(N){for(let U in n){let D=n[U];for(let L in D){let F=D[L];if(F[N.id]===void 0)continue;let B=F[N.id];for(let W in B)u(B[W].object),delete B[W];delete F[N.id]}}}function _(N){for(let U in n){let D=n[U],L=N.isInstancedMesh===!0?N.id:0,F=D[L];if(F!==void 0){for(let B in F){let W=F[B];for(let X in W)u(W[X].object),delete W[X];delete F[B]}delete D[L],Object.keys(D).length===0&&delete n[U]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function jv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Jv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let _=w===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bn&&w!==Fn&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:b,maxSamples:M,samples:S}}function Qv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,A=y*4,b=g.clippingState||null;l.value=b,b=u(p,h,A,f);for(let M=0;M!==A;++M)b[M]=t[M];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,b=f;A!==x;++A,b+=4)o.copy(d[A]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Mr=4,e_=6,t_=20,n_=256,Bo=new gr,Zf=new Je,hu=null,uu=0,du=0,fu=!1,i_=new z,Rs=new z,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=i_}=r;hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,uu,du),this._renderer.xr.enabled=fu,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:jn,format:Un,colorSpace:Zr,depthBuffer:!1},s=Kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(r)),this._blurMaterial=o_(r,e,t),this._ggxMaterial=r_(r,e,t)}return s}_compileMaterial(e){let t=new yt(new Ot,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,s,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Zf),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new Yn,new Tn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Zf),g=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let M=this._cubeSize;Sr(s,b*M,A>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zi||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Mr?n-p+Mr:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Sr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Sr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Bo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Mr?s-this._lodMax+Mr:0),h=4*(this._cubeSize-u);Sr(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Bo)}};function s_(i){let e=[],t=[],n=i,s=i-Mr+1+e_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let g=0;g<d;g++){let y=g%3*2/3-1,A=g>2?0:-1,b=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];p.set(b,f*h*g);for(let M=0;M<h;M++){let S=u[M*2]*2-1,w=u[M*2+1]*2-1;g===0?Rs.set(1,w,S):g===1?Rs.set(-S,1,-w):g===2?Rs.set(-S,w,1):g===3?Rs.set(-1,w,-S):g===4?Rs.set(-S,-1,w):Rs.set(S,w,-1),Rs.toArray(x,(g*h+M)*f)}}let m=new Ot;m.setAttribute("position",new un(p,f)),m.setAttribute("outputDirection",new un(x,f)),t.push(new yt(m,null)),n>Mr&&n--}return{lodMeshes:t,sizeLods:e}}function Kf(i,e,t){let n=new yn(i,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r_(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function o_(i,e,t){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function jf(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Jf(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ai});r.uniforms.tEquirect.value=t;let o=new yt(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=jt),new Sl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function a_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===wl||f===El)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new gc(p.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,p=f===wl||f===El,x=f===Zi||f===Ts;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new mc(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new mc(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===wl?h.mapping=Zi:f===El&&(h.mapping=Ts),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function l_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function c_(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let A=0,b=y.length;A<b;A+=3){let M=y[A+0],S=y[A+1],w=y[A+2];h.push(M,S,S,w,w,M)}}else{let y=p.array;x=p.version;for(let A=0,b=y.length/3-1;A<b;A+=3){let M=A+0,S=A+1,w=A+2;h.push(M,S,S,w,w,M)}}let m=new(p.count>=65535?io:no)(h,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function h_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function u_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d_(i,e,t){let n=new WeakMap,s=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let b=a.attributes.position.count*A,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*M*4*d),w=new Jr(S,b,M,d);w.type=Fn,w.needsUpdate=!0;let _=A*4;for(let P=0;P<d;P++){let N=m[P],U=g[P],D=y[P],L=b*M*4*P;for(let F=0;F<N.count;F++){let B=F*_;f===!0&&(s.fromBufferAttribute(N,F),S[L+B+0]=s.x,S[L+B+1]=s.y,S[L+B+2]=s.z,S[L+B+3]=0),p===!0&&(s.fromBufferAttribute(U,F),S[L+B+4]=s.x,S[L+B+5]=s.y,S[L+B+6]=s.z,S[L+B+7]=0),x===!0&&(s.fromBufferAttribute(D,F),S[L+B+8]=s.x,S[L+B+9]=s.y,S[L+B+10]=s.z,S[L+B+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Se(b,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function f_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var p_={[Wh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Xh]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[Yh]:"CUSTOM_TONE_MAPPING"};function m_(i,e,t,n,s,r){let o=new yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _t([0,2,0,0,2,0],2));let u=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new yt(c,u),h=new gr(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,y=[],A=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let S=0;S<y.length;S++){let w=y[S];w.setSize&&w.setSize(b,M)}},this.setEffects=function(b){y=b,A=y.length>0&&y[0].isRenderPass===!0;let M=o.width,S=o.height;y.length>0&&a===null&&(a=new yn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<y.length;w++){let _=y[w];_.setSize&&_.setSize(M,S)}},this.begin=function(b,M){if(x||b.toneMapping===Zn&&y.length===0)return!1;if(g=M,M!==null){let S=M.width,w=M.height;(o.width!==S||o.height!==w)&&this.setSize(S,w)}return A===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return A},this.end=function(b,M){b.toneMapping=m,x=!0;let S=o,w=a;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(b,w,S,M),T.needsSwap!==!1&&(S=w,w=w===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},rt.getTransfer(f)===ft&&(u.defines.SRGB_TRANSFER="");let _=p_[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(d,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var vp=new dn,gu=new Wi(1,1),_p=new Jr,yp=new Qa,bp=new lo,Qf=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _c(i,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function g_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function y_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;ip.set(n),i.uniformMatrix2fv(this.addr,!1,ip),Ht(t,n)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),Ht(t,n)}}function S_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;tp.set(n),i.uniformMatrix4fv(this.addr,!1,tp),Ht(t,n)}}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gu.compareFunction=t.isReversedDepthBuffer()?dc:uc,r=gu):r=vp,t.setTexture2D(e||r,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yp,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bp,s)}function D_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_p,s)}function F_(i){switch(i){case 5126:return g_;case 35664:return x_;case 35665:return v_;case 35666:return __;case 35674:return y_;case 35675:return b_;case 35676:return S_;case 5124:case 35670:return M_;case 35667:case 35671:return w_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return T_;case 36294:return C_;case 36295:return R_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return D_}}function U_(i,e){i.uniform1fv(this.addr,e)}function B_(i,e){let t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function O_(i,e){let t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function z_(i,e){let t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function k_(i,e){let t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){let t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G_(i,e){let t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H_(i,e){i.uniform1iv(this.addr,e)}function W_(i,e){i.uniform2iv(this.addr,e)}function q_(i,e){i.uniform3iv(this.addr,e)}function X_(i,e){i.uniform4iv(this.addr,e)}function Y_(i,e){i.uniform1uiv(this.addr,e)}function $_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function K_(i,e){i.uniform4uiv(this.addr,e)}function j_(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=gu:o=vp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function J_(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yp,r[o])}function Q_(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bp,r[o])}function ey(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_p,r[o])}function ty(i){switch(i){case 5126:return U_;case 35664:return B_;case 35665:return O_;case 35666:return z_;case 35674:return k_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return q_;case 35669:case 35673:return X_;case 5125:return Y_;case 36294:return $_;case 36295:return Z_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ey}}var xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}},vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},_u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function sp(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){let n=i.name,s=n.length;for(pu.lastIndex=0;;){let r=pu.exec(n),o=pu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sp(t,c===void 0?new xu(a,i,e):new vu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new _u(a),sp(t,d)),t=d}}}var wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ny(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function rp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iy=37297,sy=0;function ry(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var op=new je;function oy(i){rt._getMatrix(op,rt.workingColorSpace,i);let e=`mat3( ${op.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ap(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ry(i.getShaderSource(e),a)}else return r}function ay(i,e){let t=oy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ly={[Wh]:"Linear",[qh]:"Reinhard",[Xh]:"Cineon",[Co]:"ACESFilmic",[$h]:"AgX",[Zh]:"Neutral",[Yh]:"Custom"};function cy(i,e){let t=ly[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pc=new z;function hy(){rt.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function dy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zo(i){return i!==""}function lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(i){return i.replace(py,gy)}var my=new Map;function gy(i,e){let t=tt[e];if(t===void 0){let n=my.get(e);if(n!==void 0)t=tt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yu(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(i){return i.replace(xy,vy)}function vy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function up(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _y={[Es]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function yy(i){return _y[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[Zi]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function Sy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":by[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var My={[Ts]:"ENVMAP_MODE_REFRACTION"};function wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":My[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ey={[Hh]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function Ay(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ey[i.combine]||"ENVMAP_BLENDING_NONE"}function Ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=yy(t),c=Sy(t),u=wy(t),d=Ay(t),h=Ty(t),f=uy(t),p=dy(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zo).join(`
`),g.length>0&&(g+=`
`)):(m=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),g=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=yu(o),o=lp(o,t),o=cp(o,t),a=yu(a),a=lp(a,t),a=cp(a,t),o=hp(o),a=hp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=y+m+o,b=y+g+a,M=rp(s,s.VERTEX_SHADER,A),S=rp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(S)||"",F=U.trim(),B=D.trim(),W=L.trim(),X=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let Y=ap(s,M,"vertex"),j=ap(s,S,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+Y+`
`+j)}else F!==""?Xe("WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(H=!1);H&&(N.diagnostics={runnable:X,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(S),_=new wr(s,x),T=fy(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,iy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var Ry=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Su(e),t.set(e,n)),n}},Su=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Iy(i){return i===Ji||i===Fo||i===Uo}function Py(i,e,t,n,s,r){let o=new Qr,a=new bu,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,N,U,D){let L=N.fog,F=U.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||B,W),H=X&&X.mapping===Ro?X.image.height:null,Y=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=j!==void 0?j.length:0,me=0;F.morphAttributes.position!==void 0&&(me=1),F.morphAttributes.normal!==void 0&&(me=2),F.morphAttributes.color!==void 0&&(me=3);let pe,Ce,Ze,Q;if(Y){let Mt=ci[Y];pe=Mt.vertexShader,Ce=Mt.fragmentShader}else{pe=_.vertexShader,Ce=_.fragmentShader;let Mt=a.getVertexShaderStage(_),ut=a.getFragmentShaderStage(_);a.update(_,Mt,ut),Ze=Mt.id,Q=ut.id}let ne=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,We=!!_.map,ht=!!_.matcap,re=!!X,ce=!!_.aoMap,ue=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,Ge=!!_.displacementMap,Ue=!!_.emissiveMap,Ye=!!_.metalnessMap,Ke=!!_.roughnessMap,I=_.anisotropy>0,le=_.clearcoat>0,$=_.dispersion>0,R=_.retroreflectivity>0,v=_.iridescence>0,k=_.sheen>0,O=_.transmission>0,q=I&&!!_.anisotropyMap,de=le&&!!_.clearcoatMap,fe=le&&!!_.clearcoatNormalMap,ee=le&&!!_.clearcoatRoughnessMap,ie=v&&!!_.iridescenceMap,ve=v&&!!_.iridescenceThicknessMap,Oe=k&&!!_.sheenColorMap,we=k&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ze=!!_.specularColorMap,qe=!!_.specularIntensityMap,Qe=O&&!!_.transmissionMap,G=O&&!!_.thicknessMap,ye=!!_.gradientMap,se=!!_.alphaMap,be=_.alphaTest>0,Re=!!_.alphaHash,ae=!!_.extensions,ke=Zn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Fe={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:Ce,defines:_.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:ht,envMap:re,envMapMode:re&&X.mapping,envMapCubeUVHeight:H,aoMap:ce,lightMap:ue,bumpMap:he,normalMap:ge,displacementMap:Ge,emissiveMap:Ue,normalMapObjectSpace:ge&&_.normalMapType===Cf,normalMapTangentSpace:ge&&_.normalMapType===hc,packedNormalMap:ge&&_.normalMapType===hc&&Iy(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ke,anisotropy:I,anisotropyMap:q,clearcoat:le,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:$,retroreflection:R,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:k,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:_e,specularColorMap:ze,specularIntensityMap:qe,transmission:O,transmissionMap:Qe,thicknessMap:G,gradientMap:ye,opaque:_.transparent===!1&&_.blending===vr&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Re,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:ce&&p(_.aoMap.channel),lightMapUv:ue&&p(_.lightMap.channel),bumpMapUv:he&&p(_.bumpMap.channel),normalMapUv:ge&&p(_.normalMap.channel),displacementMapUv:Ge&&p(_.displacementMap.channel),emissiveMapUv:Ue&&p(_.emissiveMap.channel),metalnessMapUv:Ye&&p(_.metalnessMap.channel),roughnessMapUv:Ke&&p(_.roughnessMap.channel),anisotropyMapUv:q&&p(_.anisotropyMap.channel),clearcoatMapUv:de&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(_.sheenRoughnessMap.channel),specularMapUv:_e&&p(_.specularMap.channel),specularColorMapUv:ze&&p(_.specularColorMap.channel),specularIntensityMapUv:qe&&p(_.specularIntensityMap.channel),transmissionMapUv:Qe&&p(_.transmissionMap.channel),thicknessMapUv:G&&p(_.thicknessMap.channel),alphaMapUv:se&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||I),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(We||se),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function A(_){let T=f[_.type],P;if(T){let N=ci[T];P=Xf.clone(N.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Cy(i,T,_,s),c.push(P),u.set(T,P)),P}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function Ly(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=p,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=m,y.group=g),e++,y}function l(h,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let A=a(h,f,p,x,m,g);p.transmission>0?n.push(A):p.transparent===!0?s.push(A):t.push(A)}function c(h,f,p,x,m,g){let y=a(h,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||Ny),n.length>1&&n.sort(f||dp),s.length>1&&s.sort(f||dp)}function d(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Dy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new fp,i.set(n,[o])):s>=r.length?(o=new fp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var By=0;function Oy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zy(i){let e=new Fy,t=Uy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new at,o=new at;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,A=0,b=0,M=0,S=0,w=0,_=0,T=0,P=0;c.sort(Oy);for(let U=0,D=c.length;U<D;U++){let L=c[U],F=L.color,B=L.intensity,W=L.distance,X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);P++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,j=t.get(L);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=X;let te=Y.getViewportCount();for(let me=0;me<te;me++)n.sunShadowMatrix[x+me]=Y.getMatrix(me),n.sunShadowCascade[x+me]=Y._cascadeData[me];x+=te,p++}n.sun[f]=H,f++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,j=t.get(L);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[y]=H;let Y=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,Y.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[y]=Y.matrix,L.castShadow){let j=t.get(L);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=X,w++}y++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=H,A++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let Y=L.shadow,j=t.get(L);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[b]=H,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==A||N.hemiLength!==b||N.numSunShadows!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==w||N.numSpotMaps!==_||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=A,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=A,N.hemiLength=b,N.numSunShadows=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=w,N.numSpotMaps=_,N.numLightProbes=P,n.version=By++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,A=c.length;y<A;y++){let b=c[y];if(b.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function pp(i){let e=new zy(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ky(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new pp(i),e.set(s,[a])):r>=o.length?(a=new pp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`,Hy=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Wy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],mp=new at,Oo=new z,mu=new z;function qy(i,e,t){let n=new cr,s=new Se,r=new Se,o=new Rt,a=new hl,l=new ul,c={},u=t.maxTextureSize,d={[$i]:pn,[pn]:$i,[Dn]:Dn},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Vy,fragmentShader:Gy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new yt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let g=this.type;this.render=function(S,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===rf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=g!==this.type;D&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=S.length;L<F;L++){let B=S[L],W=B.shadow;if(W===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let X=W.getFrameExtents();s.multiply(X),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===xr){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new yn(s.x,s.y,{format:Ji,type:jn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Wi(s.x,s.y,Fn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=si,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt}else B.isPointLight?(W.map=new gc(s.x),W.map.depthTexture=new nl(s.x,Kn)):(W.map=new yn(s.x,s.y),W.map.depthTexture=new Wi(s.x,s.y,Kn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=si,this.type===Es?(W.map.depthTexture.compareFunction=H?dc:uc,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Y=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,_);for(let j=0;j<Y;j++){let te=W.getCamera(j);if(B.isPointLight){let me=W.camera,pe=W.matrix,Ce=B.distance||me.far;Ce!==me.far&&(me.far=Ce,me.updateProjectionMatrix()),Oo.setFromMatrixPosition(B.matrixWorld),me.position.copy(Oo),mu.copy(me.position),mu.add(Hy[j]),me.up.copy(Wy[j]),me.lookAt(mu),me.updateMatrixWorld(),pe.makeTranslation(-Oo.x,-Oo.y,-Oo.z),mp.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mp,me.coordinateSystem,me.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());let me=W.getViewport(j);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),U.viewport(o)}n=W.getFrustum(j),b(w,_,te,B,this.type)}W.isPointLightShadow!==!0&&this.type===xr&&y(W,_),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function y(S,w){let _=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new yn(s.x,s.y,{format:Ji,type:jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,_,h,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,_,f,x,null)}function A(S,w,_,T){let P=null,N=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)P=N;else if(P=_.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=P.uuid,D=w.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let F=L[D];F===void 0&&(F=P.clone(),L[D]=F,w.addEventListener("dispose",M)),P=F}if(P.visible=w.visible,P.wireframe=w.wireframe,T===xr?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=_}return P}function b(S,w,_,T,P){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===xr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let D=e.update(S),L=S.material;if(Array.isArray(L)){let F=D.groups;for(let B=0,W=F.length;B<W;B++){let X=F[B],H=L[X.materialIndex];if(H&&H.visible){let Y=A(S,H,T,P);S.onBeforeShadow(i,S,w,_,D,Y,X),i.renderBufferDirect(_,null,D,Y,S,X),S.onAfterShadow(i,S,w,_,D,Y,X)}}}else if(L.visible){let F=A(S,L,T,P);S.onBeforeShadow(i,S,w,_,D,F,null),i.renderBufferDirect(_,null,D,F,S,null),S.onAfterShadow(i,S,w,_,D,F,null)}}let U=S.children;for(let D=0,L=U.length;D<L;D++)b(U[D],w,_,T,P)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Xy(i,e){function t(){let G=!1,ye=new Rt,se=null,be=new Rt(0,0,0,0);return{setMask:function(Re){se!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){G=Re},setClear:function(Re,ae,ke,Fe,Mt){Mt===!0&&(Re*=Fe,ae*=Fe,ke*=Fe),ye.set(Re,ae,ke,Fe),be.equals(ye)===!1&&(i.clearColor(Re,ae,ke,Fe),be.copy(ye))},reset:function(){G=!1,se=null,be.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,se=null,be=null,Re=null;return{setReversed:function(ae){if(ye!==ae){let ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let Fe=Re;Re=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(ae){ae?ne(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ae){se!==ae&&!G&&(i.depthMask(ae),se=ae)},setFunc:function(ae){if(ye&&(ae=kf[ae]),be!==ae){switch(ae){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ae}},setLocked:function(ae){G=ae},setClear:function(ae){Re!==ae&&(Re=ae,ye&&(ae=1-ae),i.clearDepth(ae))},reset:function(){G=!1,se=null,be=null,Re=null,ye=!1}}}function s(){let G=!1,ye=null,se=null,be=null,Re=null,ae=null,ke=null,Fe=null,Mt=null;return{setTest:function(ut){G||(ut?ne(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!G&&(i.stencilMask(ut),ye=ut)},setFunc:function(ut,Vn,ei){(se!==ut||be!==Vn||Re!==ei)&&(i.stencilFunc(ut,Vn,ei),se=ut,be=Vn,Re=ei)},setOp:function(ut,Vn,ei){(ae!==ut||ke!==Vn||Fe!==ei)&&(i.stencilOp(ut,Vn,ei),ae=ut,ke=Vn,Fe=ei)},setLocked:function(ut){G=ut},setClear:function(ut){Mt!==ut&&(i.clearStencil(ut),Mt=ut)},reset:function(){G=!1,ye=null,se=null,be=null,Re=null,ae=null,ke=null,Fe=null,Mt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,A=null,b=null,M=null,S=null,w=null,_=new Je(0,0,0),T=0,P=!1,N=null,U=null,D=null,L=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=X>=2);let Y=null,j={},te=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),pe=new Rt().fromArray(te),Ce=new Rt().fromArray(me);function Ze(G,ye,se,be){let Re=new Uint8Array(4),ae=i.createTexture();i.bindTexture(G,ae),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<se;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ye+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return ae}let Q={};Q[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(ir),he(!1),ge(Bh),ne(i.CULL_FACE),ce(ai);function ne(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function xe(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ve(G,ye){return h[G]!==ye?(i.bindFramebuffer(G,ye),h[G]=ye,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Me(G,ye){let se=p,be=!1;if(G){se=f.get(ye),se===void 0&&(se=[],f.set(ye,se));let Re=G.textures;if(se.length!==Re.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ke=Re.length;ae<ke;ae++)se[ae]=i.COLOR_ATTACHMENT0+ae;se.length=Re.length,be=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,be=!0);be&&i.drawBuffers(se)}function We(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let ht={[As]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};ht[cf]=i.MIN,ht[hf]=i.MAX;let re={[uf]:i.ZERO,[df]:i.ONE,[ff]:i.SRC_COLOR,[Vh]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[Gh]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[Mf]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(G,ye,se,be,Re,ae,ke,Fe,Mt,ut){if(G===ai){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),G!==of){if(G!==g||ut!==P){if((y!==As||M!==As)&&(i.blendEquation(i.FUNC_ADD),y=As,M=As),ut)switch(G){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}A=null,b=null,S=null,w=null,_.set(0,0,0),T=0,g=G,P=ut}return}Re=Re||ye,ae=ae||se,ke=ke||be,(ye!==y||Re!==M)&&(i.blendEquationSeparate(ht[ye],ht[Re]),y=ye,M=Re),(se!==A||be!==b||ae!==S||ke!==w)&&(i.blendFuncSeparate(re[se],re[be],re[ae],re[ke]),A=se,b=be,S=ae,w=ke),(Fe.equals(_)===!1||Mt!==T)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Mt),_.copy(Fe),T=Mt),g=G,P=!1}function ue(G,ye){G.side===Dn?xe(i.CULL_FACE):ne(i.CULL_FACE);let se=G.side===pn;ye&&(se=!se),he(se),G.blending===vr&&G.transparent===!1?ce(ai):ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let be=G.stencilWrite;a.setTest(be),be&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){N!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),N=G)}function ge(G){G!==nf?(ne(i.CULL_FACE),G!==U&&(G===Bh?i.cullFace(i.BACK):G===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=G}function Ge(G){G!==D&&(W&&i.lineWidth(G),D=G)}function Ue(G,ye,se){G?(ne(i.POLYGON_OFFSET_FILL),(L!==ye||F!==se)&&(L=ye,F=se,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,se))):xe(i.POLYGON_OFFSET_FILL)}function Ye(G){G?ne(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ke(G){G===void 0&&(G=i.TEXTURE0+B-1),Y!==G&&(i.activeTexture(G),Y=G)}function I(G,ye,se){se===void 0&&(Y===null?se=i.TEXTURE0+B-1:se=Y);let be=j[se];be===void 0&&(be={type:void 0,texture:void 0},j[se]=be),(be.type!==G||be.texture!==ye)&&(Y!==se&&(i.activeTexture(se),Y=se),i.bindTexture(G,ye||Q[G]),be.type=G,be.texture=ye)}function le(){let G=j[Y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{i.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function v(){try{i.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function k(){try{i.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function de(){try{i.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function fe(){try{i.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ee(){try{i.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function ie(){try{i.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ve(G){return d[G]!==void 0?d[G]:i.getParameter(G)}function Oe(G,ye){d[G]!==ye&&(i.pixelStorei(G,ye),d[G]=ye)}function we(G){pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),pe.copy(G))}function _e(G){Ce.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ce.copy(G))}function ze(G,ye){let se=c.get(ye);se===void 0&&(se=new WeakMap,c.set(ye,se));let be=se.get(G);be===void 0&&(be=i.getUniformBlockIndex(ye,G.name),se.set(G,be))}function qe(G,ye){let be=c.get(ye).get(G);l.get(ye)!==be&&(i.uniformBlockBinding(ye,be,G.__bindingPointIndex),l.set(ye,be))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,j={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,A=null,b=null,M=null,S=null,w=null,_=new Je(0,0,0),T=0,P=!1,N=null,U=null,D=null,L=null,F=null,pe.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:xe,bindFramebuffer:Ve,drawBuffers:Me,useProgram:We,setBlending:ce,setMaterial:ue,setFlipSided:he,setCullFace:ge,setLineWidth:Ge,setPolygonOffset:Ue,setScissorTest:Ye,activeTexture:Ke,bindTexture:I,unbindTexture:le,compressedTexImage2D:$,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Oe,getParameter:ve,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:fe,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:we,viewport:_e,reset:Qe}}function Yy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return p?new OffscreenCanvas(R,v):jr("canvas")}function m(R,v,k){let O=1,q=$(R);if((q.width>k||q.height>k)&&(O=k/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor(O*q.width),fe=Math.floor(O*q.height);h===void 0&&(h=x(de,fe));let ee=v?x(de,fe):h;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,de,fe),Xe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+de+"x"+fe+")."),ee}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function g(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,v,k,O,q,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;O&&(fe=e.get("EXT_texture_norm16"),fe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),k===i.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),v===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),k===i.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),k===i.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),v===i.RGBA){let ie=de?Kr:rt.getTransfer(q);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=ie===ft?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),k===i.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(R,v){let k;return R?v===null||v===Kn||v===yr?k=i.DEPTH24_STENCIL8:v===Fn?k=i.DEPTH32F_STENCIL8:v===_r&&(k=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===yr?k=i.DEPTH_COMPONENT24:v===Fn?k=i.DEPTH_COMPONENT32F:v===_r&&(k=i.DEPTH_COMPONENT16),k}function S(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){let v=R.target;v.removeEventListener("dispose",w),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function _(R){let v=R.target;v.removeEventListener("dispose",_),N(v)}function T(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,O=f.get(k);if(O){let q=O[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(R),Object.keys(O).length===0&&f.delete(k)}n.remove(R)}function P(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,O=f.get(k);delete O[v.__cacheKey],o.memory.textures--}function N(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let q=0;q<v.__webglFramebuffer[O].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[O][q]);else i.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)i.deleteFramebuffer(v.__webglFramebuffer[O]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let O=0,q=k.length;O<q;O++){let de=n.get(k[O]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(k[O])}n.remove(R)}let U=0;function D(){U=0}function L(){return U}function F(R){U=R}function B(){let R=U;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function W(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function X(R,v){let k=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let O=R.image;if(O===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function H(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Y(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function j(R,v){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ve(k,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let te={[sr]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},me={[Yt]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Al]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},pe={[If]:i.NEVER,[Ff]:i.ALWAYS,[Pf]:i.LESS,[uc]:i.LEQUAL,[Lf]:i.EQUAL,[dc]:i.GEQUAL,[Nf]:i.GREATER,[Df]:i.NOTEQUAL};function Ce(R,v){if(v.type===Fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===Al||v.magFilter===Io||v.magFilter===Ki||v.minFilter===jt||v.minFilter===Al||v.minFilter===Io||v.minFilter===Ki)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,te[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,te[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,te[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==Io&&v.minFilter!==Ki||v.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));let O=v.source,q=f.get(O);q===void 0&&(q={},f.set(O,q));let de=W(v);if(de!==R.__cacheKey){q[de]===void 0&&(q[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),q[de].usedTimes++;let fe=q[R.__cacheKey];fe!==void 0&&(q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(v)),R.__cacheKey=de,R.__webglTexture=q[de].texture}return k}function Q(R,v,k){return Math.floor(Math.floor(R/k)/v)}function ne(R,v,k,O){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,O,v.data);else{de.sort((Oe,we)=>Oe.start-we.start);let fe=0;for(let Oe=1;Oe<de.length;Oe++){let we=de[fe],_e=de[Oe],ze=we.start+we.count,qe=Q(_e.start,v.width,4),Qe=Q(we.start,v.width,4);_e.start<=ze+1&&qe===Qe&&Q(_e.start+_e.count-1,v.width,4)===qe?we.count=Math.max(we.count,_e.start+_e.count-we.start):(++fe,de[fe]=_e)}de.length=fe+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Oe=0,we=de.length;Oe<we;Oe++){let _e=de[Oe],ze=Math.floor(_e.start/4),qe=Math.ceil(_e.count/4),Qe=ze%v.width,G=Math.floor(ze/v.width),ye=qe,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Qe,G,ye,se,k,O,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function xe(R,v,k){let O=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=i.TEXTURE_3D);let q=Ze(R,v),de=v.source;t.bindTexture(O,R.__webglTexture,i.TEXTURE0+k);let fe=n.get(de);if(de.version!==fe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let se=rt.getPrimaries(rt.workingColorSpace),be=v.colorSpace===Ai?null:rt.getPrimaries(v.colorSpace),Re=v.colorSpace===Ai||se===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=m(v.image,!1,s.maxTextureSize);ie=le(v,ie);let ve=r.convert(v.format,v.colorSpace),Oe=r.convert(v.type),we=b(v.internalFormat,ve,Oe,v.normalized,v.colorSpace,v.isVideoTexture);Ce(O,v);let _e,ze=v.mipmaps,qe=v.isVideoTexture!==!0,Qe=fe.__version===void 0||q===!0,G=de.dataReady,ye=S(v,ie);if(v.isDepthTexture)we=M(v.format===ji,v.type),Qe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,ve,Oe,null));else if(v.isDataTexture)if(ze.length>0){qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ye,we,ze[0].width,ze[0].height);for(let se=0,be=ze.length;se<be;se++)_e=ze[se],qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ve,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,se,we,_e.width,_e.height,0,ve,Oe,_e.data);v.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ye,we,ie.width,ie.height),G&&ne(v,ie,ve,Oe)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,ve,Oe,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,ze[0].width,ze[0].height,ie.depth);for(let se=0,be=ze.length;se<be;se++)if(_e=ze[se],v.format!==Un)if(ve!==null)if(qe){if(G)if(v.layerUpdates.size>0){let Re=cu(_e.width,_e.height,v.format,v.type);for(let ae of v.layerUpdates){let ke=_e.data.subarray(ae*Re/_e.data.BYTES_PER_ELEMENT,(ae+1)*Re/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ae,_e.width,_e.height,1,ve,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,we,_e.width,_e.height,ie.depth,0,_e.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,ie.depth,ve,Oe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,we,_e.width,_e.height,ie.depth,0,ve,Oe,_e.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ye,we,ze[0].width,ze[0].height);for(let se=0,be=ze.length;se<be;se++)_e=ze[se],v.format!==Un?ve!==null?qe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,se,we,_e.width,_e.height,0,_e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ve,Oe,_e.data):t.texImage2D(i.TEXTURE_2D,se,we,_e.width,_e.height,0,ve,Oe,_e.data)}else if(v.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,we,ie.width,ie.height,ie.depth),G)if(v.layerUpdates.size>0){let se=cu(ie.width,ie.height,v.format,v.type);for(let be of v.layerUpdates){let Re=ie.data.subarray(be*se/ie.data.BYTES_PER_ELEMENT,(be+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ie.width,ie.height,1,ve,Oe,Re)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Oe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,ve,Oe,ie.data);else if(v.isData3DTexture)qe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ye,we,ie.width,ie.height,ie.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Oe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,ve,Oe,ie.data);else if(v.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(i.TEXTURE_2D,ye,we,ie.width,ie.height);else{let se=ie.width,be=ie.height;for(let Re=0;Re<ye;Re++)t.texImage2D(i.TEXTURE_2D,Re,we,se,be,0,ve,Oe,null),se>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ie.parentNode!==se){se.appendChild(ie),d.add(v),se.onpaint=be=>{let Re=be.changedElements;for(let ae of d)Re.includes(ae.image)&&(ae.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Re=i.RGBA,ae=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,ae,ke,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(qe&&Qe){let se=$(ze[0]);t.texStorage2D(i.TEXTURE_2D,ye,we,se.width,se.height)}for(let se=0,be=ze.length;se<be;se++)_e=ze[se],qe?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve,Oe,_e):t.texImage2D(i.TEXTURE_2D,se,we,ve,Oe,_e);v.generateMipmaps=!1}else if(qe){if(Qe){let se=$(ie);t.texStorage2D(i.TEXTURE_2D,ye,we,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Oe,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,ve,Oe,ie);g(v)&&y(O),fe.__version=de.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ve(R,v,k){if(v.image.length!==6)return;let O=Ze(R,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let de=n.get(q);if(q.version!==de.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let fe=rt.getPrimaries(rt.workingColorSpace),ee=v.colorSpace===Ai?null:rt.getPrimaries(v.colorSpace),ie=v.colorSpace===Ai||fe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Oe=v.image[0]&&v.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!ve&&!Oe?we[ae]=m(v.image[ae],!0,s.maxCubemapSize):we[ae]=Oe?v.image[ae].image:v.image[ae],we[ae]=le(v,we[ae]);let _e=we[0],ze=r.convert(v.format,v.colorSpace),qe=r.convert(v.type),Qe=b(v.internalFormat,ze,qe,v.normalized,v.colorSpace),G=v.isVideoTexture!==!0,ye=de.__version===void 0||O===!0,se=q.dataReady,be=S(v,_e);Ce(i.TEXTURE_CUBE_MAP,v);let Re;if(ve){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,_e.width,_e.height);for(let ae=0;ae<6;ae++){Re=we[ae].mipmaps;for(let ke=0;ke<Re.length;ke++){let Fe=Re[ke];v.format!==Un?ze!==null?G?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Qe,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Fe.width,Fe.height,ze,qe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,Qe,Fe.width,Fe.height,0,ze,qe,Fe.data)}}}else{if(Re=v.mipmaps,G&&ye){Re.length>0&&be++;let ae=$(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Oe){G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,ze,qe,we[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,we[ae].width,we[ae].height,0,ze,qe,we[ae].data);for(let ke=0;ke<Re.length;ke++){let Mt=Re[ke].image[ae].image;G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,Mt.width,Mt.height,ze,qe,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Qe,Mt.width,Mt.height,0,ze,qe,Mt.data)}}else{G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,qe,we[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,ze,qe,we[ae]);for(let ke=0;ke<Re.length;ke++){let Fe=Re[ke];G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,ze,qe,Fe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,Qe,ze,qe,Fe.image[ae])}}}g(v)&&y(i.TEXTURE_CUBE_MAP),de.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Me(R,v,k,O,q,de){let fe=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ie=b(k.internalFormat,fe,ee,k.normalized,k.colorSpace),ve=n.get(v),Oe=n.get(k);if(Oe.__renderTarget=v,!ve.__hasExternalTextures){let we=Math.max(1,v.width>>de),_e=Math.max(1,v.height>>de);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,de,ie,we,_e,v.depth,0,fe,ee,null):t.texImage2D(q,de,ie,we,_e,0,fe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,q,Oe.__webglTexture,0,Ye(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,q,Oe.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let O=v.depthTexture,q=O&&O.isDepthTexture?O.type:null,de=M(v.stencilBuffer,q),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(v),de,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(v),de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let O=v.textures;for(let q=0;q<O.length;q++){let de=O[q],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),ie=b(de.internalFormat,fe,ee,de.normalized,de.colorSpace);Ke(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(v),ie,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,v,k){let O=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v.depthTexture);let ve=r.convert(v.depthTexture.format),Oe=r.convert(v.depthTexture.type),we;v.depthTexture.format===si?we=i.DEPTH_COMPONENT24:v.depthTexture.format===ji&&(we=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,we,v.width,v.height,0,ve,Oe,null)}}else X(v.depthTexture,0);let de=q.__webglTexture,fe=Ye(v),ee=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ie=v.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===si)Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,de,0);else if(v.depthTexture.format===ji)Ke(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=O}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let O=0;O<6;O++)ht(v.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?ht(v.__webglFramebuffer[0],R,0):ht(v.__webglFramebuffer,R,0)}else if(k){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=i.createRenderbuffer(),We(v.__webglDepthbuffer[O],R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,de)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),We(v.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,v,k){let O=n.get(R);v!==void 0&&Me(O.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&re(R)}function ue(R){let v=R.texture,k=n.get(R),O=n.get(v);R.addEventListener("dispose",_);let q=R.textures,de=R.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=v.version,o.memory.textures++),de){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ie=0;ie<v.mipmaps.length;ie++)k.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ee=0,ie=q.length;ee<ie;ee++){let ve=n.get(q[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){let ie=q[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let ve=r.convert(ie.format,ie.colorSpace),Oe=r.convert(ie.type),we=b(ie.internalFormat,ve,Oe,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),_e=Ye(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,we,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),We(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Me(k.__webglFramebuffer[ee][ie],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else Me(k.__webglFramebuffer[ee],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ee=0,ie=q.length;ee<ie;ee++){let ve=q[ee],Oe=n.get(ve),we=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,Oe.__webglTexture),Ce(we,ve),Me(k.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+ee,we,0),g(ve)&&y(we)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,O.__webglTexture),Ce(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)Me(k.__webglFramebuffer[ie],R,v,i.COLOR_ATTACHMENT0,ee,ie);else Me(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ee,0);g(v)&&y(ee),t.unbindTexture()}R.depthBuffer&&re(R)}function he(R){let v=R.textures;for(let k=0,O=v.length;k<O;k++){let q=v[k];if(g(q)){let de=A(R),fe=n.get(q).__webglTexture;t.bindTexture(de,fe),y(de),t.unbindTexture()}}}let ge=[],Ge=[];function Ue(R){if(R.samples>0){if(Ke(R)===!1){let v=R.textures,k=R.width,O=R.height,q=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),ee=v.length>1;if(ee)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);let Oe=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,q,i.NEAREST),l===!0&&(ge.length=0,Ge.length=0,ge.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ge.push(de),Ge.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);let Oe=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ye(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function le(R,v){let k=R.colorSpace,O=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zr&&k!==Ai&&(rt.getTransfer(k)===ft?(O!==Un||q!==bn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",k)),v}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $y(i,e){function t(n,s=Ai){let r,o=rt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===tu)return i.ALPHA;if(n===nu)return i.RGB;if(n===Un)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===No||n===Do)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Fl||n===Ul||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===zl||n===kl||n===Vl||n===Gl||n===Fo||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===zl)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fo)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wl||n===ql||n===Xl||n===Yl||n===$l||n===Zl||n===Kl||n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===lc||n===Uo||n===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:Zy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Mu,g={},y=t.getContextAttributes(),A=null,b=null,M=[],S=[],w=new Se,_=null,T=null,P=new Kt;P.viewport=new Rt;let N=new Kt;N.viewport=new Rt;let U=[P,N],D=new Ml,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=M[Q];return ne===void 0&&(ne=new lr,M[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=M[Q];return ne===void 0&&(ne=new lr,M[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=M[Q];return ne===void 0&&(ne=new lr,M[Q]=ne),ne.getHandSpace()};function B(Q){let ne=S.indexOf(Q.inputSource);if(ne===-1)return;let xe=M[ne];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||o),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<M.length;Q++){let ne=S[Q];ne!==null&&(S[Q]=null,M[Q].disconnect(ne))}L=null,F=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ve=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?ji:si,Ve=y.stencil?yr:Kn);let We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new yn(h.textureWidth,h.textureHeight,{format:Un,type:bn,depthTexture:new Wi(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(Q){for(let ne=0;ne<Q.removed.length;ne++){let xe=Q.removed[ne],Ve=S.indexOf(xe);Ve>=0&&(S[Ve]=null,M[Ve].disconnect(xe))}for(let ne=0;ne<Q.added.length;ne++){let xe=Q.added[ne],Ve=S.indexOf(xe);if(Ve===-1){for(let We=0;We<M.length;We++)if(We>=S.length){S.push(xe),Ve=We;break}else if(S[We]===null){S[We]=xe,Ve=We;break}if(Ve===-1)break}let Me=M[Ve];Me&&Me.connect(xe)}}let H=new z,Y=new z;function j(Q,ne,xe){H.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);let Ve=H.distanceTo(Y),Me=ne.projectionMatrix.elements,We=xe.projectionMatrix.elements,ht=Me[14]/(Me[10]-1),re=Me[14]/(Me[10]+1),ce=(Me[9]+1)/Me[5],ue=(Me[9]-1)/Me[5],he=(Me[8]-1)/Me[0],ge=(We[8]+1)/We[0],Ge=ht*he,Ue=ht*ge,Ye=Ve/(-he+ge),Ke=Ye*-he;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ke),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Me[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let I=ht+Ye,le=re+Ye,$=Ge-Ke,R=Ue+(Ve-Ke),v=ce*re/le*I,k=ue*re/le*I;Q.projectionMatrix.makePerspective($,R,v,k,I,le),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function te(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,xe=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),D.near=N.near=P.near=ne,D.far=N.far=P.far=xe,(L!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,F=D.far),D.layers.mask=Q.layers.mask|6,P.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ve=Q.parent,Me=D.cameras;te(D,Ve);for(let We=0;We<Me.length;We++)te(Me[We],Ve);Me.length===2?j(D,P,N):D.projectionMatrix.copy(P.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),me(Q,D,Ve)};function me(Q,ne,xe){xe===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ka*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Q){return g[Q]};let pe=null;function Ce(Q,ne){if(u=ne.getViewerPose(c||o),p=ne,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ve=!1;xe.length!==D.cameras.length&&(D.cameras.length=0,Ve=!0);for(let re=0;re<xe.length;re++){let ce=xe[re],ue=null;if(f!==null)ue=f.getViewport(ce);else{let ge=d.getViewSubImage(h,ce);ue=ge.viewport,re===0&&(e.setRenderTargetTextures(b,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(b))}let he=U[re];he===void 0&&(he=new Kt,he.layers.enable(re),he.viewport=new Rt,U[re]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ue.x,ue.y,ue.width,ue.height),re===0&&(D.matrix.copy(he.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ve===!0&&D.cameras.push(he)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let re=d.getDepthInformation(xe[0]);re&&re.isValid&&re.texture&&m.init(re,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let re=0;re<xe.length;re++){let ce=xe[re].camera;if(ce){let ue=g[ce];ue||(ue=new co,g[ce]=ue);let he=d.getCameraImage(ce);ue.sourceTexture=he}}}}for(let xe=0;xe<M.length;xe++){let Ve=S[xe],Me=M[xe];Ve!==null&&Me!==void 0&&Me.update(Ve,ne,c||o)}pe&&pe(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}let Ze=new gp;Ze.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){pe=Q},this.dispose=function(){}}},jy=new at,Sp=new je;Sp.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ou(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,A,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),A=y.envMap,b=y.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=A*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(m(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",y));let w=M.program;n.updateUBOMapping(b,w);let _=e.render.frame;r[b.id]!==_&&(h(b),r[b.id]=_)}function u(b){let M=d();b.__bindingPointIndex=M;let S=i.createBuffer(),w=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=s[b.id],S=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=S.length;_<T;_++){let P=S[_];if(Array.isArray(P))for(let N=0,U=P.length;N<U;N++)f(P[N],_,N,w);else f(P,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,S,w){if(x(b,M,S,w)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){let U=T[N],D=g(U);p(U,b.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function p(b,M,S){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,S)}function x(b,M,S,w){let _=b.value,T=M+"_"+S;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:ArrayBuffer.isView(_)?w[T]=_.slice():w[T]=_.clone(),!0;{let P=w[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(b){let M=b.uniforms,S=0,w=16;for(let T=0,P=M.length;T<P;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,D=N.length;U<D;U++){let L=N[U],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,W=F.length;B<W;B++){let X=F[B],H=g(X),Y=S%w,j=Y%H.boundary,te=Y+j;S+=j,te!==0&&w-te<H.storage&&(S+=w-te),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=H.storage}}}let _=S%w;return _>0&&(S+=w-_),b.__size=S,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",b),M}function y(b){let M=b.target;M.removeEventListener("dispose",y);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}var eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function tb(){return li===null&&(li=new ro(eb,16,16,Ji,jn),li.name="DFG_LUT",li.minFilter=jt,li.magFilter=jt,li.wrapS=ii,li.wrapT=ii,li.generateMipmaps=!1,li.needsUpdate=!0),li}var xc=class{constructor(e={}){let{canvas:t=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Nl,Ll,Pl]),g=new Set([bn,Kn,_r,yr,Cl,Rl]),y=new Uint32Array(4),A=new Int32Array(4),b=new z,M=null,S=null,w=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,D=null,L=null,F=null;this._outputColorSpace=Zt;let B=0,W=0,X=null,H=-1,Y=null,j=new Rt,te=new Rt,me=null,pe=new Je(0),Ce=0,Ze=t.width,Q=t.height,ne=1,xe=null,Ve=null,Me=new Rt(0,0,Ze,Q),We=new Rt(0,0,Ze,Q),ht=!1,re=new cr,ce=!1,ue=!1,he=new at,ge=new z,Ge=new Rt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Ke(){return X===null?ne:1}let I=n;function le(E,V){return t.getContext(E,V)}let $,R,v,k,O,q,de,fe,ee,ie,ve,Oe,we,_e,ze,qe,Qe,G,ye,se,be,Re,ae;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),I===null){let V="webgl2";if(I=le(V,E),I===null)throw le(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),$e("WebGLRenderer: "+E.message),E}function ke(){$=new l_(I),$.init(),be=new $y(I,$),R=new Jv(I,$,e,be),v=new Xy(I,$),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),D=I.createFramebuffer(),L=I.createFramebuffer(),F=I.createFramebuffer(),k=new u_(I),O=new Ly,q=new Yy(I,$,v,O,R,be,k),de=new a_(P),fe=new f0(I),Re=new Kv(I,fe),ee=new c_(I,fe,k,Re),ie=new f_(I,ee,fe,Re,k),G=new d_(I,R,q),ze=new Qv(O),ve=new Py(P,de,$,R,Re,ze),Oe=new Jy(P,O),we=new Dy,_e=new ky($),Qe=new Zv(P,de,v,ie,p,l),qe=new qy(P,ie,R),ae=new Qy(I,k,R,v),ye=new jv(I,$,k),se=new h_(I,$,k),k.programs=ve.programs,P.capabilities=R,P.extensions=$,P.properties=O,P.renderLists=we,P.shadowMap=qe,P.state=v,P.info=k}x!==bn&&(T=new m_(x,t.width,t.height,a,s,r));let Fe=new wu(P,I);this.xr=Fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Ze,Q,!1))},this.getSize=function(E){return E.set(Ze,Q)},this.setSize=function(E,V,J=!0){if(Fe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=E,Q=V,t.width=Math.floor(E*ne),t.height=Math.floor(V*ne),J===!0&&(t.style.width=E+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Ze*ne,Q*ne).floor()},this.setDrawingBufferSize=function(E,V,J){Ze=E,Q=V,ne=J,t.width=Math.floor(E*J),t.height=Math.floor(V*J),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(x===bn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(Me)},this.setViewport=function(E,V,J,Z){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,V,J,Z),v.viewport(j.copy(Me).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,V,J,Z){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,V,J,Z),v.scissor(te.copy(We).multiplyScalar(ne).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){v.setScissorTest(ht=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Ve=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,J=!0){let Z=0;if(E){let K=!1;if(X!==null){let Te=X.texture.format;K=m.has(Te)}if(K){let Te=X.texture.type,Pe=g.has(Te),Ae=Qe.getClearColor(),Le=Qe.getClearAlpha(),Be=Ae.r,et=Ae.g,it=Ae.b;Pe?(y[0]=Be,y[1]=et,y[2]=it,y[3]=Le,I.clearBufferuiv(I.COLOR,0,y)):(A[0]=Be,A[1]=et,A[2]=it,A[3]=Le,I.clearBufferiv(I.COLOR,0,A))}else Z|=I.COLOR_BUFFER_BIT}V&&(Z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Qe.dispose(),we.dispose(),_e.dispose(),O.dispose(),de.dispose(),ie.dispose(),Re.dispose(),ae.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",gd),Fe.removeEventListener("sessionend",xd),ms.stop()};function Mt(E){E.preventDefault(),su("WebGLRenderer: Context Lost."),N=!0}function ut(){su("WebGLRenderer: Context Restored."),N=!1;let E=k.autoReset,V=qe.enabled,J=qe.autoUpdate,Z=qe.needsUpdate,K=qe.type;ke(),k.autoReset=E,qe.enabled=V,qe.autoUpdate=J,qe.needsUpdate=Z,qe.type=K}function Vn(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){let V=E.target;V.removeEventListener("dispose",ei),jm(V)}function jm(E){Jm(E),O.remove(E)}function Jm(E){let V=O.get(E).programs;V!==void 0&&(V.forEach(function(J){ve.releaseProgram(J)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,J,Z,K,Te){V===null&&(V=Ue);let Pe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ae=tg(E,V,J,Z,K);v.setMaterial(Z,Pe);let Le=J.index,Be=1;if(Z.wireframe===!0){if(Le=ee.getWireframeAttribute(J),Le===void 0)return;Be=2}let et=J.drawRange,it=J.attributes.position,Ne=et.start*Be,dt=(et.start+et.count)*Be;Te!==null&&(Ne=Math.max(Ne,Te.start*Be),dt=Math.min(dt,(Te.start+Te.count)*Be)),Le!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Le.count)):it!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,it.count));let Ut=dt-Ne;if(Ut<0||Ut===1/0)return;Re.setup(K,Z,Ae,J,Le);let At,vt=ye;if(Le!==null&&(At=fe.get(Le),vt=se,vt.setIndex(At)),K.isMesh)Z.wireframe===!0?(v.setLineWidth(Z.wireframeLinewidth*Ke()),vt.setMode(I.LINES)):vt.setMode(I.TRIANGLES);else if(K.isLine){let sn=Z.linewidth;sn===void 0&&(sn=1),v.setLineWidth(sn*Ke()),K.isLineSegments?vt.setMode(I.LINES):K.isLineLoop?vt.setMode(I.LINE_LOOP):vt.setMode(I.LINE_STRIP)}else K.isPoints?vt.setMode(I.POINTS):K.isSprite&&vt.setMode(I.TRIANGLES);if(K.isBatchedMesh)if($.get("WEBGL_multi_draw"))vt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let sn=K._multiDrawStarts,Ie=K._multiDrawCounts,hn=K._multiDrawCount,lt=Le?fe.get(Le).bytesPerElement:1,Ln=O.get(Z).currentProgram.getUniforms();for(let ti=0;ti<hn;ti++)Ln.setValue(I,"_gl_DrawID",ti),vt.render(sn[ti]/lt,Ie[ti])}else if(K.isInstancedMesh)vt.renderInstances(Ne,Ut,K.count);else if(J.isInstancedBufferGeometry){let sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ie=Math.min(J.instanceCount,sn);vt.renderInstances(Ne,Ut,Ie)}else vt.render(Ne,Ut)};function md(E,V,J,Z){U!==null&&E.isNodeMaterial&&U.setObject(Z,E),ce===!0&&ze.setState(E,J,!1),E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,pa(E,V,Z),E.side=$i,E.needsUpdate=!0,pa(E,V,Z),E.side=Dn):pa(E,V,Z)}this.compile=function(E,V,J=null){J===null&&(J=E),U!==null&&U.renderStart(E,V,J),S=_e.get(J),S.init(V),_.push(S),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),E!==J&&E.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),ue=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,ue),ce===!0&&ze.setGlobalState(this.clippingPlanes,V),U!==null&&qe.render(S.state.shadowsArray,J,V);let Z=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Te=K.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){let Ae=Te[Pe];md(Ae,J,V,K),Z.add(Ae)}else md(Te,J,V,K),Z.add(Te)}),S=_.pop(),U!==null&&U.renderEnd(),Z},this.compileAsync=function(E,V,J=null){let Z=this.compile(E,V,J);return new Promise(K=>{function Te(){if(Z.forEach(function(Pe){let Le=O.get(Pe).currentProgram;(Le===void 0||Le.isReady())&&Z.delete(Pe)}),Z.size===0){K(E);return}setTimeout(Te,10)}$.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Kc=null;function Qm(E){Kc&&Kc(E)}function gd(){ms.stop()}function xd(){ms.start()}let ms=new gp;ms.setAnimationLoop(Qm),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(E){Kc=E,Fe.setAnimationLoop(E),E===null?ms.stop():ms.start()},Fe.addEventListener("sessionstart",gd),Fe.addEventListener("sessionend",xd),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,V);let J=Fe.enabled===!0&&Fe.isPresenting===!0,Z=T!==null&&(X===null||J)&&T.begin(P,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(V),V=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,V,X),S=_e.get(E,_.length),S.init(V),S.state.textureUnits=q.getTextureUnits(),_.push(S),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(he,Xn,V.reversedDepth),ue=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,ue),M=we.get(E,w.length),M.init(),w.push(M),Fe.enabled===!0&&Fe.isPresenting===!0){let Pe=P.xr.getDepthSensingMesh();Pe!==null&&jc(Pe,V,-1/0,P.sortObjects)}jc(E,V,0,P.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(xe,Ve),Ye=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ye&&Qe.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ze.beginShadows();let K=S.state.shadowsArray;if(qe.render(K,E,V),ce===!0&&ze.endShadows(),(Z&&T.hasRenderPass())===!1){let Pe=M.opaque,Ae=M.transmissive;if(S.setupLights(),V.isArrayCamera){let Le=V.cameras;if(Ae.length>0)for(let Be=0,et=Le.length;Be<et;Be++){let it=Le[Be];_d(Pe,Ae,E,it)}Ye&&Qe.render(E);for(let Be=0,et=Le.length;Be<et;Be++){let it=Le[Be];vd(M,E,it,it.viewport)}}else Ae.length>0&&_d(Pe,Ae,E,V),Ye&&Qe.render(E),vd(M,E,V)}X!==null&&W===0&&(q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X)),Z&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,V),Re.resetDefaultState(),H=-1,Y=null,_.pop(),_.length>0?(S=_[_.length-1],q.setTextureUnits(S.state.textureUnits),ce===!0&&ze.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,U!==null&&U.renderEnd()};function jc(E,V,J,Z){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(re)){Z&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);let Pe=ie.update(E),Ae=E.material;Ae.visible&&M.push(E,Pe,Ae,J,Ge.z,null,V)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(re))){let Pe=ie.update(E),Ae=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ge.copy(Pe.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(Ae)){let Le=Pe.groups;for(let Be=0,et=Le.length;Be<et;Be++){let it=Le[Be],Ne=Ae[it.materialIndex];Ne&&Ne.visible&&M.push(E,Pe,Ne,J,Ge.z,it,V)}}else Ae.visible&&M.push(E,Pe,Ae,J,Ge.z,null,V)}}let Te=E.children;for(let Pe=0,Ae=Te.length;Pe<Ae;Pe++)jc(Te[Pe],V,J,Z)}function vd(E,V,J,Z){let{opaque:K,transmissive:Te,transparent:Pe}=E;S.setupLightsView(J),ce===!0&&ze.setGlobalState(P.clippingPlanes,J),Z&&v.viewport(j.copy(Z)),K.length>0&&fa(K,V,J),Te.length>0&&fa(Te,V,J),Pe.length>0&&fa(Pe,V,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _d(E,V,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let Ne=$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new yn(1,1,{generateMipmaps:!0,type:Ne?jn:bn,minFilter:Ki,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Te=S.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||j;Te.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);let Ae=P.getRenderTarget(),Le=P.getActiveCubeFace(),Be=P.getActiveMipmapLevel();P.setRenderTarget(Te),P.getClearColor(pe),Ce=P.getClearAlpha(),Ce<1&&P.setClearColor(16777215,.5),P.clear(),Ye&&Qe.render(J);let et=P.toneMapping;P.toneMapping=Zn;let it=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),ce===!0&&ze.setGlobalState(P.clippingPlanes,Z),fa(E,J,Z),q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let dt=0,Ut=V.length;dt<Ut;dt++){let At=V[dt],{object:vt,geometry:sn,material:Ie,group:hn}=At;if(Ie.side===Dn&&vt.layers.test(Z.layers)){let lt=Ie.side;Ie.side=pn,Ie.needsUpdate=!0,yd(vt,J,Z,sn,Ie,hn),Ie.side=lt,Ie.needsUpdate=!0,Ne=!0}}Ne===!0&&(q.updateMultisampleRenderTarget(Te),q.updateRenderTargetMipmap(Te))}P.setRenderTarget(Ae,Le,Be),P.setClearColor(pe,Ce),it!==void 0&&(Z.viewport=it),P.toneMapping=et}function fa(E,V,J){let Z=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Te=E.length;K<Te;K++){let Pe=E[K],{object:Ae,geometry:Le,group:Be}=Pe,et=Pe.material;et.allowOverride===!0&&Z!==null&&(et=Z),Ae.layers.test(J.layers)&&yd(Ae,V,J,Le,et,Be)}}function yd(E,V,J,Z,K,Te){U!==null&&K.isNodeMaterial&&U.setObject(E,K),E.onBeforeRender(P,V,J,Z,K,Te),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(P,V,J,Z,E,Te),K.transparent===!0&&K.side===Dn&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,P.renderBufferDirect(J,V,Z,K,E,Te),K.side=$i,K.needsUpdate=!0,P.renderBufferDirect(J,V,Z,K,E,Te),K.side=Dn):P.renderBufferDirect(J,V,Z,K,E,Te),E.onAfterRender(P,V,J,Z,K,Te)}function pa(E,V,J){V.isScene!==!0&&(V=Ue);let Z=O.get(E),K=S.state.lights,Te=S.state.shadowsArray,Pe=K.state.version,Ae=ve.getParameters(E,K.state,Te,V,J,S.state.lightProbeGridArray),Le=ve.getProgramCacheKey(Ae),Be=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let et=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=de.get(E.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",ei),Be=new Map,Z.programs=Be);let it=Be.get(Le);if(it!==void 0){if(Z.currentProgram===it&&Z.lightsStateVersion===Pe)return Sd(E,Ae),it}else Ae.uniforms=ve.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,J,Ae),E.onBeforeCompile(Ae,P),it=ve.acquireProgram(Ae,Le),Be.set(Le,it),Z.uniforms=Ae.uniforms;let Ne=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Sd(E,Ae),Z.needsLights=ig(E),Z.lightsStateVersion=Pe,Z.needsLights&&(Ne.ambientLightColor.value=K.state.ambient,Ne.lightProbe.value=K.state.probe,Ne.sunLights.value=K.state.sun,Ne.sunLightShadows.value=K.state.sunShadow,Ne.directionalLights.value=K.state.directional,Ne.directionalLightShadows.value=K.state.directionalShadow,Ne.spotLights.value=K.state.spot,Ne.spotLightShadows.value=K.state.spotShadow,Ne.rectAreaLights.value=K.state.rectArea,Ne.ltc_1.value=K.state.rectAreaLTC1,Ne.ltc_2.value=K.state.rectAreaLTC2,Ne.pointLights.value=K.state.point,Ne.pointLightShadows.value=K.state.pointShadow,Ne.hemisphereLights.value=K.state.hemi,Ne.sunShadowMatrix.value=K.state.sunShadowMatrix,Ne.sunShadowCascade.value=K.state.sunShadowCascade,Ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ne.spotLightMatrix.value=K.state.spotLightMatrix,Ne.spotLightMap.value=K.state.spotLightMap,Ne.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=it,Z.uniformsList=null,it}function bd(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=wr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Sd(E,V){let J=O.get(E);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function eg(E,V){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let J=0,Z=E.length;J<Z;J++){let K=E[J];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function tg(E,V,J,Z,K){V.isScene!==!0&&(V=Ue),q.resetTextureUnits();let Te=V.fog,Pe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Ae=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:rt.workingColorSpace,Le=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Be=de.get(Z.envMap||Pe,Le),et=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ne=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color,At=Zn;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=P.toneMapping);let vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,sn=vt!==void 0?vt.length:0,Ie=O.get(Z),hn=S.state.lights;if(ce===!0&&(ue===!0||E!==Y)){let wt=E===Y&&Z.id===H;ze.setState(Z,E,wt)}let lt=!1;Z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==hn.state.version||Ie.outputColorSpace!==Ae||K.isBatchedMesh&&Ie.batching===!1||!K.isBatchedMesh&&Ie.batching===!0||K.isBatchedMesh&&Ie.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ie.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ie.instancing===!1||!K.isInstancedMesh&&Ie.instancing===!0||K.isSkinnedMesh&&Ie.skinning===!1||!K.isSkinnedMesh&&Ie.skinning===!0||K.isInstancedMesh&&Ie.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ie.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ie.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ie.instancingMorph===!1&&K.morphTexture!==null||Ie.envMap!==Be||Z.fog===!0&&Ie.fog!==Te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ze.numPlanes||Ie.numIntersection!==ze.numIntersection)||Ie.vertexAlphas!==et||Ie.vertexTangents!==it||Ie.morphTargets!==Ne||Ie.morphNormals!==dt||Ie.morphColors!==Ut||Ie.toneMapping!==At||Ie.morphTargetsCount!==sn||!!Ie.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ie.__version=Z.version);let Ln=Ie.currentProgram;lt===!0&&(Ln=pa(Z,V,K),U&&Z.isNodeMaterial&&U.onUpdateProgram(Z,Ln,Ie));let ti=!1,Fi=!1,ks=!1,gt=Ln.getUniforms(),Dt=Ie.uniforms;if(v.useProgram(Ln.program)&&(ti=!0,Fi=!0,ks=!0),Z.id!==H&&(H=Z.id,Fi=!0),Ie.needsLights){let wt=eg(S.state.lightProbeGridArray,K);Ie.lightProbeGrid!==wt&&(Ie.lightProbeGrid=wt,Fi=!0)}if(ti||Y!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),gt.setValue(I,"projectionMatrix",E.projectionMatrix),gt.setValue(I,"viewMatrix",E.matrixWorldInverse);let Bi=gt.map.cameraPosition;Bi!==void 0&&Bi.setValue(I,ge.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&gt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,Fi=!0,ks=!0)}if(Ie.needsLights&&(hn.state.sunShadowMap.length>0&&gt.setValue(I,"sunShadowMap",hn.state.sunShadowMap,q),hn.state.directionalShadowMap.length>0&&gt.setValue(I,"directionalShadowMap",hn.state.directionalShadowMap,q),hn.state.spotShadowMap.length>0&&gt.setValue(I,"spotShadowMap",hn.state.spotShadowMap,q),hn.state.pointShadowMap.length>0&&gt.setValue(I,"pointShadowMap",hn.state.pointShadowMap,q)),K.isSkinnedMesh){gt.setOptional(I,K,"bindMatrix"),gt.setOptional(I,K,"bindMatrixInverse");let wt=K.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),gt.setValue(I,"boneTexture",wt.boneTexture,q))}K.isBatchedMesh&&(gt.setOptional(I,K,"batchingTexture"),gt.setValue(I,"batchingTexture",K._matricesTexture,q),gt.setOptional(I,K,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",K._indirectTexture,q),gt.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",K._colorsTexture,q));let Ui=J.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&G.update(K,J,Ln),(Fi||Ie.receiveShadow!==K.receiveShadow)&&(Ie.receiveShadow=K.receiveShadow,gt.setValue(I,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Dt.envMapIntensity.value=V.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=tb()),Fi){if(gt.setValue(I,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&ng(Dt,ks),Te&&Z.fog===!0&&Oe.refreshFogUniforms(Dt,Te),Oe.refreshMaterialUniforms(Dt,Z,ne,Q,S.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.lightProbeGrid){let wt=Ie.lightProbeGrid;Dt.probesSH.value=wt.texture,Dt.probesMin.value.copy(wt.boundingBox.min),Dt.probesMax.value.copy(wt.boundingBox.max),Dt.probesResolution.value.copy(wt.resolution)}wr.upload(I,bd(Ie),Dt,q)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(wr.upload(I,bd(Ie),Dt,q),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&gt.setValue(I,"center",K.center),gt.setValue(I,"modelViewMatrix",K.modelViewMatrix),gt.setValue(I,"normalMatrix",K.normalMatrix),gt.setValue(I,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let wt=Z.uniformsGroups;for(let Bi=0,Vs=wt.length;Bi<Vs;Bi++){let wd=wt[Bi];ae.update(wd,Ln),ae.bind(wd,Ln)}}return Ln}function ng(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.sunLights.needsUpdate=V,E.sunLightShadows.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function ig(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,V,J){let Z=O.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),O.get(E.texture).__webglTexture=V,O.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let J=O.get(E);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,J=0){X=E,B=V,W=J;let Z=null,K=!1,Te=!1;if(E){let Ae=O.get(E);if(Ae.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,Ae.__webglFramebuffer),j.copy(E.viewport),te.copy(E.scissor),me=E.scissorTest,v.viewport(j),v.scissor(te),v.setScissorTest(me),H=-1;return}else if(Ae.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(Ae.__hasExternalTextures)q.rebindTextures(E,O.get(E.texture).__webglTexture,O.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let et=E.depthTexture;if(Ae.__boundDepthTexture!==et){if(et!==null&&O.has(et)&&(E.width!==et.image.width||E.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);let Be=O.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?Z=Be[V][J]:Z=Be[V],K=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?Z=O.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[J]:Z=Be,j.copy(E.viewport),te.copy(E.scissor),me=E.scissorTest}else j.copy(Me).multiplyScalar(ne).floor(),te.copy(We).multiplyScalar(ne).floor(),me=ht;if(J!==0&&(Z=D),v.bindFramebuffer(I.FRAMEBUFFER,Z)&&v.drawBuffers(E,Z),v.viewport(j),v.scissor(te),v.setScissorTest(me),K){let Ae=O.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,J)}else if(Te){let Ae=V;for(let Le=0;Le<E.textures.length;Le++){let Be=O.get(E.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Be.__webglTexture,J,Ae)}}else if(E!==null&&J!==0){let Ae=O.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,J)}H=-1};function Md(E){let V=O.get(E);return(V.__readFormat!==E.format||V.__readType!==E.type)&&(V.__readFormat=E.format,V.__readType=E.type,V.__formatReadable=R.textureFormatReadable(E.format),V.__typeReadable=R.textureTypeReadable(E.type)),V}this.readRenderTargetPixels=function(E,V,J,Z,K,Te,Pe,Ae=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=O.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){v.bindFramebuffer(I.FRAMEBUFFER,Le);try{let Be=E.textures[Ae],et=Be.format,it=Be.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let Ne=Md(Be);if(Ne.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Z&&J>=0&&J<=E.height-K&&I.readPixels(V,J,Z,K,be.convert(et),be.convert(it),Te)}finally{let Be=X!==null?O.get(X).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,V,J,Z,K,Te,Pe,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=O.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(V>=0&&V<=E.width-Z&&J>=0&&J<=E.height-K){v.bindFramebuffer(I.FRAMEBUFFER,Le);let Be=E.textures[Ae],et=Be.format,it=Be.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let Ne=Md(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),I.readPixels(V,J,Z,K,be.convert(et),be.convert(it),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ut=X!==null?O.get(X).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ut);let At=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await zf(I,At,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(dt),I.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,J=0){let Z=Math.pow(2,-J),K=Math.floor(E.image.width*Z),Te=Math.floor(E.image.height*Z),Pe=V!==null?V.x:0,Ae=V!==null?V.y:0;q.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Pe,Ae,K,Te),v.unbindTexture()},this.copyTextureToTexture=function(E,V,J=null,Z=null,K=0,Te=0){let Pe,Ae,Le,Be,et,it,Ne,dt,Ut,At=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(J!==null)Pe=J.max.x-J.min.x,Ae=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,Be=J.min.x,et=J.min.y,it=J.isBox3?J.min.z:0;else{let Dt=Math.pow(2,-K);Pe=Math.floor(At.width*Dt),Ae=Math.floor(At.height*Dt),E.isDataArrayTexture?Le=At.depth:E.isData3DTexture?Le=Math.floor(At.depth*Dt):Le=1,Be=0,et=0,it=0}Z!==null?(Ne=Z.x,dt=Z.y,Ut=Z.z):(Ne=0,dt=0,Ut=0);let vt=be.convert(V.format),sn=be.convert(V.type),Ie;V.isData3DTexture?(q.setTexture3D(V,0),Ie=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(q.setTexture2DArray(V,0),Ie=I.TEXTURE_2D_ARRAY):(q.setTexture2D(V,0),Ie=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let hn=v.getParameter(I.UNPACK_ROW_LENGTH),lt=v.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=v.getParameter(I.UNPACK_SKIP_PIXELS),ti=v.getParameter(I.UNPACK_SKIP_ROWS),Fi=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(I.UNPACK_SKIP_ROWS,et),v.pixelStorei(I.UNPACK_SKIP_IMAGES,it);let ks=E.isDataArrayTexture||E.isData3DTexture,gt=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let Dt=O.get(E),Ui=O.get(V),wt=O.get(Dt.__renderTarget),Bi=O.get(Ui.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,wt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Vs=0;Vs<Le;Vs++)ks&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(E).__webglTexture,K,it+Vs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(V).__webglTexture,Te,Ut+Vs)),I.blitFramebuffer(Be,et,Pe,Ae,Ne,dt,Pe,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||O.has(E)){let Dt=O.get(E),Ui=O.get(V);v.bindFramebuffer(I.READ_FRAMEBUFFER,L),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let wt=0;wt<Le;wt++)ks?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,K,it+wt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,K),gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ui.__webglTexture,Te,Ut+wt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ui.__webglTexture,Te),K!==0?I.blitFramebuffer(Be,et,Pe,Ae,Ne,dt,Pe,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):gt?I.copyTexSubImage3D(Ie,Te,Ne,dt,Ut+wt,Be,et,Pe,Ae):I.copyTexSubImage2D(Ie,Te,Ne,dt,Be,et,Pe,Ae);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ie,Te,Ne,dt,Ut,Pe,Ae,Le,vt,sn,At.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,Te,Ne,dt,Ut,Pe,Ae,Le,vt,At.data):I.texSubImage3D(Ie,Te,Ne,dt,Ut,Pe,Ae,Le,vt,sn,At):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,Ne,dt,Pe,Ae,vt,sn,At.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,Ne,dt,At.width,At.height,vt,At.data):I.texSubImage2D(I.TEXTURE_2D,Te,Ne,dt,Pe,Ae,vt,sn,At);v.pixelStorei(I.UNPACK_ROW_LENGTH,hn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),v.pixelStorei(I.UNPACK_SKIP_ROWS,ti),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),Te===0&&V.generateMipmaps&&I.generateMipmap(Ie),v.unbindTexture()},this.initRenderTarget=function(E){O.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){B=0,W=0,X=null,v.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var is={ug:-3.15,eg:0,og:3.15,dg:6.3},ko=.12,Qi=2.2,es=[],Mp=[],Au=[],yc=[],Eu=[],wp=[],nb=0;function Et(i,e,t,n,s,r,o={}){let a={id:`${i}-${++nb}`,kind:e,size:t,position:n,rotation:[0,0,0],color:s,floor:r,...o};return Mp.push(a),a}function en(i,e,t,n,s,r,o,a){let l=is[t]??0,c={id:i,name:e,floor:t,color:a,bounds:{minX:n,maxX:n+r,minY:l,maxY:l+(t==="dg"?4.5:3.15),minZ:s,maxZ:s+o}};return es.push(c),c}en("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");en("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");en("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");en("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");en("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");en("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");en("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");en("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[i,e,t]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[s,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])en(t[s],e[s],i,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][s]);let n=i==="ug"?"cellar":"upper";en(`${n}-hall`,i==="ug"?"Kellerflur":"Flur & Lesenische",i,0,5,14,2,"#d1c1aa"),en(`${n}-hall-south`,i==="ug"?"Kellerflur":"Lesenische",i,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,en(`${n}-core`,`Treppenhaus \xB7 ${i==="ug"?"Keller":"OG"}`,i,5.5,0,3,5,"#d2b694")}en("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");en("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";en("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";en("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var Ar=en("garden","Garten","garden",-5,-7,24,25,"#91aa6d");Ar.bounds.minY=-.15;Ar.bounds.maxY=14;var Qt=(i,e,t,n,s,r,o,a=1,l=!1)=>({a:i,b:e,type:"door",id:t,name:n,threshold:s,rooms:[r,o],swing:a,hingeEnd:l}),Wt=(i,e,t=!1,n=.95,s=2.3)=>({a:i,b:e,type:"window",open:t,sill:n,head:s});function Ep(i,e,t,n,s,r){Et(`${i}-cross-horizontal`,"window-bar",t?[s,.06,.2]:[.2,.06,s],[...n],"#fffdf5",e),Et(`${i}-cross-vertical`,"window-bar",t?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",e)}function bt(i,e,t,n,s,r=[],o=3.15){let a=is[i],l=i==="ug"?"#b5b5a4":i==="dg"?"#ded0b8":"#e6dfca",c=`${i}-wall-${e?"z":"x"}${t}-${n}`,u=(h,f,p,x,m="wall",g=l)=>{f-h<=.001||x-p<=.001||Et(c,m,e?[f-h,x-p,ko]:[ko,x-p,f-h],e?[(h+f)/2,a+(p+x)/2,t]:[t,a+(p+x)/2,(h+f)/2],g,i)},d=n;for(let h of[...r].sort((f,p)=>f.a-p.a)){u(d,h.a,0,o);let f=h.type==="door"?0:h.sill,p=h.type==="door"?Qi:h.head;u(h.a,h.b,0,f),u(h.a,h.b,p,o);let x=h.b-h.a,m=e?[(h.a+h.b)/2,a+(f+p)/2,t]:[t,a+(f+p)/2,(h.a+h.b)/2];if(yc.push({id:h.id||`${c}-window-${h.a}`,floor:i,type:h.type,open:h.open??!1,horizontal:e,fixed:t,from:h.a,to:h.b,sill:a+f,head:a+p,position:m}),h.type==="door"){let g=h.hingeEnd?h.b:h.a,y=e?[g,a+Qi/2,t]:[t,a+Qi/2,g],A=h.hingeEnd?-1:1,b=(e?-h.swing*A:h.swing*A)*Math.PI/2;Au.push({id:h.id,name:h.name,threshold:h.threshold,rooms:h.rooms,floor:i,size:[x-.025,Qi-.025,.055],position:m,rotation:[0,e?0:Math.PI/2,0],hinge:{position:y,axis:"y",angle:b},color:i==="ug"?"#788c82":"#b99469",open:!1});let M=.035;for(let S of[h.a-M/2,h.b+M/2])Et(`${h.id}-frame`,"trim",e?[M,Qi,.18]:[.18,Qi,M],e?[S,a+Qi/2,t]:[t,a+Qi/2,S],"#f1e6cc",i)}else{h.open||(u(h.a,h.b,f,p,"glass","#a5d2dc"),Ep(`${c}-window-${h.a}`,i,e,m,x,p-f));let g=.035;for(let y of[f,p])Et(`${c}-sill`,"trim",e?[x,g,.18]:[.18,g,x],[m[0],a+y,m[2]],"#fbefcf",i);for(let y of[h.a,h.b])Et(`${c}-jamb`,"trim",e?[g,p-f,.15]:[.15,p-f,g],e?[y,m[1],t]:[t,m[1],y],"#fbefcf",i)}d=h.b}u(d,s,0,o)}function ts(i,e,t,n,s,r,o,a=is[e]){Et(i,"floor",[s,.14,r],[t+s/2,a-.07,n+r/2],o,e)}for(let i of["ug","eg","og","dg"])i==="ug"?ts("cellar-floor",i,0,0,14,12,"#9d9f92"):(ts("west-floor",i,0,0,5.5,12,i==="dg"?"#9d7953":"#b99671"),ts("east-floor",i,8.5,0,5.5,12,i==="dg"?"#a68159":"#b99671"),ts("hall-floor",i,5.5,4,3,8,"#c8b391"));ts("garden-west","garden",-5,-7,5,25,"#83a363",0);ts("garden-east","garden",14,-7,5,25,"#8aab69",0);ts("garden-north","garden",0,-7,14,7,"#8cae6a",0);ts("garden-south","garden",0,12,14,6,"#92ad72",0);Et("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");Et("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");bt("eg",!0,0,0,14,[Qt(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),Qt(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);bt("eg",!0,12,0,14,[Wt(3.5,4.9,!0),Qt(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),Wt(12.45,13.5)]);bt("eg",!1,0,0,12,[Wt(1.3,3.1),Wt(9,10.4)]);bt("eg",!1,14,0,12,[Wt(1.2,2.4),Wt(8.8,9.5)]);bt("eg",!1,5.5,0,12,[Qt(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),Qt(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);bt("eg",!1,8.5,0,12,[Qt(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),Qt(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);bt("eg",!0,5,5.5,8.5,[Qt(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);bt("eg",!0,7,0,5.5,[Qt(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);bt("eg",!0,7,8.5,14);bt("eg",!1,11,7,12,[Qt(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),Qt(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);bt("eg",!0,10,11,14);for(let[i,e]of[["hall-stairs",1],["front-door",-1]]){let t=Au.find(n=>n.id===i);t.position[2]+=.095*e,t.hinge.position[2]+=.095*e,t.hinge.angle*=2}for(let i of["ug","og"]){let e=i==="ug",t=e?"cellar":"upper",n=e?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],s=e?[14,17,20,23]:[17,19,22,24];bt(i,!1,5.5,0,5),bt(i,!1,8.5,0,5),bt(i,!0,5,0,14,[Qt(2.7,4,n[0],es.find(r=>r.id===n[0]).name,s[0],`${t}-hall`,n[0],-1),Qt(6.3,7.7,`${t}-stairs`,e?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",e?12:14,`${t}-core`,`${t}-hall`,1),Qt(10,11.4,n[1],es.find(r=>r.id===n[1]).name,s[1],`${t}-hall`,n[1],-1)]),bt(i,!0,7,0,5.5,[Qt(3,4.4,n[2],es.find(r=>r.id===n[2]).name,s[2],`${t}-hall`,n[2],1)]),bt(i,!0,7,8.5,14,[Qt(10,11.4,n[3],es.find(r=>r.id===n[3]).name,s[3],`${t}-hall`,n[3],1)]),bt(i,!1,5.5,7,12),bt(i,!1,8.5,7,12),bt(i,!0,0,0,14,e?[Wt(1.1,2.8,!1,2.1,2.75),Wt(10.5,12,!1,2.1,2.75)]:[Wt(1.2,3.2),Wt(10.5,12)]),bt(i,!0,12,0,14,e?[]:[Wt(1.2,3.2),Wt(10.5,12)]),bt(i,!1,0,0,12,e?[]:[Wt(1.4,3.1),Wt(8.5,10.2,!0)]),bt(i,!1,14,0,12,e?[]:[Wt(1.6,3.3,!0),Wt(9.8,11.2)])}for(let i of["ug","eg","og"]){let e=is[i],t=10,n=3.15/2/t,s=3/t;for(let r=0;r<t;r++)Et("stair-left","stairs",[.85,.12,s+.015],[6.125,e+n*(r+1)-.06,3.85-s*(r+.5)],"#bba480",i),Et("stair-right","stairs",[.85,.12,s+.015],[7.875,e+3.15/2+n*(r+1)-.06,.85+s*(r+.5)],"#bba480",i);Et("stair-middle-landing","stairs",[2.6,.13,.5],[7,e+3.15/2-.065,.6],"#bba480",i);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])Et("stair-post","railing",[.035,.65,.035],[r,e+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",i)}var Ap=3.1/7,ns=Math.atan(Ap),hi=i=>7.45+Math.min(i,14-i)*Ap;bt("dg",!1,0,0,12,[],1.15);bt("dg",!1,14,0,12,[],1.15);bt("dg",!1,5.5,0,5,[],3);bt("dg",!1,8.5,0,5,[],3);bt("dg",!0,5,5.5,8.5,[Qt(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function Tp(i,e){let t=[...new Set([0,14,...Array.from({length:55},(n,s)=>(s+1)*.25),...e.flatMap(n=>[n.a,n.b])])].sort((n,s)=>n-s);for(let n=1;n<t.length;n++){let s=t[n-1],r=t[n],o=Math.min(hi(s),hi(r))-6.3-.025,a=e.find(c=>(s+r)/2>c.a&&(s+r)/2<c.b),l=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[c,u]of l)u>c&&Et("gable","wall",[r-s,u-c,ko],[(s+r)/2,6.3+(c+u)/2,i],"#ded0b8","dg")}for(let n of e){let s=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,i];yc.push({id:`dg-gable-window-${i}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:i,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:s}),Et("gable-window","glass",[n.b-n.a,n.head-n.sill,ko],s,"#a5d2dc","dg"),Ep(`gable-window-${i}-${n.a}`,"dg",!0,s,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])Et("gable-window-frame","trim",[n.b-n.a,.035,.18],[s[0],6.3+r,i],"#fbefcf","dg");for(let r of[n.a,n.b])Et("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,s[1],i],"#fbefcf","dg")}for(let n of[3.5,10.5])Et("gable-sloping-cap","wall",[7/Math.cos(ns),.25,ko],[n,hi(n)-.105,i],"#ded0b8","dg",{rotation:[0,0,n<7?ns:-ns]})}Tp(0,[Wt(1.8,3.2,!1,.6,1.65),Wt(10.5,12,!1,.6,1.65)]);Tp(12,[Wt(6,8,!1,.65,1.7)]);function Vo(i,e,t,n,s){Et(i,"roof",[(t-e)/Math.cos(ns),.14,s-n],[(e+t)/2,hi((e+t)/2),(n+s)/2],"#98705b","dg",{rotation:[0,0,e>=7?-ns:ns]})}Vo("roof-west-front",0,7,0,7.25);Vo("roof-west-back",0,7,9.15,12);Vo("roof-west-eave",0,.35,7.25,9.15);Vo("roof-west-upper",2,7,7.25,9.15);Vo("roof-east",7,14,0,12);yc.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,hi(1.175),8.2]});for(let i of[7.25,9.15])Et("roof-window-frame","trim",[1.65/Math.cos(ns),.055,.055],[1.175,hi(1.175),i],"#f3e2bf","dg",{rotation:[0,0,ns]});for(let i of[.35,2])Et("roof-window-frame","trim",[.055,.055,1.9],[i,hi(i),8.2],"#f3e2bf","dg");for(let i of[6.75,10.3]){for(let e of[3.4,10.6])Et("attic-post","beam",[.16,hi(e)-6.3,.16],[e,(6.3+hi(e))/2,i],"#74543a","dg");Et("attic-crossbeam","beam",[8,.16,.16],[7,8.7,i],"#74543a","dg")}function Tu(i){return es.find(e=>e.id===i)?.floor||"garden"}function ot(i,e,t,n,s,r,o){return Et(`${i}-${e}`,t,n,s,r,Tu(i),{roomId:i,...o})}function ss(i,e,t,n,s,r,o,a,l={}){let c={id:`${i}-${e}`,name:e,roomId:i,floor:Tu(i),x:t,z:n,width:s,depth:r,height:o,kind:a,...l};return wp.push(c),c}function Ti(i){return is[Tu(i)]??0}function Sn(i,e,t,n,s,r,o=.78,a="#be986a"){ss(i,e,t,n,s,r,o,"table",{underClearance:o-.065});let l=Ti(i);ot(i,e,"tabletop",[s,.065,r],[t+s/2,l+o-.0325,n+r/2],a);for(let c of[t+.07,t+s-.07])for(let u of[n+.07,n+r-.07])ot(i,e,"table-leg",[.045,o-.065,.045],[c,l+(o-.065)/2,u],"#806548")}function mn(i,e,t,n,s=.6,r=.65,o="#80998c",a="south"){let l=Ti(i),c=.49;ss(i,e,t,n,s,r,.94,"chair",{underClearance:.435}),ot(i,e,"chair-seat",[s,.055,r],[t+s/2,l+c-.0275,n+r/2],o);for(let d of[t+.055,t+s-.055])for(let h of[n+.055,n+r-.055])ot(i,e,"chair-leg",[.035,.435,.035],[d,l+.2175,h],"#856c4c");let u=a==="south"||a==="north";ot(i,e,"chair-back",u?[s,.45,.045]:[.045,.45,r],[u?t+s/2:a==="east"?t+.0225:t+s-.0225,l+.715,u?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function mt(i,e,t,n,s,r,o=1.7,a=null,l="#b28c60",c=!1){let u=Ti(i);if(ss(i,e,t,n,s,r,o,"cabinet",{back:a}),c){let d=s>=r;for(let h of[0,(d?s:r)-.045])ot(i,e,"shelf-side",d?[.045,o,r]:[s,o,.045],[d?t+h+.0225:t+s/2,u+o/2,d?n+r/2:n+h+.0225],l);for(let h=.06;h<o;h+=.43)ot(i,e,"shelf-board",[s,.035,r],[t+s/2,u+h,n+r/2],l);for(let h=0;h<5;h++){let f=.43*(h%Math.max(1,Math.floor(o/.43)))+.18;ot(i,`${e}-books`,"books",d?[.24,.23,r*.72]:[s*.72,.23,.24],[d?t+s*(.2+.14*h):t+s/2,u+f,d?n+r/2:n+r*(.2+.14*h)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][h])}}else{ot(i,e,"cabinet",[s,o,r],[t+s/2,u+o/2,n+r/2],l);let d=s>=r;for(let h=0;h<Math.max(1,Math.floor((d?s:r)/.55));h++){let f=Math.max(1,Math.floor((d?s:r)/.55)),p=d?[t+(h+.5)*s/f,u+o*.56,n+r-.012]:[t+s-.012,u+o*.56,n+(h+.5)*r/f];ot(i,`${e}-handle`,"detail",d?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function cn(i,e,t,n,s,r,o,a){ss(i,e,t,n,s,r,o,"solid"),ot(i,e,"furniture",[s,o,r],[t+s/2,Ti(i)+o/2,n+r/2],a)}function bc(i,e,t,n=.3,s=1.05){let r=Ti(i);ss(i,"Pflanze",e-n,t-n,n*2,n*2,s,"plant"),ot(i,"pot","plant-pot",[n,.3,n],[e,r+.15,t],"#b68460"),ot(i,"stem","plant-stem",[.035,s*.7,.035],[e,r+s*.47,t],"#627a48");for(let o=0;o<4;o++)ot(i,"leaf","foliage",[n*.85,.07,n*.52],[e+Math.cos(o*1.8)*n*.45,r+s*(.65+.09*o),t+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function Cp(i,e,t,n,s){let r=Ti(i);ss(i,"Bett",e,t,n,s,.75,"bed"),ot(i,"bed-base","bed",[n,.3,s],[e+n/2,r+.24,t+s/2],"#99704e"),ot(i,"mattress","bed",[n-.06,.2,s-.06],[e+n/2,r+.49,t+s/2],"#ede1cc");let o=s>=n;ot(i,"headboard","bed",o?[n,.85,.075]:[.075,.85,s],[o?e+n/2:e+.04,r+.425,o?t+.04:t+s/2],"#a47c56"),ot(i,"blanket","bed",o?[n-.08,.06,s*.6]:[n*.6,.06,s-.08],[o?e+n/2:e+n*.65,r+.62,o?t+s*.65:t+s/2],i==="nursery"?"#87b2b0":"#b58e9b"),ot(i,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,s*.7],[o?e+n/2:e+.4,r+.66,o?t+.4:t+s/2],"#fff1d8")}function Rp(i,e,t){let n=Ti(i);ss(i,"Toilette",e,t,.78,.6,.82,"sanitary"),ot(i,"cistern","sanitary",[.18,.82,.6],[e+.69,n+.41,t+.3],"#f5eee0"),ot(i,"toilet-base","sanitary",[.43,.36,.35],[e+.34,n+.18,t+.3],"#ebe7db"),ot(i,"toilet-seat","sanitary",[.57,.07,.51],[e+.315,n+.435,t+.3],"#faf5e7")}function Ip(i,e,t,n,s){cn(i,"Waschtisch",e,t,n,s,.76,"#9baeb1"),ot(i,"basin","sanitary",[n,.09,s],[e+n/2,Ti(i)+.805,t+s/2],"#f7eedc")}var xt=(i,e,t)=>({axis:i,value:e,edge:t});Sn("dining","Esstisch",1.8,2.3,1.8,2.4);for(let i of[2.5,4])mn("dining",`Stuhl-west-${i}`,.85,i,.65,.6,"#ba9664","east"),mn("dining",`Stuhl-east-${i}`,3.95,i,.65,.6,"#ba9664","west");mn("dining","Stuhl-nord",2.4,1.3);mn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");mt("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,xt("z",0,"min"));mt("dining","Sideboard",.07,5.35,.55,1.3,.85,xt("x",0,"min"));bc("dining",1.2,6.3);cn("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");cn("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");mt("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,xt("x",0,"min"),"#d9ded1");Sn("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");mn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);ot("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let i of[8.2,8.65])ot("kitchen","hob","detail",[.32,.018,.32],[.385,.925,i],"#4e5b5a");cn("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");ot("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let i of[3.05,5.45])ot("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,i+.125],"#5d8271");for(let i=0;i<3;i++)ot("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*i],"#8aa48b");Sn("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");mt("living","TV-Bank",8.57,2.65,.33,1.75,.5,xt("x",8.5,"min"),"#b69871");ot("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");mt("living","Buecherregal",9,.07,2,.5,1.85,xt("z",0,"min"),"#b99466",!0);mn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");bc("living",13.4,6.4,.3);mt("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,xt("x",5.5,"min"));Sn("hall","Sitzbank",8,10.35,.43,1,.45);bc("hall",5.95,11.5,.23);mt("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,xt("z",12,"max"),"#a5ad92");Sn("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);mt("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,xt("z",7,"min"));Rp("guest-wc",13.15,8.1);Ip("guest-wc",12.4,7.07,.9,.43);mt("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,xt("z",10,"max"),"#aec0b6");mt("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,xt("z",10,"min"),"#af9c76",!0);mt("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,xt("x",14,"max"));Sn("workshop","Werkbank",.6,.07,3.5,.8,.87);mt("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,xt("x",5.5,"max"),"#929c8b");mn("workshop","Hocker",1.8,1.4);cn("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let i of[8.57,9.7])cn("laundry","Waschgeraet",i,.07,1,.98,.92,"#dfe3d8"),ot("laundry","Waschfenster","detail",[.58,.58,.024],[i+.5,-3.15+.46,1.06],"#729498");Sn("laundry","Waeschetisch",12,.07,1.8,.63);cn("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");Sn("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");mt("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,xt("x",0,"min"),"#b49569",!0);mt("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,xt("x",5.5,"max"),"#b49569",!0);mt("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,xt("z",12,"max"));cn("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");cn("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");mt("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,xt("x",8.5,"min"),"#7c9790");mt("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,xt("z",12,"max"));mt("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,xt("x",0,"min"));mt("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,xt("x",14,"max"));Cp("bedroom",1.65,.07,2,2.55);cn("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");cn("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");mt("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,xt("x",0,"min"),"#b8aa92");Sn("office","Schreibtisch",9,.07,2.8,.8);mn("office","Schreibtischstuhl",10,1.3);ot("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");mt("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,xt("x",14,"max"),"#b7986e",!0);mt("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,xt("x",14,"max"),"#b7986e",!0);Cp("nursery",.07,7.07,2.4,1.2);Sn("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);mn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");mt("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,xt("x",5.5,"max"),"#87a6a0",!0);for(let[i,e,t]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])cn("nursery",`Bauklotz-${i}`,e,t,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][i]);ss("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");ot("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let i of[7.12,8.02])ot("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,i],"#f2efe3");for(let i of[11.8,13.88])ot("bathroom","bath-end","sanitary",[.1,.58,1],[i,3.5,7.57],"#f2efe3");Ip("bathroom",8.57,9,.48,1.15);Rp("bathroom",13.15,11.3);mt("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,xt("z",12,"max"),"#a6bab6");mn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");mt("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,xt("x",8.5,"max"),"#ad8e61",!0);mt("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,xt("x",0,"min"));mt("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,xt("x",14,"max"));for(let[i,e,t,n,s]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])cn("attic-west",`Koffer-${i}`,e,t,n,s,.48+i*.13,["#9b7658","#c3a071","#889687"][i]);Sn("attic-east","Basteltisch",9.15,.07,2.4,1.1);mn("attic-east","Bastelstuhl",9.95,1.55);mt("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);Sn("attic","Dachtisch",8.3,8.1,1.8,1);cn("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");cn("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");mt("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,xt("z",12,"max"));Sn("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let i of[5.15,6.65])mn("garden",`Terrassenstuhl-N-${i}`,i,-3.25,.6,.65,"#9daa84"),mn("garden",`Terrassenstuhl-S-${i}`,i,-1,.6,.65,"#9daa84","north");mn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");mn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");Sn("garden","Gartenbank",-4,4,2.5,.65,.52);cn("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let i=0;i<4;i++)for(let e of[16.1,16.9])bc("garden",e,5.4+.9*i,.18,1.02);for(let[i,e,t]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){ot("garden","tree-trunk","tree",[.35,3.3,.35],[i,1.65,e],"#816442");for(let n=0;n<3;n++)ot("garden","tree-crown","foliage",[t*1.25,t*.9,t*1.1],[i+Math.cos(n*2.1)*.45,3.1+n*.35,e+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let i of[-7,18])Et("boundary-hedge","boundary",[24,1.5,.25],[7,.75,i],"#6d8d59","garden");for(let i of[-5,19])Et("boundary-hedge","boundary",[.25,1.5,25],[i,.75,5.5],"#6d8d59","garden");function It(i,e){let t=Ti(i);for(let[n,s,r,o=!1]of e)Eu.push({id:`${i}-star-${Eu.filter(a=>a.roomId===i).length+1}`,roomId:i,x:n,y:t+s,z:r,radius:o?.14:.22,under:o})}It("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);It("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);It("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);It("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);It("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);It("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);It("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);It("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);It("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);It("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);It("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);It("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);It("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);It("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);It("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);It("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);It("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);It("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);It("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);It("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);It("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);It("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);It("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[i,e]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])It(i,[[7,1.4,2.2],[7,2.5,3.3]]);var gn={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:es,doors:Au,obstacles:Mp,openings:yc,furniture:wp,collectibles:Eu,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function Pp(i){let{x:e,y:t,z:n}=i;if(![e,t,n].every(Number.isFinite))return null;let s=o=>{let a=o.bounds;return e>=a.minX&&e<a.maxX&&t>=a.minY-.025&&t<a.maxY&&n>=a.minZ&&n<a.maxZ},r=es.find(o=>o.floor!=="garden"&&s(o));return r?r.floor==="dg"&&t>hi(Math.max(0,Math.min(14,e)))+.12?s(Ar)?Ar:null:r:s(Ar)?Ar:null}function Tr(i,e=!1){let t=[...i.rotation||[0,0,0]],n=[...i.position];if(e&&i.hinge){let s=i.hinge.position,r=i.hinge.angle,o=n[0]-s[0],a=n[2]-s[2];n[0]=s[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=s[2]-Math.sin(r)*o+Math.cos(r)*a,t[1]+=r}return{size:[...i.size],position:n,rotation:t}}var ib=["classic","glider","dart","stunt"];var Np={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function sb(i,e){let t=[0,1,2].map(n=>i.reduce((s,r)=>s+r[n],0)/i.length);return e.map(n=>{let[s,r,o]=n.map(d=>i[d]),a=r.map((d,h)=>d-s[h]),l=o.map((d,h)=>d-s[h]);return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]].reduce((d,h,f)=>d+h*(s[f]-t[f]),0)<0?[...n].reverse():n})}function Sc(i,e,t,n,s,r=0,o=0){let a=e.length,l=[-1,1].flatMap(u=>e.map(([d,h])=>[d*s,(o+Math.abs(d)*r+u*t/2)*s,h*s])),c=[Array.from({length:a},(u,d)=>d),Array.from({length:a},(u,d)=>d+a)];for(let u=0;u<a;u++)c.push([u,(u+1)%a,(u+1)%a+a,u+a]);return{id:i,kind:"convex",vertices:l,faces:sb(l,c),color:n}}function Lp(i,e,t,n=20){return Array.from({length:n},(s,r)=>{let o=r*Math.PI*2/n;return[i/2*Math.cos(o),t+e/2*Math.sin(o)]})}function rb(i,e){let t=-e.length/2,n=e.length/2,s=e.span/2,r=[[0,t],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[e.tail/2,n],[-e.tail/2,n]];return i==="dart"?{wing:[[0,t+.015],[s,n-.025],[0,n-.025]],fuselage:r,tail:o}:i==="glider"?{wing:Array.from({length:17},(a,l)=>{let c=-Math.PI/2+l*Math.PI/16;return[l===0||l===16?0:s*Math.cos(c),-.015+.105*Math.sin(c)]}),fuselage:Lp(.056,e.length,0),tail:Lp(e.tail,.08,n-.04)}:i==="stunt"?{wing:[[0,-.065],[s,-.065],[s,.045],[0,.045]],fuselage:[[0,t],[.028,t+.04],[.028,n-.008],[-.028,n-.008],[-.028,t+.04]],tail:[[-e.tail/2,n-.064],[e.tail/2,n-.064],[e.tail/2,n],[-e.tail/2,n]]}:{wing:[[0,t+.025],[s,.035],[s,.145],[0,n-.035]],fuselage:r,tail:[[-e.tail/2,n-.05],[e.tail/2,n-.05],[e.tail*.38,n],[-e.tail*.38,n]]}}function Is(i="classic",e=1){i=ib.includes(i)?i:"classic",e=Number.isFinite(Number(e))?Math.max(.55,Math.min(1.5,Number(e))):1;let t=Np[i],n=rb(i,t),s=e*.78,r=[Sc("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,t.color,s,.045),Sc("right-wing",n.wing,.008,t.color,s,.045),Sc("fuselage",n.fuselage,.044,16768916,s,0,-.014),Sc("tail",n.tail,.008,t.color,s,0,.011)];return{form:i,size:e,span:t.span*s,length:t.length*s,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function Dp(i="classic",e=1){let t=Is(i,e),n=Np[t.form],s=t.size;return{speed:1.65*n.speed*(.94+.06*s),turnRate:1.8*n.turn/Math.pow(s,.65),pitchRate:.8/Math.pow(s,.35),sinkRate:.095*n.sink/Math.pow(s,.6),energyLoss:.035*n.sink/Math.pow(s,.55),glideRatio:1.65/.095*n.speed*(.94+.06*s)/n.sink*Math.pow(s,.6)}}var ob=new Map(gn.rooms.map(i=>[i.id,i])),ab=new Set(["cellar-core","stairs","upper-core","attic-core"]),lb=new Map(gn.collectibles.map(i=>{let e=!!i.under,t=ob.get(i.roomId)?.floor==="ug"||ab.has(i.roomId);return[i.id,Object.freeze({id:i.id,roomId:i.roomId,under:e,zone:t,basePoints:150+(e?150:0)+(t?150:0)})]}));function Go(i){let e=typeof i=="string"?i:i?.id,t=lb.get(e);if(!t)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return t}function Fp(i){if(!Array.isArray(i)||!i.every(e=>typeof e=="string"))throw new Error("Die gesammelten Sterne sind ung\xFCltig.");return[...new Set(i)].reduce((e,t)=>e+Go(t).basePoints,0)}var Cu=Object.freeze(["none","mint","spark","confetti"]);function rs(i){if(i===null)return null;if(typeof i!="string"||!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Bitte w\xE4hle eine g\xFCltige Farbe im Format #RRGGBB.");return i.toLowerCase()}function Up(i){if(!Cu.includes(i))throw new Error("Dieser Flugeffekt ist nicht verf\xFCgbar.");return i}function Bp(i,e=null){let t=rs(e);if(t===null)return"#"+i.color.toString(16).padStart(6,"0");let n={"left-wing":1,"right-wing":.9,fuselage:.72,tail:1.06}[i.id]??1;return"#"+[1,3,5].map(s=>Math.min(255,Math.round(parseInt(t.slice(s,s+2),16)*n)).toString(16).padStart(2,"0")).join("")}function Ho(i,e=null,t=null){let n=t?new Je(t):null;i.traverse(s=>{!s.isMesh||s.userData.paperColor===void 0||(s.material.color.set(Bp({id:s.name,color:s.userData.paperColor},e)),e===null&&n&&s.material.color.lerp(n,.6))})}var Ru=54,Iu=28,cb=["#d58c7e","#79c6b2","#e9c774","#a7a0d6"];function Mc(i,{name:e="Flugspur",effect:t="none"}={}){let n=new Float32Array(Ru*3),s=new Ot;s.setAttribute("position",new un(n,3));let r=new ao(s,new hr({color:"#80d6ba",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1})),o=new Ss(new Yn(1,1,1),new Tn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),Iu);r.name=`${e} Linie`,o.name=`${e} Partikel`;for(let S of[r,o])S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,i.add(S);let a=new at,l=new Vt,c=new fn,u=new z,d=new z,h=new Je,f="none",p=!1,x=!1;function m(){p=!1,r.visible=o.visible=!1}function g(S){if(m(),!!S){for(let w=0;w<Ru;w++)n[w*3]=S.x,n[w*3+1]=S.y,n[w*3+2]=S.z;p=!0,s.attributes.position.needsUpdate=!0}}function y(S="none"){if(S=Cu.includes(S)?S:"none",S!==f){f=S,m(),r.material.color.set(S==="spark"?"#e9bd5e":"#80d6ba");for(let w=0;w<Iu;w++)o.setColorAt(w,h.set(S==="confetti"?cb[w%4]:"#f7d581"));o.instanceColor.needsUpdate=!0}}function A(S){if(!x){if(!p||Math.hypot(S.x-n[0],S.y-n[1],S.z-n[2])>1.5){g(S);return}n.copyWithin(3,0,n.length-3),n[0]=S.x,n[1]=S.y,n[2]=S.z,s.attributes.position.needsUpdate=!0}}function b(S=1/60,w=0){let _=p&&Math.hypot(n[0]-n[18],n[1]-n[19],n[2]-n[20])>.035;if(r.visible=_&&(f==="mint"||f==="spark"),o.visible=_&&(f==="spark"||f==="confetti"),!!o.visible){for(let T=0;T<Iu;T++){let P=Math.min(Ru-1,2+T)*3,N=1-T/32,U=(f==="confetti"?.037:.022)*N*(f==="spark"?.6+.4*Math.sin(w*8+T)**2:1);u.set(n[P]+Math.sin(T*2.4)*.045,n[P+1]+Math.cos(T*1.7)*.035-T*.001,n[P+2]),l.setFromEuler(c.set(w*2+T,T*.7,w*1.4+T)),d.set(U,f==="confetti"?U*.22:U,U),o.setMatrixAt(T,a.compose(u,l,d))}o.instanceMatrix.needsUpdate=!0}}function M(){x||(m(),x=!0,i.remove(r,o),s.dispose(),r.material.dispose(),o.geometry.dispose(),o.material.dispose(),o.dispose())}return y(t),{trail:r,particles:o,setEffect:y,reset:g,push:A,update:b,clear:m,dispose:M,get effect(){return f}}}var os=1e-7,hb=new Set(["wall","floor","roof"]),Op={floor:3,wall:2,roof:1},qo=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Wo=(i,e)=>i.map((t,n)=>t-e[n]),ub=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],db=(i,e)=>{let t=qo(i,e.normal)-e.offset;return Math.abs(t)<=os?0:t};function fb(i){let e=new at().makeRotationFromEuler(new fn(...i.rotation||[0,0,0])).elements,t=[0,1,2].map(o=>e.slice(o*4,o*4+3)),n=i.size.map(o=>o/2),s=[0,1,2].map(o=>t.reduce((a,l,c)=>a+Math.abs(l[o])*n[c],0)),r=[];for(let o=0;o<3;o++)for(let a of[-1,1]){let l=t[o].map(c=>c*a);r.push({normal:l,offset:qo(l,i.position)+n[o]})}return{part:i,axes:t,half:n,planes:r,min:i.position.map((o,a)=>o-s[a]),max:i.position.map((o,a)=>o+s[a])}}function pb(i,e){return i.min.every((t,n)=>t<=e.max[n]+os&&i.max[n]>=e.min[n]-os)}function mb(i,e,t){let n=(e+1)%3,s=(e+2)%3,r=i.axes[e].map(l=>l*t),o=[[-1,-1],[1,-1],[1,1],[-1,1]];t<0&&o.reverse();let a=o.map(([l,c])=>i.part.position.map((u,d)=>u+r[d]*i.half[e]+i.axes[n][d]*i.half[n]*l+i.axes[s][d]*i.half[s]*c));return{axis:e,sign:t,normal:r,offset:qo(r,a[0]),polygon:a}}function zp(i){let e=[];for(let t of i){let n=e.at(-1);(!n||Math.hypot(...Wo(t,n))>os)&&e.push(t)}return e.length>1&&Math.hypot(...Wo(e[0],e.at(-1)))<=os&&e.pop(),e}function gb(i,e){let t=i.map(r=>db(r,e));if(!t.some(r=>r>0))return{inside:i,outside:[]};if(!t.some(r=>r<0))return{inside:[],outside:i};let n=[],s=[];for(let r=0;r<i.length;r++){let o=i[r],a=i[(r+1)%i.length],l=t[r],c=t[(r+1)%i.length];if(l<=0&&n.push(o),l>=0&&s.push(o),l<0&&c>0||l>0&&c<0){let u=l/(l-c),d=o.map((h,f)=>h+(a[f]-h)*u);n.push(d),s.push(d)}}return{inside:zp(n),outside:zp(s)}}function xb(i,e){let t=Op[i.kind]-Op[e.kind];return t>0||t===0&&i.id<e.id}function vb(i,e){return e.planes.some(t=>qo(i.normal,t.normal)>1-1e-12&&Math.abs(i.offset-t.offset)<=os)}function _b(i,e){let t=[],n=i;for(let s of e.planes){let r=gb(n,s);if(r.outside.length>=3&&t.push(r.outside),n=r.inside,n.length<3)break}return t}function yb(i,e,t){return e===0?[.5-t*i[2],.5+i[1]]:e===1?[.5+i[0],.5-t*i[2]]:[.5+t*i[0],.5+i[1]]}function kp(i){let e=i.filter(n=>hb.has(n.kind)).map(fb),t=new Map;for(let n of e){let s=e.filter(c=>c!==n&&pb(n,c)),r=[],o=[],a=[];for(let c=0;c<3;c++)for(let u of[-1,1]){let d=mb(n,c,u),h=[d.polygon];for(let f of s)if(!(vb(d,f)&&xb(n.part,f.part))&&(h=h.flatMap(p=>_b(p,f)),!h.length))break;for(let f of h)for(let p=1;p<f.length-1;p++){let x=[f[0],f[p],f[p+1]];if(!(Math.hypot(...ub(Wo(x[1],x[0]),Wo(x[2],x[0])))<=os*os))for(let m of x){let g=Wo(m,n.part.position),y=n.axes.map((A,b)=>qo(g,A)/n.part.size[b]);r.push(...m),o.push(...d.normal),a.push(...yb(y,c,u))}}}let l=new Ot;l.setAttribute("position",new _t(r,3)),l.setAttribute("normal",new _t(o,3)),l.setAttribute("uv",new _t(a,2)),r.length&&(l.computeBoundingBox(),l.computeBoundingSphere()),t.set(n.part.id,l)}return t}var bb=(i,e,t)=>Math.max(e,Math.min(t,i)),Sb=new Set(["wall","floor","roof"]);function Vp(i,e,t=()=>({width:i.clientWidth,height:i.clientHeight})){let n=e.house||e.level||gn,s=new xc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),s.shadowMap.enabled=!0,s.shadowMap.type=Es,s.outputColorSpace=Zt,s.toneMapping=Co,s.toneMappingExposure=1.18;let r=new to;r.background=new Je("#c9ddd5"),r.fog=new eo("#c9ddd5",30,90);let o=new Kt(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new Mo("#fff3d9","#718169",2.7));let a=new To("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let l=new Ao("#fff1d0",4,11,2);r.add(l);let c=new Map,u=new Set,d=new Set,h=new Yn(1,1,1);u.add(h);let f=new Map;for(let I of["ug","eg","og","dg","garden"]){let le=new an;le.name=`Etage ${I}`,f.set(I,le),r.add(le)}let p=new Map,x=[],m=[];function g(I,le={}){let $=`${I}:${JSON.stringify(le)}`;return c.has($)||c.set($,new $n({color:I,roughness:.86,flatShading:!0,...le})),c.get($)}function y(I=!1){let le=document.createElement("canvas");le.width=le.height=256;let $=le.getContext("2d");if($.fillStyle=I?"#edf4d8":"#fff1dc",$.fillRect(0,0,256,256),I)for(let v=0;v<1200;v++)$.fillStyle=v%2?"#d5e0bd":"#eef3d9",$.fillRect(v*67%256,v*113%256,1,3);else{$.strokeStyle="#c9b594",$.lineWidth=1;for(let v=0;v<=256;v+=32){$.beginPath(),$.moveTo(0,v),$.lineTo(256,v),$.stroke();for(let k=v/32%2*96;k<256;k+=128)$.beginPath(),$.moveTo(k,v),$.lineTo(k,v+32),$.stroke()}for(let v=0;v<90;v++)$.fillStyle=v%2?"#dfd0b8":"#e8dbc4",$.fillRect(v*73%256,v*19%256,12+v%21,1)}let R=new ur(le);return R.colorSpace=Zt,R.wrapS=R.wrapT=sr,R.repeat.set(3,3),d.add(R),R}let A=y(),b=y(!0),M=new at,S=new Vt,w=new fn,_=I=>M.compose(new z(...I.position),S.setFromEuler(w.set(...I.rotation||[0,0,0])),new z(...I.size)),T=kp(n.obstacles);for(let I of T.values())u.add(I);let P=new Map;for(let I of n.obstacles){let le=f.get(I.floor)||f.get("garden");if(Sb.has(I.kind)){let $=g(I.color).clone();I.kind==="floor"&&($.map=I.floor==="garden"?b:A);let R=new yt(T.get(I.id),$);R.name=I.id,R.castShadow=I.kind!=="floor",R.receiveShadow=!0,le.add(R)}else{let $=`${I.floor}|${I.color}|${I.kind==="glass"?"glass":"opaque"}`;P.has($)||P.set($,{group:le,color:I.color,glass:I.kind==="glass",parts:[]}),P.get($).parts.push(I)}}for(let{group:I,color:le,glass:$,parts:R}of P.values()){let v=new Ss(h,g(le,$?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),R.length);R.forEach((k,O)=>v.setMatrixAt(O,_(k))),v.instanceMatrix.needsUpdate=!0,v.castShadow=!$,v.receiveShadow=!0,v.frustumCulled=!1,I.add(v)}let N=new Yn(.54,.23,.012);u.add(N);function U(I){let le=document.createElement("canvas");le.width=256,le.height=112;let $=le.getContext("2d");$.fillStyle="#f5e5bc",$.fillRect(0,0,256,112),$.strokeStyle="#ad8b58",$.lineWidth=4,$.strokeRect(4,4,248,104),$.fillStyle="#463e30",$.font="bold 44px system-ui",$.textAlign="center",$.textBaseline="middle",$.fillText(I.signText??`${I.threshold} \u2605`,128,58);for(let O of[15,241])$.beginPath(),$.arc(O,56,3,0,Math.PI*2),$.fill();let R=new ur(le);R.colorSpace=Zt,d.add(R);let v=g("#ad8b58",{roughness:.7}),k=new $n({map:R,roughness:.85});return[-1,1].map(O=>{let q=new yt(N,[v,v,v,v,k,v]);return q.name=`${I.id}-sign-${O<0?"back":"front"}`,q.position.set(0,.37,O*(I.size[2]/2+.0065)),q.rotation.y=O<0?Math.PI:0,q.castShadow=q.receiveShadow=!0,q})}for(let I of n.doors){let le=new an;le.name=I.id;let $=new yt(h,g(I.color||"#b99469"));$.name=`${I.id}-leaf`,$.castShadow=$.receiveShadow=!0;let R=Tr(I,!1);le.position.set(...R.position),le.rotation.set(...R.rotation),$.scale.set(...R.size),le.add($,...U(I)),r.add(le),p.set(I.id,{door:I,mesh:le,leaf:$,opened:!1})}function D(I,le=!0){let $=p.get(I);if(!$)return;$.opened=!!le;let R=Tr($.door,$.opened);$.mesh.position.set(...R.position),$.mesh.rotation.set(...R.rotation),$.leaf.scale.set(...R.size)}let L=new an;L.name="Papierflieger",r.add(L);let F=new Set,B=new Set,W="classic",X=1,H=null,Y=Mc(r);function j(I="classic",le=1,$="none",R=null){let v=Is(I,le);W=v.form,X=v.size,H=rs(R);for(let k of B)k.dispose();B.clear();for(let k of F)k.dispose();F.clear(),L.clear();for(let k of v.parts){let O=[];for(let ee of k.faces)for(let ie=1;ie+1<ee.length;ie++)for(let ve of[ee[0],ee[ie],ee[ie+1]])O.push(...k.vertices[ve]);let q=new Ot;q.setAttribute("position",new _t(O,3)),q.computeVertexNormals();let de=new $n({color:k.color,roughness:.77,side:Dn,flatShading:!0}),fe=new yt(q,de);fe.name=k.id,fe.userData.paperColor=k.color,fe.castShadow=fe.receiveShadow=!0,L.add(fe),B.add(q),F.add(de)}return Ho(L,H),Y.setEffect($),Y.clear(),v}function te(I=n.start){Y.reset(I)}function me(I){Y.push(I)}j(),te(),L.position.set(n.start.x,n.start.y,n.start.z);let pe=new an;pe.position.set(n.start.x,0,n.start.z),r.add(pe);let Ce=new ws(.23,.014,5,28);u.add(Ce);let Ze=new yt(Ce,new Tn({color:"#e5b45f",transparent:!0,opacity:.75}));Ze.rotation.x=Math.PI/2,Ze.position.y=.045,pe.add(Ze);function Q(I=0){Ze.scale.setScalar(1+Math.max(0,I)*.3),Ze.material.opacity=.5+Math.min(1,I)*.45}let ne=new fr;for(let I=0;I<10;I++){let le=I*Math.PI/5+Math.PI/2,$=I%2?.052:.115,R=Math.cos(le)*$,v=Math.sin(le)*$;I?ne.lineTo(R,v):ne.moveTo(R,v)}ne.closePath();let xe=new _o(ne,{depth:.025,bevelEnabled:!1});u.add(xe);let Ve=new ws(.165,.007,4,22);u.add(Ve);let Me=[new $n({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new $n({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],We=[new Tn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Tn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],ht=new Tn({color:"#fff1b7",toneMapped:!1});for(let I of[...Me,...We,ht])c.set(`star-${I.id}`,I);for(let I of n.collectibles){let le=Go(I),$=new an,R=new yt(xe,Me[0]),v=[],k=new an;$.name=I.id,$.position.set(I.x,I.y,I.z),$.add(R,k);for(let O=0;O<Number(le.under)+Number(le.zone);O++){let q=new yt(Ve,We[0]);q.scale.setScalar(1+O*.28),v.push(q),$.add(q)}for(let O=0;O<3;O++){let q=new yt(xe,ht),de=O*Math.PI*2/3;q.position.set(Math.cos(de)*.17,Math.sin(de)*.17,.02),q.scale.setScalar(.16),k.add(q)}I.under&&$.scale.setScalar(.72),r.add($),x.push({data:I,mesh:$,star:R,rings:v,sparkles:k,discovered:!1,collected:!1})}function re(I){let le=[];for(let $ of x)!$.collected&&I($.data)&&($.collected=!0,$.mesh.visible=!1,le.push($.data.id));return le}function ce(I=[]){let le=new Set(I);for(let $ of x){$.collected=!1,$.mesh.visible=!0,$.discovered=le.has($.data.id),$.star.material=Me[Number($.discovered)];for(let R of $.rings)R.material=We[Number($.discovered)];$.sparkles.visible=!$.discovered}}for(let I of n.thermals){let le=new ws(I.r*.75,.009,4,26);u.add(le);for(let $=0;$<7;$++){let R=new yt(le,new Tn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));R.rotation.x=Math.PI/2,r.add(R),m.push({mesh:R,thermal:I,phase:$/7})}}let ue=[];for(let I of e.blocks||[]){let le=new yt(h,g("#dab87f"));le.scale.set(...I.size),le.castShadow=!0,r.add(le),ue.push(le)}let he={ceiling:!1,distance:1/0,intensity:0};function ge(I){let le=typeof e.getCeilingAt=="function"?e.getCeilingAt(I):1/0;return he.distance=le-I.y,he.ceiling=he.distance<.45,he.intensity=bb((.55-he.distance)/.5,0,1),he.ceiling}function Ge(I=1/60,le=0){let $=e.plane?.position||L.position,R=Pp($),v=R&&R.floor!=="garden",k=O=>!v||O==="garden"||(is[O]??-9)<=(is[R.floor]??0)+3.15;for(let[O,q]of f)q.visible=k(O);for(let O of p.values())O.mesh.visible=k(O.door.floor);for(let O=0;O<x.length;O++){let q=x[O];if(q.collected)continue;let de=n.rooms.find(fe=>fe.id===q.data.roomId);q.mesh.visible=!v||de?.floor===R.floor||de?.floor==="garden",q.mesh.rotation.y=le*(q.discovered?.5:.85)+O*.61,q.mesh.position.y=q.data.y+Math.sin(le*1.7+O)*(q.data.under?.009:.026);for(let fe=0;fe<q.sparkles.children.length;fe++)q.sparkles.children[fe].scale.setScalar(.09+.12*Math.sin(le*3+O+fe*2)**2)}for(let O of m){let q=(le*.18+O.phase)%1;O.mesh.position.set(O.thermal.x,O.thermal.y+q*O.thermal.height,O.thermal.z),O.mesh.material.opacity=Math.sin(q*Math.PI)*.28,O.mesh.visible=Math.abs(O.mesh.position.y-$.y)<4}for(let O=0;O<ue.length;O++)ue[O].position.copy(e.blocks[O].body.position),ue[O].quaternion.copy(e.blocks[O].body.quaternion);l.position.set($.x,$.y+.6,$.z),l.intensity=R?.floor==="ug"?7:3,a.target.position.set($.x,1,$.z),a.target.updateMatrixWorld(),a.position.set($.x-12,24,$.z-14),Y.update(I,le),ge($)}function Ue(){let I=t()||{},le=Math.max(1,I.width||i.clientWidth||1),$=Math.max(1,I.height||i.clientHeight||1);s.setSize(le,$,!1),o.aspect=le/$,o.updateProjectionMatrix()}function Ye(){s.render(r,o)}Ue(),window.addEventListener("gameviewportchange",Ue);function Ke(){Y.dispose(),window.removeEventListener("gameviewportchange",Ue);let I=new Set([...c.values(),...F]),le=new Set([...u,...B]);r.traverse($=>{if($.geometry&&le.add($.geometry),$.material)for(let R of Array.isArray($.material)?$.material:[$.material])I.add(R);$.shadow?.map&&$.shadow.map.dispose()});for(let $ of le)$.dispose();for(let $ of I)$.dispose();for(let $ of d)$.dispose();r.clear(),s.dispose()}return{renderer:s,scene:r,camera:o,plane:L,sling:pe,effects:Y,thermals:n.thermals,update:Ge,setAircraft:j,setDoorOpen:D,collectStars:re,resetCollectibles:ce,resetTrail:te,updateTrail:me,updateSling:Q,updateCeiling:ge,warnings:he,render:Ye,resize:Ue,dispose:Ke,totalCollectibles:x.length,get collected(){return x.filter(I=>I.collected).length},get aircraft(){return{form:W,size:X,effect:Y.effect,color:H}},sync:()=>Ge(1/60,0),wind:I=>Ge(1/60,I),collect:I=>re(le=>Math.hypot(le.x-I.x,le.y-I.y,le.z-I.z)<=le.radius).length}}var ls=class i{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new C);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new C);let n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new i);let n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],x=s[0],m=s[1],g=s[2],y=s[3],A=s[4],b=s[5],M=s[6],S=s[7],w=s[8];return r[0]=o*x+a*y+l*M,r[1]=o*m+a*A+l*S,r[2]=o*g+a*b+l*w,r[3]=c*x+u*y+d*M,r[4]=c*m+u*A+d*S,r[5]=c*g+u*b+d*w,r[6]=h*x+f*y+p*M,r[7]=h*m+f*A+p*S,r[8]=h*g+f*b+p*w,t}scale(e,t){t===void 0&&(t=new i);let n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new C);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,u,d=4,h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=d;do h=d-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];u=d;do h=d-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*f;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new i);let t=3,n=6,s=Mb,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,l=a,c,u=n,d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do d=u-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let h=s[r+n*o]/s[r+n*r];c=u;do d=u-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{let h=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{let h=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,l=s+s,c=t*o,u=t*a,d=t*l,h=n*a,f=n*l,p=s*l,x=r*o,m=r*a,g=r*l,y=this.elements;return y[0]=1-(h+p),y[1]=u-g,y[2]=d+m,y[3]=u+g,y[4]=1-(c+p),y[5]=f-x,y[6]=d-m,y[7]=f+x,y[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new i);let t=this.elements,n=e.elements,s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}},Mb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],C=class i{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new i);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new i(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new i(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new ls([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new i),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new i),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let s=wb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=Eb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Gp),Gp.almostEquals(e,t)}clone(){return new i(this.x,this.y,this.z)}};C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);var wb=new C,Eb=new C,Gp=new C,Pn=class i{constructor(e){e===void 0&&(e={}),this.lowerBound=new C,this.upperBound=new C,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Hp),c=Hp),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new i().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,l){let c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){let n=Wp,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Wp,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}},Hp=new C,Wp=[new C,new C,new C,new C,new C,new C,new C,new C],Rc=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Ic=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}return this}},zt=class i{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new C),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=Ab,s=Tb;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-s*a,t.w=o*u-n*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new C);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,d=c*s+l*n-o*r,h=c*r+o*s-a*n,f=-o*n-a*s-l*r;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,d=e.w,h,f,p,x,m;return f=s*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),x=Math.sin((1-t)*h)/p,m=Math.sin(t*h)/p):(x=1-t,m=t),n.x=x*s+m*l,n.y=x*r+m*c,n.z=x*o+m*u,n.w=x*a+m*d,n}integrate(e,t,n,s){s===void 0&&(s=new i);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return s.x+=h*(r*d+o*u-a*c),s.y+=h*(o*d+a*l-r*u),s.z+=h*(a*d+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}},Ab=new C,Tb=new C,Cb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},De=class i{constructor(e){e===void 0&&(e={}),this.id=i.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};De.idCounter=0;De.types=Cb;var pt=class i{constructor(e){e===void 0&&(e={}),this.position=new C,this.quaternion=new zt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return i.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return i.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),n.vsub(e,s),t.conjugate(qp),qp.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new C),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new C),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),t.w*=-1,t.vmult(n,s),t.w*=-1,s}},qp=new zt,Ko=class i extends De{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:De.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let s=new C;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new C;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,t)}static computeNormal(e,t,n,s){let r=new C,o=new C;t.vsub(e,o),n.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,r,o,a,l,c){let u=new C,d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);let x=u.dot(o);x>h&&(h=x,d=p)}let f=[];for(let p=0;p<n.faces[d].length;p++){let x=n.vertices[n.faces[d][p]],m=new C;m.copy(x),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,s,r,o,a,l){let c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);let y=m.testSepAxis(c,e,t,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let y=0;y<g;y++){let A=a?a[y]:y;c.copy(m.faceNormals[A]),n.vmult(c,c);let b=m.testSepAxis(c,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],u);let y=m.testSepAxis(u,e,t,n,s,r);if(y===!1)return!1;y<x&&(x=y,o.copy(u))}else{let g=l?l.length:e.faces.length;for(let y=0;y<g;y++){let A=l?l[y]:y;u.copy(e.faceNormals[A]),r.vmult(u,u);let b=m.testSepAxis(u,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let y=0;y!==e.uniqueEdges.length;y++)if(r.vmult(e.uniqueEdges[y],f),h.cross(f,p),!p.almostZero()){p.normalize();let A=m.testSepAxis(p,e,t,n,s,r);if(A===!1)return!1;A<x&&(x=A,o.copy(p))}}return s.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,s,r,o){let a=this;i.project(a,e,n,s,Pu),i.project(t,e,r,o,Lu);let l=Pu[0],c=Pu[1],u=Lu[0],d=Lu[1];if(l<d||u<c)return!1;let h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){let n=new C,s=new C;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,r,o,a){let l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,x=new C,m=this,g=[],y=s,A=g,b=-1,M=Number.MAX_VALUE;for(let P=0;P<m.faces.length;P++){l.copy(m.faceNormals[P]),n.vmult(l,l);let N=l.dot(e);N<M&&(M=N,b=P)}if(b<0)return;let S=m.faces[b];S.connectedFaces=[];for(let P=0;P<m.faces.length;P++)for(let N=0;N<m.faces[P].length;N++)S.indexOf(m.faces[P][N])!==-1&&P!==b&&S.connectedFaces.indexOf(P)===-1&&S.connectedFaces.push(P);let w=S.length;for(let P=0;P<w;P++){let N=m.vertices[S[P]],U=m.vertices[S[(P+1)%w]];N.vsub(U,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(N),n.vmult(f,f),t.vadd(f,f);let D=S.connectedFaces[P];p.copy(this.faceNormals[D]);let L=this.getPlaneConstantOfFace(D);x.copy(p),n.vmult(x,x);let F=L-x.dot(t);for(this.clipFaceAgainstPlane(y,A,x,F);y.length;)y.shift();for(;A.length;)y.push(A.shift())}p.copy(this.faceNormals[b]);let _=this.getPlaneConstantOfFace(b);x.copy(p),n.vmult(x,x);let T=_-x.dot(t);for(let P=0;P<y.length;P++){let N=x.dot(y[P])+T;if(N<=r&&(console.log(`clamped: depth=${N} to minDist=${r}`),N=r),N<=o){let U=y[P];if(N<=1e-6){let D={point:U,normal:x,depth:N};a.push(D)}}}}clipFaceAgainstPlane(e,t,n,s){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+s,r<0)if(o<0){let d=new C;d.copy(c),t.push(d)}else{let d=new C;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){let d=new C;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new C);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){let r=this.vertices,o,a,l,c,u,d,h=new C;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),s.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new C);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<n;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new C;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=t[n[a][0]],u=new C;e.vsub(c,u);let d=l.dot(u),h=new C;o.vsub(c,h);let f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,s,r){let o=e.vertices.length,a=Ib,l=0,c=0,u=Pb,d=e.vertices;u.setZero(),pt.vectorToLocalFrame(n,s,t,a),pt.pointToLocalFrame(n,s,u,u);let h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},Pu=[],Lu=[],Rb=new C,Ib=new C,Pb=new C,jo=class i extends De{constructor(e){super({type:De.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=C,r=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Ko({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new C),i.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)as.set(r[o][0],r[o][1],r[o][2]),t.vmult(as,as),e.vadd(as,as),n(as.x,as.y,as.z)}calculateWorldAABB(e,t,n,s){let r=this.halfExtents;ui[0].set(r.x,r.y,r.z),ui[1].set(-r.x,r.y,r.z),ui[2].set(-r.x,-r.y,r.z),ui[3].set(-r.x,-r.y,-r.z),ui[4].set(r.x,-r.y,-r.z),ui[5].set(r.x,r.y,-r.z),ui[6].set(-r.x,r.y,-r.z),ui[7].set(r.x,-r.y,r.z);let o=ui[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=ui[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,u=l.y,d=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),d>s.z&&(s.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}},as=new C,ui=[new C,new C,new C,new C,new C,new C,new C,new C],Xu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Yu={AWAKE:0,SLEEPY:1,SLEEPING:2},nt=class i extends Ic{constructor(e){e===void 0&&(e={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new C,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new C,this.force=new C;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?i.STATIC:i.DYNAMIC,typeof e.type==typeof i.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new zt,this.initQuaternion=new zt,this.previousQuaternion=new zt,this.interpolatedQuaternion=new zt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new C,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new ls,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new ls,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new C(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new C(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Pn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,e===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(i.sleepyEvent)):t===i.SLEEPY&&n>s?this.wakeUp():t===i.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new C),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new C),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}addShape(e,t,n){let s=new C,r=new zt;return t&&s.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,s=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,r=Lb,o=Nb,a=this.quaternion,l=this.aabb,c=Db;for(let u=0;u!==s;u++){let d=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=Fb,s=Ub;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=Ob;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=zb,s=kb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=t,s=Vb;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=Gb;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=Hb,s=Wb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){let e=qb;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),jo.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new C;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;let p=d.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,y=l.z*x.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*y),r.y+=e*(p[3]*m+p[4]*g+p[5]*y),r.z+=e*(p[6]*m+p[7]*g+p[8]*y),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};nt.idCounter=0;nt.COLLIDE_EVENT_NAME="collide";nt.DYNAMIC=Xu.DYNAMIC;nt.STATIC=Xu.STATIC;nt.KINEMATIC=Xu.KINEMATIC;nt.AWAKE=Yu.AWAKE;nt.SLEEPY=Yu.SLEEPY;nt.SLEEPING=Yu.SLEEPING;nt.wakeupEvent={type:"wakeup"};nt.sleepyEvent={type:"sleepy"};nt.sleepEvent={type:"sleep"};var Lb=new C,Nb=new zt,Db=new Pn,Fb=new ls,Ub=new ls,Bb=new ls,Ob=new C,zb=new C,kb=new C,Vb=new C,Gb=new C,Hb=new C,Wb=new C,qb=new C,Pc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&nt.STATIC)!==0||e.sleepState===nt.SLEEPING)&&((t.type&nt.STATIC)!==0||t.sleepState===nt.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){let r=Xb;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){let n=Yb,s=$b,r=Zb,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(s[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new C;e.position.vsub(t.position,n);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Xb=new C;new C;new zt;new C;var Yb={keys:[]},$b=[],Zb=[];new C;var WA=new C;new C;var Bu=class extends Pc{constructor(){super()}collisionPairs(e,t,n){let s=e.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},Ir=class{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},im,sm,rm,om,am,lm,cm,$u={CLOSEST:1,ANY:2,ALL:4};im=De.types.SPHERE;sm=De.types.PLANE;rm=De.types.BOX;om=De.types.CYLINDER;am=De.types.CONVEXPOLYHEDRON;lm=De.types.HEIGHTFIELD;cm=De.types.TRIMESH;var Bn=class i{get[im](){return this._intersectSphere}get[sm](){return this._intersectPlane}get[rm](){return this._intersectBox}get[om](){return this._intersectConvex}get[am](){return this._intersectConvex}get[lm](){return this._intersectHeightfield}get[cm](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new C),t===void 0&&(t=new C),this.from=e.clone(),this.to=t.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Ir,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||i.ANY,this.result=t.result||new Ir,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xp),Nu.length=0,e.broadphase.aabbQuery(e,Xp,Nu),this.intersectBodies(Nu),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=Kb,r=jb;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){let r=this.from;if(fS(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);t.vmult(c,c);let u=new C;o.vsub(n,u);let d=u.dot(c);a.vsub(n,u);let h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new C,x=new C,m=new C;o.vsub(n,p);let g=-c.dot(p)/f;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;let o=Jb;o.from.copy(this.from),o.to.copy(this.to),pt.pointToLocalFrame(n,t,o.from,o.from),pt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=Qb,l,c,u,d;l=c=0,u=d=e.data.length-1;let h=new Pn;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),pt.pointToWorldFrame(n,t,e.pillarOffset,wc),this._intersectConvex(e.pillarConvex,t,wc,s,r,Yp),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),pt.pointToWorldFrame(n,t,e.pillarOffset,wc),this._intersectConvex(e.pillarConvex,t,wc,s,r,Yp)}}}_intersectSphere(e,t,n,s,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=eS,p=tS;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{let x=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){let a=nS,l=$p,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:u.length,y=this.result;for(let A=0;!y.shouldStop&&A<g;A++){let b=c?c[A]:A,M=u[b],S=h[b],w=t,_=n;l.copy(d[M[0]]),w.vmult(l,l),l.vadd(_,l),l.vsub(p,l),w.vmult(S,a);let T=f.dot(a);if(Math.abs(T)<this.precision)continue;let P=a.dot(l)/T;if(!(P<0)){f.scale(P,Mn),Mn.vadd(p,Mn),Jn.copy(d[M[0]]),w.vmult(Jn,Jn),_.vadd(Jn,Jn);for(let N=1;!y.shouldStop&&N<M.length-1;N++){di.copy(d[M[N]]),fi.copy(d[M[N+1]]),w.vmult(di,di),w.vmult(fi,fi),_.vadd(di,di),_.vadd(fi,fi);let U=Mn.distanceTo(p);!(i.pointInTriangle(Mn,Jn,di,fi)||i.pointInTriangle(Mn,di,Jn,fi))||U>m||this.reportIntersection(a,Mn,r,s,b)}}}}_intersectTrimesh(e,t,n,s,r,o){let a=rS,l=uS,c=dS,u=$p,d=oS,h=aS,f=lS,p=hS,x=cS,m=e.indices;e.vertices;let g=this.from,y=this.to,A=this.direction;c.position.copy(n),c.quaternion.copy(t),pt.vectorToLocalFrame(n,t,A,d),pt.pointToLocalFrame(n,t,g,h),pt.pointToLocalFrame(n,t,y,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();let b=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){let w=l[M];e.getNormal(w,a),e.getVertex(m[w*3],Jn),Jn.vsub(h,u);let _=d.dot(a),T=a.dot(u)/_;if(T<0)continue;d.scale(T,Mn),Mn.vadd(h,Mn),e.getVertex(m[w*3+1],di),e.getVertex(m[w*3+2],fi);let P=Mn.distanceSquared(h);!(i.pointInTriangle(Mn,di,Jn,fi)||i.pointInTriangle(Mn,Jn,di,fi))||P>b||(pt.vectorToWorldFrame(t,a,x),pt.pointToWorldFrame(n,t,Mn,p),this.reportIntersection(x,p,r,s,w))}l.length=0}reportIntersection(e,t,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,e,t,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,Ls),n.vsub(t,Xo),e.vsub(t,Du);let r=Ls.dot(Ls),o=Ls.dot(Xo),a=Ls.dot(Du),l=Xo.dot(Xo),c=Xo.dot(Du),u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}};Bn.CLOSEST=$u.CLOSEST;Bn.ANY=$u.ANY;Bn.ALL=$u.ALL;var Xp=new Pn,Nu=[],Xo=new C,Du=new C,Kb=new C,jb=new zt,Mn=new C,Jn=new C,di=new C,fi=new C;new C;new Ir;var Yp={faceList:[0]},wc=new C,Jb=new Bn,Qb=[],eS=new C,tS=new C,nS=new C,iS=new C,sS=new C,$p=new C,rS=new C,oS=new C,aS=new C,lS=new C,cS=new C,hS=new C;new Pn;var uS=[],dS=new pt,Ls=new C,Ec=new C;function fS(i,e,t){t.vsub(i,Ls);let n=Ls.dot(e);return e.scale(n,Ec),Ec.vadd(i,Ec),t.distanceTo(Ec)}var Lc=class i extends Pc{static checkBounds(e,t,n){let s,r;n===0?(s=e.position.x,r=t.position.x):n===1?(s=e.position.y,r=t.position.y):n===2&&(s=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=s+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=s}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let s=t.indexOf(n.body);s!==-1&&t.splice(s,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let u=s[l];if(this.needBroadphaseCollision(c,u)){if(!i.checkBounds(c,u,o))break;this.intersectionTest(c,u,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let s=0;s!==n;s++){let r=e[s];r.aabbNeedsUpdate&&r.updateAABB()}t===0?i.insertionSortX(e):t===1?i.insertionSortY(e):t===2&&i.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let p=a[f],x=p.position.x;e+=x,t+=x*x;let m=p.position.y;n+=m,s+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=t-e*e*c,d=s-n*n*c,h=o-r*r*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},Nc=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},Ou=class i{constructor(e,t,n){n===void 0&&(n={}),n=Nc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};Ou.idCounter=0;var Dc=class{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Jo=class i{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Dc,this.jacobianElementB=new Dc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let s=t,r=e,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Zp),a.scale(u,Kp),n.invInertiaWorldSolve.vmult(o,jp),s.invInertiaWorldSolve.vmult(l,Jp),e.multiplyVectors(Zp,jp)+t.multiplyVectors(Kp,Jp)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,Ac),c+=Ac.dot(e.rotational),l.vmult(t.rotational,Ac),c+=Ac.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=pS;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Jo.idCounter=0;var Zp=new C,Kp=new C,jp=new C,Jp=new C,Ac=new C,pS=new C,zu=class extends Jo{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(e){let t=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=mS,c=gS,u=s.velocity,d=s.angularVelocity;s.force,s.torque;let h=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=xS,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);let y=g.dot(p),A=this.restitution+1,b=A*h.dot(g)-A*u.dot(g)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-y*t-b*n-e*M}getImpactVelocityAlongNormal(){let e=vS,t=_S,n=yS,s=bS,r=SS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},mS=new C,gS=new C,xS=new C,vS=new C,_S=new C,yS=new C,bS=new C,SS=new C;var qA=new C,XA=new C;var YA=new C,$A=new C;new C;new C;var ZA=new C,KA=new C;var jA=new C,JA=new C,Fc=class extends Jo{constructor(e,t,n){super(e,t,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=MS,o=wS,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}},MS=new C,wS=new C,Uc=class i{constructor(e,t,n){n=Nc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Uc.idCounter=0;var Bc=class i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};Bc.idCounter=0;var QA=new C,eT=new C,tT=new C,nT=new C,iT=new C,sT=new C,rT=new C,oT=new C,aT=new C,lT=new C,cT=new C;var hT=new C,uT=new C;new C;new C;new C;var dT=new C,fT=new C,pT=new C;new Bn;new C;var mT=new C,gT=new C,xT=[new C(1,0,0),new C(0,1,0),new C(0,0,1)],vT=new C;var _T=new C,yT=new C,bT=new C;var ST=new C,MT=new C,wT=new C,ET=new C;var AT=new C,TT=new C,CT=new C;var RT=new C,IT=new C;var PT=new C,LT=new C,NT=new C,DT=new C,FT=new C,UT=new C,BT=new C;var OT=new C;var zT=new C,kT=new C,VT=new C,GT=new C,HT=new C,WT=new C,qT=new C,XT=new C,YT=new C;var $T=new C,ZT=new Pn;var KT=new C,jT=new Pn,JT=new C,QT=new C,eC=new C,tC=new C,nC=new C,iC=new C,sC=new C,rC=new Pn,oC=new C,aC=new pt,lC=new Pn,ku=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},Vu=class extends ku{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e,d,h,f,p,x,m;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();let g=AS,y=TS,A=ES;g.length=a,y.length=a,A.length=a;for(let b=0;b!==a;b++){let M=o[b];A[b]=0,y[b]=M.computeB(u),g[b]=1/M.computeC()}if(a!==0){for(let S=0;S!==c;S++){let w=l[S],_=w.vlambda,T=w.wlambda;_.set(0,0,0),T.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let S=0;S!==a;S++){let w=o[S];d=y[S],h=g[S],m=A[S],x=w.computeGWlambda(),f=h*(d-x-w.eps*m),m+f<w.minForce?f=w.minForce-m:m+f>w.maxForce&&(f=w.maxForce-m),A[S]+=f,p+=f>0?f:-f,w.addToWlambda(f)}if(p*p<r)break}for(let S=0;S!==c;S++){let w=l[S],_=w.velocity,T=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),_.vadd(w.vlambda,_),w.wlambda.vmul(w.angularFactor,w.wlambda),T.vadd(w.wlambda,T)}let b=o.length,M=1/u;for(;b--;)o[b].multiplier=A[b]*M}return n}},ES=[],AS=[],TS=[];var cC=nt.STATIC;var Gu=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},Hu=class extends Gu{constructor(){super(...arguments),this.type=C}constructObject(){return new C}},Ct={sphereSphere:De.types.SPHERE,spherePlane:De.types.SPHERE|De.types.PLANE,boxBox:De.types.BOX|De.types.BOX,sphereBox:De.types.SPHERE|De.types.BOX,planeBox:De.types.PLANE|De.types.BOX,convexConvex:De.types.CONVEXPOLYHEDRON,sphereConvex:De.types.SPHERE|De.types.CONVEXPOLYHEDRON,planeConvex:De.types.PLANE|De.types.CONVEXPOLYHEDRON,boxConvex:De.types.BOX|De.types.CONVEXPOLYHEDRON,sphereHeightfield:De.types.SPHERE|De.types.HEIGHTFIELD,boxHeightfield:De.types.BOX|De.types.HEIGHTFIELD,convexHeightfield:De.types.CONVEXPOLYHEDRON|De.types.HEIGHTFIELD,sphereParticle:De.types.PARTICLE|De.types.SPHERE,planeParticle:De.types.PLANE|De.types.PARTICLE,boxParticle:De.types.BOX|De.types.PARTICLE,convexParticle:De.types.PARTICLE|De.types.CONVEXPOLYHEDRON,cylinderCylinder:De.types.CYLINDER,sphereCylinder:De.types.SPHERE|De.types.CYLINDER,planeCylinder:De.types.PLANE|De.types.CYLINDER,boxCylinder:De.types.BOX|De.types.CYLINDER,convexCylinder:De.types.CONVEXPOLYHEDRON|De.types.CYLINDER,heightfieldCylinder:De.types.HEIGHTFIELD|De.types.CYLINDER,particleCylinder:De.types.PARTICLE|De.types.CYLINDER,sphereTrimesh:De.types.SPHERE|De.types.TRIMESH,planeTrimesh:De.types.PLANE|De.types.TRIMESH},Wu=class{get[Ct.sphereSphere](){return this.sphereSphere}get[Ct.spherePlane](){return this.spherePlane}get[Ct.boxBox](){return this.boxBox}get[Ct.sphereBox](){return this.sphereBox}get[Ct.planeBox](){return this.planeBox}get[Ct.convexConvex](){return this.convexConvex}get[Ct.sphereConvex](){return this.sphereConvex}get[Ct.planeConvex](){return this.planeConvex}get[Ct.boxConvex](){return this.boxConvex}get[Ct.sphereHeightfield](){return this.sphereHeightfield}get[Ct.boxHeightfield](){return this.boxHeightfield}get[Ct.convexHeightfield](){return this.convexHeightfield}get[Ct.sphereParticle](){return this.sphereParticle}get[Ct.planeParticle](){return this.planeParticle}get[Ct.boxParticle](){return this.boxParticle}get[Ct.convexParticle](){return this.convexParticle}get[Ct.cylinderCylinder](){return this.convexConvex}get[Ct.sphereCylinder](){return this.sphereConvex}get[Ct.planeCylinder](){return this.planeConvex}get[Ct.boxCylinder](){return this.boxConvex}get[Ct.convexCylinder](){return this.convexConvex}get[Ct.heightfieldCylinder](){return this.heightfieldCylinder}get[Ct.particleCylinder](){return this.particleCylinder}get[Ct.sphereTrimesh](){return this.sphereTrimesh}get[Ct.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Hu,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new zu(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let n=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||n.material,d=o.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){let h=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,x=p.length?p.pop():new Fc(n,s,h*f),m=p.length?p.pop():new Fc(n,s,h*f);return x.bi=m.bi=n,x.bj=m.bj=s,x.minForce=m.minForce=-h*f,x.maxForce=m.maxForce=h*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ps.setZero(),Cr.setZero(),Rr.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Ps.vadd(t.ni,Ps),Cr.vadd(t.ri,Cr),Rr.vadd(t.rj,Rr)):(Ps.vsub(t.ni,Ps),Cr.vadd(t.rj,Cr),Rr.vadd(t.ri,Rr));let o=1/e;Cr.scale(o,n.ri),Rr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ps.normalize(),Ps.tangents(n.t,s.t)}getContacts(e,t,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=IS,c=PS,u=CS,d=RS;for(let h=0,f=e.length;h!==f;h++){let p=e[h],x=t[h],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&nt.KINEMATIC&&x.type&nt.STATIC||p.type&nt.STATIC&&x.type&nt.KINEMATIC||p.type&nt.KINEMATIC&&x.type&nt.KINEMATIC;for(let y=0;y<p.shapes.length;y++){p.quaternion.mult(p.shapeOrientations[y],l),p.quaternion.vmult(p.shapeOffsets[y],u),u.vadd(p.position,u);let A=p.shapes[y];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],c),x.quaternion.vmult(x.shapeOffsets[b],d),d.vadd(x.position,d);let M=x.shapes[b];if(!(A.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&A.collisionFilterGroup)||u.distanceTo(d)>A.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;A.material&&M.material&&(S=n.getContactMaterial(A.material,M.material)||null),this.currentContactMaterial=S||m||n.defaultContactMaterial;let w=A.type|M.type,_=this[w];if(_){let T=!1;A.type<M.type?T=_.call(this,A,M,u,d,l,c,p,x,A,M,g):T=_.call(this,M,A,d,u,c,l,x,p,A,M,g),T&&g&&(n.shapeOverlapKeeper.set(A.id,M.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(e,t,n,s,r,o,a,l,c,u,d){if(d)return n.distanceSquared(s)<(e.radius+t.radius)**2;let h=this.createContactEquation(a,l,e,t,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,s,r,o,a,l,c,u,d){let h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(s,Tc),h.ni.scale(h.ni.dot(Tc),Qp),Tc.vsub(Qp,h.rj),-Tc.dot(h.ni)<=e.radius){if(d)return!0;let f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}sphereBox(e,t,n,s,r,o,a,l,c,u,d){let h=this.v3pool,f=iM;n.vsub(s,Cc),t.getSideNormals(f,o);let p=e.radius,x=!1,m=rM,g=oM,y=aM,A=null,b=0,M=0,S=0,w=null;for(let B=0,W=f.length;B!==W&&x===!1;B++){let X=eM;X.copy(f[B]);let H=X.length();X.normalize();let Y=Cc.dot(X);if(Y<H+p&&Y>0){let j=tM,te=nM;j.copy(f[(B+1)%3]),te.copy(f[(B+2)%3]);let me=j.length(),pe=te.length();j.normalize(),te.normalize();let Ce=Cc.dot(j),Ze=Cc.dot(te);if(Ce<me&&Ce>-me&&Ze<pe&&Ze>-pe){let Q=Math.abs(Y-H-p);if((w===null||Q<w)&&(w=Q,M=Ce,S=Ze,A=H,m.copy(X),g.copy(j),y.copy(te),b++,d))return!0}}}if(b){x=!0;let B=this.createContactEquation(a,l,e,t,c,u);m.scale(-p,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(A,m),g.scale(M,g),m.vadd(g,m),y.scale(S,y),m.vadd(y,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let _=h.get(),T=sM;for(let B=0;B!==2&&!x;B++)for(let W=0;W!==2&&!x;W++)for(let X=0;X!==2&&!x;X++)if(_.set(0,0,0),B?_.vadd(f[0],_):_.vsub(f[0],_),W?_.vadd(f[1],_):_.vsub(f[1],_),X?_.vadd(f[2],_):_.vsub(f[2],_),s.vadd(_,T),T.vsub(n,T),T.lengthSquared()<p*p){if(d)return!0;x=!0;let H=this.createContactEquation(a,l,e,t,c,u);H.ri.copy(T),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(p,H.ri),H.rj.copy(_),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(s,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}h.release(_),_=null;let P=h.get(),N=h.get(),U=h.get(),D=h.get(),L=h.get(),F=f.length;for(let B=0;B!==F&&!x;B++)for(let W=0;W!==F&&!x;W++)if(B%3!==W%3){f[W].cross(f[B],P),P.normalize(),f[B].vadd(f[W],N),U.copy(n),U.vsub(N,U),U.vsub(s,U);let X=U.dot(P);P.scale(X,D);let H=0;for(;H===B%3||H===W%3;)H++;L.copy(n),L.vsub(D,L),L.vsub(N,L),L.vsub(s,L);let Y=Math.abs(X),j=L.length();if(Y<f[H].length()&&j<p){if(d)return!0;x=!0;let te=this.createContactEquation(a,l,e,t,c,u);N.vadd(D,te.rj),te.rj.copy(te.rj),L.negate(te.ni),te.ni.normalize(),te.ri.copy(te.rj),te.ri.vadd(s,te.ri),te.ri.vsub(n,te.ri),te.ri.normalize(),te.ri.scale(p,te.ri),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),te.rj.vadd(s,te.rj),te.rj.vsub(l.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}}h.release(P,N,U,D,L)}planeBox(e,t,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}convexConvex(e,t,n,s,r,o,a,l,c,u,d,h,f){let p=SM;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,s,o,p,h,f)){let x=[],m=MM;e.clipAgainstHull(n,r,t,s,o,p,-100,100,x);let g=0;for(let y=0;y!==x.length;y++){if(d)return!0;let A=this.createContactEquation(a,l,e,t,c,u),b=A.ri,M=A.rj;p.negate(A.ni),x[y].normal.negate(m),m.scale(x[y].depth,m),x[y].point.vadd(m,b),M.copy(x[y].point),b.vsub(n,b),M.vsub(s,M),b.vadd(n,b),b.vsub(a.position,b),M.vadd(s,M),M.vsub(l.position,M),this.result.push(A),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(A,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,s,r,o,a,l,c,u,d){let h=this.v3pool;n.vsub(s,lM);let f=t.faceNormals,p=t.faces,x=t.vertices,m=e.radius,g=!1;for(let y=0;y!==x.length;y++){let A=x[y],b=dM;o.vmult(A,b),s.vadd(b,b);let M=uM;if(b.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;g=!0;let S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(m,S.ri),b.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let y=0,A=p.length;y!==A&&g===!1;y++){let b=f[y],M=p[y],S=fM;o.vmult(b,S);let w=pM;o.vmult(x[M[0]],w),w.vadd(s,w);let _=mM;S.scale(-m,_),n.vadd(_,_);let T=gM;_.vsub(w,T);let P=T.dot(S),N=xM;if(n.vsub(w,N),P<0&&N.dot(S)>0){let U=[];for(let D=0,L=M.length;D!==L;D++){let F=h.get();o.vmult(x[M[D]],F),s.vadd(F,F),U.push(F)}if(QS(U,S,n)){if(d)return!0;g=!0;let D=this.createContactEquation(a,l,e,t,c,u);S.scale(-m,D.ri),S.negate(D.ni);let L=h.get();S.scale(-P,L);let F=h.get();S.scale(-m,F),n.vsub(s,D.rj),D.rj.vadd(F,D.rj),D.rj.vadd(L,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),h.release(L),h.release(F),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let B=0,W=U.length;B!==W;B++)h.release(U[B]);return}else for(let D=0;D!==M.length;D++){let L=h.get(),F=h.get();o.vmult(x[M[(D+1)%M.length]],L),o.vmult(x[M[(D+2)%M.length]],F),s.vadd(L,L),s.vadd(F,F);let B=cM;F.vsub(L,B);let W=hM;B.unit(W);let X=h.get(),H=h.get();n.vsub(L,H);let Y=H.dot(W);W.scale(Y,X),X.vadd(L,X);let j=h.get();if(X.vsub(n,j),Y>0&&Y*Y<B.lengthSquared()&&j.lengthSquared()<m*m){if(d)return!0;let te=this.createContactEquation(a,l,e,t,c,u);X.vsub(s,te.rj),X.vsub(n,te.ni),te.ni.normalize(),te.ni.scale(m,te.ri),te.rj.vadd(s,te.rj),te.rj.vsub(l.position,te.rj),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult);for(let me=0,pe=U.length;me!==pe;me++)h.release(U[me]);h.release(L),h.release(F),h.release(X),h.release(j),h.release(H);return}h.release(L),h.release(F),h.release(X),h.release(j),h.release(H)}for(let D=0,L=U.length;D!==L;D++)h.release(U[D])}}}planeConvex(e,t,n,s,r,o,a,l,c,u,d){let h=vM,f=_M;f.set(0,0,1),r.vmult(f,f);let p=0,x=yM;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,x),f.dot(x)<=0){if(d)return!0;let y=this.createContactEquation(a,l,e,t,c,u),A=bM;f.scale(f.dot(x),A),h.vsub(A,A),A.vsub(n,y.ri),y.ni.copy(f),h.vsub(s,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,s,r,o,a,l,c,u,d){let h=t.data,f=e.radius,p=t.elementSize,x=FM,m=DM;pt.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-f)/p)-1,y=Math.ceil((m.x+f)/p)+1,A=Math.floor((m.y-f)/p)-1,b=Math.ceil((m.y+f)/p)+1;if(y<0||b<0||g>h.length||A>h[0].length)return;g<0&&(g=0),y<0&&(y=0),A<0&&(A=0),b<0&&(b=0),g>=h.length&&(g=h.length-1),y>=h.length&&(y=h.length-1),b>=h[0].length&&(b=h[0].length-1),A>=h[0].length&&(A=h[0].length-1);let M=[];t.getRectMinMax(g,A,y,b,M);let S=M[0],w=M[1];if(m.z-f>w||m.z+f<S)return;let _=this.result;for(let T=g;T<y;T++)for(let P=A;P<b;P++){let N=_.length,U=!1;if(t.getConvexTrianglePillar(T,P,!1),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U||(t.getConvexTrianglePillar(T,P,!0),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U))return!0;if(_.length-N>2)return}}boxHeightfield(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,s,r,o,a,l,c,u,d){let h=t.data,f=t.elementSize,p=e.boundingSphereRadius,x=LM,m=NM,g=PM;pt.pointToLocalFrame(s,o,n,g);let y=Math.floor((g.x-p)/f)-1,A=Math.ceil((g.x+p)/f)+1,b=Math.floor((g.y-p)/f)-1,M=Math.ceil((g.y+p)/f)+1;if(A<0||M<0||y>h.length||b>h[0].length)return;y<0&&(y=0),A<0&&(A=0),b<0&&(b=0),M<0&&(M=0),y>=h.length&&(y=h.length-1),A>=h.length&&(A=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let S=[];t.getRectMinMax(y,b,A,M,S);let w=S[0],_=S[1];if(!(g.z-p>_||g.z+p<w))for(let T=y;T<A;T++)for(let P=b;P<M;P++){let N=!1;if(t.getConvexTrianglePillar(T,P,!1),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&N||(t.getConvexTrianglePillar(T,P,!0),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&N))return!0}}sphereParticle(e,t,n,s,r,o,a,l,c,u,d){let h=TM;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;let p=this.createContactEquation(l,a,t,e,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,s,r,o,a,l,c,u,d){let h=wM;h.set(0,0,1),a.quaternion.vmult(h,h);let f=EM;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,t,e,c,u);x.ni.copy(h),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=AM;h.scale(h.dot(s),m),s.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexParticle(e,t,n,s,r,o,a,l,c,u,d){let h=-1,f=RM,p=IM,x=null,m=CM;if(m.copy(s),m.vsub(n,m),r.conjugate(em),em.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,y=e.faces.length;g!==y;g++){let A=[e.worldVertices[e.faces[g][0]]],b=e.worldFaceNormals[g];s.vsub(A[0],tm);let M=-b.dot(tm);if(x===null||Math.abs(M)<Math.abs(x)){if(d)return!0;x=M,h=g,f.copy(b)}}if(h!==-1){let g=this.createContactEquation(l,a,t,e,c,u);f.scale(x,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);let y=g.ri,A=g.rj;y.vadd(s,y),y.vsub(l.position,y),A.vadd(n,A),A.vsub(a.position,A),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,r,o,a,l,c,u,d){return this.convexHeightfield(t,e,s,n,o,r,l,a,c,u,d)}particleCylinder(e,t,n,s,r,o,a,l,c,u,d){return this.convexParticle(t,e,s,n,o,r,l,a,c,u,d)}sphereTrimesh(e,t,n,s,r,o,a,l,c,u,d){let h=zS,f=kS,p=VS,x=GS,m=HS,g=WS,y=$S,A=OS,b=US,M=ZS;pt.pointToLocalFrame(s,o,n,m);let S=e.radius;y.lowerBound.set(m.x-S,m.y-S,m.z-S),y.upperBound.set(m.x+S,m.y+S,m.z+S),t.getTrianglesInAABB(y,M);let w=BS,_=e.radius*e.radius;for(let D=0;D<M.length;D++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[M[D]*3+L],w),w.vsub(m,b),b.lengthSquared()<=_){if(A.copy(w),pt.pointToWorldFrame(s,o,A,w),w.vsub(n,b),d)return!0;let F=this.createContactEquation(a,l,e,t,c,u);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(w),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let D=0;D<M.length;D++)for(let L=0;L<3;L++){t.getVertex(t.indices[M[D]*3+L],h),t.getVertex(t.indices[M[D]*3+(L+1)%3],f),f.vsub(h,p),m.vsub(f,g);let F=g.dot(p);m.vsub(h,g);let B=g.dot(p);if(B>0&&F<0&&(m.vsub(h,g),x.copy(p),x.normalize(),B=g.dot(x),x.scale(B,g),g.vadd(h,g),g.distanceTo(m)<e.radius)){if(d)return!0;let X=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(e.radius,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),pt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,X.rj),pt.vectorToWorldFrame(o,X.ni,X.ni),pt.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}let T=qS,P=XS,N=YS,U=FS;for(let D=0,L=M.length;D!==L;D++){t.getTriangleVertices(M[D],T,P,N),t.getNormal(M[D],U),m.vsub(T,g);let F=g.dot(U);if(U.scale(F,g),m.vsub(g,g),F=g.distanceTo(m),Bn.pointInTriangle(g,T,P,N)&&F<e.radius){if(d)return!0;let B=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),pt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,B.rj),pt.vectorToWorldFrame(o,B.ni,B.ni),pt.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,s,r,o,a,l,c,u,d){let h=new C,f=LS;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);let x=new C;x.copy(h),pt.pointToWorldFrame(s,o,x,h);let m=NS;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;let y=this.createContactEquation(a,l,e,t,c,u);y.ni.copy(f);let A=DS;f.scale(m.dot(f),A),h.vsub(A,A),y.ri.copy(A),y.ri.vsub(a.position,y.ri),y.rj.copy(h),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},Ps=new C,Cr=new C,Rr=new C,CS=new C,RS=new C,IS=new zt,PS=new zt,LS=new C,NS=new C,DS=new C,FS=new C,US=new C;new C;var BS=new C,OS=new C,zS=new C,kS=new C,VS=new C,GS=new C,HS=new C,WS=new C,qS=new C,XS=new C,YS=new C,$S=new Pn,ZS=[],Tc=new C,Qp=new C,KS=new C,jS=new C,JS=new C;function QS(i,e,t){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=KS;i[(r+1)%s].vsub(o,a);let l=jS;a.cross(e,l);let c=JS;t.vsub(o,c);let u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var Cc=new C,eM=new C,tM=new C,nM=new C,iM=[new C,new C,new C,new C,new C,new C],sM=new C,rM=new C,oM=new C,aM=new C,lM=new C,cM=new C,hM=new C,uM=new C,dM=new C,fM=new C,pM=new C,mM=new C,gM=new C,xM=new C;new C;new C;var vM=new C,_M=new C,yM=new C,bM=new C,SM=new C,MM=new C,wM=new C,EM=new C,AM=new C,TM=new C,em=new zt,CM=new C;new C;var RM=new C,tm=new C,IM=new C,PM=new C,LM=new C,NM=[0],DM=new C,FM=new C,Oc=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,u=n[l];for(;u>s[a];)a++;c=u===s[a],c||nm(e,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||nm(t,u)}}};function nm(i,e){i.push((e&4294901760)>>16,e&65535)}var Fu=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`,qu=class{constructor(){this.data={keys:[]}}get(e,t){let n=Fu(e,t);return this.data[n]}set(e,t,n){let s=Fu(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){let n=Fu(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},zc=class extends Ic{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Bu,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Vu,this.constraints=[],this.narrowphase=new Wu(this),this.collisionMatrix=new Rc,this.collisionMatrixPrevious=new Rc,this.bodyOverlapKeeper=new Oc,this.shapeOverlapKeeper=new Oc,this.contactmaterials=[],this.contactMaterialTable=new qu,this.defaultMaterial=new Bc("default"),this.defaultContactMaterial=new Uc(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Ir?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.ALL,n.from=e,n.to=t,n.callback=s,Uu.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.ANY,n.from=e,n.to=t,n.result=s,Uu.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.CLOSEST,n.from=e,n.to=t,n.result=s,Uu.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof nt&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let s=t[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=qt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=qt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(qt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=kM,s=VM,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=nt.DYNAMIC,h=-1/0,f=this.constraints,p=zM;l.length();let x=l.x,m=l.y,g=l.z,y=0;for(c&&(h=qt.now()),y=0;y!==r;y++){let D=o[y];if(D.type===d){let L=D.force,F=D.mass;L.x+=F*x,L.y+=F*m,L.z+=F*g}}for(let D=0,L=this.subsystems.length;D!==L;D++)this.subsystems[D].update();c&&(h=qt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=qt.now()-h);let A=f.length;for(y=0;y!==A;y++){let D=f[y];if(!D.collideConnected)for(let L=n.length-1;L>=0;L-=1)(D.bodyA===n[L]&&D.bodyB===s[L]||D.bodyB===n[L]&&D.bodyA===s[L])&&(n.splice(L,1),s.splice(L,1))}this.collisionMatrixTick(),c&&(h=qt.now());let b=OM,M=t.length;for(y=0;y!==M;y++)b.push(t[y]);t.length=0;let S=this.frictionEquations.length;for(y=0;y!==S;y++)p.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,b,this.frictionEquations,p),c&&(u.narrowphase=qt.now()-h),c&&(h=qt.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);let w=t.length;for(let D=0;D!==w;D++){let L=t[D],F=L.bi,B=L.bj,W=L.si,X=L.sj,H;if(F.material&&B.material?H=this.getContactMaterial(F.material,B.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,F.material&&B.material&&(F.material.friction>=0&&B.material.friction>=0&&F.material.friction*B.material.friction,F.material.restitution>=0&&B.material.restitution>=0&&(L.restitution=F.material.restitution*B.material.restitution)),a.addEquation(L),F.allowSleep&&F.type===nt.DYNAMIC&&F.sleepState===nt.SLEEPING&&B.sleepState===nt.AWAKE&&B.type!==nt.STATIC){let Y=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),j=B.sleepSpeedLimit**2;Y>=j*2&&(F.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===nt.DYNAMIC&&B.sleepState===nt.SLEEPING&&F.sleepState===nt.AWAKE&&F.type!==nt.STATIC){let Y=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),j=F.sleepSpeedLimit**2;Y>=j*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,B,!0),this.collisionMatrixPrevious.get(F,B)||(Yo.body=B,Yo.contact=L,F.dispatchEvent(Yo),Yo.body=F,B.dispatchEvent(Yo)),this.bodyOverlapKeeper.set(F.id,B.id),this.shapeOverlapKeeper.set(W.id,X.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=qt.now()-h,h=qt.now()),y=0;y!==r;y++){let D=o[y];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(A=f.length,y=0;y!==A;y++){let D=f[y];D.update();for(let L=0,F=D.equations.length;L!==F;L++){let B=D.equations[L];a.addEquation(B)}}a.solve(e,this),c&&(u.solve=qt.now()-h),a.removeAllEquations();let _=Math.pow;for(y=0;y!==r;y++){let D=o[y];if(D.type&d){let L=_(1-D.linearDamping,e),F=D.velocity;F.scale(L,F);let B=D.angularVelocity;if(B){let W=_(1-D.angularDamping,e);B.scale(W,B)}}}this.dispatchEvent(BM),c&&(h=qt.now());let P=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(e,P,N);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=qt.now()-h),this.stepnumber+=1,this.dispatchEvent(UM);let U=!0;if(this.allowSleep)for(U=!1,y=0;y!==r;y++){let D=o[y];D.sleepTick(this.time),D.sleepState!==nt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Ci,Ri),e){for(let r=0,o=Ci.length;r<o;r+=2)$o.bodyA=this.getBodyById(Ci[r]),$o.bodyB=this.getBodyById(Ci[r+1]),this.dispatchEvent($o);$o.bodyA=$o.bodyB=null}if(t){for(let r=0,o=Ri.length;r<o;r+=2)Zo.bodyA=this.getBodyById(Ri[r]),Zo.bodyB=this.getBodyById(Ri[r+1]),this.dispatchEvent(Zo);Zo.bodyA=Zo.bodyB=null}Ci.length=Ri.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Ci,Ri),n){for(let r=0,o=Ci.length;r<o;r+=2){let a=this.getShapeById(Ci[r]),l=this.getShapeById(Ci[r+1]);Ii.shapeA=a,Ii.shapeB=l,a&&(Ii.bodyA=a.body),l&&(Ii.bodyB=l.body),this.dispatchEvent(Ii)}Ii.bodyA=Ii.bodyB=Ii.shapeA=Ii.shapeB=null}if(s){for(let r=0,o=Ri.length;r<o;r+=2){let a=this.getShapeById(Ri[r]),l=this.getShapeById(Ri[r+1]);Pi.shapeA=a,Pi.shapeB=l,a&&(Pi.bodyA=a.body),l&&(Pi.bodyB=l.body),this.dispatchEvent(Pi)}Pi.bodyA=Pi.bodyB=Pi.shapeA=Pi.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Pn;var Uu=new Bn,qt=globalThis.performance||{};if(!qt.now){let i=Date.now();qt.timing&&qt.timing.navigationStart&&(i=qt.timing.navigationStart),qt.now=()=>Date.now()-i}new C;var UM={type:"postStep"},BM={type:"preStep"},Yo={type:nt.COLLIDE_EVENT_NAME,body:null,contact:null},OM=[],zM=[],kM=[],VM=[],Ci=[],Ri=[],$o={type:"beginContact",bodyA:null,bodyB:null},Zo={type:"endContact",bodyA:null,bodyB:null},Ii={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var GM=.24,vn=1e-8,xn=i=>Array.isArray(i)?i:[i.x,i.y,i.z],mi=(i,e)=>i.map((t,n)=>t+e[n]),ct=(i,e)=>i.map((t,n)=>t-e[n]),Qn=(i,e)=>i.map(t=>t*e),Nt=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],kc=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],cs=i=>Nt(i,i),Pr=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Lr=(i,e,t)=>Math.max(e,Math.min(t,i)),pi=i=>new C(...xn(i)),Nr=(i,e)=>{let t=2*(e.y*i[2]-e.z*i[1]),n=2*(e.z*i[0]-e.x*i[2]),s=2*(e.x*i[1]-e.y*i[0]);return[i[0]+e.w*t+e.y*s-e.z*n,i[1]+e.w*n+e.z*t-e.x*s,i[2]+e.w*s+e.x*n-e.y*t]},hm=(i,e)=>Nr(i,new zt(-e.x,-e.y,-e.z,e.w));function ju(i,e){let t=cs(e);if(t<1e-12)return;let n=Qn(e,1/Math.sqrt(t));i.some(s=>Math.abs(Nt(s,n))>1-1e-7)||i.push(n)}function HM(i){let e=[],t=[],n=[];for(let s of i.faces){let[r,o,a]=s.map(l=>i.vertices[l]);ju(e,kc(ct(o,r),ct(a,r)));for(let l=0;l<s.length;l++)ju(t,ct(i.vertices[s[(l+1)%s.length]],i.vertices[s[l]]));for(let l=1;l<s.length-1;l++)n.push([r,i.vertices[s[l]],i.vertices[s[l+1]]])}return{...i,normals:e,edges:t,triangles:n}}function um(i,e){return e.faces.every(t=>{let[n,s,r]=t.map(o=>e.vertices[o]);return Nt(ct(i,n),kc(ct(s,n),ct(r,n)))<=vn})}function WM(i,e,t,n,s){let r=i.vertices.map(f=>Nr(f,e)),o=i.normals.map(f=>Nr(f,e)),a=i.edges.map(f=>Nr(f,e)),l=[...o,...s.axes];for(let f of a)for(let p of s.axes)ju(l,kc(f,p));let c=ct(t,s.position),u=0,d=1,h=[0,0,0];for(let f of l){let p=r.map(S=>Nt(S,f)),x=Nt(c,f),m=Math.min(...p)+x,g=Math.max(...p)+x,y=s.half.reduce((S,w,_)=>S+w*Math.abs(Nt(s.axes[_],f)),0),A=Nt(n,f);if(Math.abs(A)<vn){if(m>y+vn||g<-y-vn)return null;continue}let b=(-y-g)/A,M=(y-m)/A;if(b>M&&([b,M]=[M,b]),b>u&&(u=b,h=Qn(f,A>0?-1:1)),d=Math.min(d,M),u>d+vn)return null}return d>=0&&u<=1?{t:Math.max(0,u),normal:h}:null}function Zu(i,e,t,n=0){let s=ct(i,t.position),r=ct(e,i),o=t.axes.map(u=>Nt(s,u)),a=t.axes.map(u=>Nt(r,u)),l=0,c=1;for(let u=0;u<3;u++){let d=t.half[u]+n;if(Math.abs(a[u])<vn){if(Math.abs(o[u])>d)return null;continue}let h=(-d-o[u])/a[u],f=(d-o[u])/a[u];if(h>f&&([h,f]=[f,h]),l=Math.max(l,h),c=Math.min(c,f),l>c)return null}return l}function Ku(i,e,t,n){let s=ct(t,e),r=ct(n,e),o=ct(i,e),a=Nt(s,o),l=Nt(r,o);if(a<=0&&l<=0)return e;let c=ct(i,t),u=Nt(s,c),d=Nt(r,c);if(u>=0&&d<=u)return t;let h=a*d-u*l;if(h<=0&&a>=0&&u<=0)return mi(e,Qn(s,a/(a-u)));let f=ct(i,n),p=Nt(s,f),x=Nt(r,f);if(x>=0&&p<=x)return n;let m=p*l-a*x;if(m<=0&&l>=0&&x<=0)return mi(e,Qn(r,l/(l-x)));let g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return mi(t,Qn(ct(n,t),(d-u)/(d-u+p-x)));let y=1/(g+m+h);return mi(e,mi(Qn(s,m*y),Qn(r,h*y)))}function qM(i,e,t,n){let s=ct(e,i),r=ct(n,t),o=ct(i,t),a=Nt(s,s),l=Nt(s,r),c=Nt(r,r),u=Nt(s,o),d=Nt(r,o);if(a<vn)return{t:0,point:mi(t,Qn(r,c>vn?Lr(d/c,0,1):0))};let h=a*c-l*l,f=h>vn?Lr((l*d-c*u)/h,0,1):0,p=c>vn?(l*f+d)/c:0;return p<0?(p=0,f=Lr(-u/a,0,1)):p>1&&(p=1,f=Lr((l-u)/a,0,1)),{t:f,point:mi(t,Qn(r,p))}}function XM(i,e,t,n,s){let r=ct(e,i),o=kc(ct(n,t),ct(s,t)),a=Nt(o,r);if(Math.abs(a)>vn){let c=Nt(o,ct(t,i))/a;if(c>=0&&c<=1){let u=Pr(i,e,c),d=Ku(u,t,n,s);if(cs(ct(u,d))<1e-12)return{distance2:0,t:c,point:d}}}let l=[{t:0,point:Ku(i,t,n,s)},{t:1,point:Ku(e,t,n,s)}];for(let[c,u]of[[t,n],[n,s],[s,t]])l.push(qM(i,e,c,u));for(let c of l)c.distance2=cs(ct(Pr(i,e,c.t),c.point));return l.reduce((c,u)=>u.distance2<c.distance2?u:c)}function dm(i=gn,e={form:"classic",size:1}){let t=new zc({gravity:new C(0,0,0),allowSleep:!0});t.broadphase=new Lc(t);let n=[],s=[],r=new Map,o,a,l=[];function c(w){w.position=xn(w.body.position),w.axes=[[1,0,0],[0,1,0],[0,0,1]].map(_=>Nr(_,w.body.quaternion)),w.body.aabbNeedsUpdate=!0,w.body.updateAABB(),w.min=xn(w.body.aabb.lowerBound),w.max=xn(w.body.aabb.upperBound),t.broadphase.dirty=!0}function u(w,_,T="solid",P=[0,0,0],N){let U=new nt({mass:0,shape:new jo(new C(...w.map(L=>L/2))),position:pi(_)});U.quaternion.setFromEuler(...P,"XYZ"),U.kind=T,U.obstacleId=N,t.addBody(U);let D={body:U,half:w.map(L=>L/2),kind:T,id:N};return c(D),s.push(D),D}for(let w of i.obstacles??[])u(w.size,w.position,w.kind??"solid",w.rotation??[0,0,0],w.id);for(let w of i.doors??[]){let _=Tr(w,!1),T=u(_.size,_.position,"door",_.rotation,w.id);r.set(w.id,{door:w,obstacle:T,open:!1})}let d=xn(i.start??[0,1,0]),h=new nt({mass:1,position:pi(d),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});h.kind="plane",t.addBody(h);function f(w="classic",_=1){for(o=Is(w,_),a=o.parts.map(HM);h.shapes.length;)h.removeShape(h.shapes[0]);for(let T of a){let P=[0,1,2].map(N=>T.vertices.reduce((U,D)=>U+D[N],0)/T.vertices.length);h.addShape(new Ko({vertices:T.vertices.map(N=>pi(ct(N,P))),faces:T.faces}),pi(P))}return h.updateMassProperties(),h.updateBoundingRadius(),h.aabbNeedsUpdate=!0,l=[],t.broadphase.dirty=!0,o}f(e.form,e.size);function p(w,_=!0){let T=r.get(w);if(!T)return!1;let P=Tr(T.door,_);return T.obstacle.body.position.copy(pi(P.position)),T.obstacle.body.quaternion.setFromEuler(...P.rotation,"XYZ"),T.open=!!_,c(T.obstacle),!0}function x(){for(let w of r.keys())p(w,!1);h.position.copy(pi(d)),h.previousPosition.copy(h.position),h.interpolatedPosition.copy(h.position),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion);for(let w of["velocity","angularVelocity","force","torque"])h[w].setZero();h.collisionFilterMask=-1,h.aabbNeedsUpdate=!0,h.wakeUp(),t.accumulator=0,t.time=0,t.stepnumber=0,t.contacts.length=0,t.frictionEquations.length=0,t.collisionMatrix.reset(),t.collisionMatrixPrevious.reset(),t.broadphase.dirty=!0,l=[]}function m(w,_){let T=o.boundingRadius;return s.filter(P=>[0,1,2].every(N=>Math.min(w[N],_[N])-T<=P.max[N]&&Math.max(w[N],_[N])+T>=P.min[N]))}function g(w,_,T){let P=ct(_,w),N=null;for(let U of m(w,_))for(let D of a){let L=WM(D,T,w,P,U);L&&(!N||L.t<N.t)&&(N={...L,body:U.body})}return N}function y(w,_=h.velocity,T=h.quaternion){if(!Number.isFinite(w)||w<0)throw new TypeError("advance requires a non-negative finite timestep");let P=xn(h.position),N=Qn(xn(_),w),U=h.quaternion.clone(),D=new zt(T.x,T.y,T.z,T.w);D.normalize();let L=2*Math.acos(Lr(Math.abs(U.x*D.x+U.y*D.y+U.z*D.z+U.w*D.w),0,1)),F=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(cs(N))/.12)),Math.ceil(L/.012));h.previousPosition.copy(h.position),h.previousQuaternion.copy(U),h.velocity.copy(pi(_)),l=[];let B=P,W=U,X=null;for(let Y=0;Y<F;Y++){let j=mi(P,Qn(N,(Y+1)/F)),te=new zt,me=new zt;if(U.slerp(D,(Y+.5)/F,te),U.slerp(D,(Y+1)/F,me),h.collisionFilterMask!==0&&(X=g(B,j,te),!X)){let pe=g(j,j,me);pe&&(X={...pe,t:0})}if(X){let pe=Math.sqrt(cs(ct(j,B))),Ce=Math.max(0,X.t-(pe>vn?.001/pe:0)),Ze=Pr(B,j,Ce);Ce>0&&(W=te),l.push({from:B,to:Ze,orientation:W}),B=Ze;break}l.push({from:B,to:j,orientation:te}),B=j,W=me}h.position.copy(pi(B)),h.quaternion.copy(W),h.interpolatedPosition.copy(h.position),h.interpolatedQuaternion.copy(h.quaternion),h.aabbNeedsUpdate=!0,t.broadphase.dirty=!0,t.time+=w,t.stepnumber+=F;let H={collided:!!X,body:X?.body??null,normal:X?pi(X.normal):null,steps:F,safePosition:h.position.clone()};return X&&(h.velocity.setZero(),h.dispatchEvent({type:"collide",body:X.body,contact:{bi:h,bj:X.body,ni:pi(X.normal)}})),H}function A(w,_){return w=xn(w),_=xn(_),!s.some(T=>{let P=Zu(w,_,T);return P!==null&&P<1-1e-6})}function b(w,_=h.previousPosition,T=0){let P=xn(w.position??w),N=Math.max(0,Number(w.collectRadius??GM))+Math.max(0,Number(T)||0),U=xn(_),D=l.length&&cs(ct(U,l[0].from))<1e-8?l:[{from:U,to:xn(h.position),orientation:h.quaternion}];for(let L of D){let F=ct(L.to,L.from),B=cs(F),W=Pr(L.from,L.to,B>vn?Lr(Nt(ct(P,L.from),F)/B,0,1):0);if(cs(ct(P,W))>(N+o.boundingRadius)**2)continue;let X=hm(ct(P,L.from),L.orientation),H=hm(ct(P,L.to),L.orientation);for(let Y of a){if((um(X,Y)||um(H,Y))&&A(P,P))return!0;for(let j of Y.triangles){let te=XM(X,H,...j);if(te.distance2>N**2+vn)continue;let me=mi(Pr(L.from,L.to,te.t),Nr(te.point,L.orientation));if(A(me,P))return!0}}}return!1}function M(w,_,T=.18){w=xn(w),_=xn(_);let P=1;for(let L of s){let F=Zu(w,_,L,T);F!==null&&(P=Math.min(P,Math.max(0,F-.015)))}let[N,U,D]=Pr(w,_,P);return{x:N,y:U,z:D}}function S(w){let _=xn(w),T=mi(_,[0,50,0]),P=1/0;for(let N of s){if(!/ceiling|roof|floor|slab/.test(N.kind))continue;let U=Zu(_,T,N);U!==null&&U>vn&&(P=Math.min(P,_[1]+50*U))}return P}return x(),{world:t,plane:h,blocks:n,level:i,reset:x,configureAircraft:f,setDoorOpen:p,advance:y,canCollectStar:b,hasLineOfSight:A,traceCamera:M,getCeilingAt:S,get aircraft(){return o},doorBodies:r}}var YM=new Set(["hall-cloakroom","cloakroom-wc","cloakroom-storage","bedroom","bathroom"]),fm=i=>i.floor==="ug"||i.id.includes("stairs")||YM.has(i.id),Li=structuredClone(gn);Li.collectibles=[];Li.name="Papierduell";Li.doors=Li.doors.map(i=>({...i,duelOpen:!fm(i),signText:fm(i)?"ZU":"OFFEN"}));var pm=Object.freeze(Li.doors.filter(i=>i.duelOpen).map(i=>i.id)),hs=Object.freeze(["p1","p2","p3","p4","p5"]),On=Object.freeze({p1:"#68cdb4",p2:"#e48b7e",p3:"#78b9ef",p4:"#ba9bea",p5:"#e9c25d"}),gC=Object.freeze([Object.freeze({id:"p1",x:-3.8,y:1.5,z:-5.5,heading:1.85}),Object.freeze({id:"p2",x:17.2,y:1.5,z:16,heading:-Math.PI/2+.2}),Object.freeze({id:"p3",x:17.2,y:1.5,z:-5.5,heading:Math.PI-.15}),Object.freeze({id:"p4",x:-3.8,y:1.5,z:16,heading:.12}),Object.freeze({id:"p5",x:7,y:1.5,z:5.6,heading:Math.PI})]),Vc=Object.freeze({minPlayers:2,maxPlayers:5,hp:100,shotDamage:20,shotCooldown:.35,shotSpeed:9,lifetime:2.5,roundSeconds:180,shotRadius:.025,wallDamage:10,wallCooldown:1.25,recoverySeconds:.5,stepSeconds:1/30});function mm({position:i,input:e,heading:t,speed:n,tuning:s,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(e.pitch)>.25&&Math.abs(e.steer)<.35),l=r?e.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-i.x)*2:Math.sin(t)*n,z:a?(r.z-i.z)*2:-Math.cos(t)*n,targetVertical:-s.sinkRate+e.pitch*s.pitchRate+l+(o?1.9:0)}}var Dr=Object.freeze(Dp("classic",1)),Ju=(i,e,t)=>Math.max(e,Math.min(t,i)),$M=i=>({steer:typeof i?.steer=="number"&&Number.isFinite(i.steer)?Ju(i.steer,-1,1):0,pitch:typeof i?.pitch=="number"&&Number.isFinite(i.pitch)?Ju(i.pitch,-1,1):0,fire:i?.fire===!0});function ZM(i,e,t=0){let n=Math.cos(i/2),s=Math.sin(i/2),r=Math.cos(-e/2),o=Math.sin(-e/2),a=Math.cos(t/2),l=Math.sin(t/2);return{x:s*r*a+n*o*l,y:n*o*a-s*r*l,z:n*r*l-s*o*a,w:n*r*a+s*o*l}}function KM(i,e,t,n=Li){let s=$M(e),r=(f,p,x)=>p+(f-p)*Math.exp(-x*t),o={steer:r(i.input?.steer??0,s.steer,9),pitch:r(i.input?.pitch??0,s.pitch,7)},a=Math.atan2(Math.sin(i.heading+o.steer*Dr.turnRate*t),Math.cos(i.heading+o.steer*Dr.turnRate*t)),l=i.position,c=n.thermals?.find(f=>Math.hypot(l.x-f.x,l.z-f.z)<f.r&&l.y>=f.y&&l.y<f.y+f.height),u=mm({position:l,input:o,heading:a,speed:Dr.speed,tuning:Dr,thermal:c,lift:!1}),d=r(i.verticalSpeed??0,u.targetVertical,4),h=ZM(Math.atan2(d,u.ride?Math.max(2,Dr.speed):Dr.speed)*.7,a,-o.steer*.42);return{heading:a,input:o,verticalSpeed:d,quaternion:h,velocity:{x:u.x,y:d,z:u.z}}}function gm(i,e,t){let n=Number.isFinite(t)?Ju(t,0,.1):0,s={...i,position:{...i.position},quaternion:{...i.quaternion},input:{...i.input||{}}};if(i.recovering||i.eliminated||i.hp<=0)return s;for(;n>1e-9;){let r=Math.min(n,Vc.stepSeconds),o=KM(s,e,r);s={...s,...o,position:{x:s.position.x+o.velocity.x*r,y:s.position.y+o.velocity.y*r,z:s.position.z+o.velocity.z*r}},n-=r}return delete s.velocity,s}function xm(i,{traceCamera:e=(a,l)=>l,mode:t="chase",chaseDistance:n=1.45,chaseHeight:s=.62,lookAhead:r=1.3,levelChase:o=!0}={}){let a=i.near,l=new z,c=new z,u=new z,d=new z,h=new Vt,f=new z,p=t==="fpv"?"fpv":"chase",x=!1,m=null,g=.008;function y(S){let w=S==="fpv"?"fpv":"chase";w!==p&&(p=w,x=!1);let _=p==="fpv"?g:a;return i.near!==_&&(i.near=_,i.updateProjectionMatrix()),p}function A(){x=!1,m=null}function b({position:S,quaternion:w,heading:_,length:T=.33,model:P,id:N=P},{dt:U=1/60,immediate:D=!1,ready:L=!1}={}){N!==m&&(x=!1,m=N);let F=Number.isFinite(T)&&T>0?T:.33;if(g=Math.min(.012,F*.025),y(p),h.copy(w).normalize(),p==="fpv"){f.set(0,F*.14,-F*.12).applyQuaternion(h),c.copy(S).add(f),i.position.copy(e(S,c,.015)),i.quaternion.copy(h),x=!0;return}if(i.up.set(0,1,0),l.set(0,0,-1).applyQuaternion(h),o&&(Number.isFinite(_)?l.set(Math.sin(_),0,-Math.cos(_)):(l.y=0,l.normalize())),c.copy(S).addScaledVector(l,L?-.42:-n),L&&(c.x-=1.25),c.y+=L?.95:s,c.copy(e(S,c,.12)),u.copy(S).addScaledVector(l,L?.25:r),u.y+=.08,D||!x)i.position.copy(c),d.copy(u),x=!0;else{let B=1-Math.exp(-Math.max(0,Math.min(.1,U))*9);i.position.lerp(c,B),d.lerp(u,B)}i.position.copy(e(S,i.position,.1)),i.lookAt(d)}function M(){A(),i.near=a,i.updateProjectionMatrix()}return y(p),{setMode:y,update:b,reset:A,dispose:M,get mode(){return p}}}function vm(i){let e=dm(Li,{form:"classic",size:1}),t=Vp(i,e,()=>({width:innerWidth,height:innerHeight}));for(let N of pm)e.setDoorOpen(N,!0),t.setDoorOpen(N,!0);t.sling.visible=!1;let n=Object.fromEntries(hs.map((N,U)=>{let D=U===0?t.plane:t.plane.clone(!0);return D.name=`Papierflieger ${N}`,U&&t.scene.add(D),[N,D]}));for(let[N,U]of Object.entries(n))U.traverse(D=>{D.isMesh&&(D.material=D.material.clone())}),Ho(U,null,On[N]),U.visible=!1;let s=Object.fromEntries(hs.map((N,U)=>[N,U===0?t.effects:Mc(t.scene,{name:`Flugspur ${N}`})])),r=new Map,o=new an;t.scene.add(o);let a=new bo(Vc.shotRadius,8,6),l=Object.fromEntries(hs.map(N=>[N,new $n({color:On[N],emissive:On[N],emissiveIntensity:.8,roughness:.85})])),c=new Map,u=new Map,d=new z,h=new z,f=new Vt,p=xm(t.camera,{traceCamera:e.traceCamera,chaseHeight:.55,lookAhead:2.8,levelChase:!1}),x=Is("classic",1).length,m=document.getElementById("duel-reticle"),g=null,y=performance.now(),A=!1,b=-1,M={},S=0,w=null;function _(){p.reset(),A=!1,u.clear(),M={},w=null;for(let[N,U]of Object.entries(n))U.visible=!1,U.userData.flightCameraVisible=!1,s[N].clear();o.clear(),c.clear()}function T(N,U="p1",D=1/60,L={}){if(D=Math.max(0,Math.min(.05,D)),S+=D,!N&&g&&(g=null,b=-1,_()),N&&N!==g){let Y=N.tick<b,j=performance.now()-y>750;(Y||j)&&_(),b=N.tick,y=performance.now(),g=N;let te=new Set(N.players.map(pe=>pe.id));for(let[pe,Ce]of Object.entries(n))te.has(pe)||(Ce.visible=!1,Ce.userData.flightCameraVisible=!1,s[pe].clear(),u.delete(pe));for(let pe of N.players){let Ce=n[pe.id];if(!Ce)continue;let Q=!u.get(pe.id)||!A||Ce.position.distanceTo(pe.position)>1.5;u.set(pe.id,{player:pe,from:Q?new z().copy(pe.position):Ce.position.clone(),fromQ:Q?new Vt().copy(pe.quaternion):Ce.quaternion.clone()}),Q&&(Ce.position.copy(pe.position),Ce.quaternion.copy(pe.quaternion),s[pe.id].reset(pe.position));let ne=pe.appearance||{},xe=ne.color??null,Ve=ne.effect||"none",Me=`${xe}:${Ve}`;r.get(pe.id)!==Me&&(Ho(Ce,xe,On[pe.id]),s[pe.id].setEffect(Ve),r.set(pe.id,Me)),Ce.visible=Ce.userData.flightCameraVisible=pe.hp>0,pe.hp<=0&&s[pe.id].clear(),M[pe.id]!==void 0&&pe.hp<M[pe.id]&&(Ce.userData.hitUntil=S+.22),M[pe.id]=pe.hp}let me=new Set(N.projectiles.map(pe=>pe.id));for(let[pe,Ce]of c)me.has(pe)||(o.remove(Ce),c.delete(pe));for(let pe of N.projectiles){let Ce=c.get(pe.id);Ce||(Ce=new yt(a,l[pe.owner]||l.p1),Ce.position.copy(pe.position),c.set(pe.id,Ce),o.add(Ce)),Ce.userData.from=Ce.position.clone(),Ce.userData.target=new z().copy(pe.position)}}let F=Math.min(.1,Math.max(0,(performance.now()-y)/1e3)),B=performance.now()-y>750,W=Math.min(1,F/.1);for(let[Y,j]of u){let te=n[Y];if(te.visible=te.userData.flightCameraVisible=j.player.hp>0,Y===U){let me=L.active&&j.player.hp>0&&!j.player.recovering?gm(j.player,L,F):j.player,pe=te.position.distanceTo(me.position)>.6?1:1-Math.exp(-D*28);te.position.lerp(me.position,pe),f.copy(me.quaternion),te.quaternion.slerp(f,pe)}else te.position.lerpVectors(j.from,j.player.position,W),te.quaternion.copy(j.fromQ).slerp(f.copy(j.player.quaternion),W);te.traverse(me=>{me.isMesh&&(me.material.emissive.set(S<(te.userData.hitUntil||0)?"#e24b3b":"#000000"),me.material.emissiveIntensity=.75)}),j.player.hp>0&&!B&&!N?.winner?s[Y].push(te.position):s[Y].clear(),s[Y]!==t.effects&&s[Y].update(D,S)}for(let Y of c.values())Y.position.lerpVectors(Y.userData.from,Y.userData.target,W);let X=u.get(U)?.player.hp>0?U:u.get(w)?.player.hp>0?w:[...u].find(([,Y])=>Y.player.hp>0)?.[0]||U;X!==w&&(p.reset(),w=X,A=!1);let H=n[w];H&&u.has(w)?(e.plane.position.copy(H.position),e.plane.quaternion.copy(H.quaternion),d.set(0,0,-1).applyQuaternion(H.quaternion),p.update({position:H.position,quaternion:H.quaternion,model:H,id:w,length:x},{dt:D,immediate:!A}),A=!0,m&&(t.camera.updateMatrixWorld(),h.copy(H.position).addScaledVector(d,8).project(t.camera),m.style.left=`${(h.x*.5+.5)*100}%`,m.style.top=`${(-h.y*.5+.5)*100}%`)):(p.reset(),t.camera.up.set(0,1,0),t.camera.position.set(9,5.2,-8),t.camera.lookAt(7,.9,0)),t.update(D,S),t.render()}function P(){p.dispose(),Object.values(s).forEach(N=>N.dispose()),a.dispose(),Object.values(l).forEach(N=>N.dispose()),t.dispose()}return{update:T,resize:t.resize,setCameraMode:p.setMode,get cameraMode(){return p.mode},dispose:P}}var jM=250,Qo="stubenflieger.house-profile.v1",Hc=Object.freeze({min:.55,max:1.5,step:.05}),JM=[{id:"upgrade:size",category:"upgrades",name:"Verstellbare Gr\xF6\xDFe",price:1800,description:"55\u2013150 %: Gro\xDF gleitet l\xE4nger, klein kurvt enger und passt durch kleine L\xFCcken. Die Hitbox w\xE4chst mit."},{id:"upgrade:color",category:"colors",name:"Eigene Flugzeugfarbe",price:2e3,description:"Einmal freischalten, danach jede Farbe kostenlos w\xE4hlen. Die Original-Papierfarbe kannst du jederzeit wiederherstellen."},{id:"boost:lift",category:"boosts",name:"Aufwind",price:800,description:"Ein kurzer H\xF6hengewinn. Ein Einsatz in jedem Run."},{id:"boost:turbo",category:"boosts",name:"Turbo",price:1e3,description:"Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run."},{id:"boost:magnet",category:"boosts",name:"Sternmagnet",price:1400,description:"Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run."},{id:"boost:cushion",category:"boosts",name:"Luftpolster",price:1600,description:"F\xE4ngt nach der Aktivierung eine leichte Ber\xFChrung ab. Ein Einsatz in jedem Run."},{id:"plane:classic",category:"planes",name:"Klassiker",price:0,description:"Gerade Fl\xFCgelenden und ausgewogenes Flugverhalten."},{id:"plane:glider",category:"planes",name:"Gleiter",price:1200,description:"Breite, gerundete Fl\xFCgel. L\xE4ngeres Gleiten und gem\xFCtlicheres Tempo."},{id:"plane:dart",category:"planes",name:"Pfeil",price:1800,description:"Spitze Dreiecksform, h\xF6heres Tempo und weitere Kurven."},{id:"plane:stunt",category:"planes",name:"Kunstflieger",price:2500,description:"Gerade, kantige Fl\xFCgel und ein eckiges Leitwerk f\xFCr enge Kurven."},{id:"effect:none",category:"effects",name:"Ohne Effekt",price:0,description:"Die schlichte Papieroptik."},{id:"effect:mint",category:"effects",name:"Minzspur",price:300,description:"Eine dezente t\xFCrkise Flugspur."},{id:"effect:spark",category:"effects",name:"Sternenstaub",price:700,description:"Goldenes Funkeln hinter deinem Flieger."},{id:"effect:confetti",category:"effects",name:"Konfettispur",price:1e3,description:"Eine bunte Spur f\xFCr deinen Hausflug."}],ed=Object.freeze([...JM,...gn.doors.map((i,e)=>({id:`door:${i.id}`,category:"doors",name:i.name||i.id,price:Math.min(4e3,500+e*200),description:"Bei jedem Run von Anfang an offen, solange du gekaufte T\xFCren aktiviert hast."}))].map(Object.freeze)),ea=new Map(ed.map(i=>[i.id,i])),Qu=new Map(gn.rooms.map(i=>[i.id,i.bonusId||i.id]));for(let i of Qu.values())Qu.set(i,i);var QM=gn.startRoomId||gn.startRoom||gn.rooms[0].id,Gc=i=>JSON.parse(JSON.stringify(i));function e1(i={}){if(i.practice===!0)return 0;let e=r=>Number.isInteger(r)&&r>0?r:0,t=Number.isFinite(i.seconds)?Math.min(60,Math.max(0,i.seconds)):0,n=new Set(Array.isArray(i.roomIds)?i.roomIds.map(r=>Qu.get(r)).filter(r=>r&&r!==QM):[]);return(Object.hasOwn(i,"starIds")?Fp(i.starIds):e(i.stars)*150)+e(i.blocks)*100+Math.floor(t*10)+n.size*jM}function bm(){return{version:2,points:0,highscore:0,owned:["plane:classic","effect:none"],equipped:{form:"classic",effect:"none",boosts:[],size:1,color:null},useDoorUnlocks:!0,creditedRuns:[],discoveredStarIds:[]}}function _m(i){if(i===null)return bm();let e;try{e=JSON.parse(i)}catch{throw new Error("Dein gespeichertes Profil ist besch\xE4digt. Es wird nicht \xFCberschrieben.")}if(!e||![1,2].includes(e.version)||!Number.isSafeInteger(e.points)||e.points<0||!Number.isSafeInteger(e.highscore)||e.highscore<0||!Array.isArray(e.owned)||!e.owned.every(c=>typeof c=="string")||!Array.isArray(e.creditedRuns)||!e.creditedRuns.every(c=>typeof c=="string")||!e.equipped||e.version===2&&(!Array.isArray(e.discoveredStarIds)||!e.discoveredStarIds.every(c=>typeof c=="string")))throw new Error("Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht \xFCberschrieben.");let t=[...new Set(["plane:classic","effect:none",...e.owned])],n=e.equipped,s=ea.has(`plane:${n.form}`)&&t.includes(`plane:${n.form}`)?n.form:"classic",r=ea.has(`effect:${n.effect}`)&&t.includes(`effect:${n.effect}`)?n.effect:"none",o=[...new Set(Array.isArray(n.boosts)?n.boosts:[])].filter(c=>ea.has(`boost:${c}`)&&t.includes(`boost:${c}`)).slice(0,2),a=t.includes("upgrade:size")&&Number.isFinite(n.size)?Math.min(Hc.max,Math.max(Hc.min,n.size)):1,l=null;if(t.includes("upgrade:color"))try{l=rs(n.color??null)}catch{}return{version:2,points:e.points,highscore:e.highscore,owned:t,equipped:{form:s,effect:r,boosts:o,size:a,color:l},useDoorUnlocks:e.useDoorUnlocks!==!1,creditedRuns:[...new Set(e.creditedRuns)],discoveredStarIds:e.version===2?[...new Set(e.discoveredStarIds)]:[]}}function ym(i){if(typeof i!="string"||i.length<8||i.length>100)throw new Error("Dieser Run konnte nicht zugeordnet werden.")}function Sm(i){let e=bm(),t=null,n="Speichern im Browser ist gerade nicht m\xF6glich. Punkte und K\xE4ufe wurden nicht ver\xE4ndert. Bitte erlaube Website-Daten und versuche es erneut.";try{i||(i=globalThis.localStorage),e=_m(i.getItem(Qo))}catch(c){t=c.message?.includes("Profil")?c.message:n}function s(){if(!i)throw new Error(n);try{e=_m(i.getItem(Qo)),t=null}catch(c){throw t=c.message?.includes("Profil")?c.message:n,new Error(t)}}function r(c){try{i.setItem(Qo,JSON.stringify(c))}catch{throw t=n,new Error(t)}e=c,t=null}function o(){let{creditedRuns:c,...u}=e;return Gc(u)}function a(c){s();let u=Gc(e);return c(u),r(u),o()}function l(c,u){if(!c.owned.includes(u)||!ea.has(u))throw new Error("Bitte schalte diesen Artikel zuerst frei.")}return{getProfile:o,getStatus:()=>({available:!t,error:t}),refresh:()=>(s(),o()),purchase(c){return a(u=>{let d=ea.get(c);if(!d)throw new Error("Diesen Artikel gibt es nicht.");if(u.owned.includes(c))throw new Error("Dieser Artikel ist bereits dauerhaft freigeschaltet.");if(u.points<d.price)throw new Error("Daf\xFCr fehlen noch Punkte.");u.points-=d.price,u.owned.push(c)})},equipForm(c){return a(u=>{l(u,`plane:${c}`),u.equipped.form=c})},equipEffect(c){return a(u=>{l(u,`effect:${c}`),u.equipped.effect=c})},setColor(c){return c=rs(c),a(u=>{c!==null&&l(u,"upgrade:color"),u.equipped.color=c})},equipBoosts(c){return a(u=>{if(!Array.isArray(c)||c.length>2||new Set(c).size!==c.length)throw new Error("W\xE4hle h\xF6chstens zwei verschiedene Boosts.");c.forEach(d=>l(u,`boost:${d}`)),u.equipped.boosts=[...c]})},setSize(c){return a(u=>{if(l(u,"upgrade:size"),!Number.isFinite(c)||c<Hc.min||c>Hc.max)throw new Error("W\xE4hle eine Gr\xF6\xDFe zwischen 55 und 150 %.");u.equipped.size=Math.round(c*100)/100})},setPermanentDoorsEnabled(c){return a(u=>{u.useDoorUnlocks=!!c})},creditStar(c,u){ym(c);let d=Go(u);s();let h=!e.discoveredStarIds.includes(d.id),f=h?d.basePoints:0;if(h){let p=Gc(e);if(!Number.isSafeInteger(p.points+f))throw new Error("Das Punkteguthaben ist zu gro\xDF.");p.points+=f,p.discoveredStarIds.push(d.id),r(p)}return{starId:d.id,firstDiscovery:h,basePoints:d.basePoints,bonus:f,totalPoints:d.basePoints+f,credited:f,points:e.points,duplicate:!h}},creditRun(c,u){if(ym(c),u?.practice===!0)return{credited:0,points:e.points,score:0,practice:!0};s();let d=e1(u);if(!Number.isSafeInteger(d))throw new Error("Dieses Flugergebnis ist ung\xFCltig.");if(e.creditedRuns.includes(c))return{credited:0,points:e.points,score:d,duplicate:!0};let h=Gc(e);if(!Number.isSafeInteger(h.points+d))throw new Error("Das Punkteguthaben ist zu gro\xDF.");return h.points+=d,h.highscore=Math.max(h.highscore,d),h.creditedRuns.push(c),r(h),{credited:d,points:h.points,score:d,duplicate:!1}}}}var Mm="stubenflieger.duel-appearance.v1",wm=(i,e)=>i?.color===e?.color&&i?.effect===e?.effect;function Em(i){let e=b=>document.getElementById(b),t=Sm(),n=e("duel-appearance"),s=t.getProfile(),r,o,a=!1,l=!1,c="",u=()=>s.owned.includes("upgrade:color");function d(b){let M=null,S="none";try{M=rs(b?.color??null),S=Up(b?.effect??"none")}catch{}return{color:u()?M:null,effect:s.owned.includes(`effect:${S}`)?S:"none"}}try{o=JSON.parse(localStorage.getItem(Mm)||"null")}catch{}r=d(o||s.equipped),o={...r};function h(){e("duel-custom-color").checked=!!r.color,e("duel-color").value=r.color||"#fff1cc",e("duel-color-value").textContent=r.color||"Teamfarbe",e("duel-effect").value=r.effect,e("duel-color-preview").style.backgroundColor=r.color||"#fff1cc"}function f(){try{s=t.refresh()}catch{}let b=s.owned.join("|");if(c!==b){c=b,e("duel-effect").replaceChildren();for(let M of ed.filter(S=>S.category==="effects"&&s.owned.includes(S.id))){let S=document.createElement("option");S.value=M.id.split(":")[1],S.textContent=M.name,e("duel-effect").append(S)}r=d(r),h()}}function p(){r=d({color:e("duel-custom-color").checked?e("duel-color").value:null,effect:e("duel-effect").value}),a=!wm(r,o),h(),y()}let x="entry",m=!1,g=!1;function y(b=x,M=m,S=g){x=b,m=M,g=S;let w=e(x==="lobby"?"lobby-appearance":"entry-appearance");n.parentElement!==w&&w.append(n);let _=g||l||!["entry","lobby"].includes(x)||x==="lobby"&&!m;e("duel-custom-color").disabled=_||!u(),e("duel-color").disabled=_||!u()||!e("duel-custom-color").checked,e("duel-effect").disabled=_,e("apply-appearance").hidden=x!=="lobby",e("apply-appearance").disabled=_||!a,e("appearance-status").textContent=l?"Aussehen wird \xFCbernommen \u2026":u()?a&&x==="lobby"?"\xDCbernimm deine Auswahl, damit alle sie sehen.":"Deine Farbe und dein Effekt sind f\xFCr alle Mitspieler sichtbar.":"Eigene Farben: Farbw\xE4hler f\xFCr 2.000 Punkte im Soloshop freischalten. Gekaufte Effekte sind hier ausw\xE4hlbar."}function A(b){r=d(b),o={...r},a=l=!1;try{localStorage.setItem(Mm,JSON.stringify(r))}catch{}h(),y()}return e("duel-custom-color").addEventListener("change",p),e("duel-color").addEventListener("input",p),e("duel-effect").addEventListener("change",p),e("apply-appearance").onclick=()=>{if(x!=="lobby"||!m||l)return;f();let b=d(r);i(b)&&(l=!0,y())},f(),h(),y(),window.addEventListener("storage",b=>{(b.key===Qo||b.key===null)&&(f(),y())}),document.addEventListener("visibilitychange",()=>{document.hidden||(f(),y())}),{render:y,refresh:f,confirm:A,current(){return f(),d(r)},matches:b=>wm(d(b),r),reject(){l=!1,y()}}}var Am="stubenflieger.camera.v1";function Tm(){try{return localStorage.getItem(Am)==="fpv"?"fpv":"chase"}catch{return"chase"}}function Cm(i){try{localStorage.setItem(Am,i==="fpv"?"fpv":"chase")}catch{}}function td(i,e){i.textContent=e==="fpv"?"FPV":"Au\xDFen",i.setAttribute("aria-pressed",String(e==="fpv")),i.setAttribute("aria-label",e==="fpv"?"Zur Au\xDFenansicht wechseln (V)":"Zur FPV-Ansicht wechseln (V)"),i.title=e==="fpv"?"FPV aktiv \xB7 V: Au\xDFenansicht":"Au\xDFenansicht aktiv \xB7 V: FPV"}var Wc="stubenflieger.duel.v1:",ta=i=>Math.max(-1,Math.min(1,Number.isFinite(i)?i:0));function qc(i){if(typeof i!="string"||!i.startsWith("#"))return null;let e=new URLSearchParams(i.slice(1)).get("room");return typeof e=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)?e.toLowerCase():null}function Rm(i){let e=String(i||"").trim().replace(/\s+/g," ");if(e.length<2||e.length>18||!/^[\p{L}\p{N} _.'-]+$/u.test(e))throw new Error("W\xE4hle einen Namen mit 2\u201318 Buchstaben, Zahlen, Leerzeichen oder . _ -");return e}function Im(i,e={}){let t=(...n)=>n.some(s=>i.has(s));return{steer:ta(Number(t("KeyD","ArrowRight"))-Number(t("KeyA","ArrowLeft"))+(e.steer||0)),pitch:ta(Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))+(e.pitch||0)),fire:t("Space")||e.fire===!0}}function Pm(i,e){let t=qc(`#room=${e}`);if(!t)throw new Error("Diese Einladung ist ung\xFCltig.");return`${new URL(i).origin}/duel#room=${t}`}function Lm(i){let e=Number.isFinite(i)?Math.max(0,Math.ceil(i)):0;return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Xc(i,e,t){let n=i.filter(s=>!s.left);return!!(t&&t===e&&n.length>=2&&n.length<=5&&n.some(s=>s.id===t)&&n.every(s=>s.connected&&s.ready))}function Fr(i,e){return!!(e?.left||e?.eliminated||i?.eliminated||Number.isFinite(i?.hp)&&i.hp<=0)}function Nm(i,e,t){if(i==="draw"||!i)return"Unentschieden.";if(i===t)return"Du hast gewonnen!";let n=e.find(s=>s.id===i);return n?`${n.name} gewinnt.`:"Die Runde ist beendet."}var oe=i=>document.getElementById(i),Pt=(i,e)=>{oe(i).hidden=!e},ha=new Set,wn={steer:0,pitch:0,fire:!1},ra,St=null,zn=null,kt=null,nd="",hd=0,$t=null,He="entry",nn=[],us=null,xi=null,km=180,Vm=3,Zc=null,oa="",Ni=!1,Ns=!1,aa=!1,Bs=!1,ia,id=0,Ur=0,sd=0,la=0,ca=null,ds=null,fs=null,rd,Dm,Fm,Um,od,Yc=new Map,$c=new Set,Bm="entry",na=0,ad=!1,Ds=Tm(),sa=!1,Fs=null,Us=Em(i=>Di({type:"appearance",appearance:i})?(Fs=i,!0):!1);function Gm(){Ds=Ds==="fpv"?"chase":"fpv",Cm(Ds),ra?.setCameraMode(Ds),td(oe("duel-camera-mode"),Ds),["playing","countdown","reconnecting"].includes(He)&&oe("duel-canvas").focus({preventScroll:!0})}oe("duel-camera-mode").onclick=Gm;td(oe("duel-camera-mode"),Ds);var Om={none:"Ohne Effekt",mint:"Minzspur",spark:"Sternenstaub",confetti:"Konfetti"},Hm=new Map,Wm=new Map;function Ft(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}for(let[i,e]of hs.entries()){let t=Ft("div","pilot-card");t.id=`lobby-${e}`,t.style.setProperty("--player-color",On[e]);let n=Ft("div","pilot-identity");n.append(Ft("strong","pilot-name"),Ft("span","host-badge","Gastgeber"));let s=Ft("span","pilot-appearance");s.append(Ft("i","pilot-swatch"),Ft("span","pilot-effect")),n.append(s),t.append(Ft("span","pilot-number",String(i+1).padStart(2,"0")),n,Ft("span","pilot-state")),oe("lobby-players").append(t),Hm.set(e,t);let r=Ft("div","opponent-card");r.id=`health-${e}`,r.style.setProperty("--player-color",On[e]);let o=Ft("div","opponent-heading");o.append(Ft("span","opponent-label"),Ft("strong","opponent-hp"));let a=Ft("div","health-meter");a.setAttribute("role","meter"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100"),a.append(Ft("span")),r.append(o,a,Ft("span","opponent-state")),oe("opponents").append(r),Wm.set(e,r)}function kn(i=""){oe("duel-errors").textContent=i,Pt("duel-errors",!!i)}function qm(i){oe("session-warning").textContent=i,Pt("session-warning",!!i)}function ld(i){clearTimeout(rd),oe("duel-feedback").textContent=He==="playing"?i:"",rd=setTimeout(()=>{oe("duel-feedback").textContent=""},1400)}function ua(){if(!(!St||!zn))try{sessionStorage.setItem(Wc+St,JSON.stringify({token:zn,slot:kt,name:nd,seq:hd}))}catch{qm("Dein Platz kann nach einem Neuladen in diesem Browser verloren gehen. Lass diese Seite w\xE4hrend des Duells ge\xF6ffnet.")}}function t1(i){try{let e=JSON.parse(sessionStorage.getItem(Wc+i)||"null");return e&&typeof e.token=="string"&&typeof e.name=="string"?e:null}catch{return null}}function ud(){try{St&&sessionStorage.removeItem(Wc+St)}catch{}}var tn=()=>$t?.readyState===WebSocket.OPEN;function Di(i){if(!tn())return!1;try{return $t.send(JSON.stringify(i)),!0}catch{return!1}}function ps(){return Fr(xi?.players?.find(i=>i.id===kt),zs())}function da(){return ps()?{steer:0,pitch:0,fire:!1}:Im(ha,wn)}function Xm(i=!1){He!=="playing"||ps()||!tn()||!i&&document.hidden||Di({type:"input",seq:++hd,...i?{steer:0,pitch:0,fire:!1}:da()})}function Os(){clearTimeout(od),ha.clear(),wn.steer=wn.pitch=0,wn.fire=!1;let i=ds,e=fs;ds=fs=null,i!==null&&oe("duel-stick").hasPointerCapture(i)&&oe("duel-stick").releasePointerCapture(i),e!==null&&oe("fire-button").hasPointerCapture(e)&&oe("fire-button").releasePointerCapture(e),oe("duel-stick-knob").style.transform="",oe("fire-button").classList.remove("active"),Xm(!0)}function zs(){return nn.find(i=>i.id===kt)}function cd(){let i=oe("connection-status");if(i.className="connection",!St){i.textContent="F\xFCr 2\u20135 Piloten";return}tn()?(i.classList.add("online"),i.textContent=ca===null?"Verbunden":`Verbunden \xB7 ${ca} ms`):(i.classList.add("lost"),i.textContent=He==="expired"?"Duell beendet":"Verbindung wird aufgebaut \u2026")}function n1(){let i=xi?.players||[],e=(a,l)=>l?.left||l?.eliminated||a?.eliminated?0:Math.max(0,Math.min(100,Math.round(a?.hp??100)));function t(a,l,c){a.setAttribute("aria-label",`${c}: Lebenspunkte`),a.setAttribute("aria-valuenow",l),a.setAttribute("aria-valuetext",`${l} von 100 Lebenspunkten`),a.firstElementChild.style.width=`${l}%`,a.classList.toggle("low",l<=30)}let n=zs(),s=i.find(a=>a.id===kt),r=e(s,n);oe("own-name").textContent=`${n?.name||"Du"} \xB7 DU`,oe("own-hp").textContent=r,oe("own-card").style.setProperty("--player-color",On[kt]||On.p1),oe("own-card").classList.toggle("is-out",Fr(s,n)),t(oe("own-meter"),r,n?.name||"Du");for(let[a,l]of Wm){let c=nn.find(p=>p.id===a),u=i.find(p=>p.id===a);if(l.hidden=a===kt||!c&&!u,l.hidden)continue;let d=e(u,c),h=Fr(u,c),f=c?.name||"Pilot";l.querySelector(".opponent-label").textContent=f,l.querySelector(".opponent-label").title=f,l.querySelector(".opponent-hp").textContent=d,t(l.querySelector(".health-meter"),d,f),l.classList.toggle("is-out",h),l.querySelector(".opponent-state").textContent=c?.left?"Verlassen":h?"Ausgeschieden":c?.connected===!1?"Verbindung fehlt":"Im Flug"}let o=i.filter(a=>!Fr(a,nn.find(l=>l.id===a.id))).length;oe("remaining-pilots").textContent=`${o||(He==="countdown"?nn.filter(a=>!a.left).length:0)} im Flug`,oe("duel-time").textContent=Lm(km)}function i1(){let i=Zc??xi?.winner;return He==="expired"&&oa==="replaced"?{title:"Du fliegst im anderen Fenster.",text:"Dein Platz ist dort aktiv. Spiele dort weiter oder er\xF6ffne hier ein neues Duell."}:He==="expired"?{title:"Dieses Duell ist beendet.",text:"Der Raum ist nicht mehr verf\xFCgbar. Er\xF6ffne ein neues Duell und teile eine frische Einladung."}:{title:Nm(i,nn,kt),text:{timeout:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",time:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",disconnect:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",disconnected:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",leave:"Ein Pilot hat das laufende Duell verlassen.",left:"Ein Pilot hat das laufende Duell verlassen.",forfeit:"Ein Pilot hat das laufende Duell verlassen.",health:"Die letzten Treffer haben die Runde entschieden.",damage:"Die letzten Treffer haben die Runde entschieden.",knockout:"Die letzten Treffer haben die Runde entschieden.",last_alive:"Nur ein Flugzeug ist noch in der Luft. Die Runde ist entschieden.",server_restart:"Das Duell wurde durch einen Neustart unterbrochen und endet unentschieden. Ihr k\xF6nnt gemeinsam eine neue Runde beginnen.",server_error:"Das Duell musste wegen eines Verbindungsfehlers beendet werden und wird als unentschieden gewertet. Ihr k\xF6nnt eine neue Runde versuchen."}[oa||xi?.reason]||"Guter Flug! Mit einer Revanche startet ihr alle wieder mit 100 Lebenspunkten."}}function gi(){let i=ps(),e=["countdown","playing","reconnecting"].includes(He);Pt("duel-entry",He==="entry"),Pt("duel-lobby",He==="lobby"),Pt("duel-result",He==="finished"||He==="expired"),Pt("duel-hud",e),Pt("duel-help",e&&!i),Pt("duel-camera-mode",e),Us.render(He,tn(),Ni),Pt("duel-spectator",e&&i),Pt("duel-countdown",He==="countdown"),Pt("duel-feedback",He==="playing"),He!=="playing"&&(clearTimeout(rd),oe("duel-feedback").textContent=""),Pt("duel-touch",He==="playing"&&tn()&&!i),Pt("duel-reticle",He==="playing"&&tn()&&!i),Pt("leave-duel",!!(St&&zn)),Pt("back-solo",!zn),document.body.classList.toggle("playing",He==="playing"),document.body.classList.toggle("spectating",i&&e),i&&!ad&&(Os(),ld("Du schaust jetzt zu. Die Runde l\xE4uft weiter.")),ad=i,oe("create-duel").disabled=oe("join-duel").disabled=Ni,oe("create-duel").textContent=Ni?"Wird er\xF6ffnet \u2026":"Duell er\xF6ffnen \u2197",oe("join-duel").textContent=Ni?"Du kommst gleich dazu \u2026":"Duell beitreten \u2197",oe("duel-name").disabled=Ni,Pt("create-duel",!St),Pt("join-duel",!!St),Pt("entry-new-duel",!!St),oe("entry-eyebrow").textContent=St?"DU BIST EINGELADEN":"DEIN PRIVATES DUELL",oe("entry-form-title").textContent=St?"Steig mit ein.":"Bereit f\xFCr Gegenwind?",oe("entry-note").textContent=St?"W\xE4hle deinen Namen. Wenn alle bereit sind, startet der Gastgeber eure Runde.":"Ohne Konto. Teile den Link mit bis zu vier Freunden.",St&&(oe("invite-link").value=Pm(location.origin,St));for(let[a,l]of Hm){let c=nn.find(u=>u.id===a&&!u.left);l.querySelector(".pilot-name").textContent=c?.name?c.name+(a===kt?" \xB7 DU":""):"Freier Platz",l.querySelector(".pilot-state").textContent=c?.name?c.connected?c.ready?"Bereit":"Noch nicht bereit":"Verbindung fehlt":"Freunde einladen",l.querySelector(".host-badge").hidden=!c||a!==us,l.classList.toggle("is-empty",!c),l.classList.toggle("is-ready",!!(c?.ready&&c?.connected)),l.querySelector(".pilot-appearance").hidden=!c,l.querySelector(".pilot-swatch").style.backgroundColor=c?.appearance?.color||On[a],l.querySelector(".pilot-effect").textContent=Om[c?.appearance?.effect]||Om.none}let t=nn.filter(a=>!a.left),n=nn.find(a=>a.id===us),s=kt===us;oe("lobby-count").textContent=`${t.length} / 5 Piloten`,oe("lobby-copy").textContent=s?"Lade bis zu vier Freunde ein. Wenn alle bereit sind, bestimmst du als Gastgeber, wann es losgeht.":`${n?.name||"Der Gastgeber"} startet die Runde, wenn mindestens zwei Piloten dabei und alle bereit sind.`;let r=!!zs()?.ready;oe("ready-button").textContent=r?"Doch noch warten":"Ich bin bereit \u2197",oe("ready-button").setAttribute("aria-pressed",String(r)),oe("ready-button").disabled=!tn()||He!=="lobby",oe("ready-button").className=s?"secondary wide":"primary",Pt("start-duel",s),oe("start-duel").textContent=t.length<2?"Auf Mitspieler warten":`Mit ${t.length} Piloten starten \u2197`,oe("start-duel").disabled=!tn()||He!=="lobby"||!Xc(nn,us,kt),oe("start-status").textContent=s?t.length<2?"Zum Start fehlt noch mindestens ein Mitspieler.":Xc(nn,us,kt)?"Alle sind bereit. Du kannst starten oder auf weitere Freunde warten.":"Alle angemeldeten Piloten m\xFCssen verbunden und bereit sein.":r?"Du bist bereit. Der Gastgeber startet eure Runde.":"Markiere dich als bereit, sobald du losfliegen kannst.",oe("countdown-value").textContent=Math.max(1,Math.ceil(Vm)),n1(),cd();let o=He==="reconnecting"||!tn()&&!!zn&&!["expired","entry"].includes(He);if(Pt("duel-network",o),oe("network-title").textContent=tn()?"Ein Pilot ist kurz weg \u2026":"Verbindung wird wiederhergestellt \u2026",oe("network-copy").textContent=tn()?"Bis zu 20 Sekunden bleibt Zeit, zur\xFCckzukommen.":"Dein Platz bleibt kurz reserviert. Lass diese Seite ge\xF6ffnet.",He==="finished"||He==="expired"){let a=i1();oe("duel-result-title").textContent=a.title,oe("duel-result-copy").textContent=a.text,Pt("rematch-button",He!=="expired"),Pt("rematch-status",He!=="expired");let l=nn.filter(u=>u.connected&&!u.left),c=l.filter(u=>u.rematch||u.id===kt&&Bs).length;oe("rematch-button").disabled=Bs||!tn()||l.length<2||!!zs()?.left,oe("rematch-button").textContent=Bs?"Du bist f\xFCr die Revanche bereit":"Revanche \u2197",oe("rematch-status").textContent=l.length<2?"F\xFCr eine Revanche m\xFCssen mindestens zwei Piloten verbunden sein.":`${c} / ${l.length} f\xFCr die Revanche bereit. Danach geht es zur\xFCck in die Lobby; der Gastgeber startet die neue Runde.`,oe("result-score").replaceChildren();for(let u of xi?.players||[]){let d=nn.find(p=>p.id===u.id),h=Ft("div","result-pilot"),f=Ft("strong");h.dataset.playerId=u.id,h.style.setProperty("--player-color",On[u.id]),f.textContent=Math.max(0,Math.round(u.hp)),h.append(Ft("i","player-dot"),Ft("span","result-name",(d?.name||"Pilot")+(u.id===kt?" \xB7 DU":"")),f,Ft("small","result-place",u.id===(Zc??xi?.winner)?"Gewonnen":d?.left?"Verlassen":Fr(u,d)?"Ausgeschieden":"Im Ziel")),oe("result-score").append(h)}}Bm!==He&&(He!=="playing"&&Os(),He==="playing"&&oe("duel-canvas").focus({preventScroll:!0}),He==="lobby"&&oe("ready-button").focus({preventScroll:!0}),He==="finished"&&oe("rematch-button").focus({preventScroll:!0}),He==="expired"&&oe("new-duel").focus({preventScroll:!0}),Bm=He)}async function s1(i,e){let t;try{t=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),signal:AbortSignal.timeout(1e4)})}catch{throw new Error("Die Verbindung klappt gerade nicht. Pr\xFCfe dein Internet und versuche es noch einmal.")}let n=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(n.error||"Dieses Duell ist gerade nicht erreichbar.");throw s.status=t.status,s}return n}async function Ym(i=null){if(Ni)return;try{nd=Rm(i?.name||oe("duel-name").value)}catch(t){kn(t.message),oe("duel-name").focus();return}Ni=!0,kn(),gi();let e=++na;try{let t=await s1(St?`/api/duels/${St}/join`:"/api/duels",{name:nd,...i?{token:i.token}:{appearance:Us.current()}});if(e!==na)return;if(!qc(`#room=${t.room}`)||typeof t.token!="string"||!hs.includes(t.slot))throw new Error("Die Einladung konnte nicht ge\xF6ffnet werden. Bitte versuche es erneut.");St=t.room,zn=t.token,kt=t.slot,hd=Number.isSafeInteger(i?.seq)?i.seq:0,history.replaceState(null,"",`/duel#room=${St}`),ua(),He="lobby",Ns=!1,Ur=0,id=0,nn=[],sa=!1,Fs=null,dd()}catch(t){if(e!==na)return;i&&[401,403,404,410].includes(t.status)&&ud(),kn(t.message)}finally{e===na&&(Ni=!1,gi())}}function r1(i){let e=new Set;for(let t of i.projectiles||[])e.add(t.id),t.owner===kt&&!$c.has(t.id)&&(oe("duel-reticle").classList.add("shot"),clearTimeout(Dm),Dm=setTimeout(()=>oe("duel-reticle").classList.remove("shot"),120));$c=e;for(let t of i.players||[]){let n=Yc.get(t.id);typeof n=="number"&&t.hp<n&&(t.id===kt?(document.body.classList.add("took-hit"),clearTimeout(Um),Um=setTimeout(()=>document.body.classList.remove("took-hit"),180),ld(`Du: \u2212${Math.round(n-t.hp)} Lebenspunkte`)):(oe("duel-reticle").classList.add("hit"),clearTimeout(Fm),Fm=setTimeout(()=>oe("duel-reticle").classList.remove("hit"),180),ld(`${nn.find(s=>s.id===t.id)?.name||"Pilot"}: \u2212${Math.round(n-t.hp)} Lebenspunkte`))),Yc.set(t.id,t.hp)}}function dd(){if(!St||!zn||Ns||aa)return;if(Fs=null,sa=!1,Us.reject(),clearTimeout(ia),$t){let t=$t;$t=null,t.close()}let i=new URL(`/api/duels/${St}/socket`,location.origin);i.protocol=location.protocol==="https:"?"wss:":"ws:",i.searchParams.set("token",zn);let e=new WebSocket(i);$t=e,cd(),e.onopen=()=>{$t===e&&(id=0,Ur=0,sd=la=Date.now(),ca=null,kn(),Di({type:"ping",sentAt:Date.now()}),gi())},e.onmessage=t=>{if($t===e){sd=Date.now();try{let n=JSON.parse(t.data);if(n.type==="welcome"&&hs.includes(n.slot)&&(kt=n.slot,ua()),n.type==="pong"&&(ca=Math.min(9999,Math.max(0,Date.now()-Number(n.sentAt))),cd()),n.type==="error"&&(Fs=null,Us.reject(),kn(typeof n.message=="string"?n.message:"Das hat gerade nicht geklappt.")),n.type!=="state"||!["lobby","countdown","playing","finished","reconnecting","expired"].includes(n.phase))return;la=Date.now(),He=n.phase,nn=Array.isArray(n.players)?n.players:[],us=n.hostId||null;let s=zs()?.appearance;s&&(!sa||Fs&&Us.matches(s))&&(Us.confirm(s),sa=!0,Fs=null),Vm=Number(n.countdown)||3,km=Number.isFinite(n.remaining)?n.remaining:180,Zc=n.winner??n.snapshot?.winner??null,oa=n.reason||n.snapshot?.reason||"",(He==="lobby"||He==="countdown")&&(Bs=!1,Yc.clear(),$c.clear()),He==="finished"&&(Bs=!!zs()?.rematch),n.snapshot?(r1(n.snapshot),xi=n.snapshot):(He==="lobby"||He==="countdown")&&(xi=null),He==="expired"&&(Ns=!0,e.close(1e3,"expired")),gi()}catch{kn("Ein Spielstand konnte nicht gelesen werden. Die Verbindung wird weiter gepr\xFCft.")}}},e.onerror=()=>{$t===e&&(oe("connection-status").textContent="Verbindung unterbrochen")},e.onclose=t=>{if($t!==e)return;if($t=null,Os(),t.code===4009||["In einem anderen Fenster verbunden.","Verbindung ersetzt."].includes(t.reason)){Ns=!0,clearTimeout(ia),ud(),zn=null,He="expired",oa="replaced",gi();return}if(gi(),Ns||aa||!zn||He==="expired")return;if(Ur||(Ur=Date.now()+2e4),Date.now()>=Ur){He="expired",Ns=!0,kn("Die Verbindung kam nicht rechtzeitig zur\xFCck. Du kannst ein neues Duell er\xF6ffnen."),gi();return}let n=Math.min(3e3,400*2**id++);ia=setTimeout(dd,Math.min(n,Math.max(0,Ur-Date.now())))}}function fd({notify:i=!0,forget:e=!0}={}){if(na++,Ni=!1,Ns=!0,clearTimeout(ia),Os(),i&&Di({type:"leave"}),e&&ud(),$t){let t=$t;$t=null,t.close(1e3,"leave")}zn=kt=us=null,nn=[],xi=null,He="entry",ca=null,ad=!1,Zc=null,oa="",Yc.clear(),$c.clear(),Bs=!1,Fs=null,sa=!1,Us.reject()}function pd(){fd(),St=null,history.replaceState(null,"","/duel"),kn(),qm(""),gi(),oe("duel-name").focus()}async function $m(){if(St=qc(location.hash),gi(),location.hash&&!St&&kn("Diese Einladung ist nicht g\xFCltig. Du kannst hier ein neues Duell er\xF6ffnen."),St){let i=t1(St);i&&(oe("duel-name").value=i.name,await Ym(i))}}oe("duel-name-form").addEventListener("submit",i=>{i.preventDefault(),Ym()});oe("ready-button").onclick=()=>{kn(),Di({type:"ready",ready:!zs()?.ready})};oe("start-duel").onclick=()=>{Xc(nn,us,kt)&&(kn(),Di({type:"start"}))};oe("rematch-button").onclick=()=>{Di({type:"rematch"})&&(Bs=!0,gi())};oe("leave-duel").onclick=pd;oe("new-duel").onclick=pd;oe("entry-new-duel").onclick=pd;for(let i of["solo-link","back-solo","result-solo"])oe(i).addEventListener("click",()=>fd());oe("copy-invite").onclick=async()=>{let i=oe("invite-link");try{await navigator.clipboard.writeText(i.value),oe("invite-status").textContent="Einladung kopiert. Schick sie bis zu vier Freunden."}catch{i.focus(),i.select(),i.setSelectionRange(0,i.value.length),oe("invite-status").textContent="Der Link ist markiert. Kopiere ihn \xFCber das Men\xFC deines Browsers."}};Pt("share-invite",typeof navigator.share=="function");oe("share-invite").onclick=async()=>{try{await navigator.share({title:"Stubenflieger \xB7 Unser Duell",text:"Flieg mit mir ein Papierflieger-Duell!",url:oe("invite-link").value})}catch(i){i.name!=="AbortError"&&(oe("invite-link").focus(),oe("invite-link").select(),oe("invite-status").textContent="Teilen ist gerade nicht m\xF6glich. Kopiere den markierten Link.")}};document.addEventListener("keydown",i=>{if(!(i.defaultPrevented||i.ctrlKey||i.altKey||i.metaKey||i.isComposing)){if(i.code==="KeyV"&&["playing","countdown","reconnecting"].includes(He)&&!i.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])')){i.preventDefault(),i.repeat||Gm();return}He!=="playing"||ps()||!tn()||i.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"]),a,button:not(#fire-button)')||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&(i.preventDefault(),ha.add(i.code),oe("fire-button").classList.toggle("active",da().fire))}});document.addEventListener("keyup",i=>{ha.delete(i.code),oe("fire-button").classList.toggle("active",da().fire)});window.addEventListener("blur",Os);document.addEventListener("visibilitychange",()=>{Os(),ua(),!document.hidden&&tn()&&Di({type:"ping",sentAt:Date.now()})});function Zm(i){if(i.pointerId!==ds)return;let e=oe("duel-stick").getBoundingClientRect(),t=e.width/2-22,n=(i.clientX-e.left-e.width/2)/t,s=(i.clientY-e.top-e.height/2)/t,r=Math.max(1,Math.hypot(n,s));wn.steer=ta(n/r),wn.pitch=ta(-s/r),oe("duel-stick-knob").style.transform=`translate(${wn.steer*t}px, ${-wn.pitch*t}px)`}oe("duel-stick").addEventListener("pointerdown",i=>{He!=="playing"||ps()||ds!==null||i.pointerType==="mouse"&&i.button!==0||(i.preventDefault(),ds=i.pointerId,oe("duel-stick").setPointerCapture(ds),Zm(i))});oe("duel-stick").addEventListener("pointermove",Zm);for(let i of["pointerup","pointercancel","lostpointercapture"])oe("duel-stick").addEventListener(i,e=>{e.pointerId===ds&&(ds=null,wn.steer=wn.pitch=0,oe("duel-stick-knob").style.transform="")});oe("fire-button").addEventListener("pointerdown",i=>{He!=="playing"||ps()||fs!==null||i.pointerType==="mouse"&&i.button!==0||(i.preventDefault(),fs=i.pointerId,oe("fire-button").setPointerCapture(fs),wn.fire=!0,oe("fire-button").classList.add("active"))});oe("fire-button").addEventListener("click",i=>{i.detail!==0||He!=="playing"||ps()||(wn.fire=!0,oe("fire-button").classList.add("active"),clearTimeout(od),od=setTimeout(()=>{fs===null&&(wn.fire=!1),oe("fire-button").classList.toggle("active",da().fire)},120))});for(let i of["pointerup","pointercancel","lostpointercapture"])oe("fire-button").addEventListener(i,e=>{e.pointerId===fs&&(fs=null,wn.fire=!1,oe("fire-button").classList.toggle("active",ha.has("Space")))});window.addEventListener("hashchange",()=>{fd(),St=null,$m()});window.addEventListener("pagehide",()=>{if(Os(),ua(),aa=!0,clearTimeout(ia),$t){let i=$t;$t=null,i.close(1e3,"pagehide")}});window.addEventListener("pageshow",i=>{i.persisted&&(aa=!1,St&&zn&&dd())});window.addEventListener("resize",()=>ra?.resize());setInterval(()=>Xm(),50);setInterval(()=>{aa||!tn()||(Di({type:"ping",sentAt:Date.now()}),ua(),!document.hidden&&(Date.now()-sd>15e3||He==="playing"&&Date.now()-la>1e4)&&$t.close(4e3,"stale"))},5e3);var zm=performance.now();function Km(i){let e=Math.min(.1,Math.max(0,(i-zm)/1e3));zm=i;let t=He==="playing"&&!ps()&&tn()&&!document.hidden&&Date.now()-la<1500;if(He==="playing"&&tn()){let n=Date.now()-la>=1500;Pt("duel-network",n),n&&(oe("network-title").textContent="Der Spielstand kommt gerade nicht an \u2026",oe("network-copy").textContent="Wir pr\xFCfen die Verbindung. Dein Flug geht weiter, sobald die Daten wieder da sind.")}ra?.update(xi,kt,e,{...da(),active:t}),requestAnimationFrame(Km)}try{ra=vm(oe("duel-canvas")),ra.setCameraMode(Ds),requestAnimationFrame(Km),$m()}catch{kn("Die 3D-Ansicht konnte nicht starten. Lade die Seite in einem aktuellen Browser neu."),oe("create-duel").disabled=oe("join-duel").disabled=!0}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
