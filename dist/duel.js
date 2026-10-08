var af=0,kh=1,lf=2;var Ts=1,cf=2,yr=3,ji=0,pn=1,Dn=2,li=0,vr=1,Vh=2,Gh=3,Hh=4,hf=5;var Cs=100,uf=101,df=102,ff=103,pf=104,mf=200,gf=201,xf=202,yf=203,Wh=204,qh=205,vf=206,_f=207,bf=208,Sf=209,Mf=210,wf=211,Ef=212,Af=213,Tf=214,Wa=0,qa=1,Xa=2,sr=3,Ya=4,$a=5,Za=6,ja=7,Xh=0,Cf=1,Rf=2,Zn=0,Yh=1,$h=2,Zh=3,Io=4,jh=5,Kh=6,Jh=7;var Qh=300,Ki=301,Rs=302,Tl=303,Cl=304,Po=306,rr=1e3,si=1001,Ka=1002,Yt=1003,If=1004;var Lo=1005;var Kt=1006,Rl=1007;var Ji=1008;var bn=1009,eu=1010,tu=1011,_r=1012,Il=1013,jn=1014,Fn=1015,Kn=1016,Pl=1017,Ll=1018,br=1020,nu=35902,iu=35899,su=1021,ru=1022,Un=1023,ri=1026,Qi=1027,Nl=1028,Dl=1029,es=1030,Fl=1031;var Ul=1033,No=33776,Do=33777,Fo=33778,Uo=33779,Bl=35840,Ol=35841,zl=35842,kl=35843,Vl=36196,Gl=37492,Hl=37496,Wl=37488,ql=37489,Bo=37490,Xl=37491,Yl=37808,$l=37809,Zl=37810,jl=37811,Kl=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,Oo=36285,dc=36286;var jr=2300,Ja=2301,Ga=2302,Ch=2303,Rh=2400,Ih=2401,Ph=2402;var Pf=3200;var fc=0,Lf=1,Ti="",Zt="srgb",Kr="srgb-linear",Jr="linear",ft="srgb";var Ha=7680;var Nf=519,Df=512,Ff=513,Uf=514,pc=515,Bf=516,Of=517,mc=518,zf=519,kf=35044;var ou="300 es",Xn=2e3,or=2001;function pg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=Qr("canvas");return i.style.display="block",i}var Rd={},ar=null;function au(...i){let e="THREE."+i.shift();ar?ar("log",e,...i):console.log(e,...i)}function Gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Gf(i);let e="THREE."+i.shift();if(ar)ar("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Gf(i);let e="THREE."+i.shift();if(ar)ar("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ms(...i){let e=i.join(" ");e in Rd||(Rd[e]=!0,$e(...i))}function Hf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wf={[Wa]:qa,[Xa]:Za,[Ya]:ja,[sr]:$a,[qa]:Wa,[Za]:Xa,[ja]:Ya,[$a]:sr},oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var th=Math.PI/180,Qa=180/Math.PI;function Sr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function gg(i,e){return(i%e+e)%e}function nh(i,e,t){return(1-t)*i+t*e}function zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var we=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ih=new z,Id=new Vt,Je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],E=s[4],b=s[7],M=s[2],S=s[5],w=s[8];return r[0]=o*x+a*v+l*M,r[3]=o*m+a*E+l*S,r[6]=o*g+a*b+l*w,r[1]=c*x+u*v+d*M,r[4]=c*m+u*E+d*S,r[7]=c*g+u*b+d*w,r[2]=h*x+f*v+p*M,r[5]=h*m+f*E+p*S,r[8]=h*g+f*b+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sh=new Je,Pd=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xg(){let i={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kr]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var ot=xg();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=Qr("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yg=0,lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rh(s[o].image)):r.push(rh(s[o]))}else r=rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var vg=0,oh=new z,dn=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=Kt,o=Ji,a=Un,l=bn,c=i.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Sr(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Qh;dn.DEFAULT_ANISOTROPY=1;var It=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(f+1)/2,M=(g+1)/2,S=(u+h)/4,w=(d+x)/4,y=(p+m)/4;return E>b&&E>M?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=w/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},eo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,bg)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),ki.crossVectors(n,En),ki.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ki.crossVectors(n,En)),ki.normalize(),ya.crossVectors(En,ki),s[0]=ki.x,s[4]=ya.x,s[8]=En.x,s[1]=ki.y,s[5]=ya.y,s[9]=En.y,s[2]=ki.z,s[6]=ya.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],E=n[7],b=n[11],M=n[15],S=s[0],w=s[4],y=s[8],T=s[12],L=s[1],D=s[5],U=s[9],N=s[13],I=s[2],F=s[6],B=s[10],W=s[14],q=s[3],H=s[7],Y=s[11],$=s[15];return r[0]=o*S+a*L+l*I+c*q,r[4]=o*w+a*D+l*F+c*H,r[8]=o*y+a*U+l*B+c*Y,r[12]=o*T+a*N+l*W+c*$,r[1]=u*S+d*L+h*I+f*q,r[5]=u*w+d*D+h*F+f*H,r[9]=u*y+d*U+h*B+f*Y,r[13]=u*T+d*N+h*W+f*$,r[2]=p*S+x*L+m*I+g*q,r[6]=p*w+x*D+m*F+g*H,r[10]=p*y+x*U+m*B+g*Y,r[14]=p*T+x*N+m*W+g*$,r[3]=v*S+E*L+b*I+M*q,r[7]=v*w+E*D+b*F+M*H,r[11]=v*y+E*U+b*B+M*Y,r[15]=v*T+E*N+b*W+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*f-c*h,E=a*f-c*d,b=a*h-l*d,M=o*f-c*u,S=o*h-l*u,w=o*d-a*u;return t*(x*v-m*E+g*b)-n*(p*v-m*M+g*S)+s*(p*E-x*M+g*w)-r*(p*b-x*S+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,E=t*l-s*o,b=t*c-r*o,M=n*l-s*a,S=n*c-r*a,w=s*c-r*l,y=u*x-d*p,T=u*m-h*p,L=u*g-f*p,D=d*m-h*x,U=d*g-f*x,N=h*g-f*m,I=v*N-E*U+b*D+M*L-S*T+w*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(a*N-l*U+c*D)*F,e[1]=(s*U-n*N-r*D)*F,e[2]=(x*w-m*S+g*M)*F,e[3]=(h*S-d*w-f*M)*F,e[4]=(l*L-o*N-c*T)*F,e[5]=(t*N-s*L+r*T)*F,e[6]=(m*b-p*w-g*E)*F,e[7]=(u*w-h*b+f*E)*F,e[8]=(o*U-a*L+c*y)*F,e[9]=(n*L-t*U-r*y)*F,e[10]=(p*S-x*b+g*v)*F,e[11]=(d*b-u*S-f*v)*F,e[12]=(a*T-o*D-l*y)*F,e[13]=(t*D-n*T+s*y)*F,e[14]=(x*E-p*M-m*v)*F,e[15]=(u*M-d*E+h*v)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,v=l*c,E=l*u,b=l*d,M=n.x,S=n.y,w=n.z;return s[0]=(1-(x+g))*M,s[1]=(f+b)*M,s[2]=(p-E)*M,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(h+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+E)*w,s[9]=(m-v)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===or)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===or)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new z,Gn=new lt,_g=new z(0,0,0),bg=new z(1,1,1),ki=new z,ya=new z,En=new z,Nd=new lt,Dd=new Vt,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Fd=new z,qs=new Vt,vi=new lt,va=new z,kr=new z,Mg=new z,wg=new Vt,Ud=new z(1,0,0),Bd=new z(0,1,0),Od=new z(0,0,1),zd={type:"added"},Eg={type:"removed"},Xs={type:"childadded",child:null},ah={type:"childremoved",child:null},Jt=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new fn,n=new Vt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(kr,va,this.up):vi.lookAt(va,kr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(vi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=gg(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lh(o,r,e+1/3),this.g=lh(o,r,e),this.b=lh(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ot.workingToColorSpace(on.copy(this),e),Math.round(rt(on.r*255,0,255))*65536+Math.round(rt(on.g*255,0,255))*256+Math.round(rt(on.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Zt){ot.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(_a);let n=nh(Vi.h,_a.h,t),s=nh(Vi.s,_a.s,t),r=nh(Vi.l,_a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Qe;Qe.NAMES=qf;var no=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},io=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new z,_i=new z,ch=new z,bi=new z,Ys=new z,$s=new z,kd=new z,hh=new z,uh=new z,dh=new z,fh=new It,ph=new It,mh=new It,qi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),_i.subVectors(n,t),ch.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(_i),l=Hn.dot(ch),c=_i.dot(_i),u=_i.dot(ch),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fh,r.x),o.addScaledVector(ph,r.y),o.addScaledVector(mh,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),_i.subVectors(e,t),Hn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),$s.subVectors(r,n),hh.subVectors(e,n);let l=Ys.dot(hh),c=$s.dot(hh);if(l<=0&&c<=0)return t.copy(n);uh.subVectors(e,s);let u=Ys.dot(uh),d=$s.dot(uh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ys,o);dh.subVectors(e,r);let f=Ys.dot(dh),p=$s.dot(dh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector($s,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return kd.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(kd,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(n).addScaledVector(Ys,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Sa.subVectors(this.max,Vr),Zs.subVectors(e.a,Vr),js.subVectors(e.b,Vr),Ks.subVectors(e.c,Vr),Gi.subVectors(js,Zs),Hi.subVectors(Ks,js),ys.subVectors(Zs,Ks);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-ys.z,ys.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,ys.z,0,-ys.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-ys.y,ys.x,0];return!gh(t,Zs,js,Ks,Sa)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,Zs,js,Ks,Sa))?!1:(Ma.crossVectors(Gi,Hi),t=[Ma.x,Ma.y,Ma.z],gh(t,Zs,js,Ks,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,ba=new ai,Zs=new z,js=new z,Ks=new z,Gi=new z,Hi=new z,ys=new z,Vr=new z,Sa=new z,Ma=new z,vs=new z;function gh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vs.fromArray(i,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Bt=new z,wa=new we,Tg=0,un=class extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kf,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),s=vn(s,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var so=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vt=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cg=new ai,Gr=new z,xh=new z,Ei=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(xh)),this.expandByPoint(Gr.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,Nn=new lt,yh=new Jt,Js=new z,An=new ai,Hr=new ai,Xt=new z,Ot=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?ro:so)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(An.min,Hr.min),An.expandByPoint(Xt),Xt.addVectors(An.max,Hr.max),An.expandByPoint(Xt)):(An.expandByPoint(Hr.min),An.expandByPoint(Hr.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),Xt.add(Js)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new z,l[y]=new z;let c=new z,u=new z,d=new z,h=new we,f=new we,p=new we,x=new z,m=new z;function g(y,T,L){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,L),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,L),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[y].add(x),a[T].add(x),a[L].add(x),l[y].add(m),l[T].add(m),l[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,T=v.length;y<T;++y){let L=v[y],D=L.start,U=L.count;for(let N=D,I=D+U;N<I;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new z,b=new z,M=new z,S=new z;function w(y){M.fromBufferAttribute(s,y),S.copy(M);let T=a[y];E.copy(T),E.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(S,T);let D=b.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,D)}for(let y=0,T=v.length;y<T;++y){let L=v[y],D=L.start,U=L.count;for(let N=D,I=D+U;N<I;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new un(h,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vh=new z,Ig=new z,Pg=new Je,qn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vh.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(vh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pg.getNormalMatrix(e),s=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lg=0,Ai=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=vr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Mi=new z,_h=new z,Ea=new z,Aa=new z,oo=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_h.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Aa.copy(this.origin).sub(_h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=Aa.dot(this.direction),l=-Aa.dot(Ea),c=Aa.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_h).addScaledVector(Ea,h),f}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,b=Math.abs(l),M=Math.abs(c),S=Math.abs(u),w,y,T,L,D,U,N,I,F,B,W,q;if(b>=M&&b>=S?(T=l,U=d,F=p,q=g,l>=0?(w=c,y=u,L=h,D=f,N=x,I=m,B=v,W=E):(w=u,y=c,L=f,D=h,N=m,I=x,B=E,W=v)):M>=S?(T=c,U=h,F=x,q=v,c>=0?(w=u,y=l,L=f,D=d,N=m,I=p,B=E,W=g):(w=l,y=u,L=d,D=f,N=p,I=m,B=g,W=E)):(T=u,U=f,F=m,q=E,u>=0?(w=l,y=c,L=d,D=h,N=p,I=x,B=g,W=v):(w=c,y=l,L=h,D=d,N=x,I=p,B=v,W=g)),T===0)return null;let H=w/T,Y=y/T,$=1/T,ee=L-H*U,de=D-Y*U,Ue=N-H*F,fe=I-Y*F,Ce=B-H*q,Q=W-Y*q,se=Ce*fe-Q*Ue,xe=ee*Q-de*Ce,Ve=Ue*de-fe*ee;if(s){if(se<0||xe<0||Ve<0)return null}else if((se<0||xe<0||Ve<0)&&(se>0||xe>0||Ve>0))return null;let _e=se+xe+Ve;if(_e===0)return null;let ae=$*(se*U+xe*F+Ve*q);return(_e>0?ae<0:ae>0)?null:this.at(ae/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vd=new lt,_s=new oo,Ta=new Ei,Gd=new z,Ca=new z,Ra=new z,Ia=new z,bh=new z,Pa=new z,Hd=new z,La=new z,_t=class extends Jt{constructor(e=new Ot,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(bh.fromBufferAttribute(d,e),o?Pa.addScaledVector(bh,u):Pa.addScaledVector(bh.sub(t),u))}t.add(Pa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Ta.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ta,Gd)===null||_s.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,M=E;b<M;b+=3){let S=a.getX(b),w=a.getX(b+1),y=a.getX(b+2);s=Na(this,g,e,n,c,u,d,S,w,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=Na(this,o,e,n,c,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,M=E;b<M;b+=3){let S=b,w=b+1,y=b+2;s=Na(this,g,e,n,c,u,d,S,w,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,E=m+1,b=m+2;s=Na(this,o,e,n,c,u,d,v,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ng(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;La.copy(a),La.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:i}}function Na(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ca),i.getVertexPosition(l,Ra),i.getVertexPosition(c,Ia);let u=Ng(i,e,t,n,Ca,Ra,Ia,Hd);if(u){let d=new z;qi.getBarycoord(Hd,Ca,Ra,Ia,d),s&&(u.uv=qi.getInterpolatedAttribute(s,a,l,c,d,new we)),r&&(u.uv1=qi.getInterpolatedAttribute(r,a,l,c,d,new we)),o&&(u.normal=qi.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};qi.getNormal(Ca,Ra,Ia,h.normal),u.face=h,u.barycoord=d}return u}var ao=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Yt,u=Yt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lo=class extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new lt,Wd=new lt,Da=[],qd=new ai,Dg=new lt,Wr=new _t,qr=new Ei,ws=class extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),qd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),qr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Wd.multiplyMatrices(n,Qs),Wr.matrixWorld=Wd,Wr.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ao(new Float32Array(s*this.count),s,this.count,Nl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Ei,Fg=new we(.5,.5),Fa=new z,hr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],E=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,g-p,M-v).normalize(),s[1].setComponents(c+o,f+u,g+p,M+v).normalize(),s[2].setComponents(c+a,f+d,g+x,M+E).normalize(),s[3].setComponents(c-a,f-d,g-x,M-E).normalize(),n)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,g-m,M-b).normalize();else if(s[4].setComponents(c-l,f-h,g-m,M-b).normalize(),t===Xn)s[5].setComponents(c+l,f+h,g+m,M+b).normalize();else if(t===or)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);let t=Fg.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new z,sl=new z,Xd=new lt,Xr=new oo,Ua=new Ei,Sh=new z,Yd=new z,co=class extends Jt{constructor(e=new Ot,t=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new vt(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;Xd.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),v=u.getX(x+1),E=Ba(this,e,Xr,l,g,v,x);E&&t.push(E)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=Ba(this,e,Xr,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Ba(this,e,Xr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ba(this,e,Xr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ba(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(il.fromBufferAttribute(a,s),sl.fromBufferAttribute(a,r),t.distanceSqToSegment(il,sl,Sh,Yd)>n)return;Sh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sh);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ho=class extends dn{constructor(e=[],t=Ki,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dr=class extends dn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends dn{constructor(e,t,n=jn,s,r,o,a=Yt,l=Yt,c,u=ri,d=1){if(u!==ri&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rl=class extends Xi{constructor(e,t=jn,n=Ki,s,r,o=Yt,a=Yt,l,c=ri){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2));function p(x,m,g,v,E,b,M,S,w,y,T){let L=b/w,D=M/y,U=b/2,N=M/2,I=S/2,F=w+1,B=y+1,W=0,q=0,H=new z;for(let Y=0;Y<B;Y++){let $=Y*D-N;for(let ee=0;ee<F;ee++){let de=ee*L-U;H[x]=de*v,H[m]=$*E,H[g]=I,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),d.push(ee/w),d.push(1-Y/y),W+=1}}for(let Y=0;Y<y;Y++)for(let $=0;$<w;$++){let ee=h+$+F*Y,de=h+$+F*(Y+1),Ue=h+($+1)+F*(Y+1),fe=h+($+1)+F*Y;l.push(ee,de,fe),l.push(de,Ue,fe),q+=6}a.addGroup(f,q,T),f+=q,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new lt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ol=class extends fr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $d=new z,Zd=new z,Mh=new lu,wh=new lu,Eh=new lu,al=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Zd.subVectors(s[0],s[1]).add(s[0]),c=Zd);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:($d.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$d),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Mh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),wh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),Eh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),wh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Eh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Mh.calc(l),wh.calc(l),Eh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ug(i,e){let t=1-i;return t*t*e}function Bg(i,e){return 2*(1-i)*i*e}function Og(i,e){return i*i*e}function $r(i,e,t,n){return Ug(i,e)+Bg(i,t)+Og(i,n)}function zg(i,e){let t=1-i;return t*t*t*e}function kg(i,e){let t=1-i;return 3*t*t*i*e}function Vg(i,e){return 3*(1-i)*i*i*e}function Gg(i,e){return i*i*i*e}function Zr(i,e,t,n,s){return zg(i,e)+kg(i,t)+Vg(i,n)+Gg(i,s)}var fo=class extends Cn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends Cn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y),Zr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends Cn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Cn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Cn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Cn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($r(e,s.x,r.x,o.x),$r(e,s.y,r.y,o.y),$r(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(jd(a,l.x,c.x,u.x,d.x),jd(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:ol,CatmullRomCurve3:al,CubicBezierCurve:fo,CubicBezierCurve3:ll,EllipseCurve:fr,LineCurve:po,LineCurve3:cl,QuadraticBezierCurve:mo,QuadraticBezierCurve3:hl,SplineCurve:go}),ul=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lh[s.type]().fromJSON(s))}return this}},xo=class extends ul{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new po(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new mo(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new fo(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new fr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pr=class extends xo{constructor(e){super(e),this.uuid=Sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new xo().fromJSON(s))}return this}};function Hg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Xf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=$g(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return yo(r,o,t,a,l,c,0),o}function Xf(i,e,t,n,s){let r;if(s===r0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Kd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Kd(o/n|0,i[o],i[o+1],r);return r&&mr(r,r.next)&&(_o(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Qg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qg(i,n,s,r):Wg(i)){e.push(l.i,i.i,c.i),_o(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xg(Es(i),e),yo(i,e,t,n,s,r,2)):o===2&&Yg(i,e,t,n,s,r):yo(Es(i),e,t,n,s,r,1);break}}}function Wg(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Yr(s,a,r,l,o,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Nh(f,p,e,t,n),v=Nh(x,m,e,t,n),E=i.prevZ,b=i.nextZ;for(;E&&E.z>=g&&b&&b.z<=v;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Yr(a,u,l,d,c,h,E.x,E.y)&&Lt(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Yr(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Yr(a,u,l,d,c,h,E.x,E.y)&&Lt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Yr(a,u,l,d,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Xg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!mr(n,s)&&$f(n,t,t.next,s)&&vo(n,s)&&vo(s,n)&&(e.push(n.i,t.i,s.i),_o(t),_o(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function Yg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n0(o,a)){let l=Zf(o,a);o=Es(o,o.next),l=Es(l,l.next),yo(o,e,t,n,s,r,0),yo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $g(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Xf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(t0(c))}s.sort(Zg);for(let r=0;r<s.length;r++)t=jg(s[r],t);return t}function Zg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function jg(i,e){let t=Kg(i,e);if(!t)return e;let n=Zf(t,i);return Es(n,n.next),Es(t,t.next)}function Kg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(mr(i,t))return t;do{if(mr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Yf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);vo(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Jg(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Jg(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function Qg(i,e,t,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,e0(s)}function e0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function t0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Yr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Yf(i,e,t,n,s,r,o,a)}function n0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!i0(i,e)&&(vo(i,e)&&vo(e,i)&&s0(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||mr(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mr(i,e){return i.x===e.x&&i.y===e.y}function $f(i,e,t,n){let s=za(Lt(i,e,t)),r=za(Lt(i,e,n)),o=za(Lt(t,n,i)),a=za(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||o===0&&Oa(t,i,n)||a===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function za(i){return i>0?1:i<0?-1:0}function i0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$f(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vo(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function s0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zf(i,e){let t=Dh(i.i,i.x,i.y),n=Dh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kd(i,e,t,n){let s=Dh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function r0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fh=class{static triangulate(e,t,n=2){return Hg(e,t,n)}},Ss=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jd(e),Qd(n,e);let o=e.length;t.forEach(Jd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Qd(n,t[l]);let a=Fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var bo=class i extends Ot{constructor(e=new pr([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:o0,E,b=!1,M,S,w,y;if(g){E=g.getSpacedPoints(u),b=!0,h=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,ie),S=new z,w=new z,y=new z}h||(m=0,f=0,p=0,x=0);let T=a.extractPoints(c),L=T.shape,D=T.holes;if(!Ss.isClockWise(L)){L=L.reverse();for(let ie=0,le=D.length;ie<le;ie++){let pe=D[ie];Ss.isClockWise(pe)&&(D[ie]=pe.reverse())}}function N(ie){let pe=10000000000000001e-36,ue=ie[0];for(let ye=1;ye<=ie.length;ye++){let qe=ye%ie.length,ze=ie[qe],Ze=ze.x-ue.x,Ke=ze.y-ue.y,P=Ze*Ze+Ke*Ke,he=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ue.x),Math.abs(ue.y)),Z=pe*he*he;if(P<=Z){ie.splice(qe,1),ye--;continue}ue=ze}}N(L),D.forEach(N);let I=D.length,F=L;for(let ie=0;ie<I;ie++){let le=D[ie];L=L.concat(le)}function B(ie,le,pe){return le||je("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(le,pe)}let W=L.length;function q(ie,le,pe){let ue,ye,qe,ze=ie.x-le.x,Ze=ie.y-le.y,Ke=pe.x-ie.x,P=pe.y-ie.y,he=ze*ze+Ze*Ze,Z=ze*P-Ze*Ke;if(Math.abs(Z)>Number.EPSILON){let R=Math.sqrt(he),_=Math.sqrt(Ke*Ke+P*P),k=le.x-Ze/R,O=le.y+ze/R,X=pe.x-P/_,me=pe.y+Ke/_,ge=((X-k)*P-(me-O)*Ke)/(ze*P-Ze*Ke);ue=k+ze*ge-ie.x,ye=O+Ze*ge-ie.y;let te=ue*ue+ye*ye;if(te<=2)return new we(ue,ye);qe=Math.sqrt(te/2)}else{let R=!1;ze>Number.EPSILON?Ke>Number.EPSILON&&(R=!0):ze<-Number.EPSILON?Ke<-Number.EPSILON&&(R=!0):Math.sign(Ze)===Math.sign(P)&&(R=!0),R?(ue=-Ze,ye=ze,qe=Math.sqrt(he)):(ue=ze,ye=Ze,qe=Math.sqrt(he/2))}return new we(ue/qe,ye/qe)}let H=[];for(let ie=0,le=F.length,pe=le-1,ue=ie+1;ie<le;ie++,pe++,ue++)pe===le&&(pe=0),ue===le&&(ue=0),H[ie]=q(F[ie],F[pe],F[ue]);let Y=[],$,ee=H.concat();for(let ie=0,le=I;ie<le;ie++){let pe=D[ie];$=[];for(let ue=0,ye=pe.length,qe=ye-1,ze=ue+1;ue<ye;ue++,qe++,ze++)qe===ye&&(qe=0),ze===ye&&(ze=0),$[ue]=q(pe[ue],pe[qe],pe[ze]);Y.push($),ee=ee.concat($)}let de;if(m===0)de=Ss.triangulateShape(F,D);else{let ie=[],le=[];for(let pe=0;pe<m;pe++){let ue=pe/m,ye=f*Math.cos(ue*Math.PI/2),qe=p*Math.sin(ue*Math.PI/2)+x;for(let ze=0,Ze=F.length;ze<Ze;ze++){let Ke=B(F[ze],H[ze],qe);xe(Ke.x,Ke.y,-ye),ue===0&&ie.push(Ke)}for(let ze=0,Ze=I;ze<Ze;ze++){let Ke=D[ze];$=Y[ze];let P=[];for(let he=0,Z=Ke.length;he<Z;he++){let R=B(Ke[he],$[he],qe);xe(R.x,R.y,-ye),ue===0&&P.push(R)}ue===0&&le.push(P)}}de=Ss.triangulateShape(ie,le)}let Ue=de.length,fe=p+x;for(let ie=0;ie<W;ie++){let le=h?B(L[ie],ee[ie],fe):L[ie];b?(w.copy(M.normals[0]).multiplyScalar(le.x),S.copy(M.binormals[0]).multiplyScalar(le.y),y.copy(E[0]).add(w).add(S),xe(y.x,y.y,y.z)):xe(le.x,le.y,0)}for(let ie=1;ie<=u;ie++)for(let le=0;le<W;le++){let pe=h?B(L[le],ee[le],fe):L[le];b?(w.copy(M.normals[ie]).multiplyScalar(pe.x),S.copy(M.binormals[ie]).multiplyScalar(pe.y),y.copy(E[ie]).add(w).add(S),xe(y.x,y.y,y.z)):xe(pe.x,pe.y,d/u*ie)}for(let ie=m-1;ie>=0;ie--){let le=ie/m,pe=f*Math.cos(le*Math.PI/2),ue=p*Math.sin(le*Math.PI/2)+x;for(let ye=0,qe=F.length;ye<qe;ye++){let ze=B(F[ye],H[ye],ue);xe(ze.x,ze.y,d+pe)}for(let ye=0,qe=D.length;ye<qe;ye++){let ze=D[ye];$=Y[ye];for(let Ze=0,Ke=ze.length;Ze<Ke;Ze++){let P=B(ze[Ze],$[Ze],ue);b?xe(P.x,P.y+E[u-1].y,E[u-1].x+pe):xe(P.x,P.y,d+pe)}}}Ce(),Q();function Ce(){let ie=s.length/3;if(h){let le=0,pe=W*le;for(let ue=0;ue<Ue;ue++){let ye=de[ue];Ve(ye[2]+pe,ye[1]+pe,ye[0]+pe)}le=u+m*2,pe=W*le;for(let ue=0;ue<Ue;ue++){let ye=de[ue];Ve(ye[0]+pe,ye[1]+pe,ye[2]+pe)}}else{for(let le=0;le<Ue;le++){let pe=de[le];Ve(pe[2],pe[1],pe[0])}for(let le=0;le<Ue;le++){let pe=de[le];Ve(pe[0]+W*u,pe[1]+W*u,pe[2]+W*u)}}n.addGroup(ie,s.length/3-ie,0)}function Q(){let ie=s.length/3,le=0;se(F,le),le+=F.length;for(let pe=0,ue=D.length;pe<ue;pe++){let ye=D[pe];se(ye,le),le+=ye.length}n.addGroup(ie,s.length/3-ie,1)}function se(ie,le){let pe=ie.length;for(;--pe>=0;){let ue=pe,ye=pe-1;ye<0&&(ye=ie.length-1);for(let qe=0,ze=u+m*2;qe<ze;qe++){let Ze=W*qe,Ke=W*(qe+1),P=le+ue+Ze,he=le+ye+Ze,Z=le+ye+Ke,R=le+ue+Ke;_e(P,he,Z,R)}}}function xe(ie,le,pe){l.push(ie),l.push(le),l.push(pe)}function Ve(ie,le,pe){ae(ie),ae(le),ae(pe);let ue=s.length/3,ye=v.generateTopUV(n,s,ue-3,ue-2,ue-1);Oe(ye[0]),Oe(ye[1]),Oe(ye[2])}function _e(ie,le,pe,ue){ae(ie),ae(le),ae(ue),ae(le),ae(pe),ae(ue);let ye=s.length/3,qe=v.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);Oe(qe[0]),Oe(qe[1]),Oe(qe[3]),Oe(qe[1]),Oe(qe[2]),Oe(qe[3])}function ae(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Oe(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lh[s.type]().fromJSON(s)),new i(n,e.options)}},o0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new we(r,o),new we(a,l),new we(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-d),new we(h,1-p),new we(x,1-g)]:[new we(a,1-l),new we(u,1-d),new we(f,1-p),new we(m,1-g)]}};function a0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var So=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let v=g*h-o;for(let E=0;E<c;E++){let b=E*d-r;p.push(b,-v,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,b=v+c*(g+1),M=v+1+c*(g+1),S=v+1+c*g;f.push(E,b,S),f.push(b,M,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mo=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new z,h=new z,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],E=g/n,b=o+E*a,M=e*Math.cos(b),S=Math.sqrt(e*e-M*M),w=0;g===0&&o===0?w=.5/t:g===n&&l===Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){let T=y/t,L=s+T*r;d.x=-S*Math.cos(L),d.y=M,d.z=S*Math.sin(L),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(T+w,1-E),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let E=u[g][v+1],b=u[g][v],M=u[g+1][v],S=u[g+1][v+1];(g!==0||o>0)&&f.push(E,b,S),(g!==n-1||l<Math.PI)&&f.push(b,M,S)}this.setIndex(f),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var As=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new z,f=new z,p=new z;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,E=(s+1)*(x-1)+m,b=(s+1)*x+m;l.push(g,v,b),l.push(v,E,b)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ef(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function l0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var jf={clone:Is,merge:ln},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dl=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fl=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pl=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ah(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ih:r=e,a=2*t-n;break;case Ph:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:o=e,l=2*n-t;break;case Ph:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,b=f*m-f*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+v*o[c+M]+E*o[l+M]+b*o[d+M];return r}},gl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},xl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends Yi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,v=d[g],E=d[g+1],b=e*h+p*2,M=u[b],S=u[b+1],w=d0(n,t,v,M,s);r[p]=Kf(w,x,E,S,m)}return r}};function Kf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function u0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function d0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Kf(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=u0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ah(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case Ja:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break;case Ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ah(this.settings)&&(tf(this.settings.inTangents,e),tf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ja;var $i=class extends In{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=jr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="color";var _l=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};_l.prototype.ValueTypeName="number";var bl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends In{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=jr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Sl.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new Ml,wl=class{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Eo=class extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Th=new lt,nf=new z,sf=new z,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ka=new z,Va=new Vt,ii=new z,To=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ka,Va,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Va,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ka,Va,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Va,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new z,rf=new we,of=new we,jt=class extends To{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,rf,of),t.subVectors(of,rf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(th*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Uh=class extends Ao{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Co=class extends gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xr=class extends To{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bh=class extends Ao{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var tr=-90,nr=1,El=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(tr,nr,e,t);s.layers=this.layers,this.add(s);let r=new jt(tr,nr,e,t);r.layers=this.layers,this.add(r);let o=new jt(tr,nr,e,t);o.layers=this.layers,this.add(o);let a=new jt(tr,nr,e,t);a.layers=this.layers,this.add(a);let l=new jt(tr,nr,e,t);l.layers=this.layers,this.add(l);let c=new jt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Al=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hu="\\[\\]\\.:\\/",f0=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",p0="[^"+hu.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",uu),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),v0=new RegExp("^"+m0+g0+x0+y0+"$"),_0=["material","materials","bones","map"],Oh=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(e){let t=v0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Oh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);var zh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function du(i,e,t,n){let s=b0(n);switch(t){case su:return i*e;case Nl:return i*e/s.components*s.byteLength;case Dl:return i*e/s.components*s.byteLength;case es:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case ru:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Ul:return i*e*4/s.components*s.byteLength;case No:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fo:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case kl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case Vl:case Gl:case Wl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Bo:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oo:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b0(i){switch(i){case bn:case eu:return{byteLength:1,components:1};case _r:case tu:case Kn:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case jn:case Il:case Fn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _p(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Y0=`#define PI 3.141592653589793
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
} // validated`,$0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
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
}`,Mx=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
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
#endif`,vy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Py=`#if DEPTH_PACKING == 3200
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
}`,Ly=`#define DISTANCE
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
}`,Fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,By=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,zy=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,Vy=`#define LAMBERT
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
}`,Gy=`#define MATCAP
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
}`,Wy=`#define NORMAL
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
}`,qy=`#define NORMAL
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
}`,Xy=`#define PHONG
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
}`,$y=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Ky=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:w0,alphahash_pars_fragment:E0,alphamap_fragment:A0,alphamap_pars_fragment:T0,alphatest_fragment:C0,alphatest_pars_fragment:R0,aomap_fragment:I0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:N0,begin_vertex:D0,beginnormal_vertex:F0,bsdfs:U0,iridescence_fragment:B0,bumpmap_pars_fragment:O0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:H0,color_pars_fragment:W0,color_pars_vertex:q0,color_vertex:X0,common:Y0,cube_uv_reflection_fragment:$0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:J0,emissivemap_pars_fragment:Q0,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:hx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:dx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:vx,lights_phong_pars_fragment:_x,lights_physical_fragment:bx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:wx,lights_fragment_end:Ex,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Ix,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Nx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Bx,morphcolor_vertex:Ox,morphnormal_vertex:zx,morphtarget_pars_vertex:kx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Hx,normal_pars_fragment:Wx,normal_pars_vertex:qx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:Kx,opaque_fragment:Jx,packing:Qx,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:sy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:hy,skinning_pars_vertex:uy,skinning_vertex:dy,skinnormal_vertex:fy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:vy,uv_pars_fragment:_y,uv_pars_vertex:by,uv_vertex:Sy,worldpos_vertex:My,background_vert:wy,background_frag:Ey,backgroundCube_vert:Ay,backgroundCube_frag:Ty,cube_vert:Cy,cube_frag:Ry,depth_vert:Iy,depth_frag:Py,distance_vert:Ly,distance_frag:Ny,equirect_vert:Dy,equirect_frag:Fy,linedashed_vert:Uy,linedashed_frag:By,meshbasic_vert:Oy,meshbasic_frag:zy,meshlambert_vert:ky,meshlambert_frag:Vy,meshmatcap_vert:Gy,meshmatcap_frag:Hy,meshnormal_vert:Wy,meshnormal_frag:qy,meshphong_vert:Xy,meshphong_frag:Yy,meshphysical_vert:$y,meshphysical_frag:Zy,meshtoon_vert:jy,meshtoon_frag:Ky,points_vert:Jy,points_frag:Qy,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},Ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},hi={basic:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([Ae.points,Ae.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([Ae.common,Ae.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([Ae.sprite,Ae.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:ln([Ae.common,Ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:ln([Ae.lights,Ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var gc={r:0,b:0,g:0},sv=new lt,bp=new Je;bp.set(-1,0,0,0,1,0,0,0,1);function rv(i,e,t,n,s,r){let o=new Qe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function p(v){let E=!1,b=f(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),E=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,E){let b=f(E);b&&(b.isCubeTexture||b.mapping===Po)?(c===void 0&&(c=new _t(new Yn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Is(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=ot.getTransfer(b.colorSpace)!==ft,(u!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _t(new So(2,2),new Rn({name:"BackgroundMaterial",uniforms:Is(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(gc,cu(i)),t.buffers.color.setClear(gc.r,gc.g,gc.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function ov(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(D,U,N,I,F){let B=!1,W=d(D,I,N,U);r!==W&&(r=W,c(r.object)),B=f(D,I,N,F),B&&p(D,I,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(D,U,N,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,U,N,I){let F=I.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let W=D.isInstancedMesh===!0?D.id:0,q=B[W];q===void 0&&(q={},B[W]=q);let H=q[N.id];H===void 0&&(H={},q[N.id]=H);let Y=H[F];return Y===void 0&&(Y=h(l()),H[F]=Y),Y}function h(D){let U=[],N=[],I=[];for(let F=0;F<t;F++)U[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,U,N,I){let F=r.attributes,B=U.attributes,W=0,q=N.getAttributes();for(let H in q)if(q[H].location>=0){let $=F[H],ee=B[H];if(ee===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),$===void 0||$.attribute!==ee||ee&&$.data!==ee.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function p(D,U,N,I){let F={},B=U.attributes,W=0,q=N.getAttributes();for(let H in q)if(q[H].location>=0){let $=B[H];$===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let ee={};ee.attribute=$,$&&$.data&&(ee.data=$.data),F[H]=ee,W++}r.attributes=F,r.attributesNum=W,r.index=I}function x(){let D=r.newAttributes;for(let U=0,N=D.length;U<N;U++)D[U]=0}function m(D){g(D,0)}function g(D,U){let N=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;N[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),F[D]!==U&&(i.vertexAttribDivisor(D,U),F[D]=U)}function v(){let D=r.newAttributes,U=r.enabledAttributes;for(let N=0,I=U.length;N<I;N++)U[N]!==D[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function E(D,U,N,I,F,B,W){W===!0?i.vertexAttribIPointer(D,U,N,F,B):i.vertexAttribPointer(D,U,N,I,F,B)}function b(D,U,N,I){x();let F=I.attributes,B=N.getAttributes(),W=U.defaultAttributeValues;for(let q in B){let H=B[q];if(H.location>=0){let Y=F[q];if(Y===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let $=Y.normalized,ee=Y.itemSize,de=e.get(Y);if(de===void 0)continue;let Ue=de.buffer,fe=de.type,Ce=de.bytesPerElement,Q=fe===i.INT||fe===i.UNSIGNED_INT||Y.gpuType===Il;if(Y.isInterleavedBufferAttribute){let se=Y.data,xe=se.stride,Ve=Y.offset;if(se.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)g(H.location+_e,se.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let _e=0;_e<H.locationSize;_e++)E(H.location+_e,ee/H.locationSize,fe,$,xe*Ce,(Ve+ee/H.locationSize*_e)*Ce,Q)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)g(H.location+se,Y.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let se=0;se<H.locationSize;se++)E(H.location+se,ee/H.locationSize,fe,$,ee*Ce,ee/H.locationSize*se*Ce,Q)}}else if(W!==void 0){let $=W[q];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(H.location,$);break;case 3:i.vertexAttrib3fv(H.location,$);break;case 4:i.vertexAttrib4fv(H.location,$);break;default:i.vertexAttrib1fv(H.location,$)}}}}v()}function M(){T();for(let D in n){let U=n[D];for(let N in U){let I=U[N];for(let F in I){let B=I[F];for(let W in B)u(B[W].object),delete B[W];delete I[F]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let N in U){let I=U[N];for(let F in I){let B=I[F];for(let W in B)u(B[W].object),delete B[W];delete I[F]}}delete n[D.id]}function w(D){for(let U in n){let N=n[U];for(let I in N){let F=N[I];if(F[D.id]===void 0)continue;let B=F[D.id];for(let W in B)u(B[W].object),delete B[W];delete F[D.id]}}}function y(D){for(let U in n){let N=n[U],I=D.isInstancedMesh===!0?D.id:0,F=N[I];if(F!==void 0){for(let B in F){let W=F[B];for(let q in W)u(W[q].object),delete W[q];delete F[B]}delete N[I],Object.keys(N).length===0&&delete n[U]}}}function T(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function av(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let y=w===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bn&&w!==Fn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:M,samples:S}}function cv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,E=v*4,b=g.clippingState||null;l.value=b,b=u(p,h,E,f);for(let M=0;M!==E;++M)b[M]=t[M];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,b=f;E!==x;++E,b+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var wr=4,hv=6,uv=20,dv=256,zo=new xr,Qf=new Qe,fu=null,pu=0,mu=0,gu=!1,fv=new z,Ps=new z,yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=fv}=r;fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,pu,mu),this._renderer.xr.enabled=gu,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Kn,format:Un,colorSpace:Kr,depthBuffer:!1},s=ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pv(r)),this._blurMaterial=gv(r,e,t),this._ggxMaterial=mv(r,e,t)}return s}_compileMaterial(e){let t=new _t(new Ot,e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,s,r){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Qf),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Yn,new Tn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Qf),g=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let M=this._cubeSize;Mr(s,b*M,E>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-wr?n-p+wr:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Mr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,zo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Mr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,zo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-wr?s-this._lodMax+wr:0),h=4*(this._cubeSize-u);Mr(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,zo)}};function pv(i){let e=[],t=[],n=i,s=i-wr+1+hv;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,E=g>2?0:-1,b=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];p.set(b,f*h*g);for(let M=0;M<h;M++){let S=u[M*2]*2-1,w=u[M*2+1]*2-1;g===0?Ps.set(1,w,S):g===1?Ps.set(-S,1,-w):g===2?Ps.set(-S,w,1):g===3?Ps.set(-1,w,-S):g===4?Ps.set(-S,-1,w):Ps.set(S,w,-1),Ps.toArray(x,(g*h+M)*f)}}let m=new Ot;m.setAttribute("position",new un(p,f)),m.setAttribute("outputDirection",new un(x,f)),t.push(new _t(m,null)),n>wr&&n--}return{lodMeshes:t,sizeLods:e}}function ep(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mv(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function gv(i,e,t){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:uv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function tp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function np(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:li});r.uniforms.tEquirect.value=t;let o=new _t(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Kt),new El(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function xv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Tl||f===Cl)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new vc(p.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,p=f===Tl||f===Cl,x=f===Ki||f===Rs;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new yc(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new yc(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Tl?h.mapping=Ki:f===Cl&&(h.mapping=Rs),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function yv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function vv(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let E=0,b=v.length;E<b;E+=3){let M=v[E+0],S=v[E+1],w=v[E+2];h.push(M,S,S,w,w,M)}}else{let v=p.array;x=p.version;for(let E=0,b=v.length/3-1;E<b;E+=3){let M=E+0,S=E+1,w=E+2;h.push(M,S,S,w,w,M)}}let m=new(p.count>=65535?ro:so)(h,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function _v(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function bv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sv(i,e,t){let n=new WeakMap,s=new It;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let b=a.attributes.position.count*E,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*M*4*d),w=new eo(S,b,M,d);w.type=Fn,w.needsUpdate=!0;let y=E*4;for(let L=0;L<d;L++){let D=m[L],U=g[L],N=v[L],I=b*M*4*L;for(let F=0;F<D.count;F++){let B=F*y;f===!0&&(s.fromBufferAttribute(D,F),S[I+B+0]=s.x,S[I+B+1]=s.y,S[I+B+2]=s.z,S[I+B+3]=0),p===!0&&(s.fromBufferAttribute(U,F),S[I+B+4]=s.x,S[I+B+5]=s.y,S[I+B+6]=s.z,S[I+B+7]=0),x===!0&&(s.fromBufferAttribute(N,F),S[I+B+8]=s.x,S[I+B+9]=s.y,S[I+B+10]=s.z,S[I+B+11]=N.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new we(b,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Mv(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var wv={[Yh]:"LINEAR_TONE_MAPPING",[$h]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Io]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function Ev(i,e,t,n,s,r){let o=new _n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vt([0,2,0,0,2,0],2));let u=new dl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(c,u),h=new xr(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,v=[],E=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let S=0;S<v.length;S++){let w=v[S];w.setSize&&w.setSize(b,M)}},this.setEffects=function(b){v=b,E=v.length>0&&v[0].isRenderPass===!0;let M=o.width,S=o.height;v.length>0&&a===null&&(a=new _n(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new _n(M,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let y=v[w];y.setSize&&y.setSize(M,S)}},this.begin=function(b,M){if(x||b.toneMapping===Zn&&v.length===0)return!1;if(g=M,M!==null){let S=M.width,w=M.height;(o.width!==S||o.height!==w)&&this.setSize(S,w)}return E===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(b,M){b.toneMapping=m,x=!0;let S=o,w=a;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(b,w,S,M),T.needsSwap!==!1&&(S=w,w=w===a?l:a))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,u.defines={},ot.getTransfer(f)===ft&&(u.defines.SRGB_TRANSFER="");let y=wv[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(d,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Sp=new dn,vu=new Xi(1,1),Mp=new eo,wp=new nl,Ep=new ho,ip=[],sp=[],rp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sc(i,e){let t=sp[e];t===void 0&&(t=new Int32Array(e),sp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;ap.set(n),i.uniformMatrix2fv(this.addr,!1,ap),Ht(t,n)}}function Pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),Ht(t,n)}}function Lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;rp.set(n),i.uniformMatrix4fv(this.addr,!1,rp),Ht(t,n)}}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?mc:pc,r=vu):r=Sp,t.setTexture2D(e||r,s)}function Gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function Hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ep,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mp,s)}function qv(i){switch(i){case 5126:return Av;case 35664:return Tv;case 35665:return Cv;case 35666:return Rv;case 35674:return Iv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Nv;case 35667:case 35671:return Dv;case 35668:case 35672:return Fv;case 35669:case 35673:return Uv;case 5125:return Bv;case 36294:return Ov;case 36295:return zv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Wv}}function Xv(i,e){i.uniform1fv(this.addr,e)}function Yv(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function $v(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function Zv(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function jv(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kv(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jv(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qv(i,e){i.uniform1iv(this.addr,e)}function e_(i,e){i.uniform2iv(this.addr,e)}function t_(i,e){i.uniform3iv(this.addr,e)}function n_(i,e){i.uniform4iv(this.addr,e)}function i_(i,e){i.uniform1uiv(this.addr,e)}function s_(i,e){i.uniform2uiv(this.addr,e)}function r_(i,e){i.uniform3uiv(this.addr,e)}function o_(i,e){i.uniform4uiv(this.addr,e)}function a_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vu:o=Sp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function l_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wp,r[o])}function c_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ep,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=Sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function u_(i){switch(i){case 5126:return Xv;case 35664:return Yv;case 35665:return $v;case 35666:return Zv;case 35674:return jv;case 35675:return Kv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}},bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}},Su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xu=/(\w+)(\])?(\[|\.)?/g;function lp(i,e){i.seq.push(e),i.map[e.id]=e}function d_(i,e,t){let n=i.name,s=n.length;for(xu.lastIndex=0;;){let r=xu.exec(n),o=xu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lp(t,c===void 0?new _u(a,i,e):new bu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Su(a),lp(t,d)),t=d}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);d_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function cp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f_=37297,p_=0;function m_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var hp=new Je;function g_(i){ot._getMatrix(hp,ot.workingColorSpace,i);let e=`mat3( ${hp.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Jr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+m_(i.getShaderSource(e),a)}else return r}function x_(i,e){let t=g_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var y_={[Yh]:"Linear",[$h]:"Reinhard",[Zh]:"Cineon",[Io]:"ACESFilmic",[Kh]:"AgX",[Jh]:"Neutral",[jh]:"Custom"};function v_(i,e){let t=y_[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new z;function __(){ot.getLuminanceCoefficients(xc);let i=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function S_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vo(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(i){return i.replace(w_,A_)}var E_=new Map;function A_(i,e){let t=nt[e];if(t===void 0){let n=E_.get(e);if(n!==void 0)t=nt[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace(T_,C_)}function C_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var R_={[Ts]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function I_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[Ki]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function L_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":P_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var N_={[Rs]:"ENVMAP_MODE_REFRACTION"};function D_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":N_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F_={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function U_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":F_[i.combine]||"ENVMAP_BLENDING_NONE"}function B_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=I_(t),c=L_(t),u=D_(t),d=U_(t),h=B_(t),f=b_(t),p=S_(r),x=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Vo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Vo).join(`
`),g.length>0&&(g+=`
`)):(m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),g=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),__(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Mu(o),o=dp(o,t),o=fp(o,t),a=Mu(a),a=dp(a,t),a=fp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=v+m+o,b=v+g+a,M=cp(s,s.VERTEX_SHADER,E),S=cp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(S)||"",F=U.trim(),B=N.trim(),W=I.trim(),q=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let Y=up(s,M,"vertex"),$=up(s,S,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Y+`
`+$)}else F!==""?$e("WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(H=!1);H&&(D.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(S),y=new Er(s,x),T=M_(s,x)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,f_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var z_=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function k_(i){return i===es||i===Bo||i===Oo}function V_(i,e,t,n,s,r){let o=new to,a=new wu,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,L,D,U,N){let I=D.fog,F=U.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||B,W),H=q&&q.mapping===Po?q.image.height:null,Y=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&$e("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=$!==void 0?$.length:0,de=0;F.morphAttributes.position!==void 0&&(de=1),F.morphAttributes.normal!==void 0&&(de=2),F.morphAttributes.color!==void 0&&(de=3);let Ue,fe,Ce,Q;if(Y){let wt=hi[Y];Ue=wt.vertexShader,fe=wt.fragmentShader}else{Ue=y.vertexShader,fe=y.fragmentShader;let wt=a.getVertexShaderStage(y),ut=a.getFragmentShaderStage(y);a.update(y,wt,ut),Ce=wt.id,Q=ut.id}let se=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,ae=!!y.map,Oe=!!y.matcap,ie=!!q,le=!!y.aoMap,pe=!!y.lightMap,ue=!!y.bumpMap&&y.wireframe===!1,ye=!!y.normalMap,qe=!!y.displacementMap,ze=!!y.emissiveMap,Ze=!!y.metalnessMap,Ke=!!y.roughnessMap,P=y.anisotropy>0,he=y.clearcoat>0,Z=y.dispersion>0,R=y.retroreflectivity>0,_=y.iridescence>0,k=y.sheen>0,O=y.transmission>0,X=P&&!!y.anisotropyMap,me=he&&!!y.clearcoatMap,ge=he&&!!y.clearcoatNormalMap,te=he&&!!y.clearcoatRoughnessMap,re=_&&!!y.iridescenceMap,ve=_&&!!y.iridescenceThicknessMap,Ge=k&&!!y.sheenColorMap,Ee=k&&!!y.sheenRoughnessMap,be=!!y.specularMap,He=!!y.specularColorMap,Ye=!!y.specularIntensityMap,et=O&&!!y.transmissionMap,G=O&&!!y.thicknessMap,Se=!!y.gradientMap,oe=!!y.alphaMap,Me=y.alphaTest>0,Ie=!!y.alphaHash,ce=!!y.extensions,We=Zn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(We=i.toneMapping);let Be={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:fe,defines:y.defines,customVertexShaderID:Ce,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:Oe,envMap:ie,envMapMode:ie&&q.mapping,envMapCubeUVHeight:H,aoMap:le,lightMap:pe,bumpMap:ue,normalMap:ye,displacementMap:qe,emissiveMap:ze,normalMapObjectSpace:ye&&y.normalMapType===Lf,normalMapTangentSpace:ye&&y.normalMapType===fc,packedNormalMap:ye&&y.normalMapType===fc&&k_(y.normalMap.format),metalnessMap:Ze,roughnessMap:Ke,anisotropy:P,anisotropyMap:X,clearcoat:he,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:te,dispersion:Z,retroreflection:R,iridescence:_,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:k,sheenColorMap:Ge,sheenRoughnessMap:Ee,specularMap:be,specularColorMap:He,specularIntensityMap:Ye,transmission:O,transmissionMap:et,thicknessMap:G,gradientMap:Se,opaque:y.transparent===!1&&y.blending===vr&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:Ie,combine:y.combine,mapUv:ae&&p(y.map.channel),aoMapUv:le&&p(y.aoMap.channel),lightMapUv:pe&&p(y.lightMap.channel),bumpMapUv:ue&&p(y.bumpMap.channel),normalMapUv:ye&&p(y.normalMap.channel),displacementMapUv:qe&&p(y.displacementMap.channel),emissiveMapUv:ze&&p(y.emissiveMap.channel),metalnessMapUv:Ze&&p(y.metalnessMap.channel),roughnessMapUv:Ke&&p(y.roughnessMap.channel),anisotropyMapUv:X&&p(y.anisotropyMap.channel),clearcoatMapUv:me&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(y.sheenRoughnessMap.channel),specularMapUv:be&&p(y.specularMap.channel),specularColorMapUv:He&&p(y.specularColorMap.channel),specularIntensityMapUv:Ye&&p(y.specularIntensityMap.channel),transmissionMapUv:et&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:oe&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||P),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(ae||oe),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let T=f[y.type],L;if(T){let D=hi[T];L=jf.clone(D.uniforms)}else L=y.uniforms;return L}function b(y,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new O_(i,T,y,s),c.push(L),u.set(T,L)),L}function M(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:w}}function G_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function H_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=g),e++,v}function l(h,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let E=a(h,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):t.push(E)}function c(h,f,p,x,m,g){let v=a(h,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||H_),n.length>1&&n.sort(f||gp),s.length>1&&s.sort(f||gp)}function d(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function W_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xp,i.set(n,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){let e=new q_,t=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new lt,o=new lt;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,E=0,b=0,M=0,S=0,w=0,y=0,T=0,L=0;c.sort($_);for(let U=0,N=c.length;U<N;U++){let I=c[U],F=I.color,B=I.intensity,W=I.distance,q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===es?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],B);L++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=q;let ee=Y.getViewportCount();for(let de=0;de<ee;de++)n.sunShadowMatrix[x+de]=Y.getMatrix(de),n.sunShadowCascade[x+de]=Y._cascadeData[de];x+=ee,p++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=H,m++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let Y=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,Y.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=Y.matrix,I.castShadow){let $=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=q,w++}v++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=H,E++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Y=I.shadow,$=t.get(I);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(B),H.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[b]=H,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==E||D.hemiLength!==b||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==w||D.numSpotMaps!==y||D.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=E,D.hemiLength=b,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=w,D.numSpotMaps=y,D.numLightProbes=L,n.version=Y_++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let b=c[v];if(b.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),d++}else if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function yp(i){let e=new Z_(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function j_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`,Q_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],eb=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vp=new lt,ko=new z,yu=new z;function tb(i,e,t){let n=new hr,s=new we,r=new we,o=new It,a=new fl,l=new pl,c={},u=t.maxTextureSize,d={[ji]:pn,[pn]:ji,[Dn]:Dn},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:K_,fragmentShader:J_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let g=this.type;this.render=function(S,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===cf&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let T=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(li),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=g!==this.type;N&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=S.length;I<F;I++){let B=S[I],W=B.shadow;if(W===void 0){$e("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let q=W.getFrameExtents();s.multiply(q),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===yr){if(B.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new _n(s.x,s.y,{format:es,type:Kn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Xi(s.x,s.y,Fn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt}else B.isPointLight?(W.map=new vc(s.x),W.map.depthTexture=new rl(s.x,jn)):(W.map=new _n(s.x,s.y),W.map.depthTexture=new Xi(s.x,s.y,jn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=ri,this.type===Ts?(W.map.depthTexture.compareFunction=H?mc:pc,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Yt,W.map.depthTexture.magFilter=Yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Y=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,y);for(let $=0;$<Y;$++){let ee=W.getCamera($);if(B.isPointLight){let de=W.camera,Ue=W.matrix,fe=B.distance||de.far;fe!==de.far&&(de.far=fe,de.updateProjectionMatrix()),ko.setFromMatrixPosition(B.matrixWorld),de.position.copy(ko),yu.copy(de.position),yu.add(Q_[$]),de.up.copy(eb[$]),de.lookAt(yu),de.updateMatrixWorld(),Ue.makeTranslation(-ko.x,-ko.y,-ko.z),vp.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),W._frustum.setFromProjectionMatrix(vp,de.coordinateSystem,de.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,$),i.clear();else{$===0&&(i.setRenderTarget(W.map),i.clear());let de=W.getViewport($);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),U.viewport(o)}n=W.getFrustum($),b(w,y,ee,B,this.type)}W.isPointLightShadow!==!0&&this.type===yr&&v(W,y),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,L,D)};function v(S,w){let y=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new _n(s.x,s.y,{format:es,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,y,f,x,null)}function E(S,w,y,T){let L=null,D=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)L=D;else if(L=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=L.uuid,N=w.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let F=I[N];F===void 0&&(F=L.clone(),I[N]=F,w.addEventListener("dispose",M)),L=F}if(L.visible=w.visible,L.wireframe=w.wireframe,T===yr?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=i.properties.get(L);U.light=y}return L}function b(S,w,y,T,L){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===yr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let N=e.update(S),I=S.material;if(Array.isArray(I)){let F=N.groups;for(let B=0,W=F.length;B<W;B++){let q=F[B],H=I[q.materialIndex];if(H&&H.visible){let Y=E(S,H,T,L);S.onBeforeShadow(i,S,w,y,N,Y,q),i.renderBufferDirect(y,null,N,Y,S,q),S.onAfterShadow(i,S,w,y,N,Y,q)}}}else if(I.visible){let F=E(S,I,T,L);S.onBeforeShadow(i,S,w,y,N,F,null),i.renderBufferDirect(y,null,N,F,S,null),S.onAfterShadow(i,S,w,y,N,F,null)}}let U=S.children;for(let N=0,I=U.length;N<I;N++)b(U[N],w,y,T,L)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let T=c[y],L=S.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function nb(i,e){function t(){let G=!1,Se=new It,oe=null,Me=new It(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!G&&(i.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,ce,We,Be,wt){wt===!0&&(Ie*=Be,ce*=Be,We*=Be),Se.set(Ie,ce,We,Be),Me.equals(Se)===!1&&(i.clearColor(Ie,ce,We,Be),Me.copy(Se))},reset:function(){G=!1,oe=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,Se=!1,oe=null,Me=null,Ie=null;return{setReversed:function(ce){if(Se!==ce){let We=e.get("EXT_clip_control");ce?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Se=ce;let Be=Ie;Ie=null,this.setClear(Be)}},getReversed:function(){return Se},setTest:function(ce){ce?se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!G&&(i.depthMask(ce),oe=ce)},setFunc:function(ce){if(Se&&(ce=Wf[ce]),Me!==ce){switch(ce){case Wa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ce}},setLocked:function(ce){G=ce},setClear:function(ce){Ie!==ce&&(Ie=ce,Se&&(ce=1-ce),i.clearDepth(ce))},reset:function(){G=!1,oe=null,Me=null,Ie=null,Se=!1}}}function s(){let G=!1,Se=null,oe=null,Me=null,Ie=null,ce=null,We=null,Be=null,wt=null;return{setTest:function(ut){G||(ut?se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ut){Se!==ut&&!G&&(i.stencilMask(ut),Se=ut)},setFunc:function(ut,Vn,ti){(oe!==ut||Me!==Vn||Ie!==ti)&&(i.stencilFunc(ut,Vn,ti),oe=ut,Me=Vn,Ie=ti)},setOp:function(ut,Vn,ti){(ce!==ut||We!==Vn||Be!==ti)&&(i.stencilOp(ut,Vn,ti),ce=ut,We=Vn,Be=ti)},setLocked:function(ut){G=ut},setClear:function(ut){wt!==ut&&(i.clearStencil(ut),wt=ut)},reset:function(){G=!1,Se=null,oe=null,Me=null,Ie=null,ce=null,We=null,Be=null,wt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,b=null,M=null,S=null,w=null,y=new Qe(0,0,0),T=0,L=!1,D=null,U=null,N=null,I=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,q=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let Y=null,$={},ee=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ue=new It().fromArray(ee),fe=new It().fromArray(de);function Ce(G,Se,oe,Me){let Ie=new Uint8Array(4),ce=i.createTexture();i.bindTexture(G,ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<oe;We++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return ce}let Q={};Q[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(sr),ue(!1),ye(kh),se(i.CULL_FACE),le(li);function se(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function xe(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ve(G,Se){return h[G]!==Se?(i.bindFramebuffer(G,Se),h[G]=Se,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function _e(G,Se){let oe=p,Me=!1;if(G){oe=f.get(Se),oe===void 0&&(oe=[],f.set(Se,oe));let Ie=G.textures;if(oe.length!==Ie.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,We=Ie.length;ce<We;ce++)oe[ce]=i.COLOR_ATTACHMENT0+ce;oe.length=Ie.length,Me=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Me=!0);Me&&i.drawBuffers(oe)}function ae(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let Oe={[Cs]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};Oe[ff]=i.MIN,Oe[pf]=i.MAX;let ie={[mf]:i.ZERO,[gf]:i.ONE,[xf]:i.SRC_COLOR,[Wh]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[qh]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function le(G,Se,oe,Me,Ie,ce,We,Be,wt,ut){if(G===li){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),G!==hf){if(G!==g||ut!==L){if((v!==Cs||M!==Cs)&&(i.blendEquation(i.FUNC_ADD),v=Cs,M=Cs),ut)switch(G){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",G);break}else switch(G){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",G);break}E=null,b=null,S=null,w=null,y.set(0,0,0),T=0,g=G,L=ut}return}Ie=Ie||Se,ce=ce||oe,We=We||Me,(Se!==v||Ie!==M)&&(i.blendEquationSeparate(Oe[Se],Oe[Ie]),v=Se,M=Ie),(oe!==E||Me!==b||ce!==S||We!==w)&&(i.blendFuncSeparate(ie[oe],ie[Me],ie[ce],ie[We]),E=oe,b=Me,S=ce,w=We),(Be.equals(y)===!1||wt!==T)&&(i.blendColor(Be.r,Be.g,Be.b,wt),y.copy(Be),T=wt),g=G,L=!1}function pe(G,Se){G.side===Dn?xe(i.CULL_FACE):se(i.CULL_FACE);let oe=G.side===pn;Se&&(oe=!oe),ue(oe),G.blending===vr&&G.transparent===!1?le(li):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Me=G.stencilWrite;a.setTest(Me),Me&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(G){D!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),D=G)}function ye(G){G!==af?(se(i.CULL_FACE),G!==U&&(G===kh?i.cullFace(i.BACK):G===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=G}function qe(G){G!==N&&(W&&i.lineWidth(G),N=G)}function ze(G,Se,oe){G?(se(i.POLYGON_OFFSET_FILL),(I!==Se||F!==oe)&&(I=Se,F=oe,o.getReversed()&&(Se=-Se),i.polygonOffset(Se,oe))):xe(i.POLYGON_OFFSET_FILL)}function Ze(G){G?se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ke(G){G===void 0&&(G=i.TEXTURE0+B-1),Y!==G&&(i.activeTexture(G),Y=G)}function P(G,Se,oe){oe===void 0&&(Y===null?oe=i.TEXTURE0+B-1:oe=Y);let Me=$[oe];Me===void 0&&(Me={type:void 0,texture:void 0},$[oe]=Me),(Me.type!==G||Me.texture!==Se)&&(Y!==oe&&(i.activeTexture(oe),Y=oe),i.bindTexture(G,Se||Q[G]),Me.type=G,Me.texture=Se)}function he(){let G=$[Y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function _(){try{i.texSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function k(){try{i.texSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function me(){try{i.texStorage2D(...arguments)}catch(G){je("WebGLState:",G)}}function ge(){try{i.texStorage3D(...arguments)}catch(G){je("WebGLState:",G)}}function te(){try{i.texImage2D(...arguments)}catch(G){je("WebGLState:",G)}}function re(){try{i.texImage3D(...arguments)}catch(G){je("WebGLState:",G)}}function ve(G){return d[G]!==void 0?d[G]:i.getParameter(G)}function Ge(G,Se){d[G]!==Se&&(i.pixelStorei(G,Se),d[G]=Se)}function Ee(G){Ue.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function be(G){fe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),fe.copy(G))}function He(G,Se){let oe=c.get(Se);oe===void 0&&(oe=new WeakMap,c.set(Se,oe));let Me=oe.get(G);Me===void 0&&(Me=i.getUniformBlockIndex(Se,G.name),oe.set(G,Me))}function Ye(G,Se){let Me=c.get(Se).get(G);l.get(Se)!==Me&&(i.uniformBlockBinding(Se,Me,G.__bindingPointIndex),l.set(Se,Me))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,$={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,b=null,M=null,S=null,w=null,y=new Qe(0,0,0),T=0,L=!1,D=null,U=null,N=null,I=null,F=null,Ue.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:xe,bindFramebuffer:Ve,drawBuffers:_e,useProgram:ae,setBlending:le,setMaterial:pe,setFlipSided:ue,setCullFace:ye,setLineWidth:qe,setPolygonOffset:ze,setScissorTest:Ze,activeTexture:Ke,bindTexture:P,unbindTexture:he,compressedTexImage2D:Z,compressedTexImage3D:R,texImage2D:te,texImage3D:re,pixelStorei:Ge,getParameter:ve,updateUBOMapping:He,uniformBlockBinding:Ye,texStorage2D:me,texStorage3D:ge,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:O,compressedTexSubImage3D:X,scissor:Ee,viewport:be,reset:et}}function ib(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return p?new OffscreenCanvas(R,_):Qr("canvas")}function m(R,_,k){let O=1,X=Z(R);if((X.width>k||X.height>k)&&(O=k/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let me=Math.floor(O*X.width),ge=Math.floor(O*X.height);h===void 0&&(h=x(me,ge));let te=_?x(me,ge):h;return te.width=me,te.height=ge,te.getContext("2d").drawImage(R,0,0,me,ge),$e("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+me+"x"+ge+")."),te}else return"data"in R&&$e("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function g(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,_,k,O,X,me=!1){if(R!==null){if(i[R]!==void 0)return i[R];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;O&&(ge=e.get("EXT_texture_norm16"),ge||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=_;if(_===i.RED&&(k===i.FLOAT&&(te=i.R32F),k===i.HALF_FLOAT&&(te=i.R16F),k===i.UNSIGNED_BYTE&&(te=i.R8),k===i.UNSIGNED_SHORT&&ge&&(te=ge.R16_EXT),k===i.SHORT&&ge&&(te=ge.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.R8UI),k===i.UNSIGNED_SHORT&&(te=i.R16UI),k===i.UNSIGNED_INT&&(te=i.R32UI),k===i.BYTE&&(te=i.R8I),k===i.SHORT&&(te=i.R16I),k===i.INT&&(te=i.R32I)),_===i.RG&&(k===i.FLOAT&&(te=i.RG32F),k===i.HALF_FLOAT&&(te=i.RG16F),k===i.UNSIGNED_BYTE&&(te=i.RG8),k===i.UNSIGNED_SHORT&&ge&&(te=ge.RG16_EXT),k===i.SHORT&&ge&&(te=ge.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RG8UI),k===i.UNSIGNED_SHORT&&(te=i.RG16UI),k===i.UNSIGNED_INT&&(te=i.RG32UI),k===i.BYTE&&(te=i.RG8I),k===i.SHORT&&(te=i.RG16I),k===i.INT&&(te=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGB8UI),k===i.UNSIGNED_SHORT&&(te=i.RGB16UI),k===i.UNSIGNED_INT&&(te=i.RGB32UI),k===i.BYTE&&(te=i.RGB8I),k===i.SHORT&&(te=i.RGB16I),k===i.INT&&(te=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),k===i.UNSIGNED_INT&&(te=i.RGBA32UI),k===i.BYTE&&(te=i.RGBA8I),k===i.SHORT&&(te=i.RGBA16I),k===i.INT&&(te=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&ge&&(te=ge.RGB16_EXT),k===i.SHORT&&ge&&(te=ge.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),_===i.RGBA){let re=me?Jr:ot.getTransfer(X);k===i.FLOAT&&(te=i.RGBA32F),k===i.HALF_FLOAT&&(te=i.RGBA16F),k===i.UNSIGNED_BYTE&&(te=re===ft?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ge&&(te=ge.RGBA16_EXT),k===i.SHORT&&ge&&(te=ge.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(R,_){let k;return R?_===null||_===jn||_===br?k=i.DEPTH24_STENCIL8:_===Fn?k=i.DEPTH32F_STENCIL8:_===_r&&(k=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===br?k=i.DEPTH_COMPONENT24:_===Fn?k=i.DEPTH_COMPONENT32F:_===_r&&(k=i.DEPTH_COMPONENT16),k}function S(R,_){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==Kt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function w(R){let _=R.target;_.removeEventListener("dispose",w),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function y(R){let _=R.target;_.removeEventListener("dispose",y),D(_)}function T(R){let _=n.get(R);if(_.__webglInit===void 0)return;let k=R.source,O=f.get(k);if(O){let X=O[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(R),Object.keys(O).length===0&&f.delete(k)}n.remove(R)}function L(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let k=R.source,O=f.get(k);delete O[_.__cacheKey],o.memory.textures--}function D(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let X=0;X<_.__webglFramebuffer[O].length;X++)i.deleteFramebuffer(_.__webglFramebuffer[O][X]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=R.textures;for(let O=0,X=k.length;O<X;O++){let me=n.get(k[O]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(k[O])}n.remove(R)}let U=0;function N(){U=0}function I(){return U}function F(R){U=R}function B(){let R=U;return R>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function W(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function q(R,_){let k=n.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let O=R.image;if(O===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function H(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function Y(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function $(R,_){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ve(k,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let ee={[rr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},de={[Yt]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[Lo]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Ue={[Df]:i.NEVER,[zf]:i.ALWAYS,[Ff]:i.LESS,[pc]:i.LEQUAL,[Uf]:i.EQUAL,[mc]:i.GEQUAL,[Bf]:i.GREATER,[Of]:i.NOTEQUAL};function fe(R,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Kt||_.magFilter===Rl||_.magFilter===Lo||_.magFilter===Ji||_.minFilter===Kt||_.minFilter===Rl||_.minFilter===Lo||_.minFilter===Ji)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ee[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Lo&&_.minFilter!==Ji||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",w));let O=_.source,X=f.get(O);X===void 0&&(X={},f.set(O,X));let me=W(_);if(me!==R.__cacheKey){X[me]===void 0&&(X[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),X[me].usedTimes++;let ge=X[R.__cacheKey];ge!==void 0&&(X[R.__cacheKey].usedTimes--,ge.usedTimes===0&&L(_)),R.__cacheKey=me,R.__webglTexture=X[me].texture}return k}function Q(R,_,k){return Math.floor(Math.floor(R/k)/_)}function se(R,_,k,O){let me=R.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,O,_.data);else{me.sort((Ge,Ee)=>Ge.start-Ee.start);let ge=0;for(let Ge=1;Ge<me.length;Ge++){let Ee=me[ge],be=me[Ge],He=Ee.start+Ee.count,Ye=Q(be.start,_.width,4),et=Q(Ee.start,_.width,4);be.start<=He+1&&Ye===et&&Q(be.start+be.count-1,_.width,4)===Ye?Ee.count=Math.max(Ee.count,be.start+be.count-Ee.start):(++ge,me[ge]=be)}me.length=ge+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ge=0,Ee=me.length;Ge<Ee;Ge++){let be=me[Ge],He=Math.floor(be.start/4),Ye=Math.ceil(be.count/4),et=He%_.width,G=Math.floor(He/_.width),Se=Ye,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,et,G,Se,oe,k,O,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function xe(R,_,k){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let X=Ce(R,_),me=_.source;t.bindTexture(O,R.__webglTexture,i.TEXTURE0+k);let ge=n.get(me);if(me.version!==ge.__version||X===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),Me=_.colorSpace===Ti?null:ot.getPrimaries(_.colorSpace),Ie=_.colorSpace===Ti||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let re=m(_.image,!1,s.maxTextureSize);re=he(_,re);let ve=r.convert(_.format,_.colorSpace),Ge=r.convert(_.type),Ee=b(_.internalFormat,ve,Ge,_.normalized,_.colorSpace,_.isVideoTexture);fe(O,_);let be,He=_.mipmaps,Ye=_.isVideoTexture!==!0,et=ge.__version===void 0||X===!0,G=me.dataReady,Se=S(_,re);if(_.isDepthTexture)Ee=M(_.format===Qi,_.type),et&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ve,Ge,null));else if(_.isDataTexture)if(He.length>0){Ye&&et&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,He[0].width,He[0].height);for(let oe=0,Me=He.length;oe<Me;oe++)be=He[oe],Ye?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ve,Ge,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,be.width,be.height,0,ve,Ge,be.data);_.generateMipmaps=!1}else Ye?(et&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,re.width,re.height),G&&se(_,re,ve,Ge)):t.texImage2D(i.TEXTURE_2D,0,Ee,re.width,re.height,0,ve,Ge,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,He[0].width,He[0].height,re.depth);for(let oe=0,Me=He.length;oe<Me;oe++)if(be=He[oe],_.format!==Un)if(ve!==null)if(Ye){if(G)if(_.layerUpdates.size>0){let Ie=du(be.width,be.height,_.format,_.type);for(let ce of _.layerUpdates){let We=be.data.subarray(ce*Ie/be.data.BYTES_PER_ELEMENT,(ce+1)*Ie/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ce,be.width,be.height,1,ve,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,re.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,be.width,be.height,re.depth,0,be.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,re.depth,ve,Ge,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,be.width,be.height,re.depth,0,ve,Ge,be.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ye&&et&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,He[0].width,He[0].height);for(let oe=0,Me=He.length;oe<Me;oe++)be=He[oe],_.format!==Un?ve!==null?Ye?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ee,be.width,be.height,0,be.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ve,Ge,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,be.width,be.height,0,ve,Ge,be.data)}else if(_.isDataArrayTexture)if(Ye){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,re.width,re.height,re.depth),G)if(_.layerUpdates.size>0){let oe=du(re.width,re.height,_.format,_.type);for(let Me of _.layerUpdates){let Ie=re.data.subarray(Me*oe/re.data.BYTES_PER_ELEMENT,(Me+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,re.width,re.height,1,ve,Ge,Ie)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Ge,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,re.width,re.height,re.depth,0,ve,Ge,re.data);else if(_.isData3DTexture)Ye?(et&&t.texStorage3D(i.TEXTURE_3D,Se,Ee,re.width,re.height,re.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Ge,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,re.width,re.height,re.depth,0,ve,Ge,re.data);else if(_.isFramebufferTexture){if(et)if(Ye)t.texStorage2D(i.TEXTURE_2D,Se,Ee,re.width,re.height);else{let oe=re.width,Me=re.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ee,oe,Me,0,ve,Ge,null),oe>>=1,Me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),re.parentNode!==oe){oe.appendChild(re),d.add(_),oe.onpaint=Me=>{let Ie=Me.changedElements;for(let ce of d)Ie.includes(ce.image)&&(ce.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Ie=i.RGBA,ce=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,ce,We,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ye&&et){let oe=Z(He[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ee,oe.width,oe.height)}for(let oe=0,Me=He.length;oe<Me;oe++)be=He[oe],Ye?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve,Ge,be):t.texImage2D(i.TEXTURE_2D,oe,Ee,ve,Ge,be);_.generateMipmaps=!1}else if(Ye){if(et){let oe=Z(re);t.texStorage2D(i.TEXTURE_2D,Se,Ee,oe.width,oe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ge,re)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ve,Ge,re);g(_)&&v(O),ge.__version=me.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ve(R,_,k){if(_.image.length!==6)return;let O=Ce(R,_),X=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let me=n.get(X);if(X.version!==me.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let ge=ot.getPrimaries(ot.workingColorSpace),te=_.colorSpace===Ti?null:ot.getPrimaries(_.colorSpace),re=_.colorSpace===Ti||ge===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,Ge=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!ve&&!Ge?Ee[ce]=m(_.image[ce],!0,s.maxCubemapSize):Ee[ce]=Ge?_.image[ce].image:_.image[ce],Ee[ce]=he(_,Ee[ce]);let be=Ee[0],He=r.convert(_.format,_.colorSpace),Ye=r.convert(_.type),et=b(_.internalFormat,He,Ye,_.normalized,_.colorSpace),G=_.isVideoTexture!==!0,Se=me.__version===void 0||O===!0,oe=X.dataReady,Me=S(_,be);fe(i.TEXTURE_CUBE_MAP,_);let Ie;if(ve){G&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,et,be.width,be.height);for(let ce=0;ce<6;ce++){Ie=Ee[ce].mipmaps;for(let We=0;We<Ie.length;We++){let Be=Ie[We];_.format!==Un?He!==null?G?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,0,0,Be.width,Be.height,He,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,et,Be.width,Be.height,0,Be.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,0,0,Be.width,Be.height,He,Ye,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We,et,Be.width,Be.height,0,He,Ye,Be.data)}}}else{if(Ie=_.mipmaps,G&&Se){Ie.length>0&&Me++;let ce=Z(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,et,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ge){G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,He,Ye,Ee[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,Ee[ce].width,Ee[ce].height,0,He,Ye,Ee[ce].data);for(let We=0;We<Ie.length;We++){let wt=Ie[We].image[ce].image;G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,0,0,wt.width,wt.height,He,Ye,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,et,wt.width,wt.height,0,He,Ye,wt.data)}}else{G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Ye,Ee[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,He,Ye,Ee[ce]);for(let We=0;We<Ie.length;We++){let Be=Ie[We];G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,0,0,He,Ye,Be.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,We+1,et,He,Ye,Be.image[ce])}}}g(_)&&v(i.TEXTURE_CUBE_MAP),me.__version=X.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function _e(R,_,k,O,X,me){let ge=r.convert(k.format,k.colorSpace),te=r.convert(k.type),re=b(k.internalFormat,ge,te,k.normalized,k.colorSpace),ve=n.get(_),Ge=n.get(k);if(Ge.__renderTarget=_,!ve.__hasExternalTextures){let Ee=Math.max(1,_.width>>me),be=Math.max(1,_.height>>me);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,me,re,Ee,be,_.depth,0,ge,te,null):t.texImage2D(X,me,re,Ee,be,0,ge,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,X,Ge.__webglTexture,0,Ze(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,X,Ge.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let O=_.depthTexture,X=O&&O.isDepthTexture?O.type:null,me=M(_.stencilBuffer,X),ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(_),me,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(_),me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,me,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{let O=_.textures;for(let X=0;X<O.length;X++){let me=O[X],ge=r.convert(me.format,me.colorSpace),te=r.convert(me.type),re=b(me.internalFormat,ge,te,me.normalized,me.colorSpace);Ke(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(_),re,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(_),re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(R,_,k){let O=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),fe(i.TEXTURE_CUBE_MAP,_.depthTexture);let ve=r.convert(_.depthTexture.format),Ge=r.convert(_.depthTexture.type),Ee;_.depthTexture.format===ri?Ee=i.DEPTH_COMPONENT24:_.depthTexture.format===Qi&&(Ee=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ee,_.width,_.height,0,ve,Ge,null)}}else q(_.depthTexture,0);let me=X.__webglTexture,ge=Ze(_),te=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,re=_.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ri)Ke(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,me,0);else if(_.depthTexture.format===Qi)Ke(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",X)};O.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=O}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let O=0;O<6;O++)Oe(_.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?Oe(_.__webglFramebuffer[0],R,0):Oe(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),ae(_.__webglDepthbuffer[O],R,!1);else{let X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,me)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ae(_.__webglDepthbuffer,R,!1);else{let X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,_,k){let O=n.get(R);_!==void 0&&_e(O.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ie(R)}function pe(R){let _=R.texture,k=n.get(R),O=n.get(_);R.addEventListener("dispose",y);let X=R.textures,me=R.isWebGLCubeRenderTarget===!0,ge=X.length>1;if(ge||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,o.memory.textures++),me){k.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[te]=[];for(let re=0;re<_.mipmaps.length;re++)k.__webglFramebuffer[te][re]=i.createFramebuffer()}else k.__webglFramebuffer[te]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)k.__webglFramebuffer[te]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ge)for(let te=0,re=X.length;te<re;te++){let ve=n.get(X[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let te=0;te<X.length;te++){let re=X[te];k.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[te]);let ve=r.convert(re.format,re.colorSpace),Ge=r.convert(re.type),Ee=b(re.internalFormat,ve,Ge,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),be=Ze(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,k.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),fe(i.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)_e(k.__webglFramebuffer[te][re],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else _e(k.__webglFramebuffer[te],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(_)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let te=0,re=X.length;te<re;te++){let ve=X[te],Ge=n.get(ve),Ee=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ge.__webglTexture),fe(Ee,ve),_e(k.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+te,Ee,0),g(ve)&&v(Ee)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,O.__webglTexture),fe(te,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)_e(k.__webglFramebuffer[re],R,_,i.COLOR_ATTACHMENT0,te,re);else _e(k.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,te,0);g(_)&&v(te),t.unbindTexture()}R.depthBuffer&&ie(R)}function ue(R){let _=R.textures;for(let k=0,O=_.length;k<O;k++){let X=_[k];if(g(X)){let me=E(R),ge=n.get(X).__webglTexture;t.bindTexture(me,ge),v(me),t.unbindTexture()}}}let ye=[],qe=[];function ze(R){if(R.samples>0){if(Ke(R)===!1){let _=R.textures,k=R.width,O=R.height,X=i.COLOR_BUFFER_BIT,me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),te=_.length>1;if(te)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let re=R.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);let Ge=n.get(_[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,X,i.NEAREST),l===!0&&(ye.length=0,qe.length=0,ye.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ye.push(me),qe.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);let Ge=n.get(_[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ze(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(R){let _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function he(R,_){let k=R.colorSpace,O=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Kr&&k!==Ti&&(ot.getTransfer(k)===ft?(O!==Un||X!==bn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),_}function Z(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=le,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sb(i,e){function t(n,s=Ti){let r,o=ot.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===tu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ru)return i.RGB;if(n===Un)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ul)return i.RGBA_INTEGER;if(n===No||n===Do||n===Fo||n===Uo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Ol||n===zl||n===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Gl||n===Hl||n===Wl||n===ql||n===Bo||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vl||n===Gl)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yl||n===$l||n===Zl||n===jl||n===Kl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===Oo||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
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

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:rb,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new So(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tu=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Au,g={},v=t.getContextAttributes(),E=null,b=null,M=[],S=[],w=new we,y=null,T=null,L=new jt;L.viewport=new It;let D=new jt;D.viewport=new It;let U=[L,D],N=new Al,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=M[Q];return se===void 0&&(se=new cr,M[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=M[Q];return se===void 0&&(se=new cr,M[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=M[Q];return se===void 0&&(se=new cr,M[Q]=se),se.getHandSpace()};function B(Q){let se=S.indexOf(Q.inputSource);if(se===-1)return;let xe=M[se];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,c||o),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let Q=0;Q<M.length;Q++){let se=S[Q];se!==null&&(S[Q]=null,M[Q].disconnect(se))}I=null,F=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(E),f=null,h=null,d=null,s=null,b=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(w.width,w.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ve=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?Qi:ri,Ve=v.stencil?br:jn);let ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ae),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new _n(h.textureWidth,h.textureHeight,{format:Un,type:bn,depthTexture:new Xi(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new _n(f.framebufferWidth,f.framebufferHeight,{format:Un,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Q){for(let se=0;se<Q.removed.length;se++){let xe=Q.removed[se],Ve=S.indexOf(xe);Ve>=0&&(S[Ve]=null,M[Ve].disconnect(xe))}for(let se=0;se<Q.added.length;se++){let xe=Q.added[se],Ve=S.indexOf(xe);if(Ve===-1){for(let ae=0;ae<M.length;ae++)if(ae>=S.length){S.push(xe),Ve=ae;break}else if(S[ae]===null){S[ae]=xe,Ve=ae;break}if(Ve===-1)break}let _e=M[Ve];_e&&_e.connect(xe)}}let H=new z,Y=new z;function $(Q,se,xe){H.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);let Ve=H.distanceTo(Y),_e=se.projectionMatrix.elements,ae=xe.projectionMatrix.elements,Oe=_e[14]/(_e[10]-1),ie=_e[14]/(_e[10]+1),le=(_e[9]+1)/_e[5],pe=(_e[9]-1)/_e[5],ue=(_e[8]-1)/_e[0],ye=(ae[8]+1)/ae[0],qe=Oe*ue,ze=Oe*ye,Ze=Ve/(-ue+ye),Ke=Ze*-ue;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ke),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_e[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let P=Oe+Ze,he=ie+Ze,Z=qe-Ke,R=ze+(Ve-Ke),_=le*ie/he*P,k=pe*ie/he*P;Q.projectionMatrix.makePerspective(Z,R,_,k,P,he),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ee(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,xe=Q.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),N.near=D.near=L.near=se,N.far=D.far=L.far=xe,(I!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=Q.layers.mask|6,L.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let Ve=Q.parent,_e=N.cameras;ee(N,Ve);for(let ae=0;ae<_e.length;ae++)ee(_e[ae],Ve);_e.length===2?$(N,L,D):N.projectionMatrix.copy(L.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),de(Q,N,Ve)};function de(Q,se,xe){xe===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Q){return g[Q]};let Ue=null;function fe(Q,se){if(u=se.getViewerPose(c||o),p=se,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ve=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,Ve=!0);for(let ie=0;ie<xe.length;ie++){let le=xe[ie],pe=null;if(f!==null)pe=f.getViewport(le);else{let ye=d.getViewSubImage(h,le);pe=ye.viewport,ie===0&&(e.setRenderTargetTextures(b,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(b))}let ue=U[ie];ue===void 0&&(ue=new jt,ue.layers.enable(ie),ue.viewport=new It,U[ie]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(pe.x,pe.y,pe.width,pe.height),ie===0&&(N.matrix.copy(ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ve===!0&&N.cameras.push(ue)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ie=d.getDepthInformation(xe[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ie=0;ie<xe.length;ie++){let le=xe[ie].camera;if(le){let pe=g[le];pe||(pe=new uo,g[le]=pe);let ue=d.getCameraImage(le);pe.sourceTexture=ue}}}}for(let xe=0;xe<M.length;xe++){let Ve=S[xe],_e=M[xe];Ve!==null&&_e!==void 0&&_e.update(Ve,se,c||o)}Ue&&Ue(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),p=null}let Ce=new _p;Ce.setAnimationLoop(fe),this.setAnimationLoop=function(Q){Ue=Q},this.dispose=function(){}}},ab=new lt,Ap=new Je;Ap.set(-1,0,0,0,1,0,0,0,1);function lb(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,cu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,E,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ap),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(m(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",v));let w=M.program;n.updateUBOMapping(b,w);let y=e.render.frame;r[b.id]!==y&&(h(b),r[b.id]=y)}function u(b){let M=d();b.__bindingPointIndex=M;let S=i.createBuffer(),w=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=s[b.id],S=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,T=S.length;y<T;y++){let L=S[y];if(Array.isArray(L))for(let D=0,U=L.length;D<U;D++)f(L[D],y,D,w);else f(L,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,M,S,w){if(x(b,M,S,w)===!0){let y=b.__offset,T=b.value;if(Array.isArray(T)){let L=0;for(let D=0;D<T.length;D++){let U=T[D],N=g(U);p(U,b.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function p(b,M,S){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,S)}function x(b,M,S,w){let y=b.value,T=M+"_"+S;if(w[T]===void 0)return typeof y=="number"||typeof y=="boolean"?w[T]=y:ArrayBuffer.isView(y)?w[T]=y.slice():w[T]=y.clone(),!0;{let L=w[T];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return w[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(b){let M=b.uniforms,S=0,w=16;for(let T=0,L=M.length;T<L;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,N=D.length;U<N;U++){let I=D[U],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=F.length;B<W;B++){let q=F[B],H=g(q),Y=S%w,$=Y%H.boundary,ee=Y+$;S+=$,ee!==0&&w-ee<H.storage&&(S+=w-ee),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=H.storage}}}let y=S%w;return y>0&&(S+=w-y),b.__size=S,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",b),M}function v(b){let M=b.target;M.removeEventListener("dispose",v);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function ub(){return ci===null&&(ci=new ao(hb,16,16,es,Kn),ci.name="DFG_LUT",ci.minFilter=Kt,ci.magFilter=Kt,ci.wrapS=si,ci.wrapT=si,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var _c=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Ul,Fl,Dl]),g=new Set([bn,jn,_r,br,Pl,Ll]),v=new Uint32Array(4),E=new Int32Array(4),b=new z,M=null,S=null,w=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,U=null,N=null,I=null,F=null;this._outputColorSpace=Zt;let B=0,W=0,q=null,H=-1,Y=null,$=new It,ee=new It,de=null,Ue=new Qe(0),fe=0,Ce=t.width,Q=t.height,se=1,xe=null,Ve=null,_e=new It(0,0,Ce,Q),ae=new It(0,0,Ce,Q),Oe=!1,ie=new hr,le=!1,pe=!1,ue=new lt,ye=new z,qe=new It,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Ke(){return q===null?se:1}let P=n;function he(A,V){return t.getContext(A,V)}let Z,R,_,k,O,X,me,ge,te,re,ve,Ge,Ee,be,He,Ye,et,G,Se,oe,Me,Ie,ce;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),P===null){let V="webgl2";if(P=he(V,A),P===null)throw he(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(A){throw t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),je("WebGLRenderer: "+A.message),A}function We(){Z=new yv(P),Z.init(),Me=new sb(P,Z),R=new lv(P,Z,e,Me),_=new nb(P,Z),R.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),N=P.createFramebuffer(),I=P.createFramebuffer(),F=P.createFramebuffer(),k=new bv(P),O=new G_,X=new ib(P,Z,_,O,R,Me,k),me=new xv(L),ge=new M0(P),Ie=new ov(P,ge),te=new vv(P,ge,k,Ie),re=new Mv(P,te,ge,Ie,k),G=new Sv(P,R,X),He=new cv(O),ve=new V_(L,me,Z,R,Ie,He),Ge=new lb(L,O),Ee=new W_,be=new j_(Z),et=new rv(L,me,_,re,p,l),Ye=new tb(L,re,R),ce=new cb(P,k,R,_),Se=new av(P,Z,k),oe=new _v(P,Z,k),k.programs=ve.programs,L.capabilities=R,L.extensions=Z,L.properties=O,L.renderLists=Ee,L.shadowMap=Ye,L.state=_,L.info=k}x!==bn&&(T=new Ev(x,t.width,t.height,a,s,r));let Be=new Tu(L,P);this.xr=Be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(Ce,Q,!1))},this.getSize=function(A){return A.set(Ce,Q)},this.setSize=function(A,V,J=!0){if(Be.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=A,Q=V,t.width=Math.floor(A*se),t.height=Math.floor(V*se),J===!0&&(t.style.width=A+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Ce*se,Q*se).floor()},this.setDrawingBufferSize=function(A,V,J){Ce=A,Q=V,se=J,t.width=Math.floor(A*J),t.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===bn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(_e)},this.setViewport=function(A,V,J,j){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,V,J,j),_.viewport($.copy(_e).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,V,J,j){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,V,J,j),_.scissor(ee.copy(ae).multiplyScalar(se).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){_.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,J=!0){let j=0;if(A){let K=!1;if(q!==null){let Re=q.texture.format;K=m.has(Re)}if(K){let Re=q.texture.type,Le=g.has(Re),Te=et.getClearColor(),Ne=et.getClearAlpha(),ke=Te.r,tt=Te.g,st=Te.b;Le?(v[0]=ke,v[1]=tt,v[2]=st,v[3]=Ne,P.clearBufferuiv(P.COLOR,0,v)):(E[0]=ke,E[1]=tt,E[2]=st,E[3]=Ne,P.clearBufferiv(P.COLOR,0,E))}else j|=P.COLOR_BUFFER_BIT}V&&(j|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),et.dispose(),Ee.dispose(),be.dispose(),O.dispose(),me.dispose(),re.dispose(),Ie.dispose(),ce.dispose(),ve.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",_d),Be.removeEventListener("sessionend",bd),xs.stop()};function wt(A){A.preventDefault(),au("WebGLRenderer: Context Lost."),D=!0}function ut(){au("WebGLRenderer: Context Restored."),D=!1;let A=k.autoReset,V=Ye.enabled,J=Ye.autoUpdate,j=Ye.needsUpdate,K=Ye.type;We(),k.autoReset=A,Ye.enabled=V,Ye.autoUpdate=J,Ye.needsUpdate=j,Ye.type=K}function Vn(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){let V=A.target;V.removeEventListener("dispose",ti),ag(V)}function ag(A){lg(A),O.remove(A)}function lg(A){let V=O.get(A).programs;V!==void 0&&(V.forEach(function(J){ve.releaseProgram(J)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,j,K,Re){V===null&&(V=ze);let Le=K.isMesh&&K.matrixWorld.determinantAffine()<0,Te=ug(A,V,J,j,K);_.setMaterial(j,Le);let Ne=J.index,ke=1;if(j.wireframe===!0){if(Ne=te.getWireframeAttribute(J),Ne===void 0)return;ke=2}let tt=J.drawRange,st=J.attributes.position,De=tt.start*ke,dt=(tt.start+tt.count)*ke;Re!==null&&(De=Math.max(De,Re.start*ke),dt=Math.min(dt,(Re.start+Re.count)*ke)),Ne!==null?(De=Math.max(De,0),dt=Math.min(dt,Ne.count)):st!=null&&(De=Math.max(De,0),dt=Math.min(dt,st.count));let Ut=dt-De;if(Ut<0||Ut===1/0)return;Ie.setup(K,j,Te,J,Ne);let Tt,yt=Se;if(Ne!==null&&(Tt=ge.get(Ne),yt=oe,yt.setIndex(Tt)),K.isMesh)j.wireframe===!0?(_.setLineWidth(j.wireframeLinewidth*Ke()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(K.isLine){let sn=j.linewidth;sn===void 0&&(sn=1),_.setLineWidth(sn*Ke()),K.isLineSegments?yt.setMode(P.LINES):K.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else K.isPoints?yt.setMode(P.POINTS):K.isSprite&&yt.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(Z.get("WEBGL_multi_draw"))yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let sn=K._multiDrawStarts,Pe=K._multiDrawCounts,hn=K._multiDrawCount,ct=Ne?ge.get(Ne).bytesPerElement:1,Ln=O.get(j).currentProgram.getUniforms();for(let ni=0;ni<hn;ni++)Ln.setValue(P,"_gl_DrawID",ni),yt.render(sn[ni]/ct,Pe[ni])}else if(K.isInstancedMesh)yt.renderInstances(De,Ut,K.count);else if(J.isInstancedBufferGeometry){let sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pe=Math.min(J.instanceCount,sn);yt.renderInstances(De,Ut,Pe)}else yt.render(De,Ut)};function vd(A,V,J,j){U!==null&&A.isNodeMaterial&&U.setObject(j,A),le===!0&&He.setState(A,J,!1),A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,xa(A,V,j),A.side=ji,A.needsUpdate=!0,xa(A,V,j),A.side=Dn):xa(A,V,j)}this.compile=function(A,V,J=null){J===null&&(J=A),U!==null&&U.renderStart(A,V,J),S=be.get(J),S.init(V),y.push(S),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),A!==J&&A.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),pe=this.localClippingEnabled,le=He.init(this.clippingPlanes,pe),le===!0&&He.setGlobalState(this.clippingPlanes,V),U!==null&&Ye.render(S.state.shadowsArray,J,V);let j=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Re=K.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Te=Re[Le];vd(Te,J,V,K),j.add(Te)}else vd(Re,J,V,K),j.add(Re)}),S=y.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(A,V,J=null){let j=this.compile(A,V,J);return new Promise(K=>{function Re(){if(j.forEach(function(Le){let Ne=O.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&j.delete(Le)}),j.size===0){K(A);return}setTimeout(Re,10)}Z.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Qc=null;function cg(A){Qc&&Qc(A)}function _d(){xs.stop()}function bd(){xs.start()}let xs=new _p;xs.setAnimationLoop(cg),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(A){Qc=A,Be.setAnimationLoop(A),A===null?xs.stop():xs.start()},Be.addEventListener("sessionstart",_d),Be.addEventListener("sessionend",bd),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(A,V);let J=Be.enabled===!0&&Be.isPresenting===!0,j=T!==null&&(q===null||J)&&T.begin(L,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(V),V=Be.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,V,q),S=be.get(A,y.length),S.init(V),S.state.textureUnits=X.getTextureUnits(),y.push(S),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(ue,Xn,V.reversedDepth),pe=this.localClippingEnabled,le=He.init(this.clippingPlanes,pe),M=Ee.get(A,w.length),M.init(),w.push(M),Be.enabled===!0&&Be.isPresenting===!0){let Le=L.xr.getDepthSensingMesh();Le!==null&&eh(Le,V,-1/0,L.sortObjects)}eh(A,V,0,L.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(xe,Ve),Ze=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,Ze&&et.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&He.beginShadows();let K=S.state.shadowsArray;if(Ye.render(K,A,V),le===!0&&He.endShadows(),(j&&T.hasRenderPass())===!1){let Le=M.opaque,Te=M.transmissive;if(S.setupLights(),V.isArrayCamera){let Ne=V.cameras;if(Te.length>0)for(let ke=0,tt=Ne.length;ke<tt;ke++){let st=Ne[ke];Md(Le,Te,A,st)}Ze&&et.render(A);for(let ke=0,tt=Ne.length;ke<tt;ke++){let st=Ne[ke];Sd(M,A,st,st.viewport)}}else Te.length>0&&Md(Le,Te,A,V),Ze&&et.render(A),Sd(M,A,V)}q!==null&&W===0&&(X.updateMultisampleRenderTarget(q),X.updateRenderTargetMipmap(q)),j&&T.end(L),A.isScene===!0&&A.onAfterRender(L,A,V),Ie.resetDefaultState(),H=-1,Y=null,y.pop(),y.length>0?(S=y[y.length-1],X.setTextureUnits(S.state.textureUnits),le===!0&&He.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,U!==null&&U.renderEnd()};function eh(A,V,J,j){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ie)){j&&qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let Le=re.update(A),Te=A.material;Te.visible&&M.push(A,Le,Te,J,qe.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ie))){let Le=re.update(A),Te=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qe.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),qe.copy(Le.boundingSphere.center)),qe.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(Te)){let Ne=Le.groups;for(let ke=0,tt=Ne.length;ke<tt;ke++){let st=Ne[ke],De=Te[st.materialIndex];De&&De.visible&&M.push(A,Le,De,J,qe.z,st,V)}}else Te.visible&&M.push(A,Le,Te,J,qe.z,null,V)}}let Re=A.children;for(let Le=0,Te=Re.length;Le<Te;Le++)eh(Re[Le],V,J,j)}function Sd(A,V,J,j){let{opaque:K,transmissive:Re,transparent:Le}=A;S.setupLightsView(J),le===!0&&He.setGlobalState(L.clippingPlanes,J),j&&_.viewport($.copy(j)),K.length>0&&ga(K,V,J),Re.length>0&&ga(Re,V,J),Le.length>0&&ga(Le,V,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Md(A,V,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let De=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new _n(1,1,{generateMipmaps:!0,type:De?Kn:bn,minFilter:Ji,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=S.state.transmissionRenderTarget[j.id],Le=j.viewport||$;Re.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);let Te=L.getRenderTarget(),Ne=L.getActiveCubeFace(),ke=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(Ue),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),Ze&&et.render(J);let tt=L.toneMapping;L.toneMapping=Zn;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),le===!0&&He.setGlobalState(L.clippingPlanes,j),ga(A,J,j),X.updateMultisampleRenderTarget(Re),X.updateRenderTargetMipmap(Re),Z.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,Ut=V.length;dt<Ut;dt++){let Tt=V[dt],{object:yt,geometry:sn,material:Pe,group:hn}=Tt;if(Pe.side===Dn&&yt.layers.test(j.layers)){let ct=Pe.side;Pe.side=pn,Pe.needsUpdate=!0,wd(yt,J,j,sn,Pe,hn),Pe.side=ct,Pe.needsUpdate=!0,De=!0}}De===!0&&(X.updateMultisampleRenderTarget(Re),X.updateRenderTargetMipmap(Re))}L.setRenderTarget(Te,Ne,ke),L.setClearColor(Ue,fe),st!==void 0&&(j.viewport=st),L.toneMapping=tt}function ga(A,V,J){let j=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Re=A.length;K<Re;K++){let Le=A[K],{object:Te,geometry:Ne,group:ke}=Le,tt=Le.material;tt.allowOverride===!0&&j!==null&&(tt=j),Te.layers.test(J.layers)&&wd(Te,V,J,Ne,tt,ke)}}function wd(A,V,J,j,K,Re){U!==null&&K.isNodeMaterial&&U.setObject(A,K),A.onBeforeRender(L,V,J,j,K,Re),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(L,V,J,j,A,Re),K.transparent===!0&&K.side===Dn&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,L.renderBufferDirect(J,V,j,K,A,Re),K.side=ji,K.needsUpdate=!0,L.renderBufferDirect(J,V,j,K,A,Re),K.side=Dn):L.renderBufferDirect(J,V,j,K,A,Re),A.onAfterRender(L,V,J,j,K,Re)}function xa(A,V,J){V.isScene!==!0&&(V=ze);let j=O.get(A),K=S.state.lights,Re=S.state.shadowsArray,Le=K.state.version,Te=ve.getParameters(A,K.state,Re,V,J,S.state.lightProbeGridArray),Ne=ve.getProgramCacheKey(Te),ke=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,j.fog=V.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=me.get(A.envMap||j.environment,tt),j.envMapRotation=j.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",ti),ke=new Map,j.programs=ke);let st=ke.get(Ne);if(st!==void 0){if(j.currentProgram===st&&j.lightsStateVersion===Le)return Ad(A,Te),st}else Te.uniforms=ve.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,J,Te),A.onBeforeCompile(Te,L),st=ve.acquireProgram(Te,Ne),ke.set(Ne,st),j.uniforms=Te.uniforms;let De=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=He.uniform),Ad(A,Te),j.needsLights=fg(A),j.lightsStateVersion=Le,j.needsLights&&(De.ambientLightColor.value=K.state.ambient,De.lightProbe.value=K.state.probe,De.sunLights.value=K.state.sun,De.sunLightShadows.value=K.state.sunShadow,De.directionalLights.value=K.state.directional,De.directionalLightShadows.value=K.state.directionalShadow,De.spotLights.value=K.state.spot,De.spotLightShadows.value=K.state.spotShadow,De.rectAreaLights.value=K.state.rectArea,De.ltc_1.value=K.state.rectAreaLTC1,De.ltc_2.value=K.state.rectAreaLTC2,De.pointLights.value=K.state.point,De.pointLightShadows.value=K.state.pointShadow,De.hemisphereLights.value=K.state.hemi,De.sunShadowMatrix.value=K.state.sunShadowMatrix,De.sunShadowCascade.value=K.state.sunShadowCascade,De.directionalShadowMatrix.value=K.state.directionalShadowMatrix,De.spotLightMatrix.value=K.state.spotLightMatrix,De.spotLightMap.value=K.state.spotLightMap,De.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=S.state.lightProbeGridArray.length>0,j.currentProgram=st,j.uniformsList=null,st}function Ed(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Er.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ad(A,V){let J=O.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function hg(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let J=0,j=A.length;J<j;J++){let K=A[J];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function ug(A,V,J,j,K){V.isScene!==!0&&(V=ze),X.resetTextureUnits();let Re=V.fog,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?V.environment:null,Te=q===null?L.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ot.workingColorSpace,Ne=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,ke=me.get(j.envMap||Le,Ne),tt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color,Tt=Zn;j.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=L.toneMapping);let yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,sn=yt!==void 0?yt.length:0,Pe=O.get(j),hn=S.state.lights;if(le===!0&&(pe===!0||A!==Y)){let Et=A===Y&&j.id===H;He.setState(j,A,Et)}let ct=!1;j.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==hn.state.version||Pe.outputColorSpace!==Te||K.isBatchedMesh&&Pe.batching===!1||!K.isBatchedMesh&&Pe.batching===!0||K.isBatchedMesh&&Pe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Pe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Pe.instancing===!1||!K.isInstancedMesh&&Pe.instancing===!0||K.isSkinnedMesh&&Pe.skinning===!1||!K.isSkinnedMesh&&Pe.skinning===!0||K.isInstancedMesh&&Pe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Pe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Pe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Pe.instancingMorph===!1&&K.morphTexture!==null||Pe.envMap!==ke||j.fog===!0&&Pe.fog!==Re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==He.numPlanes||Pe.numIntersection!==He.numIntersection)||Pe.vertexAlphas!==tt||Pe.vertexTangents!==st||Pe.morphTargets!==De||Pe.morphNormals!==dt||Pe.morphColors!==Ut||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==sn||!!Pe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Pe.__version=j.version);let Ln=Pe.currentProgram;ct===!0&&(Ln=xa(j,V,K),U&&j.isNodeMaterial&&U.onUpdateProgram(j,Ln,Pe));let ni=!1,Bi=!1,Vs=!1,gt=Ln.getUniforms(),Dt=Pe.uniforms;if(_.useProgram(Ln.program)&&(ni=!0,Bi=!0,Vs=!0),j.id!==H&&(H=j.id,Bi=!0),Pe.needsLights){let Et=hg(S.state.lightProbeGridArray,K);Pe.lightProbeGrid!==Et&&(Pe.lightProbeGrid=Et,Bi=!0)}if(ni||Y!==A){_.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),gt.setValue(P,"projectionMatrix",A.projectionMatrix),gt.setValue(P,"viewMatrix",A.matrixWorldInverse);let zi=gt.map.cameraPosition;zi!==void 0&&zi.setValue(P,ye.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&gt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,Bi=!0,Vs=!0)}if(Pe.needsLights&&(hn.state.sunShadowMap.length>0&&gt.setValue(P,"sunShadowMap",hn.state.sunShadowMap,X),hn.state.directionalShadowMap.length>0&&gt.setValue(P,"directionalShadowMap",hn.state.directionalShadowMap,X),hn.state.spotShadowMap.length>0&&gt.setValue(P,"spotShadowMap",hn.state.spotShadowMap,X),hn.state.pointShadowMap.length>0&&gt.setValue(P,"pointShadowMap",hn.state.pointShadowMap,X)),K.isSkinnedMesh){gt.setOptional(P,K,"bindMatrix"),gt.setOptional(P,K,"bindMatrixInverse");let Et=K.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),gt.setValue(P,"boneTexture",Et.boneTexture,X))}K.isBatchedMesh&&(gt.setOptional(P,K,"batchingTexture"),gt.setValue(P,"batchingTexture",K._matricesTexture,X),gt.setOptional(P,K,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",K._indirectTexture,X),gt.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",K._colorsTexture,X));let Oi=J.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&G.update(K,J,Ln),(Bi||Pe.receiveShadow!==K.receiveShadow)&&(Pe.receiveShadow=K.receiveShadow,gt.setValue(P,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&V.environment!==null&&(Dt.envMapIntensity.value=V.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=ub()),Bi){if(gt.setValue(P,"toneMappingExposure",L.toneMappingExposure),Pe.needsLights&&dg(Dt,Vs),Re&&j.fog===!0&&Ge.refreshFogUniforms(Dt,Re),Ge.refreshMaterialUniforms(Dt,j,se,Q,S.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){let Et=Pe.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}Er.upload(P,Ed(Pe),Dt,X)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Er.upload(P,Ed(Pe),Dt,X),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&gt.setValue(P,"center",K.center),gt.setValue(P,"modelViewMatrix",K.modelViewMatrix),gt.setValue(P,"normalMatrix",K.normalMatrix),gt.setValue(P,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){let Et=j.uniformsGroups;for(let zi=0,Gs=Et.length;zi<Gs;zi++){let Cd=Et[zi];ce.update(Cd,Ln),ce.bind(Cd,Ln)}}return Ln}function dg(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function fg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,V,J){let j=O.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=V,O.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let J=O.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){q=A,B=V,W=J;let j=null,K=!1,Re=!1;if(A){let Te=O.get(A);if(Te.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Te.__webglFramebuffer),$.copy(A.viewport),ee.copy(A.scissor),de=A.scissorTest,_.viewport($),_.scissor(ee),_.setScissorTest(de),H=-1;return}else if(Te.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Te.__hasExternalTextures)X.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&O.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let ke=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?j=ke[V][J]:j=ke[V],K=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?j=O.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?j=ke[J]:j=ke,$.copy(A.viewport),ee.copy(A.scissor),de=A.scissorTest}else $.copy(_e).multiplyScalar(se).floor(),ee.copy(ae).multiplyScalar(se).floor(),de=Oe;if(J!==0&&(j=N),_.bindFramebuffer(P.FRAMEBUFFER,j)&&_.drawBuffers(A,j),_.viewport($),_.scissor(ee),_.setScissorTest(de),K){let Te=O.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,J)}else if(Re){let Te=V;for(let Ne=0;Ne<A.textures.length;Ne++){let ke=O.get(A.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,ke.__webglTexture,J,Te)}}else if(A!==null&&J!==0){let Te=O.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Te.__webglTexture,J)}H=-1};function Td(A){let V=O.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=R.textureFormatReadable(A.format),V.__typeReadable=R.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,J,j,K,Re,Le,Te=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){_.bindFramebuffer(P.FRAMEBUFFER,Ne);try{let ke=A.textures[Te],tt=ke.format,st=ke.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te);let De=Td(ke);if(De.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-j&&J>=0&&J<=A.height-K&&P.readPixels(V,J,j,K,Me.convert(tt),Me.convert(st),Re)}finally{let ke=q!==null?O.get(q).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,j,K,Re,Le,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(V>=0&&V<=A.width-j&&J>=0&&J<=A.height-K){_.bindFramebuffer(P.FRAMEBUFFER,Ne);let ke=A.textures[Te],tt=ke.format,st=ke.type;A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te);let De=Td(ke);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,dt),P.bufferData(P.PIXEL_PACK_BUFFER,Re.byteLength,P.STREAM_READ),P.readPixels(V,J,j,K,Me.convert(tt),Me.convert(st),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ut=q!==null?O.get(q).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ut);let Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hf(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Re),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(dt),P.deleteSync(Tt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,J=0){let j=Math.pow(2,-J),K=Math.floor(A.image.width*j),Re=Math.floor(A.image.height*j),Le=V!==null?V.x:0,Te=V!==null?V.y:0;X.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Le,Te,K,Re),_.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,j=null,K=0,Re=0){let Le,Te,Ne,ke,tt,st,De,dt,Ut,Tt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(J!==null)Le=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,tt=J.min.y,st=J.isBox3?J.min.z:0;else{let Dt=Math.pow(2,-K);Le=Math.floor(Tt.width*Dt),Te=Math.floor(Tt.height*Dt),A.isDataArrayTexture?Ne=Tt.depth:A.isData3DTexture?Ne=Math.floor(Tt.depth*Dt):Ne=1,ke=0,tt=0,st=0}j!==null?(De=j.x,dt=j.y,Ut=j.z):(De=0,dt=0,Ut=0);let yt=Me.convert(V.format),sn=Me.convert(V.type),Pe;V.isData3DTexture?(X.setTexture3D(V,0),Pe=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(X.setTexture2DArray(V,0),Pe=P.TEXTURE_2D_ARRAY):(X.setTexture2D(V,0),Pe=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let hn=_.getParameter(P.UNPACK_ROW_LENGTH),ct=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Ln=_.getParameter(P.UNPACK_SKIP_PIXELS),ni=_.getParameter(P.UNPACK_SKIP_ROWS),Bi=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),_.pixelStorei(P.UNPACK_SKIP_ROWS,tt),_.pixelStorei(P.UNPACK_SKIP_IMAGES,st);let Vs=A.isDataArrayTexture||A.isData3DTexture,gt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Dt=O.get(A),Oi=O.get(V),Et=O.get(Dt.__renderTarget),zi=O.get(Oi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Et.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Gs=0;Gs<Ne;Gs++)Vs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,O.get(A).__webglTexture,K,st+Gs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,O.get(V).__webglTexture,Re,Ut+Gs)),P.blitFramebuffer(ke,tt,Le,Te,De,dt,Le,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||O.has(A)){let Dt=O.get(A),Oi=O.get(V);_.bindFramebuffer(P.READ_FRAMEBUFFER,I),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,F);for(let Et=0;Et<Ne;Et++)Vs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,K,st+Et):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,K),gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oi.__webglTexture,Re,Ut+Et):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Oi.__webglTexture,Re),K!==0?P.blitFramebuffer(ke,tt,Le,Te,De,dt,Le,Te,P.COLOR_BUFFER_BIT,P.NEAREST):gt?P.copyTexSubImage3D(Pe,Re,De,dt,Ut+Et,ke,tt,Le,Te):P.copyTexSubImage2D(Pe,Re,De,dt,ke,tt,Le,Te);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gt?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Pe,Re,De,dt,Ut,Le,Te,Ne,yt,sn,Tt.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,Re,De,dt,Ut,Le,Te,Ne,yt,Tt.data):P.texSubImage3D(Pe,Re,De,dt,Ut,Le,Te,Ne,yt,sn,Tt):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Re,De,dt,Le,Te,yt,sn,Tt.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Re,De,dt,Tt.width,Tt.height,yt,Tt.data):P.texSubImage2D(P.TEXTURE_2D,Re,De,dt,Le,Te,yt,sn,Tt);_.pixelStorei(P.UNPACK_ROW_LENGTH,hn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Ln),_.pixelStorei(P.UNPACK_SKIP_ROWS,ni),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),Re===0&&V.generateMipmaps&&P.generateMipmap(Pe),_.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),_.unbindTexture()},this.resetState=function(){B=0,W=0,q=null,_.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var rs={ug:-3.15,eg:0,og:3.15,dg:6.3},Go=.12,ts=2.2,ns=[],Tp=[],Ru=[],Mc=[],Cu=[],Cp=[],db=0;function At(i,e,t,n,s,r,o={}){let a={id:`${i}-${++db}`,kind:e,size:t,position:n,rotation:[0,0,0],color:s,floor:r,...o};return Tp.push(a),a}function en(i,e,t,n,s,r,o,a){let l=rs[t]??0,c={id:i,name:e,floor:t,color:a,bounds:{minX:n,maxX:n+r,minY:l,maxY:l+(t==="dg"?4.5:3.15),minZ:s,maxZ:s+o}};return ns.push(c),c}en("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");en("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");en("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");en("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");en("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");en("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");en("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");en("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[i,e,t]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[s,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])en(t[s],e[s],i,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][s]);let n=i==="ug"?"cellar":"upper";en(`${n}-hall`,i==="ug"?"Kellerflur":"Flur & Lesenische",i,0,5,14,2,"#d1c1aa"),en(`${n}-hall-south`,i==="ug"?"Kellerflur":"Lesenische",i,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,en(`${n}-core`,`Treppenhaus \xB7 ${i==="ug"?"Keller":"OG"}`,i,5.5,0,3,5,"#d2b694")}en("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");en("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";en("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";en("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var Tr=en("garden","Garten","garden",-5,-7,24,25,"#91aa6d");Tr.bounds.minY=-.15;Tr.bounds.maxY=14;var Qt=(i,e,t,n,s,r,o,a=1,l=!1)=>({a:i,b:e,type:"door",id:t,name:n,threshold:s,rooms:[r,o],swing:a,hingeEnd:l}),Wt=(i,e,t=!1,n=.95,s=2.3)=>({a:i,b:e,type:"window",open:t,sill:n,head:s});function Rp(i,e,t,n,s,r){At(`${i}-cross-horizontal`,"window-bar",t?[s,.06,.2]:[.2,.06,s],[...n],"#fffdf5",e),At(`${i}-cross-vertical`,"window-bar",t?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",e)}function bt(i,e,t,n,s,r=[],o=3.15){let a=rs[i],l=i==="ug"?"#b5b5a4":i==="dg"?"#ded0b8":"#e6dfca",c=`${i}-wall-${e?"z":"x"}${t}-${n}`,u=(h,f,p,x,m="wall",g=l)=>{f-h<=.001||x-p<=.001||At(c,m,e?[f-h,x-p,Go]:[Go,x-p,f-h],e?[(h+f)/2,a+(p+x)/2,t]:[t,a+(p+x)/2,(h+f)/2],g,i)},d=n;for(let h of[...r].sort((f,p)=>f.a-p.a)){u(d,h.a,0,o);let f=h.type==="door"?0:h.sill,p=h.type==="door"?ts:h.head;u(h.a,h.b,0,f),u(h.a,h.b,p,o);let x=h.b-h.a,m=e?[(h.a+h.b)/2,a+(f+p)/2,t]:[t,a+(f+p)/2,(h.a+h.b)/2];if(Mc.push({id:h.id||`${c}-window-${h.a}`,floor:i,type:h.type,open:h.open??!1,horizontal:e,fixed:t,from:h.a,to:h.b,sill:a+f,head:a+p,position:m}),h.type==="door"){let g=h.hingeEnd?h.b:h.a,v=e?[g,a+ts/2,t]:[t,a+ts/2,g],E=h.hingeEnd?-1:1,b=(e?-h.swing*E:h.swing*E)*Math.PI/2;Ru.push({id:h.id,name:h.name,threshold:h.threshold,rooms:h.rooms,floor:i,size:[x-.025,ts-.025,.055],position:m,rotation:[0,e?0:Math.PI/2,0],hinge:{position:v,axis:"y",angle:b},color:i==="ug"?"#788c82":"#b99469",open:!1});let M=.035;for(let S of[h.a-M/2,h.b+M/2])At(`${h.id}-frame`,"trim",e?[M,ts,.18]:[.18,ts,M],e?[S,a+ts/2,t]:[t,a+ts/2,S],"#f1e6cc",i)}else{h.open||(u(h.a,h.b,f,p,"glass","#a5d2dc"),Rp(`${c}-window-${h.a}`,i,e,m,x,p-f));let g=.035;for(let v of[f,p])At(`${c}-sill`,"trim",e?[x,g,.18]:[.18,g,x],[m[0],a+v,m[2]],"#fbefcf",i);for(let v of[h.a,h.b])At(`${c}-jamb`,"trim",e?[g,p-f,.15]:[.15,p-f,g],e?[v,m[1],t]:[t,m[1],v],"#fbefcf",i)}d=h.b}u(d,s,0,o)}function is(i,e,t,n,s,r,o,a=rs[e]){At(i,"floor",[s,.14,r],[t+s/2,a-.07,n+r/2],o,e)}for(let i of["ug","eg","og","dg"])i==="ug"?is("cellar-floor",i,0,0,14,12,"#9d9f92"):(is("west-floor",i,0,0,5.5,12,i==="dg"?"#9d7953":"#b99671"),is("east-floor",i,8.5,0,5.5,12,i==="dg"?"#a68159":"#b99671"),is("hall-floor",i,5.5,4,3,8,"#c8b391"));is("garden-west","garden",-5,-7,5,25,"#83a363",0);is("garden-east","garden",14,-7,5,25,"#8aab69",0);is("garden-north","garden",0,-7,14,7,"#8cae6a",0);is("garden-south","garden",0,12,14,6,"#92ad72",0);At("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");At("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");bt("eg",!0,0,0,14,[Qt(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),Qt(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);bt("eg",!0,12,0,14,[Wt(3.5,4.9,!0),Qt(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),Wt(12.45,13.5)]);bt("eg",!1,0,0,12,[Wt(1.3,3.1),Wt(9,10.4)]);bt("eg",!1,14,0,12,[Wt(1.2,2.4),Wt(8.8,9.5)]);bt("eg",!1,5.5,0,12,[Qt(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),Qt(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);bt("eg",!1,8.5,0,12,[Qt(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),Qt(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);bt("eg",!0,5,5.5,8.5,[Qt(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);bt("eg",!0,7,0,5.5,[Qt(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);bt("eg",!0,7,8.5,14);bt("eg",!1,11,7,12,[Qt(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),Qt(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);bt("eg",!0,10,11,14);for(let[i,e]of[["hall-stairs",1],["front-door",-1]]){let t=Ru.find(n=>n.id===i);t.position[2]+=.095*e,t.hinge.position[2]+=.095*e,t.hinge.angle*=2}for(let i of["ug","og"]){let e=i==="ug",t=e?"cellar":"upper",n=e?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],s=e?[14,17,20,23]:[17,19,22,24];bt(i,!1,5.5,0,5),bt(i,!1,8.5,0,5),bt(i,!0,5,0,14,[Qt(2.7,4,n[0],ns.find(r=>r.id===n[0]).name,s[0],`${t}-hall`,n[0],-1),Qt(6.3,7.7,`${t}-stairs`,e?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",e?12:14,`${t}-core`,`${t}-hall`,1),Qt(10,11.4,n[1],ns.find(r=>r.id===n[1]).name,s[1],`${t}-hall`,n[1],-1)]),bt(i,!0,7,0,5.5,[Qt(3,4.4,n[2],ns.find(r=>r.id===n[2]).name,s[2],`${t}-hall`,n[2],1)]),bt(i,!0,7,8.5,14,[Qt(10,11.4,n[3],ns.find(r=>r.id===n[3]).name,s[3],`${t}-hall`,n[3],1)]),bt(i,!1,5.5,7,12),bt(i,!1,8.5,7,12),bt(i,!0,0,0,14,e?[Wt(1.1,2.8,!1,2.1,2.75),Wt(10.5,12,!1,2.1,2.75)]:[Wt(1.2,3.2),Wt(10.5,12)]),bt(i,!0,12,0,14,e?[]:[Wt(1.2,3.2),Wt(10.5,12)]),bt(i,!1,0,0,12,e?[]:[Wt(1.4,3.1),Wt(8.5,10.2,!0)]),bt(i,!1,14,0,12,e?[]:[Wt(1.6,3.3,!0),Wt(9.8,11.2)])}for(let i of["ug","eg","og"]){let e=rs[i],t=10,n=3.15/2/t,s=3/t;for(let r=0;r<t;r++)At("stair-left","stairs",[.85,.12,s+.015],[6.125,e+n*(r+1)-.06,3.85-s*(r+.5)],"#bba480",i),At("stair-right","stairs",[.85,.12,s+.015],[7.875,e+3.15/2+n*(r+1)-.06,.85+s*(r+.5)],"#bba480",i);At("stair-middle-landing","stairs",[2.6,.13,.5],[7,e+3.15/2-.065,.6],"#bba480",i);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])At("stair-post","railing",[.035,.65,.035],[r,e+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",i)}var Ip=3.1/7,ss=Math.atan(Ip),ui=i=>7.45+Math.min(i,14-i)*Ip;bt("dg",!1,0,0,12,[],1.15);bt("dg",!1,14,0,12,[],1.15);bt("dg",!1,5.5,0,5,[],3);bt("dg",!1,8.5,0,5,[],3);bt("dg",!0,5,5.5,8.5,[Qt(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function Pp(i,e){let t=[...new Set([0,14,...Array.from({length:55},(n,s)=>(s+1)*.25),...e.flatMap(n=>[n.a,n.b])])].sort((n,s)=>n-s);for(let n=1;n<t.length;n++){let s=t[n-1],r=t[n],o=Math.min(ui(s),ui(r))-6.3-.025,a=e.find(c=>(s+r)/2>c.a&&(s+r)/2<c.b),l=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[c,u]of l)u>c&&At("gable","wall",[r-s,u-c,Go],[(s+r)/2,6.3+(c+u)/2,i],"#ded0b8","dg")}for(let n of e){let s=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,i];Mc.push({id:`dg-gable-window-${i}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:i,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:s}),At("gable-window","glass",[n.b-n.a,n.head-n.sill,Go],s,"#a5d2dc","dg"),Rp(`gable-window-${i}-${n.a}`,"dg",!0,s,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])At("gable-window-frame","trim",[n.b-n.a,.035,.18],[s[0],6.3+r,i],"#fbefcf","dg");for(let r of[n.a,n.b])At("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,s[1],i],"#fbefcf","dg")}for(let n of[3.5,10.5])At("gable-sloping-cap","wall",[7/Math.cos(ss),.25,Go],[n,ui(n)-.105,i],"#ded0b8","dg",{rotation:[0,0,n<7?ss:-ss]})}Pp(0,[Wt(1.8,3.2,!1,.6,1.65),Wt(10.5,12,!1,.6,1.65)]);Pp(12,[Wt(6,8,!1,.65,1.7)]);function Ho(i,e,t,n,s){At(i,"roof",[(t-e)/Math.cos(ss),.14,s-n],[(e+t)/2,ui((e+t)/2),(n+s)/2],"#98705b","dg",{rotation:[0,0,e>=7?-ss:ss]})}Ho("roof-west-front",0,7,0,7.25);Ho("roof-west-back",0,7,9.15,12);Ho("roof-west-eave",0,.35,7.25,9.15);Ho("roof-west-upper",2,7,7.25,9.15);Ho("roof-east",7,14,0,12);Mc.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,ui(1.175),8.2]});for(let i of[7.25,9.15])At("roof-window-frame","trim",[1.65/Math.cos(ss),.055,.055],[1.175,ui(1.175),i],"#f3e2bf","dg",{rotation:[0,0,ss]});for(let i of[.35,2])At("roof-window-frame","trim",[.055,.055,1.9],[i,ui(i),8.2],"#f3e2bf","dg");for(let i of[6.75,10.3]){for(let e of[3.4,10.6])At("attic-post","beam",[.16,ui(e)-6.3,.16],[e,(6.3+ui(e))/2,i],"#74543a","dg");At("attic-crossbeam","beam",[8,.16,.16],[7,8.7,i],"#74543a","dg")}function Iu(i){return ns.find(e=>e.id===i)?.floor||"garden"}function at(i,e,t,n,s,r,o){return At(`${i}-${e}`,t,n,s,r,Iu(i),{roomId:i,...o})}function os(i,e,t,n,s,r,o,a,l={}){let c={id:`${i}-${e}`,name:e,roomId:i,floor:Iu(i),x:t,z:n,width:s,depth:r,height:o,kind:a,...l};return Cp.push(c),c}function Ci(i){return rs[Iu(i)]??0}function Sn(i,e,t,n,s,r,o=.78,a="#be986a"){os(i,e,t,n,s,r,o,"table",{underClearance:o-.065});let l=Ci(i);at(i,e,"tabletop",[s,.065,r],[t+s/2,l+o-.0325,n+r/2],a);for(let c of[t+.07,t+s-.07])for(let u of[n+.07,n+r-.07])at(i,e,"table-leg",[.045,o-.065,.045],[c,l+(o-.065)/2,u],"#806548")}function mn(i,e,t,n,s=.6,r=.65,o="#80998c",a="south"){let l=Ci(i),c=.49;os(i,e,t,n,s,r,.94,"chair",{underClearance:.435}),at(i,e,"chair-seat",[s,.055,r],[t+s/2,l+c-.0275,n+r/2],o);for(let d of[t+.055,t+s-.055])for(let h of[n+.055,n+r-.055])at(i,e,"chair-leg",[.035,.435,.035],[d,l+.2175,h],"#856c4c");let u=a==="south"||a==="north";at(i,e,"chair-back",u?[s,.45,.045]:[.045,.45,r],[u?t+s/2:a==="east"?t+.0225:t+s-.0225,l+.715,u?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function mt(i,e,t,n,s,r,o=1.7,a=null,l="#b28c60",c=!1){let u=Ci(i);if(os(i,e,t,n,s,r,o,"cabinet",{back:a}),c){let d=s>=r;for(let h of[0,(d?s:r)-.045])at(i,e,"shelf-side",d?[.045,o,r]:[s,o,.045],[d?t+h+.0225:t+s/2,u+o/2,d?n+r/2:n+h+.0225],l);for(let h=.06;h<o;h+=.43)at(i,e,"shelf-board",[s,.035,r],[t+s/2,u+h,n+r/2],l);for(let h=0;h<5;h++){let f=.43*(h%Math.max(1,Math.floor(o/.43)))+.18;at(i,`${e}-books`,"books",d?[.24,.23,r*.72]:[s*.72,.23,.24],[d?t+s*(.2+.14*h):t+s/2,u+f,d?n+r/2:n+r*(.2+.14*h)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][h])}}else{at(i,e,"cabinet",[s,o,r],[t+s/2,u+o/2,n+r/2],l);let d=s>=r;for(let h=0;h<Math.max(1,Math.floor((d?s:r)/.55));h++){let f=Math.max(1,Math.floor((d?s:r)/.55)),p=d?[t+(h+.5)*s/f,u+o*.56,n+r-.012]:[t+s-.012,u+o*.56,n+(h+.5)*r/f];at(i,`${e}-handle`,"detail",d?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function cn(i,e,t,n,s,r,o,a){os(i,e,t,n,s,r,o,"solid"),at(i,e,"furniture",[s,o,r],[t+s/2,Ci(i)+o/2,n+r/2],a)}function wc(i,e,t,n=.3,s=1.05){let r=Ci(i);os(i,"Pflanze",e-n,t-n,n*2,n*2,s,"plant"),at(i,"pot","plant-pot",[n,.3,n],[e,r+.15,t],"#b68460"),at(i,"stem","plant-stem",[.035,s*.7,.035],[e,r+s*.47,t],"#627a48");for(let o=0;o<4;o++)at(i,"leaf","foliage",[n*.85,.07,n*.52],[e+Math.cos(o*1.8)*n*.45,r+s*(.65+.09*o),t+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function Lp(i,e,t,n,s){let r=Ci(i);os(i,"Bett",e,t,n,s,.75,"bed"),at(i,"bed-base","bed",[n,.3,s],[e+n/2,r+.24,t+s/2],"#99704e"),at(i,"mattress","bed",[n-.06,.2,s-.06],[e+n/2,r+.49,t+s/2],"#ede1cc");let o=s>=n;at(i,"headboard","bed",o?[n,.85,.075]:[.075,.85,s],[o?e+n/2:e+.04,r+.425,o?t+.04:t+s/2],"#a47c56"),at(i,"blanket","bed",o?[n-.08,.06,s*.6]:[n*.6,.06,s-.08],[o?e+n/2:e+n*.65,r+.62,o?t+s*.65:t+s/2],i==="nursery"?"#87b2b0":"#b58e9b"),at(i,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,s*.7],[o?e+n/2:e+.4,r+.66,o?t+.4:t+s/2],"#fff1d8")}function Np(i,e,t){let n=Ci(i);os(i,"Toilette",e,t,.78,.6,.82,"sanitary"),at(i,"cistern","sanitary",[.18,.82,.6],[e+.69,n+.41,t+.3],"#f5eee0"),at(i,"toilet-base","sanitary",[.43,.36,.35],[e+.34,n+.18,t+.3],"#ebe7db"),at(i,"toilet-seat","sanitary",[.57,.07,.51],[e+.315,n+.435,t+.3],"#faf5e7")}function Dp(i,e,t,n,s){cn(i,"Waschtisch",e,t,n,s,.76,"#9baeb1"),at(i,"basin","sanitary",[n,.09,s],[e+n/2,Ci(i)+.805,t+s/2],"#f7eedc")}var xt=(i,e,t)=>({axis:i,value:e,edge:t});Sn("dining","Esstisch",1.8,2.3,1.8,2.4);for(let i of[2.5,4])mn("dining",`Stuhl-west-${i}`,.85,i,.65,.6,"#ba9664","east"),mn("dining",`Stuhl-east-${i}`,3.95,i,.65,.6,"#ba9664","west");mn("dining","Stuhl-nord",2.4,1.3);mn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");mt("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,xt("z",0,"min"));mt("dining","Sideboard",.07,5.35,.55,1.3,.85,xt("x",0,"min"));wc("dining",1.2,6.3);cn("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");cn("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");mt("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,xt("x",0,"min"),"#d9ded1");Sn("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");mn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);at("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let i of[8.2,8.65])at("kitchen","hob","detail",[.32,.018,.32],[.385,.925,i],"#4e5b5a");cn("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");at("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let i of[3.05,5.45])at("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,i+.125],"#5d8271");for(let i=0;i<3;i++)at("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*i],"#8aa48b");Sn("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");mt("living","TV-Bank",8.57,2.65,.33,1.75,.5,xt("x",8.5,"min"),"#b69871");at("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");mt("living","Buecherregal",9,.07,2,.5,1.85,xt("z",0,"min"),"#b99466",!0);mn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");wc("living",13.4,6.4,.3);mt("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,xt("x",5.5,"min"));Sn("hall","Sitzbank",8,10.35,.43,1,.45);wc("hall",5.95,11.5,.23);mt("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,xt("z",12,"max"),"#a5ad92");Sn("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);mt("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,xt("z",7,"min"));Np("guest-wc",13.15,8.1);Dp("guest-wc",12.4,7.07,.9,.43);mt("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,xt("z",10,"max"),"#aec0b6");mt("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,xt("z",10,"min"),"#af9c76",!0);mt("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,xt("x",14,"max"));Sn("workshop","Werkbank",.6,.07,3.5,.8,.87);mt("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,xt("x",5.5,"max"),"#929c8b");mn("workshop","Hocker",1.8,1.4);cn("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let i of[8.57,9.7])cn("laundry","Waschgeraet",i,.07,1,.98,.92,"#dfe3d8"),at("laundry","Waschfenster","detail",[.58,.58,.024],[i+.5,-3.15+.46,1.06],"#729498");Sn("laundry","Waeschetisch",12,.07,1.8,.63);cn("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");Sn("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");mt("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,xt("x",0,"min"),"#b49569",!0);mt("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,xt("x",5.5,"max"),"#b49569",!0);mt("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,xt("z",12,"max"));cn("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");cn("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");mt("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,xt("x",8.5,"min"),"#7c9790");mt("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,xt("z",12,"max"));mt("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,xt("x",0,"min"));mt("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,xt("x",14,"max"));Lp("bedroom",1.65,.07,2,2.55);cn("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");cn("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");mt("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,xt("x",0,"min"),"#b8aa92");Sn("office","Schreibtisch",9,.07,2.8,.8);mn("office","Schreibtischstuhl",10,1.3);at("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");mt("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,xt("x",14,"max"),"#b7986e",!0);mt("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,xt("x",14,"max"),"#b7986e",!0);Lp("nursery",.07,7.07,2.4,1.2);Sn("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);mn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");mt("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,xt("x",5.5,"max"),"#87a6a0",!0);for(let[i,e,t]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])cn("nursery",`Bauklotz-${i}`,e,t,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][i]);os("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");at("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let i of[7.12,8.02])at("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,i],"#f2efe3");for(let i of[11.8,13.88])at("bathroom","bath-end","sanitary",[.1,.58,1],[i,3.5,7.57],"#f2efe3");Dp("bathroom",8.57,9,.48,1.15);Np("bathroom",13.15,11.3);mt("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,xt("z",12,"max"),"#a6bab6");mn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");mt("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,xt("x",8.5,"max"),"#ad8e61",!0);mt("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,xt("x",0,"min"));mt("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,xt("x",14,"max"));for(let[i,e,t,n,s]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])cn("attic-west",`Koffer-${i}`,e,t,n,s,.48+i*.13,["#9b7658","#c3a071","#889687"][i]);Sn("attic-east","Basteltisch",9.15,.07,2.4,1.1);mn("attic-east","Bastelstuhl",9.95,1.55);mt("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);Sn("attic","Dachtisch",8.3,8.1,1.8,1);cn("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");cn("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");mt("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,xt("z",12,"max"));Sn("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let i of[5.15,6.65])mn("garden",`Terrassenstuhl-N-${i}`,i,-3.25,.6,.65,"#9daa84"),mn("garden",`Terrassenstuhl-S-${i}`,i,-1,.6,.65,"#9daa84","north");mn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");mn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");Sn("garden","Gartenbank",-4,4,2.5,.65,.52);cn("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let i=0;i<4;i++)for(let e of[16.1,16.9])wc("garden",e,5.4+.9*i,.18,1.02);for(let[i,e,t]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){at("garden","tree-trunk","tree",[.35,3.3,.35],[i,1.65,e],"#816442");for(let n=0;n<3;n++)at("garden","tree-crown","foliage",[t*1.25,t*.9,t*1.1],[i+Math.cos(n*2.1)*.45,3.1+n*.35,e+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let i of[-7,18])At("boundary-hedge","boundary",[24,1.5,.25],[7,.75,i],"#6d8d59","garden");for(let i of[-5,19])At("boundary-hedge","boundary",[.25,1.5,25],[i,.75,5.5],"#6d8d59","garden");function Pt(i,e){let t=Ci(i);for(let[n,s,r,o=!1]of e)Cu.push({id:`${i}-star-${Cu.filter(a=>a.roomId===i).length+1}`,roomId:i,x:n,y:t+s,z:r,radius:o?.14:.22,under:o})}Pt("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);Pt("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);Pt("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);Pt("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);Pt("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);Pt("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);Pt("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);Pt("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);Pt("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);Pt("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);Pt("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);Pt("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);Pt("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);Pt("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);Pt("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);Pt("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);Pt("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);Pt("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);Pt("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);Pt("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);Pt("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);Pt("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);Pt("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[i,e]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])Pt(i,[[7,1.4,2.2],[7,2.5,3.3]]);var gn={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:ns,doors:Ru,obstacles:Tp,openings:Mc,furniture:Cp,collectibles:Cu,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function Fp(i){let{x:e,y:t,z:n}=i;if(![e,t,n].every(Number.isFinite))return null;let s=o=>{let a=o.bounds;return e>=a.minX&&e<a.maxX&&t>=a.minY-.025&&t<a.maxY&&n>=a.minZ&&n<a.maxZ},r=ns.find(o=>o.floor!=="garden"&&s(o));return r?r.floor==="dg"&&t>ui(Math.max(0,Math.min(14,e)))+.12?s(Tr)?Tr:null:r:s(Tr)?Tr:null}function Cr(i,e=!1){let t=[...i.rotation||[0,0,0]],n=[...i.position];if(e&&i.hinge){let s=i.hinge.position,r=i.hinge.angle,o=n[0]-s[0],a=n[2]-s[2];n[0]=s[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=s[2]-Math.sin(r)*o+Math.cos(r)*a,t[1]+=r}return{size:[...i.size],position:n,rotation:t}}var fb=["classic","glider","dart","stunt"];var Bp={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function pb(i,e){let t=[0,1,2].map(n=>i.reduce((s,r)=>s+r[n],0)/i.length);return e.map(n=>{let[s,r,o]=n.map(d=>i[d]),a=r.map((d,h)=>d-s[h]),l=o.map((d,h)=>d-s[h]);return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]].reduce((d,h,f)=>d+h*(s[f]-t[f]),0)<0?[...n].reverse():n})}function Ec(i,e,t,n,s,r=0,o=0){let a=e.length,l=[-1,1].flatMap(u=>e.map(([d,h])=>[d*s,(o+Math.abs(d)*r+u*t/2)*s,h*s])),c=[Array.from({length:a},(u,d)=>d),Array.from({length:a},(u,d)=>d+a)];for(let u=0;u<a;u++)c.push([u,(u+1)%a,(u+1)%a+a,u+a]);return{id:i,kind:"convex",vertices:l,faces:pb(l,c),color:n}}function Up(i,e,t,n=20){return Array.from({length:n},(s,r)=>{let o=r*Math.PI*2/n;return[i/2*Math.cos(o),t+e/2*Math.sin(o)]})}function mb(i,e){let t=-e.length/2,n=e.length/2,s=e.span/2,r=[[0,t],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[e.tail/2,n],[-e.tail/2,n]];return i==="dart"?{wing:[[0,t+.015],[s,n-.025],[0,n-.025]],fuselage:r,tail:o}:i==="glider"?{wing:Array.from({length:17},(a,l)=>{let c=-Math.PI/2+l*Math.PI/16;return[l===0||l===16?0:s*Math.cos(c),-.015+.105*Math.sin(c)]}),fuselage:Up(.056,e.length,0),tail:Up(e.tail,.08,n-.04)}:i==="stunt"?{wing:[[0,-.065],[s,-.065],[s,.045],[0,.045]],fuselage:[[0,t],[.028,t+.04],[.028,n-.008],[-.028,n-.008],[-.028,t+.04]],tail:[[-e.tail/2,n-.064],[e.tail/2,n-.064],[e.tail/2,n],[-e.tail/2,n]]}:{wing:[[0,t+.025],[s,.035],[s,.145],[0,n-.035]],fuselage:r,tail:[[-e.tail/2,n-.05],[e.tail/2,n-.05],[e.tail*.38,n],[-e.tail*.38,n]]}}function Ls(i="classic",e=1){i=fb.includes(i)?i:"classic",e=Number.isFinite(Number(e))?Math.max(.55,Math.min(1.5,Number(e))):1;let t=Bp[i],n=mb(i,t),s=e*.78,r=[Ec("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,t.color,s,.045),Ec("right-wing",n.wing,.008,t.color,s,.045),Ec("fuselage",n.fuselage,.044,16768916,s,0,-.014),Ec("tail",n.tail,.008,t.color,s,0,.011)];return{form:i,size:e,span:t.span*s,length:t.length*s,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function Op(i="classic",e=1){let t=Ls(i,e),n=Bp[t.form],s=t.size;return{speed:1.65*n.speed*(.94+.06*s),turnRate:1.8*n.turn/Math.pow(s,.65),pitchRate:.8/Math.pow(s,.35),sinkRate:.095*n.sink/Math.pow(s,.6),energyLoss:.035*n.sink/Math.pow(s,.55),glideRatio:1.65/.095*n.speed*(.94+.06*s)/n.sink*Math.pow(s,.6)}}var gb=new Map(gn.rooms.map(i=>[i.id,i])),xb=new Set(["cellar-core","stairs","upper-core","attic-core"]),yb=new Map(gn.collectibles.map(i=>{let e=!!i.under,t=gb.get(i.roomId)?.floor==="ug"||xb.has(i.roomId);return[i.id,Object.freeze({id:i.id,roomId:i.roomId,under:e,zone:t,basePoints:150+(e?150:0)+(t?150:0)})]}));function Wo(i){let e=typeof i=="string"?i:i?.id,t=yb.get(e);if(!t)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return t}function zp(i){if(!Array.isArray(i)||!i.every(e=>typeof e=="string"))throw new Error("Die gesammelten Sterne sind ung\xFCltig.");return[...new Set(i)].reduce((e,t)=>e+Wo(t).basePoints,0)}var Pu=Object.freeze(["none","mint","spark","confetti"]);function as(i){if(i===null)return null;if(typeof i!="string"||!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Bitte w\xE4hle eine g\xFCltige Farbe im Format #RRGGBB.");return i.toLowerCase()}function kp(i){if(!Pu.includes(i))throw new Error("Dieser Flugeffekt ist nicht verf\xFCgbar.");return i}function Vp(i,e=null){let t=as(e);if(t===null)return"#"+i.color.toString(16).padStart(6,"0");let n={"left-wing":1,"right-wing":.9,fuselage:.72,tail:1.06}[i.id]??1;return"#"+[1,3,5].map(s=>Math.min(255,Math.round(parseInt(t.slice(s,s+2),16)*n)).toString(16).padStart(2,"0")).join("")}function qo(i,e=null,t=null){let n=t?new Qe(t):null;i.traverse(s=>{!s.isMesh||s.userData.paperColor===void 0||(s.material.color.set(Vp({id:s.name,color:s.userData.paperColor},e)),e===null&&n&&s.material.color.lerp(n,.6))})}var Lu=54,Nu=28,vb=["#d58c7e","#79c6b2","#e9c774","#a7a0d6"];function Ac(i,{name:e="Flugspur",effect:t="none"}={}){let n=new Float32Array(Lu*3),s=new Ot;s.setAttribute("position",new un(n,3));let r=new co(s,new ur({color:"#80d6ba",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1})),o=new ws(new Yn(1,1,1),new Tn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),Nu);r.name=`${e} Linie`,o.name=`${e} Partikel`;for(let S of[r,o])S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,i.add(S);let a=new lt,l=new Vt,c=new fn,u=new z,d=new z,h=new Qe,f="none",p=!1,x=!1;function m(){p=!1,r.visible=o.visible=!1}function g(S){if(m(),!!S){for(let w=0;w<Lu;w++)n[w*3]=S.x,n[w*3+1]=S.y,n[w*3+2]=S.z;p=!0,s.attributes.position.needsUpdate=!0}}function v(S="none"){if(S=Pu.includes(S)?S:"none",S!==f){f=S,m(),r.material.color.set(S==="spark"?"#e9bd5e":"#80d6ba");for(let w=0;w<Nu;w++)o.setColorAt(w,h.set(S==="confetti"?vb[w%4]:"#f7d581"));o.instanceColor.needsUpdate=!0}}function E(S){if(!x){if(!p||Math.hypot(S.x-n[0],S.y-n[1],S.z-n[2])>1.5){g(S);return}n.copyWithin(3,0,n.length-3),n[0]=S.x,n[1]=S.y,n[2]=S.z,s.attributes.position.needsUpdate=!0}}function b(S=1/60,w=0){let y=p&&Math.hypot(n[0]-n[18],n[1]-n[19],n[2]-n[20])>.035;if(r.visible=y&&(f==="mint"||f==="spark"),o.visible=y&&(f==="spark"||f==="confetti"),!!o.visible){for(let T=0;T<Nu;T++){let L=Math.min(Lu-1,2+T)*3,D=1-T/32,U=(f==="confetti"?.037:.022)*D*(f==="spark"?.6+.4*Math.sin(w*8+T)**2:1);u.set(n[L]+Math.sin(T*2.4)*.045,n[L+1]+Math.cos(T*1.7)*.035-T*.001,n[L+2]),l.setFromEuler(c.set(w*2+T,T*.7,w*1.4+T)),d.set(U,f==="confetti"?U*.22:U,U),o.setMatrixAt(T,a.compose(u,l,d))}o.instanceMatrix.needsUpdate=!0}}function M(){x||(m(),x=!0,i.remove(r,o),s.dispose(),r.material.dispose(),o.geometry.dispose(),o.material.dispose(),o.dispose())}return v(t),{trail:r,particles:o,setEffect:v,reset:g,push:E,update:b,clear:m,dispose:M,get effect(){return f}}}var ls=1e-7,_b=new Set(["wall","floor","roof"]),Gp={floor:3,wall:2,roof:1},Yo=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Xo=(i,e)=>i.map((t,n)=>t-e[n]),bb=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Sb=(i,e)=>{let t=Yo(i,e.normal)-e.offset;return Math.abs(t)<=ls?0:t};function Mb(i){let e=new lt().makeRotationFromEuler(new fn(...i.rotation||[0,0,0])).elements,t=[0,1,2].map(o=>e.slice(o*4,o*4+3)),n=i.size.map(o=>o/2),s=[0,1,2].map(o=>t.reduce((a,l,c)=>a+Math.abs(l[o])*n[c],0)),r=[];for(let o=0;o<3;o++)for(let a of[-1,1]){let l=t[o].map(c=>c*a);r.push({normal:l,offset:Yo(l,i.position)+n[o]})}return{part:i,axes:t,half:n,planes:r,min:i.position.map((o,a)=>o-s[a]),max:i.position.map((o,a)=>o+s[a])}}function wb(i,e){return i.min.every((t,n)=>t<=e.max[n]+ls&&i.max[n]>=e.min[n]-ls)}function Eb(i,e,t){let n=(e+1)%3,s=(e+2)%3,r=i.axes[e].map(l=>l*t),o=[[-1,-1],[1,-1],[1,1],[-1,1]];t<0&&o.reverse();let a=o.map(([l,c])=>i.part.position.map((u,d)=>u+r[d]*i.half[e]+i.axes[n][d]*i.half[n]*l+i.axes[s][d]*i.half[s]*c));return{axis:e,sign:t,normal:r,offset:Yo(r,a[0]),polygon:a}}function Hp(i){let e=[];for(let t of i){let n=e.at(-1);(!n||Math.hypot(...Xo(t,n))>ls)&&e.push(t)}return e.length>1&&Math.hypot(...Xo(e[0],e.at(-1)))<=ls&&e.pop(),e}function Ab(i,e){let t=i.map(r=>Sb(r,e));if(!t.some(r=>r>0))return{inside:i,outside:[]};if(!t.some(r=>r<0))return{inside:[],outside:i};let n=[],s=[];for(let r=0;r<i.length;r++){let o=i[r],a=i[(r+1)%i.length],l=t[r],c=t[(r+1)%i.length];if(l<=0&&n.push(o),l>=0&&s.push(o),l<0&&c>0||l>0&&c<0){let u=l/(l-c),d=o.map((h,f)=>h+(a[f]-h)*u);n.push(d),s.push(d)}}return{inside:Hp(n),outside:Hp(s)}}function Tb(i,e){let t=Gp[i.kind]-Gp[e.kind];return t>0||t===0&&i.id<e.id}function Cb(i,e){return e.planes.some(t=>Yo(i.normal,t.normal)>1-1e-12&&Math.abs(i.offset-t.offset)<=ls)}function Rb(i,e){let t=[],n=i;for(let s of e.planes){let r=Ab(n,s);if(r.outside.length>=3&&t.push(r.outside),n=r.inside,n.length<3)break}return t}function Ib(i,e,t){return e===0?[.5-t*i[2],.5+i[1]]:e===1?[.5+i[0],.5-t*i[2]]:[.5+t*i[0],.5+i[1]]}function Wp(i){let e=i.filter(n=>_b.has(n.kind)).map(Mb),t=new Map;for(let n of e){let s=e.filter(c=>c!==n&&wb(n,c)),r=[],o=[],a=[];for(let c=0;c<3;c++)for(let u of[-1,1]){let d=Eb(n,c,u),h=[d.polygon];for(let f of s)if(!(Cb(d,f)&&Tb(n.part,f.part))&&(h=h.flatMap(p=>Rb(p,f)),!h.length))break;for(let f of h)for(let p=1;p<f.length-1;p++){let x=[f[0],f[p],f[p+1]];if(!(Math.hypot(...bb(Xo(x[1],x[0]),Xo(x[2],x[0])))<=ls*ls))for(let m of x){let g=Xo(m,n.part.position),v=n.axes.map((E,b)=>Yo(g,E)/n.part.size[b]);r.push(...m),o.push(...d.normal),a.push(...Ib(v,c,u))}}}let l=new Ot;l.setAttribute("position",new vt(r,3)),l.setAttribute("normal",new vt(o,3)),l.setAttribute("uv",new vt(a,2)),r.length&&(l.computeBoundingBox(),l.computeBoundingSphere()),t.set(n.part.id,l)}return t}var Pb=(i,e,t)=>Math.max(e,Math.min(t,i)),Lb=new Set(["wall","floor","roof"]);function qp(i,e,t=()=>({width:i.clientWidth,height:i.clientHeight})){let n=e.house||e.level||gn,s=new _c({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),s.shadowMap.enabled=!0,s.shadowMap.type=Ts,s.outputColorSpace=Zt,s.toneMapping=Io,s.toneMappingExposure=1.18;let r=new io;r.background=new Qe("#c9ddd5"),r.fog=new no("#c9ddd5",30,90);let o=new jt(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new Eo("#fff3d9","#718169",2.7));let a=new Ro("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let l=new Co("#fff1d0",4,11,2);r.add(l);let c=new Map,u=new Set,d=new Set,h=new Yn(1,1,1);u.add(h);let f=new Map;for(let P of["ug","eg","og","dg","garden"]){let he=new an;he.name=`Etage ${P}`,f.set(P,he),r.add(he)}let p=new Map,x=[],m=[];function g(P,he={}){let Z=`${P}:${JSON.stringify(he)}`;return c.has(Z)||c.set(Z,new $n({color:P,roughness:.86,flatShading:!0,...he})),c.get(Z)}function v(P=!1){let he=document.createElement("canvas");he.width=he.height=256;let Z=he.getContext("2d");if(Z.fillStyle=P?"#edf4d8":"#fff1dc",Z.fillRect(0,0,256,256),P)for(let _=0;_<1200;_++)Z.fillStyle=_%2?"#d5e0bd":"#eef3d9",Z.fillRect(_*67%256,_*113%256,1,3);else{Z.strokeStyle="#c9b594",Z.lineWidth=1;for(let _=0;_<=256;_+=32){Z.beginPath(),Z.moveTo(0,_),Z.lineTo(256,_),Z.stroke();for(let k=_/32%2*96;k<256;k+=128)Z.beginPath(),Z.moveTo(k,_),Z.lineTo(k,_+32),Z.stroke()}for(let _=0;_<90;_++)Z.fillStyle=_%2?"#dfd0b8":"#e8dbc4",Z.fillRect(_*73%256,_*19%256,12+_%21,1)}let R=new dr(he);return R.colorSpace=Zt,R.wrapS=R.wrapT=rr,R.repeat.set(3,3),d.add(R),R}let E=v(),b=v(!0),M=new lt,S=new Vt,w=new fn,y=P=>M.compose(new z(...P.position),S.setFromEuler(w.set(...P.rotation||[0,0,0])),new z(...P.size)),T=Wp(n.obstacles);for(let P of T.values())u.add(P);let L=new Map;for(let P of n.obstacles){let he=f.get(P.floor)||f.get("garden");if(Lb.has(P.kind)){let Z=g(P.color).clone();P.kind==="floor"&&(Z.map=P.floor==="garden"?b:E);let R=new _t(T.get(P.id),Z);R.name=P.id,R.castShadow=P.kind!=="floor",R.receiveShadow=!0,he.add(R)}else{let Z=`${P.floor}|${P.color}|${P.kind==="glass"?"glass":"opaque"}`;L.has(Z)||L.set(Z,{group:he,color:P.color,glass:P.kind==="glass",parts:[]}),L.get(Z).parts.push(P)}}for(let{group:P,color:he,glass:Z,parts:R}of L.values()){let _=new ws(h,g(he,Z?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),R.length);R.forEach((k,O)=>_.setMatrixAt(O,y(k))),_.instanceMatrix.needsUpdate=!0,_.castShadow=!Z,_.receiveShadow=!0,_.frustumCulled=!1,P.add(_)}let D=new Yn(.54,.23,.012);u.add(D);function U(P){let he=document.createElement("canvas");he.width=256,he.height=112;let Z=he.getContext("2d");Z.fillStyle="#f5e5bc",Z.fillRect(0,0,256,112),Z.strokeStyle="#ad8b58",Z.lineWidth=4,Z.strokeRect(4,4,248,104),Z.fillStyle="#463e30",Z.font="bold 44px system-ui",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(P.signText??`${P.threshold} \u2605`,128,58);for(let O of[15,241])Z.beginPath(),Z.arc(O,56,3,0,Math.PI*2),Z.fill();let R=new dr(he);R.colorSpace=Zt,d.add(R);let _=g("#ad8b58",{roughness:.7}),k=new $n({map:R,roughness:.85});return[-1,1].map(O=>{let X=new _t(D,[_,_,_,_,k,_]);return X.name=`${P.id}-sign-${O<0?"back":"front"}`,X.position.set(0,.37,O*(P.size[2]/2+.0065)),X.rotation.y=O<0?Math.PI:0,X.castShadow=X.receiveShadow=!0,X})}for(let P of n.doors){let he=new an;he.name=P.id;let Z=new _t(h,g(P.color||"#b99469"));Z.name=`${P.id}-leaf`,Z.castShadow=Z.receiveShadow=!0;let R=Cr(P,!1);he.position.set(...R.position),he.rotation.set(...R.rotation),Z.scale.set(...R.size),he.add(Z,...U(P)),r.add(he),p.set(P.id,{door:P,mesh:he,leaf:Z,opened:!1})}function N(P,he=!0){let Z=p.get(P);if(!Z)return;Z.opened=!!he;let R=Cr(Z.door,Z.opened);Z.mesh.position.set(...R.position),Z.mesh.rotation.set(...R.rotation),Z.leaf.scale.set(...R.size)}let I=new an;I.name="Papierflieger",r.add(I);let F=new Set,B=new Set,W="classic",q=1,H=null,Y=Ac(r);function $(P="classic",he=1,Z="none",R=null){let _=Ls(P,he);W=_.form,q=_.size,H=as(R);for(let k of B)k.dispose();B.clear();for(let k of F)k.dispose();F.clear(),I.clear();for(let k of _.parts){let O=[];for(let te of k.faces)for(let re=1;re+1<te.length;re++)for(let ve of[te[0],te[re],te[re+1]])O.push(...k.vertices[ve]);let X=new Ot;X.setAttribute("position",new vt(O,3)),X.computeVertexNormals();let me=new $n({color:k.color,roughness:.77,side:Dn,flatShading:!0}),ge=new _t(X,me);ge.name=k.id,ge.userData.paperColor=k.color,ge.castShadow=ge.receiveShadow=!0,I.add(ge),B.add(X),F.add(me)}return qo(I,H),Y.setEffect(Z),Y.clear(),_}function ee(P=n.start){Y.reset(P)}function de(P){Y.push(P)}$(),ee(),I.position.set(n.start.x,n.start.y,n.start.z);let Ue=new an;Ue.position.set(n.start.x,0,n.start.z),r.add(Ue);let fe=new As(.23,.014,5,28);u.add(fe);let Ce=new _t(fe,new Tn({color:"#e5b45f",transparent:!0,opacity:.75}));Ce.rotation.x=Math.PI/2,Ce.position.y=.045,Ue.add(Ce);function Q(P=0){Ce.scale.setScalar(1+Math.max(0,P)*.3),Ce.material.opacity=.5+Math.min(1,P)*.45}let se=new pr;for(let P=0;P<10;P++){let he=P*Math.PI/5+Math.PI/2,Z=P%2?.052:.115,R=Math.cos(he)*Z,_=Math.sin(he)*Z;P?se.lineTo(R,_):se.moveTo(R,_)}se.closePath();let xe=new bo(se,{depth:.025,bevelEnabled:!1});u.add(xe);let Ve=new As(.165,.007,4,22);u.add(Ve);let _e=[new $n({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new $n({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],ae=[new Tn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Tn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],Oe=new Tn({color:"#fff1b7",toneMapped:!1});for(let P of[..._e,...ae,Oe])c.set(`star-${P.id}`,P);for(let P of n.collectibles){let he=Wo(P),Z=new an,R=new _t(xe,_e[0]),_=[],k=new an;Z.name=P.id,Z.position.set(P.x,P.y,P.z),Z.add(R,k);for(let O=0;O<Number(he.under)+Number(he.zone);O++){let X=new _t(Ve,ae[0]);X.scale.setScalar(1+O*.28),_.push(X),Z.add(X)}for(let O=0;O<3;O++){let X=new _t(xe,Oe),me=O*Math.PI*2/3;X.position.set(Math.cos(me)*.17,Math.sin(me)*.17,.02),X.scale.setScalar(.16),k.add(X)}P.under&&Z.scale.setScalar(.72),r.add(Z),x.push({data:P,mesh:Z,star:R,rings:_,sparkles:k,discovered:!1,collected:!1})}function ie(P){let he=[];for(let Z of x)!Z.collected&&P(Z.data)&&(Z.collected=!0,Z.mesh.visible=!1,he.push(Z.data.id));return he}function le(P=[]){let he=new Set(P);for(let Z of x){Z.collected=!1,Z.mesh.visible=!0,Z.discovered=he.has(Z.data.id),Z.star.material=_e[Number(Z.discovered)];for(let R of Z.rings)R.material=ae[Number(Z.discovered)];Z.sparkles.visible=!Z.discovered}}for(let P of n.thermals){let he=new As(P.r*.75,.009,4,26);u.add(he);for(let Z=0;Z<7;Z++){let R=new _t(he,new Tn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));R.rotation.x=Math.PI/2,r.add(R),m.push({mesh:R,thermal:P,phase:Z/7})}}let pe=[];for(let P of e.blocks||[]){let he=new _t(h,g("#dab87f"));he.scale.set(...P.size),he.castShadow=!0,r.add(he),pe.push(he)}let ue={ceiling:!1,distance:1/0,intensity:0};function ye(P){let he=typeof e.getCeilingAt=="function"?e.getCeilingAt(P):1/0;return ue.distance=he-P.y,ue.ceiling=ue.distance<.45,ue.intensity=Pb((.55-ue.distance)/.5,0,1),ue.ceiling}function qe(P=1/60,he=0){let Z=e.plane?.position||I.position,R=Fp(Z),_=R&&R.floor!=="garden",k=O=>!_||O==="garden"||(rs[O]??-9)<=(rs[R.floor]??0)+3.15;for(let[O,X]of f)X.visible=k(O);for(let O of p.values())O.mesh.visible=k(O.door.floor);for(let O=0;O<x.length;O++){let X=x[O];if(X.collected)continue;let me=n.rooms.find(ge=>ge.id===X.data.roomId);X.mesh.visible=!_||me?.floor===R.floor||me?.floor==="garden",X.mesh.rotation.y=he*(X.discovered?.5:.85)+O*.61,X.mesh.position.y=X.data.y+Math.sin(he*1.7+O)*(X.data.under?.009:.026);for(let ge=0;ge<X.sparkles.children.length;ge++)X.sparkles.children[ge].scale.setScalar(.09+.12*Math.sin(he*3+O+ge*2)**2)}for(let O of m){let X=(he*.18+O.phase)%1;O.mesh.position.set(O.thermal.x,O.thermal.y+X*O.thermal.height,O.thermal.z),O.mesh.material.opacity=Math.sin(X*Math.PI)*.28,O.mesh.visible=Math.abs(O.mesh.position.y-Z.y)<4}for(let O=0;O<pe.length;O++)pe[O].position.copy(e.blocks[O].body.position),pe[O].quaternion.copy(e.blocks[O].body.quaternion);l.position.set(Z.x,Z.y+.6,Z.z),l.intensity=R?.floor==="ug"?7:3,a.target.position.set(Z.x,1,Z.z),a.target.updateMatrixWorld(),a.position.set(Z.x-12,24,Z.z-14),Y.update(P,he),ye(Z)}function ze(){let P=t()||{},he=Math.max(1,P.width||i.clientWidth||1),Z=Math.max(1,P.height||i.clientHeight||1);s.setSize(he,Z,!1),o.aspect=he/Z,o.updateProjectionMatrix()}function Ze(){s.render(r,o)}ze(),window.addEventListener("gameviewportchange",ze);function Ke(){Y.dispose(),window.removeEventListener("gameviewportchange",ze);let P=new Set([...c.values(),...F]),he=new Set([...u,...B]);r.traverse(Z=>{if(Z.geometry&&he.add(Z.geometry),Z.material)for(let R of Array.isArray(Z.material)?Z.material:[Z.material])P.add(R);Z.shadow?.map&&Z.shadow.map.dispose()});for(let Z of he)Z.dispose();for(let Z of P)Z.dispose();for(let Z of d)Z.dispose();r.clear(),s.dispose()}return{renderer:s,scene:r,camera:o,plane:I,sling:Ue,effects:Y,thermals:n.thermals,update:qe,setAircraft:$,setDoorOpen:N,collectStars:ie,resetCollectibles:le,resetTrail:ee,updateTrail:de,updateSling:Q,updateCeiling:ye,warnings:ue,render:Ze,resize:ze,dispose:Ke,totalCollectibles:x.length,get collected(){return x.filter(P=>P.collected).length},get aircraft(){return{form:W,size:q,effect:Y.effect,color:H}},sync:()=>qe(1/60,0),wind:P=>qe(1/60,P),collect:P=>ie(he=>Math.hypot(he.x-P.x,he.y-P.y,he.z-P.z)<=he.radius).length}}var hs=class i{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new C);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new C);let n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new i);let n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],x=s[0],m=s[1],g=s[2],v=s[3],E=s[4],b=s[5],M=s[6],S=s[7],w=s[8];return r[0]=o*x+a*v+l*M,r[1]=o*m+a*E+l*S,r[2]=o*g+a*b+l*w,r[3]=c*x+u*v+d*M,r[4]=c*m+u*E+d*S,r[5]=c*g+u*b+d*w,r[6]=h*x+f*v+p*M,r[7]=h*m+f*E+p*S,r[8]=h*g+f*b+p*w,t}scale(e,t){t===void 0&&(t=new i);let n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new C);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,u,d=4,h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=d;do h=d-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];u=d;do h=d-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*f;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new i);let t=3,n=6,s=Nb,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,l=a,c,u=n,d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do d=u-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let h=s[r+n*o]/s[r+n*r];c=u;do d=u-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{let h=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{let h=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,l=s+s,c=t*o,u=t*a,d=t*l,h=n*a,f=n*l,p=s*l,x=r*o,m=r*a,g=r*l,v=this.elements;return v[0]=1-(h+p),v[1]=u-g,v[2]=d+m,v[3]=u+g,v[4]=1-(c+p),v[5]=f-x,v[6]=d-m,v[7]=f+x,v[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new i);let t=this.elements,n=e.elements,s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}},Nb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],C=class i{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new i);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new i(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new i(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new hs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new i),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new i),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let s=Db,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=Fb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Xp),Xp.almostEquals(e,t)}clone(){return new i(this.x,this.y,this.z)}};C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);var Db=new C,Fb=new C,Xp=new C,Pn=class i{constructor(e){e===void 0&&(e={}),this.lowerBound=new C,this.upperBound=new C,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Yp),c=Yp),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new i().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,l){let c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){let n=$p,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=$p,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}},Yp=new C,$p=[new C,new C,new C,new C,new C,new C,new C,new C],Lc=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Nc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}return this}},zt=class i{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new C),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=Ub,s=Bb;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-s*a,t.w=o*u-n*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new C);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,d=c*s+l*n-o*r,h=c*r+o*s-a*n,f=-o*n-a*s-l*r;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,d=e.w,h,f,p,x,m;return f=s*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),x=Math.sin((1-t)*h)/p,m=Math.sin(t*h)/p):(x=1-t,m=t),n.x=x*s+m*l,n.y=x*r+m*c,n.z=x*o+m*u,n.w=x*a+m*d,n}integrate(e,t,n,s){s===void 0&&(s=new i);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return s.x+=h*(r*d+o*u-a*c),s.y+=h*(o*d+a*l-r*u),s.z+=h*(a*d+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}},Ub=new C,Bb=new C,Ob={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Fe=class i{constructor(e){e===void 0&&(e={}),this.id=i.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Fe.idCounter=0;Fe.types=Ob;var pt=class i{constructor(e){e===void 0&&(e={}),this.position=new C,this.quaternion=new zt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return i.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return i.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),n.vsub(e,s),t.conjugate(Zp),Zp.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new C),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new C),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),t.w*=-1,t.vmult(n,s),t.w*=-1,s}},Zp=new zt,Jo=class i extends Fe{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let s=new C;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new C;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,t)}static computeNormal(e,t,n,s){let r=new C,o=new C;t.vsub(e,o),n.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,r,o,a,l,c){let u=new C,d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);let x=u.dot(o);x>h&&(h=x,d=p)}let f=[];for(let p=0;p<n.faces[d].length;p++){let x=n.vertices[n.faces[d][p]],m=new C;m.copy(x),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,s,r,o,a,l){let c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);let v=m.testSepAxis(c,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let v=0;v<g;v++){let E=a?a[v]:v;c.copy(m.faceNormals[E]),n.vmult(c,c);let b=m.testSepAxis(c,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],u);let v=m.testSepAxis(u,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}else{let g=l?l.length:e.faces.length;for(let v=0;v<g;v++){let E=l?l[v]:v;u.copy(e.faceNormals[E]),r.vmult(u,u);let b=m.testSepAxis(u,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],f),h.cross(f,p),!p.almostZero()){p.normalize();let E=m.testSepAxis(p,e,t,n,s,r);if(E===!1)return!1;E<x&&(x=E,o.copy(p))}}return s.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,s,r,o){let a=this;i.project(a,e,n,s,Du),i.project(t,e,r,o,Fu);let l=Du[0],c=Du[1],u=Fu[0],d=Fu[1];if(l<d||u<c)return!1;let h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){let n=new C,s=new C;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,r,o,a){let l=new C,c=new C,u=new C,d=new C,h=new C,f=new C,p=new C,x=new C,m=this,g=[],v=s,E=g,b=-1,M=Number.MAX_VALUE;for(let L=0;L<m.faces.length;L++){l.copy(m.faceNormals[L]),n.vmult(l,l);let D=l.dot(e);D<M&&(M=D,b=L)}if(b<0)return;let S=m.faces[b];S.connectedFaces=[];for(let L=0;L<m.faces.length;L++)for(let D=0;D<m.faces[L].length;D++)S.indexOf(m.faces[L][D])!==-1&&L!==b&&S.connectedFaces.indexOf(L)===-1&&S.connectedFaces.push(L);let w=S.length;for(let L=0;L<w;L++){let D=m.vertices[S[L]],U=m.vertices[S[(L+1)%w]];D.vsub(U,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(D),n.vmult(f,f),t.vadd(f,f);let N=S.connectedFaces[L];p.copy(this.faceNormals[N]);let I=this.getPlaneConstantOfFace(N);x.copy(p),n.vmult(x,x);let F=I-x.dot(t);for(this.clipFaceAgainstPlane(v,E,x,F);v.length;)v.shift();for(;E.length;)v.push(E.shift())}p.copy(this.faceNormals[b]);let y=this.getPlaneConstantOfFace(b);x.copy(p),n.vmult(x,x);let T=y-x.dot(t);for(let L=0;L<v.length;L++){let D=x.dot(v[L])+T;if(D<=r&&(console.log(`clamped: depth=${D} to minDist=${r}`),D=r),D<=o){let U=v[L];if(D<=1e-6){let N={point:U,normal:x,depth:D};a.push(N)}}}}clipFaceAgainstPlane(e,t,n,s){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+s,r<0)if(o<0){let d=new C;d.copy(c),t.push(d)}else{let d=new C;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){let d=new C;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new C);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){let r=this.vertices,o,a,l,c,u,d,h=new C;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),s.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new C);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<n;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new C;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=t[n[a][0]],u=new C;e.vsub(c,u);let d=l.dot(u),h=new C;o.vsub(c,h);let f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,s,r){let o=e.vertices.length,a=kb,l=0,c=0,u=Vb,d=e.vertices;u.setZero(),pt.vectorToLocalFrame(n,s,t,a),pt.pointToLocalFrame(n,s,u,u);let h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},Du=[],Fu=[],zb=new C,kb=new C,Vb=new C,Qo=class i extends Fe{constructor(e){super({type:Fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=C,r=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Jo({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new C),i.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)cs.set(r[o][0],r[o][1],r[o][2]),t.vmult(cs,cs),e.vadd(cs,cs),n(cs.x,cs.y,cs.z)}calculateWorldAABB(e,t,n,s){let r=this.halfExtents;di[0].set(r.x,r.y,r.z),di[1].set(-r.x,r.y,r.z),di[2].set(-r.x,-r.y,r.z),di[3].set(-r.x,-r.y,-r.z),di[4].set(r.x,-r.y,-r.z),di[5].set(r.x,r.y,-r.z),di[6].set(-r.x,r.y,-r.z),di[7].set(r.x,-r.y,r.z);let o=di[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=di[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,u=l.y,d=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),d>s.z&&(s.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}},cs=new C,di=[new C,new C,new C,new C,new C,new C,new C,new C],Zu={DYNAMIC:1,STATIC:2,KINEMATIC:4},ju={AWAKE:0,SLEEPY:1,SLEEPING:2},it=class i extends Nc{constructor(e){e===void 0&&(e={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new C,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new C,this.force=new C;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?i.STATIC:i.DYNAMIC,typeof e.type==typeof i.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new zt,this.initQuaternion=new zt,this.previousQuaternion=new zt,this.interpolatedQuaternion=new zt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new C,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new hs,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new hs,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new C(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new C(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Pn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,e===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(i.sleepyEvent)):t===i.SLEEPY&&n>s?this.wakeUp():t===i.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new C),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new C),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}addShape(e,t,n){let s=new C,r=new zt;return t&&s.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,s=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,r=Gb,o=Hb,a=this.quaternion,l=this.aabb,c=Wb;for(let u=0;u!==s;u++){let d=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=qb,s=Xb;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=$b;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=Zb,s=jb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=t,s=Kb;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=Jb;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=Qb,s=eS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){let e=tS;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Qo.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new C;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;let p=d.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,v=l.z*x.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*v),r.y+=e*(p[3]*m+p[4]*g+p[5]*v),r.z+=e*(p[6]*m+p[7]*g+p[8]*v),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};it.idCounter=0;it.COLLIDE_EVENT_NAME="collide";it.DYNAMIC=Zu.DYNAMIC;it.STATIC=Zu.STATIC;it.KINEMATIC=Zu.KINEMATIC;it.AWAKE=ju.AWAKE;it.SLEEPY=ju.SLEEPY;it.SLEEPING=ju.SLEEPING;it.wakeupEvent={type:"wakeup"};it.sleepyEvent={type:"sleepy"};it.sleepEvent={type:"sleep"};var Gb=new C,Hb=new zt,Wb=new Pn,qb=new hs,Xb=new hs,Yb=new hs,$b=new C,Zb=new C,jb=new C,Kb=new C,Jb=new C,Qb=new C,eS=new C,tS=new C,Dc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&it.STATIC)!==0||e.sleepState===it.SLEEPING)&&((t.type&it.STATIC)!==0||t.sleepState===it.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){let r=nS;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){let n=iS,s=sS,r=rS,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(s[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new C;e.position.vsub(t.position,n);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},nS=new C;new C;new zt;new C;var iS={keys:[]},sS=[],rS=[];new C;var eT=new C;new C;var ku=class extends Dc{constructor(){super()}collisionPairs(e,t,n){let s=e.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},Pr=class{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},am,lm,cm,hm,um,dm,fm,Ku={CLOSEST:1,ANY:2,ALL:4};am=Fe.types.SPHERE;lm=Fe.types.PLANE;cm=Fe.types.BOX;hm=Fe.types.CYLINDER;um=Fe.types.CONVEXPOLYHEDRON;dm=Fe.types.HEIGHTFIELD;fm=Fe.types.TRIMESH;var Bn=class i{get[am](){return this._intersectSphere}get[lm](){return this._intersectPlane}get[cm](){return this._intersectBox}get[hm](){return this._intersectConvex}get[um](){return this._intersectConvex}get[dm](){return this._intersectHeightfield}get[fm](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new C),t===void 0&&(t=new C),this.from=e.clone(),this.to=t.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Pr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||i.ANY,this.result=t.result||new Pr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(jp),Uu.length=0,e.broadphase.aabbQuery(e,jp,Uu),this.intersectBodies(Uu),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=oS,r=aS;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){let r=this.from;if(MS(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);t.vmult(c,c);let u=new C;o.vsub(n,u);let d=u.dot(c);a.vsub(n,u);let h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new C,x=new C,m=new C;o.vsub(n,p);let g=-c.dot(p)/f;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;let o=lS;o.from.copy(this.from),o.to.copy(this.to),pt.pointToLocalFrame(n,t,o.from,o.from),pt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=cS,l,c,u,d;l=c=0,u=d=e.data.length-1;let h=new Pn;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),pt.pointToWorldFrame(n,t,e.pillarOffset,Tc),this._intersectConvex(e.pillarConvex,t,Tc,s,r,Kp),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),pt.pointToWorldFrame(n,t,e.pillarOffset,Tc),this._intersectConvex(e.pillarConvex,t,Tc,s,r,Kp)}}}_intersectSphere(e,t,n,s,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=hS,p=uS;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{let x=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){let a=dS,l=Jp,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:u.length,v=this.result;for(let E=0;!v.shouldStop&&E<g;E++){let b=c?c[E]:E,M=u[b],S=h[b],w=t,y=n;l.copy(d[M[0]]),w.vmult(l,l),l.vadd(y,l),l.vsub(p,l),w.vmult(S,a);let T=f.dot(a);if(Math.abs(T)<this.precision)continue;let L=a.dot(l)/T;if(!(L<0)){f.scale(L,Mn),Mn.vadd(p,Mn),Jn.copy(d[M[0]]),w.vmult(Jn,Jn),y.vadd(Jn,Jn);for(let D=1;!v.shouldStop&&D<M.length-1;D++){fi.copy(d[M[D]]),pi.copy(d[M[D+1]]),w.vmult(fi,fi),w.vmult(pi,pi),y.vadd(fi,fi),y.vadd(pi,pi);let U=Mn.distanceTo(p);!(i.pointInTriangle(Mn,Jn,fi,pi)||i.pointInTriangle(Mn,fi,Jn,pi))||U>m||this.reportIntersection(a,Mn,r,s,b)}}}}_intersectTrimesh(e,t,n,s,r,o){let a=mS,l=bS,c=SS,u=Jp,d=gS,h=xS,f=yS,p=_S,x=vS,m=e.indices;e.vertices;let g=this.from,v=this.to,E=this.direction;c.position.copy(n),c.quaternion.copy(t),pt.vectorToLocalFrame(n,t,E,d),pt.pointToLocalFrame(n,t,g,h),pt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();let b=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){let w=l[M];e.getNormal(w,a),e.getVertex(m[w*3],Jn),Jn.vsub(h,u);let y=d.dot(a),T=a.dot(u)/y;if(T<0)continue;d.scale(T,Mn),Mn.vadd(h,Mn),e.getVertex(m[w*3+1],fi),e.getVertex(m[w*3+2],pi);let L=Mn.distanceSquared(h);!(i.pointInTriangle(Mn,fi,Jn,pi)||i.pointInTriangle(Mn,Jn,fi,pi))||L>b||(pt.vectorToWorldFrame(t,a,x),pt.pointToWorldFrame(n,t,Mn,p),this.reportIntersection(x,p,r,s,w))}l.length=0}reportIntersection(e,t,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,e,t,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,Ds),n.vsub(t,$o),e.vsub(t,Bu);let r=Ds.dot(Ds),o=Ds.dot($o),a=Ds.dot(Bu),l=$o.dot($o),c=$o.dot(Bu),u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}};Bn.CLOSEST=Ku.CLOSEST;Bn.ANY=Ku.ANY;Bn.ALL=Ku.ALL;var jp=new Pn,Uu=[],$o=new C,Bu=new C,oS=new C,aS=new zt,Mn=new C,Jn=new C,fi=new C,pi=new C;new C;new Pr;var Kp={faceList:[0]},Tc=new C,lS=new Bn,cS=[],hS=new C,uS=new C,dS=new C,fS=new C,pS=new C,Jp=new C,mS=new C,gS=new C,xS=new C,yS=new C,vS=new C,_S=new C;new Pn;var bS=[],SS=new pt,Ds=new C,Cc=new C;function MS(i,e,t){t.vsub(i,Ds);let n=Ds.dot(e);return e.scale(n,Cc),Cc.vadd(i,Cc),t.distanceTo(Cc)}var Fc=class i extends Dc{static checkBounds(e,t,n){let s,r;n===0?(s=e.position.x,r=t.position.x):n===1?(s=e.position.y,r=t.position.y):n===2&&(s=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=s+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=s}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let s=t.indexOf(n.body);s!==-1&&t.splice(s,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let u=s[l];if(this.needBroadphaseCollision(c,u)){if(!i.checkBounds(c,u,o))break;this.intersectionTest(c,u,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let s=0;s!==n;s++){let r=e[s];r.aabbNeedsUpdate&&r.updateAABB()}t===0?i.insertionSortX(e):t===1?i.insertionSortY(e):t===2&&i.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let p=a[f],x=p.position.x;e+=x,t+=x*x;let m=p.position.y;n+=m,s+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=t-e*e*c,d=s-n*n*c,h=o-r*r*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},Uc=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},Vu=class i{constructor(e,t,n){n===void 0&&(n={}),n=Uc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};Vu.idCounter=0;var Bc=class{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},ea=class i{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Bc,this.jacobianElementB=new Bc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let s=t,r=e,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Qp),a.scale(u,em),n.invInertiaWorldSolve.vmult(o,tm),s.invInertiaWorldSolve.vmult(l,nm),e.multiplyVectors(Qp,tm)+t.multiplyVectors(em,nm)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,Rc),c+=Rc.dot(e.rotational),l.vmult(t.rotational,Rc),c+=Rc.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=wS;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ea.idCounter=0;var Qp=new C,em=new C,tm=new C,nm=new C,Rc=new C,wS=new C,Gu=class extends ea{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(e){let t=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=ES,c=AS,u=s.velocity,d=s.angularVelocity;s.force,s.torque;let h=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=TS,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);let v=g.dot(p),E=this.restitution+1,b=E*h.dot(g)-E*u.dot(g)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-v*t-b*n-e*M}getImpactVelocityAlongNormal(){let e=CS,t=RS,n=IS,s=PS,r=LS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},ES=new C,AS=new C,TS=new C,CS=new C,RS=new C,IS=new C,PS=new C,LS=new C;var tT=new C,nT=new C;var iT=new C,sT=new C;new C;new C;var rT=new C,oT=new C;var aT=new C,lT=new C,Oc=class extends ea{constructor(e,t,n){super(e,t,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=NS,o=DS,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}},NS=new C,DS=new C,zc=class i{constructor(e,t,n){n=Uc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};zc.idCounter=0;var kc=class i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};kc.idCounter=0;var cT=new C,hT=new C,uT=new C,dT=new C,fT=new C,pT=new C,mT=new C,gT=new C,xT=new C,yT=new C,vT=new C;var _T=new C,bT=new C;new C;new C;new C;var ST=new C,MT=new C,wT=new C;new Bn;new C;var ET=new C,AT=new C,TT=[new C(1,0,0),new C(0,1,0),new C(0,0,1)],CT=new C;var RT=new C,IT=new C,PT=new C;var LT=new C,NT=new C,DT=new C,FT=new C;var UT=new C,BT=new C,OT=new C;var zT=new C,kT=new C;var VT=new C,GT=new C,HT=new C,WT=new C,qT=new C,XT=new C,YT=new C;var $T=new C;var ZT=new C,jT=new C,KT=new C,JT=new C,QT=new C,eC=new C,tC=new C,nC=new C,iC=new C;var sC=new C,rC=new Pn;var oC=new C,aC=new Pn,lC=new C,cC=new C,hC=new C,uC=new C,dC=new C,fC=new C,pC=new C,mC=new Pn,gC=new C,xC=new pt,yC=new Pn,Hu=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},Wu=class extends Hu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e,d,h,f,p,x,m;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();let g=US,v=BS,E=FS;g.length=a,v.length=a,E.length=a;for(let b=0;b!==a;b++){let M=o[b];E[b]=0,v[b]=M.computeB(u),g[b]=1/M.computeC()}if(a!==0){for(let S=0;S!==c;S++){let w=l[S],y=w.vlambda,T=w.wlambda;y.set(0,0,0),T.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let S=0;S!==a;S++){let w=o[S];d=v[S],h=g[S],m=E[S],x=w.computeGWlambda(),f=h*(d-x-w.eps*m),m+f<w.minForce?f=w.minForce-m:m+f>w.maxForce&&(f=w.maxForce-m),E[S]+=f,p+=f>0?f:-f,w.addToWlambda(f)}if(p*p<r)break}for(let S=0;S!==c;S++){let w=l[S],y=w.velocity,T=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),y.vadd(w.vlambda,y),w.wlambda.vmul(w.angularFactor,w.wlambda),T.vadd(w.wlambda,T)}let b=o.length,M=1/u;for(;b--;)o[b].multiplier=E[b]*M}return n}},FS=[],US=[],BS=[];var vC=it.STATIC;var qu=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},Xu=class extends qu{constructor(){super(...arguments),this.type=C}constructObject(){return new C}},Rt={sphereSphere:Fe.types.SPHERE,spherePlane:Fe.types.SPHERE|Fe.types.PLANE,boxBox:Fe.types.BOX|Fe.types.BOX,sphereBox:Fe.types.SPHERE|Fe.types.BOX,planeBox:Fe.types.PLANE|Fe.types.BOX,convexConvex:Fe.types.CONVEXPOLYHEDRON,sphereConvex:Fe.types.SPHERE|Fe.types.CONVEXPOLYHEDRON,planeConvex:Fe.types.PLANE|Fe.types.CONVEXPOLYHEDRON,boxConvex:Fe.types.BOX|Fe.types.CONVEXPOLYHEDRON,sphereHeightfield:Fe.types.SPHERE|Fe.types.HEIGHTFIELD,boxHeightfield:Fe.types.BOX|Fe.types.HEIGHTFIELD,convexHeightfield:Fe.types.CONVEXPOLYHEDRON|Fe.types.HEIGHTFIELD,sphereParticle:Fe.types.PARTICLE|Fe.types.SPHERE,planeParticle:Fe.types.PLANE|Fe.types.PARTICLE,boxParticle:Fe.types.BOX|Fe.types.PARTICLE,convexParticle:Fe.types.PARTICLE|Fe.types.CONVEXPOLYHEDRON,cylinderCylinder:Fe.types.CYLINDER,sphereCylinder:Fe.types.SPHERE|Fe.types.CYLINDER,planeCylinder:Fe.types.PLANE|Fe.types.CYLINDER,boxCylinder:Fe.types.BOX|Fe.types.CYLINDER,convexCylinder:Fe.types.CONVEXPOLYHEDRON|Fe.types.CYLINDER,heightfieldCylinder:Fe.types.HEIGHTFIELD|Fe.types.CYLINDER,particleCylinder:Fe.types.PARTICLE|Fe.types.CYLINDER,sphereTrimesh:Fe.types.SPHERE|Fe.types.TRIMESH,planeTrimesh:Fe.types.PLANE|Fe.types.TRIMESH},Yu=class{get[Rt.sphereSphere](){return this.sphereSphere}get[Rt.spherePlane](){return this.spherePlane}get[Rt.boxBox](){return this.boxBox}get[Rt.sphereBox](){return this.sphereBox}get[Rt.planeBox](){return this.planeBox}get[Rt.convexConvex](){return this.convexConvex}get[Rt.sphereConvex](){return this.sphereConvex}get[Rt.planeConvex](){return this.planeConvex}get[Rt.boxConvex](){return this.boxConvex}get[Rt.sphereHeightfield](){return this.sphereHeightfield}get[Rt.boxHeightfield](){return this.boxHeightfield}get[Rt.convexHeightfield](){return this.convexHeightfield}get[Rt.sphereParticle](){return this.sphereParticle}get[Rt.planeParticle](){return this.planeParticle}get[Rt.boxParticle](){return this.boxParticle}get[Rt.convexParticle](){return this.convexParticle}get[Rt.cylinderCylinder](){return this.convexConvex}get[Rt.sphereCylinder](){return this.sphereConvex}get[Rt.planeCylinder](){return this.planeConvex}get[Rt.boxCylinder](){return this.boxConvex}get[Rt.convexCylinder](){return this.convexConvex}get[Rt.heightfieldCylinder](){return this.heightfieldCylinder}get[Rt.particleCylinder](){return this.particleCylinder}get[Rt.sphereTrimesh](){return this.sphereTrimesh}get[Rt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Xu,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Gu(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let n=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||n.material,d=o.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){let h=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,x=p.length?p.pop():new Oc(n,s,h*f),m=p.length?p.pop():new Oc(n,s,h*f);return x.bi=m.bi=n,x.bj=m.bj=s,x.minForce=m.minForce=-h*f,x.maxForce=m.maxForce=h*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ns.setZero(),Rr.setZero(),Ir.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Ns.vadd(t.ni,Ns),Rr.vadd(t.ri,Rr),Ir.vadd(t.rj,Ir)):(Ns.vsub(t.ni,Ns),Rr.vadd(t.rj,Rr),Ir.vadd(t.ri,Ir));let o=1/e;Rr.scale(o,n.ri),Ir.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ns.normalize(),Ns.tangents(n.t,s.t)}getContacts(e,t,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=kS,c=VS,u=OS,d=zS;for(let h=0,f=e.length;h!==f;h++){let p=e[h],x=t[h],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&it.KINEMATIC&&x.type&it.STATIC||p.type&it.STATIC&&x.type&it.KINEMATIC||p.type&it.KINEMATIC&&x.type&it.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],l),p.quaternion.vmult(p.shapeOffsets[v],u),u.vadd(p.position,u);let E=p.shapes[v];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],c),x.quaternion.vmult(x.shapeOffsets[b],d),d.vadd(x.position,d);let M=x.shapes[b];if(!(E.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&E.collisionFilterGroup)||u.distanceTo(d)>E.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;E.material&&M.material&&(S=n.getContactMaterial(E.material,M.material)||null),this.currentContactMaterial=S||m||n.defaultContactMaterial;let w=E.type|M.type,y=this[w];if(y){let T=!1;E.type<M.type?T=y.call(this,E,M,u,d,l,c,p,x,E,M,g):T=y.call(this,M,E,d,u,c,l,x,p,E,M,g),T&&g&&(n.shapeOverlapKeeper.set(E.id,M.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(e,t,n,s,r,o,a,l,c,u,d){if(d)return n.distanceSquared(s)<(e.radius+t.radius)**2;let h=this.createContactEquation(a,l,e,t,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,s,r,o,a,l,c,u,d){let h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(s,Ic),h.ni.scale(h.ni.dot(Ic),im),Ic.vsub(im,h.rj),-Ic.dot(h.ni)<=e.radius){if(d)return!0;let f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}sphereBox(e,t,n,s,r,o,a,l,c,u,d){let h=this.v3pool,f=fM;n.vsub(s,Pc),t.getSideNormals(f,o);let p=e.radius,x=!1,m=mM,g=gM,v=xM,E=null,b=0,M=0,S=0,w=null;for(let B=0,W=f.length;B!==W&&x===!1;B++){let q=hM;q.copy(f[B]);let H=q.length();q.normalize();let Y=Pc.dot(q);if(Y<H+p&&Y>0){let $=uM,ee=dM;$.copy(f[(B+1)%3]),ee.copy(f[(B+2)%3]);let de=$.length(),Ue=ee.length();$.normalize(),ee.normalize();let fe=Pc.dot($),Ce=Pc.dot(ee);if(fe<de&&fe>-de&&Ce<Ue&&Ce>-Ue){let Q=Math.abs(Y-H-p);if((w===null||Q<w)&&(w=Q,M=fe,S=Ce,E=H,m.copy(q),g.copy($),v.copy(ee),b++,d))return!0}}}if(b){x=!0;let B=this.createContactEquation(a,l,e,t,c,u);m.scale(-p,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(E,m),g.scale(M,g),m.vadd(g,m),v.scale(S,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let y=h.get(),T=pM;for(let B=0;B!==2&&!x;B++)for(let W=0;W!==2&&!x;W++)for(let q=0;q!==2&&!x;q++)if(y.set(0,0,0),B?y.vadd(f[0],y):y.vsub(f[0],y),W?y.vadd(f[1],y):y.vsub(f[1],y),q?y.vadd(f[2],y):y.vsub(f[2],y),s.vadd(y,T),T.vsub(n,T),T.lengthSquared()<p*p){if(d)return!0;x=!0;let H=this.createContactEquation(a,l,e,t,c,u);H.ri.copy(T),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(p,H.ri),H.rj.copy(y),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(s,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}h.release(y),y=null;let L=h.get(),D=h.get(),U=h.get(),N=h.get(),I=h.get(),F=f.length;for(let B=0;B!==F&&!x;B++)for(let W=0;W!==F&&!x;W++)if(B%3!==W%3){f[W].cross(f[B],L),L.normalize(),f[B].vadd(f[W],D),U.copy(n),U.vsub(D,U),U.vsub(s,U);let q=U.dot(L);L.scale(q,N);let H=0;for(;H===B%3||H===W%3;)H++;I.copy(n),I.vsub(N,I),I.vsub(D,I),I.vsub(s,I);let Y=Math.abs(q),$=I.length();if(Y<f[H].length()&&$<p){if(d)return!0;x=!0;let ee=this.createContactEquation(a,l,e,t,c,u);D.vadd(N,ee.rj),ee.rj.copy(ee.rj),I.negate(ee.ni),ee.ni.normalize(),ee.ri.copy(ee.rj),ee.ri.vadd(s,ee.ri),ee.ri.vsub(n,ee.ri),ee.ri.normalize(),ee.ri.scale(p,ee.ri),ee.ri.vadd(n,ee.ri),ee.ri.vsub(a.position,ee.ri),ee.rj.vadd(s,ee.rj),ee.rj.vsub(l.position,ee.rj),this.result.push(ee),this.createFrictionEquationsFromContact(ee,this.frictionResult)}}h.release(L,D,U,N,I)}planeBox(e,t,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}convexConvex(e,t,n,s,r,o,a,l,c,u,d,h,f){let p=LM;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,s,o,p,h,f)){let x=[],m=NM;e.clipAgainstHull(n,r,t,s,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(d)return!0;let E=this.createContactEquation(a,l,e,t,c,u),b=E.ri,M=E.rj;p.negate(E.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,b),M.copy(x[v].point),b.vsub(n,b),M.vsub(s,M),b.vadd(n,b),b.vsub(a.position,b),M.vadd(s,M),M.vsub(l.position,M),this.result.push(E),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,s,r,o,a,l,c,u,d){let h=this.v3pool;n.vsub(s,yM);let f=t.faceNormals,p=t.faces,x=t.vertices,m=e.radius,g=!1;for(let v=0;v!==x.length;v++){let E=x[v],b=SM;o.vmult(E,b),s.vadd(b,b);let M=bM;if(b.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;g=!0;let S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(m,S.ri),b.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,E=p.length;v!==E&&g===!1;v++){let b=f[v],M=p[v],S=MM;o.vmult(b,S);let w=wM;o.vmult(x[M[0]],w),w.vadd(s,w);let y=EM;S.scale(-m,y),n.vadd(y,y);let T=AM;y.vsub(w,T);let L=T.dot(S),D=TM;if(n.vsub(w,D),L<0&&D.dot(S)>0){let U=[];for(let N=0,I=M.length;N!==I;N++){let F=h.get();o.vmult(x[M[N]],F),s.vadd(F,F),U.push(F)}if(cM(U,S,n)){if(d)return!0;g=!0;let N=this.createContactEquation(a,l,e,t,c,u);S.scale(-m,N.ri),S.negate(N.ni);let I=h.get();S.scale(-L,I);let F=h.get();S.scale(-m,F),n.vsub(s,N.rj),N.rj.vadd(F,N.rj),N.rj.vadd(I,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(I),h.release(F),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let B=0,W=U.length;B!==W;B++)h.release(U[B]);return}else for(let N=0;N!==M.length;N++){let I=h.get(),F=h.get();o.vmult(x[M[(N+1)%M.length]],I),o.vmult(x[M[(N+2)%M.length]],F),s.vadd(I,I),s.vadd(F,F);let B=vM;F.vsub(I,B);let W=_M;B.unit(W);let q=h.get(),H=h.get();n.vsub(I,H);let Y=H.dot(W);W.scale(Y,q),q.vadd(I,q);let $=h.get();if(q.vsub(n,$),Y>0&&Y*Y<B.lengthSquared()&&$.lengthSquared()<m*m){if(d)return!0;let ee=this.createContactEquation(a,l,e,t,c,u);q.vsub(s,ee.rj),q.vsub(n,ee.ni),ee.ni.normalize(),ee.ni.scale(m,ee.ri),ee.rj.vadd(s,ee.rj),ee.rj.vsub(l.position,ee.rj),ee.ri.vadd(n,ee.ri),ee.ri.vsub(a.position,ee.ri),this.result.push(ee),this.createFrictionEquationsFromContact(ee,this.frictionResult);for(let de=0,Ue=U.length;de!==Ue;de++)h.release(U[de]);h.release(I),h.release(F),h.release(q),h.release($),h.release(H);return}h.release(I),h.release(F),h.release(q),h.release($),h.release(H)}for(let N=0,I=U.length;N!==I;N++)h.release(U[N])}}}planeConvex(e,t,n,s,r,o,a,l,c,u,d){let h=CM,f=RM;f.set(0,0,1),r.vmult(f,f);let p=0,x=IM;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,x),f.dot(x)<=0){if(d)return!0;let v=this.createContactEquation(a,l,e,t,c,u),E=PM;f.scale(f.dot(x),E),h.vsub(E,E),E.vsub(n,v.ri),v.ni.copy(f),h.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,s,r,o,a,l,c,u,d){let h=t.data,f=e.radius,p=t.elementSize,x=qM,m=WM;pt.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-f)/p)-1,v=Math.ceil((m.x+f)/p)+1,E=Math.floor((m.y-f)/p)-1,b=Math.ceil((m.y+f)/p)+1;if(v<0||b<0||g>h.length||E>h[0].length)return;g<0&&(g=0),v<0&&(v=0),E<0&&(E=0),b<0&&(b=0),g>=h.length&&(g=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),E>=h[0].length&&(E=h[0].length-1);let M=[];t.getRectMinMax(g,E,v,b,M);let S=M[0],w=M[1];if(m.z-f>w||m.z+f<S)return;let y=this.result;for(let T=g;T<v;T++)for(let L=E;L<b;L++){let D=y.length,U=!1;if(t.getConvexTrianglePillar(T,L,!1),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U||(t.getConvexTrianglePillar(T,L,!0),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U))return!0;if(y.length-D>2)return}}boxHeightfield(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,s,r,o,a,l,c,u,d){let h=t.data,f=t.elementSize,p=e.boundingSphereRadius,x=GM,m=HM,g=VM;pt.pointToLocalFrame(s,o,n,g);let v=Math.floor((g.x-p)/f)-1,E=Math.ceil((g.x+p)/f)+1,b=Math.floor((g.y-p)/f)-1,M=Math.ceil((g.y+p)/f)+1;if(E<0||M<0||v>h.length||b>h[0].length)return;v<0&&(v=0),E<0&&(E=0),b<0&&(b=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),E>=h.length&&(E=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let S=[];t.getRectMinMax(v,b,E,M,S);let w=S[0],y=S[1];if(!(g.z-p>y||g.z+p<w))for(let T=v;T<E;T++)for(let L=b;L<M;L++){let D=!1;if(t.getConvexTrianglePillar(T,L,!1),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&D||(t.getConvexTrianglePillar(T,L,!0),pt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(D=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&D))return!0}}sphereParticle(e,t,n,s,r,o,a,l,c,u,d){let h=BM;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;let p=this.createContactEquation(l,a,t,e,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,s,r,o,a,l,c,u,d){let h=DM;h.set(0,0,1),a.quaternion.vmult(h,h);let f=FM;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,t,e,c,u);x.ni.copy(h),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=UM;h.scale(h.dot(s),m),s.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexParticle(e,t,n,s,r,o,a,l,c,u,d){let h=-1,f=zM,p=kM,x=null,m=OM;if(m.copy(s),m.vsub(n,m),r.conjugate(sm),sm.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,v=e.faces.length;g!==v;g++){let E=[e.worldVertices[e.faces[g][0]]],b=e.worldFaceNormals[g];s.vsub(E[0],rm);let M=-b.dot(rm);if(x===null||Math.abs(M)<Math.abs(x)){if(d)return!0;x=M,h=g,f.copy(b)}}if(h!==-1){let g=this.createContactEquation(l,a,t,e,c,u);f.scale(x,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);let v=g.ri,E=g.rj;v.vadd(s,v),v.vsub(l.position,v),E.vadd(n,E),E.vsub(a.position,E),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,r,o,a,l,c,u,d){return this.convexHeightfield(t,e,s,n,o,r,l,a,c,u,d)}particleCylinder(e,t,n,s,r,o,a,l,c,u,d){return this.convexParticle(t,e,s,n,o,r,l,a,c,u,d)}sphereTrimesh(e,t,n,s,r,o,a,l,c,u,d){let h=ZS,f=jS,p=KS,x=JS,m=QS,g=eM,v=sM,E=$S,b=XS,M=rM;pt.pointToLocalFrame(s,o,n,m);let S=e.radius;v.lowerBound.set(m.x-S,m.y-S,m.z-S),v.upperBound.set(m.x+S,m.y+S,m.z+S),t.getTrianglesInAABB(v,M);let w=YS,y=e.radius*e.radius;for(let N=0;N<M.length;N++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[M[N]*3+I],w),w.vsub(m,b),b.lengthSquared()<=y){if(E.copy(w),pt.pointToWorldFrame(s,o,E,w),w.vsub(n,b),d)return!0;let F=this.createContactEquation(a,l,e,t,c,u);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(w),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let N=0;N<M.length;N++)for(let I=0;I<3;I++){t.getVertex(t.indices[M[N]*3+I],h),t.getVertex(t.indices[M[N]*3+(I+1)%3],f),f.vsub(h,p),m.vsub(f,g);let F=g.dot(p);m.vsub(h,g);let B=g.dot(p);if(B>0&&F<0&&(m.vsub(h,g),x.copy(p),x.normalize(),B=g.dot(x),x.scale(B,g),g.vadd(h,g),g.distanceTo(m)<e.radius)){if(d)return!0;let q=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),pt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,q.rj),pt.vectorToWorldFrame(o,q.ni,q.ni),pt.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}let T=tM,L=nM,D=iM,U=qS;for(let N=0,I=M.length;N!==I;N++){t.getTriangleVertices(M[N],T,L,D),t.getNormal(M[N],U),m.vsub(T,g);let F=g.dot(U);if(U.scale(F,g),m.vsub(g,g),F=g.distanceTo(m),Bn.pointInTriangle(g,T,L,D)&&F<e.radius){if(d)return!0;let B=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),pt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,B.rj),pt.vectorToWorldFrame(o,B.ni,B.ni),pt.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,s,r,o,a,l,c,u,d){let h=new C,f=GS;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);let x=new C;x.copy(h),pt.pointToWorldFrame(s,o,x,h);let m=HS;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(f);let E=WS;f.scale(m.dot(f),E),h.vsub(E,E),v.ri.copy(E),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Ns=new C,Rr=new C,Ir=new C,OS=new C,zS=new C,kS=new zt,VS=new zt,GS=new C,HS=new C,WS=new C,qS=new C,XS=new C;new C;var YS=new C,$S=new C,ZS=new C,jS=new C,KS=new C,JS=new C,QS=new C,eM=new C,tM=new C,nM=new C,iM=new C,sM=new Pn,rM=[],Ic=new C,im=new C,oM=new C,aM=new C,lM=new C;function cM(i,e,t){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=oM;i[(r+1)%s].vsub(o,a);let l=aM;a.cross(e,l);let c=lM;t.vsub(o,c);let u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var Pc=new C,hM=new C,uM=new C,dM=new C,fM=[new C,new C,new C,new C,new C,new C],pM=new C,mM=new C,gM=new C,xM=new C,yM=new C,vM=new C,_M=new C,bM=new C,SM=new C,MM=new C,wM=new C,EM=new C,AM=new C,TM=new C;new C;new C;var CM=new C,RM=new C,IM=new C,PM=new C,LM=new C,NM=new C,DM=new C,FM=new C,UM=new C,BM=new C,sm=new zt,OM=new C;new C;var zM=new C,rm=new C,kM=new C,VM=new C,GM=new C,HM=[0],WM=new C,qM=new C,Vc=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,u=n[l];for(;u>s[a];)a++;c=u===s[a],c||om(e,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||om(t,u)}}};function om(i,e){i.push((e&4294901760)>>16,e&65535)}var Ou=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`,$u=class{constructor(){this.data={keys:[]}}get(e,t){let n=Ou(e,t);return this.data[n]}set(e,t,n){let s=Ou(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){let n=Ou(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},Gc=class extends Nc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new ku,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Wu,this.constraints=[],this.narrowphase=new Yu(this),this.collisionMatrix=new Lc,this.collisionMatrixPrevious=new Lc,this.bodyOverlapKeeper=new Vc,this.shapeOverlapKeeper=new Vc,this.contactmaterials=[],this.contactMaterialTable=new $u,this.defaultMaterial=new kc("default"),this.defaultContactMaterial=new zc(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Pr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.ALL,n.from=e,n.to=t,n.callback=s,zu.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.ANY,n.from=e,n.to=t,n.result=s,zu.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Bn.CLOSEST,n.from=e,n.to=t,n.result=s,zu.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof it&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let s=t[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=qt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=qt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(qt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=jM,s=KM,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=it.DYNAMIC,h=-1/0,f=this.constraints,p=ZM;l.length();let x=l.x,m=l.y,g=l.z,v=0;for(c&&(h=qt.now()),v=0;v!==r;v++){let N=o[v];if(N.type===d){let I=N.force,F=N.mass;I.x+=F*x,I.y+=F*m,I.z+=F*g}}for(let N=0,I=this.subsystems.length;N!==I;N++)this.subsystems[N].update();c&&(h=qt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=qt.now()-h);let E=f.length;for(v=0;v!==E;v++){let N=f[v];if(!N.collideConnected)for(let I=n.length-1;I>=0;I-=1)(N.bodyA===n[I]&&N.bodyB===s[I]||N.bodyB===n[I]&&N.bodyA===s[I])&&(n.splice(I,1),s.splice(I,1))}this.collisionMatrixTick(),c&&(h=qt.now());let b=$M,M=t.length;for(v=0;v!==M;v++)b.push(t[v]);t.length=0;let S=this.frictionEquations.length;for(v=0;v!==S;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,b,this.frictionEquations,p),c&&(u.narrowphase=qt.now()-h),c&&(h=qt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let w=t.length;for(let N=0;N!==w;N++){let I=t[N],F=I.bi,B=I.bj,W=I.si,q=I.sj,H;if(F.material&&B.material?H=this.getContactMaterial(F.material,B.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,F.material&&B.material&&(F.material.friction>=0&&B.material.friction>=0&&F.material.friction*B.material.friction,F.material.restitution>=0&&B.material.restitution>=0&&(I.restitution=F.material.restitution*B.material.restitution)),a.addEquation(I),F.allowSleep&&F.type===it.DYNAMIC&&F.sleepState===it.SLEEPING&&B.sleepState===it.AWAKE&&B.type!==it.STATIC){let Y=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),$=B.sleepSpeedLimit**2;Y>=$*2&&(F.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===it.DYNAMIC&&B.sleepState===it.SLEEPING&&F.sleepState===it.AWAKE&&F.type!==it.STATIC){let Y=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),$=F.sleepSpeedLimit**2;Y>=$*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,B,!0),this.collisionMatrixPrevious.get(F,B)||(Zo.body=B,Zo.contact=I,F.dispatchEvent(Zo),Zo.body=F,B.dispatchEvent(Zo)),this.bodyOverlapKeeper.set(F.id,B.id),this.shapeOverlapKeeper.set(W.id,q.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=qt.now()-h,h=qt.now()),v=0;v!==r;v++){let N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(E=f.length,v=0;v!==E;v++){let N=f[v];N.update();for(let I=0,F=N.equations.length;I!==F;I++){let B=N.equations[I];a.addEquation(B)}}a.solve(e,this),c&&(u.solve=qt.now()-h),a.removeAllEquations();let y=Math.pow;for(v=0;v!==r;v++){let N=o[v];if(N.type&d){let I=y(1-N.linearDamping,e),F=N.velocity;F.scale(I,F);let B=N.angularVelocity;if(B){let W=y(1-N.angularDamping,e);B.scale(W,B)}}}this.dispatchEvent(YM),c&&(h=qt.now());let L=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,L,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=qt.now()-h),this.stepnumber+=1,this.dispatchEvent(XM);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==r;v++){let N=o[v];N.sleepTick(this.time),N.sleepState!==it.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Ri,Ii),e){for(let r=0,o=Ri.length;r<o;r+=2)jo.bodyA=this.getBodyById(Ri[r]),jo.bodyB=this.getBodyById(Ri[r+1]),this.dispatchEvent(jo);jo.bodyA=jo.bodyB=null}if(t){for(let r=0,o=Ii.length;r<o;r+=2)Ko.bodyA=this.getBodyById(Ii[r]),Ko.bodyB=this.getBodyById(Ii[r+1]),this.dispatchEvent(Ko);Ko.bodyA=Ko.bodyB=null}Ri.length=Ii.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Ri,Ii),n){for(let r=0,o=Ri.length;r<o;r+=2){let a=this.getShapeById(Ri[r]),l=this.getShapeById(Ri[r+1]);Pi.shapeA=a,Pi.shapeB=l,a&&(Pi.bodyA=a.body),l&&(Pi.bodyB=l.body),this.dispatchEvent(Pi)}Pi.bodyA=Pi.bodyB=Pi.shapeA=Pi.shapeB=null}if(s){for(let r=0,o=Ii.length;r<o;r+=2){let a=this.getShapeById(Ii[r]),l=this.getShapeById(Ii[r+1]);Li.shapeA=a,Li.shapeB=l,a&&(Li.bodyA=a.body),l&&(Li.bodyB=l.body),this.dispatchEvent(Li)}Li.bodyA=Li.bodyB=Li.shapeA=Li.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Pn;var zu=new Bn,qt=globalThis.performance||{};if(!qt.now){let i=Date.now();qt.timing&&qt.timing.navigationStart&&(i=qt.timing.navigationStart),qt.now=()=>Date.now()-i}new C;var XM={type:"postStep"},YM={type:"preStep"},Zo={type:it.COLLIDE_EVENT_NAME,body:null,contact:null},$M=[],ZM=[],jM=[],KM=[],Ri=[],Ii=[],jo={type:"beginContact",bodyA:null,bodyB:null},Ko={type:"endContact",bodyA:null,bodyB:null},Pi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Li={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var JM=.24,yn=1e-8,xn=i=>Array.isArray(i)?i:[i.x,i.y,i.z],gi=(i,e)=>i.map((t,n)=>t+e[n]),ht=(i,e)=>i.map((t,n)=>t-e[n]),Qn=(i,e)=>i.map(t=>t*e),Nt=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Hc=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],us=i=>Nt(i,i),Lr=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Nr=(i,e,t)=>Math.max(e,Math.min(t,i)),mi=i=>new C(...xn(i)),Dr=(i,e)=>{let t=2*(e.y*i[2]-e.z*i[1]),n=2*(e.z*i[0]-e.x*i[2]),s=2*(e.x*i[1]-e.y*i[0]);return[i[0]+e.w*t+e.y*s-e.z*n,i[1]+e.w*n+e.z*t-e.x*s,i[2]+e.w*s+e.x*n-e.y*t]},pm=(i,e)=>Dr(i,new zt(-e.x,-e.y,-e.z,e.w));function ed(i,e){let t=us(e);if(t<1e-12)return;let n=Qn(e,1/Math.sqrt(t));i.some(s=>Math.abs(Nt(s,n))>1-1e-7)||i.push(n)}function QM(i){let e=[],t=[],n=[];for(let s of i.faces){let[r,o,a]=s.map(l=>i.vertices[l]);ed(e,Hc(ht(o,r),ht(a,r)));for(let l=0;l<s.length;l++)ed(t,ht(i.vertices[s[(l+1)%s.length]],i.vertices[s[l]]));for(let l=1;l<s.length-1;l++)n.push([r,i.vertices[s[l]],i.vertices[s[l+1]]])}return{...i,normals:e,edges:t,triangles:n}}function mm(i,e){return e.faces.every(t=>{let[n,s,r]=t.map(o=>e.vertices[o]);return Nt(ht(i,n),Hc(ht(s,n),ht(r,n)))<=yn})}function e1(i,e,t,n,s){let r=i.vertices.map(f=>Dr(f,e)),o=i.normals.map(f=>Dr(f,e)),a=i.edges.map(f=>Dr(f,e)),l=[...o,...s.axes];for(let f of a)for(let p of s.axes)ed(l,Hc(f,p));let c=ht(t,s.position),u=0,d=1,h=[0,0,0];for(let f of l){let p=r.map(S=>Nt(S,f)),x=Nt(c,f),m=Math.min(...p)+x,g=Math.max(...p)+x,v=s.half.reduce((S,w,y)=>S+w*Math.abs(Nt(s.axes[y],f)),0),E=Nt(n,f);if(Math.abs(E)<yn){if(m>v+yn||g<-v-yn)return null;continue}let b=(-v-g)/E,M=(v-m)/E;if(b>M&&([b,M]=[M,b]),b>u&&(u=b,h=Qn(f,E>0?-1:1)),d=Math.min(d,M),u>d+yn)return null}return d>=0&&u<=1?{t:Math.max(0,u),normal:h}:null}function Ju(i,e,t,n=0){let s=ht(i,t.position),r=ht(e,i),o=t.axes.map(u=>Nt(s,u)),a=t.axes.map(u=>Nt(r,u)),l=0,c=1;for(let u=0;u<3;u++){let d=t.half[u]+n;if(Math.abs(a[u])<yn){if(Math.abs(o[u])>d)return null;continue}let h=(-d-o[u])/a[u],f=(d-o[u])/a[u];if(h>f&&([h,f]=[f,h]),l=Math.max(l,h),c=Math.min(c,f),l>c)return null}return l}function Qu(i,e,t,n){let s=ht(t,e),r=ht(n,e),o=ht(i,e),a=Nt(s,o),l=Nt(r,o);if(a<=0&&l<=0)return e;let c=ht(i,t),u=Nt(s,c),d=Nt(r,c);if(u>=0&&d<=u)return t;let h=a*d-u*l;if(h<=0&&a>=0&&u<=0)return gi(e,Qn(s,a/(a-u)));let f=ht(i,n),p=Nt(s,f),x=Nt(r,f);if(x>=0&&p<=x)return n;let m=p*l-a*x;if(m<=0&&l>=0&&x<=0)return gi(e,Qn(r,l/(l-x)));let g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return gi(t,Qn(ht(n,t),(d-u)/(d-u+p-x)));let v=1/(g+m+h);return gi(e,gi(Qn(s,m*v),Qn(r,h*v)))}function t1(i,e,t,n){let s=ht(e,i),r=ht(n,t),o=ht(i,t),a=Nt(s,s),l=Nt(s,r),c=Nt(r,r),u=Nt(s,o),d=Nt(r,o);if(a<yn)return{t:0,point:gi(t,Qn(r,c>yn?Nr(d/c,0,1):0))};let h=a*c-l*l,f=h>yn?Nr((l*d-c*u)/h,0,1):0,p=c>yn?(l*f+d)/c:0;return p<0?(p=0,f=Nr(-u/a,0,1)):p>1&&(p=1,f=Nr((l-u)/a,0,1)),{t:f,point:gi(t,Qn(r,p))}}function n1(i,e,t,n,s){let r=ht(e,i),o=Hc(ht(n,t),ht(s,t)),a=Nt(o,r);if(Math.abs(a)>yn){let c=Nt(o,ht(t,i))/a;if(c>=0&&c<=1){let u=Lr(i,e,c),d=Qu(u,t,n,s);if(us(ht(u,d))<1e-12)return{distance2:0,t:c,point:d}}}let l=[{t:0,point:Qu(i,t,n,s)},{t:1,point:Qu(e,t,n,s)}];for(let[c,u]of[[t,n],[n,s],[s,t]])l.push(t1(i,e,c,u));for(let c of l)c.distance2=us(ht(Lr(i,e,c.t),c.point));return l.reduce((c,u)=>u.distance2<c.distance2?u:c)}function gm(i=gn,e={form:"classic",size:1}){let t=new Gc({gravity:new C(0,0,0),allowSleep:!0});t.broadphase=new Fc(t);let n=[],s=[],r=new Map,o,a,l=[];function c(w){w.position=xn(w.body.position),w.axes=[[1,0,0],[0,1,0],[0,0,1]].map(y=>Dr(y,w.body.quaternion)),w.body.aabbNeedsUpdate=!0,w.body.updateAABB(),w.min=xn(w.body.aabb.lowerBound),w.max=xn(w.body.aabb.upperBound),t.broadphase.dirty=!0}function u(w,y,T="solid",L=[0,0,0],D){let U=new it({mass:0,shape:new Qo(new C(...w.map(I=>I/2))),position:mi(y)});U.quaternion.setFromEuler(...L,"XYZ"),U.kind=T,U.obstacleId=D,t.addBody(U);let N={body:U,half:w.map(I=>I/2),kind:T,id:D};return c(N),s.push(N),N}for(let w of i.obstacles??[])u(w.size,w.position,w.kind??"solid",w.rotation??[0,0,0],w.id);for(let w of i.doors??[]){let y=Cr(w,!1),T=u(y.size,y.position,"door",y.rotation,w.id);r.set(w.id,{door:w,obstacle:T,open:!1})}let d=xn(i.start??[0,1,0]),h=new it({mass:1,position:mi(d),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});h.kind="plane",t.addBody(h);function f(w="classic",y=1){for(o=Ls(w,y),a=o.parts.map(QM);h.shapes.length;)h.removeShape(h.shapes[0]);for(let T of a){let L=[0,1,2].map(D=>T.vertices.reduce((U,N)=>U+N[D],0)/T.vertices.length);h.addShape(new Jo({vertices:T.vertices.map(D=>mi(ht(D,L))),faces:T.faces}),mi(L))}return h.updateMassProperties(),h.updateBoundingRadius(),h.aabbNeedsUpdate=!0,l=[],t.broadphase.dirty=!0,o}f(e.form,e.size);function p(w,y=!0){let T=r.get(w);if(!T)return!1;let L=Cr(T.door,y);return T.obstacle.body.position.copy(mi(L.position)),T.obstacle.body.quaternion.setFromEuler(...L.rotation,"XYZ"),T.open=!!y,c(T.obstacle),!0}function x(){for(let w of r.keys())p(w,!1);h.position.copy(mi(d)),h.previousPosition.copy(h.position),h.interpolatedPosition.copy(h.position),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion);for(let w of["velocity","angularVelocity","force","torque"])h[w].setZero();h.collisionFilterMask=-1,h.aabbNeedsUpdate=!0,h.wakeUp(),t.accumulator=0,t.time=0,t.stepnumber=0,t.contacts.length=0,t.frictionEquations.length=0,t.collisionMatrix.reset(),t.collisionMatrixPrevious.reset(),t.broadphase.dirty=!0,l=[]}function m(w,y){let T=o.boundingRadius;return s.filter(L=>[0,1,2].every(D=>Math.min(w[D],y[D])-T<=L.max[D]&&Math.max(w[D],y[D])+T>=L.min[D]))}function g(w,y,T){let L=ht(y,w),D=null;for(let U of m(w,y))for(let N of a){let I=e1(N,T,w,L,U);I&&(!D||I.t<D.t)&&(D={...I,body:U.body})}return D}function v(w,y=h.velocity,T=h.quaternion){if(!Number.isFinite(w)||w<0)throw new TypeError("advance requires a non-negative finite timestep");let L=xn(h.position),D=Qn(xn(y),w),U=h.quaternion.clone(),N=new zt(T.x,T.y,T.z,T.w);N.normalize();let I=2*Math.acos(Nr(Math.abs(U.x*N.x+U.y*N.y+U.z*N.z+U.w*N.w),0,1)),F=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(us(D))/.12)),Math.ceil(I/.012));h.previousPosition.copy(h.position),h.previousQuaternion.copy(U),h.velocity.copy(mi(y)),l=[];let B=L,W=U,q=null;for(let Y=0;Y<F;Y++){let $=gi(L,Qn(D,(Y+1)/F)),ee=new zt,de=new zt;if(U.slerp(N,(Y+.5)/F,ee),U.slerp(N,(Y+1)/F,de),h.collisionFilterMask!==0&&(q=g(B,$,ee),!q)){let Ue=g($,$,de);Ue&&(q={...Ue,t:0})}if(q){let Ue=Math.sqrt(us(ht($,B))),fe=Math.max(0,q.t-(Ue>yn?.001/Ue:0)),Ce=Lr(B,$,fe);fe>0&&(W=ee),l.push({from:B,to:Ce,orientation:W}),B=Ce;break}l.push({from:B,to:$,orientation:ee}),B=$,W=de}h.position.copy(mi(B)),h.quaternion.copy(W),h.interpolatedPosition.copy(h.position),h.interpolatedQuaternion.copy(h.quaternion),h.aabbNeedsUpdate=!0,t.broadphase.dirty=!0,t.time+=w,t.stepnumber+=F;let H={collided:!!q,body:q?.body??null,normal:q?mi(q.normal):null,steps:F,safePosition:h.position.clone()};return q&&(h.velocity.setZero(),h.dispatchEvent({type:"collide",body:q.body,contact:{bi:h,bj:q.body,ni:mi(q.normal)}})),H}function E(w,y){return w=xn(w),y=xn(y),!s.some(T=>{let L=Ju(w,y,T);return L!==null&&L<1-1e-6})}function b(w,y=h.previousPosition,T=0){let L=xn(w.position??w),D=Math.max(0,Number(w.collectRadius??JM))+Math.max(0,Number(T)||0),U=xn(y),N=l.length&&us(ht(U,l[0].from))<1e-8?l:[{from:U,to:xn(h.position),orientation:h.quaternion}];for(let I of N){let F=ht(I.to,I.from),B=us(F),W=Lr(I.from,I.to,B>yn?Nr(Nt(ht(L,I.from),F)/B,0,1):0);if(us(ht(L,W))>(D+o.boundingRadius)**2)continue;let q=pm(ht(L,I.from),I.orientation),H=pm(ht(L,I.to),I.orientation);for(let Y of a){if((mm(q,Y)||mm(H,Y))&&E(L,L))return!0;for(let $ of Y.triangles){let ee=n1(q,H,...$);if(ee.distance2>D**2+yn)continue;let de=gi(Lr(I.from,I.to,ee.t),Dr(ee.point,I.orientation));if(E(de,L))return!0}}}return!1}function M(w,y,T=.18){w=xn(w),y=xn(y);let L=1;for(let I of s){let F=Ju(w,y,I,T);F!==null&&(L=Math.min(L,Math.max(0,F-.015)))}let[D,U,N]=Lr(w,y,L);return{x:D,y:U,z:N}}function S(w){let y=xn(w),T=gi(y,[0,50,0]),L=1/0;for(let D of s){if(!/ceiling|roof|floor|slab/.test(D.kind))continue;let U=Ju(y,T,D);U!==null&&U>yn&&(L=Math.min(L,y[1]+50*U))}return L}return x(),{world:t,plane:h,blocks:n,level:i,reset:x,configureAircraft:f,setDoorOpen:p,advance:v,canCollectStar:b,hasLineOfSight:E,traceCamera:M,getCeilingAt:S,get aircraft(){return o},doorBodies:r}}var i1=new Set(["hall-cloakroom","cloakroom-wc","cloakroom-storage","bedroom","bathroom"]),xm=i=>i.floor==="ug"||i.id.includes("stairs")||i1.has(i.id),Ni=structuredClone(gn);Ni.collectibles=[];Ni.name="Papierduell";Ni.doors=Ni.doors.map(i=>({...i,duelOpen:!xm(i),signText:xm(i)?"ZU":"OFFEN"}));var ym=Object.freeze(Ni.doors.filter(i=>i.duelOpen).map(i=>i.id)),ds=Object.freeze(["p1","p2","p3","p4","p5"]),On=Object.freeze({p1:"#68cdb4",p2:"#e48b7e",p3:"#78b9ef",p4:"#ba9bea",p5:"#e9c25d"}),AC=Object.freeze([Object.freeze({id:"p1",x:-3.8,y:1.5,z:-5.5,heading:1.85}),Object.freeze({id:"p2",x:17.2,y:1.5,z:16,heading:-Math.PI/2+.2}),Object.freeze({id:"p3",x:17.2,y:1.5,z:-5.5,heading:Math.PI-.15}),Object.freeze({id:"p4",x:-3.8,y:1.5,z:16,heading:.12}),Object.freeze({id:"p5",x:7,y:1.5,z:5.6,heading:Math.PI})]),Wc=Object.freeze({minPlayers:2,maxPlayers:5,hp:100,shotDamage:20,shotCooldown:.35,shotSpeed:9,lifetime:2.5,roundSeconds:180,shotRadius:.025,wallDamage:10,wallCooldown:1.25,recoverySeconds:.5,stepSeconds:1/30});function vm({position:i,input:e,heading:t,speed:n,tuning:s,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(e.pitch)>.25&&Math.abs(e.steer)<.35),l=r?e.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-i.x)*2:Math.sin(t)*n,z:a?(r.z-i.z)*2:-Math.cos(t)*n,targetVertical:-s.sinkRate+e.pitch*s.pitchRate+l+(o?1.9:0)}}var Fr=Object.freeze(Op("classic",1)),td=(i,e,t)=>Math.max(e,Math.min(t,i)),s1=i=>({steer:typeof i?.steer=="number"&&Number.isFinite(i.steer)?td(i.steer,-1,1):0,pitch:typeof i?.pitch=="number"&&Number.isFinite(i.pitch)?td(i.pitch,-1,1):0,fire:i?.fire===!0});function r1(i,e,t=0){let n=Math.cos(i/2),s=Math.sin(i/2),r=Math.cos(-e/2),o=Math.sin(-e/2),a=Math.cos(t/2),l=Math.sin(t/2);return{x:s*r*a+n*o*l,y:n*o*a-s*r*l,z:n*r*l-s*o*a,w:n*r*a+s*o*l}}function o1(i,e,t,n=Ni){let s=s1(e),r=(f,p,x)=>p+(f-p)*Math.exp(-x*t),o={steer:r(i.input?.steer??0,s.steer,9),pitch:r(i.input?.pitch??0,s.pitch,7)},a=Math.atan2(Math.sin(i.heading+o.steer*Fr.turnRate*t),Math.cos(i.heading+o.steer*Fr.turnRate*t)),l=i.position,c=n.thermals?.find(f=>Math.hypot(l.x-f.x,l.z-f.z)<f.r&&l.y>=f.y&&l.y<f.y+f.height),u=vm({position:l,input:o,heading:a,speed:Fr.speed,tuning:Fr,thermal:c,lift:!1}),d=r(i.verticalSpeed??0,u.targetVertical,4),h=r1(Math.atan2(d,u.ride?Math.max(2,Fr.speed):Fr.speed)*.7,a,-o.steer*.42);return{heading:a,input:o,verticalSpeed:d,quaternion:h,velocity:{x:u.x,y:d,z:u.z}}}function _m(i,e,t){let n=Number.isFinite(t)?td(t,0,.1):0,s={...i,position:{...i.position},quaternion:{...i.quaternion},input:{...i.input||{}}};if(i.recovering||i.eliminated||i.hp<=0)return s;for(;n>1e-9;){let r=Math.min(n,Wc.stepSeconds),o=o1(s,e,r);s={...s,...o,position:{x:s.position.x+o.velocity.x*r,y:s.position.y+o.velocity.y*r,z:s.position.z+o.velocity.z*r}},n-=r}return delete s.velocity,s}function bm(i,{traceCamera:e=(a,l)=>l,mode:t="chase",chaseDistance:n=1.45,chaseHeight:s=.62,lookAhead:r=1.3,levelChase:o=!0}={}){let a=i.near,l=new z,c=new z,u=new z,d=new z,h=new Vt,f=new z,p=t==="fpv"?"fpv":"chase",x=!1,m=null,g=.008;function v(S){let w=S==="fpv"?"fpv":"chase";w!==p&&(p=w,x=!1);let y=p==="fpv"?g:a;return i.near!==y&&(i.near=y,i.updateProjectionMatrix()),p}function E(){x=!1,m=null}function b({position:S,quaternion:w,heading:y,length:T=.33,model:L,id:D=L},{dt:U=1/60,immediate:N=!1,ready:I=!1}={}){D!==m&&(x=!1,m=D);let F=Number.isFinite(T)&&T>0?T:.33;if(g=Math.min(.012,F*.025),v(p),h.copy(w).normalize(),p==="fpv"){f.set(0,F*.14,-F*.12).applyQuaternion(h),c.copy(S).add(f),i.position.copy(e(S,c,.015)),i.quaternion.copy(h),x=!0;return}if(i.up.set(0,1,0),l.set(0,0,-1).applyQuaternion(h),o&&(Number.isFinite(y)?l.set(Math.sin(y),0,-Math.cos(y)):(l.y=0,l.normalize())),c.copy(S).addScaledVector(l,I?-.42:-n),I&&(c.x-=1.25),c.y+=I?.95:s,c.copy(e(S,c,.12)),u.copy(S).addScaledVector(l,I?.25:r),u.y+=.08,N||!x)i.position.copy(c),d.copy(u),x=!0;else{let B=1-Math.exp(-Math.max(0,Math.min(.1,U))*9);i.position.lerp(c,B),d.lerp(u,B)}i.position.copy(e(S,i.position,.1)),i.lookAt(d)}function M(){E(),i.near=a,i.updateProjectionMatrix()}return v(p),{setMode:v,update:b,reset:E,dispose:M,get mode(){return p}}}function Sm(i,e=()=>({width:innerWidth,height:innerHeight})){let t=gm(Ni,{form:"classic",size:1}),n=qp(i,t,e);for(let U of ym)t.setDoorOpen(U,!0),n.setDoorOpen(U,!0);n.sling.visible=!1;let s=Object.fromEntries(ds.map((U,N)=>{let I=N===0?n.plane:n.plane.clone(!0);return I.name=`Papierflieger ${U}`,N&&n.scene.add(I),[U,I]}));for(let[U,N]of Object.entries(s))N.traverse(I=>{I.isMesh&&(I.material=I.material.clone())}),qo(N,null,On[U]),N.visible=!1;let r=Object.fromEntries(ds.map((U,N)=>[U,N===0?n.effects:Ac(n.scene,{name:`Flugspur ${U}`})])),o=new Map,a=new an;n.scene.add(a);let l=new Mo(Wc.shotRadius,8,6),c=Object.fromEntries(ds.map(U=>[U,new $n({color:On[U],emissive:On[U],emissiveIntensity:.8,roughness:.85})])),u=new Map,d=new Map,h=new z,f=new z,p=new Vt,x=bm(n.camera,{traceCamera:t.traceCamera,chaseHeight:.55,lookAhead:2.8,levelChase:!1}),m=Ls("classic",1).length,g=document.getElementById("duel-reticle"),v=null,E=performance.now(),b=!1,M=-1,S={},w=0,y=null;function T(){x.reset(),b=!1,d.clear(),S={},y=null;for(let[U,N]of Object.entries(s))N.visible=!1,N.userData.flightCameraVisible=!1,r[U].clear();a.clear(),u.clear()}function L(U,N="p1",I=1/60,F={}){if(I=Math.max(0,Math.min(.05,I)),w+=I,!U&&v&&(v=null,M=-1,T()),U&&U!==v){let $=U.tick<M,ee=performance.now()-E>750;($||ee)&&T(),M=U.tick,E=performance.now(),v=U;let de=new Set(U.players.map(fe=>fe.id));for(let[fe,Ce]of Object.entries(s))de.has(fe)||(Ce.visible=!1,Ce.userData.flightCameraVisible=!1,r[fe].clear(),d.delete(fe));for(let fe of U.players){let Ce=s[fe.id];if(!Ce)continue;let se=!d.get(fe.id)||!b||Ce.position.distanceTo(fe.position)>1.5;d.set(fe.id,{player:fe,from:se?new z().copy(fe.position):Ce.position.clone(),fromQ:se?new Vt().copy(fe.quaternion):Ce.quaternion.clone()}),se&&(Ce.position.copy(fe.position),Ce.quaternion.copy(fe.quaternion),r[fe.id].reset(fe.position));let xe=fe.appearance||{},Ve=xe.color??null,_e=xe.effect||"none",ae=`${Ve}:${_e}`;o.get(fe.id)!==ae&&(qo(Ce,Ve,On[fe.id]),r[fe.id].setEffect(_e),o.set(fe.id,ae)),Ce.visible=Ce.userData.flightCameraVisible=fe.hp>0,fe.hp<=0&&r[fe.id].clear(),S[fe.id]!==void 0&&fe.hp<S[fe.id]&&(Ce.userData.hitUntil=w+.22),S[fe.id]=fe.hp}let Ue=new Set(U.projectiles.map(fe=>fe.id));for(let[fe,Ce]of u)Ue.has(fe)||(a.remove(Ce),u.delete(fe));for(let fe of U.projectiles){let Ce=u.get(fe.id);Ce||(Ce=new _t(l,c[fe.owner]||c.p1),Ce.position.copy(fe.position),u.set(fe.id,Ce),a.add(Ce)),Ce.userData.from=Ce.position.clone(),Ce.userData.target=new z().copy(fe.position)}}let B=Math.min(.1,Math.max(0,(performance.now()-E)/1e3)),W=performance.now()-E>750,q=Math.min(1,B/.1);for(let[$,ee]of d){let de=s[$];if(de.visible=de.userData.flightCameraVisible=ee.player.hp>0,$===N){let Ue=F.active&&ee.player.hp>0&&!ee.player.recovering?_m(ee.player,F,B):ee.player,fe=de.position.distanceTo(Ue.position)>.6?1:1-Math.exp(-I*28);de.position.lerp(Ue.position,fe),p.copy(Ue.quaternion),de.quaternion.slerp(p,fe)}else de.position.lerpVectors(ee.from,ee.player.position,q),de.quaternion.copy(ee.fromQ).slerp(p.copy(ee.player.quaternion),q);de.traverse(Ue=>{Ue.isMesh&&(Ue.material.emissive.set(w<(de.userData.hitUntil||0)?"#e24b3b":"#000000"),Ue.material.emissiveIntensity=.75)}),ee.player.hp>0&&!W&&!U?.winner?r[$].push(de.position):r[$].clear(),r[$]!==n.effects&&r[$].update(I,w)}for(let $ of u.values())$.position.lerpVectors($.userData.from,$.userData.target,q);let H=d.get(N)?.player.hp>0?N:d.get(y)?.player.hp>0?y:[...d].find(([,$])=>$.player.hp>0)?.[0]||N;H!==y&&(x.reset(),y=H,b=!1);let Y=s[y];Y&&d.has(y)?(t.plane.position.copy(Y.position),t.plane.quaternion.copy(Y.quaternion),h.set(0,0,-1).applyQuaternion(Y.quaternion),x.update({position:Y.position,quaternion:Y.quaternion,model:Y,id:y,length:m},{dt:I,immediate:!b}),b=!0,g&&(n.camera.updateMatrixWorld(),f.copy(Y.position).addScaledVector(h,8).project(n.camera),g.style.left=`${(f.x*.5+.5)*100}%`,g.style.top=`${(-f.y*.5+.5)*100}%`)):(x.reset(),n.camera.up.set(0,1,0),n.camera.position.set(9,5.2,-8),n.camera.lookAt(7,.9,0)),n.update(I,w),n.render()}function D(){x.dispose(),Object.values(r).forEach(U=>U.dispose()),l.dispose(),Object.values(c).forEach(U=>U.dispose()),n.dispose()}return{update:L,resize:n.resize,setCameraMode:x.setMode,get cameraMode(){return x.mode},dispose:D}}var a1=250,ta="stubenflieger.house-profile.v1",Xc=Object.freeze({min:.55,max:1.5,step:.05}),l1=[{id:"upgrade:size",category:"upgrades",name:"Verstellbare Gr\xF6\xDFe",price:1800,description:"55\u2013150 %: Gro\xDF gleitet l\xE4nger, klein kurvt enger und passt durch kleine L\xFCcken. Die Hitbox w\xE4chst mit."},{id:"upgrade:color",category:"colors",name:"Eigene Flugzeugfarbe",price:2e3,description:"Einmal freischalten, danach jede Farbe kostenlos w\xE4hlen. Die Original-Papierfarbe kannst du jederzeit wiederherstellen."},{id:"boost:lift",category:"boosts",name:"Aufwind",price:800,description:"Ein kurzer H\xF6hengewinn. Ein Einsatz in jedem Run."},{id:"boost:turbo",category:"boosts",name:"Turbo",price:1e3,description:"Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run."},{id:"boost:magnet",category:"boosts",name:"Sternmagnet",price:1400,description:"Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run."},{id:"boost:cushion",category:"boosts",name:"Luftpolster",price:1600,description:"F\xE4ngt nach der Aktivierung eine leichte Ber\xFChrung ab. Ein Einsatz in jedem Run."},{id:"plane:classic",category:"planes",name:"Klassiker",price:0,description:"Gerade Fl\xFCgelenden und ausgewogenes Flugverhalten."},{id:"plane:glider",category:"planes",name:"Gleiter",price:1200,description:"Breite, gerundete Fl\xFCgel. L\xE4ngeres Gleiten und gem\xFCtlicheres Tempo."},{id:"plane:dart",category:"planes",name:"Pfeil",price:1800,description:"Spitze Dreiecksform, h\xF6heres Tempo und weitere Kurven."},{id:"plane:stunt",category:"planes",name:"Kunstflieger",price:2500,description:"Gerade, kantige Fl\xFCgel und ein eckiges Leitwerk f\xFCr enge Kurven."},{id:"effect:none",category:"effects",name:"Ohne Effekt",price:0,description:"Die schlichte Papieroptik."},{id:"effect:mint",category:"effects",name:"Minzspur",price:300,description:"Eine dezente t\xFCrkise Flugspur."},{id:"effect:spark",category:"effects",name:"Sternenstaub",price:700,description:"Goldenes Funkeln hinter deinem Flieger."},{id:"effect:confetti",category:"effects",name:"Konfettispur",price:1e3,description:"Eine bunte Spur f\xFCr deinen Hausflug."}],id=Object.freeze([...l1,...gn.doors.map((i,e)=>({id:`door:${i.id}`,category:"doors",name:i.name||i.id,price:Math.min(4e3,500+e*200),description:"Bei jedem Run von Anfang an offen, solange du gekaufte T\xFCren aktiviert hast."}))].map(Object.freeze)),na=new Map(id.map(i=>[i.id,i])),nd=new Map(gn.rooms.map(i=>[i.id,i.bonusId||i.id]));for(let i of nd.values())nd.set(i,i);var c1=gn.startRoomId||gn.startRoom||gn.rooms[0].id,qc=i=>JSON.parse(JSON.stringify(i));function h1(i={}){if(i.practice===!0)return 0;let e=r=>Number.isInteger(r)&&r>0?r:0,t=Number.isFinite(i.seconds)?Math.min(60,Math.max(0,i.seconds)):0,n=new Set(Array.isArray(i.roomIds)?i.roomIds.map(r=>nd.get(r)).filter(r=>r&&r!==c1):[]);return(Object.hasOwn(i,"starIds")?zp(i.starIds):e(i.stars)*150)+e(i.blocks)*100+Math.floor(t*10)+n.size*a1}function Em(){return{version:2,points:0,highscore:0,owned:["plane:classic","effect:none"],equipped:{form:"classic",effect:"none",boosts:[],size:1,color:null},useDoorUnlocks:!0,creditedRuns:[],discoveredStarIds:[]}}function Mm(i){if(i===null)return Em();let e;try{e=JSON.parse(i)}catch{throw new Error("Dein gespeichertes Profil ist besch\xE4digt. Es wird nicht \xFCberschrieben.")}if(!e||![1,2].includes(e.version)||!Number.isSafeInteger(e.points)||e.points<0||!Number.isSafeInteger(e.highscore)||e.highscore<0||!Array.isArray(e.owned)||!e.owned.every(c=>typeof c=="string")||!Array.isArray(e.creditedRuns)||!e.creditedRuns.every(c=>typeof c=="string")||!e.equipped||e.version===2&&(!Array.isArray(e.discoveredStarIds)||!e.discoveredStarIds.every(c=>typeof c=="string")))throw new Error("Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht \xFCberschrieben.");let t=[...new Set(["plane:classic","effect:none",...e.owned])],n=e.equipped,s=na.has(`plane:${n.form}`)&&t.includes(`plane:${n.form}`)?n.form:"classic",r=na.has(`effect:${n.effect}`)&&t.includes(`effect:${n.effect}`)?n.effect:"none",o=[...new Set(Array.isArray(n.boosts)?n.boosts:[])].filter(c=>na.has(`boost:${c}`)&&t.includes(`boost:${c}`)).slice(0,2),a=t.includes("upgrade:size")&&Number.isFinite(n.size)?Math.min(Xc.max,Math.max(Xc.min,n.size)):1,l=null;if(t.includes("upgrade:color"))try{l=as(n.color??null)}catch{}return{version:2,points:e.points,highscore:e.highscore,owned:t,equipped:{form:s,effect:r,boosts:o,size:a,color:l},useDoorUnlocks:e.useDoorUnlocks!==!1,creditedRuns:[...new Set(e.creditedRuns)],discoveredStarIds:e.version===2?[...new Set(e.discoveredStarIds)]:[]}}function wm(i){if(typeof i!="string"||i.length<8||i.length>100)throw new Error("Dieser Run konnte nicht zugeordnet werden.")}function Am(i){let e=Em(),t=null,n="Speichern im Browser ist gerade nicht m\xF6glich. Punkte und K\xE4ufe wurden nicht ver\xE4ndert. Bitte erlaube Website-Daten und versuche es erneut.";try{i||(i=globalThis.localStorage),e=Mm(i.getItem(ta))}catch(c){t=c.message?.includes("Profil")?c.message:n}function s(){if(!i)throw new Error(n);try{e=Mm(i.getItem(ta)),t=null}catch(c){throw t=c.message?.includes("Profil")?c.message:n,new Error(t)}}function r(c){try{i.setItem(ta,JSON.stringify(c))}catch{throw t=n,new Error(t)}e=c,t=null}function o(){let{creditedRuns:c,...u}=e;return qc(u)}function a(c){s();let u=qc(e);return c(u),r(u),o()}function l(c,u){if(!c.owned.includes(u)||!na.has(u))throw new Error("Bitte schalte diesen Artikel zuerst frei.")}return{getProfile:o,getStatus:()=>({available:!t,error:t}),refresh:()=>(s(),o()),purchase(c){return a(u=>{let d=na.get(c);if(!d)throw new Error("Diesen Artikel gibt es nicht.");if(u.owned.includes(c))throw new Error("Dieser Artikel ist bereits dauerhaft freigeschaltet.");if(u.points<d.price)throw new Error("Daf\xFCr fehlen noch Punkte.");u.points-=d.price,u.owned.push(c)})},equipForm(c){return a(u=>{l(u,`plane:${c}`),u.equipped.form=c})},equipEffect(c){return a(u=>{l(u,`effect:${c}`),u.equipped.effect=c})},setColor(c){return c=as(c),a(u=>{c!==null&&l(u,"upgrade:color"),u.equipped.color=c})},equipBoosts(c){return a(u=>{if(!Array.isArray(c)||c.length>2||new Set(c).size!==c.length)throw new Error("W\xE4hle h\xF6chstens zwei verschiedene Boosts.");c.forEach(d=>l(u,`boost:${d}`)),u.equipped.boosts=[...c]})},setSize(c){return a(u=>{if(l(u,"upgrade:size"),!Number.isFinite(c)||c<Xc.min||c>Xc.max)throw new Error("W\xE4hle eine Gr\xF6\xDFe zwischen 55 und 150 %.");u.equipped.size=Math.round(c*100)/100})},setPermanentDoorsEnabled(c){return a(u=>{u.useDoorUnlocks=!!c})},creditStar(c,u){wm(c);let d=Wo(u);s();let h=!e.discoveredStarIds.includes(d.id),f=h?d.basePoints:0;if(h){let p=qc(e);if(!Number.isSafeInteger(p.points+f))throw new Error("Das Punkteguthaben ist zu gro\xDF.");p.points+=f,p.discoveredStarIds.push(d.id),r(p)}return{starId:d.id,firstDiscovery:h,basePoints:d.basePoints,bonus:f,totalPoints:d.basePoints+f,credited:f,points:e.points,duplicate:!h}},creditRun(c,u){if(wm(c),u?.practice===!0)return{credited:0,points:e.points,score:0,practice:!0};s();let d=h1(u);if(!Number.isSafeInteger(d))throw new Error("Dieses Flugergebnis ist ung\xFCltig.");if(e.creditedRuns.includes(c))return{credited:0,points:e.points,score:d,duplicate:!0};let h=qc(e);if(!Number.isSafeInteger(h.points+d))throw new Error("Das Punkteguthaben ist zu gro\xDF.");return h.points+=d,h.highscore=Math.max(h.highscore,d),h.creditedRuns.push(c),r(h),{credited:d,points:h.points,score:d,duplicate:!1}}}}var Tm="stubenflieger.duel-appearance.v1",Cm=(i,e)=>i?.color===e?.color&&i?.effect===e?.effect;function Rm(i){let e=b=>document.getElementById(b),t=Am(),n=e("duel-appearance"),s=t.getProfile(),r,o,a=!1,l=!1,c="",u=()=>s.owned.includes("upgrade:color");function d(b){let M=null,S="none";try{M=as(b?.color??null),S=kp(b?.effect??"none")}catch{}return{color:u()?M:null,effect:s.owned.includes(`effect:${S}`)?S:"none"}}try{o=JSON.parse(localStorage.getItem(Tm)||"null")}catch{}r=d(o||s.equipped),o={...r};function h(){e("duel-custom-color").checked=!!r.color,e("duel-color").value=r.color||"#fff1cc",e("duel-color-value").textContent=r.color||"Teamfarbe",e("duel-effect").value=r.effect,e("duel-color-preview").style.backgroundColor=r.color||"#fff1cc"}function f(){try{s=t.refresh()}catch{}let b=s.owned.join("|");if(c!==b){c=b,e("duel-effect").replaceChildren();for(let M of id.filter(S=>S.category==="effects"&&s.owned.includes(S.id))){let S=document.createElement("option");S.value=M.id.split(":")[1],S.textContent=M.name,e("duel-effect").append(S)}r=d(r),h()}}function p(){r=d({color:e("duel-custom-color").checked?e("duel-color").value:null,effect:e("duel-effect").value}),a=!Cm(r,o),h(),v()}let x="entry",m=!1,g=!1;function v(b=x,M=m,S=g){x=b,m=M,g=S;let w=e(x==="lobby"?"lobby-appearance":"entry-appearance");n.parentElement!==w&&w.append(n);let y=g||l||!["entry","lobby"].includes(x)||x==="lobby"&&!m;e("duel-custom-color").disabled=y||!u(),e("duel-color").disabled=y||!u()||!e("duel-custom-color").checked,e("duel-effect").disabled=y,e("apply-appearance").hidden=x!=="lobby",e("apply-appearance").disabled=y||!a,e("appearance-status").textContent=l?"Aussehen wird \xFCbernommen \u2026":u()?a&&x==="lobby"?"\xDCbernimm deine Auswahl, damit alle sie sehen.":"Deine Farbe und dein Effekt sind f\xFCr alle Mitspieler sichtbar.":"Eigene Farben: Farbw\xE4hler f\xFCr 2.000 Punkte im Soloshop freischalten. Gekaufte Effekte sind hier ausw\xE4hlbar."}function E(b){r=d(b),o={...r},a=l=!1;try{localStorage.setItem(Tm,JSON.stringify(r))}catch{}h(),v()}return e("duel-custom-color").addEventListener("change",p),e("duel-color").addEventListener("input",p),e("duel-effect").addEventListener("change",p),e("apply-appearance").onclick=()=>{if(x!=="lobby"||!m||l)return;f();let b=d(r);i(b)&&(l=!0,v())},f(),h(),v(),window.addEventListener("storage",b=>{(b.key===ta||b.key===null)&&(f(),v())}),document.addEventListener("visibilitychange",()=>{document.hidden||(f(),v())}),{render:v,refresh:f,confirm:E,current(){return f(),d(r)},matches:b=>Cm(d(b),r),reject(){l=!1,v()}}}var Im="stubenflieger.camera.v1";function Pm(){try{return localStorage.getItem(Im)==="fpv"?"fpv":"chase"}catch{return"chase"}}function Lm(i){try{localStorage.setItem(Im,i==="fpv"?"fpv":"chase")}catch{}}function sd(i,e){i.textContent=e==="fpv"?"FPV":"Au\xDFen",i.setAttribute("aria-pressed",String(e==="fpv")),i.setAttribute("aria-label",e==="fpv"?"Zur Au\xDFenansicht wechseln (V)":"Zur FPV-Ansicht wechseln (V)"),i.title=e==="fpv"?"FPV aktiv \xB7 V: Au\xDFenansicht":"Au\xDFenansicht aktiv \xB7 V: FPV"}var rd="stubenflieger.mobile.v1",Nm=()=>({joystickSide:"left",autoFullscreen:!0}),Ur=(i,e=1)=>Number.isFinite(i)&&i>0?i:e,Dm=i=>Number.isFinite(i)?Math.round(Math.max(0,i)):0;function Fm(i){return{joystickSide:i?.joystickSide==="right"?"right":"left",autoFullscreen:typeof i?.autoFullscreen=="boolean"?i.autoFullscreen:!0}}function ia(i=0,e=globalThis.window){let t=e?.visualViewport,n=t&&Math.abs((t.scale??1)-1)<.01,s=Math.max(1,Math.round(n?Ur(t.width,Ur(e?.innerWidth)):Ur(e?.innerWidth))),r=Math.max(1,Math.round(n?Ur(t.height,Ur(e?.innerHeight)):Ur(e?.innerHeight))),o=n?Dm(t.offsetLeft):0,a=n?Dm(t.offsetTop):0,l=Number.isFinite(i)&&Math.abs(Math.round(i/90))%2===1;return{width:l?r:s,height:l?s:r,left:o,top:a,centerX:o+s/2,centerY:a+r/2,physicalWidth:s,physicalHeight:r}}function Um({root:i,sideSelect:e,autoFullscreenInput:t,fullscreenButton:n,statusNode:s,onSideChange:r=()=>{},onViewportChange:o=()=>{},getRotation:a=()=>0,window:l=globalThis.window,document:c=l?.document??globalThis.document,storage:u}={}){if(i??=c?.documentElement,u===void 0)try{u=l?.localStorage}catch{u=null}let d=Nm();try{d=Fm(JSON.parse(u?.getItem(rd)||"null"))}catch{}let h=[],f=l?.matchMedia?.("(display-mode: standalone)"),p=l?.matchMedia?.("(pointer: coarse)"),x=c?.documentElement,m=ia(a(),l),g=null,v=!1,E=!1,b="",M=!1,S=null,w=()=>!!(c?.fullscreenElement||c?.webkitFullscreenElement),y=()=>!!(f?.matches||l?.navigator?.standalone===!0),T=()=>x?.requestFullscreen||x?.webkitRequestFullscreen,L=()=>c?.exitFullscreen||c?.webkitExitFullscreen,D=()=>typeof T()=="function"&&c?.fullscreenEnabled!==!1&&c?.webkitFullscreenEnabled!==!1,U=()=>!!(p?.matches||l?.navigator?.maxTouchPoints>0),N=w();function I(ae,Oe,ie){ae?.addEventListener&&(ae.addEventListener(Oe,ie),h.push(()=>ae.removeEventListener(Oe,ie)))}function F(){if(v)return;let ae=w(),Oe=y(),ie=D();n&&(n.disabled=Oe||!ae&&!ie,n.textContent=ae?"Vollbild beenden":Oe?"Als App ge\xF6ffnet":"Vollbild",n.setAttribute("aria-pressed",String(ae||Oe)));let le;Oe?le="Als App ge\xF6ffnet \u2013 ohne Browser-Adressleiste.":ae?le="Vollbild aktiv. Mit der Systemgeste oder Esc beenden.":ie?b?le=b:E?le="Vollbild beendet. Mit \u201EVollbild\u201C kannst du es wieder einschalten.":d.autoFullscreen&&U()?le="Im Querformat startet Vollbild bei der n\xE4chsten Ber\xFChrung, wenn der Browser es erlaubt.":le="Vollbild l\xE4sst sich \xFCber die Schaltfl\xE4che einschalten.":le="Dieser Browser bietet kein Spiel-Vollbild. Ohne Adressleiste: Zum Home-Bildschirm hinzuf\xFCgen; auf dem iPhone \u201EAls Web-App \xF6ffnen\u201C w\xE4hlen.",M&&(le+=" Diese Einstellung konnte auf diesem Ger\xE4t nicht gespeichert werden."),s&&(s.textContent=le)}function B(){try{if(!u?.setItem)throw new Error("Storage unavailable");u.setItem(rd,JSON.stringify(d)),M=!1}catch{M=!0}}function W(ae=!1){i?.dataset&&(i.dataset.joystickSide=d.joystickSide),e&&(e.value=d.joystickSide),t&&(t.checked=d.autoFullscreen),ae&&r(d.joystickSide),F()}function q(ae){let Oe=ae==="right"?"right":"left",ie=d.joystickSide!==Oe;d={...d,joystickSide:Oe},B(),W(ie)}function H(ae){d={...d,autoFullscreen:ae===!0},ae===!0&&(E=!1,b=""),B(),W()}function Y(){let ae=l?.visualViewport?.scale??1;return Math.abs(ae-1)<.01?ia(a(),l):{...m}}function $(){if(v)return{...m};let ae=Y();return Object.keys(ae).some(Oe=>ae[Oe]!==m[Oe])&&(m=ae,o({...m})),F(),{...m}}function ee(){if(v||g!==null)return;g=(l?.requestAnimationFrame?.bind(l)||(Oe=>setTimeout(Oe,0)))(()=>{g=null,$()})}function de(){let ae=w();N&&!ae&&(E=!0),N=ae,ae&&(b=""),F(),ee()}function Ue(){E=!0,b="Vollbild ist gerade nicht m\xF6glich. Versuche die Vollbild-Schaltfl\xE4che oder starte \xFCber den Home-Bildschirm.",F()}function fe(){if(v)return Promise.resolve(!1);if(w()||y())return F(),Promise.resolve(!0);if(S)return S;if(!D())return F(),Promise.resolve(!1);E=!1,b="";let ae;try{ae=T().call(x,{navigationUI:"hide"})}catch(Oe){ae=Promise.reject(Oe)}return S=Promise.resolve(ae).then(()=>(de(),w()||y()),()=>(Ue(),!1)).finally(()=>{S=null}),S}function Ce(ae){return ae?.isTrusted===!0||l?.navigator?.userActivation?.isActive===!0}function Q(ae){let Oe=Y();return v||!d.autoFullscreen||E||w()||y()||!D()||!U()||Oe.width<=Oe.height||!Ce(ae)||c?.hidden?Promise.resolve(!1):fe()}function se(ae){if(ae.type==="keydown"&&(ae.code==="Escape"||ae.code==="F11")){w()&&(E=!0);return}ae.repeat||ae.ctrlKey||ae.altKey||ae.metaKey||n&&(ae.target===n||n.contains?.(ae.target))||ae.target?.closest?.('input,select,textarea,[contenteditable="true"],a[href]')||Q(ae)}function xe(){if(!w()){fe();return}E=!0;let ae;try{ae=L()?.call(c)}catch(Oe){ae=Promise.reject(Oe)}Promise.resolve(ae).then(de,()=>{b="Vollbild bitte mit der Systemgeste oder Esc beenden.",F()})}function Ve(ae){if(ae.storageArea&&ae.storageArea!==u||ae.key!==rd&&ae.key!==null)return;let Oe=Nm();try{Oe=Fm(JSON.parse(ae.newValue||"null"))}catch{}let ie=Oe.joystickSide!==d.joystickSide;d=Oe,W(ie)}I(e,"change",()=>q(e.value)),I(t,"change",ae=>{H(t.checked),d.autoFullscreen&&Q(ae)}),I(n,"click",xe),I(c,"pointerup",se),I(c,"keydown",se),I(c,"fullscreenchange",de),I(c,"webkitfullscreenchange",de),I(c,"fullscreenerror",Ue),I(c,"webkitfullscreenerror",Ue),I(l,"resize",ee),I(l,"orientationchange",ee),I(l?.visualViewport,"resize",ee),I(l?.visualViewport,"scroll",ee),I(f,"change",()=>{F(),ee()}),I(p,"change",F),I(l,"storage",Ve),W(!0);function _e(){v||(v=!0,h.forEach(ae=>ae()),g!==null&&(l?.cancelAnimationFrame?l.cancelAnimationFrame(g):clearTimeout(g),g=null))}return{get settings(){return{...d}},getViewport:Y,refreshViewport:$,requestFullscreen:fe,tryAutoFullscreen:Q,setJoystickSide:q,setAutoFullscreen:H,dispose:_e}}var Yc="stubenflieger.duel.v1:",sa=i=>Math.max(-1,Math.min(1,Number.isFinite(i)?i:0));function $c(i){if(typeof i!="string"||!i.startsWith("#"))return null;let e=new URLSearchParams(i.slice(1)).get("room");return typeof e=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)?e.toLowerCase():null}function Bm(i){let e=String(i||"").trim().replace(/\s+/g," ");if(e.length<2||e.length>18||!/^[\p{L}\p{N} _.'-]+$/u.test(e))throw new Error("W\xE4hle einen Namen mit 2\u201318 Buchstaben, Zahlen, Leerzeichen oder . _ -");return e}function Om(i,e={}){let t=(...n)=>n.some(s=>i.has(s));return{steer:sa(Number(t("KeyD","ArrowRight"))-Number(t("KeyA","ArrowLeft"))+(e.steer||0)),pitch:sa(Number(t("KeyW","ArrowUp"))-Number(t("KeyS","ArrowDown"))+(e.pitch||0)),fire:t("Space")||e.fire===!0}}function zm(i,e){let t=$c(`#room=${e}`);if(!t)throw new Error("Diese Einladung ist ung\xFCltig.");return`${new URL(i).origin}/duel#room=${t}`}function km(i){let e=Number.isFinite(i)?Math.max(0,Math.ceil(i)):0;return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Zc(i,e,t){let n=i.filter(s=>!s.left);return!!(t&&t===e&&n.length>=2&&n.length<=5&&n.some(s=>s.id===t)&&n.every(s=>s.connected&&s.ready))}function Br(i,e){return!!(e?.left||e?.eliminated||i?.eliminated||Number.isFinite(i?.hp)&&i.hp<=0)}function Vm(i,e,t){if(i==="draw"||!i)return"Unentschieden.";if(i===t)return"Du hast gewonnen!";let n=e.find(s=>s.id===i);return n?`${n.name} gewinnt.`:"Die Runde ist beendet."}var ne=i=>document.getElementById(i),St=(i,e)=>{ne(i).hidden=!e},fa=new Set,wn={steer:0,pitch:0,fire:!1},Fi=()=>ne("duel-settings").open,la,Mt=null,zn=null,kt=null,od="",pd=0,$t=null,Xe="entry",nn=[],fs=null,yi=null,$m=180,Zm=3,Jc=null,ca="",Di=!1,Fs=!1,ha=!1,zs=!1,oa,ad=0,Or=0,ld=0,ua=0,da=null,ps=null,ms=null,cd,Gm,Hm,Wm,hd,jc=new Map,Kc=new Set,qm="entry",ra=0,ud=!1,Us=Pm(),aa=!1,Bs=null,Os=Rm(i=>Ui({type:"appearance",appearance:i})?(Bs=i,!0):!1);function jm(){Us=Us==="fpv"?"chase":"fpv",Lm(Us),la?.setCameraMode(Us),sd(ne("duel-camera-mode"),Us),["playing","countdown","reconnecting"].includes(Xe)&&ne("duel-canvas").focus({preventScroll:!0})}ne("duel-camera-mode").onclick=jm;sd(ne("duel-camera-mode"),Us);var Xm={none:"Ohne Effekt",mint:"Minzspur",spark:"Sternenstaub",confetti:"Konfetti"},Km=new Map,Jm=new Map;function Ft(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}for(let[i,e]of ds.entries()){let t=Ft("div","pilot-card");t.id=`lobby-${e}`,t.style.setProperty("--player-color",On[e]);let n=Ft("div","pilot-identity");n.append(Ft("strong","pilot-name"),Ft("span","host-badge","Gastgeber"));let s=Ft("span","pilot-appearance");s.append(Ft("i","pilot-swatch"),Ft("span","pilot-effect")),n.append(s),t.append(Ft("span","pilot-number",String(i+1).padStart(2,"0")),n,Ft("span","pilot-state")),ne("lobby-players").append(t),Km.set(e,t);let r=Ft("div","opponent-card");r.id=`health-${e}`,r.style.setProperty("--player-color",On[e]);let o=Ft("div","opponent-heading");o.append(Ft("span","opponent-label"),Ft("strong","opponent-hp"));let a=Ft("div","health-meter");a.setAttribute("role","meter"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax","100"),a.append(Ft("span")),r.append(o,a,Ft("span","opponent-state")),ne("opponents").append(r),Jm.set(e,r)}function kn(i=""){ne("duel-errors").textContent=i,St("duel-errors",!!i)}function Qm(i){ne("session-warning").textContent=i,St("session-warning",!!i)}function dd(i){clearTimeout(cd),ne("duel-feedback").textContent=Xe==="playing"?i:"",cd=setTimeout(()=>{ne("duel-feedback").textContent=""},1400)}function pa(){if(!(!Mt||!zn))try{sessionStorage.setItem(Yc+Mt,JSON.stringify({token:zn,slot:kt,name:od,seq:pd}))}catch{Qm("Dein Platz kann nach einem Neuladen in diesem Browser verloren gehen. Lass diese Seite w\xE4hrend des Duells ge\xF6ffnet.")}}function u1(i){try{let e=JSON.parse(sessionStorage.getItem(Yc+i)||"null");return e&&typeof e.token=="string"&&typeof e.name=="string"?e:null}catch{return null}}function md(){try{Mt&&sessionStorage.removeItem(Yc+Mt)}catch{}}var tn=()=>$t?.readyState===WebSocket.OPEN;function Ui(i){if(!tn())return!1;try{return $t.send(JSON.stringify(i)),!0}catch{return!1}}function gs(){return Br(yi?.players?.find(i=>i.id===kt),ks())}function ma(){return Fi()||gs()?{steer:0,pitch:0,fire:!1}:Om(fa,wn)}function eg(i=!1){Xe!=="playing"||gs()||!tn()||!i&&document.hidden||Ui({type:"input",seq:++pd,...i?{steer:0,pitch:0,fire:!1}:ma()})}function ei(){clearTimeout(hd),fa.clear(),wn.steer=wn.pitch=0,wn.fire=!1;let i=ps,e=ms;ps=ms=null,i!==null&&ne("duel-stick").hasPointerCapture(i)&&ne("duel-stick").releasePointerCapture(i),e!==null&&ne("fire-button").hasPointerCapture(e)&&ne("fire-button").releasePointerCapture(e),ne("duel-stick-knob").style.transform="",ne("fire-button").classList.remove("active"),eg(!0)}function ks(){return nn.find(i=>i.id===kt)}function fd(){let i=ne("connection-status");if(i.className="connection",!Mt){i.textContent="F\xFCr 2\u20135 Piloten";return}tn()?(i.classList.add("online"),i.textContent=da===null?"Verbunden":`Verbunden \xB7 ${da} ms`):(i.classList.add("lost"),i.textContent=Xe==="expired"?"Duell beendet":"Verbindung wird aufgebaut \u2026")}function d1(){let i=yi?.players||[],e=(a,l)=>l?.left||l?.eliminated||a?.eliminated?0:Math.max(0,Math.min(100,Math.round(a?.hp??100)));function t(a,l,c){a.setAttribute("aria-label",`${c}: Lebenspunkte`),a.setAttribute("aria-valuenow",l),a.setAttribute("aria-valuetext",`${l} von 100 Lebenspunkten`),a.firstElementChild.style.width=`${l}%`,a.classList.toggle("low",l<=30)}let n=ks(),s=i.find(a=>a.id===kt),r=e(s,n);ne("own-name").textContent=`${n?.name||"Du"} \xB7 DU`,ne("own-hp").textContent=r,ne("duel-round-own").textContent=`${n?.name||"Du"} \xB7 DU \xB7 ${r} Leben`,ne("own-card").style.setProperty("--player-color",On[kt]||On.p1),ne("own-card").classList.toggle("is-out",Br(s,n)),t(ne("own-meter"),r,n?.name||"Du");for(let[a,l]of Jm){let c=nn.find(p=>p.id===a),u=i.find(p=>p.id===a);if(l.hidden=a===kt||!c&&!u,l.hidden)continue;let d=e(u,c),h=Br(u,c),f=c?.name||"Pilot";l.querySelector(".opponent-label").textContent=f,l.querySelector(".opponent-label").title=f,l.querySelector(".opponent-hp").textContent=d,t(l.querySelector(".health-meter"),d,f),l.classList.toggle("is-out",h),l.querySelector(".opponent-state").textContent=c?.left?"Verlassen":h?"Ausgeschieden":c?.connected===!1?"Verbindung fehlt":"Im Flug"}let o=i.filter(a=>!Br(a,nn.find(l=>l.id===a.id))).length;ne("remaining-pilots").textContent=`${o||(Xe==="countdown"?nn.filter(a=>!a.left).length:0)} im Flug`,ne("duel-time").textContent=km($m)}function f1(){let i=Jc??yi?.winner;return Xe==="expired"&&ca==="replaced"?{title:"Du fliegst im anderen Fenster.",text:"Dein Platz ist dort aktiv. Spiele dort weiter oder er\xF6ffne hier ein neues Duell."}:Xe==="expired"?{title:"Dieses Duell ist beendet.",text:"Der Raum ist nicht mehr verf\xFCgbar. Er\xF6ffne ein neues Duell und teile eine frische Einladung."}:{title:Vm(i,nn,kt),text:{timeout:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",time:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",disconnect:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",disconnected:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",leave:"Ein Pilot hat das laufende Duell verlassen.",left:"Ein Pilot hat das laufende Duell verlassen.",forfeit:"Ein Pilot hat das laufende Duell verlassen.",health:"Die letzten Treffer haben die Runde entschieden.",damage:"Die letzten Treffer haben die Runde entschieden.",knockout:"Die letzten Treffer haben die Runde entschieden.",last_alive:"Nur ein Flugzeug ist noch in der Luft. Die Runde ist entschieden.",server_restart:"Das Duell wurde durch einen Neustart unterbrochen und endet unentschieden. Ihr k\xF6nnt gemeinsam eine neue Runde beginnen.",server_error:"Das Duell musste wegen eines Verbindungsfehlers beendet werden und wird als unentschieden gewertet. Ihr k\xF6nnt eine neue Runde versuchen."}[ca||yi?.reason]||"Guter Flug! Mit einer Revanche startet ihr alle wieder mit 100 Lebenspunkten."}}function xi(){let i=gs(),e=["countdown","playing","reconnecting"].includes(Xe);St("duel-entry",Xe==="entry"),St("duel-lobby",Xe==="lobby"),St("duel-result",Xe==="finished"||Xe==="expired"),St("duel-hud",e),St("duel-help",!1),St("solo-link",!e),St("duel-round-overview",e),St("duel-match-controls",e);let t=ne("duel-header-actions"),n=ne("duel-match-controls");e&&ne("connection-status").parentElement!==n?n.append(ne("connection-status"),ne("leave-duel")):!e&&ne("connection-status").parentElement!==t&&(t.prepend(ne("connection-status")),t.insertBefore(ne("leave-duel"),ne("back-solo"))),St("duel-camera-mode",e),Os.render(Xe,tn(),Di),St("duel-spectator",e&&i),St("duel-countdown",Xe==="countdown"),St("duel-feedback",Xe==="playing"),Xe!=="playing"&&(clearTimeout(cd),ne("duel-feedback").textContent=""),St("duel-touch",Xe==="playing"&&tn()&&!i),St("duel-reticle",Xe==="playing"&&tn()&&!i),St("leave-duel",!!(Mt&&zn)),St("back-solo",!zn),document.body.classList.toggle("playing",Xe==="playing"),document.body.classList.toggle("in-flight",e),document.body.classList.toggle("spectating",i&&e),i&&!ud&&(ei(),dd("Du schaust jetzt zu. Die Runde l\xE4uft weiter.")),ud=i,ne("create-duel").disabled=ne("join-duel").disabled=Di,ne("create-duel").textContent=Di?"Wird er\xF6ffnet \u2026":"Duell er\xF6ffnen \u2197",ne("join-duel").textContent=Di?"Du kommst gleich dazu \u2026":"Duell beitreten \u2197",ne("duel-name").disabled=Di,St("create-duel",!Mt),St("join-duel",!!Mt),St("entry-new-duel",!!Mt),ne("entry-eyebrow").textContent=Mt?"DU BIST EINGELADEN":"DEIN PRIVATES DUELL",ne("entry-form-title").textContent=Mt?"Steig mit ein.":"Bereit f\xFCr Gegenwind?",ne("entry-note").textContent=Mt?"W\xE4hle deinen Namen. Wenn alle bereit sind, startet der Gastgeber eure Runde.":"Ohne Konto. Teile den Link mit bis zu vier Freunden.",Mt&&(ne("invite-link").value=zm(location.origin,Mt));for(let[c,u]of Km){let d=nn.find(h=>h.id===c&&!h.left);u.querySelector(".pilot-name").textContent=d?.name?d.name+(c===kt?" \xB7 DU":""):"Freier Platz",u.querySelector(".pilot-state").textContent=d?.name?d.connected?d.ready?"Bereit":"Noch nicht bereit":"Verbindung fehlt":"Freunde einladen",u.querySelector(".host-badge").hidden=!d||c!==fs,u.classList.toggle("is-empty",!d),u.classList.toggle("is-ready",!!(d?.ready&&d?.connected)),u.querySelector(".pilot-appearance").hidden=!d,u.querySelector(".pilot-swatch").style.backgroundColor=d?.appearance?.color||On[c],u.querySelector(".pilot-effect").textContent=Xm[d?.appearance?.effect]||Xm.none}let s=nn.filter(c=>!c.left),r=nn.find(c=>c.id===fs),o=kt===fs;ne("lobby-count").textContent=`${s.length} / 5 Piloten`,ne("lobby-copy").textContent=o?"Lade bis zu vier Freunde ein. Wenn alle bereit sind, bestimmst du als Gastgeber, wann es losgeht.":`${r?.name||"Der Gastgeber"} startet die Runde, wenn mindestens zwei Piloten dabei und alle bereit sind.`;let a=!!ks()?.ready;ne("ready-button").textContent=a?"Doch noch warten":"Ich bin bereit \u2197",ne("ready-button").setAttribute("aria-pressed",String(a)),ne("ready-button").disabled=!tn()||Xe!=="lobby",ne("ready-button").className=o?"secondary wide":"primary",St("start-duel",o),ne("start-duel").textContent=s.length<2?"Auf Mitspieler warten":`Mit ${s.length} Piloten starten \u2197`,ne("start-duel").disabled=!tn()||Xe!=="lobby"||!Zc(nn,fs,kt),ne("start-status").textContent=o?s.length<2?"Zum Start fehlt noch mindestens ein Mitspieler.":Zc(nn,fs,kt)?"Alle sind bereit. Du kannst starten oder auf weitere Freunde warten.":"Alle angemeldeten Piloten m\xFCssen verbunden und bereit sein.":a?"Du bist bereit. Der Gastgeber startet eure Runde.":"Markiere dich als bereit, sobald du losfliegen kannst.",ne("countdown-value").textContent=Math.max(1,Math.ceil(Zm)),d1(),fd();let l=Xe==="reconnecting"||!tn()&&!!zn&&!["expired","entry"].includes(Xe);if(St("duel-network",l),ne("network-title").textContent=tn()?"Ein Pilot ist kurz weg \u2026":"Verbindung wird wiederhergestellt \u2026",ne("network-copy").textContent=tn()?"Bis zu 20 Sekunden bleibt Zeit, zur\xFCckzukommen.":"Dein Platz bleibt kurz reserviert. Lass diese Seite ge\xF6ffnet.",Xe==="finished"||Xe==="expired"){let c=f1();ne("duel-result-title").textContent=c.title,ne("duel-result-copy").textContent=c.text,St("rematch-button",Xe!=="expired"),St("rematch-status",Xe!=="expired");let u=nn.filter(h=>h.connected&&!h.left),d=u.filter(h=>h.rematch||h.id===kt&&zs).length;ne("rematch-button").disabled=zs||!tn()||u.length<2||!!ks()?.left,ne("rematch-button").textContent=zs?"Du bist f\xFCr die Revanche bereit":"Revanche \u2197",ne("rematch-status").textContent=u.length<2?"F\xFCr eine Revanche m\xFCssen mindestens zwei Piloten verbunden sein.":`${d} / ${u.length} f\xFCr die Revanche bereit. Danach geht es zur\xFCck in die Lobby; der Gastgeber startet die neue Runde.`,ne("result-score").replaceChildren();for(let h of yi?.players||[]){let f=nn.find(m=>m.id===h.id),p=Ft("div","result-pilot"),x=Ft("strong");p.dataset.playerId=h.id,p.style.setProperty("--player-color",On[h.id]),x.textContent=Math.max(0,Math.round(h.hp)),p.append(Ft("i","player-dot"),Ft("span","result-name",(f?.name||"Pilot")+(h.id===kt?" \xB7 DU":"")),x,Ft("small","result-place",h.id===(Jc??yi?.winner)?"Gewonnen":f?.left?"Verlassen":Br(h,f)?"Ausgeschieden":"Im Ziel")),ne("result-score").append(p)}}qm!==Xe&&(Xe!=="playing"&&ei(),Fi()||(Xe==="playing"&&ne("duel-canvas").focus({preventScroll:!0}),Xe==="lobby"&&ne("ready-button").focus({preventScroll:!0}),Xe==="finished"&&ne("rematch-button").focus({preventScroll:!0}),Xe==="expired"&&ne("new-duel").focus({preventScroll:!0})),qm=Xe)}async function p1(i,e){let t;try{t=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),signal:AbortSignal.timeout(1e4)})}catch{throw new Error("Die Verbindung klappt gerade nicht. Pr\xFCfe dein Internet und versuche es noch einmal.")}let n=await t.json().catch(()=>({}));if(!t.ok){let s=new Error(n.error||"Dieses Duell ist gerade nicht erreichbar.");throw s.status=t.status,s}return n}async function tg(i=null){if(Di)return;try{od=Bm(i?.name||ne("duel-name").value)}catch(t){kn(t.message),ne("duel-name").focus();return}Di=!0,kn(),xi();let e=++ra;try{let t=await p1(Mt?`/api/duels/${Mt}/join`:"/api/duels",{name:od,...i?{token:i.token}:{appearance:Os.current()}});if(e!==ra)return;if(!$c(`#room=${t.room}`)||typeof t.token!="string"||!ds.includes(t.slot))throw new Error("Die Einladung konnte nicht ge\xF6ffnet werden. Bitte versuche es erneut.");Mt=t.room,zn=t.token,kt=t.slot,pd=Number.isSafeInteger(i?.seq)?i.seq:0,history.replaceState(null,"",`/duel#room=${Mt}`),pa(),Xe="lobby",Fs=!1,Or=0,ad=0,nn=[],aa=!1,Bs=null,gd()}catch(t){if(e!==ra)return;i&&[401,403,404,410].includes(t.status)&&md(),kn(t.message)}finally{e===ra&&(Di=!1,xi())}}function m1(i){let e=new Set;for(let t of i.projectiles||[])e.add(t.id),t.owner===kt&&!Kc.has(t.id)&&(ne("duel-reticle").classList.add("shot"),clearTimeout(Gm),Gm=setTimeout(()=>ne("duel-reticle").classList.remove("shot"),120));Kc=e;for(let t of i.players||[]){let n=jc.get(t.id);typeof n=="number"&&t.hp<n&&(t.id===kt?(document.body.classList.add("took-hit"),clearTimeout(Wm),Wm=setTimeout(()=>document.body.classList.remove("took-hit"),180),dd(`Du: \u2212${Math.round(n-t.hp)} Lebenspunkte`)):(ne("duel-reticle").classList.add("hit"),clearTimeout(Hm),Hm=setTimeout(()=>ne("duel-reticle").classList.remove("hit"),180),dd(`${nn.find(s=>s.id===t.id)?.name||"Pilot"}: \u2212${Math.round(n-t.hp)} Lebenspunkte`))),jc.set(t.id,t.hp)}}function gd(){if(!Mt||!zn||Fs||ha)return;if(Bs=null,aa=!1,Os.reject(),clearTimeout(oa),$t){let t=$t;$t=null,t.close()}let i=new URL(`/api/duels/${Mt}/socket`,location.origin);i.protocol=location.protocol==="https:"?"wss:":"ws:",i.searchParams.set("token",zn);let e=new WebSocket(i);$t=e,fd(),e.onopen=()=>{$t===e&&(ad=0,Or=0,ld=ua=Date.now(),da=null,kn(),Ui({type:"ping",sentAt:Date.now()}),xi())},e.onmessage=t=>{if($t===e){ld=Date.now();try{let n=JSON.parse(t.data);if(n.type==="welcome"&&ds.includes(n.slot)&&(kt=n.slot,pa()),n.type==="pong"&&(da=Math.min(9999,Math.max(0,Date.now()-Number(n.sentAt))),fd()),n.type==="error"&&(Bs=null,Os.reject(),kn(typeof n.message=="string"?n.message:"Das hat gerade nicht geklappt.")),n.type!=="state"||!["lobby","countdown","playing","finished","reconnecting","expired"].includes(n.phase))return;ua=Date.now(),Xe=n.phase,nn=Array.isArray(n.players)?n.players:[],fs=n.hostId||null;let s=ks()?.appearance;s&&(!aa||Bs&&Os.matches(s))&&(Os.confirm(s),aa=!0,Bs=null),Zm=Number(n.countdown)||3,$m=Number.isFinite(n.remaining)?n.remaining:180,Jc=n.winner??n.snapshot?.winner??null,ca=n.reason||n.snapshot?.reason||"",(Xe==="lobby"||Xe==="countdown")&&(zs=!1,jc.clear(),Kc.clear()),Xe==="finished"&&(zs=!!ks()?.rematch),n.snapshot?(m1(n.snapshot),yi=n.snapshot):(Xe==="lobby"||Xe==="countdown")&&(yi=null),Xe==="expired"&&(Fs=!0,e.close(1e3,"expired")),xi()}catch{kn("Ein Spielstand konnte nicht gelesen werden. Die Verbindung wird weiter gepr\xFCft.")}}},e.onerror=()=>{$t===e&&(ne("connection-status").textContent="Verbindung unterbrochen")},e.onclose=t=>{if($t!==e)return;if($t=null,ei(),t.code===4009||["In einem anderen Fenster verbunden.","Verbindung ersetzt."].includes(t.reason)){Fs=!0,clearTimeout(oa),md(),zn=null,Xe="expired",ca="replaced",xi();return}if(xi(),Fs||ha||!zn||Xe==="expired")return;if(Or||(Or=Date.now()+2e4),Date.now()>=Or){Xe="expired",Fs=!0,kn("Die Verbindung kam nicht rechtzeitig zur\xFCck. Du kannst ein neues Duell er\xF6ffnen."),xi();return}let n=Math.min(3e3,400*2**ad++);oa=setTimeout(gd,Math.min(n,Math.max(0,Or-Date.now())))}}function xd({notify:i=!0,forget:e=!0}={}){if(ra++,Di=!1,Fs=!0,clearTimeout(oa),ei(),i&&Ui({type:"leave"}),e&&md(),$t){let t=$t;$t=null,t.close(1e3,"leave")}zn=kt=fs=null,nn=[],yi=null,Xe="entry",da=null,ud=!1,Jc=null,ca="",jc.clear(),Kc.clear(),zs=!1,Bs=null,aa=!1,Os.reject()}function yd(){Fi()&&ne("duel-settings").close(),xd(),Mt=null,history.replaceState(null,"","/duel"),kn(),Qm(""),xi(),ne("duel-name").focus()}async function ng(){if(Mt=$c(location.hash),xi(),location.hash&&!Mt&&kn("Diese Einladung ist nicht g\xFCltig. Du kannst hier ein neues Duell er\xF6ffnen."),Mt){let i=u1(Mt);i&&(ne("duel-name").value=i.name,await tg(i))}}ne("duel-name-form").addEventListener("submit",i=>{i.preventDefault(),tg()});ne("ready-button").onclick=()=>{kn(),Ui({type:"ready",ready:!ks()?.ready})};ne("start-duel").onclick=()=>{Zc(nn,fs,kt)&&(kn(),Ui({type:"start"}))};ne("rematch-button").onclick=()=>{Ui({type:"rematch"})&&(zs=!0,xi())};ne("leave-duel").onclick=yd;ne("new-duel").onclick=yd;ne("entry-new-duel").onclick=yd;for(let i of["solo-link","back-solo","result-solo"])ne(i).addEventListener("click",()=>xd());ne("copy-invite").onclick=async()=>{let i=ne("invite-link");try{await navigator.clipboard.writeText(i.value),ne("invite-status").textContent="Einladung kopiert. Schick sie bis zu vier Freunden."}catch{i.focus(),i.select(),i.setSelectionRange(0,i.value.length),ne("invite-status").textContent="Der Link ist markiert. Kopiere ihn \xFCber das Men\xFC deines Browsers."}};St("share-invite",typeof navigator.share=="function");ne("share-invite").onclick=async()=>{try{await navigator.share({title:"Stubenflieger \xB7 Unser Duell",text:"Flieg mit mir ein Papierflieger-Duell!",url:ne("invite-link").value})}catch(i){i.name!=="AbortError"&&(ne("invite-link").focus(),ne("invite-link").select(),ne("invite-status").textContent="Teilen ist gerade nicht m\xF6glich. Kopiere den markierten Link.")}};document.addEventListener("keydown",i=>{if(!(Fi()||i.defaultPrevented||i.ctrlKey||i.altKey||i.metaKey||i.isComposing)){if(i.code==="KeyV"&&["playing","countdown","reconnecting"].includes(Xe)&&!i.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])')){i.preventDefault(),i.repeat||jm();return}Xe!=="playing"||gs()||!tn()||i.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"]),a,button:not(#fire-button)')||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&(i.preventDefault(),fa.add(i.code),ne("fire-button").classList.toggle("active",ma().fire))}});document.addEventListener("keyup",i=>{fa.delete(i.code),ne("fire-button").classList.toggle("active",ma().fire)});window.addEventListener("blur",ei);document.addEventListener("visibilitychange",()=>{ei(),pa(),!document.hidden&&tn()&&Ui({type:"ping",sentAt:Date.now()})});function ig(i){if(i.pointerId!==ps)return;let e=ne("duel-stick").getBoundingClientRect(),t=e.width/2-22,n=(i.clientX-e.left-e.width/2)/t,s=(i.clientY-e.top-e.height/2)/t,r=Math.max(1,Math.hypot(n,s));wn.steer=sa(n/r),wn.pitch=sa(-s/r),ne("duel-stick-knob").style.transform=`translate(${wn.steer*t}px, ${-wn.pitch*t}px)`}ne("duel-stick").addEventListener("pointerdown",i=>{Fi()||Xe!=="playing"||gs()||ps!==null||i.pointerType==="mouse"&&i.button!==0||(i.preventDefault(),ps=i.pointerId,ne("duel-stick").setPointerCapture(ps),ig(i))});ne("duel-stick").addEventListener("pointermove",ig);for(let i of["pointerup","pointercancel","lostpointercapture"])ne("duel-stick").addEventListener(i,e=>{e.pointerId===ps&&(ps=null,wn.steer=wn.pitch=0,ne("duel-stick-knob").style.transform="")});ne("fire-button").addEventListener("pointerdown",i=>{Fi()||Xe!=="playing"||gs()||ms!==null||i.pointerType==="mouse"&&i.button!==0||(i.preventDefault(),ms=i.pointerId,ne("fire-button").setPointerCapture(ms),wn.fire=!0,ne("fire-button").classList.add("active"))});ne("fire-button").addEventListener("click",i=>{Fi()||i.detail!==0||Xe!=="playing"||gs()||(wn.fire=!0,ne("fire-button").classList.add("active"),clearTimeout(hd),hd=setTimeout(()=>{ms===null&&(wn.fire=!1),ne("fire-button").classList.toggle("active",ma().fire)},120))});for(let i of["pointerup","pointercancel","lostpointercapture"])ne("fire-button").addEventListener(i,e=>{e.pointerId===ms&&(ms=null,wn.fire=!1,ne("fire-button").classList.toggle("active",fa.has("Space")))});window.addEventListener("hashchange",()=>{xd(),Mt=null,ng()});window.addEventListener("pagehide",()=>{if(ei(),pa(),ha=!0,clearTimeout(oa),$t){let i=$t;$t=null,i.close(1e3,"pagehide")}});window.addEventListener("pageshow",i=>{i.persisted&&(ha=!1,Mt&&zn&&gd())});function sg(){ei();let{width:i,height:e,left:t,top:n}=ia();Object.assign(ne("duel-app").style,{width:i+"px",height:e+"px",minHeight:e+"px",left:t+"px",top:n+"px"}),Object.assign(ne("duel-canvas").style,{width:i+"px",height:e+"px",left:t+"px",top:n+"px"}),document.documentElement.style.setProperty("--mobile-viewport-height",e+"px"),document.documentElement.style.setProperty("--mobile-viewport-width",i+"px"),la?.resize()}ne("duel-settings-button").onclick=()=>{ei(),Fi()||ne("duel-settings").showModal()};function rg(){ei(),ne("duel-settings").close(),["playing","countdown","reconnecting"].includes(Xe)&&ne("duel-canvas").focus({preventScroll:!0})}ne("duel-close-settings").onclick=rg;ne("duel-settings").addEventListener("cancel",i=>{i.preventDefault(),rg()});var aR=Um({sideSelect:ne("duel-joystick-side"),autoFullscreenInput:ne("duel-auto-fullscreen"),fullscreenButton:ne("duel-fullscreen-button"),statusNode:ne("duel-fullscreen-status"),onSideChange:ei,onViewportChange:sg});sg();setInterval(()=>eg(),50);setInterval(()=>{ha||!tn()||(Ui({type:"ping",sentAt:Date.now()}),pa(),!document.hidden&&(Date.now()-ld>15e3||Xe==="playing"&&Date.now()-ua>1e4)&&$t.close(4e3,"stale"))},5e3);var Ym=performance.now();function og(i){let e=Math.min(.1,Math.max(0,(i-Ym)/1e3));Ym=i;let t=Xe==="playing"&&!Fi()&&!gs()&&tn()&&!document.hidden&&Date.now()-ua<1500;if(Xe==="playing"&&tn()){let n=Date.now()-ua>=1500;St("duel-network",n),n&&(ne("network-title").textContent="Der Spielstand kommt gerade nicht an \u2026",ne("network-copy").textContent="Wir pr\xFCfen die Verbindung. Dein Flug geht weiter, sobald die Daten wieder da sind.")}la?.update(yi,kt,e,{...ma(),active:t}),requestAnimationFrame(og)}try{la=Sm(ne("duel-canvas"),()=>ia()),la.setCameraMode(Us),requestAnimationFrame(og),ng()}catch{kn("Die 3D-Ansicht konnte nicht starten. Lade die Seite in einem aktuellen Browser neu."),ne("create-duel").disabled=ne("join-duel").disabled=!0}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
