var vf=0,Wh=1,yf=2;var Rs=1,bf=2,wr=3,es=0,mn=1,Un=2,ci=0,Ar=1,qh=2,Xh=3,Yh=4,Sf=5;var Is=100,Mf=101,wf=102,Af=103,Ef=104,Tf=200,Cf=201,Rf=202,If=203,$h=204,Zh=205,Pf=206,Lf=207,Nf=208,Ff=209,Df=210,Bf=211,Uf=212,Of=213,zf=214,Xa=0,Ya=1,$a=2,cr=3,Za=4,Ka=5,Ja=6,ja=7,Kh=0,kf=1,Vf=2,$n=0,Jh=1,jh=2,Qh=3,Oo=4,tu=5,eu=6,nu=7;var iu=300,ns=301,Ps=302,Cc=303,Rc=304,zo=306,lr=1e3,si=1001,Qa=1002,$e=1003,Gf=1004;var ko=1005;var Je=1006,Ic=1007;var is=1008;var Mn=1009,su=1010,ru=1011,Er=1012,Pc=1013,Zn=1014,On=1015,Kn=1016,Lc=1017,Nc=1018,Tr=1020,ou=35902,au=35899,cu=1021,lu=1022,zn=1023,ri=1026,ss=1027,Fc=1028,Dc=1029,rs=1030,Bc=1031;var Uc=1033,Vo=33776,Go=33777,Ho=33778,Wo=33779,Oc=35840,zc=35841,kc=35842,Vc=35843,Gc=36196,Hc=37492,Wc=37496,qc=37488,Xc=37489,qo=37490,Yc=37491,$c=37808,Zc=37809,Kc=37810,Jc=37811,jc=37812,Qc=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,cl=36492,ll=36494,hl=36495,ul=36283,dl=36284,Xo=36285,fl=36286;var ro=2300,tc=2301,Wa=2302,Lh=2303,Nh=2400,Fh=2401,Dh=2402;var Hf=3200;var pl=0,Wf=1,Pi="",Ze="srgb",oo="srgb-linear",ao="linear",pe="srgb";var qa=7680;var qf=519,Xf=512,Yf=513,$f=514,ml=515,Zf=516,Kf=517,gl=518,Jf=519,jf=35044;var hu="300 es",Yn=2e3,hr=2001;function dg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qf(){let s=co("canvas");return s.style.display="block",s}var kd={},ur=null;function uu(...s){let t="THREE."+s.shift();ur?ur("log",t,...s):console.log(t,...s)}function tp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=tp(s);let t="THREE."+s.shift();if(ur)ur("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Xt(...s){s=tp(s);let t="THREE."+s.shift();if(ur)ur("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Es(...s){let t=s.join(" ");t in kd||(kd[t]=!0,Wt(...s))}function ep(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var np={[Xa]:Ya,[$a]:Ja,[Za]:ja,[cr]:Ka,[Ya]:Xa,[Ja]:$a,[ja]:Za,[Ka]:cr},oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,eo=Math.PI/180,dr=180/Math.PI;function Ls(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ee(s,t,e){return Math.max(t,Math.min(e,s))}function du(s,t){return(s%t+t)%t}function pg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function mg(s,t,e){return s!==t?(e-s)/(t-s):0}function no(s,t,e){return(1-e)*s+e*t}function gg(s,t,e,n){return no(s,t,1-Math.exp(-e*n))}function xg(s,t=1){return t-Math.abs(du(s,t*2)-t)}function _g(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function vg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bg(s,t){return s+Math.random()*(t-s)}function Sg(s){return s*(.5-Math.random())}function Mg(s){s!==void 0&&(Vd=s);let t=Vd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wg(s){return s*eo}function Ag(s){return s*dr}function Eg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Tg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rg(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*f,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*f,a*l);break;case"ZXZ":s.set(c*f,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*u,a*l);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function or(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cr={DEG2RAD:eo,RAD2DEG:dr,generateUUID:Ls,clamp:ee,euclideanModulo:du,mapLinear:pg,inverseLerp:mg,lerp:no,damp:gg,pingpong:xg,smoothstep:_g,smootherstep:vg,randInt:yg,randFloat:bg,randFloatSpread:Sg,seededRandom:Mg,degToRad:wg,radToDeg:Ag,isPowerOfTwo:Eg,ceilPowerOfTwo:Tg,floorPowerOfTwo:Cg,setQuaternionFromProperEuler:Rg,normalize:dn,denormalize:or},St=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==p){let m=c*h+l*d+u*p+f*x;m<0&&(h=-h,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);g=Math.sin(g*v)/A,a=Math.sin(a*v)/A,c=c*g+h*a,l=l*g+d*a,u=u*g+p*a,f=f*g+x*a}else{c=c*g+h*a,l=l*g+d*a,u=u*g+p*a,f=f*g+x*a;let v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*f+c*d-l*h,t[e+1]=c*p+u*h+l*f-a*d,t[e+2]=l*p+u*d+a*h-c*f,t[e+3]=u*p-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"YZX":this._x=h*u*f+l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f-h*d*p;break;case"XZY":this._x=h*u*f-l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f+h*d*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=i+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ah.copy(this).projectOnVector(t),this.sub(ah)}reflect(t){return this.sub(ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new V,Gd=new on,$t=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],A=i[4],b=i[7],S=i[2],w=i[5],T=i[8];return r[0]=o*x+a*v+c*S,r[3]=o*m+a*A+c*w,r[6]=o*g+a*b+c*T,r[1]=l*x+u*v+f*S,r[4]=l*m+u*A+f*w,r[7]=l*g+u*b+f*T,r[2]=h*x+d*v+p*S,r[5]=h*m+d*A+p*w,r[8]=h*g+d*b+p*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,p=e*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=h*x,t[4]=(u*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ch.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ch.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ch.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ch=new $t,Hd=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ig(){let s={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[oo]:{primaries:t,whitePoint:n,transfer:ao,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),s}var ie=Ig();function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xs,ec=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xs===void 0&&(Xs=co("canvas")),Xs.width=t.width,Xs.height=t.height;let i=Xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pg=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(lh(i[o].image)):r.push(lh(i[o]))}else r=lh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ec.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Lg=0,hh=new V,pn=class s extends oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=si,i=si,r=Je,o=is,a=zn,c=Mn,l=s.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Ls(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=iu;pn.DEFAULT_ANISOTROPY=1;var Ne=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,b=(d+1)/2,S=(g+1)/2,w=(u+h)/4,T=(f+x)/4,_=(p+m)/4;return A>b&&A>S?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=w/n,r=T/n):b>S?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=_/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new pn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lo=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var me=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,m)}set(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,p=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,p=l*u,x=l*f;e[0]=h+x*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,p=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,p=a*u,x=a*f;e[0]=c*u,e[4]=p*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=p*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+p,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Fg)}lookAt(t,e,n){let i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),qi.crossVectors(n,Tn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),qi.crossVectors(n,Tn)),qi.normalize(),ya.crossVectors(Tn,qi),i[0]=qi.x,i[4]=ya.x,i[8]=Tn.x,i[1]=qi.y,i[5]=ya.y,i[9]=Tn.y,i[2]=qi.z,i[6]=ya.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],A=n[7],b=n[11],S=n[15],w=i[0],T=i[4],_=i[8],C=i[12],R=i[1],L=i[5],U=i[9],N=i[13],I=i[2],F=i[6],B=i[10],W=i[14],Y=i[3],X=i[7],tt=i[11],J=i[15];return r[0]=o*w+a*R+c*I+l*Y,r[4]=o*T+a*L+c*F+l*X,r[8]=o*_+a*U+c*B+l*tt,r[12]=o*C+a*N+c*W+l*J,r[1]=u*w+f*R+h*I+d*Y,r[5]=u*T+f*L+h*F+d*X,r[9]=u*_+f*U+h*B+d*tt,r[13]=u*C+f*N+h*W+d*J,r[2]=p*w+x*R+m*I+g*Y,r[6]=p*T+x*L+m*F+g*X,r[10]=p*_+x*U+m*B+g*tt,r[14]=p*C+x*N+m*W+g*J,r[3]=v*w+A*R+b*I+S*Y,r[7]=v*T+A*L+b*F+S*X,r[11]=v*_+A*U+b*B+S*tt,r[15]=v*C+A*N+b*W+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=c*d-l*h,A=a*d-l*f,b=a*h-c*f,S=o*d-l*u,w=o*h-c*u,T=o*f-a*u;return e*(x*v-m*A+g*b)-n*(p*v-m*S+g*w)+i*(p*A-x*S+g*T)-r*(p*b-x*w+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-n*o,A=e*c-i*o,b=e*l-r*o,S=n*c-i*a,w=n*l-r*a,T=i*l-r*c,_=u*x-f*p,C=u*m-h*p,R=u*g-d*p,L=f*m-h*x,U=f*g-d*x,N=h*g-d*m,I=v*N-A*U+b*L+S*R-w*C+T*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(a*N-c*U+l*L)*F,t[1]=(i*U-n*N-r*L)*F,t[2]=(x*T-m*w+g*S)*F,t[3]=(h*w-f*T-d*S)*F,t[4]=(c*R-o*N-l*C)*F,t[5]=(e*N-i*R+r*C)*F,t[6]=(m*b-p*T-g*A)*F,t[7]=(u*T-h*b+d*A)*F,t[8]=(o*U-a*R+l*_)*F,t[9]=(n*R-e*U-r*_)*F,t[10]=(p*w-x*b+g*v)*F,t[11]=(f*b-u*w-d*v)*F,t[12]=(a*C-o*L-c*_)*F,t[13]=(e*L-n*C+i*_)*F,t[14]=(x*A-p*S-m*v)*F,t[15]=(u*S-f*A+h*v)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,p=r*f,x=o*u,m=o*f,g=a*f,v=c*l,A=c*u,b=c*f,S=n.x,w=n.y,T=n.z;return i[0]=(1-(x+g))*S,i[1]=(d+b)*S,i[2]=(p-A)*S,i[3]=0,i[4]=(d-b)*w,i[5]=(1-(h+g))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(p+A)*T,i[9]=(m-v)*T,i[10]=(1-(h+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ys.set(i[0],i[1],i[2]).length(),a=Ys.set(i[4],i[5],i[6]).length(),c=Ys.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Hn.copy(this);let l=1/o,u=1/a,f=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=Yn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Yn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Yn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Yn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ys=new V,Hn=new me,Ng=new V(0,0,0),Fg=new V(1,1,1),qi=new V,ya=new V,Tn=new V,qd=new me,Xd=new on,Rn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dg=0,Yd=new V,$s=new on,bi=new me,ba=new V,Yr=new V,Bg=new V,Ug=new on,$d=new V(1,0,0),Zd=new V(0,1,0),Kd=new V(0,0,1),Jd={type:"added"},Og={type:"removed"},Zs={type:"childadded",child:null},uh={type:"childremoved",child:null},je=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new V,e=new Rn,n=new on,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new $t}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis($d,t)}rotateY(t){return this.rotateOnAxis(Zd,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return Yd.copy(t).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($d,t)}translateY(t){return this.translateOnAxis(Zd,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ba.copy(t):ba.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Yr,ba,this.up):bi.lookAt(ba,Yr,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(bi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jd),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Og),uh.child=t,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jd),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,Bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};je.DEFAULT_UP=new V(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function dh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=du(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dh(o,r,t+1/3),this.g=dh(o,r,t),this.b=dh(o,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let n=ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ie.workingToColorSpace(rn.copy(this),t),Math.round(ee(rn.r*255,0,255))*65536+Math.round(ee(rn.g*255,0,255))*256+Math.round(ee(rn.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,r=rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ze){ie.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,i=rn.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Sa);let n=no(Xi.h,Sa.h,e),i=no(Xi.s,Sa.s,e),r=no(Xi.l,Sa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Kt;Kt.NAMES=ip;var uo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fo=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new V,Si=new V,fh=new V,Mi=new V,Ks=new V,Js=new V,jd=new V,ph=new V,mh=new V,gh=new V,xh=new Ne,_h=new Ne,vh=new Ne,Ki=class s{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wn.subVectors(t,e),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Wn.subVectors(i,e),Si.subVectors(n,e),fh.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(Si),c=Wn.dot(fh),l=Si.dot(Si),u=Si.dot(fh),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return xh.setScalar(0),_h.setScalar(0),vh.setScalar(0),xh.fromBufferAttribute(t,e),_h.fromBufferAttribute(t,n),vh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(xh,r.x),o.addScaledVector(_h,r.y),o.addScaledVector(vh,r.z),o}static isFrontFacing(t,e,n,i){return Wn.subVectors(n,e),Si.subVectors(t,e),Wn.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ks.subVectors(i,n),Js.subVectors(r,n),ph.subVectors(t,n);let c=Ks.dot(ph),l=Js.dot(ph);if(c<=0&&l<=0)return e.copy(n);mh.subVectors(t,i);let u=Ks.dot(mh),f=Js.dot(mh);if(u>=0&&f<=u)return e.copy(i);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ks,o);gh.subVectors(t,r);let d=Ks.dot(gh),p=Js.dot(gh);if(p>=0&&d<=p)return e.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Js,a);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return jd.subVectors(r,i),a=(f-u)/(f-u+(d-p)),e.copy(i).addScaledVector(jd,a);let g=1/(m+x+h);return o=x*g,a=h*g,e.copy(n).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ai=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),wa.subVectors(this.max,$r),js.subVectors(t.a,$r),Qs.subVectors(t.b,$r),tr.subVectors(t.c,$r),Yi.subVectors(Qs,js),$i.subVectors(tr,Qs),bs.subVectors(js,tr);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-bs.y,bs.x,0];return!yh(e,js,Qs,tr,wa)||(e=[1,0,0,0,1,0,0,0,1],!yh(e,js,Qs,tr,wa))?!1:(Aa.crossVectors(Yi,$i),e=[Aa.x,Aa.y,Aa.z],yh(e,js,Qs,tr,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new V,new V,new V,new V,new V,new V,new V,new V],qn=new V,Ma=new ai,js=new V,Qs=new V,tr=new V,Yi=new V,$i=new V,bs=new V,$r=new V,wa=new V,Aa=new V,Ss=new V;function yh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ss.fromArray(s,r);let a=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ze=new V,Ea=new St,kg=0,fn=class extends oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=or(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=or(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=or(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var po=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ke=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vg=new ai,Zr=new V,bh=new V,Ti=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(bh)),this.expandByPoint(Zr.copy(t.center).sub(bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gg=0,Dn=new me,Sh=new je,er=new V,Cn=new ai,Kr=new ai,Ye=new V,an=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dg(t)?mo:po)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Cn.min,Kr.min),Cn.expandByPoint(Ye),Ye.addVectors(Cn.max,Kr.max),Cn.expandByPoint(Ye)):(Cn.expandByPoint(Kr.min),Cn.expandByPoint(Kr.max))}Cn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(t,l),Ye.add(er)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new V,c[_]=new V;let l=new V,u=new V,f=new V,h=new St,d=new St,p=new St,x=new V,m=new V;function g(_,C,R){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),p.sub(h);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(L),a[_].add(x),a[C].add(x),a[R].add(x),c[_].add(m),c[C].add(m),c[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,C=v.length;_<C;++_){let R=v[_],L=R.start,U=R.count;for(let N=L,I=L+U;N<I;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let A=new V,b=new V,S=new V,w=new V;function T(_){S.fromBufferAttribute(i,_),w.copy(S);let C=a[_];A.copy(C),A.sub(S.multiplyScalar(S.dot(C))).normalize(),b.crossVectors(w,C);let L=b.dot(c[_])<0?-1:1;o.setXYZW(_,A.x,A.y,A.z,L)}for(let _=0,C=v.length;_<C;++_){let R=v[_],L=R.start,U=R.count;for(let N=L,I=L+U;N<I;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let g=0;g<u;g++)h[p++]=l[d++]}return new fn(h,u,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Mh=new V,Hg=new V,Wg=new $t,Xn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Mh.subVectors(n,e).cross(Hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Mh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wg.getNormalMatrix(t),i=this.coplanarPoint(Mh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qg=0,Ci=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Ar,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Zh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ai=new V,wh=new V,Ta=new V,Ca=new V,go=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wh.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(wh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ta),a=Ca.dot(this.direction),c=-Ca.dot(Ta),l=Ca.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*c-a,h=o*a-c,p=r*u,f>=0)if(h>=-p)if(h<=p){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wh).addScaledVector(Ta,h),d}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,A=n.z-o.z,b=Math.abs(c),S=Math.abs(l),w=Math.abs(u),T,_,C,R,L,U,N,I,F,B,W,Y;if(b>=S&&b>=w?(C=c,U=f,F=p,Y=g,c>=0?(T=l,_=u,R=h,L=d,N=x,I=m,B=v,W=A):(T=u,_=l,R=d,L=h,N=m,I=x,B=A,W=v)):S>=w?(C=l,U=h,F=x,Y=v,l>=0?(T=u,_=c,R=d,L=f,N=m,I=p,B=A,W=g):(T=c,_=u,R=f,L=d,N=p,I=m,B=g,W=A)):(C=u,U=d,F=m,Y=A,u>=0?(T=c,_=l,R=f,L=h,N=p,I=x,B=g,W=v):(T=l,_=c,R=h,L=f,N=x,I=p,B=v,W=g)),C===0)return null;let X=T/C,tt=_/C,J=1/C,st=R-X*U,xt=L-tt*U,kt=N-X*F,Yt=I-tt*F,Zt=B-X*Y,nt=W-tt*Y,rt=Zt*Yt-nt*kt,yt=st*nt-xt*Zt,zt=kt*xt-Yt*st;if(i){if(rt<0||yt<0||zt<0)return null}else if((rt<0||yt<0||zt<0)&&(rt>0||yt>0||zt>0))return null;let Ct=rt+yt+zt;if(Ct===0)return null;let Vt=J*(rt*U+yt*F+zt*Y);return(Ct>0?Vt<0:Vt>0)?null:this.at(Vt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qd=new me,Ms=new go,Ra=new Ti,tf=new V,Ia=new V,Pa=new V,La=new V,Ah=new V,Na=new V,ef=new V,Fa=new V,Pe=class extends je{constructor(t=new an,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Ah.fromBufferAttribute(f,t),o?Na.addScaledVector(Ah,u):Na.addScaledVector(Ah.sub(e),u))}e.add(Na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(Ra.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ra,tf)===null||Ms.origin.distanceToSquared(tf)>(t.far-t.near)**2))&&(Qd.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Qd),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,S=A;b<S;b+=3){let w=a.getX(b),T=a.getX(b+1),_=a.getX(b+2);i=Da(this,g,t,n,l,u,f,w,T,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);i=Da(this,o,t,n,l,u,f,v,A,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,S=A;b<S;b+=3){let w=b,T=b+1,_=b+2;i=Da(this,g,t,n,l,u,f,w,T,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,A=m+1,b=m+2;i=Da(this,o,t,n,l,u,f,v,A,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Xg(s,t,e,n,i,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===es,a),c===null)return null;Fa.copy(a),Fa.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Fa);return l<e.near||l>e.far?null:{distance:l,point:Fa.clone(),object:s}}function Da(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Ia),s.getVertexPosition(c,Pa),s.getVertexPosition(l,La);let u=Xg(s,t,e,n,Ia,Pa,La,ef);if(u){let f=new V;Ki.getBarycoord(ef,Ia,Pa,La,f),i&&(u.uv=Ki.getInterpolatedAttribute(i,a,c,l,f,new St)),r&&(u.uv1=Ki.getInterpolatedAttribute(r,a,c,l,f,new St)),o&&(u.normal=Ki.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new V,materialIndex:0};Ki.getNormal(Ia,Pa,La,h.normal),u.face=h,u.barycoord=f}return u}var xo=class extends pn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=$e,u=$e,f,h){super(null,o,a,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends fn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},nr=new me,nf=new me,Ba=[],sf=new ai,Yg=new me,Jr=new Pe,jr=new Ti,mr=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),sf.copy(t.boundingBox).applyMatrix4(nr),this.boundingBox.union(sf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),jr.copy(t.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),t.ray.intersectsSphere(jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,nr),nf.multiplyMatrices(n,nr),Jr.matrixWorld=nf,Jr.raycast(t,Ba);for(let o=0,a=Ba.length;o<a;o++){let c=Ba[o];c.instanceId=r,c.object=this,e.push(c)}Ba.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xo(new Float32Array(i*this.count),i,this.count,Fc,On));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Ti,$g=new St(.5,.5),Ua=new V,gr=class{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],A=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-o,d-u,g-p,S-v).normalize(),i[1].setComponents(l+o,d+u,g+p,S+v).normalize(),i[2].setComponents(l+a,d+f,g+x,S+A).normalize(),i[3].setComponents(l-a,d-f,g-x,S-A).normalize(),n)i[4].setComponents(c,h,m,b).normalize(),i[5].setComponents(l-c,d-h,g-m,S-b).normalize();else if(i[4].setComponents(l-c,d-h,g-m,S-b).normalize(),e===Yn)i[5].setComponents(l+c,d+h,g+m,S+b).normalize();else if(e===hr)i[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);let e=$g.distanceTo(t.center);return ws.radius=.7071067811865476+e,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ua.x=i.normal.x>0?t.max.x:t.min.x,Ua.y=i.normal.y>0?t.max.y:t.min.y,Ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sc=new V,rc=new V,rf=new me,Qr=new go,Oa=new Ti,Eh=new V,of=new V,vo=class extends je{constructor(t=new an,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)sc.fromBufferAttribute(e,i-1),rc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sc.distanceTo(rc);t.setAttribute("lineDistance",new ke(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;rf.copy(i).invert(),Qr.copy(t.ray).applyMatrix4(rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=l){let g=u.getX(x),v=u.getX(x+1),A=za(this,t,Qr,c,g,v,x);A&&e.push(A)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(d),g=za(this,t,Qr,c,x,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=l){let g=za(this,t,Qr,c,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=za(this,t,Qr,c,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(sc.fromBufferAttribute(a,i),rc.fromBufferAttribute(a,r),e.distanceSqToSegment(sc,rc,Eh,of)>n)return;Eh.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Eh);if(!(l<t.near||l>t.far))return{distance:l,point:of.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var yo=class extends pn{constructor(t=[],e=ns,n,i,r,o,a,c,l,u){super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends pn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends pn{constructor(t,e,n=Zn,i,r,o,a=$e,c=$e,l,u=ri,f=1){if(u!==ri&&u!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oc=class extends Ji{constructor(t,e=Zn,n=ns,i,r,o=$e,a=$e,c,l=ri){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},bo=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ri=class s extends an{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function p(x,m,g,v,A,b,S,w,T,_,C){let R=b/T,L=S/_,U=b/2,N=S/2,I=w/2,F=T+1,B=_+1,W=0,Y=0,X=new V;for(let tt=0;tt<B;tt++){let J=tt*L-N;for(let st=0;st<F;st++){let xt=st*R-U;X[x]=xt*v,X[m]=J*A,X[g]=I,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(st/T),f.push(1-tt/_),W+=1}}for(let tt=0;tt<_;tt++)for(let J=0;J<T;J++){let st=h+J+F*tt,xt=h+J+F*(tt+1),kt=h+(J+1)+F*(tt+1),Yt=h+(J+1)+F*tt;c.push(st,xt,Yt),c.push(xt,kt,Yt),Y+=6}a.addGroup(d,Y,C),d+=Y,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new St:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,i=[],r=[],o=[],a=new V,c=new me;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ee(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends In{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ac=class extends vr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var af=new V,cf=new V,Th=new fu,Ch=new fu,Rh=new fu,cc=class extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new V){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(cf.subVectors(i[0],i[1]).add(i[0]),l=cf);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(af.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=af),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Th.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,p,x,m),Ch.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,p,x,m),Rh.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ch.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Rh.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Th.calc(c),Ch.calc(c),Rh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new V().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lf(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Zg(s,t){let e=1-s;return e*e*t}function Kg(s,t){return 2*(1-s)*s*t}function Jg(s,t){return s*s*t}function io(s,t,e,n){return Zg(s,t)+Kg(s,e)+Jg(s,n)}function jg(s,t){let e=1-s;return e*e*e*t}function Qg(s,t){let e=1-s;return 3*e*e*s*t}function t0(s,t){return 3*(1-s)*s*s*t}function e0(s,t){return s*s*s*t}function so(s,t,e,n,i){return jg(s,t)+Qg(s,e)+t0(s,n)+e0(s,i)}var So=class extends In{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(t,i.x,r.x,o.x,a.x),so(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lc=class extends In{constructor(t=new V,e=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new V){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(so(t,i.x,r.x,o.x,a.x),so(t,i.y,r.y,o.y,a.y),so(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends In{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends In{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends In{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(io(t,i.x,r.x,o.x),io(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uc=class extends In{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(io(t,i.x,r.x,o.x),io(t,i.y,r.y,o.y),io(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(lf(a,c.x,l.x,u.x,f.x),lf(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new St().fromArray(i))}return this}},Bh=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:cc,CubicBezierCurve:So,CubicBezierCurve3:lc,EllipseCurve:vr,LineCurve:Mo,LineCurve3:hc,QuadraticBezierCurve:wo,QuadraticBezierCurve3:uc,SplineCurve:Ao}),dc=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Bh[i.type]().fromJSON(i))}return this}},Eo=class extends dc{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new wo(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new So(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new vr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},yr=class extends Eo{constructor(t){super(t),this.uuid=Ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Eo().fromJSON(i))}return this}};function n0(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=sp(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=a0(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let u=a,f=c;for(let h=e;h<i;h+=e){let d=s[h],p=s[h+1];d<a&&(a=d),p<c&&(c=p),d>u&&(u=d),p>f&&(f=p)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return To(r,o,e,a,c,l,0),o}function sp(s,t,e,n,i){let r;if(i===_0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=hf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=hf(o/n|0,s[o],s[o+1],r);return r&&br(r,r.next)&&(Ro(r),r=r.next),r}function Ts(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(br(e,e.next)||De(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function To(s,t,e,n,i,r,o){if(!s)return;!o&&r&&d0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?s0(s,n,i,r):i0(s)){t.push(c.i,s.i,l.i),Ro(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=r0(Ts(s),t),To(s,t,e,n,i,r,2)):o===2&&o0(s,t,e,n,i,r):To(Ts(s),t,e,n,i,r,1);break}}}function i0(s){let t=s.prev,e=s,n=s.next;if(De(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(i,r,o),f=Math.min(a,c,l),h=Math.max(i,r,o),d=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&to(i,a,r,c,o,l,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function s0(s,t,e,n){let i=s.prev,r=s,o=s.next;if(De(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,f=r.y,h=o.y,d=Math.min(a,c,l),p=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),g=Uh(d,p,t,e,n),v=Uh(x,m,t,e,n),A=s.prevZ,b=s.nextZ;for(;A&&A.z>=g&&b&&b.z<=v;){if(A.x>=d&&A.x<=x&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&to(a,u,c,f,l,h,A.x,A.y)&&De(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&to(a,u,c,f,l,h,b.x,b.y)&&De(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=g;){if(A.x>=d&&A.x<=x&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&to(a,u,c,f,l,h,A.x,A.y)&&De(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&to(a,u,c,f,l,h,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function r0(s,t){let e=s;do{let n=e.prev,i=e.next.next;!br(n,i)&&op(n,e,e.next,i)&&Co(n,i)&&Co(i,n)&&(t.push(n.i,e.i,i.i),Ro(e),Ro(e.next),e=s=i),e=e.next}while(e!==s);return Ts(e)}function o0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&m0(o,a)){let c=ap(o,a);o=Ts(o,o.next),c=Ts(c,c.next),To(o,t,e,n,i,r,0),To(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function a0(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=sp(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(p0(l))}i.sort(c0);for(let r=0;r<i.length;r++)e=l0(i[r],e);return e}function c0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function l0(s,t){let e=h0(s,t);if(!e)return t;let n=ap(e,s);return Ts(n,n.next),Ts(e,e.next)}function h0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(br(s,e))return e;do{if(br(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&rp(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Co(e,s)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&u0(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function u0(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function d0(s,t,e,n){let i=s;do i.z===0&&(i.z=Uh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,f0(i)}function f0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Uh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function p0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function rp(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function to(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&rp(s,t,e,n,i,r,o,a)}function m0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!g0(s,t)&&(Co(s,t)&&Co(t,s)&&x0(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||br(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function br(s,t){return s.x===t.x&&s.y===t.y}function op(s,t,e,n){let i=Va(De(s,t,e)),r=Va(De(s,t,n)),o=Va(De(e,n,s)),a=Va(De(e,n,t));return!!(i!==r&&o!==a||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||o===0&&ka(e,s,n)||a===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Va(s){return s>0?1:s<0?-1:0}function g0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&op(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Co(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function x0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ap(s,t){let e=Oh(s.i,s.x,s.y),n=Oh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hf(s,t,e,n){let i=Oh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ro(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Oh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var zh=class{static triangulate(t,e,n=2){return n0(t,e,n)}},As=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];uf(t),df(n,t);let o=t.length;e.forEach(uf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,df(n,e[c]);let a=zh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function uf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function df(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Io=class s extends an{constructor(t=new yr([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ke(i,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:v0,A,b=!1,S,w,T,_;if(g){A=g.getSpacedPoints(u),b=!0,h=!1;let ct=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,ct),w=new V,T=new V,_=new V}h||(m=0,d=0,p=0,x=0);let C=a.extractPoints(l),R=C.shape,L=C.holes;if(!As.isClockWise(R)){R=R.reverse();for(let ct=0,dt=L.length;ct<dt;ct++){let pt=L[ct];As.isClockWise(pt)&&(L[ct]=pt.reverse())}}function N(ct){let pt=10000000000000001e-36,mt=ct[0];for(let _t=1;_t<=ct.length;_t++){let Gt=_t%ct.length,Dt=ct[Gt],Ht=Dt.x-mt.x,qt=Dt.y-mt.y,O=Ht*Ht+qt*qt,re=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(mt.x),Math.abs(mt.y)),Qt=pt*re*re;if(O<=Qt){ct.splice(Gt,1),_t--;continue}mt=Dt}}N(R),L.forEach(N);let I=L.length,F=R;for(let ct=0;ct<I;ct++){let dt=L[ct];R=R.concat(dt)}function B(ct,dt,pt){return dt||Xt("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(dt,pt)}let W=R.length;function Y(ct,dt,pt){let mt,_t,Gt,Dt=ct.x-dt.x,Ht=ct.y-dt.y,qt=pt.x-ct.x,O=pt.y-ct.y,re=Dt*Dt+Ht*Ht,Qt=Dt*O-Ht*qt;if(Math.abs(Qt)>Number.EPSILON){let P=Math.sqrt(re),y=Math.sqrt(qt*qt+O*O),q=dt.x-Ht/P,$=dt.y+Dt/P,it=pt.x-O/y,gt=pt.y+qt/y,H=((it-q)*O-(gt-$)*qt)/(Dt*O-Ht*qt);mt=q+Dt*H-ct.x,_t=$+Ht*H-ct.y;let z=mt*mt+_t*_t;if(z<=2)return new St(mt,_t);Gt=Math.sqrt(z/2)}else{let P=!1;Dt>Number.EPSILON?qt>Number.EPSILON&&(P=!0):Dt<-Number.EPSILON?qt<-Number.EPSILON&&(P=!0):Math.sign(Ht)===Math.sign(O)&&(P=!0),P?(mt=-Ht,_t=Dt,Gt=Math.sqrt(re)):(mt=Dt,_t=Ht,Gt=Math.sqrt(re/2))}return new St(mt/Gt,_t/Gt)}let X=[];for(let ct=0,dt=F.length,pt=dt-1,mt=ct+1;ct<dt;ct++,pt++,mt++)pt===dt&&(pt=0),mt===dt&&(mt=0),X[ct]=Y(F[ct],F[pt],F[mt]);let tt=[],J,st=X.concat();for(let ct=0,dt=I;ct<dt;ct++){let pt=L[ct];J=[];for(let mt=0,_t=pt.length,Gt=_t-1,Dt=mt+1;mt<_t;mt++,Gt++,Dt++)Gt===_t&&(Gt=0),Dt===_t&&(Dt=0),J[mt]=Y(pt[mt],pt[Gt],pt[Dt]);tt.push(J),st=st.concat(J)}let xt;if(m===0)xt=As.triangulateShape(F,L);else{let ct=[],dt=[];for(let pt=0;pt<m;pt++){let mt=pt/m,_t=d*Math.cos(mt*Math.PI/2),Gt=p*Math.sin(mt*Math.PI/2)+x;for(let Dt=0,Ht=F.length;Dt<Ht;Dt++){let qt=B(F[Dt],X[Dt],Gt);yt(qt.x,qt.y,-_t),mt===0&&ct.push(qt)}for(let Dt=0,Ht=I;Dt<Ht;Dt++){let qt=L[Dt];J=tt[Dt];let O=[];for(let re=0,Qt=qt.length;re<Qt;re++){let P=B(qt[re],J[re],Gt);yt(P.x,P.y,-_t),mt===0&&O.push(P)}mt===0&&dt.push(O)}}xt=As.triangulateShape(ct,dt)}let kt=xt.length,Yt=p+x;for(let ct=0;ct<W;ct++){let dt=h?B(R[ct],st[ct],Yt):R[ct];b?(T.copy(S.normals[0]).multiplyScalar(dt.x),w.copy(S.binormals[0]).multiplyScalar(dt.y),_.copy(A[0]).add(T).add(w),yt(_.x,_.y,_.z)):yt(dt.x,dt.y,0)}for(let ct=1;ct<=u;ct++)for(let dt=0;dt<W;dt++){let pt=h?B(R[dt],st[dt],Yt):R[dt];b?(T.copy(S.normals[ct]).multiplyScalar(pt.x),w.copy(S.binormals[ct]).multiplyScalar(pt.y),_.copy(A[ct]).add(T).add(w),yt(_.x,_.y,_.z)):yt(pt.x,pt.y,f/u*ct)}for(let ct=m-1;ct>=0;ct--){let dt=ct/m,pt=d*Math.cos(dt*Math.PI/2),mt=p*Math.sin(dt*Math.PI/2)+x;for(let _t=0,Gt=F.length;_t<Gt;_t++){let Dt=B(F[_t],X[_t],mt);yt(Dt.x,Dt.y,f+pt)}for(let _t=0,Gt=L.length;_t<Gt;_t++){let Dt=L[_t];J=tt[_t];for(let Ht=0,qt=Dt.length;Ht<qt;Ht++){let O=B(Dt[Ht],J[Ht],mt);b?yt(O.x,O.y+A[u-1].y,A[u-1].x+pt):yt(O.x,O.y,f+pt)}}}Zt(),nt();function Zt(){let ct=i.length/3;if(h){let dt=0,pt=W*dt;for(let mt=0;mt<kt;mt++){let _t=xt[mt];zt(_t[2]+pt,_t[1]+pt,_t[0]+pt)}dt=u+m*2,pt=W*dt;for(let mt=0;mt<kt;mt++){let _t=xt[mt];zt(_t[0]+pt,_t[1]+pt,_t[2]+pt)}}else{for(let dt=0;dt<kt;dt++){let pt=xt[dt];zt(pt[2],pt[1],pt[0])}for(let dt=0;dt<kt;dt++){let pt=xt[dt];zt(pt[0]+W*u,pt[1]+W*u,pt[2]+W*u)}}n.addGroup(ct,i.length/3-ct,0)}function nt(){let ct=i.length/3,dt=0;rt(F,dt),dt+=F.length;for(let pt=0,mt=L.length;pt<mt;pt++){let _t=L[pt];rt(_t,dt),dt+=_t.length}n.addGroup(ct,i.length/3-ct,1)}function rt(ct,dt){let pt=ct.length;for(;--pt>=0;){let mt=pt,_t=pt-1;_t<0&&(_t=ct.length-1);for(let Gt=0,Dt=u+m*2;Gt<Dt;Gt++){let Ht=W*Gt,qt=W*(Gt+1),O=dt+mt+Ht,re=dt+_t+Ht,Qt=dt+_t+qt,P=dt+mt+qt;Ct(O,re,Qt,P)}}}function yt(ct,dt,pt){c.push(ct),c.push(dt),c.push(pt)}function zt(ct,dt,pt){Vt(ct),Vt(dt),Vt(pt);let mt=i.length/3,_t=v.generateTopUV(n,i,mt-3,mt-2,mt-1);oe(_t[0]),oe(_t[1]),oe(_t[2])}function Ct(ct,dt,pt,mt){Vt(ct),Vt(dt),Vt(mt),Vt(dt),Vt(pt),Vt(mt);let _t=i.length/3,Gt=v.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);oe(Gt[0]),oe(Gt[1]),oe(Gt[3]),oe(Gt[1]),oe(Gt[2]),oe(Gt[3])}function Vt(ct){i.push(c[ct*3+0]),i.push(c[ct*3+1]),i.push(c[ct*3+2])}function oe(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return y0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Bh[i.type]().fromJSON(i)),new s(n,t.options)}},v0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new St(r,o),new St(a,c),new St(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[i*3],d=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new St(o,1-c),new St(l,1-f),new St(h,1-p),new St(x,1-g)]:[new St(a,1-c),new St(u,1-f),new St(d,1-p),new St(m,1-g)]}};function y0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Po=class s extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,d=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let v=g*h-o;for(let A=0;A<l;A++){let b=A*f-r;p.push(b,-v,0),x.push(0,0,1),m.push(A/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){let A=v+l*g,b=v+l*(g+1),S=v+1+l*(g+1),w=v+1+l*g;d.push(A,b,w),d.push(b,S,w)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cs=class s extends an{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],f=[],h=new V,d=new V,p=new V;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let v=g/i*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(g/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,A=(i+1)*(x-1)+m,b=(i+1)*x+m;c.push(g,v,b),c.push(v,A,b)}this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ns(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ff(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ff(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=Ns(s[e]);for(let i in n)t[i]=n[i]}return t}function ff(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function b0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var cp={clone:Ns,merge:cn},S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=b0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new St().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new me().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fc=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pc=class extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mc=class extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ir(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ih(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ji=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gc=class extends ji{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=t,a=2*e-n;break;case Dh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fh:o=t,c=2*n-e;break;case Dh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,A=(-1-d)*m+(1.5+d)*x+.5*p,b=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+v*o[l+S]+A*o[c+S]+b*o[f+S];return r}},xc=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},_c=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vc=class extends ji{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let h=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=d*h+p*2,v=f[g],A=f[g+1],b=t*h+p*2,S=u[b],w=u[b+1],T=A0(n,e,v,S,i);r[p]=lp(T,x,A,w,m)}return r}};function lp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function w0(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function A0(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=lp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let c=w0(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ir(e,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ir(t.times,Array),values:ir(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ih(t.settings)&&(n.settings={inTangents:ir(t.settings.inTangents,Array),outTangents:ir(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case tc:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break;case Lh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return Lh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ih(this.settings)&&(pf(this.settings.inTangents,t),pf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Xt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Xt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&fg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Xt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[h+p]||x!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ih(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function pf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=tc;var Qi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=ro;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Ln{constructor(t,e,n,i){super(t,e,n,i)}};yc.prototype.ValueTypeName="color";var bc=class extends Ln{constructor(t,e,n,i){super(t,e,n,i)}};bc.prototype.ValueTypeName="number";var Sc=class extends ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)on.slerpFlat(r,0,o,l-a,o,l,c);return r}},Lo=class extends Ln{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Ln{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ro;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Ln{constructor(t,e,n,i){super(t,e,n,i)}};Mc.prototype.ValueTypeName="vector";var wc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new wc,Ac=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},No=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ph=new me,mf=new V,gf=new V,Fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(mf),gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ph.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ph,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===hr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new V,Ha=new on,ii=new V,Do=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Ha,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Ha,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new V,xf=new St,_f=new St,Ke=class extends Do{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,xf,_f),e.subVectors(_f,xf)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kh=class extends Fo{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}},Bo=class extends Sr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Mr=class extends Do{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vh=class extends Fo{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var sr=-90,rr=1,Ec=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(sr,rr,t,e);i.layers=this.layers,this.add(i);let r=new Ke(sr,rr,t,e);r.layers=this.layers,this.add(r);let o=new Ke(sr,rr,t,e);o.layers=this.layers,this.add(o);let a=new Ke(sr,rr,t,e);a.layers=this.layers,this.add(a);let c=new Ke(sr,rr,t,e);c.layers=this.layers,this.add(c);let l=new Ke(sr,rr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Tc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mu="\\[\\]\\.:\\/",E0=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",T0="[^"+mu.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",gu),R0=/(WCOD+)?/.source.replace("WCOD",T0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),L0=new RegExp("^"+C0+R0+I0+P0+"$"),N0=["material","materials","bones","map"],Gh=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E0,"")}static parseTrackName(t){let e=L0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);N0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=Gh;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);var Hh=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function xu(s,t,e,n){let i=F0(n);switch(e){case cu:return s*t;case Fc:return s*t/i.components*i.byteLength;case Dc:return s*t/i.components*i.byteLength;case rs:return s*t*2/i.components*i.byteLength;case Bc:return s*t*2/i.components*i.byteLength;case lu:return s*t*3/i.components*i.byteLength;case zn:return s*t*4/i.components*i.byteLength;case Uc:return s*t*4/i.components*i.byteLength;case Vo:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zc:case Vc:return Math.max(s,16)*Math.max(t,8)/4;case Oc:case kc:return Math.max(s,8)*Math.max(t,8)/2;case Gc:case Hc:case qc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qo:case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case cl:case ll:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xo:case fl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F0(s){switch(s){case Mn:case su:return{byteLength:1,components:1};case Er:case ru:case Kn:return{byteLength:2,components:1};case Lc:case Nc:return{byteLength:2,components:4};case Zn:case Pc:case On:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Lp(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function B0(s){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,W0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cx=`vec3 transformedNormal = objectNormal;
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
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
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
#endif`,Dx=`uniform sampler2D dfgLUT;
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
}`,Bx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,q_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
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
}`,K_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,j_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,cv=`#define STANDARD
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
}`,lv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:U0,alphahash_pars_fragment:O0,alphamap_fragment:z0,alphamap_pars_fragment:k0,alphatest_fragment:V0,alphatest_pars_fragment:G0,aomap_fragment:H0,aomap_pars_fragment:W0,batching_pars_vertex:q0,batching_vertex:X0,begin_vertex:Y0,beginnormal_vertex:$0,bsdfs:Z0,iridescence_fragment:K0,bumpmap_pars_fragment:J0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:tx,clipping_planes_vertex:ex,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:sx,color_vertex:rx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:cx,displacementmap_pars_vertex:lx,displacementmap_vertex:hx,emissivemap_fragment:ux,emissivemap_pars_fragment:dx,colorspace_fragment:fx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:xx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Rx,envmap_vertex:vx,fog_vertex:yx,fog_pars_vertex:bx,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Tx,lights_pars_begin:Cx,lights_toon_fragment:Ix,lights_toon_pars_fragment:Px,lights_phong_fragment:Lx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Fx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Bx,lights_fragment_maps:Ux,lights_fragment_end:Ox,lightprobes_pars_fragment:zx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Gx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:qx,map_particle_fragment:Xx,map_particle_pars_fragment:Yx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Kx,morphcolor_vertex:Jx,morphnormal_vertex:jx,morphtarget_pars_vertex:Qx,morphtarget_vertex:t_,normal_fragment_begin:e_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:b_,shadowmask_pars_fragment:S_,skinbase_vertex:M_,skinning_pars_vertex:w_,skinning_vertex:A_,skinnormal_vertex:E_,specularmap_fragment:T_,specularmap_pars_fragment:C_,tonemapping_fragment:R_,tonemapping_pars_fragment:I_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:N_,uv_pars_vertex:F_,uv_vertex:D_,worldpos_vertex:B_,background_vert:U_,background_frag:O_,backgroundCube_vert:z_,backgroundCube_frag:k_,cube_vert:V_,cube_frag:G_,depth_vert:H_,depth_frag:W_,distance_vert:q_,distance_frag:X_,equirect_vert:Y_,equirect_frag:$_,linedashed_vert:Z_,linedashed_frag:K_,meshbasic_vert:J_,meshbasic_frag:j_,meshlambert_vert:Q_,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:cv,meshtoon_vert:lv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},hi={basic:{uniforms:cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:cn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:cn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:cn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:cn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:cn([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:cn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:cn([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:cn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:cn([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:cn([Mt.common,Mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:cn([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};hi.physical={uniforms:cn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var xl={r:0,b:0,g:0},xv=new me,Np=new $t;Np.set(-1,0,0,0,1,0,0,0,1);function _v(s,t,e,n,i,r){let o=new Kt(0),a=i===!0?0:1,c,l,u=null,f=0,h=null;function d(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let b=v.backgroundBlurriness>0;A=t.get(A,b)}return A}function p(v){let A=!1,b=d(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),A=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,A){let b=d(A);b&&(b.isCubeTexture||b.mapping===zo)?(l===void 0&&(l=new Pe(new Ri(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ns(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Np),l.material.toneMapped=ie.getTransfer(b.colorSpace)!==pe,(u!==b||f!==b.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Pe(new Po(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ns(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,A){v.getRGB(xl,pu(s)),e.buffers.color.setClear(xl.r,xl.g,xl.b,A,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function vv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(L,U,N,I,F){let B=!1,W=f(L,I,N,U);r!==W&&(r=W,l(r.object)),B=d(L,I,N,F),B&&p(L,I,N,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(L,U,N,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function f(L,U,N,I){let F=I.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let W=L.isInstancedMesh===!0?L.id:0,Y=B[W];Y===void 0&&(Y={},B[W]=Y);let X=Y[N.id];X===void 0&&(X={},Y[N.id]=X);let tt=X[F];return tt===void 0&&(tt=h(c()),X[F]=tt),tt}function h(L){let U=[],N=[],I=[];for(let F=0;F<e;F++)U[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,U,N,I){let F=r.attributes,B=U.attributes,W=0,Y=N.getAttributes();for(let X in Y)if(Y[X].location>=0){let J=F[X],st=B[X];if(st===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),J===void 0||J.attribute!==st||st&&J.data!==st.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function p(L,U,N,I){let F={},B=U.attributes,W=0,Y=N.getAttributes();for(let X in Y)if(Y[X].location>=0){let J=B[X];J===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let st={};st.attribute=J,J&&J.data&&(st.data=J.data),F[X]=st,W++}r.attributes=F,r.attributesNum=W,r.index=I}function x(){let L=r.newAttributes;for(let U=0,N=L.length;U<N;U++)L[U]=0}function m(L){g(L,0)}function g(L,U){let N=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;N[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),F[L]!==U&&(s.vertexAttribDivisor(L,U),F[L]=U)}function v(){let L=r.newAttributes,U=r.enabledAttributes;for(let N=0,I=U.length;N<I;N++)U[N]!==L[N]&&(s.disableVertexAttribArray(N),U[N]=0)}function A(L,U,N,I,F,B,W){W===!0?s.vertexAttribIPointer(L,U,N,F,B):s.vertexAttribPointer(L,U,N,I,F,B)}function b(L,U,N,I){x();let F=I.attributes,B=N.getAttributes(),W=U.defaultAttributeValues;for(let Y in B){let X=B[Y];if(X.location>=0){let tt=F[Y];if(tt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let J=tt.normalized,st=tt.itemSize,xt=t.get(tt);if(xt===void 0)continue;let kt=xt.buffer,Yt=xt.type,Zt=xt.bytesPerElement,nt=Yt===s.INT||Yt===s.UNSIGNED_INT||tt.gpuType===Pc;if(tt.isInterleavedBufferAttribute){let rt=tt.data,yt=rt.stride,zt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<X.locationSize;Ct++)g(X.location+Ct,rt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<X.locationSize;Ct++)m(X.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Ct=0;Ct<X.locationSize;Ct++)A(X.location+Ct,st/X.locationSize,Yt,J,yt*Zt,(zt+st/X.locationSize*Ct)*Zt,nt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<X.locationSize;rt++)g(X.location+rt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<X.locationSize;rt++)m(X.location+rt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let rt=0;rt<X.locationSize;rt++)A(X.location+rt,st/X.locationSize,Yt,J,st*Zt,st/X.locationSize*rt*Zt,nt)}}else if(W!==void 0){let J=W[Y];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(X.location,J);break;case 3:s.vertexAttrib3fv(X.location,J);break;case 4:s.vertexAttrib4fv(X.location,J);break;default:s.vertexAttrib1fv(X.location,J)}}}}v()}function S(){C();for(let L in n){let U=n[L];for(let N in U){let I=U[N];for(let F in I){let B=I[F];for(let W in B)u(B[W].object),delete B[W];delete I[F]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let N in U){let I=U[N];for(let F in I){let B=I[F];for(let W in B)u(B[W].object),delete B[W];delete I[F]}}delete n[L.id]}function T(L){for(let U in n){let N=n[U];for(let I in N){let F=N[I];if(F[L.id]===void 0)continue;let B=F[L.id];for(let W in B)u(B[W].object),delete B[W];delete F[L.id]}}}function _(L){for(let U in n){let N=n[U],I=L.isInstancedMesh===!0?L.id:0,F=N[I];if(F!==void 0){for(let B in F){let W=F[B];for(let Y in W)u(W[Y].object),delete W[Y];delete F[B]}delete N[I],Object.keys(N).length===0&&delete n[U]}}}function C(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function yv(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==zn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let _=T===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Mn&&T!==On&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Wt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:b,maxSamples:S,samples:w}}function Sv(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Xn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,A=v*4,b=g.clippingState||null;c.value=b,b=u(p,h,A,d);for(let S=0;S!==A;++S)b[S]=e[S];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=d+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,b=d;A!==x;++A,b+=4)o.copy(f[A]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ir=4,Mv=6,wv=20,Av=256,Yo=new Mr,up=new Kt,_u=null,vu=0,yu=0,bu=!1,Ev=new V,Fs=new V,vl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ev}=r;_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_u,vu,yu),this._renderer.xr.enabled=bu,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_u=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Kn,format:zn,colorSpace:oo,depthBuffer:!1},i=dp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tv(r)),this._blurMaterial=Rv(r,t,e),this._ggxMaterial=Cv(r,t,e)}return i}_compileMaterial(t){let e=new Pe(new an,t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,i,r){let c=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(up),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Ri,new Bn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(up),g=!0);for(let A=0;A<6;A++){let b=A%3;b===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):b===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let S=this._cubeSize;Rr(i,b*S,A>2?S:0,S,S),f.setRenderTarget(i),g&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ns||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Ir?n-p+Ir:0),g=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,Rr(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(a,Yo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Rr(t,m,g,3*x,2*x),i.setRenderTarget(t),i.render(a,Yo)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],f=3*u*(i>this._lodMax-Ir?i-this._lodMax+Ir:0),h=4*(this._cubeSize-u);Rr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Yo)}};function Tv(s){let t=[],e=[],n=s,i=s-Ir+1+Mv;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,p=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let g=0;g<f;g++){let v=g%3*2/3-1,A=g>2?0:-1,b=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];p.set(b,d*h*g);for(let S=0;S<h;S++){let w=u[S*2]*2-1,T=u[S*2+1]*2-1;g===0?Fs.set(1,T,w):g===1?Fs.set(-w,1,-T):g===2?Fs.set(-w,T,1):g===3?Fs.set(-1,T,-w):g===4?Fs.set(-w,-1,T):Fs.set(w,T,-1),Fs.toArray(x,(g*h+S)*d)}}let m=new an;m.setAttribute("position",new fn(p,d)),m.setAttribute("outputDirection",new fn(x,d)),e.push(new Pe(m,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function dp(s,t,e){let n=new Sn(s,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cv(s,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rv(s,t,e){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function fp(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function pp(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ri(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ci});r.uniforms.tEquirect.value=e;let o=new Pe(i,r),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Je),new Ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Iv(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Cc||d===Rc)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new yl(p.height);return x.fromEquirectangularTexture(s,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Cc||d===Rc,x=d===ns||d===Ps;if(p||x){let m=e.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new vl(s)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return p&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new vl(s)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Cc?h.mapping=ns:d===Rc&&(h.mapping=Ps),h}function c(h){let d=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function l(h){let d=h.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Pv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("WebGLRenderer: "+n+" extension not supported."),i}}}function Lv(s,t,e,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],s.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let A=0,b=v.length;A<b;A+=3){let S=v[A+0],w=v[A+1],T=v[A+2];h.push(S,w,w,T,T,S)}}else{let v=p.array;x=p.version;for(let A=0,b=v.length/3-1;A<b;A+=3){let S=A+0,w=A+1,T=A+2;h.push(S,w,w,T,T,S)}}let m=new(p.count>=65535?mo:po)(h,1);m.version=x;let g=r.get(f);g&&t.remove(g),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Nv(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Dv(s,t,e){let n=new WeakMap,i=new Ne;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let C=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let b=a.attributes.position.count*A,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*S*4*f),T=new lo(w,b,S,f);T.type=On,T.needsUpdate=!0;let _=A*4;for(let R=0;R<f;R++){let L=m[R],U=g[R],N=v[R],I=b*S*4*R;for(let F=0;F<L.count;F++){let B=F*_;d===!0&&(i.fromBufferAttribute(L,F),w[I+B+0]=i.x,w[I+B+1]=i.y,w[I+B+2]=i.z,w[I+B+3]=0),p===!0&&(i.fromBufferAttribute(U,F),w[I+B+4]=i.x,w[I+B+5]=i.y,w[I+B+6]=i.z,w[I+B+7]=0),x===!0&&(i.fromBufferAttribute(N,F),w[I+B+8]=i.x,w[I+B+9]=i.y,w[I+B+10]=i.z,w[I+B+11]=N.itemSize===4?i.w:1)}}h={count:f,texture:T,size:new St(b,S)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Bv(s,t,e,n,i){let r=new WeakMap;function o(l){let u=i.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Uv={[Jh]:"LINEAR_TONE_MAPPING",[jh]:"REINHARD_TONE_MAPPING",[Qh]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[nu]:"NEUTRAL_TONE_MAPPING",[tu]:"CUSTOM_TONE_MAPPING"};function Ov(s,t,e,n,i,r){let o=new Sn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new an;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pe(l,u),h=new Mr(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,v=[],A=!1;this.setSize=function(b,S){o.setSize(b,S),a!==null&&a.setSize(b,S),c!==null&&c.setSize(b,S);for(let w=0;w<v.length;w++){let T=v[w];T.setSize&&T.setSize(b,S)}},this.setEffects=function(b){v=b,A=v.length>0&&v[0].isRenderPass===!0;let S=o.width,w=o.height;v.length>0&&a===null&&(a=new Sn(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<v.length;T++){let _=v[T];_.setSize&&_.setSize(S,w)}},this.begin=function(b,S){if(x||b.toneMapping===$n&&v.length===0)return!1;if(g=S,S!==null){let w=S.width,T=S.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return A===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=$n,!0},this.hasRenderPass=function(){return A},this.end=function(b,S){b.toneMapping=m,x=!0;let w=o,T=a;for(let _=0;_<v.length;_++){let C=v[_];C.enabled!==!1&&(C.render(b,T,w,S),C.needsSwap!==!1&&(w=T,T=T===a?c:a))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,u.defines={},ie.getTransfer(d)===pe&&(u.defines.SRGB_TRANSFER="");let _=Uv[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(f,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Fp=new pn,wu=new Ji(1,1),Dp=new lo,Bp=new ic,Up=new yo,mp=[],gp=[],xp=new Float32Array(16),_p=new Float32Array(9),vp=new Float32Array(4);function Lr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=mp[i];if(r===void 0&&(r=new Float32Array(i),mp[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ml(s,t){let e=gp[t];e===void 0&&(e=new Int32Array(t),gp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function zv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function Vv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function Gv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function Hv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;vp.set(n),s.uniformMatrix2fv(this.addr,!1,vp),He(e,n)}}function Wv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;_p.set(n),s.uniformMatrix3fv(this.addr,!1,_p),He(e,n)}}function qv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;xp.set(n),s.uniformMatrix4fv(this.addr,!1,xp),He(e,n)}}function Xv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function $v(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function Zv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function Kv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function Qv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function ty(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wu.compareFunction=e.isReversedDepthBuffer()?gl:ml,r=wu):r=Fp,e.setTexture2D(t||r,i)}function ey(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bp,i)}function ny(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Up,i)}function iy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Dp,i)}function sy(s){switch(s){case 5126:return zv;case 35664:return kv;case 35665:return Vv;case 35666:return Gv;case 35674:return Hv;case 35675:return Wv;case 35676:return qv;case 5124:case 35670:return Xv;case 35667:case 35671:return Yv;case 35668:case 35672:return $v;case 35669:case 35673:return Zv;case 5125:return Kv;case 36294:return Jv;case 36295:return jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(s,t){s.uniform1fv(this.addr,t)}function oy(s,t){let e=Lr(t,this.size,2);s.uniform2fv(this.addr,e)}function ay(s,t){let e=Lr(t,this.size,3);s.uniform3fv(this.addr,e)}function cy(s,t){let e=Lr(t,this.size,4);s.uniform4fv(this.addr,e)}function ly(s,t){let e=Lr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hy(s,t){let e=Lr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function uy(s,t){let e=Lr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dy(s,t){s.uniform1iv(this.addr,t)}function fy(s,t){s.uniform2iv(this.addr,t)}function py(s,t){s.uniform3iv(this.addr,t)}function my(s,t){s.uniform4iv(this.addr,t)}function gy(s,t){s.uniform1uiv(this.addr,t)}function xy(s,t){s.uniform2uiv(this.addr,t)}function _y(s,t){s.uniform3uiv(this.addr,t)}function vy(s,t){s.uniform4uiv(this.addr,t)}function yy(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),He(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=wu:o=Fp;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function by(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Bp,r[o])}function Sy(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Up,r[o])}function My(s,t,e){let n=this.cache,i=t.length,r=Ml(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Dp,r[o])}function wy(s){switch(s){case 5126:return ry;case 35664:return oy;case 35665:return ay;case 35666:return cy;case 35674:return ly;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}var Au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sy(e.type)}},Eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wy(e.type)}},Tu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function yp(s,t){s.seq.push(t),s.map[t.id]=t}function Ay(s,t,e){let n=s.name,i=n.length;for(Su.lastIndex=0;;){let r=Su.exec(n),o=Su.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){yp(e,l===void 0?new Au(a,s,t):new Eu(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Tu(a),yp(e,f)),e=f}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Ay(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ey=37297,Ty=0;function Cy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sp=new $t;function Ry(s){ie._getMatrix(Sp,ie.workingColorSpace,s);let t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case ao:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Cy(s.getShaderSource(t),a)}else return r}function Iy(s,t){let e=Ry(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Py={[Jh]:"Linear",[jh]:"Reinhard",[Qh]:"Cineon",[Oo]:"ACESFilmic",[eu]:"AgX",[nu]:"Neutral",[tu]:"Custom"};function Ly(s,t){let e=Py[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new V;function Ny(){ie.getLuminanceCoefficients(_l);let s=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Dy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function By(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Zo(s){return s!==""}function wp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ap(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(s){return s.replace(Uy,zy)}var Oy=new Map;function zy(s,t){let e=jt[t];if(e===void 0){let n=Oy.get(t);if(n!==void 0)e=jt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cu(e)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(s){return s.replace(ky,Vy)}function Vy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tp(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Gy={[Rs]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Hy(s){return Gy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wy={[ns]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE_UV"};function qy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Wy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xy={[Ps]:"ENVMAP_MODE_REFRACTION"};function Yy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $y={[Kh]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function Zy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$y[s.combine]||"ENVMAP_BLENDING_NONE"}function Ky(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jy(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Hy(e),l=qy(e),u=Yy(e),f=Zy(e),h=Ky(e),d=Fy(e),p=Dy(r),x=i.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zo).join(`
`),g.length>0&&(g+=`
`)):(m=[Tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),g=[Tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?jt.tonemapping_pars_fragment:"",e.toneMapping!==$n?Ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Iy("linearToOutputTexel",e.outputColorSpace),Ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Cu(o),o=wp(o,e),o=Ap(o,e),a=Cu(a),a=wp(a,e),a=Ap(a,e),o=Ep(o),a=Ep(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=v+m+o,b=v+g+a,S=bp(i,i.VERTEX_SHADER,A),w=bp(i,i.FRAGMENT_SHADER,b);i.attachShader(x,S),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(L){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(w)||"",F=U.trim(),B=N.trim(),W=I.trim(),Y=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,w);else{let tt=Mp(i,S,"vertex"),J=Mp(i,w,"fragment");Xt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+tt+`
`+J)}else F!==""?Wt("WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:g}})}i.deleteShader(S),i.deleteShader(w),_=new Pr(i,x),C=By(i,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Ey)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ty++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var jy=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Iu(t),e.set(t,n)),n}},Iu=class{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}};function Qy(s){return s===rs||s===qo||s===Xo}function tb(s,t,e,n,i,r){let o=new ho,a=new Ru,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,C,R,L,U,N){let I=L.fog,F=U.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||B,W),X=Y&&Y.mapping===zo?Y.image.height:null,tt=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=J!==void 0?J.length:0,xt=0;F.morphAttributes.position!==void 0&&(xt=1),F.morphAttributes.normal!==void 0&&(xt=2),F.morphAttributes.color!==void 0&&(xt=3);let kt,Yt,Zt,nt;if(tt){let Ae=hi[tt];kt=Ae.vertexShader,Yt=Ae.fragmentShader}else{kt=_.vertexShader,Yt=_.fragmentShader;let Ae=a.getVertexShaderStage(_),de=a.getFragmentShaderStage(_);a.update(_,Ae,de),Zt=Ae.id,nt=de.id}let rt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),zt=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,Vt=!!_.map,oe=!!_.matcap,ct=!!Y,dt=!!_.aoMap,pt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Gt=!!_.displacementMap,Dt=!!_.emissiveMap,Ht=!!_.metalnessMap,qt=!!_.roughnessMap,O=_.anisotropy>0,re=_.clearcoat>0,Qt=_.dispersion>0,P=_.retroreflectivity>0,y=_.iridescence>0,q=_.sheen>0,$=_.transmission>0,it=O&&!!_.anisotropyMap,gt=re&&!!_.clearcoatMap,H=re&&!!_.clearcoatNormalMap,z=re&&!!_.clearcoatRoughnessMap,D=y&&!!_.iridescenceMap,et=y&&!!_.iridescenceThicknessMap,lt=q&&!!_.sheenColorMap,ft=q&&!!_.sheenRoughnessMap,j=!!_.specularMap,ht=!!_.specularColorMap,Et=!!_.specularIntensityMap,Bt=$&&!!_.transmissionMap,k=$&&!!_.thicknessMap,vt=!!_.gradientMap,ot=!!_.alphaMap,bt=_.alphaTest>0,Tt=!!_.alphaHash,ut=!!_.extensions,Ot=$n;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ot=s.toneMapping);let Ft={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:Yt,defines:_.defines,customVertexShaderID:Zt,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&U._colorsTexture!==null,instancing:zt,instancingColor:zt&&U.instanceColor!==null,instancingMorph:zt&&U.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:oe,envMap:ct,envMapMode:ct&&Y.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:pt,bumpMap:mt,normalMap:_t,displacementMap:Gt,emissiveMap:Dt,normalMapObjectSpace:_t&&_.normalMapType===Wf,normalMapTangentSpace:_t&&_.normalMapType===pl,packedNormalMap:_t&&_.normalMapType===pl&&Qy(_.normalMap.format),metalnessMap:Ht,roughnessMap:qt,anisotropy:O,anisotropyMap:it,clearcoat:re,clearcoatMap:gt,clearcoatNormalMap:H,clearcoatRoughnessMap:z,dispersion:Qt,retroreflection:P,iridescence:y,iridescenceMap:D,iridescenceThicknessMap:et,sheen:q,sheenColorMap:lt,sheenRoughnessMap:ft,specularMap:j,specularColorMap:ht,specularIntensityMap:Et,transmission:$,transmissionMap:Bt,thicknessMap:k,gradientMap:vt,opaque:_.transparent===!1&&_.blending===Ar&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:bt,alphaHash:Tt,combine:_.combine,mapUv:Vt&&p(_.map.channel),aoMapUv:dt&&p(_.aoMap.channel),lightMapUv:pt&&p(_.lightMap.channel),bumpMapUv:mt&&p(_.bumpMap.channel),normalMapUv:_t&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:Dt&&p(_.emissiveMap.channel),metalnessMapUv:Ht&&p(_.metalnessMap.channel),roughnessMapUv:qt&&p(_.roughnessMap.channel),anisotropyMapUv:it&&p(_.anisotropyMap.channel),clearcoatMapUv:gt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:H&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ft&&p(_.sheenRoughnessMap.channel),specularMapUv:j&&p(_.specularMap.channel),specularColorMapUv:ht&&p(_.specularColorMap.channel),specularIntensityMapUv:Et&&p(_.specularIntensityMap.channel),transmissionMapUv:Bt&&p(_.transmissionMap.channel),thicknessMapUv:k&&p(_.thicknessMap.channel),alphaMapUv:ot&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_t||O),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Vt||ot),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:xt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Un,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)C.push(R),C.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(C,_),v(C,_),C.push(s.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function g(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function A(_){let C=d[_.type],R;if(C){let L=hi[C];R=cp.clone(L.uniforms)}else R=_.uniforms;return R}function b(_,C){let R=u.get(C);return R!==void 0?++R.usedTimes:(R=new Jy(s,C,_,i),l.push(R),u.set(C,R)),R}function S(_){if(--_.usedTimes===0){let C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:T}}function eb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Cp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rp(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,x,m,g){let v=s[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},s[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=g),t++,v}function c(h,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let A=a(h,d,p,x,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function l(h,d,p,x,m,g){let v=a(h,d,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function u(h,d){e.length>1&&e.sort(h||nb),n.length>1&&n.sort(d||Cp),i.length>1&&i.sort(d||Cp)}function f(){for(let h=t,d=s.length;h<d;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:u}}function ib(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Rp,s.set(n,[o])):i>=r.length?(o=new Rp,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function sb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Kt};break;case"SpotLight":e={position:new V,direction:new V,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function rb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ob=0;function ab(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cb(s){let t=new sb,e=rb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let i=new V,r=new me,o=new me;function a(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,A=0,b=0,S=0,w=0,T=0,_=0,C=0,R=0;l.sort(ab);for(let U=0,N=l.length;U<N;U++){let I=l[U],F=I.color,B=I.intensity,W=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===rs?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*B,f+=F.g*B,h+=F.b*B;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],B);R++}else if(I.isSunLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,J=e.get(I);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=Y;let st=tt.getViewportCount();for(let xt=0;xt<st;xt++)n.sunShadowMatrix[x+xt]=tt.getMatrix(xt),n.sunShadowCascade[x+xt]=tt._cascadeData[xt];x+=st,p++}n.sun[d]=X,d++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,J=e.get(I);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=X,m++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[v]=X;let tt=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,tt.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[v]=tt.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Y,T++}v++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=X,A++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let tt=I.shadow,J=e.get(I);J.shadowIntensity=tt.intensity,J.shadowBias=tt.bias,J.shadowNormalBias=tt.normalBias,J.shadowRadius=tt.radius,J.shadowMapSize=tt.mapSize,J.shadowCameraNear=tt.camera.near,J.shadowCameraFar=tt.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=X,g++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(B),X.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[b]=X,b++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==A||L.hemiLength!==b||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==T||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=A,L.hemiLength=b,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=T,L.numSpotMaps=_,L.numLightProbes=R,n.version=ob++)}function c(l,u){let f=0,h=0,d=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let b=l[v];if(b.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),h++}else if(b.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Ip(s){let t=new cb(s),e=[],n=[],i=[];function r(h){f.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function lb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Ip(s),t.set(i,[a])):r>=o.length?(a=new Ip(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`,db=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],fb=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Pp=new me,$o=new V,Mu=new V;function pb(s,t,e){let n=new gr,i=new St,r=new St,o=new Ne,a=new pc,c=new mc,l={},u=e.maxTextureSize,f={[es]:mn,[mn]:es,[Un]:Un},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:hb,fragmentShader:ub}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new an;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let g=this.type;this.render=function(w,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===bf&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=g!==this.type;N&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=w.length;I<F;I++){let B=w[I],W=B.shadow;if(W===void 0){Wt("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let Y=W.getFrameExtents();i.multiply(Y),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,W.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===wr){if(B.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Sn(i.x,i.y,{format:rs,type:Kn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Ji(i.x,i.y,On),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e}else B.isPointLight?(W.map=new yl(i.x),W.map.depthTexture=new oc(i.x,Zn)):(W.map=new Sn(i.x,i.y),W.map.depthTexture=new Ji(i.x,i.y,Zn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=ri,this.type===Rs?(W.map.depthTexture.compareFunction=X?gl:ml,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$e,W.map.depthTexture.magFilter=$e);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,_);for(let J=0;J<tt;J++){let st=W.getCamera(J);if(B.isPointLight){let xt=W.camera,kt=W.matrix,Yt=B.distance||xt.far;Yt!==xt.far&&(xt.far=Yt,xt.updateProjectionMatrix()),$o.setFromMatrixPosition(B.matrixWorld),xt.position.copy($o),Mu.copy(xt.position),Mu.add(db[J]),xt.up.copy(fb[J]),xt.lookAt(Mu),xt.updateMatrixWorld(),kt.makeTranslation(-$o.x,-$o.y,-$o.z),Pp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Pp,xt.coordinateSystem,xt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,J),s.clear();else{J===0&&(s.setRenderTarget(W.map),s.clear());let xt=W.getViewport(J);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),U.viewport(o)}n=W.getFrustum(J),b(T,_,st,B,this.type)}W.isPointLightShadow!==!0&&this.type===wr&&v(W,_),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,R,L)};function v(w,T){let _=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Sn(i.x,i.y,{format:rs,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,_,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,_,d,x,null)}function A(w,T,_,C){let R=null,L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let U=R.uuid,N=T.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let F=I[N];F===void 0&&(F=R.clone(),I[N]=F,T.addEventListener("dispose",S)),R=F}if(R.visible=T.visible,R.wireframe=T.wireframe,C===wr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:f[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=s.properties.get(R);U.light=_}return R}function b(w,T,_,C,R){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===wr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let N=t.update(w),I=w.material;if(Array.isArray(I)){let F=N.groups;for(let B=0,W=F.length;B<W;B++){let Y=F[B],X=I[Y.materialIndex];if(X&&X.visible){let tt=A(w,X,C,R);w.onBeforeShadow(s,w,T,_,N,tt,Y),s.renderBufferDirect(_,null,N,tt,w,Y),w.onAfterShadow(s,w,T,_,N,tt,Y)}}}else if(I.visible){let F=A(w,I,C,R);w.onBeforeShadow(s,w,T,_,N,F,null),s.renderBufferDirect(_,null,N,F,w,null),w.onAfterShadow(s,w,T,_,N,F,null)}}let U=w.children;for(let N=0,I=U.length;N<I;N++)b(U[N],T,_,C,R)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let C=l[_],R=w.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function mb(s,t){function e(){let k=!1,vt=new Ne,ot=null,bt=new Ne(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!k&&(s.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,ut,Ot,Ft,Ae){Ae===!0&&(Tt*=Ft,ut*=Ft,Ot*=Ft),vt.set(Tt,ut,Ot,Ft),bt.equals(vt)===!1&&(s.clearColor(Tt,ut,Ot,Ft),bt.copy(vt))},reset:function(){k=!1,ot=null,bt.set(-1,0,0,0)}}}function n(){let k=!1,vt=!1,ot=null,bt=null,Tt=null;return{setReversed:function(ut){if(vt!==ut){let Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),vt=ut;let Ft=Tt;Tt=null,this.setClear(Ft)}},getReversed:function(){return vt},setTest:function(ut){ut?rt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(ut){ot!==ut&&!k&&(s.depthMask(ut),ot=ut)},setFunc:function(ut){if(vt&&(ut=np[ut]),bt!==ut){switch(ut){case Xa:s.depthFunc(s.NEVER);break;case Ya:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case Ka:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=ut}},setLocked:function(ut){k=ut},setClear:function(ut){Tt!==ut&&(Tt=ut,vt&&(ut=1-ut),s.clearDepth(ut))},reset:function(){k=!1,ot=null,bt=null,Tt=null,vt=!1}}}function i(){let k=!1,vt=null,ot=null,bt=null,Tt=null,ut=null,Ot=null,Ft=null,Ae=null;return{setTest:function(de){k||(de?rt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(de){vt!==de&&!k&&(s.stencilMask(de),vt=de)},setFunc:function(de,Gn,ei){(ot!==de||bt!==Gn||Tt!==ei)&&(s.stencilFunc(de,Gn,ei),ot=de,bt=Gn,Tt=ei)},setOp:function(de,Gn,ei){(ut!==de||Ot!==Gn||Ft!==ei)&&(s.stencilOp(de,Gn,ei),ut=de,Ot=Gn,Ft=ei)},setLocked:function(de){k=de},setClear:function(de){Ae!==de&&(s.clearStencil(de),Ae=de)},reset:function(){k=!1,vt=null,ot=null,bt=null,Tt=null,ut=null,Ot=null,Ft=null,Ae=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,A=null,b=null,S=null,w=null,T=null,_=new Kt(0,0,0),C=0,R=!1,L=null,U=null,N=null,I=null,F=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Y=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Y>=2);let tt=null,J={},st=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),kt=new Ne().fromArray(st),Yt=new Ne().fromArray(xt);function Zt(k,vt,ot,bt){let Tt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(k,ut),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<ot;Ot++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(vt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return ut}let nt={};nt[s.TEXTURE_2D]=Zt(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=Zt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=Zt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=Zt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(cr),mt(!1),_t(Wh),rt(s.CULL_FACE),dt(ci);function rt(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function yt(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function zt(k,vt){return h[k]!==vt?(s.bindFramebuffer(k,vt),h[k]=vt,k===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=vt),k===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ct(k,vt){let ot=p,bt=!1;if(k){ot=d.get(vt),ot===void 0&&(ot=[],d.set(vt,ot));let Tt=k.textures;if(ot.length!==Tt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ot=Tt.length;ut<Ot;ut++)ot[ut]=s.COLOR_ATTACHMENT0+ut;ot.length=Tt.length,bt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,bt=!0);bt&&s.drawBuffers(ot)}function Vt(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let oe={[Is]:s.FUNC_ADD,[Mf]:s.FUNC_SUBTRACT,[wf]:s.FUNC_REVERSE_SUBTRACT};oe[Af]=s.MIN,oe[Ef]=s.MAX;let ct={[Tf]:s.ZERO,[Cf]:s.ONE,[Rf]:s.SRC_COLOR,[$h]:s.SRC_ALPHA,[Df]:s.SRC_ALPHA_SATURATE,[Nf]:s.DST_COLOR,[Pf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[Zh]:s.ONE_MINUS_SRC_ALPHA,[Ff]:s.ONE_MINUS_DST_COLOR,[Lf]:s.ONE_MINUS_DST_ALPHA,[Bf]:s.CONSTANT_COLOR,[Uf]:s.ONE_MINUS_CONSTANT_COLOR,[Of]:s.CONSTANT_ALPHA,[zf]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(k,vt,ot,bt,Tt,ut,Ot,Ft,Ae,de){if(k===ci){m===!0&&(yt(s.BLEND),m=!1);return}if(m===!1&&(rt(s.BLEND),m=!0),k!==Sf){if(k!==g||de!==R){if((v!==Is||S!==Is)&&(s.blendEquation(s.FUNC_ADD),v=Is,S=Is),de)switch(k){case Ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.ONE,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xh:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",k);break}A=null,b=null,w=null,T=null,_.set(0,0,0),C=0,g=k,R=de}return}Tt=Tt||vt,ut=ut||ot,Ot=Ot||bt,(vt!==v||Tt!==S)&&(s.blendEquationSeparate(oe[vt],oe[Tt]),v=vt,S=Tt),(ot!==A||bt!==b||ut!==w||Ot!==T)&&(s.blendFuncSeparate(ct[ot],ct[bt],ct[ut],ct[Ot]),A=ot,b=bt,w=ut,T=Ot),(Ft.equals(_)===!1||Ae!==C)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Ae),_.copy(Ft),C=Ae),g=k,R=!1}function pt(k,vt){k.side===Un?yt(s.CULL_FACE):rt(s.CULL_FACE);let ot=k.side===mn;vt&&(ot=!ot),mt(ot),k.blending===Ar&&k.transparent===!1?dt(ci):dt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let bt=k.stencilWrite;a.setTest(bt),bt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(k){L!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),L=k)}function _t(k){k!==vf?(rt(s.CULL_FACE),k!==U&&(k===Wh?s.cullFace(s.BACK):k===yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),U=k}function Gt(k){k!==N&&(W&&s.lineWidth(k),N=k)}function Dt(k,vt,ot){k?(rt(s.POLYGON_OFFSET_FILL),(I!==vt||F!==ot)&&(I=vt,F=ot,o.getReversed()&&(vt=-vt),s.polygonOffset(vt,ot))):yt(s.POLYGON_OFFSET_FILL)}function Ht(k){k?rt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function qt(k){k===void 0&&(k=s.TEXTURE0+B-1),tt!==k&&(s.activeTexture(k),tt=k)}function O(k,vt,ot){ot===void 0&&(tt===null?ot=s.TEXTURE0+B-1:ot=tt);let bt=J[ot];bt===void 0&&(bt={type:void 0,texture:void 0},J[ot]=bt),(bt.type!==k||bt.texture!==vt)&&(tt!==ot&&(s.activeTexture(ot),tt=ot),s.bindTexture(k,vt||nt[k]),bt.type=k,bt.texture=vt)}function re(){let k=J[tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Qt(){try{s.compressedTexImage2D(...arguments)}catch(k){Xt("WebGLState:",k)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(k){Xt("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){Xt("WebGLState:",k)}}function q(){try{s.texSubImage3D(...arguments)}catch(k){Xt("WebGLState:",k)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Xt("WebGLState:",k)}}function it(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Xt("WebGLState:",k)}}function gt(){try{s.texStorage2D(...arguments)}catch(k){Xt("WebGLState:",k)}}function H(){try{s.texStorage3D(...arguments)}catch(k){Xt("WebGLState:",k)}}function z(){try{s.texImage2D(...arguments)}catch(k){Xt("WebGLState:",k)}}function D(){try{s.texImage3D(...arguments)}catch(k){Xt("WebGLState:",k)}}function et(k){return f[k]!==void 0?f[k]:s.getParameter(k)}function lt(k,vt){f[k]!==vt&&(s.pixelStorei(k,vt),f[k]=vt)}function ft(k){kt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function j(k){Yt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Yt.copy(k))}function ht(k,vt){let ot=l.get(vt);ot===void 0&&(ot=new WeakMap,l.set(vt,ot));let bt=ot.get(k);bt===void 0&&(bt=s.getUniformBlockIndex(vt,k.name),ot.set(k,bt))}function Et(k,vt){let bt=l.get(vt).get(k);c.get(vt)!==bt&&(s.uniformBlockBinding(vt,bt,k.__bindingPointIndex),c.set(vt,bt))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,J={},h={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,A=null,b=null,S=null,w=null,T=null,_=new Kt(0,0,0),C=0,R=!1,L=null,U=null,N=null,I=null,F=null,kt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:yt,bindFramebuffer:zt,drawBuffers:Ct,useProgram:Vt,setBlending:dt,setMaterial:pt,setFlipSided:mt,setCullFace:_t,setLineWidth:Gt,setPolygonOffset:Dt,setScissorTest:Ht,activeTexture:qt,bindTexture:O,unbindTexture:re,compressedTexImage2D:Qt,compressedTexImage3D:P,texImage2D:z,texImage3D:D,pixelStorei:lt,getParameter:et,updateUBOMapping:ht,uniformBlockBinding:Et,texStorage2D:gt,texStorage3D:H,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:it,scissor:ft,viewport:j,reset:Bt}}function gb(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,y){return p?new OffscreenCanvas(P,y):co("canvas")}function m(P,y,q){let $=1,it=Qt(P);if((it.width>q||it.height>q)&&($=q/Math.max(it.width,it.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let gt=Math.floor($*it.width),H=Math.floor($*it.height);h===void 0&&(h=x(gt,H));let z=y?x(gt,H):h;return z.width=gt,z.height=H,z.getContext("2d").drawImage(P,0,0,gt,H),Wt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+gt+"x"+H+")."),z}else return"data"in P&&Wt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,y,q,$,it,gt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let H;$&&(H=t.get("EXT_texture_norm16"),H||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=y;if(y===s.RED&&(q===s.FLOAT&&(z=s.R32F),q===s.HALF_FLOAT&&(z=s.R16F),q===s.UNSIGNED_BYTE&&(z=s.R8),q===s.UNSIGNED_SHORT&&H&&(z=H.R16_EXT),q===s.SHORT&&H&&(z=H.R16_SNORM_EXT)),y===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.R8UI),q===s.UNSIGNED_SHORT&&(z=s.R16UI),q===s.UNSIGNED_INT&&(z=s.R32UI),q===s.BYTE&&(z=s.R8I),q===s.SHORT&&(z=s.R16I),q===s.INT&&(z=s.R32I)),y===s.RG&&(q===s.FLOAT&&(z=s.RG32F),q===s.HALF_FLOAT&&(z=s.RG16F),q===s.UNSIGNED_BYTE&&(z=s.RG8),q===s.UNSIGNED_SHORT&&H&&(z=H.RG16_EXT),q===s.SHORT&&H&&(z=H.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.RG8UI),q===s.UNSIGNED_SHORT&&(z=s.RG16UI),q===s.UNSIGNED_INT&&(z=s.RG32UI),q===s.BYTE&&(z=s.RG8I),q===s.SHORT&&(z=s.RG16I),q===s.INT&&(z=s.RG32I)),y===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.RGB8UI),q===s.UNSIGNED_SHORT&&(z=s.RGB16UI),q===s.UNSIGNED_INT&&(z=s.RGB32UI),q===s.BYTE&&(z=s.RGB8I),q===s.SHORT&&(z=s.RGB16I),q===s.INT&&(z=s.RGB32I)),y===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),q===s.UNSIGNED_INT&&(z=s.RGBA32UI),q===s.BYTE&&(z=s.RGBA8I),q===s.SHORT&&(z=s.RGBA16I),q===s.INT&&(z=s.RGBA32I)),y===s.RGB&&(q===s.UNSIGNED_SHORT&&H&&(z=H.RGB16_EXT),q===s.SHORT&&H&&(z=H.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),y===s.RGBA){let D=gt?ao:ie.getTransfer(it);q===s.FLOAT&&(z=s.RGBA32F),q===s.HALF_FLOAT&&(z=s.RGBA16F),q===s.UNSIGNED_BYTE&&(z=D===pe?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&H&&(z=H.RGBA16_EXT),q===s.SHORT&&H&&(z=H.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function S(P,y){let q;return P?y===null||y===Zn||y===Tr?q=s.DEPTH24_STENCIL8:y===On?q=s.DEPTH32F_STENCIL8:y===Er&&(q=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zn||y===Tr?q=s.DEPTH_COMPONENT24:y===On?q=s.DEPTH_COMPONENT32F:y===Er&&(q=s.DEPTH_COMPONENT16),q}function w(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){let y=P.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function _(P){let y=P.target;y.removeEventListener("dispose",_),L(y)}function C(P){let y=n.get(P);if(y.__webglInit===void 0)return;let q=P.source,$=d.get(q);if($){let it=$[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(P),Object.keys($).length===0&&d.delete(q)}n.remove(P)}function R(P){let y=n.get(P);s.deleteTexture(y.__webglTexture);let q=P.source,$=d.get(q);delete $[y.__cacheKey],o.memory.textures--}function L(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let it=0;it<y.__webglFramebuffer[$].length;it++)s.deleteFramebuffer(y.__webglFramebuffer[$][it]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=P.textures;for(let $=0,it=q.length;$<it;$++){let gt=n.get(q[$]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(q[$])}n.remove(P)}let U=0;function N(){U=0}function I(){return U}function F(P){U=P}function B(){let P=U;return P>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function W(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Y(P,y){let q=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let $=P.image;if($===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(q,P,y);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+y)}function X(P,y){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){yt(q,P,y);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+y)}function tt(P,y){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){yt(q,P,y);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+y)}function J(P,y){let q=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){zt(q,P,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+y)}let st={[lr]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},xt={[$e]:s.NEAREST,[Gf]:s.NEAREST_MIPMAP_NEAREST,[ko]:s.NEAREST_MIPMAP_LINEAR,[Je]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},kt={[Xf]:s.NEVER,[Jf]:s.ALWAYS,[Yf]:s.LESS,[ml]:s.LEQUAL,[$f]:s.EQUAL,[gl]:s.GEQUAL,[Zf]:s.GREATER,[Kf]:s.NOTEQUAL};function Yt(P,y){if(y.type===On&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Je||y.magFilter===Ic||y.magFilter===ko||y.magFilter===is||y.minFilter===Je||y.minFilter===Ic||y.minFilter===ko||y.minFilter===is)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,st[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,xt[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,kt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==ko&&y.minFilter!==is||y.type===On&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));let $=y.source,it=d.get($);it===void 0&&(it={},d.set($,it));let gt=W(y);if(gt!==P.__cacheKey){it[gt]===void 0&&(it[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[gt].usedTimes++;let H=it[P.__cacheKey];H!==void 0&&(it[P.__cacheKey].usedTimes--,H.usedTimes===0&&R(y)),P.__cacheKey=gt,P.__webglTexture=it[gt].texture}return q}function nt(P,y,q){return Math.floor(Math.floor(P/q)/y)}function rt(P,y,q,$){let gt=P.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,q,$,y.data);else{gt.sort((lt,ft)=>lt.start-ft.start);let H=0;for(let lt=1;lt<gt.length;lt++){let ft=gt[H],j=gt[lt],ht=ft.start+ft.count,Et=nt(j.start,y.width,4),Bt=nt(ft.start,y.width,4);j.start<=ht+1&&Et===Bt&&nt(j.start+j.count-1,y.width,4)===Et?ft.count=Math.max(ft.count,j.start+j.count-ft.start):(++H,gt[H]=j)}gt.length=H+1;let z=e.getParameter(s.UNPACK_ROW_LENGTH),D=e.getParameter(s.UNPACK_SKIP_PIXELS),et=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let lt=0,ft=gt.length;lt<ft;lt++){let j=gt[lt],ht=Math.floor(j.start/4),Et=Math.ceil(j.count/4),Bt=ht%y.width,k=Math.floor(ht/y.width),vt=Et,ot=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,Bt,k,vt,ot,q,$,y.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,D),e.pixelStorei(s.UNPACK_SKIP_ROWS,et)}}function yt(P,y,q){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);let it=Zt(P,y),gt=y.source;e.bindTexture($,P.__webglTexture,s.TEXTURE0+q);let H=n.get(gt);if(gt.version!==H.__version||it===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ot=ie.getPrimaries(ie.workingColorSpace),bt=y.colorSpace===Pi?null:ie.getPrimaries(y.colorSpace),Tt=y.colorSpace===Pi||ot===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let D=m(y.image,!1,i.maxTextureSize);D=re(y,D);let et=r.convert(y.format,y.colorSpace),lt=r.convert(y.type),ft=b(y.internalFormat,et,lt,y.normalized,y.colorSpace,y.isVideoTexture);Yt($,y);let j,ht=y.mipmaps,Et=y.isVideoTexture!==!0,Bt=H.__version===void 0||it===!0,k=gt.dataReady,vt=w(y,D);if(y.isDepthTexture)ft=S(y.format===ss,y.type),Bt&&(Et?e.texStorage2D(s.TEXTURE_2D,1,ft,D.width,D.height):e.texImage2D(s.TEXTURE_2D,0,ft,D.width,D.height,0,et,lt,null));else if(y.isDataTexture)if(ht.length>0){Et&&Bt&&e.texStorage2D(s.TEXTURE_2D,vt,ft,ht[0].width,ht[0].height);for(let ot=0,bt=ht.length;ot<bt;ot++)j=ht[ot],Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,j.width,j.height,et,lt,j.data):e.texImage2D(s.TEXTURE_2D,ot,ft,j.width,j.height,0,et,lt,j.data);y.generateMipmaps=!1}else Et?(Bt&&e.texStorage2D(s.TEXTURE_2D,vt,ft,D.width,D.height),k&&rt(y,D,et,lt)):e.texImage2D(s.TEXTURE_2D,0,ft,D.width,D.height,0,et,lt,D.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Et&&Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ft,ht[0].width,ht[0].height,D.depth);for(let ot=0,bt=ht.length;ot<bt;ot++)if(j=ht[ot],y.format!==zn)if(et!==null)if(Et){if(k)if(y.layerUpdates.size>0){let Tt=xu(j.width,j.height,y.format,y.type);for(let ut of y.layerUpdates){let Ot=j.data.subarray(ut*Tt/j.data.BYTES_PER_ELEMENT,(ut+1)*Tt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,ut,j.width,j.height,1,et,Ot)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,j.width,j.height,D.depth,et,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,ft,j.width,j.height,D.depth,0,j.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,j.width,j.height,D.depth,et,lt,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,ft,j.width,j.height,D.depth,0,et,lt,j.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Et&&Bt&&e.texStorage2D(s.TEXTURE_2D,vt,ft,ht[0].width,ht[0].height);for(let ot=0,bt=ht.length;ot<bt;ot++)j=ht[ot],y.format!==zn?et!==null?Et?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,j.width,j.height,et,j.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,ft,j.width,j.height,0,j.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,j.width,j.height,et,lt,j.data):e.texImage2D(s.TEXTURE_2D,ot,ft,j.width,j.height,0,et,lt,j.data)}else if(y.isDataArrayTexture)if(Et){if(Bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ft,D.width,D.height,D.depth),k)if(y.layerUpdates.size>0){let ot=xu(D.width,D.height,y.format,y.type);for(let bt of y.layerUpdates){let Tt=D.data.subarray(bt*ot/D.data.BYTES_PER_ELEMENT,(bt+1)*ot/D.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,bt,D.width,D.height,1,et,lt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,et,lt,D.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,D.width,D.height,D.depth,0,et,lt,D.data);else if(y.isData3DTexture)Et?(Bt&&e.texStorage3D(s.TEXTURE_3D,vt,ft,D.width,D.height,D.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,et,lt,D.data)):e.texImage3D(s.TEXTURE_3D,0,ft,D.width,D.height,D.depth,0,et,lt,D.data);else if(y.isFramebufferTexture){if(Bt)if(Et)e.texStorage2D(s.TEXTURE_2D,vt,ft,D.width,D.height);else{let ot=D.width,bt=D.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,ft,ot,bt,0,et,lt,null),ot>>=1,bt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let ot=s.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),D.parentNode!==ot){ot.appendChild(D),f.add(y),ot.onpaint=bt=>{let Tt=bt.changedElements;for(let ut of f)Tt.includes(ut.image)&&(ut.needsUpdate=!0)},ot.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,D);else{let Tt=s.RGBA,ut=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,ut,Ot,D)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(Et&&Bt){let ot=Qt(ht[0]);e.texStorage2D(s.TEXTURE_2D,vt,ft,ot.width,ot.height)}for(let ot=0,bt=ht.length;ot<bt;ot++)j=ht[ot],Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,et,lt,j):e.texImage2D(s.TEXTURE_2D,ot,ft,et,lt,j);y.generateMipmaps=!1}else if(Et){if(Bt){let ot=Qt(D);e.texStorage2D(s.TEXTURE_2D,vt,ft,ot.width,ot.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et,lt,D)}else e.texImage2D(s.TEXTURE_2D,0,ft,et,lt,D);g(y)&&v($),H.__version=gt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function zt(P,y,q){if(y.image.length!==6)return;let $=Zt(P,y),it=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);let gt=n.get(it);if(it.version!==gt.__version||$===!0){e.activeTexture(s.TEXTURE0+q);let H=ie.getPrimaries(ie.workingColorSpace),z=y.colorSpace===Pi?null:ie.getPrimaries(y.colorSpace),D=y.colorSpace===Pi||H===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let et=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let ut=0;ut<6;ut++)!et&&!lt?ft[ut]=m(y.image[ut],!0,i.maxCubemapSize):ft[ut]=lt?y.image[ut].image:y.image[ut],ft[ut]=re(y,ft[ut]);let j=ft[0],ht=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),Bt=b(y.internalFormat,ht,Et,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,vt=gt.__version===void 0||$===!0,ot=it.dataReady,bt=w(y,j);Yt(s.TEXTURE_CUBE_MAP,y);let Tt;if(et){k&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Bt,j.width,j.height);for(let ut=0;ut<6;ut++){Tt=ft[ut].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){let Ft=Tt[Ot];y.format!==zn?ht!==null?k?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,0,0,Ft.width,Ft.height,ht,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,Bt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,0,0,Ft.width,Ft.height,ht,Et,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot,Bt,Ft.width,Ft.height,0,ht,Et,Ft.data)}}}else{if(Tt=y.mipmaps,k&&vt){Tt.length>0&&bt++;let ut=Qt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Bt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(lt){k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ft[ut].width,ft[ut].height,ht,Et,ft[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Bt,ft[ut].width,ft[ut].height,0,ht,Et,ft[ut].data);for(let Ot=0;Ot<Tt.length;Ot++){let Ae=Tt[Ot].image[ut].image;k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,0,0,Ae.width,Ae.height,ht,Et,Ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,Bt,Ae.width,Ae.height,0,ht,Et,Ae.data)}}else{k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ht,Et,ft[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Bt,ht,Et,ft[ut]);for(let Ot=0;Ot<Tt.length;Ot++){let Ft=Tt[Ot];k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,0,0,ht,Et,Ft.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ot+1,Bt,ht,Et,Ft.image[ut])}}}g(y)&&v(s.TEXTURE_CUBE_MAP),gt.__version=it.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ct(P,y,q,$,it,gt){let H=r.convert(q.format,q.colorSpace),z=r.convert(q.type),D=b(q.internalFormat,H,z,q.normalized,q.colorSpace),et=n.get(y),lt=n.get(q);if(lt.__renderTarget=y,!et.__hasExternalTextures){let ft=Math.max(1,y.width>>gt),j=Math.max(1,y.height>>gt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,gt,D,ft,j,y.depth,0,H,z,null):e.texImage2D(it,gt,D,ft,j,0,H,z,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,it,lt.__webglTexture,0,Ht(y)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,it,lt.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(P,y,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){let $=y.depthTexture,it=$&&$.isDepthTexture?$.type:null,gt=S(y.stencilBuffer,it),H=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(y),gt,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(y),gt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,gt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,P)}else{let $=y.textures;for(let it=0;it<$.length;it++){let gt=$[it],H=r.convert(gt.format,gt.colorSpace),z=r.convert(gt.type),D=b(gt.internalFormat,H,z,gt.normalized,gt.colorSpace);qt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(y),D,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(y),D,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,D,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(P,y,q){let $=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(y.depthTexture);if(it.__renderTarget=y,(!it.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(it.__webglInit===void 0&&(it.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),it.__webglTexture===void 0){it.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,y.depthTexture);let et=r.convert(y.depthTexture.format),lt=r.convert(y.depthTexture.type),ft;y.depthTexture.format===ri?ft=s.DEPTH_COMPONENT24:y.depthTexture.format===ss&&(ft=s.DEPTH24_STENCIL8);for(let j=0;j<6;j++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ft,y.width,y.height,0,et,lt,null)}}else Y(y.depthTexture,0);let gt=it.__webglTexture,H=Ht(y),z=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,D=y.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ri)qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,D,z,gt,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,D,z,gt,0);else if(y.depthTexture.format===ss)qt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,D,z,gt,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,D,z,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(P){let y=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",it)};$.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=$}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let $=0;$<6;$++)oe(y.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?oe(y.__webglFramebuffer[0],P,0):oe(y.__webglFramebuffer,P,0)}else if(q){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),Vt(y.__webglDepthbuffer[$],P,!1);else{let it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,gt)}}else{let $=P.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Vt(y.__webglDepthbuffer,P,!1);else{let it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,gt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(P,y,q){let $=n.get(P);y!==void 0&&Ct($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ct(P)}function pt(P){let y=P.texture,q=n.get(P),$=n.get(y);P.addEventListener("dispose",_);let it=P.textures,gt=P.isWebGLCubeRenderTarget===!0,H=it.length>1;if(H||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++),gt){q.__webglFramebuffer=[];for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[z]=[];for(let D=0;D<y.mipmaps.length;D++)q.__webglFramebuffer[z][D]=s.createFramebuffer()}else q.__webglFramebuffer[z]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let z=0;z<y.mipmaps.length;z++)q.__webglFramebuffer[z]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(H)for(let z=0,D=it.length;z<D;z++){let et=n.get(it[z]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&qt(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let z=0;z<it.length;z++){let D=it[z];q.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[z]);let et=r.convert(D.format,D.colorSpace),lt=r.convert(D.type),ft=b(D.internalFormat,et,lt,D.normalized,D.colorSpace,P.isXRRenderTarget===!0),j=Ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,ft,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,q.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,y);for(let z=0;z<6;z++)if(y.mipmaps&&y.mipmaps.length>0)for(let D=0;D<y.mipmaps.length;D++)Ct(q.__webglFramebuffer[z][D],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,D);else Ct(q.__webglFramebuffer[z],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);g(y)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(H){for(let z=0,D=it.length;z<D;z++){let et=it[z],lt=n.get(et),ft=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),Yt(ft,et),Ct(q.__webglFramebuffer,P,et,s.COLOR_ATTACHMENT0+z,ft,0),g(et)&&v(ft)}e.unbindTexture()}else{let z=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(z=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(z,$.__webglTexture),Yt(z,y),y.mipmaps&&y.mipmaps.length>0)for(let D=0;D<y.mipmaps.length;D++)Ct(q.__webglFramebuffer[D],P,y,s.COLOR_ATTACHMENT0,z,D);else Ct(q.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,z,0);g(y)&&v(z),e.unbindTexture()}P.depthBuffer&&ct(P)}function mt(P){let y=P.textures;for(let q=0,$=y.length;q<$;q++){let it=y[q];if(g(it)){let gt=A(P),H=n.get(it).__webglTexture;e.bindTexture(gt,H),v(gt),e.unbindTexture()}}}let _t=[],Gt=[];function Dt(P){if(P.samples>0){if(qt(P)===!1){let y=P.textures,q=P.width,$=P.height,it=s.COLOR_BUFFER_BIT,gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=n.get(P),z=y.length>1;if(z)for(let et=0;et<y.length;et++)e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,H.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,H.__webglMultisampledFramebuffer);let D=P.texture.mipmaps;D&&D.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,H.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let et=0;et<y.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,H.__webglColorRenderbuffer[et]);let lt=n.get(y[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,q,$,0,0,q,$,it,s.NEAREST),c===!0&&(_t.length=0,Gt.length=0,_t.push(s.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(_t.push(gt),Gt.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let et=0;et<y.length;et++){e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,H.__webglColorRenderbuffer[et]);let lt=n.get(y[et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,H.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,H.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ht(P){return Math.min(i.maxSamples,P.samples)}function qt(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=o.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function re(P,y){let q=P.colorSpace,$=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==oo&&q!==Pi&&(ie.getTransfer(q)===pe?($!==zn||it!==Mn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",q)),y}function Qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=J,this.rebindTextures=dt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xb(s,t){function e(n,i=Pi){let r,o=ie.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Lc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===su)return s.BYTE;if(n===ru)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Pc)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===cu)return s.ALPHA;if(n===lu)return s.RGB;if(n===zn)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===Fc)return s.RED;if(n===Dc)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===Bc)return s.RG_INTEGER;if(n===Uc)return s.RGBA_INTEGER;if(n===Vo||n===Go||n===Ho||n===Wo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===zc||n===kc||n===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Hc||n===Wc||n===qc||n===Xc||n===qo||n===Yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Hc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return r.COMPRESSED_RG11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===Zc||n===Kc||n===Jc||n===jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ll||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===Xo||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:_b,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Pu,g={},v=e.getContextAttributes(),A=null,b=null,S=[],w=[],T=new St,_=null,C=null,R=new Ke;R.viewport=new Ne;let L=new Ke;L.viewport=new Ne;let U=[R,L],N=new Tc,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let rt=S[nt];return rt===void 0&&(rt=new pr,S[nt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(nt){let rt=S[nt];return rt===void 0&&(rt=new pr,S[nt]=rt),rt.getGripSpace()},this.getHand=function(nt){let rt=S[nt];return rt===void 0&&(rt=new pr,S[nt]=rt),rt.getHandSpace()};function B(nt){let rt=w.indexOf(nt.inputSource);if(rt===-1)return;let yt=S[rt];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,l||o),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let nt=0;nt<S.length;nt++){let rt=w[nt];rt!==null&&(w[nt]=null,S[nt].disconnect(rt))}I=null,F=null,m.reset();for(let nt in g)delete g[nt];if(t.setRenderTarget(A),d=null,h=null,f=null,i=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),C!==null){let nt=C.camera;nt.fov=C.fov,nt.zoom=C.zoom,nt.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(nt){if(i=nt,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,zt=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?ss:ri,zt=v.stencil?Tr:Zn);let Vt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Vt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Sn(h.textureWidth,h.textureHeight,{format:zn,type:Mn,depthTexture:new Ji(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Sn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(nt){for(let rt=0;rt<nt.removed.length;rt++){let yt=nt.removed[rt],zt=w.indexOf(yt);zt>=0&&(w[zt]=null,S[zt].disconnect(yt))}for(let rt=0;rt<nt.added.length;rt++){let yt=nt.added[rt],zt=w.indexOf(yt);if(zt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=w.length){w.push(yt),zt=Vt;break}else if(w[Vt]===null){w[Vt]=yt,zt=Vt;break}if(zt===-1)break}let Ct=S[zt];Ct&&Ct.connect(yt)}}let X=new V,tt=new V;function J(nt,rt,yt){X.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(yt.matrixWorld);let zt=X.distanceTo(tt),Ct=rt.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,oe=Ct[14]/(Ct[10]-1),ct=Ct[14]/(Ct[10]+1),dt=(Ct[9]+1)/Ct[5],pt=(Ct[9]-1)/Ct[5],mt=(Ct[8]-1)/Ct[0],_t=(Vt[8]+1)/Vt[0],Gt=oe*mt,Dt=oe*_t,Ht=zt/(-mt+_t),qt=Ht*-mt;if(rt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(qt),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(rt.projectionMatrix),nt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let O=oe+Ht,re=ct+Ht,Qt=Gt-qt,P=Dt+(zt-qt),y=dt*ct/re*O,q=pt*ct/re*O;nt.projectionMatrix.makePerspective(Qt,P,y,q,O,re),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function st(nt,rt){rt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(rt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(i===null)return;let rt=nt.near,yt=nt.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),N.near=L.near=R.near=rt,N.far=L.far=R.far=yt,(I!==N.near||F!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=nt.layers.mask|6,R.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let zt=nt.parent,Ct=N.cameras;st(N,zt);for(let Vt=0;Vt<Ct.length;Vt++)st(Ct[Vt],zt);Ct.length===2?J(N,R,L):N.projectionMatrix.copy(R.projectionMatrix),C===null&&nt.isPerspectiveCamera&&(C={camera:nt,fov:nt.fov,zoom:nt.zoom}),xt(nt,N,zt)};function xt(nt,rt,yt){yt===null?nt.matrix.copy(rt.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(rt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(rt.projectionMatrix),nt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=dr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(nt){c=nt,h!==null&&(h.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(nt){return g[nt]};let kt=null;function Yt(nt,rt){if(u=rt.getViewerPose(l||o),p=rt,u!==null){let yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let zt=!1;yt.length!==N.cameras.length&&(N.cameras.length=0,zt=!0);for(let ct=0;ct<yt.length;ct++){let dt=yt[ct],pt=null;if(d!==null)pt=d.getViewport(dt);else{let _t=f.getViewSubImage(h,dt);pt=_t.viewport,ct===0&&(t.setRenderTargetTextures(b,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(b))}let mt=U[ct];mt===void 0&&(mt=new Ke,mt.layers.enable(ct),mt.viewport=new Ne,U[ct]=mt),mt.matrix.fromArray(dt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(dt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(pt.x,pt.y,pt.width,pt.height),ct===0&&(N.matrix.copy(mt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),zt===!0&&N.cameras.push(mt)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ct=f.getDepthInformation(yt[0]);ct&&ct.isValid&&ct.texture&&m.init(ct,i.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ct=0;ct<yt.length;ct++){let dt=yt[ct].camera;if(dt){let pt=g[dt];pt||(pt=new bo,g[dt]=pt);let mt=f.getCameraImage(dt);pt.sourceTexture=mt}}}}for(let yt=0;yt<S.length;yt++){let zt=w[yt],Ct=S[yt];zt!==null&&Ct!==void 0&&Ct.update(zt,rt,l||o)}kt&&kt(nt,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}let Zt=new Lp;Zt.setAnimationLoop(Yt),this.setAnimationLoop=function(nt){kt=nt},this.dispose=function(){}}},yb=new me,Op=new $t;Op.set(-1,0,0,0,1,0,0,0,1);function bb(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,pu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,A,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,v,A):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),A=v.envMap,b=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Op),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sb(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let w=S.program;n.uniformBlockBinding(b,w)}function l(b,S){let w=i[b.id];w===void 0&&(m(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",v));let T=S.program;n.updateUBOMapping(b,T);let _=t.render.frame;r[b.id]!==_&&(h(b),r[b.id]=_)}function u(b){let S=f();b.__bindingPointIndex=S;let w=s.createBuffer(),T=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let S=i[b.id],w=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,C=w.length;_<C;_++){let R=w[_];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)d(R[L],_,L,T);else d(R,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,S,w,T){if(x(b,S,w,T)===!0){let _=b.__offset,C=b.value;if(Array.isArray(C)){let R=0;for(let L=0;L<C.length;L++){let U=C[L],N=g(U);p(U,b.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(C,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function p(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function x(b,S,w,T){let _=b.value,C=S+"_"+w;if(T[C]===void 0)return typeof _=="number"||typeof _=="boolean"?T[C]=_:ArrayBuffer.isView(_)?T[C]=_.slice():T[C]=_.clone(),!0;{let R=T[C];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(b){let S=b.uniforms,w=0,T=16;for(let C=0,R=S.length;C<R;C++){let L=Array.isArray(S[C])?S[C]:[S[C]];for(let U=0,N=L.length;U<N;U++){let I=L[U],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,W=F.length;B<W;B++){let Y=F[B],X=g(Y),tt=w%T,J=tt%X.boundary,st=tt+J;w+=J,st!==0&&T-st<X.storage&&(w+=T-st),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=X.storage}}}let _=w%T;return _>0&&(w+=T-_),b.__size=w,b.__cache={},this}function g(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",b),S}function v(b){let S=b.target;S.removeEventListener("dispose",v);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function A(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:A}}var Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function wb(){return li===null&&(li=new xo(Mb,16,16,rs,Kn),li.name="DFG_LUT",li.minFilter=Je,li.magFilter=Je,li.wrapS=si,li.wrapT=si,li.generateMipmaps=!1,li.needsUpdate=!0),li}var bl=class{constructor(t={}){let{canvas:e=Qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Uc,Bc,Dc]),g=new Set([Mn,Zn,Er,Tr,Lc,Nc]),v=new Uint32Array(4),A=new Int32Array(4),b=new V,S=null,w=null,T=[],_=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,N=null,I=null,F=null;this._outputColorSpace=Ze;let B=0,W=0,Y=null,X=-1,tt=null,J=new Ne,st=new Ne,xt=null,kt=new Kt(0),Yt=0,Zt=e.width,nt=e.height,rt=1,yt=null,zt=null,Ct=new Ne(0,0,Zt,nt),Vt=new Ne(0,0,Zt,nt),oe=!1,ct=new gr,dt=!1,pt=!1,mt=new me,_t=new V,Gt=new Ne,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function qt(){return Y===null?rt:1}let O=n;function re(M,G){return e.getContext(M,G)}let Qt,P,y,q,$,it,gt,H,z,D,et,lt,ft,j,ht,Et,Bt,k,vt,ot,bt,Tt,ut;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),O===null){let G="webgl2";if(O=re(G,M),O===null)throw re(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(M){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Xt("WebGLRenderer: "+M.message),M}function Ot(){Qt=new Pv(O),Qt.init(),bt=new xb(O,Qt),P=new bv(O,Qt,t,bt),y=new mb(O,Qt),P.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),N=O.createFramebuffer(),I=O.createFramebuffer(),F=O.createFramebuffer(),q=new Fv(O),$=new eb,it=new gb(O,Qt,y,$,P,bt,q),gt=new Iv(R),H=new B0(O),Tt=new vv(O,H),z=new Lv(O,H,q,Tt),D=new Bv(O,z,H,Tt,q),k=new Dv(O,P,it),ht=new Sv($),et=new tb(R,gt,Qt,P,Tt,ht),lt=new bb(R,$),ft=new ib,j=new lb(Qt),Bt=new _v(R,gt,y,D,p,c),Et=new pb(R,D,P),ut=new Sb(O,q,P,y),vt=new yv(O,Qt,q),ot=new Nv(O,Qt,q),q.programs=et.programs,R.capabilities=P,R.extensions=Qt,R.properties=$,R.renderLists=ft,R.shadowMap=Et,R.state=y,R.info=q}x!==Mn&&(C=new Ov(x,e.width,e.height,a,i,r));let Ft=new Lu(R,O);this.xr=Ft,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(M){M!==void 0&&(rt=M,this.setSize(Zt,nt,!1))},this.getSize=function(M){return M.set(Zt,nt)},this.setSize=function(M,G,Q=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=M,nt=G,e.width=Math.floor(M*rt),e.height=Math.floor(G*rt),Q===!0&&(e.style.width=M+"px",e.style.height=G+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(Zt*rt,nt*rt).floor()},this.setDrawingBufferSize=function(M,G,Q){Zt=M,nt=G,rt=Q,e.width=Math.floor(M*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(x===Mn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,G,Q,Z){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,G,Q,Z),y.viewport(J.copy(Ct).multiplyScalar(rt).round())},this.getScissor=function(M){return M.copy(Vt)},this.setScissor=function(M,G,Q,Z){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,G,Q,Z),y.scissor(st.copy(Vt).multiplyScalar(rt).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){y.setScissorTest(oe=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){zt=M},this.getClearColor=function(M){return M.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,Q=!0){let Z=0;if(M){let K=!1;if(Y!==null){let At=Y.texture.format;K=m.has(At)}if(K){let At=Y.texture.type,It=g.has(At),wt=Bt.getClearColor(),Pt=Bt.getClearAlpha(),Ut=wt.r,Jt=wt.g,ne=wt.b;It?(v[0]=Ut,v[1]=Jt,v[2]=ne,v[3]=Pt,O.clearBufferuiv(O.COLOR,0,v)):(A[0]=Ut,A[1]=Jt,A[2]=ne,A[3]=Pt,O.clearBufferiv(O.COLOR,0,A))}else Z|=O.COLOR_BUFFER_BIT}G&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Bt.dispose(),ft.dispose(),j.dispose(),$.dispose(),gt.dispose(),D.dispose(),Tt.dispose(),ut.dispose(),et.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Pd),Ft.removeEventListener("sessionend",Ld),ys.stop()};function Ae(M){M.preventDefault(),uu("WebGLRenderer: Context Lost."),L=!0}function de(){uu("WebGLRenderer: Context Restored."),L=!1;let M=q.autoReset,G=Et.enabled,Q=Et.autoUpdate,Z=Et.needsUpdate,K=Et.type;Ot(),q.autoReset=M,Et.enabled=G,Et.autoUpdate=Q,Et.needsUpdate=Z,Et.type=K}function Gn(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ei(M){let G=M.target;G.removeEventListener("dispose",ei),rg(G)}function rg(M){og(M),$.remove(M)}function og(M){let G=$.get(M).programs;G!==void 0&&(G.forEach(function(Q){et.releaseProgram(Q)}),M.isShaderMaterial&&et.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,Q,Z,K,At){G===null&&(G=Dt);let It=K.isMesh&&K.matrixWorld.determinantAffine()<0,wt=lg(M,G,Q,Z,K);y.setMaterial(Z,It);let Pt=Q.index,Ut=1;if(Z.wireframe===!0){if(Pt=z.getWireframeAttribute(Q),Pt===void 0)return;Ut=2}let Jt=Q.drawRange,ne=Q.attributes.position,Lt=Jt.start*Ut,fe=(Jt.start+Jt.count)*Ut;At!==null&&(Lt=Math.max(Lt,At.start*Ut),fe=Math.min(fe,(At.start+At.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),fe=Math.min(fe,Pt.count)):ne!=null&&(Lt=Math.max(Lt,0),fe=Math.min(fe,ne.count));let Oe=fe-Lt;if(Oe<0||Oe===1/0)return;Tt.setup(K,Z,wt,Q,Pt);let Re,Me=vt;if(Pt!==null&&(Re=H.get(Pt),Me=ot,Me.setIndex(Re)),K.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*qt()),Me.setMode(O.LINES)):Me.setMode(O.TRIANGLES);else if(K.isLine){let nn=Z.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*qt()),K.isLineSegments?Me.setMode(O.LINES):K.isLineLoop?Me.setMode(O.LINE_LOOP):Me.setMode(O.LINE_STRIP)}else K.isPoints?Me.setMode(O.POINTS):K.isSprite&&Me.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let nn=K._multiDrawStarts,Rt=K._multiDrawCounts,un=K._multiDrawCount,ae=Pt?H.get(Pt).bytesPerElement:1,Fn=$.get(Z).currentProgram.getUniforms();for(let ni=0;ni<un;ni++)Fn.setValue(O,"_gl_DrawID",ni),Me.render(nn[ni]/ae,Rt[ni])}else if(K.isInstancedMesh)Me.renderInstances(Lt,Oe,K.count);else if(Q.isInstancedBufferGeometry){let nn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,nn);Me.renderInstances(Lt,Oe,Rt)}else Me.render(Lt,Oe)};function Id(M,G,Q,Z){U!==null&&M.isNodeMaterial&&U.setObject(Z,M),dt===!0&&ht.setState(M,Q,!1),M.transparent===!0&&M.side===Un&&M.forceSinglePass===!1?(M.side=mn,M.needsUpdate=!0,va(M,G,Z),M.side=es,M.needsUpdate=!0,va(M,G,Z),M.side=Un):va(M,G,Z)}this.compile=function(M,G,Q=null){Q===null&&(Q=M),U!==null&&U.renderStart(M,G,Q),w=j.get(Q),w.init(G),_.push(w),Q.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),M!==Q&&M.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),pt=this.localClippingEnabled,dt=ht.init(this.clippingPlanes,pt),dt===!0&&ht.setGlobalState(this.clippingPlanes,G),U!==null&&Et.render(w.state.shadowsArray,Q,G);let Z=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let At=K.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let wt=At[It];Id(wt,Q,G,K),Z.add(wt)}else Id(At,Q,G,K),Z.add(At)}),w=_.pop(),U!==null&&U.renderEnd(),Z},this.compileAsync=function(M,G,Q=null){let Z=this.compile(M,G,Q);return new Promise(K=>{function At(){if(Z.forEach(function(It){let Pt=$.get(It).currentProgram;(Pt===void 0||Pt.isReady())&&Z.delete(It)}),Z.size===0){K(M);return}setTimeout(At,10)}Qt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let rh=null;function ag(M){rh&&rh(M)}function Pd(){ys.stop()}function Ld(){ys.start()}let ys=new Lp;ys.setAnimationLoop(ag),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(M){rh=M,Ft.setAnimationLoop(M),M===null?ys.stop():ys.start()},Ft.addEventListener("sessionstart",Pd),Ft.addEventListener("sessionend",Ld),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,G);let Q=Ft.enabled===!0&&Ft.isPresenting===!0,Z=C!==null&&(Y===null||Q)&&C.begin(R,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(G),G=Ft.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,G,Y),w=j.get(M,_.length),w.init(G),w.state.textureUnits=it.getTextureUnits(),_.push(w),mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ct.setFromProjectionMatrix(mt,Yn,G.reversedDepth),pt=this.localClippingEnabled,dt=ht.init(this.clippingPlanes,pt),S=ft.get(M,T.length),S.init(),T.push(S),Ft.enabled===!0&&Ft.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&oh(It,G,-1/0,R.sortObjects)}oh(M,G,0,R.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(yt,zt),Ht=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Ht&&Bt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&ht.beginShadows();let K=w.state.shadowsArray;if(Et.render(K,M,G),dt===!0&&ht.endShadows(),(Z&&C.hasRenderPass())===!1){let It=S.opaque,wt=S.transmissive;if(w.setupLights(),G.isArrayCamera){let Pt=G.cameras;if(wt.length>0)for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let ne=Pt[Ut];Fd(It,wt,M,ne)}Ht&&Bt.render(M);for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let ne=Pt[Ut];Nd(S,M,ne,ne.viewport)}}else wt.length>0&&Fd(It,wt,M,G),Ht&&Bt.render(M),Nd(S,M,G)}Y!==null&&W===0&&(it.updateMultisampleRenderTarget(Y),it.updateRenderTargetMipmap(Y)),Z&&C.end(R),M.isScene===!0&&M.onAfterRender(R,M,G),Tt.resetDefaultState(),X=-1,tt=null,_.pop(),_.length>0?(w=_[_.length-1],it.setTextureUnits(w.state.textureUnits),dt===!0&&ht.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,U!==null&&U.renderEnd()};function oh(M,G,Q,Z){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ct)){Z&&Gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(mt);let It=D.update(M),wt=M.material;wt.visible&&S.push(M,It,wt,Q,Gt.z,null,G)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ct))){let It=D.update(M),wt=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Gt.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Gt.copy(It.boundingSphere.center)),Gt.applyMatrix4(M.matrixWorld).applyMatrix4(mt)),Array.isArray(wt)){let Pt=It.groups;for(let Ut=0,Jt=Pt.length;Ut<Jt;Ut++){let ne=Pt[Ut],Lt=wt[ne.materialIndex];Lt&&Lt.visible&&S.push(M,It,Lt,Q,Gt.z,ne,G)}}else wt.visible&&S.push(M,It,wt,Q,Gt.z,null,G)}}let At=M.children;for(let It=0,wt=At.length;It<wt;It++)oh(At[It],G,Q,Z)}function Nd(M,G,Q,Z){let{opaque:K,transmissive:At,transparent:It}=M;w.setupLightsView(Q),dt===!0&&ht.setGlobalState(R.clippingPlanes,Q),Z&&y.viewport(J.copy(Z)),K.length>0&&_a(K,G,Q),At.length>0&&_a(At,G,Q),It.length>0&&_a(It,G,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Fd(M,G,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let Lt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new Sn(1,1,{generateMipmaps:!0,type:Lt?Kn:Mn,minFilter:is,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let At=w.state.transmissionRenderTarget[Z.id],It=Z.viewport||J;At.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(At),R.getClearColor(kt),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),Ht&&Bt.render(Q);let Jt=R.toneMapping;R.toneMapping=$n;let ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),dt===!0&&ht.setGlobalState(R.clippingPlanes,Z),_a(M,Q,Z),it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let fe=0,Oe=G.length;fe<Oe;fe++){let Re=G[fe],{object:Me,geometry:nn,material:Rt,group:un}=Re;if(Rt.side===Un&&Me.layers.test(Z.layers)){let ae=Rt.side;Rt.side=mn,Rt.needsUpdate=!0,Dd(Me,Q,Z,nn,Rt,un),Rt.side=ae,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At))}R.setRenderTarget(wt,Pt,Ut),R.setClearColor(kt,Yt),ne!==void 0&&(Z.viewport=ne),R.toneMapping=Jt}function _a(M,G,Q){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,At=M.length;K<At;K++){let It=M[K],{object:wt,geometry:Pt,group:Ut}=It,Jt=It.material;Jt.allowOverride===!0&&Z!==null&&(Jt=Z),wt.layers.test(Q.layers)&&Dd(wt,G,Q,Pt,Jt,Ut)}}function Dd(M,G,Q,Z,K,At){U!==null&&K.isNodeMaterial&&U.setObject(M,K),M.onBeforeRender(R,G,Q,Z,K,At),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(R,G,Q,Z,M,At),K.transparent===!0&&K.side===Un&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,R.renderBufferDirect(Q,G,Z,K,M,At),K.side=es,K.needsUpdate=!0,R.renderBufferDirect(Q,G,Z,K,M,At),K.side=Un):R.renderBufferDirect(Q,G,Z,K,M,At),M.onAfterRender(R,G,Q,Z,K,At)}function va(M,G,Q){G.isScene!==!0&&(G=Dt);let Z=$.get(M),K=w.state.lights,At=w.state.shadowsArray,It=K.state.version,wt=et.getParameters(M,K.state,At,G,Q,w.state.lightProbeGridArray),Pt=et.getProgramCacheKey(wt),Ut=Z.programs;Z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let Jt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Z.envMap=gt.get(M.envMap||Z.environment,Jt),Z.envMapRotation=Z.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",ei),Ut=new Map,Z.programs=Ut);let ne=Ut.get(Pt);if(ne!==void 0){if(Z.currentProgram===ne&&Z.lightsStateVersion===It)return Ud(M,wt),ne}else wt.uniforms=et.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,Q,wt),M.onBeforeCompile(wt,R),ne=et.acquireProgram(wt,Pt),Ut.set(Pt,ne),Z.uniforms=wt.uniforms;let Lt=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),Ud(M,wt),Z.needsLights=ug(M),Z.lightsStateVersion=It,Z.needsLights&&(Lt.ambientLightColor.value=K.state.ambient,Lt.lightProbe.value=K.state.probe,Lt.sunLights.value=K.state.sun,Lt.sunLightShadows.value=K.state.sunShadow,Lt.directionalLights.value=K.state.directional,Lt.directionalLightShadows.value=K.state.directionalShadow,Lt.spotLights.value=K.state.spot,Lt.spotLightShadows.value=K.state.spotShadow,Lt.rectAreaLights.value=K.state.rectArea,Lt.ltc_1.value=K.state.rectAreaLTC1,Lt.ltc_2.value=K.state.rectAreaLTC2,Lt.pointLights.value=K.state.point,Lt.pointLightShadows.value=K.state.pointShadow,Lt.hemisphereLights.value=K.state.hemi,Lt.sunShadowMatrix.value=K.state.sunShadowMatrix,Lt.sunShadowCascade.value=K.state.sunShadowCascade,Lt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Lt.spotLightMatrix.value=K.state.spotLightMatrix,Lt.spotLightMap.value=K.state.spotLightMap,Lt.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=ne,Z.uniformsList=null,ne}function Bd(M){if(M.uniformsList===null){let G=M.currentProgram.getUniforms();M.uniformsList=Pr.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function Ud(M,G){let Q=$.get(M);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function cg(M,G){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let Q=0,Z=M.length;Q<Z;Q++){let K=M[Q];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function lg(M,G,Q,Z,K){G.isScene!==!0&&(G=Dt),it.resetTextureUnits();let At=G.fog,It=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,wt=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ie.workingColorSpace,Pt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ut=gt.get(Z.envMap||It,Pt),Jt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Lt=!!Q.morphAttributes.position,fe=!!Q.morphAttributes.normal,Oe=!!Q.morphAttributes.color,Re=$n;Z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Re=R.toneMapping);let Me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nn=Me!==void 0?Me.length:0,Rt=$.get(Z),un=w.state.lights;if(dt===!0&&(pt===!0||M!==tt)){let Ee=M===tt&&Z.id===X;ht.setState(Z,M,Ee)}let ae=!1;Z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==wt||K.isBatchedMesh&&Rt.batching===!1||!K.isBatchedMesh&&Rt.batching===!0||K.isBatchedMesh&&Rt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Rt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Rt.instancing===!1||!K.isInstancedMesh&&Rt.instancing===!0||K.isSkinnedMesh&&Rt.skinning===!1||!K.isSkinnedMesh&&Rt.skinning===!0||K.isInstancedMesh&&Rt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Rt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Rt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Rt.instancingMorph===!1&&K.morphTexture!==null||Rt.envMap!==Ut||Z.fog===!0&&Rt.fog!==At||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ht.numPlanes||Rt.numIntersection!==ht.numIntersection)||Rt.vertexAlphas!==Jt||Rt.vertexTangents!==ne||Rt.morphTargets!==Lt||Rt.morphNormals!==fe||Rt.morphColors!==Oe||Rt.toneMapping!==Re||Rt.morphTargetsCount!==nn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Rt.__version=Z.version);let Fn=Rt.currentProgram;ae===!0&&(Fn=va(Z,G,K),U&&Z.isNodeMaterial&&U.onUpdateProgram(Z,Fn,Rt));let ni=!1,Gi=!1,Ws=!1,_e=Fn.getUniforms(),Ue=Rt.uniforms;if(y.useProgram(Fn.program)&&(ni=!0,Gi=!0,Ws=!0),Z.id!==X&&(X=Z.id,Gi=!0),Rt.needsLights){let Ee=cg(w.state.lightProbeGridArray,K);Rt.lightProbeGrid!==Ee&&(Rt.lightProbeGrid=Ee,Gi=!0)}if(ni||tt!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_e.setValue(O,"projectionMatrix",M.projectionMatrix),_e.setValue(O,"viewMatrix",M.matrixWorldInverse);let Wi=_e.map.cameraPosition;Wi!==void 0&&Wi.setValue(O,_t.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_e.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,Gi=!0,Ws=!0)}if(Rt.needsLights&&(un.state.sunShadowMap.length>0&&_e.setValue(O,"sunShadowMap",un.state.sunShadowMap,it),un.state.directionalShadowMap.length>0&&_e.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,it),un.state.spotShadowMap.length>0&&_e.setValue(O,"spotShadowMap",un.state.spotShadowMap,it),un.state.pointShadowMap.length>0&&_e.setValue(O,"pointShadowMap",un.state.pointShadowMap,it)),K.isSkinnedMesh){_e.setOptional(O,K,"bindMatrix"),_e.setOptional(O,K,"bindMatrixInverse");let Ee=K.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),_e.setValue(O,"boneTexture",Ee.boneTexture,it))}K.isBatchedMesh&&(_e.setOptional(O,K,"batchingTexture"),_e.setValue(O,"batchingTexture",K._matricesTexture,it),_e.setOptional(O,K,"batchingIdTexture"),_e.setValue(O,"batchingIdTexture",K._indirectTexture,it),_e.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&_e.setValue(O,"batchingColorTexture",K._colorsTexture,it));let Hi=Q.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&k.update(K,Q,Fn),(Gi||Rt.receiveShadow!==K.receiveShadow)&&(Rt.receiveShadow=K.receiveShadow,_e.setValue(O,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Ue.envMapIntensity.value=G.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=wb()),Gi){if(_e.setValue(O,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&hg(Ue,Ws),At&&Z.fog===!0&&lt.refreshFogUniforms(Ue,At),lt.refreshMaterialUniforms(Ue,Z,rt,nt,w.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ee=Rt.lightProbeGrid;Ue.probesSH.value=Ee.texture,Ue.probesMin.value.copy(Ee.boundingBox.min),Ue.probesMax.value.copy(Ee.boundingBox.max),Ue.probesResolution.value.copy(Ee.resolution)}Pr.upload(O,Bd(Rt),Ue,it)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Pr.upload(O,Bd(Rt),Ue,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_e.setValue(O,"center",K.center),_e.setValue(O,"modelViewMatrix",K.modelViewMatrix),_e.setValue(O,"normalMatrix",K.normalMatrix),_e.setValue(O,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Ee=Z.uniformsGroups;for(let Wi=0,qs=Ee.length;Wi<qs;Wi++){let zd=Ee[Wi];ut.update(zd,Fn),ut.bind(zd,Fn)}}return Fn}function hg(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.sunLights.needsUpdate=G,M.sunLightShadows.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function ug(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,G,Q){let Z=$.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),$.get(M.texture).__webglTexture=G,$.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){let Q=$.get(M);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(M,G=0,Q=0){Y=M,B=G,W=Q;let Z=null,K=!1,At=!1;if(M){let wt=$.get(M);if(wt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,wt.__webglFramebuffer),J.copy(M.viewport),st.copy(M.scissor),xt=M.scissorTest,y.viewport(J),y.scissor(st),y.setScissorTest(xt),X=-1;return}else if(wt.__webglFramebuffer===void 0)it.setupRenderTarget(M);else if(wt.__hasExternalTextures)it.rebindTextures(M,$.get(M.texture).__webglTexture,$.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Jt=M.depthTexture;if(wt.__boundDepthTexture!==Jt){if(Jt!==null&&$.has(Jt)&&(M.width!==Jt.image.width||M.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(M)}}let Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(At=!0);let Ut=$.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[G])?Z=Ut[G][Q]:Z=Ut[G],K=!0):M.samples>0&&it.useMultisampledRTT(M)===!1?Z=$.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?Z=Ut[Q]:Z=Ut,J.copy(M.viewport),st.copy(M.scissor),xt=M.scissorTest}else J.copy(Ct).multiplyScalar(rt).floor(),st.copy(Vt).multiplyScalar(rt).floor(),xt=oe;if(Q!==0&&(Z=N),y.bindFramebuffer(O.FRAMEBUFFER,Z)&&y.drawBuffers(M,Z),y.viewport(J),y.scissor(st),y.setScissorTest(xt),K){let wt=$.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,Q)}else if(At){let wt=G;for(let Pt=0;Pt<M.textures.length;Pt++){let Ut=$.get(M.textures[Pt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,Q,wt)}}else if(M!==null&&Q!==0){let wt=$.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,Q)}X=-1};function Od(M){let G=$.get(M);return(G.__readFormat!==M.format||G.__readType!==M.type)&&(G.__readFormat=M.format,G.__readType=M.type,G.__formatReadable=P.textureFormatReadable(M.format),G.__typeReadable=P.textureTypeReadable(M.type)),G}this.readRenderTargetPixels=function(M,G,Q,Z,K,At,It,wt=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt){y.bindFramebuffer(O.FRAMEBUFFER,Pt);try{let Ut=M.textures[wt],Jt=Ut.format,ne=Ut.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Lt=Od(Ut);if(Lt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-Z&&Q>=0&&Q<=M.height-K&&O.readPixels(G,Q,Z,K,bt.convert(Jt),bt.convert(ne),At)}finally{let Ut=Y!==null?$.get(Y).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,G,Q,Z,K,At,It,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=$.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt)if(G>=0&&G<=M.width-Z&&Q>=0&&Q<=M.height-K){y.bindFramebuffer(O.FRAMEBUFFER,Pt);let Ut=M.textures[wt],Jt=Ut.format,ne=Ut.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Lt=Od(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,fe),O.bufferData(O.PIXEL_PACK_BUFFER,At.byteLength,O.STREAM_READ),O.readPixels(G,Q,Z,K,bt.convert(Jt),bt.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Oe=Y!==null?$.get(Y).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Oe);let Re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ep(O,Re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,fe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,At),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(fe),O.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,Q=0){let Z=Math.pow(2,-Q),K=Math.floor(M.image.width*Z),At=Math.floor(M.image.height*Z),It=G!==null?G.x:0,wt=G!==null?G.y:0;it.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,It,wt,K,At),y.unbindTexture()},this.copyTextureToTexture=function(M,G,Q=null,Z=null,K=0,At=0){let It,wt,Pt,Ut,Jt,ne,Lt,fe,Oe,Re=M.isCompressedTexture?M.mipmaps[At]:M.image;if(Q!==null)It=Q.max.x-Q.min.x,wt=Q.max.y-Q.min.y,Pt=Q.isBox3?Q.max.z-Q.min.z:1,Ut=Q.min.x,Jt=Q.min.y,ne=Q.isBox3?Q.min.z:0;else{let Ue=Math.pow(2,-K);It=Math.floor(Re.width*Ue),wt=Math.floor(Re.height*Ue),M.isDataArrayTexture?Pt=Re.depth:M.isData3DTexture?Pt=Math.floor(Re.depth*Ue):Pt=1,Ut=0,Jt=0,ne=0}Z!==null?(Lt=Z.x,fe=Z.y,Oe=Z.z):(Lt=0,fe=0,Oe=0);let Me=bt.convert(G.format),nn=bt.convert(G.type),Rt;G.isData3DTexture?(it.setTexture3D(G,0),Rt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Rt=O.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Rt=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let un=y.getParameter(O.UNPACK_ROW_LENGTH),ae=y.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=y.getParameter(O.UNPACK_SKIP_PIXELS),ni=y.getParameter(O.UNPACK_SKIP_ROWS),Gi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ut),y.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let Ws=M.isDataArrayTexture||M.isData3DTexture,_e=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){let Ue=$.get(M),Hi=$.get(G),Ee=$.get(Ue.__renderTarget),Wi=$.get(Hi.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Ee.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let qs=0;qs<Pt;qs++)Ws&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(M).__webglTexture,K,ne+qs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(G).__webglTexture,At,Oe+qs)),O.blitFramebuffer(Ut,Jt,It,wt,Lt,fe,It,wt,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||$.has(M)){let Ue=$.get(M),Hi=$.get(G);y.bindFramebuffer(O.READ_FRAMEBUFFER,I),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Ee=0;Ee<Pt;Ee++)Ws?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,K,ne+Ee):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,K),_e?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Hi.__webglTexture,At,Oe+Ee):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Hi.__webglTexture,At),K!==0?O.blitFramebuffer(Ut,Jt,It,wt,Lt,fe,It,wt,O.COLOR_BUFFER_BIT,O.NEAREST):_e?O.copyTexSubImage3D(Rt,At,Lt,fe,Oe+Ee,Ut,Jt,It,wt):O.copyTexSubImage2D(Rt,At,Lt,fe,Ut,Jt,It,wt);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _e?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Rt,At,Lt,fe,Oe,It,wt,Pt,Me,nn,Re.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,At,Lt,fe,Oe,It,wt,Pt,Me,Re.data):O.texSubImage3D(Rt,At,Lt,fe,Oe,It,wt,Pt,Me,nn,Re):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,At,Lt,fe,It,wt,Me,nn,Re.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,At,Lt,fe,Re.width,Re.height,Me,Re.data):O.texSubImage2D(O.TEXTURE_2D,At,Lt,fe,It,wt,Me,nn,Re);y.pixelStorei(O.UNPACK_ROW_LENGTH,un),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),y.pixelStorei(O.UNPACK_SKIP_ROWS,ni),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Gi),At===0&&G.generateMipmaps&&O.generateMipmap(Rt),y.unbindTexture()},this.initRenderTarget=function(M){$.get(M).__webglFramebuffer===void 0&&it.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?it.setTextureCube(M,0):M.isData3DTexture?it.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?it.setTexture2DArray(M,0):it.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){B=0,W=0,Y=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var hs={ug:-3.15,eg:0,og:3.15,dg:6.3},Ko=.12,os=2.2,as=[],zp=[],Fu=[],wl=[],Nu=[],kp=[],Ab=0;function Te(s,t,e,n,i,r,o={}){let a={id:`${s}-${++Ab}`,kind:t,size:e,position:n,rotation:[0,0,0],color:i,floor:r,...o};return zp.push(a),a}function tn(s,t,e,n,i,r,o,a){let c=hs[e]??0,l={id:s,name:t,floor:e,color:a,bounds:{minX:n,maxX:n+r,minY:c,maxY:c+(e==="dg"?4.5:3.15),minZ:i,maxZ:i+o}};return as.push(l),l}tn("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");tn("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");tn("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");tn("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");tn("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");tn("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");tn("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");tn("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[s,t,e]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[i,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])tn(e[i],t[i],s,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][i]);let n=s==="ug"?"cellar":"upper";tn(`${n}-hall`,s==="ug"?"Kellerflur":"Flur & Lesenische",s,0,5,14,2,"#d1c1aa"),tn(`${n}-hall-south`,s==="ug"?"Kellerflur":"Lesenische",s,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,tn(`${n}-core`,`Treppenhaus \xB7 ${s==="ug"?"Keller":"OG"}`,s,5.5,0,3,5,"#d2b694")}tn("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");tn("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";tn("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";tn("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var Nr=tn("garden","Garten","garden",-5,-7,24,25,"#91aa6d");Nr.bounds.minY=-.15;Nr.bounds.maxY=14;var Qe=(s,t,e,n,i,r,o,a=1,c=!1)=>({a:s,b:t,type:"door",id:e,name:n,threshold:i,rooms:[r,o],swing:a,hingeEnd:c}),We=(s,t,e=!1,n=.95,i=2.3)=>({a:s,b:t,type:"window",open:e,sill:n,head:i});function Vp(s,t,e,n,i,r){Te(`${s}-cross-horizontal`,"window-bar",e?[i,.06,.2]:[.2,.06,i],[...n],"#fffdf5",t),Te(`${s}-cross-vertical`,"window-bar",e?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",t)}function we(s,t,e,n,i,r=[],o=3.15){let a=hs[s],c=s==="ug"?"#b5b5a4":s==="dg"?"#ded0b8":"#e6dfca",l=`${s}-wall-${t?"z":"x"}${e}-${n}`,u=(h,d,p,x,m="wall",g=c)=>{d-h<=.001||x-p<=.001||Te(l,m,t?[d-h,x-p,Ko]:[Ko,x-p,d-h],t?[(h+d)/2,a+(p+x)/2,e]:[e,a+(p+x)/2,(h+d)/2],g,s)},f=n;for(let h of[...r].sort((d,p)=>d.a-p.a)){u(f,h.a,0,o);let d=h.type==="door"?0:h.sill,p=h.type==="door"?os:h.head;u(h.a,h.b,0,d),u(h.a,h.b,p,o);let x=h.b-h.a,m=t?[(h.a+h.b)/2,a+(d+p)/2,e]:[e,a+(d+p)/2,(h.a+h.b)/2];if(wl.push({id:h.id||`${l}-window-${h.a}`,floor:s,type:h.type,open:h.open??!1,horizontal:t,fixed:e,from:h.a,to:h.b,sill:a+d,head:a+p,position:m}),h.type==="door"){let g=h.hingeEnd?h.b:h.a,v=t?[g,a+os/2,e]:[e,a+os/2,g],A=h.hingeEnd?-1:1,b=(t?-h.swing*A:h.swing*A)*Math.PI/2;Fu.push({id:h.id,name:h.name,threshold:h.threshold,rooms:h.rooms,floor:s,size:[x-.025,os-.025,.055],position:m,rotation:[0,t?0:Math.PI/2,0],hinge:{position:v,axis:"y",angle:b},color:s==="ug"?"#788c82":"#b99469",open:!1});let S=.035;for(let w of[h.a-S/2,h.b+S/2])Te(`${h.id}-frame`,"trim",t?[S,os,.18]:[.18,os,S],t?[w,a+os/2,e]:[e,a+os/2,w],"#f1e6cc",s)}else{h.open||(u(h.a,h.b,d,p,"glass","#a5d2dc"),Vp(`${l}-window-${h.a}`,s,t,m,x,p-d));let g=.035;for(let v of[d,p])Te(`${l}-sill`,"trim",t?[x,g,.18]:[.18,g,x],[m[0],a+v,m[2]],"#fbefcf",s);for(let v of[h.a,h.b])Te(`${l}-jamb`,"trim",t?[g,p-d,.15]:[.15,p-d,g],t?[v,m[1],e]:[e,m[1],v],"#fbefcf",s)}f=h.b}u(f,i,0,o)}function cs(s,t,e,n,i,r,o,a=hs[t]){Te(s,"floor",[i,.14,r],[e+i/2,a-.07,n+r/2],o,t)}for(let s of["ug","eg","og","dg"])s==="ug"?cs("cellar-floor",s,0,0,14,12,"#9d9f92"):(cs("west-floor",s,0,0,5.5,12,s==="dg"?"#9d7953":"#b99671"),cs("east-floor",s,8.5,0,5.5,12,s==="dg"?"#a68159":"#b99671"),cs("hall-floor",s,5.5,4,3,8,"#c8b391"));cs("garden-west","garden",-5,-7,5,25,"#83a363",0);cs("garden-east","garden",14,-7,5,25,"#8aab69",0);cs("garden-north","garden",0,-7,14,7,"#8cae6a",0);cs("garden-south","garden",0,12,14,6,"#92ad72",0);Te("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");Te("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");we("eg",!0,0,0,14,[Qe(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),Qe(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);we("eg",!0,12,0,14,[We(3.5,4.9,!0),Qe(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),We(12.45,13.5)]);we("eg",!1,0,0,12,[We(1.3,3.1),We(9,10.4)]);we("eg",!1,14,0,12,[We(1.2,2.4),We(8.8,9.5)]);we("eg",!1,5.5,0,12,[Qe(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),Qe(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);we("eg",!1,8.5,0,12,[Qe(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),Qe(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);we("eg",!0,5,5.5,8.5,[Qe(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);we("eg",!0,7,0,5.5,[Qe(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);we("eg",!0,7,8.5,14);we("eg",!1,11,7,12,[Qe(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),Qe(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);we("eg",!0,10,11,14);for(let[s,t]of[["hall-stairs",1],["front-door",-1]]){let e=Fu.find(n=>n.id===s);e.position[2]+=.095*t,e.hinge.position[2]+=.095*t,e.hinge.angle*=2}for(let s of["ug","og"]){let t=s==="ug",e=t?"cellar":"upper",n=t?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],i=t?[14,17,20,23]:[17,19,22,24];we(s,!1,5.5,0,5),we(s,!1,8.5,0,5),we(s,!0,5,0,14,[Qe(2.7,4,n[0],as.find(r=>r.id===n[0]).name,i[0],`${e}-hall`,n[0],-1),Qe(6.3,7.7,`${e}-stairs`,t?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",t?12:14,`${e}-core`,`${e}-hall`,1),Qe(10,11.4,n[1],as.find(r=>r.id===n[1]).name,i[1],`${e}-hall`,n[1],-1)]),we(s,!0,7,0,5.5,[Qe(3,4.4,n[2],as.find(r=>r.id===n[2]).name,i[2],`${e}-hall`,n[2],1)]),we(s,!0,7,8.5,14,[Qe(10,11.4,n[3],as.find(r=>r.id===n[3]).name,i[3],`${e}-hall`,n[3],1)]),we(s,!1,5.5,7,12),we(s,!1,8.5,7,12),we(s,!0,0,0,14,t?[We(1.1,2.8,!1,2.1,2.75),We(10.5,12,!1,2.1,2.75)]:[We(1.2,3.2),We(10.5,12)]),we(s,!0,12,0,14,t?[]:[We(1.2,3.2),We(10.5,12)]),we(s,!1,0,0,12,t?[]:[We(1.4,3.1),We(8.5,10.2,!0)]),we(s,!1,14,0,12,t?[]:[We(1.6,3.3,!0),We(9.8,11.2)])}for(let s of["ug","eg","og"]){let t=hs[s],e=10,n=3.15/2/e,i=3/e;for(let r=0;r<e;r++)Te("stair-left","stairs",[.85,.12,i+.015],[6.125,t+n*(r+1)-.06,3.85-i*(r+.5)],"#bba480",s),Te("stair-right","stairs",[.85,.12,i+.015],[7.875,t+3.15/2+n*(r+1)-.06,.85+i*(r+.5)],"#bba480",s);Te("stair-middle-landing","stairs",[2.6,.13,.5],[7,t+3.15/2-.065,.6],"#bba480",s);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])Te("stair-post","railing",[.035,.65,.035],[r,t+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",s)}var Gp=3.1/7,ls=Math.atan(Gp),ui=s=>7.45+Math.min(s,14-s)*Gp;we("dg",!1,0,0,12,[],1.15);we("dg",!1,14,0,12,[],1.15);we("dg",!1,5.5,0,5,[],3);we("dg",!1,8.5,0,5,[],3);we("dg",!0,5,5.5,8.5,[Qe(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function Hp(s,t){let e=[...new Set([0,14,...Array.from({length:55},(n,i)=>(i+1)*.25),...t.flatMap(n=>[n.a,n.b])])].sort((n,i)=>n-i);for(let n=1;n<e.length;n++){let i=e[n-1],r=e[n],o=Math.min(ui(i),ui(r))-6.3-.025,a=t.find(l=>(i+r)/2>l.a&&(i+r)/2<l.b),c=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[l,u]of c)u>l&&Te("gable","wall",[r-i,u-l,Ko],[(i+r)/2,6.3+(l+u)/2,s],"#ded0b8","dg")}for(let n of t){let i=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,s];wl.push({id:`dg-gable-window-${s}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:s,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:i}),Te("gable-window","glass",[n.b-n.a,n.head-n.sill,Ko],i,"#a5d2dc","dg"),Vp(`gable-window-${s}-${n.a}`,"dg",!0,i,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])Te("gable-window-frame","trim",[n.b-n.a,.035,.18],[i[0],6.3+r,s],"#fbefcf","dg");for(let r of[n.a,n.b])Te("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,i[1],s],"#fbefcf","dg")}for(let n of[3.5,10.5])Te("gable-sloping-cap","wall",[7/Math.cos(ls),.25,Ko],[n,ui(n)-.105,s],"#ded0b8","dg",{rotation:[0,0,n<7?ls:-ls]})}Hp(0,[We(1.8,3.2,!1,.6,1.65),We(10.5,12,!1,.6,1.65)]);Hp(12,[We(6,8,!1,.65,1.7)]);function Jo(s,t,e,n,i){Te(s,"roof",[(e-t)/Math.cos(ls),.14,i-n],[(t+e)/2,ui((t+e)/2),(n+i)/2],"#98705b","dg",{rotation:[0,0,t>=7?-ls:ls]})}Jo("roof-west-front",0,7,0,7.25);Jo("roof-west-back",0,7,9.15,12);Jo("roof-west-eave",0,.35,7.25,9.15);Jo("roof-west-upper",2,7,7.25,9.15);Jo("roof-east",7,14,0,12);wl.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,ui(1.175),8.2]});for(let s of[7.25,9.15])Te("roof-window-frame","trim",[1.65/Math.cos(ls),.055,.055],[1.175,ui(1.175),s],"#f3e2bf","dg",{rotation:[0,0,ls]});for(let s of[.35,2])Te("roof-window-frame","trim",[.055,.055,1.9],[s,ui(s),8.2],"#f3e2bf","dg");for(let s of[6.75,10.3]){for(let t of[3.4,10.6])Te("attic-post","beam",[.16,ui(t)-6.3,.16],[t,(6.3+ui(t))/2,s],"#74543a","dg");Te("attic-crossbeam","beam",[8,.16,.16],[7,8.7,s],"#74543a","dg")}function Du(s){return as.find(t=>t.id===s)?.floor||"garden"}function se(s,t,e,n,i,r,o){return Te(`${s}-${t}`,e,n,i,r,Du(s),{roomId:s,...o})}function us(s,t,e,n,i,r,o,a,c={}){let l={id:`${s}-${t}`,name:t,roomId:s,floor:Du(s),x:e,z:n,width:i,depth:r,height:o,kind:a,...c};return kp.push(l),l}function Li(s){return hs[Du(s)]??0}function wn(s,t,e,n,i,r,o=.78,a="#be986a"){us(s,t,e,n,i,r,o,"table",{underClearance:o-.065});let c=Li(s);se(s,t,"tabletop",[i,.065,r],[e+i/2,c+o-.0325,n+r/2],a);for(let l of[e+.07,e+i-.07])for(let u of[n+.07,n+r-.07])se(s,t,"table-leg",[.045,o-.065,.045],[l,c+(o-.065)/2,u],"#806548")}function gn(s,t,e,n,i=.6,r=.65,o="#80998c",a="south"){let c=Li(s),l=.49;us(s,t,e,n,i,r,.94,"chair",{underClearance:.435}),se(s,t,"chair-seat",[i,.055,r],[e+i/2,c+l-.0275,n+r/2],o);for(let f of[e+.055,e+i-.055])for(let h of[n+.055,n+r-.055])se(s,t,"chair-leg",[.035,.435,.035],[f,c+.2175,h],"#856c4c");let u=a==="south"||a==="north";se(s,t,"chair-back",u?[i,.45,.045]:[.045,.45,r],[u?e+i/2:a==="east"?e+.0225:e+i-.0225,c+.715,u?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function xe(s,t,e,n,i,r,o=1.7,a=null,c="#b28c60",l=!1){let u=Li(s);if(us(s,t,e,n,i,r,o,"cabinet",{back:a}),l){let f=i>=r;for(let h of[0,(f?i:r)-.045])se(s,t,"shelf-side",f?[.045,o,r]:[i,o,.045],[f?e+h+.0225:e+i/2,u+o/2,f?n+r/2:n+h+.0225],c);for(let h=.06;h<o;h+=.43)se(s,t,"shelf-board",[i,.035,r],[e+i/2,u+h,n+r/2],c);for(let h=0;h<5;h++){let d=.43*(h%Math.max(1,Math.floor(o/.43)))+.18;se(s,`${t}-books`,"books",f?[.24,.23,r*.72]:[i*.72,.23,.24],[f?e+i*(.2+.14*h):e+i/2,u+d,f?n+r/2:n+r*(.2+.14*h)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][h])}}else{se(s,t,"cabinet",[i,o,r],[e+i/2,u+o/2,n+r/2],c);let f=i>=r;for(let h=0;h<Math.max(1,Math.floor((f?i:r)/.55));h++){let d=Math.max(1,Math.floor((f?i:r)/.55)),p=f?[e+(h+.5)*i/d,u+o*.56,n+r-.012]:[e+i-.012,u+o*.56,n+(h+.5)*r/d];se(s,`${t}-handle`,"detail",f?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function ln(s,t,e,n,i,r,o,a){us(s,t,e,n,i,r,o,"solid"),se(s,t,"furniture",[i,o,r],[e+i/2,Li(s)+o/2,n+r/2],a)}function Al(s,t,e,n=.3,i=1.05){let r=Li(s);us(s,"Pflanze",t-n,e-n,n*2,n*2,i,"plant"),se(s,"pot","plant-pot",[n,.3,n],[t,r+.15,e],"#b68460"),se(s,"stem","plant-stem",[.035,i*.7,.035],[t,r+i*.47,e],"#627a48");for(let o=0;o<4;o++)se(s,"leaf","foliage",[n*.85,.07,n*.52],[t+Math.cos(o*1.8)*n*.45,r+i*(.65+.09*o),e+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function Wp(s,t,e,n,i){let r=Li(s);us(s,"Bett",t,e,n,i,.75,"bed"),se(s,"bed-base","bed",[n,.3,i],[t+n/2,r+.24,e+i/2],"#99704e"),se(s,"mattress","bed",[n-.06,.2,i-.06],[t+n/2,r+.49,e+i/2],"#ede1cc");let o=i>=n;se(s,"headboard","bed",o?[n,.85,.075]:[.075,.85,i],[o?t+n/2:t+.04,r+.425,o?e+.04:e+i/2],"#a47c56"),se(s,"blanket","bed",o?[n-.08,.06,i*.6]:[n*.6,.06,i-.08],[o?t+n/2:t+n*.65,r+.62,o?e+i*.65:e+i/2],s==="nursery"?"#87b2b0":"#b58e9b"),se(s,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,i*.7],[o?t+n/2:t+.4,r+.66,o?e+.4:e+i/2],"#fff1d8")}function qp(s,t,e){let n=Li(s);us(s,"Toilette",t,e,.78,.6,.82,"sanitary"),se(s,"cistern","sanitary",[.18,.82,.6],[t+.69,n+.41,e+.3],"#f5eee0"),se(s,"toilet-base","sanitary",[.43,.36,.35],[t+.34,n+.18,e+.3],"#ebe7db"),se(s,"toilet-seat","sanitary",[.57,.07,.51],[t+.315,n+.435,e+.3],"#faf5e7")}function Xp(s,t,e,n,i){ln(s,"Waschtisch",t,e,n,i,.76,"#9baeb1"),se(s,"basin","sanitary",[n,.09,i],[t+n/2,Li(s)+.805,e+i/2],"#f7eedc")}var ve=(s,t,e)=>({axis:s,value:t,edge:e});wn("dining","Esstisch",1.8,2.3,1.8,2.4);for(let s of[2.5,4])gn("dining",`Stuhl-west-${s}`,.85,s,.65,.6,"#ba9664","east"),gn("dining",`Stuhl-east-${s}`,3.95,s,.65,.6,"#ba9664","west");gn("dining","Stuhl-nord",2.4,1.3);gn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");xe("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,ve("z",0,"min"));xe("dining","Sideboard",.07,5.35,.55,1.3,.85,ve("x",0,"min"));Al("dining",1.2,6.3);ln("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");ln("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");xe("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,ve("x",0,"min"),"#d9ded1");wn("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");gn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);se("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let s of[8.2,8.65])se("kitchen","hob","detail",[.32,.018,.32],[.385,.925,s],"#4e5b5a");ln("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");se("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let s of[3.05,5.45])se("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,s+.125],"#5d8271");for(let s=0;s<3;s++)se("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*s],"#8aa48b");wn("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");xe("living","TV-Bank",8.57,2.65,.33,1.75,.5,ve("x",8.5,"min"),"#b69871");se("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");xe("living","Buecherregal",9,.07,2,.5,1.85,ve("z",0,"min"),"#b99466",!0);gn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");Al("living",13.4,6.4,.3);xe("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,ve("x",5.5,"min"));wn("hall","Sitzbank",8,10.35,.43,1,.45);Al("hall",5.95,11.5,.23);xe("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,ve("z",12,"max"),"#a5ad92");wn("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);xe("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,ve("z",7,"min"));qp("guest-wc",13.15,8.1);Xp("guest-wc",12.4,7.07,.9,.43);xe("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,ve("z",10,"max"),"#aec0b6");xe("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,ve("z",10,"min"),"#af9c76",!0);xe("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,ve("x",14,"max"));wn("workshop","Werkbank",.6,.07,3.5,.8,.87);xe("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,ve("x",5.5,"max"),"#929c8b");gn("workshop","Hocker",1.8,1.4);ln("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let s of[8.57,9.7])ln("laundry","Waschgeraet",s,.07,1,.98,.92,"#dfe3d8"),se("laundry","Waschfenster","detail",[.58,.58,.024],[s+.5,-3.15+.46,1.06],"#729498");wn("laundry","Waeschetisch",12,.07,1.8,.63);ln("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");wn("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");xe("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,ve("x",0,"min"),"#b49569",!0);xe("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,ve("x",5.5,"max"),"#b49569",!0);xe("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,ve("z",12,"max"));ln("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");ln("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");xe("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,ve("x",8.5,"min"),"#7c9790");xe("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,ve("z",12,"max"));xe("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,ve("x",0,"min"));xe("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,ve("x",14,"max"));Wp("bedroom",1.65,.07,2,2.55);ln("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");ln("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");xe("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,ve("x",0,"min"),"#b8aa92");wn("office","Schreibtisch",9,.07,2.8,.8);gn("office","Schreibtischstuhl",10,1.3);se("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");xe("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,ve("x",14,"max"),"#b7986e",!0);xe("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,ve("x",14,"max"),"#b7986e",!0);Wp("nursery",.07,7.07,2.4,1.2);wn("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);gn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");xe("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,ve("x",5.5,"max"),"#87a6a0",!0);for(let[s,t,e]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])ln("nursery",`Bauklotz-${s}`,t,e,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][s]);us("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");se("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let s of[7.12,8.02])se("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,s],"#f2efe3");for(let s of[11.8,13.88])se("bathroom","bath-end","sanitary",[.1,.58,1],[s,3.5,7.57],"#f2efe3");Xp("bathroom",8.57,9,.48,1.15);qp("bathroom",13.15,11.3);xe("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,ve("z",12,"max"),"#a6bab6");gn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");xe("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,ve("x",8.5,"max"),"#ad8e61",!0);xe("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,ve("x",0,"min"));xe("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,ve("x",14,"max"));for(let[s,t,e,n,i]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])ln("attic-west",`Koffer-${s}`,t,e,n,i,.48+s*.13,["#9b7658","#c3a071","#889687"][s]);wn("attic-east","Basteltisch",9.15,.07,2.4,1.1);gn("attic-east","Bastelstuhl",9.95,1.55);xe("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);wn("attic","Dachtisch",8.3,8.1,1.8,1);ln("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");ln("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");xe("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,ve("z",12,"max"));wn("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let s of[5.15,6.65])gn("garden",`Terrassenstuhl-N-${s}`,s,-3.25,.6,.65,"#9daa84"),gn("garden",`Terrassenstuhl-S-${s}`,s,-1,.6,.65,"#9daa84","north");gn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");gn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");wn("garden","Gartenbank",-4,4,2.5,.65,.52);ln("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let s=0;s<4;s++)for(let t of[16.1,16.9])Al("garden",t,5.4+.9*s,.18,1.02);for(let[s,t,e]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){se("garden","tree-trunk","tree",[.35,3.3,.35],[s,1.65,t],"#816442");for(let n=0;n<3;n++)se("garden","tree-crown","foliage",[e*1.25,e*.9,e*1.1],[s+Math.cos(n*2.1)*.45,3.1+n*.35,t+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let s of[-7,18])Te("boundary-hedge","boundary",[24,1.5,.25],[7,.75,s],"#6d8d59","garden");for(let s of[-5,19])Te("boundary-hedge","boundary",[.25,1.5,25],[s,.75,5.5],"#6d8d59","garden");function Fe(s,t){let e=Li(s);for(let[n,i,r,o=!1]of t)Nu.push({id:`${s}-star-${Nu.filter(a=>a.roomId===s).length+1}`,roomId:s,x:n,y:e+i,z:r,radius:o?.14:.22,under:o})}Fe("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);Fe("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);Fe("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);Fe("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);Fe("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);Fe("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);Fe("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);Fe("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);Fe("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);Fe("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);Fe("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);Fe("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);Fe("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);Fe("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);Fe("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);Fe("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);Fe("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);Fe("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);Fe("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);Fe("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);Fe("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);Fe("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);Fe("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[s,t]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])Fe(s,[[7,1.4,2.2],[7,2.5,3.3]]);var ye={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:as,doors:Fu,obstacles:zp,openings:wl,furniture:kp,collectibles:Nu,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function jo(s){let{x:t,y:e,z:n}=s;if(![t,e,n].every(Number.isFinite))return null;let i=o=>{let a=o.bounds;return t>=a.minX&&t<a.maxX&&e>=a.minY-.025&&e<a.maxY&&n>=a.minZ&&n<a.maxZ},r=as.find(o=>o.floor!=="garden"&&i(o));return r?r.floor==="dg"&&e>ui(Math.max(0,Math.min(14,t)))+.12?i(Nr)?Nr:null:r:i(Nr)?Nr:null}function Fr(s,t=!1){let e=[...s.rotation||[0,0,0]],n=[...s.position];if(t&&s.hinge){let i=s.hinge.position,r=s.hinge.angle,o=n[0]-i[0],a=n[2]-i[2];n[0]=i[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=i[2]-Math.sin(r)*o+Math.cos(r)*a,e[1]+=r}return{size:[...s.size],position:n,rotation:e}}var Eb=["classic","glider","dart","stunt"];var $p={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function Tb(s,t){let e=[0,1,2].map(n=>s.reduce((i,r)=>i+r[n],0)/s.length);return t.map(n=>{let[i,r,o]=n.map(f=>s[f]),a=r.map((f,h)=>f-i[h]),c=o.map((f,h)=>f-i[h]);return[a[1]*c[2]-a[2]*c[1],a[2]*c[0]-a[0]*c[2],a[0]*c[1]-a[1]*c[0]].reduce((f,h,d)=>f+h*(i[d]-e[d]),0)<0?[...n].reverse():n})}function El(s,t,e,n,i,r=0,o=0){let a=t.length,c=[-1,1].flatMap(u=>t.map(([f,h])=>[f*i,(o+Math.abs(f)*r+u*e/2)*i,h*i])),l=[Array.from({length:a},(u,f)=>f),Array.from({length:a},(u,f)=>f+a)];for(let u=0;u<a;u++)l.push([u,(u+1)%a,(u+1)%a+a,u+a]);return{id:s,kind:"convex",vertices:c,faces:Tb(c,l),color:n}}function Yp(s,t,e,n=20){return Array.from({length:n},(i,r)=>{let o=r*Math.PI*2/n;return[s/2*Math.cos(o),e+t/2*Math.sin(o)]})}function Cb(s,t){let e=-t.length/2,n=t.length/2,i=t.span/2,r=[[0,e],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[t.tail/2,n],[-t.tail/2,n]];return s==="dart"?{wing:[[0,e+.015],[i,n-.025],[0,n-.025]],fuselage:r,tail:o}:s==="glider"?{wing:Array.from({length:17},(a,c)=>{let l=-Math.PI/2+c*Math.PI/16;return[c===0||c===16?0:i*Math.cos(l),-.015+.105*Math.sin(l)]}),fuselage:Yp(.056,t.length,0),tail:Yp(t.tail,.08,n-.04)}:s==="stunt"?{wing:[[0,-.065],[i,-.065],[i,.045],[0,.045]],fuselage:[[0,e],[.028,e+.04],[.028,n-.008],[-.028,n-.008],[-.028,e+.04]],tail:[[-t.tail/2,n-.064],[t.tail/2,n-.064],[t.tail/2,n],[-t.tail/2,n]]}:{wing:[[0,e+.025],[i,.035],[i,.145],[0,n-.035]],fuselage:r,tail:[[-t.tail/2,n-.05],[t.tail/2,n-.05],[t.tail*.38,n],[-t.tail*.38,n]]}}function Ds(s="classic",t=1){s=Eb.includes(s)?s:"classic",t=Number.isFinite(Number(t))?Math.max(.55,Math.min(1.5,Number(t))):1;let e=$p[s],n=Cb(s,e),i=t*.78,r=[El("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,e.color,i,.045),El("right-wing",n.wing,.008,e.color,i,.045),El("fuselage",n.fuselage,.044,16768916,i,0,-.014),El("tail",n.tail,.008,e.color,i,0,.011)];return{form:s,size:t,span:e.span*i,length:e.length*i,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function Zp(s="classic",t=1){let e=Ds(s,t),n=$p[e.form],i=e.size;return{speed:1.65*n.speed*(.94+.06*i),turnRate:1.8*n.turn/Math.pow(i,.65),pitchRate:.8/Math.pow(i,.35),sinkRate:.095*n.sink/Math.pow(i,.6),energyLoss:.035*n.sink/Math.pow(i,.55),glideRatio:1.65/.095*n.speed*(.94+.06*i)/n.sink*Math.pow(i,.6)}}function Kp({position:s,input:t,heading:e,speed:n,tuning:i,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(t.pitch)>.25&&Math.abs(t.steer)<.35),c=r?t.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-s.x)*2:Math.sin(e)*n,z:a?(r.z-s.z)*2:-Math.cos(e)*n,targetVertical:-i.sinkRate+t.pitch*i.pitchRate+c+(o?1.9:0)}}var fs=class s{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new s);let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],f=n[5],h=n[6],d=n[7],p=n[8],x=i[0],m=i[1],g=i[2],v=i[3],A=i[4],b=i[5],S=i[6],w=i[7],T=i[8];return r[0]=o*x+a*v+c*S,r[1]=o*m+a*A+c*w,r[2]=o*g+a*b+c*T,r[3]=l*x+u*v+f*S,r[4]=l*m+u*A+f*w,r[5]=l*g+u*b+f*T,r[6]=h*x+d*v+p*S,r[7]=h*m+d*A+p*w,r[8]=h*g+d*b+p*T,e}scale(t,e){e===void 0&&(e=new s);let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3,l=c,u,f=4,h;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){u=f;do h=f-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){let d=r[o+i*a]/r[o+i*o];u=f;do h=f-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*d;while(--u)}}while(--c);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new s);let e=3,n=6,i=Rb,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,u=n,f;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=u;do f=u-l,i[f+n*r]+=i[f+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){let h=i[r+n*o]/i[r+n*r];l=u;do f=u-l,i[f+n*o]=f<=r?0:i[f+n*o]-i[f+n*r]*h;while(--l)}}while(--a);r=2;do{o=r-1;do{let h=i[r+n*o]/i[r+n*r];l=n;do f=n-l,i[f+n*o]=i[f+n*o]-i[f+n*r]*h;while(--l)}while(o--)}while(--r);r=2;do{let h=1/i[r+n*r];l=n;do f=n-l,i[f+n*r]=i[f+n*r]*h;while(--l)}while(r--);r=2;do{o=2;do{if(f=i[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,u=e*a,f=e*c,h=n*a,d=n*c,p=i*c,x=r*o,m=r*a,g=r*c,v=this.elements;return v[0]=1-(h+p),v[1]=u-g,v[2]=f+m,v[3]=u+g,v[4]=1-(l+p),v[5]=d-x,v[6]=f-m,v[7]=d+x,v[8]=1-(l+h),this}transpose(t){t===void 0&&(t=new s);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Rb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],E=class s{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new s);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new s(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new s(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new fs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new s),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new s),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=Ib,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=Pb;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Jp),Jp.almostEquals(t,e)}clone(){return new s(this.x,this.y,this.z)}};E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);var Ib=new E,Pb=new E,Jp=new E,Nn=class s{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,jp),l=jp),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){let l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),r.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){let n=Qp,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7];this.getCorners(i,r,o,a,c,l,u,f);for(let h=0;h!==8;h++){let d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Qp,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7];this.getCorners(i,r,o,a,c,l,u,f);for(let h=0;h!==8;h++){let d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(f,h)),p=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(f,h));return!(p<0||d>p)}},jp=new E,Qp=[new E,new E,new E,new E,new E,new E,new E,new E],Ll=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Nl=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}},Ve=class s{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Lb,i=Nb;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+i*l-r*c,e.y=i*u+o*c+r*a-n*l,e.z=r*u+o*l+n*c-i*a,e.w=o*u-n*a-i*c-r*l,e}inverse(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*r-c*i,f=l*i+c*n-o*r,h=l*r+o*i-a*n,d=-o*n-a*i-c*r;return e.x=u*l+d*-o+f*-c-h*-a,e.y=f*l+d*-a+h*-o-u*-c,e.z=h*l+d*-c+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let f=o*o,h=a*a,d=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*d),i=Math.asin(2*u),r=Math.atan2(2*o*l-2*a*c,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):i==="YXZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):i==="ZXY"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):i==="ZYX"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):i==="YZX"?(this.x=c*o*a+r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a-c*l*u):i==="XZY"&&(this.x=c*o*a-r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a+c*l*u),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,u=t.z,f=t.w,h,d,p,x,m;return d=i*c+r*l+o*u+a*f,d<0&&(d=-d,c=-c,l=-l,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),p=Math.sin(h),x=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(x=1-e,m=e),n.x=x*i+m*c,n.y=x*r+m*l,n.z=x*o+m*u,n.w=x*a+m*f,n}integrate(t,e,n,i){i===void 0&&(i=new s);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,f=this.w,h=e*.5;return i.x+=h*(r*f+o*u-a*l),i.y+=h*(o*f+a*c-r*u),i.z+=h*(a*f+r*l-o*c),i.w+=h*(-r*c-o*l-a*u),i}},Lb=new E,Nb=new E,Fb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Nt=class s{constructor(t){t===void 0&&(t={}),this.id=s.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Nt.idCounter=0;Nt.types=Fb;var ge=class s{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Ve,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(tm),tm.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},tm=new Ve,ia=class s extends Nt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:Nt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new E;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){let r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,c,l){let u=new E,f=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);let x=u.dot(o);x>h&&(h=x,f=p)}let d=[];for(let p=0;p<n.faces[f].length;p++){let x=n.vertices[n.faces[f][p]],m=new E;m.copy(x),r.vmult(m,m),i.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,c,l)}findSeparatingAxis(t,e,n,i,r,o,a,c){let l=new E,u=new E,f=new E,h=new E,d=new E,p=new E,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],l);let v=m.testSepAxis(l,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}else{let g=a?a.length:m.faces.length;for(let v=0;v<g;v++){let A=a?a[v]:v;l.copy(m.faceNormals[A]),n.vmult(l,l);let b=m.testSepAxis(l,t,e,n,i,r);if(b===!1)return!1;b<x&&(x=b,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],u);let v=m.testSepAxis(u,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}else{let g=c?c.length:t.faces.length;for(let v=0;v<g;v++){let A=c?c[v]:v;u.copy(t.faceNormals[A]),r.vmult(u,u);let b=m.testSepAxis(u,t,e,n,i,r);if(b===!1)return!1;b<x&&(x=b,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],d),h.cross(d,p),!p.almostZero()){p.normalize();let A=m.testSepAxis(p,t,e,n,i,r);if(A===!1)return!1;A<x&&(x=A,o.copy(p))}}return i.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){let a=this;s.project(a,t,n,i,Bu),s.project(e,t,r,o,Uu);let c=Bu[0],l=Bu[1],u=Uu[0],f=Uu[1];if(c<f||u<l)return!1;let h=c-f,d=u-l;return h<d?h:d}calculateLocalInertia(t,e){let n=new E,i=new E;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){let c=new E,l=new E,u=new E,f=new E,h=new E,d=new E,p=new E,x=new E,m=this,g=[],v=i,A=g,b=-1,S=Number.MAX_VALUE;for(let R=0;R<m.faces.length;R++){c.copy(m.faceNormals[R]),n.vmult(c,c);let L=c.dot(t);L<S&&(S=L,b=R)}if(b<0)return;let w=m.faces[b];w.connectedFaces=[];for(let R=0;R<m.faces.length;R++)for(let L=0;L<m.faces[R].length;L++)w.indexOf(m.faces[R][L])!==-1&&R!==b&&w.connectedFaces.indexOf(R)===-1&&w.connectedFaces.push(R);let T=w.length;for(let R=0;R<T;R++){let L=m.vertices[w[R]],U=m.vertices[w[(R+1)%T]];L.vsub(U,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[b]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(L),n.vmult(d,d),e.vadd(d,d);let N=w.connectedFaces[R];p.copy(this.faceNormals[N]);let I=this.getPlaneConstantOfFace(N);x.copy(p),n.vmult(x,x);let F=I-x.dot(e);for(this.clipFaceAgainstPlane(v,A,x,F);v.length;)v.shift();for(;A.length;)v.push(A.shift())}p.copy(this.faceNormals[b]);let _=this.getPlaneConstantOfFace(b);x.copy(p),n.vmult(x,x);let C=_-x.dot(e);for(let R=0;R<v.length;R++){let L=x.dot(v[R])+C;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){let U=v[R];if(L<=1e-6){let N={point:U,normal:x,depth:L};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+i,r<0)if(o<0){let f=new E;f.copy(l),e.push(f)}else{let f=new E;c.lerp(l,r/(r-o),f),e.push(f)}else if(o<0){let f=new E;c.lerp(l,r/(r-o),f),e.push(f),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let r=this.vertices,o,a,c,l,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(l===void 0||p.x>l)&&(l=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(c===void 0||p.z<c)&&(c=p.z),(f===void 0||p.z>f)&&(f=p.z)}n.set(o,a,c),i.set(l,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){let o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=i[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new E;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=e[n[a][0]],u=new E;t.vsub(l,u);let f=c.dot(u),h=new E;o.vsub(l,h);let d=c.dot(h);if(f<0&&d>0||f>0&&d<0)return!1}return r?1:-1}static project(t,e,n,i,r){let o=t.vertices.length,a=Bb,c=0,l=0,u=Ub,f=t.vertices;u.setZero(),ge.vectorToLocalFrame(n,i,e,a),ge.pointToLocalFrame(n,i,u,u);let h=u.dot(a);l=c=f[0].dot(a);for(let d=1;d<o;d++){let p=f[d].dot(a);p>c&&(c=p),p<l&&(l=p)}if(l-=h,c-=h,l>c){let d=l;l=c,c=d}r[0]=c,r[1]=l}},Bu=[],Uu=[],Db=new E,Bb=new E,Ub=new E,sa=class s extends Nt{constructor(t){super({type:Nt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ia({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),s.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)ds.set(r[o][0],r[o][1],r[o][2]),e.vmult(ds,ds),t.vadd(ds,ds),n(ds.x,ds.y,ds.z)}calculateWorldAABB(t,e,n,i){let r=this.halfExtents;di[0].set(r.x,r.y,r.z),di[1].set(-r.x,r.y,r.z),di[2].set(-r.x,-r.y,r.z),di[3].set(-r.x,-r.y,-r.z),di[4].set(r.x,-r.y,-r.z),di[5].set(r.x,r.y,-r.z),di[6].set(-r.x,r.y,-r.z),di[7].set(r.x,-r.y,r.z);let o=di[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=di[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,u=c.y,f=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),f>i.z&&(i.z=f),l<n.x&&(n.x=l),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}},ds=new E,di=[new E,new E,new E,new E,new E,new E,new E,new E],Ju={DYNAMIC:1,STATIC:2,KINEMATIC:4},ju={AWAKE:0,SLEEPY:1,SLEEPING:2},te=class s extends Nl{constructor(t){t===void 0&&(t={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?s.STATIC:s.DYNAMIC,typeof t.type==typeof s.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Ve,this.initQuaternion=new Ve,this.previousQuaternion=new Ve,this.interpolatedQuaternion=new Ve,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new fs,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new fs,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,t===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(s.sleepyEvent)):e===s.SLEEPY&&n>i?this.wakeUp():e===s.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new E,r=new Ve;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Ob,o=zb,a=this.quaternion,c=this.aabb,l=kb;for(let u=0;u!==i;u++){let f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Vb,i=Gb;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=Wb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==s.DYNAMIC)return;let n=qb,i=Xb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=e,i=Yb;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=$b;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==s.DYNAMIC)return;let n=Zb,i=Kb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=Jb;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),sa.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;i.x+=a.x*d*h.x,i.y+=a.y*d*h.y,i.z+=a.z*d*h.z;let p=f.elements,x=this.angularFactor,m=c.x*x.x,g=c.y*x.y,v=c.z*x.z;r.x+=t*(p[0]*m+p[1]*g+p[2]*v),r.y+=t*(p[3]*m+p[4]*g+p[5]*v),r.z+=t*(p[6]*m+p[7]*g+p[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};te.idCounter=0;te.COLLIDE_EVENT_NAME="collide";te.DYNAMIC=Ju.DYNAMIC;te.STATIC=Ju.STATIC;te.KINEMATIC=Ju.KINEMATIC;te.AWAKE=ju.AWAKE;te.SLEEPY=ju.SLEEPY;te.SLEEPING=ju.SLEEPING;te.wakeupEvent={type:"wakeup"};te.sleepyEvent={type:"sleepy"};te.sleepEvent={type:"sleep"};var Ob=new E,zb=new Ve,kb=new Nn,Vb=new fs,Gb=new fs,Hb=new fs,Wb=new E,qb=new E,Xb=new E,Yb=new E,$b=new E,Zb=new E,Kb=new E,Jb=new E,Fl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&te.STATIC)!==0||t.sleepState===te.SLEEPING)&&((e.type&te.STATIC)!==0||e.sleepState===te.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=jb;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=Qb,i=tS,r=eS,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new E;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},jb=new E;new E;new Ve;new E;var Qb={keys:[]},tS=[],eS=[];new E;var DE=new E;new E;var Gu=class extends Fl{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Ur=class{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},dm,fm,pm,mm,gm,xm,_m,Qu={CLOSEST:1,ANY:2,ALL:4};dm=Nt.types.SPHERE;fm=Nt.types.PLANE;pm=Nt.types.BOX;mm=Nt.types.CYLINDER;gm=Nt.types.CONVEXPOLYHEDRON;xm=Nt.types.HEIGHTFIELD;_m=Nt.types.TRIMESH;var kn=class s{get[dm](){return this._intersectSphere}get[fm](){return this._intersectPlane}get[pm](){return this._intersectBox}get[mm](){return this._intersectConvex}get[gm](){return this._intersectConvex}get[xm](){return this._intersectHeightfield}get[_m](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new Ur,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||s.ANY,this.result=e.result||new Ur,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(em),Ou.length=0,t.broadphase.aabbQuery(t,em,Ou),this.intersectBodies(Ou),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=nS,r=iS;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(vS(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new E(0,0,1);e.vmult(l,l);let u=new E;o.vsub(n,u);let f=u.dot(l);a.vsub(n,u);let h=u.dot(l);if(f*h>0||o.distanceTo(a)<f)return;let d=l.dot(c);if(Math.abs(d)<this.precision)return;let p=new E,x=new E,m=new E;o.vsub(n,p);let g=-l.dot(p)/d;c.scale(g,x),o.vadd(x,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;let o=sS;o.from.copy(this.from),o.to.copy(this.to),ge.pointToLocalFrame(n,e,o.from,o.from),ge.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=rS,c,l,u,f;c=l=0,u=f=t.data.length-1;let h=new Nn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=c;d<u;d++)for(let p=l;p<f;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,p,!1),ge.pointToWorldFrame(n,e,t.pillarOffset,Tl),this._intersectConvex(t.pillarConvex,e,Tl,i,r,nm),this.result.shouldStop)return;t.getConvexTrianglePillar(d,p,!0),ge.pointToWorldFrame(n,e,t.pillarOffset,Tl),this._intersectConvex(t.pillarConvex,e,Tl,i,r,nm)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*f,d=oS,p=aS;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,i,-1);else{let x=(-u-Math.sqrt(h))/(2*l),m=(-u+Math.sqrt(h))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,p),p.normalize(),this.reportIntersection(p,d,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=cS,c=im,l=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=l?l.length:u.length,v=this.result;for(let A=0;!v.shouldStop&&A<g;A++){let b=l?l[A]:A,S=u[b],w=h[b],T=e,_=n;c.copy(f[S[0]]),T.vmult(c,c),c.vadd(_,c),c.vsub(p,c),T.vmult(w,a);let C=d.dot(a);if(Math.abs(C)<this.precision)continue;let R=a.dot(c)/C;if(!(R<0)){d.scale(R,An),An.vadd(p,An),Jn.copy(f[S[0]]),T.vmult(Jn,Jn),_.vadd(Jn,Jn);for(let L=1;!v.shouldStop&&L<S.length-1;L++){fi.copy(f[S[L]]),pi.copy(f[S[L+1]]),T.vmult(fi,fi),T.vmult(pi,pi),_.vadd(fi,fi),_.vadd(pi,pi);let U=An.distanceTo(p);!(s.pointInTriangle(An,Jn,fi,pi)||s.pointInTriangle(An,fi,Jn,pi))||U>m||this.reportIntersection(a,An,r,i,b)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=uS,c=xS,l=_S,u=im,f=dS,h=fS,d=pS,p=gS,x=mS,m=t.indices;t.vertices;let g=this.from,v=this.to,A=this.direction;l.position.copy(n),l.quaternion.copy(e),ge.vectorToLocalFrame(n,e,A,f),ge.pointToLocalFrame(n,e,g,h),ge.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();let b=h.distanceSquared(d);t.tree.rayQuery(this,l,c);for(let S=0,w=c.length;!this.result.shouldStop&&S!==w;S++){let T=c[S];t.getNormal(T,a),t.getVertex(m[T*3],Jn),Jn.vsub(h,u);let _=f.dot(a),C=a.dot(u)/_;if(C<0)continue;f.scale(C,An),An.vadd(h,An),t.getVertex(m[T*3+1],fi),t.getVertex(m[T*3+2],pi);let R=An.distanceSquared(h);!(s.pointInTriangle(An,fi,Jn,pi)||s.pointInTriangle(An,Jn,fi,pi))||R>b||(ge.vectorToWorldFrame(e,a,x),ge.pointToWorldFrame(n,e,An,p),this.reportIntersection(x,p,r,i,T))}c.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case s.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case s.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Us),n.vsub(e,Qo),t.vsub(e,zu);let r=Us.dot(Us),o=Us.dot(Qo),a=Us.dot(zu),c=Qo.dot(Qo),l=Qo.dot(zu),u,f;return(u=c*a-o*l)>=0&&(f=r*l-o*a)>=0&&u+f<r*c-o*o}};kn.CLOSEST=Qu.CLOSEST;kn.ANY=Qu.ANY;kn.ALL=Qu.ALL;var em=new Nn,Ou=[],Qo=new E,zu=new E,nS=new E,iS=new Ve,An=new E,Jn=new E,fi=new E,pi=new E;new E;new Ur;var nm={faceList:[0]},Tl=new E,sS=new kn,rS=[],oS=new E,aS=new E,cS=new E,lS=new E,hS=new E,im=new E,uS=new E,dS=new E,fS=new E,pS=new E,mS=new E,gS=new E;new Nn;var xS=[],_S=new ge,Us=new E,Cl=new E;function vS(s,t,e){e.vsub(s,Us);let n=Us.dot(t);return t.scale(n,Cl),Cl.vadd(s,Cl),e.distanceTo(Cl)}var Dl=class s extends Fl{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,c=i+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let i=this.axisList,r=i.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let l=i[a];for(c=a+1;c<r;c++){let u=i[c];if(this.needBroadphaseCollision(l,u)){if(!s.checkBounds(l,u,o))break;this.intersectionTest(l,u,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){let r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?s.insertionSortX(t):e===1?s.insertionSortY(t):e===2&&s.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let d=0;d!==c;d++){let p=a[d],x=p.position.x;t+=x,e+=x*x;let m=p.position.y;n+=m,i+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=e-t*t*l,f=i-n*n*l,h=o-r*r*l;u>f?u>h?this.axisIndex=0:this.axisIndex=2:f>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,r="x";i===1&&(r="y"),i===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},Bl=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Hu=class s{constructor(t,e,n){n===void 0&&(n={}),n=Bl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Hu.idCounter=0;var Ul=class{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},ra=class s{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ul,this.jacobianElementB=new Ul,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return r.scale(l,sm),a.scale(u,rm),n.invInertiaWorldSolve.vmult(o,om),i.invInertiaWorldSolve.vmult(c,am),t.multiplyVectors(sm,om)+e.multiplyVectors(rm,am)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,Rl),l+=Rl.dot(t.rotational),c.vmult(e.rotational,Rl),l+=Rl.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=yS;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ra.idCounter=0;var sm=new E,rm=new E,om=new E,am=new E,Rl=new E,yS=new E,Wu=class extends ra{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){let e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=bS,l=SS,u=i.velocity,f=i.angularVelocity;i.force,i.torque;let h=r.velocity,d=r.angularVelocity;r.force,r.torque;let p=MS,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(x.spatial),c.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(l),p.copy(r.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);let v=g.dot(p),A=this.restitution+1,b=A*h.dot(g)-A*u.dot(g)+d.dot(l)-f.dot(c),S=this.computeGiMf();return-v*e-b*n-t*S}getImpactVelocityAlongNormal(){let t=wS,e=AS,n=ES,i=TS,r=CS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}},bS=new E,SS=new E,MS=new E,wS=new E,AS=new E,ES=new E,TS=new E,CS=new E;var BE=new E,UE=new E;var OE=new E,zE=new E;new E;new E;var kE=new E,VE=new E;var GE=new E,HE=new E,Ol=class extends ra{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=RS,o=IS,a=this.t;n.cross(a,r),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}},RS=new E,IS=new E,zl=class s{constructor(t,e,n){n=Bl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};zl.idCounter=0;var kl=class s{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=s.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};kl.idCounter=0;var WE=new E,qE=new E,XE=new E,YE=new E,$E=new E,ZE=new E,KE=new E,JE=new E,jE=new E,QE=new E,tT=new E;var eT=new E,nT=new E;new E;new E;new E;var iT=new E,sT=new E,rT=new E;new kn;new E;var oT=new E,aT=new E,cT=[new E(1,0,0),new E(0,1,0),new E(0,0,1)],lT=new E;var hT=new E,uT=new E,dT=new E;var fT=new E,pT=new E,mT=new E,gT=new E;var xT=new E,_T=new E,vT=new E;var yT=new E,bT=new E;var ST=new E,MT=new E,wT=new E,AT=new E,ET=new E,TT=new E,CT=new E;var RT=new E;var IT=new E,PT=new E,LT=new E,NT=new E,FT=new E,DT=new E,BT=new E,UT=new E,OT=new E;var zT=new E,kT=new Nn;var VT=new E,GT=new Nn,HT=new E,WT=new E,qT=new E,XT=new E,YT=new E,$T=new E,ZT=new E,KT=new Nn,JT=new E,jT=new ge,QT=new Nn,qu=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Xu=class extends qu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t,f,h,d,p,x,m;if(a!==0)for(let b=0;b!==l;b++)c[b].updateSolveMassProperties();let g=LS,v=NS,A=PS;g.length=a,v.length=a,A.length=a;for(let b=0;b!==a;b++){let S=o[b];A[b]=0,v[b]=S.computeB(u),g[b]=1/S.computeC()}if(a!==0){for(let w=0;w!==l;w++){let T=c[w],_=T.vlambda,C=T.wlambda;_.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let w=0;w!==a;w++){let T=o[w];f=v[w],h=g[w],m=A[w],x=T.computeGWlambda(),d=h*(f-x-T.eps*m),m+d<T.minForce?d=T.minForce-m:m+d>T.maxForce&&(d=T.maxForce-m),A[w]+=d,p+=d>0?d:-d,T.addToWlambda(d)}if(p*p<r)break}for(let w=0;w!==l;w++){let T=c[w],_=T.velocity,C=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),_.vadd(T.vlambda,_),T.wlambda.vmul(T.angularFactor,T.wlambda),C.vadd(T.wlambda,C)}let b=o.length,S=1/u;for(;b--;)o[b].multiplier=A[b]*S}return n}},PS=[],LS=[],NS=[];var tC=te.STATIC;var Yu=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},$u=class extends Yu{constructor(){super(...arguments),this.type=E}constructObject(){return new E}},Le={sphereSphere:Nt.types.SPHERE,spherePlane:Nt.types.SPHERE|Nt.types.PLANE,boxBox:Nt.types.BOX|Nt.types.BOX,sphereBox:Nt.types.SPHERE|Nt.types.BOX,planeBox:Nt.types.PLANE|Nt.types.BOX,convexConvex:Nt.types.CONVEXPOLYHEDRON,sphereConvex:Nt.types.SPHERE|Nt.types.CONVEXPOLYHEDRON,planeConvex:Nt.types.PLANE|Nt.types.CONVEXPOLYHEDRON,boxConvex:Nt.types.BOX|Nt.types.CONVEXPOLYHEDRON,sphereHeightfield:Nt.types.SPHERE|Nt.types.HEIGHTFIELD,boxHeightfield:Nt.types.BOX|Nt.types.HEIGHTFIELD,convexHeightfield:Nt.types.CONVEXPOLYHEDRON|Nt.types.HEIGHTFIELD,sphereParticle:Nt.types.PARTICLE|Nt.types.SPHERE,planeParticle:Nt.types.PLANE|Nt.types.PARTICLE,boxParticle:Nt.types.BOX|Nt.types.PARTICLE,convexParticle:Nt.types.PARTICLE|Nt.types.CONVEXPOLYHEDRON,cylinderCylinder:Nt.types.CYLINDER,sphereCylinder:Nt.types.SPHERE|Nt.types.CYLINDER,planeCylinder:Nt.types.PLANE|Nt.types.CYLINDER,boxCylinder:Nt.types.BOX|Nt.types.CYLINDER,convexCylinder:Nt.types.CONVEXPOLYHEDRON|Nt.types.CYLINDER,heightfieldCylinder:Nt.types.HEIGHTFIELD|Nt.types.CYLINDER,particleCylinder:Nt.types.PARTICLE|Nt.types.CYLINDER,sphereTrimesh:Nt.types.SPHERE|Nt.types.TRIMESH,planeTrimesh:Nt.types.PLANE|Nt.types.TRIMESH},Zu=class{get[Le.sphereSphere](){return this.sphereSphere}get[Le.spherePlane](){return this.spherePlane}get[Le.boxBox](){return this.boxBox}get[Le.sphereBox](){return this.sphereBox}get[Le.planeBox](){return this.planeBox}get[Le.convexConvex](){return this.convexConvex}get[Le.sphereConvex](){return this.sphereConvex}get[Le.planeConvex](){return this.planeConvex}get[Le.boxConvex](){return this.boxConvex}get[Le.sphereHeightfield](){return this.sphereHeightfield}get[Le.boxHeightfield](){return this.boxHeightfield}get[Le.convexHeightfield](){return this.convexHeightfield}get[Le.sphereParticle](){return this.sphereParticle}get[Le.planeParticle](){return this.planeParticle}get[Le.boxParticle](){return this.boxParticle}get[Le.convexParticle](){return this.convexParticle}get[Le.cylinderCylinder](){return this.convexConvex}get[Le.sphereCylinder](){return this.sphereConvex}get[Le.planeCylinder](){return this.planeConvex}get[Le.boxCylinder](){return this.boxConvex}get[Le.convexCylinder](){return this.convexConvex}get[Le.heightfieldCylinder](){return this.heightfieldCylinder}get[Le.particleCylinder](){return this.particleCylinder}get[Le.sphereTrimesh](){return this.sphereTrimesh}get[Le.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new $u,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Wu(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,u=r.material||n.material,f=o.material||i.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(l=u.friction*f.friction),l>0){let h=l*(a.frictionGravity||a.gravity).length(),d=n.invMass+i.invMass;d>0&&(d=1/d);let p=this.frictionEquationPool,x=p.length?p.pop():new Ol(n,i,h*d),m=p.length?p.pop():new Ol(n,i,h*d);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-h*d,x.maxForce=m.maxForce=h*d,x.ri.copy(t.ri),x.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(x.t,m.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=t.enabled,e.push(x,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Bs.setZero(),Dr.setZero(),Br.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Bs.vadd(e.ni,Bs),Dr.vadd(e.ri,Dr),Br.vadd(e.rj,Br)):(Bs.vsub(e.ni,Bs),Dr.vadd(e.rj,Dr),Br.vadd(e.ri,Br));let o=1/t;Dr.scale(o,n.ri),Br.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Bs.normalize(),Bs.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=BS,l=US,u=FS,f=DS;for(let h=0,d=t.length;h!==d;h++){let p=t[h],x=e[h],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&te.KINEMATIC&&x.type&te.STATIC||p.type&te.STATIC&&x.type&te.KINEMATIC||p.type&te.KINEMATIC&&x.type&te.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],c),p.quaternion.vmult(p.shapeOffsets[v],u),u.vadd(p.position,u);let A=p.shapes[v];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],l),x.quaternion.vmult(x.shapeOffsets[b],f),f.vadd(x.position,f);let S=x.shapes[b];if(!(A.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&A.collisionFilterGroup)||u.distanceTo(f)>A.boundingSphereRadius+S.boundingSphereRadius)continue;let w=null;A.material&&S.material&&(w=n.getContactMaterial(A.material,S.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;let T=A.type|S.type,_=this[T];if(_){let C=!1;A.type<S.type?C=_.call(this,A,S,u,f,c,l,p,x,A,S,g):C=_.call(this,S,A,f,u,l,c,x,p,A,S,g),C&&g&&(n.shapeOverlapKeeper.set(A.id,S.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,u,f){if(f)return n.distanceSquared(i)<(t.radius+e.radius)**2;let h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,u,f){let h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Il),h.ni.scale(h.ni.dot(Il),cm),Il.vsub(cm,h.rj),-Il.dot(h.ni)<=t.radius){if(f)return!0;let d=h.ri,p=h.rj;d.vadd(n,d),d.vsub(a.position,d),p.vadd(i,p),p.vsub(c.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,f)}sphereBox(t,e,n,i,r,o,a,c,l,u,f){let h=this.v3pool,d=lM;n.vsub(i,Pl),e.getSideNormals(d,o);let p=t.radius,x=!1,m=uM,g=dM,v=fM,A=null,b=0,S=0,w=0,T=null;for(let B=0,W=d.length;B!==W&&x===!1;B++){let Y=oM;Y.copy(d[B]);let X=Y.length();Y.normalize();let tt=Pl.dot(Y);if(tt<X+p&&tt>0){let J=aM,st=cM;J.copy(d[(B+1)%3]),st.copy(d[(B+2)%3]);let xt=J.length(),kt=st.length();J.normalize(),st.normalize();let Yt=Pl.dot(J),Zt=Pl.dot(st);if(Yt<xt&&Yt>-xt&&Zt<kt&&Zt>-kt){let nt=Math.abs(tt-X-p);if((T===null||nt<T)&&(T=nt,S=Yt,w=Zt,A=X,m.copy(Y),g.copy(J),v.copy(st),b++,f))return!0}}}if(b){x=!0;let B=this.createContactEquation(a,c,t,e,l,u);m.scale(-p,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(A,m),g.scale(S,g),m.vadd(g,m),v.scale(w,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(c.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let _=h.get(),C=hM;for(let B=0;B!==2&&!x;B++)for(let W=0;W!==2&&!x;W++)for(let Y=0;Y!==2&&!x;Y++)if(_.set(0,0,0),B?_.vadd(d[0],_):_.vsub(d[0],_),W?_.vadd(d[1],_):_.vsub(d[1],_),Y?_.vadd(d[2],_):_.vsub(d[2],_),i.vadd(_,C),C.vsub(n,C),C.lengthSquared()<p*p){if(f)return!0;x=!0;let X=this.createContactEquation(a,c,t,e,l,u);X.ri.copy(C),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(p,X.ri),X.rj.copy(_),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(c.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}h.release(_),_=null;let R=h.get(),L=h.get(),U=h.get(),N=h.get(),I=h.get(),F=d.length;for(let B=0;B!==F&&!x;B++)for(let W=0;W!==F&&!x;W++)if(B%3!==W%3){d[W].cross(d[B],R),R.normalize(),d[B].vadd(d[W],L),U.copy(n),U.vsub(L,U),U.vsub(i,U);let Y=U.dot(R);R.scale(Y,N);let X=0;for(;X===B%3||X===W%3;)X++;I.copy(n),I.vsub(N,I),I.vsub(L,I),I.vsub(i,I);let tt=Math.abs(Y),J=I.length();if(tt<d[X].length()&&J<p){if(f)return!0;x=!0;let st=this.createContactEquation(a,c,t,e,l,u);L.vadd(N,st.rj),st.rj.copy(st.rj),I.negate(st.ni),st.ni.normalize(),st.ri.copy(st.rj),st.ri.vadd(i,st.ri),st.ri.vsub(n,st.ri),st.ri.normalize(),st.ri.scale(p,st.ri),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}h.release(R,L,U,N,I)}planeBox(t,e,n,i,r,o,a,c,l,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,f)}convexConvex(t,e,n,i,r,o,a,c,l,u,f,h,d){let p=CM;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,p,h,d)){let x=[],m=RM;t.clipAgainstHull(n,r,e,i,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(f)return!0;let A=this.createContactEquation(a,c,t,e,l,u),b=A.ri,S=A.rj;p.negate(A.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,b),S.copy(x[v].point),b.vsub(n,b),S.vsub(i,S),b.vadd(n,b),b.vsub(a.position,b),S.vadd(i,S),S.vsub(c.position,S),this.result.push(A),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(A,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,r,o,a,c,l,u,f){let h=this.v3pool;n.vsub(i,pM);let d=e.faceNormals,p=e.faces,x=e.vertices,m=t.radius,g=!1;for(let v=0;v!==x.length;v++){let A=x[v],b=_M;o.vmult(A,b),i.vadd(b,b);let S=xM;if(b.vsub(n,S),S.lengthSquared()<m*m){if(f)return!0;g=!0;let w=this.createContactEquation(a,c,t,e,l,u);w.ri.copy(S),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),b.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(c.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,A=p.length;v!==A&&g===!1;v++){let b=d[v],S=p[v],w=vM;o.vmult(b,w);let T=yM;o.vmult(x[S[0]],T),T.vadd(i,T);let _=bM;w.scale(-m,_),n.vadd(_,_);let C=SM;_.vsub(T,C);let R=C.dot(w),L=MM;if(n.vsub(T,L),R<0&&L.dot(w)>0){let U=[];for(let N=0,I=S.length;N!==I;N++){let F=h.get();o.vmult(x[S[N]],F),i.vadd(F,F),U.push(F)}if(rM(U,w,n)){if(f)return!0;g=!0;let N=this.createContactEquation(a,c,t,e,l,u);w.scale(-m,N.ri),w.negate(N.ni);let I=h.get();w.scale(-R,I);let F=h.get();w.scale(-m,F),n.vsub(i,N.rj),N.rj.vadd(F,N.rj),N.rj.vadd(I,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(I),h.release(F),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let B=0,W=U.length;B!==W;B++)h.release(U[B]);return}else for(let N=0;N!==S.length;N++){let I=h.get(),F=h.get();o.vmult(x[S[(N+1)%S.length]],I),o.vmult(x[S[(N+2)%S.length]],F),i.vadd(I,I),i.vadd(F,F);let B=mM;F.vsub(I,B);let W=gM;B.unit(W);let Y=h.get(),X=h.get();n.vsub(I,X);let tt=X.dot(W);W.scale(tt,Y),Y.vadd(I,Y);let J=h.get();if(Y.vsub(n,J),tt>0&&tt*tt<B.lengthSquared()&&J.lengthSquared()<m*m){if(f)return!0;let st=this.createContactEquation(a,c,t,e,l,u);Y.vsub(i,st.rj),Y.vsub(n,st.ni),st.ni.normalize(),st.ni.scale(m,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult);for(let xt=0,kt=U.length;xt!==kt;xt++)h.release(U[xt]);h.release(I),h.release(F),h.release(Y),h.release(J),h.release(X);return}h.release(I),h.release(F),h.release(Y),h.release(J),h.release(X)}for(let N=0,I=U.length;N!==I;N++)h.release(U[N])}}}planeConvex(t,e,n,i,r,o,a,c,l,u,f){let h=wM,d=AM;d.set(0,0,1),r.vmult(d,d);let p=0,x=EM;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,x),d.dot(x)<=0){if(f)return!0;let v=this.createContactEquation(a,c,t,e,l,u),A=TM;d.scale(d.dot(x),A),h.vsub(A,A),A.vsub(n,v.ri),v.ni.copy(d),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}sphereHeightfield(t,e,n,i,r,o,a,c,l,u,f){let h=e.data,d=t.radius,p=e.elementSize,x=VM,m=kM;ge.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-d)/p)-1,v=Math.ceil((m.x+d)/p)+1,A=Math.floor((m.y-d)/p)-1,b=Math.ceil((m.y+d)/p)+1;if(v<0||b<0||g>h.length||A>h[0].length)return;g<0&&(g=0),v<0&&(v=0),A<0&&(A=0),b<0&&(b=0),g>=h.length&&(g=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),A>=h[0].length&&(A=h[0].length-1);let S=[];e.getRectMinMax(g,A,v,b,S);let w=S[0],T=S[1];if(m.z-d>T||m.z+d<w)return;let _=this.result;for(let C=g;C<v;C++)for(let R=A;R<b;R++){let L=_.length,U=!1;if(e.getConvexTrianglePillar(C,R,!1),ge.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,f)),f&&U||(e.getConvexTrianglePillar(C,R,!0),ge.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,f)),f&&U))return!0;if(_.length-L>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}convexHeightfield(t,e,n,i,r,o,a,c,l,u,f){let h=e.data,d=e.elementSize,p=t.boundingSphereRadius,x=OM,m=zM,g=UM;ge.pointToLocalFrame(i,o,n,g);let v=Math.floor((g.x-p)/d)-1,A=Math.ceil((g.x+p)/d)+1,b=Math.floor((g.y-p)/d)-1,S=Math.ceil((g.y+p)/d)+1;if(A<0||S<0||v>h.length||b>h[0].length)return;v<0&&(v=0),A<0&&(A=0),b<0&&(b=0),S<0&&(S=0),v>=h.length&&(v=h.length-1),A>=h.length&&(A=h.length-1),S>=h[0].length&&(S=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let w=[];e.getRectMinMax(v,b,A,S,w);let T=w[0],_=w[1];if(!(g.z-p>_||g.z+p<T))for(let C=v;C<A;C++)for(let R=b;R<S;R++){let L=!1;if(e.getConvexTrianglePillar(C,R,!1),ge.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,f,m,null)),f&&L||(e.getConvexTrianglePillar(C,R,!0),ge.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,f,m,null)),f&&L))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,u,f){let h=NM;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;let p=this.createContactEquation(c,a,e,t,l,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,u,f){let h=IM;h.set(0,0,1),a.quaternion.vmult(h,h);let d=PM;if(i.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;let x=this.createContactEquation(c,a,e,t,l,u);x.ni.copy(h),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=LM;h.scale(h.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}convexParticle(t,e,n,i,r,o,a,c,l,u,f){let h=-1,d=DM,p=BM,x=null,m=FM;if(m.copy(i),m.vsub(n,m),r.conjugate(lm),lm.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,v=t.faces.length;g!==v;g++){let A=[t.worldVertices[t.faces[g][0]]],b=t.worldFaceNormals[g];i.vsub(A[0],hm);let S=-b.dot(hm);if(x===null||Math.abs(S)<Math.abs(x)){if(f)return!0;x=S,h=g,d.copy(b)}}if(h!==-1){let g=this.createContactEquation(c,a,e,t,l,u);d.scale(x,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),d.negate(g.ni),g.ri.set(0,0,0);let v=g.ri,A=g.rj;v.vadd(i,v),v.vsub(c.position,v),A.vadd(n,A),A.vsub(a.position,A),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,u,f){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,u,f)}particleCylinder(t,e,n,i,r,o,a,c,l,u,f){return this.convexParticle(e,t,i,n,o,r,c,a,l,u,f)}sphereTrimesh(t,e,n,i,r,o,a,c,l,u,f){let h=qS,d=XS,p=YS,x=$S,m=ZS,g=KS,v=tM,A=WS,b=GS,S=eM;ge.pointToLocalFrame(i,o,n,m);let w=t.radius;v.lowerBound.set(m.x-w,m.y-w,m.z-w),v.upperBound.set(m.x+w,m.y+w,m.z+w),e.getTrianglesInAABB(v,S);let T=HS,_=t.radius*t.radius;for(let N=0;N<S.length;N++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[S[N]*3+I],T),T.vsub(m,b),b.lengthSquared()<=_){if(A.copy(T),ge.pointToWorldFrame(i,o,A,T),T.vsub(n,b),f)return!0;let F=this.createContactEquation(a,c,t,e,l,u);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(T),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let N=0;N<S.length;N++)for(let I=0;I<3;I++){e.getVertex(e.indices[S[N]*3+I],h),e.getVertex(e.indices[S[N]*3+(I+1)%3],d),d.vsub(h,p),m.vsub(d,g);let F=g.dot(p);m.vsub(h,g);let B=g.dot(p);if(B>0&&F<0&&(m.vsub(h,g),x.copy(p),x.normalize(),B=g.dot(x),x.scale(B,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(f)return!0;let Y=this.createContactEquation(a,c,t,e,l,u);g.vsub(m,Y.ni),Y.ni.normalize(),Y.ni.scale(t.radius,Y.ri),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),ge.pointToWorldFrame(i,o,g,g),g.vsub(c.position,Y.rj),ge.vectorToWorldFrame(o,Y.ni,Y.ni),ge.vectorToWorldFrame(o,Y.ri,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}let C=JS,R=jS,L=QS,U=VS;for(let N=0,I=S.length;N!==I;N++){e.getTriangleVertices(S[N],C,R,L),e.getNormal(S[N],U),m.vsub(C,g);let F=g.dot(U);if(U.scale(F,g),m.vsub(g,g),F=g.distanceTo(m),kn.pointInTriangle(g,C,R,L)&&F<t.radius){if(f)return!0;let B=this.createContactEquation(a,c,t,e,l,u);g.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),ge.pointToWorldFrame(i,o,g,g),g.vsub(c.position,B.rj),ge.vectorToWorldFrame(o,B.ni,B.ni),ge.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,u,f){let h=new E,d=OS;d.set(0,0,1),r.vmult(d,d);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);let x=new E;x.copy(h),ge.pointToWorldFrame(i,o,x,h);let m=zS;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;let v=this.createContactEquation(a,c,t,e,l,u);v.ni.copy(d);let A=kS;d.scale(m.dot(d),A),h.vsub(A,A),v.ri.copy(A),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Bs=new E,Dr=new E,Br=new E,FS=new E,DS=new E,BS=new Ve,US=new Ve,OS=new E,zS=new E,kS=new E,VS=new E,GS=new E;new E;var HS=new E,WS=new E,qS=new E,XS=new E,YS=new E,$S=new E,ZS=new E,KS=new E,JS=new E,jS=new E,QS=new E,tM=new Nn,eM=[],Il=new E,cm=new E,nM=new E,iM=new E,sM=new E;function rM(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=nM;s[(r+1)%i].vsub(o,a);let c=iM;a.cross(t,c);let l=sM;e.vsub(o,l);let u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var Pl=new E,oM=new E,aM=new E,cM=new E,lM=[new E,new E,new E,new E,new E,new E],hM=new E,uM=new E,dM=new E,fM=new E,pM=new E,mM=new E,gM=new E,xM=new E,_M=new E,vM=new E,yM=new E,bM=new E,SM=new E,MM=new E;new E;new E;var wM=new E,AM=new E,EM=new E,TM=new E,CM=new E,RM=new E,IM=new E,PM=new E,LM=new E,NM=new E,lm=new Ve,FM=new E;new E;var DM=new E,hm=new E,BM=new E,UM=new E,OM=new E,zM=[0],kM=new E,VM=new E,Vl=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,u=n[c];for(;u>i[a];)a++;l=u===i[a],l||um(t,u)}a=0;for(let c=0;c<o;c++){let l=!1,u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||um(e,u)}}};function um(s,t){s.push((t&4294901760)>>16,t&65535)}var ku=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,Ku=class{constructor(){this.data={keys:[]}}get(t,e){let n=ku(t,e);return this.data[n]}set(t,e,n){let i=ku(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=ku(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Gl=class extends Nl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Gu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Xu,this.constraints=[],this.narrowphase=new Zu(this),this.collisionMatrix=new Ll,this.collisionMatrixPrevious=new Ll,this.bodyOverlapKeeper=new Vl,this.shapeOverlapKeeper=new Vl,this.contactmaterials=[],this.contactMaterialTable=new Ku,this.defaultMaterial=new kl("default"),this.defaultContactMaterial=new zl(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ur?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=kn.ALL,n.from=t,n.to=e,n.callback=i,Vu.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=kn.ANY,n.from=t,n.to=e,n.result=i,Vu.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=kn.CLOSEST,n.from=t,n.to=e,n.result=i,Vu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof te&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=qe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=qe.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(qe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=XM,i=YM,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,f=te.DYNAMIC,h=-1/0,d=this.constraints,p=qM;c.length();let x=c.x,m=c.y,g=c.z,v=0;for(l&&(h=qe.now()),v=0;v!==r;v++){let N=o[v];if(N.type===f){let I=N.force,F=N.mass;I.x+=F*x,I.y+=F*m,I.z+=F*g}}for(let N=0,I=this.subsystems.length;N!==I;N++)this.subsystems[N].update();l&&(h=qe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=qe.now()-h);let A=d.length;for(v=0;v!==A;v++){let N=d[v];if(!N.collideConnected)for(let I=n.length-1;I>=0;I-=1)(N.bodyA===n[I]&&N.bodyB===i[I]||N.bodyB===n[I]&&N.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),l&&(h=qe.now());let b=WM,S=e.length;for(v=0;v!==S;v++)b.push(e[v]);e.length=0;let w=this.frictionEquations.length;for(v=0;v!==w;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,b,this.frictionEquations,p),l&&(u.narrowphase=qe.now()-h),l&&(h=qe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let T=e.length;for(let N=0;N!==T;N++){let I=e[N],F=I.bi,B=I.bj,W=I.si,Y=I.sj,X;if(F.material&&B.material?X=this.getContactMaterial(F.material,B.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,F.material&&B.material&&(F.material.friction>=0&&B.material.friction>=0&&F.material.friction*B.material.friction,F.material.restitution>=0&&B.material.restitution>=0&&(I.restitution=F.material.restitution*B.material.restitution)),a.addEquation(I),F.allowSleep&&F.type===te.DYNAMIC&&F.sleepState===te.SLEEPING&&B.sleepState===te.AWAKE&&B.type!==te.STATIC){let tt=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),J=B.sleepSpeedLimit**2;tt>=J*2&&(F.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===te.DYNAMIC&&B.sleepState===te.SLEEPING&&F.sleepState===te.AWAKE&&F.type!==te.STATIC){let tt=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),J=F.sleepSpeedLimit**2;tt>=J*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,B,!0),this.collisionMatrixPrevious.get(F,B)||(ta.body=B,ta.contact=I,F.dispatchEvent(ta),ta.body=F,B.dispatchEvent(ta)),this.bodyOverlapKeeper.set(F.id,B.id),this.shapeOverlapKeeper.set(W.id,Y.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=qe.now()-h,h=qe.now()),v=0;v!==r;v++){let N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(A=d.length,v=0;v!==A;v++){let N=d[v];N.update();for(let I=0,F=N.equations.length;I!==F;I++){let B=N.equations[I];a.addEquation(B)}}a.solve(t,this),l&&(u.solve=qe.now()-h),a.removeAllEquations();let _=Math.pow;for(v=0;v!==r;v++){let N=o[v];if(N.type&f){let I=_(1-N.linearDamping,t),F=N.velocity;F.scale(I,F);let B=N.angularVelocity;if(B){let W=_(1-N.angularDamping,t);B.scale(W,B)}}}this.dispatchEvent(HM),l&&(h=qe.now());let R=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,R,L);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=qe.now()-h),this.stepnumber+=1,this.dispatchEvent(GM);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==r;v++){let N=o[v];N.sleepTick(this.time),N.sleepState!==te.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ni,Fi),t){for(let r=0,o=Ni.length;r<o;r+=2)ea.bodyA=this.getBodyById(Ni[r]),ea.bodyB=this.getBodyById(Ni[r+1]),this.dispatchEvent(ea);ea.bodyA=ea.bodyB=null}if(e){for(let r=0,o=Fi.length;r<o;r+=2)na.bodyA=this.getBodyById(Fi[r]),na.bodyB=this.getBodyById(Fi[r+1]),this.dispatchEvent(na);na.bodyA=na.bodyB=null}Ni.length=Fi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ni,Fi),n){for(let r=0,o=Ni.length;r<o;r+=2){let a=this.getShapeById(Ni[r]),c=this.getShapeById(Ni[r+1]);Di.shapeA=a,Di.shapeB=c,a&&(Di.bodyA=a.body),c&&(Di.bodyB=c.body),this.dispatchEvent(Di)}Di.bodyA=Di.bodyB=Di.shapeA=Di.shapeB=null}if(i){for(let r=0,o=Fi.length;r<o;r+=2){let a=this.getShapeById(Fi[r]),c=this.getShapeById(Fi[r+1]);Bi.shapeA=a,Bi.shapeB=c,a&&(Bi.bodyA=a.body),c&&(Bi.bodyB=c.body),this.dispatchEvent(Bi)}Bi.bodyA=Bi.bodyB=Bi.shapeA=Bi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Nn;var Vu=new kn,qe=globalThis.performance||{};if(!qe.now){let s=Date.now();qe.timing&&qe.timing.navigationStart&&(s=qe.timing.navigationStart),qe.now=()=>Date.now()-s}new E;var GM={type:"postStep"},HM={type:"preStep"},ta={type:te.COLLIDE_EVENT_NAME,body:null,contact:null},WM=[],qM=[],XM=[],YM=[],Ni=[],Fi=[],ea={type:"beginContact",bodyA:null,bodyB:null},na={type:"endContact",bodyA:null,bodyB:null},Di={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Bi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var $M=.24,_n=1e-8,xn=s=>Array.isArray(s)?s:[s.x,s.y,s.z],gi=(s,t)=>s.map((e,n)=>e+t[n]),ce=(s,t)=>s.map((e,n)=>e-t[n]),jn=(s,t)=>s.map(e=>e*t),Be=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Hl=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],ps=s=>Be(s,s),Or=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),zr=(s,t,e)=>Math.max(t,Math.min(e,s)),mi=s=>new E(...xn(s)),kr=(s,t)=>{let e=2*(t.y*s[2]-t.z*s[1]),n=2*(t.z*s[0]-t.x*s[2]),i=2*(t.x*s[1]-t.y*s[0]);return[s[0]+t.w*e+t.y*i-t.z*n,s[1]+t.w*n+t.z*e-t.x*i,s[2]+t.w*i+t.x*n-t.y*e]},vm=(s,t)=>kr(s,new Ve(-t.x,-t.y,-t.z,t.w));function nd(s,t){let e=ps(t);if(e<1e-12)return;let n=jn(t,1/Math.sqrt(e));s.some(i=>Math.abs(Be(i,n))>1-1e-7)||s.push(n)}function ZM(s){let t=[],e=[],n=[];for(let i of s.faces){let[r,o,a]=i.map(c=>s.vertices[c]);nd(t,Hl(ce(o,r),ce(a,r)));for(let c=0;c<i.length;c++)nd(e,ce(s.vertices[i[(c+1)%i.length]],s.vertices[i[c]]));for(let c=1;c<i.length-1;c++)n.push([r,s.vertices[i[c]],s.vertices[i[c+1]]])}return{...s,normals:t,edges:e,triangles:n}}function ym(s,t){return t.faces.every(e=>{let[n,i,r]=e.map(o=>t.vertices[o]);return Be(ce(s,n),Hl(ce(i,n),ce(r,n)))<=_n})}function KM(s,t,e,n,i){let r=s.vertices.map(d=>kr(d,t)),o=s.normals.map(d=>kr(d,t)),a=s.edges.map(d=>kr(d,t)),c=[...o,...i.axes];for(let d of a)for(let p of i.axes)nd(c,Hl(d,p));let l=ce(e,i.position),u=0,f=1,h=[0,0,0];for(let d of c){let p=r.map(w=>Be(w,d)),x=Be(l,d),m=Math.min(...p)+x,g=Math.max(...p)+x,v=i.half.reduce((w,T,_)=>w+T*Math.abs(Be(i.axes[_],d)),0),A=Be(n,d);if(Math.abs(A)<_n){if(m>v+_n||g<-v-_n)return null;continue}let b=(-v-g)/A,S=(v-m)/A;if(b>S&&([b,S]=[S,b]),b>u&&(u=b,h=jn(d,A>0?-1:1)),f=Math.min(f,S),u>f+_n)return null}return f>=0&&u<=1?{t:Math.max(0,u),normal:h}:null}function td(s,t,e,n=0){let i=ce(s,e.position),r=ce(t,s),o=e.axes.map(u=>Be(i,u)),a=e.axes.map(u=>Be(r,u)),c=0,l=1;for(let u=0;u<3;u++){let f=e.half[u]+n;if(Math.abs(a[u])<_n){if(Math.abs(o[u])>f)return null;continue}let h=(-f-o[u])/a[u],d=(f-o[u])/a[u];if(h>d&&([h,d]=[d,h]),c=Math.max(c,h),l=Math.min(l,d),c>l)return null}return c}function ed(s,t,e,n){let i=ce(e,t),r=ce(n,t),o=ce(s,t),a=Be(i,o),c=Be(r,o);if(a<=0&&c<=0)return t;let l=ce(s,e),u=Be(i,l),f=Be(r,l);if(u>=0&&f<=u)return e;let h=a*f-u*c;if(h<=0&&a>=0&&u<=0)return gi(t,jn(i,a/(a-u)));let d=ce(s,n),p=Be(i,d),x=Be(r,d);if(x>=0&&p<=x)return n;let m=p*c-a*x;if(m<=0&&c>=0&&x<=0)return gi(t,jn(r,c/(c-x)));let g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return gi(e,jn(ce(n,e),(f-u)/(f-u+p-x)));let v=1/(g+m+h);return gi(t,gi(jn(i,m*v),jn(r,h*v)))}function JM(s,t,e,n){let i=ce(t,s),r=ce(n,e),o=ce(s,e),a=Be(i,i),c=Be(i,r),l=Be(r,r),u=Be(i,o),f=Be(r,o);if(a<_n)return{t:0,point:gi(e,jn(r,l>_n?zr(f/l,0,1):0))};let h=a*l-c*c,d=h>_n?zr((c*f-l*u)/h,0,1):0,p=l>_n?(c*d+f)/l:0;return p<0?(p=0,d=zr(-u/a,0,1)):p>1&&(p=1,d=zr((c-u)/a,0,1)),{t:d,point:gi(e,jn(r,p))}}function jM(s,t,e,n,i){let r=ce(t,s),o=Hl(ce(n,e),ce(i,e)),a=Be(o,r);if(Math.abs(a)>_n){let l=Be(o,ce(e,s))/a;if(l>=0&&l<=1){let u=Or(s,t,l),f=ed(u,e,n,i);if(ps(ce(u,f))<1e-12)return{distance2:0,t:l,point:f}}}let c=[{t:0,point:ed(s,e,n,i)},{t:1,point:ed(t,e,n,i)}];for(let[l,u]of[[e,n],[n,i],[i,e]])c.push(JM(s,t,l,u));for(let l of c)l.distance2=ps(ce(Or(s,t,l.t),l.point));return c.reduce((l,u)=>u.distance2<l.distance2?u:l)}function bm(s=ye,t={form:"classic",size:1}){let e=new Gl({gravity:new E(0,0,0),allowSleep:!0});e.broadphase=new Dl(e);let n=[],i=[],r=new Map,o,a,c=[];function l(T){T.position=xn(T.body.position),T.axes=[[1,0,0],[0,1,0],[0,0,1]].map(_=>kr(_,T.body.quaternion)),T.body.aabbNeedsUpdate=!0,T.body.updateAABB(),T.min=xn(T.body.aabb.lowerBound),T.max=xn(T.body.aabb.upperBound),e.broadphase.dirty=!0}function u(T,_,C="solid",R=[0,0,0],L){let U=new te({mass:0,shape:new sa(new E(...T.map(I=>I/2))),position:mi(_)});U.quaternion.setFromEuler(...R,"XYZ"),U.kind=C,U.obstacleId=L,e.addBody(U);let N={body:U,half:T.map(I=>I/2),kind:C,id:L};return l(N),i.push(N),N}for(let T of s.obstacles??[])u(T.size,T.position,T.kind??"solid",T.rotation??[0,0,0],T.id);for(let T of s.doors??[]){let _=Fr(T,!1),C=u(_.size,_.position,"door",_.rotation,T.id);r.set(T.id,{door:T,obstacle:C,open:!1})}let f=xn(s.start??[0,1,0]),h=new te({mass:1,position:mi(f),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});h.kind="plane",e.addBody(h);function d(T="classic",_=1){for(o=Ds(T,_),a=o.parts.map(ZM);h.shapes.length;)h.removeShape(h.shapes[0]);for(let C of a){let R=[0,1,2].map(L=>C.vertices.reduce((U,N)=>U+N[L],0)/C.vertices.length);h.addShape(new ia({vertices:C.vertices.map(L=>mi(ce(L,R))),faces:C.faces}),mi(R))}return h.updateMassProperties(),h.updateBoundingRadius(),h.aabbNeedsUpdate=!0,c=[],e.broadphase.dirty=!0,o}d(t.form,t.size);function p(T,_=!0){let C=r.get(T);if(!C)return!1;let R=Fr(C.door,_);return C.obstacle.body.position.copy(mi(R.position)),C.obstacle.body.quaternion.setFromEuler(...R.rotation,"XYZ"),C.open=!!_,l(C.obstacle),!0}function x(){for(let T of r.keys())p(T,!1);h.position.copy(mi(f)),h.previousPosition.copy(h.position),h.interpolatedPosition.copy(h.position),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion);for(let T of["velocity","angularVelocity","force","torque"])h[T].setZero();h.collisionFilterMask=-1,h.aabbNeedsUpdate=!0,h.wakeUp(),e.accumulator=0,e.time=0,e.stepnumber=0,e.contacts.length=0,e.frictionEquations.length=0,e.collisionMatrix.reset(),e.collisionMatrixPrevious.reset(),e.broadphase.dirty=!0,c=[]}function m(T,_){let C=o.boundingRadius;return i.filter(R=>[0,1,2].every(L=>Math.min(T[L],_[L])-C<=R.max[L]&&Math.max(T[L],_[L])+C>=R.min[L]))}function g(T,_,C){let R=ce(_,T),L=null;for(let U of m(T,_))for(let N of a){let I=KM(N,C,T,R,U);I&&(!L||I.t<L.t)&&(L={...I,body:U.body})}return L}function v(T,_=h.velocity,C=h.quaternion){if(!Number.isFinite(T)||T<0)throw new TypeError("advance requires a non-negative finite timestep");let R=xn(h.position),L=jn(xn(_),T),U=h.quaternion.clone(),N=new Ve(C.x,C.y,C.z,C.w);N.normalize();let I=2*Math.acos(zr(Math.abs(U.x*N.x+U.y*N.y+U.z*N.z+U.w*N.w),0,1)),F=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(ps(L))/.12)),Math.ceil(I/.012));h.previousPosition.copy(h.position),h.previousQuaternion.copy(U),h.velocity.copy(mi(_)),c=[];let B=R,W=U,Y=null;for(let tt=0;tt<F;tt++){let J=gi(R,jn(L,(tt+1)/F)),st=new Ve,xt=new Ve;if(U.slerp(N,(tt+.5)/F,st),U.slerp(N,(tt+1)/F,xt),h.collisionFilterMask!==0&&(Y=g(B,J,st),!Y)){let kt=g(J,J,xt);kt&&(Y={...kt,t:0})}if(Y){let kt=Math.sqrt(ps(ce(J,B))),Yt=Math.max(0,Y.t-(kt>_n?.001/kt:0)),Zt=Or(B,J,Yt);Yt>0&&(W=st),c.push({from:B,to:Zt,orientation:W}),B=Zt;break}c.push({from:B,to:J,orientation:st}),B=J,W=xt}h.position.copy(mi(B)),h.quaternion.copy(W),h.interpolatedPosition.copy(h.position),h.interpolatedQuaternion.copy(h.quaternion),h.aabbNeedsUpdate=!0,e.broadphase.dirty=!0,e.time+=T,e.stepnumber+=F;let X={collided:!!Y,body:Y?.body??null,normal:Y?mi(Y.normal):null,steps:F,safePosition:h.position.clone()};return Y&&(h.velocity.setZero(),h.dispatchEvent({type:"collide",body:Y.body,contact:{bi:h,bj:Y.body,ni:mi(Y.normal)}})),X}function A(T,_){return T=xn(T),_=xn(_),!i.some(C=>{let R=td(T,_,C);return R!==null&&R<1-1e-6})}function b(T,_=h.previousPosition,C=0){let R=xn(T.position??T),L=Math.max(0,Number(T.collectRadius??$M))+Math.max(0,Number(C)||0),U=xn(_),N=c.length&&ps(ce(U,c[0].from))<1e-8?c:[{from:U,to:xn(h.position),orientation:h.quaternion}];for(let I of N){let F=ce(I.to,I.from),B=ps(F),W=Or(I.from,I.to,B>_n?zr(Be(ce(R,I.from),F)/B,0,1):0);if(ps(ce(R,W))>(L+o.boundingRadius)**2)continue;let Y=vm(ce(R,I.from),I.orientation),X=vm(ce(R,I.to),I.orientation);for(let tt of a){if((ym(Y,tt)||ym(X,tt))&&A(R,R))return!0;for(let J of tt.triangles){let st=jM(Y,X,...J);if(st.distance2>L**2+_n)continue;let xt=gi(Or(I.from,I.to,st.t),kr(st.point,I.orientation));if(A(xt,R))return!0}}}return!1}function S(T,_,C=.18){T=xn(T),_=xn(_);let R=1;for(let I of i){let F=td(T,_,I,C);F!==null&&(R=Math.min(R,Math.max(0,F-.015)))}let[L,U,N]=Or(T,_,R);return{x:L,y:U,z:N}}function w(T){let _=xn(T),C=gi(_,[0,50,0]),R=1/0;for(let L of i){if(!/ceiling|roof|floor|slab/.test(L.kind))continue;let U=td(_,C,L);U!==null&&U>_n&&(R=Math.min(R,_[1]+50*U))}return R}return x(),{world:e,plane:h,blocks:n,level:s,reset:x,configureAircraft:d,setDoorOpen:p,advance:v,canCollectStar:b,hasLineOfSight:A,traceCamera:S,getCeilingAt:w,get aircraft(){return o},doorBodies:r}}var QM=new Map(ye.rooms.map(s=>[s.id,s])),t1=new Set(["cellar-core","stairs","upper-core","attic-core"]),e1=new Map(ye.collectibles.map(s=>{let t=!!s.under,e=QM.get(s.roomId)?.floor==="ug"||t1.has(s.roomId);return[s.id,Object.freeze({id:s.id,roomId:s.roomId,under:t,zone:e,basePoints:150+(t?150:0)+(e?150:0)})]}));function oa(s){let t=typeof s=="string"?s:s?.id,e=e1.get(t);if(!e)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return e}function Sm(s){if(!Array.isArray(s)||!s.every(t=>typeof t=="string"))throw new Error("Die gesammelten Sterne sind ung\xFCltig.");return[...new Set(s)].reduce((t,e)=>t+oa(e).basePoints,0)}var n1=(s,t,e)=>Math.max(t,Math.min(e,s)),i1=new Set(["wall","floor","roof"]);function Mm(s,t,e=()=>({width:s.clientWidth,height:s.clientHeight})){let n=t.house||t.level||ye,i=new bl({canvas:s,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),i.shadowMap.enabled=!0,i.shadowMap.type=Rs,i.outputColorSpace=Ze,i.toneMapping=Oo,i.toneMappingExposure=1.18;let r=new fo;r.background=new Kt("#c9ddd5"),r.fog=new uo("#c9ddd5",30,90);let o=new Ke(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new No("#fff3d9","#718169",2.7));let a=new Uo("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let c=new Bo("#fff1d0",4,11,2);r.add(c);let l=new Map,u=new Set,f=new Set,h=new Ri(1,1,1);u.add(h);let d=new Map;for(let H of["ug","eg","og","dg","garden"]){let z=new bn;z.name=`Etage ${H}`,d.set(H,z),r.add(z)}let p=[],x=new Map,m=[],g=[];function v(H,z={}){let D=`${H}:${JSON.stringify(z)}`;return l.has(D)||l.set(D,new Ii({color:H,roughness:.86,flatShading:!0,...z})),l.get(D)}function A(H=!1){let z=document.createElement("canvas");z.width=z.height=256;let D=z.getContext("2d");if(D.fillStyle=H?"#edf4d8":"#fff1dc",D.fillRect(0,0,256,256),H)for(let lt=0;lt<1200;lt++)D.fillStyle=lt%2?"#d5e0bd":"#eef3d9",D.fillRect(lt*67%256,lt*113%256,1,3);else{D.strokeStyle="#c9b594",D.lineWidth=1;for(let lt=0;lt<=256;lt+=32){D.beginPath(),D.moveTo(0,lt),D.lineTo(256,lt),D.stroke();for(let ft=lt/32%2*96;ft<256;ft+=128)D.beginPath(),D.moveTo(ft,lt),D.lineTo(ft,lt+32),D.stroke()}for(let lt=0;lt<90;lt++)D.fillStyle=lt%2?"#dfd0b8":"#e8dbc4",D.fillRect(lt*73%256,lt*19%256,12+lt%21,1)}let et=new _r(z);return et.colorSpace=Ze,et.wrapS=et.wrapT=lr,et.repeat.set(3,3),f.add(et),et}let b=A(),S=A(!0),w=new me,T=new on,_=new Rn,C=H=>w.compose(new V(...H.position),T.setFromEuler(_.set(...H.rotation||[0,0,0])),new V(...H.size)),R=new Map;for(let H of n.obstacles){let z=d.get(H.floor)||d.get("garden");if(i1.has(H.kind)){let D=v(H.color).clone();D.transparent=!0,H.kind==="floor"&&(D.map=H.floor==="garden"?S:b);let et=new Pe(h,D);et.name=H.id,et.position.set(...H.position),et.scale.set(...H.size),et.rotation.set(...H.rotation||[0,0,0]),et.castShadow=H.kind!=="floor",et.receiveShadow=!0,z.add(et),p.push({mesh:et,part:H,opacity:1})}else{let D=`${H.floor}|${H.color}|${H.kind==="glass"?"glass":"opaque"}`;R.has(D)||R.set(D,{group:z,color:H.color,glass:H.kind==="glass",parts:[]}),R.get(D).parts.push(H)}}for(let{group:H,color:z,glass:D,parts:et}of R.values()){let lt=new mr(h,v(z,D?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),et.length);et.forEach((ft,j)=>lt.setMatrixAt(j,C(ft))),lt.instanceMatrix.needsUpdate=!0,lt.castShadow=!D,lt.receiveShadow=!0,lt.frustumCulled=!1,H.add(lt)}let L=new Ri(.54,.23,.012);u.add(L);function U(H){let z=document.createElement("canvas");z.width=256,z.height=112;let D=z.getContext("2d");D.fillStyle="#f5e5bc",D.fillRect(0,0,256,112),D.strokeStyle="#ad8b58",D.lineWidth=4,D.strokeRect(4,4,248,104),D.fillStyle="#463e30",D.font="bold 44px system-ui",D.textAlign="center",D.textBaseline="middle",D.fillText(H.signText??`${H.threshold} \u2605`,128,58);for(let j of[15,241])D.beginPath(),D.arc(j,56,3,0,Math.PI*2),D.fill();let et=new _r(z);et.colorSpace=Ze,f.add(et);let lt=v("#ad8b58",{roughness:.7}),ft=new Ii({map:et,roughness:.85});return[-1,1].map(j=>{let ht=new Pe(L,[lt,lt,lt,lt,ft,lt]);return ht.name=`${H.id}-sign-${j<0?"back":"front"}`,ht.position.set(0,.37,j*(H.size[2]/2+.0065)),ht.rotation.y=j<0?Math.PI:0,ht.castShadow=ht.receiveShadow=!0,ht})}for(let H of n.doors){let z=new bn;z.name=H.id;let D=new Pe(h,v(H.color||"#b99469"));D.name=`${H.id}-leaf`,D.castShadow=D.receiveShadow=!0;let et=Fr(H,!1);z.position.set(...et.position),z.rotation.set(...et.rotation),D.scale.set(...et.size),z.add(D,...U(H)),r.add(z),x.set(H.id,{door:H,mesh:z,leaf:D,opened:!1})}function N(H,z=!0){let D=x.get(H);if(!D)return;D.opened=!!z;let et=Fr(D.door,D.opened);D.mesh.position.set(...et.position),D.mesh.rotation.set(...et.rotation),D.leaf.scale.set(...et.size)}let I=new bn;I.name="Papierflieger",r.add(I);let F=new Set,B=new Set,W="none",Y="classic",X=1,tt=54,J=new Float32Array(tt*3),st=new an;st.setAttribute("position",new fn(J,3)),u.add(st);let xt=new vo(st,new xr({color:"#fff2d0",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1}));xt.frustumCulled=!1,xt.renderOrder=20,r.add(xt);let kt=new mr(h,new Bn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),28);kt.frustumCulled=!1,kt.visible=!1,kt.renderOrder=20,r.add(kt);function Yt(H="classic",z=1,D="none"){let et=Ds(H,z);Y=et.form,X=et.size,W=D||"none";for(let lt of B)lt.dispose();B.clear();for(let lt of F)lt.dispose();F.clear(),I.clear();for(let lt of et.parts){let ft=[];for(let Bt of lt.faces)for(let k=1;k+1<Bt.length;k++)for(let vt of[Bt[0],Bt[k],Bt[k+1]])ft.push(...lt.vertices[vt]);let j=new an;j.setAttribute("position",new ke(ft,3)),j.computeVertexNormals();let ht=new Ii({color:lt.color,roughness:.77,side:Un,flatShading:!0}),Et=new Pe(j,ht);Et.name=lt.id,Et.castShadow=Et.receiveShadow=!0,I.add(Et),B.add(j),F.add(ht)}xt.material.color.set(W==="confetti"?"#c598e8":W==="spark"?"#e9bd5e":W==="mint"?"#80d6ba":"#fcf1ce"),xt.visible=W==="mint"||W==="spark",kt.visible=W==="spark"||W==="confetti";for(let lt=0;lt<28;lt++)kt.setColorAt(lt,new Kt(W==="confetti"?["#d58c7e","#79c6b2","#e9c774","#a7a0d6"][lt%4]:"#f7d581"));return kt.instanceColor.needsUpdate=!0,et}function Zt(H=n.start){for(let z=0;z<tt;z++)J[z*3]=H.x,J[z*3+1]=H.y,J[z*3+2]=H.z;st.attributes.position.needsUpdate=!0}function nt(H){J.copyWithin(3,0,J.length-3),J[0]=H.x,J[1]=H.y,J[2]=H.z,st.attributes.position.needsUpdate=!0}Yt(),Zt(),I.position.set(n.start.x,n.start.y,n.start.z);let rt=new bn;rt.position.set(n.start.x,0,n.start.z),r.add(rt);let yt=new Cs(.23,.014,5,28);u.add(yt);let zt=new Pe(yt,new Bn({color:"#e5b45f",transparent:!0,opacity:.75}));zt.rotation.x=Math.PI/2,zt.position.y=.045,rt.add(zt);function Ct(H=0){zt.scale.setScalar(1+Math.max(0,H)*.3),zt.material.opacity=.5+Math.min(1,H)*.45}let Vt=new yr;for(let H=0;H<10;H++){let z=H*Math.PI/5+Math.PI/2,D=H%2?.052:.115,et=Math.cos(z)*D,lt=Math.sin(z)*D;H?Vt.lineTo(et,lt):Vt.moveTo(et,lt)}Vt.closePath();let oe=new Io(Vt,{depth:.025,bevelEnabled:!1});u.add(oe);let ct=new Cs(.165,.007,4,22);u.add(ct);let dt=[new Ii({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new Ii({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],pt=[new Bn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Bn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],mt=new Bn({color:"#fff1b7",toneMapped:!1});for(let H of[...dt,...pt,mt])l.set(`star-${H.id}`,H);for(let H of n.collectibles){let z=oa(H),D=new bn,et=new Pe(oe,dt[0]),lt=[],ft=new bn;D.name=H.id,D.position.set(H.x,H.y,H.z),D.add(et,ft);for(let j=0;j<Number(z.under)+Number(z.zone);j++){let ht=new Pe(ct,pt[0]);ht.scale.setScalar(1+j*.28),lt.push(ht),D.add(ht)}for(let j=0;j<3;j++){let ht=new Pe(oe,mt),Et=j*Math.PI*2/3;ht.position.set(Math.cos(Et)*.17,Math.sin(Et)*.17,.02),ht.scale.setScalar(.16),ft.add(ht)}H.under&&D.scale.setScalar(.72),r.add(D),m.push({data:H,mesh:D,star:et,rings:lt,sparkles:ft,discovered:!1,collected:!1})}function _t(H){let z=[];for(let D of m)!D.collected&&H(D.data)&&(D.collected=!0,D.mesh.visible=!1,z.push(D.data.id));return z}function Gt(H=[]){let z=new Set(H);for(let D of m){D.collected=!1,D.mesh.visible=!0,D.discovered=z.has(D.data.id),D.star.material=dt[Number(D.discovered)];for(let et of D.rings)et.material=pt[Number(D.discovered)];D.sparkles.visible=!D.discovered}}for(let H of n.thermals){let z=new Cs(H.r*.75,.009,4,26);u.add(z);for(let D=0;D<7;D++){let et=new Pe(z,new Bn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));et.rotation.x=Math.PI/2,r.add(et),g.push({mesh:et,thermal:H,phase:D/7})}}let Dt=[];for(let H of t.blocks||[]){let z=new Pe(h,v("#dab87f"));z.scale.set(...H.size),z.castShadow=!0,r.add(z),Dt.push(z)}let Ht=new on,qt=new V,O=new V,re=new V;function Qt(H,z){Ht.setFromEuler(_.set(...H.rotation||[0,0,0])).invert(),re.set(...H.position),qt.copy(o.position).sub(re).applyQuaternion(Ht),O.copy(z).sub(re).applyQuaternion(Ht).sub(qt);let D=0,et=1;for(let[lt,ft]of["x","y","z"].entries()){let j=-H.size[lt]/2-.025,ht=H.size[lt]/2+.025,Et=O[ft];if(Math.abs(Et)<1e-7){if(qt[ft]<j||qt[ft]>ht)return!1}else{let Bt=(j-qt[ft])/Et,k=(ht-qt[ft])/Et;if(D=Math.max(D,Math.min(Bt,k)),et=Math.min(et,Math.max(Bt,k)),D>et)return!1}}return et>0&&D<.97}let P={ceiling:!1,distance:1/0,intensity:0};function y(H){let z=typeof t.getCeilingAt=="function"?t.getCeilingAt(H):1/0;return P.distance=z-H.y,P.ceiling=P.distance<.45,P.intensity=n1((.55-P.distance)/.5,0,1),P.ceiling}function q(H=1/60,z=0){let D=t.plane?.position||I.position,et=jo(D),lt=et&&et.floor!=="garden",ft=j=>!lt||j==="garden"||(hs[j]??-9)<=(hs[et.floor]??0)+3.15;for(let[j,ht]of d)ht.visible=ft(j);for(let j of p){let ht=Qt(j.part,D),Et=ht?j.part.kind==="floor"||j.part.kind==="roof"?.07:.13:1;j.opacity+=(Et-j.opacity)*Math.min(1,Math.max(.02,H)*14),j.mesh.material.opacity=j.opacity,j.mesh.material.depthWrite=j.opacity>.7,j.mesh.castShadow=j.part.kind!=="floor"&&j.opacity>.8}for(let j of x.values())j.mesh.visible=ft(j.door.floor);for(let j=0;j<m.length;j++){let ht=m[j];if(ht.collected)continue;let Et=n.rooms.find(Bt=>Bt.id===ht.data.roomId);ht.mesh.visible=!lt||Et?.floor===et.floor||Et?.floor==="garden",ht.mesh.rotation.y=z*(ht.discovered?.5:.85)+j*.61,ht.mesh.position.y=ht.data.y+Math.sin(z*1.7+j)*(ht.data.under?.009:.026);for(let Bt=0;Bt<ht.sparkles.children.length;Bt++)ht.sparkles.children[Bt].scale.setScalar(.09+.12*Math.sin(z*3+j+Bt*2)**2)}for(let j of g){let ht=(z*.18+j.phase)%1;j.mesh.position.set(j.thermal.x,j.thermal.y+ht*j.thermal.height,j.thermal.z),j.mesh.material.opacity=Math.sin(ht*Math.PI)*.28,j.mesh.visible=Math.abs(j.mesh.position.y-D.y)<4}for(let j=0;j<Dt.length;j++)Dt[j].position.copy(t.blocks[j].body.position),Dt[j].quaternion.copy(t.blocks[j].body.quaternion);if(c.position.set(D.x,D.y+.6,D.z),c.intensity=et?.floor==="ug"?7:3,a.target.position.set(D.x,1,D.z),a.target.updateMatrixWorld(),a.position.set(D.x-12,24,D.z-14),W==="spark"||W==="confetti"){let j=Math.hypot(J[0]-J[18],J[1]-J[19],J[2]-J[20])>.035;kt.visible=j;for(let ht=0;ht<28;ht++){let Et=Math.min(tt-1,2+ht)*3,Bt=1-ht/32,k=(W==="confetti"?.037:.022)*Bt*(W==="spark"?.6+.4*Math.sin(z*8+ht)**2:1),vt=new V(J[Et]+Math.sin(ht*2.4)*.045,J[Et+1]+Math.cos(ht*1.7)*.035-ht*.001,J[Et+2]);w.compose(vt,T.setFromEuler(_.set(z*2+ht,ht*.7,z*1.4+ht)),new V(k,W==="confetti"?k*.22:k,k)),kt.setMatrixAt(ht,w)}kt.instanceMatrix.needsUpdate=!0}y(D)}function $(){let H=e()||{},z=Math.max(1,H.width||s.clientWidth||1),D=Math.max(1,H.height||s.clientHeight||1);i.setSize(z,D,!1),o.aspect=z/D,o.updateProjectionMatrix()}function it(){i.render(r,o)}$(),window.addEventListener("gameviewportchange",$);function gt(){window.removeEventListener("gameviewportchange",$);let H=new Set([...l.values(),...F]),z=new Set([...u,...B]);r.traverse(D=>{if(D.geometry&&z.add(D.geometry),D.material)for(let et of Array.isArray(D.material)?D.material:[D.material])H.add(et);D.shadow?.map&&D.shadow.map.dispose()});for(let D of z)D.dispose();for(let D of H)D.dispose();for(let D of f)D.dispose();r.clear(),i.dispose()}return{renderer:i,scene:r,camera:o,plane:I,sling:rt,thermals:n.thermals,update:q,setAircraft:Yt,setDoorOpen:N,collectStars:_t,resetCollectibles:Gt,resetTrail:Zt,updateTrail:nt,updateSling:Ct,updateCeiling:y,warnings:P,render:it,resize:$,dispose:gt,totalCollectibles:m.length,get collected(){return m.filter(H=>H.collected).length},get aircraft(){return{form:Y,size:X,effect:W}},sync:()=>q(1/60,0),wind:H=>q(1/60,H),collect:H=>_t(z=>Math.hypot(z.x-H.x,z.y-H.y,z.z-H.z)<=z.radius).length}}var ca=250,id="stubenflieger.house-profile.v1",ms=Object.freeze({min:.55,max:1.5,step:.05}),s1=[{id:"upgrade:size",category:"upgrades",name:"Verstellbare Gr\xF6\xDFe",price:1800,description:"55\u2013150 %: Gro\xDF gleitet l\xE4nger, klein kurvt enger und passt durch kleine L\xFCcken. Die Hitbox w\xE4chst mit."},{id:"boost:lift",category:"boosts",name:"Aufwind",price:800,description:"Ein kurzer H\xF6hengewinn. Ein Einsatz in jedem Run."},{id:"boost:turbo",category:"boosts",name:"Turbo",price:1e3,description:"Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run."},{id:"boost:magnet",category:"boosts",name:"Sternmagnet",price:1400,description:"Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run."},{id:"boost:cushion",category:"boosts",name:"Luftpolster",price:1600,description:"F\xE4ngt nach der Aktivierung eine leichte Ber\xFChrung ab. Ein Einsatz in jedem Run."},{id:"plane:classic",category:"planes",name:"Klassiker",price:0,description:"Gerade Fl\xFCgelenden und ausgewogenes Flugverhalten."},{id:"plane:glider",category:"planes",name:"Gleiter",price:1200,description:"Breite, gerundete Fl\xFCgel. L\xE4ngeres Gleiten und gem\xFCtlicheres Tempo."},{id:"plane:dart",category:"planes",name:"Pfeil",price:1800,description:"Spitze Dreiecksform, h\xF6heres Tempo und weitere Kurven."},{id:"plane:stunt",category:"planes",name:"Kunstflieger",price:2500,description:"Gerade, kantige Fl\xFCgel und ein eckiges Leitwerk f\xFCr enge Kurven."},{id:"effect:none",category:"effects",name:"Ohne Effekt",price:0,description:"Die schlichte Papieroptik."},{id:"effect:mint",category:"effects",name:"Minzspur",price:300,description:"Eine dezente t\xFCrkise Flugspur."},{id:"effect:spark",category:"effects",name:"Sternenstaub",price:700,description:"Goldenes Funkeln hinter deinem Flieger."},{id:"effect:confetti",category:"effects",name:"Konfettispur",price:1e3,description:"Eine bunte Spur f\xFCr deinen Hausflug."}],la=Object.freeze([...s1,...ye.doors.map((s,t)=>({id:`door:${s.id}`,category:"doors",name:s.name||s.id,price:Math.min(4e3,500+t*200),description:"Bei jedem Run von Anfang an offen, solange du gekaufte T\xFCren aktiviert hast."}))].map(Object.freeze)),aa=new Map(la.map(s=>[s.id,s])),sd=new Map(ye.rooms.map(s=>[s.id,s.bonusId||s.id]));for(let s of sd.values())sd.set(s,s);var r1=ye.startRoomId||ye.startRoom||ye.rooms[0].id,Wl=s=>JSON.parse(JSON.stringify(s));function ql(s={}){let t=r=>Number.isInteger(r)&&r>0?r:0,e=Number.isFinite(s.seconds)?Math.min(60,Math.max(0,s.seconds)):0,n=new Set(Array.isArray(s.roomIds)?s.roomIds.map(r=>sd.get(r)).filter(r=>r&&r!==r1):[]);return(Object.hasOwn(s,"starIds")?Sm(s.starIds):t(s.stars)*150)+t(s.blocks)*100+Math.floor(e*10)+n.size*ca}function Em(){return{version:2,points:0,highscore:0,owned:["plane:classic","effect:none"],equipped:{form:"classic",effect:"none",boosts:[],size:1},useDoorUnlocks:!0,creditedRuns:[],discoveredStarIds:[]}}function wm(s){if(s===null)return Em();let t;try{t=JSON.parse(s)}catch{throw new Error("Dein gespeichertes Profil ist besch\xE4digt. Es wird nicht \xFCberschrieben.")}if(!t||![1,2].includes(t.version)||!Number.isSafeInteger(t.points)||t.points<0||!Number.isSafeInteger(t.highscore)||t.highscore<0||!Array.isArray(t.owned)||!t.owned.every(c=>typeof c=="string")||!Array.isArray(t.creditedRuns)||!t.creditedRuns.every(c=>typeof c=="string")||!t.equipped||t.version===2&&(!Array.isArray(t.discoveredStarIds)||!t.discoveredStarIds.every(c=>typeof c=="string")))throw new Error("Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht \xFCberschrieben.");let e=[...new Set(["plane:classic","effect:none",...t.owned])],n=t.equipped,i=aa.has(`plane:${n.form}`)&&e.includes(`plane:${n.form}`)?n.form:"classic",r=aa.has(`effect:${n.effect}`)&&e.includes(`effect:${n.effect}`)?n.effect:"none",o=[...new Set(Array.isArray(n.boosts)?n.boosts:[])].filter(c=>aa.has(`boost:${c}`)&&e.includes(`boost:${c}`)).slice(0,2),a=e.includes("upgrade:size")&&Number.isFinite(n.size)?Math.min(ms.max,Math.max(ms.min,n.size)):1;return{version:2,points:t.points,highscore:t.highscore,owned:e,equipped:{form:i,effect:r,boosts:o,size:a},useDoorUnlocks:t.useDoorUnlocks!==!1,creditedRuns:[...new Set(t.creditedRuns)],discoveredStarIds:t.version===2?[...new Set(t.discoveredStarIds)]:[]}}function Am(s){if(typeof s!="string"||s.length<8||s.length>100)throw new Error("Dieser Run konnte nicht zugeordnet werden.")}function Tm(s){let t=Em(),e=null,n="Speichern im Browser ist gerade nicht m\xF6glich. Punkte und K\xE4ufe wurden nicht ver\xE4ndert. Bitte erlaube Website-Daten und versuche es erneut.";try{s||(s=globalThis.localStorage),t=wm(s.getItem(id))}catch(l){e=l.message?.includes("Profil")?l.message:n}function i(){if(!s)throw new Error(n);try{t=wm(s.getItem(id)),e=null}catch(l){throw e=l.message?.includes("Profil")?l.message:n,new Error(e)}}function r(l){try{s.setItem(id,JSON.stringify(l))}catch{throw e=n,new Error(e)}t=l,e=null}function o(){let{creditedRuns:l,...u}=t;return Wl(u)}function a(l){i();let u=Wl(t);return l(u),r(u),o()}function c(l,u){if(!l.owned.includes(u)||!aa.has(u))throw new Error("Bitte schalte diesen Artikel zuerst frei.")}return{getProfile:o,getStatus:()=>({available:!e,error:e}),refresh:()=>(i(),o()),purchase(l){return a(u=>{let f=aa.get(l);if(!f)throw new Error("Diesen Artikel gibt es nicht.");if(u.owned.includes(l))throw new Error("Dieser Artikel ist bereits dauerhaft freigeschaltet.");if(u.points<f.price)throw new Error("Daf\xFCr fehlen noch Punkte.");u.points-=f.price,u.owned.push(l)})},equipForm(l){return a(u=>{c(u,`plane:${l}`),u.equipped.form=l})},equipEffect(l){return a(u=>{c(u,`effect:${l}`),u.equipped.effect=l})},equipBoosts(l){return a(u=>{if(!Array.isArray(l)||l.length>2||new Set(l).size!==l.length)throw new Error("W\xE4hle h\xF6chstens zwei verschiedene Boosts.");l.forEach(f=>c(u,`boost:${f}`)),u.equipped.boosts=[...l]})},setSize(l){return a(u=>{if(c(u,"upgrade:size"),!Number.isFinite(l)||l<ms.min||l>ms.max)throw new Error("W\xE4hle eine Gr\xF6\xDFe zwischen 55 und 150 %.");u.equipped.size=Math.round(l*100)/100})},setPermanentDoorsEnabled(l){return a(u=>{u.useDoorUnlocks=!!l})},creditStar(l,u){Am(l);let f=oa(u);i();let h=!t.discoveredStarIds.includes(f.id),d=h?f.basePoints:0;if(h){let p=Wl(t);if(!Number.isSafeInteger(p.points+d))throw new Error("Das Punkteguthaben ist zu gro\xDF.");p.points+=d,p.discoveredStarIds.push(f.id),r(p)}return{starId:f.id,firstDiscovery:h,basePoints:f.basePoints,bonus:d,totalPoints:f.basePoints+d,credited:d,points:t.points,duplicate:!h}},creditRun(l,u){Am(l),i();let f=ql(u);if(!Number.isSafeInteger(f))throw new Error("Dieses Flugergebnis ist ung\xFCltig.");if(t.creditedRuns.includes(l))return{credited:0,points:t.points,score:f,duplicate:!0};let h=Wl(t);if(!Number.isSafeInteger(h.points+f))throw new Error("Das Punkteguthaben ist zu gro\xDF.");return h.points+=f,h.highscore=Math.max(h.highscore,f),h.creditedRuns.push(l),r(h),{credited:f,points:h.points,score:f,duplicate:!1}}}}function Cm(s,t,e=globalThis.crypto.randomUUID()){let n=new Set,i=new Set,r=new Set,o=new Set(s.collectibles.map(d=>d.id)),a=new Map(s.rooms.map(d=>[d.id,d.bonusId||d.id])),c=new Set(a.values()),l=s.startRoomId||s.startRoom||s.rooms[0].id;i.add(l);let u=new Set(t.owned||[]);if(t.useDoorUnlocks!==!1)for(let d of s.doors)u.has(`door:${d.id}`)&&r.add(d.id);let f=[...new Set(t.equipped?.boosts||[])].filter(d=>u.has(`boost:${d}`)).slice(0,2),h=new Set;return{id:e,stars:n,visited:i,opened:r,charges:f,used:h,collect(d){if(!o.has(d)||n.has(d))return null;n.add(d);let p=s.doors.filter(x=>!r.has(x.id)&&n.size>=x.threshold);for(let x of p)r.add(x.id);return p},enterRoom(d){return d=a.get(d)||d,!c.has(d)||i.has(d)?!1:(i.add(d),!0)},useBoost(d){let p=f[d];return!p||h.has(p)?null:(h.add(p),p)},nextDoor(){return s.doors.filter(d=>!r.has(d.id)).sort((d,p)=>d.threshold-p.threshold)[0]||null},summary(d=0,p=0){return{stars:n.size,starIds:[...n],blocks:p,seconds:d,roomIds:[...i].filter(x=>x!==l),complete:n.size===o.size}}}}var o1=[["upgrades","Gr\xF6\xDFe"],["doors","T\xFCren"],["boosts","Boosts"],["planes","Flugzeuge"],["effects","Effekte"]],Xl=s=>s.toLocaleString("de-DE");function Xe(s,t,e){let n=document.createElement(s);return t!==void 0&&(n.textContent=t),e&&(n.className=e),n}function a1(s,t){let e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.setAttribute("viewBox","-0.29 -0.22 0.58 0.44"),n.setAttribute("class","aircraft-preview"),n.setAttribute("role","img"),n.setAttribute("aria-label",`${t} \u2013 Form von oben`);let i=Ds(s).parts.flatMap(r=>r.faces.map(o=>{let a=o.map(h=>r.vertices[h]),[c,l,u]=a,f=(l[2]-c[2])*(u[0]-c[0])-(l[0]-c[0])*(u[2]-c[2]);return{vertices:a,normalY:f,color:r.color,height:a.reduce((h,d)=>h+d[1],0)/a.length}})).filter(r=>r.normalY>1e-9).sort((r,o)=>r.height-o.height);for(let r of i){let o=document.createElementNS(e,"polygon");o.setAttribute("points",r.vertices.map(a=>`${a[0]},${a[2]}`).join(" ")),o.setAttribute("fill","#"+r.color.toString(16).padStart(6,"0")),o.setAttribute("stroke","#a99771"),o.setAttribute("stroke-width",".0012"),o.setAttribute("stroke-linejoin","round"),n.append(o)}return n}function Rm({container:s,progression:t,onChange:e=()=>{},onClose:n=()=>{}}){let i="upgrades",r="";function o(l,u,f){try{let h=l();r=u,e(h)}catch(h){r=h.message}c(f)}function a(l,u,f){let h=Xe("button",l,"shop-action");return h.type="button",h.dataset.shopFocus=f,h.addEventListener("click",u),h}function c(l){let u=t.getProfile();try{u=t.refresh()}catch(x){r=x.message}s.replaceChildren();let f=Xe("div",void 0,"shop-wallet");f.append(Xe("strong",`${Xl(u.points)} Punkte`),Xe("span",`Dein Rekord: ${Xl(u.highscore)} Punkte`)),s.append(f,Xe("p","Alles bleibt freigeschaltet. Dein Guthaben, deine K\xE4ufe und deine Ausr\xFCstung werden nur in diesem Browser gespeichert. Beim L\xF6schen der Website-Daten gehen sie verloren.","shop-note"));let h=Xe("nav",void 0,"shop-tabs");h.setAttribute("aria-label","Shop-Bereiche"),o1.forEach(([x,m])=>{let g=a(m,()=>{i=x,r="",c(`category:${x}`)},`category:${x}`);g.setAttribute("aria-pressed",String(i===x)),h.append(g)}),s.append(h);let d=Xe("p",r||t.getStatus().error||"Einmal kaufen, in jedem Run benutzen.","shop-status");if(d.setAttribute("role","status"),d.setAttribute("aria-live","polite"),s.append(d),i==="doors"){let x=Xe("label",void 0,"shop-setting"),m=document.createElement("input");m.type="checkbox",m.checked=u.useDoorUnlocks,m.dataset.shopFocus="doors-enabled",m.addEventListener("change",()=>o(()=>t.setPermanentDoorsEnabled(m.checked),m.checked?"Gekaufte T\xFCren sind ab dem n\xE4chsten Run offen.":"Der n\xE4chste Run startet wieder mit geschlossenen T\xFCren.","doors-enabled")),x.append(m,document.createTextNode("Gekaufte T\xFCren beim Start \xF6ffnen")),s.append(x,Xe("p","Sterne \xF6ffnen weitere T\xFCren im laufenden Run. F\xFCr jeden erstmals besuchten Raum gibt es 250 Punkte. Startzimmer und bereits offene T\xFCren allein geben keinen Bonus.","shop-note"))}if(i==="boosts"&&s.append(Xe("p",`W\xE4hle bis zu zwei Boosts (${u.equipped.boosts.length}/2). Jeder ausger\xFCstete Boost ist in jedem Run einmal einsetzbar und wird beim n\xE4chsten Start aufgef\xFCllt.`,"shop-note")),i==="upgrades"&&u.owned.includes("upgrade:size")){let x=Xe("label",void 0,"shop-size");x.htmlFor="plane-size";let m=Xe("output",`${Math.round(u.equipped.size*100)} %`);m.htmlFor="plane-size",x.append(document.createTextNode("Flugzeuggr\xF6\xDFe "),m);let g=document.createElement("input");g.id="plane-size",g.type="range",g.min=ms.min,g.max=ms.max,g.step=ms.step,g.value=u.equipped.size,g.dataset.shopFocus="size",g.setAttribute("aria-valuetext",`${Math.round(u.equipped.size*100)} Prozent`),g.addEventListener("input",()=>{m.textContent=`${Math.round(Number(g.value)*100)} %`,g.setAttribute("aria-valuetext",`${Math.round(Number(g.value)*100)} Prozent`)}),g.addEventListener("change",()=>o(()=>t.setSize(Number(g.value)),"Gr\xF6\xDFe gespeichert. Sie gilt ab dem n\xE4chsten Run.","size")),s.append(x,g,Xe("p","Klein: wendiger, schmale L\xFCcken. Gro\xDF: l\xE4ngeres Gleiten, mehr Spannweite. Form und Kollisionsfl\xE4che \xE4ndern sich gemeinsam.","shop-note"))}let p=Xe("div",void 0,"shop-grid");i==="planes"&&p.classList.add("aircraft-grid"),la.filter(x=>x.category===i).forEach(x=>{let m=Xe("article",void 0,"shop-card"),g=u.owned.includes(x.id);if(m.append(Xe("h3",x.name)),x.category==="planes"&&m.append(a1(x.id.split(":")[1],x.name)),m.append(Xe("p",x.description),Xe("strong",g?"Dauerhaft freigeschaltet":`${Xl(x.price)} Punkte`,"shop-price")),g){if(x.category==="planes"||x.category==="effects"){let v=x.id.split(":")[1],A=x.category==="planes",b=(A?u.equipped.form:u.equipped.effect)===v,S=a(b?"Ausger\xFCstet":"Ausr\xFCsten",()=>o(()=>A?t.equipForm(v):t.equipEffect(v),`${x.name} ausger\xFCstet.`,x.id),x.id);S.disabled=b,m.append(S)}else if(x.category==="boosts"){let v=x.id.split(":")[1],A=u.equipped.boosts.includes(v),b=a(A?"Ablegen":"Ausr\xFCsten",()=>{let S=A?u.equipped.boosts.filter(w=>w!==v):[...u.equipped.boosts,v];o(()=>t.equipBoosts(S),A?`${x.name} abgelegt.`:`${x.name} ausger\xFCstet.`,x.id)},x.id);b.disabled=!A&&u.equipped.boosts.length>=2,m.append(b)}}else{let v=a("Dauerhaft freischalten",()=>o(()=>t.purchase(x.id),`${x.name} ist dauerhaft freigeschaltet.`,x.id),x.id);v.disabled=u.points<x.price||!t.getStatus().available,m.append(v),u.points<x.price&&m.append(Xe("small",`Noch ${Xl(x.price-u.points)} Punkte`))}p.append(m)}),s.append(p,a("Zur\xFCck zum Start",n,"close")),l&&([...s.querySelectorAll("[data-shop-focus]")].find(m=>m.dataset.shopFocus===l&&!m.disabled)||h.querySelector('[aria-pressed="true"]'))?.focus()}return{render:c,destroy:()=>s.replaceChildren()}}var le=s=>document.getElementById(s);async function rd(s,t={}){let e=await fetch(s,{...t,signal:AbortSignal.timeout(1e4)}),n=await e.json();if(!e.ok)throw new Error(n.error||"Die Bestenliste ist gerade nicht erreichbar.");return n}function Im(){let s=null,t=null,e=0;try{le("pilot-name").value=localStorage.getItem("stubenflieger.pilot")||""}catch{}function n(){s=rd("/api/house-runs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scoreVersion:2})}).then(o=>o.run).catch(()=>null),t=null}function i({blocks:o,stars:a,starIds:c,seconds:l,roomIds:u,complete:f}){t={blocks:o,stars:a,starIds:[...c],flightMs:Math.floor(l*1e3),roomIds:[...u],complete:!!f,ticket:s,saved:!1},le("save-score").disabled=l<.5,le("save-score").textContent="Eintragen",le("pilot-name").disabled=!1,le("score-status").textContent=l<.5?"Dieser Flug war zu kurz f\xFCr die Bestenliste.":"Trage deinen Flug mit einem frei gew\xE4hlten Pilotnamen ein."}async function r(){let o=++e,a=document.activeElement;!le("leaderboard").hidden&&(a===le("refresh-leaderboard")||le("ranking-table").contains(a))&&le("close-leaderboard").focus(),le("leaderboard-status").textContent="Bestenliste wird geladen \u2026",le("ranking-table").hidden=!0,le("refresh-leaderboard").disabled=!0;try{let{entries:c}=await rd("/api/house-leaderboard?scoreVersion=2");if(o!==e)return;le("ranking-body").replaceChildren(),c.forEach((l,u)=>{let f=document.createElement("tr");for(let h of[u+1,l.name,`${l.rooms} R\xE4ume \xB7 ${l.stars} \u2605 \xB7 ${(l.flightMs/1e3).toFixed(1)} s${l.complete?" \xB7 Haus geschafft":""}`,l.points.toLocaleString("de-DE")]){let d=document.createElement("td");d.textContent=String(h),f.append(d)}le("ranking-body").append(f)}),le("ranking-table").hidden=c.length===0,le("leaderboard-status").textContent=c.length?"Die 20 besten Hausfl\xFCge \xB7 gewichtete Sternpunkte \xB7 ohne Erstfund-Bonus":"Noch keine Hausfl\xFCge mit der neuen Sternwertung eingetragen. Fliege die erste Bestmarke!"}catch{o===e&&(le("leaderboard-status").textContent="Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal.")}finally{o===e&&(le("refresh-leaderboard").disabled=!1)}}return le("refresh-leaderboard").onclick=()=>{r()},le("score-form").addEventListener("submit",async o=>{if(o.preventDefault(),!t||t.saved)return;let a=t,c=le("pilot-name").value.trim();document.activeElement===le("save-score")&&le("pilot-name").focus(),le("save-score").disabled=!0,le("score-status").textContent="Dein Flug wird eingetragen \u2026";try{let l=await a.ticket;if(!l)throw new Error("Dieser Flug konnte nicht online gestartet werden. Pr\xFCfe deine Verbindung und fliege noch eine Runde.");let u=await rd("/api/house-leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({run:l,name:c,scoreVersion:2,starIds:a.starIds,blocks:a.blocks,stars:a.stars,flightMs:a.flightMs,roomIds:a.roomIds,complete:a.complete})});if(a!==t)return;a.saved=!0,le("save-score").textContent="\u2713 Gespeichert",!le("result").hidden&&document.activeElement===le("pilot-name")&&le("result-leaderboard").focus(),le("pilot-name").disabled=!0,le("score-status").textContent=`${u.points.toLocaleString("de-DE")} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;try{localStorage.setItem("stubenflieger.pilot",c)}catch{}}catch(l){a===t&&(le("score-status").textContent=l.message,le("save-score").disabled=!1)}}),{beginRun:n,setResult:i,refresh:r}}var c1=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),Pm='input,textarea,select,[contenteditable]:not([contenteditable="false"])';function Lm({window:s,document:t,keys:e,getState:n,getDialog:i,launcher:r,actions:o}){let a=!1;function c(){e.clear(),a=!1,o.cancelCharge()}function l(d){if(d.defaultPrevented||d.isComposing||d.ctrlKey||d.altKey||d.metaKey)return;let p=i();if(d.code==="Tab"){c(),!p&&n()==="flying"&&(d.preventDefault(),o.pause());return}if(d.code==="Escape"){if(d.preventDefault(),d.repeat)return;c(),p==="leaderboard"?o.closeBoard():p==="shop"?o.closeShop?.():p==="menu"?o.closeMenu():p==="result"?o.reset():p!=="error"&&o.pause();return}if(d.target.closest?.(Pm)||p==="error")return;let m={KeyR:"reset",KeyM:p==="menu"?"closeMenu":p==="leaderboard"?"closeBoard":p==="shop"?"closeShop":"menu",KeyB:"board",KeyT:"sound",KeyG:p==="shop"?"closeShop":"shop"}[d.code];if(m&&o[m]){d.preventDefault(),d.repeat||(c(),o[m]());return}if(d.code==="KeyP"){(!p||p==="paused")&&(d.preventDefault(),d.repeat||(c(),o.pause()));return}if(p)return;if((d.code==="Digit1"||d.code==="Digit2")&&n()==="flying"){d.preventDefault(),d.repeat||o.boost?.(d.code==="Digit1"?0:1);return}let g=d.target.closest?.('button,a[href],[role="button"]');if(d.code==="Space"){if(g&&g!==r)return;d.preventDefault(),!d.repeat&&n()==="ready"&&(a=o.beginCharge()===!0);return}if(d.code==="Enter"){!g&&n()==="ready"&&(d.preventDefault(),d.repeat||o.quickLaunch());return}c1.has(d.code)&&(n()==="ready"||n()==="flying")&&(d.preventDefault(),e.add(d.code))}function u(d){e.delete(d.code),d.code==="Space"&&a&&(d.preventDefault(),a=!1,!i()&&n()==="ready"&&!d.target.closest?.(Pm)?o.release():o.cancelCharge())}function f(){c(),o.suspend()}function h(){t.hidden&&f()}return t.addEventListener("keydown",l),t.addEventListener("keyup",u),s.addEventListener("blur",f),t.addEventListener("visibilitychange",h),{clear:c,destroy(){c(),t.removeEventListener("keydown",l),t.removeEventListener("keyup",u),s.removeEventListener("blur",f),t.removeEventListener("visibilitychange",h)}}}function Nm(s,t){let e=[...t.querySelectorAll(".modal")],n='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])',i=null;function r(){return i?[...i.querySelectorAll(n)].filter(c=>!c.closest("[hidden],[inert]")&&c.getClientRects().length):[]}function o(c){(c||r()[0]||i)?.focus({preventScroll:!1})}function a(c,l){i=c?s.getElementById(c):null;for(let u of e)u.hidden=u!==i,u.tabIndex=-1;for(let u of t.children)u.inert=!!i&&u!==i;o(l)}return s.addEventListener("keydown",c=>{if(!i||c.key!=="Tab")return;let l=r(),u=l[0],f=l.at(-1),h=s.activeElement;l.length?l.includes(h)?c.shiftKey&&h===u?(c.preventDefault(),o(f)):!c.shiftKey&&h===f&&(c.preventDefault(),o(u)):(c.preventDefault(),o(c.shiftKey?f:u)):(c.preventDefault(),o(i))}),s.addEventListener("focusin",c=>{i&&!i.contains(c.target)&&o()}),{open:a,close(c){a(null,c)},current(){return i?.id??null}}}var at=s=>document.getElementById(s),hn=(s,t)=>{at(s).hidden=!t},Wr=(s,t,e)=>Math.max(t,Math.min(e,s)),ue=Nm(document,at("app")),yi=Tm(),gd=Im(),Zl="stubenflieger.pending-run.v1",l1=new Set(ye.rooms.map(s=>s.bonusId||s.id)).size,Kl=s=>la.find(t=>t.id===s)?.name||s,qr,Se,be,Ce,ua,gs,Om,he="ready",vn=!1,ks=!1,xi=0,zm=0,ma=0,Hr=0,ti=0,zs=0,Gr=0,Vi=0,en=0,km=0,Vm="",Jl=!1,Ui=null,xs=null,hd={x:0,y:0},eh={steer:0,pitch:0},_s={steer:0,pitch:0},Gs=!1,yn=null,_i=null,Gm=0,ud,dd=!1,jl=!1,ha=!1,Qn,zi=0,Vs=!1,Xr=!1,h1="",pa=0,Vr=0,fd=0,xd=0,_d=0,vd=0,Ql=!1,pd=0,En=new Set,Vn=new V,Fm=new V,Yl=new V,od=new V,Os=new V,$l=new V,ad=new V,da=new on,th=new Rn(0,0,0,"YXZ"),ki=s=>{at("hint").textContent=s};at("retry").onclick=()=>location.reload();try{let s=Number(localStorage.getItem("stubenflieger.rotation"));[0,90,180,270].includes(s)&&(zi=s)}catch{}var Hm=()=>zi%180?{width:innerHeight,height:innerWidth}:{width:innerWidth,height:innerHeight};function yd(){let{width:s,height:t}=Hm();Object.assign(at("app").style,{width:s+"px",height:t+"px",transform:`translate(-50%, -50%) rotate(${zi}deg)`}),at("rotation-value").textContent=zi+"\xB0",window.dispatchEvent(new Event("gameviewportchange"))}at("rotate-view").onclick=()=>{zi=(zi+90)%360;try{localStorage.setItem("stubenflieger.rotation",String(zi))}catch{}yd()};window.addEventListener("resize",yd);yd();function vs(s){h1=s,at("storage-status").textContent=s,at("result-storage").textContent=s}function u1(){try{let s=JSON.parse(sessionStorage.getItem(Zl)||"null");s?.id&&s.summary&&(yi.creditRun(s.id,s.summary),sessionStorage.removeItem(Zl))}catch(s){vs(s.message||"Der letzte Run konnte noch nicht gespeichert werden.")}}u1();yi.getStatus().available||vs(yi.getStatus().error);function vi(){if(!(!Xr||Vs||!Ce))try{sessionStorage.setItem(Zl,JSON.stringify({id:Ce.id,summary:Ce.summary(Vi),savedAt:Date.now()}))}catch{vs("Der laufende Run kann bei einem Neuladen verloren gehen. Website-Daten sind nicht verf\xFCgbar.")}}function bd(){if(!Xr||Vs||!Ce)return null;let s=Ce.summary(Vi);vi();try{let t=yi.creditRun(Ce.id,s);Vs=!0;try{sessionStorage.removeItem(Zl)}catch{}return vs(""),ga(),t}catch(t){return vs(t.message),null}}window.addEventListener("pagehide",vi);document.addEventListener("visibilitychange",()=>{document.hidden&&vi()});function Oi(s,t=.12,e="sine",n=.06){if(ha)try{Qn??=new(window.AudioContext||window.webkitAudioContext),Qn.state==="suspended"&&Qn.resume();let i=Qn.createOscillator(),r=Qn.createGain();i.type=e,i.frequency.setValueAtTime(s,Qn.currentTime),i.frequency.exponentialRampToValueAtTime(Math.max(35,s*.55),Qn.currentTime+t),r.gain.setValueAtTime(n,Qn.currentTime),r.gain.exponentialRampToValueAtTime(.001,Qn.currentTime+t),i.connect(r),r.connect(Qn.destination),i.start(),i.stop(Qn.currentTime+t)}catch{}}at("sound").onclick=()=>{ha=!ha,at("sound").textContent=ha?"\u266A AN":"\u266A AUS",at("sound").setAttribute("aria-label",ha?"Ton ausschalten":"Ton einschalten"),Oi(600)};function nh(){qr?.clear(),Md(),Hs(),En.clear(),eh={steer:0,pitch:0},_s={steer:0,pitch:0}}function ga(){let s=yi.getProfile();at("wallet").textContent=s.points.toLocaleString("de-DE")+" P";for(let t of document.querySelectorAll("[data-discoveries]"))t.textContent=`Entdeckt: ${s.discoveredStarIds.length} / ${ye.collectibles.length} Sterne`;at("aircraft-summary").textContent=`${Kl("plane:"+s.equipped.form)} \xB7 ${Math.round(s.equipped.size*100)} % Gr\xF6\xDFe \xB7 ${s.equipped.boosts.length}/2 Boosts`}function Wm(s,t){Se.setDoorOpen(s,t),be.setDoorOpen(s,t)}function qm(){try{yi.refresh()}catch(t){vs(t.message)}let s=yi.getProfile();Ce=Cm(ye,s),gs=s.equipped,ua=Zp(gs.form,gs.size),Se.configureAircraft(gs.form,gs.size),Se.reset(),be.setAircraft(gs.form,gs.size,gs.effect),be.resetCollectibles(s.discoveredStarIds),pa=Vr=fd=0,hn("star-reward",!1);for(let t of ye.doors)Wm(t.id,Ce.opened.has(t.id));Vs=Xr=!1,xd=_d=vd=pd=0,Ql=!1,ti=ye.start.heading||0,zs=Gr=Vi=xi=ma=Hr=0,be.plane.position.copy(Se.plane.position),be.plane.quaternion.copy(Se.plane.quaternion),be.resetTrail(be.plane.position),be.updateSling(0),ga(),ng(),md()}function xa(){if(Xr&&!Vs&&!bd()){ki("Bitte erlaube Website-Daten, damit deine Punkte vor dem Neustart gespeichert werden k\xF6nnen."),he==="flying"?fa("Run beendet."):he!=="result"&&Jm();return}he="ready",vn=!1,Jl=dd=jl=!1,nh(),qm();for(let s of["stats","flight-controls","pause","wind-toast","door-progress","ceiling-warning"])hn(s,!1);for(let s of["launch-panel","level-label","footer"])hn(s,!0);document.body.classList.remove("flying"),at("mission-copy").textContent=`Sammle ${ye.collectibles.length} Sterne im ganzen Haus. Sterne \xF6ffnen T\xFCren, neue R\xE4ume bringen je ${ca} Punkte. Aufwinde verbinden die Stockwerke.`,at("star-goal").textContent=" / "+ye.collectibles.length,ki("Sterne \xF6ffnen T\xFCren. Auch unter Tischen und St\xFChlen warten welche."),Gs&&yn&&(_i={...yn}),Rd(!0),ue.close(at("launch"))}at("reset").onclick=xa;at("again").onclick=xa;at("menu-restart").onclick=xa;function Sd(){return he!=="ready"||vn||ks||ue.current()?!1:(ks=!0,zm=performance.now(),ma=0,xi=.12,Oi(160,.07),!0)}function Md(){Ui!==null&&at("launch").hasPointerCapture(Ui)&&at("launch").releasePointerCapture(Ui),Ui=null,ks=!1,xi=ma=0,be?.updateSling(0),at("power-fill").style.transform="scaleX(0)",at("launch-label").textContent="Ziehen & loslassen",at("power-label").textContent="GUMMISCHLEUDER \u2197"}function Xm(){Sd()&&(xi=.75,wd())}function wd(){if(!(!ks||he!=="ready"||ue.current())){ks=!1,he="flying",Xr=!0,gd.beginRun(),Vi=0,ti=(ye.start.heading||0)+Hr,zs=ua.speed*(.75+xi*.35),Gr=.08+xi*.1,Se.plane.velocity.setZero(),Se.plane.collisionFilterMask=-1,th.set(0,-ti,0,"YXZ"),da.setFromEuler(th),Se.plane.quaternion.copy(da),be.resetTrail(new V().copy(Se.plane.position)),be.updateSling(0),Gs&&yn&&(_i={...yn});for(let s of["launch-panel","level-label","footer"])hn(s,!1);for(let s of["stats","flight-controls","pause","door-progress"])hn(s,!0);document.body.classList.add("flying"),ki("Sterne sammeln, T\xFCren \xF6ffnen. Im t\xFCrkisen Aufwind steigen."),vi(),Oi(480,.4,"triangle",.12),at("game").focus({preventScroll:!0})}}function Ym(s,t){let e=zi*Math.PI/180;return{x:s*Math.cos(e)+t*Math.sin(e),y:-s*Math.sin(e)+t*Math.cos(e)}}at("launch").addEventListener("pointerdown",s=>{Ui!==null||!Sd()||(s.preventDefault(),Ui=s.pointerId,hd={x:s.clientX,y:s.clientY},at("launch").setPointerCapture(s.pointerId))});at("launch").addEventListener("pointermove",s=>{if(s.pointerId!==Ui||!ks)return;let t=Ym(s.clientX-hd.x,s.clientY-hd.y);ma=Wr(t.y/130,0,1),Hr=Wr(t.x/250,-.45,.45)});at("launch").addEventListener("pointerup",s=>{s.pointerId===Ui&&(Ui=null,wd())});at("launch").addEventListener("pointercancel",Md);at("launch").addEventListener("click",s=>{s.detail===0&&Xm()});function d1(s,t,e){let n=s*Math.PI/180,i=t*Math.PI/180,r=e*Math.PI/180,o=-Math.cos(n)*Math.sin(i),a=Math.sin(n),c=Math.cos(n)*Math.cos(i),l=o*Math.cos(r)-a*Math.sin(r),u=o*Math.sin(r)+a*Math.cos(r);return{roll:Math.atan2(-l,Math.hypot(u,c))*180/Math.PI,pitch:Math.atan2(u,c)*180/Math.PI}}function $m(){yn&&(_i={...yn},ki("Diese Haltung ist jetzt die Mitte."),at("control-note").textContent="Kalibriert. Seitlich neigen zum Lenken, vor/zur\xFCck f\xFCr die H\xF6he.")}async function Zm(){if(!window.DeviceOrientationEvent){at("control-note").textContent="Keine Sensoren verf\xFCgbar. Nutze Touch oder WASD / Pfeiltasten.";return}try{if(typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){at("control-note").textContent="Sensorzugriff abgelehnt. Die Touch-Steuerung funktioniert weiter.";return}Gs=!0,_i=null,at("gyro").textContent="Warte auf Sensor \u2026",at("control-note").textContent="Halte dein iPhone in deiner normalen Spielhaltung.",clearTimeout(ud),ud=setTimeout(()=>{yn||(at("gyro").textContent="Sensoren erneut versuchen",at("control-note").textContent="Kein Sensorsignal. In Safari \xF6ffnen oder Touch nutzen.")},3e3)}catch{at("control-note").textContent="Sensoren nicht verf\xFCgbar. Nutze den Touch-Kreis."}}window.addEventListener("deviceorientation",s=>{!Gs||!Number.isFinite(s.beta)||!Number.isFinite(s.gamma)||(yn=d1(s.beta,s.gamma,(screen.orientation?.angle??window.orientation??0)+zi),Gm=performance.now(),_i||(_i={...yn},at("gyro").textContent="\u2713 Neigung aktiv",at("control-note").textContent="Aktiv. Beim Start wird deine Haltung kalibriert.",clearTimeout(ud)))});var Ad=()=>{yn=_i=null};window.addEventListener("orientationchange",Ad);screen.orientation?.addEventListener("change",Ad);window.addEventListener("gameviewportchange",Ad);at("gyro").onclick=()=>Gs&&yn?$m():void Zm();at("calibrate").onclick=()=>Gs&&yn?$m():void Zm();function Km(s){let t=at("joystick").getBoundingClientRect(),e=at("joystick").clientWidth*.32,n=Ym(s.clientX-t.left-t.width/2,s.clientY-t.top-t.height/2),i=Math.min(1,e/(Math.hypot(n.x,n.y)||1));eh={steer:n.x*i/e,pitch:-n.y*i/e},at("stick").style.transform=`translate(${n.x*i}px,${n.y*i}px)`}at("joystick").addEventListener("pointerdown",s=>{xs===null&&(s.preventDefault(),xs=s.pointerId,at("joystick").setPointerCapture(s.pointerId),Km(s))});at("joystick").addEventListener("pointermove",s=>{s.pointerId===xs&&Km(s)});function Hs(){xs!==null&&at("joystick").hasPointerCapture(xs)&&at("joystick").releasePointerCapture(xs),xs=null,eh={steer:0,pitch:0},at("stick").style.transform="translate(0,0)"}at("joystick").addEventListener("pointerup",Hs);at("joystick").addEventListener("pointercancel",Hs);function Ed(s=!vn){he==="flying"&&(vn=s,qr?.clear(),Hs(),vn?(vi(),ue.open("paused",at("resume"))):ue.close(at("game")))}at("pause").onclick=()=>Ed();at("resume").onclick=()=>Ed(!1);at("pause-finish").onclick=()=>{ue.close(),vn=!1,fa("Run abgeschlossen. Deine Punkte kommen ins Guthaben.")};function f1(){Hs(),vi(),he==="flying"&&(vn=!0,ue.current()||ue.open("paused",at("resume")))}function fa(s,t=!1){he==="flying"&&(qr?.clear(),Hs(),he="ending",vn=!1,Vm=s,Jl=t,km=en,hn("wind-toast",!1),hn("flight-controls",!1),hn("pause",!1),hn("ceiling-warning",!1),Se.plane.velocity.setZero(),bd(),Oi(t?740:120,.5,t?"sine":"triangle",.1))}function Jm(){he="result";let s=Ce.summary(Vi),t=ql(s);at("result-eyebrow").textContent=Jl?"DAS GANZE HAUS GESCHAFFT":"RUN ABGESCHLOSSEN",at("result-title").textContent=Jl?"Alle Sterne an Bord.":"Noch eine Runde?",at("result-copy").textContent=Vm,at("result-time").textContent=Vi.toFixed(1)+" s",at("result-rooms").textContent=s.roomIds.length,at("result-stars").textContent=`${Ce.stars.size} / ${ye.collectibles.length}`,at("result-reward").textContent=`+${(t+pa).toLocaleString("de-DE")} Punkte \xB7 davon ${pa.toLocaleString("de-DE")} Erstfundbonus und ${s.roomIds.length*ca} Raumbonus${Vs?" \xB7 gespeichert":" \xB7 noch nicht vollst\xE4ndig gespeichert"}`,gd.setResult(s),ga(),qr?.clear(),ue.open("result",at("again"))}var jm="menu",p1=null,Qm=null;function ih(){p1=ue.current(),nh(),he==="flying"&&(vn=!0),at("menu-shop").disabled=he==="flying"||he==="ending",at("menu-shop").textContent=he==="flying"?"Shop nach dem Run verf\xFCgbar":"Shop & Flugzeug",ue.open("menu",at("close-menu"))}function tg(){he==="flying"&&vn?ue.open("paused",at("resume")):he==="result"?ue.open("result",at("result-menu")):ue.close(at("menu-button"))}function Td(s){jm=s,nh(),he==="flying"&&(vn=!0),ue.open("leaderboard",at("close-leaderboard")),gd.refresh()}function eg(){jm==="menu"?ue.open("menu",at("menu-leaderboard")):he==="result"?ue.open("result",at("result-leaderboard")):he==="flying"&&vn?ue.open("paused",at("resume")):ue.close(at("launch"))}function sh(){if(!["ready","result"].includes(he)){ki("Den Shop kannst du vor oder nach deinem Run \xF6ffnen.");return}Xr&&!Vs&&!bd()||(Qm=ue.current(),nh(),Om.render(),ue.open("shop",at("close-shop")))}function Cd(){he==="ready"&&(qm(),Rd(!0)),Qm==="menu"?ue.open("menu",at("menu-shop")):he==="result"?ue.open("result",at("result-shop")):ue.close(at("start-shop"))}Om=Rm({container:at("shop-content"),progression:yi,onChange:ga,onClose:Cd});at("start-shop").onclick=sh;at("result-shop").onclick=sh;at("menu-shop").onclick=sh;at("close-shop").onclick=Cd;at("menu-button").onclick=ih;at("close-menu").onclick=tg;at("menu-leaderboard").onclick=()=>Td("menu");at("result-leaderboard").onclick=()=>Td("result");at("close-leaderboard").onclick=eg;at("pause-menu").onclick=ih;at("result-menu").onclick=ih;qr=Lm({window,document,keys:En,getState:()=>he,getDialog:()=>ue.current(),launcher:at("launch"),actions:{beginCharge:Sd,cancelCharge:Md,release:wd,quickLaunch:Xm,reset:xa,pause:()=>Ed(),suspend:f1,menu:ih,closeMenu:tg,closeBoard:eg,shop:sh,closeShop:Cd,boost:ig,board:()=>{ue.current()!=="leaderboard"&&Td(ue.current())},sound:()=>at("sound").click()}});function ng(){at("boost-controls").replaceChildren(),Ce.charges.forEach((s,t)=>{let e=document.createElement("button");e.type="button",e.textContent=`${t+1} \xB7 ${Kl("boost:"+s)}${Ce.used.has(s)?" \u2713":""}`,e.disabled=Ce.used.has(s),e.onclick=()=>ig(t),e.setAttribute("aria-label",`${Kl("boost:"+s)}${Ce.used.has(s)?", verbraucht":", einmal in diesem Run"}`),at("boost-controls").append(e)})}function ig(s){if(he!=="flying"||vn||ue.current())return;let t=Ce.useBoost(s);t&&(t==="lift"&&(xd=en+1.25),t==="turbo"&&(_d=en+3),t==="magnet"&&(vd=en+6),t==="cushion"&&(Ql=!0),ng(),Oi(740,.2),ki(Kl("boost:"+t)+" aktiviert."),at("game").focus({preventScroll:!0}))}function md(){if(!Ce||!Se)return;let s=jo(Se.plane.position),t=Ce.summary(Vi),e=Ce.nextDoor();at("time").textContent=Vi.toFixed(1)+" s",at("height").textContent=Se.plane.position.y.toFixed(1)+" m",at("rooms").textContent=Ce.visited.size+" / "+l1,at("stars").textContent=Ce.stars.size,at("run-points").textContent=(ql(t)+pa).toLocaleString("de-DE"),at("flight-level").textContent=(s?.name||"\xDCber dem Garten").toUpperCase();let n=e?Math.max(0,e.threshold-Ce.stars.size):0;at("door-progress").textContent=e?`${e.name}: noch ${n} ${n===1?"Stern":"Sterne"}`:"Alle T\xFCren offen \xB7 finde die \xFCbrigen Sterne",at("height").classList.toggle("danger",jl),hn("ceiling-warning",jl&&he==="flying")}function Rd(s=!1,t=.016){Vn.copy(Se.plane.position),od.set(Math.sin(ti),0,-Math.cos(ti)),Os.copy(Vn).addScaledVector(od,he==="ready"?-.42:-1.45),he==="ready"&&(Os.x-=1.25),Os.y+=he==="ready"?.95:.62,Os.copy(Se.traceCamera(Vn,Os,.12)),s?be.camera.position.copy(Os):(be.camera.position.lerp(Os,1-Math.exp(-t*9)),be.camera.position.copy(Se.traceCamera(Vn,be.camera.position,.1))),$l.copy(Vn).addScaledVector(od,he==="ready"?.25:1.3),$l.y+=.08,s?ad.copy($l):ad.lerp($l,1-Math.exp(-t*9)),be.camera.lookAt(ad)}function m1(s,t){let e=0,n=0;if(Gs&&yn&&_i&&s-Gm<1500){let i=(r,o)=>(r-o+540)%360-180;e=Wr(i(yn.roll,_i.roll)/28,-1,1),n=Wr(i(yn.pitch,_i.pitch)/28,-1,1),Math.abs(e)<.06&&(e=0),Math.abs(n)<.06&&(n=0)}xs!==null&&({steer:e,pitch:n}=eh),(En.has("ArrowLeft")||En.has("KeyA"))&&(e=-1),(En.has("ArrowRight")||En.has("KeyD"))&&(e=1),(En.has("ArrowUp")||En.has("KeyW"))&&(n=1),(En.has("ArrowDown")||En.has("KeyS"))&&(n=-1),_s.steer=Cr.damp(_s.steer,e,9,t),_s.pitch=Cr.damp(_s.pitch,n,7,t)}var Dm=performance.now(),cd=0,ld=0;function sg(s){requestAnimationFrame(sg);let t=Math.min(Math.max(0,(s-Dm)/1e3),.04);if(Dm=s,!!be){if(vn||ue.current()){be.render();return}if(en+=t,Vr&&en>Vr&&(Vr=0,hn("star-reward",!1)),he==="ready"){let e=Number(En.has("ArrowRight")||En.has("KeyD"))-Number(En.has("ArrowLeft")||En.has("KeyA"));Hr=Wr(Hr+e*.8*t,-.7,.7),ti=(ye.start.heading||0)+Hr,ks&&(xi=Math.max(.12,ma,Wr((s-zm)/1400,0,1)),at("power-fill").style.transform=`scaleX(${xi})`,at("launch-label").textContent=Math.round(xi*100)+" % gespannt",at("power-label").textContent="LOSLASSEN \u2197",be.updateSling(xi)),be.plane.rotation.set(0,-ti,0,"YXZ")}if(he==="flying"){Vi+=t,m1(s,t),ti+=_s.steer*ua.turnRate*t,Vn.copy(Se.plane.position),Fm.copy(Vn);let e=ye.thermals.find(p=>Math.hypot(Vn.x-p.x,Vn.z-p.z)<p.r&&Vn.y>=p.y&&Vn.y<p.y+p.height);hn("wind-toast",!!e),e&&!dd&&Oi(800,.3,"sine",.04),dd=!!e;let n=ua.speed*(en<_d?1.65:1);zs=Cr.damp(zs,n,.75,t);let{ride:i,x:r,z:o,targetVertical:a}=Kp({position:Vn,input:_s,heading:ti,speed:zs,tuning:ua,thermal:e,lift:en<xd});Gr=Cr.damp(Gr,a,4,t),Yl.set(r,Gr,o),th.set(Math.atan2(Gr,i?Math.max(2,zs):zs)*.7,-ti,-_s.steer*.42,"YXZ"),da.setFromEuler(th),en<pd&&(Yl.copy(Bm),da.copy(Um));let c=Se.advance(t,Yl,da);be.plane.position.copy(Se.plane.position),be.plane.quaternion.copy(Se.plane.quaternion);let l=new Map,u=be.collectStars(p=>{if(en<fd||!Se.canCollectStar(p,Fm,en<vd?.75:0))return!1;try{return l.set(p.id,yi.creditStar(Ce.id,p.id)),vs(""),!0}catch(x){return fd=en+1,vs(x.message),at("star-reward").textContent="Stern noch nicht gespeichert \u2013 bitte Website-Daten erlauben.",at("star-reward").dataset.first="false",Vr=en+4,hn("star-reward",!0),!1}});for(let p of u){let x=Ce.collect(p);if(!x)continue;let m=l.get(p);pa+=m.bonus,at("star-reward").textContent=m.firstDiscovery?`Erstfund! +${m.totalPoints} Punkte`:`+${m.totalPoints} Punkte`,at("star-reward").dataset.first=String(m.firstDiscovery),Vr=en+2.5,hn("star-reward",!0);for(let g of x)Wm(g.id,!0);Oi(1100,.1),ki(x.length?x.map(g=>g.name).join(" \xB7 ")+" ist jetzt offen!":`Stern gesammelt! ${Ce.stars.size}/${ye.collectibles.length}`)}let f=jo(Se.plane.position);f&&Ce.enterRoom(f.id)&&(ki(`${f.name} entdeckt \xB7 +${ca} Punkte`),Oi(880,.2),vi()),u.length&&(ga(),md(),vi()),c.collided&&(Ql?(Ql=!1,Bm.copy(Yl).multiplyScalar(-.55),Um.copy(Se.plane.quaternion),pd=en+.6,ti+=Math.PI,ki("Luftpolster! Eine Ber\xFChrung abgefangen."),Oi(260,.18)):fa(c.body?.kind==="floor"?"Der Boden kam n\xE4her als geplant.":"Ein Fl\xFCgel oder der Rumpf hat ein Hindernis ber\xFChrt.")),Ce.summary().complete&&fa("Alle Sterne gefunden \u2013 vom Keller bis in den Garten!",!0);let h=ye.bounds,d=Se.plane.position;(d.x<h.minX||d.x>h.maxX||d.z<h.minZ||d.z>h.maxZ||d.y<h.minY||d.y>h.maxY)&&fa("Du hast das Grundst\xFCck verlassen."),be.updateTrail(Se.plane.position),ld+=t,ld>1&&(ld=0,vi())}he==="ending"&&en-km>.55&&Jm(),be.update(t,en),jl=be.updateCeiling(Se.plane.position),Rd(!1,t),cd+=t,cd>.1&&(cd=0,md()),be.render()}}var Bm=new V,Um=new on;try{Se=bm(ye,yi.getProfile().equipped),be=Mm(at("game"),Se,Hm),xa(),hn("loading",!1),requestAnimationFrame(sg)}catch(s){console.error(s),hn("loading",!1),ue.open("error")}at("game").addEventListener("webglcontextlost",s=>{s.preventDefault(),qr.clear(),Hs(),vi(),vn=!0,at("error-copy").textContent="Die 3D-Darstellung wurde unterbrochen. Dein letzter Punktestand wird beim Neuladen wiederhergestellt.",ue.open("error")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
