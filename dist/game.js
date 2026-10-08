var Uf=0,ru=1,Of=2;var Bs=1,zf=2,Pr=3,ss=0,xn=1,On=2,ui=0,Lr=1,ou=2,au=3,lu=4,kf=5;var Us=100,Vf=101,Gf=102,Hf=103,Wf=104,qf=200,Xf=201,Yf=202,$f=203,cu=204,hu=205,Zf=206,Kf=207,Jf=208,jf=209,Qf=210,ep=211,tp=212,np=213,ip=214,rl=0,ol=1,al=2,gr=3,ll=4,cl=5,hl=6,ul=7,uu=0,sp=1,rp=2,Kn=0,du=1,fu=2,pu=3,$o=4,mu=5,gu=6,xu=7;var vu=300,rs=301,Os=302,Vl=303,Gl=304,Zo=306,xr=1e3,ai=1001,dl=1002,jt=1003,op=1004;var Ko=1005;var nn=1006,Hl=1007;var os=1008;var En=1009,yu=1010,_u=1011,Nr=1012,Wl=1013,Jn=1014,zn=1015,jn=1016,ql=1017,Xl=1018,Fr=1020,bu=35902,Su=35899,Mu=1021,wu=1022,kn=1023,li=1026,as=1027,Yl=1028,$l=1029,ls=1030,Zl=1031;var Kl=1033,Jo=33776,jo=33777,Qo=33778,ea=33779,Jl=35840,jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37488,rc=37489,ta=37490,oc=37491,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,vc=37819,yc=37820,_c=37821,bc=36492,Sc=36494,Mc=36495,wc=36283,Ec=36284,na=36285,Ac=36286;var go=2300,fl=2301,il=2302,Yh=2303,$h=2400,Zh=2401,Kh=2402;var ap=3200;var Tc=0,lp=1,Ni="",en="srgb",xo="srgb-linear",vo="linear",mt="srgb";var sl=7680;var cp=519,hp=512,up=513,dp=514,Cc=515,fp=516,pp=517,Rc=518,mp=519,gp=35044;var Eu="300 es",$n=2e3,vr=2001;function Yg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=yo("canvas");return i.style.display="block",i}var rf={},yr=null;function Au(...i){let e="THREE."+i.shift();yr?yr("log",e,...i):console.log(e,...i)}function vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=vp(i);let e="THREE."+i.shift();if(yr)yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=vp(i);let e="THREE."+i.shift();if(yr)yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ls(...i){let e=i.join(" ");e in rf||(rf[e]=!0,Ge(...i))}function yp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _p={[rl]:ol,[al]:hl,[ll]:ul,[gr]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:gr},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=1234567,uo=Math.PI/180,_r=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function Zg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kg(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function jg(i,e=1){return e-Math.abs(Tu(i,e*2)-e)}function Qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n0(i,e){return i+Math.random()*(e-i)}function i0(i){return i*(.5-Math.random())}function s0(i){i!==void 0&&(of=i);let e=of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*uo}function o0(i){return i*_r}function a0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function l0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dr={DEG2RAD:uo,RAD2DEG:_r,generateUUID:zs,clamp:nt,euclideanModulo:Tu,mapLinear:Zg,inverseLerp:Kg,lerp:fo,damp:Jg,pingpong:jg,smoothstep:Qg,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:h0,normalize:pn,denormalize:pr},be=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*x;m<0&&(h=-h,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+x*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+p*a,f=f*g+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new z,af=new qt,Ke=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],w=s[4],b=s[7],M=s[2],S=s[5],E=s[8];return r[0]=o*x+a*v+l*M,r[3]=o*m+a*w+l*S,r[6]=o*g+a*b+l*E,r[1]=c*x+u*v+f*M,r[4]=c*m+u*w+f*S,r[7]=c*g+u*b+f*E,r[2]=h*x+d*v+p*M,r[5]=h*m+d*w+p*S,r[8]=h*g+d*b+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+n*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mh=new Ke,lf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){let i={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xo]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var st=u0();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=yo("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d0=0,br=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wh(s[o].image)):r.push(wh(s[o]))}else r=wh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var f0=0,Eh=new z,gn=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,s=ai,r=nn,o=os,a=kn,l=En,c=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=zs(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=vu;gn.DEFAULT_ANISOTROPY=1;var Dt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(d+1)/2,M=(g+1)/2,S=(u+h)/4,E=(f+x)/4,y=(p+m)/4;return w>b&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=E/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new gn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new br(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,m)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,x=c*f;t[0]=h+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,x=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-x*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p0,e,m0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),$i.crossVectors(n,Rn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),$i.crossVectors(n,Rn)),$i.normalize(),Na.crossVectors(Rn,$i),s[0]=$i.x,s[4]=Na.x,s[8]=Rn.x,s[1]=$i.y,s[5]=Na.y,s[9]=Rn.y,s[2]=$i.z,s[6]=Na.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],w=n[7],b=n[11],M=n[15],S=s[0],E=s[4],y=s[8],T=s[12],P=s[1],N=s[5],U=s[9],F=s[13],L=s[2],D=s[6],B=s[10],W=s[14],X=s[3],H=s[7],K=s[11],j=s[15];return r[0]=o*S+a*P+l*L+c*X,r[4]=o*E+a*N+l*D+c*H,r[8]=o*y+a*U+l*B+c*K,r[12]=o*T+a*F+l*W+c*j,r[1]=u*S+f*P+h*L+d*X,r[5]=u*E+f*N+h*D+d*H,r[9]=u*y+f*U+h*B+d*K,r[13]=u*T+f*F+h*W+d*j,r[2]=p*S+x*P+m*L+g*X,r[6]=p*E+x*N+m*D+g*H,r[10]=p*y+x*U+m*B+g*K,r[14]=p*T+x*F+m*W+g*j,r[3]=v*S+w*P+b*L+M*X,r[7]=v*E+w*N+b*D+M*H,r[11]=v*y+w*U+b*B+M*K,r[15]=v*T+w*F+b*W+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*h,w=a*d-c*f,b=a*h-l*f,M=o*d-c*u,S=o*h-l*u,E=o*f-a*u;return t*(x*v-m*w+g*b)-n*(p*v-m*M+g*S)+s*(p*w-x*M+g*E)-r*(p*b-x*S+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,w=t*l-s*o,b=t*c-r*o,M=n*l-s*a,S=n*c-r*a,E=s*c-r*l,y=u*x-f*p,T=u*m-h*p,P=u*g-d*p,N=f*m-h*x,U=f*g-d*x,F=h*g-d*m,L=v*F-w*U+b*N+M*P-S*T+E*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return e[0]=(a*F-l*U+c*N)*D,e[1]=(s*U-n*F-r*N)*D,e[2]=(x*E-m*S+g*M)*D,e[3]=(h*S-f*E-d*M)*D,e[4]=(l*P-o*F-c*T)*D,e[5]=(t*F-s*P+r*T)*D,e[6]=(m*b-p*E-g*w)*D,e[7]=(u*E-h*b+d*w)*D,e[8]=(o*U-a*P+c*y)*D,e[9]=(n*P-t*U-r*y)*D,e[10]=(p*S-x*b+g*v)*D,e[11]=(f*b-u*S-d*v)*D,e[12]=(a*T-o*N-l*y)*D,e[13]=(t*N-n*T+s*y)*D,e[14]=(x*w-p*M-m*v)*D,e[15]=(u*M-f*w+h*v)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,x=o*u,m=o*f,g=a*f,v=l*c,w=l*u,b=l*f,M=n.x,S=n.y,E=n.z;return s[0]=(1-(x+g))*M,s[1]=(d+b)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(h+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+w)*E,s[9]=(m-v)*E,s[10]=(1-(h+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),l=tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,u=1/a,f=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=$n,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===$n)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===vr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new z,Wn=new at,p0=new z(0,0,0),m0=new z(1,1,1),$i=new z,Na=new z,Rn=new z,hf=new at,uf=new qt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g0=0,df=new z,nr=new qt,wi=new at,Fa=new z,io=new z,x0=new z,v0=new qt,ff=new z(1,0,0),pf=new z(0,1,0),mf=new z(0,0,1),gf={type:"added"},y0={type:"removed"},ir={type:"childadded",child:null},Ah={type:"childremoved",child:null},rn=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new sn,n=new qt,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(io,Fa,this.up):wi.lookAt(Fa,io,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(wi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),ir.child=e,this.dispatchEvent(ir),ir.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,x0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,v0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Tu(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Th(o,r,e+1/3),this.g=Th(o,r,e),this.b=Th(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return st.workingToColorSpace(hn.copy(this),e),Math.round(nt(hn.r*255,0,255))*65536+Math.round(nt(hn.g*255,0,255))*256+Math.round(nt(hn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=en){st.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Da);let n=fo(Zi.h,Da.h,t),s=fo(Zi.s,Da.s,t),r=fo(Zi.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Je;Je.NAMES=bp;var So=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mo=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new z,Ei=new z,Ch=new z,Ai=new z,sr=new z,rr=new z,xf=new z,Rh=new z,Ih=new z,Ph=new z,Lh=new Dt,Nh=new Dt,Fh=new Dt,Qi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),Ei.subVectors(n,t),Ch.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ei),l=qn.dot(Ch),c=Ei.dot(Ei),u=Ei.dot(Ch),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Lh.setScalar(0),Nh.setScalar(0),Fh.setScalar(0),Lh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,n),Fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lh,r.x),o.addScaledVector(Nh,r.y),o.addScaledVector(Fh,r.z),o}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),Ei.subVectors(e,t),qn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,n),rr.subVectors(r,n),Rh.subVectors(e,n);let l=sr.dot(Rh),c=rr.dot(Rh);if(l<=0&&c<=0)return t.copy(n);Ih.subVectors(e,s);let u=sr.dot(Ih),f=rr.dot(Ih);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(sr,o);Ph.subVectors(e,r);let d=sr.dot(Ph),p=rr.dot(Ph);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(rr,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return xf.subVectors(r,s),a=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(xf,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Ua.subVectors(this.max,so),or.subVectors(e.a,so),ar.subVectors(e.b,so),lr.subVectors(e.c,so),Ki.subVectors(ar,or),Ji.subVectors(lr,ar),Ts.subVectors(or,lr);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-Ts.z,Ts.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,Ts.z,0,-Ts.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-Ts.y,Ts.x,0];return!Dh(t,or,ar,lr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,or,ar,lr,Ua))?!1:(Oa.crossVectors(Ki,Ji),t=[Oa.x,Oa.y,Oa.z],Dh(t,or,ar,lr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new z,new z,new z,new z,new z,new z,new z,new z],Xn=new z,Ba=new hi,or=new z,ar=new z,lr=new z,Ki=new z,Ji=new z,Ts=new z,so=new z,Ua=new z,Oa=new z,Cs=new z;function Dh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wt=new z,za=new be,b0=0,mn=class extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gp,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var wo=class extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Eo=class extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},S0=new hi,ro=new z,Bh=new z,Ii=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):S0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Bh)),this.expandByPoint(ro.copy(e.center).sub(Bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M0=0,Un=new at,Uh=new rn,cr=new z,In=new hi,oo=new hi,Jt=new z,Xt=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?Eo:wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(In.min,oo.min),In.expandByPoint(Jt),Jt.addVectors(In.max,oo.max),In.expandByPoint(Jt)):(In.expandByPoint(oo.min),In.expandByPoint(oo.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),Jt.add(cr)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new z,l[y]=new z;let c=new z,u=new z,f=new z,h=new be,d=new be,p=new be,x=new z,m=new z;function g(y,T,P){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(N),a[y].add(x),a[T].add(x),a[P].add(x),l[y].add(m),l[T].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,T=v.length;y<T;++y){let P=v[y],N=P.start,U=P.count;for(let F=N,L=N+U;F<L;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new z,b=new z,M=new z,S=new z;function E(y){M.fromBufferAttribute(s,y),S.copy(M);let T=a[y];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(S,T);let N=b.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,N)}for(let y=0,T=v.length;y<T;++y){let P=v[y],N=P.start,U=P.count;for(let F=N,L=N+U;F<L;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new mn(h,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oh=new z,w0=new z,E0=new Ke,Yn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oh.subVectors(n,t).cross(w0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||E0.getNormalMatrix(e),s=this.coplanarPoint(Oh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},A0=0,Pi=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=Lr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=hu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ci=new z,zh=new z,ka=new z,Va=new z,Ao=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zh.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Va.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=Va.dot(this.direction),l=-Va.dot(ka),c=Va.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zh).addScaledVector(ka,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,b=Math.abs(l),M=Math.abs(c),S=Math.abs(u),E,y,T,P,N,U,F,L,D,B,W,X;if(b>=M&&b>=S?(T=l,U=f,D=p,X=g,l>=0?(E=c,y=u,P=h,N=d,F=x,L=m,B=v,W=w):(E=u,y=c,P=d,N=h,F=m,L=x,B=w,W=v)):M>=S?(T=c,U=h,D=x,X=v,c>=0?(E=u,y=l,P=d,N=f,F=m,L=p,B=w,W=g):(E=l,y=u,P=f,N=d,F=p,L=m,B=g,W=w)):(T=u,U=d,D=m,X=w,u>=0?(E=l,y=c,P=f,N=h,F=p,L=x,B=g,W=v):(E=c,y=l,P=h,N=f,F=x,L=p,B=v,W=g)),T===0)return null;let H=E/T,K=y/T,j=1/T,oe=P-H*U,me=N-K*U,Xe=F-H*D,Ye=L-K*D,$e=B-H*X,te=W-K*X,ie=$e*Ye-te*Xe,xe=oe*te-me*$e,ke=Xe*me-Ye*oe;if(s){if(ie<0||xe<0||ke<0)return null}else if((ie<0||xe<0||ke<0)&&(ie>0||xe>0||ke>0))return null;let Ae=ie+xe+ke;if(Ae===0)return null;let Ve=j*(ie*U+xe*D+ke*X);return(Ae>0?Ve<0:Ve>0)?null:this.at(Ve/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vf=new at,Rs=new Ao,Ga=new Ii,yf=new z,Ha=new z,Wa=new z,qa=new z,kh=new z,Xa=new z,_f=new z,Ya=new z,Pt=class extends rn{constructor(e=new Xt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(kh.fromBufferAttribute(f,e),o?Xa.addScaledVector(kh,u):Xa.addScaledVector(kh.sub(t),u))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(Ga.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Ga,yf)===null||Rs.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(vf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,M=w;b<M;b+=3){let S=a.getX(b),E=a.getX(b+1),y=a.getX(b+2);s=$a(this,g,e,n,c,u,f,S,E,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=$a(this,o,e,n,c,u,f,v,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,M=w;b<M;b+=3){let S=b,E=b+1,y=b+2;s=$a(this,g,e,n,c,u,f,S,E,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,w=m+1,b=m+2;s=$a(this,o,e,n,c,u,f,v,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function T0(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ss,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:i}}function $a(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ha),i.getVertexPosition(l,Wa),i.getVertexPosition(c,qa);let u=T0(i,e,t,n,Ha,Wa,qa,_f);if(u){let f=new z;Qi.getBarycoord(_f,Ha,Wa,qa,f),s&&(u.uv=Qi.getInterpolatedAttribute(s,a,l,c,f,new be)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,l,c,f,new be)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};Qi.getNormal(Ha,Wa,qa,h.normal),u.face=h,u.barycoord=f}return u}var To=class extends gn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,u=jt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=class extends mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new at,bf=new at,Za=[],Sf=new hi,C0=new at,ao=new Pt,lo=new Ii,Ns=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Sf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),lo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),e.ray.intersectsSphere(lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),bf.multiplyMatrices(n,hr),ao.matrixWorld=bf,ao.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){let l=Za[o];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(s*this.count),s,this.count,Yl,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Ii,R0=new be(.5,.5),Ka=new z,Mr=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],w=r[13],b=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,g-p,M-v).normalize(),s[1].setComponents(c+o,d+u,g+p,M+v).normalize(),s[2].setComponents(c+a,d+f,g+x,M+w).normalize(),s[3].setComponents(c-a,d-f,g-x,M-w).normalize(),n)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,d-h,g-m,M-b).normalize();else if(s[4].setComponents(c-l,d-h,g-m,M-b).normalize(),t===$n)s[5].setComponents(c+l,d+h,g+m,M+b).normalize();else if(t===vr)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);let t=R0.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wr=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new z,vl=new z,Mf=new at,co=new Ao,Ja=new Ii,Vh=new z,wf=new z,Ro=class extends rn{constructor(e=new Xt,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xl.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xl.distanceTo(vl);e.setAttribute("lineDistance",new Ft(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Mf.copy(s).invert(),co.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=u.getX(x),v=u.getX(x+1),w=ja(this,e,co,l,g,v,x);w&&t.push(w)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(d),g=ja(this,e,co,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=ja(this,e,co,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ja(this,e,co,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ja(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(xl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),t.distanceSqToSegment(xl,vl,Vh,wf)>n)return;Vh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vh);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Io=class extends gn{constructor(e=[],t=rs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Er=class extends gn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends gn{constructor(e,t,n=Jn,s,r,o,a=jt,l=jt,c,u=li,f=1){if(u!==li&&u!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yl=class extends es{constructor(e,t=Jn,n=rs,s,r,o=jt,a=jt,l,c=li){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Po=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function p(x,m,g,v,w,b,M,S,E,y,T){let P=b/E,N=M/y,U=b/2,F=M/2,L=S/2,D=E+1,B=y+1,W=0,X=0,H=new z;for(let K=0;K<B;K++){let j=K*N-F;for(let oe=0;oe<D;oe++){let me=oe*P-U;H[x]=me*v,H[m]=j*w,H[g]=L,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),f.push(oe/E),f.push(1-K/y),W+=1}}for(let K=0;K<y;K++)for(let j=0;j<E;j++){let oe=h+j+D*K,me=h+j+D*(K+1),Xe=h+(j+1)+D*(K+1),Ye=h+(j+1)+D*K;l.push(oe,me,Ye),l.push(me,Xe,Ye),X+=6}a.addGroup(d,X,T),d+=X,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new at;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_l=class extends Ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ef=new z,Af=new z,Gh=new Cu,Hh=new Cu,Wh=new Cu,bl=class extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Af.subVectors(s[0],s[1]).add(s[0]),c=Af);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ef.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Gh.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,x,m),Hh.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,x,m),Wh.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Gh.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Hh.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Wh.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Gh.calc(l),Hh.calc(l),Wh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function I0(i,e){let t=1-i;return t*t*e}function P0(i,e){return 2*(1-i)*i*e}function L0(i,e){return i*i*e}function po(i,e,t,n){return I0(i,e)+P0(i,t)+L0(i,n)}function N0(i,e){let t=1-i;return t*t*t*e}function F0(i,e){let t=1-i;return 3*t*t*i*e}function D0(i,e){return 3*(1-i)*i*i*e}function B0(i,e){return i*i*i*e}function mo(i,e,t,n,s){return N0(i,e)+F0(i,t)+D0(i,n)+B0(i,s)}var Lo=class extends Ln{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends Ln{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends Ln{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends Ln{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Ln{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends Ln{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Tf(a,l.x,c.x,u.x,f.x),Tf(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Jh=Object.freeze({__proto__:null,ArcCurve:_l,CatmullRomCurve3:bl,CubicBezierCurve:Lo,CubicBezierCurve3:Sl,EllipseCurve:Ar,LineCurve:No,LineCurve3:Ml,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:wl,SplineCurve:Do}),El=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jh[s.type]().fromJSON(s))}return this}},Bo=class extends El{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new No(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Fo(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Lo(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Do(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Tr=class extends Bo{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Bo().fromJSON(s))}return this}};function U0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Sp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=G0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<s;h+=t){let d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Uo(r,o,t,a,l,c,0),o}function Sp(i,e,t,n,s){let r;if(s===Q0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Cf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Cf(o/n|0,i[o],i[o+1],r);return r&&Cr(r,r.next)&&(zo(r),r=r.next),r}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cr(t,t.next)||zt(t.prev,t,t.next)===0)){if(zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Uo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Y0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?z0(i,n,s,r):O0(i)){e.push(l.i,i.i,c.i),zo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=k0(Fs(i),e),Uo(i,e,t,n,s,r,2)):o===2&&V0(i,e,t,n,s,r):Uo(Fs(i),e,t,n,s,r,1);break}}}function O0(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&ho(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function z0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),g=jh(d,p,e,t,n),v=jh(x,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=g&&b&&b.z<=v;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ho(a,u,l,f,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ho(a,u,l,f,c,h,b.x,b.y)&&zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&ho(a,u,l,f,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ho(a,u,l,f,c,h,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function k0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cr(n,s)&&wp(n,t,t.next,s)&&Oo(n,s)&&Oo(s,n)&&(e.push(n.i,t.i,s.i),zo(t),zo(t.next),t=i=s),t=t.next}while(t!==i);return Fs(t)}function V0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K0(o,a)){let l=Ep(o,a);o=Fs(o,o.next),l=Fs(l,l.next),Uo(o,e,t,n,s,r,0),Uo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function G0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Sp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Z0(c))}s.sort(H0);for(let r=0;r<s.length;r++)t=W0(s[r],t);return t}function H0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function W0(i,e){let t=q0(i,e);if(!t)return e;let n=Ep(t,i);return Fs(n,n.next),Fs(t,t.next)}function q0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Cr(i,t))return t;do{if(Cr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Mp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Oo(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&X0(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function X0(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function Y0(i,e,t,n){let s=i;do s.z===0&&(s.z=jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$0(s)}function $0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Z0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ho(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Mp(i,e,t,n,s,r,o,a)}function K0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!J0(i,e)&&(Oo(i,e)&&Oo(e,i)&&j0(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||Cr(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cr(i,e){return i.x===e.x&&i.y===e.y}function wp(i,e,t,n){let s=el(zt(i,e,t)),r=el(zt(i,e,n)),o=el(zt(t,n,i)),a=el(zt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qa(i,t,e)||r===0&&Qa(i,n,e)||o===0&&Qa(t,i,n)||a===0&&Qa(t,e,n))}function Qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function el(i){return i>0?1:i<0?-1:0}function J0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Oo(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function j0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ep(i,e){let t=Qh(i.i,i.x,i.y),n=Qh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cf(i,e,t,n){let s=Qh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Q0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var eu=class{static triangulate(e,t,n=2){return U0(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rf(e),If(n,e);let o=e.length;t.forEach(Rf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,If(n,t[l]);let a=eu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function If(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ko=class i extends Xt{constructor(e=new Tr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ft(s,3)),this.setAttribute("uv",new Ft(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ex,w,b=!1,M,S,E,y;if(g){w=g.getSpacedPoints(u),b=!0,h=!1;let re=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,re),S=new z,E=new z,y=new z}h||(m=0,d=0,p=0,x=0);let T=a.extractPoints(c),P=T.shape,N=T.holes;if(!Ps.isClockWise(P)){P=P.reverse();for(let re=0,ce=N.length;re<ce;re++){let ue=N[re];Ps.isClockWise(ue)&&(N[re]=ue.reverse())}}function F(re){let ue=10000000000000001e-36,he=re[0];for(let pe=1;pe<=re.length;pe++){let ze=pe%re.length,Fe=re[ze],We=Fe.x-he.x,Ze=Fe.y-he.y,I=We*We+Ze*Ze,le=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(he.x),Math.abs(he.y)),Y=ue*le*le;if(I<=Y){re.splice(ze,1),pe--;continue}he=Fe}}F(P),N.forEach(F);let L=N.length,D=P;for(let re=0;re<L;re++){let ce=N[re];P=P.concat(ce)}function B(re,ce,ue){return ce||qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ce,ue)}let W=P.length;function X(re,ce,ue){let he,pe,ze,Fe=re.x-ce.x,We=re.y-ce.y,Ze=ue.x-re.x,I=ue.y-re.y,le=Fe*Fe+We*We,Y=Fe*I-We*Ze;if(Math.abs(Y)>Number.EPSILON){let R=Math.sqrt(le),_=Math.sqrt(Ze*Ze+I*I),k=ce.x-We/R,O=ce.y+Fe/R,q=ue.x-I/_,de=ue.y+Ze/_,fe=((q-k)*I-(de-O)*Ze)/(Fe*I-We*Ze);he=k+Fe*fe-re.x,pe=O+We*fe-re.y;let ee=he*he+pe*pe;if(ee<=2)return new be(he,pe);ze=Math.sqrt(ee/2)}else{let R=!1;Fe>Number.EPSILON?Ze>Number.EPSILON&&(R=!0):Fe<-Number.EPSILON?Ze<-Number.EPSILON&&(R=!0):Math.sign(We)===Math.sign(I)&&(R=!0),R?(he=-We,pe=Fe,ze=Math.sqrt(le)):(he=Fe,pe=We,ze=Math.sqrt(le/2))}return new be(he/ze,pe/ze)}let H=[];for(let re=0,ce=D.length,ue=ce-1,he=re+1;re<ce;re++,ue++,he++)ue===ce&&(ue=0),he===ce&&(he=0),H[re]=X(D[re],D[ue],D[he]);let K=[],j,oe=H.concat();for(let re=0,ce=L;re<ce;re++){let ue=N[re];j=[];for(let he=0,pe=ue.length,ze=pe-1,Fe=he+1;he<pe;he++,ze++,Fe++)ze===pe&&(ze=0),Fe===pe&&(Fe=0),j[he]=X(ue[he],ue[ze],ue[Fe]);K.push(j),oe=oe.concat(j)}let me;if(m===0)me=Ps.triangulateShape(D,N);else{let re=[],ce=[];for(let ue=0;ue<m;ue++){let he=ue/m,pe=d*Math.cos(he*Math.PI/2),ze=p*Math.sin(he*Math.PI/2)+x;for(let Fe=0,We=D.length;Fe<We;Fe++){let Ze=B(D[Fe],H[Fe],ze);xe(Ze.x,Ze.y,-pe),he===0&&re.push(Ze)}for(let Fe=0,We=L;Fe<We;Fe++){let Ze=N[Fe];j=K[Fe];let I=[];for(let le=0,Y=Ze.length;le<Y;le++){let R=B(Ze[le],j[le],ze);xe(R.x,R.y,-pe),he===0&&I.push(R)}he===0&&ce.push(I)}}me=Ps.triangulateShape(re,ce)}let Xe=me.length,Ye=p+x;for(let re=0;re<W;re++){let ce=h?B(P[re],oe[re],Ye):P[re];b?(E.copy(M.normals[0]).multiplyScalar(ce.x),S.copy(M.binormals[0]).multiplyScalar(ce.y),y.copy(w[0]).add(E).add(S),xe(y.x,y.y,y.z)):xe(ce.x,ce.y,0)}for(let re=1;re<=u;re++)for(let ce=0;ce<W;ce++){let ue=h?B(P[ce],oe[ce],Ye):P[ce];b?(E.copy(M.normals[re]).multiplyScalar(ue.x),S.copy(M.binormals[re]).multiplyScalar(ue.y),y.copy(w[re]).add(E).add(S),xe(y.x,y.y,y.z)):xe(ue.x,ue.y,f/u*re)}for(let re=m-1;re>=0;re--){let ce=re/m,ue=d*Math.cos(ce*Math.PI/2),he=p*Math.sin(ce*Math.PI/2)+x;for(let pe=0,ze=D.length;pe<ze;pe++){let Fe=B(D[pe],H[pe],he);xe(Fe.x,Fe.y,f+ue)}for(let pe=0,ze=N.length;pe<ze;pe++){let Fe=N[pe];j=K[pe];for(let We=0,Ze=Fe.length;We<Ze;We++){let I=B(Fe[We],j[We],he);b?xe(I.x,I.y+w[u-1].y,w[u-1].x+ue):xe(I.x,I.y,f+ue)}}}$e(),te();function $e(){let re=s.length/3;if(h){let ce=0,ue=W*ce;for(let he=0;he<Xe;he++){let pe=me[he];ke(pe[2]+ue,pe[1]+ue,pe[0]+ue)}ce=u+m*2,ue=W*ce;for(let he=0;he<Xe;he++){let pe=me[he];ke(pe[0]+ue,pe[1]+ue,pe[2]+ue)}}else{for(let ce=0;ce<Xe;ce++){let ue=me[ce];ke(ue[2],ue[1],ue[0])}for(let ce=0;ce<Xe;ce++){let ue=me[ce];ke(ue[0]+W*u,ue[1]+W*u,ue[2]+W*u)}}n.addGroup(re,s.length/3-re,0)}function te(){let re=s.length/3,ce=0;ie(D,ce),ce+=D.length;for(let ue=0,he=N.length;ue<he;ue++){let pe=N[ue];ie(pe,ce),ce+=pe.length}n.addGroup(re,s.length/3-re,1)}function ie(re,ce){let ue=re.length;for(;--ue>=0;){let he=ue,pe=ue-1;pe<0&&(pe=re.length-1);for(let ze=0,Fe=u+m*2;ze<Fe;ze++){let We=W*ze,Ze=W*(ze+1),I=ce+he+We,le=ce+pe+We,Y=ce+pe+Ze,R=ce+he+Ze;Ae(I,le,Y,R)}}}function xe(re,ce,ue){l.push(re),l.push(ce),l.push(ue)}function ke(re,ce,ue){Ve(re),Ve(ce),Ve(ue);let he=s.length/3,pe=v.generateTopUV(n,s,he-3,he-2,he-1);ut(pe[0]),ut(pe[1]),ut(pe[2])}function Ae(re,ce,ue,he){Ve(re),Ve(ce),Ve(he),Ve(ce),Ve(ue),Ve(he);let pe=s.length/3,ze=v.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);ut(ze[0]),ut(ze[1]),ut(ze[3]),ut(ze[1]),ut(ze[2]),ut(ze[3])}function Ve(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function ut(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Jh[s.type]().fromJSON(s)),new i(n,e.options)}},ex={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new be(r,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-f),new be(h,1-p),new be(x,1-g)]:[new be(a,1-l),new be(u,1-f),new be(d,1-p),new be(m,1-g)]}};function tx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vo=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let v=g*h-o;for(let w=0;w<c;w++){let b=w*f-r;p.push(b,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,b=v+c*(g+1),M=v+1+c*(g+1),S=v+1+c*g;d.push(w,b,S),d.push(b,M,S)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(x,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ds=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new z,d=new z,p=new z;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(g/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,b=(s+1)*x+m;l.push(g,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pf(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function Pf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ru(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Ap={clone:ks,merge:un},ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Al=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Li=class extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Tl=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rl=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=e,a=2*t-n;break;case Kh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=e,l=2*n-t;break;case Kh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,b=d*m-d*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+v*o[c+M]+w*o[l+M]+b*o[f+M];return r}},Il=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Pl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ll=class extends ts{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*h+p*2,v=f[g],w=f[g+1],b=e*h+p*2,M=u[b],S=u[b+1],E=ox(n,t,v,M,s);r[p]=Tp(E,x,w,S,m)}return r}};function Tp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function rx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ox(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Tp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=rx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qh(e.settings)&&(n.settings={inTangents:ur(e.settings.inTangents,Array),outTangents:ur(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case fl:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case Yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qh(this.settings)&&(Lf(this.settings.inTangents,e),Lf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&$g(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[h+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=fl;var ns=class extends Fn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=go;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Nl.prototype.ValueTypeName="color";var Fl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Fl.prototype.ValueTypeName="number";var Dl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Go=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Fn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=go;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Bl.prototype.ValueTypeName="vector";var Ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cp=new Ul,Ol=class{constructor(e){this.manager=e!==void 0?e:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ho=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xh=new at,Nf=new z,Ff=new z,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new z,nl=new qt,oi=new z,qo=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tl,nl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new z,Df=new be,Bf=new be,tn=class extends qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Df,Bf),t.subVectors(Bf,Df)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tu=class extends Wo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Xo=class extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ir=class extends qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nu=class extends Wo{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yo=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var dr=-90,fr=1,zl=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new tn(dr,fr,e,t);r.layers=this.layers,this.add(r);let o=new tn(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new tn(dr,fr,e,t);a.layers=this.layers,this.add(a);let l=new tn(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new tn(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},kl=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Iu="\\[\\]\\.:\\/",ax=new RegExp("["+Iu+"]","g"),Pu="[^"+Iu+"]",lx="[^"+Iu.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",Pu),hx=/(WCOD+)?/.source.replace("WCOD",lx),ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),fx=new RegExp("^"+cx+hx+ux+dx+"$"),px=["material","materials","bones","map"],iu=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(e){let t=fx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=iu;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dw=new Float32Array(1);var su=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Lu(i,e,t,n){let s=mx(n);switch(t){case Mu:return i*e;case Yl:return i*e/s.components*s.byteLength;case $l:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case Zl:return i*e*2/s.components*s.byteLength;case wu:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:case ec:return Math.max(i,16)*Math.max(e,8)/4;case Jl:case Ql:return Math.max(i,8)*Math.max(e,8)/2;case tc:case nc:case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ic:case ta:case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bc:case Sc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*8;case na:case Ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(i){switch(i){case En:case yu:return{byteLength:1,components:1};case Nr:case _u:case jn:return{byteLength:2,components:1};case ql:case Xl:return{byteLength:2,components:4};case Jn:case Wl:case zn:return{byteLength:4,components:1};case bu:case Su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xx(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Lx=`#ifdef USE_BUMPMAP
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vx=`#define PI 3.141592653589793
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
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rv=`#ifdef USE_GRADIENTMAP
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
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hv=`#ifdef USE_ENVMAP
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
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
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
#endif`,gv=`uniform sampler2D dfgLUT;
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
}`,xv=`
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cv=`#if defined( USE_POINTS_UV )
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
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
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
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
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
}`,Ey=`#if DEPTH_PACKING == 3200
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
}`,Ay=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Dy=`#define LAMBERT
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
}`,Uy=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,ky=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Hy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,qy=`#define TOON
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
}`,Xy=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Zy=`uniform vec3 color;
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
}`,Ky=`uniform float rotation;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:vx,alphahash_pars_fragment:yx,alphamap_fragment:_x,alphamap_pars_fragment:bx,alphatest_fragment:Sx,alphatest_pars_fragment:Mx,aomap_fragment:wx,aomap_pars_fragment:Ex,batching_pars_vertex:Ax,batching_vertex:Tx,begin_vertex:Cx,beginnormal_vertex:Rx,bsdfs:Ix,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Bx,color_fragment:Ux,color_pars_fragment:Ox,color_pars_vertex:zx,color_vertex:kx,common:Vx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:Wx,displacementmap_vertex:qx,emissivemap_fragment:Xx,emissivemap_pars_fragment:Yx,colorspace_fragment:$x,colorspace_pars_fragment:Zx,envmap_fragment:Kx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:jx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:hv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:rv,lightmap_pars_fragment:ov,lights_lambert_fragment:av,lights_lambert_pars_fragment:lv,lights_pars_begin:cv,lights_toon_fragment:uv,lights_toon_pars_fragment:dv,lights_phong_fragment:fv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:xv,lights_fragment_maps:vv,lights_fragment_end:yv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:wv,map_fragment:Ev,map_pars_fragment:Av,map_particle_fragment:Tv,map_particle_pars_fragment:Cv,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Pv,morphcolor_vertex:Lv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Dv,normal_fragment_begin:Bv,normal_fragment_maps:Uv,normal_pars_fragment:Ov,normal_pars_vertex:zv,normal_vertex:kv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:qv,opaque_fragment:Xv,packing:Yv,premultiplied_alpha_fragment:$v,project_vertex:Zv,dithering_fragment:Kv,dithering_pars_fragment:Jv,roughnessmap_fragment:jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:ry,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:hy,tonemapping_pars_fragment:uy,transmission_fragment:dy,transmission_pars_fragment:fy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:xy,background_vert:vy,background_frag:yy,backgroundCube_vert:_y,backgroundCube_frag:by,cube_vert:Sy,cube_frag:My,depth_vert:wy,depth_frag:Ey,distance_vert:Ay,distance_frag:Ty,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:Iy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Ny,meshlambert_vert:Fy,meshlambert_frag:Dy,meshmatcap_vert:By,meshmatcap_frag:Uy,meshnormal_vert:Oy,meshnormal_frag:zy,meshphong_vert:ky,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Hy,meshtoon_vert:Wy,meshtoon_frag:qy,points_vert:Xy,points_frag:Yy,shadow_vert:$y,shadow_frag:Zy,sprite_vert:Ky,sprite_frag:Jy},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},fi={basic:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:un([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:un([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:un([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:un([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:un([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:un([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:un([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:un([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:un([Me.common,Me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:un([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};fi.physical={uniforms:un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ic={r:0,b:0,g:0},jy=new at,Jp=new Ke;Jp.set(-1,0,0,0,1,0,0,0,1);function Qy(i,e,t,n,s,r){let o=new Je(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(v){let w=!1,b=d(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let b=d(w);b&&(b.isCubeTexture||b.mapping===Zo)?(c===void 0&&(c=new Pt(new Zn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ks(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jp),c.material.toneMapped=st.getTransfer(b.colorSpace)!==mt,(u!==b||f!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Pt(new Vo(2,2),new Nn({name:"BackgroundMaterial",uniforms:ks(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=st.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(Ic,Ru(i)),t.buffers.color.setClear(Ic.r,Ic.g,Ic.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function e_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,U,F,L,D){let B=!1,W=f(N,L,F,U);r!==W&&(r=W,c(r.object)),B=d(N,L,F,D),B&&p(N,L,F,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(N,U,F,L),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,U,F,L){let D=L.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let W=N.isInstancedMesh===!0?N.id:0,X=B[W];X===void 0&&(X={},B[W]=X);let H=X[F.id];H===void 0&&(H={},X[F.id]=H);let K=H[D];return K===void 0&&(K=h(l()),H[D]=K),K}function h(N){let U=[],F=[],L=[];for(let D=0;D<t;D++)U[D]=0,F[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,U,F,L){let D=r.attributes,B=U.attributes,W=0,X=F.getAttributes();for(let H in X)if(X[H].location>=0){let j=D[H],oe=B[H];if(oe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(N,U,F,L){let D={},B=U.attributes,W=0,X=F.getAttributes();for(let H in X)if(X[H].location>=0){let j=B[H];j===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),D[H]=oe,W++}r.attributes=D,r.attributesNum=W,r.index=L}function x(){let N=r.newAttributes;for(let U=0,F=N.length;U<F;U++)N[U]=0}function m(N){g(N,0)}function g(N,U){let F=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;F[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),D[N]!==U&&(i.vertexAttribDivisor(N,U),D[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let F=0,L=U.length;F<L;F++)U[F]!==N[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function w(N,U,F,L,D,B,W){W===!0?i.vertexAttribIPointer(N,U,F,D,B):i.vertexAttribPointer(N,U,F,L,D,B)}function b(N,U,F,L){x();let D=L.attributes,B=F.getAttributes(),W=U.defaultAttributeValues;for(let X in B){let H=B[X];if(H.location>=0){let K=D[X];if(K===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let j=K.normalized,oe=K.itemSize,me=e.get(K);if(me===void 0)continue;let Xe=me.buffer,Ye=me.type,$e=me.bytesPerElement,te=Ye===i.INT||Ye===i.UNSIGNED_INT||K.gpuType===Wl;if(K.isInterleavedBufferAttribute){let ie=K.data,xe=ie.stride,ke=K.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)g(H.location+Ae,ie.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ae=0;Ae<H.locationSize;Ae++)w(H.location+Ae,oe/H.locationSize,Ye,j,xe*$e,(ke+oe/H.locationSize*Ae)*$e,te)}else{if(K.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)g(H.location+ie,K.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ie=0;ie<H.locationSize;ie++)m(H.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ie=0;ie<H.locationSize;ie++)w(H.location+ie,oe/H.locationSize,Ye,j,oe*$e,oe/H.locationSize*ie*$e,te)}}else if(W!==void 0){let j=W[X];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}v()}function M(){T();for(let N in n){let U=n[N];for(let F in U){let L=U[F];for(let D in L){let B=L[D];for(let W in B)u(B[W].object),delete B[W];delete L[D]}}delete n[N]}}function S(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let F in U){let L=U[F];for(let D in L){let B=L[D];for(let W in B)u(B[W].object),delete B[W];delete L[D]}}delete n[N.id]}function E(N){for(let U in n){let F=n[U];for(let L in F){let D=F[L];if(D[N.id]===void 0)continue;let B=D[N.id];for(let W in B)u(B[W].object),delete B[W];delete D[N.id]}}}function y(N){for(let U in n){let F=n[U],L=N.isInstancedMesh===!0?N.id:0,D=F[L];if(D!==void 0){for(let B in D){let W=D[B];for(let X in W)u(W[X].object),delete W[X];delete D[B]}delete F[L],Object.keys(F).length===0&&delete n[U]}}}function T(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function t_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==kn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==En&&E!==zn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:M,samples:S}}function i_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,w=v*4,b=g.clippingState||null;l.value=b,b=u(p,h,w,d);for(let M=0;M!==w;++M)b[M]=t[M];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,b=d;w!==x;++w,b+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ur=4,s_=6,r_=20,o_=256,ia=new Ir,Rp=new Je,Nu=null,Fu=0,Du=0,Bu=!1,a_=new z,Vs=new z,Lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=a_}=r;Nu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Fu,Du),this._renderer.xr.enabled=Bu,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:jn,format:kn,colorSpace:xo,depthBuffer:!1},s=Ip(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l_(r)),this._blurMaterial=h_(r,e,t),this._ggxMaterial=c_(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new Xt,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,s,r){let l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Rp),f.toneMapping=Kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Zn,new Pn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(Rp),g=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let M=this._cubeSize;Br(s,b*M,w>2?M:0,M,M),f.setRenderTarget(s),g&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ur?n-p+Ur:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Br(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Br(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,ia)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),h=4*(this._cubeSize-u);Br(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ia)}};function l_(i){let e=[],t=[],n=i,s=i-Ur+1+s_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let g=0;g<f;g++){let v=g%3*2/3-1,w=g>2?0:-1,b=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];p.set(b,d*h*g);for(let M=0;M<h;M++){let S=u[M*2]*2-1,E=u[M*2+1]*2-1;g===0?Vs.set(1,E,S):g===1?Vs.set(-S,1,-E):g===2?Vs.set(-S,E,1):g===3?Vs.set(-1,E,-S):g===4?Vs.set(-S,-1,E):Vs.set(S,E,-1),Vs.toArray(x,(g*h+M)*d)}}let m=new Xt;m.setAttribute("position",new mn(p,d)),m.setAttribute("outputDirection",new mn(x,d)),t.push(new Pt(m,null)),n>Ur&&n--}return{lodMeshes:t,sizeLods:e}}function Ip(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c_(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function h_(i,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:r_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Lp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nc=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ui});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=nn),new zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function u_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Vl||d===Gl)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new Nc(p.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Vl||d===Gl,x=d===rs||d===Os;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Lc(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Lc(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Vl?h.mapping=rs:d===Gl&&(h.mapping=Os),h}function l(h){let d=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function d_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function f_(i,e,t,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let w=0,b=v.length;w<b;w+=3){let M=v[w+0],S=v[w+1],E=v[w+2];h.push(M,S,S,E,E,M)}}else{let v=p.array;x=p.version;for(let w=0,b=v.length/3-1;w<b;w+=3){let M=w+0,S=w+1,E=w+2;h.push(M,S,S,E,E,M)}}let m=new(p.count>=65535?Eo:wo)(h,1);m.version=x;let g=r.get(f);g&&e.remove(g),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function p_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function m_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function g_(i,e,t){let n=new WeakMap,s=new Dt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let b=a.attributes.position.count*w,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*M*4*f),E=new _o(S,b,M,f);E.type=zn,E.needsUpdate=!0;let y=w*4;for(let P=0;P<f;P++){let N=m[P],U=g[P],F=v[P],L=b*M*4*P;for(let D=0;D<N.count;D++){let B=D*y;d===!0&&(s.fromBufferAttribute(N,D),S[L+B+0]=s.x,S[L+B+1]=s.y,S[L+B+2]=s.z,S[L+B+3]=0),p===!0&&(s.fromBufferAttribute(U,D),S[L+B+4]=s.x,S[L+B+5]=s.y,S[L+B+6]=s.z,S[L+B+7]=0),x===!0&&(s.fromBufferAttribute(F,D),S[L+B+8]=s.x,S[L+B+9]=s.y,S[L+B+10]=s.z,S[L+B+11]=F.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new be(b,M)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function x_(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var v_={[du]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[pu]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[xu]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function y_(i,e,t,n,s,r){let o=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Xt;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let u=new Al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(c,u),h=new Ir(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,v=[],w=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let S=0;S<v.length;S++){let E=v[S];E.setSize&&E.setSize(b,M)}},this.setEffects=function(b){v=b,w=v.length>0&&v[0].isRenderPass===!0;let M=o.width,S=o.height;v.length>0&&a===null&&(a=new wn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){let y=v[E];y.setSize&&y.setSize(M,S)}},this.begin=function(b,M){if(x||b.toneMapping===Kn&&v.length===0)return!1;if(g=M,M!==null){let S=M.width,E=M.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return w===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=Kn,!0},this.hasRenderPass=function(){return w},this.end=function(b,M){b.toneMapping=m,x=!0;let S=o,E=a;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(b,E,S,M),T.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,u.defines={},st.getTransfer(d)===mt&&(u.defines.SRGB_TRANSFER="");let y=v_[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(g),b.render(f,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var jp=new gn,zu=new es(1,1),Qp=new _o,em=new gl,tm=new Io,Np=[],Fp=[],Dp=new Float32Array(16),Bp=new Float32Array(9),Up=new Float32Array(4);function zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Np[s];if(r===void 0&&(r=new Float32Array(s),Np[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bc(i,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Up.set(n),i.uniformMatrix2fv(this.addr,!1,Up),$t(t,n)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Bp.set(n),i.uniformMatrix3fv(this.addr,!1,Bp),$t(t,n)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),$t(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function D_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=t.isReversedDepthBuffer()?Rc:Cc,r=zu):r=jp,t.setTexture2D(e||r,s)}function B_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||em,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tm,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qp,s)}function z_(i){switch(i){case 5126:return __;case 35664:return b_;case 35665:return S_;case 35666:return M_;case 35674:return w_;case 35675:return E_;case 35676:return A_;case 5124:case 35670:return T_;case 35667:case 35671:return C_;case 35668:case 35672:return R_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return L_;case 36295:return N_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}function k_(i,e){i.uniform1fv(this.addr,e)}function V_(i,e){let t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function G_(i,e){let t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function H_(i,e){let t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function W_(i,e){let t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){let t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){let t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y_(i,e){i.uniform1iv(this.addr,e)}function $_(i,e){i.uniform2iv(this.addr,e)}function Z_(i,e){i.uniform3iv(this.addr,e)}function K_(i,e){i.uniform4iv(this.addr,e)}function J_(i,e){i.uniform1uiv(this.addr,e)}function j_(i,e){i.uniform2uiv(this.addr,e)}function Q_(i,e){i.uniform3uiv(this.addr,e)}function eb(i,e){i.uniform4uiv(this.addr,e)}function tb(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zu:o=jp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function nb(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||em,r[o])}function ib(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tm,r[o])}function sb(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qp,r[o])}function rb(i){switch(i){case 5126:return k_;case 35664:return V_;case 35665:return G_;case 35666:return H_;case 35674:return W_;case 35675:return q_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return j_;case 36295:return Q_;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rb(t.type)}},Gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Uu=/(\w+)(\])?(\[|\.)?/g;function Op(i,e){i.seq.push(e),i.map[e.id]=e}function ob(i,e,t){let n=i.name,s=n.length;for(Uu.lastIndex=0;;){let r=Uu.exec(n),o=Uu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Op(t,c===void 0?new ku(a,i,e):new Vu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Gu(a),Op(t,f)),t=f}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ob(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function zp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ab=37297,lb=0;function cb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kp=new Ke;function hb(i){st._getMatrix(kp,st.workingColorSpace,i);let e=`mat3( ${kp.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case vo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cb(i.getShaderSource(e),a)}else return r}function ub(i,e){let t=hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var db={[du]:"Linear",[fu]:"Reinhard",[pu]:"Cineon",[$o]:"ACESFilmic",[gu]:"AgX",[xu]:"Neutral",[mu]:"Custom"};function fb(i,e){let t=db[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pc=new z;function pb(){st.getLuminanceCoefficients(Pc);let i=Pc.x.toFixed(4),e=Pc.y.toFixed(4),t=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function gb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ra(i){return i!==""}function Gp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(i){return i.replace(vb,_b)}var yb=new Map;function _b(i,e){let t=et[e];if(t===void 0){let n=yb.get(e);if(n!==void 0)t=et[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hu(t)}var bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(i){return i.replace(bb,Sb)}function Sb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Mb={[Bs]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function wb(i){return Mb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eb={[rs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Zo]:"ENVMAP_TYPE_CUBE_UV"};function Ab(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tb={[Os]:"ENVMAP_MODE_REFRACTION"};function Cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rb={[uu]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function Ib(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rb[i.combine]||"ENVMAP_BLENDING_NONE"}function Pb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=wb(t),c=Ab(t),u=Cb(t),f=Ib(t),h=Pb(t),d=mb(t),p=gb(r),x=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ra).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ra).join(`
`),g.length>0&&(g+=`
`)):(m=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),g=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?et.tonemapping_pars_fragment:"",t.toneMapping!==Kn?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),pb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),o=Hu(o),o=Gp(o,t),o=Hp(o,t),a=Hu(a),a=Gp(a,t),a=Hp(a,t),o=Wp(o),a=Wp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=v+m+o,b=v+g+a,M=zp(s,s.VERTEX_SHADER,w),S=zp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,M),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(S)||"",D=U.trim(),B=F.trim(),W=L.trim(),X=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let K=Vp(s,M,"vertex"),j=Vp(s,S,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+K+`
`+j)}else D!==""?Ge("WebGLProgram: Program Info Log:",D):(B===""||W==="")&&(H=!1);H&&(N.diagnostics={runnable:X,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(S),y=new Or(s,x),T=xb(s,x)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,ab)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var Nb=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qu(e),t.set(e,n)),n}},qu=class{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}};function Fb(i){return i===ls||i===ta||i===na}function Db(i,e,t,n,s,r){let o=new bo,a=new Wu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,P,N,U,F){let L=N.fog,D=U.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=e.get(y.envMap||B,W),H=X&&X.mapping===Zo?X.image.height:null,K=d[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=j!==void 0?j.length:0,me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let Xe,Ye,$e,te;if(K){let At=fi[K];Xe=At.vertexShader,Ye=At.fragmentShader}else{Xe=y.vertexShader,Ye=y.fragmentShader;let At=a.getVertexShaderStage(y),ft=a.getFragmentShaderStage(y);a.update(y,At,ft),$e=At.id,te=ft.id}let ie=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ke=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,Ve=!!y.map,ut=!!y.matcap,re=!!X,ce=!!y.aoMap,ue=!!y.lightMap,he=!!y.bumpMap&&y.wireframe===!1,pe=!!y.normalMap,ze=!!y.displacementMap,Fe=!!y.emissiveMap,We=!!y.metalnessMap,Ze=!!y.roughnessMap,I=y.anisotropy>0,le=y.clearcoat>0,Y=y.dispersion>0,R=y.retroreflectivity>0,_=y.iridescence>0,k=y.sheen>0,O=y.transmission>0,q=I&&!!y.anisotropyMap,de=le&&!!y.clearcoatMap,fe=le&&!!y.clearcoatNormalMap,ee=le&&!!y.clearcoatRoughnessMap,ne=_&&!!y.iridescenceMap,ge=_&&!!y.iridescenceThicknessMap,Be=k&&!!y.sheenColorMap,Se=k&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Ue=!!y.specularColorMap,He=!!y.specularIntensityMap,je=O&&!!y.transmissionMap,G=O&&!!y.thicknessMap,ye=!!y.gradientMap,se=!!y.alphaMap,_e=y.alphaTest>0,Te=!!y.alphaHash,ae=!!y.extensions,Oe=Kn;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Ne={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:Ye,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:ke,instancingColor:ke&&U.instanceColor!==null,instancingMorph:ke&&U.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:ut,envMap:re,envMapMode:re&&X.mapping,envMapCubeUVHeight:H,aoMap:ce,lightMap:ue,bumpMap:he,normalMap:pe,displacementMap:ze,emissiveMap:Fe,normalMapObjectSpace:pe&&y.normalMapType===lp,normalMapTangentSpace:pe&&y.normalMapType===Tc,packedNormalMap:pe&&y.normalMapType===Tc&&Fb(y.normalMap.format),metalnessMap:We,roughnessMap:Ze,anisotropy:I,anisotropyMap:q,clearcoat:le,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:Y,retroreflection:R,iridescence:_,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:k,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:Ue,specularIntensityMap:He,transmission:O,transmissionMap:je,thicknessMap:G,gradientMap:ye,opaque:y.transparent===!1&&y.blending===Lr&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:Te,combine:y.combine,mapUv:Ve&&p(y.map.channel),aoMapUv:ce&&p(y.aoMap.channel),lightMapUv:ue&&p(y.lightMap.channel),bumpMapUv:he&&p(y.bumpMap.channel),normalMapUv:pe&&p(y.normalMap.channel),displacementMapUv:ze&&p(y.displacementMap.channel),emissiveMapUv:Fe&&p(y.emissiveMap.channel),metalnessMapUv:We&&p(y.metalnessMap.channel),roughnessMapUv:Ze&&p(y.roughnessMap.channel),anisotropyMapUv:q&&p(y.anisotropyMap.channel),clearcoatMapUv:de&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(y.sheenRoughnessMap.channel),specularMapUv:ve&&p(y.specularMap.channel),specularColorMapUv:Ue&&p(y.specularColorMap.channel),specularIntensityMapUv:He&&p(y.specularIntensityMap.channel),transmissionMapUv:je&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:se&&p(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pe||I),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Ve||se),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:Fe&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let T=d[y.type],P;if(T){let N=fi[T];P=Ap.clone(N.uniforms)}else P=y.uniforms;return P}function b(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Lb(i,T,y,s),c.push(P),u.set(T,P)),P}function M(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:b,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:E}}function Bb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ub(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,x,m,g){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},i[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=g),e++,v}function l(h,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let w=a(h,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(h,d,p,x,m,g){let v=a(h,d,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,d){t.length>1&&t.sort(h||Ub),n.length>1&&n.sort(d||Xp),s.length>1&&s.sort(d||Xp)}function f(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Ob(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yp,i.set(n,[o])):s>=r.length?(o=new Yp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new Je};break;case"SpotLight":t={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function kb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Vb=0;function Gb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hb(i){let e=new zb,t=kb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new at,o=new at;function a(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,w=0,b=0,M=0,S=0,E=0,y=0,T=0,P=0;c.sort(Gb);for(let U=0,F=c.length;U<F;U++){let L=c[U],D=L.color,B=L.intensity,W=L.distance,X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ls?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=D.r*B,f+=D.g*B,h+=D.b*B;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],B);P++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,j=t.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=X;let oe=K.getViewportCount();for(let me=0;me<oe;me++)n.sunShadowMatrix[x+me]=K.getMatrix(me),n.sunShadowCascade[x+me]=K._cascadeData[me];x+=oe,p++}n.sun[d]=H,d++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,j=t.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=L.shadow.matrix,M++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[v]=H;let K=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,K.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=K.matrix,L.castShadow){let j=t.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=X,E++}v++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(D).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=H,w++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let K=L.shadow,j=t.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(B),H.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[b]=H,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==p||N.numDirectionalShadows!==M||N.numPointShadows!==S||N.numSpotShadows!==E||N.numSpotMaps!==y||N.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=d,N.directionalLength=m,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=p,N.numDirectionalShadows=M,N.numPointShadows=S,N.numSpotShadows=E,N.numSpotMaps=y,N.numLightProbes=P,n.version=Vb++)}function l(c,u){let f=0,h=0,d=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let b=c[v];if(b.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function $p(i){let e=new Hb(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Wb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $p(i),e.set(s,[a])):r>=o.length?(a=new $p(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
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
}`,Yb=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],$b=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Zp=new at,sa=new z,Ou=new z;function Zb(i,e,t){let n=new Mr,s=new be,r=new be,o=new Dt,a=new Tl,l=new Cl,c={},u=t.maxTextureSize,f={[ss]:xn,[xn]:ss,[On]:On},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:qb,fragmentShader:Xb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let g=this.type;this.render=function(S,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===zf&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=g!==this.type;F&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=S.length;L<D;L++){let B=S[L],W=B.shadow;if(W===void 0){Ge("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let X=W.getFrameExtents();s.multiply(X),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Pr){if(B.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new wn(s.x,s.y,{format:ls,type:jn,minFilter:nn,magFilter:nn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new es(s.x,s.y,zn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt}else B.isPointLight?(W.map=new Nc(s.x),W.map.depthTexture=new yl(s.x,Jn)):(W.map=new wn(s.x,s.y),W.map.depthTexture=new es(s.x,s.y,Jn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=li,this.type===Bs?(W.map.depthTexture.compareFunction=H?Rc:Cc,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,y);for(let j=0;j<K;j++){let oe=W.getCamera(j);if(B.isPointLight){let me=W.camera,Xe=W.matrix,Ye=B.distance||me.far;Ye!==me.far&&(me.far=Ye,me.updateProjectionMatrix()),sa.setFromMatrixPosition(B.matrixWorld),me.position.copy(sa),Ou.copy(me.position),Ou.add(Yb[j]),me.up.copy($b[j]),me.lookAt(Ou),me.updateMatrixWorld(),Xe.makeTranslation(-sa.x,-sa.y,-sa.z),Zp.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Zp,me.coordinateSystem,me.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());let me=W.getViewport(j);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),U.viewport(o)}n=W.getFrustum(j),b(E,y,oe,B,this.type)}W.isPointLightShadow!==!0&&this.type===Pr&&v(W,y),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function v(S,E){let y=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new wn(s.x,s.y,{format:ls,type:jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,y,h,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,y,d,x,null)}function w(S,E,y,T){let P=null,N=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let U=P.uuid,F=E.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let D=L[F];D===void 0&&(D=P.clone(),L[F]=D,E.addEventListener("dispose",M)),P=D}if(P.visible=E.visible,P.wireframe=E.wireframe,T===Pr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:f[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=y}return P}function b(S,E,y,T,P){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Pr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let F=e.update(S),L=S.material;if(Array.isArray(L)){let D=F.groups;for(let B=0,W=D.length;B<W;B++){let X=D[B],H=L[X.materialIndex];if(H&&H.visible){let K=w(S,H,T,P);S.onBeforeShadow(i,S,E,y,F,K,X),i.renderBufferDirect(y,null,F,K,S,X),S.onAfterShadow(i,S,E,y,F,K,X)}}}else if(L.visible){let D=w(S,L,T,P);S.onBeforeShadow(i,S,E,y,F,D,null),i.renderBufferDirect(y,null,F,D,S,null),S.onAfterShadow(i,S,E,y,F,D,null)}}let U=S.children;for(let F=0,L=U.length;F<L;F++)b(U[F],E,y,T,P)}function M(S){S.target.removeEventListener("dispose",M);for(let y in c){let T=c[y],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Kb(i,e){function t(){let G=!1,ye=new Dt,se=null,_e=new Dt(0,0,0,0);return{setMask:function(Te){se!==Te&&!G&&(i.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){G=Te},setClear:function(Te,ae,Oe,Ne,At){At===!0&&(Te*=Ne,ae*=Ne,Oe*=Ne),ye.set(Te,ae,Oe,Ne),_e.equals(ye)===!1&&(i.clearColor(Te,ae,Oe,Ne),_e.copy(ye))},reset:function(){G=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let G=!1,ye=!1,se=null,_e=null,Te=null;return{setReversed:function(ae){if(ye!==ae){let Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let Ne=Te;Te=null,this.setClear(Ne)}},getReversed:function(){return ye},setTest:function(ae){ae?ie(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ae){se!==ae&&!G&&(i.depthMask(ae),se=ae)},setFunc:function(ae){if(ye&&(ae=_p[ae]),_e!==ae){switch(ae){case rl:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=ae}},setLocked:function(ae){G=ae},setClear:function(ae){Te!==ae&&(Te=ae,ye&&(ae=1-ae),i.clearDepth(ae))},reset:function(){G=!1,se=null,_e=null,Te=null,ye=!1}}}function s(){let G=!1,ye=null,se=null,_e=null,Te=null,ae=null,Oe=null,Ne=null,At=null;return{setTest:function(ft){G||(ft?ie(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ft){ye!==ft&&!G&&(i.stencilMask(ft),ye=ft)},setFunc:function(ft,Hn,si){(se!==ft||_e!==Hn||Te!==si)&&(i.stencilFunc(ft,Hn,si),se=ft,_e=Hn,Te=si)},setOp:function(ft,Hn,si){(ae!==ft||Oe!==Hn||Ne!==si)&&(i.stencilOp(ft,Hn,si),ae=ft,Oe=Hn,Ne=si)},setLocked:function(ft){G=ft},setClear:function(ft){At!==ft&&(i.clearStencil(ft),At=ft)},reset:function(){G=!1,ye=null,se=null,_e=null,Te=null,ae=null,Oe=null,Ne=null,At=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,b=null,M=null,S=null,E=null,y=new Je(0,0,0),T=0,P=!1,N=null,U=null,F=null,L=null,D=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=X>=2);let K=null,j={},oe=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Xe=new Dt().fromArray(oe),Ye=new Dt().fromArray(me);function $e(G,ye,se,_e){let Te=new Uint8Array(4),ae=i.createTexture();i.bindTexture(G,ae),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<se;Oe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ae}let te={};te[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(gr),he(!1),pe(ru),ie(i.CULL_FACE),ce(ui);function ie(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function xe(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function ke(G,ye){return h[G]!==ye?(i.bindFramebuffer(G,ye),h[G]=ye,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ae(G,ye){let se=p,_e=!1;if(G){se=d.get(ye),se===void 0&&(se=[],d.set(ye,se));let Te=G.textures;if(se.length!==Te.length||se[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Oe=Te.length;ae<Oe;ae++)se[ae]=i.COLOR_ATTACHMENT0+ae;se.length=Te.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function Ve(G){return x!==G?(i.useProgram(G),x=G,!0):!1}let ut={[Us]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};ut[Hf]=i.MIN,ut[Wf]=i.MAX;let re={[qf]:i.ZERO,[Xf]:i.ONE,[Yf]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[$f]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(G,ye,se,_e,Te,ae,Oe,Ne,At,ft){if(G===ui){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),G!==kf){if(G!==g||ft!==P){if((v!==Us||M!==Us)&&(i.blendEquation(i.FUNC_ADD),v=Us,M=Us),ft)switch(G){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",G);break}else switch(G){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",G);break}w=null,b=null,S=null,E=null,y.set(0,0,0),T=0,g=G,P=ft}return}Te=Te||ye,ae=ae||se,Oe=Oe||_e,(ye!==v||Te!==M)&&(i.blendEquationSeparate(ut[ye],ut[Te]),v=ye,M=Te),(se!==w||_e!==b||ae!==S||Oe!==E)&&(i.blendFuncSeparate(re[se],re[_e],re[ae],re[Oe]),w=se,b=_e,S=ae,E=Oe),(Ne.equals(y)===!1||At!==T)&&(i.blendColor(Ne.r,Ne.g,Ne.b,At),y.copy(Ne),T=At),g=G,P=!1}function ue(G,ye){G.side===On?xe(i.CULL_FACE):ie(i.CULL_FACE);let se=G.side===xn;ye&&(se=!se),he(se),G.blending===Lr&&G.transparent===!1?ce(ui):ce(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let _e=G.stencilWrite;a.setTest(_e),_e&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){N!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),N=G)}function pe(G){G!==Uf?(ie(i.CULL_FACE),G!==U&&(G===ru?i.cullFace(i.BACK):G===Of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),U=G}function ze(G){G!==F&&(W&&i.lineWidth(G),F=G)}function Fe(G,ye,se){G?(ie(i.POLYGON_OFFSET_FILL),(L!==ye||D!==se)&&(L=ye,D=se,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,se))):xe(i.POLYGON_OFFSET_FILL)}function We(G){G?ie(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ze(G){G===void 0&&(G=i.TEXTURE0+B-1),K!==G&&(i.activeTexture(G),K=G)}function I(G,ye,se){se===void 0&&(K===null?se=i.TEXTURE0+B-1:se=K);let _e=j[se];_e===void 0&&(_e={type:void 0,texture:void 0},j[se]=_e),(_e.type!==G||_e.texture!==ye)&&(K!==se&&(i.activeTexture(se),K=se),i.bindTexture(G,ye||te[G]),_e.type=G,_e.texture=ye)}function le(){let G=j[K];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(G){qe("WebGLState:",G)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(G){qe("WebGLState:",G)}}function _(){try{i.texSubImage2D(...arguments)}catch(G){qe("WebGLState:",G)}}function k(){try{i.texSubImage3D(...arguments)}catch(G){qe("WebGLState:",G)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(G){qe("WebGLState:",G)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(G){qe("WebGLState:",G)}}function de(){try{i.texStorage2D(...arguments)}catch(G){qe("WebGLState:",G)}}function fe(){try{i.texStorage3D(...arguments)}catch(G){qe("WebGLState:",G)}}function ee(){try{i.texImage2D(...arguments)}catch(G){qe("WebGLState:",G)}}function ne(){try{i.texImage3D(...arguments)}catch(G){qe("WebGLState:",G)}}function ge(G){return f[G]!==void 0?f[G]:i.getParameter(G)}function Be(G,ye){f[G]!==ye&&(i.pixelStorei(G,ye),f[G]=ye)}function Se(G){Xe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Xe.copy(G))}function ve(G){Ye.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function Ue(G,ye){let se=c.get(ye);se===void 0&&(se=new WeakMap,c.set(ye,se));let _e=se.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(ye,G.name),se.set(G,_e))}function He(G,ye){let _e=c.get(ye).get(G);l.get(ye)!==_e&&(i.uniformBlockBinding(ye,_e,G.__bindingPointIndex),l.set(ye,_e))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,j={},h={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,b=null,M=null,S=null,E=null,y=new Je(0,0,0),T=0,P=!1,N=null,U=null,F=null,L=null,D=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:xe,bindFramebuffer:ke,drawBuffers:Ae,useProgram:Ve,setBlending:ce,setMaterial:ue,setFlipSided:he,setCullFace:pe,setLineWidth:ze,setPolygonOffset:Fe,setScissorTest:We,activeTexture:Ze,bindTexture:I,unbindTexture:le,compressedTexImage2D:Y,compressedTexImage3D:R,texImage2D:ee,texImage3D:ne,pixelStorei:Be,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:de,texStorage3D:fe,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:Se,viewport:ve,reset:je}}function Jb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return p?new OffscreenCanvas(R,_):yo("canvas")}function m(R,_,k){let O=1,q=Y(R);if((q.width>k||q.height>k)&&(O=k/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor(O*q.width),fe=Math.floor(O*q.height);h===void 0&&(h=x(de,fe));let ee=_?x(de,fe):h;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,de,fe),Ge("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+de+"x"+fe+")."),ee}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function g(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,_,k,O,q,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;O&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),k===i.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),_===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),k===i.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),k===i.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),_===i.RGBA){let ne=de?vo:st.getTransfer(q);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=ne===mt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),k===i.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(R,_){let k;return R?_===null||_===Jn||_===Fr?k=i.DEPTH24_STENCIL8:_===zn?k=i.DEPTH32F_STENCIL8:_===Nr&&(k=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Jn||_===Fr?k=i.DEPTH_COMPONENT24:_===zn?k=i.DEPTH_COMPONENT32F:_===Nr&&(k=i.DEPTH_COMPONENT16),k}function S(R,_){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function E(R){let _=R.target;_.removeEventListener("dispose",E),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function y(R){let _=R.target;_.removeEventListener("dispose",y),N(_)}function T(R){let _=n.get(R);if(_.__webglInit===void 0)return;let k=R.source,O=d.get(k);if(O){let q=O[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(R),Object.keys(O).length===0&&d.delete(k)}n.remove(R)}function P(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let k=R.source,O=d.get(k);delete O[_.__cacheKey],o.memory.textures--}function N(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let q=0;q<_.__webglFramebuffer[O].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[O][q]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=R.textures;for(let O=0,q=k.length;O<q;O++){let de=n.get(k[O]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(k[O])}n.remove(R)}let U=0;function F(){U=0}function L(){return U}function D(R){U=R}function B(){let R=U;return R>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function W(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function X(R,_){let k=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let O=R.image;if(O===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function H(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function K(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){xe(k,R,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function j(R,_){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){ke(k,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let oe={[xr]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},me={[jt]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Hl]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},Xe={[hp]:i.NEVER,[mp]:i.ALWAYS,[up]:i.LESS,[Cc]:i.LEQUAL,[dp]:i.EQUAL,[Rc]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function Ye(R,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Hl||_.magFilter===Ko||_.magFilter===os||_.minFilter===nn||_.minFilter===Hl||_.minFilter===Ko||_.minFilter===os)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==Ko&&_.minFilter!==os||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",E));let O=_.source,q=d.get(O);q===void 0&&(q={},d.set(O,q));let de=W(_);if(de!==R.__cacheKey){q[de]===void 0&&(q[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),q[de].usedTimes++;let fe=q[R.__cacheKey];fe!==void 0&&(q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(_)),R.__cacheKey=de,R.__webglTexture=q[de].texture}return k}function te(R,_,k){return Math.floor(Math.floor(R/k)/_)}function ie(R,_,k,O){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,O,_.data);else{de.sort((Be,Se)=>Be.start-Se.start);let fe=0;for(let Be=1;Be<de.length;Be++){let Se=de[fe],ve=de[Be],Ue=Se.start+Se.count,He=te(ve.start,_.width,4),je=te(Se.start,_.width,4);ve.start<=Ue+1&&He===je&&te(ve.start+ve.count-1,_.width,4)===He?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++fe,de[fe]=ve)}de.length=fe+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Be=0,Se=de.length;Be<Se;Be++){let ve=de[Be],Ue=Math.floor(ve.start/4),He=Math.ceil(ve.count/4),je=Ue%_.width,G=Math.floor(Ue/_.width),ye=He,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,je,G,ye,se,k,O,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function xe(R,_,k){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let q=$e(R,_),de=_.source;t.bindTexture(O,R.__webglTexture,i.TEXTURE0+k);let fe=n.get(de);if(de.version!==fe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let se=st.getPrimaries(st.workingColorSpace),_e=_.colorSpace===Ni?null:st.getPrimaries(_.colorSpace),Te=_.colorSpace===Ni||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ne=m(_.image,!1,s.maxTextureSize);ne=le(_,ne);let ge=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Se=b(_.internalFormat,ge,Be,_.normalized,_.colorSpace,_.isVideoTexture);Ye(O,_);let ve,Ue=_.mipmaps,He=_.isVideoTexture!==!0,je=fe.__version===void 0||q===!0,G=de.dataReady,ye=S(_,ne);if(_.isDepthTexture)Se=M(_.format===as,_.type),je&&(He?t.texStorage2D(i.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Se,ne.width,ne.height,0,ge,Be,null));else if(_.isDataTexture)if(Ue.length>0){He&&je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,Ue[0].width,Ue[0].height);for(let se=0,_e=Ue.length;se<_e;se++)ve=Ue[se],He?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,ge,Be,ve.data):t.texImage2D(i.TEXTURE_2D,se,Se,ve.width,ve.height,0,ge,Be,ve.data);_.generateMipmaps=!1}else He?(je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,ne.width,ne.height),G&&ie(_,ne,ge,Be)):t.texImage2D(i.TEXTURE_2D,0,Se,ne.width,ne.height,0,ge,Be,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Se,Ue[0].width,Ue[0].height,ne.depth);for(let se=0,_e=Ue.length;se<_e;se++)if(ve=Ue[se],_.format!==kn)if(ge!==null)if(He){if(G)if(_.layerUpdates.size>0){let Te=Lu(ve.width,ve.height,_.format,_.type);for(let ae of _.layerUpdates){let Oe=ve.data.subarray(ae*Te/ve.data.BYTES_PER_ELEMENT,(ae+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ae,ve.width,ve.height,1,ge,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ne.depth,ge,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Se,ve.width,ve.height,ne.depth,0,ve.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ne.depth,ge,Be,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Se,ve.width,ve.height,ne.depth,0,ge,Be,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{He&&je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,Ue[0].width,Ue[0].height);for(let se=0,_e=Ue.length;se<_e;se++)ve=Ue[se],_.format!==kn?ge!==null?He?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Se,ve.width,ve.height,0,ve.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ve.width,ve.height,ge,Be,ve.data):t.texImage2D(i.TEXTURE_2D,se,Se,ve.width,ve.height,0,ge,Be,ve.data)}else if(_.isDataArrayTexture)if(He){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Se,ne.width,ne.height,ne.depth),G)if(_.layerUpdates.size>0){let se=Lu(ne.width,ne.height,_.format,_.type);for(let _e of _.layerUpdates){let Te=ne.data.subarray(_e*se/ne.data.BYTES_PER_ELEMENT,(_e+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ne.width,ne.height,1,ge,Be,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Be,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,ge,Be,ne.data);else if(_.isData3DTexture)He?(je&&t.texStorage3D(i.TEXTURE_3D,ye,Se,ne.width,ne.height,ne.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,ge,Be,ne.data);else if(_.isFramebufferTexture){if(je)if(He)t.texStorage2D(i.TEXTURE_2D,ye,Se,ne.width,ne.height);else{let se=ne.width,_e=ne.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,Se,se,_e,0,ge,Be,null),se>>=1,_e>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),ne.parentNode!==se){se.appendChild(ne),f.add(_),se.onpaint=_e=>{let Te=_e.changedElements;for(let ae of f)Te.includes(ae.image)&&(ae.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Te=i.RGBA,ae=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ae,Oe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&je){let se=Y(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ye,Se,se.width,se.height)}for(let se=0,_e=Ue.length;se<_e;se++)ve=Ue[se],He?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge,Be,ve):t.texImage2D(i.TEXTURE_2D,se,Se,ge,Be,ve);_.generateMipmaps=!1}else if(He){if(je){let se=Y(ne);t.texStorage2D(i.TEXTURE_2D,ye,Se,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Be,ne)}else t.texImage2D(i.TEXTURE_2D,0,Se,ge,Be,ne);g(_)&&v(O),fe.__version=de.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ke(R,_,k){if(_.image.length!==6)return;let O=$e(R,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let de=n.get(q);if(q.version!==de.__version||O===!0){t.activeTexture(i.TEXTURE0+k);let fe=st.getPrimaries(st.workingColorSpace),ee=_.colorSpace===Ni?null:st.getPrimaries(_.colorSpace),ne=_.colorSpace===Ni||fe===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Be=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!ge&&!Be?Se[ae]=m(_.image[ae],!0,s.maxCubemapSize):Se[ae]=Be?_.image[ae].image:_.image[ae],Se[ae]=le(_,Se[ae]);let ve=Se[0],Ue=r.convert(_.format,_.colorSpace),He=r.convert(_.type),je=b(_.internalFormat,Ue,He,_.normalized,_.colorSpace),G=_.isVideoTexture!==!0,ye=de.__version===void 0||O===!0,se=q.dataReady,_e=S(_,ve);Ye(i.TEXTURE_CUBE_MAP,_);let Te;if(ge){G&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,ve.width,ve.height);for(let ae=0;ae<6;ae++){Te=Se[ae].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){let Ne=Te[Oe];_.format!==kn?Ue!==null?G?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,je,Ne.width,Ne.height,0,Ne.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Ne.width,Ne.height,Ue,He,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,je,Ne.width,Ne.height,0,Ue,He,Ne.data)}}}else{if(Te=_.mipmaps,G&&ye){Te.length>0&&_e++;let ae=Y(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,Ue,He,Se[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Se[ae].width,Se[ae].height,0,Ue,He,Se[ae].data);for(let Oe=0;Oe<Te.length;Oe++){let At=Te[Oe].image[ae].image;G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,At.width,At.height,Ue,He,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,je,At.width,At.height,0,Ue,He,At.data)}}else{G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,He,Se[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Ue,He,Se[ae]);for(let Oe=0;Oe<Te.length;Oe++){let Ne=Te[Oe];G?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Ue,He,Ne.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,je,Ue,He,Ne.image[ae])}}}g(_)&&v(i.TEXTURE_CUBE_MAP),de.__version=q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ae(R,_,k,O,q,de){let fe=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ne=b(k.internalFormat,fe,ee,k.normalized,k.colorSpace),ge=n.get(_),Be=n.get(k);if(Be.__renderTarget=_,!ge.__hasExternalTextures){let Se=Math.max(1,_.width>>de),ve=Math.max(1,_.height>>de);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,de,ne,Se,ve,_.depth,0,fe,ee,null):t.texImage2D(q,de,ne,Se,ve,0,fe,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,q,Be.__webglTexture,0,We(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,q,Be.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let O=_.depthTexture,q=O&&O.isDepthTexture?O.type:null,de=M(_.stencilBuffer,q),fe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(_),de,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(_),de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let O=_.textures;for(let q=0;q<O.length;q++){let de=O[q],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),ne=b(de.internalFormat,fe,ee,de.normalized,de.colorSpace);Ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(_),ne,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(R,_,k){let O=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_.depthTexture);let ge=r.convert(_.depthTexture.format),Be=r.convert(_.depthTexture.type),Se;_.depthTexture.format===li?Se=i.DEPTH_COMPONENT24:_.depthTexture.format===as&&(Se=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,_.width,_.height,0,ge,Be,null)}}else X(_.depthTexture,0);let de=q.__webglTexture,fe=We(_),ee=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ne=_.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===li)Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,de,0);else if(_.depthTexture.format===as)Ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=O}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let O=0;O<6;O++)ut(_.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?ut(_.__webglFramebuffer[0],R,0):ut(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),Ve(_.__webglDepthbuffer[O],R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,de)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ve(_.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(R,_,k){let O=n.get(R);_!==void 0&&Ae(O.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&re(R)}function ue(R){let _=R.texture,k=n.get(R),O=n.get(_);R.addEventListener("dispose",y);let q=R.textures,de=R.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,o.memory.textures++),de){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ne=0;ne<_.mipmaps.length;ne++)k.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ee=0,ne=q.length;ee<ne;ee++){let ge=n.get(q[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ze(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<q.length;ee++){let ne=q[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let ge=r.convert(ne.format,ne.colorSpace),Be=r.convert(ne.type),Se=b(ne.internalFormat,ge,Be,ne.normalized,ne.colorSpace,R.isXRRenderTarget===!0),ve=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Se,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Ae(k.__webglFramebuffer[ee][ne],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ae(k.__webglFramebuffer[ee],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);g(_)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ee=0,ne=q.length;ee<ne;ee++){let ge=q[ee],Be=n.get(ge),Se=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Be.__webglTexture),Ye(Se,ge),Ae(k.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+ee,Se,0),g(ge)&&v(Se)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,O.__webglTexture),Ye(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ne=0;ne<_.mipmaps.length;ne++)Ae(k.__webglFramebuffer[ne],R,_,i.COLOR_ATTACHMENT0,ee,ne);else Ae(k.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,ee,0);g(_)&&v(ee),t.unbindTexture()}R.depthBuffer&&re(R)}function he(R){let _=R.textures;for(let k=0,O=_.length;k<O;k++){let q=_[k];if(g(q)){let de=w(R),fe=n.get(q).__webglTexture;t.bindTexture(de,fe),v(de),t.unbindTexture()}}}let pe=[],ze=[];function Fe(R){if(R.samples>0){if(Ze(R)===!1){let _=R.textures,k=R.width,O=R.height,q=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),ee=_.length>1;if(ee)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Be=n.get(_[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,k,O,0,0,k,O,q,i.NEAREST),l===!0&&(pe.length=0,ze.length=0,pe.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(pe.push(de),ze.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);let Be=n.get(_[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function Ze(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(R){let _=o.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function le(R,_){let k=R.colorSpace,O=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==xo&&k!==Ni&&(st.getTransfer(k)===mt?(O!==kn||q!==En)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",k)),_}function Y(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=ce,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jb(i,e){function t(n,s=Ni){let r,o=st.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yu)return i.BYTE;if(n===_u)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===wu)return i.RGB;if(n===kn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Zl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Jo||n===jo||n===Qo||n===ea)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===jl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===ta||n===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===nc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sc)return r.COMPRESSED_R11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Sc||n===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Ec||n===na||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eS=`
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

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:Qb,fragmentShader:eS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yu=class extends ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Xu,g={},v=t.getContextAttributes(),w=null,b=null,M=[],S=[],E=new be,y=null,T=null,P=new tn;P.viewport=new Dt;let N=new tn;N.viewport=new Dt;let U=[P,N],F=new kl,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=M[te];return ie===void 0&&(ie=new Sr,M[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=M[te];return ie===void 0&&(ie=new Sr,M[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=M[te];return ie===void 0&&(ie=new Sr,M[te]=ie),ie.getHandSpace()};function B(te){let ie=S.indexOf(te.inputSource);if(ie===-1)return;let xe=M[ie];xe!==void 0&&(xe.update(te.inputSource,te.frame,c||o),xe.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let te=0;te<M.length;te++){let ie=S[te];ie!==null&&(S[te]=null,M[te].disconnect(ie))}L=null,D=null,m.reset();for(let te in g)delete g[te];if(e.setRenderTarget(w),d=null,h=null,f=null,s=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),T!==null){let te=T.camera;te.fov=T.fov,te.zoom=T.zoom,te.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ke=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?as:li,ke=v.stencil?Fr:Jn);let Ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new wn(h.textureWidth,h.textureHeight,{format:kn,type:En,depthTexture:new es(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new wn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(te){for(let ie=0;ie<te.removed.length;ie++){let xe=te.removed[ie],ke=S.indexOf(xe);ke>=0&&(S[ke]=null,M[ke].disconnect(xe))}for(let ie=0;ie<te.added.length;ie++){let xe=te.added[ie],ke=S.indexOf(xe);if(ke===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=S.length){S.push(xe),ke=Ve;break}else if(S[Ve]===null){S[Ve]=xe,ke=Ve;break}if(ke===-1)break}let Ae=M[ke];Ae&&Ae.connect(xe)}}let H=new z,K=new z;function j(te,ie,xe){H.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);let ke=H.distanceTo(K),Ae=ie.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,ut=Ae[14]/(Ae[10]-1),re=Ae[14]/(Ae[10]+1),ce=(Ae[9]+1)/Ae[5],ue=(Ae[9]-1)/Ae[5],he=(Ae[8]-1)/Ae[0],pe=(Ve[8]+1)/Ve[0],ze=ut*he,Fe=ut*pe,We=ke/(-he+pe),Ze=We*-he;if(ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ze),te.translateZ(We),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let I=ut+We,le=re+We,Y=ze-Ze,R=Fe+(ke-Ze),_=ce*re/le*I,k=ue*re/le*I;te.projectionMatrix.makePerspective(Y,R,_,k,I,le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ie=te.near,xe=te.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),F.near=N.near=P.near=ie,F.far=N.far=P.far=xe,(L!==F.near||D!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,D=F.far),F.layers.mask=te.layers.mask|6,P.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;let ke=te.parent,Ae=F.cameras;oe(F,ke);for(let Ve=0;Ve<Ae.length;Ve++)oe(Ae[Ve],ke);Ae.length===2?j(F,P,N):F.projectionMatrix.copy(P.projectionMatrix),T===null&&te.isPerspectiveCamera&&(T={camera:te,fov:te.fov,zoom:te.zoom}),me(te,F,ke)};function me(te,ie,xe){xe===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(xe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=_r*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return g[te]};let Xe=null;function Ye(te,ie){if(u=ie.getViewerPose(c||o),p=ie,u!==null){let xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let ke=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let re=0;re<xe.length;re++){let ce=xe[re],ue=null;if(d!==null)ue=d.getViewport(ce);else{let pe=f.getViewSubImage(h,ce);ue=pe.viewport,re===0&&(e.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(b))}let he=U[re];he===void 0&&(he=new tn,he.layers.enable(re),he.viewport=new Dt,U[re]=he),he.matrix.fromArray(ce.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ce.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ue.x,ue.y,ue.width,ue.height),re===0&&(F.matrix.copy(he.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(he)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let re=f.getDepthInformation(xe[0]);re&&re.isValid&&re.texture&&m.init(re,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let re=0;re<xe.length;re++){let ce=xe[re].camera;if(ce){let ue=g[ce];ue||(ue=new Po,g[ce]=ue);let he=f.getCameraImage(ce);ue.sourceTexture=he}}}}for(let xe=0;xe<M.length;xe++){let ke=S[xe],Ae=M[xe];ke!==null&&Ae!==void 0&&Ae.update(ke,ie,c||o)}Xe&&Xe(te,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let $e=new Kp;$e.setAnimationLoop(Ye),this.setAnimationLoop=function(te){Xe=te},this.dispose=function(){}}},tS=new at,nm=new Ke;nm.set(-1,0,0,0,1,0,0,0,1);function nS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Ru(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),w=v.envMap,b=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(tS.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(m(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",v));let E=M.program;n.updateUBOMapping(b,E);let y=e.render.frame;r[b.id]!==y&&(h(b),r[b.id]=y)}function u(b){let M=f();b.__bindingPointIndex=M;let S=i.createBuffer(),E=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let M=s[b.id],S=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,T=S.length;y<T;y++){let P=S[y];if(Array.isArray(P))for(let N=0,U=P.length;N<U;N++)d(P[N],y,N,E);else d(P,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,S,E){if(x(b,M,S,E)===!0){let y=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){let U=T[N],F=g(U);p(U,b.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function p(b,M,S){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,S)}function x(b,M,S,E){let y=b.value,T=M+"_"+S;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{let P=E[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(b){let M=b.uniforms,S=0,E=16;for(let T=0,P=M.length;T<P;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,F=N.length;U<F;U++){let L=N[U],D=Array.isArray(L.value)?L.value:[L.value];for(let B=0,W=D.length;B<W;B++){let X=D[B],H=g(X),K=S%E,j=K%H.boundary,oe=K+j;S+=j,oe!==0&&E-oe<H.storage&&(S+=E-oe),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=H.storage}}}let y=S%E;return y>0&&(S+=E-y),b.__size=S,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",b),M}function v(b){let M=b.target;M.removeEventListener("dispose",v);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var sS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function rS(){return di===null&&(di=new To(sS,16,16,ls,jn),di.name="DFG_LUT",di.minFilter=nn,di.magFilter=nn,di.wrapS=ai,di.wrapT=ai,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Fc=class{constructor(e={}){let{canvas:t=xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Kl,Zl,$l]),g=new Set([En,Jn,Nr,Fr,ql,Xl]),v=new Uint32Array(4),w=new Int32Array(4),b=new z,M=null,S=null,E=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,F=null,L=null,D=null;this._outputColorSpace=en;let B=0,W=0,X=null,H=-1,K=null,j=new Dt,oe=new Dt,me=null,Xe=new Je(0),Ye=0,$e=t.width,te=t.height,ie=1,xe=null,ke=null,Ae=new Dt(0,0,$e,te),Ve=new Dt(0,0,$e,te),ut=!1,re=new Mr,ce=!1,ue=!1,he=new at,pe=new z,ze=new Dt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ze(){return X===null?ie:1}let I=n;function le(A,V){return t.getContext(A,V)}let Y,R,_,k,O,q,de,fe,ee,ne,ge,Be,Se,ve,Ue,He,je,G,ye,se,_e,Te,ae;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),I===null){let V="webgl2";if(I=le(V,A),I===null)throw le(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(A){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),qe("WebGLRenderer: "+A.message),A}function Oe(){Y=new d_(I),Y.init(),_e=new jb(I,Y),R=new n_(I,Y,e,_e),_=new Kb(I,Y),R.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),F=I.createFramebuffer(),L=I.createFramebuffer(),D=I.createFramebuffer(),k=new m_(I),O=new Bb,q=new Jb(I,Y,_,O,R,_e,k),de=new u_(P),fe=new xx(I),Te=new e_(I,fe),ee=new f_(I,fe,k,Te),ne=new x_(I,ee,fe,Te,k),G=new g_(I,R,q),Ue=new i_(O),ge=new Db(P,de,Y,R,Te,Ue),Be=new nS(P,O),Se=new Ob,ve=new Wb(Y),je=new Qy(P,de,_,ne,p,l),He=new Zb(P,ne,R),ae=new iS(I,k,R,_),ye=new t_(I,Y,k),se=new p_(I,Y,k),k.programs=ge.programs,P.capabilities=R,P.extensions=Y,P.properties=O,P.renderLists=Se,P.shadowMap=He,P.state=_,P.info=k}x!==En&&(T=new y_(x,t.width,t.height,a,s,r));let Ne=new Yu(P,I);this.xr=Ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize($e,te,!1))},this.getSize=function(A){return A.set($e,te)},this.setSize=function(A,V,J=!0){if(Ne.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=A,te=V,t.width=Math.floor(A*ie),t.height=Math.floor(V*ie),J===!0&&(t.style.width=A+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set($e*ie,te*ie).floor()},this.setDrawingBufferSize=function(A,V,J){$e=A,te=V,ie=J,t.width=Math.floor(A*J),t.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===En){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Ae)},this.setViewport=function(A,V,J,$){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,V,J,$),_.viewport(j.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(A){return A.copy(Ve)},this.setScissor=function(A,V,J,$){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,V,J,$),_.scissor(oe.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){_.setScissorTest(ut=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,J=!0){let $=0;if(A){let Z=!1;if(X!==null){let Ee=X.texture.format;Z=m.has(Ee)}if(Z){let Ee=X.texture.type,Re=g.has(Ee),we=je.getClearColor(),Ie=je.getClearAlpha(),De=we.r,Qe=we.g,it=we.b;Re?(v[0]=De,v[1]=Qe,v[2]=it,v[3]=Ie,I.clearBufferuiv(I.COLOR,0,v)):(w[0]=De,w[1]=Qe,w[2]=it,w[3]=Ie,I.clearBufferiv(I.COLOR,0,w))}else $|=I.COLOR_BUFFER_BIT}V&&($|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),je.dispose(),Se.dispose(),ve.dispose(),O.dispose(),de.dispose(),ne.dispose(),Te.dispose(),ae.dispose(),ge.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Zd),Ne.removeEventListener("sessionend",Kd),As.stop()};function At(A){A.preventDefault(),Au("WebGLRenderer: Context Lost."),N=!0}function ft(){Au("WebGLRenderer: Context Restored."),N=!1;let A=k.autoReset,V=He.enabled,J=He.autoUpdate,$=He.needsUpdate,Z=He.type;Oe(),k.autoReset=A,He.enabled=V,He.autoUpdate=J,He.needsUpdate=$,He.type=Z}function Hn(A){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function si(A){let V=A.target;V.removeEventListener("dispose",si),kg(V)}function kg(A){Vg(A),O.remove(A)}function Vg(A){let V=O.get(A).programs;V!==void 0&&(V.forEach(function(J){ge.releaseProgram(J)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,$,Z,Ee){V===null&&(V=Fe);let Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,we=Wg(A,V,J,$,Z);_.setMaterial($,Re);let Ie=J.index,De=1;if($.wireframe===!0){if(Ie=ee.getWireframeAttribute(J),Ie===void 0)return;De=2}let Qe=J.drawRange,it=J.attributes.position,Pe=Qe.start*De,pt=(Qe.start+Qe.count)*De;Ee!==null&&(Pe=Math.max(Pe,Ee.start*De),pt=Math.min(pt,(Ee.start+Ee.count)*De)),Ie!==null?(Pe=Math.max(Pe,0),pt=Math.min(pt,Ie.count)):it!=null&&(Pe=Math.max(Pe,0),pt=Math.min(pt,it.count));let Ht=pt-Pe;if(Ht<0||Ht===1/0)return;Te.setup(Z,$,we,J,Ie);let Rt,wt=ye;if(Ie!==null&&(Rt=fe.get(Ie),wt=se,wt.setIndex(Rt)),Z.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*Ze()),wt.setMode(I.LINES)):wt.setMode(I.TRIANGLES);else if(Z.isLine){let ln=$.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*Ze()),Z.isLineSegments?wt.setMode(I.LINES):Z.isLineLoop?wt.setMode(I.LINE_LOOP):wt.setMode(I.LINE_STRIP)}else Z.isPoints?wt.setMode(I.POINTS):Z.isSprite&&wt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let ln=Z._multiDrawStarts,Ce=Z._multiDrawCounts,fn=Z._multiDrawCount,lt=Ie?fe.get(Ie).bytesPerElement:1,Bn=O.get($).currentProgram.getUniforms();for(let ri=0;ri<fn;ri++)Bn.setValue(I,"_gl_DrawID",ri),wt.render(ln[ri]/lt,Ce[ri])}else if(Z.isInstancedMesh)wt.renderInstances(Pe,Ht,Z.count);else if(J.isInstancedBufferGeometry){let ln=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ce=Math.min(J.instanceCount,ln);wt.renderInstances(Pe,Ht,Ce)}else wt.render(Pe,Ht)};function $d(A,V,J,$){U!==null&&A.isNodeMaterial&&U.setObject($,A),ce===!0&&Ue.setState(A,J,!1),A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,La(A,V,$),A.side=ss,A.needsUpdate=!0,La(A,V,$),A.side=On):La(A,V,$)}this.compile=function(A,V,J=null){J===null&&(J=A),U!==null&&U.renderStart(A,V,J),S=ve.get(J),S.init(V),y.push(S),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),A!==J&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),ue=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,ue),ce===!0&&Ue.setGlobalState(this.clippingPlanes,V),U!==null&&He.render(S.state.shadowsArray,J,V);let $=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){let we=Ee[Re];$d(we,J,V,Z),$.add(we)}else $d(Ee,J,V,Z),$.add(Ee)}),S=y.pop(),U!==null&&U.renderEnd(),$},this.compileAsync=function(A,V,J=null){let $=this.compile(A,V,J);return new Promise(Z=>{function Ee(){if($.forEach(function(Re){let Ie=O.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&$.delete(Re)}),$.size===0){Z(A);return}setTimeout(Ee,10)}Y.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let _h=null;function Gg(A){_h&&_h(A)}function Zd(){As.stop()}function Kd(){As.start()}let As=new Kp;As.setAnimationLoop(Gg),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(A){_h=A,Ne.setAnimationLoop(A),A===null?As.stop():As.start()},Ne.addEventListener("sessionstart",Zd),Ne.addEventListener("sessionend",Kd),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(A,V);let J=Ne.enabled===!0&&Ne.isPresenting===!0,$=T!==null&&(X===null||J)&&T.begin(P,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(V),V=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,V,X),S=ve.get(A,y.length),S.init(V),S.state.textureUnits=q.getTextureUnits(),y.push(S),he.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(he,$n,V.reversedDepth),ue=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,ue),M=Se.get(A,E.length),M.init(),E.push(M),Ne.enabled===!0&&Ne.isPresenting===!0){let Re=P.xr.getDepthSensingMesh();Re!==null&&bh(Re,V,-1/0,P.sortObjects)}bh(A,V,0,P.sortObjects),M.finish(),U!==null&&U.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(xe,ke),We=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,We&&je.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ue.beginShadows();let Z=S.state.shadowsArray;if(He.render(Z,A,V),ce===!0&&Ue.endShadows(),($&&T.hasRenderPass())===!1){let Re=M.opaque,we=M.transmissive;if(S.setupLights(),V.isArrayCamera){let Ie=V.cameras;if(we.length>0)for(let De=0,Qe=Ie.length;De<Qe;De++){let it=Ie[De];jd(Re,we,A,it)}We&&je.render(A);for(let De=0,Qe=Ie.length;De<Qe;De++){let it=Ie[De];Jd(M,A,it,it.viewport)}}else we.length>0&&jd(Re,we,A,V),We&&je.render(A),Jd(M,A,V)}X!==null&&W===0&&(q.updateMultisampleRenderTarget(X),q.updateRenderTargetMipmap(X)),$&&T.end(P),A.isScene===!0&&A.onAfterRender(P,A,V),Te.resetDefaultState(),H=-1,K=null,y.pop(),y.length>0?(S=y[y.length-1],q.setTextureUnits(S.state.textureUnits),ce===!0&&Ue.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,U!==null&&U.renderEnd()};function bh(A,V,J,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){$&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);let Re=ne.update(A),we=A.material;we.visible&&M.push(A,Re,we,J,ze.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){let Re=ne.update(A),we=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ze.copy(Re.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(we)){let Ie=Re.groups;for(let De=0,Qe=Ie.length;De<Qe;De++){let it=Ie[De],Pe=we[it.materialIndex];Pe&&Pe.visible&&M.push(A,Re,Pe,J,ze.z,it,V)}}else we.visible&&M.push(A,Re,we,J,ze.z,null,V)}}let Ee=A.children;for(let Re=0,we=Ee.length;Re<we;Re++)bh(Ee[Re],V,J,$)}function Jd(A,V,J,$){let{opaque:Z,transmissive:Ee,transparent:Re}=A;S.setupLightsView(J),ce===!0&&Ue.setGlobalState(P.clippingPlanes,J),$&&_.viewport(j.copy($)),Z.length>0&&Pa(Z,V,J),Ee.length>0&&Pa(Ee,V,J),Re.length>0&&Pa(Re,V,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jd(A,V,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Pe=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new wn(1,1,{generateMipmaps:!0,type:Pe?jn:En,minFilter:os,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ee=S.state.transmissionRenderTarget[$.id],Re=$.viewport||j;Ee.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);let we=P.getRenderTarget(),Ie=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(Xe),Ye=P.getClearAlpha(),Ye<1&&P.setClearColor(16777215,.5),P.clear(),We&&je.render(J);let Qe=P.toneMapping;P.toneMapping=Kn;let it=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),ce===!0&&Ue.setGlobalState(P.clippingPlanes,$),Pa(A,J,$),q.updateMultisampleRenderTarget(Ee),q.updateRenderTargetMipmap(Ee),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let pt=0,Ht=V.length;pt<Ht;pt++){let Rt=V[pt],{object:wt,geometry:ln,material:Ce,group:fn}=Rt;if(Ce.side===On&&wt.layers.test($.layers)){let lt=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,Qd(wt,J,$,ln,Ce,fn),Ce.side=lt,Ce.needsUpdate=!0,Pe=!0}}Pe===!0&&(q.updateMultisampleRenderTarget(Ee),q.updateRenderTargetMipmap(Ee))}P.setRenderTarget(we,Ie,De),P.setClearColor(Xe,Ye),it!==void 0&&($.viewport=it),P.toneMapping=Qe}function Pa(A,V,J){let $=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Ee=A.length;Z<Ee;Z++){let Re=A[Z],{object:we,geometry:Ie,group:De}=Re,Qe=Re.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),we.layers.test(J.layers)&&Qd(we,V,J,Ie,Qe,De)}}function Qd(A,V,J,$,Z,Ee){U!==null&&Z.isNodeMaterial&&U.setObject(A,Z),A.onBeforeRender(P,V,J,$,Z,Ee),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(P,V,J,$,A,Ee),Z.transparent===!0&&Z.side===On&&Z.forceSinglePass===!1?(Z.side=xn,Z.needsUpdate=!0,P.renderBufferDirect(J,V,$,Z,A,Ee),Z.side=ss,Z.needsUpdate=!0,P.renderBufferDirect(J,V,$,Z,A,Ee),Z.side=On):P.renderBufferDirect(J,V,$,Z,A,Ee),A.onAfterRender(P,V,J,$,Z,Ee)}function La(A,V,J){V.isScene!==!0&&(V=Fe);let $=O.get(A),Z=S.state.lights,Ee=S.state.shadowsArray,Re=Z.state.version,we=ge.getParameters(A,Z.state,Ee,V,J,S.state.lightProbeGridArray),Ie=ge.getProgramCacheKey(we),De=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;let Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=de.get(A.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",si),De=new Map,$.programs=De);let it=De.get(Ie);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===Re)return tf(A,we),it}else we.uniforms=ge.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,J,we),A.onBeforeCompile(we,P),it=ge.acquireProgram(we,Ie),De.set(Ie,it),$.uniforms=we.uniforms;let Pe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),tf(A,we),$.needsLights=Xg(A),$.lightsStateVersion=Re,$.needsLights&&(Pe.ambientLightColor.value=Z.state.ambient,Pe.lightProbe.value=Z.state.probe,Pe.sunLights.value=Z.state.sun,Pe.sunLightShadows.value=Z.state.sunShadow,Pe.directionalLights.value=Z.state.directional,Pe.directionalLightShadows.value=Z.state.directionalShadow,Pe.spotLights.value=Z.state.spot,Pe.spotLightShadows.value=Z.state.spotShadow,Pe.rectAreaLights.value=Z.state.rectArea,Pe.ltc_1.value=Z.state.rectAreaLTC1,Pe.ltc_2.value=Z.state.rectAreaLTC2,Pe.pointLights.value=Z.state.point,Pe.pointLightShadows.value=Z.state.pointShadow,Pe.hemisphereLights.value=Z.state.hemi,Pe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pe.sunShadowCascade.value=Z.state.sunShadowCascade,Pe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Z.state.spotLightMatrix,Pe.spotLightMap.value=Z.state.spotLightMap,Pe.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=it,$.uniformsList=null,it}function ef(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Or.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function tf(A,V){let J=O.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Hg(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let J=0,$=A.length;J<$;J++){let Z=A[J];if(Z.texture!==null&&Z.boundingBox.containsPoint(b))return Z}return null}function Wg(A,V,J,$,Z){V.isScene!==!0&&(V=Fe),q.resetTextureUnits();let Ee=V.fog,Re=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,we=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:st.workingColorSpace,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,De=de.get($.envMap||Re,Ie),Qe=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,Ht=!!J.morphAttributes.color,Rt=Kn;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Rt=P.toneMapping);let wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ln=wt!==void 0?wt.length:0,Ce=O.get($),fn=S.state.lights;if(ce===!0&&(ue===!0||A!==K)){let Tt=A===K&&$.id===H;Ue.setState($,A,Tt)}let lt=!1;$.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==fn.state.version||Ce.outputColorSpace!==we||Z.isBatchedMesh&&Ce.batching===!1||!Z.isBatchedMesh&&Ce.batching===!0||Z.isBatchedMesh&&Ce.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ce.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ce.instancing===!1||!Z.isInstancedMesh&&Ce.instancing===!0||Z.isSkinnedMesh&&Ce.skinning===!1||!Z.isSkinnedMesh&&Ce.skinning===!0||Z.isInstancedMesh&&Ce.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ce.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ce.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ce.instancingMorph===!1&&Z.morphTexture!==null||Ce.envMap!==De||$.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ue.numPlanes||Ce.numIntersection!==Ue.numIntersection)||Ce.vertexAlphas!==Qe||Ce.vertexTangents!==it||Ce.morphTargets!==Pe||Ce.morphNormals!==pt||Ce.morphColors!==Ht||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==ln||!!Ce.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ce.__version=$.version);let Bn=Ce.currentProgram;lt===!0&&(Bn=La($,V,Z),U&&$.isNodeMaterial&&U.onUpdateProgram($,Bn,Ce));let ri=!1,qi=!1,js=!1,St=Bn.getUniforms(),Vt=Ce.uniforms;if(_.useProgram(Bn.program)&&(ri=!0,qi=!0,js=!0),$.id!==H&&(H=$.id,qi=!0),Ce.needsLights){let Tt=Hg(S.state.lightProbeGridArray,Z);Ce.lightProbeGrid!==Tt&&(Ce.lightProbeGrid=Tt,qi=!0)}if(ri||K!==A){_.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(I,"projectionMatrix",A.projectionMatrix),St.setValue(I,"viewMatrix",A.matrixWorldInverse);let Yi=St.map.cameraPosition;Yi!==void 0&&Yi.setValue(I,pe.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,qi=!0,js=!0)}if(Ce.needsLights&&(fn.state.sunShadowMap.length>0&&St.setValue(I,"sunShadowMap",fn.state.sunShadowMap,q),fn.state.directionalShadowMap.length>0&&St.setValue(I,"directionalShadowMap",fn.state.directionalShadowMap,q),fn.state.spotShadowMap.length>0&&St.setValue(I,"spotShadowMap",fn.state.spotShadowMap,q),fn.state.pointShadowMap.length>0&&St.setValue(I,"pointShadowMap",fn.state.pointShadowMap,q)),Z.isSkinnedMesh){St.setOptional(I,Z,"bindMatrix"),St.setOptional(I,Z,"bindMatrixInverse");let Tt=Z.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),St.setValue(I,"boneTexture",Tt.boneTexture,q))}Z.isBatchedMesh&&(St.setOptional(I,Z,"batchingTexture"),St.setValue(I,"batchingTexture",Z._matricesTexture,q),St.setOptional(I,Z,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",Z._indirectTexture,q),St.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",Z._colorsTexture,q));let Xi=J.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&G.update(Z,J,Bn),(qi||Ce.receiveShadow!==Z.receiveShadow)&&(Ce.receiveShadow=Z.receiveShadow,St.setValue(I,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Vt.envMapIntensity.value=V.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=rS()),qi){if(St.setValue(I,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&qg(Vt,js),Ee&&$.fog===!0&&Be.refreshFogUniforms(Vt,Ee),Be.refreshMaterialUniforms(Vt,$,ie,te,S.state.transmissionRenderTarget[A.id]),Ce.needsLights&&Ce.lightProbeGrid){let Tt=Ce.lightProbeGrid;Vt.probesSH.value=Tt.texture,Vt.probesMin.value.copy(Tt.boundingBox.min),Vt.probesMax.value.copy(Tt.boundingBox.max),Vt.probesResolution.value.copy(Tt.resolution)}Or.upload(I,ef(Ce),Vt,q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Or.upload(I,ef(Ce),Vt,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(I,"center",Z.center),St.setValue(I,"modelViewMatrix",Z.modelViewMatrix),St.setValue(I,"normalMatrix",Z.normalMatrix),St.setValue(I,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Tt=$.uniformsGroups;for(let Yi=0,Qs=Tt.length;Yi<Qs;Yi++){let sf=Tt[Yi];ae.update(sf,Bn),ae.bind(sf,Bn)}}return Bn}function qg(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Xg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,V,J){let $=O.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=V,O.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let J=O.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){X=A,B=V,W=J;let $=null,Z=!1,Ee=!1;if(A){let we=O.get(A);if(we.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,we.__webglFramebuffer),j.copy(A.viewport),oe.copy(A.scissor),me=A.scissorTest,_.viewport(j),_.scissor(oe),_.setScissorTest(me),H=-1;return}else if(we.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(we.__hasExternalTextures)q.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Qe=A.depthTexture;if(we.__boundDepthTexture!==Qe){if(Qe!==null&&O.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);let De=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[V])?$=De[V][J]:$=De[V],Z=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?$=O.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?$=De[J]:$=De,j.copy(A.viewport),oe.copy(A.scissor),me=A.scissorTest}else j.copy(Ae).multiplyScalar(ie).floor(),oe.copy(Ve).multiplyScalar(ie).floor(),me=ut;if(J!==0&&($=F),_.bindFramebuffer(I.FRAMEBUFFER,$)&&_.drawBuffers(A,$),_.viewport(j),_.scissor(oe),_.setScissorTest(me),Z){let we=O.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,J)}else if(Ee){let we=V;for(let Ie=0;Ie<A.textures.length;Ie++){let De=O.get(A.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,De.__webglTexture,J,we)}}else if(A!==null&&J!==0){let we=O.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,we.__webglTexture,J)}H=-1};function nf(A){let V=O.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=R.textureFormatReadable(A.format),V.__typeReadable=R.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,J,$,Z,Ee,Re,we=0){if(!(A&&A.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){_.bindFramebuffer(I.FRAMEBUFFER,Ie);try{let De=A.textures[we],Qe=De.format,it=De.type;A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we);let Pe=nf(De);if(Pe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&J>=0&&J<=A.height-Z&&I.readPixels(V,J,$,Z,_e.convert(Qe),_e.convert(it),Ee)}finally{let De=X!==null?O.get(X).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,$,Z,Ee,Re,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(V>=0&&V<=A.width-$&&J>=0&&J<=A.height-Z){_.bindFramebuffer(I.FRAMEBUFFER,Ie);let De=A.textures[we],Qe=De.format,it=De.type;A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we);let Pe=nf(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),I.readPixels(V,J,$,Z,_e.convert(Qe),_e.convert(it),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ht=X!==null?O.get(X).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ht);let Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yp(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(pt),I.deleteSync(Rt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,J=0){let $=Math.pow(2,-J),Z=Math.floor(A.image.width*$),Ee=Math.floor(A.image.height*$),Re=V!==null?V.x:0,we=V!==null?V.y:0;q.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Re,we,Z,Ee),_.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,$=null,Z=0,Ee=0){let Re,we,Ie,De,Qe,it,Pe,pt,Ht,Rt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(J!==null)Re=J.max.x-J.min.x,we=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,Qe=J.min.y,it=J.isBox3?J.min.z:0;else{let Vt=Math.pow(2,-Z);Re=Math.floor(Rt.width*Vt),we=Math.floor(Rt.height*Vt),A.isDataArrayTexture?Ie=Rt.depth:A.isData3DTexture?Ie=Math.floor(Rt.depth*Vt):Ie=1,De=0,Qe=0,it=0}$!==null?(Pe=$.x,pt=$.y,Ht=$.z):(Pe=0,pt=0,Ht=0);let wt=_e.convert(V.format),ln=_e.convert(V.type),Ce;V.isData3DTexture?(q.setTexture3D(V,0),Ce=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(q.setTexture2DArray(V,0),Ce=I.TEXTURE_2D_ARRAY):(q.setTexture2D(V,0),Ce=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let fn=_.getParameter(I.UNPACK_ROW_LENGTH),lt=_.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=_.getParameter(I.UNPACK_SKIP_PIXELS),ri=_.getParameter(I.UNPACK_SKIP_ROWS),qi=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,De),_.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),_.pixelStorei(I.UNPACK_SKIP_IMAGES,it);let js=A.isDataArrayTexture||A.isData3DTexture,St=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Vt=O.get(A),Xi=O.get(V),Tt=O.get(Vt.__renderTarget),Yi=O.get(Xi.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Tt.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Qs=0;Qs<Ie;Qs++)js&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(A).__webglTexture,Z,it+Qs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,O.get(V).__webglTexture,Ee,Ht+Qs)),I.blitFramebuffer(De,Qe,Re,we,Pe,pt,Re,we,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||O.has(A)){let Vt=O.get(A),Xi=O.get(V);_.bindFramebuffer(I.READ_FRAMEBUFFER,L),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,D);for(let Tt=0;Tt<Ie;Tt++)js?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,Z,it+Tt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,Z),St?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xi.__webglTexture,Ee,Ht+Tt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xi.__webglTexture,Ee),Z!==0?I.blitFramebuffer(De,Qe,Re,we,Pe,pt,Re,we,I.COLOR_BUFFER_BIT,I.NEAREST):St?I.copyTexSubImage3D(Ce,Ee,Pe,pt,Ht+Tt,De,Qe,Re,we):I.copyTexSubImage2D(Ce,Ee,Pe,pt,De,Qe,Re,we);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else St?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ce,Ee,Pe,pt,Ht,Re,we,Ie,wt,ln,Rt.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,Ee,Pe,pt,Ht,Re,we,Ie,wt,Rt.data):I.texSubImage3D(Ce,Ee,Pe,pt,Ht,Re,we,Ie,wt,ln,Rt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Pe,pt,Re,we,wt,ln,Rt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Pe,pt,Rt.width,Rt.height,wt,Rt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Pe,pt,Re,we,wt,ln,Rt);_.pixelStorei(I.UNPACK_ROW_LENGTH,fn),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),_.pixelStorei(I.UNPACK_SKIP_ROWS,ri),_.pixelStorei(I.UNPACK_SKIP_IMAGES,qi),Ee===0&&V.generateMipmaps&&I.generateMipmap(Ce),_.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),_.unbindTexture()},this.resetState=function(){B=0,W=0,X=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var fs={ug:-3.15,eg:0,og:3.15,dg:6.3},oa=.12,cs=2.2,hs=[],im=[],Zu=[],Uc=[],$u=[],sm=[],oS=0;function Ct(i,e,t,n,s,r,o={}){let a={id:`${i}-${++oS}`,kind:e,size:t,position:n,rotation:[0,0,0],color:s,floor:r,...o};return im.push(a),a}function an(i,e,t,n,s,r,o,a){let l=fs[t]??0,c={id:i,name:e,floor:t,color:a,bounds:{minX:n,maxX:n+r,minY:l,maxY:l+(t==="dg"?4.5:3.15),minZ:s,maxZ:s+o}};return hs.push(c),c}an("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");an("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");an("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");an("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");an("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");an("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");an("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");an("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[i,e,t]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[s,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])an(t[s],e[s],i,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][s]);let n=i==="ug"?"cellar":"upper";an(`${n}-hall`,i==="ug"?"Kellerflur":"Flur & Lesenische",i,0,5,14,2,"#d1c1aa"),an(`${n}-hall-south`,i==="ug"?"Kellerflur":"Lesenische",i,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,an(`${n}-core`,`Treppenhaus \xB7 ${i==="ug"?"Keller":"OG"}`,i,5.5,0,3,5,"#d2b694")}an("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");an("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";an("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";an("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var kr=an("garden","Garten","garden",-5,-7,24,25,"#91aa6d");kr.bounds.minY=-.15;kr.bounds.maxY=14;var on=(i,e,t,n,s,r,o,a=1,l=!1)=>({a:i,b:e,type:"door",id:t,name:n,threshold:s,rooms:[r,o],swing:a,hingeEnd:l}),Zt=(i,e,t=!1,n=.95,s=2.3)=>({a:i,b:e,type:"window",open:t,sill:n,head:s});function rm(i,e,t,n,s,r){Ct(`${i}-cross-horizontal`,"window-bar",t?[s,.06,.2]:[.2,.06,s],[...n],"#fffdf5",e),Ct(`${i}-cross-vertical`,"window-bar",t?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",e)}function Et(i,e,t,n,s,r=[],o=3.15){let a=fs[i],l=i==="ug"?"#b5b5a4":i==="dg"?"#ded0b8":"#e6dfca",c=`${i}-wall-${e?"z":"x"}${t}-${n}`,u=(h,d,p,x,m="wall",g=l)=>{d-h<=.001||x-p<=.001||Ct(c,m,e?[d-h,x-p,oa]:[oa,x-p,d-h],e?[(h+d)/2,a+(p+x)/2,t]:[t,a+(p+x)/2,(h+d)/2],g,i)},f=n;for(let h of[...r].sort((d,p)=>d.a-p.a)){u(f,h.a,0,o);let d=h.type==="door"?0:h.sill,p=h.type==="door"?cs:h.head;u(h.a,h.b,0,d),u(h.a,h.b,p,o);let x=h.b-h.a,m=e?[(h.a+h.b)/2,a+(d+p)/2,t]:[t,a+(d+p)/2,(h.a+h.b)/2];if(Uc.push({id:h.id||`${c}-window-${h.a}`,floor:i,type:h.type,open:h.open??!1,horizontal:e,fixed:t,from:h.a,to:h.b,sill:a+d,head:a+p,position:m}),h.type==="door"){let g=h.hingeEnd?h.b:h.a,v=e?[g,a+cs/2,t]:[t,a+cs/2,g],w=h.hingeEnd?-1:1,b=(e?-h.swing*w:h.swing*w)*Math.PI/2;Zu.push({id:h.id,name:h.name,threshold:h.threshold,rooms:h.rooms,floor:i,size:[x-.025,cs-.025,.055],position:m,rotation:[0,e?0:Math.PI/2,0],hinge:{position:v,axis:"y",angle:b},color:i==="ug"?"#788c82":"#b99469",open:!1});let M=.035;for(let S of[h.a-M/2,h.b+M/2])Ct(`${h.id}-frame`,"trim",e?[M,cs,.18]:[.18,cs,M],e?[S,a+cs/2,t]:[t,a+cs/2,S],"#f1e6cc",i)}else{h.open||(u(h.a,h.b,d,p,"glass","#a5d2dc"),rm(`${c}-window-${h.a}`,i,e,m,x,p-d));let g=.035;for(let v of[d,p])Ct(`${c}-sill`,"trim",e?[x,g,.18]:[.18,g,x],[m[0],a+v,m[2]],"#fbefcf",i);for(let v of[h.a,h.b])Ct(`${c}-jamb`,"trim",e?[g,p-d,.15]:[.15,p-d,g],e?[v,m[1],t]:[t,m[1],v],"#fbefcf",i)}f=h.b}u(f,s,0,o)}function us(i,e,t,n,s,r,o,a=fs[e]){Ct(i,"floor",[s,.14,r],[t+s/2,a-.07,n+r/2],o,e)}for(let i of["ug","eg","og","dg"])i==="ug"?us("cellar-floor",i,0,0,14,12,"#9d9f92"):(us("west-floor",i,0,0,5.5,12,i==="dg"?"#9d7953":"#b99671"),us("east-floor",i,8.5,0,5.5,12,i==="dg"?"#a68159":"#b99671"),us("hall-floor",i,5.5,4,3,8,"#c8b391"));us("garden-west","garden",-5,-7,5,25,"#83a363",0);us("garden-east","garden",14,-7,5,25,"#8aab69",0);us("garden-north","garden",0,-7,14,7,"#8cae6a",0);us("garden-south","garden",0,12,14,6,"#92ad72",0);Ct("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");Ct("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");Et("eg",!0,0,0,14,[on(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),on(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);Et("eg",!0,12,0,14,[Zt(3.5,4.9,!0),on(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),Zt(12.45,13.5)]);Et("eg",!1,0,0,12,[Zt(1.3,3.1),Zt(9,10.4)]);Et("eg",!1,14,0,12,[Zt(1.2,2.4),Zt(8.8,9.5)]);Et("eg",!1,5.5,0,12,[on(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),on(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);Et("eg",!1,8.5,0,12,[on(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),on(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);Et("eg",!0,5,5.5,8.5,[on(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);Et("eg",!0,7,0,5.5,[on(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);Et("eg",!0,7,8.5,14);Et("eg",!1,11,7,12,[on(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),on(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);Et("eg",!0,10,11,14);for(let[i,e]of[["hall-stairs",1],["front-door",-1]]){let t=Zu.find(n=>n.id===i);t.position[2]+=.095*e,t.hinge.position[2]+=.095*e,t.hinge.angle*=2}for(let i of["ug","og"]){let e=i==="ug",t=e?"cellar":"upper",n=e?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],s=e?[14,17,20,23]:[17,19,22,24];Et(i,!1,5.5,0,5),Et(i,!1,8.5,0,5),Et(i,!0,5,0,14,[on(2.7,4,n[0],hs.find(r=>r.id===n[0]).name,s[0],`${t}-hall`,n[0],-1),on(6.3,7.7,`${t}-stairs`,e?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",e?12:14,`${t}-core`,`${t}-hall`,1),on(10,11.4,n[1],hs.find(r=>r.id===n[1]).name,s[1],`${t}-hall`,n[1],-1)]),Et(i,!0,7,0,5.5,[on(3,4.4,n[2],hs.find(r=>r.id===n[2]).name,s[2],`${t}-hall`,n[2],1)]),Et(i,!0,7,8.5,14,[on(10,11.4,n[3],hs.find(r=>r.id===n[3]).name,s[3],`${t}-hall`,n[3],1)]),Et(i,!1,5.5,7,12),Et(i,!1,8.5,7,12),Et(i,!0,0,0,14,e?[Zt(1.1,2.8,!1,2.1,2.75),Zt(10.5,12,!1,2.1,2.75)]:[Zt(1.2,3.2),Zt(10.5,12)]),Et(i,!0,12,0,14,e?[]:[Zt(1.2,3.2),Zt(10.5,12)]),Et(i,!1,0,0,12,e?[]:[Zt(1.4,3.1),Zt(8.5,10.2,!0)]),Et(i,!1,14,0,12,e?[]:[Zt(1.6,3.3,!0),Zt(9.8,11.2)])}for(let i of["ug","eg","og"]){let e=fs[i],t=10,n=3.15/2/t,s=3/t;for(let r=0;r<t;r++)Ct("stair-left","stairs",[.85,.12,s+.015],[6.125,e+n*(r+1)-.06,3.85-s*(r+.5)],"#bba480",i),Ct("stair-right","stairs",[.85,.12,s+.015],[7.875,e+3.15/2+n*(r+1)-.06,.85+s*(r+.5)],"#bba480",i);Ct("stair-middle-landing","stairs",[2.6,.13,.5],[7,e+3.15/2-.065,.6],"#bba480",i);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])Ct("stair-post","railing",[.035,.65,.035],[r,e+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",i)}var om=3.1/7,ds=Math.atan(om),pi=i=>7.45+Math.min(i,14-i)*om;Et("dg",!1,0,0,12,[],1.15);Et("dg",!1,14,0,12,[],1.15);Et("dg",!1,5.5,0,5,[],3);Et("dg",!1,8.5,0,5,[],3);Et("dg",!0,5,5.5,8.5,[on(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function am(i,e){let t=[...new Set([0,14,...Array.from({length:55},(n,s)=>(s+1)*.25),...e.flatMap(n=>[n.a,n.b])])].sort((n,s)=>n-s);for(let n=1;n<t.length;n++){let s=t[n-1],r=t[n],o=Math.min(pi(s),pi(r))-6.3-.025,a=e.find(c=>(s+r)/2>c.a&&(s+r)/2<c.b),l=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[c,u]of l)u>c&&Ct("gable","wall",[r-s,u-c,oa],[(s+r)/2,6.3+(c+u)/2,i],"#ded0b8","dg")}for(let n of e){let s=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,i];Uc.push({id:`dg-gable-window-${i}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:i,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:s}),Ct("gable-window","glass",[n.b-n.a,n.head-n.sill,oa],s,"#a5d2dc","dg"),rm(`gable-window-${i}-${n.a}`,"dg",!0,s,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])Ct("gable-window-frame","trim",[n.b-n.a,.035,.18],[s[0],6.3+r,i],"#fbefcf","dg");for(let r of[n.a,n.b])Ct("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,s[1],i],"#fbefcf","dg")}for(let n of[3.5,10.5])Ct("gable-sloping-cap","wall",[7/Math.cos(ds),.25,oa],[n,pi(n)-.105,i],"#ded0b8","dg",{rotation:[0,0,n<7?ds:-ds]})}am(0,[Zt(1.8,3.2,!1,.6,1.65),Zt(10.5,12,!1,.6,1.65)]);am(12,[Zt(6,8,!1,.65,1.7)]);function aa(i,e,t,n,s){Ct(i,"roof",[(t-e)/Math.cos(ds),.14,s-n],[(e+t)/2,pi((e+t)/2),(n+s)/2],"#98705b","dg",{rotation:[0,0,e>=7?-ds:ds]})}aa("roof-west-front",0,7,0,7.25);aa("roof-west-back",0,7,9.15,12);aa("roof-west-eave",0,.35,7.25,9.15);aa("roof-west-upper",2,7,7.25,9.15);aa("roof-east",7,14,0,12);Uc.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,pi(1.175),8.2]});for(let i of[7.25,9.15])Ct("roof-window-frame","trim",[1.65/Math.cos(ds),.055,.055],[1.175,pi(1.175),i],"#f3e2bf","dg",{rotation:[0,0,ds]});for(let i of[.35,2])Ct("roof-window-frame","trim",[.055,.055,1.9],[i,pi(i),8.2],"#f3e2bf","dg");for(let i of[6.75,10.3]){for(let e of[3.4,10.6])Ct("attic-post","beam",[.16,pi(e)-6.3,.16],[e,(6.3+pi(e))/2,i],"#74543a","dg");Ct("attic-crossbeam","beam",[8,.16,.16],[7,8.7,i],"#74543a","dg")}function Ku(i){return hs.find(e=>e.id===i)?.floor||"garden"}function rt(i,e,t,n,s,r,o){return Ct(`${i}-${e}`,t,n,s,r,Ku(i),{roomId:i,...o})}function ps(i,e,t,n,s,r,o,a,l={}){let c={id:`${i}-${e}`,name:e,roomId:i,floor:Ku(i),x:t,z:n,width:s,depth:r,height:o,kind:a,...l};return sm.push(c),c}function Fi(i){return fs[Ku(i)]??0}function An(i,e,t,n,s,r,o=.78,a="#be986a"){ps(i,e,t,n,s,r,o,"table",{underClearance:o-.065});let l=Fi(i);rt(i,e,"tabletop",[s,.065,r],[t+s/2,l+o-.0325,n+r/2],a);for(let c of[t+.07,t+s-.07])for(let u of[n+.07,n+r-.07])rt(i,e,"table-leg",[.045,o-.065,.045],[c,l+(o-.065)/2,u],"#806548")}function vn(i,e,t,n,s=.6,r=.65,o="#80998c",a="south"){let l=Fi(i),c=.49;ps(i,e,t,n,s,r,.94,"chair",{underClearance:.435}),rt(i,e,"chair-seat",[s,.055,r],[t+s/2,l+c-.0275,n+r/2],o);for(let f of[t+.055,t+s-.055])for(let h of[n+.055,n+r-.055])rt(i,e,"chair-leg",[.035,.435,.035],[f,l+.2175,h],"#856c4c");let u=a==="south"||a==="north";rt(i,e,"chair-back",u?[s,.45,.045]:[.045,.45,r],[u?t+s/2:a==="east"?t+.0225:t+s-.0225,l+.715,u?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function vt(i,e,t,n,s,r,o=1.7,a=null,l="#b28c60",c=!1){let u=Fi(i);if(ps(i,e,t,n,s,r,o,"cabinet",{back:a}),c){let f=s>=r;for(let h of[0,(f?s:r)-.045])rt(i,e,"shelf-side",f?[.045,o,r]:[s,o,.045],[f?t+h+.0225:t+s/2,u+o/2,f?n+r/2:n+h+.0225],l);for(let h=.06;h<o;h+=.43)rt(i,e,"shelf-board",[s,.035,r],[t+s/2,u+h,n+r/2],l);for(let h=0;h<5;h++){let d=.43*(h%Math.max(1,Math.floor(o/.43)))+.18;rt(i,`${e}-books`,"books",f?[.24,.23,r*.72]:[s*.72,.23,.24],[f?t+s*(.2+.14*h):t+s/2,u+d,f?n+r/2:n+r*(.2+.14*h)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][h])}}else{rt(i,e,"cabinet",[s,o,r],[t+s/2,u+o/2,n+r/2],l);let f=s>=r;for(let h=0;h<Math.max(1,Math.floor((f?s:r)/.55));h++){let d=Math.max(1,Math.floor((f?s:r)/.55)),p=f?[t+(h+.5)*s/d,u+o*.56,n+r-.012]:[t+s-.012,u+o*.56,n+(h+.5)*r/d];rt(i,`${e}-handle`,"detail",f?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function dn(i,e,t,n,s,r,o,a){ps(i,e,t,n,s,r,o,"solid"),rt(i,e,"furniture",[s,o,r],[t+s/2,Fi(i)+o/2,n+r/2],a)}function Oc(i,e,t,n=.3,s=1.05){let r=Fi(i);ps(i,"Pflanze",e-n,t-n,n*2,n*2,s,"plant"),rt(i,"pot","plant-pot",[n,.3,n],[e,r+.15,t],"#b68460"),rt(i,"stem","plant-stem",[.035,s*.7,.035],[e,r+s*.47,t],"#627a48");for(let o=0;o<4;o++)rt(i,"leaf","foliage",[n*.85,.07,n*.52],[e+Math.cos(o*1.8)*n*.45,r+s*(.65+.09*o),t+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function lm(i,e,t,n,s){let r=Fi(i);ps(i,"Bett",e,t,n,s,.75,"bed"),rt(i,"bed-base","bed",[n,.3,s],[e+n/2,r+.24,t+s/2],"#99704e"),rt(i,"mattress","bed",[n-.06,.2,s-.06],[e+n/2,r+.49,t+s/2],"#ede1cc");let o=s>=n;rt(i,"headboard","bed",o?[n,.85,.075]:[.075,.85,s],[o?e+n/2:e+.04,r+.425,o?t+.04:t+s/2],"#a47c56"),rt(i,"blanket","bed",o?[n-.08,.06,s*.6]:[n*.6,.06,s-.08],[o?e+n/2:e+n*.65,r+.62,o?t+s*.65:t+s/2],i==="nursery"?"#87b2b0":"#b58e9b"),rt(i,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,s*.7],[o?e+n/2:e+.4,r+.66,o?t+.4:t+s/2],"#fff1d8")}function cm(i,e,t){let n=Fi(i);ps(i,"Toilette",e,t,.78,.6,.82,"sanitary"),rt(i,"cistern","sanitary",[.18,.82,.6],[e+.69,n+.41,t+.3],"#f5eee0"),rt(i,"toilet-base","sanitary",[.43,.36,.35],[e+.34,n+.18,t+.3],"#ebe7db"),rt(i,"toilet-seat","sanitary",[.57,.07,.51],[e+.315,n+.435,t+.3],"#faf5e7")}function hm(i,e,t,n,s){dn(i,"Waschtisch",e,t,n,s,.76,"#9baeb1"),rt(i,"basin","sanitary",[n,.09,s],[e+n/2,Fi(i)+.805,t+s/2],"#f7eedc")}var Mt=(i,e,t)=>({axis:i,value:e,edge:t});An("dining","Esstisch",1.8,2.3,1.8,2.4);for(let i of[2.5,4])vn("dining",`Stuhl-west-${i}`,.85,i,.65,.6,"#ba9664","east"),vn("dining",`Stuhl-east-${i}`,3.95,i,.65,.6,"#ba9664","west");vn("dining","Stuhl-nord",2.4,1.3);vn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");vt("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,Mt("z",0,"min"));vt("dining","Sideboard",.07,5.35,.55,1.3,.85,Mt("x",0,"min"));Oc("dining",1.2,6.3);dn("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");dn("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");vt("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,Mt("x",0,"min"),"#d9ded1");An("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");vn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);rt("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let i of[8.2,8.65])rt("kitchen","hob","detail",[.32,.018,.32],[.385,.925,i],"#4e5b5a");dn("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");rt("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let i of[3.05,5.45])rt("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,i+.125],"#5d8271");for(let i=0;i<3;i++)rt("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*i],"#8aa48b");An("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");vt("living","TV-Bank",8.57,2.65,.33,1.75,.5,Mt("x",8.5,"min"),"#b69871");rt("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");vt("living","Buecherregal",9,.07,2,.5,1.85,Mt("z",0,"min"),"#b99466",!0);vn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");Oc("living",13.4,6.4,.3);vt("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,Mt("x",5.5,"min"));An("hall","Sitzbank",8,10.35,.43,1,.45);Oc("hall",5.95,11.5,.23);vt("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,Mt("z",12,"max"),"#a5ad92");An("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);vt("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,Mt("z",7,"min"));cm("guest-wc",13.15,8.1);hm("guest-wc",12.4,7.07,.9,.43);vt("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,Mt("z",10,"max"),"#aec0b6");vt("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,Mt("z",10,"min"),"#af9c76",!0);vt("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,Mt("x",14,"max"));An("workshop","Werkbank",.6,.07,3.5,.8,.87);vt("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,Mt("x",5.5,"max"),"#929c8b");vn("workshop","Hocker",1.8,1.4);dn("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let i of[8.57,9.7])dn("laundry","Waschgeraet",i,.07,1,.98,.92,"#dfe3d8"),rt("laundry","Waschfenster","detail",[.58,.58,.024],[i+.5,-3.15+.46,1.06],"#729498");An("laundry","Waeschetisch",12,.07,1.8,.63);dn("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");An("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");vt("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,Mt("x",0,"min"),"#b49569",!0);vt("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,Mt("x",5.5,"max"),"#b49569",!0);vt("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,Mt("z",12,"max"));dn("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");dn("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");vt("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,Mt("x",8.5,"min"),"#7c9790");vt("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,Mt("z",12,"max"));vt("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,Mt("x",0,"min"));vt("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,Mt("x",14,"max"));lm("bedroom",1.65,.07,2,2.55);dn("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");dn("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");vt("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,Mt("x",0,"min"),"#b8aa92");An("office","Schreibtisch",9,.07,2.8,.8);vn("office","Schreibtischstuhl",10,1.3);rt("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");vt("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,Mt("x",14,"max"),"#b7986e",!0);vt("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,Mt("x",14,"max"),"#b7986e",!0);lm("nursery",.07,7.07,2.4,1.2);An("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);vn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");vt("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,Mt("x",5.5,"max"),"#87a6a0",!0);for(let[i,e,t]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])dn("nursery",`Bauklotz-${i}`,e,t,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][i]);ps("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");rt("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let i of[7.12,8.02])rt("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,i],"#f2efe3");for(let i of[11.8,13.88])rt("bathroom","bath-end","sanitary",[.1,.58,1],[i,3.5,7.57],"#f2efe3");hm("bathroom",8.57,9,.48,1.15);cm("bathroom",13.15,11.3);vt("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,Mt("z",12,"max"),"#a6bab6");vn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");vt("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,Mt("x",8.5,"max"),"#ad8e61",!0);vt("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,Mt("x",0,"min"));vt("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,Mt("x",14,"max"));for(let[i,e,t,n,s]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])dn("attic-west",`Koffer-${i}`,e,t,n,s,.48+i*.13,["#9b7658","#c3a071","#889687"][i]);An("attic-east","Basteltisch",9.15,.07,2.4,1.1);vn("attic-east","Bastelstuhl",9.95,1.55);vt("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);An("attic","Dachtisch",8.3,8.1,1.8,1);dn("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");dn("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");vt("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,Mt("z",12,"max"));An("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let i of[5.15,6.65])vn("garden",`Terrassenstuhl-N-${i}`,i,-3.25,.6,.65,"#9daa84"),vn("garden",`Terrassenstuhl-S-${i}`,i,-1,.6,.65,"#9daa84","north");vn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");vn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");An("garden","Gartenbank",-4,4,2.5,.65,.52);dn("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let i=0;i<4;i++)for(let e of[16.1,16.9])Oc("garden",e,5.4+.9*i,.18,1.02);for(let[i,e,t]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){rt("garden","tree-trunk","tree",[.35,3.3,.35],[i,1.65,e],"#816442");for(let n=0;n<3;n++)rt("garden","tree-crown","foliage",[t*1.25,t*.9,t*1.1],[i+Math.cos(n*2.1)*.45,3.1+n*.35,e+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let i of[-7,18])Ct("boundary-hedge","boundary",[24,1.5,.25],[7,.75,i],"#6d8d59","garden");for(let i of[-5,19])Ct("boundary-hedge","boundary",[.25,1.5,25],[i,.75,5.5],"#6d8d59","garden");function Bt(i,e){let t=Fi(i);for(let[n,s,r,o=!1]of e)$u.push({id:`${i}-star-${$u.filter(a=>a.roomId===i).length+1}`,roomId:i,x:n,y:t+s,z:r,radius:o?.14:.22,under:o})}Bt("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);Bt("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);Bt("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);Bt("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);Bt("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);Bt("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);Bt("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);Bt("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);Bt("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);Bt("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);Bt("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);Bt("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);Bt("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);Bt("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);Bt("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);Bt("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);Bt("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);Bt("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);Bt("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);Bt("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);Bt("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);Bt("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);Bt("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[i,e]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])Bt(i,[[7,1.4,2.2],[7,2.5,3.3]]);var dt={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:hs,doors:Zu,obstacles:im,openings:Uc,furniture:sm,collectibles:$u,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function la(i){let{x:e,y:t,z:n}=i;if(![e,t,n].every(Number.isFinite))return null;let s=o=>{let a=o.bounds;return e>=a.minX&&e<a.maxX&&t>=a.minY-.025&&t<a.maxY&&n>=a.minZ&&n<a.maxZ},r=hs.find(o=>o.floor!=="garden"&&s(o));return r?r.floor==="dg"&&t>pi(Math.max(0,Math.min(14,e)))+.12?s(kr)?kr:null:r:s(kr)?kr:null}function Vr(i,e=!1){let t=[...i.rotation||[0,0,0]],n=[...i.position];if(e&&i.hinge){let s=i.hinge.position,r=i.hinge.angle,o=n[0]-s[0],a=n[2]-s[2];n[0]=s[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=s[2]-Math.sin(r)*o+Math.cos(r)*a,t[1]+=r}return{size:[...i.size],position:n,rotation:t}}var aS=["classic","glider","dart","stunt"];var dm={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function lS(i,e){let t=[0,1,2].map(n=>i.reduce((s,r)=>s+r[n],0)/i.length);return e.map(n=>{let[s,r,o]=n.map(f=>i[f]),a=r.map((f,h)=>f-s[h]),l=o.map((f,h)=>f-s[h]);return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]].reduce((f,h,d)=>f+h*(s[d]-t[d]),0)<0?[...n].reverse():n})}function zc(i,e,t,n,s,r=0,o=0){let a=e.length,l=[-1,1].flatMap(u=>e.map(([f,h])=>[f*s,(o+Math.abs(f)*r+u*t/2)*s,h*s])),c=[Array.from({length:a},(u,f)=>f),Array.from({length:a},(u,f)=>f+a)];for(let u=0;u<a;u++)c.push([u,(u+1)%a,(u+1)%a+a,u+a]);return{id:i,kind:"convex",vertices:l,faces:lS(l,c),color:n}}function um(i,e,t,n=20){return Array.from({length:n},(s,r)=>{let o=r*Math.PI*2/n;return[i/2*Math.cos(o),t+e/2*Math.sin(o)]})}function cS(i,e){let t=-e.length/2,n=e.length/2,s=e.span/2,r=[[0,t],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[e.tail/2,n],[-e.tail/2,n]];return i==="dart"?{wing:[[0,t+.015],[s,n-.025],[0,n-.025]],fuselage:r,tail:o}:i==="glider"?{wing:Array.from({length:17},(a,l)=>{let c=-Math.PI/2+l*Math.PI/16;return[l===0||l===16?0:s*Math.cos(c),-.015+.105*Math.sin(c)]}),fuselage:um(.056,e.length,0),tail:um(e.tail,.08,n-.04)}:i==="stunt"?{wing:[[0,-.065],[s,-.065],[s,.045],[0,.045]],fuselage:[[0,t],[.028,t+.04],[.028,n-.008],[-.028,n-.008],[-.028,t+.04]],tail:[[-e.tail/2,n-.064],[e.tail/2,n-.064],[e.tail/2,n],[-e.tail/2,n]]}:{wing:[[0,t+.025],[s,.035],[s,.145],[0,n-.035]],fuselage:r,tail:[[-e.tail/2,n-.05],[e.tail/2,n-.05],[e.tail*.38,n],[-e.tail*.38,n]]}}function ms(i="classic",e=1){i=aS.includes(i)?i:"classic",e=Number.isFinite(Number(e))?Math.max(.55,Math.min(1.5,Number(e))):1;let t=dm[i],n=cS(i,t),s=e*.78,r=[zc("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,t.color,s,.045),zc("right-wing",n.wing,.008,t.color,s,.045),zc("fuselage",n.fuselage,.044,16768916,s,0,-.014),zc("tail",n.tail,.008,t.color,s,0,.011)];return{form:i,size:e,span:t.span*s,length:t.length*s,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function fm(i="classic",e=1){let t=ms(i,e),n=dm[t.form],s=t.size;return{speed:1.65*n.speed*(.94+.06*s),turnRate:1.8*n.turn/Math.pow(s,.65),pitchRate:.8/Math.pow(s,.35),sinkRate:.095*n.sink/Math.pow(s,.6),energyLoss:.035*n.sink/Math.pow(s,.55),glideRatio:1.65/.095*n.speed*(.94+.06*s)/n.sink*Math.pow(s,.6)}}function pm({position:i,input:e,heading:t,speed:n,tuning:s,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(e.pitch)>.25&&Math.abs(e.steer)<.35),l=r?e.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-i.x)*2:Math.sin(t)*n,z:a?(r.z-i.z)*2:-Math.cos(t)*n,targetVertical:-s.sinkRate+e.pitch*s.pitchRate+l+(o?1.9:0)}}var xs=class i{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new C);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new C);let n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new i);let n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],p=n[8],x=s[0],m=s[1],g=s[2],v=s[3],w=s[4],b=s[5],M=s[6],S=s[7],E=s[8];return r[0]=o*x+a*v+l*M,r[1]=o*m+a*w+l*S,r[2]=o*g+a*b+l*E,r[3]=c*x+u*v+f*M,r[4]=c*m+u*w+f*S,r[5]=c*g+u*b+f*E,r[6]=h*x+d*v+p*M,r[7]=h*m+d*w+p*S,r[8]=h*g+d*b+p*E,t}scale(e,t){t===void 0&&(t=new i);let n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new C);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3,c=l,u,f=4,h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new i);let t=3,n=6,s=hS,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,l=a,c,u=n,f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{let h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{let h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[t+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,f)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,l=s+s,c=t*o,u=t*a,f=t*l,h=n*a,d=n*l,p=s*l,x=r*o,m=r*a,g=r*l,v=this.elements;return v[0]=1-(h+p),v[1]=u-g,v[2]=f+m,v[3]=u+g,v[4]=1-(c+p),v[5]=d-x,v[6]=f-m,v[7]=d+x,v[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new i);let t=this.elements,n=e.elements,s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}},hS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],C=class i{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new i);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new i(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new i(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new xs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new i),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new i),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let s=uS,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=dS;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(mm),mm.almostEquals(e,t)}clone(){return new i(this.x,this.y,this.z)}};C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);var uS=new C,dS=new C,mm=new C,Dn=class i{constructor(e){e===void 0&&(e={}),this.lowerBound=new C,this.upperBound=new C,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,gm),c=gm),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new i().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,l){let c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){let n=xm,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){let d=n[h];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=xm,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){let d=n[h];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(p<0||d>p)}},gm=new C,xm=[new C,new C,new C,new C,new C,new C,new C,new C],qc=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Xc=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}return this}},Nt=class i{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new C),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=fS,s=pS;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-s*a,t.w=o*u-n*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new C);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return t.x=u*c+d*-o+f*-l-h*-a,t.y=f*c+d*-a+h*-o-u*-l,t.z=h*c+d*-l+u*-a-f*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":let u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=e.x,c=e.y,u=e.z,f=e.w,h,d,p,x,m;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),p=Math.sin(h),x=Math.sin((1-t)*h)/p,m=Math.sin(t*h)/p):(x=1-t,m=t),n.x=x*s+m*l,n.y=x*r+m*c,n.z=x*o+m*u,n.w=x*a+m*f,n}integrate(e,t,n,s){s===void 0&&(s=new i);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=t*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}},fS=new C,pS=new C,mS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Le=class i{constructor(e){e===void 0&&(e={}),this.id=i.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Le.idCounter=0;Le.types=mS;var gt=class i{constructor(e){e===void 0&&(e={}),this.position=new C,this.quaternion=new Nt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return i.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return i.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),n.vsub(e,s),t.conjugate(vm),vm.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new C),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new C),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new C),t.w*=-1,t.vmult(n,s),t.w*=-1,s}},vm=new Nt,fa=class i extends Le{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Le.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let s=new C;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new C;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,t)}static computeNormal(e,t,n,s){let r=new C,o=new C;t.vsub(e,o),n.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,r,o,a,l,c){let u=new C,f=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);let x=u.dot(o);x>h&&(h=x,f=p)}let d=[];for(let p=0;p<n.faces[f].length;p++){let x=n.vertices[n.faces[f][p]],m=new C;m.copy(x),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,e,t,d,a,l,c)}findSeparatingAxis(e,t,n,s,r,o,a,l){let c=new C,u=new C,f=new C,h=new C,d=new C,p=new C,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);let v=m.testSepAxis(c,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let v=0;v<g;v++){let w=a?a[v]:v;c.copy(m.faceNormals[w]),n.vmult(c,c);let b=m.testSepAxis(c,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],u);let v=m.testSepAxis(u,e,t,n,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}else{let g=l?l.length:e.faces.length;for(let v=0;v<g;v++){let w=l?l[v]:v;u.copy(e.faceNormals[w]),r.vmult(u,u);let b=m.testSepAxis(u,e,t,n,s,r);if(b===!1)return!1;b<x&&(x=b,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],d),h.cross(d,p),!p.almostZero()){p.normalize();let w=m.testSepAxis(p,e,t,n,s,r);if(w===!1)return!1;w<x&&(x=w,o.copy(p))}}return s.vsub(t,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,s,r,o){let a=this;i.project(a,e,n,s,Ju),i.project(t,e,r,o,ju);let l=Ju[0],c=Ju[1],u=ju[0],f=ju[1];if(l<f||u<c)return!1;let h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(e,t){let n=new C,s=new C;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,r,o,a){let l=new C,c=new C,u=new C,f=new C,h=new C,d=new C,p=new C,x=new C,m=this,g=[],v=s,w=g,b=-1,M=Number.MAX_VALUE;for(let P=0;P<m.faces.length;P++){l.copy(m.faceNormals[P]),n.vmult(l,l);let N=l.dot(e);N<M&&(M=N,b=P)}if(b<0)return;let S=m.faces[b];S.connectedFaces=[];for(let P=0;P<m.faces.length;P++)for(let N=0;N<m.faces[P].length;N++)S.indexOf(m.faces[P][N])!==-1&&P!==b&&S.connectedFaces.indexOf(P)===-1&&S.connectedFaces.push(P);let E=S.length;for(let P=0;P<E;P++){let N=m.vertices[S[P]],U=m.vertices[S[(P+1)%E]];N.vsub(U,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),f.copy(this.faceNormals[b]),n.vmult(f,f),t.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(N),n.vmult(d,d),t.vadd(d,d);let F=S.connectedFaces[P];p.copy(this.faceNormals[F]);let L=this.getPlaneConstantOfFace(F);x.copy(p),n.vmult(x,x);let D=L-x.dot(t);for(this.clipFaceAgainstPlane(v,w,x,D);v.length;)v.shift();for(;w.length;)v.push(w.shift())}p.copy(this.faceNormals[b]);let y=this.getPlaneConstantOfFace(b);x.copy(p),n.vmult(x,x);let T=y-x.dot(t);for(let P=0;P<v.length;P++){let N=x.dot(v[P])+T;if(N<=r&&(console.log(`clamped: depth=${N} to minDist=${r}`),N=r),N<=o){let U=v[P];if(N<=1e-6){let F={point:U,normal:x,depth:N};a.push(F)}}}}clipFaceAgainstPlane(e,t,n,s){let r,o,a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+s,r<0)if(o<0){let f=new C;f.copy(c),t.push(f)}else{let f=new C;l.lerp(c,r/(r-o),f),t.push(f)}else if(o<0){let f=new C;l.lerp(c,r/(r-o),f),t.push(f),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new C);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){let r=this.vertices,o,a,l,c,u,f,h=new C;for(let d=0;d<r.length;d++){h.copy(r[d]),t.vmult(h,h),e.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(f===void 0||p.z>f)&&(f=p.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new C);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<n;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new C;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=t[n[a][0]],u=new C;e.vsub(c,u);let f=l.dot(u),h=new C;o.vsub(c,h);let d=l.dot(h);if(f<0&&d>0||f>0&&d<0)return!1}return r?1:-1}static project(e,t,n,s,r){let o=e.vertices.length,a=xS,l=0,c=0,u=vS,f=e.vertices;u.setZero(),gt.vectorToLocalFrame(n,s,t,a),gt.pointToLocalFrame(n,s,u,u);let h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){let p=f[d].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){let d=c;c=l,l=d}r[0]=l,r[1]=c}},Ju=[],ju=[],gS=new C,xS=new C,vS=new C,pa=class i extends Le{constructor(e){super({type:Le.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=C,r=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new fa({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new C),i.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)gs.set(r[o][0],r[o][1],r[o][2]),t.vmult(gs,gs),e.vadd(gs,gs),n(gs.x,gs.y,gs.z)}calculateWorldAABB(e,t,n,s){let r=this.halfExtents;mi[0].set(r.x,r.y,r.z),mi[1].set(-r.x,r.y,r.z),mi[2].set(-r.x,-r.y,r.z),mi[3].set(-r.x,-r.y,-r.z),mi[4].set(r.x,-r.y,-r.z),mi[5].set(r.x,r.y,-r.z),mi[6].set(-r.x,r.y,-r.z),mi[7].set(r.x,-r.y,r.z);let o=mi[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=mi[a];t.vmult(l,l),e.vadd(l,l);let c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}},gs=new C,mi=[new C,new C,new C,new C,new C,new C,new C,new C],dd={DYNAMIC:1,STATIC:2,KINEMATIC:4},fd={AWAKE:0,SLEEPY:1,SLEEPING:2},tt=class i extends Xc{constructor(e){e===void 0&&(e={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new C,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new C,this.force=new C;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?i.STATIC:i.DYNAMIC,typeof e.type==typeof i.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new Nt,this.initQuaternion=new Nt,this.previousQuaternion=new Nt,this.interpolatedQuaternion=new Nt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new C,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new xs,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new xs,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new C(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new C(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,e===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(i.sleepyEvent)):t===i.SLEEPY&&n>s?this.wakeUp():t===i.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new C),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new C),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new C),this.quaternion.vmult(e,t),t}addShape(e,t,n){let s=new C,r=new Nt;return t&&s.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,s=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,r=yS,o=_S,a=this.quaternion,l=this.aabb,c=bS;for(let u=0;u!==s;u++){let f=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=SS,s=MS;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=ES;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=AS,s=TS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=t,s=CS;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=RS;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new C),this.type!==i.DYNAMIC)return;let n=IS,s=PS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){let e=LS;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),pa.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new C;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*e;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;let p=f.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,v=l.z*x.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*v),r.y+=e*(p[3]*m+p[4]*g+p[5]*v),r.z+=e*(p[6]*m+p[7]*g+p[8]*v),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};tt.idCounter=0;tt.COLLIDE_EVENT_NAME="collide";tt.DYNAMIC=dd.DYNAMIC;tt.STATIC=dd.STATIC;tt.KINEMATIC=dd.KINEMATIC;tt.AWAKE=fd.AWAKE;tt.SLEEPY=fd.SLEEPY;tt.SLEEPING=fd.SLEEPING;tt.wakeupEvent={type:"wakeup"};tt.sleepyEvent={type:"sleepy"};tt.sleepEvent={type:"sleep"};var yS=new C,_S=new Nt,bS=new Dn,SS=new xs,MS=new xs,wS=new xs,ES=new C,AS=new C,TS=new C,CS=new C,RS=new C,IS=new C,PS=new C,LS=new C,Yc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&tt.STATIC)!==0||e.sleepState===tt.SLEEPING)&&((t.type&tt.STATIC)!==0||t.sleepState===tt.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){let r=NS;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){let n=FS,s=DS,r=BS,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];e.push(s[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new C;e.position.vsub(t.position,n);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},NS=new C;new C;new Nt;new C;var FS={keys:[]},DS=[],BS=[];new C;var PT=new C;new C;var id=class extends Yc{constructor(){super()}collisionPairs(e,t,n){let s=e.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},Wr=class{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},Im,Pm,Lm,Nm,Fm,Dm,Bm,pd={CLOSEST:1,ANY:2,ALL:4};Im=Le.types.SPHERE;Pm=Le.types.PLANE;Lm=Le.types.BOX;Nm=Le.types.CYLINDER;Fm=Le.types.CONVEXPOLYHEDRON;Dm=Le.types.HEIGHTFIELD;Bm=Le.types.TRIMESH;var Vn=class i{get[Im](){return this._intersectSphere}get[Pm](){return this._intersectPlane}get[Lm](){return this._intersectBox}get[Nm](){return this._intersectConvex}get[Fm](){return this._intersectConvex}get[Dm](){return this._intersectHeightfield}get[Bm](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new C),t===void 0&&(t=new C),this.from=e.clone(),this.to=t.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Wr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||i.ANY,this.result=t.result||new Wr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ym),Qu.length=0,e.broadphase.aabbQuery(e,ym,Qu),this.intersectBodies(Qu),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=US,r=OS;for(let o=0,a=e.shapes.length;o<a;o++){let l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){let r=this.from;if(eM(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);t.vmult(c,c);let u=new C;o.vsub(n,u);let f=u.dot(c);a.vsub(n,u);let h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;let d=c.dot(l);if(Math.abs(d)<this.precision)return;let p=new C,x=new C,m=new C;o.vsub(n,p);let g=-c.dot(p)/d;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;let o=zS;o.from.copy(this.from),o.to.copy(this.to),gt.pointToLocalFrame(n,t,o.from,o.from),gt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=kS,l,c,u,f;l=c=0,u=f=e.data.length-1;let h=new Dn;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let p=c;p<f;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,p,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(d,p,!1),gt.pointToWorldFrame(n,t,e.pillarOffset,kc),this._intersectConvex(e.pillarConvex,t,kc,s,r,_m),this.result.shouldStop)return;e.getConvexTrianglePillar(d,p,!0),gt.pointToWorldFrame(n,t,e.pillarOffset,kc),this._intersectConvex(e.pillarConvex,t,kc,s,r,_m)}}}_intersectSphere(e,t,n,s,r){let o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=VS,p=GS;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,s,-1);else{let x=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){let a=HS,l=bm,c=o&&o.faceList||null,u=e.faces,f=e.vertices,h=e.faceNormals,d=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:u.length,v=this.result;for(let w=0;!v.shouldStop&&w<g;w++){let b=c?c[w]:w,M=u[b],S=h[b],E=t,y=n;l.copy(f[M[0]]),E.vmult(l,l),l.vadd(y,l),l.vsub(p,l),E.vmult(S,a);let T=d.dot(a);if(Math.abs(T)<this.precision)continue;let P=a.dot(l)/T;if(!(P<0)){d.scale(P,Tn),Tn.vadd(p,Tn),Qn.copy(f[M[0]]),E.vmult(Qn,Qn),y.vadd(Qn,Qn);for(let N=1;!v.shouldStop&&N<M.length-1;N++){gi.copy(f[M[N]]),xi.copy(f[M[N+1]]),E.vmult(gi,gi),E.vmult(xi,xi),y.vadd(gi,gi),y.vadd(xi,xi);let U=Tn.distanceTo(p);!(i.pointInTriangle(Tn,Qn,gi,xi)||i.pointInTriangle(Tn,gi,Qn,xi))||U>m||this.reportIntersection(a,Tn,r,s,b)}}}}_intersectTrimesh(e,t,n,s,r,o){let a=XS,l=jS,c=QS,u=bm,f=YS,h=$S,d=ZS,p=JS,x=KS,m=e.indices;e.vertices;let g=this.from,v=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(t),gt.vectorToLocalFrame(n,t,w,f),gt.pointToLocalFrame(n,t,g,h),gt.pointToLocalFrame(n,t,v,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,d.vsub(h,f),f.normalize();let b=h.distanceSquared(d);e.tree.rayQuery(this,c,l);for(let M=0,S=l.length;!this.result.shouldStop&&M!==S;M++){let E=l[M];e.getNormal(E,a),e.getVertex(m[E*3],Qn),Qn.vsub(h,u);let y=f.dot(a),T=a.dot(u)/y;if(T<0)continue;f.scale(T,Tn),Tn.vadd(h,Tn),e.getVertex(m[E*3+1],gi),e.getVertex(m[E*3+2],xi);let P=Tn.distanceSquared(h);!(i.pointInTriangle(Tn,gi,Qn,xi)||i.pointInTriangle(Tn,Qn,gi,xi))||P>b||(gt.vectorToWorldFrame(t,a,x),gt.pointToWorldFrame(n,t,Tn,p),this.reportIntersection(x,p,r,s,E))}l.length=0}reportIntersection(e,t,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,e,t,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,Hs),n.vsub(t,ca),e.vsub(t,ed);let r=Hs.dot(Hs),o=Hs.dot(ca),a=Hs.dot(ed),l=ca.dot(ca),c=ca.dot(ed),u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}};Vn.CLOSEST=pd.CLOSEST;Vn.ANY=pd.ANY;Vn.ALL=pd.ALL;var ym=new Dn,Qu=[],ca=new C,ed=new C,US=new C,OS=new Nt,Tn=new C,Qn=new C,gi=new C,xi=new C;new C;new Wr;var _m={faceList:[0]},kc=new C,zS=new Vn,kS=[],VS=new C,GS=new C,HS=new C,WS=new C,qS=new C,bm=new C,XS=new C,YS=new C,$S=new C,ZS=new C,KS=new C,JS=new C;new Dn;var jS=[],QS=new gt,Hs=new C,Vc=new C;function eM(i,e,t){t.vsub(i,Hs);let n=Hs.dot(e);return e.scale(n,Vc),Vc.vadd(i,Vc),t.distanceTo(Vc)}var $c=class i extends Yc{static checkBounds(e,t,n){let s,r;n===0?(s=e.position.x,r=t.position.x):n===1?(s=e.position.y,r=t.position.y):n===2&&(s=e.position.z,r=t.position.z);let o=e.boundingRadius,a=t.boundingRadius,l=s+o;return r-a<l}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=s}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let s=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=s}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{let s=t.indexOf(n.body);s!==-1&&t.splice(s,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let u=s[l];if(this.needBroadphaseCollision(c,u)){if(!i.checkBounds(c,u,o))break;this.intersectionTest(c,u,t,n)}}}}sortList(){let e=this.axisList,t=this.axisIndex,n=e.length;for(let s=0;s!==n;s++){let r=e[s];r.aabbNeedsUpdate&&r.updateAABB()}t===0?i.insertionSortX(e):t===1?i.insertionSortY(e):t===2&&i.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let d=0;d!==l;d++){let p=a[d],x=p.position.x;e+=x,t+=x*x;let m=p.position.y;n+=m,s+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=t-e*e*c,f=s-n*n*c,h=o-r*r*c;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;t.lowerBound[r],t.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}},Zc=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},sd=class i{constructor(e,t,n){n===void 0&&(n={}),n=Zc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};sd.idCounter=0;var Kc=class{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},ma=class i{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Kc,this.jacobianElementB=new Kc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let s=t,r=e,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Sm),a.scale(u,Mm),n.invInertiaWorldSolve.vmult(o,wm),s.invInertiaWorldSolve.vmult(l,Em),e.multiplyVectors(Sm,wm)+t.multiplyVectors(Mm,Em)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(e.rotational,Gc),c+=Gc.dot(e.rotational),l.vmult(t.rotational,Gc),c+=Gc.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=tM;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ma.idCounter=0;var Sm=new C,Mm=new C,wm=new C,Em=new C,Gc=new C,tM=new C,rd=class extends ma{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(e){let t=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=nM,c=iM,u=s.velocity,f=s.angularVelocity;s.force,s.torque;let h=r.velocity,d=r.angularVelocity;r.force,r.torque;let p=sM,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);let v=g.dot(p),w=this.restitution+1,b=w*h.dot(g)-w*u.dot(g)+d.dot(c)-f.dot(l),M=this.computeGiMf();return-v*t-b*n-e*M}getImpactVelocityAlongNormal(){let e=rM,t=oM,n=aM,s=lM,r=cM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},nM=new C,iM=new C,sM=new C,rM=new C,oM=new C,aM=new C,lM=new C,cM=new C;var LT=new C,NT=new C;var FT=new C,DT=new C;new C;new C;var BT=new C,UT=new C;var OT=new C,zT=new C,Jc=class extends ma{constructor(e,t,n){super(e,t,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=hM,o=uM,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),f=this.computeGiMf();return-u*t-e*f}},hM=new C,uM=new C,jc=class i{constructor(e,t,n){n=Zc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};jc.idCounter=0;var Qc=class i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};Qc.idCounter=0;var kT=new C,VT=new C,GT=new C,HT=new C,WT=new C,qT=new C,XT=new C,YT=new C,$T=new C,ZT=new C,KT=new C;var JT=new C,jT=new C;new C;new C;new C;var QT=new C,eC=new C,tC=new C;new Vn;new C;var nC=new C,iC=new C,sC=[new C(1,0,0),new C(0,1,0),new C(0,0,1)],rC=new C;var oC=new C,aC=new C,lC=new C;var cC=new C,hC=new C,uC=new C,dC=new C;var fC=new C,pC=new C,mC=new C;var gC=new C,xC=new C;var vC=new C,yC=new C,_C=new C,bC=new C,SC=new C,MC=new C,wC=new C;var EC=new C;var AC=new C,TC=new C,CC=new C,RC=new C,IC=new C,PC=new C,LC=new C,NC=new C,FC=new C;var DC=new C,BC=new Dn;var UC=new C,OC=new Dn,zC=new C,kC=new C,VC=new C,GC=new C,HC=new C,WC=new C,qC=new C,XC=new Dn,YC=new C,$C=new gt,ZC=new Dn,od=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},ad=class extends od{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e,f,h,d,p,x,m;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();let g=fM,v=pM,w=dM;g.length=a,v.length=a,w.length=a;for(let b=0;b!==a;b++){let M=o[b];w[b]=0,v[b]=M.computeB(u),g[b]=1/M.computeC()}if(a!==0){for(let S=0;S!==c;S++){let E=l[S],y=E.vlambda,T=E.wlambda;y.set(0,0,0),T.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let S=0;S!==a;S++){let E=o[S];f=v[S],h=g[S],m=w[S],x=E.computeGWlambda(),d=h*(f-x-E.eps*m),m+d<E.minForce?d=E.minForce-m:m+d>E.maxForce&&(d=E.maxForce-m),w[S]+=d,p+=d>0?d:-d,E.addToWlambda(d)}if(p*p<r)break}for(let S=0;S!==c;S++){let E=l[S],y=E.velocity,T=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),y.vadd(E.vlambda,y),E.wlambda.vmul(E.angularFactor,E.wlambda),T.vadd(E.wlambda,T)}let b=o.length,M=1/u;for(;b--;)o[b].multiplier=w[b]*M}return n}},dM=[],fM=[],pM=[];var KC=tt.STATIC;var ld=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},cd=class extends ld{constructor(){super(...arguments),this.type=C}constructObject(){return new C}},Lt={sphereSphere:Le.types.SPHERE,spherePlane:Le.types.SPHERE|Le.types.PLANE,boxBox:Le.types.BOX|Le.types.BOX,sphereBox:Le.types.SPHERE|Le.types.BOX,planeBox:Le.types.PLANE|Le.types.BOX,convexConvex:Le.types.CONVEXPOLYHEDRON,sphereConvex:Le.types.SPHERE|Le.types.CONVEXPOLYHEDRON,planeConvex:Le.types.PLANE|Le.types.CONVEXPOLYHEDRON,boxConvex:Le.types.BOX|Le.types.CONVEXPOLYHEDRON,sphereHeightfield:Le.types.SPHERE|Le.types.HEIGHTFIELD,boxHeightfield:Le.types.BOX|Le.types.HEIGHTFIELD,convexHeightfield:Le.types.CONVEXPOLYHEDRON|Le.types.HEIGHTFIELD,sphereParticle:Le.types.PARTICLE|Le.types.SPHERE,planeParticle:Le.types.PLANE|Le.types.PARTICLE,boxParticle:Le.types.BOX|Le.types.PARTICLE,convexParticle:Le.types.PARTICLE|Le.types.CONVEXPOLYHEDRON,cylinderCylinder:Le.types.CYLINDER,sphereCylinder:Le.types.SPHERE|Le.types.CYLINDER,planeCylinder:Le.types.PLANE|Le.types.CYLINDER,boxCylinder:Le.types.BOX|Le.types.CYLINDER,convexCylinder:Le.types.CONVEXPOLYHEDRON|Le.types.CYLINDER,heightfieldCylinder:Le.types.HEIGHTFIELD|Le.types.CYLINDER,particleCylinder:Le.types.PARTICLE|Le.types.CYLINDER,sphereTrimesh:Le.types.SPHERE|Le.types.TRIMESH,planeTrimesh:Le.types.PLANE|Le.types.TRIMESH},hd=class{get[Lt.sphereSphere](){return this.sphereSphere}get[Lt.spherePlane](){return this.spherePlane}get[Lt.boxBox](){return this.boxBox}get[Lt.sphereBox](){return this.sphereBox}get[Lt.planeBox](){return this.planeBox}get[Lt.convexConvex](){return this.convexConvex}get[Lt.sphereConvex](){return this.sphereConvex}get[Lt.planeConvex](){return this.planeConvex}get[Lt.boxConvex](){return this.boxConvex}get[Lt.sphereHeightfield](){return this.sphereHeightfield}get[Lt.boxHeightfield](){return this.boxHeightfield}get[Lt.convexHeightfield](){return this.convexHeightfield}get[Lt.sphereParticle](){return this.sphereParticle}get[Lt.planeParticle](){return this.planeParticle}get[Lt.boxParticle](){return this.boxParticle}get[Lt.convexParticle](){return this.convexParticle}get[Lt.cylinderCylinder](){return this.convexConvex}get[Lt.sphereCylinder](){return this.sphereConvex}get[Lt.planeCylinder](){return this.planeConvex}get[Lt.boxCylinder](){return this.boxConvex}get[Lt.convexCylinder](){return this.convexConvex}get[Lt.heightfieldCylinder](){return this.heightfieldCylinder}get[Lt.particleCylinder](){return this.particleCylinder}get[Lt.sphereTrimesh](){return this.sphereTrimesh}get[Lt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new cd,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new rd(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let n=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){let h=c*(a.frictionGravity||a.gravity).length(),d=n.invMass+s.invMass;d>0&&(d=1/d);let p=this.frictionEquationPool,x=p.length?p.pop():new Jc(n,s,h*d),m=p.length?p.pop():new Jc(n,s,h*d);return x.bi=m.bi=n,x.bj=m.bj=s,x.minForce=m.minForce=-h*d,x.maxForce=m.maxForce=h*d,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Gs.setZero(),Gr.setZero(),Hr.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Gs.vadd(t.ni,Gs),Gr.vadd(t.ri,Gr),Hr.vadd(t.rj,Hr)):(Gs.vsub(t.ni,Gs),Gr.vadd(t.rj,Gr),Hr.vadd(t.ri,Hr));let o=1/e;Gr.scale(o,n.ri),Hr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Gs.normalize(),Gs.tangents(n.t,s.t)}getContacts(e,t,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=xM,c=vM,u=mM,f=gM;for(let h=0,d=e.length;h!==d;h++){let p=e[h],x=t[h],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&tt.KINEMATIC&&x.type&tt.STATIC||p.type&tt.STATIC&&x.type&tt.KINEMATIC||p.type&tt.KINEMATIC&&x.type&tt.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],l),p.quaternion.vmult(p.shapeOffsets[v],u),u.vadd(p.position,u);let w=p.shapes[v];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],c),x.quaternion.vmult(x.shapeOffsets[b],f),f.vadd(x.position,f);let M=x.shapes[b];if(!(w.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(f)>w.boundingSphereRadius+M.boundingSphereRadius)continue;let S=null;w.material&&M.material&&(S=n.getContactMaterial(w.material,M.material)||null),this.currentContactMaterial=S||m||n.defaultContactMaterial;let E=w.type|M.type,y=this[E];if(y){let T=!1;w.type<M.type?T=y.call(this,w,M,u,f,l,c,p,x,w,M,g):T=y.call(this,M,w,f,u,c,l,x,p,w,M,g),T&&g&&(n.shapeOverlapKeeper.set(w.id,M.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(e,t,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(e.radius+t.radius)**2;let h=this.createContactEquation(a,l,e,t,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,s,r,o,a,l,c,u,f){let h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(s,Hc),h.ni.scale(h.ni.dot(Hc),Am),Hc.vsub(Am,h.rj),-Hc.dot(h.ni)<=e.radius){if(f)return!0;let d=h.ri,p=h.rj;d.vadd(n,d),d.vsub(a.position,d),p.vadd(s,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,f)}sphereBox(e,t,n,s,r,o,a,l,c,u,f){let h=this.v3pool,d=WM;n.vsub(s,Wc),t.getSideNormals(d,o);let p=e.radius,x=!1,m=XM,g=YM,v=$M,w=null,b=0,M=0,S=0,E=null;for(let B=0,W=d.length;B!==W&&x===!1;B++){let X=VM;X.copy(d[B]);let H=X.length();X.normalize();let K=Wc.dot(X);if(K<H+p&&K>0){let j=GM,oe=HM;j.copy(d[(B+1)%3]),oe.copy(d[(B+2)%3]);let me=j.length(),Xe=oe.length();j.normalize(),oe.normalize();let Ye=Wc.dot(j),$e=Wc.dot(oe);if(Ye<me&&Ye>-me&&$e<Xe&&$e>-Xe){let te=Math.abs(K-H-p);if((E===null||te<E)&&(E=te,M=Ye,S=$e,w=H,m.copy(X),g.copy(j),v.copy(oe),b++,f))return!0}}}if(b){x=!0;let B=this.createContactEquation(a,l,e,t,c,u);m.scale(-p,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(w,m),g.scale(M,g),m.vadd(g,m),v.scale(S,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let y=h.get(),T=qM;for(let B=0;B!==2&&!x;B++)for(let W=0;W!==2&&!x;W++)for(let X=0;X!==2&&!x;X++)if(y.set(0,0,0),B?y.vadd(d[0],y):y.vsub(d[0],y),W?y.vadd(d[1],y):y.vsub(d[1],y),X?y.vadd(d[2],y):y.vsub(d[2],y),s.vadd(y,T),T.vsub(n,T),T.lengthSquared()<p*p){if(f)return!0;x=!0;let H=this.createContactEquation(a,l,e,t,c,u);H.ri.copy(T),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(p,H.ri),H.rj.copy(y),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(s,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}h.release(y),y=null;let P=h.get(),N=h.get(),U=h.get(),F=h.get(),L=h.get(),D=d.length;for(let B=0;B!==D&&!x;B++)for(let W=0;W!==D&&!x;W++)if(B%3!==W%3){d[W].cross(d[B],P),P.normalize(),d[B].vadd(d[W],N),U.copy(n),U.vsub(N,U),U.vsub(s,U);let X=U.dot(P);P.scale(X,F);let H=0;for(;H===B%3||H===W%3;)H++;L.copy(n),L.vsub(F,L),L.vsub(N,L),L.vsub(s,L);let K=Math.abs(X),j=L.length();if(K<d[H].length()&&j<p){if(f)return!0;x=!0;let oe=this.createContactEquation(a,l,e,t,c,u);N.vadd(F,oe.rj),oe.rj.copy(oe.rj),L.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(s,oe.ri),oe.ri.vsub(n,oe.ri),oe.ri.normalize(),oe.ri.scale(p,oe.ri),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),oe.rj.vadd(s,oe.rj),oe.rj.vsub(l.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}h.release(P,N,U,F,L)}planeBox(e,t,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,r,o,a,l,e,t,f)}convexConvex(e,t,n,s,r,o,a,l,c,u,f,h,d){let p=c1;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,s,o,p,h,d)){let x=[],m=h1;e.clipAgainstHull(n,r,t,s,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(f)return!0;let w=this.createContactEquation(a,l,e,t,c,u),b=w.ri,M=w.rj;p.negate(w.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,b),M.copy(x[v].point),b.vsub(n,b),M.vsub(s,M),b.vadd(n,b),b.vsub(a.position,b),M.vadd(s,M),M.vsub(l.position,M),this.result.push(w),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,s,r,o,a,l,c,u,f){let h=this.v3pool;n.vsub(s,ZM);let d=t.faceNormals,p=t.faces,x=t.vertices,m=e.radius,g=!1;for(let v=0;v!==x.length;v++){let w=x[v],b=QM;o.vmult(w,b),s.vadd(b,b);let M=jM;if(b.vsub(n,M),M.lengthSquared()<m*m){if(f)return!0;g=!0;let S=this.createContactEquation(a,l,e,t,c,u);S.ri.copy(M),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(m,S.ri),b.vsub(s,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(s,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,w=p.length;v!==w&&g===!1;v++){let b=d[v],M=p[v],S=e1;o.vmult(b,S);let E=t1;o.vmult(x[M[0]],E),E.vadd(s,E);let y=n1;S.scale(-m,y),n.vadd(y,y);let T=i1;y.vsub(E,T);let P=T.dot(S),N=s1;if(n.vsub(E,N),P<0&&N.dot(S)>0){let U=[];for(let F=0,L=M.length;F!==L;F++){let D=h.get();o.vmult(x[M[F]],D),s.vadd(D,D),U.push(D)}if(kM(U,S,n)){if(f)return!0;g=!0;let F=this.createContactEquation(a,l,e,t,c,u);S.scale(-m,F.ri),S.negate(F.ni);let L=h.get();S.scale(-P,L);let D=h.get();S.scale(-m,D),n.vsub(s,F.rj),F.rj.vadd(D,F.rj),F.rj.vadd(L,F.rj),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),h.release(L),h.release(D),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let B=0,W=U.length;B!==W;B++)h.release(U[B]);return}else for(let F=0;F!==M.length;F++){let L=h.get(),D=h.get();o.vmult(x[M[(F+1)%M.length]],L),o.vmult(x[M[(F+2)%M.length]],D),s.vadd(L,L),s.vadd(D,D);let B=KM;D.vsub(L,B);let W=JM;B.unit(W);let X=h.get(),H=h.get();n.vsub(L,H);let K=H.dot(W);W.scale(K,X),X.vadd(L,X);let j=h.get();if(X.vsub(n,j),K>0&&K*K<B.lengthSquared()&&j.lengthSquared()<m*m){if(f)return!0;let oe=this.createContactEquation(a,l,e,t,c,u);X.vsub(s,oe.rj),X.vsub(n,oe.ni),oe.ni.normalize(),oe.ni.scale(m,oe.ri),oe.rj.vadd(s,oe.rj),oe.rj.vsub(l.position,oe.rj),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let me=0,Xe=U.length;me!==Xe;me++)h.release(U[me]);h.release(L),h.release(D),h.release(X),h.release(j),h.release(H);return}h.release(L),h.release(D),h.release(X),h.release(j),h.release(H)}for(let F=0,L=U.length;F!==L;F++)h.release(U[F])}}}planeConvex(e,t,n,s,r,o,a,l,c,u,f){let h=r1,d=o1;d.set(0,0,1),r.vmult(d,d);let p=0,x=a1;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,x),d.dot(x)<=0){if(f)return!0;let v=this.createContactEquation(a,l,e,t,c,u),w=l1;d.scale(d.dot(x),w),h.vsub(w,w),w.vsub(n,v.ri),v.ni.copy(d),h.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,f)}sphereHeightfield(e,t,n,s,r,o,a,l,c,u,f){let h=t.data,d=e.radius,p=t.elementSize,x=S1,m=b1;gt.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-d)/p)-1,v=Math.ceil((m.x+d)/p)+1,w=Math.floor((m.y-d)/p)-1,b=Math.ceil((m.y+d)/p)+1;if(v<0||b<0||g>h.length||w>h[0].length)return;g<0&&(g=0),v<0&&(v=0),w<0&&(w=0),b<0&&(b=0),g>=h.length&&(g=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);let M=[];t.getRectMinMax(g,w,v,b,M);let S=M[0],E=M[1];if(m.z-d>E||m.z+d<S)return;let y=this.result;for(let T=g;T<v;T++)for(let P=w;P<b;P++){let N=y.length,U=!1;if(t.getConvexTrianglePillar(T,P,!1),gt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,f)),f&&U||(t.getConvexTrianglePillar(T,P,!0),gt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,x,r,o,a,l,e,t,f)),f&&U))return!0;if(y.length-N>2)return}}boxHeightfield(e,t,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,f)}convexHeightfield(e,t,n,s,r,o,a,l,c,u,f){let h=t.data,d=t.elementSize,p=e.boundingSphereRadius,x=y1,m=_1,g=v1;gt.pointToLocalFrame(s,o,n,g);let v=Math.floor((g.x-p)/d)-1,w=Math.ceil((g.x+p)/d)+1,b=Math.floor((g.y-p)/d)-1,M=Math.ceil((g.y+p)/d)+1;if(w<0||M<0||v>h.length||b>h[0].length)return;v<0&&(v=0),w<0&&(w=0),b<0&&(b=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),w>=h.length&&(w=h.length-1),M>=h[0].length&&(M=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let S=[];t.getRectMinMax(v,b,w,M,S);let E=S[0],y=S[1];if(!(g.z-p>y||g.z+p<E))for(let T=v;T<w;T++)for(let P=b;P<M;P++){let N=!1;if(t.getConvexTrianglePillar(T,P,!1),gt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,f,m,null)),f&&N||(t.getConvexTrianglePillar(T,P,!0),gt.pointToWorldFrame(s,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.convexConvex(e,t.pillarConvex,n,x,r,o,a,l,null,null,f,m,null)),f&&N))return!0}}sphereParticle(e,t,n,s,r,o,a,l,c,u,f){let h=p1;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(f)return!0;let p=this.createContactEquation(l,a,t,e,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,s,r,o,a,l,c,u,f){let h=u1;h.set(0,0,1),a.quaternion.vmult(h,h);let d=d1;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;let x=this.createContactEquation(l,a,t,e,c,u);x.ni.copy(h),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=f1;h.scale(h.dot(s),m),s.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,r,o,a,l,e,t,f)}convexParticle(e,t,n,s,r,o,a,l,c,u,f){let h=-1,d=g1,p=x1,x=null,m=m1;if(m.copy(s),m.vsub(n,m),r.conjugate(Tm),Tm.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,v=e.faces.length;g!==v;g++){let w=[e.worldVertices[e.faces[g][0]]],b=e.worldFaceNormals[g];s.vsub(w[0],Cm);let M=-b.dot(Cm);if(x===null||Math.abs(M)<Math.abs(x)){if(f)return!0;x=M,h=g,d.copy(b)}}if(h!==-1){let g=this.createContactEquation(l,a,t,e,c,u);d.scale(x,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),d.negate(g.ni),g.ri.set(0,0,0);let v=g.ri,w=g.rj;v.vadd(s,v),v.vsub(l.position,v),w.vadd(n,w),w.vsub(a.position,w),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(t,e,s,n,o,r,l,a,c,u,f)}particleCylinder(e,t,n,s,r,o,a,l,c,u,f){return this.convexParticle(t,e,s,n,o,r,l,a,c,u,f)}sphereTrimesh(e,t,n,s,r,o,a,l,c,u,f){let h=AM,d=TM,p=CM,x=RM,m=IM,g=PM,v=DM,w=EM,b=MM,M=BM;gt.pointToLocalFrame(s,o,n,m);let S=e.radius;v.lowerBound.set(m.x-S,m.y-S,m.z-S),v.upperBound.set(m.x+S,m.y+S,m.z+S),t.getTrianglesInAABB(v,M);let E=wM,y=e.radius*e.radius;for(let F=0;F<M.length;F++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[M[F]*3+L],E),E.vsub(m,b),b.lengthSquared()<=y){if(w.copy(E),gt.pointToWorldFrame(s,o,w,E),E.vsub(n,b),f)return!0;let D=this.createContactEquation(a,l,e,t,c,u);D.ni.copy(b),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(E),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let F=0;F<M.length;F++)for(let L=0;L<3;L++){t.getVertex(t.indices[M[F]*3+L],h),t.getVertex(t.indices[M[F]*3+(L+1)%3],d),d.vsub(h,p),m.vsub(d,g);let D=g.dot(p);m.vsub(h,g);let B=g.dot(p);if(B>0&&D<0&&(m.vsub(h,g),x.copy(p),x.normalize(),B=g.dot(x),x.scale(B,g),g.vadd(h,g),g.distanceTo(m)<e.radius)){if(f)return!0;let X=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(e.radius,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),gt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,X.rj),gt.vectorToWorldFrame(o,X.ni,X.ni),gt.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}let T=LM,P=NM,N=FM,U=SM;for(let F=0,L=M.length;F!==L;F++){t.getTriangleVertices(M[F],T,P,N),t.getNormal(M[F],U),m.vsub(T,g);let D=g.dot(U);if(U.scale(D,g),m.vsub(g,g),D=g.distanceTo(m),Vn.pointInTriangle(g,T,P,N)&&D<e.radius){if(f)return!0;let B=this.createContactEquation(a,l,e,t,c,u);g.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),gt.pointToWorldFrame(s,o,g,g),g.vsub(l.position,B.rj),gt.vectorToWorldFrame(o,B.ni,B.ni),gt.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,s,r,o,a,l,c,u,f){let h=new C,d=yM;d.set(0,0,1),r.vmult(d,d);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);let x=new C;x.copy(h),gt.pointToWorldFrame(s,o,x,h);let m=_M;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;let v=this.createContactEquation(a,l,e,t,c,u);v.ni.copy(d);let w=bM;d.scale(m.dot(d),w),h.vsub(w,w),v.ri.copy(w),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Gs=new C,Gr=new C,Hr=new C,mM=new C,gM=new C,xM=new Nt,vM=new Nt,yM=new C,_M=new C,bM=new C,SM=new C,MM=new C;new C;var wM=new C,EM=new C,AM=new C,TM=new C,CM=new C,RM=new C,IM=new C,PM=new C,LM=new C,NM=new C,FM=new C,DM=new Dn,BM=[],Hc=new C,Am=new C,UM=new C,OM=new C,zM=new C;function kM(i,e,t){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=UM;i[(r+1)%s].vsub(o,a);let l=OM;a.cross(e,l);let c=zM;t.vsub(o,c);let u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var Wc=new C,VM=new C,GM=new C,HM=new C,WM=[new C,new C,new C,new C,new C,new C],qM=new C,XM=new C,YM=new C,$M=new C,ZM=new C,KM=new C,JM=new C,jM=new C,QM=new C,e1=new C,t1=new C,n1=new C,i1=new C,s1=new C;new C;new C;var r1=new C,o1=new C,a1=new C,l1=new C,c1=new C,h1=new C,u1=new C,d1=new C,f1=new C,p1=new C,Tm=new Nt,m1=new C;new C;var g1=new C,Cm=new C,x1=new C,v1=new C,y1=new C,_1=[0],b1=new C,S1=new C,eh=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,u=n[l];for(;u>s[a];)a++;c=u===s[a],c||Rm(e,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||Rm(t,u)}}};function Rm(i,e){i.push((e&4294901760)>>16,e&65535)}var td=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`,ud=class{constructor(){this.data={keys:[]}}get(e,t){let n=td(e,t);return this.data[n]}set(e,t,n){let s=td(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){let n=td(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},th=class extends Xc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new id,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new ad,this.constraints=[],this.narrowphase=new hd(this),this.collisionMatrix=new qc,this.collisionMatrixPrevious=new qc,this.bodyOverlapKeeper=new eh,this.shapeOverlapKeeper=new eh,this.contactmaterials=[],this.contactMaterialTable=new ud,this.defaultMaterial=new Qc("default"),this.defaultContactMaterial=new jc(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Wr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.ALL,n.from=e,n.to=t,n.callback=s,nd.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.ANY,n.from=e,n.to=t,n.result=s,nd.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Vn.CLOSEST,n.from=e,n.to=t,n.result=s,nd.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof tt&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let s=t[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=Kt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=Kt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Kt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=T1,s=C1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=tt.DYNAMIC,h=-1/0,d=this.constraints,p=A1;l.length();let x=l.x,m=l.y,g=l.z,v=0;for(c&&(h=Kt.now()),v=0;v!==r;v++){let F=o[v];if(F.type===f){let L=F.force,D=F.mass;L.x+=D*x,L.y+=D*m,L.z+=D*g}}for(let F=0,L=this.subsystems.length;F!==L;F++)this.subsystems[F].update();c&&(h=Kt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Kt.now()-h);let w=d.length;for(v=0;v!==w;v++){let F=d[v];if(!F.collideConnected)for(let L=n.length-1;L>=0;L-=1)(F.bodyA===n[L]&&F.bodyB===s[L]||F.bodyB===n[L]&&F.bodyA===s[L])&&(n.splice(L,1),s.splice(L,1))}this.collisionMatrixTick(),c&&(h=Kt.now());let b=E1,M=t.length;for(v=0;v!==M;v++)b.push(t[v]);t.length=0;let S=this.frictionEquations.length;for(v=0;v!==S;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,b,this.frictionEquations,p),c&&(u.narrowphase=Kt.now()-h),c&&(h=Kt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let E=t.length;for(let F=0;F!==E;F++){let L=t[F],D=L.bi,B=L.bj,W=L.si,X=L.sj,H;if(D.material&&B.material?H=this.getContactMaterial(D.material,B.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,D.material&&B.material&&(D.material.friction>=0&&B.material.friction>=0&&D.material.friction*B.material.friction,D.material.restitution>=0&&B.material.restitution>=0&&(L.restitution=D.material.restitution*B.material.restitution)),a.addEquation(L),D.allowSleep&&D.type===tt.DYNAMIC&&D.sleepState===tt.SLEEPING&&B.sleepState===tt.AWAKE&&B.type!==tt.STATIC){let K=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),j=B.sleepSpeedLimit**2;K>=j*2&&(D.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===tt.DYNAMIC&&B.sleepState===tt.SLEEPING&&D.sleepState===tt.AWAKE&&D.type!==tt.STATIC){let K=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),j=D.sleepSpeedLimit**2;K>=j*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,B,!0),this.collisionMatrixPrevious.get(D,B)||(ha.body=B,ha.contact=L,D.dispatchEvent(ha),ha.body=D,B.dispatchEvent(ha)),this.bodyOverlapKeeper.set(D.id,B.id),this.shapeOverlapKeeper.set(W.id,X.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Kt.now()-h,h=Kt.now()),v=0;v!==r;v++){let F=o[v];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(w=d.length,v=0;v!==w;v++){let F=d[v];F.update();for(let L=0,D=F.equations.length;L!==D;L++){let B=F.equations[L];a.addEquation(B)}}a.solve(e,this),c&&(u.solve=Kt.now()-h),a.removeAllEquations();let y=Math.pow;for(v=0;v!==r;v++){let F=o[v];if(F.type&f){let L=y(1-F.linearDamping,e),D=F.velocity;D.scale(L,D);let B=F.angularVelocity;if(B){let W=y(1-F.angularDamping,e);B.scale(W,B)}}}this.dispatchEvent(w1),c&&(h=Kt.now());let P=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,P,N);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Kt.now()-h),this.stepnumber+=1,this.dispatchEvent(M1);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==r;v++){let F=o[v];F.sleepTick(this.time),F.sleepState!==tt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Di,Bi),e){for(let r=0,o=Di.length;r<o;r+=2)ua.bodyA=this.getBodyById(Di[r]),ua.bodyB=this.getBodyById(Di[r+1]),this.dispatchEvent(ua);ua.bodyA=ua.bodyB=null}if(t){for(let r=0,o=Bi.length;r<o;r+=2)da.bodyA=this.getBodyById(Bi[r]),da.bodyB=this.getBodyById(Bi[r+1]),this.dispatchEvent(da);da.bodyA=da.bodyB=null}Di.length=Bi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Di,Bi),n){for(let r=0,o=Di.length;r<o;r+=2){let a=this.getShapeById(Di[r]),l=this.getShapeById(Di[r+1]);Ui.shapeA=a,Ui.shapeB=l,a&&(Ui.bodyA=a.body),l&&(Ui.bodyB=l.body),this.dispatchEvent(Ui)}Ui.bodyA=Ui.bodyB=Ui.shapeA=Ui.shapeB=null}if(s){for(let r=0,o=Bi.length;r<o;r+=2){let a=this.getShapeById(Bi[r]),l=this.getShapeById(Bi[r+1]);Oi.shapeA=a,Oi.shapeB=l,a&&(Oi.bodyA=a.body),l&&(Oi.bodyB=l.body),this.dispatchEvent(Oi)}Oi.bodyA=Oi.bodyB=Oi.shapeA=Oi.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Dn;var nd=new Vn,Kt=globalThis.performance||{};if(!Kt.now){let i=Date.now();Kt.timing&&Kt.timing.navigationStart&&(i=Kt.timing.navigationStart),Kt.now=()=>Date.now()-i}new C;var M1={type:"postStep"},w1={type:"preStep"},ha={type:tt.COLLIDE_EVENT_NAME,body:null,contact:null},E1=[],A1=[],T1=[],C1=[],Di=[],Bi=[],ua={type:"beginContact",bodyA:null,bodyB:null},da={type:"endContact",bodyA:null,bodyB:null},Ui={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Oi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var R1=.24,_n=1e-8,yn=i=>Array.isArray(i)?i:[i.x,i.y,i.z],yi=(i,e)=>i.map((t,n)=>t+e[n]),ct=(i,e)=>i.map((t,n)=>t-e[n]),ei=(i,e)=>i.map(t=>t*e),kt=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],nh=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],vs=i=>kt(i,i),qr=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),Xr=(i,e,t)=>Math.max(e,Math.min(t,i)),vi=i=>new C(...yn(i)),Yr=(i,e)=>{let t=2*(e.y*i[2]-e.z*i[1]),n=2*(e.z*i[0]-e.x*i[2]),s=2*(e.x*i[1]-e.y*i[0]);return[i[0]+e.w*t+e.y*s-e.z*n,i[1]+e.w*n+e.z*t-e.x*s,i[2]+e.w*s+e.x*n-e.y*t]},Um=(i,e)=>Yr(i,new Nt(-e.x,-e.y,-e.z,e.w));function xd(i,e){let t=vs(e);if(t<1e-12)return;let n=ei(e,1/Math.sqrt(t));i.some(s=>Math.abs(kt(s,n))>1-1e-7)||i.push(n)}function I1(i){let e=[],t=[],n=[];for(let s of i.faces){let[r,o,a]=s.map(l=>i.vertices[l]);xd(e,nh(ct(o,r),ct(a,r)));for(let l=0;l<s.length;l++)xd(t,ct(i.vertices[s[(l+1)%s.length]],i.vertices[s[l]]));for(let l=1;l<s.length-1;l++)n.push([r,i.vertices[s[l]],i.vertices[s[l+1]]])}return{...i,normals:e,edges:t,triangles:n}}function Om(i,e){return e.faces.every(t=>{let[n,s,r]=t.map(o=>e.vertices[o]);return kt(ct(i,n),nh(ct(s,n),ct(r,n)))<=_n})}function P1(i,e,t,n,s){let r=i.vertices.map(d=>Yr(d,e)),o=i.normals.map(d=>Yr(d,e)),a=i.edges.map(d=>Yr(d,e)),l=[...o,...s.axes];for(let d of a)for(let p of s.axes)xd(l,nh(d,p));let c=ct(t,s.position),u=0,f=1,h=[0,0,0];for(let d of l){let p=r.map(S=>kt(S,d)),x=kt(c,d),m=Math.min(...p)+x,g=Math.max(...p)+x,v=s.half.reduce((S,E,y)=>S+E*Math.abs(kt(s.axes[y],d)),0),w=kt(n,d);if(Math.abs(w)<_n){if(m>v+_n||g<-v-_n)return null;continue}let b=(-v-g)/w,M=(v-m)/w;if(b>M&&([b,M]=[M,b]),b>u&&(u=b,h=ei(d,w>0?-1:1)),f=Math.min(f,M),u>f+_n)return null}return f>=0&&u<=1?{t:Math.max(0,u),normal:h}:null}function md(i,e,t,n=0){let s=ct(i,t.position),r=ct(e,i),o=t.axes.map(u=>kt(s,u)),a=t.axes.map(u=>kt(r,u)),l=0,c=1;for(let u=0;u<3;u++){let f=t.half[u]+n;if(Math.abs(a[u])<_n){if(Math.abs(o[u])>f)return null;continue}let h=(-f-o[u])/a[u],d=(f-o[u])/a[u];if(h>d&&([h,d]=[d,h]),l=Math.max(l,h),c=Math.min(c,d),l>c)return null}return l}function gd(i,e,t,n){let s=ct(t,e),r=ct(n,e),o=ct(i,e),a=kt(s,o),l=kt(r,o);if(a<=0&&l<=0)return e;let c=ct(i,t),u=kt(s,c),f=kt(r,c);if(u>=0&&f<=u)return t;let h=a*f-u*l;if(h<=0&&a>=0&&u<=0)return yi(e,ei(s,a/(a-u)));let d=ct(i,n),p=kt(s,d),x=kt(r,d);if(x>=0&&p<=x)return n;let m=p*l-a*x;if(m<=0&&l>=0&&x<=0)return yi(e,ei(r,l/(l-x)));let g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return yi(t,ei(ct(n,t),(f-u)/(f-u+p-x)));let v=1/(g+m+h);return yi(e,yi(ei(s,m*v),ei(r,h*v)))}function L1(i,e,t,n){let s=ct(e,i),r=ct(n,t),o=ct(i,t),a=kt(s,s),l=kt(s,r),c=kt(r,r),u=kt(s,o),f=kt(r,o);if(a<_n)return{t:0,point:yi(t,ei(r,c>_n?Xr(f/c,0,1):0))};let h=a*c-l*l,d=h>_n?Xr((l*f-c*u)/h,0,1):0,p=c>_n?(l*d+f)/c:0;return p<0?(p=0,d=Xr(-u/a,0,1)):p>1&&(p=1,d=Xr((l-u)/a,0,1)),{t:d,point:yi(t,ei(r,p))}}function N1(i,e,t,n,s){let r=ct(e,i),o=nh(ct(n,t),ct(s,t)),a=kt(o,r);if(Math.abs(a)>_n){let c=kt(o,ct(t,i))/a;if(c>=0&&c<=1){let u=qr(i,e,c),f=gd(u,t,n,s);if(vs(ct(u,f))<1e-12)return{distance2:0,t:c,point:f}}}let l=[{t:0,point:gd(i,t,n,s)},{t:1,point:gd(e,t,n,s)}];for(let[c,u]of[[t,n],[n,s],[s,t]])l.push(L1(i,e,c,u));for(let c of l)c.distance2=vs(ct(qr(i,e,c.t),c.point));return l.reduce((c,u)=>u.distance2<c.distance2?u:c)}function zm(i=dt,e={form:"classic",size:1}){let t=new th({gravity:new C(0,0,0),allowSleep:!0});t.broadphase=new $c(t);let n=[],s=[],r=new Map,o,a,l=[];function c(E){E.position=yn(E.body.position),E.axes=[[1,0,0],[0,1,0],[0,0,1]].map(y=>Yr(y,E.body.quaternion)),E.body.aabbNeedsUpdate=!0,E.body.updateAABB(),E.min=yn(E.body.aabb.lowerBound),E.max=yn(E.body.aabb.upperBound),t.broadphase.dirty=!0}function u(E,y,T="solid",P=[0,0,0],N){let U=new tt({mass:0,shape:new pa(new C(...E.map(L=>L/2))),position:vi(y)});U.quaternion.setFromEuler(...P,"XYZ"),U.kind=T,U.obstacleId=N,t.addBody(U);let F={body:U,half:E.map(L=>L/2),kind:T,id:N};return c(F),s.push(F),F}for(let E of i.obstacles??[])u(E.size,E.position,E.kind??"solid",E.rotation??[0,0,0],E.id);for(let E of i.doors??[]){let y=Vr(E,!1),T=u(y.size,y.position,"door",y.rotation,E.id);r.set(E.id,{door:E,obstacle:T,open:!1})}let f=yn(i.start??[0,1,0]),h=new tt({mass:1,position:vi(f),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});h.kind="plane",t.addBody(h);function d(E="classic",y=1){for(o=ms(E,y),a=o.parts.map(I1);h.shapes.length;)h.removeShape(h.shapes[0]);for(let T of a){let P=[0,1,2].map(N=>T.vertices.reduce((U,F)=>U+F[N],0)/T.vertices.length);h.addShape(new fa({vertices:T.vertices.map(N=>vi(ct(N,P))),faces:T.faces}),vi(P))}return h.updateMassProperties(),h.updateBoundingRadius(),h.aabbNeedsUpdate=!0,l=[],t.broadphase.dirty=!0,o}d(e.form,e.size);function p(E,y=!0){let T=r.get(E);if(!T)return!1;let P=Vr(T.door,y);return T.obstacle.body.position.copy(vi(P.position)),T.obstacle.body.quaternion.setFromEuler(...P.rotation,"XYZ"),T.open=!!y,c(T.obstacle),!0}function x(){for(let E of r.keys())p(E,!1);h.position.copy(vi(f)),h.previousPosition.copy(h.position),h.interpolatedPosition.copy(h.position),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion);for(let E of["velocity","angularVelocity","force","torque"])h[E].setZero();h.collisionFilterMask=-1,h.aabbNeedsUpdate=!0,h.wakeUp(),t.accumulator=0,t.time=0,t.stepnumber=0,t.contacts.length=0,t.frictionEquations.length=0,t.collisionMatrix.reset(),t.collisionMatrixPrevious.reset(),t.broadphase.dirty=!0,l=[]}function m(E,y){let T=o.boundingRadius;return s.filter(P=>[0,1,2].every(N=>Math.min(E[N],y[N])-T<=P.max[N]&&Math.max(E[N],y[N])+T>=P.min[N]))}function g(E,y,T){let P=ct(y,E),N=null;for(let U of m(E,y))for(let F of a){let L=P1(F,T,E,P,U);L&&(!N||L.t<N.t)&&(N={...L,body:U.body})}return N}function v(E,y=h.velocity,T=h.quaternion){if(!Number.isFinite(E)||E<0)throw new TypeError("advance requires a non-negative finite timestep");let P=yn(h.position),N=ei(yn(y),E),U=h.quaternion.clone(),F=new Nt(T.x,T.y,T.z,T.w);F.normalize();let L=2*Math.acos(Xr(Math.abs(U.x*F.x+U.y*F.y+U.z*F.z+U.w*F.w),0,1)),D=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(vs(N))/.12)),Math.ceil(L/.012));h.previousPosition.copy(h.position),h.previousQuaternion.copy(U),h.velocity.copy(vi(y)),l=[];let B=P,W=U,X=null;for(let K=0;K<D;K++){let j=yi(P,ei(N,(K+1)/D)),oe=new Nt,me=new Nt;if(U.slerp(F,(K+.5)/D,oe),U.slerp(F,(K+1)/D,me),h.collisionFilterMask!==0&&(X=g(B,j,oe),!X)){let Xe=g(j,j,me);Xe&&(X={...Xe,t:0})}if(X){let Xe=Math.sqrt(vs(ct(j,B))),Ye=Math.max(0,X.t-(Xe>_n?.001/Xe:0)),$e=qr(B,j,Ye);Ye>0&&(W=oe),l.push({from:B,to:$e,orientation:W}),B=$e;break}l.push({from:B,to:j,orientation:oe}),B=j,W=me}h.position.copy(vi(B)),h.quaternion.copy(W),h.interpolatedPosition.copy(h.position),h.interpolatedQuaternion.copy(h.quaternion),h.aabbNeedsUpdate=!0,t.broadphase.dirty=!0,t.time+=E,t.stepnumber+=D;let H={collided:!!X,body:X?.body??null,normal:X?vi(X.normal):null,steps:D,safePosition:h.position.clone()};return X&&(h.velocity.setZero(),h.dispatchEvent({type:"collide",body:X.body,contact:{bi:h,bj:X.body,ni:vi(X.normal)}})),H}function w(E,y){return E=yn(E),y=yn(y),!s.some(T=>{let P=md(E,y,T);return P!==null&&P<1-1e-6})}function b(E,y=h.previousPosition,T=0){let P=yn(E.position??E),N=Math.max(0,Number(E.collectRadius??R1))+Math.max(0,Number(T)||0),U=yn(y),F=l.length&&vs(ct(U,l[0].from))<1e-8?l:[{from:U,to:yn(h.position),orientation:h.quaternion}];for(let L of F){let D=ct(L.to,L.from),B=vs(D),W=qr(L.from,L.to,B>_n?Xr(kt(ct(P,L.from),D)/B,0,1):0);if(vs(ct(P,W))>(N+o.boundingRadius)**2)continue;let X=Um(ct(P,L.from),L.orientation),H=Um(ct(P,L.to),L.orientation);for(let K of a){if((Om(X,K)||Om(H,K))&&w(P,P))return!0;for(let j of K.triangles){let oe=N1(X,H,...j);if(oe.distance2>N**2+_n)continue;let me=yi(qr(L.from,L.to,oe.t),Yr(oe.point,L.orientation));if(w(me,P))return!0}}}return!1}function M(E,y,T=.18){E=yn(E),y=yn(y);let P=1;for(let L of s){let D=md(E,y,L,T);D!==null&&(P=Math.min(P,Math.max(0,D-.015)))}let[N,U,F]=qr(E,y,P);return{x:N,y:U,z:F}}function S(E){let y=yn(E),T=yi(y,[0,50,0]),P=1/0;for(let N of s){if(!/ceiling|roof|floor|slab/.test(N.kind))continue;let U=md(y,T,N);U!==null&&U>_n&&(P=Math.min(P,y[1]+50*U))}return P}return x(),{world:t,plane:h,blocks:n,level:i,reset:x,configureAircraft:d,setDoorOpen:p,advance:v,canCollectStar:b,hasLineOfSight:w,traceCamera:M,getCeilingAt:S,get aircraft(){return o},doorBodies:r}}var F1=new Map(dt.rooms.map(i=>[i.id,i])),D1=new Set(["cellar-core","stairs","upper-core","attic-core"]),B1=new Map(dt.collectibles.map(i=>{let e=!!i.under,t=F1.get(i.roomId)?.floor==="ug"||D1.has(i.roomId);return[i.id,Object.freeze({id:i.id,roomId:i.roomId,under:e,zone:t,basePoints:150+(e?150:0)+(t?150:0)})]}));function ga(i){let e=typeof i=="string"?i:i?.id,t=B1.get(e);if(!t)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return t}function km(i){if(!Array.isArray(i)||!i.every(e=>typeof e=="string"))throw new Error("Die gesammelten Sterne sind ung\xFCltig.");return[...new Set(i)].reduce((e,t)=>e+ga(t).basePoints,0)}var Vm=Object.freeze(["none","mint","spark","confetti"]);function $r(i){if(i===null)return null;if(typeof i!="string"||!/^#[0-9a-f]{6}$/i.test(i))throw new Error("Bitte w\xE4hle eine g\xFCltige Farbe im Format #RRGGBB.");return i.toLowerCase()}function xa(i,e=null){let t=$r(e);if(t===null)return"#"+i.color.toString(16).padStart(6,"0");let n={"left-wing":1,"right-wing":.9,fuselage:.72,tail:1.06}[i.id]??1;return"#"+[1,3,5].map(s=>Math.min(255,Math.round(parseInt(t.slice(s,s+2),16)*n)).toString(16).padStart(2,"0")).join("")}function Gm(i,e=null,t=null){let n=t?new Je(t):null;i.traverse(s=>{!s.isMesh||s.userData.paperColor===void 0||(s.material.color.set(xa({id:s.name,color:s.userData.paperColor},e)),e===null&&n&&s.material.color.lerp(n,.6))})}var vd=54,yd=28,U1=["#d58c7e","#79c6b2","#e9c774","#a7a0d6"];function Hm(i,{name:e="Flugspur",effect:t="none"}={}){let n=new Float32Array(vd*3),s=new Xt;s.setAttribute("position",new mn(n,3));let r=new Ro(s,new wr({color:"#80d6ba",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1})),o=new Ns(new Zn(1,1,1),new Pn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),yd);r.name=`${e} Linie`,o.name=`${e} Partikel`;for(let S of[r,o])S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,i.add(S);let a=new at,l=new qt,c=new sn,u=new z,f=new z,h=new Je,d="none",p=!1,x=!1;function m(){p=!1,r.visible=o.visible=!1}function g(S){if(m(),!!S){for(let E=0;E<vd;E++)n[E*3]=S.x,n[E*3+1]=S.y,n[E*3+2]=S.z;p=!0,s.attributes.position.needsUpdate=!0}}function v(S="none"){if(S=Vm.includes(S)?S:"none",S!==d){d=S,m(),r.material.color.set(S==="spark"?"#e9bd5e":"#80d6ba");for(let E=0;E<yd;E++)o.setColorAt(E,h.set(S==="confetti"?U1[E%4]:"#f7d581"));o.instanceColor.needsUpdate=!0}}function w(S){if(!x){if(!p||Math.hypot(S.x-n[0],S.y-n[1],S.z-n[2])>1.5){g(S);return}n.copyWithin(3,0,n.length-3),n[0]=S.x,n[1]=S.y,n[2]=S.z,s.attributes.position.needsUpdate=!0}}function b(S=1/60,E=0){let y=p&&Math.hypot(n[0]-n[18],n[1]-n[19],n[2]-n[20])>.035;if(r.visible=y&&(d==="mint"||d==="spark"),o.visible=y&&(d==="spark"||d==="confetti"),!!o.visible){for(let T=0;T<yd;T++){let P=Math.min(vd-1,2+T)*3,N=1-T/32,U=(d==="confetti"?.037:.022)*N*(d==="spark"?.6+.4*Math.sin(E*8+T)**2:1);u.set(n[P]+Math.sin(T*2.4)*.045,n[P+1]+Math.cos(T*1.7)*.035-T*.001,n[P+2]),l.setFromEuler(c.set(E*2+T,T*.7,E*1.4+T)),f.set(U,d==="confetti"?U*.22:U,U),o.setMatrixAt(T,a.compose(u,l,f))}o.instanceMatrix.needsUpdate=!0}}function M(){x||(m(),x=!0,i.remove(r,o),s.dispose(),r.material.dispose(),o.geometry.dispose(),o.material.dispose(),o.dispose())}return v(t),{trail:r,particles:o,setEffect:v,reset:g,push:w,update:b,clear:m,dispose:M,get effect(){return d}}}var ys=1e-7,O1=new Set(["wall","floor","roof"]),Wm={floor:3,wall:2,roof:1},ya=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],va=(i,e)=>i.map((t,n)=>t-e[n]),z1=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],k1=(i,e)=>{let t=ya(i,e.normal)-e.offset;return Math.abs(t)<=ys?0:t};function V1(i){let e=new at().makeRotationFromEuler(new sn(...i.rotation||[0,0,0])).elements,t=[0,1,2].map(o=>e.slice(o*4,o*4+3)),n=i.size.map(o=>o/2),s=[0,1,2].map(o=>t.reduce((a,l,c)=>a+Math.abs(l[o])*n[c],0)),r=[];for(let o=0;o<3;o++)for(let a of[-1,1]){let l=t[o].map(c=>c*a);r.push({normal:l,offset:ya(l,i.position)+n[o]})}return{part:i,axes:t,half:n,planes:r,min:i.position.map((o,a)=>o-s[a]),max:i.position.map((o,a)=>o+s[a])}}function G1(i,e){return i.min.every((t,n)=>t<=e.max[n]+ys&&i.max[n]>=e.min[n]-ys)}function H1(i,e,t){let n=(e+1)%3,s=(e+2)%3,r=i.axes[e].map(l=>l*t),o=[[-1,-1],[1,-1],[1,1],[-1,1]];t<0&&o.reverse();let a=o.map(([l,c])=>i.part.position.map((u,f)=>u+r[f]*i.half[e]+i.axes[n][f]*i.half[n]*l+i.axes[s][f]*i.half[s]*c));return{axis:e,sign:t,normal:r,offset:ya(r,a[0]),polygon:a}}function qm(i){let e=[];for(let t of i){let n=e.at(-1);(!n||Math.hypot(...va(t,n))>ys)&&e.push(t)}return e.length>1&&Math.hypot(...va(e[0],e.at(-1)))<=ys&&e.pop(),e}function W1(i,e){let t=i.map(r=>k1(r,e));if(!t.some(r=>r>0))return{inside:i,outside:[]};if(!t.some(r=>r<0))return{inside:[],outside:i};let n=[],s=[];for(let r=0;r<i.length;r++){let o=i[r],a=i[(r+1)%i.length],l=t[r],c=t[(r+1)%i.length];if(l<=0&&n.push(o),l>=0&&s.push(o),l<0&&c>0||l>0&&c<0){let u=l/(l-c),f=o.map((h,d)=>h+(a[d]-h)*u);n.push(f),s.push(f)}}return{inside:qm(n),outside:qm(s)}}function q1(i,e){let t=Wm[i.kind]-Wm[e.kind];return t>0||t===0&&i.id<e.id}function X1(i,e){return e.planes.some(t=>ya(i.normal,t.normal)>1-1e-12&&Math.abs(i.offset-t.offset)<=ys)}function Y1(i,e){let t=[],n=i;for(let s of e.planes){let r=W1(n,s);if(r.outside.length>=3&&t.push(r.outside),n=r.inside,n.length<3)break}return t}function $1(i,e,t){return e===0?[.5-t*i[2],.5+i[1]]:e===1?[.5+i[0],.5-t*i[2]]:[.5+t*i[0],.5+i[1]]}function Xm(i){let e=i.filter(n=>O1.has(n.kind)).map(V1),t=new Map;for(let n of e){let s=e.filter(c=>c!==n&&G1(n,c)),r=[],o=[],a=[];for(let c=0;c<3;c++)for(let u of[-1,1]){let f=H1(n,c,u),h=[f.polygon];for(let d of s)if(!(X1(f,d)&&q1(n.part,d.part))&&(h=h.flatMap(p=>Y1(p,d)),!h.length))break;for(let d of h)for(let p=1;p<d.length-1;p++){let x=[d[0],d[p],d[p+1]];if(!(Math.hypot(...z1(va(x[1],x[0]),va(x[2],x[0])))<=ys*ys))for(let m of x){let g=va(m,n.part.position),v=n.axes.map((w,b)=>ya(g,w)/n.part.size[b]);r.push(...m),o.push(...f.normal),a.push(...$1(v,c,u))}}}let l=new Xt;l.setAttribute("position",new Ft(r,3)),l.setAttribute("normal",new Ft(o,3)),l.setAttribute("uv",new Ft(a,2)),r.length&&(l.computeBoundingBox(),l.computeBoundingSphere()),t.set(n.part.id,l)}return t}var Z1=(i,e,t)=>Math.max(e,Math.min(t,i)),K1=new Set(["wall","floor","roof"]);function Ym(i,e,t=()=>({width:i.clientWidth,height:i.clientHeight})){let n=e.house||e.level||dt,s=new Fc({canvas:i,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),s.shadowMap.enabled=!0,s.shadowMap.type=Bs,s.outputColorSpace=en,s.toneMapping=$o,s.toneMappingExposure=1.18;let r=new Mo;r.background=new Je("#c9ddd5"),r.fog=new So("#c9ddd5",30,90);let o=new tn(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new Ho("#fff3d9","#718169",2.7));let a=new Yo("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let l=new Xo("#fff1d0",4,11,2);r.add(l);let c=new Map,u=new Set,f=new Set,h=new Zn(1,1,1);u.add(h);let d=new Map;for(let I of["ug","eg","og","dg","garden"]){let le=new Mn;le.name=`Etage ${I}`,d.set(I,le),r.add(le)}let p=new Map,x=[],m=[];function g(I,le={}){let Y=`${I}:${JSON.stringify(le)}`;return c.has(Y)||c.set(Y,new Li({color:I,roughness:.86,flatShading:!0,...le})),c.get(Y)}function v(I=!1){let le=document.createElement("canvas");le.width=le.height=256;let Y=le.getContext("2d");if(Y.fillStyle=I?"#edf4d8":"#fff1dc",Y.fillRect(0,0,256,256),I)for(let _=0;_<1200;_++)Y.fillStyle=_%2?"#d5e0bd":"#eef3d9",Y.fillRect(_*67%256,_*113%256,1,3);else{Y.strokeStyle="#c9b594",Y.lineWidth=1;for(let _=0;_<=256;_+=32){Y.beginPath(),Y.moveTo(0,_),Y.lineTo(256,_),Y.stroke();for(let k=_/32%2*96;k<256;k+=128)Y.beginPath(),Y.moveTo(k,_),Y.lineTo(k,_+32),Y.stroke()}for(let _=0;_<90;_++)Y.fillStyle=_%2?"#dfd0b8":"#e8dbc4",Y.fillRect(_*73%256,_*19%256,12+_%21,1)}let R=new Er(le);return R.colorSpace=en,R.wrapS=R.wrapT=xr,R.repeat.set(3,3),f.add(R),R}let w=v(),b=v(!0),M=new at,S=new qt,E=new sn,y=I=>M.compose(new z(...I.position),S.setFromEuler(E.set(...I.rotation||[0,0,0])),new z(...I.size)),T=Xm(n.obstacles);for(let I of T.values())u.add(I);let P=new Map;for(let I of n.obstacles){let le=d.get(I.floor)||d.get("garden");if(K1.has(I.kind)){let Y=g(I.color).clone();I.kind==="floor"&&(Y.map=I.floor==="garden"?b:w);let R=new Pt(T.get(I.id),Y);R.name=I.id,R.castShadow=I.kind!=="floor",R.receiveShadow=!0,le.add(R)}else{let Y=`${I.floor}|${I.color}|${I.kind==="glass"?"glass":"opaque"}`;P.has(Y)||P.set(Y,{group:le,color:I.color,glass:I.kind==="glass",parts:[]}),P.get(Y).parts.push(I)}}for(let{group:I,color:le,glass:Y,parts:R}of P.values()){let _=new Ns(h,g(le,Y?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),R.length);R.forEach((k,O)=>_.setMatrixAt(O,y(k))),_.instanceMatrix.needsUpdate=!0,_.castShadow=!Y,_.receiveShadow=!0,_.frustumCulled=!1,I.add(_)}let N=new Zn(.54,.23,.012);u.add(N);function U(I){let le=document.createElement("canvas");le.width=256,le.height=112;let Y=le.getContext("2d");Y.fillStyle="#f5e5bc",Y.fillRect(0,0,256,112),Y.strokeStyle="#ad8b58",Y.lineWidth=4,Y.strokeRect(4,4,248,104),Y.fillStyle="#463e30",Y.font="bold 44px system-ui",Y.textAlign="center",Y.textBaseline="middle",Y.fillText(I.signText??`${I.threshold} \u2605`,128,58);for(let O of[15,241])Y.beginPath(),Y.arc(O,56,3,0,Math.PI*2),Y.fill();let R=new Er(le);R.colorSpace=en,f.add(R);let _=g("#ad8b58",{roughness:.7}),k=new Li({map:R,roughness:.85});return[-1,1].map(O=>{let q=new Pt(N,[_,_,_,_,k,_]);return q.name=`${I.id}-sign-${O<0?"back":"front"}`,q.position.set(0,.37,O*(I.size[2]/2+.0065)),q.rotation.y=O<0?Math.PI:0,q.castShadow=q.receiveShadow=!0,q})}for(let I of n.doors){let le=new Mn;le.name=I.id;let Y=new Pt(h,g(I.color||"#b99469"));Y.name=`${I.id}-leaf`,Y.castShadow=Y.receiveShadow=!0;let R=Vr(I,!1);le.position.set(...R.position),le.rotation.set(...R.rotation),Y.scale.set(...R.size),le.add(Y,...U(I)),r.add(le),p.set(I.id,{door:I,mesh:le,leaf:Y,opened:!1})}function F(I,le=!0){let Y=p.get(I);if(!Y)return;Y.opened=!!le;let R=Vr(Y.door,Y.opened);Y.mesh.position.set(...R.position),Y.mesh.rotation.set(...R.rotation),Y.leaf.scale.set(...R.size)}let L=new Mn;L.name="Papierflieger",r.add(L);let D=new Set,B=new Set,W="classic",X=1,H=null,K=Hm(r);function j(I="classic",le=1,Y="none",R=null){let _=ms(I,le);W=_.form,X=_.size,H=$r(R);for(let k of B)k.dispose();B.clear();for(let k of D)k.dispose();D.clear(),L.clear();for(let k of _.parts){let O=[];for(let ee of k.faces)for(let ne=1;ne+1<ee.length;ne++)for(let ge of[ee[0],ee[ne],ee[ne+1]])O.push(...k.vertices[ge]);let q=new Xt;q.setAttribute("position",new Ft(O,3)),q.computeVertexNormals();let de=new Li({color:k.color,roughness:.77,side:On,flatShading:!0}),fe=new Pt(q,de);fe.name=k.id,fe.userData.paperColor=k.color,fe.castShadow=fe.receiveShadow=!0,L.add(fe),B.add(q),D.add(de)}return Gm(L,H),K.setEffect(Y),K.clear(),_}function oe(I=n.start){K.reset(I)}function me(I){K.push(I)}j(),oe(),L.position.set(n.start.x,n.start.y,n.start.z);let Xe=new Mn;Xe.position.set(n.start.x,0,n.start.z),r.add(Xe);let Ye=new Ds(.23,.014,5,28);u.add(Ye);let $e=new Pt(Ye,new Pn({color:"#e5b45f",transparent:!0,opacity:.75}));$e.rotation.x=Math.PI/2,$e.position.y=.045,Xe.add($e);function te(I=0){$e.scale.setScalar(1+Math.max(0,I)*.3),$e.material.opacity=.5+Math.min(1,I)*.45}let ie=new Tr;for(let I=0;I<10;I++){let le=I*Math.PI/5+Math.PI/2,Y=I%2?.052:.115,R=Math.cos(le)*Y,_=Math.sin(le)*Y;I?ie.lineTo(R,_):ie.moveTo(R,_)}ie.closePath();let xe=new ko(ie,{depth:.025,bevelEnabled:!1});u.add(xe);let ke=new Ds(.165,.007,4,22);u.add(ke);let Ae=[new Li({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new Li({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],Ve=[new Pn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Pn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],ut=new Pn({color:"#fff1b7",toneMapped:!1});for(let I of[...Ae,...Ve,ut])c.set(`star-${I.id}`,I);for(let I of n.collectibles){let le=ga(I),Y=new Mn,R=new Pt(xe,Ae[0]),_=[],k=new Mn;Y.name=I.id,Y.position.set(I.x,I.y,I.z),Y.add(R,k);for(let O=0;O<Number(le.under)+Number(le.zone);O++){let q=new Pt(ke,Ve[0]);q.scale.setScalar(1+O*.28),_.push(q),Y.add(q)}for(let O=0;O<3;O++){let q=new Pt(xe,ut),de=O*Math.PI*2/3;q.position.set(Math.cos(de)*.17,Math.sin(de)*.17,.02),q.scale.setScalar(.16),k.add(q)}I.under&&Y.scale.setScalar(.72),r.add(Y),x.push({data:I,mesh:Y,star:R,rings:_,sparkles:k,discovered:!1,collected:!1})}function re(I){let le=[];for(let Y of x)!Y.collected&&I(Y.data)&&(Y.collected=!0,Y.mesh.visible=!1,le.push(Y.data.id));return le}function ce(I=[]){let le=new Set(I);for(let Y of x){Y.collected=!1,Y.mesh.visible=!0,Y.discovered=le.has(Y.data.id),Y.star.material=Ae[Number(Y.discovered)];for(let R of Y.rings)R.material=Ve[Number(Y.discovered)];Y.sparkles.visible=!Y.discovered}}for(let I of n.thermals){let le=new Ds(I.r*.75,.009,4,26);u.add(le);for(let Y=0;Y<7;Y++){let R=new Pt(le,new Pn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));R.rotation.x=Math.PI/2,r.add(R),m.push({mesh:R,thermal:I,phase:Y/7})}}let ue=[];for(let I of e.blocks||[]){let le=new Pt(h,g("#dab87f"));le.scale.set(...I.size),le.castShadow=!0,r.add(le),ue.push(le)}let he={ceiling:!1,distance:1/0,intensity:0};function pe(I){let le=typeof e.getCeilingAt=="function"?e.getCeilingAt(I):1/0;return he.distance=le-I.y,he.ceiling=he.distance<.45,he.intensity=Z1((.55-he.distance)/.5,0,1),he.ceiling}function ze(I=1/60,le=0){let Y=e.plane?.position||L.position,R=la(Y),_=R&&R.floor!=="garden",k=O=>!_||O==="garden"||(fs[O]??-9)<=(fs[R.floor]??0)+3.15;for(let[O,q]of d)q.visible=k(O);for(let O of p.values())O.mesh.visible=k(O.door.floor);for(let O=0;O<x.length;O++){let q=x[O];if(q.collected)continue;let de=n.rooms.find(fe=>fe.id===q.data.roomId);q.mesh.visible=!_||de?.floor===R.floor||de?.floor==="garden",q.mesh.rotation.y=le*(q.discovered?.5:.85)+O*.61,q.mesh.position.y=q.data.y+Math.sin(le*1.7+O)*(q.data.under?.009:.026);for(let fe=0;fe<q.sparkles.children.length;fe++)q.sparkles.children[fe].scale.setScalar(.09+.12*Math.sin(le*3+O+fe*2)**2)}for(let O of m){let q=(le*.18+O.phase)%1;O.mesh.position.set(O.thermal.x,O.thermal.y+q*O.thermal.height,O.thermal.z),O.mesh.material.opacity=Math.sin(q*Math.PI)*.28,O.mesh.visible=Math.abs(O.mesh.position.y-Y.y)<4}for(let O=0;O<ue.length;O++)ue[O].position.copy(e.blocks[O].body.position),ue[O].quaternion.copy(e.blocks[O].body.quaternion);l.position.set(Y.x,Y.y+.6,Y.z),l.intensity=R?.floor==="ug"?7:3,a.target.position.set(Y.x,1,Y.z),a.target.updateMatrixWorld(),a.position.set(Y.x-12,24,Y.z-14),K.update(I,le),pe(Y)}function Fe(){let I=t()||{},le=Math.max(1,I.width||i.clientWidth||1),Y=Math.max(1,I.height||i.clientHeight||1);s.setSize(le,Y,!1),o.aspect=le/Y,o.updateProjectionMatrix()}function We(){s.render(r,o)}Fe(),window.addEventListener("gameviewportchange",Fe);function Ze(){K.dispose(),window.removeEventListener("gameviewportchange",Fe);let I=new Set([...c.values(),...D]),le=new Set([...u,...B]);r.traverse(Y=>{if(Y.geometry&&le.add(Y.geometry),Y.material)for(let R of Array.isArray(Y.material)?Y.material:[Y.material])I.add(R);Y.shadow?.map&&Y.shadow.map.dispose()});for(let Y of le)Y.dispose();for(let Y of I)Y.dispose();for(let Y of f)Y.dispose();r.clear(),s.dispose()}return{renderer:s,scene:r,camera:o,plane:L,sling:Xe,effects:K,thermals:n.thermals,update:ze,setAircraft:j,setDoorOpen:F,collectStars:re,resetCollectibles:ce,resetTrail:oe,updateTrail:me,updateSling:te,updateCeiling:pe,warnings:he,render:We,resize:Fe,dispose:Ze,totalCollectibles:x.length,get collected(){return x.filter(I=>I.collected).length},get aircraft(){return{form:W,size:X,effect:K.effect,color:H}},sync:()=>ze(1/60,0),wind:I=>ze(1/60,I),collect:I=>re(le=>Math.hypot(le.x-I.x,le.y-I.y,le.z-I.z)<=le.radius).length}}var ba=250,_d="stubenflieger.house-profile.v1",_s=Object.freeze({min:.55,max:1.5,step:.05}),J1=[{id:"upgrade:size",category:"upgrades",name:"Verstellbare Gr\xF6\xDFe",price:1800,description:"55\u2013150 %: Gro\xDF gleitet l\xE4nger, klein kurvt enger und passt durch kleine L\xFCcken. Die Hitbox w\xE4chst mit."},{id:"upgrade:color",category:"colors",name:"Eigene Flugzeugfarbe",price:2e3,description:"Einmal freischalten, danach jede Farbe kostenlos w\xE4hlen. Die Original-Papierfarbe kannst du jederzeit wiederherstellen."},{id:"boost:lift",category:"boosts",name:"Aufwind",price:800,description:"Ein kurzer H\xF6hengewinn. Ein Einsatz in jedem Run."},{id:"boost:turbo",category:"boosts",name:"Turbo",price:1e3,description:"Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run."},{id:"boost:magnet",category:"boosts",name:"Sternmagnet",price:1400,description:"Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run."},{id:"boost:cushion",category:"boosts",name:"Luftpolster",price:1600,description:"F\xE4ngt nach der Aktivierung eine leichte Ber\xFChrung ab. Ein Einsatz in jedem Run."},{id:"plane:classic",category:"planes",name:"Klassiker",price:0,description:"Gerade Fl\xFCgelenden und ausgewogenes Flugverhalten."},{id:"plane:glider",category:"planes",name:"Gleiter",price:1200,description:"Breite, gerundete Fl\xFCgel. L\xE4ngeres Gleiten und gem\xFCtlicheres Tempo."},{id:"plane:dart",category:"planes",name:"Pfeil",price:1800,description:"Spitze Dreiecksform, h\xF6heres Tempo und weitere Kurven."},{id:"plane:stunt",category:"planes",name:"Kunstflieger",price:2500,description:"Gerade, kantige Fl\xFCgel und ein eckiges Leitwerk f\xFCr enge Kurven."},{id:"effect:none",category:"effects",name:"Ohne Effekt",price:0,description:"Die schlichte Papieroptik."},{id:"effect:mint",category:"effects",name:"Minzspur",price:300,description:"Eine dezente t\xFCrkise Flugspur."},{id:"effect:spark",category:"effects",name:"Sternenstaub",price:700,description:"Goldenes Funkeln hinter deinem Flieger."},{id:"effect:confetti",category:"effects",name:"Konfettispur",price:1e3,description:"Eine bunte Spur f\xFCr deinen Hausflug."}],Sa=Object.freeze([...J1,...dt.doors.map((i,e)=>({id:`door:${i.id}`,category:"doors",name:i.name||i.id,price:Math.min(4e3,500+e*200),description:"Bei jedem Run von Anfang an offen, solange du gekaufte T\xFCren aktiviert hast."}))].map(Object.freeze)),_a=new Map(Sa.map(i=>[i.id,i])),bd=new Map(dt.rooms.map(i=>[i.id,i.bonusId||i.id]));for(let i of bd.values())bd.set(i,i);var j1=dt.startRoomId||dt.startRoom||dt.rooms[0].id,ih=i=>JSON.parse(JSON.stringify(i));function sh(i={}){if(i.practice===!0)return 0;let e=r=>Number.isInteger(r)&&r>0?r:0,t=Number.isFinite(i.seconds)?Math.min(60,Math.max(0,i.seconds)):0,n=new Set(Array.isArray(i.roomIds)?i.roomIds.map(r=>bd.get(r)).filter(r=>r&&r!==j1):[]);return(Object.hasOwn(i,"starIds")?km(i.starIds):e(i.stars)*150)+e(i.blocks)*100+Math.floor(t*10)+n.size*ba}function Km(){return{version:2,points:0,highscore:0,owned:["plane:classic","effect:none"],equipped:{form:"classic",effect:"none",boosts:[],size:1,color:null},useDoorUnlocks:!0,creditedRuns:[],discoveredStarIds:[]}}function $m(i){if(i===null)return Km();let e;try{e=JSON.parse(i)}catch{throw new Error("Dein gespeichertes Profil ist besch\xE4digt. Es wird nicht \xFCberschrieben.")}if(!e||![1,2].includes(e.version)||!Number.isSafeInteger(e.points)||e.points<0||!Number.isSafeInteger(e.highscore)||e.highscore<0||!Array.isArray(e.owned)||!e.owned.every(c=>typeof c=="string")||!Array.isArray(e.creditedRuns)||!e.creditedRuns.every(c=>typeof c=="string")||!e.equipped||e.version===2&&(!Array.isArray(e.discoveredStarIds)||!e.discoveredStarIds.every(c=>typeof c=="string")))throw new Error("Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht \xFCberschrieben.");let t=[...new Set(["plane:classic","effect:none",...e.owned])],n=e.equipped,s=_a.has(`plane:${n.form}`)&&t.includes(`plane:${n.form}`)?n.form:"classic",r=_a.has(`effect:${n.effect}`)&&t.includes(`effect:${n.effect}`)?n.effect:"none",o=[...new Set(Array.isArray(n.boosts)?n.boosts:[])].filter(c=>_a.has(`boost:${c}`)&&t.includes(`boost:${c}`)).slice(0,2),a=t.includes("upgrade:size")&&Number.isFinite(n.size)?Math.min(_s.max,Math.max(_s.min,n.size)):1,l=null;if(t.includes("upgrade:color"))try{l=$r(n.color??null)}catch{}return{version:2,points:e.points,highscore:e.highscore,owned:t,equipped:{form:s,effect:r,boosts:o,size:a,color:l},useDoorUnlocks:e.useDoorUnlocks!==!1,creditedRuns:[...new Set(e.creditedRuns)],discoveredStarIds:e.version===2?[...new Set(e.discoveredStarIds)]:[]}}function Zm(i){if(typeof i!="string"||i.length<8||i.length>100)throw new Error("Dieser Run konnte nicht zugeordnet werden.")}function Jm(i){let e=Km(),t=null,n="Speichern im Browser ist gerade nicht m\xF6glich. Punkte und K\xE4ufe wurden nicht ver\xE4ndert. Bitte erlaube Website-Daten und versuche es erneut.";try{i||(i=globalThis.localStorage),e=$m(i.getItem(_d))}catch(c){t=c.message?.includes("Profil")?c.message:n}function s(){if(!i)throw new Error(n);try{e=$m(i.getItem(_d)),t=null}catch(c){throw t=c.message?.includes("Profil")?c.message:n,new Error(t)}}function r(c){try{i.setItem(_d,JSON.stringify(c))}catch{throw t=n,new Error(t)}e=c,t=null}function o(){let{creditedRuns:c,...u}=e;return ih(u)}function a(c){s();let u=ih(e);return c(u),r(u),o()}function l(c,u){if(!c.owned.includes(u)||!_a.has(u))throw new Error("Bitte schalte diesen Artikel zuerst frei.")}return{getProfile:o,getStatus:()=>({available:!t,error:t}),refresh:()=>(s(),o()),purchase(c){return a(u=>{let f=_a.get(c);if(!f)throw new Error("Diesen Artikel gibt es nicht.");if(u.owned.includes(c))throw new Error("Dieser Artikel ist bereits dauerhaft freigeschaltet.");if(u.points<f.price)throw new Error("Daf\xFCr fehlen noch Punkte.");u.points-=f.price,u.owned.push(c)})},equipForm(c){return a(u=>{l(u,`plane:${c}`),u.equipped.form=c})},equipEffect(c){return a(u=>{l(u,`effect:${c}`),u.equipped.effect=c})},setColor(c){return c=$r(c),a(u=>{c!==null&&l(u,"upgrade:color"),u.equipped.color=c})},equipBoosts(c){return a(u=>{if(!Array.isArray(c)||c.length>2||new Set(c).size!==c.length)throw new Error("W\xE4hle h\xF6chstens zwei verschiedene Boosts.");c.forEach(f=>l(u,`boost:${f}`)),u.equipped.boosts=[...c]})},setSize(c){return a(u=>{if(l(u,"upgrade:size"),!Number.isFinite(c)||c<_s.min||c>_s.max)throw new Error("W\xE4hle eine Gr\xF6\xDFe zwischen 55 und 150 %.");u.equipped.size=Math.round(c*100)/100})},setPermanentDoorsEnabled(c){return a(u=>{u.useDoorUnlocks=!!c})},creditStar(c,u){Zm(c);let f=ga(u);s();let h=!e.discoveredStarIds.includes(f.id),d=h?f.basePoints:0;if(h){let p=ih(e);if(!Number.isSafeInteger(p.points+d))throw new Error("Das Punkteguthaben ist zu gro\xDF.");p.points+=d,p.discoveredStarIds.push(f.id),r(p)}return{starId:f.id,firstDiscovery:h,basePoints:f.basePoints,bonus:d,totalPoints:f.basePoints+d,credited:d,points:e.points,duplicate:!h}},creditRun(c,u){if(Zm(c),u?.practice===!0)return{credited:0,points:e.points,score:0,practice:!0};s();let f=sh(u);if(!Number.isSafeInteger(f))throw new Error("Dieses Flugergebnis ist ung\xFCltig.");if(e.creditedRuns.includes(c))return{credited:0,points:e.points,score:f,duplicate:!0};let h=ih(e);if(!Number.isSafeInteger(h.points+f))throw new Error("Das Punkteguthaben ist zu gro\xDF.");return h.points+=f,h.highscore=Math.max(h.highscore,f),h.creditedRuns.push(c),r(h),{credited:f,points:h.points,score:f,duplicate:!1}}}}function jm(i,e,t=globalThis.crypto.randomUUID(),{practice:n=!1}={}){let s=new Set,r=new Set,o=new Set,a=new Set(i.collectibles.map(p=>p.id)),l=new Map(i.rooms.map(p=>[p.id,p.bonusId||p.id])),c=new Set(l.values()),u=i.startRoomId||i.startRoom||i.rooms[0].id;r.add(u);let f=new Set(e.owned||[]);if(n)for(let p of i.doors)o.add(p.id);else if(e.useDoorUnlocks!==!1)for(let p of i.doors)f.has(`door:${p.id}`)&&o.add(p.id);let h=[...new Set(e.equipped?.boosts||[])].filter(p=>f.has(`boost:${p}`)).slice(0,2),d=new Set;return{id:t,practice:n,stars:s,visited:r,opened:o,charges:h,used:d,collect(p){if(!a.has(p)||s.has(p))return null;s.add(p);let x=i.doors.filter(m=>!o.has(m.id)&&s.size>=m.threshold);for(let m of x)o.add(m.id);return x},enterRoom(p){return p=l.get(p)||p,!c.has(p)||r.has(p)?!1:(r.add(p),!0)},useBoost(p){let x=h[p];return!x||d.has(x)?null:(d.add(x),x)},nextDoor(){return i.doors.filter(p=>!o.has(p.id)).sort((p,x)=>p.threshold-x.threshold)[0]||null},summary(p=0,x=0){return{stars:s.size,starIds:[...s],blocks:x,seconds:p,roomIds:[...r].filter(m=>m!==u),complete:s.size===a.size,...n?{practice:!0}:{}}}}}var Q1=[["upgrades","Gr\xF6\xDFe"],["doors","T\xFCren"],["boosts","Boosts"],["planes","Flugzeuge"],["colors","Farben"],["effects","Effekte"]],rh=i=>i.toLocaleString("de-DE");function Ut(i,e,t){let n=document.createElement(i);return e!==void 0&&(n.textContent=e),t&&(n.className=t),n}function Sd(i,e,t=null){let n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg");s.setAttribute("viewBox","-0.29 -0.22 0.58 0.44"),s.setAttribute("class","aircraft-preview"),s.setAttribute("role","img"),s.setAttribute("aria-label",`${e} \u2013 Form von oben`);let r=ms(i).parts.flatMap(o=>o.faces.map(a=>{let l=a.map(d=>o.vertices[d]),[c,u,f]=l,h=(u[2]-c[2])*(f[0]-c[0])-(u[0]-c[0])*(f[2]-c[2]);return{vertices:l,normalY:h,color:xa(o,t),height:l.reduce((d,p)=>d+p[1],0)/l.length}})).filter(o=>o.normalY>1e-9).sort((o,a)=>o.height-a.height);for(let o of r){let a=document.createElementNS(n,"polygon");a.setAttribute("points",o.vertices.map(l=>`${l[0]},${l[2]}`).join(" ")),a.setAttribute("fill",o.color),a.setAttribute("stroke","#a99771"),a.setAttribute("stroke-width",".0012"),a.setAttribute("stroke-linejoin","round"),s.append(a)}return s}function Qm({container:i,progression:e,onChange:t=()=>{},onClose:n=()=>{}}){let s="upgrades",r="";function o(c,u,f){try{let h=c();r=u,t(h)}catch(h){r=h.message}l(f)}function a(c,u,f){let h=Ut("button",c,"shop-action");return h.type="button",h.dataset.shopFocus=f,h.addEventListener("click",u),h}function l(c){let u=e.getProfile();try{u=e.refresh()}catch(x){r=x.message}i.replaceChildren();let f=Ut("div",void 0,"shop-wallet");f.append(Ut("strong",`${rh(u.points)} Punkte`),Ut("span",`Dein Rekord: ${rh(u.highscore)} Punkte`)),i.append(f,Ut("p","Alles bleibt freigeschaltet. Dein Guthaben, deine K\xE4ufe und deine Ausr\xFCstung werden nur in diesem Browser gespeichert. Beim L\xF6schen der Website-Daten gehen sie verloren.","shop-note"));let h=Ut("nav",void 0,"shop-tabs");h.setAttribute("aria-label","Shop-Bereiche"),Q1.forEach(([x,m])=>{let g=a(m,()=>{s=x,r="",l(`category:${x}`)},`category:${x}`);g.setAttribute("aria-pressed",String(s===x)),h.append(g)}),i.append(h);let d=Ut("p",r||e.getStatus().error||"Einmal kaufen, in jedem Run benutzen.","shop-status");if(d.setAttribute("role","status"),d.setAttribute("aria-live","polite"),i.append(d),s==="doors"){let x=Ut("label",void 0,"shop-setting"),m=document.createElement("input");m.type="checkbox",m.checked=u.useDoorUnlocks,m.dataset.shopFocus="doors-enabled",m.addEventListener("change",()=>o(()=>e.setPermanentDoorsEnabled(m.checked),m.checked?"Gekaufte T\xFCren sind ab dem n\xE4chsten Run offen.":"Der n\xE4chste Run startet wieder mit geschlossenen T\xFCren.","doors-enabled")),x.append(m,document.createTextNode("Gekaufte T\xFCren beim Start \xF6ffnen")),i.append(x,Ut("p","Sterne \xF6ffnen weitere T\xFCren im laufenden Run. F\xFCr jeden erstmals besuchten Raum gibt es 250 Punkte. Startzimmer und bereits offene T\xFCren allein geben keinen Bonus.","shop-note"))}if(s==="boosts"&&i.append(Ut("p",`W\xE4hle bis zu zwei Boosts (${u.equipped.boosts.length}/2). Jeder ausger\xFCstete Boost ist in jedem Run einmal einsetzbar und wird beim n\xE4chsten Start aufgef\xFCllt.`,"shop-note")),s==="upgrades"&&u.owned.includes("upgrade:size")){let x=Ut("label",void 0,"shop-size");x.htmlFor="plane-size";let m=Ut("output",`${Math.round(u.equipped.size*100)} %`);m.htmlFor="plane-size",x.append(document.createTextNode("Flugzeuggr\xF6\xDFe "),m);let g=document.createElement("input");g.id="plane-size",g.type="range",g.min=_s.min,g.max=_s.max,g.step=_s.step,g.value=u.equipped.size,g.dataset.shopFocus="size",g.setAttribute("aria-valuetext",`${Math.round(u.equipped.size*100)} Prozent`),g.addEventListener("input",()=>{m.textContent=`${Math.round(Number(g.value)*100)} %`,g.setAttribute("aria-valuetext",`${Math.round(Number(g.value)*100)} Prozent`)}),g.addEventListener("change",()=>o(()=>e.setSize(Number(g.value)),"Gr\xF6\xDFe gespeichert. Sie gilt ab dem n\xE4chsten Run.","size")),i.append(x,g,Ut("p","Klein: wendiger, schmale L\xFCcken. Gro\xDF: l\xE4ngeres Gleiten, mehr Spannweite. Form und Kollisionsfl\xE4che \xE4ndern sich gemeinsam.","shop-note"))}let p=Ut("div",void 0,"shop-grid");s==="planes"&&p.classList.add("aircraft-grid"),s==="colors"&&p.classList.add("color-grid"),Sa.filter(x=>x.category===s).forEach(x=>{let m=Ut("article",void 0,"shop-card"),g=u.owned.includes(x.id);m.append(Ut("h3",x.name)),x.category==="planes"&&m.append(Sd(x.id.split(":")[1],x.name,u.equipped.color));let v;if(x.category==="colors"&&(v=Sd(u.equipped.form,"Dein Flugzeug",u.equipped.color),v.id="color-preview",v.classList.add("shop-color-preview"),m.append(v)),m.append(Ut("p",x.description),Ut("strong",g?"Dauerhaft freigeschaltet":`${rh(x.price)} Punkte`,"shop-price")),g){if(x.category==="colors"){m.append(Ut("p",u.equipped.color?`Ausger\xFCstete Farbe: ${u.equipped.color}`:"Ausger\xFCstet: Original-Papierfarbe","shop-color-current"));let w=Ut("label","W\xE4hle deine Flugzeugfarbe","shop-color-label");w.htmlFor="plane-color";let b=Ut("div",void 0,"shop-color-controls"),M=document.createElement("input");M.type="color",M.id="plane-color",M.dataset.shopFocus="color:picker",M.value=u.equipped.color||xa(ms(u.equipped.form).parts[0]);let S=Ut("output",M.value,"shop-color-code");S.id="plane-color-hex",S.htmlFor="plane-color";let E=a("Farbe \xFCbernehmen",()=>o(()=>e.setColor(M.value),"Flugzeugfarbe gespeichert. Weitere Farbwechsel sind kostenlos.","color:apply"),"color:apply");E.id="color-apply",E.disabled=!e.getStatus().available||M.value===u.equipped.color,M.disabled=!e.getStatus().available,M.addEventListener("input",()=>{S.textContent=M.value;let T=Sd(u.equipped.form,"Vorschau deiner Flugzeugfarbe",M.value);T.id="color-preview",T.classList.add("shop-color-preview"),v.replaceWith(T),v=T,E.disabled=!e.getStatus().available||M.value===u.equipped.color});let y=a("Original-Papierfarbe",()=>o(()=>e.setColor(null),"Original-Papierfarbe wiederhergestellt.","color:reset"),"color:reset");y.id="color-reset",y.disabled=u.equipped.color===null||!e.getStatus().available,b.append(M,S),m.append(w,b,Ut("p","Die Vorschau zeigt deine aktuelle Flugzeugform. \xDCbernehmen speichert deine Auswahl kostenlos.","shop-note"),E,y)}else if(x.category==="planes"||x.category==="effects"){let w=x.id.split(":")[1],b=x.category==="planes",M=(b?u.equipped.form:u.equipped.effect)===w,S=a(M?"Ausger\xFCstet":"Ausr\xFCsten",()=>o(()=>b?e.equipForm(w):e.equipEffect(w),`${x.name} ausger\xFCstet.`,x.id),x.id);S.disabled=M,m.append(S)}else if(x.category==="boosts"){let w=x.id.split(":")[1],b=u.equipped.boosts.includes(w),M=a(b?"Ablegen":"Ausr\xFCsten",()=>{let S=b?u.equipped.boosts.filter(E=>E!==w):[...u.equipped.boosts,w];o(()=>e.equipBoosts(S),b?`${x.name} abgelegt.`:`${x.name} ausger\xFCstet.`,x.id)},x.id);M.disabled=!b&&u.equipped.boosts.length>=2,m.append(M)}}else{let w=a("Dauerhaft freischalten",()=>o(()=>e.purchase(x.id),`${x.name} ist dauerhaft freigeschaltet.`,x.id),x.id);w.disabled=u.points<x.price||!e.getStatus().available,m.append(w),u.points<x.price&&m.append(Ut("small",`Noch ${rh(x.price-u.points)} Punkte`))}p.append(m)}),i.append(p,a("Zur\xFCck zum Start",n,"close")),c&&([...i.querySelectorAll("[data-shop-focus]")].find(m=>m.dataset.shopFocus===c&&!m.disabled)||h.querySelector('[aria-pressed="true"]'))?.focus()}return{render:l,destroy:()=>i.replaceChildren()}}var ot=i=>document.getElementById(i);async function Md(i,e={}){let t=await fetch(i,{...e,signal:AbortSignal.timeout(1e4)}),n=await t.json();if(!t.ok)throw new Error(n.error||"Die Bestenliste ist gerade nicht erreichbar.");return n}function eg(){let i=null,e=null,t=0;try{ot("pilot-name").value=localStorage.getItem("stubenflieger.pilot")||""}catch{}function n(){i=e=null,ot("save-score").disabled=!0,ot("pilot-name").disabled=!0,ot("score-status").textContent=""}function s(){i=Md("/api/house-runs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scoreVersion:2})}).then(a=>a.run).catch(()=>null),e=null}function r({blocks:a,stars:l,starIds:c,seconds:u,roomIds:f,complete:h,practice:d}){if(d){n();return}e={blocks:a,stars:l,starIds:[...c],flightMs:Math.floor(u*1e3),roomIds:[...f],complete:!!h,ticket:i,saved:!1},ot("save-score").disabled=u<.5,ot("save-score").textContent="Eintragen",ot("pilot-name").disabled=!1,ot("score-status").textContent=u<.5?"Dieser Flug war zu kurz f\xFCr die Bestenliste.":"Trage deinen Flug mit einem frei gew\xE4hlten Pilotnamen ein."}async function o(){let a=++t,l=document.activeElement;!ot("leaderboard").hidden&&(l===ot("refresh-leaderboard")||ot("ranking-table").contains(l))&&ot("close-leaderboard").focus(),ot("leaderboard-status").textContent="Bestenliste wird geladen \u2026",ot("ranking-table").hidden=!0,ot("refresh-leaderboard").disabled=!0;try{let{entries:c}=await Md("/api/house-leaderboard?scoreVersion=2");if(a!==t)return;ot("ranking-body").replaceChildren(),c.forEach((u,f)=>{let h=document.createElement("tr");for(let d of[f+1,u.name,`${u.rooms} R\xE4ume \xB7 ${u.stars} \u2605 \xB7 ${(u.flightMs/1e3).toFixed(1)} s${u.complete?" \xB7 Haus geschafft":""}`,u.points.toLocaleString("de-DE")]){let p=document.createElement("td");p.textContent=String(d),h.append(p)}ot("ranking-body").append(h)}),ot("ranking-table").hidden=c.length===0,ot("leaderboard-status").textContent=c.length?"Die 20 besten Hausfl\xFCge \xB7 gewichtete Sternpunkte \xB7 ohne Erstfund-Bonus":"Noch keine Hausfl\xFCge mit der neuen Sternwertung eingetragen. Fliege die erste Bestmarke!"}catch{a===t&&(ot("leaderboard-status").textContent="Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal.")}finally{a===t&&(ot("refresh-leaderboard").disabled=!1)}}return ot("refresh-leaderboard").onclick=()=>{o()},ot("score-form").addEventListener("submit",async a=>{if(a.preventDefault(),!e||e.saved)return;let l=e,c=ot("pilot-name").value.trim();document.activeElement===ot("save-score")&&ot("pilot-name").focus(),ot("save-score").disabled=!0,ot("score-status").textContent="Dein Flug wird eingetragen \u2026";try{let u=await l.ticket;if(l!==e)return;if(!u)throw new Error("Dieser Flug konnte nicht online gestartet werden. Pr\xFCfe deine Verbindung und fliege noch eine Runde.");let f=await Md("/api/house-leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({run:u,name:c,scoreVersion:2,starIds:l.starIds,blocks:l.blocks,stars:l.stars,flightMs:l.flightMs,roomIds:l.roomIds,complete:l.complete})});if(l!==e)return;l.saved=!0,ot("save-score").textContent="\u2713 Gespeichert",!ot("result").hidden&&document.activeElement===ot("pilot-name")&&ot("result-leaderboard").focus(),ot("pilot-name").disabled=!0,ot("score-status").textContent=`${f.points.toLocaleString("de-DE")} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;try{localStorage.setItem("stubenflieger.pilot",c)}catch{}}catch(u){l===e&&(ot("score-status").textContent=u.message,ot("save-score").disabled=!1)}}),{beginRun:s,setResult:r,clearResult:n,refresh:o}}var ew=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),tg='input,textarea,select,[contenteditable]:not([contenteditable="false"])';function ng({window:i,document:e,keys:t,getState:n,getDialog:s,launcher:r,actions:o}){let a=!1;function l(){t.clear(),a=!1,o.cancelCharge()}function c(d){if(d.defaultPrevented||d.isComposing||d.ctrlKey||d.altKey||d.metaKey)return;let p=s();if(d.code==="Tab"){l(),!p&&n()==="flying"&&(d.preventDefault(),o.pause());return}if(d.code==="Escape"){if(d.preventDefault(),d.repeat)return;l(),p==="leaderboard"?o.closeBoard():p==="shop"?o.closeShop?.():p==="menu"?o.closeMenu():p==="result"?o.reset():p!=="error"&&o.pause();return}if(d.target.closest?.(tg)||p==="error")return;if(d.code==="KeyV"&&!p){d.preventDefault(),d.repeat||o.camera?.();return}let m={KeyR:"reset",KeyM:p==="menu"?"closeMenu":p==="leaderboard"?"closeBoard":p==="shop"?"closeShop":"menu",KeyB:"board",KeyT:"sound",KeyG:p==="shop"?"closeShop":"shop"}[d.code];if(m&&o[m]){d.preventDefault(),d.repeat||(l(),o[m]());return}if(d.code==="KeyP"){(!p||p==="paused")&&(d.preventDefault(),d.repeat||(l(),o.pause()));return}if(p)return;if((d.code==="Digit1"||d.code==="Digit2")&&n()==="flying"){d.preventDefault(),d.repeat||o.boost?.(d.code==="Digit1"?0:1);return}let g=d.target.closest?.('button,a[href],[role="button"]');if(d.code==="Space"){if(g&&g!==r)return;d.preventDefault(),!d.repeat&&n()==="ready"&&(a=o.beginCharge()===!0);return}if(d.code==="Enter"){!g&&n()==="ready"&&(d.preventDefault(),d.repeat||o.quickLaunch());return}ew.has(d.code)&&(n()==="ready"||n()==="flying")&&(d.preventDefault(),t.add(d.code))}function u(d){t.delete(d.code),d.code==="Space"&&a&&(d.preventDefault(),a=!1,!s()&&n()==="ready"&&!d.target.closest?.(tg)?o.release():o.cancelCharge())}function f(){l(),o.suspend()}function h(){e.hidden&&f()}return e.addEventListener("keydown",c),e.addEventListener("keyup",u),i.addEventListener("blur",f),e.addEventListener("visibilitychange",h),{clear:l,destroy(){l(),e.removeEventListener("keydown",c),e.removeEventListener("keyup",u),i.removeEventListener("blur",f),e.removeEventListener("visibilitychange",h)}}}function ig(i,e){let t=[...e.querySelectorAll(".modal")],n='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])',s=null;function r(){return s?[...s.querySelectorAll(n)].filter(l=>!l.closest("[hidden],[inert]")&&l.getClientRects().length):[]}function o(l){(l||r()[0]||s)?.focus({preventScroll:!1})}function a(l,c){s=l?i.getElementById(l):null;for(let u of t)u.hidden=u!==s,u.tabIndex=-1;for(let u of e.children)u.inert=!!s&&u!==s;o(c)}return i.addEventListener("keydown",l=>{if(!s||l.key!=="Tab")return;let c=r(),u=c[0],f=c.at(-1),h=i.activeElement;c.length?c.includes(h)?l.shiftKey&&h===u?(l.preventDefault(),o(f)):!l.shiftKey&&h===f&&(l.preventDefault(),o(u)):(l.preventDefault(),o(l.shiftKey?f:u)):(l.preventDefault(),o(s))}),i.addEventListener("focusin",l=>{s&&!s.contains(l.target)&&o()}),{open:a,close(l){a(null,l)},current(){return s?.id??null}}}function sg(i,{traceCamera:e=(a,l)=>l,mode:t="chase",chaseDistance:n=1.45,chaseHeight:s=.62,lookAhead:r=1.3,levelChase:o=!0}={}){let a=i.near,l=new z,c=new z,u=new z,f=new z,h=new qt,d=new z,p=t==="fpv"?"fpv":"chase",x=!1,m=null,g=.008;function v(S){let E=S==="fpv"?"fpv":"chase";E!==p&&(p=E,x=!1);let y=p==="fpv"?g:a;return i.near!==y&&(i.near=y,i.updateProjectionMatrix()),p}function w(){x=!1,m=null}function b({position:S,quaternion:E,heading:y,length:T=.33,model:P,id:N=P},{dt:U=1/60,immediate:F=!1,ready:L=!1}={}){N!==m&&(x=!1,m=N);let D=Number.isFinite(T)&&T>0?T:.33;if(g=Math.min(.012,D*.025),v(p),h.copy(E).normalize(),p==="fpv"){d.set(0,D*.14,-D*.12).applyQuaternion(h),c.copy(S).add(d),i.position.copy(e(S,c,.015)),i.quaternion.copy(h),x=!0;return}if(i.up.set(0,1,0),l.set(0,0,-1).applyQuaternion(h),o&&(Number.isFinite(y)?l.set(Math.sin(y),0,-Math.cos(y)):(l.y=0,l.normalize())),c.copy(S).addScaledVector(l,L?-.42:-n),L&&(c.x-=1.25),c.y+=L?.95:s,c.copy(e(S,c,.12)),u.copy(S).addScaledVector(l,L?.25:r),u.y+=.08,F||!x)i.position.copy(c),f.copy(u),x=!0;else{let B=1-Math.exp(-Math.max(0,Math.min(.1,U))*9);i.position.lerp(c,B),f.lerp(u,B)}i.position.copy(e(S,i.position,.1)),i.lookAt(f)}function M(){w(),i.near=a,i.updateProjectionMatrix()}return v(p),{setMode:v,update:b,reset:w,dispose:M,get mode(){return p}}}var rg="stubenflieger.camera.v1";function og(){try{return localStorage.getItem(rg)==="fpv"?"fpv":"chase"}catch{return"chase"}}function ag(i){try{localStorage.setItem(rg,i==="fpv"?"fpv":"chase")}catch{}}function wd(i,e){i.textContent=e==="fpv"?"FPV":"Au\xDFen",i.setAttribute("aria-pressed",String(e==="fpv")),i.setAttribute("aria-label",e==="fpv"?"Zur Au\xDFenansicht wechseln (V)":"Zur FPV-Ansicht wechseln (V)"),i.title=e==="fpv"?"FPV aktiv \xB7 V: Au\xDFenansicht":"Au\xDFenansicht aktiv \xB7 V: FPV"}var tw=.25,nw=1,Ed=.5,zi=1e-8,oh=(i,e,t)=>Math.max(e,Math.min(t,i)),Zr=i=>new C(...["x","y","z"].map(e=>Number.isFinite(i?.[e])?oh(i[e],-100,100):0)),ah=i=>({x:i.x,y:i.y,z:i.z}),iw=i=>{let e=new Nt(i?.x??0,i?.y??0,i?.z??0,i?.w??1);return![e.x,e.y,e.z,e.w].every(Number.isFinite)||e.x**2+e.y**2+e.z**2+e.w**2<zi?new Nt:(e.normalize(),e)};function lh(i=Ed){return typeof i=="number"&&Number.isFinite(i)?oh(i,tw,nw):Ed}function lg(i,e=Ed){return typeof i=="number"&&Number.isFinite(i)?Math.max(0,i)*lh(e):0}function sw(i,e){let t=Zr(i),n=Zr(e);return n.lengthSquared()<zi?ah(t.scale(-1)):(n.normalize(),ah(t.vsub(n.scale(2*Math.min(0,t.dot(n))))))}function cg(i,{bounds:e=i.level?.bounds}={}){let t=i.plane,n=null,s=[],r=0;function o(g){let v=s.at(-1);v&&v.position.distanceSquared(t.position)<.04**2||(s.push({position:t.position.clone(),quaternion:t.quaternion.clone(),velocity:Zr(g)}),s.length>100&&s.shift())}function a(g){t.position.copy(g.position),t.quaternion.copy(g.quaternion),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.aabbNeedsUpdate=!0,i.world.broadphase.dirty=!0}function l(){n=null,s=[],r=0,o(new C)}function c(g){let v=[1/0,1/0,1/0],w=[-1/0,-1/0,-1/0];for(let b of i.aircraft.parts)for(let M of b.vertices){let S=g.vmult(new C(...M));["x","y","z"].forEach((E,y)=>{v[y]=Math.min(v[y],S[E]),w[y]=Math.max(w[y],S[E])})}return{min:v,max:w}}function u(g,v,w){if(!e)return null;let b=c(t.quaternion),M=c(w),S=["x","y","z"],E=1,y=null;for(let[T,P]of S.entries()){let N=e[`min${P.toUpperCase()}`],U=e[`max${P.toUpperCase()}`];if(!Number.isFinite(N)||!Number.isFinite(U))continue;let F=Math.min(b.min[T],M.min[T]),L=Math.max(b.max[T],M.max[T]);for(let D of[-1,1]){let B=D<0?t.position[P]+F-N:U-t.position[P]-L,W=v[P]*D*g;if(B<-1e-4||W>0&&W>=B){let X=B<0?0:B/W;X<=E&&(E=X,y=new C,y[P]=-D)}}}return y?{t:oh(E,0,1),normal:y,body:{kind:"bounds",obstacleId:"practice-bounds"}}:null}function f(g,v,w){let b=u(g,v,w);if(!b)return i.advance(g,v,w);let M=Math.max(0,b.t-.001/Math.max(zi,v.length()*g)),S=new Nt;t.quaternion.slerp(w,M,S);let E=i.advance(g*M,v,S);return E.collided?E:{...E,collided:!0,normal:b.normal,body:b.body}}function h(g,v){if(Math.hypot(g.x,g.z)>zi)return Math.atan2(g.x,-g.z);let w=v.vmult(new C(0,0,-1));return Math.atan2(w.x,-w.z)}function d(g,v){let w=Zr(sw(g,v)),b=Zr(v),M=Math.max(.6,g.length());if(b.lengthSquared()>zi){b.normalize();let T=Math.max(.4,M*.3);w=w.vadd(b.scale(Math.max(0,T-w.dot(b))))}w.lengthSquared()<zi&&(w=t.quaternion.vmult(new C(0,.4,.8))),w.scale(M/w.length(),w);let S=h(w,t.quaternion),E=Math.hypot(w.x,w.z),y=new Nt;y.setFromEuler(Math.atan2(w.y,E)*.7,-S,0,"YXZ"),n={velocity:w,heading:S,target:y,start:t.position.clone(),normal:b,time:0}}function p(g){let v={position:t.position.clone(),quaternion:t.quaternion.clone()};for(let w=s.length-1;w>=0;w--){let b=s[w];if(!(b.position.distanceSquared(v.position)<.12**2)&&(a(b),!u(0,new C,b.quaternion)&&!i.advance(0,new C,b.quaternion).collided))return s=s.slice(0,w+1),d(b.velocity.lengthSquared()>zi?b.velocity:g,null),r=0,!0}return a(v),!1}function x(g){let v={position:t.position.clone(),quaternion:t.quaternion.clone()},w=[g.scale(-1),new C(0,1,0),new C(0,-1,0),new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1)],b=null,M=.002;for(let S of w){if(S.lengthSquared()<zi)continue;S.normalize(),S.scale(Math.max(.6,g.length()),S),a(v),f(.08/S.length(),S,v.quaternion);let E=t.position.distanceTo(v.position);E>M&&(M=E,b={position:t.position.clone(),quaternion:t.quaternion.clone(),velocity:S})}return a(b||v),b?(d(b.velocity.scale(-1),null),r=0,!0):!1}function m(g,v,w=t.quaternion){let b=typeof g=="number"&&Number.isFinite(g)?oh(g,0,.1):0,M=!!n,S=t.position.clone(),E=n?n.velocity:Zr(v),y=n?t.quaternion.clone():iw(w);if(b===0)return{bounced:!1,recovering:M,relocated:!1,contact:{collided:!1,body:null,normal:null},heading:n?.heading??h(E,t.quaternion),speed:Math.hypot(E.x,E.z),verticalSpeed:E.y,velocity:ah(E)};let T=f(b,E,y),P=T.collided,N=!1;if(T.collided)r=t.position.distanceSquared(S)<.002**2?r+1:0,d(E,T.normal),r>=2&&(N=p(E)||x(E));else if(n){r=0,n.time+=b;let L=t.position.vsub(n.start);(n.normal.lengthSquared()>zi?L.dot(n.normal):L.length())>=i.aircraft.boundingRadius+.04&&(f(0,new C,n.target).collided?n.time>2&&(N=p(E)||x(E)):n=null)}T.collided||o(E);let U=n?.velocity||E,F=n?.heading??h(U,t.quaternion);return{bounced:P,recovering:M||!!n,relocated:N,contact:T,heading:F,speed:Math.hypot(U.x,U.z),verticalSpeed:U.y,velocity:ah(U)}}return l(),{reset:l,advance:m,get recovering(){return!!n}}}var Q=i=>document.getElementById(i),Gt=(i,e)=>{Q(i).hidden=!e},Qr=(i,e,t)=>Math.max(e,Math.min(t,i)),ht=ig(document,Q("app")),Mi=Jm(),Aa=eg(),ch="stubenflieger.pending-run.v1",pg="stubenflieger.practice.v1",ws="normal",Ca=.5,Cd;try{let i=JSON.parse(localStorage.getItem(pg)||"null");ws=i?.mode==="practice"?"practice":"normal",Ca=lh(i?.speed)}catch{}var Ot=()=>bt?.practice===!0,rw=new Set(dt.rooms.map(i=>i.bonusId||i.id)).size,hh=i=>Sa.find(e=>e.id===i)?.name||i,eo,_t,yt,bt,wa,ki,mg,Dd,gg=.33,Xs=og(),xt="ready",bn=!1,$s=!1,_i=0,xg=0,Ra=0,jr=0,ni=0,bs=0,Ys=0,Wi=0,Qt=0,vg=0,yg="",uh=!1,Vi=null,Ss=null,Rd={x:0,y:0},mh={steer:0,pitch:0},Ms={steer:0,pitch:0},Zs=!1,Sn=null,bi=null,_g=0,Id,Pd=!1,dh=!1,Ma=!1,ti,Gi=0,Hi=!1,Ks=!1,ow="",Ta=0,qs=0,Ld=0,Bd=0,Ud=0,Od=0,fh=!1,Nd=0,Cn=new Set,Ws=new z,hg=new z,Kr=new z,Jr=new qt,ph=new sn(0,0,0,"YXZ"),Gn=i=>{Q("hint").textContent=i};function bg(){Xs=Xs==="fpv"?"chase":"fpv",ag(Xs),Dd?.setMode(Xs),wd(Q("camera-mode"),Xs),yt&&_t&&yh(!0),ht.current()||Q("game").focus({preventScroll:!0})}Q("camera-mode").onclick=bg;wd(Q("camera-mode"),Xs);Q("retry").onclick=()=>location.reload();try{let i=Number(localStorage.getItem("stubenflieger.rotation"));[0,90,180,270].includes(i)&&(Gi=i)}catch{}var Sg=()=>Gi%180?{width:innerHeight,height:innerWidth}:{width:innerWidth,height:innerHeight};function zd(){let{width:i,height:e}=Sg();Object.assign(Q("app").style,{width:i+"px",height:e+"px",transform:`translate(-50%, -50%) rotate(${Gi}deg)`}),Q("rotation-value").textContent=Gi+"\xB0",window.dispatchEvent(new Event("gameviewportchange"))}Q("rotate-view").onclick=()=>{Gi=(Gi+90)%360;try{localStorage.setItem("stubenflieger.rotation",String(Gi))}catch{}zd()};window.addEventListener("resize",zd);zd();function Es(i){ow=i,Q("storage-status").textContent=i,Q("result-storage").textContent=i}function aw(){try{let i=JSON.parse(sessionStorage.getItem(ch)||"null");i?.id&&i.summary&&(i.summary.practice!==!0&&Mi.creditRun(i.id,i.summary),sessionStorage.removeItem(ch))}catch(i){Es(i.message||"Der letzte Run konnte noch nicht gespeichert werden.")}}aw();Mi.getStatus().available||Es(Mi.getStatus().error);function Si(){if(!(!Ks||Hi||!bt||Ot()))try{sessionStorage.setItem(ch,JSON.stringify({id:bt.id,summary:bt.summary(Wi),savedAt:Date.now()}))}catch{Es("Der laufende Run kann bei einem Neuladen verloren gehen. Website-Daten sind nicht verf\xFCgbar.")}}function gh(){if(!Ks||Hi||!bt)return null;if(Ot())return Hi=!0,{credited:0,score:0};let i=bt.summary(Wi);Si();try{let e=Mi.creditRun(bt.id,i);Hi=!0;try{sessionStorage.removeItem(ch)}catch{}return Es(""),Ia(),e}catch(e){return Es(e.message),null}}window.addEventListener("pagehide",Si);document.addEventListener("visibilitychange",()=>{document.hidden&&Si()});function ii(i,e=.12,t="sine",n=.06){if(Ma)try{ti??=new(window.AudioContext||window.webkitAudioContext),ti.state==="suspended"&&ti.resume();let s=ti.createOscillator(),r=ti.createGain();s.type=t,s.frequency.setValueAtTime(i,ti.currentTime),s.frequency.exponentialRampToValueAtTime(Math.max(35,i*.55),ti.currentTime+e),r.gain.setValueAtTime(n,ti.currentTime),r.gain.exponentialRampToValueAtTime(.001,ti.currentTime+e),s.connect(r),r.connect(ti.destination),s.start(),s.stop(ti.currentTime+e)}catch{}}Q("sound").onclick=()=>{Ma=!Ma,Q("sound").textContent=Ma?"\u266A AN":"\u266A AUS",Q("sound").setAttribute("aria-label",Ma?"Ton ausschalten":"Ton einschalten"),ii(600)};function xh(){eo?.clear(),Gd(),Js(),Cn.clear(),mh={steer:0,pitch:0},Ms={steer:0,pitch:0}}function Ia(){let i=Mi.getProfile();Q("wallet").textContent=i.points.toLocaleString("de-DE")+" P";for(let e of document.querySelectorAll("[data-discoveries]"))e.textContent=`Entdeckt: ${i.discoveredStarIds.length} / ${dt.collectibles.length} Sterne`;Q("aircraft-summary").textContent=`${hh("plane:"+i.equipped.form)} \xB7 ${Math.round(i.equipped.size*100)} % Gr\xF6\xDFe \xB7 ${i.equipped.boosts.length}/2 Boosts`}function Mg(i,e){_t.setDoorOpen(i,e),yt.setDoorOpen(i,e)}function wg(){try{localStorage.setItem(pg,JSON.stringify({mode:ws,speed:Ca}))}catch{}}function kd(){let i=ws==="practice",e=Math.round(Ca*100);Q("play-mode").value=ws,Q("practice-toggle").setAttribute("aria-pressed",String(i)),Q("practice-toggle").textContent="\xDCbungsmodus",Q("practice-speed").value=String(e),Q("practice-speed-value").textContent=`${e} %`,Gt("practice-settings",i),Gt("practice-badge",i),Q("practice-badge").textContent=`\xDCBEN \xB7 ${e} % \xB7 keine Belohnungen`,Q("practice-start-hint").textContent=i?`Alle T\xFCren offen \xB7 Unsterblich \xB7 ${e} % Tempo. Im Men\xFC anpassbar. Keine Belohnungen.`:"In Ruhe \xFCben: Tempo einstellen, alle T\xFCren offen, unsterblich. Keine Belohnungen.",Q("pause-finish").textContent=i?"\xDCbung beenden":"Run beenden & Punkte mitnehmen",Q("menu-restart").textContent=i?"\xDCbung neu starten":"Run abschlie\xDFen & neu starten",Q("again").textContent=i?"Weiter \xFCben \u2197":"Neuer Run \u2197",Q("reset").setAttribute("aria-label",i?"\xDCbung neu starten":"Run beenden und neu starten")}function Eg(i){if(i=i==="practice"?"practice":"normal",i===ws)return!0;if(Ks&&!Hi&&!gh())return Gn("Der Run konnte noch nicht gespeichert werden. Der Modus bleibt unver\xE4ndert."),kd(),!1;let e=ht.current()==="menu";return ws=i,wg(),to(),e&&no(),!0}Q("play-mode").onchange=()=>Eg(Q("play-mode").value);Q("practice-toggle").onclick=()=>{let i=ws==="practice"?"normal":"practice";Eg(i)&&i==="practice"&&no()};Q("practice-speed").oninput=()=>{Ca=lh(Number(Q("practice-speed").value)/100),wg(),kd()};function Ag(){try{Mi.refresh()}catch(e){Es(e.message)}let i=Mi.getProfile();bt=jm(dt,i,void 0,{practice:ws==="practice"}),ki=i.equipped,Aa.clearResult(),Gt("score-form",!Ot()),wa=fm(ki.form,ki.size),_t.configureAircraft(ki.form,ki.size),_t.reset(),gg=yt.setAircraft(ki.form,ki.size,ki.effect,ki.color).length,yt.resetCollectibles(i.discoveredStarIds),Ta=qs=Ld=0,Gt("star-reward",!1);for(let e of dt.doors)Mg(e.id,bt.opened.has(e.id));Cd??=cg(_t,{bounds:dt.bounds}),Cd.reset(),Hi=Ks=!1,Bd=Ud=Od=Nd=0,fh=!1,ni=dt.start.heading||0,bs=Ys=Wi=_i=Ra=jr=0,yt.plane.position.copy(_t.plane.position),yt.plane.quaternion.copy(_t.plane.quaternion),yt.resetTrail(yt.plane.position),yt.updateSling(0),Ia(),kd(),Ug(),Fd()}function to(){if(Ks&&!Hi&&!gh()){Gn("Bitte erlaube Website-Daten, damit deine Punkte vor dem Neustart gespeichert werden k\xF6nnen."),xt==="flying"?Ea("Run beendet."):xt!=="result"&&Lg();return}xt="ready",bn=!1,uh=Pd=dh=!1,xh(),Ag();for(let i of["stats","flight-controls","pause","wind-toast","door-progress","ceiling-warning"])Gt(i,!1);for(let i of["launch-panel","level-label","footer"])Gt(i,!0);document.body.classList.remove("flying"),Q("mission-copy").textContent=Ot()?"Erkunde das ganze Haus mit offenen T\xFCren. Du prallst an Hindernissen ab und kannst unbegrenzt \xFCben. Tempo im Men\xFC einstellen; Punkte und Entdeckungen bleiben unver\xE4ndert.":`Sammle ${dt.collectibles.length} Sterne im ganzen Haus. Sterne \xF6ffnen T\xFCren, neue R\xE4ume bringen je ${ba} Punkte. Aufwinde verbinden die Stockwerke.`,Q("star-goal").textContent=" / "+dt.collectibles.length,Gn(Ot()?"\xDCbungsmodus: Alle T\xFCren offen. Unsterblich, ohne Belohnungen.":"Sterne \xF6ffnen T\xFCren. Auch unter Tischen und St\xFChlen warten welche."),Zs&&Sn&&(bi={...Sn}),yh(!0),ht.close(Q("launch"))}Q("reset").onclick=to;Q("again").onclick=to;Q("menu-restart").onclick=to;function Vd(){return xt!=="ready"||bn||$s||ht.current()?!1:($s=!0,xg=performance.now(),Ra=0,_i=.12,ii(160,.07),!0)}function Gd(){Vi!==null&&Q("launch").hasPointerCapture(Vi)&&Q("launch").releasePointerCapture(Vi),Vi=null,$s=!1,_i=Ra=0,yt?.updateSling(0),Q("power-fill").style.transform="scaleX(0)",Q("launch-label").textContent="Ziehen & loslassen",Q("power-label").textContent="GUMMISCHLEUDER \u2197"}function Tg(){Vd()&&(_i=.75,Hd())}function Hd(){if(!(!$s||xt!=="ready"||ht.current())){$s=!1,xt="flying",Ks=!0,Ot()||Aa.beginRun(),Wi=0,ni=(dt.start.heading||0)+jr,bs=wa.speed*(.75+_i*.35),Ys=.08+_i*.1,_t.plane.velocity.setZero(),_t.plane.collisionFilterMask=-1,ph.set(0,-ni,0,"YXZ"),Jr.setFromEuler(ph),_t.plane.quaternion.copy(Jr),yt.resetTrail(new z().copy(_t.plane.position)),yt.updateSling(0),Zs&&Sn&&(bi={...Sn});for(let i of["launch-panel","level-label","footer"])Gt(i,!1);for(let i of["stats","flight-controls","pause","door-progress"])Gt(i,!0);document.body.classList.add("flying"),Gn(Ot()?"In Ruhe \xFCben: Hindernisse lassen dich abprallen. Keine Belohnungen.":"Sterne sammeln, T\xFCren \xF6ffnen. Im t\xFCrkisen Aufwind steigen."),Si(),ii(480,.4,"triangle",.12),Q("game").focus({preventScroll:!0})}}function Cg(i,e){let t=Gi*Math.PI/180;return{x:i*Math.cos(t)+e*Math.sin(t),y:-i*Math.sin(t)+e*Math.cos(t)}}Q("launch").addEventListener("pointerdown",i=>{Vi!==null||!Vd()||(i.preventDefault(),Vi=i.pointerId,Rd={x:i.clientX,y:i.clientY},Q("launch").setPointerCapture(i.pointerId))});Q("launch").addEventListener("pointermove",i=>{if(i.pointerId!==Vi||!$s)return;let e=Cg(i.clientX-Rd.x,i.clientY-Rd.y);Ra=Qr(e.y/130,0,1),jr=Qr(e.x/250,-.45,.45)});Q("launch").addEventListener("pointerup",i=>{i.pointerId===Vi&&(Vi=null,Hd())});Q("launch").addEventListener("pointercancel",Gd);Q("launch").addEventListener("click",i=>{i.detail===0&&Tg()});function lw(i,e,t){let n=i*Math.PI/180,s=e*Math.PI/180,r=t*Math.PI/180,o=-Math.cos(n)*Math.sin(s),a=Math.sin(n),l=Math.cos(n)*Math.cos(s),c=o*Math.cos(r)-a*Math.sin(r),u=o*Math.sin(r)+a*Math.cos(r);return{roll:Math.atan2(-c,Math.hypot(u,l))*180/Math.PI,pitch:Math.atan2(u,l)*180/Math.PI}}function Rg(){Sn&&(bi={...Sn},Gn("Diese Haltung ist jetzt die Mitte."),Q("control-note").textContent="Kalibriert. Seitlich neigen zum Lenken, vor/zur\xFCck f\xFCr die H\xF6he.")}async function Ig(){if(!window.DeviceOrientationEvent){Q("control-note").textContent="Keine Sensoren verf\xFCgbar. Nutze Touch oder WASD / Pfeiltasten.";return}try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){Q("control-note").textContent="Sensorzugriff abgelehnt. Die Touch-Steuerung funktioniert weiter.";return}Zs=!0,bi=null,Q("gyro").textContent="Warte auf Sensor \u2026",Q("control-note").textContent="Halte dein iPhone in deiner normalen Spielhaltung.",clearTimeout(Id),Id=setTimeout(()=>{Sn||(Q("gyro").textContent="Sensoren erneut versuchen",Q("control-note").textContent="Kein Sensorsignal. In Safari \xF6ffnen oder Touch nutzen.")},3e3)}catch{Q("control-note").textContent="Sensoren nicht verf\xFCgbar. Nutze den Touch-Kreis."}}window.addEventListener("deviceorientation",i=>{!Zs||!Number.isFinite(i.beta)||!Number.isFinite(i.gamma)||(Sn=lw(i.beta,i.gamma,(screen.orientation?.angle??window.orientation??0)+Gi),_g=performance.now(),bi||(bi={...Sn},Q("gyro").textContent="\u2713 Neigung aktiv",Q("control-note").textContent="Aktiv. Beim Start wird deine Haltung kalibriert.",clearTimeout(Id)))});var Wd=()=>{Sn=bi=null};window.addEventListener("orientationchange",Wd);screen.orientation?.addEventListener("change",Wd);window.addEventListener("gameviewportchange",Wd);Q("gyro").onclick=()=>Zs&&Sn?Rg():void Ig();Q("calibrate").onclick=()=>Zs&&Sn?Rg():void Ig();function Pg(i){let e=Q("joystick").getBoundingClientRect(),t=Q("joystick").clientWidth*.32,n=Cg(i.clientX-e.left-e.width/2,i.clientY-e.top-e.height/2),s=Math.min(1,t/(Math.hypot(n.x,n.y)||1));mh={steer:n.x*s/t,pitch:-n.y*s/t},Q("stick").style.transform=`translate(${n.x*s}px,${n.y*s}px)`}Q("joystick").addEventListener("pointerdown",i=>{Ss===null&&(i.preventDefault(),Ss=i.pointerId,Q("joystick").setPointerCapture(i.pointerId),Pg(i))});Q("joystick").addEventListener("pointermove",i=>{i.pointerId===Ss&&Pg(i)});function Js(){Ss!==null&&Q("joystick").hasPointerCapture(Ss)&&Q("joystick").releasePointerCapture(Ss),Ss=null,mh={steer:0,pitch:0},Q("stick").style.transform="translate(0,0)"}Q("joystick").addEventListener("pointerup",Js);Q("joystick").addEventListener("pointercancel",Js);function qd(i=!bn){xt==="flying"&&(bn=i,eo?.clear(),Js(),bn?(Si(),ht.open("paused",Q("resume"))):ht.close(Q("game")))}Q("pause").onclick=()=>qd();Q("resume").onclick=()=>qd(!1);Q("pause-finish").onclick=()=>{ht.close(),bn=!1,Ea(Ot()?"\xDCbung beendet. Dein Guthaben und deine Entdeckungen bleiben unver\xE4ndert.":"Run abgeschlossen. Deine Punkte kommen ins Guthaben.")};function cw(){Js(),Si(),xt==="flying"&&(bn=!0,ht.current()||ht.open("paused",Q("resume")))}function Ea(i,e=!1){xt==="flying"&&(eo?.clear(),Js(),xt="ending",bn=!1,yg=i,uh=e,vg=Qt,Gt("wind-toast",!1),Gt("flight-controls",!1),Gt("pause",!1),Gt("ceiling-warning",!1),_t.plane.velocity.setZero(),gh(),ii(e?740:120,.5,e?"sine":"triangle",.1))}function Lg(){xt="result";let i=bt.summary(Wi),e=sh(i);Q("result-eyebrow").textContent=Ot()?"\xDCBUNG BEENDET":uh?"DAS GANZE HAUS GESCHAFFT":"RUN ABGESCHLOSSEN",Q("result-title").textContent=Ot()?"Bereit f\xFCr den n\xE4chsten Flug?":uh?"Alle Sterne an Bord.":"Noch eine Runde?",Q("result-copy").textContent=yg,Q("result-time").textContent=Wi.toFixed(1)+" s",Q("result-rooms").textContent=i.roomIds.length,Q("result-stars").textContent=`${bt.stars.size} / ${dt.collectibles.length}`,Q("result-reward").textContent=Ot()?"\xDCbungsflug \xB7 keine Punkte, Entdeckungen oder Bestenlisteneintr\xE4ge.":`+${(e+Ta).toLocaleString("de-DE")} Punkte \xB7 davon ${Ta.toLocaleString("de-DE")} Erstfundbonus und ${i.roomIds.length*ba} Raumbonus${Hi?" \xB7 gespeichert":" \xB7 noch nicht vollst\xE4ndig gespeichert"}`,Q("result-shop").textContent=Ot()?"Shop & Flugzeug":"Punkte im Shop ausgeben",Ot()?Aa.clearResult():Aa.setResult(i),Gt("score-form",!Ot()),Ia(),eo?.clear(),ht.open("result",Q("again"))}var Ng="menu",hw=null,Fg=null;function no(){hw=ht.current(),xh(),xt==="flying"&&(bn=!0),Q("menu-shop").disabled=xt==="flying"||xt==="ending",Q("menu-shop").textContent=xt==="flying"?"Shop nach dem Run verf\xFCgbar":"Shop & Flugzeug",ht.open("menu",Q("close-menu"))}function Dg(){xt==="flying"&&bn?ht.open("paused",Q("resume")):xt==="result"?ht.open("result",Q("result-menu")):ht.close(Q("menu-button"))}function Xd(i){Ng=i,xh(),xt==="flying"&&(bn=!0),ht.open("leaderboard",Q("close-leaderboard")),Aa.refresh()}function Bg(){Ng==="menu"?ht.open("menu",Q("menu-leaderboard")):xt==="result"?ht.open("result",Q("result-leaderboard")):xt==="flying"&&bn?ht.open("paused",Q("resume")):ht.close(Q("launch"))}function vh(){if(!["ready","result"].includes(xt)){Gn("Den Shop kannst du vor oder nach deinem Run \xF6ffnen.");return}Ks&&!Hi&&!gh()||(Fg=ht.current(),xh(),mg.render(),ht.open("shop",Q("close-shop")))}function Yd(){xt==="ready"&&(Ag(),yh(!0)),Fg==="menu"?ht.open("menu",Q("menu-shop")):xt==="result"?ht.open("result",Q("result-shop")):ht.close(Q("start-shop"))}mg=Qm({container:Q("shop-content"),progression:Mi,onChange:Ia,onClose:Yd});Q("start-shop").onclick=vh;Q("result-shop").onclick=vh;Q("menu-shop").onclick=vh;Q("close-shop").onclick=Yd;Q("menu-button").onclick=no;Q("close-menu").onclick=Dg;Q("menu-leaderboard").onclick=()=>Xd("menu");Q("result-leaderboard").onclick=()=>Xd("result");Q("close-leaderboard").onclick=Bg;Q("pause-menu").onclick=no;Q("result-menu").onclick=no;eo=ng({window,document,keys:Cn,getState:()=>xt,getDialog:()=>ht.current(),launcher:Q("launch"),actions:{beginCharge:Vd,cancelCharge:Gd,release:Hd,quickLaunch:Tg,reset:to,pause:()=>qd(),suspend:cw,menu:no,closeMenu:Dg,closeBoard:Bg,shop:vh,closeShop:Yd,boost:Og,camera:bg,board:()=>{ht.current()!=="leaderboard"&&Xd(ht.current())},sound:()=>Q("sound").click()}});function Ug(){Q("boost-controls").replaceChildren(),bt.charges.forEach((i,e)=>{let t=document.createElement("button");t.type="button",t.textContent=`${e+1} \xB7 ${hh("boost:"+i)}${bt.used.has(i)?" \u2713":""}`,t.disabled=bt.used.has(i),t.onclick=()=>Og(e),t.setAttribute("aria-label",`${hh("boost:"+i)}${bt.used.has(i)?", verbraucht":", einmal in diesem Run"}`),Q("boost-controls").append(t)})}function Og(i){if(xt!=="flying"||bn||ht.current())return;let e=bt.useBoost(i);e&&(e==="lift"&&(Bd=Qt+1.25),e==="turbo"&&(Ud=Qt+3),e==="magnet"&&(Od=Qt+6),e==="cushion"&&(fh=!0),Ug(),ii(740,.2),Gn(hh("boost:"+e)+" aktiviert."),Q("game").focus({preventScroll:!0}))}function Fd(){if(!bt||!_t)return;let i=la(_t.plane.position),e=bt.summary(Wi),t=bt.nextDoor();Q("time").textContent=Wi.toFixed(1)+" s",Q("height").textContent=_t.plane.position.y.toFixed(1)+" m",Q("rooms").textContent=bt.visited.size+" / "+rw,Q("stars").textContent=bt.stars.size,Q("run-points").textContent=(sh(e)+Ta).toLocaleString("de-DE"),Q("flight-level").textContent=(i?.name||"\xDCber dem Garten").toUpperCase();let n=t?Math.max(0,t.threshold-bt.stars.size):0;Q("door-progress").textContent=Ot()?"\xDCbungsmodus \xB7 alle T\xFCren offen \xB7 keine Belohnungen":t?`${t.name}: noch ${n} ${n===1?"Stern":"Sterne"}`:"Alle T\xFCren offen \xB7 finde die \xFCbrigen Sterne",Q("height").classList.toggle("danger",dh),Gt("ceiling-warning",dh&&xt==="flying")}function yh(i=!1,e=.016){Dd.update({position:yt.plane.position,quaternion:yt.plane.quaternion,heading:ni,length:gg,model:yt.plane,id:"solo"},{dt:e,immediate:i,ready:xt==="ready"})}function uw(i,e){let t=0,n=0;if(Zs&&Sn&&bi&&i-_g<1500){let s=(r,o)=>(r-o+540)%360-180;t=Qr(s(Sn.roll,bi.roll)/28,-1,1),n=Qr(s(Sn.pitch,bi.pitch)/28,-1,1),Math.abs(t)<.06&&(t=0),Math.abs(n)<.06&&(n=0)}Ss!==null&&({steer:t,pitch:n}=mh),(Cn.has("ArrowLeft")||Cn.has("KeyA"))&&(t=-1),(Cn.has("ArrowRight")||Cn.has("KeyD"))&&(t=1),(Cn.has("ArrowUp")||Cn.has("KeyW"))&&(n=1),(Cn.has("ArrowDown")||Cn.has("KeyS"))&&(n=-1),Ms.steer=Dr.damp(Ms.steer,t,9,e),Ms.pitch=Dr.damp(Ms.pitch,n,7,e)}var ug=performance.now(),Ad=0,Td=0;function zg(i){requestAnimationFrame(zg);let e=Math.min(Math.max(0,(i-ug)/1e3),.04);if(ug=i,!yt)return;if(bn||ht.current()){yt.render();return}let t=Ot()?lg(e,Ca):e;if(Qt+=t,qs&&Qt>qs&&(qs=0,Gt("star-reward",!1)),xt==="ready"){let n=Number(Cn.has("ArrowRight")||Cn.has("KeyD"))-Number(Cn.has("ArrowLeft")||Cn.has("KeyA"));jr=Qr(jr+n*.8*e,-.7,.7),ni=(dt.start.heading||0)+jr,$s&&(_i=Math.max(.12,Ra,Qr((i-xg)/1400,0,1)),Q("power-fill").style.transform=`scaleX(${_i})`,Q("launch-label").textContent=Math.round(_i*100)+" % gespannt",Q("power-label").textContent="LOSLASSEN \u2197",yt.updateSling(_i)),yt.plane.rotation.set(0,-ni,0,"YXZ")}if(xt==="flying"){Wi+=e,uw(i,t),ni+=Ms.steer*wa.turnRate*t,Ws.copy(_t.plane.position),hg.copy(Ws);let n=dt.thermals.find(m=>Math.hypot(Ws.x-m.x,Ws.z-m.z)<m.r&&Ws.y>=m.y&&Ws.y<m.y+m.height);Gt("wind-toast",!!n),n&&!Pd&&ii(800,.3,"sine",.04),Pd=!!n;let s=wa.speed*(Qt<Ud?1.65:1);bs=Dr.damp(bs,s,.75,t);let{ride:r,x:o,z:a,targetVertical:l}=pm({position:Ws,input:Ms,heading:ni,speed:bs,tuning:wa,thermal:n,lift:Qt<Bd});Ys=Dr.damp(Ys,l,4,t),Kr.set(o,Ys,a),ph.set(Math.atan2(Ys,r?Math.max(2,bs):bs)*.7,-ni,-Ms.steer*.42,"YXZ"),Jr.setFromEuler(ph),Qt<Nd&&(Kr.copy(dg),Jr.copy(fg));let c=Ot()?Cd.advance(t,Kr,Jr):null,u=c?c.contact:_t.advance(t,Kr,Jr);(c?.bounced||c?.recovering)&&(ni=c.heading,bs=c.speed,Ys=c.verticalSpeed,Kr.copy(c.velocity),c.bounced&&(Gn("Abgeprallt \u2013 du kannst weiter\xFCben."),ii(300,.07))),c?.relocated&&yt.resetTrail(_t.plane.position),yt.plane.position.copy(_t.plane.position),yt.plane.quaternion.copy(_t.plane.quaternion);let f=new Map,h=yt.collectStars(m=>{if(Qt<Ld||!_t.canCollectStar(m,hg,Qt<Od?.75:0))return!1;if(Ot())return!0;try{return f.set(m.id,Mi.creditStar(bt.id,m.id)),Es(""),!0}catch(g){return Ld=Qt+1,Es(g.message),Q("star-reward").textContent="Stern noch nicht gespeichert \u2013 bitte Website-Daten erlauben.",Q("star-reward").dataset.first="false",qs=Qt+4,Gt("star-reward",!0),!1}});for(let m of h){let g=bt.collect(m);if(!g)continue;if(Ot()){Q("star-reward").textContent="\xDCbungsstern \xB7 keine Punkte",Q("star-reward").dataset.first="false",qs=Qt+1.5,Gt("star-reward",!0),Gn(bt.stars.size===dt.collectibles.length?"Alle \xDCbungssterne gefunden. Du kannst weiterfliegen oder neu starten.":`\xDCbungsstern gefunden \xB7 ${bt.stars.size}/${dt.collectibles.length}`),ii(1100,.1);continue}let v=f.get(m);Ta+=v.bonus,Q("star-reward").textContent=v.firstDiscovery?`Erstfund! +${v.totalPoints} Punkte`:`+${v.totalPoints} Punkte`,Q("star-reward").dataset.first=String(v.firstDiscovery),qs=Qt+2.5,Gt("star-reward",!0);for(let w of g)Mg(w.id,!0);ii(1100,.1),Gn(g.length?g.map(w=>w.name).join(" \xB7 ")+" ist jetzt offen!":`Stern gesammelt! ${bt.stars.size}/${dt.collectibles.length}`)}let d=la(_t.plane.position);d&&bt.enterRoom(d.id)&&(Gn(Ot()?`${d.name} \xB7 \xDCbungsflug ohne Punkte`:`${d.name} entdeckt \xB7 +${ba} Punkte`),ii(880,.2),Si()),h.length&&(Ia(),Fd(),Si()),!Ot()&&u.collided&&(fh?(fh=!1,dg.copy(Kr).multiplyScalar(-.55),fg.copy(_t.plane.quaternion),Nd=Qt+.6,ni+=Math.PI,Gn("Luftpolster! Eine Ber\xFChrung abgefangen."),ii(260,.18)):Ea(u.body?.kind==="floor"?"Der Boden kam n\xE4her als geplant.":"Ein Fl\xFCgel oder der Rumpf hat ein Hindernis ber\xFChrt.")),!Ot()&&bt.summary().complete&&Ea("Alle Sterne gefunden \u2013 vom Keller bis in den Garten!",!0);let p=dt.bounds,x=_t.plane.position;!Ot()&&(x.x<p.minX||x.x>p.maxX||x.z<p.minZ||x.z>p.maxZ||x.y<p.minY||x.y>p.maxY)&&Ea("Du hast das Grundst\xFCck verlassen."),yt.updateTrail(_t.plane.position),Td+=e,Td>1&&(Td=0,Si())}xt==="ending"&&Qt-vg>.55&&Lg(),yt.update(e,Qt),dh=yt.updateCeiling(_t.plane.position),yh(!1,e),Ad+=e,Ad>.1&&(Ad=0,Fd()),yt.render()}var dg=new z,fg=new qt;try{_t=zm(dt,Mi.getProfile().equipped),yt=Ym(Q("game"),_t,Sg),Dd=sg(yt.camera,{traceCamera:(i,e,t)=>_t.traceCamera(i,e,t),mode:Xs}),to(),Gt("loading",!1),requestAnimationFrame(zg)}catch(i){console.error(i),Gt("loading",!1),ht.open("error")}Q("game").addEventListener("webglcontextlost",i=>{i.preventDefault(),eo.clear(),Js(),Si(),bn=!0,Q("error-copy").textContent=Ot()?"Die 3D-Darstellung wurde unterbrochen. Lade die Seite neu, um weiterzu\xFCben.":"Die 3D-Darstellung wurde unterbrochen. Dein letzter Punktestand wird beim Neuladen wiederhergestellt.",ht.open("error")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
