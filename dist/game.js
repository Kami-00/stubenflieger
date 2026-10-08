var kf=0,hu=1,Vf=2;var Bs=1,Gf=2,Pr=3,rs=0,vn=1,On=2,di=0,Lr=1,uu=2,du=3,fu=4,Hf=5;var Us=100,Wf=101,qf=102,Xf=103,Yf=104,$f=200,Zf=201,Kf=202,jf=203,pu=204,mu=205,Jf=206,Qf=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,op=214,ll=0,cl=1,hl=2,gr=3,ul=4,dl=5,fl=6,pl=7,gu=0,ap=1,lp=2,Kn=0,xu=1,vu=2,yu=3,jo=4,_u=5,bu=6,Su=7;var Mu=300,os=301,Os=302,Wl=303,ql=304,Jo=306,xr=1e3,li=1001,ml=1002,Jt=1003,cp=1004;var Qo=1005;var nn=1006,Xl=1007;var as=1008;var An=1009,wu=1010,Au=1011,Nr=1012,Yl=1013,jn=1014,zn=1015,Jn=1016,$l=1017,Zl=1018,Fr=1020,Eu=35902,Tu=35899,Cu=1021,Ru=1022,kn=1023,ci=1026,ls=1027,Kl=1028,jl=1029,cs=1030,Jl=1031;var Ql=1033,ea=33776,ta=33777,na=33778,ia=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,lc=37489,sa=37490,cc=37491,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,xc=37815,vc=37816,yc=37817,_c=37818,bc=37819,Sc=37820,Mc=37821,wc=36492,Ac=36494,Ec=36495,Tc=36283,Cc=36284,ra=36285,Rc=36286;var yo=2300,gl=2301,ol=2302,Jh=2303,Qh=2400,eu=2401,tu=2402;var hp=3200;var Ic=0,up=1,Fi="",en="srgb",_o="srgb-linear",bo="linear",xt="srgb";var al=7680;var dp=519,fp=512,pp=513,mp=514,Pc=515,gp=516,xp=517,Lc=518,vp=519,yp=35044;var Iu="300 es",$n=2e3,vr=2001;function n0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _p(){let i=So("canvas");return i.style.display="block",i}var lf={},yr=null;function Pu(...i){let e="THREE."+i.shift();yr?yr("log",e,...i):console.log(e,...i)}function bp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=bp(i);let e="THREE."+i.shift();if(yr)yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=bp(i);let e="THREE."+i.shift();if(yr)yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ls(...i){let e=i.join(" ");e in lf||(lf[e]=!0,He(...i))}function Sp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mp={[ll]:cl,[hl]:fl,[ul]:pl,[gr]:dl,[cl]:ll,[fl]:hl,[pl]:ul,[dl]:gr},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=1234567,mo=Math.PI/180,_r=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Lu(i,e){return(i%e+e)%e}function s0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function r0(i,e,t){return i!==e?(t-i)/(e-i):0}function go(i,e,t){return(1-t)*i+t*e}function o0(i,e,t,n){return go(i,e,1-Math.exp(-t*n))}function a0(i,e=1){return e-Math.abs(Lu(i,e*2)-e)}function l0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function h0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function d0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&(cf=i);let e=cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p0(i){return i*mo}function m0(i){return i*_r}function g0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function v0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dr={DEG2RAD:mo,RAD2DEG:_r,generateUUID:zs,clamp:it,euclideanModulo:Lu,mapLinear:s0,inverseLerp:r0,lerp:go,damp:o0,pingpong:a0,smoothstep:l0,smootherstep:c0,randInt:h0,randFloat:u0,randFloatSpread:d0,seededRandom:f0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:x0,floorPowerOfTwo:v0,setQuaternionFromProperEuler:y0,normalize:mn,denormalize:pr},Se=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Th=new z,hf=new qt,je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],w=s[4],_=s[7],M=s[2],S=s[5],A=s[8];return r[0]=o*x+a*v+l*M,r[3]=o*m+a*w+l*S,r[6]=o*g+a*_+l*A,r[1]=c*x+h*v+d*M,r[4]=c*m+h*w+d*S,r[7]=c*g+h*_+d*A,r[2]=u*x+f*v+p*M,r[5]=u*m+f*w+p*S,r[8]=u*g+f*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ch=new je,uf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),df=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){let i={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_o]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:uf,fromXYZ:df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var rt=_0();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=So("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},b0=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rh(s[o].image)):r.push(Rh(s[o]))}else r=Rh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var S0=0,Ih=new z,xn=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=nn,o=as,a=kn,l=An,c=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=zs(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Mu;xn.DEFAULT_ANISOTROPY=1;var Bt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(f+1)/2,M=(g+1)/2,S=(h+u)/4,A=(d+x)/4,y=(p+m)/4;return w>_&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=A/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new xn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mo=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,w0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Zi.crossVectors(n,Rn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Zi.crossVectors(n,Rn)),Zi.normalize(),Ba.crossVectors(Rn,Zi),s[0]=Zi.x,s[4]=Ba.x,s[8]=Rn.x,s[1]=Zi.y,s[5]=Ba.y,s[9]=Rn.y,s[2]=Zi.z,s[6]=Ba.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],w=n[7],_=n[11],M=n[15],S=s[0],A=s[4],y=s[8],E=s[12],L=s[1],N=s[5],U=s[9],D=s[13],I=s[2],F=s[6],B=s[10],W=s[14],q=s[3],H=s[7],j=s[11],J=s[15];return r[0]=o*S+a*L+l*I+c*q,r[4]=o*A+a*N+l*F+c*H,r[8]=o*y+a*U+l*B+c*j,r[12]=o*E+a*D+l*W+c*J,r[1]=h*S+d*L+u*I+f*q,r[5]=h*A+d*N+u*F+f*H,r[9]=h*y+d*U+u*B+f*j,r[13]=h*E+d*D+u*W+f*J,r[2]=p*S+x*L+m*I+g*q,r[6]=p*A+x*N+m*F+g*H,r[10]=p*y+x*U+m*B+g*j,r[14]=p*E+x*D+m*W+g*J,r[3]=v*S+w*L+_*I+M*q,r[7]=v*A+w*N+_*F+M*H,r[11]=v*y+w*U+_*B+M*j,r[15]=v*E+w*D+_*W+M*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*f-c*u,w=a*f-c*d,_=a*u-l*d,M=o*f-c*h,S=o*u-l*h,A=o*d-a*h;return t*(x*v-m*w+g*_)-n*(p*v-m*M+g*S)+s*(p*w-x*M+g*A)-r*(p*_-x*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,w=t*l-s*o,_=t*c-r*o,M=n*l-s*a,S=n*c-r*a,A=s*c-r*l,y=h*x-d*p,E=h*m-u*p,L=h*g-f*p,N=d*m-u*x,U=d*g-f*x,D=u*g-f*m,I=v*D-w*U+_*N+M*L-S*E+A*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(a*D-l*U+c*N)*F,e[1]=(s*U-n*D-r*N)*F,e[2]=(x*A-m*S+g*M)*F,e[3]=(u*S-d*A-f*M)*F,e[4]=(l*L-o*D-c*E)*F,e[5]=(t*D-s*L+r*E)*F,e[6]=(m*_-p*A-g*w)*F,e[7]=(h*A-u*_+f*w)*F,e[8]=(o*U-a*L+c*y)*F,e[9]=(n*L-t*U-r*y)*F,e[10]=(p*S-x*_+g*v)*F,e[11]=(d*_-h*S-f*v)*F,e[12]=(a*E-o*N-l*y)*F,e[13]=(t*N-n*E+s*y)*F,e[14]=(x*w-p*M-m*v)*F,e[15]=(h*M-d*w+u*v)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,v=l*c,w=l*h,_=l*d,M=n.x,S=n.y,A=n.z;return s[0]=(1-(x+g))*M,s[1]=(f+_)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+w)*A,s[9]=(m-v)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),l=tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,h=1/a,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===$n)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===vr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new z,Wn=new lt,M0=new z(0,0,0),w0=new z(1,1,1),Zi=new z,Ba=new z,Rn=new z,ff=new lt,pf=new qt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,mf=new z,nr=new qt,Ai=new lt,Ua=new z,oo=new z,E0=new z,T0=new qt,gf=new z(1,0,0),xf=new z(0,1,0),vf=new z(0,0,1),yf={type:"added"},C0={type:"removed"},ir={type:"childadded",child:null},Ph={type:"childremoved",child:null},rn=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new sn,n=new qt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(vf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(oo,Ua,this.up):Ai.lookAt(Ua,oo,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ai),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),ir.child=e,this.dispatchEvent(ir),ir.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(C0),Ph.child=e,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Lu(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lh(o,r,e+1/3),this.g=Lh(o,r,e),this.b=Lh(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return rt.workingToColorSpace(hn.copy(this),e),Math.round(it(hn.r*255,0,255))*65536+Math.round(it(hn.g*255,0,255))*256+Math.round(it(hn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=en){rt.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Oa);let n=go(Ki.h,Oa.h,t),s=go(Ki.s,Oa.s,t),r=go(Ki.l,Oa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Je;Je.NAMES=wp;var Ao=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Eo=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new z,Ei=new z,Nh=new z,Ti=new z,sr=new z,rr=new z,_f=new z,Fh=new z,Dh=new z,Bh=new z,Uh=new Bt,Oh=new Bt,zh=new Bt,es=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),Ei.subVectors(n,t),Nh.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ei),l=qn.dot(Nh),c=Ei.dot(Ei),h=Ei.dot(Nh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Uh.setScalar(0),Oh.setScalar(0),zh.setScalar(0),Uh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,n),zh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uh,r.x),o.addScaledVector(Oh,r.y),o.addScaledVector(zh,r.z),o}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),Ei.subVectors(e,t),qn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,n),rr.subVectors(r,n),Fh.subVectors(e,n);let l=sr.dot(Fh),c=rr.dot(Fh);if(l<=0&&c<=0)return t.copy(n);Dh.subVectors(e,s);let h=sr.dot(Dh),d=rr.dot(Dh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(sr,o);Bh.subVectors(e,r);let f=sr.dot(Bh),p=rr.dot(Bh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(rr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return _f.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(_f,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),ka.subVectors(this.max,ao),or.subVectors(e.a,ao),ar.subVectors(e.b,ao),lr.subVectors(e.c,ao),ji.subVectors(ar,or),Ji.subVectors(lr,ar),Ts.subVectors(or,lr);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-Ts.z,Ts.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,Ts.z,0,-Ts.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-Ts.y,Ts.x,0];return!kh(t,or,ar,lr,ka)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,or,ar,lr,ka))?!1:(Va.crossVectors(ji,Ji),t=[Va.x,Va.y,Va.z],kh(t,or,ar,lr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new z,new z,new z,new z,new z,new z,new z,new z],Xn=new z,za=new ui,or=new z,ar=new z,lr=new z,ji=new z,Ji=new z,Ts=new z,ao=new z,ka=new z,Va=new z,Cs=new z;function kh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Wt=new z,Ga=new Se,I0=0,gn=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yp,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var To=class extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Co=class extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Dt=class extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}},P0=new ui,lo=new z,Vh=new z,Pi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):P0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Vh)),this.expandByPoint(lo.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L0=0,Un=new lt,Gh=new rn,cr=new z,In=new ui,co=new ui,jt=new z,Xt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?Co:To)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Gh.lookAt(e),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(In.min,co.min),In.expandByPoint(jt),jt.addVectors(In.max,co.max),In.expandByPoint(jt)):(In.expandByPoint(co.min),In.expandByPoint(co.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),jt.add(cr)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new z,l[y]=new z;let c=new z,h=new z,d=new z,u=new Se,f=new Se,p=new Se,x=new z,m=new z;function g(y,E,L){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,L),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[y].add(x),a[E].add(x),a[L].add(x),l[y].add(m),l[E].add(m),l[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,E=v.length;y<E;++y){let L=v[y],N=L.start,U=L.count;for(let D=N,I=N+U;D<I;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let w=new z,_=new z,M=new z,S=new z;function A(y){M.fromBufferAttribute(s,y),S.copy(M);let E=a[y];w.copy(E),w.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(S,E);let N=_.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,N)}for(let y=0,E=v.length;y<E;++y){let L=v[y],N=L.start,U=L.count;for(let D=N,I=N+U;D<I;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new gn(u,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hh=new z,N0=new z,F0=new je,Yn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hh.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),s=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},D0=0,Li=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Lr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new z,Wh=new z,Ha=new z,Wa=new z,Ro=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wh.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Wa.copy(this.origin).sub(Wh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ha),a=Wa.dot(this.direction),l=-Wa.dot(Ha),c=Wa.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wh).addScaledVector(Ha,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,_=Math.abs(l),M=Math.abs(c),S=Math.abs(h),A,y,E,L,N,U,D,I,F,B,W,q;if(_>=M&&_>=S?(E=l,U=d,F=p,q=g,l>=0?(A=c,y=h,L=u,N=f,D=x,I=m,B=v,W=w):(A=h,y=c,L=f,N=u,D=m,I=x,B=w,W=v)):M>=S?(E=c,U=u,F=x,q=v,c>=0?(A=h,y=l,L=f,N=d,D=m,I=p,B=w,W=g):(A=l,y=h,L=d,N=f,D=p,I=m,B=g,W=w)):(E=h,U=f,F=m,q=w,h>=0?(A=l,y=c,L=d,N=u,D=p,I=x,B=g,W=v):(A=c,y=l,L=u,N=d,D=x,I=p,B=v,W=g)),E===0)return null;let H=A/E,j=y/E,J=1/E,ie=L-H*U,me=N-j*U,We=D-H*F,qe=I-j*F,Ze=B-H*q,ee=W-j*q,se=Ze*qe-ee*We,xe=ie*ee-me*Ze,Ge=We*me-qe*ie;if(s){if(se<0||xe<0||Ge<0)return null}else if((se<0||xe<0||Ge<0)&&(se>0||xe>0||Ge>0))return null;let Ae=se+xe+Ge;if(Ae===0)return null;let ae=J*(se*U+xe*F+Ge*q);return(Ae>0?ae<0:ae>0)?null:this.at(ae/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bf=new lt,Rs=new Ro,qa=new Pi,Sf=new z,Xa=new z,Ya=new z,$a=new z,qh=new z,Za=new z,Mf=new z,Ka=new z,Pt=class extends rn{constructor(e=new Xt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(qh.fromBufferAttribute(d,e),o?Za.addScaledVector(qh,h):Za.addScaledVector(qh.sub(t),h))}t.add(Za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(qa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(qa,Sf)===null||Rs.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(bf),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,M=w;_<M;_+=3){let S=a.getX(_),A=a.getX(_+1),y=a.getX(_+2);s=ja(this,g,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=ja(this,o,e,n,c,h,d,v,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,M=w;_<M;_+=3){let S=_,A=_+1,y=_+2;s=ja(this,g,e,n,c,h,d,S,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,w=m+1,_=m+2;s=ja(this,o,e,n,c,h,d,v,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function B0(i,e,t,n,s,r,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===rs,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:i}}function ja(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Xa),i.getVertexPosition(l,Ya),i.getVertexPosition(c,$a);let h=B0(i,e,t,n,Xa,Ya,$a,Mf);if(h){let d=new z;es.getBarycoord(Mf,Xa,Ya,$a,d),s&&(h.uv=es.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};es.getNormal(Xa,Ya,$a,u.normal),h.face=u,h.barycoord=d}return h}var Io=class extends xn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,h=Jt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new lt,wf=new lt,Ja=[],Af=new ui,U0=new lt,ho=new Pt,uo=new Pi,Ns=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Af.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Af)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),uo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),wf.multiplyMatrices(n,hr),ho.matrixWorld=wf,ho.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){let l=Ja[o];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(s*this.count),s,this.count,Kl,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Pi,O0=new Se(.5,.5),Qa=new z,Mr=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],w=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,g-p,M-v).normalize(),s[1].setComponents(c+o,f+h,g+p,M+v).normalize(),s[2].setComponents(c+a,f+d,g+x,M+w).normalize(),s[3].setComponents(c-a,f-d,g-x,M-w).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,g-m,M-_).normalize();else if(s[4].setComponents(c-l,f-u,g-m,M-_).normalize(),t===$n)s[5].setComponents(c+l,f+u,g+m,M+_).normalize();else if(t===vr)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=O0.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wr=class extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_l=new z,bl=new z,Ef=new lt,fo=new Ro,el=new Pi,Xh=new z,Tf=new z,Lo=class extends rn{constructor(e=new Xt,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_l.fromBufferAttribute(t,s-1),bl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_l.distanceTo(bl);e.setAttribute("lineDistance",new Dt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(s),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;Ef.copy(s).invert(),fo.copy(e.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),w=tl(this,e,fo,l,g,v,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=tl(this,e,fo,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=tl(this,e,fo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=tl(this,e,fo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function tl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(_l.fromBufferAttribute(a,s),bl.fromBufferAttribute(a,r),t.distanceSqToSegment(_l,bl,Xh,Tf)>n)return;Xh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xh);if(!(c<e.near||c>e.far))return{distance:c,point:Tf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var No=class extends xn{constructor(e=[],t=os,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ar=class extends xn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends xn{constructor(e,t,n=jn,s,r,o,a=Jt,l=Jt,c,h=ci,d=1){if(h!==ci&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sl=class extends ts{constructor(e,t=jn,n=os,s,r,o=Jt,a=Jt,l,c=ci){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function p(x,m,g,v,w,_,M,S,A,y,E){let L=_/A,N=M/y,U=_/2,D=M/2,I=S/2,F=A+1,B=y+1,W=0,q=0,H=new z;for(let j=0;j<B;j++){let J=j*N-D;for(let ie=0;ie<F;ie++){let me=ie*L-U;H[x]=me*v,H[m]=J*w,H[g]=I,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=S>0?1:-1,h.push(H.x,H.y,H.z),d.push(ie/A),d.push(1-j/y),W+=1}}for(let j=0;j<y;j++)for(let J=0;J<A;J++){let ie=u+J+F*j,me=u+J+F*(j+1),We=u+(J+1)+F*(j+1),qe=u+(J+1)+F*j;l.push(ie,me,qe),l.push(me,We,qe),q+=6}a.addGroup(f,q,E),f+=q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new lt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends Er{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Cf=new z,Rf=new z,Yh=new Nu,$h=new Nu,Zh=new Nu,wl=class extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Rf.subVectors(s[0],s[1]).add(s[0]),c=Rf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Yh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),$h.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Zh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),$h.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Zh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Yh.calc(l),$h.calc(l),Zh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function If(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function z0(i,e){let t=1-i;return t*t*e}function k0(i,e){return 2*(1-i)*i*e}function V0(i,e){return i*i*e}function xo(i,e,t,n){return z0(i,e)+k0(i,t)+V0(i,n)}function G0(i,e){let t=1-i;return t*t*t*e}function H0(i,e){let t=1-i;return 3*t*t*i*e}function W0(i,e){return 3*(1-i)*i*i*e}function q0(i,e){return i*i*i*e}function vo(i,e,t,n,s){return G0(i,e)+H0(i,t)+W0(i,n)+q0(i,s)}var Do=class extends Ln{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends Ln{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y),vo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bo=class extends Ln{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends Ln{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends Ln{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Ln{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y),xo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(If(a,l.x,c.x,h.x,d.x),If(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},nu=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:wl,CubicBezierCurve:Do,CubicBezierCurve3:Al,EllipseCurve:Er,LineCurve:Bo,LineCurve3:El,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Tl,SplineCurve:Oo}),Cl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nu[s.type]().fromJSON(s))}return this}},zo=class extends Cl{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bo(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Uo(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Do(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Oo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Er(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tr=class extends zo{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new zo().fromJSON(s))}return this}};function X0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ap(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=j0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ko(r,o,t,a,l,c,0),o}function Ap(i,e,t,n,s){let r;if(s===lx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Pf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Pf(o/n|0,i[o],i[o+1],r);return r&&Cr(r,r.next)&&(Go(r),r=r.next),r}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ko(i,e,t,n,s,r,o){if(!i)return;!o&&r&&nx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$0(i,n,s,r):Y0(i)){e.push(l.i,i.i,c.i),Go(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Z0(Fs(i),e),ko(i,e,t,n,s,r,2)):o===2&&K0(i,e,t,n,s,r):ko(Fs(i),e,t,n,s,r,1);break}}}function Y0(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&po(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function $0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=iu(f,p,e,t,n),v=iu(x,m,e,t,n),w=i.prevZ,_=i.nextZ;for(;w&&w.z>=g&&_&&_.z<=v;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&po(a,h,l,d,c,u,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&po(a,h,l,d,c,u,_.x,_.y)&&zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&po(a,h,l,d,c,u,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&po(a,h,l,d,c,u,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Z0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cr(n,s)&&Tp(n,t,t.next,s)&&Vo(n,s)&&Vo(s,n)&&(e.push(n.i,t.i,s.i),Go(t),Go(t.next),t=i=s),t=t.next}while(t!==i);return Fs(t)}function K0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rx(o,a)){let l=Cp(o,a);o=Fs(o,o.next),l=Fs(l,l.next),ko(o,e,t,n,s,r,0),ko(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function j0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Ap(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(sx(c))}s.sort(J0);for(let r=0;r<s.length;r++)t=Q0(s[r],t);return t}function J0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Q0(i,e){let t=ex(i,e);if(!t)return e;let n=Cp(t,i);return Fs(n,n.next),Fs(t,t.next)}function ex(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Cr(i,t))return t;do{if(Cr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ep(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Vo(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&tx(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function tx(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function nx(i,e,t,n){let s=i;do s.z===0&&(s.z=iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ix(s)}function ix(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ep(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function po(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ep(i,e,t,n,s,r,o,a)}function rx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ox(i,e)&&(Vo(i,e)&&Vo(e,i)&&ax(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||Cr(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cr(i,e){return i.x===e.x&&i.y===e.y}function Tp(i,e,t,n){let s=il(zt(i,e,t)),r=il(zt(i,e,n)),o=il(zt(t,n,i)),a=il(zt(t,n,e));return!!(s!==r&&o!==a||s===0&&nl(i,t,e)||r===0&&nl(i,n,e)||o===0&&nl(t,i,n)||a===0&&nl(t,e,n))}function nl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function il(i){return i>0?1:i<0?-1:0}function ox(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vo(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function ax(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cp(i,e){let t=su(i.i,i.x,i.y),n=su(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(i,e,t,n){let s=su(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function su(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ru=class{static triangulate(e,t,n=2){return X0(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Lf(e),Nf(n,e);let o=e.length;t.forEach(Lf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nf(n,t[l]);let a=ru.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ho=class i extends Xt{constructor(e=new Tr([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Dt(s,3)),this.setAttribute("uv",new Dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cx,w,_=!1,M,S,A,y;if(g){w=g.getSpacedPoints(h),_=!0,u=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,ne),S=new z,A=new z,y=new z}u||(m=0,f=0,p=0,x=0);let E=a.extractPoints(c),L=E.shape,N=E.holes;if(!Ps.isClockWise(L)){L=L.reverse();for(let ne=0,le=N.length;ne<le;ne++){let de=N[ne];Ps.isClockWise(de)&&(N[ne]=de.reverse())}}function D(ne){let de=10000000000000001e-36,ue=ne[0];for(let ge=1;ge<=ne.length;ge++){let Ve=ge%ne.length,Be=ne[Ve],Ye=Be.x-ue.x,Ke=Be.y-ue.y,P=Ye*Ye+Ke*Ke,he=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ue.x),Math.abs(ue.y)),Y=de*he*he;if(P<=Y){ne.splice(Ve,1),ge--;continue}ue=Be}}D(L),N.forEach(D);let I=N.length,F=L;for(let ne=0;ne<I;ne++){let le=N[ne];L=L.concat(le)}function B(ne,le,de){return le||$e("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(le,de)}let W=L.length;function q(ne,le,de){let ue,ge,Ve,Be=ne.x-le.x,Ye=ne.y-le.y,Ke=de.x-ne.x,P=de.y-ne.y,he=Be*Be+Ye*Ye,Y=Be*P-Ye*Ke;if(Math.abs(Y)>Number.EPSILON){let R=Math.sqrt(he),b=Math.sqrt(Ke*Ke+P*P),k=le.x-Ye/R,O=le.y+Be/R,X=de.x-P/b,fe=de.y+Ke/b,pe=((X-k)*P-(fe-O)*Ke)/(Be*P-Ye*Ke);ue=k+Be*pe-ne.x,ge=O+Ye*pe-ne.y;let te=ue*ue+ge*ge;if(te<=2)return new Se(ue,ge);Ve=Math.sqrt(te/2)}else{let R=!1;Be>Number.EPSILON?Ke>Number.EPSILON&&(R=!0):Be<-Number.EPSILON?Ke<-Number.EPSILON&&(R=!0):Math.sign(Ye)===Math.sign(P)&&(R=!0),R?(ue=-Ye,ge=Be,Ve=Math.sqrt(he)):(ue=Be,ge=Ye,Ve=Math.sqrt(he/2))}return new Se(ue/Ve,ge/Ve)}let H=[];for(let ne=0,le=F.length,de=le-1,ue=ne+1;ne<le;ne++,de++,ue++)de===le&&(de=0),ue===le&&(ue=0),H[ne]=q(F[ne],F[de],F[ue]);let j=[],J,ie=H.concat();for(let ne=0,le=I;ne<le;ne++){let de=N[ne];J=[];for(let ue=0,ge=de.length,Ve=ge-1,Be=ue+1;ue<ge;ue++,Ve++,Be++)Ve===ge&&(Ve=0),Be===ge&&(Be=0),J[ue]=q(de[ue],de[Ve],de[Be]);j.push(J),ie=ie.concat(J)}let me;if(m===0)me=Ps.triangulateShape(F,N);else{let ne=[],le=[];for(let de=0;de<m;de++){let ue=de/m,ge=f*Math.cos(ue*Math.PI/2),Ve=p*Math.sin(ue*Math.PI/2)+x;for(let Be=0,Ye=F.length;Be<Ye;Be++){let Ke=B(F[Be],H[Be],Ve);xe(Ke.x,Ke.y,-ge),ue===0&&ne.push(Ke)}for(let Be=0,Ye=I;Be<Ye;Be++){let Ke=N[Be];J=j[Be];let P=[];for(let he=0,Y=Ke.length;he<Y;he++){let R=B(Ke[he],J[he],Ve);xe(R.x,R.y,-ge),ue===0&&P.push(R)}ue===0&&le.push(P)}}me=Ps.triangulateShape(ne,le)}let We=me.length,qe=p+x;for(let ne=0;ne<W;ne++){let le=u?B(L[ne],ie[ne],qe):L[ne];_?(A.copy(M.normals[0]).multiplyScalar(le.x),S.copy(M.binormals[0]).multiplyScalar(le.y),y.copy(w[0]).add(A).add(S),xe(y.x,y.y,y.z)):xe(le.x,le.y,0)}for(let ne=1;ne<=h;ne++)for(let le=0;le<W;le++){let de=u?B(L[le],ie[le],qe):L[le];_?(A.copy(M.normals[ne]).multiplyScalar(de.x),S.copy(M.binormals[ne]).multiplyScalar(de.y),y.copy(w[ne]).add(A).add(S),xe(y.x,y.y,y.z)):xe(de.x,de.y,d/h*ne)}for(let ne=m-1;ne>=0;ne--){let le=ne/m,de=f*Math.cos(le*Math.PI/2),ue=p*Math.sin(le*Math.PI/2)+x;for(let ge=0,Ve=F.length;ge<Ve;ge++){let Be=B(F[ge],H[ge],ue);xe(Be.x,Be.y,d+de)}for(let ge=0,Ve=N.length;ge<Ve;ge++){let Be=N[ge];J=j[ge];for(let Ye=0,Ke=Be.length;Ye<Ke;Ye++){let P=B(Be[Ye],J[Ye],ue);_?xe(P.x,P.y+w[h-1].y,w[h-1].x+de):xe(P.x,P.y,d+de)}}}Ze(),ee();function Ze(){let ne=s.length/3;if(u){let le=0,de=W*le;for(let ue=0;ue<We;ue++){let ge=me[ue];Ge(ge[2]+de,ge[1]+de,ge[0]+de)}le=h+m*2,de=W*le;for(let ue=0;ue<We;ue++){let ge=me[ue];Ge(ge[0]+de,ge[1]+de,ge[2]+de)}}else{for(let le=0;le<We;le++){let de=me[le];Ge(de[2],de[1],de[0])}for(let le=0;le<We;le++){let de=me[le];Ge(de[0]+W*h,de[1]+W*h,de[2]+W*h)}}n.addGroup(ne,s.length/3-ne,0)}function ee(){let ne=s.length/3,le=0;se(F,le),le+=F.length;for(let de=0,ue=N.length;de<ue;de++){let ge=N[de];se(ge,le),le+=ge.length}n.addGroup(ne,s.length/3-ne,1)}function se(ne,le){let de=ne.length;for(;--de>=0;){let ue=de,ge=de-1;ge<0&&(ge=ne.length-1);for(let Ve=0,Be=h+m*2;Ve<Be;Ve++){let Ye=W*Ve,Ke=W*(Ve+1),P=le+ue+Ye,he=le+ge+Ye,Y=le+ge+Ke,R=le+ue+Ke;Ae(P,he,Y,R)}}}function xe(ne,le,de){l.push(ne),l.push(le),l.push(de)}function Ge(ne,le,de){ae(ne),ae(le),ae(de);let ue=s.length/3,ge=v.generateTopUV(n,s,ue-3,ue-2,ue-1);De(ge[0]),De(ge[1]),De(ge[2])}function Ae(ne,le,de,ue){ae(ne),ae(le),ae(ue),ae(le),ae(de),ae(ue);let ge=s.length/3,Ve=v.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);De(Ve[0]),De(Ve[1]),De(Ve[3]),De(Ve[1]),De(Ve[2]),De(Ve[3])}function ae(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function De(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nu[s.type]().fromJSON(s)),new i(n,e.options)}},cx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(u,1-p),new Se(x,1-g)]:[new Se(a,1-l),new Se(h,1-d),new Se(f,1-p),new Se(m,1-g)]}};function hx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Wo=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-o;for(let w=0;w<c;w++){let _=w*d-r;p.push(_,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,_=v+c*(g+1),M=v+1+c*(g+1),S=v+1+c*g;f.push(w,_,S),f.push(_,M,S)}this.setIndex(f),this.setAttribute("position",new Dt(p,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ds=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new z,f=new z,p=new z;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let v=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,_=(s+1)*x+m;l.push(g,v,_),l.push(v,w,_)}this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ff(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ff(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Ff(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ux(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Rp={clone:ks,merge:un},dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rl=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ni=class extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Il=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Kh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eu:r=e,a=2*t-n;break;case tu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eu:o=e,l=2*n-t;break;case tu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let M=0;M!==a;++M)r[M]=g*o[h+M]+v*o[c+M]+w*o[l+M]+_*o[d+M];return r}},Nl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Fl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dl=class extends ns{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],w=d[g+1],_=e*u+p*2,M=h[_],S=h[_+1],A=mx(n,t,v,M,s);r[p]=Ip(A,x,w,S,m)}return r}};function Ip(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function px(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Ip(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=px(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Kh(e.settings)&&(n.settings={inTangents:ur(e.settings.inTangents,Array),outTangents:ur(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case gl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case Jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return Jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Kh(this.settings)&&(Df(this.settings.inTangents,e),Df(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&i0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Kh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Df(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=gl;var is=class extends Fn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=yo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Bl.prototype.ValueTypeName="color";var Ul=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Ul.prototype.ValueTypeName="number";var Ol=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},qo=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Fn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=yo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};zl.prototype.ValueTypeName="vector";var kl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pp=new kl,Vl=class{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jh=new lt,Bf=new z,Uf=new z,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bf),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=new z,rl=new qt,ai=new z,$o=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,rl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sl,rl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new z,Of=new Se,zf=new Se,tn=class extends $o{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Of,zf),t.subVectors(zf,Of)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ou=class extends Yo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Zo=class extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ou}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ir=class extends $o{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},au=class extends Yo{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var dr=-90,fr=1,Gl=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new tn(dr,fr,e,t);r.layers=this.layers,this.add(r);let o=new tn(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new tn(dr,fr,e,t);a.layers=this.layers,this.add(a);let l=new tn(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new tn(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Du="\\[\\]\\.:\\/",gx=new RegExp("["+Du+"]","g"),Bu="[^"+Du+"]",xx="[^"+Du.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",Bu),yx=/(WCOD+)?/.source.replace("WCOD",xx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),Sx=new RegExp("^"+vx+yx+_x+bx+"$"),Mx=["material","materials","bones","map"],lu=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gx,"")}static parseTrackName(e){let t=Sx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=lu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sw=new Float32Array(1);var cu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Uu(i,e,t,n){let s=wx(n);switch(t){case Cu:return i*e;case Kl:return i*e/s.components*s.byteLength;case jl:return i*e/s.components*s.byteLength;case cs:return i*e*2/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case Ru:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case Ql:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(i,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(i,8)*Math.max(e,8)/2;case sc:case rc:case ac:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oc:case sa:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ra:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wx(i){switch(i){case An:case wu:return{byteLength:1,components:1};case Nr:case Au:case Jn:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case jn:case Yl:case zn:return{byteLength:4,components:1};case Eu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ex(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
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
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Vx=`#ifdef USE_BUMPMAP
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kx=`#define PI 3.141592653589793
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
} // validated`,jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
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
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yv=`#ifdef USE_ENVMAP
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
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
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
#endif`,Av=`uniform sampler2D dfgLUT;
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
}`,Ev=`
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
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Yv=`#ifndef FLAT_SHADED
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
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
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
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dy=`float getShadowMask() {
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
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_y=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Cy=`uniform sampler2D t2D;
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
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Dy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Hy=`#define LAMBERT
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
}`,Wy=`#define LAMBERT
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
}`,qy=`#define MATCAP
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
}`,Yy=`#define NORMAL
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
}`,Zy=`#define PHONG
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
}`,Ky=`#define PHONG
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
}`,jy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,Qy=`#define TOON
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
}`,e_=`#define TOON
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
}`,t_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,o_=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Tx,alphahash_pars_fragment:Cx,alphamap_fragment:Rx,alphamap_pars_fragment:Ix,alphatest_fragment:Px,alphatest_pars_fragment:Lx,aomap_fragment:Nx,aomap_pars_fragment:Fx,batching_pars_vertex:Dx,batching_vertex:Bx,begin_vertex:Ux,beginnormal_vertex:Ox,bsdfs:zx,iridescence_fragment:kx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Gx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:qx,color_fragment:Xx,color_pars_fragment:Yx,color_pars_vertex:$x,color_vertex:Zx,common:Kx,cube_uv_reflection_fragment:jx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:sv,envmap_fragment:rv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:yv,envmap_vertex:cv,fog_vertex:hv,fog_pars_vertex:uv,fog_fragment:dv,fog_pars_fragment:fv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:xv,lights_pars_begin:vv,lights_toon_fragment:_v,lights_toon_pars_fragment:bv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:wv,lights_physical_pars_fragment:Av,lights_fragment_begin:Ev,lights_fragment_maps:Tv,lights_fragment_end:Cv,lightprobes_pars_fragment:Rv,logdepthbuf_fragment:Iv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Nv,map_fragment:Fv,map_pars_fragment:Dv,map_particle_fragment:Bv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:zv,morphinstance_vertex:kv,morphcolor_vertex:Vv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Wv,normal_fragment_begin:qv,normal_fragment_maps:Xv,normal_pars_fragment:Yv,normal_pars_vertex:$v,normal_vertex:Zv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:jv,clearcoat_normal_fragment_maps:Jv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:sy,dithering_fragment:ry,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:hy,shadowmap_vertex:uy,shadowmask_pars_fragment:dy,skinbase_vertex:fy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:xy,specularmap_pars_fragment:vy,tonemapping_fragment:yy,tonemapping_pars_fragment:_y,transmission_fragment:by,transmission_pars_fragment:Sy,uv_pars_fragment:My,uv_pars_vertex:wy,uv_vertex:Ay,worldpos_vertex:Ey,background_vert:Ty,background_frag:Cy,backgroundCube_vert:Ry,backgroundCube_frag:Iy,cube_vert:Py,cube_frag:Ly,depth_vert:Ny,depth_frag:Fy,distance_vert:Dy,distance_frag:By,equirect_vert:Uy,equirect_frag:Oy,linedashed_vert:zy,linedashed_frag:ky,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Hy,meshlambert_frag:Wy,meshmatcap_vert:qy,meshmatcap_frag:Xy,meshnormal_vert:Yy,meshnormal_frag:$y,meshphong_vert:Zy,meshphong_frag:Ky,meshphysical_vert:jy,meshphysical_frag:Jy,meshtoon_vert:Qy,meshtoon_frag:e_,points_vert:t_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:o_},we={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},pi={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};pi.physical={uniforms:un([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Nc={r:0,b:0,g:0},a_=new lt,em=new je;em.set(-1,0,0,0,1,0,0,0,1);function l_(i,e,t,n,s,r){let o=new Je(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let _=v.backgroundBlurriness>0;w=e.get(w,_)}return w}function p(v){let w=!1,_=f(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Jo)?(c===void 0&&(c=new Pt(new Zn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ks(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(em),c.material.toneMapped=rt.getTransfer(_.colorSpace)!==xt,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Wo(2,2),new Nn({name:"BackgroundMaterial",uniforms:ks(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=rt.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Nc,Fu(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function c_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(N,U,D,I,F){let B=!1,W=d(N,I,D,U);r!==W&&(r=W,c(r.object)),B=f(N,I,D,F),B&&p(N,I,D,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(N,U,D,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,U,D,I){let F=I.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let W=N.isInstancedMesh===!0?N.id:0,q=B[W];q===void 0&&(q={},B[W]=q);let H=q[D.id];H===void 0&&(H={},q[D.id]=H);let j=H[F];return j===void 0&&(j=u(l()),H[F]=j),j}function u(N){let U=[],D=[],I=[];for(let F=0;F<t;F++)U[F]=0,D[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,U,D,I){let F=r.attributes,B=U.attributes,W=0,q=D.getAttributes();for(let H in q)if(q[H].location>=0){let J=F[H],ie=B[H];if(ie===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function p(N,U,D,I){let F={},B=U.attributes,W=0,q=D.getAttributes();for(let H in q)if(q[H].location>=0){let J=B[H];J===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),F[H]=ie,W++}r.attributes=F,r.attributesNum=W,r.index=I}function x(){let N=r.newAttributes;for(let U=0,D=N.length;U<D;U++)N[U]=0}function m(N){g(N,0)}function g(N,U){let D=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;D[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),F[N]!==U&&(i.vertexAttribDivisor(N,U),F[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let D=0,I=U.length;D<I;D++)U[D]!==N[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function w(N,U,D,I,F,B,W){W===!0?i.vertexAttribIPointer(N,U,D,F,B):i.vertexAttribPointer(N,U,D,I,F,B)}function _(N,U,D,I){x();let F=I.attributes,B=D.getAttributes(),W=U.defaultAttributeValues;for(let q in B){let H=B[q];if(H.location>=0){let j=F[q];if(j===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let J=j.normalized,ie=j.itemSize,me=e.get(j);if(me===void 0)continue;let We=me.buffer,qe=me.type,Ze=me.bytesPerElement,ee=qe===i.INT||qe===i.UNSIGNED_INT||j.gpuType===Yl;if(j.isInterleavedBufferAttribute){let se=j.data,xe=se.stride,Ge=j.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)g(H.location+Ae,se.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Ae=0;Ae<H.locationSize;Ae++)w(H.location+Ae,ie/H.locationSize,qe,J,xe*Ze,(Ge+ie/H.locationSize*Ae)*Ze,ee)}else{if(j.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)g(H.location+se,j.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,We);for(let se=0;se<H.locationSize;se++)w(H.location+se,ie/H.locationSize,qe,J,ie*Ze,ie/H.locationSize*se*Ze,ee)}}else if(W!==void 0){let J=W[q];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}v()}function M(){E();for(let N in n){let U=n[N];for(let D in U){let I=U[D];for(let F in I){let B=I[F];for(let W in B)h(B[W].object),delete B[W];delete I[F]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let D in U){let I=U[D];for(let F in I){let B=I[F];for(let W in B)h(B[W].object),delete B[W];delete I[F]}}delete n[N.id]}function A(N){for(let U in n){let D=n[U];for(let I in D){let F=D[I];if(F[N.id]===void 0)continue;let B=F[N.id];for(let W in B)h(B[W].object),delete B[W];delete F[N.id]}}}function y(N){for(let U in n){let D=n[U],I=N.isInstancedMesh===!0?N.id:0,F=D[I];if(F!==void 0){for(let B in F){let W=F[B];for(let q in W)h(W[q].object),delete W[q];delete F[B]}delete D[I],Object.keys(D).length===0&&delete n[U]}}}function E(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function h_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function u_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==An&&A!==zn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:_,maxSamples:M,samples:S}}function d_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,w=v*4,_=g.clippingState||null;l.value=_,_=h(p,u,w,f);for(let M=0;M!==w;++M)_[M]=t[M];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=f;w!==x;++w,_+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ur=4,f_=6,p_=20,m_=256,oa=new Ir,Lp=new Je,Ou=null,zu=0,ku=0,Vu=!1,g_=new z,Vs=new z,Dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=g_}=r;Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,zu,ku),this._renderer.xr.enabled=Vu,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Jn,format:kn,colorSpace:_o,depthBuffer:!1},s=Np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=x_(r)),this._blurMaterial=y_(r,e,t),this._ggxMaterial=v_(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new Xt,e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,s,r){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Lp),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Zn,new Pn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Lp),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;Br(s,_*M,w>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===os||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ur?n-p+Ur:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Br(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Br(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,oa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),u=4*(this._cubeSize-h);Br(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,oa)}};function x_(i){let e=[],t=[],n=i,s=i-Ur+1+f_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,w=g>2?0:-1,_=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];p.set(_,f*u*g);for(let M=0;M<u;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?Vs.set(1,A,S):g===1?Vs.set(-S,1,-A):g===2?Vs.set(-S,A,1):g===3?Vs.set(-1,A,-S):g===4?Vs.set(-S,-1,A):Vs.set(S,A,-1),Vs.toArray(x,(g*u+M)*f)}}let m=new Xt;m.setAttribute("position",new gn(p,f)),m.setAttribute("outputDirection",new gn(x,f)),t.push(new Pt(m,null)),n>Ur&&n--}return{lodMeshes:t,sizeLods:e}}function Np(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v_(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function y_(i,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Fp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Dp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new No(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:di});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=nn),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function __(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wl||f===ql)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Bc(p.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Wl||f===ql,x=f===os||f===Os;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Dc(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Dc(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Wl?u.mapping=os:f===ql&&(u.mapping=Os),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function b_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let w=0,_=v.length;w<_;w+=3){let M=v[w+0],S=v[w+1],A=v[w+2];u.push(M,S,S,A,A,M)}}else{let v=p.array;x=p.version;for(let w=0,_=v.length/3-1;w<_;w+=3){let M=w+0,S=w+1,A=w+2;u.push(M,S,S,A,A,M)}}let m=new(p.count>=65535?Co:To)(u,1);m.version=x;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function M_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,e,t){let n=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=a.attributes.position.count*w,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*M*4*d),A=new Mo(S,_,M,d);A.type=zn,A.needsUpdate=!0;let y=w*4;for(let L=0;L<d;L++){let N=m[L],U=g[L],D=v[L],I=_*M*4*L;for(let F=0;F<N.count;F++){let B=F*y;f===!0&&(s.fromBufferAttribute(N,F),S[I+B+0]=s.x,S[I+B+1]=s.y,S[I+B+2]=s.z,S[I+B+3]=0),p===!0&&(s.fromBufferAttribute(U,F),S[I+B+4]=s.x,S[I+B+5]=s.y,S[I+B+6]=s.z,S[I+B+7]=0),x===!0&&(s.fromBufferAttribute(D,F),S[I+B+8]=s.x,S[I+B+9]=s.y,S[I+B+10]=s.z,S[I+B+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Se(_,M)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function E_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var T_={[xu]:"LINEAR_TONE_MAPPING",[vu]:"REINHARD_TONE_MAPPING",[yu]:"CINEON_TONE_MAPPING",[jo]:"ACES_FILMIC_TONE_MAPPING",[bu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function C_(i,e,t,n,s,r){let o=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Xt;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let h=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(c,h),u=new Ir(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,v=[],w=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let S=0;S<v.length;S++){let A=v[S];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){v=_,w=v.length>0&&v[0].isRenderPass===!0;let M=o.width,S=o.height;v.length>0&&a===null&&(a=new wn(M,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(M,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let y=v[A];y.setSize&&y.setSize(M,S)}},this.begin=function(_,M){if(x||_.toneMapping===Kn&&v.length===0)return!1;if(g=M,M!==null){let S=M.width,A=M.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Kn,!0},this.hasRenderPass=function(){return w},this.end=function(_,M){_.toneMapping=m,x=!0;let S=o,A=a;for(let y=0;y<v.length;y++){let E=v[y];E.enabled!==!1&&(E.render(_,A,S,M),E.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},rt.getTransfer(f)===xt&&(h.defines.SRGB_TRANSFER="");let y=T_[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(g),_.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var tm=new xn,Wu=new ts(1,1),nm=new Mo,im=new yl,sm=new No,Bp=[],Up=[],Op=new Float32Array(16),zp=new Float32Array(9),kp=new Float32Array(4);function zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bp[s];if(r===void 0&&(r=new Float32Array(s),Bp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=Up[e];t===void 0&&(t=new Int32Array(e),Up[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;kp.set(n),i.uniformMatrix2fv(this.addr,!1,kp),$t(t,n)}}function F_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),$t(t,n)}}function D_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),$t(t,n)}}function B_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=t.isReversedDepthBuffer()?Lc:Pc,r=Wu):r=tm,t.setTexture2D(e||r,s)}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||im,s)}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sm,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nm,s)}function $_(i){switch(i){case 5126:return R_;case 35664:return I_;case 35665:return P_;case 35666:return L_;case 35674:return N_;case 35675:return F_;case 35676:return D_;case 5124:case 35670:return B_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return V_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return Y_}}function Z_(i,e){i.uniform1fv(this.addr,e)}function K_(i,e){let t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function j_(i,e){let t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function J_(i,e){let t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Q_(i,e){let t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eb(i,e){let t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tb(i,e){let t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nb(i,e){i.uniform1iv(this.addr,e)}function ib(i,e){i.uniform2iv(this.addr,e)}function sb(i,e){i.uniform3iv(this.addr,e)}function rb(i,e){i.uniform4iv(this.addr,e)}function ob(i,e){i.uniform1uiv(this.addr,e)}function ab(i,e){i.uniform2uiv(this.addr,e)}function lb(i,e){i.uniform3uiv(this.addr,e)}function cb(i,e){i.uniform4uiv(this.addr,e)}function hb(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wu:o=tm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ub(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||im,r[o])}function db(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sm,r[o])}function fb(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nm,r[o])}function pb(i){switch(i){case 5126:return Z_;case 35664:return K_;case 35665:return j_;case 35666:return J_;case 35674:return Q_;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}var qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pb(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function Vp(i,e){i.seq.push(e),i.map[e.id]=e}function mb(i,e,t){let n=i.name,s=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),o=Gu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vp(t,c===void 0?new qu(a,i,e):new Xu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Yu(a),Vp(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gb=37297,xb=0;function vb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Hp=new je;function yb(i){rt._getMatrix(Hp,rt.workingColorSpace,i);let e=`mat3( ${Hp.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vb(i.getShaderSource(e),a)}else return r}function _b(i,e){let t=yb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bb={[xu]:"Linear",[vu]:"Reinhard",[yu]:"Cineon",[jo]:"ACESFilmic",[bu]:"AgX",[Su]:"Neutral",[_u]:"Custom"};function Sb(i,e){let t=bb[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fc=new z;function Mb(){rt.getLuminanceCoefficients(Fc);let i=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Ab(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Eb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function la(i){return i!==""}function qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(Tb,Rb)}var Cb=new Map;function Rb(i,e){let t=tt[e];if(t===void 0){let n=Cb.get(e);if(n!==void 0)t=tt[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $u(t)}var Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(Ib,Pb)}function Pb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $p(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Lb={[Bs]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function Nb(i){return Lb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fb={[os]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function Db(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bb={[Os]:"ENVMAP_MODE_REFRACTION"};function Ub(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ob={[gu]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function zb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ob[i.combine]||"ENVMAP_BLENDING_NONE"}function kb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Nb(t),c=Db(t),h=Ub(t),d=zb(t),u=kb(t),f=wb(t),p=Ab(r),x=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(la).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(la).join(`
`),g.length>0&&(g+=`
`)):(m=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),g=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,_b("linearToOutputTexel",t.outputColorSpace),Mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=$u(o),o=qp(o,t),o=Xp(o,t),a=$u(a),a=qp(a,t),a=Xp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=v+m+o,_=v+g+a,M=Gp(s,s.VERTEX_SHADER,w),S=Gp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(S)||"",F=U.trim(),B=D.trim(),W=I.trim(),q=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let j=Wp(s,M,"vertex"),J=Wp(s,S,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+j+`
`+J)}else F!==""?He("WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(H=!1);H&&(N.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(S),y=new Or(s,x),E=Eb(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,gb)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var Gb=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}};function Hb(i){return i===cs||i===sa||i===ra}function Wb(i,e,t,n,s,r){let o=new wo,a=new Zu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,L,N,U,D){let I=N.fog,F=U.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||B,W),H=q&&q.mapping===Jo?q.image.height:null,j=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ie=J!==void 0?J.length:0,me=0;F.morphAttributes.position!==void 0&&(me=1),F.morphAttributes.normal!==void 0&&(me=2),F.morphAttributes.color!==void 0&&(me=3);let We,qe,Ze,ee;if(j){let Et=pi[j];We=Et.vertexShader,qe=Et.fragmentShader}else{We=y.vertexShader,qe=y.fragmentShader;let Et=a.getVertexShaderStage(y),mt=a.getFragmentShaderStage(y);a.update(y,Et,mt),Ze=Et.id,ee=mt.id}let se=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ge=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,ae=!!y.map,De=!!y.matcap,ne=!!q,le=!!y.aoMap,de=!!y.lightMap,ue=!!y.bumpMap&&y.wireframe===!1,ge=!!y.normalMap,Ve=!!y.displacementMap,Be=!!y.emissiveMap,Ye=!!y.metalnessMap,Ke=!!y.roughnessMap,P=y.anisotropy>0,he=y.clearcoat>0,Y=y.dispersion>0,R=y.retroreflectivity>0,b=y.iridescence>0,k=y.sheen>0,O=y.transmission>0,X=P&&!!y.anisotropyMap,fe=he&&!!y.clearcoatMap,pe=he&&!!y.clearcoatNormalMap,te=he&&!!y.clearcoatRoughnessMap,re=b&&!!y.iridescenceMap,ve=b&&!!y.iridescenceThicknessMap,Oe=k&&!!y.sheenColorMap,Me=k&&!!y.sheenRoughnessMap,ye=!!y.specularMap,ze=!!y.specularColorMap,Xe=!!y.specularIntensityMap,Qe=O&&!!y.transmissionMap,G=O&&!!y.thicknessMap,_e=!!y.gradientMap,oe=!!y.alphaMap,be=y.alphaTest>0,Ce=!!y.alphaHash,ce=!!y.extensions,ke=Kn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Fe={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:qe,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&U.instanceColor!==null,instancingMorph:Ge&&U.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:De,envMap:ne,envMapMode:ne&&q.mapping,envMapCubeUVHeight:H,aoMap:le,lightMap:de,bumpMap:ue,normalMap:ge,displacementMap:Ve,emissiveMap:Be,normalMapObjectSpace:ge&&y.normalMapType===up,normalMapTangentSpace:ge&&y.normalMapType===Ic,packedNormalMap:ge&&y.normalMapType===Ic&&Hb(y.normalMap.format),metalnessMap:Ye,roughnessMap:Ke,anisotropy:P,anisotropyMap:X,clearcoat:he,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:te,dispersion:Y,retroreflection:R,iridescence:b,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:k,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:ye,specularColorMap:ze,specularIntensityMap:Xe,transmission:O,transmissionMap:Qe,thicknessMap:G,gradientMap:_e,opaque:y.transparent===!1&&y.blending===Lr&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:be,alphaHash:Ce,combine:y.combine,mapUv:ae&&p(y.map.channel),aoMapUv:le&&p(y.aoMap.channel),lightMapUv:de&&p(y.lightMap.channel),bumpMapUv:ue&&p(y.bumpMap.channel),normalMapUv:ge&&p(y.normalMap.channel),displacementMapUv:Ve&&p(y.displacementMap.channel),emissiveMapUv:Be&&p(y.emissiveMap.channel),metalnessMapUv:Ye&&p(y.metalnessMap.channel),roughnessMapUv:Ke&&p(y.roughnessMap.channel),anisotropyMapUv:X&&p(y.anisotropyMap.channel),clearcoatMapUv:fe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(y.sheenRoughnessMap.channel),specularMapUv:ye&&p(y.specularMap.channel),specularColorMapUv:ze&&p(y.specularColorMap.channel),specularIntensityMapUv:Xe&&p(y.specularIntensityMap.channel),transmissionMapUv:Qe&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:oe&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||P),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(ae||oe),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:Be&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let E=f[y.type],L;if(E){let N=pi[E];L=Rp.clone(N.uniforms)}else L=y.uniforms;return L}function _(y,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Vb(i,E,y,s),c.push(L),h.set(E,L)),L}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function qb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),e++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let w=a(u,f,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(u,f,p,x,m,g){let v=a(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||Xb),n.length>1&&n.sort(f||Zp),s.length>1&&s.sort(f||Zp)}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Yb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Kp,i.set(n,[o])):s>=r.length?(o=new Kp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $b(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kb=0;function jb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jb(i){let e=new $b,t=Zb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new lt,o=new lt;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,w=0,_=0,M=0,S=0,A=0,y=0,E=0,L=0;c.sort(jb);for(let U=0,D=c.length;U<D;U++){let I=c[U],F=I.color,B=I.intensity,W=I.distance,q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cs?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*B,d+=F.g*B,u+=F.b*B;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],B);L++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,J=t.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=q;let ie=j.getViewportCount();for(let me=0;me<ie;me++)n.sunShadowMatrix[x+me]=j.getMatrix(me),n.sunShadowCascade[x+me]=j._cascadeData[me];x+=ie,p++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,J=t.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=H,m++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[v]=H;let j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=j.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=q,A++}v++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=H,w++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let j=I.shadow,J=t.get(I);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(B),H.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[_]=H,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==_||N.numSunShadows!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==A||N.numSpotMaps!==y||N.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=_,N.numSunShadows=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=A,N.numSpotMaps=y,N.numLightProbes=L,n.version=Kb++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let _=c[v];if(_.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(_.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function jp(i){let e=new Jb(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Qb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jp(i),e.set(s,[a])):r>=o.length?(a=new jp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var eS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tS=`uniform sampler2D shadow_pass;
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
}`,nS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],iS=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Jp=new lt,aa=new z,Hu=new z;function sS(i,e,t){let n=new Mr,s=new Se,r=new Se,o=new Bt,a=new Il,l=new Pl,c={},h=t.maxTextureSize,d={[rs]:vn,[vn]:rs,[On]:On},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:eS,fragmentShader:tS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let g=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Gf&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let E=i.getRenderTarget(),L=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(di),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=g!==this.type;D&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=S.length;I<F;I++){let B=S[I],W=B.shadow;if(W===void 0){He("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let q=W.getFrameExtents();s.multiply(q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Pr){if(B.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new wn(s.x,s.y,{format:cs,type:Jn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new ts(s.x,s.y,zn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=ci,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt}else B.isPointLight?(W.map=new Bc(s.x),W.map.depthTexture=new Sl(s.x,jn)):(W.map=new wn(s.x,s.y),W.map.depthTexture=new ts(s.x,s.y,jn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=ci,this.type===Bs?(W.map.depthTexture.compareFunction=H?Lc:Pc,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,y);for(let J=0;J<j;J++){let ie=W.getCamera(J);if(B.isPointLight){let me=W.camera,We=W.matrix,qe=B.distance||me.far;qe!==me.far&&(me.far=qe,me.updateProjectionMatrix()),aa.setFromMatrixPosition(B.matrixWorld),me.position.copy(aa),Hu.copy(me.position),Hu.add(nS[J]),me.up.copy(iS[J]),me.lookAt(Hu),me.updateMatrixWorld(),We.makeTranslation(-aa.x,-aa.y,-aa.z),Jp.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Jp,me.coordinateSystem,me.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,J),i.clear();else{J===0&&(i.setRenderTarget(W.map),i.clear());let me=W.getViewport(J);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),U.viewport(o)}n=W.getFrustum(J),_(A,y,ie,B,this.type)}W.isPointLightShadow!==!0&&this.type===Pr&&v(W,y),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,L,N)};function v(S,A){let y=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new wn(s.x,s.y,{format:cs,type:Jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function w(S,A,y,E){let L=null,N=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)L=N;else if(L=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=L.uuid,D=A.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let F=I[D];F===void 0&&(F=L.clone(),I[D]=F,A.addEventListener("dispose",M)),L=F}if(L.visible=A.visible,L.wireframe=A.wireframe,E===Pr?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:d[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let U=i.properties.get(L);U.light=y}return L}function _(S,A,y,E,L){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Pr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let D=e.update(S),I=S.material;if(Array.isArray(I)){let F=D.groups;for(let B=0,W=F.length;B<W;B++){let q=F[B],H=I[q.materialIndex];if(H&&H.visible){let j=w(S,H,E,L);S.onBeforeShadow(i,S,A,y,D,j,q),i.renderBufferDirect(y,null,D,j,S,q),S.onAfterShadow(i,S,A,y,D,j,q)}}}else if(I.visible){let F=w(S,I,E,L);S.onBeforeShadow(i,S,A,y,D,F,null),i.renderBufferDirect(y,null,D,F,S,null),S.onAfterShadow(i,S,A,y,D,F,null)}}let U=S.children;for(let D=0,I=U.length;D<I;D++)_(U[D],A,y,E,L)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],L=S.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function rS(i,e){function t(){let G=!1,_e=new Bt,oe=null,be=new Bt(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!G&&(i.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){G=Ce},setClear:function(Ce,ce,ke,Fe,Et){Et===!0&&(Ce*=Fe,ce*=Fe,ke*=Fe),_e.set(Ce,ce,ke,Fe),be.equals(_e)===!1&&(i.clearColor(Ce,ce,ke,Fe),be.copy(_e))},reset:function(){G=!1,oe=null,be.set(-1,0,0,0)}}}function n(){let G=!1,_e=!1,oe=null,be=null,Ce=null;return{setReversed:function(ce){if(_e!==ce){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=ce;let Fe=Ce;Ce=null,this.setClear(Fe)}},getReversed:function(){return _e},setTest:function(ce){ce?se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!G&&(i.depthMask(ce),oe=ce)},setFunc:function(ce){if(_e&&(ce=Mp[ce]),be!==ce){switch(ce){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ce}},setLocked:function(ce){G=ce},setClear:function(ce){Ce!==ce&&(Ce=ce,_e&&(ce=1-ce),i.clearDepth(ce))},reset:function(){G=!1,oe=null,be=null,Ce=null,_e=!1}}}function s(){let G=!1,_e=null,oe=null,be=null,Ce=null,ce=null,ke=null,Fe=null,Et=null;return{setTest:function(mt){G||(mt?se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!G&&(i.stencilMask(mt),_e=mt)},setFunc:function(mt,Hn,ri){(oe!==mt||be!==Hn||Ce!==ri)&&(i.stencilFunc(mt,Hn,ri),oe=mt,be=Hn,Ce=ri)},setOp:function(mt,Hn,ri){(ce!==mt||ke!==Hn||Fe!==ri)&&(i.stencilOp(mt,Hn,ri),ce=mt,ke=Hn,Fe=ri)},setLocked:function(mt){G=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){G=!1,_e=null,oe=null,be=null,Ce=null,ce=null,ke=null,Fe=null,Et=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,_=null,M=null,S=null,A=null,y=new Je(0,0,0),E=0,L=!1,N=null,U=null,D=null,I=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,q=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let j=null,J={},ie=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),We=new Bt().fromArray(ie),qe=new Bt().fromArray(me);function Ze(G,_e,oe,be){let Ce=new Uint8Array(4),ce=i.createTexture();i.bindTexture(G,ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<oe;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(_e+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return ce}let ee={};ee[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(gr),ue(!1),ge(hu),se(i.CULL_FACE),le(di);function se(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Ge(G,_e){return u[G]!==_e?(i.bindFramebuffer(G,_e),u[G]=_e,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ae(G,_e){let oe=p,be=!1;if(G){oe=f.get(_e),oe===void 0&&(oe=[],f.set(_e,oe));let Ce=G.textures;if(oe.length!==Ce.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,ke=Ce.length;ce<ke;ce++)oe[ce]=i.COLOR_ATTACHMENT0+ce;oe.length=Ce.length,be=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,be=!0);be&&i.drawBuffers(oe)}function ae(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let De={[Us]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};De[Xf]=i.MIN,De[Yf]=i.MAX;let ne={[$f]:i.ZERO,[Zf]:i.ONE,[Kf]:i.SRC_COLOR,[pu]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[mu]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function le(G,_e,oe,be,Ce,ce,ke,Fe,Et,mt){if(G===di){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),G!==Hf){if(G!==g||mt!==L){if((v!==Us||M!==Us)&&(i.blendEquation(i.FUNC_ADD),v=Us,M=Us),mt)switch(G){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",G);break}else switch(G){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case du:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",G);break}w=null,_=null,S=null,A=null,y.set(0,0,0),E=0,g=G,L=mt}return}Ce=Ce||_e,ce=ce||oe,ke=ke||be,(_e!==v||Ce!==M)&&(i.blendEquationSeparate(De[_e],De[Ce]),v=_e,M=Ce),(oe!==w||be!==_||ce!==S||ke!==A)&&(i.blendFuncSeparate(ne[oe],ne[be],ne[ce],ne[ke]),w=oe,_=be,S=ce,A=ke),(Fe.equals(y)===!1||Et!==E)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Et),y.copy(Fe),E=Et),g=G,L=!1}function de(G,_e){G.side===On?xe(i.CULL_FACE):se(i.CULL_FACE);let oe=G.side===vn;_e&&(oe=!oe),ue(oe),G.blending===Lr&&G.transparent===!1?le(di):le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let be=G.stencilWrite;a.setTest(be),be&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(G){N!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),N=G)}function ge(G){G!==kf?(se(i.CULL_FACE),G!==U&&(G===hu?i.cullFace(i.BACK):G===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=G}function Ve(G){G!==D&&(W&&i.lineWidth(G),D=G)}function Be(G,_e,oe){G?(se(i.POLYGON_OFFSET_FILL),(I!==_e||F!==oe)&&(I=_e,F=oe,o.getReversed()&&(_e=-_e),i.polygonOffset(_e,oe))):xe(i.POLYGON_OFFSET_FILL)}function Ye(G){G?se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ke(G){G===void 0&&(G=i.TEXTURE0+B-1),j!==G&&(i.activeTexture(G),j=G)}function P(G,_e,oe){oe===void 0&&(j===null?oe=i.TEXTURE0+B-1:oe=j);let be=J[oe];be===void 0&&(be={type:void 0,texture:void 0},J[oe]=be),(be.type!==G||be.texture!==_e)&&(j!==oe&&(i.activeTexture(oe),j=oe),i.bindTexture(G,_e||ee[G]),be.type=G,be.texture=_e)}function he(){let G=J[j];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function b(){try{i.texSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function k(){try{i.texSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function fe(){try{i.texStorage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function pe(){try{i.texStorage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function te(){try{i.texImage2D(...arguments)}catch(G){$e("WebGLState:",G)}}function re(){try{i.texImage3D(...arguments)}catch(G){$e("WebGLState:",G)}}function ve(G){return d[G]!==void 0?d[G]:i.getParameter(G)}function Oe(G,_e){d[G]!==_e&&(i.pixelStorei(G,_e),d[G]=_e)}function Me(G){We.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),We.copy(G))}function ye(G){qe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),qe.copy(G))}function ze(G,_e){let oe=c.get(_e);oe===void 0&&(oe=new WeakMap,c.set(_e,oe));let be=oe.get(G);be===void 0&&(be=i.getUniformBlockIndex(_e,G.name),oe.set(G,be))}function Xe(G,_e){let be=c.get(_e).get(G);l.get(_e)!==be&&(i.uniformBlockBinding(_e,be,G.__bindingPointIndex),l.set(_e,be))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,J={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,_=null,M=null,S=null,A=null,y=new Je(0,0,0),E=0,L=!1,N=null,U=null,D=null,I=null,F=null,We.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:xe,bindFramebuffer:Ge,drawBuffers:Ae,useProgram:ae,setBlending:le,setMaterial:de,setFlipSided:ue,setCullFace:ge,setLineWidth:Ve,setPolygonOffset:Be,setScissorTest:Ye,activeTexture:Ke,bindTexture:P,unbindTexture:he,compressedTexImage2D:Y,compressedTexImage3D:R,texImage2D:te,texImage3D:re,pixelStorei:Oe,getParameter:ve,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:fe,texStorage3D:pe,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:O,compressedTexSubImage3D:X,scissor:Me,viewport:ye,reset:Qe}}function oS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return p?new OffscreenCanvas(R,b):So("canvas")}function m(R,b,k){let O=1,X=Y(R);if((X.width>k||X.height>k)&&(O=k/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let fe=Math.floor(O*X.width),pe=Math.floor(O*X.height);u===void 0&&(u=x(fe,pe));let te=b?x(fe,pe):u;return te.width=fe,te.height=pe,te.getContext("2d").drawImage(R,0,0,fe,pe),He("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+fe+"x"+pe+")."),te}else return"data"in R&&He("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function g(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,b,k,O,X,fe=!1){if(R!==null){if(i[R]!==void 0)return i[R];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;O&&(pe=e.get("EXT_texture_norm16"),pe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===i.RED&&(k===i.FLOAT&&(te=i.R32F),k===i.HALF_FLOAT&&(te=i.R16F),k===i.UNSIGNED_BYTE&&(te=i.R8),k===i.UNSIGNED_SHORT&&pe&&(te=pe.R16_EXT),k===i.SHORT&&pe&&(te=pe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.R8UI),k===i.UNSIGNED_SHORT&&(te=i.R16UI),k===i.UNSIGNED_INT&&(te=i.R32UI),k===i.BYTE&&(te=i.R8I),k===i.SHORT&&(te=i.R16I),k===i.INT&&(te=i.R32I)),b===i.RG&&(k===i.FLOAT&&(te=i.RG32F),k===i.HALF_FLOAT&&(te=i.RG16F),k===i.UNSIGNED_BYTE&&(te=i.RG8),k===i.UNSIGNED_SHORT&&pe&&(te=pe.RG16_EXT),k===i.SHORT&&pe&&(te=pe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RG8UI),k===i.UNSIGNED_SHORT&&(te=i.RG16UI),k===i.UNSIGNED_INT&&(te=i.RG32UI),k===i.BYTE&&(te=i.RG8I),k===i.SHORT&&(te=i.RG16I),k===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGB8UI),k===i.UNSIGNED_SHORT&&(te=i.RGB16UI),k===i.UNSIGNED_INT&&(te=i.RGB32UI),k===i.BYTE&&(te=i.RGB8I),k===i.SHORT&&(te=i.RGB16I),k===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),k===i.UNSIGNED_INT&&(te=i.RGBA32UI),k===i.BYTE&&(te=i.RGBA8I),k===i.SHORT&&(te=i.RGBA16I),k===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_SHORT&&pe&&(te=pe.RGB16_EXT),k===i.SHORT&&pe&&(te=pe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){let re=fe?bo:rt.getTransfer(X);k===i.FLOAT&&(te=i.RGBA32F),k===i.HALF_FLOAT&&(te=i.RGBA16F),k===i.UNSIGNED_BYTE&&(te=re===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&pe&&(te=pe.RGBA16_EXT),k===i.SHORT&&pe&&(te=pe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(R,b){let k;return R?b===null||b===jn||b===Fr?k=i.DEPTH24_STENCIL8:b===zn?k=i.DEPTH32F_STENCIL8:b===Nr&&(k=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===Fr?k=i.DEPTH_COMPONENT24:b===zn?k=i.DEPTH_COMPONENT32F:b===Nr&&(k=i.DEPTH_COMPONENT16),k}function S(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function y(R){let b=R.target;b.removeEventListener("dispose",y),N(b)}function E(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,O=f.get(k);if(O){let X=O[b.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(R),Object.keys(O).length===0&&f.delete(k)}n.remove(R)}function L(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let k=R.source,O=f.get(k);delete O[b.__cacheKey],o.memory.textures--}function N(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(b.__webglFramebuffer[O]))for(let X=0;X<b.__webglFramebuffer[O].length;X++)i.deleteFramebuffer(b.__webglFramebuffer[O][X]);else i.deleteFramebuffer(b.__webglFramebuffer[O]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[O])}else{if(Array.isArray(b.__webglFramebuffer))for(let O=0;O<b.__webglFramebuffer.length;O++)i.deleteFramebuffer(b.__webglFramebuffer[O]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let O=0;O<b.__webglColorRenderbuffer.length;O++)b.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[O]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let O=0,X=k.length;O<X;O++){let fe=n.get(k[O]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(k[O])}n.remove(R)}let U=0;function D(){U=0}function I(){return U}function F(R){U=R}function B(){let R=U;return R>=s.maxTextures&&He("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function W(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function q(R,b){let k=n.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let O=R.image;if(O===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function H(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,b);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function j(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function J(R,b){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ge(k,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}let ie={[xr]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},me={[Jt]:i.NEAREST,[cp]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Xl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},We={[fp]:i.NEVER,[vp]:i.ALWAYS,[pp]:i.LESS,[Pc]:i.LEQUAL,[mp]:i.EQUAL,[Lc]:i.GEQUAL,[gp]:i.GREATER,[xp]:i.NOTEQUAL};function qe(R,b){if(b.type===zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===Xl||b.magFilter===Qo||b.magFilter===as||b.minFilter===nn||b.minFilter===Xl||b.minFilter===Qo||b.minFilter===as)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,me[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,We[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==Qo&&b.minFilter!==as||b.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ze(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let O=b.source,X=f.get(O);X===void 0&&(X={},f.set(O,X));let fe=W(b);if(fe!==R.__cacheKey){X[fe]===void 0&&(X[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),X[fe].usedTimes++;let pe=X[R.__cacheKey];pe!==void 0&&(X[R.__cacheKey].usedTimes--,pe.usedTimes===0&&L(b)),R.__cacheKey=fe,R.__webglTexture=X[fe].texture}return k}function ee(R,b,k){return Math.floor(Math.floor(R/k)/b)}function se(R,b,k,O){let fe=R.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,O,b.data);else{fe.sort((Oe,Me)=>Oe.start-Me.start);let pe=0;for(let Oe=1;Oe<fe.length;Oe++){let Me=fe[pe],ye=fe[Oe],ze=Me.start+Me.count,Xe=ee(ye.start,b.width,4),Qe=ee(Me.start,b.width,4);ye.start<=ze+1&&Xe===Qe&&ee(ye.start+ye.count-1,b.width,4)===Xe?Me.count=Math.max(Me.count,ye.start+ye.count-Me.start):(++pe,fe[pe]=ye)}fe.length=pe+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Oe=0,Me=fe.length;Oe<Me;Oe++){let ye=fe[Oe],ze=Math.floor(ye.start/4),Xe=Math.ceil(ye.count/4),Qe=ze%b.width,G=Math.floor(ze/b.width),_e=Xe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,Qe,G,_e,oe,k,O,b.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function xe(R,b,k){let O=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(O=i.TEXTURE_3D);let X=Ze(R,b),fe=b.source;t.bindTexture(O,R.__webglTexture,i.TEXTURE0+k);let pe=n.get(fe);if(fe.version!==pe.__version||X===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let oe=rt.getPrimaries(rt.workingColorSpace),be=b.colorSpace===Fi?null:rt.getPrimaries(b.colorSpace),Ce=b.colorSpace===Fi||oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let re=m(b.image,!1,s.maxTextureSize);re=he(b,re);let ve=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Me=_(b.internalFormat,ve,Oe,b.normalized,b.colorSpace,b.isVideoTexture);qe(O,b);let ye,ze=b.mipmaps,Xe=b.isVideoTexture!==!0,Qe=pe.__version===void 0||X===!0,G=fe.dataReady,_e=S(b,re);if(b.isDepthTexture)Me=M(b.format===ls,b.type),Qe&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,ve,Oe,null));else if(b.isDataTexture)if(ze.length>0){Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,_e,Me,ze[0].width,ze[0].height);for(let oe=0,be=ze.length;oe<be;oe++)ye=ze[oe],Xe?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ve,Oe,ye.data):t.texImage2D(i.TEXTURE_2D,oe,Me,ye.width,ye.height,0,ve,Oe,ye.data);b.generateMipmaps=!1}else Xe?(Qe&&t.texStorage2D(i.TEXTURE_2D,_e,Me,re.width,re.height),G&&se(b,re,ve,Oe)):t.texImage2D(i.TEXTURE_2D,0,Me,re.width,re.height,0,ve,Oe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Me,ze[0].width,ze[0].height,re.depth);for(let oe=0,be=ze.length;oe<be;oe++)if(ye=ze[oe],b.format!==kn)if(ve!==null)if(Xe){if(G)if(b.layerUpdates.size>0){let Ce=Uu(ye.width,ye.height,b.format,b.type);for(let ce of b.layerUpdates){let ke=ye.data.subarray(ce*Ce/ye.data.BYTES_PER_ELEMENT,(ce+1)*Ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ce,ye.width,ye.height,1,ve,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,re.depth,ve,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Me,ye.width,ye.height,re.depth,0,ye.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,re.depth,ve,Oe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Me,ye.width,ye.height,re.depth,0,ve,Oe,ye.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Xe&&Qe&&t.texStorage2D(i.TEXTURE_2D,_e,Me,ze[0].width,ze[0].height);for(let oe=0,be=ze.length;oe<be;oe++)ye=ze[oe],b.format!==kn?ve!==null?Xe?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Me,ye.width,ye.height,0,ye.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ve,Oe,ye.data):t.texImage2D(i.TEXTURE_2D,oe,Me,ye.width,ye.height,0,ve,Oe,ye.data)}else if(b.isDataArrayTexture)if(Xe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Me,re.width,re.height,re.depth),G)if(b.layerUpdates.size>0){let oe=Uu(re.width,re.height,b.format,b.type);for(let be of b.layerUpdates){let Ce=re.data.subarray(be*oe/re.data.BYTES_PER_ELEMENT,(be+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,re.width,re.height,1,ve,Oe,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Oe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,ve,Oe,re.data);else if(b.isData3DTexture)Xe?(Qe&&t.texStorage3D(i.TEXTURE_3D,_e,Me,re.width,re.height,re.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Oe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,ve,Oe,re.data);else if(b.isFramebufferTexture){if(Qe)if(Xe)t.texStorage2D(i.TEXTURE_2D,_e,Me,re.width,re.height);else{let oe=re.width,be=re.height;for(let Ce=0;Ce<_e;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Me,oe,be,0,ve,Oe,null),oe>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),re.parentNode!==oe){oe.appendChild(re),d.add(b),oe.onpaint=be=>{let Ce=be.changedElements;for(let ce of d)Ce.includes(ce.image)&&(ce.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Ce=i.RGBA,ce=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ce,ce,ke,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&Qe){let oe=Y(ze[0]);t.texStorage2D(i.TEXTURE_2D,_e,Me,oe.width,oe.height)}for(let oe=0,be=ze.length;oe<be;oe++)ye=ze[oe],Xe?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve,Oe,ye):t.texImage2D(i.TEXTURE_2D,oe,Me,ve,Oe,ye);b.generateMipmaps=!1}else if(Xe){if(Qe){let oe=Y(re);t.texStorage2D(i.TEXTURE_2D,_e,Me,oe.width,oe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Oe,re)}else t.texImage2D(i.TEXTURE_2D,0,Me,ve,Oe,re);g(b)&&v(O),pe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ge(R,b,k){if(b.image.length!==6)return;let O=Ze(R,b),X=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let fe=n.get(X);if(X.version!==fe.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let pe=rt.getPrimaries(rt.workingColorSpace),te=b.colorSpace===Fi?null:rt.getPrimaries(b.colorSpace),re=b.colorSpace===Fi||pe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,Oe=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!ve&&!Oe?Me[ce]=m(b.image[ce],!0,s.maxCubemapSize):Me[ce]=Oe?b.image[ce].image:b.image[ce],Me[ce]=he(b,Me[ce]);let ye=Me[0],ze=r.convert(b.format,b.colorSpace),Xe=r.convert(b.type),Qe=_(b.internalFormat,ze,Xe,b.normalized,b.colorSpace),G=b.isVideoTexture!==!0,_e=fe.__version===void 0||O===!0,oe=X.dataReady,be=S(b,ye);qe(i.TEXTURE_CUBE_MAP,b);let Ce;if(ve){G&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,ye.width,ye.height);for(let ce=0;ce<6;ce++){Ce=Me[ce].mipmaps;for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];b.format!==kn?ze!==null?G?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Qe,Fe.width,Fe.height,0,Fe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Fe.width,Fe.height,ze,Xe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Qe,Fe.width,Fe.height,0,ze,Xe,Fe.data)}}}else{if(Ce=b.mipmaps,G&&_e){Ce.length>0&&be++;let ce=Y(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Oe){G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,ze,Xe,Me[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,Me[ce].width,Me[ce].height,0,ze,Xe,Me[ce].data);for(let ke=0;ke<Ce.length;ke++){let Et=Ce[ke].image[ce].image;G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,Et.width,Et.height,ze,Xe,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Qe,Et.width,Et.height,0,ze,Xe,Et.data)}}else{G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,Xe,Me[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,ze,Xe,Me[ce]);for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,ze,Xe,Fe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Qe,ze,Xe,Fe.image[ce])}}}g(b)&&v(i.TEXTURE_CUBE_MAP),fe.__version=X.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ae(R,b,k,O,X,fe){let pe=r.convert(k.format,k.colorSpace),te=r.convert(k.type),re=_(k.internalFormat,pe,te,k.normalized,k.colorSpace),ve=n.get(b),Oe=n.get(k);if(Oe.__renderTarget=b,!ve.__hasExternalTextures){let Me=Math.max(1,b.width>>fe),ye=Math.max(1,b.height>>fe);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,fe,re,Me,ye,b.depth,0,pe,te,null):t.texImage2D(X,fe,re,Me,ye,0,pe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,X,Oe.__webglTexture,0,Ye(b)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,X,Oe.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let O=b.depthTexture,X=O&&O.isDepthTexture?O.type:null,fe=M(b.stencilBuffer,X),pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(b),fe,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(b),fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,R)}else{let O=b.textures;for(let X=0;X<O.length;X++){let fe=O[X],pe=r.convert(fe.format,fe.colorSpace),te=r.convert(fe.type),re=_(fe.internalFormat,pe,te,fe.normalized,fe.colorSpace);Ke(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye(b),re,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye(b),re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,b,k){let O=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(b.depthTexture);if(X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O){if(X.__webglInit===void 0&&(X.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b.depthTexture);let ve=r.convert(b.depthTexture.format),Oe=r.convert(b.depthTexture.type),Me;b.depthTexture.format===ci?Me=i.DEPTH_COMPONENT24:b.depthTexture.format===ls&&(Me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,b.width,b.height,0,ve,Oe,null)}}else q(b.depthTexture,0);let fe=X.__webglTexture,pe=Ye(b),te=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,re=b.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ci)Ke(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,fe,0);else if(b.depthTexture.format===ls)Ke(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,fe,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),O){let X=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,O.removeEventListener("dispose",X)};O.addEventListener("dispose",X),b.__depthDisposeCallback=X}b.__boundDepthTexture=O}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let O=0;O<6;O++)De(b.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?De(b.__webglFramebuffer[0],R,0):De(b.__webglFramebuffer,R,0)}else if(k){b.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[O]),b.__webglDepthbuffer[O]===void 0)b.__webglDepthbuffer[O]=i.createRenderbuffer(),ae(b.__webglDepthbuffer[O],R,!1);else{let X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,fe)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ae(b.__webglDepthbuffer,R,!1);else{let X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,b,k){let O=n.get(R);b!==void 0&&Ae(O.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ne(R)}function de(R){let b=R.texture,k=n.get(R),O=n.get(b);R.addEventListener("dispose",y);let X=R.textures,fe=R.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=b.version,o.memory.textures++),fe){k.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[te]=[];for(let re=0;re<b.mipmaps.length;re++)k.__webglFramebuffer[te][re]=i.createFramebuffer()}else k.__webglFramebuffer[te]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)k.__webglFramebuffer[te]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(pe)for(let te=0,re=X.length;te<re;te++){let ve=n.get(X[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let te=0;te<X.length;te++){let re=X[te];k.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[te]);let ve=r.convert(re.format,re.colorSpace),Oe=r.convert(re.type),Me=_(re.internalFormat,ve,Oe,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),ye=Ye(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,k.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),qe(i.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Ae(k.__webglFramebuffer[te][re],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else Ae(k.__webglFramebuffer[te],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(b)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let te=0,re=X.length;te<re;te++){let ve=X[te],Oe=n.get(ve),Me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Oe.__webglTexture),qe(Me,ve),Ae(k.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+te,Me,0),g(ve)&&v(Me)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,O.__webglTexture),qe(te,b),b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Ae(k.__webglFramebuffer[re],R,b,i.COLOR_ATTACHMENT0,te,re);else Ae(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,te,0);g(b)&&v(te),t.unbindTexture()}R.depthBuffer&&ne(R)}function ue(R){let b=R.textures;for(let k=0,O=b.length;k<O;k++){let X=b[k];if(g(X)){let fe=w(R),pe=n.get(X).__webglTexture;t.bindTexture(fe,pe),v(fe),t.unbindTexture()}}}let ge=[],Ve=[];function Be(R){if(R.samples>0){if(Ke(R)===!1){let b=R.textures,k=R.width,O=R.height,X=i.COLOR_BUFFER_BIT,fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(R),te=b.length>1;if(te)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let re=R.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);let Oe=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,X,i.NEAREST),l===!0&&(ge.length=0,Ve.length=0,ge.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ge.push(fe),Ve.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);let Oe=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ye(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function P(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function he(R,b){let k=R.colorSpace,O=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==_o&&k!==Fi&&(rt.getTransfer(k)===xt?(O!==kn||X!==An)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",k)),b}function Y(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=le,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aS(i,e){function t(n,s=Fi){let r,o=rt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wu)return i.BYTE;if(n===Au)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Cu)return i.ALPHA;if(n===Ru)return i.RGB;if(n===kn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===Ql)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc||n===ac||n===lc||n===sa||n===cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc||n===_c||n===bc||n===Sc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Cc||n===ra||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cS=`
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

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:lS,fragmentShader:cS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new ju,g={},v=t.getContextAttributes(),w=null,_=null,M=[],S=[],A=new Se,y=null,E=null,L=new tn;L.viewport=new Bt;let N=new tn;N.viewport=new Bt;let U=[L,N],D=new Hl,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=M[ee];return se===void 0&&(se=new Sr,M[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=M[ee];return se===void 0&&(se=new Sr,M[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=M[ee];return se===void 0&&(se=new Sr,M[ee]=se),se.getHandSpace()};function B(ee){let se=S.indexOf(ee.inputSource);if(se===-1)return;let xe=M[se];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let ee=0;ee<M.length;ee++){let se=S[ee];se!==null&&(S[ee]=null,M[ee].disconnect(se))}I=null,F=null,m.reset();for(let ee in g)delete g[ee];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),E!==null){let ee=E.camera;ee.fov=E.fov,ee.zoom=E.zoom,ee.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?ls:ci,Ge=v.stencil?Fr:jn);let ae={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new wn(u.textureWidth,u.textureHeight,{format:kn,type:An,depthTexture:new ts(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new wn(f.framebufferWidth,f.framebufferHeight,{format:kn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(ee){for(let se=0;se<ee.removed.length;se++){let xe=ee.removed[se],Ge=S.indexOf(xe);Ge>=0&&(S[Ge]=null,M[Ge].disconnect(xe))}for(let se=0;se<ee.added.length;se++){let xe=ee.added[se],Ge=S.indexOf(xe);if(Ge===-1){for(let ae=0;ae<M.length;ae++)if(ae>=S.length){S.push(xe),Ge=ae;break}else if(S[ae]===null){S[ae]=xe,Ge=ae;break}if(Ge===-1)break}let Ae=M[Ge];Ae&&Ae.connect(xe)}}let H=new z,j=new z;function J(ee,se,xe){H.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);let Ge=H.distanceTo(j),Ae=se.projectionMatrix.elements,ae=xe.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),ne=Ae[14]/(Ae[10]+1),le=(Ae[9]+1)/Ae[5],de=(Ae[9]-1)/Ae[5],ue=(Ae[8]-1)/Ae[0],ge=(ae[8]+1)/ae[0],Ve=De*ue,Be=De*ge,Ye=Ge/(-ue+ge),Ke=Ye*-ue;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ke),ee.translateZ(Ye),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let P=De+Ye,he=ne+Ye,Y=Ve-Ke,R=Be+(Ge-Ke),b=le*ne/he*P,k=de*ne/he*P;ee.projectionMatrix.makePerspective(Y,R,b,k,P,he),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ie(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let se=ee.near,xe=ee.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),D.near=N.near=L.near=se,D.far=N.far=L.far=xe,(I!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,F=D.far),D.layers.mask=ee.layers.mask|6,L.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Ge=ee.parent,Ae=D.cameras;ie(D,Ge);for(let ae=0;ae<Ae.length;ae++)ie(Ae[ae],Ge);Ae.length===2?J(D,L,N):D.projectionMatrix.copy(L.projectionMatrix),E===null&&ee.isPerspectiveCamera&&(E={camera:ee,fov:ee.fov,zoom:ee.zoom}),me(ee,D,Ge)};function me(ee,se,xe){xe===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=_r*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(ee){return g[ee]};let We=null;function qe(ee,se){if(h=se.getViewerPose(c||o),p=se,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ge=!1;xe.length!==D.cameras.length&&(D.cameras.length=0,Ge=!0);for(let ne=0;ne<xe.length;ne++){let le=xe[ne],de=null;if(f!==null)de=f.getViewport(le);else{let ge=d.getViewSubImage(u,le);de=ge.viewport,ne===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let ue=U[ne];ue===void 0&&(ue=new tn,ue.layers.enable(ne),ue.viewport=new Bt,U[ne]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(de.x,de.y,de.width,de.height),ne===0&&(D.matrix.copy(ue.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ge===!0&&D.cameras.push(ue)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ne=d.getDepthInformation(xe[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<xe.length;ne++){let le=xe[ne].camera;if(le){let de=g[le];de||(de=new Fo,g[le]=de);let ue=d.getCameraImage(le);de.sourceTexture=ue}}}}for(let xe=0;xe<M.length;xe++){let Ge=S[xe],Ae=M[xe];Ge!==null&&Ae!==void 0&&Ae.update(Ge,se,c||o)}We&&We(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),p=null}let Ze=new Qp;Ze.setAnimationLoop(qe),this.setAnimationLoop=function(ee){We=ee},this.dispose=function(){}}},hS=new lt,rm=new je;rm.set(-1,0,0,0,1,0,0,0,1);function uS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Fu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),w=v.envMap,_=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let S=M.program;n.uniformBlockBinding(_,S)}function c(_,M){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",v));let A=M.program;n.updateUBOMapping(_,A);let y=e.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let M=d();_.__bindingPointIndex=M;let S=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=s[_.id],S=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,E=S.length;y<E;y++){let L=S[y];if(Array.isArray(L))for(let N=0,U=L.length;N<U;N++)f(L[N],y,N,A);else f(L,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,M,S,A){if(x(_,M,S,A)===!0){let y=_.__offset,E=_.value;if(Array.isArray(E)){let L=0;for(let N=0;N<E.length;N++){let U=E[N],D=g(U);p(U,_.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,M,S){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,S)}function x(_,M,S,A){let y=_.value,E=M+"_"+S;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let L=A[E];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(_){let M=_.uniforms,S=0,A=16;for(let E=0,L=M.length;E<L;E++){let N=Array.isArray(M[E])?M[E]:[M[E]];for(let U=0,D=N.length;U<D;U++){let I=N[U],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=F.length;B<W;B++){let q=F[B],H=g(q),j=S%A,J=j%H.boundary,ie=j+J;S+=J,ie!==0&&A-ie<H.storage&&(S+=A-ie),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=H.storage}}}let y=S%A;return y>0&&(S+=A-y),_.__size=S,_.__cache={},this}function g(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function pS(){return fi===null&&(fi=new Io(fS,16,16,cs,Jn),fi.name="DFG_LUT",fi.minFilter=nn,fi.magFilter=nn,fi.wrapS=li,fi.wrapT=li,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Uc=class{constructor(e={}){let{canvas:t=_p(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=An}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Ql,Jl,jl]),g=new Set([An,jn,Nr,Fr,$l,Zl]),v=new Uint32Array(4),w=new Int32Array(4),_=new z,M=null,S=null,A=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,N=!1,U=null,D=null,I=null,F=null;this._outputColorSpace=en;let B=0,W=0,q=null,H=-1,j=null,J=new Bt,ie=new Bt,me=null,We=new Je(0),qe=0,Ze=t.width,ee=t.height,se=1,xe=null,Ge=null,Ae=new Bt(0,0,Ze,ee),ae=new Bt(0,0,Ze,ee),De=!1,ne=new Mr,le=!1,de=!1,ue=new lt,ge=new z,Ve=new Bt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Ke(){return q===null?se:1}let P=n;function he(T,V){return t.getContext(T,V)}let Y,R,b,k,O,X,fe,pe,te,re,ve,Oe,Me,ye,ze,Xe,Qe,G,_e,oe,be,Ce,ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),P===null){let V="webgl2";if(P=he(V,T),P===null)throw he(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(T){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),$e("WebGLRenderer: "+T.message),T}function ke(){Y=new b_(P),Y.init(),be=new aS(P,Y),R=new u_(P,Y,e,be),b=new rS(P,Y),R.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),D=P.createFramebuffer(),I=P.createFramebuffer(),F=P.createFramebuffer(),k=new w_(P),O=new qb,X=new oS(P,Y,b,O,R,be,k),fe=new __(L),pe=new Ex(P),Ce=new c_(P,pe),te=new S_(P,pe,k,Ce),re=new E_(P,te,pe,Ce,k),G=new A_(P,R,X),ze=new d_(O),ve=new Wb(L,fe,Y,R,Ce,ze),Oe=new uS(L,O),Me=new Yb,ye=new Qb(Y),Qe=new l_(L,fe,b,re,p,l),Xe=new sS(L,re,R),ce=new dS(P,k,R,b),_e=new h_(P,Y,k),oe=new M_(P,Y,k),k.programs=ve.programs,L.capabilities=R,L.extensions=Y,L.properties=O,L.renderLists=Me,L.shadowMap=Xe,L.state=b,L.info=k}x!==An&&(E=new C_(x,t.width,t.height,a,s,r));let Fe=new Ju(L,P);this.xr=Fe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(Ze,ee,!1))},this.getSize=function(T){return T.set(Ze,ee)},this.setSize=function(T,V,Q=!0){if(Fe.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=T,ee=V,t.width=Math.floor(T*se),t.height=Math.floor(V*se),Q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Ze*se,ee*se).floor()},this.setDrawingBufferSize=function(T,V,Q){Ze=T,ee=V,se=Q,t.width=Math.floor(T*Q),t.height=Math.floor(V*Q),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===An){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,V,Q,$){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,V,Q,$),b.viewport(J.copy(Ae).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,V,Q,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,V,Q,$),b.scissor(ie.copy(ae).multiplyScalar(se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){b.setScissorTest(De=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Q=!0){let $=0;if(T){let Z=!1;if(q!==null){let Te=q.texture.format;Z=m.has(Te)}if(Z){let Te=q.texture.type,Ie=g.has(Te),Ee=Qe.getClearColor(),Pe=Qe.getClearAlpha(),Ue=Ee.r,et=Ee.g,st=Ee.b;Ie?(v[0]=Ue,v[1]=et,v[2]=st,v[3]=Pe,P.clearBufferuiv(P.COLOR,0,v)):(w[0]=Ue,w[1]=et,w[2]=st,w[3]=Pe,P.clearBufferiv(P.COLOR,0,w))}else $|=P.COLOR_BUFFER_BIT}V&&($|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Qe.dispose(),Me.dispose(),ye.dispose(),O.dispose(),fe.dispose(),re.dispose(),Ce.dispose(),ce.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Jd),Fe.removeEventListener("sessionend",Qd),Es.stop()};function Et(T){T.preventDefault(),Pu("WebGLRenderer: Context Lost."),N=!0}function mt(){Pu("WebGLRenderer: Context Restored."),N=!1;let T=k.autoReset,V=Xe.enabled,Q=Xe.autoUpdate,$=Xe.needsUpdate,Z=Xe.type;ke(),k.autoReset=T,Xe.enabled=V,Xe.autoUpdate=Q,Xe.needsUpdate=$,Xe.type=Z}function Hn(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ri(T){let V=T.target;V.removeEventListener("dispose",ri),Zg(V)}function Zg(T){Kg(T),O.remove(T)}function Kg(T){let V=O.get(T).programs;V!==void 0&&(V.forEach(function(Q){ve.releaseProgram(Q)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Q,$,Z,Te){V===null&&(V=Be);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ee=Qg(T,V,Q,$,Z);b.setMaterial($,Ie);let Pe=Q.index,Ue=1;if($.wireframe===!0){if(Pe=te.getWireframeAttribute(Q),Pe===void 0)return;Ue=2}let et=Q.drawRange,st=Q.attributes.position,Le=et.start*Ue,gt=(et.start+et.count)*Ue;Te!==null&&(Le=Math.max(Le,Te.start*Ue),gt=Math.min(gt,(Te.start+Te.count)*Ue)),Pe!==null?(Le=Math.max(Le,0),gt=Math.min(gt,Pe.count)):st!=null&&(Le=Math.max(Le,0),gt=Math.min(gt,st.count));let Ht=gt-Le;if(Ht<0||Ht===1/0)return;Ce.setup(Z,$,Ee,Q,Pe);let Rt,wt=_e;if(Pe!==null&&(Rt=pe.get(Pe),wt=oe,wt.setIndex(Rt)),Z.isMesh)$.wireframe===!0?(b.setLineWidth($.wireframeLinewidth*Ke()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(Z.isLine){let ln=$.linewidth;ln===void 0&&(ln=1),b.setLineWidth(ln*Ke()),Z.isLineSegments?wt.setMode(P.LINES):Z.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else Z.isPoints?wt.setMode(P.POINTS):Z.isSprite&&wt.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let ln=Z._multiDrawStarts,Re=Z._multiDrawCounts,pn=Z._multiDrawCount,ht=Pe?pe.get(Pe).bytesPerElement:1,Bn=O.get($).currentProgram.getUniforms();for(let oi=0;oi<pn;oi++)Bn.setValue(P,"_gl_DrawID",oi),wt.render(ln[oi]/ht,Re[oi])}else if(Z.isInstancedMesh)wt.renderInstances(Le,Ht,Z.count);else if(Q.isInstancedBufferGeometry){let ln=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Re=Math.min(Q.instanceCount,ln);wt.renderInstances(Le,Ht,Re)}else wt.render(Le,Ht)};function jd(T,V,Q,$){U!==null&&T.isNodeMaterial&&U.setObject($,T),le===!0&&ze.setState(T,Q,!1),T.transparent===!0&&T.side===On&&T.forceSinglePass===!1?(T.side=vn,T.needsUpdate=!0,Da(T,V,$),T.side=rs,T.needsUpdate=!0,Da(T,V,$),T.side=On):Da(T,V,$)}this.compile=function(T,V,Q=null){Q===null&&(Q=T),U!==null&&U.renderStart(T,V,Q),S=ye.get(Q),S.init(V),y.push(S),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),T!==Q&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),de=this.localClippingEnabled,le=ze.init(this.clippingPlanes,de),le===!0&&ze.setGlobalState(this.clippingPlanes,V),U!==null&&Xe.render(S.state.shadowsArray,Q,V);let $=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){let Ee=Te[Ie];jd(Ee,Q,V,Z),$.add(Ee)}else jd(Te,Q,V,Z),$.add(Te)}),S=y.pop(),U!==null&&U.renderEnd(),$},this.compileAsync=function(T,V,Q=null){let $=this.compile(T,V,Q);return new Promise(Z=>{function Te(){if($.forEach(function(Ie){let Pe=O.get(Ie).currentProgram;(Pe===void 0||Pe.isReady())&&$.delete(Ie)}),$.size===0){Z(T);return}setTimeout(Te,10)}Y.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ah=null;function jg(T){Ah&&Ah(T)}function Jd(){Es.stop()}function Qd(){Es.start()}let Es=new Qp;Es.setAnimationLoop(jg),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(T){Ah=T,Fe.setAnimationLoop(T),T===null?Es.stop():Es.start()},Fe.addEventListener("sessionstart",Jd),Fe.addEventListener("sessionend",Qd),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(T,V);let Q=Fe.enabled===!0&&Fe.isPresenting===!0,$=E!==null&&(q===null||Q)&&E.begin(L,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(V),V=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,V,q),S=ye.get(T,y.length),S.init(V),S.state.textureUnits=X.getTextureUnits(),y.push(S),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(ue,$n,V.reversedDepth),de=this.localClippingEnabled,le=ze.init(this.clippingPlanes,de),M=Me.get(T,A.length),M.init(),A.push(M),Fe.enabled===!0&&Fe.isPresenting===!0){let Ie=L.xr.getDepthSensingMesh();Ie!==null&&Eh(Ie,V,-1/0,L.sortObjects)}Eh(T,V,0,L.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),L.sortObjects===!0&&M.sort(xe,Ge),Ye=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ye&&Qe.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&ze.beginShadows();let Z=S.state.shadowsArray;if(Xe.render(Z,T,V),le===!0&&ze.endShadows(),($&&E.hasRenderPass())===!1){let Ie=M.opaque,Ee=M.transmissive;if(S.setupLights(),V.isArrayCamera){let Pe=V.cameras;if(Ee.length>0)for(let Ue=0,et=Pe.length;Ue<et;Ue++){let st=Pe[Ue];tf(Ie,Ee,T,st)}Ye&&Qe.render(T);for(let Ue=0,et=Pe.length;Ue<et;Ue++){let st=Pe[Ue];ef(M,T,st,st.viewport)}}else Ee.length>0&&tf(Ie,Ee,T,V),Ye&&Qe.render(T),ef(M,T,V)}q!==null&&W===0&&(X.updateMultisampleRenderTarget(q),X.updateRenderTargetMipmap(q)),$&&E.end(L),T.isScene===!0&&T.onAfterRender(L,T,V),Ce.resetDefaultState(),H=-1,j=null,y.pop(),y.length>0?(S=y[y.length-1],X.setTextureUnits(S.state.textureUnits),le===!0&&ze.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,U!==null&&U.renderEnd()};function Eh(T,V,Q,$){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ne)){$&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);let Ie=re.update(T),Ee=T.material;Ee.visible&&M.push(T,Ie,Ee,Q,Ve.z,null,V)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ne))){let Ie=re.update(T),Ee=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ve.copy(Ie.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){let Pe=Ie.groups;for(let Ue=0,et=Pe.length;Ue<et;Ue++){let st=Pe[Ue],Le=Ee[st.materialIndex];Le&&Le.visible&&M.push(T,Ie,Le,Q,Ve.z,st,V)}}else Ee.visible&&M.push(T,Ie,Ee,Q,Ve.z,null,V)}}let Te=T.children;for(let Ie=0,Ee=Te.length;Ie<Ee;Ie++)Eh(Te[Ie],V,Q,$)}function ef(T,V,Q,$){let{opaque:Z,transmissive:Te,transparent:Ie}=T;S.setupLightsView(Q),le===!0&&ze.setGlobalState(L.clippingPlanes,Q),$&&b.viewport(J.copy($)),Z.length>0&&Fa(Z,V,Q),Te.length>0&&Fa(Te,V,Q),Ie.length>0&&Fa(Ie,V,Q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function tf(T,V,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Le=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new wn(1,1,{generateMipmaps:!0,type:Le?Jn:An,minFilter:as,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Te=S.state.transmissionRenderTarget[$.id],Ie=$.viewport||J;Te.setSize(Ie.z*L.transmissionResolutionScale,Ie.w*L.transmissionResolutionScale);let Ee=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Ue=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(We),qe=L.getClearAlpha(),qe<1&&L.setClearColor(16777215,.5),L.clear(),Ye&&Qe.render(Q);let et=L.toneMapping;L.toneMapping=Kn;let st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),le===!0&&ze.setGlobalState(L.clippingPlanes,$),Fa(T,Q,$),X.updateMultisampleRenderTarget(Te),X.updateRenderTargetMipmap(Te),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let gt=0,Ht=V.length;gt<Ht;gt++){let Rt=V[gt],{object:wt,geometry:ln,material:Re,group:pn}=Rt;if(Re.side===On&&wt.layers.test($.layers)){let ht=Re.side;Re.side=vn,Re.needsUpdate=!0,nf(wt,Q,$,ln,Re,pn),Re.side=ht,Re.needsUpdate=!0,Le=!0}}Le===!0&&(X.updateMultisampleRenderTarget(Te),X.updateRenderTargetMipmap(Te))}L.setRenderTarget(Ee,Pe,Ue),L.setClearColor(We,qe),st!==void 0&&($.viewport=st),L.toneMapping=et}function Fa(T,V,Q){let $=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Te=T.length;Z<Te;Z++){let Ie=T[Z],{object:Ee,geometry:Pe,group:Ue}=Ie,et=Ie.material;et.allowOverride===!0&&$!==null&&(et=$),Ee.layers.test(Q.layers)&&nf(Ee,V,Q,Pe,et,Ue)}}function nf(T,V,Q,$,Z,Te){U!==null&&Z.isNodeMaterial&&U.setObject(T,Z),T.onBeforeRender(L,V,Q,$,Z,Te),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(L,V,Q,$,T,Te),Z.transparent===!0&&Z.side===On&&Z.forceSinglePass===!1?(Z.side=vn,Z.needsUpdate=!0,L.renderBufferDirect(Q,V,$,Z,T,Te),Z.side=rs,Z.needsUpdate=!0,L.renderBufferDirect(Q,V,$,Z,T,Te),Z.side=On):L.renderBufferDirect(Q,V,$,Z,T,Te),T.onAfterRender(L,V,Q,$,Z,Te)}function Da(T,V,Q){V.isScene!==!0&&(V=Be);let $=O.get(T),Z=S.state.lights,Te=S.state.shadowsArray,Ie=Z.state.version,Ee=ve.getParameters(T,Z.state,Te,V,Q,S.state.lightProbeGridArray),Pe=ve.getProgramCacheKey(Ee),Ue=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;let et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=fe.get(T.envMap||$.environment,et),$.envMapRotation=$.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",ri),Ue=new Map,$.programs=Ue);let st=Ue.get(Pe);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===Ie)return rf(T,Ee),st}else Ee.uniforms=ve.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,Q,Ee),T.onBeforeCompile(Ee,L),st=ve.acquireProgram(Ee,Pe),Ue.set(Pe,st),$.uniforms=Ee.uniforms;let Le=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=ze.uniform),rf(T,Ee),$.needsLights=t0(T),$.lightsStateVersion=Ie,$.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=st,$.uniformsList=null,st}function sf(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Or.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function rf(T,V){let Q=O.get(T);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Jg(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let Q=0,$=T.length;Q<$;Q++){let Z=T[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(_))return Z}return null}function Qg(T,V,Q,$,Z){V.isScene!==!0&&(V=Be),X.resetTextureUnits();let Te=V.fog,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,Ee=q===null?L.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:rt.workingColorSpace,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ue=fe.get($.envMap||Ie,Pe),et=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!Q.morphAttributes.position,gt=!!Q.morphAttributes.normal,Ht=!!Q.morphAttributes.color,Rt=Kn;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Rt=L.toneMapping);let wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ln=wt!==void 0?wt.length:0,Re=O.get($),pn=S.state.lights;if(le===!0&&(de===!0||T!==j)){let Tt=T===j&&$.id===H;ze.setState($,T,Tt)}let ht=!1;$.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==pn.state.version||Re.outputColorSpace!==Ee||Z.isBatchedMesh&&Re.batching===!1||!Z.isBatchedMesh&&Re.batching===!0||Z.isBatchedMesh&&Re.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Re.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Re.instancing===!1||!Z.isInstancedMesh&&Re.instancing===!0||Z.isSkinnedMesh&&Re.skinning===!1||!Z.isSkinnedMesh&&Re.skinning===!0||Z.isInstancedMesh&&Re.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Re.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Re.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Re.instancingMorph===!1&&Z.morphTexture!==null||Re.envMap!==Ue||$.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==st||Re.morphTargets!==Le||Re.morphNormals!==gt||Re.morphColors!==Ht||Re.toneMapping!==Rt||Re.morphTargetsCount!==ln||!!Re.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Re.__version=$.version);let Bn=Re.currentProgram;ht===!0&&(Bn=Da($,V,Z),U&&$.isNodeMaterial&&U.onUpdateProgram($,Bn,Re));let oi=!1,Xi=!1,Js=!1,St=Bn.getUniforms(),Gt=Re.uniforms;if(b.useProgram(Bn.program)&&(oi=!0,Xi=!0,Js=!0),$.id!==H&&(H=$.id,Xi=!0),Re.needsLights){let Tt=Jg(S.state.lightProbeGridArray,Z);Re.lightProbeGrid!==Tt&&(Re.lightProbeGrid=Tt,Xi=!0)}if(oi||j!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",T.projectionMatrix),St.setValue(P,"viewMatrix",T.matrixWorldInverse);let $i=St.map.cameraPosition;$i!==void 0&&$i.setValue(P,ge.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Xi=!0,Js=!0)}if(Re.needsLights&&(pn.state.sunShadowMap.length>0&&St.setValue(P,"sunShadowMap",pn.state.sunShadowMap,X),pn.state.directionalShadowMap.length>0&&St.setValue(P,"directionalShadowMap",pn.state.directionalShadowMap,X),pn.state.spotShadowMap.length>0&&St.setValue(P,"spotShadowMap",pn.state.spotShadowMap,X),pn.state.pointShadowMap.length>0&&St.setValue(P,"pointShadowMap",pn.state.pointShadowMap,X)),Z.isSkinnedMesh){St.setOptional(P,Z,"bindMatrix"),St.setOptional(P,Z,"bindMatrixInverse");let Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),St.setValue(P,"boneTexture",Tt.boneTexture,X))}Z.isBatchedMesh&&(St.setOptional(P,Z,"batchingTexture"),St.setValue(P,"batchingTexture",Z._matricesTexture,X),St.setOptional(P,Z,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",Z._indirectTexture,X),St.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",Z._colorsTexture,X));let Yi=Q.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&G.update(Z,Q,Bn),(Xi||Re.receiveShadow!==Z.receiveShadow)&&(Re.receiveShadow=Z.receiveShadow,St.setValue(P,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Gt.envMapIntensity.value=V.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=pS()),Xi){if(St.setValue(P,"toneMappingExposure",L.toneMappingExposure),Re.needsLights&&e0(Gt,Js),Te&&$.fog===!0&&Oe.refreshFogUniforms(Gt,Te),Oe.refreshMaterialUniforms(Gt,$,se,ee,S.state.transmissionRenderTarget[T.id]),Re.needsLights&&Re.lightProbeGrid){let Tt=Re.lightProbeGrid;Gt.probesSH.value=Tt.texture,Gt.probesMin.value.copy(Tt.boundingBox.min),Gt.probesMax.value.copy(Tt.boundingBox.max),Gt.probesResolution.value.copy(Tt.resolution)}Or.upload(P,sf(Re),Gt,X)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Or.upload(P,sf(Re),Gt,X),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(P,"center",Z.center),St.setValue(P,"modelViewMatrix",Z.modelViewMatrix),St.setValue(P,"normalMatrix",Z.normalMatrix),St.setValue(P,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Tt=$.uniformsGroups;for(let $i=0,Qs=Tt.length;$i<Qs;$i++){let af=Tt[$i];ce.update(af,Bn),ce.bind(af,Bn)}}return Bn}function e0(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function t0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,V,Q){let $=O.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),O.get(T.texture).__webglTexture=V,O.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let Q=O.get(T);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Q=0){q=T,B=V,W=Q;let $=null,Z=!1,Te=!1;if(T){let Ee=O.get(T);if(Ee.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(P.FRAMEBUFFER,Ee.__webglFramebuffer),J.copy(T.viewport),ie.copy(T.scissor),me=T.scissorTest,b.viewport(J),b.scissor(ie),b.setScissorTest(me),H=-1;return}else if(Ee.__webglFramebuffer===void 0)X.setupRenderTarget(T);else if(Ee.__hasExternalTextures)X.rebindTextures(T,O.get(T.texture).__webglTexture,O.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let et=T.depthTexture;if(Ee.__boundDepthTexture!==et){if(et!==null&&O.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(T)}}let Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let Ue=O.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[V])?$=Ue[V][Q]:$=Ue[V],Z=!0):T.samples>0&&X.useMultisampledRTT(T)===!1?$=O.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[Q]:$=Ue,J.copy(T.viewport),ie.copy(T.scissor),me=T.scissorTest}else J.copy(Ae).multiplyScalar(se).floor(),ie.copy(ae).multiplyScalar(se).floor(),me=De;if(Q!==0&&($=D),b.bindFramebuffer(P.FRAMEBUFFER,$)&&b.drawBuffers(T,$),b.viewport(J),b.scissor(ie),b.setScissorTest(me),Z){let Ee=O.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ee.__webglTexture,Q)}else if(Te){let Ee=V;for(let Pe=0;Pe<T.textures.length;Pe++){let Ue=O.get(T.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Q,Ee)}}else if(T!==null&&Q!==0){let Ee=O.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ee.__webglTexture,Q)}H=-1};function of(T){let V=O.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=R.textureFormatReadable(T.format),V.__typeReadable=R.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,Q,$,Z,Te,Ie,Ee=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=O.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie]),Pe){b.bindFramebuffer(P.FRAMEBUFFER,Pe);try{let Ue=T.textures[Ee],et=Ue.format,st=Ue.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee);let Le=of(Ue);if(Le.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-$&&Q>=0&&Q<=T.height-Z&&P.readPixels(V,Q,$,Z,be.convert(et),be.convert(st),Te)}finally{let Ue=q!==null?O.get(q).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,V,Q,$,Z,Te,Ie,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=O.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Pe=Pe[Ie]),Pe)if(V>=0&&V<=T.width-$&&Q>=0&&Q<=T.height-Z){b.bindFramebuffer(P.FRAMEBUFFER,Pe);let Ue=T.textures[Ee],et=Ue.format,st=Ue.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee);let Le=of(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,gt),P.bufferData(P.PIXEL_PACK_BUFFER,Te.byteLength,P.STREAM_READ),P.readPixels(V,Q,$,Z,be.convert(et),be.convert(st),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ht=q!==null?O.get(q).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Ht);let Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Sp(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Te),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(gt),P.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Q=0){let $=Math.pow(2,-Q),Z=Math.floor(T.image.width*$),Te=Math.floor(T.image.height*$),Ie=V!==null?V.x:0,Ee=V!==null?V.y:0;X.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Ie,Ee,Z,Te),b.unbindTexture()},this.copyTextureToTexture=function(T,V,Q=null,$=null,Z=0,Te=0){let Ie,Ee,Pe,Ue,et,st,Le,gt,Ht,Rt=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(Q!==null)Ie=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,et=Q.min.y,st=Q.isBox3?Q.min.z:0;else{let Gt=Math.pow(2,-Z);Ie=Math.floor(Rt.width*Gt),Ee=Math.floor(Rt.height*Gt),T.isDataArrayTexture?Pe=Rt.depth:T.isData3DTexture?Pe=Math.floor(Rt.depth*Gt):Pe=1,Ue=0,et=0,st=0}$!==null?(Le=$.x,gt=$.y,Ht=$.z):(Le=0,gt=0,Ht=0);let wt=be.convert(V.format),ln=be.convert(V.type),Re;V.isData3DTexture?(X.setTexture3D(V,0),Re=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(X.setTexture2DArray(V,0),Re=P.TEXTURE_2D_ARRAY):(X.setTexture2D(V,0),Re=P.TEXTURE_2D),b.activeTexture(P.TEXTURE0),b.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let pn=b.getParameter(P.UNPACK_ROW_LENGTH),ht=b.getParameter(P.UNPACK_IMAGE_HEIGHT),Bn=b.getParameter(P.UNPACK_SKIP_PIXELS),oi=b.getParameter(P.UNPACK_SKIP_ROWS),Xi=b.getParameter(P.UNPACK_SKIP_IMAGES);b.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),b.pixelStorei(P.UNPACK_SKIP_ROWS,et),b.pixelStorei(P.UNPACK_SKIP_IMAGES,st);let Js=T.isDataArrayTexture||T.isData3DTexture,St=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let Gt=O.get(T),Yi=O.get(V),Tt=O.get(Gt.__renderTarget),$i=O.get(Yi.__renderTarget);b.bindFramebuffer(P.READ_FRAMEBUFFER,Tt.__webglFramebuffer),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Qs=0;Qs<Pe;Qs++)Js&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,O.get(T).__webglTexture,Z,st+Qs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,O.get(V).__webglTexture,Te,Ht+Qs)),P.blitFramebuffer(Ue,et,Ie,Ee,Le,gt,Ie,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||O.has(T)){let Gt=O.get(T),Yi=O.get(V);b.bindFramebuffer(P.READ_FRAMEBUFFER,I),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,F);for(let Tt=0;Tt<Pe;Tt++)Js?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,Z,st+Tt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,Z),St?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yi.__webglTexture,Te,Ht+Tt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yi.__webglTexture,Te),Z!==0?P.blitFramebuffer(Ue,et,Ie,Ee,Le,gt,Ie,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):St?P.copyTexSubImage3D(Re,Te,Le,gt,Ht+Tt,Ue,et,Ie,Ee):P.copyTexSubImage2D(Re,Te,Le,gt,Ue,et,Ie,Ee);b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else St?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Re,Te,Le,gt,Ht,Ie,Ee,Pe,wt,ln,Rt.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,Te,Le,gt,Ht,Ie,Ee,Pe,wt,Rt.data):P.texSubImage3D(Re,Te,Le,gt,Ht,Ie,Ee,Pe,wt,ln,Rt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Te,Le,gt,Ie,Ee,wt,ln,Rt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Te,Le,gt,Rt.width,Rt.height,wt,Rt.data):P.texSubImage2D(P.TEXTURE_2D,Te,Le,gt,Ie,Ee,wt,ln,Rt);b.pixelStorei(P.UNPACK_ROW_LENGTH,pn),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Bn),b.pixelStorei(P.UNPACK_SKIP_ROWS,oi),b.pixelStorei(P.UNPACK_SKIP_IMAGES,Xi),Te===0&&V.generateMipmaps&&P.generateMipmap(Re),b.unbindTexture()},this.initRenderTarget=function(T){O.get(T).__webglFramebuffer===void 0&&X.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?X.setTextureCube(T,0):T.isData3DTexture?X.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?X.setTexture2DArray(T,0):X.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){B=0,W=0,q=null,b.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var ps={ug:-3.15,eg:0,og:3.15,dg:6.3},ca=.12,hs=2.2,us=[],om=[],ed=[],kc=[],Qu=[],am=[],mS=0;function Ct(i,e,t,n,s,r,o={}){let a={id:`${i}-${++mS}`,kind:e,size:t,position:n,rotation:[0,0,0],color:s,floor:r,...o};return om.push(a),a}function an(i,e,t,n,s,r,o,a){let l=ps[t]??0,c={id:i,name:e,floor:t,color:a,bounds:{minX:n,maxX:n+r,minY:l,maxY:l+(t==="dg"?4.5:3.15),minZ:s,maxZ:s+o}};return us.push(c),c}an("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");an("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");an("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");an("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");an("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");an("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");an("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");an("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[i,e,t]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[s,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])an(t[s],e[s],i,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][s]);let n=i==="ug"?"cellar":"upper";an(`${n}-hall`,i==="ug"?"Kellerflur":"Flur & Lesenische",i,0,5,14,2,"#d1c1aa"),an(`${n}-hall-south`,i==="ug"?"Kellerflur":"Lesenische",i,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,an(`${n}-core`,`Treppenhaus \xB7 ${i==="ug"?"Keller":"OG"}`,i,5.5,0,3,5,"#d2b694")}an("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");an("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";an("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";an("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var kr=an("garden","Garten","garden",-5,-7,24,25,"#91aa6d");kr.bounds.minY=-.15;kr.bounds.maxY=14;var on=(i,e,t,n,s,r,o,a=1,l=!1)=>({a:i,b:e,type:"door",id:t,name:n,threshold:s,rooms:[r,o],swing:a,hingeEnd:l}),Zt=(i,e,t=!1,n=.95,s=2.3)=>({a:i,b:e,type:"window",open:t,sill:n,head:s});function lm(i,e,t,n,s,r){Ct(`${i}-cross-horizontal`,"window-bar",t?[s,.06,.2]:[.2,.06,s],[...n],"#fffdf5",e),Ct(`${i}-cross-vertical`,"window-bar",t?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",e)}function At(i,e,t,n,s,r=[],o=3.15){let a=ps[i],l=i==="ug"?"#b5b5a4":i==="dg"?"#ded0b8":"#e6dfca",c=`${i}-wall-${e?"z":"x"}${t}-${n}`,h=(u,f,p,x,m="wall",g=l)=>{f-u<=.001||x-p<=.001||Ct(c,m,e?[f-u,x-p,ca]:[ca,x-p,f-u],e?[(u+f)/2,a+(p+x)/2,t]:[t,a+(p+x)/2,(u+f)/2],g,i)},d=n;for(let u of[...r].sort((f,p)=>f.a-p.a)){h(d,u.a,0,o);let f=u.type==="door"?0:u.sill,p=u.type==="door"?hs:u.head;h(u.a,u.b,0,f),h(u.a,u.b,p,o);let x=u.b-u.a,m=e?[(u.a+u.b)/2,a+(f+p)/2,t]:[t,a+(f+p)/2,(u.a+u.b)/2];if(kc.push({id:u.id||`${c}-window-${u.a}`,floor:i,type:u.type,open:u.open??!1,horizontal:e,fixed:t,from:u.a,to:u.b,sill:a+f,head:a+p,position:m}),u.type==="door"){let g=u.hingeEnd?u.b:u.a,v=e?[g,a+hs/2,t]:[t,a+hs/2,g],w=u.hingeEnd?-1:1,_=(e?-u.swing*w:u.swing*w)*Math.PI/2;ed.push({id:u.id,name:u.name,threshold:u.threshold,rooms:u.rooms,floor:i,size:[x-.025,hs-.025,.055],position:m,rotation:[0,e?0:Math.PI/2,0],hinge:{position:v,axis:"y",angle:_},color:i==="ug"?"#788c82":"#b99469",open:!1});let M=.035;for(let S of[u.a-M/2,u.b+M/2])Ct(`${u.id}-frame`,"trim",e?[M,hs,.18]:[.18,hs,M],e?[S,a+hs/2,t]:[t,a+hs/2,S],"#f1e6cc",i)}else{u.open||(h(u.a,u.b,f,p,"glass","#a5d2dc"),lm(`${c}-window-${u.a}`,i,e,m,x,p-f));let g=.035;for(let v of[f,p])Ct(`${c}-sill`,"trim",e?[x,g,.18]:[.18,g,x],[m[0],a+v,m[2]],"#fbefcf",i);for(let v of[u.a,u.b])Ct(`${c}-jamb`,"trim",e?[g,p-f,.15]:[.15,p-f,g],e?[v,m[1],t]:[t,m[1],v],"#fbefcf",i)}d=u.b}h(d,s,0,o)}function ds(i,e,t,n,s,r,o,a=ps[e]){Ct(i,"floor",[s,.14,r],[t+s/2,a-.07,n+r/2],o,e)}for(let i of["ug","eg","og","dg"])i==="ug"?ds("cellar-floor",i,0,0,14,12,"#9d9f92"):(ds("west-floor",i,0,0,5.5,12,i==="dg"?"#9d7953":"#b99671"),ds("east-floor",i,8.5,0,5.5,12,i==="dg"?"#a68159":"#b99671"),ds("hall-floor",i,5.5,4,3,8,"#c8b391"));ds("garden-west","garden",-5,-7,5,25,"#83a363",0);ds("garden-east","garden",14,-7,5,25,"#8aab69",0);ds("garden-north","garden",0,-7,14,7,"#8cae6a",0);ds("garden-south","garden",0,12,14,6,"#92ad72",0);Ct("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");Ct("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");At("eg",!0,0,0,14,[on(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),on(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);At("eg",!0,12,0,14,[Zt(3.5,4.9,!0),on(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),Zt(12.45,13.5)]);At("eg",!1,0,0,12,[Zt(1.3,3.1),Zt(9,10.4)]);At("eg",!1,14,0,12,[Zt(1.2,2.4),Zt(8.8,9.5)]);At("eg",!1,5.5,0,12,[on(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),on(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);At("eg",!1,8.5,0,12,[on(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),on(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);At("eg",!0,5,5.5,8.5,[on(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);At("eg",!0,7,0,5.5,[on(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);At("eg",!0,7,8.5,14);At("eg",!1,11,7,12,[on(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),on(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);At("eg",!0,10,11,14);for(let[i,e]of[["hall-stairs",1],["front-door",-1]]){let t=ed.find(n=>n.id===i);t.position[2]+=.095*e,t.hinge.position[2]+=.095*e,t.hinge.angle*=2}for(let i of["ug","og"]){let e=i==="ug",t=e?"cellar":"upper",n=e?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],s=e?[14,17,20,23]:[17,19,22,24];At(i,!1,5.5,0,5),At(i,!1,8.5,0,5),At(i,!0,5,0,14,[on(2.7,4,n[0],us.find(r=>r.id===n[0]).name,s[0],`${t}-hall`,n[0],-1),on(6.3,7.7,`${t}-stairs`,e?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",e?12:14,`${t}-core`,`${t}-hall`,1),on(10,11.4,n[1],us.find(r=>r.id===n[1]).name,s[1],`${t}-hall`,n[1],-1)]),At(i,!0,7,0,5.5,[on(3,4.4,n[2],us.find(r=>r.id===n[2]).name,s[2],`${t}-hall`,n[2],1)]),At(i,!0,7,8.5,14,[on(10,11.4,n[3],us.find(r=>r.id===n[3]).name,s[3],`${t}-hall`,n[3],1)]),At(i,!1,5.5,7,12),At(i,!1,8.5,7,12),At(i,!0,0,0,14,e?[Zt(1.1,2.8,!1,2.1,2.75),Zt(10.5,12,!1,2.1,2.75)]:[Zt(1.2,3.2),Zt(10.5,12)]),At(i,!0,12,0,14,e?[]:[Zt(1.2,3.2),Zt(10.5,12)]),At(i,!1,0,0,12,e?[]:[Zt(1.4,3.1),Zt(8.5,10.2,!0)]),At(i,!1,14,0,12,e?[]:[Zt(1.6,3.3,!0),Zt(9.8,11.2)])}for(let i of["ug","eg","og"]){let e=ps[i],t=10,n=3.15/2/t,s=3/t;for(let r=0;r<t;r++)Ct("stair-left","stairs",[.85,.12,s+.015],[6.125,e+n*(r+1)-.06,3.85-s*(r+.5)],"#bba480",i),Ct("stair-right","stairs",[.85,.12,s+.015],[7.875,e+3.15/2+n*(r+1)-.06,.85+s*(r+.5)],"#bba480",i);Ct("stair-middle-landing","stairs",[2.6,.13,.5],[7,e+3.15/2-.065,.6],"#bba480",i);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])Ct("stair-post","railing",[.035,.65,.035],[r,e+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",i)}var cm=3.1/7,fs=Math.atan(cm),mi=i=>7.45+Math.min(i,14-i)*cm;At("dg",!1,0,0,12,[],1.15);At("dg",!1,14,0,12,[],1.15);At("dg",!1,5.5,0,5,[],3);At("dg",!1,8.5,0,5,[],3);At("dg",!0,5,5.5,8.5,[on(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function hm(i,e){let t=[...new Set([0,14,...Array.from({length:55},(n,s)=>(s+1)*.25),...e.flatMap(n=>[n.a,n.b])])].sort((n,s)=>n-s);for(let n=1;n<t.length;n++){let s=t[n-1],r=t[n],o=Math.min(mi(s),mi(r))-6.3-.025,a=e.find(c=>(s+r)/2>c.a&&(s+r)/2<c.b),l=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[c,h]of l)h>c&&Ct("gable","wall",[r-s,h-c,ca],[(s+r)/2,6.3+(c+h)/2,i],"#ded0b8","dg")}for(let n of e){let s=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,i];kc.push({id:`dg-gable-window-${i}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:i,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:s}),Ct("gable-window","glass",[n.b-n.a,n.head-n.sill,ca],s,"#a5d2dc","dg"),lm(`gable-window-${i}-${n.a}`,"dg",!0,s,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])Ct("gable-window-frame","trim",[n.b-n.a,.035,.18],[s[0],6.3+r,i],"#fbefcf","dg");for(let r of[n.a,n.b])Ct("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,s[1],i],"#fbefcf","dg")}for(let n of[3.5,10.5])Ct("gable-sloping-cap","wall",[7/Math.cos(fs),.25,ca],[n,mi(n)-.105,i],"#ded0b8","dg",{rotation:[0,0,n<7?fs:-fs]})}hm(0,[Zt(1.8,3.2,!1,.6,1.65),Zt(10.5,12,!1,.6,1.65)]);hm(12,[Zt(6,8,!1,.65,1.7)]);function ha(i,e,t,n,s){Ct(i,"roof",[(t-e)/Math.cos(fs),.14,s-n],[(e+t)/2,mi((e+t)/2),(n+s)/2],"#98705b","dg",{rotation:[0,0,e>=7?-fs:fs]})}ha("roof-west-front",0,7,0,7.25);ha("roof-west-back",0,7,9.15,12);ha("roof-west-eave",0,.35,7.25,9.15);ha("roof-west-upper",2,7,7.25,9.15);ha("roof-east",7,14,0,12);kc.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,mi(1.175),8.2]});for(let i of[7.25,9.15])Ct("roof-window-frame","trim",[1.65/Math.cos(fs),.055,.055],[1.175,mi(1.175),i],"#f3e2bf","dg",{rotation:[0,0,fs]});for(let i of[.35,2])Ct("roof-window-frame","trim",[.055,.055,1.9],[i,mi(i),8.2],"#f3e2bf","dg");for(let i of[6.75,10.3]){for(let e of[3.4,10.6])Ct("attic-post","beam",[.16,mi(e)-6.3,.16],[e,(6.3+mi(e))/2,i],"#74543a","dg");Ct("attic-crossbeam","beam",[8,.16,.16],[7,8.7,i],"#74543a","dg")}function td(i){return us.find(e=>e.id===i)?.floor||"garden"}function ot(i,e,t,n,s,r,o){return Ct(`${i}-${e}`,t,n,s,r,td(i),{roomId:i,...o})}function ms(i,e,t,n,s,r,o,a,l={}){let c={id:`${i}-${e}`,name:e,roomId:i,floor:td(i),x:t,z:n,width:s,depth:r,height:o,kind:a,...l};return am.push(c),c}function Di(i){return ps[td(i)]??0}function En(i,e,t,n,s,r,o=.78,a="#be986a"){ms(i,e,t,n,s,r,o,"table",{underClearance:o-.065});let l=Di(i);ot(i,e,"tabletop",[s,.065,r],[t+s/2,l+o-.0325,n+r/2],a);for(let c of[t+.07,t+s-.07])for(let h of[n+.07,n+r-.07])ot(i,e,"table-leg",[.045,o-.065,.045],[c,l+(o-.065)/2,h],"#806548")}function yn(i,e,t,n,s=.6,r=.65,o="#80998c",a="south"){let l=Di(i),c=.49;ms(i,e,t,n,s,r,.94,"chair",{underClearance:.435}),ot(i,e,"chair-seat",[s,.055,r],[t+s/2,l+c-.0275,n+r/2],o);for(let d of[t+.055,t+s-.055])for(let u of[n+.055,n+r-.055])ot(i,e,"chair-leg",[.035,.435,.035],[d,l+.2175,u],"#856c4c");let h=a==="south"||a==="north";ot(i,e,"chair-back",h?[s,.45,.045]:[.045,.45,r],[h?t+s/2:a==="east"?t+.0225:t+s-.0225,l+.715,h?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function _t(i,e,t,n,s,r,o=1.7,a=null,l="#b28c60",c=!1){let h=Di(i);if(ms(i,e,t,n,s,r,o,"cabinet",{back:a}),c){let d=s>=r;for(let u of[0,(d?s:r)-.045])ot(i,e,"shelf-side",d?[.045,o,r]:[s,o,.045],[d?t+u+.0225:t+s/2,h+o/2,d?n+r/2:n+u+.0225],l);for(let u=.06;u<o;u+=.43)ot(i,e,"shelf-board",[s,.035,r],[t+s/2,h+u,n+r/2],l);for(let u=0;u<5;u++){let f=.43*(u%Math.max(1,Math.floor(o/.43)))+.18;ot(i,`${e}-books`,"books",d?[.24,.23,r*.72]:[s*.72,.23,.24],[d?t+s*(.2+.14*u):t+s/2,h+f,d?n+r/2:n+r*(.2+.14*u)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][u])}}else{ot(i,e,"cabinet",[s,o,r],[t+s/2,h+o/2,n+r/2],l);let d=s>=r;for(let u=0;u<Math.max(1,Math.floor((d?s:r)/.55));u++){let f=Math.max(1,Math.floor((d?s:r)/.55)),p=d?[t+(u+.5)*s/f,h+o*.56,n+r-.012]:[t+s-.012,h+o*.56,n+(u+.5)*r/f];ot(i,`${e}-handle`,"detail",d?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function dn(i,e,t,n,s,r,o,a){ms(i,e,t,n,s,r,o,"solid"),ot(i,e,"furniture",[s,o,r],[t+s/2,Di(i)+o/2,n+r/2],a)}function Vc(i,e,t,n=.3,s=1.05){let r=Di(i);ms(i,"Pflanze",e-n,t-n,n*2,n*2,s,"plant"),ot(i,"pot","plant-pot",[n,.3,n],[e,r+.15,t],"#b68460"),ot(i,"stem","plant-stem",[.035,s*.7,.035],[e,r+s*.47,t],"#627a48");for(let o=0;o<4;o++)ot(i,"leaf","foliage",[n*.85,.07,n*.52],[e+Math.cos(o*1.8)*n*.45,r+s*(.65+.09*o),t+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function um(i,e,t,n,s){let r=Di(i);ms(i,"Bett",e,t,n,s,.75,"bed"),ot(i,"bed-base","bed",[n,.3,s],[e+n/2,r+.24,t+s/2],"#99704e"),ot(i,"mattress","bed",[n-.06,.2,s-.06],[e+n/2,r+.49,t+s/2],"#ede1cc");let o=s>=n;ot(i,"headboard","bed",o?[n,.85,.075]:[.075,.85,s],[o?e+n/2:e+.04,r+.425,o?t+.04:t+s/2],"#a47c56"),ot(i,"blanket","bed",o?[n-.08,.06,s*.6]:[n*.6,.06,s-.08],[o?e+n/2:e+n*.65,r+.62,o?t+s*.65:t+s/2],i==="nursery"?"#87b2b0":"#b58e9b"),ot(i,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,s*.7],[o?e+n/2:e+.4,r+.66,o?t+.4:t+s/2],"#fff1d8")}function dm(i,e,t){let n=Di(i);ms(i,"Toilette",e,t,.78,.6,.82,"sanitary"),ot(i,"cistern","sanitary",[.18,.82,.6],[e+.69,n+.41,t+.3],"#f5eee0"),ot(i,"toilet-base","sanitary",[.43,.36,.35],[e+.34,n+.18,t+.3],"#ebe7db"),ot(i,"toilet-seat","sanitary",[.57,.07,.51],[e+.315,n+.435,t+.3],"#faf5e7")}function fm(i,e,t,n,s){dn(i,"Waschtisch",e,t,n,s,.76,"#9baeb1"),ot(i,"basin","sanitary",[n,.09,s],[e+n/2,Di(i)+.805,t+s/2],"#f7eedc")}var Mt=(i,e,t)=>({axis:i,value:e,edge:t});En("dining","Esstisch",1.8,2.3,1.8,2.4);for(let i of[2.5,4])yn("dining",`Stuhl-west-${i}`,.85,i,.65,.6,"#ba9664","east"),yn("dining",`Stuhl-east-${i}`,3.95,i,.65,.6,"#ba9664","west");yn("dining","Stuhl-nord",2.4,1.3);yn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");_t("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,Mt("z",0,"min"));_t("dining","Sideboard",.07,5.35,.55,1.3,.85,Mt("x",0,"min"));Vc("dining",1.2,6.3);dn("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");dn("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");_t("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,Mt("x",0,"min"),"#d9ded1");En("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");yn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);ot("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let i of[8.2,8.65])ot("kitchen","hob","detail",[.32,.018,.32],[.385,.925,i],"#4e5b5a");dn("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");ot("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let i of[3.05,5.45])ot("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,i+.125],"#5d8271");for(let i=0;i<3;i++)ot("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*i],"#8aa48b");En("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");_t("living","TV-Bank",8.57,2.65,.33,1.75,.5,Mt("x",8.5,"min"),"#b69871");ot("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");_t("living","Buecherregal",9,.07,2,.5,1.85,Mt("z",0,"min"),"#b99466",!0);yn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");Vc("living",13.4,6.4,.3);_t("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,Mt("x",5.5,"min"));En("hall","Sitzbank",8,10.35,.43,1,.45);Vc("hall",5.95,11.5,.23);_t("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,Mt("z",12,"max"),"#a5ad92");En("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);_t("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,Mt("z",7,"min"));dm("guest-wc",13.15,8.1);fm("guest-wc",12.4,7.07,.9,.43);_t("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,Mt("z",10,"max"),"#aec0b6");_t("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,Mt("z",10,"min"),"#af9c76",!0);_t("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,Mt("x",14,"max"));En("workshop","Werkbank",.6,.07,3.5,.8,.87);_t("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,Mt("x",5.5,"max"),"#929c8b");yn("workshop","Hocker",1.8,1.4);dn("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let i of[8.57,9.7])dn("laundry","Waschgeraet",i,.07,1,.98,.92,"#dfe3d8"),ot("laundry","Waschfenster","detail",[.58,.58,.024],[i+.5,-3.15+.46,1.06],"#729498");En("laundry","Waeschetisch",12,.07,1.8,.63);dn("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");En("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");_t("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,Mt("x",0,"min"),"#b49569",!0);_t("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,Mt("x",5.5,"max"),"#b49569",!0);_t("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,Mt("z",12,"max"));dn("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");dn("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");_t("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,Mt("x",8.5,"min"),"#7c9790");_t("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,Mt("z",12,"max"));_t("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,Mt("x",0,"min"));_t("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,Mt("x",14,"max"));um("bedroom",1.65,.07,2,2.55);dn("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");dn("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");_t("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,Mt("x",0,"min"),"#b8aa92");En("office","Schreibtisch",9,.07,2.8,.8);yn("office","Schreibtischstuhl",10,1.3);ot("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");_t("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,Mt("x",14,"max"),"#b7986e",!0);_t("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,Mt("x",14,"max"),"#b7986e",!0);um("nursery",.07,7.07,2.4,1.2);En("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);yn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");_t("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,Mt("x",5.5,"max"),"#87a6a0",!0);for(let[i,e,t]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])dn("nursery",`Bauklotz-${i}`,e,t,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][i]);ms("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");ot("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let i of[7.12,8.02])ot("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,i],"#f2efe3");for(let i of[11.8,13.88])ot("bathroom","bath-end","sanitary",[.1,.58,1],[i,3.5,7.57],"#f2efe3");fm("bathroom",8.57,9,.48,1.15);dm("bathroom",13.15,11.3);_t("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,Mt("z",12,"max"),"#a6bab6");yn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");_t("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,Mt("x",8.5,"max"),"#ad8e61",!0);_t("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,Mt("x",0,"min"));_t("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,Mt("x",14,"max"));for(let[i,e,t,n,s]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])dn("attic-west",`Koffer-${i}`,e,t,n,s,.48+i*.13,["#9b7658","#c3a071","#889687"][i]);En("attic-east","Basteltisch",9.15,.07,2.4,1.1);yn("attic-east","Bastelstuhl",9.95,1.55);_t("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);En("attic","Dachtisch",8.3,8.1,1.8,1);dn("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");dn("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");_t("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,Mt("z",12,"max"));En("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let i of[5.15,6.65])yn("garden",`Terrassenstuhl-N-${i}`,i,-3.25,.6,.65,"#9daa84"),yn("garden",`Terrassenstuhl-S-${i}`,i,-1,.6,.65,"#9daa84","north");yn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");yn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");En("garden","Gartenbank",-4,4,2.5,.65,.52);dn("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let i=0;i<4;i++)for(let e of[16.1,16.9])Vc("garden",e,5.4+.9*i,.18,1.02);for(let[i,e,t]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){ot("garden","tree-trunk","tree",[.35,3.3,.35],[i,1.65,e],"#816442");for(let n=0;n<3;n++)ot("garden","tree-crown","foliage",[t*1.25,t*.9,t*1.1],[i+Math.cos(n*2.1)*.45,3.1+n*.35,e+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let i of[-7,18])Ct("boundary-hedge","boundary",[24,1.5,.25],[7,.75,i],"#6d8d59","garden");for(let i of[-5,19])Ct("boundary-hedge","boundary",[.25,1.5,25],[i,.75,5.5],"#6d8d59","garden");function Ut(i,e){let t=Di(i);for(let[n,s,r,o=!1]of e)Qu.push({id:`${i}-star-${Qu.filter(a=>a.roomId===i).length+1}`,roomId:i,x:n,y:t+s,z:r,radius:o?.14:.22,under:o})}Ut("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);Ut("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);Ut("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);Ut("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);Ut("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);Ut("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);Ut("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);Ut("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);Ut("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);Ut("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);Ut("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);Ut("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);Ut("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);Ut("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);Ut("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);Ut("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);Ut("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);Ut("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);Ut("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);Ut("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);Ut("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);Ut("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);Ut("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[i,e]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])Ut(i,[[7,1.4,2.2],[7,2.5,3.3]]);var ut={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:us,doors:ed,obstacles:om,openings:kc,furniture:am,collectibles:Qu,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function ua(i){let{x:e,y:t,z:n}=i;if(![e,t,n].every(Number.isFinite))return null;let s=o=>{let a=o.bounds;return e>=a.minX&&e<a.maxX&&t>=a.minY-.025&&t<a.maxY&&n>=a.minZ&&n<a.maxZ},r=us.find(o=>o.floor!=="garden"&&s(o));return r?r.floor==="dg"&&t>mi(Math.max(0,Math.min(14,e)))+.12?s(kr)?kr:null:r:s(kr)?kr:null}function Vr(i,e=!1){let t=[...i.rotation||[0,0,0]],n=[...i.position];if(e&&i.hinge){let s=i.hinge.position,r=i.hinge.angle,o=n[0]-s[0],a=n[2]-s[2];n[0]=s[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=s[2]-Math.sin(r)*o+Math.cos(r)*a,t[1]+=r}return{size:[...i.size],position:n,rotation:t}}var gS=["classic","glider","dart","stunt"];var mm={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function xS(i,e){let t=[0,1,2].map(n=>i.reduce((s,r)=>s+r[n],0)/i.length);return e.map(n=>{let[s,r,o]=n.map(d=>i[d]),a=r.map((d,u)=>d-s[u]),l=o.map((d,u)=>d-s[u]);return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]].reduce((d,u,f)=>d+u*(s[f]-t[f]),0)<0?[...n].reverse():n})}function Gc(i,e,t,n,s,r=0,o=0){let a=e.length,l=[-1,1].flatMap(h=>e.map(([d,u])=>[d*s,(o+Math.abs(d)*r+h*t/2)*s,u*s])),c=[Array.from({length:a},(h,d)=>d),Array.from({length:a},(h,d)=>d+a)];for(let h=0;h<a;h++)c.push([h,(h+1)%a,(h+1)%a+a,h+a]);return{id:i,kind:"convex",vertices:l,faces:xS(l,c),color:n}}function pm(i,e,t,n=20){return Array.from({length:n},(s,r)=>{let o=r*Math.PI*2/n;return[i/2*Math.cos(o),t+e/2*Math.sin(o)]})}function vS(i,e){let t=-e.length/2,n=e.length/2,s=e.span/2,r=[[0,t],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[e.tail/2,n],[-e.tail/2,n]];return i==="dart"?{wing:[[0,t+.015],[s,n-.025],[0,n-.025]],fuselage:r,tail:o}:i==="glider"?{wing:Array.from({length:17},(a,l)=>{let c=-Math.PI/2+l*Math.PI/16;return[l===0||l===16?0:s*Math.cos(c),-.015+.105*Math.sin(c)]}),fuselage:pm(.056,e.length,0),tail:pm(e.tail,.08,n-.04)}:i==="stunt"?{wing:[[0,-.065],[s,-.065],[s,.045],[0,.045]],fuselage:[[0,t],[.028,t+.04],[.028,n-.008],[-.028,n-.008],[-.028,t+.04]],tail:[[-e.tail/2,n-.064],[e.tail/2,n-.064],[e.tail/2,n],[-e.tail/2,n]]}:{wing:[[0,t+.025],[s,.035],[s,.145],[0,n-.035]],fuselage:r,tail:[[-e.tail/2,n-.05],[e.tail/2,n-.05],[e.tail*.38,n],[-e.tail*.38,n]]}}function gs(i="classic",e=1){i=gS.includes(i)?i:"classic",e=Number.isFinite(Number(e))?Math.max(.55,Math.min(1.5,Number(e))):1;let t=mm[i],n=vS(i,t),s=e*.78,r=[Gc("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,t.color,s,.045),Gc("right-wing",n.wing,.008,t.color,s,.045),Gc("fuselage",n.fuselage,.044,16768916,s,0,-.014),Gc("tail",n.tail,.008,t.color,s,0,.011)];return{form:i,size:e,span:t.span*s,length:t.length*s,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function gm(i="classic",e=1){let t=gs(i,e),n=mm[t.form],s=t.size;return{speed:1.65*n.speed*(.94+.06*s),turnRate:1.8*n.turn/Math.pow(s,.65),pitchRate:.8/Math.pow(s,.35),sinkRate:.095*n.sink/Math.pow(s,.6),energyLoss:.035*n.sink/Math.pow(s,.55),glideRatio:1.65/.095*n.speed*(.94+.06*s)/n.sink*Math.pow(s,.6)}}function xm({position:i,input:e,heading:t,speed:n,tuning:s,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(e.pitch)>.25&&Math.abs(e.steer)<.35),l=r?e.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-i.x)*2:Math.sin(t)*n,z:a?(r.z-i.z)*2:-Math.cos(t)*n,targetVertical:-s.sinkRate+e.pitch*s.pitchRate+l+(o?1.9:0)}}var vs=class i{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new C);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new C);let n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new i);let n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],p=n[8],x=s[0],m=s[1],g=s[2],v=s[3],w=s[4],_=s[5],M=s[6],S=s[7],A=s[8];return r[0]=o*x+a*v+l*M,r[1]=o*m+a*w+l*S,r[2]=o*g+a*_+l*A,r[3]=c*x+h*v+d*M,r[4]=c*m+h*w+d*S,r[5]=c*g+h*_+d*A,r[6]=u*x+f*v+p*M,r[7]=u*m+f*w+p*S,r[8]=u*g+f*_+p*A,t}scale(e,t){t===void 0&&(t=new i);let n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new C);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new i);let t=3,n=6,s=yS,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,l=a,c,h=n,d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=h;do d=h-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let u=s[r+n*o]/s[r+n*r];c=h;do d=h-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,l=s+s,c=t*o,h=t*a,d=t*l,u=n*a,f=n*l,p=s*l,x=r*o,m=r*a,g=r*l,v=this.elements;return v[0]=1-(u+p),v[1]=h-g,v[2]=d+m,v[3]=h+g,v[4]=1-(c+p),v[5]=f-x,v[6]=d-m,v[7]=f+x,v[8]=1-(c+u),this}transpose(e){e===void 0&&(e=new i);let t=this.elements,n=e.elements,s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}},yS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],C=class i{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new i);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new i(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new i(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new vs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new i),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new i),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let s=_S,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=bS;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(vm),vm.almostEquals(e,t)}clone(){return new i(this.x,this.y,this.z)}};C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);var _S=new C,bS=new C,vm=new C,Dn=class i{constructor(e){e===void 0&&(e={}),this.lowerBound=new C,this.upperBound=new C,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,ym),c=ym),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new i().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,l){let c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){let n=_m,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=_m,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(p<0||f>p)}},ym=new C,_m=[new C,new C,new C,new C,new C,new C,new C,new C],$c=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Zc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}return this}},Nt=class i{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new C),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=SS,s=MS;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+s*c-r*l,t.y=s*h+o*l+r*a-n*c,t.z=r*h+o*c+n*l-s*a,t.w=o*h-n*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new C);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*s,d=c*s+l*n-o*r,u=c*r+o*s-a*n,f=-o*n-a*s-l*r;return t.x=h*c+f*-o+d*-l-u*-a,t.y=d*c+f*-a+u*-o-h*-l,t.z=u*c+f*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,h=e.z,d=e.w,u,f,p,x,m;return f=s*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),p=Math.sin(u),x=Math.sin((1-t)*u)/p,m=Math.sin(t*u)/p):(x=1-t,m=t),n.x=x*s+m*l,n.y=x*r+m*c,n.z=x*o+m*h,n.w=x*a+m*d,n}integrate(e,t,n,s){s===void 0&&(s=new i);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return s.x+=u*(r*d+o*h-a*c),s.y+=u*(o*d+a*l-r*h),s.z+=u*(a*d+r*c-o*l),s.w+=u*(-r*l-o*c-a*h),s}},SS=new C,MS=new C,wS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Ne=class i{constructor(e){e===void 0&&(e={}),this.id=i.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Ne.idCounter=0;Ne.types=wS;var vt=class i{constructor(e){e===void 0&&(e={}),this.position=new C,this.quaternion=new Nt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return i.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return i.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),n.vsub(e,s),t.conjugate(bm),bm.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new C),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new C),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),t.w*=-1,t.vmult(n,s),t.w*=-1,s}},bm=new Nt,ga=class i extends Ne{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Ne.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let s=new C;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new C;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,t)}static computeNormal(e,t,n,s){let r=new C,o=new C;t.vsub(e,o),n.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,r,o,a,l,c){let h=new C,d=-1,u=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),r.vmult(h,h);let x=h.dot(o);x>u&&(u=x,d=p)}let f=[];for(let p=0;p<n.faces[d].length;p++){let x=n.vertices[n.faces[d][p]],m=new C;m.copy(x),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,s,r,o,a,l){let c=new C,h=new C,d=new C,u=new C,f=new C,p=new C,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);let v=m.testSepAxis(c,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let v=0;v<g;v++){let w=a?a[v]:v;c.copy(m.faceNormals[w]),n.vmult(c,c);let _=m.testSepAxis(c,e,t,n,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],h);let v=m.testSepAxis(h,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{let g=l?l.length:e.faces.length;for(let v=0;v<g;v++){let w=l?l[v]:v;h.copy(e.faceNormals[w]),r.vmult(h,h);let _=m.testSepAxis(h,e,t,n,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],f),u.cross(f,p),!p.almostZero()){p.normalize();let w=m.testSepAxis(p,e,t,n,s,r);if(w===!1)return!1;w<x&&(x=w,o.copy(p))}}return s.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,s,r,o){let a=this;i.project(a,e,n,s,nd),i.project(t,e,r,o,id);let l=nd[0],c=nd[1],h=id[0],d=id[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(e,t){let n=new C,s=new C;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,r,o,a){let l=new C,c=new C,h=new C,d=new C,u=new C,f=new C,p=new C,x=new C,m=this,g=[],v=s,w=g,_=-1,M=Number.MAX_VALUE;for(let L=0;L<m.faces.length;L++){l.copy(m.faceNormals[L]),n.vmult(l,l);let N=l.dot(e);N<M&&(M=N,_=L)}if(_<0)return;let S=m.faces[_];S.connectedFaces=[];for(let L=0;L<m.faces.length;L++)for(let N=0;N<m.faces[L].length;N++)S.indexOf(m.faces[L][N])!==-1&&L!==_&&S.connectedFaces.indexOf(L)===-1&&S.connectedFaces.push(L);let A=S.length;for(let L=0;L<A;L++){let N=m.vertices[S[L]],U=m.vertices[S[(L+1)%A]];N.vsub(U,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[_]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(N),n.vmult(f,f),t.vadd(f,f);let D=S.connectedFaces[L];p.copy(this.faceNormals[D]);let I=this.getPlaneConstantOfFace(D);x.copy(p),n.vmult(x,x);let F=I-x.dot(t);for(this.clipFaceAgainstPlane(v,w,x,F);v.length;)v.shift();for(;w.length;)v.push(w.shift())}p.copy(this.faceNormals[_]);let y=this.getPlaneConstantOfFace(_);x.copy(p),n.vmult(x,x);let E=y-x.dot(t);for(let L=0;L<v.length;L++){let N=x.dot(v[L])+E;if(N<=r&&(console.log(`clamped: depth=${N} to minDist=${r}`),N=r),N<=o){let U=v[L];if(N<=1e-6){let D={point:U,normal:x,depth:N};a.push(D)}}}}clipFaceAgainstPlane(e,t,n,s){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+s;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+s,r<0)if(o<0){let d=new C;d.copy(c),t.push(d)}else{let d=new C;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){let d=new C;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new C);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){let r=this.vertices,o,a,l,c,h,d,u=new C;for(let f=0;f<r.length;f++){u.copy(r[f]),t.vmult(u,u),e.vadd(u,u);let p=u;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new C);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<n;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new C;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=t[n[a][0]],h=new C;e.vsub(c,h);let d=l.dot(h),u=new C;o.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,s,r){let o=e.vertices.length,a=ES,l=0,c=0,h=TS,d=e.vertices;h.setZero(),vt.vectorToLocalFrame(n,s,t,a),vt.pointToLocalFrame(n,s,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},nd=[],id=[],AS=new C,ES=new C,TS=new C,xa=class i extends Ne{constructor(e){super({type:Ne.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=C,r=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new ga({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new C),i.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)xs.set(r[o][0],r[o][1],r[o][2]),t.vmult(xs,xs),e.vadd(xs,xs),n(xs.x,xs.y,xs.z)}calculateWorldAABB(e,t,n,s){let r=this.halfExtents;gi[0].set(r.x,r.y,r.z),gi[1].set(-r.x,r.y,r.z),gi[2].set(-r.x,-r.y,r.z),gi[3].set(-r.x,-r.y,-r.z),gi[4].set(r.x,-r.y,-r.z),gi[5].set(r.x,r.y,-r.z),gi[6].set(-r.x,r.y,-r.z),gi[7].set(r.x,-r.y,r.z);let o=gi[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=gi[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},xs=new C,gi=[new C,new C,new C,new C,new C,new C,new C,new C],xd={DYNAMIC:1,STATIC:2,KINEMATIC:4},vd={AWAKE:0,SLEEPY:1,SLEEPING:2},nt=class i extends Zc{constructor(e){e===void 0&&(e={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new C,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new C,this.force=new C;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?i.STATIC:i.DYNAMIC,typeof e.type==typeof i.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Nt,this.initQuaternion=new Nt,this.previousQuaternion=new Nt,this.interpolatedQuaternion=new Nt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new C,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new vs,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new vs,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new C(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new C(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,e===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(i.sleepyEvent)):t===i.SLEEPY&&n>s?this.wakeUp():t===i.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new C),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new C),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}addShape(e,t,n){let s=new C,r=new Nt;return t&&s.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,s=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,r=CS,o=RS,a=this.quaternion,l=this.aabb,c=IS;for(let h=0;h!==s;h++){let d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=PS,s=LS;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=FS;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=DS,s=BS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=t,s=US;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=OS;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=zS,s=kS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){let e=VS;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),xa.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new C;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let p=d.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,v=l.z*x.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*v),r.y+=e*(p[3]*m+p[4]*g+p[5]*v),r.z+=e*(p[6]*m+p[7]*g+p[8]*v),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};nt.idCounter=0;nt.COLLIDE_EVENT_NAME="collide";nt.DYNAMIC=xd.DYNAMIC;nt.STATIC=xd.STATIC;nt.KINEMATIC=xd.KINEMATIC;nt.AWAKE=vd.AWAKE;nt.SLEEPY=vd.SLEEPY;nt.SLEEPING=vd.SLEEPING;nt.wakeupEvent={type:"wakeup"};nt.sleepyEvent={type:"sleepy"};nt.sleepEvent={type:"sleep"};var CS=new C,RS=new Nt,IS=new Dn,PS=new vs,LS=new vs,NS=new vs,FS=new C,DS=new C,BS=new C,US=new C,OS=new C,zS=new C,kS=new C,VS=new C,Kc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&nt.STATIC)!==0||e.sleepState===nt.SLEEPING)&&((t.type&nt.STATIC)!==0||t.sleepState===nt.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){let r=GS;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){let n=HS,s=WS,r=qS,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(s[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new C;e.position.vsub(t.position,n);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},GS=new C;new C;new Nt;new C;var HS={keys:[]},WS=[],qS=[];new C;var VT=new C;new C;var ld=class extends Kc{constructor(){super()}collisionPairs(e,t,n){let s=e.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},Wr=class{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},Nm,Fm,Dm,Bm,Um,Om,zm,yd={CLOSEST:1,ANY:2,ALL:4};Nm=Ne.types.SPHERE;Fm=Ne.types.PLANE;Dm=Ne.types.BOX;Bm=Ne.types.CYLINDER;Um=Ne.types.CONVEXPOLYHEDRON;Om=Ne.types.HEIGHTFIELD;zm=Ne.types.TRIMESH;var Vn=class i{get[Nm](){return this._intersectSphere}get[Fm](){return this._intersectPlane}get[Dm](){return this._intersectBox}get[Bm](){return this._intersectConvex}get[Um](){return this._intersectConvex}get[Om](){return this._intersectHeightfield}get[zm](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new C),t===void 0&&(t=new C),this.from=e.clone(),this.to=t.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Wr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||i.ANY,this.result=t.result||new Wr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Sm),sd.length=0,e.broadphase.aabbQuery(e,Sm,sd),this.intersectBodies(sd),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=XS,r=YS;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){let r=this.from;if(cM(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);t.vmult(c,c);let h=new C;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new C,x=new C,m=new C;o.vsub(n,p);let g=-c.dot(p)/f;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;let o=$S;o.from.copy(this.from),o.to.copy(this.to),vt.pointToLocalFrame(n,t,o.from,o.from),vt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=ZS,l,c,h,d;l=c=0,h=d=e.data.length-1;let u=new Dn;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),vt.pointToWorldFrame(n,t,e.pillarOffset,Hc),this._intersectConvex(e.pillarConvex,t,Hc,s,r,Mm),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),vt.pointToWorldFrame(n,t,e.pillarOffset,Hc),this._intersectConvex(e.pillarConvex,t,Hc,s,r,Mm)}}}_intersectSphere(e,t,n,s,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=KS,p=jS;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{let x=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){let a=JS,l=wm,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:h.length,v=this.result;for(let w=0;!v.shouldStop&&w<g;w++){let _=c?c[w]:w,M=h[_],S=u[_],A=t,y=n;l.copy(d[M[0]]),A.vmult(l,l),l.vadd(y,l),l.vsub(p,l),A.vmult(S,a);let E=f.dot(a);if(Math.abs(E)<this.precision)continue;let L=a.dot(l)/E;if(!(L<0)){f.scale(L,Tn),Tn.vadd(p,Tn),Qn.copy(d[M[0]]),A.vmult(Qn,Qn),y.vadd(Qn,Qn);for(let N=1;!v.shouldStop&&N<M.length-1;N++){xi.copy(d[M[N]]),vi.copy(d[M[N+1]]),A.vmult(xi,xi),A.vmult(vi,vi),y.vadd(xi,xi),y.vadd(vi,vi);let U=Tn.distanceTo(p);!(i.pointInTriangle(Tn,Qn,xi,vi)||i.pointInTriangle(Tn,xi,Qn,vi))||U>m||this.reportIntersection(a,Tn,r,s,_)}}}}_intersectTrimesh(e,t,n,s,r,o){let a=tM,l=aM,c=lM,h=wm,d=nM,u=iM,f=sM,p=oM,x=rM,m=e.indices;e.vertices;let g=this.from,v=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(t),vt.vectorToLocalFrame(n,t,w,d),vt.pointToLocalFrame(n,t,g,u),vt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();let _=u.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){let A=l[M];e.getNormal(A,a),e.getVertex(m[A*3],Qn),Qn.vsub(u,h);let y=d.dot(a),E=a.dot(h)/y;if(E<0)continue;d.scale(E,Tn),Tn.vadd(u,Tn),e.getVertex(m[A*3+1],xi),e.getVertex(m[A*3+2],vi);let L=Tn.distanceSquared(u);!(i.pointInTriangle(Tn,xi,Qn,vi)||i.pointInTriangle(Tn,Qn,xi,vi))||L>_||(vt.vectorToWorldFrame(t,a,x),vt.pointToWorldFrame(n,t,Tn,p),this.reportIntersection(x,p,r,s,A))}l.length=0}reportIntersection(e,t,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,e,t,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,Hs),n.vsub(t,da),e.vsub(t,rd);let r=Hs.dot(Hs),o=Hs.dot(da),a=Hs.dot(rd),l=da.dot(da),c=da.dot(rd),h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}};Vn.CLOSEST=yd.CLOSEST;Vn.ANY=yd.ANY;Vn.ALL=yd.ALL;var Sm=new Dn,sd=[],da=new C,rd=new C,XS=new C,YS=new Nt,Tn=new C,Qn=new C,xi=new C,vi=new C;new C;new Wr;var Mm={faceList:[0]},Hc=new C,$S=new Vn,ZS=[],KS=new C,jS=new C,JS=new C,QS=new C,eM=new C,wm=new C,tM=new C,nM=new C,iM=new C,sM=new C,rM=new C,oM=new C;new Dn;var aM=[],lM=new vt,Hs=new C,Wc=new C;function cM(i,e,t){t.vsub(i,Hs);let n=Hs.dot(e);return e.scale(n,Wc),Wc.vadd(i,Wc),t.distanceTo(Wc)}var jc=class i extends Kc{static checkBounds(e,t,n){let s,r;n===0?(s=e.position.x,r=t.position.x):n===1?(s=e.position.y,r=t.position.y):n===2&&(s=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=s+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=s}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let s=t.indexOf(n.body);s!==-1&&t.splice(s,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let h=s[l];if(this.needBroadphaseCollision(c,h)){if(!i.checkBounds(c,h,o))break;this.intersectionTest(c,h,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let s=0;s!==n;s++){let r=e[s];r.aabbNeedsUpdate&&r.updateAABB()}t===0?i.insertionSortX(e):t===1?i.insertionSortY(e):t===2&&i.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let p=a[f],x=p.position.x;e+=x,t+=x*x;let m=p.position.y;n+=m,s+=m*m;let g=p.position.z;r+=g,o+=g*g}let h=t-e*e*c,d=s-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},Jc=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},cd=class i{constructor(e,t,n){n===void 0&&(n={}),n=Jc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};cd.idCounter=0;var Qc=class{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},va=class i{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Qc,this.jacobianElementB=new Qc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let s=t,r=e,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return r.scale(c,Am),a.scale(h,Em),n.invInertiaWorldSolve.vmult(o,Tm),s.invInertiaWorldSolve.vmult(l,Cm),e.multiplyVectors(Am,Tm)+t.multiplyVectors(Em,Cm)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,qc),c+=qc.dot(e.rotational),l.vmult(t.rotational,qc),c+=qc.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=hM;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};va.idCounter=0;var Am=new C,Em=new C,Tm=new C,Cm=new C,qc=new C,hM=new C,hd=class extends va{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(e){let t=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=uM,c=dM,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=fM,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);let v=g.dot(p),w=this.restitution+1,_=w*u.dot(g)-w*h.dot(g)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-v*t-_*n-e*M}getImpactVelocityAlongNormal(){let e=pM,t=mM,n=gM,s=xM,r=vM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},uM=new C,dM=new C,fM=new C,pM=new C,mM=new C,gM=new C,xM=new C,vM=new C;var GT=new C,HT=new C;var WT=new C,qT=new C;new C;new C;var XT=new C,YT=new C;var $T=new C,ZT=new C,eh=class extends va{constructor(e,t,n){super(e,t,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=yM,o=_M,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}},yM=new C,_M=new C,th=class i{constructor(e,t,n){n=Jc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};th.idCounter=0;var nh=class i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};nh.idCounter=0;var KT=new C,jT=new C,JT=new C,QT=new C,eC=new C,tC=new C,nC=new C,iC=new C,sC=new C,rC=new C,oC=new C;var aC=new C,lC=new C;new C;new C;new C;var cC=new C,hC=new C,uC=new C;new Vn;new C;var dC=new C,fC=new C,pC=[new C(1,0,0),new C(0,1,0),new C(0,0,1)],mC=new C;var gC=new C,xC=new C,vC=new C;var yC=new C,_C=new C,bC=new C,SC=new C;var MC=new C,wC=new C,AC=new C;var EC=new C,TC=new C;var CC=new C,RC=new C,IC=new C,PC=new C,LC=new C,NC=new C,FC=new C;var DC=new C;var BC=new C,UC=new C,OC=new C,zC=new C,kC=new C,VC=new C,GC=new C,HC=new C,WC=new C;var qC=new C,XC=new Dn;var YC=new C,$C=new Dn,ZC=new C,KC=new C,jC=new C,JC=new C,QC=new C,eR=new C,tR=new C,nR=new Dn,iR=new C,sR=new vt,rR=new Dn,ud=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},dd=class extends ud{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e,d,u,f,p,x,m;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();let g=SM,v=MM,w=bM;g.length=a,v.length=a,w.length=a;for(let _=0;_!==a;_++){let M=o[_];w[_]=0,v[_]=M.computeB(h),g[_]=1/M.computeC()}if(a!==0){for(let S=0;S!==c;S++){let A=l[S],y=A.vlambda,E=A.wlambda;y.set(0,0,0),E.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let S=0;S!==a;S++){let A=o[S];d=v[S],u=g[S],m=w[S],x=A.computeGWlambda(),f=u*(d-x-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),w[S]+=f,p+=f>0?f:-f,A.addToWlambda(f)}if(p*p<r)break}for(let S=0;S!==c;S++){let A=l[S],y=A.velocity,E=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),y.vadd(A.vlambda,y),A.wlambda.vmul(A.angularFactor,A.wlambda),E.vadd(A.wlambda,E)}let _=o.length,M=1/h;for(;_--;)o[_].multiplier=w[_]*M}return n}},bM=[],SM=[],MM=[];var oR=nt.STATIC;var fd=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},pd=class extends fd{constructor(){super(...arguments),this.type=C}constructObject(){return new C}},Lt={sphereSphere:Ne.types.SPHERE,spherePlane:Ne.types.SPHERE|Ne.types.PLANE,boxBox:Ne.types.BOX|Ne.types.BOX,sphereBox:Ne.types.SPHERE|Ne.types.BOX,planeBox:Ne.types.PLANE|Ne.types.BOX,convexConvex:Ne.types.CONVEXPOLYHEDRON,sphereConvex:Ne.types.SPHERE|Ne.types.CONVEXPOLYHEDRON,planeConvex:Ne.types.PLANE|Ne.types.CONVEXPOLYHEDRON,boxConvex:Ne.types.BOX|Ne.types.CONVEXPOLYHEDRON,sphereHeightfield:Ne.types.SPHERE|Ne.types.HEIGHTFIELD,boxHeightfield:Ne.types.BOX|Ne.types.HEIGHTFIELD,convexHeightfield:Ne.types.CONVEXPOLYHEDRON|Ne.types.HEIGHTFIELD,sphereParticle:Ne.types.PARTICLE|Ne.types.SPHERE,planeParticle:Ne.types.PLANE|Ne.types.PARTICLE,boxParticle:Ne.types.BOX|Ne.types.PARTICLE,convexParticle:Ne.types.PARTICLE|Ne.types.CONVEXPOLYHEDRON,cylinderCylinder:Ne.types.CYLINDER,sphereCylinder:Ne.types.SPHERE|Ne.types.CYLINDER,planeCylinder:Ne.types.PLANE|Ne.types.CYLINDER,boxCylinder:Ne.types.BOX|Ne.types.CYLINDER,convexCylinder:Ne.types.CONVEXPOLYHEDRON|Ne.types.CYLINDER,heightfieldCylinder:Ne.types.HEIGHTFIELD|Ne.types.CYLINDER,particleCylinder:Ne.types.PARTICLE|Ne.types.CYLINDER,sphereTrimesh:Ne.types.SPHERE|Ne.types.TRIMESH,planeTrimesh:Ne.types.PLANE|Ne.types.TRIMESH},md=class{get[Lt.sphereSphere](){return this.sphereSphere}get[Lt.spherePlane](){return this.spherePlane}get[Lt.boxBox](){return this.boxBox}get[Lt.sphereBox](){return this.sphereBox}get[Lt.planeBox](){return this.planeBox}get[Lt.convexConvex](){return this.convexConvex}get[Lt.sphereConvex](){return this.sphereConvex}get[Lt.planeConvex](){return this.planeConvex}get[Lt.boxConvex](){return this.boxConvex}get[Lt.sphereHeightfield](){return this.sphereHeightfield}get[Lt.boxHeightfield](){return this.boxHeightfield}get[Lt.convexHeightfield](){return this.convexHeightfield}get[Lt.sphereParticle](){return this.sphereParticle}get[Lt.planeParticle](){return this.planeParticle}get[Lt.boxParticle](){return this.boxParticle}get[Lt.convexParticle](){return this.convexParticle}get[Lt.cylinderCylinder](){return this.convexConvex}get[Lt.sphereCylinder](){return this.sphereConvex}get[Lt.planeCylinder](){return this.planeConvex}get[Lt.boxCylinder](){return this.boxConvex}get[Lt.convexCylinder](){return this.convexConvex}get[Lt.heightfieldCylinder](){return this.heightfieldCylinder}get[Lt.particleCylinder](){return this.particleCylinder}get[Lt.sphereTrimesh](){return this.sphereTrimesh}get[Lt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pd,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new hd(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,h=s.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let n=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,x=p.length?p.pop():new eh(n,s,u*f),m=p.length?p.pop():new eh(n,s,u*f);return x.bi=m.bi=n,x.bj=m.bj=s,x.minForce=m.minForce=-u*f,x.maxForce=m.maxForce=u*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Gs.setZero(),Gr.setZero(),Hr.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Gs.vadd(t.ni,Gs),Gr.vadd(t.ri,Gr),Hr.vadd(t.rj,Hr)):(Gs.vsub(t.ni,Gs),Gr.vadd(t.rj,Gr),Hr.vadd(t.ri,Hr));let o=1/e;Gr.scale(o,n.ri),Hr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Gs.normalize(),Gs.tangents(n.t,s.t)}getContacts(e,t,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=EM,c=TM,h=wM,d=AM;for(let u=0,f=e.length;u!==f;u++){let p=e[u],x=t[u],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&nt.KINEMATIC&&x.type&nt.STATIC||p.type&nt.STATIC&&x.type&nt.KINEMATIC||p.type&nt.KINEMATIC&&x.type&nt.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],l),p.quaternion.vmult(p.shapeOffsets[v],h),h.vadd(p.position,h);let w=p.shapes[v];for(let _=0;_<x.shapes.length;_++){x.quaternion.mult(x.shapeOrientations[_],c),x.quaternion.vmult(x.shapeOffsets[_],d),d.vadd(x.position,d);let M=x.shapes[_];if(!(w.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&w.collisionFilterGroup)||h.distanceTo(d)>w.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;w.material&&M.material&&(S=n.getContactMaterial(w.material,M.material)||null),this.currentContactMaterial=S||m||n.defaultContactMaterial;let A=w.type|M.type,y=this[A];if(y){let E=!1;w.type<M.type?E=y.call(this,w,M,h,d,l,c,p,x,w,M,g):E=y.call(this,M,w,d,h,c,l,x,p,w,M,g),E&&g&&(n.shapeOverlapKeeper.set(w.id,M.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(e,t,n,s,r,o,a,l,c,h,d){if(d)return n.distanceSquared(s)<(e.radius+t.radius)**2;let u=this.createContactEquation(a,l,e,t,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,s,r,o,a,l,c,h,d){let u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(s,Xc),u.ni.scale(u.ni.dot(Xc),Rm),Xc.vsub(Rm,u.rj),-Xc.dot(u.ni)<=e.radius){if(d)return!0;let f=u.ri,p=u.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}sphereBox(e,t,n,s,r,o,a,l,c,h,d){let u=this.v3pool,f=QM;n.vsub(s,Yc),t.getSideNormals(f,o);let p=e.radius,x=!1,m=t1,g=n1,v=i1,w=null,_=0,M=0,S=0,A=null;for(let B=0,W=f.length;B!==W&&x===!1;B++){let q=KM;q.copy(f[B]);let H=q.length();q.normalize();let j=Yc.dot(q);if(j<H+p&&j>0){let J=jM,ie=JM;J.copy(f[(B+1)%3]),ie.copy(f[(B+2)%3]);let me=J.length(),We=ie.length();J.normalize(),ie.normalize();let qe=Yc.dot(J),Ze=Yc.dot(ie);if(qe<me&&qe>-me&&Ze<We&&Ze>-We){let ee=Math.abs(j-H-p);if((A===null||ee<A)&&(A=ee,M=qe,S=Ze,w=H,m.copy(q),g.copy(J),v.copy(ie),_++,d))return!0}}}if(_){x=!0;let B=this.createContactEquation(a,l,e,t,c,h);m.scale(-p,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(w,m),g.scale(M,g),m.vadd(g,m),v.scale(S,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let y=u.get(),E=e1;for(let B=0;B!==2&&!x;B++)for(let W=0;W!==2&&!x;W++)for(let q=0;q!==2&&!x;q++)if(y.set(0,0,0),B?y.vadd(f[0],y):y.vsub(f[0],y),W?y.vadd(f[1],y):y.vsub(f[1],y),q?y.vadd(f[2],y):y.vsub(f[2],y),s.vadd(y,E),E.vsub(n,E),E.lengthSquared()<p*p){if(d)return!0;x=!0;let H=this.createContactEquation(a,l,e,t,c,h);H.ri.copy(E),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(p,H.ri),H.rj.copy(y),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(s,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}u.release(y),y=null;let L=u.get(),N=u.get(),U=u.get(),D=u.get(),I=u.get(),F=f.length;for(let B=0;B!==F&&!x;B++)for(let W=0;W!==F&&!x;W++)if(B%3!==W%3){f[W].cross(f[B],L),L.normalize(),f[B].vadd(f[W],N),U.copy(n),U.vsub(N,U),U.vsub(s,U);let q=U.dot(L);L.scale(q,D);let H=0;for(;H===B%3||H===W%3;)H++;I.copy(n),I.vsub(D,I),I.vsub(N,I),I.vsub(s,I);let j=Math.abs(q),J=I.length();if(j<f[H].length()&&J<p){if(d)return!0;x=!0;let ie=this.createContactEquation(a,l,e,t,c,h);N.vadd(D,ie.rj),ie.rj.copy(ie.rj),I.negate(ie.ni),ie.ni.normalize(),ie.ri.copy(ie.rj),ie.ri.vadd(s,ie.ri),ie.ri.vsub(n,ie.ri),ie.ri.normalize(),ie.ri.scale(p,ie.ri),ie.ri.vadd(n,ie.ri),ie.ri.vsub(a.position,ie.ri),ie.rj.vadd(s,ie.rj),ie.rj.vsub(l.position,ie.rj),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult)}}u.release(L,N,U,D,I)}planeBox(e,t,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,d)}convexConvex(e,t,n,s,r,o,a,l,c,h,d,u,f){let p=v1;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,s,o,p,u,f)){let x=[],m=y1;e.clipAgainstHull(n,r,t,s,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(d)return!0;let w=this.createContactEquation(a,l,e,t,c,h),_=w.ri,M=w.rj;p.negate(w.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,_),M.copy(x[v].point),_.vsub(n,_),M.vsub(s,M),_.vadd(n,_),_.vsub(a.position,_),M.vadd(s,M),M.vsub(l.position,M),this.result.push(w),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,s,r,o,a,l,c,h,d){let u=this.v3pool;n.vsub(s,s1);let f=t.faceNormals,p=t.faces,x=t.vertices,m=e.radius,g=!1;for(let v=0;v!==x.length;v++){let w=x[v],_=l1;o.vmult(w,_),s.vadd(_,_);let M=a1;if(_.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;g=!0;let S=this.createContactEquation(a,l,e,t,c,h);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(m,S.ri),_.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,w=p.length;v!==w&&g===!1;v++){let _=f[v],M=p[v],S=c1;o.vmult(_,S);let A=h1;o.vmult(x[M[0]],A),A.vadd(s,A);let y=u1;S.scale(-m,y),n.vadd(y,y);let E=d1;y.vsub(A,E);let L=E.dot(S),N=f1;if(n.vsub(A,N),L<0&&N.dot(S)>0){let U=[];for(let D=0,I=M.length;D!==I;D++){let F=u.get();o.vmult(x[M[D]],F),s.vadd(F,F),U.push(F)}if(ZM(U,S,n)){if(d)return!0;g=!0;let D=this.createContactEquation(a,l,e,t,c,h);S.scale(-m,D.ri),S.negate(D.ni);let I=u.get();S.scale(-L,I);let F=u.get();S.scale(-m,F),n.vsub(s,D.rj),D.rj.vadd(F,D.rj),D.rj.vadd(I,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),u.release(I),u.release(F),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let B=0,W=U.length;B!==W;B++)u.release(U[B]);return}else for(let D=0;D!==M.length;D++){let I=u.get(),F=u.get();o.vmult(x[M[(D+1)%M.length]],I),o.vmult(x[M[(D+2)%M.length]],F),s.vadd(I,I),s.vadd(F,F);let B=r1;F.vsub(I,B);let W=o1;B.unit(W);let q=u.get(),H=u.get();n.vsub(I,H);let j=H.dot(W);W.scale(j,q),q.vadd(I,q);let J=u.get();if(q.vsub(n,J),j>0&&j*j<B.lengthSquared()&&J.lengthSquared()<m*m){if(d)return!0;let ie=this.createContactEquation(a,l,e,t,c,h);q.vsub(s,ie.rj),q.vsub(n,ie.ni),ie.ni.normalize(),ie.ni.scale(m,ie.ri),ie.rj.vadd(s,ie.rj),ie.rj.vsub(l.position,ie.rj),ie.ri.vadd(n,ie.ri),ie.ri.vsub(a.position,ie.ri),this.result.push(ie),this.createFrictionEquationsFromContact(ie,this.frictionResult);for(let me=0,We=U.length;me!==We;me++)u.release(U[me]);u.release(I),u.release(F),u.release(q),u.release(J),u.release(H);return}u.release(I),u.release(F),u.release(q),u.release(J),u.release(H)}for(let D=0,I=U.length;D!==I;D++)u.release(U[D])}}}planeConvex(e,t,n,s,r,o,a,l,c,h,d){let u=p1,f=m1;f.set(0,0,1),r.vmult(f,f);let p=0,x=g1;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;let v=this.createContactEquation(a,l,e,t,c,h),w=x1;f.scale(f.dot(x),w),u.vsub(w,w),w.vsub(n,v.ri),v.ni.copy(f),u.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,s,r,o,a,l,c,h,d){let u=t.data,f=e.radius,p=t.elementSize,x=P1,m=I1;vt.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-f)/p)-1,v=Math.ceil((m.x+f)/p)+1,w=Math.floor((m.y-f)/p)-1,_=Math.ceil((m.y+f)/p)+1;if(v<0||_<0||g>u.length||w>u[0].length)return;g<0&&(g=0),v<0&&(v=0),w<0&&(w=0),_<0&&(_=0),g>=u.length&&(g=u.length-1),v>=u.length&&(v=u.length-1),_>=u[0].length&&(_=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let M=[];t.getRectMinMax(g,w,v,_,M);let S=M[0],A=M[1];if(m.z-f>A||m.z+f<S)return;let y=this.result;for(let E=g;E<v;E++)for(let L=w;L<_;L++){let N=y.length,U=!1;if(t.getConvexTrianglePillar(E,L,!1),vt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U||(t.getConvexTrianglePillar(E,L,!0),vt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,d)),d&&U))return!0;if(y.length-N>2)return}}boxHeightfield(e,t,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,s,r,o,a,l,c,h,d){let u=t.data,f=t.elementSize,p=e.boundingSphereRadius,x=C1,m=R1,g=T1;vt.pointToLocalFrame(s,o,n,g);let v=Math.floor((g.x-p)/f)-1,w=Math.ceil((g.x+p)/f)+1,_=Math.floor((g.y-p)/f)-1,M=Math.ceil((g.y+p)/f)+1;if(w<0||M<0||v>u.length||_>u[0].length)return;v<0&&(v=0),w<0&&(w=0),_<0&&(_=0),M<0&&(M=0),v>=u.length&&(v=u.length-1),w>=u.length&&(w=u.length-1),M>=u[0].length&&(M=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let S=[];t.getRectMinMax(v,_,w,M,S);let A=S[0],y=S[1];if(!(g.z-p>y||g.z+p<A))for(let E=v;E<w;E++)for(let L=_;L<M;L++){let N=!1;if(t.getConvexTrianglePillar(E,L,!1),vt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&N||(t.getConvexTrianglePillar(E,L,!0),vt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&N))return!0}}sphereParticle(e,t,n,s,r,o,a,l,c,h,d){let u=M1;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;let p=this.createContactEquation(l,a,t,e,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(e.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,s,r,o,a,l,c,h,d){let u=_1;u.set(0,0,1),a.quaternion.vmult(u,u);let f=b1;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=S1;u.scale(u.dot(s),m),s.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,d)}convexParticle(e,t,n,s,r,o,a,l,c,h,d){let u=-1,f=A1,p=E1,x=null,m=w1;if(m.copy(s),m.vsub(n,m),r.conjugate(Im),Im.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,v=e.faces.length;g!==v;g++){let w=[e.worldVertices[e.faces[g][0]]],_=e.worldFaceNormals[g];s.vsub(w[0],Pm);let M=-_.dot(Pm);if(x===null||Math.abs(M)<Math.abs(x)){if(d)return!0;x=M,u=g,f.copy(_)}}if(u!==-1){let g=this.createContactEquation(l,a,t,e,c,h);f.scale(x,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);let v=g.ri,w=g.rj;v.vadd(s,v),v.vsub(l.position,v),w.vadd(n,w),w.vsub(a.position,w),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,r,o,a,l,c,h,d){return this.convexHeightfield(t,e,s,n,o,r,l,a,c,h,d)}particleCylinder(e,t,n,s,r,o,a,l,c,h,d){return this.convexParticle(t,e,s,n,o,r,l,a,c,h,d)}sphereTrimesh(e,t,n,s,r,o,a,l,c,h,d){let u=DM,f=BM,p=UM,x=OM,m=zM,g=kM,v=WM,w=FM,_=LM,M=qM;vt.pointToLocalFrame(s,o,n,m);let S=e.radius;v.lowerBound.set(m.x-S,m.y-S,m.z-S),v.upperBound.set(m.x+S,m.y+S,m.z+S),t.getTrianglesInAABB(v,M);let A=NM,y=e.radius*e.radius;for(let D=0;D<M.length;D++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[M[D]*3+I],A),A.vsub(m,_),_.lengthSquared()<=y){if(w.copy(A),vt.pointToWorldFrame(s,o,w,A),A.vsub(n,_),d)return!0;let F=this.createContactEquation(a,l,e,t,c,h);F.ni.copy(_),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(A),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let D=0;D<M.length;D++)for(let I=0;I<3;I++){t.getVertex(t.indices[M[D]*3+I],u),t.getVertex(t.indices[M[D]*3+(I+1)%3],f),f.vsub(u,p),m.vsub(f,g);let F=g.dot(p);m.vsub(u,g);let B=g.dot(p);if(B>0&&F<0&&(m.vsub(u,g),x.copy(p),x.normalize(),B=g.dot(x),x.scale(B,g),g.vadd(u,g),g.distanceTo(m)<e.radius)){if(d)return!0;let q=this.createContactEquation(a,l,e,t,c,h);g.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),vt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,q.rj),vt.vectorToWorldFrame(o,q.ni,q.ni),vt.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}let E=VM,L=GM,N=HM,U=PM;for(let D=0,I=M.length;D!==I;D++){t.getTriangleVertices(M[D],E,L,N),t.getNormal(M[D],U),m.vsub(E,g);let F=g.dot(U);if(U.scale(F,g),m.vsub(g,g),F=g.distanceTo(m),Vn.pointInTriangle(g,E,L,N)&&F<e.radius){if(d)return!0;let B=this.createContactEquation(a,l,e,t,c,h);g.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),vt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,B.rj),vt.vectorToWorldFrame(o,B.ni,B.ni),vt.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,s,r,o,a,l,c,h,d){let u=new C,f=CM;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,u);let x=new C;x.copy(u),vt.pointToWorldFrame(s,o,x,u);let m=RM;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);let w=IM;f.scale(m.dot(f),w),u.vsub(w,w),v.ri.copy(w),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Gs=new C,Gr=new C,Hr=new C,wM=new C,AM=new C,EM=new Nt,TM=new Nt,CM=new C,RM=new C,IM=new C,PM=new C,LM=new C;new C;var NM=new C,FM=new C,DM=new C,BM=new C,UM=new C,OM=new C,zM=new C,kM=new C,VM=new C,GM=new C,HM=new C,WM=new Dn,qM=[],Xc=new C,Rm=new C,XM=new C,YM=new C,$M=new C;function ZM(i,e,t){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=XM;i[(r+1)%s].vsub(o,a);let l=YM;a.cross(e,l);let c=$M;t.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Yc=new C,KM=new C,jM=new C,JM=new C,QM=[new C,new C,new C,new C,new C,new C],e1=new C,t1=new C,n1=new C,i1=new C,s1=new C,r1=new C,o1=new C,a1=new C,l1=new C,c1=new C,h1=new C,u1=new C,d1=new C,f1=new C;new C;new C;var p1=new C,m1=new C,g1=new C,x1=new C,v1=new C,y1=new C,_1=new C,b1=new C,S1=new C,M1=new C,Im=new Nt,w1=new C;new C;var A1=new C,Pm=new C,E1=new C,T1=new C,C1=new C,R1=[0],I1=new C,P1=new C,ih=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,h=n[l];for(;h>s[a];)a++;c=h===s[a],c||Lm(e,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||Lm(t,h)}}};function Lm(i,e){i.push((e&4294901760)>>16,e&65535)}var od=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`,gd=class{constructor(){this.data={keys:[]}}get(e,t){let n=od(e,t);return this.data[n]}set(e,t,n){let s=od(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){let n=od(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},sh=class extends Zc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new ld,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new dd,this.constraints=[],this.narrowphase=new md(this),this.collisionMatrix=new $c,this.collisionMatrixPrevious=new $c,this.bodyOverlapKeeper=new ih,this.shapeOverlapKeeper=new ih,this.contactmaterials=[],this.contactMaterialTable=new gd,this.defaultMaterial=new nh("default"),this.defaultContactMaterial=new th(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Wr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.ALL,n.from=e,n.to=t,n.callback=s,ad.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.ANY,n.from=e,n.to=t,n.result=s,ad.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.CLOSEST,n.from=e,n.to=t,n.result=s,ad.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof nt&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let s=t[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=Kt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=Kt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Kt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=B1,s=U1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=nt.DYNAMIC,u=-1/0,f=this.constraints,p=D1;l.length();let x=l.x,m=l.y,g=l.z,v=0;for(c&&(u=Kt.now()),v=0;v!==r;v++){let D=o[v];if(D.type===d){let I=D.force,F=D.mass;I.x+=F*x,I.y+=F*m,I.z+=F*g}}for(let D=0,I=this.subsystems.length;D!==I;D++)this.subsystems[D].update();c&&(u=Kt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Kt.now()-u);let w=f.length;for(v=0;v!==w;v++){let D=f[v];if(!D.collideConnected)for(let I=n.length-1;I>=0;I-=1)(D.bodyA===n[I]&&D.bodyB===s[I]||D.bodyB===n[I]&&D.bodyA===s[I])&&(n.splice(I,1),s.splice(I,1))}this.collisionMatrixTick(),c&&(u=Kt.now());let _=F1,M=t.length;for(v=0;v!==M;v++)_.push(t[v]);t.length=0;let S=this.frictionEquations.length;for(v=0;v!==S;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,_,this.frictionEquations,p),c&&(h.narrowphase=Kt.now()-u),c&&(u=Kt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let A=t.length;for(let D=0;D!==A;D++){let I=t[D],F=I.bi,B=I.bj,W=I.si,q=I.sj,H;if(F.material&&B.material?H=this.getContactMaterial(F.material,B.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,F.material&&B.material&&(F.material.friction>=0&&B.material.friction>=0&&F.material.friction*B.material.friction,F.material.restitution>=0&&B.material.restitution>=0&&(I.restitution=F.material.restitution*B.material.restitution)),a.addEquation(I),F.allowSleep&&F.type===nt.DYNAMIC&&F.sleepState===nt.SLEEPING&&B.sleepState===nt.AWAKE&&B.type!==nt.STATIC){let j=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),J=B.sleepSpeedLimit**2;j>=J*2&&(F.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===nt.DYNAMIC&&B.sleepState===nt.SLEEPING&&F.sleepState===nt.AWAKE&&F.type!==nt.STATIC){let j=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),J=F.sleepSpeedLimit**2;j>=J*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,B,!0),this.collisionMatrixPrevious.get(F,B)||(fa.body=B,fa.contact=I,F.dispatchEvent(fa),fa.body=F,B.dispatchEvent(fa)),this.bodyOverlapKeeper.set(F.id,B.id),this.shapeOverlapKeeper.set(W.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Kt.now()-u,u=Kt.now()),v=0;v!==r;v++){let D=o[v];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(w=f.length,v=0;v!==w;v++){let D=f[v];D.update();for(let I=0,F=D.equations.length;I!==F;I++){let B=D.equations[I];a.addEquation(B)}}a.solve(e,this),c&&(h.solve=Kt.now()-u),a.removeAllEquations();let y=Math.pow;for(v=0;v!==r;v++){let D=o[v];if(D.type&d){let I=y(1-D.linearDamping,e),F=D.velocity;F.scale(I,F);let B=D.angularVelocity;if(B){let W=y(1-D.angularDamping,e);B.scale(W,B)}}}this.dispatchEvent(N1),c&&(u=Kt.now());let L=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,L,N);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Kt.now()-u),this.stepnumber+=1,this.dispatchEvent(L1);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==r;v++){let D=o[v];D.sleepTick(this.time),D.sleepState!==nt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Bi,Ui),e){for(let r=0,o=Bi.length;r<o;r+=2)pa.bodyA=this.getBodyById(Bi[r]),pa.bodyB=this.getBodyById(Bi[r+1]),this.dispatchEvent(pa);pa.bodyA=pa.bodyB=null}if(t){for(let r=0,o=Ui.length;r<o;r+=2)ma.bodyA=this.getBodyById(Ui[r]),ma.bodyB=this.getBodyById(Ui[r+1]),this.dispatchEvent(ma);ma.bodyA=ma.bodyB=null}Bi.length=Ui.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Bi,Ui),n){for(let r=0,o=Bi.length;r<o;r+=2){let a=this.getShapeById(Bi[r]),l=this.getShapeById(Bi[r+1]);Oi.shapeA=a,Oi.shapeB=l,a&&(Oi.bodyA=a.body),l&&(Oi.bodyB=l.body),this.dispatchEvent(Oi)}Oi.bodyA=Oi.bodyB=Oi.shapeA=Oi.shapeB=null}if(s){for(let r=0,o=Ui.length;r<o;r+=2){let a=this.getShapeById(Ui[r]),l=this.getShapeById(Ui[r+1]);zi.shapeA=a,zi.shapeB=l,a&&(zi.bodyA=a.body),l&&(zi.bodyB=l.body),this.dispatchEvent(zi)}zi.bodyA=zi.bodyB=zi.shapeA=zi.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Dn;var ad=new Vn,Kt=globalThis.performance||{};if(!Kt.now){let i=Date.now();Kt.timing&&Kt.timing.navigationStart&&(i=Kt.timing.navigationStart),Kt.now=()=>Date.now()-i}new C;var L1={type:"postStep"},N1={type:"preStep"},fa={type:nt.COLLIDE_EVENT_NAME,body:null,contact:null},F1=[],D1=[],B1=[],U1=[],Bi=[],Ui=[],pa={type:"beginContact",bodyA:null,bodyB:null},ma={type:"endContact",bodyA:null,bodyB:null},Oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},zi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var O1=.24,bn=1e-8,_n=i=>Array.isArray(i)?i:[i.x,i.y,i.z],_i=(i,e)=>i.map((t,n)=>t+e[n]),dt=(i,e)=>i.map((t,n)=>t-e[n]),ei=(i,e)=>i.map(t=>t*e),kt=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],rh=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],ys=i=>kt(i,i),qr=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Xr=(i,e,t)=>Math.max(e,Math.min(t,i)),yi=i=>new C(..._n(i)),Yr=(i,e)=>{let t=2*(e.y*i[2]-e.z*i[1]),n=2*(e.z*i[0]-e.x*i[2]),s=2*(e.x*i[1]-e.y*i[0]);return[i[0]+e.w*t+e.y*s-e.z*n,i[1]+e.w*n+e.z*t-e.x*s,i[2]+e.w*s+e.x*n-e.y*t]},km=(i,e)=>Yr(i,new Nt(-e.x,-e.y,-e.z,e.w));function Sd(i,e){let t=ys(e);if(t<1e-12)return;let n=ei(e,1/Math.sqrt(t));i.some(s=>Math.abs(kt(s,n))>1-1e-7)||i.push(n)}function z1(i){let e=[],t=[],n=[];for(let s of i.faces){let[r,o,a]=s.map(l=>i.vertices[l]);Sd(e,rh(dt(o,r),dt(a,r)));for(let l=0;l<s.length;l++)Sd(t,dt(i.vertices[s[(l+1)%s.length]],i.vertices[s[l]]));for(let l=1;l<s.length-1;l++)n.push([r,i.vertices[s[l]],i.vertices[s[l+1]]])}return{...i,normals:e,edges:t,triangles:n}}function Vm(i,e){return e.faces.every(t=>{let[n,s,r]=t.map(o=>e.vertices[o]);return kt(dt(i,n),rh(dt(s,n),dt(r,n)))<=bn})}function k1(i,e,t,n,s){let r=i.vertices.map(f=>Yr(f,e)),o=i.normals.map(f=>Yr(f,e)),a=i.edges.map(f=>Yr(f,e)),l=[...o,...s.axes];for(let f of a)for(let p of s.axes)Sd(l,rh(f,p));let c=dt(t,s.position),h=0,d=1,u=[0,0,0];for(let f of l){let p=r.map(S=>kt(S,f)),x=kt(c,f),m=Math.min(...p)+x,g=Math.max(...p)+x,v=s.half.reduce((S,A,y)=>S+A*Math.abs(kt(s.axes[y],f)),0),w=kt(n,f);if(Math.abs(w)<bn){if(m>v+bn||g<-v-bn)return null;continue}let _=(-v-g)/w,M=(v-m)/w;if(_>M&&([_,M]=[M,_]),_>h&&(h=_,u=ei(f,w>0?-1:1)),d=Math.min(d,M),h>d+bn)return null}return d>=0&&h<=1?{t:Math.max(0,h),normal:u}:null}function _d(i,e,t,n=0){let s=dt(i,t.position),r=dt(e,i),o=t.axes.map(h=>kt(s,h)),a=t.axes.map(h=>kt(r,h)),l=0,c=1;for(let h=0;h<3;h++){let d=t.half[h]+n;if(Math.abs(a[h])<bn){if(Math.abs(o[h])>d)return null;continue}let u=(-d-o[h])/a[h],f=(d-o[h])/a[h];if(u>f&&([u,f]=[f,u]),l=Math.max(l,u),c=Math.min(c,f),l>c)return null}return l}function bd(i,e,t,n){let s=dt(t,e),r=dt(n,e),o=dt(i,e),a=kt(s,o),l=kt(r,o);if(a<=0&&l<=0)return e;let c=dt(i,t),h=kt(s,c),d=kt(r,c);if(h>=0&&d<=h)return t;let u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return _i(e,ei(s,a/(a-h)));let f=dt(i,n),p=kt(s,f),x=kt(r,f);if(x>=0&&p<=x)return n;let m=p*l-a*x;if(m<=0&&l>=0&&x<=0)return _i(e,ei(r,l/(l-x)));let g=h*x-p*d;if(g<=0&&d-h>=0&&p-x>=0)return _i(t,ei(dt(n,t),(d-h)/(d-h+p-x)));let v=1/(g+m+u);return _i(e,_i(ei(s,m*v),ei(r,u*v)))}function V1(i,e,t,n){let s=dt(e,i),r=dt(n,t),o=dt(i,t),a=kt(s,s),l=kt(s,r),c=kt(r,r),h=kt(s,o),d=kt(r,o);if(a<bn)return{t:0,point:_i(t,ei(r,c>bn?Xr(d/c,0,1):0))};let u=a*c-l*l,f=u>bn?Xr((l*d-c*h)/u,0,1):0,p=c>bn?(l*f+d)/c:0;return p<0?(p=0,f=Xr(-h/a,0,1)):p>1&&(p=1,f=Xr((l-h)/a,0,1)),{t:f,point:_i(t,ei(r,p))}}function G1(i,e,t,n,s){let r=dt(e,i),o=rh(dt(n,t),dt(s,t)),a=kt(o,r);if(Math.abs(a)>bn){let c=kt(o,dt(t,i))/a;if(c>=0&&c<=1){let h=qr(i,e,c),d=bd(h,t,n,s);if(ys(dt(h,d))<1e-12)return{distance2:0,t:c,point:d}}}let l=[{t:0,point:bd(i,t,n,s)},{t:1,point:bd(e,t,n,s)}];for(let[c,h]of[[t,n],[n,s],[s,t]])l.push(V1(i,e,c,h));for(let c of l)c.distance2=ys(dt(qr(i,e,c.t),c.point));return l.reduce((c,h)=>h.distance2<c.distance2?h:c)}function Gm(i=ut,e={form:"classic",size:1}){let t=new sh({gravity:new C(0,0,0),allowSleep:!0});t.broadphase=new jc(t);let n=[],s=[],r=new Map,o,a,l=[];function c(A){A.position=_n(A.body.position),A.axes=[[1,0,0],[0,1,0],[0,0,1]].map(y=>Yr(y,A.body.quaternion)),A.body.aabbNeedsUpdate=!0,A.body.updateAABB(),A.min=_n(A.body.aabb.lowerBound),A.max=_n(A.body.aabb.upperBound),t.broadphase.dirty=!0}function h(A,y,E="solid",L=[0,0,0],N){let U=new nt({mass:0,shape:new xa(new C(...A.map(I=>I/2))),position:yi(y)});U.quaternion.setFromEuler(...L,"XYZ"),U.kind=E,U.obstacleId=N,t.addBody(U);let D={body:U,half:A.map(I=>I/2),kind:E,id:N};return c(D),s.push(D),D}for(let A of i.obstacles??[])h(A.size,A.position,A.kind??"solid",A.rotation??[0,0,0],A.id);for(let A of i.doors??[]){let y=Vr(A,!1),E=h(y.size,y.position,"door",y.rotation,A.id);r.set(A.id,{door:A,obstacle:E,open:!1})}let d=_n(i.start??[0,1,0]),u=new nt({mass:1,position:yi(d),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});u.kind="plane",t.addBody(u);function f(A="classic",y=1){for(o=gs(A,y),a=o.parts.map(z1);u.shapes.length;)u.removeShape(u.shapes[0]);for(let E of a){let L=[0,1,2].map(N=>E.vertices.reduce((U,D)=>U+D[N],0)/E.vertices.length);u.addShape(new ga({vertices:E.vertices.map(N=>yi(dt(N,L))),faces:E.faces}),yi(L))}return u.updateMassProperties(),u.updateBoundingRadius(),u.aabbNeedsUpdate=!0,l=[],t.broadphase.dirty=!0,o}f(e.form,e.size);function p(A,y=!0){let E=r.get(A);if(!E)return!1;let L=Vr(E.door,y);return E.obstacle.body.position.copy(yi(L.position)),E.obstacle.body.quaternion.setFromEuler(...L.rotation,"XYZ"),E.open=!!y,c(E.obstacle),!0}function x(){for(let A of r.keys())p(A,!1);u.position.copy(yi(d)),u.previousPosition.copy(u.position),u.interpolatedPosition.copy(u.position),u.quaternion.set(0,0,0,1),u.previousQuaternion.copy(u.quaternion),u.interpolatedQuaternion.copy(u.quaternion);for(let A of["velocity","angularVelocity","force","torque"])u[A].setZero();u.collisionFilterMask=-1,u.aabbNeedsUpdate=!0,u.wakeUp(),t.accumulator=0,t.time=0,t.stepnumber=0,t.contacts.length=0,t.frictionEquations.length=0,t.collisionMatrix.reset(),t.collisionMatrixPrevious.reset(),t.broadphase.dirty=!0,l=[]}function m(A,y){let E=o.boundingRadius;return s.filter(L=>[0,1,2].every(N=>Math.min(A[N],y[N])-E<=L.max[N]&&Math.max(A[N],y[N])+E>=L.min[N]))}function g(A,y,E){let L=dt(y,A),N=null;for(let U of m(A,y))for(let D of a){let I=k1(D,E,A,L,U);I&&(!N||I.t<N.t)&&(N={...I,body:U.body})}return N}function v(A,y=u.velocity,E=u.quaternion){if(!Number.isFinite(A)||A<0)throw new TypeError("advance requires a non-negative finite timestep");let L=_n(u.position),N=ei(_n(y),A),U=u.quaternion.clone(),D=new Nt(E.x,E.y,E.z,E.w);D.normalize();let I=2*Math.acos(Xr(Math.abs(U.x*D.x+U.y*D.y+U.z*D.z+U.w*D.w),0,1)),F=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(ys(N))/.12)),Math.ceil(I/.012));u.previousPosition.copy(u.position),u.previousQuaternion.copy(U),u.velocity.copy(yi(y)),l=[];let B=L,W=U,q=null;for(let j=0;j<F;j++){let J=_i(L,ei(N,(j+1)/F)),ie=new Nt,me=new Nt;if(U.slerp(D,(j+.5)/F,ie),U.slerp(D,(j+1)/F,me),u.collisionFilterMask!==0&&(q=g(B,J,ie),!q)){let We=g(J,J,me);We&&(q={...We,t:0})}if(q){let We=Math.sqrt(ys(dt(J,B))),qe=Math.max(0,q.t-(We>bn?.001/We:0)),Ze=qr(B,J,qe);qe>0&&(W=ie),l.push({from:B,to:Ze,orientation:W}),B=Ze;break}l.push({from:B,to:J,orientation:ie}),B=J,W=me}u.position.copy(yi(B)),u.quaternion.copy(W),u.interpolatedPosition.copy(u.position),u.interpolatedQuaternion.copy(u.quaternion),u.aabbNeedsUpdate=!0,t.broadphase.dirty=!0,t.time+=A,t.stepnumber+=F;let H={collided:!!q,body:q?.body??null,normal:q?yi(q.normal):null,steps:F,safePosition:u.position.clone()};return q&&(u.velocity.setZero(),u.dispatchEvent({type:"collide",body:q.body,contact:{bi:u,bj:q.body,ni:yi(q.normal)}})),H}function w(A,y){return A=_n(A),y=_n(y),!s.some(E=>{let L=_d(A,y,E);return L!==null&&L<1-1e-6})}function _(A,y=u.previousPosition,E=0){let L=_n(A.position??A),N=Math.max(0,Number(A.collectRadius??O1))+Math.max(0,Number(E)||0),U=_n(y),D=l.length&&ys(dt(U,l[0].from))<1e-8?l:[{from:U,to:_n(u.position),orientation:u.quaternion}];for(let I of D){let F=dt(I.to,I.from),B=ys(F),W=qr(I.from,I.to,B>bn?Xr(kt(dt(L,I.from),F)/B,0,1):0);if(ys(dt(L,W))>(N+o.boundingRadius)**2)continue;let q=km(dt(L,I.from),I.orientation),H=km(dt(L,I.to),I.orientation);for(let j of a){if((Vm(q,j)||Vm(H,j))&&w(L,L))return!0;for(let J of j.triangles){let ie=G1(q,H,...J);if(ie.distance2>N**2+bn)continue;let me=_i(qr(I.from,I.to,ie.t),Yr(ie.point,I.orientation));if(w(me,L))return!0}}}return!1}function M(A,y,E=.18){A=_n(A),y=_n(y);let L=1;for(let I of s){let F=_d(A,y,I,E);F!==null&&(L=Math.min(L,Math.max(0,F-.015)))}let[N,U,D]=qr(A,y,L);return{x:N,y:U,z:D}}function S(A){let y=_n(A),E=_i(y,[0,50,0]),L=1/0;for(let N of s){if(!/ceiling|roof|floor|slab/.test(N.kind))continue;let U=_d(y,E,N);U!==null&&U>bn&&(L=Math.min(L,y[1]+50*U))}return L}return x(),{world:t,plane:u,blocks:n,level:i,reset:x,configureAircraft:f,setDoorOpen:p,advance:v,canCollectStar:_,hasLineOfSight:w,traceCamera:M,getCeilingAt:S,get aircraft(){return o},doorBodies:r}}var H1=new Map(ut.rooms.map(i=>[i.id,i])),W1=new Set(["cellar-core","stairs","upper-core","attic-core"]),q1=new Map(ut.collectibles.map(i=>{let e=!!i.under,t=H1.get(i.roomId)?.floor==="ug"||W1.has(i.roomId);return[i.id,Object.freeze({id:i.id,roomId:i.roomId,under:e,zone:t,basePoints:150+(e?150:0)+(t?150:0)})]}));function ya(i){let e=typeof i=="string"?i:i?.id,t=q1.get(e);if(!t)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return t}function Hm(i){if(!Array.isArray(i)||!i.every(e=>typeof e=="string"))throw new Error("Die gesammelten Sterne sind ung\xFCltig.");return[...new Set(i)].reduce((e,t)=>e+ya(t).basePoints,0)}var Wm=Object.freeze(["none","mint","spark","confetti"]);function $r(i){if(i===null)return null;if(typeof i!="string"||!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Bitte w\xE4hle eine g\xFCltige Farbe im Format #RRGGBB.");return i.toLowerCase()}function _a(i,e=null){let t=$r(e);if(t===null)return"#"+i.color.toString(16).padStart(6,"0");let n={"left-wing":1,"right-wing":.9,fuselage:.72,tail:1.06}[i.id]??1;return"#"+[1,3,5].map(s=>Math.min(255,Math.round(parseInt(t.slice(s,s+2),16)*n)).toString(16).padStart(2,"0")).join("")}function qm(i,e=null,t=null){let n=t?new Je(t):null;i.traverse(s=>{!s.isMesh||s.userData.paperColor===void 0||(s.material.color.set(_a({id:s.name,color:s.userData.paperColor},e)),e===null&&n&&s.material.color.lerp(n,.6))})}var Md=54,wd=28,X1=["#d58c7e","#79c6b2","#e9c774","#a7a0d6"];function Xm(i,{name:e="Flugspur",effect:t="none"}={}){let n=new Float32Array(Md*3),s=new Xt;s.setAttribute("position",new gn(n,3));let r=new Lo(s,new wr({color:"#80d6ba",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1})),o=new Ns(new Zn(1,1,1),new Pn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),wd);r.name=`${e} Linie`,o.name=`${e} Partikel`;for(let S of[r,o])S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,i.add(S);let a=new lt,l=new qt,c=new sn,h=new z,d=new z,u=new Je,f="none",p=!1,x=!1;function m(){p=!1,r.visible=o.visible=!1}function g(S){if(m(),!!S){for(let A=0;A<Md;A++)n[A*3]=S.x,n[A*3+1]=S.y,n[A*3+2]=S.z;p=!0,s.attributes.position.needsUpdate=!0}}function v(S="none"){if(S=Wm.includes(S)?S:"none",S!==f){f=S,m(),r.material.color.set(S==="spark"?"#e9bd5e":"#80d6ba");for(let A=0;A<wd;A++)o.setColorAt(A,u.set(S==="confetti"?X1[A%4]:"#f7d581"));o.instanceColor.needsUpdate=!0}}function w(S){if(!x){if(!p||Math.hypot(S.x-n[0],S.y-n[1],S.z-n[2])>1.5){g(S);return}n.copyWithin(3,0,n.length-3),n[0]=S.x,n[1]=S.y,n[2]=S.z,s.attributes.position.needsUpdate=!0}}function _(S=1/60,A=0){let y=p&&Math.hypot(n[0]-n[18],n[1]-n[19],n[2]-n[20])>.035;if(r.visible=y&&(f==="mint"||f==="spark"),o.visible=y&&(f==="spark"||f==="confetti"),!!o.visible){for(let E=0;E<wd;E++){let L=Math.min(Md-1,2+E)*3,N=1-E/32,U=(f==="confetti"?.037:.022)*N*(f==="spark"?.6+.4*Math.sin(A*8+E)**2:1);h.set(n[L]+Math.sin(E*2.4)*.045,n[L+1]+Math.cos(E*1.7)*.035-E*.001,n[L+2]),l.setFromEuler(c.set(A*2+E,E*.7,A*1.4+E)),d.set(U,f==="confetti"?U*.22:U,U),o.setMatrixAt(E,a.compose(h,l,d))}o.instanceMatrix.needsUpdate=!0}}function M(){x||(m(),x=!0,i.remove(r,o),s.dispose(),r.material.dispose(),o.geometry.dispose(),o.material.dispose(),o.dispose())}return v(t),{trail:r,particles:o,setEffect:v,reset:g,push:w,update:_,clear:m,dispose:M,get effect(){return f}}}var _s=1e-7,Y1=new Set(["wall","floor","roof"]),Ym={floor:3,wall:2,roof:1},Sa=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],ba=(i,e)=>i.map((t,n)=>t-e[n]),$1=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],Z1=(i,e)=>{let t=Sa(i,e.normal)-e.offset;return Math.abs(t)<=_s?0:t};function K1(i){let e=new lt().makeRotationFromEuler(new sn(...i.rotation||[0,0,0])).elements,t=[0,1,2].map(o=>e.slice(o*4,o*4+3)),n=i.size.map(o=>o/2),s=[0,1,2].map(o=>t.reduce((a,l,c)=>a+Math.abs(l[o])*n[c],0)),r=[];for(let o=0;o<3;o++)for(let a of[-1,1]){let l=t[o].map(c=>c*a);r.push({normal:l,offset:Sa(l,i.position)+n[o]})}return{part:i,axes:t,half:n,planes:r,min:i.position.map((o,a)=>o-s[a]),max:i.position.map((o,a)=>o+s[a])}}function j1(i,e){return i.min.every((t,n)=>t<=e.max[n]+_s&&i.max[n]>=e.min[n]-_s)}function J1(i,e,t){let n=(e+1)%3,s=(e+2)%3,r=i.axes[e].map(l=>l*t),o=[[-1,-1],[1,-1],[1,1],[-1,1]];t<0&&o.reverse();let a=o.map(([l,c])=>i.part.position.map((h,d)=>h+r[d]*i.half[e]+i.axes[n][d]*i.half[n]*l+i.axes[s][d]*i.half[s]*c));return{axis:e,sign:t,normal:r,offset:Sa(r,a[0]),polygon:a}}function $m(i){let e=[];for(let t of i){let n=e.at(-1);(!n||Math.hypot(...ba(t,n))>_s)&&e.push(t)}return e.length>1&&Math.hypot(...ba(e[0],e.at(-1)))<=_s&&e.pop(),e}function Q1(i,e){let t=i.map(r=>Z1(r,e));if(!t.some(r=>r>0))return{inside:i,outside:[]};if(!t.some(r=>r<0))return{inside:[],outside:i};let n=[],s=[];for(let r=0;r<i.length;r++){let o=i[r],a=i[(r+1)%i.length],l=t[r],c=t[(r+1)%i.length];if(l<=0&&n.push(o),l>=0&&s.push(o),l<0&&c>0||l>0&&c<0){let h=l/(l-c),d=o.map((u,f)=>u+(a[f]-u)*h);n.push(d),s.push(d)}}return{inside:$m(n),outside:$m(s)}}function ew(i,e){let t=Ym[i.kind]-Ym[e.kind];return t>0||t===0&&i.id<e.id}function tw(i,e){return e.planes.some(t=>Sa(i.normal,t.normal)>1-1e-12&&Math.abs(i.offset-t.offset)<=_s)}function nw(i,e){let t=[],n=i;for(let s of e.planes){let r=Q1(n,s);if(r.outside.length>=3&&t.push(r.outside),n=r.inside,n.length<3)break}return t}function iw(i,e,t){return e===0?[.5-t*i[2],.5+i[1]]:e===1?[.5+i[0],.5-t*i[2]]:[.5+t*i[0],.5+i[1]]}function Zm(i){let e=i.filter(n=>Y1.has(n.kind)).map(K1),t=new Map;for(let n of e){let s=e.filter(c=>c!==n&&j1(n,c)),r=[],o=[],a=[];for(let c=0;c<3;c++)for(let h of[-1,1]){let d=J1(n,c,h),u=[d.polygon];for(let f of s)if(!(tw(d,f)&&ew(n.part,f.part))&&(u=u.flatMap(p=>nw(p,f)),!u.length))break;for(let f of u)for(let p=1;p<f.length-1;p++){let x=[f[0],f[p],f[p+1]];if(!(Math.hypot(...$1(ba(x[1],x[0]),ba(x[2],x[0])))<=_s*_s))for(let m of x){let g=ba(m,n.part.position),v=n.axes.map((w,_)=>Sa(g,w)/n.part.size[_]);r.push(...m),o.push(...d.normal),a.push(...iw(v,c,h))}}}let l=new Xt;l.setAttribute("position",new Dt(r,3)),l.setAttribute("normal",new Dt(o,3)),l.setAttribute("uv",new Dt(a,2)),r.length&&(l.computeBoundingBox(),l.computeBoundingSphere()),t.set(n.part.id,l)}return t}var sw=(i,e,t)=>Math.max(e,Math.min(t,i)),rw=new Set(["wall","floor","roof"]);function Km(i,e,t=()=>({width:i.clientWidth,height:i.clientHeight})){let n=e.house||e.level||ut,s=new Uc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),s.shadowMap.enabled=!0,s.shadowMap.type=Bs,s.outputColorSpace=en,s.toneMapping=jo,s.toneMappingExposure=1.18;let r=new Eo;r.background=new Je("#c9ddd5"),r.fog=new Ao("#c9ddd5",30,90);let o=new tn(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new Xo("#fff3d9","#718169",2.7));let a=new Ko("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let l=new Zo("#fff1d0",4,11,2);r.add(l);let c=new Map,h=new Set,d=new Set,u=new Zn(1,1,1);h.add(u);let f=new Map;for(let P of["ug","eg","og","dg","garden"]){let he=new Mn;he.name=`Etage ${P}`,f.set(P,he),r.add(he)}let p=new Map,x=[],m=[];function g(P,he={}){let Y=`${P}:${JSON.stringify(he)}`;return c.has(Y)||c.set(Y,new Ni({color:P,roughness:.86,flatShading:!0,...he})),c.get(Y)}function v(P=!1){let he=document.createElement("canvas");he.width=he.height=256;let Y=he.getContext("2d");if(Y.fillStyle=P?"#edf4d8":"#fff1dc",Y.fillRect(0,0,256,256),P)for(let b=0;b<1200;b++)Y.fillStyle=b%2?"#d5e0bd":"#eef3d9",Y.fillRect(b*67%256,b*113%256,1,3);else{Y.strokeStyle="#c9b594",Y.lineWidth=1;for(let b=0;b<=256;b+=32){Y.beginPath(),Y.moveTo(0,b),Y.lineTo(256,b),Y.stroke();for(let k=b/32%2*96;k<256;k+=128)Y.beginPath(),Y.moveTo(k,b),Y.lineTo(k,b+32),Y.stroke()}for(let b=0;b<90;b++)Y.fillStyle=b%2?"#dfd0b8":"#e8dbc4",Y.fillRect(b*73%256,b*19%256,12+b%21,1)}let R=new Ar(he);return R.colorSpace=en,R.wrapS=R.wrapT=xr,R.repeat.set(3,3),d.add(R),R}let w=v(),_=v(!0),M=new lt,S=new qt,A=new sn,y=P=>M.compose(new z(...P.position),S.setFromEuler(A.set(...P.rotation||[0,0,0])),new z(...P.size)),E=Zm(n.obstacles);for(let P of E.values())h.add(P);let L=new Map;for(let P of n.obstacles){let he=f.get(P.floor)||f.get("garden");if(rw.has(P.kind)){let Y=g(P.color).clone();P.kind==="floor"&&(Y.map=P.floor==="garden"?_:w);let R=new Pt(E.get(P.id),Y);R.name=P.id,R.castShadow=P.kind!=="floor",R.receiveShadow=!0,he.add(R)}else{let Y=`${P.floor}|${P.color}|${P.kind==="glass"?"glass":"opaque"}`;L.has(Y)||L.set(Y,{group:he,color:P.color,glass:P.kind==="glass",parts:[]}),L.get(Y).parts.push(P)}}for(let{group:P,color:he,glass:Y,parts:R}of L.values()){let b=new Ns(u,g(he,Y?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),R.length);R.forEach((k,O)=>b.setMatrixAt(O,y(k))),b.instanceMatrix.needsUpdate=!0,b.castShadow=!Y,b.receiveShadow=!0,b.frustumCulled=!1,P.add(b)}let N=new Zn(.54,.23,.012);h.add(N);function U(P){let he=document.createElement("canvas");he.width=256,he.height=112;let Y=he.getContext("2d");Y.fillStyle="#f5e5bc",Y.fillRect(0,0,256,112),Y.strokeStyle="#ad8b58",Y.lineWidth=4,Y.strokeRect(4,4,248,104),Y.fillStyle="#463e30",Y.font="bold 44px system-ui",Y.textAlign="center",Y.textBaseline="middle",Y.fillText(P.signText??`${P.threshold} \u2605`,128,58);for(let O of[15,241])Y.beginPath(),Y.arc(O,56,3,0,Math.PI*2),Y.fill();let R=new Ar(he);R.colorSpace=en,d.add(R);let b=g("#ad8b58",{roughness:.7}),k=new Ni({map:R,roughness:.85});return[-1,1].map(O=>{let X=new Pt(N,[b,b,b,b,k,b]);return X.name=`${P.id}-sign-${O<0?"back":"front"}`,X.position.set(0,.37,O*(P.size[2]/2+.0065)),X.rotation.y=O<0?Math.PI:0,X.castShadow=X.receiveShadow=!0,X})}for(let P of n.doors){let he=new Mn;he.name=P.id;let Y=new Pt(u,g(P.color||"#b99469"));Y.name=`${P.id}-leaf`,Y.castShadow=Y.receiveShadow=!0;let R=Vr(P,!1);he.position.set(...R.position),he.rotation.set(...R.rotation),Y.scale.set(...R.size),he.add(Y,...U(P)),r.add(he),p.set(P.id,{door:P,mesh:he,leaf:Y,opened:!1})}function D(P,he=!0){let Y=p.get(P);if(!Y)return;Y.opened=!!he;let R=Vr(Y.door,Y.opened);Y.mesh.position.set(...R.position),Y.mesh.rotation.set(...R.rotation),Y.leaf.scale.set(...R.size)}let I=new Mn;I.name="Papierflieger",r.add(I);let F=new Set,B=new Set,W="classic",q=1,H=null,j=Xm(r);function J(P="classic",he=1,Y="none",R=null){let b=gs(P,he);W=b.form,q=b.size,H=$r(R);for(let k of B)k.dispose();B.clear();for(let k of F)k.dispose();F.clear(),I.clear();for(let k of b.parts){let O=[];for(let te of k.faces)for(let re=1;re+1<te.length;re++)for(let ve of[te[0],te[re],te[re+1]])O.push(...k.vertices[ve]);let X=new Xt;X.setAttribute("position",new Dt(O,3)),X.computeVertexNormals();let fe=new Ni({color:k.color,roughness:.77,side:On,flatShading:!0}),pe=new Pt(X,fe);pe.name=k.id,pe.userData.paperColor=k.color,pe.castShadow=pe.receiveShadow=!0,I.add(pe),B.add(X),F.add(fe)}return qm(I,H),j.setEffect(Y),j.clear(),b}function ie(P=n.start){j.reset(P)}function me(P){j.push(P)}J(),ie(),I.position.set(n.start.x,n.start.y,n.start.z);let We=new Mn;We.position.set(n.start.x,0,n.start.z),r.add(We);let qe=new Ds(.23,.014,5,28);h.add(qe);let Ze=new Pt(qe,new Pn({color:"#e5b45f",transparent:!0,opacity:.75}));Ze.rotation.x=Math.PI/2,Ze.position.y=.045,We.add(Ze);function ee(P=0){Ze.scale.setScalar(1+Math.max(0,P)*.3),Ze.material.opacity=.5+Math.min(1,P)*.45}let se=new Tr;for(let P=0;P<10;P++){let he=P*Math.PI/5+Math.PI/2,Y=P%2?.052:.115,R=Math.cos(he)*Y,b=Math.sin(he)*Y;P?se.lineTo(R,b):se.moveTo(R,b)}se.closePath();let xe=new Ho(se,{depth:.025,bevelEnabled:!1});h.add(xe);let Ge=new Ds(.165,.007,4,22);h.add(Ge);let Ae=[new Ni({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new Ni({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],ae=[new Pn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Pn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],De=new Pn({color:"#fff1b7",toneMapped:!1});for(let P of[...Ae,...ae,De])c.set(`star-${P.id}`,P);for(let P of n.collectibles){let he=ya(P),Y=new Mn,R=new Pt(xe,Ae[0]),b=[],k=new Mn;Y.name=P.id,Y.position.set(P.x,P.y,P.z),Y.add(R,k);for(let O=0;O<Number(he.under)+Number(he.zone);O++){let X=new Pt(Ge,ae[0]);X.scale.setScalar(1+O*.28),b.push(X),Y.add(X)}for(let O=0;O<3;O++){let X=new Pt(xe,De),fe=O*Math.PI*2/3;X.position.set(Math.cos(fe)*.17,Math.sin(fe)*.17,.02),X.scale.setScalar(.16),k.add(X)}P.under&&Y.scale.setScalar(.72),r.add(Y),x.push({data:P,mesh:Y,star:R,rings:b,sparkles:k,discovered:!1,collected:!1})}function ne(P){let he=[];for(let Y of x)!Y.collected&&P(Y.data)&&(Y.collected=!0,Y.mesh.visible=!1,he.push(Y.data.id));return he}function le(P=[]){let he=new Set(P);for(let Y of x){Y.collected=!1,Y.mesh.visible=!0,Y.discovered=he.has(Y.data.id),Y.star.material=Ae[Number(Y.discovered)];for(let R of Y.rings)R.material=ae[Number(Y.discovered)];Y.sparkles.visible=!Y.discovered}}for(let P of n.thermals){let he=new Ds(P.r*.75,.009,4,26);h.add(he);for(let Y=0;Y<7;Y++){let R=new Pt(he,new Pn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));R.rotation.x=Math.PI/2,r.add(R),m.push({mesh:R,thermal:P,phase:Y/7})}}let de=[];for(let P of e.blocks||[]){let he=new Pt(u,g("#dab87f"));he.scale.set(...P.size),he.castShadow=!0,r.add(he),de.push(he)}let ue={ceiling:!1,distance:1/0,intensity:0};function ge(P){let he=typeof e.getCeilingAt=="function"?e.getCeilingAt(P):1/0;return ue.distance=he-P.y,ue.ceiling=ue.distance<.45,ue.intensity=sw((.55-ue.distance)/.5,0,1),ue.ceiling}function Ve(P=1/60,he=0){let Y=e.plane?.position||I.position,R=ua(Y),b=R&&R.floor!=="garden",k=O=>!b||O==="garden"||(ps[O]??-9)<=(ps[R.floor]??0)+3.15;for(let[O,X]of f)X.visible=k(O);for(let O of p.values())O.mesh.visible=k(O.door.floor);for(let O=0;O<x.length;O++){let X=x[O];if(X.collected)continue;let fe=n.rooms.find(pe=>pe.id===X.data.roomId);X.mesh.visible=!b||fe?.floor===R.floor||fe?.floor==="garden",X.mesh.rotation.y=he*(X.discovered?.5:.85)+O*.61,X.mesh.position.y=X.data.y+Math.sin(he*1.7+O)*(X.data.under?.009:.026);for(let pe=0;pe<X.sparkles.children.length;pe++)X.sparkles.children[pe].scale.setScalar(.09+.12*Math.sin(he*3+O+pe*2)**2)}for(let O of m){let X=(he*.18+O.phase)%1;O.mesh.position.set(O.thermal.x,O.thermal.y+X*O.thermal.height,O.thermal.z),O.mesh.material.opacity=Math.sin(X*Math.PI)*.28,O.mesh.visible=Math.abs(O.mesh.position.y-Y.y)<4}for(let O=0;O<de.length;O++)de[O].position.copy(e.blocks[O].body.position),de[O].quaternion.copy(e.blocks[O].body.quaternion);l.position.set(Y.x,Y.y+.6,Y.z),l.intensity=R?.floor==="ug"?7:3,a.target.position.set(Y.x,1,Y.z),a.target.updateMatrixWorld(),a.position.set(Y.x-12,24,Y.z-14),j.update(P,he),ge(Y)}function Be(){let P=t()||{},he=Math.max(1,P.width||i.clientWidth||1),Y=Math.max(1,P.height||i.clientHeight||1);s.setSize(he,Y,!1),o.aspect=he/Y,o.updateProjectionMatrix()}function Ye(){s.render(r,o)}Be(),window.addEventListener("gameviewportchange",Be);function Ke(){j.dispose(),window.removeEventListener("gameviewportchange",Be);let P=new Set([...c.values(),...F]),he=new Set([...h,...B]);r.traverse(Y=>{if(Y.geometry&&he.add(Y.geometry),Y.material)for(let R of Array.isArray(Y.material)?Y.material:[Y.material])P.add(R);Y.shadow?.map&&Y.shadow.map.dispose()});for(let Y of he)Y.dispose();for(let Y of P)Y.dispose();for(let Y of d)Y.dispose();r.clear(),s.dispose()}return{renderer:s,scene:r,camera:o,plane:I,sling:We,effects:j,thermals:n.thermals,update:Ve,setAircraft:J,setDoorOpen:D,collectStars:ne,resetCollectibles:le,resetTrail:ie,updateTrail:me,updateSling:ee,updateCeiling:ge,warnings:ue,render:Ye,resize:Be,dispose:Ke,totalCollectibles:x.length,get collected(){return x.filter(P=>P.collected).length},get aircraft(){return{form:W,size:q,effect:j.effect,color:H}},sync:()=>Ve(1/60,0),wind:P=>Ve(1/60,P),collect:P=>ne(he=>Math.hypot(he.x-P.x,he.y-P.y,he.z-P.z)<=he.radius).length}}var wa=250,Ad="stubenflieger.house-profile.v1",bs=Object.freeze({min:.55,max:1.5,step:.05}),ow=[{id:"upgrade:size",category:"upgrades",name:"Verstellbare Gr\xF6\xDFe",price:1800,description:"55\u2013150 %: Gro\xDF gleitet l\xE4nger, klein kurvt enger und passt durch kleine L\xFCcken. Die Hitbox w\xE4chst mit."},{id:"upgrade:color",category:"colors",name:"Eigene Flugzeugfarbe",price:2e3,description:"Einmal freischalten, danach jede Farbe kostenlos w\xE4hlen. Die Original-Papierfarbe kannst du jederzeit wiederherstellen."},{id:"boost:lift",category:"boosts",name:"Aufwind",price:800,description:"Ein kurzer H\xF6hengewinn. Ein Einsatz in jedem Run."},{id:"boost:turbo",category:"boosts",name:"Turbo",price:1e3,description:"Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run."},{id:"boost:magnet",category:"boosts",name:"Sternmagnet",price:1400,description:"Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run."},{id:"boost:cushion",category:"boosts",name:"Luftpolster",price:1600,description:"F\xE4ngt nach der Aktivierung eine leichte Ber\xFChrung ab. Ein Einsatz in jedem Run."},{id:"plane:classic",category:"planes",name:"Klassiker",price:0,description:"Gerade Fl\xFCgelenden und ausgewogenes Flugverhalten."},{id:"plane:glider",category:"planes",name:"Gleiter",price:1200,description:"Breite, gerundete Fl\xFCgel. L\xE4ngeres Gleiten und gem\xFCtlicheres Tempo."},{id:"plane:dart",category:"planes",name:"Pfeil",price:1800,description:"Spitze Dreiecksform, h\xF6heres Tempo und weitere Kurven."},{id:"plane:stunt",category:"planes",name:"Kunstflieger",price:2500,description:"Gerade, kantige Fl\xFCgel und ein eckiges Leitwerk f\xFCr enge Kurven."},{id:"effect:none",category:"effects",name:"Ohne Effekt",price:0,description:"Die schlichte Papieroptik."},{id:"effect:mint",category:"effects",name:"Minzspur",price:300,description:"Eine dezente t\xFCrkise Flugspur."},{id:"effect:spark",category:"effects",name:"Sternenstaub",price:700,description:"Goldenes Funkeln hinter deinem Flieger."},{id:"effect:confetti",category:"effects",name:"Konfettispur",price:1e3,description:"Eine bunte Spur f\xFCr deinen Hausflug."}],Aa=Object.freeze([...ow,...ut.doors.map((i,e)=>({id:`door:${i.id}`,category:"doors",name:i.name||i.id,price:Math.min(4e3,500+e*200),description:"Bei jedem Run von Anfang an offen, solange du gekaufte T\xFCren aktiviert hast."}))].map(Object.freeze)),Ma=new Map(Aa.map(i=>[i.id,i])),Ed=new Map(ut.rooms.map(i=>[i.id,i.bonusId||i.id]));for(let i of Ed.values())Ed.set(i,i);var aw=ut.startRoomId||ut.startRoom||ut.rooms[0].id,oh=i=>JSON.parse(JSON.stringify(i));function ah(i={}){if(i.practice===!0)return 0;let e=r=>Number.isInteger(r)&&r>0?r:0,t=Number.isFinite(i.seconds)?Math.min(60,Math.max(0,i.seconds)):0,n=new Set(Array.isArray(i.roomIds)?i.roomIds.map(r=>Ed.get(r)).filter(r=>r&&r!==aw):[]);return(Object.hasOwn(i,"starIds")?Hm(i.starIds):e(i.stars)*150)+e(i.blocks)*100+Math.floor(t*10)+n.size*wa}function Qm(){return{version:2,points:0,highscore:0,owned:["plane:classic","effect:none"],equipped:{form:"classic",effect:"none",boosts:[],size:1,color:null},useDoorUnlocks:!0,creditedRuns:[],discoveredStarIds:[]}}function jm(i){if(i===null)return Qm();let e;try{e=JSON.parse(i)}catch{throw new Error("Dein gespeichertes Profil ist besch\xE4digt. Es wird nicht \xFCberschrieben.")}if(!e||![1,2].includes(e.version)||!Number.isSafeInteger(e.points)||e.points<0||!Number.isSafeInteger(e.highscore)||e.highscore<0||!Array.isArray(e.owned)||!e.owned.every(c=>typeof c=="string")||!Array.isArray(e.creditedRuns)||!e.creditedRuns.every(c=>typeof c=="string")||!e.equipped||e.version===2&&(!Array.isArray(e.discoveredStarIds)||!e.discoveredStarIds.every(c=>typeof c=="string")))throw new Error("Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht \xFCberschrieben.");let t=[...new Set(["plane:classic","effect:none",...e.owned])],n=e.equipped,s=Ma.has(`plane:${n.form}`)&&t.includes(`plane:${n.form}`)?n.form:"classic",r=Ma.has(`effect:${n.effect}`)&&t.includes(`effect:${n.effect}`)?n.effect:"none",o=[...new Set(Array.isArray(n.boosts)?n.boosts:[])].filter(c=>Ma.has(`boost:${c}`)&&t.includes(`boost:${c}`)).slice(0,2),a=t.includes("upgrade:size")&&Number.isFinite(n.size)?Math.min(bs.max,Math.max(bs.min,n.size)):1,l=null;if(t.includes("upgrade:color"))try{l=$r(n.color??null)}catch{}return{version:2,points:e.points,highscore:e.highscore,owned:t,equipped:{form:s,effect:r,boosts:o,size:a,color:l},useDoorUnlocks:e.useDoorUnlocks!==!1,creditedRuns:[...new Set(e.creditedRuns)],discoveredStarIds:e.version===2?[...new Set(e.discoveredStarIds)]:[]}}function Jm(i){if(typeof i!="string"||i.length<8||i.length>100)throw new Error("Dieser Run konnte nicht zugeordnet werden.")}function eg(i){let e=Qm(),t=null,n="Speichern im Browser ist gerade nicht m\xF6glich. Punkte und K\xE4ufe wurden nicht ver\xE4ndert. Bitte erlaube Website-Daten und versuche es erneut.";try{i||(i=globalThis.localStorage),e=jm(i.getItem(Ad))}catch(c){t=c.message?.includes("Profil")?c.message:n}function s(){if(!i)throw new Error(n);try{e=jm(i.getItem(Ad)),t=null}catch(c){throw t=c.message?.includes("Profil")?c.message:n,new Error(t)}}function r(c){try{i.setItem(Ad,JSON.stringify(c))}catch{throw t=n,new Error(t)}e=c,t=null}function o(){let{creditedRuns:c,...h}=e;return oh(h)}function a(c){s();let h=oh(e);return c(h),r(h),o()}function l(c,h){if(!c.owned.includes(h)||!Ma.has(h))throw new Error("Bitte schalte diesen Artikel zuerst frei.")}return{getProfile:o,getStatus:()=>({available:!t,error:t}),refresh:()=>(s(),o()),purchase(c){return a(h=>{let d=Ma.get(c);if(!d)throw new Error("Diesen Artikel gibt es nicht.");if(h.owned.includes(c))throw new Error("Dieser Artikel ist bereits dauerhaft freigeschaltet.");if(h.points<d.price)throw new Error("Daf\xFCr fehlen noch Punkte.");h.points-=d.price,h.owned.push(c)})},equipForm(c){return a(h=>{l(h,`plane:${c}`),h.equipped.form=c})},equipEffect(c){return a(h=>{l(h,`effect:${c}`),h.equipped.effect=c})},setColor(c){return c=$r(c),a(h=>{c!==null&&l(h,"upgrade:color"),h.equipped.color=c})},equipBoosts(c){return a(h=>{if(!Array.isArray(c)||c.length>2||new Set(c).size!==c.length)throw new Error("W\xE4hle h\xF6chstens zwei verschiedene Boosts.");c.forEach(d=>l(h,`boost:${d}`)),h.equipped.boosts=[...c]})},setSize(c){return a(h=>{if(l(h,"upgrade:size"),!Number.isFinite(c)||c<bs.min||c>bs.max)throw new Error("W\xE4hle eine Gr\xF6\xDFe zwischen 55 und 150 %.");h.equipped.size=Math.round(c*100)/100})},setPermanentDoorsEnabled(c){return a(h=>{h.useDoorUnlocks=!!c})},creditStar(c,h){Jm(c);let d=ya(h);s();let u=!e.discoveredStarIds.includes(d.id),f=u?d.basePoints:0;if(u){let p=oh(e);if(!Number.isSafeInteger(p.points+f))throw new Error("Das Punkteguthaben ist zu gro\xDF.");p.points+=f,p.discoveredStarIds.push(d.id),r(p)}return{starId:d.id,firstDiscovery:u,basePoints:d.basePoints,bonus:f,totalPoints:d.basePoints+f,credited:f,points:e.points,duplicate:!u}},creditRun(c,h){if(Jm(c),h?.practice===!0)return{credited:0,points:e.points,score:0,practice:!0};s();let d=ah(h);if(!Number.isSafeInteger(d))throw new Error("Dieses Flugergebnis ist ung\xFCltig.");if(e.creditedRuns.includes(c))return{credited:0,points:e.points,score:d,duplicate:!0};let u=oh(e);if(!Number.isSafeInteger(u.points+d))throw new Error("Das Punkteguthaben ist zu gro\xDF.");return u.points+=d,u.highscore=Math.max(u.highscore,d),u.creditedRuns.push(c),r(u),{credited:d,points:u.points,score:d,duplicate:!1}}}}function tg(i,e,t=globalThis.crypto.randomUUID(),{practice:n=!1}={}){let s=new Set,r=new Set,o=new Set,a=new Set(i.collectibles.map(p=>p.id)),l=new Map(i.rooms.map(p=>[p.id,p.bonusId||p.id])),c=new Set(l.values()),h=i.startRoomId||i.startRoom||i.rooms[0].id;r.add(h);let d=new Set(e.owned||[]);if(n)for(let p of i.doors)o.add(p.id);else if(e.useDoorUnlocks!==!1)for(let p of i.doors)d.has(`door:${p.id}`)&&o.add(p.id);let u=[...new Set(e.equipped?.boosts||[])].filter(p=>d.has(`boost:${p}`)).slice(0,2),f=new Set;return{id:t,practice:n,stars:s,visited:r,opened:o,charges:u,used:f,collect(p){if(!a.has(p)||s.has(p))return null;s.add(p);let x=i.doors.filter(m=>!o.has(m.id)&&s.size>=m.threshold);for(let m of x)o.add(m.id);return x},enterRoom(p){return p=l.get(p)||p,!c.has(p)||r.has(p)?!1:(r.add(p),!0)},useBoost(p){let x=u[p];return!x||f.has(x)?null:(f.add(x),x)},nextDoor(){return i.doors.filter(p=>!o.has(p.id)).sort((p,x)=>p.threshold-x.threshold)[0]||null},summary(p=0,x=0){return{stars:s.size,starIds:[...s],blocks:x,seconds:p,roomIds:[...r].filter(m=>m!==h),complete:s.size===a.size,...n?{practice:!0}:{}}}}}var lw=[["upgrades","Gr\xF6\xDFe"],["doors","T\xFCren"],["boosts","Boosts"],["planes","Flugzeuge"],["colors","Farben"],["effects","Effekte"]],lh=i=>i.toLocaleString("de-DE");function Ot(i,e,t){let n=document.createElement(i);return e!==void 0&&(n.textContent=e),t&&(n.className=t),n}function Td(i,e,t=null){let n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg");s.setAttribute("viewBox","-0.29 -0.22 0.58 0.44"),s.setAttribute("class","aircraft-preview"),s.setAttribute("role","img"),s.setAttribute("aria-label",`${e} \u2013 Form von oben`);let r=gs(i).parts.flatMap(o=>o.faces.map(a=>{let l=a.map(f=>o.vertices[f]),[c,h,d]=l,u=(h[2]-c[2])*(d[0]-c[0])-(h[0]-c[0])*(d[2]-c[2]);return{vertices:l,normalY:u,color:_a(o,t),height:l.reduce((f,p)=>f+p[1],0)/l.length}})).filter(o=>o.normalY>1e-9).sort((o,a)=>o.height-a.height);for(let o of r){let a=document.createElementNS(n,"polygon");a.setAttribute("points",o.vertices.map(l=>`${l[0]},${l[2]}`).join(" ")),a.setAttribute("fill",o.color),a.setAttribute("stroke","#a99771"),a.setAttribute("stroke-width",".0012"),a.setAttribute("stroke-linejoin","round"),s.append(a)}return s}function ng({container:i,progression:e,onChange:t=()=>{},onClose:n=()=>{}}){let s="upgrades",r="";function o(c,h,d){try{let u=c();r=h,t(u)}catch(u){r=u.message}l(d)}function a(c,h,d){let u=Ot("button",c,"shop-action");return u.type="button",u.dataset.shopFocus=d,u.addEventListener("click",h),u}function l(c){let h=e.getProfile();try{h=e.refresh()}catch(x){r=x.message}i.replaceChildren();let d=Ot("div",void 0,"shop-wallet");d.append(Ot("strong",`${lh(h.points)} Punkte`),Ot("span",`Dein Rekord: ${lh(h.highscore)} Punkte`)),i.append(d,Ot("p","Alles bleibt freigeschaltet. Dein Guthaben, deine K\xE4ufe und deine Ausr\xFCstung werden nur in diesem Browser gespeichert. Beim L\xF6schen der Website-Daten gehen sie verloren.","shop-note"));let u=Ot("nav",void 0,"shop-tabs");u.setAttribute("aria-label","Shop-Bereiche"),lw.forEach(([x,m])=>{let g=a(m,()=>{s=x,r="",l(`category:${x}`)},`category:${x}`);g.setAttribute("aria-pressed",String(s===x)),u.append(g)}),i.append(u);let f=Ot("p",r||e.getStatus().error||"Einmal kaufen, in jedem Run benutzen.","shop-status");if(f.setAttribute("role","status"),f.setAttribute("aria-live","polite"),i.append(f),s==="doors"){let x=Ot("label",void 0,"shop-setting"),m=document.createElement("input");m.type="checkbox",m.checked=h.useDoorUnlocks,m.dataset.shopFocus="doors-enabled",m.addEventListener("change",()=>o(()=>e.setPermanentDoorsEnabled(m.checked),m.checked?"Gekaufte T\xFCren sind ab dem n\xE4chsten Run offen.":"Der n\xE4chste Run startet wieder mit geschlossenen T\xFCren.","doors-enabled")),x.append(m,document.createTextNode("Gekaufte T\xFCren beim Start \xF6ffnen")),i.append(x,Ot("p","Sterne \xF6ffnen weitere T\xFCren im laufenden Run. F\xFCr jeden erstmals besuchten Raum gibt es 250 Punkte. Startzimmer und bereits offene T\xFCren allein geben keinen Bonus.","shop-note"))}if(s==="boosts"&&i.append(Ot("p",`W\xE4hle bis zu zwei Boosts (${h.equipped.boosts.length}/2). Jeder ausger\xFCstete Boost ist in jedem Run einmal einsetzbar und wird beim n\xE4chsten Start aufgef\xFCllt.`,"shop-note")),s==="upgrades"&&h.owned.includes("upgrade:size")){let x=Ot("label",void 0,"shop-size");x.htmlFor="plane-size";let m=Ot("output",`${Math.round(h.equipped.size*100)} %`);m.htmlFor="plane-size",x.append(document.createTextNode("Flugzeuggr\xF6\xDFe "),m);let g=document.createElement("input");g.id="plane-size",g.type="range",g.min=bs.min,g.max=bs.max,g.step=bs.step,g.value=h.equipped.size,g.dataset.shopFocus="size",g.setAttribute("aria-valuetext",`${Math.round(h.equipped.size*100)} Prozent`),g.addEventListener("input",()=>{m.textContent=`${Math.round(Number(g.value)*100)} %`,g.setAttribute("aria-valuetext",`${Math.round(Number(g.value)*100)} Prozent`)}),g.addEventListener("change",()=>o(()=>e.setSize(Number(g.value)),"Gr\xF6\xDFe gespeichert. Sie gilt ab dem n\xE4chsten Run.","size")),i.append(x,g,Ot("p","Klein: wendiger, schmale L\xFCcken. Gro\xDF: l\xE4ngeres Gleiten, mehr Spannweite. Form und Kollisionsfl\xE4che \xE4ndern sich gemeinsam.","shop-note"))}let p=Ot("div",void 0,"shop-grid");s==="planes"&&p.classList.add("aircraft-grid"),s==="colors"&&p.classList.add("color-grid"),Aa.filter(x=>x.category===s).forEach(x=>{let m=Ot("article",void 0,"shop-card"),g=h.owned.includes(x.id);m.append(Ot("h3",x.name)),x.category==="planes"&&m.append(Td(x.id.split(":")[1],x.name,h.equipped.color));let v;if(x.category==="colors"&&(v=Td(h.equipped.form,"Dein Flugzeug",h.equipped.color),v.id="color-preview",v.classList.add("shop-color-preview"),m.append(v)),m.append(Ot("p",x.description),Ot("strong",g?"Dauerhaft freigeschaltet":`${lh(x.price)} Punkte`,"shop-price")),g){if(x.category==="colors"){m.append(Ot("p",h.equipped.color?`Ausger\xFCstete Farbe: ${h.equipped.color}`:"Ausger\xFCstet: Original-Papierfarbe","shop-color-current"));let w=Ot("label","W\xE4hle deine Flugzeugfarbe","shop-color-label");w.htmlFor="plane-color";let _=Ot("div",void 0,"shop-color-controls"),M=document.createElement("input");M.type="color",M.id="plane-color",M.dataset.shopFocus="color:picker",M.value=h.equipped.color||_a(gs(h.equipped.form).parts[0]);let S=Ot("output",M.value,"shop-color-code");S.id="plane-color-hex",S.htmlFor="plane-color";let A=a("Farbe \xFCbernehmen",()=>o(()=>e.setColor(M.value),"Flugzeugfarbe gespeichert. Weitere Farbwechsel sind kostenlos.","color:apply"),"color:apply");A.id="color-apply",A.disabled=!e.getStatus().available||M.value===h.equipped.color,M.disabled=!e.getStatus().available,M.addEventListener("input",()=>{S.textContent=M.value;let E=Td(h.equipped.form,"Vorschau deiner Flugzeugfarbe",M.value);E.id="color-preview",E.classList.add("shop-color-preview"),v.replaceWith(E),v=E,A.disabled=!e.getStatus().available||M.value===h.equipped.color});let y=a("Original-Papierfarbe",()=>o(()=>e.setColor(null),"Original-Papierfarbe wiederhergestellt.","color:reset"),"color:reset");y.id="color-reset",y.disabled=h.equipped.color===null||!e.getStatus().available,_.append(M,S),m.append(w,_,Ot("p","Die Vorschau zeigt deine aktuelle Flugzeugform. \xDCbernehmen speichert deine Auswahl kostenlos.","shop-note"),A,y)}else if(x.category==="planes"||x.category==="effects"){let w=x.id.split(":")[1],_=x.category==="planes",M=(_?h.equipped.form:h.equipped.effect)===w,S=a(M?"Ausger\xFCstet":"Ausr\xFCsten",()=>o(()=>_?e.equipForm(w):e.equipEffect(w),`${x.name} ausger\xFCstet.`,x.id),x.id);S.disabled=M,m.append(S)}else if(x.category==="boosts"){let w=x.id.split(":")[1],_=h.equipped.boosts.includes(w),M=a(_?"Ablegen":"Ausr\xFCsten",()=>{let S=_?h.equipped.boosts.filter(A=>A!==w):[...h.equipped.boosts,w];o(()=>e.equipBoosts(S),_?`${x.name} abgelegt.`:`${x.name} ausger\xFCstet.`,x.id)},x.id);M.disabled=!_&&h.equipped.boosts.length>=2,m.append(M)}}else{let w=a("Dauerhaft freischalten",()=>o(()=>e.purchase(x.id),`${x.name} ist dauerhaft freigeschaltet.`,x.id),x.id);w.disabled=h.points<x.price||!e.getStatus().available,m.append(w),h.points<x.price&&m.append(Ot("small",`Noch ${lh(x.price-h.points)} Punkte`))}p.append(m)}),i.append(p,a("Zur\xFCck zum Start",n,"close")),c&&([...i.querySelectorAll("[data-shop-focus]")].find(m=>m.dataset.shopFocus===c&&!m.disabled)||u.querySelector('[aria-pressed="true"]'))?.focus()}return{render:l,destroy:()=>i.replaceChildren()}}var at=i=>document.getElementById(i);async function Cd(i,e={}){let t=await fetch(i,{...e,signal:AbortSignal.timeout(1e4)}),n=await t.json();if(!t.ok)throw new Error(n.error||"Die Bestenliste ist gerade nicht erreichbar.");return n}function ig(){let i=null,e=null,t=0;try{at("pilot-name").value=localStorage.getItem("stubenflieger.pilot")||""}catch{}function n(){i=e=null,at("save-score").disabled=!0,at("pilot-name").disabled=!0,at("score-status").textContent=""}function s(){i=Cd("/api/house-runs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scoreVersion:2})}).then(a=>a.run).catch(()=>null),e=null}function r({blocks:a,stars:l,starIds:c,seconds:h,roomIds:d,complete:u,practice:f}){if(f){n();return}e={blocks:a,stars:l,starIds:[...c],flightMs:Math.floor(h*1e3),roomIds:[...d],complete:!!u,ticket:i,saved:!1},at("save-score").disabled=h<.5,at("save-score").textContent="Eintragen",at("pilot-name").disabled=!1,at("score-status").textContent=h<.5?"Dieser Flug war zu kurz f\xFCr die Bestenliste.":"Trage deinen Flug mit einem frei gew\xE4hlten Pilotnamen ein."}async function o(){let a=++t,l=document.activeElement;!at("leaderboard").hidden&&(l===at("refresh-leaderboard")||at("ranking-table").contains(l))&&at("close-leaderboard").focus(),at("leaderboard-status").textContent="Bestenliste wird geladen \u2026",at("ranking-table").hidden=!0,at("refresh-leaderboard").disabled=!0;try{let{entries:c}=await Cd("/api/house-leaderboard?scoreVersion=2");if(a!==t)return;at("ranking-body").replaceChildren(),c.forEach((h,d)=>{let u=document.createElement("tr");for(let f of[d+1,h.name,`${h.rooms} R\xE4ume \xB7 ${h.stars} \u2605 \xB7 ${(h.flightMs/1e3).toFixed(1)} s${h.complete?" \xB7 Haus geschafft":""}`,h.points.toLocaleString("de-DE")]){let p=document.createElement("td");p.textContent=String(f),u.append(p)}at("ranking-body").append(u)}),at("ranking-table").hidden=c.length===0,at("leaderboard-status").textContent=c.length?"Die 20 besten Hausfl\xFCge \xB7 gewichtete Sternpunkte \xB7 ohne Erstfund-Bonus":"Noch keine Hausfl\xFCge mit der neuen Sternwertung eingetragen. Fliege die erste Bestmarke!"}catch{a===t&&(at("leaderboard-status").textContent="Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal.")}finally{a===t&&(at("refresh-leaderboard").disabled=!1)}}return at("refresh-leaderboard").onclick=()=>{o()},at("score-form").addEventListener("submit",async a=>{if(a.preventDefault(),!e||e.saved)return;let l=e,c=at("pilot-name").value.trim();document.activeElement===at("save-score")&&at("pilot-name").focus(),at("save-score").disabled=!0,at("score-status").textContent="Dein Flug wird eingetragen \u2026";try{let h=await l.ticket;if(l!==e)return;if(!h)throw new Error("Dieser Flug konnte nicht online gestartet werden. Pr\xFCfe deine Verbindung und fliege noch eine Runde.");let d=await Cd("/api/house-leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({run:h,name:c,scoreVersion:2,starIds:l.starIds,blocks:l.blocks,stars:l.stars,flightMs:l.flightMs,roomIds:l.roomIds,complete:l.complete})});if(l!==e)return;l.saved=!0,at("save-score").textContent="\u2713 Gespeichert",!at("result").hidden&&document.activeElement===at("pilot-name")&&at("result-leaderboard").focus(),at("pilot-name").disabled=!0,at("score-status").textContent=`${d.points.toLocaleString("de-DE")} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;try{localStorage.setItem("stubenflieger.pilot",c)}catch{}}catch(h){l===e&&(at("score-status").textContent=h.message,at("save-score").disabled=!1)}}),{beginRun:s,setResult:r,clearResult:n,refresh:o}}var cw=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),sg='input,textarea,select,[contenteditable]:not([contenteditable="false"])';function rg({window:i,document:e,keys:t,getState:n,getDialog:s,launcher:r,actions:o}){let a=!1;function l(){t.clear(),a=!1,o.cancelCharge()}function c(f){if(f.defaultPrevented||f.isComposing||f.ctrlKey||f.altKey||f.metaKey)return;let p=s();if(f.code==="Tab"){l(),!p&&n()==="flying"&&(f.preventDefault(),o.pause());return}if(f.code==="Escape"){if(f.preventDefault(),f.repeat)return;l(),p==="leaderboard"?o.closeBoard():p==="shop"?o.closeShop?.():p==="menu"?o.closeMenu():p==="result"?o.reset():p!=="error"&&o.pause();return}if(f.target.closest?.(sg)||p==="error")return;if(f.code==="KeyV"&&!p){f.preventDefault(),f.repeat||o.camera?.();return}let m={KeyR:"reset",KeyM:p==="menu"?"closeMenu":p==="leaderboard"?"closeBoard":p==="shop"?"closeShop":"menu",KeyB:"board",KeyT:"sound",KeyG:p==="shop"?"closeShop":"shop"}[f.code];if(m&&o[m]){f.preventDefault(),f.repeat||(l(),o[m]());return}if(f.code==="KeyP"){(!p||p==="paused")&&(f.preventDefault(),f.repeat||(l(),o.pause()));return}if(p)return;if((f.code==="Digit1"||f.code==="Digit2")&&n()==="flying"){f.preventDefault(),f.repeat||o.boost?.(f.code==="Digit1"?0:1);return}let g=f.target.closest?.('button,a[href],summary,[role="button"]');if(f.code==="Space"){if(g&&g!==r)return;f.preventDefault(),!f.repeat&&n()==="ready"&&(a=o.beginCharge()===!0);return}if(f.code==="Enter"){!g&&n()==="ready"&&(f.preventDefault(),f.repeat||o.quickLaunch());return}cw.has(f.code)&&(n()==="ready"||n()==="flying")&&(f.preventDefault(),t.add(f.code))}function h(f){t.delete(f.code),f.code==="Space"&&a&&(f.preventDefault(),a=!1,!s()&&n()==="ready"&&!f.target.closest?.(sg)?o.release():o.cancelCharge())}function d(){l(),o.suspend()}function u(){e.hidden&&d()}return e.addEventListener("keydown",c),e.addEventListener("keyup",h),i.addEventListener("blur",d),e.addEventListener("visibilitychange",u),{clear:l,destroy(){l(),e.removeEventListener("keydown",c),e.removeEventListener("keyup",h),i.removeEventListener("blur",d),e.removeEventListener("visibilitychange",u)}}}function og(i,e){let t=[...e.querySelectorAll(".modal")],n='button:not(:disabled),a[href],summary,input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])',s=null;function r(){return s?[...s.querySelectorAll(n)].filter(l=>!l.closest("[hidden],[inert]")&&l.getClientRects().length):[]}function o(l){(l||r()[0]||s)?.focus({preventScroll:!1})}function a(l,c){s=l?i.getElementById(l):null;for(let h of t)h.hidden=h!==s,h.tabIndex=-1;for(let h of e.children)h.inert=!!s&&h!==s;o(c)}return i.addEventListener("keydown",l=>{if(!s||l.key!=="Tab")return;let c=r(),h=c[0],d=c.at(-1),u=i.activeElement;c.length?c.includes(u)?l.shiftKey&&u===h?(l.preventDefault(),o(d)):!l.shiftKey&&u===d&&(l.preventDefault(),o(h)):(l.preventDefault(),o(l.shiftKey?d:h)):(l.preventDefault(),o(s))}),i.addEventListener("focusin",l=>{s&&!s.contains(l.target)&&o()}),{open:a,close(l){a(null,l)},current(){return s?.id??null}}}function ag(i,{traceCamera:e=(a,l)=>l,mode:t="chase",chaseDistance:n=1.45,chaseHeight:s=.62,lookAhead:r=1.3,levelChase:o=!0}={}){let a=i.near,l=new z,c=new z,h=new z,d=new z,u=new qt,f=new z,p=t==="fpv"?"fpv":"chase",x=!1,m=null,g=.008;function v(S){let A=S==="fpv"?"fpv":"chase";A!==p&&(p=A,x=!1);let y=p==="fpv"?g:a;return i.near!==y&&(i.near=y,i.updateProjectionMatrix()),p}function w(){x=!1,m=null}function _({position:S,quaternion:A,heading:y,length:E=.33,model:L,id:N=L},{dt:U=1/60,immediate:D=!1,ready:I=!1}={}){N!==m&&(x=!1,m=N);let F=Number.isFinite(E)&&E>0?E:.33;if(g=Math.min(.012,F*.025),v(p),u.copy(A).normalize(),p==="fpv"){f.set(0,F*.14,-F*.12).applyQuaternion(u),c.copy(S).add(f),i.position.copy(e(S,c,.015)),i.quaternion.copy(u),x=!0;return}if(i.up.set(0,1,0),l.set(0,0,-1).applyQuaternion(u),o&&(Number.isFinite(y)?l.set(Math.sin(y),0,-Math.cos(y)):(l.y=0,l.normalize())),c.copy(S).addScaledVector(l,I?-.42:-n),I&&(c.x-=1.25),c.y+=I?.95:s,c.copy(e(S,c,.12)),h.copy(S).addScaledVector(l,I?.25:r),h.y+=.08,D||!x)i.position.copy(c),d.copy(h),x=!0;else{let B=1-Math.exp(-Math.max(0,Math.min(.1,U))*9);i.position.lerp(c,B),d.lerp(h,B)}i.position.copy(e(S,i.position,.1)),i.lookAt(d)}function M(){w(),i.near=a,i.updateProjectionMatrix()}return v(p),{setMode:v,update:_,reset:w,dispose:M,get mode(){return p}}}var lg="stubenflieger.camera.v1";function cg(){try{return localStorage.getItem(lg)==="fpv"?"fpv":"chase"}catch{return"chase"}}function hg(i){try{localStorage.setItem(lg,i==="fpv"?"fpv":"chase")}catch{}}function Rd(i,e){i.textContent=e==="fpv"?"FPV":"Au\xDFen",i.setAttribute("aria-pressed",String(e==="fpv")),i.setAttribute("aria-label",e==="fpv"?"Zur Au\xDFenansicht wechseln (V)":"Zur FPV-Ansicht wechseln (V)"),i.title=e==="fpv"?"FPV aktiv \xB7 V: Au\xDFenansicht":"Au\xDFenansicht aktiv \xB7 V: FPV"}var hw=.25,uw=1,Id=.5,ki=1e-8,ch=(i,e,t)=>Math.max(e,Math.min(t,i)),Zr=i=>new C(...["x","y","z"].map(e=>Number.isFinite(i?.[e])?ch(i[e],-100,100):0)),hh=i=>({x:i.x,y:i.y,z:i.z}),dw=i=>{let e=new Nt(i?.x??0,i?.y??0,i?.z??0,i?.w??1);return![e.x,e.y,e.z,e.w].every(Number.isFinite)||e.x**2+e.y**2+e.z**2+e.w**2<ki?new Nt:(e.normalize(),e)};function uh(i=Id){return typeof i=="number"&&Number.isFinite(i)?ch(i,hw,uw):Id}function ug(i,e=Id){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,i)*uh(e):0}function fw(i,e){let t=Zr(i),n=Zr(e);return n.lengthSquared()<ki?hh(t.scale(-1)):(n.normalize(),hh(t.vsub(n.scale(2*Math.min(0,t.dot(n))))))}function dg(i,{bounds:e=i.level?.bounds}={}){let t=i.plane,n=null,s=[],r=0;function o(g){let v=s.at(-1);v&&v.position.distanceSquared(t.position)<.04**2||(s.push({position:t.position.clone(),quaternion:t.quaternion.clone(),velocity:Zr(g)}),s.length>100&&s.shift())}function a(g){t.position.copy(g.position),t.quaternion.copy(g.quaternion),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.aabbNeedsUpdate=!0,i.world.broadphase.dirty=!0}function l(){n=null,s=[],r=0,o(new C)}function c(g){let v=[1/0,1/0,1/0],w=[-1/0,-1/0,-1/0];for(let _ of i.aircraft.parts)for(let M of _.vertices){let S=g.vmult(new C(...M));["x","y","z"].forEach((A,y)=>{v[y]=Math.min(v[y],S[A]),w[y]=Math.max(w[y],S[A])})}return{min:v,max:w}}function h(g,v,w){if(!e)return null;let _=c(t.quaternion),M=c(w),S=["x","y","z"],A=1,y=null;for(let[E,L]of S.entries()){let N=e[`min${L.toUpperCase()}`],U=e[`max${L.toUpperCase()}`];if(!Number.isFinite(N)||!Number.isFinite(U))continue;let D=Math.min(_.min[E],M.min[E]),I=Math.max(_.max[E],M.max[E]);for(let F of[-1,1]){let B=F<0?t.position[L]+D-N:U-t.position[L]-I,W=v[L]*F*g;if(B<-1e-4||W>0&&W>=B){let q=B<0?0:B/W;q<=A&&(A=q,y=new C,y[L]=-F)}}}return y?{t:ch(A,0,1),normal:y,body:{kind:"bounds",obstacleId:"practice-bounds"}}:null}function d(g,v,w){let _=h(g,v,w);if(!_)return i.advance(g,v,w);let M=Math.max(0,_.t-.001/Math.max(ki,v.length()*g)),S=new Nt;t.quaternion.slerp(w,M,S);let A=i.advance(g*M,v,S);return A.collided?A:{...A,collided:!0,normal:_.normal,body:_.body}}function u(g,v){if(Math.hypot(g.x,g.z)>ki)return Math.atan2(g.x,-g.z);let w=v.vmult(new C(0,0,-1));return Math.atan2(w.x,-w.z)}function f(g,v){let w=Zr(fw(g,v)),_=Zr(v),M=Math.max(.6,g.length());if(_.lengthSquared()>ki){_.normalize();let E=Math.max(.4,M*.3);w=w.vadd(_.scale(Math.max(0,E-w.dot(_))))}w.lengthSquared()<ki&&(w=t.quaternion.vmult(new C(0,.4,.8))),w.scale(M/w.length(),w);let S=u(w,t.quaternion),A=Math.hypot(w.x,w.z),y=new Nt;y.setFromEuler(Math.atan2(w.y,A)*.7,-S,0,"YXZ"),n={velocity:w,heading:S,target:y,start:t.position.clone(),normal:_,time:0}}function p(g){let v={position:t.position.clone(),quaternion:t.quaternion.clone()};for(let w=s.length-1;w>=0;w--){let _=s[w];if(!(_.position.distanceSquared(v.position)<.12**2)&&(a(_),!h(0,new C,_.quaternion)&&!i.advance(0,new C,_.quaternion).collided))return s=s.slice(0,w+1),f(_.velocity.lengthSquared()>ki?_.velocity:g,null),r=0,!0}return a(v),!1}function x(g){let v={position:t.position.clone(),quaternion:t.quaternion.clone()},w=[g.scale(-1),new C(0,1,0),new C(0,-1,0),new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1)],_=null,M=.002;for(let S of w){if(S.lengthSquared()<ki)continue;S.normalize(),S.scale(Math.max(.6,g.length()),S),a(v),d(.08/S.length(),S,v.quaternion);let A=t.position.distanceTo(v.position);A>M&&(M=A,_={position:t.position.clone(),quaternion:t.quaternion.clone(),velocity:S})}return a(_||v),_?(f(_.velocity.scale(-1),null),r=0,!0):!1}function m(g,v,w=t.quaternion){let _=typeof g=="number"&&Number.isFinite(g)?ch(g,0,.1):0,M=!!n,S=t.position.clone(),A=n?n.velocity:Zr(v),y=n?t.quaternion.clone():dw(w);if(_===0)return{bounced:!1,recovering:M,relocated:!1,contact:{collided:!1,body:null,normal:null},heading:n?.heading??u(A,t.quaternion),speed:Math.hypot(A.x,A.z),verticalSpeed:A.y,velocity:hh(A)};let E=d(_,A,y),L=E.collided,N=!1;if(E.collided)r=t.position.distanceSquared(S)<.002**2?r+1:0,f(A,E.normal),r>=2&&(N=p(A)||x(A));else if(n){r=0,n.time+=_;let I=t.position.vsub(n.start);(n.normal.lengthSquared()>ki?I.dot(n.normal):I.length())>=i.aircraft.boundingRadius+.04&&(d(0,new C,n.target).collided?n.time>2&&(N=p(A)||x(A)):n=null)}E.collided||o(A);let U=n?.velocity||A,D=n?.heading??u(U,t.quaternion);return{bounced:L,recovering:M||!!n,relocated:N,contact:E,heading:D,speed:Math.hypot(U.x,U.z),verticalSpeed:U.y,velocity:hh(U)}}return l(),{reset:l,advance:m,get recovering(){return!!n}}}var Pd="stubenflieger.mobile.v1",fg=()=>({joystickSide:"left",autoFullscreen:!0}),Kr=(i,e=1)=>Number.isFinite(i)&&i>0?i:e,pg=i=>Number.isFinite(i)?Math.round(Math.max(0,i)):0;function mg(i){return{joystickSide:i?.joystickSide==="right"?"right":"left",autoFullscreen:typeof i?.autoFullscreen=="boolean"?i.autoFullscreen:!0}}function dh(i=0,e=globalThis.window){let t=e?.visualViewport,n=t&&Math.abs((t.scale??1)-1)<.01,s=Math.max(1,Math.round(n?Kr(t.width,Kr(e?.innerWidth)):Kr(e?.innerWidth))),r=Math.max(1,Math.round(n?Kr(t.height,Kr(e?.innerHeight)):Kr(e?.innerHeight))),o=n?pg(t.offsetLeft):0,a=n?pg(t.offsetTop):0,l=Number.isFinite(i)&&Math.abs(Math.round(i/90))%2===1;return{width:l?r:s,height:l?s:r,left:o,top:a,centerX:o+s/2,centerY:a+r/2,physicalWidth:s,physicalHeight:r}}function gg({root:i,sideSelect:e,autoFullscreenInput:t,fullscreenButton:n,statusNode:s,onSideChange:r=()=>{},onViewportChange:o=()=>{},getRotation:a=()=>0,window:l=globalThis.window,document:c=l?.document??globalThis.document,storage:h}={}){if(i??=c?.documentElement,h===void 0)try{h=l?.localStorage}catch{h=null}let d=fg();try{d=mg(JSON.parse(h?.getItem(Pd)||"null"))}catch{}let u=[],f=l?.matchMedia?.("(display-mode: standalone)"),p=l?.matchMedia?.("(pointer: coarse)"),x=c?.documentElement,m=dh(a(),l),g=null,v=!1,w=!1,_="",M=!1,S=null,A=()=>!!(c?.fullscreenElement||c?.webkitFullscreenElement),y=()=>!!(f?.matches||l?.navigator?.standalone===!0),E=()=>x?.requestFullscreen||x?.webkitRequestFullscreen,L=()=>c?.exitFullscreen||c?.webkitExitFullscreen,N=()=>typeof E()=="function"&&c?.fullscreenEnabled!==!1&&c?.webkitFullscreenEnabled!==!1,U=()=>!!(p?.matches||l?.navigator?.maxTouchPoints>0),D=A();function I(ae,De,ne){ae?.addEventListener&&(ae.addEventListener(De,ne),u.push(()=>ae.removeEventListener(De,ne)))}function F(){if(v)return;let ae=A(),De=y(),ne=N();n&&(n.disabled=De||!ae&&!ne,n.textContent=ae?"Vollbild beenden":De?"Als App ge\xF6ffnet":"Vollbild",n.setAttribute("aria-pressed",String(ae||De)));let le;De?le="Als App ge\xF6ffnet \u2013 ohne Browser-Adressleiste.":ae?le="Vollbild aktiv. Mit der Systemgeste oder Esc beenden.":ne?_?le=_:w?le="Vollbild beendet. Mit \u201EVollbild\u201C kannst du es wieder einschalten.":d.autoFullscreen&&U()?le="Im Querformat startet Vollbild bei der n\xE4chsten Ber\xFChrung, wenn der Browser es erlaubt.":le="Vollbild l\xE4sst sich \xFCber die Schaltfl\xE4che einschalten.":le="Dieser Browser bietet kein Spiel-Vollbild. Ohne Adressleiste: Zum Home-Bildschirm hinzuf\xFCgen; auf dem iPhone \u201EAls Web-App \xF6ffnen\u201C w\xE4hlen.",M&&(le+=" Diese Einstellung konnte auf diesem Ger\xE4t nicht gespeichert werden."),s&&(s.textContent=le)}function B(){try{if(!h?.setItem)throw new Error("Storage unavailable");h.setItem(Pd,JSON.stringify(d)),M=!1}catch{M=!0}}function W(ae=!1){i?.dataset&&(i.dataset.joystickSide=d.joystickSide),e&&(e.value=d.joystickSide),t&&(t.checked=d.autoFullscreen),ae&&r(d.joystickSide),F()}function q(ae){let De=ae==="right"?"right":"left",ne=d.joystickSide!==De;d={...d,joystickSide:De},B(),W(ne)}function H(ae){d={...d,autoFullscreen:ae===!0},ae===!0&&(w=!1,_=""),B(),W()}function j(){let ae=l?.visualViewport?.scale??1;return Math.abs(ae-1)<.01?dh(a(),l):{...m}}function J(){if(v)return{...m};let ae=j();return Object.keys(ae).some(De=>ae[De]!==m[De])&&(m=ae,o({...m})),F(),{...m}}function ie(){if(v||g!==null)return;g=(l?.requestAnimationFrame?.bind(l)||(De=>setTimeout(De,0)))(()=>{g=null,J()})}function me(){let ae=A();D&&!ae&&(w=!0),D=ae,ae&&(_=""),F(),ie()}function We(){w=!0,_="Vollbild ist gerade nicht m\xF6glich. Versuche die Vollbild-Schaltfl\xE4che oder starte \xFCber den Home-Bildschirm.",F()}function qe(){if(v)return Promise.resolve(!1);if(A()||y())return F(),Promise.resolve(!0);if(S)return S;if(!N())return F(),Promise.resolve(!1);w=!1,_="";let ae;try{ae=E().call(x,{navigationUI:"hide"})}catch(De){ae=Promise.reject(De)}return S=Promise.resolve(ae).then(()=>(me(),A()||y()),()=>(We(),!1)).finally(()=>{S=null}),S}function Ze(ae){return ae?.isTrusted===!0||l?.navigator?.userActivation?.isActive===!0}function ee(ae){let De=j();return v||!d.autoFullscreen||w||A()||y()||!N()||!U()||De.width<=De.height||!Ze(ae)||c?.hidden?Promise.resolve(!1):qe()}function se(ae){if(ae.type==="keydown"&&(ae.code==="Escape"||ae.code==="F11")){A()&&(w=!0);return}ae.repeat||ae.ctrlKey||ae.altKey||ae.metaKey||n&&(ae.target===n||n.contains?.(ae.target))||ae.target?.closest?.('input,select,textarea,[contenteditable="true"],a[href]')||ee(ae)}function xe(){if(!A()){qe();return}w=!0;let ae;try{ae=L()?.call(c)}catch(De){ae=Promise.reject(De)}Promise.resolve(ae).then(me,()=>{_="Vollbild bitte mit der Systemgeste oder Esc beenden.",F()})}function Ge(ae){if(ae.storageArea&&ae.storageArea!==h||ae.key!==Pd&&ae.key!==null)return;let De=fg();try{De=mg(JSON.parse(ae.newValue||"null"))}catch{}let ne=De.joystickSide!==d.joystickSide;d=De,W(ne)}I(e,"change",()=>q(e.value)),I(t,"change",ae=>{H(t.checked),d.autoFullscreen&&ee(ae)}),I(n,"click",xe),I(c,"pointerup",se),I(c,"keydown",se),I(c,"fullscreenchange",me),I(c,"webkitfullscreenchange",me),I(c,"fullscreenerror",We),I(c,"webkitfullscreenerror",We),I(l,"resize",ie),I(l,"orientationchange",ie),I(l?.visualViewport,"resize",ie),I(l?.visualViewport,"scroll",ie),I(f,"change",()=>{F(),ie()}),I(p,"change",F),I(l,"storage",Ge),W(!0);function Ae(){v||(v=!0,u.forEach(ae=>ae()),g!==null&&(l?.cancelAnimationFrame?l.cancelAnimationFrame(g):clearTimeout(g),g=null))}return{get settings(){return{...d}},getViewport:j,refreshViewport:J,requestFullscreen:qe,tryAutoFullscreen:ee,setJoystickSide:q,setAutoFullscreen:H,dispose:Ae}}var K=i=>document.getElementById(i),Vt=(i,e)=>{K(i).hidden=!e},eo=(i,e,t)=>Math.max(e,Math.min(t,i)),ct=og(document,K("app")),si=eg(),Ca=ig(),fh="stubenflieger.pending-run.v1",bg="stubenflieger.practice.v1",ws="normal",Pa=.5,Fd;try{let i=JSON.parse(localStorage.getItem(bg)||"null");ws=i?.mode==="practice"?"practice":"normal",Pa=uh(i?.speed)}catch{}var Ft=()=>ft?.practice===!0,pw=new Set(ut.rooms.map(i=>i.bonusId||i.id)).size,ph=i=>Aa.find(e=>e.id===i)?.name||i,to,yt,bt,ft,Ea,Vi,Sg,zd,Mg=.33,Xs=cg(),pt="ready",fn=!1,Zs=!1,bi=0,wg=0,La=0,Qr=0,ni=0,Ss=0,Ys=0,Hi=0,Qt=0,Ag=0,Eg="",mh=!1,Wi=null,Ks=null,Dd={x:0,y:0},yh={steer:0,pitch:0},Ms={steer:0,pitch:0},js=!1,Sn=null,Si=null,Tg=0,Bd,gh=!1,_h=!1,qs=!1,ti,Mi=0,Gi=!1,qi=!1,mw="",Ra=0,$s=0,Ud=0,kd=0,Vd=0,Gd=0,xh=!1,Od=0,Cn=new Set,Ws=new z,xg=new z,jr=new z,Jr=new qt,vh=new sn(0,0,0,"YXZ"),Gn=i=>{K("hint").textContent=i};function Cg(){Xs=Xs==="fpv"?"chase":"fpv",hg(Xs),zd?.setMode(Xs),Rd(K("camera-mode"),Xs),bt&&yt&&wh(!0),ct.current()||K("game").focus({preventScroll:!0})}K("camera-mode").onclick=Cg;Rd(K("camera-mode"),Xs);K("retry").onclick=()=>location.reload();try{let i=Number(localStorage.getItem("stubenflieger.rotation"));[0,90,180,270].includes(i)&&(Mi=i)}catch{}var Rg=()=>dh(Mi);function Hd(){no();let{width:i,height:e,centerX:t,centerY:n}=Rg();Object.assign(K("app").style,{width:i+"px",height:e+"px",left:t+"px",top:n+"px",transform:`translate(-50%, -50%) rotate(${Mi}deg)`}),K("rotation-value").textContent=Mi+"\xB0",window.dispatchEvent(new Event("gameviewportchange"))}K("rotate-view").onclick=()=>{Mi=(Mi+90)%360;try{localStorage.setItem("stubenflieger.rotation",String(Mi))}catch{}Hd()};var d2=gg({sideSelect:K("joystick-side"),autoFullscreenInput:K("auto-fullscreen"),fullscreenButton:K("fullscreen-button"),statusNode:K("fullscreen-status"),getRotation:()=>Mi,onSideChange:no,onViewportChange:Hd});Hd();function As(i){mw=i,K("storage-status").textContent=i,K("result-storage").textContent=i}function gw(){try{let i=JSON.parse(sessionStorage.getItem(fh)||"null");i?.id&&i.summary&&(i.summary.practice!==!0&&si.creditRun(i.id,i.summary),sessionStorage.removeItem(fh))}catch(i){As(i.message||"Der letzte Run konnte noch nicht gespeichert werden.")}}gw();si.getStatus().available||As(si.getStatus().error);function wi(){if(!(!qi||Gi||!ft||Ft()))try{sessionStorage.setItem(fh,JSON.stringify({id:ft.id,summary:ft.summary(Hi),savedAt:Date.now()}))}catch{As("Der laufende Run kann bei einem Neuladen verloren gehen. Website-Daten sind nicht verf\xFCgbar.")}}function bh(){if(!qi||Gi||!ft)return null;if(Ft())return Gi=!0,{credited:0,score:0};let i=ft.summary(Hi);wi();try{let e=si.creditRun(ft.id,i);Gi=!0;try{sessionStorage.removeItem(fh)}catch{}return As(""),Na(),e}catch(e){return As(e.message),null}}window.addEventListener("pagehide",wi);document.addEventListener("visibilitychange",()=>{document.hidden&&wi()});function ii(i,e=.12,t="sine",n=.06){if(qs)try{ti??=new(window.AudioContext||window.webkitAudioContext),ti.state==="suspended"&&ti.resume();let s=ti.createOscillator(),r=ti.createGain();s.type=t,s.frequency.setValueAtTime(i,ti.currentTime),s.frequency.exponentialRampToValueAtTime(Math.max(35,i*.55),ti.currentTime+e),r.gain.setValueAtTime(n,ti.currentTime),r.gain.exponentialRampToValueAtTime(.001,ti.currentTime+e),s.connect(r),r.connect(ti.destination),s.start(),s.stop(ti.currentTime+e)}catch{}}function Ig(){qs=!qs,K("sound").textContent=qs?"\u266A AN":"\u266A AUS",K("sound").setAttribute("aria-label",qs?"Ton ausschalten":"Ton einschalten"),K("menu-sound").textContent=qs?"Ton: an":"Ton: aus",K("menu-sound").setAttribute("aria-pressed",String(qs)),ii(600)}K("sound").onclick=Ig;K("menu-sound").onclick=Ig;function no(){to?.clear(),Sh(),so(),Cn.clear(),yh={steer:0,pitch:0},Ms={steer:0,pitch:0}}function Na(){let i=si.getProfile();K("wallet").textContent=i.points.toLocaleString("de-DE")+" P";for(let e of document.querySelectorAll("[data-discoveries]"))e.textContent=`Entdeckt: ${i.discoveredStarIds.length} / ${ut.collectibles.length} Sterne`;K("aircraft-summary").textContent=`${ph("plane:"+i.equipped.form)} \xB7 ${Math.round(i.equipped.size*100)} % Gr\xF6\xDFe \xB7 ${i.equipped.boosts.length}/2 Boosts`}function Pg(i,e){yt.setDoorOpen(i,e),bt.setDoorOpen(i,e)}function Lg(){try{localStorage.setItem(bg,JSON.stringify({mode:ws,speed:Pa}))}catch{}}function Wd(){let i=ws==="practice",e=Math.round(Pa*100);K("play-mode").value=ws,K("practice-toggle").setAttribute("aria-pressed",String(i)),K("practice-toggle").textContent="\xDCbungsmodus",K("practice-speed").value=String(e),K("practice-speed-value").textContent=`${e} %`,Vt("practice-settings",i),Vt("practice-badge",i),K("practice-badge").textContent=`\xDCben \xB7 ${e} %`,K("practice-badge").setAttribute("aria-label",`\xDCbungsmodus, ${e} Prozent Tempo, keine Belohnungen`),K("practice-start-hint").textContent=i?`Alle T\xFCren offen \xB7 Unsterblich \xB7 ${e} % Tempo. Im Men\xFC anpassbar. Keine Belohnungen.`:"In Ruhe \xFCben: Tempo einstellen, alle T\xFCren offen, unsterblich. Keine Belohnungen.",K("pause-finish").textContent=i?"\xDCbung beenden":"Run beenden & Punkte mitnehmen",K("menu-finish").textContent=K("pause-finish").textContent,K("menu-restart").textContent=i?"\xDCbung neu starten":"Run abschlie\xDFen & neu starten",K("again").textContent=i?"Weiter \xFCben \u2197":"Neuer Run \u2197",K("reset").setAttribute("aria-label",i?"\xDCbung neu starten":"Run beenden und neu starten")}function Ng(i){if(i=i==="practice"?"practice":"normal",i===ws)return!0;if(qi&&!Gi&&!bh())return Gn("Der Run konnte noch nicht gespeichert werden. Der Modus bleibt unver\xE4ndert."),Wd(),!1;let e=ct.current()==="menu";return ws=i,Lg(),io(),e&&ro(),!0}K("play-mode").onchange=()=>Ng(K("play-mode").value);K("practice-toggle").onclick=()=>{let i=ws==="practice"?"normal":"practice";Ng(i)&&i==="practice"&&ro()};K("practice-speed").oninput=()=>{Pa=uh(Number(K("practice-speed").value)/100),Lg(),Wd()};function Fg(){try{si.refresh()}catch(e){As(e.message)}let i=si.getProfile();ft=tg(ut,i,void 0,{practice:ws==="practice"}),Vi=i.equipped,Ca.clearResult(),Vt("score-form",!Ft()),Ea=gm(Vi.form,Vi.size),yt.configureAircraft(Vi.form,Vi.size),yt.reset(),Mg=bt.setAircraft(Vi.form,Vi.size,Vi.effect,Vi.color).length,bt.resetCollectibles(i.discoveredStarIds),Ra=$s=Ud=0,Vt("star-reward",!1);for(let e of ut.doors)Pg(e.id,ft.opened.has(e.id));Fd??=dg(yt,{bounds:ut.bounds}),Fd.reset(),Gi=qi=!1,kd=Vd=Gd=Od=0,xh=!1,ni=ut.start.heading||0,Ss=Ys=Hi=bi=La=Qr=0,bt.plane.position.copy(yt.plane.position),bt.plane.quaternion.copy(yt.plane.quaternion),bt.resetTrail(bt.plane.position),bt.updateSling(0),Na(),Wd(),qg(),Ia()}function io(){if(qi&&!Gi&&!bh()){Gn("Bitte erlaube Website-Daten, damit deine Punkte vor dem Neustart gespeichert werden k\xF6nnen."),pt==="flying"?Ta("Run beendet."):pt!=="result"&&kg();return}pt="ready",fn=!1,mh=gh=_h=!1,no(),Fg();for(let i of["stats","flight-controls","pause","wind-toast","door-progress","ceiling-warning"])Vt(i,!1);for(let i of["launch-panel","level-label","footer"])Vt(i,!0);document.body.classList.remove("flying"),K("mission-copy").textContent=Ft()?"Erkunde das ganze Haus mit offenen T\xFCren. Du prallst an Hindernissen ab und kannst unbegrenzt \xFCben. Tempo im Men\xFC einstellen; Punkte und Entdeckungen bleiben unver\xE4ndert.":`Sammle ${ut.collectibles.length} Sterne im ganzen Haus. Sterne \xF6ffnen T\xFCren, neue R\xE4ume bringen je ${wa} Punkte. Aufwinde verbinden die Stockwerke.`,K("star-goal").textContent=" / "+ut.collectibles.length,Gn(Ft()?"\xDCbungsmodus: Alle T\xFCren offen. Unsterblich, ohne Belohnungen.":"Sterne \xF6ffnen T\xFCren. Auch unter Tischen und St\xFChlen warten welche."),js&&Sn&&(Si={...Sn}),wh(!0),ct.close(K("launch"))}K("reset").onclick=io;K("again").onclick=io;K("menu-restart").onclick=io;function qd(){return pt!=="ready"||fn||Zs||ct.current()?!1:(Zs=!0,wg=performance.now(),La=0,bi=.12,ii(160,.07),!0)}function Sh(){let i=Wi;Wi=null,i!==null&&K("launch").hasPointerCapture(i)&&K("launch").releasePointerCapture(i),Zs=!1,bi=La=0,bt?.updateSling(0),K("power-fill").style.transform="scaleX(0)",K("launch-label").textContent="Ziehen & loslassen",K("power-label").textContent="GUMMISCHLEUDER \u2197"}function Dg(){qd()&&(bi=.75,Xd())}function Xd(){if(!(!Zs||pt!=="ready"||ct.current())){Zs=!1,pt="flying",qi=!0,Ft()||Ca.beginRun(),Hi=0,ni=(ut.start.heading||0)+Qr,Ss=Ea.speed*(.75+bi*.35),Ys=.08+bi*.1,yt.plane.velocity.setZero(),yt.plane.collisionFilterMask=-1,vh.set(0,-ni,0,"YXZ"),Jr.setFromEuler(vh),yt.plane.quaternion.copy(Jr),bt.resetTrail(new z().copy(yt.plane.position)),bt.updateSling(0),js&&Sn&&(Si={...Sn});for(let i of["launch-panel","level-label","footer"])Vt(i,!1);for(let i of["stats","flight-controls","pause"])Vt(i,!0);document.body.classList.add("flying"),Gn(Ft()?"In Ruhe \xFCben: Hindernisse lassen dich abprallen. Keine Belohnungen.":"Sterne sammeln, T\xFCren \xF6ffnen. Im t\xFCrkisen Aufwind steigen."),Ia(),wi(),ii(480,.4,"triangle",.12),K("game").focus({preventScroll:!0})}}function Bg(i,e){let t=Mi*Math.PI/180;return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}K("launch").addEventListener("pointerdown",i=>{Wi!==null||!qd()||(i.preventDefault(),Wi=i.pointerId,Dd={x:i.clientX,y:i.clientY},K("launch").setPointerCapture(i.pointerId))});K("launch").addEventListener("pointermove",i=>{if(i.pointerId!==Wi||!Zs)return;let e=Bg(i.clientX-Dd.x,i.clientY-Dd.y);La=eo(e.y/130,0,1),Qr=eo(e.x/250,-.45,.45)});K("launch").addEventListener("pointerup",i=>{i.pointerId===Wi&&(Wi=null,Xd())});K("launch").addEventListener("pointercancel",i=>{i.pointerId===Wi&&Sh()});K("launch").addEventListener("lostpointercapture",i=>{i.pointerId===Wi&&Sh()});K("launch").addEventListener("click",i=>{i.detail===0&&Dg()});function xw(i,e,t){let n=i*Math.PI/180,s=e*Math.PI/180,r=t*Math.PI/180,o=-Math.cos(n)*Math.sin(s),a=Math.sin(n),l=Math.cos(n)*Math.cos(s),c=o*Math.cos(r)-a*Math.sin(r),h=o*Math.sin(r)+a*Math.cos(r);return{roll:Math.atan2(-c,Math.hypot(h,l))*180/Math.PI,pitch:Math.atan2(h,l)*180/Math.PI}}function Ug(){Sn&&(Si={...Sn},Gn("Diese Haltung ist jetzt die Mitte."),K("control-note").textContent="Kalibriert. Seitlich neigen zum Lenken, vor/zur\xFCck f\xFCr die H\xF6he.")}async function Og(){if(!window.DeviceOrientationEvent){K("control-note").textContent="Keine Sensoren verf\xFCgbar. Nutze Touch oder WASD / Pfeiltasten.";return}try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){K("control-note").textContent="Sensorzugriff abgelehnt. Die Touch-Steuerung funktioniert weiter.";return}js=!0,Si=null,K("gyro").textContent="Warte auf Sensor \u2026",K("control-note").textContent="Halte dein iPhone in deiner normalen Spielhaltung.",clearTimeout(Bd),Bd=setTimeout(()=>{Sn||(K("gyro").textContent="Sensoren erneut versuchen",K("control-note").textContent="Kein Sensorsignal. In Safari \xF6ffnen oder Touch nutzen.")},3e3)}catch{K("control-note").textContent="Sensoren nicht verf\xFCgbar. Nutze den Touch-Kreis."}}window.addEventListener("deviceorientation",i=>{!js||!Number.isFinite(i.beta)||!Number.isFinite(i.gamma)||(Sn=xw(i.beta,i.gamma,(screen.orientation?.angle??window.orientation??0)+Mi),Tg=performance.now(),Si||(Si={...Sn},K("gyro").textContent="\u2713 Neigung aktiv",K("control-note").textContent="Aktiv. Beim Start wird deine Haltung kalibriert.",clearTimeout(Bd)))});var Yd=()=>{Sn=Si=null};window.addEventListener("orientationchange",Yd);screen.orientation?.addEventListener("change",Yd);window.addEventListener("gameviewportchange",Yd);K("gyro").onclick=()=>js&&Sn?Ug():void Og();K("calibrate").onclick=()=>js&&Sn?Ug():void Og();function zg(i){let e=K("joystick").getBoundingClientRect(),t=K("joystick").clientWidth*.32,n=Bg(i.clientX-e.left-e.width/2,i.clientY-e.top-e.height/2),s=Math.min(1,t/(Math.hypot(n.x,n.y)||1));yh={steer:n.x*s/t,pitch:-n.y*s/t},K("stick").style.transform=`translate(${n.x*s}px,${n.y*s}px)`}K("joystick").addEventListener("pointerdown",i=>{Ks!==null||pt!=="flying"||fn||ct.current()||i.pointerType==="mouse"&&i.button!==0||(i.preventDefault(),Ks=i.pointerId,K("joystick").setPointerCapture(i.pointerId),zg(i))});K("joystick").addEventListener("pointermove",i=>{i.pointerId===Ks&&zg(i)});function so(){let i=Ks;Ks=null,i!==null&&K("joystick").hasPointerCapture(i)&&K("joystick").releasePointerCapture(i),yh={steer:0,pitch:0},K("stick").style.transform="translate(0,0)"}for(let i of["pointerup","pointercancel","lostpointercapture"])K("joystick").addEventListener(i,e=>{e.pointerId===Ks&&so()});function $d(i=!fn){pt==="flying"&&(fn=i,to?.clear(),so(),fn?(wi(),ct.open("paused",K("resume"))):ct.close(K("game")))}K("pause").onclick=()=>$d();K("resume").onclick=()=>$d(!1);K("pause-finish").onclick=()=>{ct.close(),fn=!1,Ta(Ft()?"\xDCbung beendet. Dein Guthaben und deine Entdeckungen bleiben unver\xE4ndert.":"Run abgeschlossen. Deine Punkte kommen ins Guthaben.")};K("menu-finish").onclick=()=>K("pause-finish").click();function vw(){so(),wi(),pt==="flying"&&(fn=!0,ct.current()||ct.open("paused",K("resume")))}function Ta(i,e=!1){pt==="flying"&&(to?.clear(),so(),pt="ending",fn=!1,Eg=i,mh=e,Ag=Qt,Vt("wind-toast",!1),Vt("flight-controls",!1),Vt("pause",!1),Vt("ceiling-warning",!1),yt.plane.velocity.setZero(),bh(),ii(e?740:120,.5,e?"sine":"triangle",.1))}function kg(){pt="result";let i=ft.summary(Hi),e=ah(i);K("result-eyebrow").textContent=Ft()?"\xDCBUNG BEENDET":mh?"DAS GANZE HAUS GESCHAFFT":"RUN ABGESCHLOSSEN",K("result-title").textContent=Ft()?"Bereit f\xFCr den n\xE4chsten Flug?":mh?"Alle Sterne an Bord.":"Noch eine Runde?",K("result-copy").textContent=Eg,K("result-time").textContent=Hi.toFixed(1)+" s",K("result-rooms").textContent=i.roomIds.length,K("result-stars").textContent=`${ft.stars.size} / ${ut.collectibles.length}`,K("result-reward").textContent=Ft()?"\xDCbungsflug \xB7 keine Punkte, Entdeckungen oder Bestenlisteneintr\xE4ge.":`+${(e+Ra).toLocaleString("de-DE")} Punkte \xB7 davon ${Ra.toLocaleString("de-DE")} Erstfundbonus und ${i.roomIds.length*wa} Raumbonus${Gi?" \xB7 gespeichert":" \xB7 noch nicht vollst\xE4ndig gespeichert"}`,K("result-shop").textContent=Ft()?"Shop & Flugzeug":"Punkte im Shop ausgeben",Ft()?Ca.clearResult():Ca.setResult(i),Vt("score-form",!Ft()),Na(),to?.clear(),ct.open("result",K("again"))}var Vg="menu",yw=null,Gg=null;function ro(){yw=ct.current(),no(),pt==="flying"&&(fn=!0),K("menu-shop").disabled=pt==="flying"||pt==="ending",K("menu-shop").textContent=pt==="flying"?"Shop nach dem Run verf\xFCgbar":"Shop & Flugzeug",_w(),ct.open("menu",K("close-menu"))}function _w(){if(Vt("menu-flight-section",qi),Vt("menu-finish",pt==="flying"),!qi||!ft||!yt)return;Ia();for(let[t,n]of[["time","time"],["height","height"],["rooms","rooms"],["points","run-points"],["room","flight-level"]])K("menu-flight-"+t).textContent=K(n).textContent;K("menu-flight-stars").textContent=`${ft.stars.size} / ${ut.collectibles.length}`,K("menu-flight-discoveries").textContent=`${si.getProfile().discoveredStarIds.length} / ${ut.collectibles.length}`;let i=ft.nextDoor(),e=i?Math.max(0,i.threshold-ft.stars.size):0;K("menu-door-progress").textContent=Ft()?"\xDCbung \xB7 alle T\xFCren offen \xB7 keine Belohnungen":i?`${i.name}: noch ${e} ${e===1?"Stern":"Sterne"}`:"Alle T\xFCren sind offen."}function Hg(){pt==="flying"&&fn?ct.open("paused",K("resume")):pt==="result"?ct.open("result",K("result-menu")):ct.close(K("menu-button"))}function Zd(i){Vg=i,no(),pt==="flying"&&(fn=!0),ct.open("leaderboard",K("close-leaderboard")),Ca.refresh()}function Wg(){Vg==="menu"?ct.open("menu",K("menu-leaderboard")):pt==="result"?ct.open("result",K("result-leaderboard")):pt==="flying"&&fn?ct.open("paused",K("resume")):ct.close(K("launch"))}function Mh(){if(!["ready","result"].includes(pt)){Gn("Den Shop kannst du vor oder nach deinem Run \xF6ffnen.");return}qi&&!Gi&&!bh()||(Gg=ct.current(),no(),Sg.render(),ct.open("shop",K("close-shop")))}function Kd(){pt==="ready"&&(Fg(),wh(!0)),Gg==="menu"?ct.open("menu",K("menu-shop")):pt==="result"?ct.open("result",K("result-shop")):ct.close(K("start-shop"))}Sg=ng({container:K("shop-content"),progression:si,onChange:Na,onClose:Kd});K("start-shop").onclick=Mh;K("result-shop").onclick=Mh;K("menu-shop").onclick=Mh;K("close-shop").onclick=Kd;K("menu-button").onclick=ro;K("close-menu").onclick=Hg;K("menu-leaderboard").onclick=()=>Zd("menu");K("result-leaderboard").onclick=()=>Zd("result");K("close-leaderboard").onclick=Wg;K("pause-menu").onclick=ro;K("result-menu").onclick=ro;to=rg({window,document,keys:Cn,getState:()=>pt,getDialog:()=>ct.current(),launcher:K("launch"),actions:{beginCharge:qd,cancelCharge:Sh,release:Xd,quickLaunch:Dg,reset:io,pause:()=>$d(),suspend:vw,menu:ro,closeMenu:Hg,closeBoard:Wg,shop:Mh,closeShop:Kd,boost:Xg,camera:Cg,board:()=>{ct.current()!=="leaderboard"&&Zd(ct.current())},sound:()=>K("sound").click()}});function qg(){K("boost-controls").replaceChildren(),ft.charges.forEach((i,e)=>{let t=document.createElement("button");t.type="button",t.textContent=`${e+1} \xB7 ${ph("boost:"+i)}${ft.used.has(i)?" \u2713":""}`,t.disabled=ft.used.has(i),t.onclick=()=>Xg(e),t.setAttribute("aria-label",`${ph("boost:"+i)}${ft.used.has(i)?", verbraucht":", einmal in diesem Run"}`),K("boost-controls").append(t)})}function Xg(i){if(pt!=="flying"||fn||ct.current())return;let e=ft.useBoost(i);e&&(e==="lift"&&(kd=Qt+1.25),e==="turbo"&&(Vd=Qt+3),e==="magnet"&&(Gd=Qt+6),e==="cushion"&&(xh=!0),qg(),ii(740,.2),Gn(ph("boost:"+e)+" aktiviert."),K("game").focus({preventScroll:!0}))}function Ia(){if(!ft||!yt)return;let i=ua(yt.plane.position),e=ft.summary(Hi),t=ft.nextDoor();K("time").textContent=Hi.toFixed(1)+" s",K("height").textContent=yt.plane.position.y.toFixed(1)+" m",K("rooms").textContent=ft.visited.size+" / "+pw,K("stars").textContent=ft.stars.size,K("run-points").textContent=(ah(e)+Ra).toLocaleString("de-DE"),K("flight-level").textContent=(i?.name||"\xDCber dem Garten").toUpperCase();let n=t?Math.max(0,t.threshold-ft.stars.size):0;K("door-progress").textContent=t?`N\xE4chste T\xFCr: ${n} \u2605`:"",Vt("door-progress",!Ft()&&pt==="flying"&&!!t),K("height").classList.toggle("danger",_h),Yg()}function Yg(){let i=pt==="flying",e=i&&_h,t=i&&!e&&$s>Qt;Vt("ceiling-warning",e),Vt("star-reward",t),Vt("wind-toast",i&&!e&&!t&&gh)}function wh(i=!1,e=.016){zd.update({position:bt.plane.position,quaternion:bt.plane.quaternion,heading:ni,length:Mg,model:bt.plane,id:"solo"},{dt:e,immediate:i,ready:pt==="ready"})}function bw(i,e){let t=0,n=0;if(js&&Sn&&Si&&i-Tg<1500){let s=(r,o)=>(r-o+540)%360-180;t=eo(s(Sn.roll,Si.roll)/28,-1,1),n=eo(s(Sn.pitch,Si.pitch)/28,-1,1),Math.abs(t)<.06&&(t=0),Math.abs(n)<.06&&(n=0)}Ks!==null&&({steer:t,pitch:n}=yh),(Cn.has("ArrowLeft")||Cn.has("KeyA"))&&(t=-1),(Cn.has("ArrowRight")||Cn.has("KeyD"))&&(t=1),(Cn.has("ArrowUp")||Cn.has("KeyW"))&&(n=1),(Cn.has("ArrowDown")||Cn.has("KeyS"))&&(n=-1),Ms.steer=Dr.damp(Ms.steer,t,9,e),Ms.pitch=Dr.damp(Ms.pitch,n,7,e)}var vg=performance.now(),Ld=0,Nd=0;function $g(i){requestAnimationFrame($g);let e=Math.min(Math.max(0,(i-vg)/1e3),.04);if(vg=i,!bt)return;if(fn||ct.current()){bt.render();return}let t=Ft()?ug(e,Pa):e;if(Qt+=t,$s&&Qt>$s&&($s=0,Vt("star-reward",!1)),pt==="ready"){let n=Number(Cn.has("ArrowRight")||Cn.has("KeyD"))-Number(Cn.has("ArrowLeft")||Cn.has("KeyA"));Qr=eo(Qr+n*.8*e,-.7,.7),ni=(ut.start.heading||0)+Qr,Zs&&(bi=Math.max(.12,La,eo((i-wg)/1400,0,1)),K("power-fill").style.transform=`scaleX(${bi})`,K("launch-label").textContent=Math.round(bi*100)+" % gespannt",K("power-label").textContent="LOSLASSEN \u2197",bt.updateSling(bi)),bt.plane.rotation.set(0,-ni,0,"YXZ")}if(pt==="flying"){Hi+=e,bw(i,t),ni+=Ms.steer*Ea.turnRate*t,Ws.copy(yt.plane.position),xg.copy(Ws);let n=ut.thermals.find(m=>Math.hypot(Ws.x-m.x,Ws.z-m.z)<m.r&&Ws.y>=m.y&&Ws.y<m.y+m.height);n&&!gh&&ii(800,.3,"sine",.04),gh=!!n;let s=Ea.speed*(Qt<Vd?1.65:1);Ss=Dr.damp(Ss,s,.75,t);let{ride:r,x:o,z:a,targetVertical:l}=xm({position:Ws,input:Ms,heading:ni,speed:Ss,tuning:Ea,thermal:n,lift:Qt<kd});Ys=Dr.damp(Ys,l,4,t),jr.set(o,Ys,a),vh.set(Math.atan2(Ys,r?Math.max(2,Ss):Ss)*.7,-ni,-Ms.steer*.42,"YXZ"),Jr.setFromEuler(vh),Qt<Od&&(jr.copy(yg),Jr.copy(_g));let c=Ft()?Fd.advance(t,jr,Jr):null,h=c?c.contact:yt.advance(t,jr,Jr);(c?.bounced||c?.recovering)&&(ni=c.heading,Ss=c.speed,Ys=c.verticalSpeed,jr.copy(c.velocity),c.bounced&&(Gn("Abgeprallt \u2013 du kannst weiter\xFCben."),ii(300,.07))),c?.relocated&&bt.resetTrail(yt.plane.position),bt.plane.position.copy(yt.plane.position),bt.plane.quaternion.copy(yt.plane.quaternion);let d=new Map,u=bt.collectStars(m=>{if(Qt<Ud||!yt.canCollectStar(m,xg,Qt<Gd?.75:0))return!1;if(Ft())return!0;try{return d.set(m.id,si.creditStar(ft.id,m.id)),As(""),!0}catch(g){return Ud=Qt+1,As(g.message),K("star-reward").textContent="Stern noch nicht gespeichert \u2013 bitte Website-Daten erlauben.",K("star-reward").dataset.first="false",$s=Qt+4,Vt("star-reward",!0),!1}});for(let m of u){let g=ft.collect(m);if(!g)continue;if(Ft()){Gn(ft.stars.size===ut.collectibles.length?"Alle \xDCbungssterne gefunden. Du kannst weiterfliegen oder neu starten.":`\xDCbungsstern gefunden \xB7 ${ft.stars.size}/${ut.collectibles.length}`),ii(1100,.1);continue}let v=d.get(m);Ra+=v.bonus,K("star-reward").textContent=v.firstDiscovery?`Erstfund! +${v.totalPoints} Punkte`:`+${v.totalPoints} Punkte`,K("star-reward").dataset.first=String(v.firstDiscovery),$s=Qt+1.35;for(let w of g)Pg(w.id,!0);ii(1100,.1),Gn(g.length?g.map(w=>w.name).join(" \xB7 ")+" ist jetzt offen!":`Stern gesammelt! ${ft.stars.size}/${ut.collectibles.length}`)}let f=ua(yt.plane.position);f&&ft.enterRoom(f.id)&&(Gn(Ft()?`${f.name} \xB7 \xDCbungsflug ohne Punkte`:`${f.name} entdeckt \xB7 +${wa} Punkte`),ii(880,.2),wi()),u.length&&(Na(),Ia(),wi()),!Ft()&&h.collided&&(xh?(xh=!1,yg.copy(jr).multiplyScalar(-.55),_g.copy(yt.plane.quaternion),Od=Qt+.6,ni+=Math.PI,Gn("Luftpolster! Eine Ber\xFChrung abgefangen."),ii(260,.18)):Ta(h.body?.kind==="floor"?"Der Boden kam n\xE4her als geplant.":"Ein Fl\xFCgel oder der Rumpf hat ein Hindernis ber\xFChrt.")),!Ft()&&ft.summary().complete&&Ta("Alle Sterne gefunden \u2013 vom Keller bis in den Garten!",!0);let p=ut.bounds,x=yt.plane.position;!Ft()&&(x.x<p.minX||x.x>p.maxX||x.z<p.minZ||x.z>p.maxZ||x.y<p.minY||x.y>p.maxY)&&Ta("Du hast das Grundst\xFCck verlassen."),bt.updateTrail(yt.plane.position),Nd+=e,Nd>1&&(Nd=0,wi())}pt==="ending"&&Qt-Ag>.55&&kg(),bt.update(e,Qt),_h=bt.updateCeiling(yt.plane.position),Yg(),wh(!1,e),Ld+=e,Ld>.1&&(Ld=0,Ia()),bt.render()}var yg=new z,_g=new qt;try{yt=Gm(ut,si.getProfile().equipped),bt=Km(K("game"),yt,Rg),zd=ag(bt.camera,{traceCamera:(i,e,t)=>yt.traceCamera(i,e,t),mode:Xs}),io(),Vt("loading",!1),requestAnimationFrame($g)}catch(i){console.error(i),Vt("loading",!1),ct.open("error")}K("game").addEventListener("webglcontextlost",i=>{i.preventDefault(),to.clear(),so(),wi(),fn=!0,K("error-copy").textContent=Ft()?"Die 3D-Darstellung wurde unterbrochen. Lade die Seite neu, um weiterzu\xFCben.":"Die 3D-Darstellung wurde unterbrochen. Dein letzter Punktestand wird beim Neuladen wiederhergestellt.",ct.open("error")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
