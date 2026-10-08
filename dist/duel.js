var Fd=0,bh=1,Ud=2;var bs=1,Bd=2,hr=3,Xi=0,fn=1,Ln=2,si=0,ur=1,Sh=2,Mh=3,wh=4,Od=5;var Ss=100,zd=101,kd=102,Vd=103,Gd=104,Hd=200,Wd=201,qd=202,Xd=203,Ah=204,Eh=205,Yd=206,$d=207,Zd=208,Kd=209,Jd=210,jd=211,Qd=212,tf=213,ef=214,Ca=0,Ra=1,Ia=2,Zs=3,Pa=4,La=5,Na=6,Da=7,Th=0,nf=1,sf=2,Xn=0,Ch=1,Rh=2,Ih=3,So=4,Ph=5,Lh=6,Nh=7;var Dh=300,Yi=301,Ms=302,ul=303,dl=304,Mo=306,Ks=1e3,ti=1001,Fa=1002,We=1003,rf=1004;var wo=1005;var Ze=1006,fl=1007;var $i=1008;var vn=1009,Fh=1010,Uh=1011,dr=1012,pl=1013,Yn=1014,Nn=1015,$n=1016,ml=1017,gl=1018,fr=1020,Bh=35902,Oh=35899,zh=1021,kh=1022,Dn=1023,ei=1026,Zi=1027,xl=1028,_l=1029,Ki=1030,vl=1031;var yl=1033,Ao=33776,Eo=33777,To=33778,Co=33779,bl=35840,Sl=35841,Ml=35842,wl=35843,Al=36196,El=37492,Tl=37496,Cl=37488,Rl=37489,Ro=37490,Il=37491,Pl=37808,Ll=37809,Nl=37810,Dl=37811,Fl=37812,Ul=37813,Bl=37814,Ol=37815,zl=37816,kl=37817,Vl=37818,Gl=37819,Hl=37820,Wl=37821,ql=36492,Xl=36494,Yl=36495,$l=36283,Zl=36284,Io=36285,Kl=36286;var Gr=2300,Ua=2301,Ea=2302,ch=2303,hh=2400,uh=2401,dh=2402;var of=3200;var Jl=0,af=1,Ai="",Ye="srgb",Hr="srgb-linear",Wr="linear",de="srgb";var Ta=7680;var lf=519,cf=512,hf=513,uf=514,jl=515,df=516,ff=517,Ql=518,pf=519,mf=35044;var Vh="300 es",Hn=2e3,Js=2001;function vm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ym(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gf(){let s=qr("canvas");return s.style.display="block",s}var sd={},js=null;function Gh(...s){let t="THREE."+s.shift();js?js("log",t,...s):console.log(t,...s)}function xf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=xf(s);let t="THREE."+s.shift();if(js)js("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=xf(s);let t="THREE."+s.shift();if(js)js("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function _s(...s){let t=s.join(" ");t in sd||(sd[t]=!0,qt(...s))}function _f(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vf={[Ca]:Ra,[Ia]:Na,[Pa]:Da,[Zs]:La,[Ra]:Ca,[Na]:Ia,[Da]:Pa,[La]:Zs},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uc=Math.PI/180,Ba=180/Math.PI;function pr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function bm(s,t){return(s%t+t)%t}function Bc(s,t,e){return(1-e)*s+e*t}function Pr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var St=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new V,rd=new on,Zt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],E=i[4],y=i[7],S=i[2],M=i[5],C=i[8];return r[0]=o*x+a*v+l*S,r[3]=o*m+a*E+l*M,r[6]=o*g+a*y+l*C,r[1]=c*x+u*v+d*S,r[4]=c*m+u*E+d*M,r[7]=c*g+u*y+d*C,r[2]=h*x+f*v+p*S,r[5]=h*m+f*E+p*M,r[8]=h*g+f*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=e*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(i*c-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=h*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zc=new Zt,od=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){let s={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?Wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Hr]:{primaries:t,whitePoint:n,transfer:Wr,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:de,toXYZ:od,fromXYZ:ad,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),s}var se=Sm();function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ds,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=qr("canvas")),Ds.width=t.width,Ds.height=t.height;let i=Ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mm=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(kc(i[o].image)):r.push(kc(i[o]))}else r=kc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var wm=0,Vc=new V,dn=class s extends ni{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ti,i=ti,r=Ze,o=$i,a=Dn,l=vn,c=s.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=pr(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Dh;dn.DEFAULT_ANISOTROPY=1;var Ce=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(g+1)/2,M=(u+h)/4,C=(d+x)/4,_=(p+m)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=M/n,r=C/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=_/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new dn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fe=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,d,h,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;e[0]=h+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;e[0]=h-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+x,e[1]=l*d,e[5]=x*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-x*d}else if(t.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Em)}lookAt(t,e,n){let i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(n,Mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(n,Mn)),Ui.normalize(),na.crossVectors(Mn,Ui),i[0]=Ui.x,i[4]=na.x,i[8]=Mn.x,i[1]=Ui.y,i[5]=na.y,i[9]=Mn.y,i[2]=Ui.z,i[6]=na.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],E=n[7],y=n[11],S=n[15],M=i[0],C=i[4],_=i[8],A=i[12],R=i[1],L=i[5],B=i[9],N=i[13],I=i[2],D=i[6],U=i[10],H=i[14],Z=i[3],q=i[7],X=i[11],Y=i[15];return r[0]=o*M+a*R+l*I+c*Z,r[4]=o*C+a*L+l*D+c*q,r[8]=o*_+a*B+l*U+c*X,r[12]=o*A+a*N+l*H+c*Y,r[1]=u*M+d*R+h*I+f*Z,r[5]=u*C+d*L+h*D+f*q,r[9]=u*_+d*B+h*U+f*X,r[13]=u*A+d*N+h*H+f*Y,r[2]=p*M+x*R+m*I+g*Z,r[6]=p*C+x*L+m*D+g*q,r[10]=p*_+x*B+m*U+g*X,r[14]=p*A+x*N+m*H+g*Y,r[3]=v*M+E*R+y*I+S*Z,r[7]=v*C+E*L+y*D+S*q,r[11]=v*_+E*B+y*U+S*X,r[15]=v*A+E*N+y*H+S*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*h,E=a*f-c*d,y=a*h-l*d,S=o*f-c*u,M=o*h-l*u,C=o*d-a*u;return e*(x*v-m*E+g*y)-n*(p*v-m*S+g*M)+i*(p*E-x*S+g*C)-r*(p*y-x*M+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-n*o,E=e*l-i*o,y=e*c-r*o,S=n*l-i*a,M=n*c-r*a,C=i*c-r*l,_=u*x-d*p,A=u*m-h*p,R=u*g-f*p,L=d*m-h*x,B=d*g-f*x,N=h*g-f*m,I=v*N-E*B+y*L+S*R-M*A+C*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return t[0]=(a*N-l*B+c*L)*D,t[1]=(i*B-n*N-r*L)*D,t[2]=(x*C-m*M+g*S)*D,t[3]=(h*M-d*C-f*S)*D,t[4]=(l*R-o*N-c*A)*D,t[5]=(e*N-i*R+r*A)*D,t[6]=(m*y-p*C-g*E)*D,t[7]=(u*C-h*y+f*E)*D,t[8]=(o*B-a*R+c*_)*D,t[9]=(n*R-e*B-r*_)*D,t[10]=(p*M-x*y+g*v)*D,t[11]=(d*y-u*M-f*v)*D,t[12]=(a*A-o*L-l*_)*D,t[13]=(e*L-n*A+i*_)*D,t[14]=(x*E-p*S-m*v)*D,t[15]=(u*S-d*E+h*v)*D,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,v=l*c,E=l*u,y=l*d,S=n.x,M=n.y,C=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+y)*S,i[2]=(p-E)*S,i[3]=0,i[4]=(f-y)*M,i[5]=(1-(h+g))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(p+E)*C,i[9]=(m-v)*C,i[10]=(1-(h+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Fs.set(i[0],i[1],i[2]).length(),a=Fs.set(i[4],i[5],i[6]).length(),l=Fs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,u=1/a,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Hn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Js)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Hn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Js)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fs=new V,zn=new fe,Am=new V(0,0,0),Em=new V(1,1,1),Ui=new V,na=new V,Mn=new V,ld=new fe,cd=new on,Wn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ld,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cd.setFromEuler(this),this.setFromQuaternion(cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tm=0,hd=new V,Us=new on,gi=new fe,ia=new V,Lr=new V,Cm=new V,Rm=new on,ud=new V(1,0,0),dd=new V(0,1,0),fd=new V(0,0,1),pd={type:"added"},Im={type:"removed"},Bs={type:"childadded",child:null},Gc={type:"childremoved",child:null},Ke=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new V,e=new Wn,n=new on,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(dd,t)}rotateZ(t){return this.rotateOnAxis(fd,t)}translateOnAxis(t,e){return hd.copy(t).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(dd,t)}translateZ(t){return this.translateOnAxis(fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Lr,ia,this.up):gi.lookAt(ia,Lr,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(gi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pd),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Im),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pd),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new V(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Hc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=bm(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hc(o,r,t+1/3),this.g=Hc(o,r,t),this.b=Hc(o,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return se.workingToColorSpace(sn.copy(this),t),Math.round(ie(sn.r*255,0,255))*65536+Math.round(ie(sn.g*255,0,255))*256+Math.round(ie(sn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(sn.copy(this),e);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Ye){se.workingToColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,i=sn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(sa);let n=Bc(Bi.h,sa.h,e),i=Bc(Bi.s,sa.s,e),r=Bc(Bi.l,sa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Kt;Kt.NAMES=yf;var $r=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new V,xi=new V,Wc=new V,_i=new V,Os=new V,zs=new V,md=new V,qc=new V,Xc=new V,Yc=new V,$c=new Ce,Zc=new Ce,Kc=new Ce,Vi=class s{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){kn.subVectors(i,e),xi.subVectors(n,e),Wc.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(xi),l=kn.dot(Wc),c=xi.dot(xi),u=xi.dot(Wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return $c.setScalar(0),Zc.setScalar(0),Kc.setScalar(0),$c.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector($c,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Kc,r.z),o}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),xi.subVectors(t,e),kn.cross(xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),kn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Os.subVectors(i,n),zs.subVectors(r,n),qc.subVectors(t,n);let l=Os.dot(qc),c=zs.dot(qc);if(l<=0&&c<=0)return e.copy(n);Xc.subVectors(t,i);let u=Os.dot(Xc),d=zs.dot(Xc);if(u>=0&&d<=u)return e.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Os,o);Yc.subVectors(t,r);let f=Os.dot(Yc),p=zs.dot(Yc);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(zs,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return md.subVectors(r,i),a=(d-u)/(d-u+(f-p)),e.copy(i).addScaledVector(md,a);let g=1/(m+x+h);return o=x*g,a=h*g,e.copy(n).addScaledVector(Os,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),oa.subVectors(this.max,Nr),ks.subVectors(t.a,Nr),Vs.subVectors(t.b,Nr),Gs.subVectors(t.c,Nr),Oi.subVectors(Vs,ks),zi.subVectors(Gs,Vs),fs.subVectors(ks,Gs);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-fs.z,fs.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,fs.z,0,-fs.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-fs.y,fs.x,0];return!Jc(e,ks,Vs,Gs,oa)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,ks,Vs,Gs,oa))?!1:(aa.crossVectors(Oi,zi),e=[aa.x,aa.y,aa.z],Jc(e,ks,Vs,Gs,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,ra=new ii,ks=new V,Vs=new V,Gs=new V,Oi=new V,zi=new V,fs=new V,Nr=new V,oa=new V,aa=new V,ps=new V;function Jc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ps.fromArray(s,r);let a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ue=new V,la=new St,Lm=0,un=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mf,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xn(e,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jr=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Pe=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nm=new ii,Dr=new V,jc=new V,Si=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Nm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(jc)),this.expandByPoint(Dr.copy(t.center).sub(jc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dm=0,In=new fe,Qc=new Ke,Hs=new V,wn=new ii,Fr=new ii,He=new V,Je=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vm(t)?Jr:Kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(wn.min,Fr.min),wn.expandByPoint(He),He.addVectors(wn.max,Fr.max),wn.expandByPoint(He)):(wn.expandByPoint(Fr.min),wn.expandByPoint(Fr.max))}wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(t,c),He.add(Hs)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new V,l[_]=new V;let c=new V,u=new V,d=new V,h=new St,f=new St,p=new St,x=new V,m=new V;function g(_,A,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),p.sub(h);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(L),a[_].add(x),a[A].add(x),a[R].add(x),l[_].add(m),l[A].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,A=v.length;_<A;++_){let R=v[_],L=R.start,B=R.count;for(let N=L,I=L+B;N<I;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let E=new V,y=new V,S=new V,M=new V;function C(_){S.fromBufferAttribute(i,_),M.copy(S);let A=a[_];E.copy(A),E.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(M,A);let L=y.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,A=v.length;_<A;++_){let R=v[_],L=R.start,B=R.count;for(let N=L,I=L+B;N<I;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let h=0,f=t.count;h<f;h+=3){let p=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new un(h,u,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var th=new V,Fm=new V,Um=new Zt,Gn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=th.subVectors(n,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(th),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Um.getNormalMatrix(t),i=this.coplanarPoint(th).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bm=0,Mi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=ur,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Eh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yi=new V,eh=new V,ca=new V,ha=new V,jr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){eh.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(eh).addScaledVector(ca,h),f}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(u),C,_,A,R,L,B,N,I,D,U,H,Z;if(y>=S&&y>=M?(A=l,B=d,D=p,Z=g,l>=0?(C=c,_=u,R=h,L=f,N=x,I=m,U=v,H=E):(C=u,_=c,R=f,L=h,N=m,I=x,U=E,H=v)):S>=M?(A=c,B=h,D=x,Z=v,c>=0?(C=u,_=l,R=f,L=d,N=m,I=p,U=E,H=g):(C=l,_=u,R=d,L=f,N=p,I=m,U=g,H=E)):(A=u,B=f,D=m,Z=E,u>=0?(C=l,_=c,R=d,L=h,N=p,I=x,U=g,H=v):(C=c,_=l,R=h,L=d,N=x,I=p,U=v,H=g)),A===0)return null;let q=C/A,X=_/A,Y=1/A,st=R-q*B,xt=L-X*B,kt=N-q*D,$t=I-X*D,Jt=U-q*Z,nt=H-X*Z,rt=Jt*$t-nt*kt,yt=st*nt-xt*Jt,zt=kt*xt-$t*st;if(i){if(rt<0||yt<0||zt<0)return null}else if((rt<0||yt<0||zt<0)&&(rt>0||yt>0||zt>0))return null;let Ct=rt+yt+zt;if(Ct===0)return null;let Vt=Y*(rt*B+yt*D+zt*Z);return(Ct>0?Vt<0:Vt>0)?null:this.at(Vt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gd=new fe,ms=new jr,ua=new Si,xd=new V,da=new V,fa=new V,pa=new V,nh=new V,ma=new V,_d=new V,ga=new V,ve=class extends Ke{constructor(t=new Je,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(nh.fromBufferAttribute(d,t),o?ma.addScaledVector(nh,u):ma.addScaledVector(nh.sub(e),u))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(ua.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ua,xd)===null||ms.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(gd.copy(r).invert(),ms.copy(t.ray).applyMatrix4(gd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=E;y<S;y+=3){let M=a.getX(y),C=a.getX(y+1),_=a.getX(y+2);i=xa(this,g,t,n,c,u,d,M,C,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=xa(this,o,t,n,c,u,d,v,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,S=E;y<S;y+=3){let M=y,C=y+1,_=y+2;i=xa(this,g,t,n,c,u,d,M,C,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,E=m+1,y=m+2;i=xa(this,o,t,n,c,u,d,v,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Om(s,t,e,n,i,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Xi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:s}}function xa(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,da),s.getVertexPosition(l,fa),s.getVertexPosition(c,pa);let u=Om(s,t,e,n,da,fa,pa,_d);if(u){let d=new V;Vi.getBarycoord(_d,da,fa,pa,d),i&&(u.uv=Vi.getInterpolatedAttribute(i,a,l,c,d,new St)),r&&(u.uv1=Vi.getInterpolatedAttribute(r,a,l,c,d,new St)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new V,materialIndex:0};Vi.getNormal(da,fa,pa,h.normal),u.face=h,u.barycoord=d}return u}var Qr=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=We,u=We,d,h){super(null,o,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var to=class extends un{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new fe,vd=new fe,_a=[],yd=new ii,zm=new fe,Ur=new ve,Br=new Si,er=class extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),yd.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(yd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Br.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),vd.multiplyMatrices(n,Ws),Ur.matrixWorld=vd,Ur.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(i*this.count),i,this.count,xl,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Si,km=new St(.5,.5),va=new V,nr=class{constructor(t=new Gn,e=new Gn,n=new Gn,i=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],E=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-o,f-u,g-p,S-v).normalize(),i[1].setComponents(c+o,f+u,g+p,S+v).normalize(),i[2].setComponents(c+a,f+d,g+x,S+E).normalize(),i[3].setComponents(c-a,f-d,g-x,S-E).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,g-m,S-y).normalize();else if(i[4].setComponents(c-l,f-h,g-m,S-y).normalize(),e===Hn)i[5].setComponents(c+l,f+h,g+m,S+y).normalize();else if(e===Js)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=km.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ir=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Va=new V,Ga=new V,bd=new fe,Or=new jr,ya=new Si,ih=new V,Sd=new V,eo=class extends Ke{constructor(t=new Je,e=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Va.fromBufferAttribute(e,i-1),Ga.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Ga);t.setAttribute("lineDistance",new Pe(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;bd.copy(i).invert(),Or.copy(t.ray).applyMatrix4(bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),v=u.getX(x+1),E=ba(this,t,Or,l,g,v,x);E&&e.push(E)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=ba(this,t,Or,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=ba(this,t,Or,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=ba(this,t,Or,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ba(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(Va.fromBufferAttribute(a,i),Ga.fromBufferAttribute(a,r),e.distanceSqToSegment(Va,Ga,ih,Sd)>n)return;ih.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ih);if(!(c<t.near||c>t.far))return{distance:c,point:Sd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var no=class extends dn{constructor(t=[],e=Yi,n,i,r,o,a,l,c,u){super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sr=class extends dn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends dn{constructor(t,e,n=Yn,i,r,o,a=We,l=We,c,u=ei,d=1){if(u!==ei&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ha=class extends Gi{constructor(t,e=Yn,n=Yi,i,r,o=We,a=We,l,c=ei){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wi=class s extends Je{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function p(x,m,g,v,E,y,S,M,C,_,A){let R=y/C,L=S/_,B=y/2,N=S/2,I=M/2,D=C+1,U=_+1,H=0,Z=0,q=new V;for(let X=0;X<U;X++){let Y=X*L-N;for(let st=0;st<D;st++){let xt=st*R-B;q[x]=xt*v,q[m]=Y*E,q[g]=I,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[g]=M>0?1:-1,u.push(q.x,q.y,q.z),d.push(st/C),d.push(1-X/_),H+=1}}for(let X=0;X<_;X++)for(let Y=0;Y<C;Y++){let st=h+Y+D*X,xt=h+Y+D*(X+1),kt=h+(Y+1)+D*(X+1),$t=h+(Y+1)+D*X;l.push(st,xt,$t),l.push(xt,kt,$t),Z+=6}a.addGroup(f,Z,A),f+=Z,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new St:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,i=[],r=[],o=[],a=new V,l=new fe;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends An{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends rr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Md=new V,wd=new V,sh=new Hh,rh=new Hh,oh=new Hh,qa=class extends An{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new V){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(wd.subVectors(i[0],i[1]).add(i[0]),c=wd);let d=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Md.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),sh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),rh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),oh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),rh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),oh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(sh.calc(l),rh.calc(l),oh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new V().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ad(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Vm(s,t){let e=1-s;return e*e*t}function Gm(s,t){return 2*(1-s)*s*t}function Hm(s,t){return s*s*t}function kr(s,t,e,n){return Vm(s,t)+Gm(s,e)+Hm(s,n)}function Wm(s,t){let e=1-s;return e*e*e*t}function qm(s,t){let e=1-s;return 3*e*e*s*t}function Xm(s,t){return 3*(1-s)*s*s*t}function Ym(s,t){return s*s*s*t}function Vr(s,t,e,n,i){return Wm(s,t)+qm(s,e)+Xm(s,n)+Ym(s,i)}var so=class extends An{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,i.x,r.x,o.x,a.x),Vr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends An{constructor(t=new V,e=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new V){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,i.x,r.x,o.x,a.x),Vr(t,i.y,r.y,o.y,a.y),Vr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends An{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends An{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends An{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,i.x,r.x,o.x),kr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends An{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,i.x,r.x,o.x),kr(t,i.y,r.y,o.y),kr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ad(a,l.x,c.x,u.x,d.x),Ad(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new St().fromArray(i))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:qa,CubicBezierCurve:so,CubicBezierCurve3:Xa,EllipseCurve:rr,LineCurve:ro,LineCurve3:Ya,QuadraticBezierCurve:oo,QuadraticBezierCurve3:$a,SplineCurve:ao}),Za=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new fh[i.type]().fromJSON(i))}return this}},lo=class extends Za{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new oo(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new so(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new rr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},or=class extends lo{constructor(t){super(t),this.uuid=pr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new lo().fromJSON(i))}return this}};function $m(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=bf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Qm(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let u=a,d=l;for(let h=e;h<i;h+=e){let f=s[h],p=s[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return co(r,o,e,a,l,c,0),o}function bf(s,t,e,n,i){let r;if(i===hg(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ed(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ed(o/n|0,s[o],s[o+1],r);return r&&ar(r,r.next)&&(uo(r),r=r.next),r}function vs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||Ie(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function co(s,t,e,n,i,r,o){if(!s)return;!o&&r&&sg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Km(s,n,i,r):Zm(s)){t.push(l.i,s.i,c.i),uo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Jm(vs(s),t),co(s,t,e,n,i,r,2)):o===2&&jm(s,t,e,n,i,r):co(vs(s),t,e,n,i,r,1);break}}}function Zm(s){let t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(i,r,o),d=Math.min(a,l,c),h=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&zr(i,a,r,l,o,c,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Km(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ie(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=ph(f,p,t,e,n),v=ph(x,m,t,e,n),E=s.prevZ,y=s.nextZ;for(;E&&E.z>=g&&y&&y.z<=v;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&zr(a,u,l,d,c,h,E.x,E.y)&&Ie(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&zr(a,u,l,d,c,h,y.x,y.y)&&Ie(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==i&&E!==o&&zr(a,u,l,d,c,h,E.x,E.y)&&Ie(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&zr(a,u,l,d,c,h,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jm(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ar(n,i)&&Mf(n,e,e.next,i)&&ho(n,i)&&ho(i,n)&&(t.push(n.i,e.i,i.i),uo(e),uo(e.next),e=s=i),e=e.next}while(e!==s);return vs(e)}function jm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ag(o,a)){let l=wf(o,a);o=vs(o,o.next),l=vs(l,l.next),co(o,t,e,n,i,r,0),co(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qm(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=bf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(og(c))}i.sort(tg);for(let r=0;r<i.length;r++)e=eg(i[r],e);return e}function tg(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function eg(s,t){let e=ng(s,t);if(!e)return t;let n=wf(e,s);return vs(n,n.next),vs(e,e.next)}function ng(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(ar(s,e))return e;do{if(ar(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);ho(e,s)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&ig(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function ig(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function sg(s,t,e,n){let i=s;do i.z===0&&(i.z=ph(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rg(i)}function rg(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function ph(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function og(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Sf(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function zr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Sf(s,t,e,n,i,r,o,a)}function ag(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!lg(s,t)&&(ho(s,t)&&ho(t,s)&&cg(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||ar(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ar(s,t){return s.x===t.x&&s.y===t.y}function Mf(s,t,e,n){let i=Ma(Ie(s,t,e)),r=Ma(Ie(s,t,n)),o=Ma(Ie(e,n,s)),a=Ma(Ie(e,n,t));return!!(i!==r&&o!==a||i===0&&Sa(s,e,t)||r===0&&Sa(s,n,t)||o===0&&Sa(e,s,n)||a===0&&Sa(e,t,n))}function Sa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ma(s){return s>0?1:s<0?-1:0}function lg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ho(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function cg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function wf(s,t){let e=mh(s.i,s.x,s.y),n=mh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ed(s,t,e,n){let i=mh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function uo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var gh=class{static triangulate(t,e,n=2){return $m(t,e,n)}},xs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Td(t),Cd(n,t);let o=t.length;e.forEach(Td);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Cd(n,e[l]);let a=gh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Td(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Cd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var fo=class s extends Je{constructor(t=new or([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Pe(i,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:ug,E,y=!1,S,M,C,_;if(g){E=g.getSpacedPoints(u),y=!0,h=!1;let at=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,at),M=new V,C=new V,_=new V}h||(m=0,f=0,p=0,x=0);let A=a.extractPoints(c),R=A.shape,L=A.holes;if(!xs.isClockWise(R)){R=R.reverse();for(let at=0,ut=L.length;at<ut;at++){let pt=L[at];xs.isClockWise(pt)&&(L[at]=pt.reverse())}}function N(at){let pt=10000000000000001e-36,mt=at[0];for(let _t=1;_t<=at.length;_t++){let Gt=_t%at.length,Ft=at[Gt],Ht=Ft.x-mt.x,Wt=Ft.y-mt.y,O=Ht*Ht+Wt*Wt,oe=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(mt.x),Math.abs(mt.y)),te=pt*oe*oe;if(O<=te){at.splice(Gt,1),_t--;continue}mt=Ft}}N(R),L.forEach(N);let I=L.length,D=R;for(let at=0;at<I;at++){let ut=L[at];R=R.concat(ut)}function U(at,ut,pt){return ut||Yt("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ut,pt)}let H=R.length;function Z(at,ut,pt){let mt,_t,Gt,Ft=at.x-ut.x,Ht=at.y-ut.y,Wt=pt.x-at.x,O=pt.y-at.y,oe=Ft*Ft+Ht*Ht,te=Ft*O-Ht*Wt;if(Math.abs(te)>Number.EPSILON){let P=Math.sqrt(oe),b=Math.sqrt(Wt*Wt+O*O),$=ut.x-Ht/P,K=ut.y+Ft/P,it=pt.x-O/b,gt=pt.y+Wt/b,W=((it-$)*O-(gt-K)*Wt)/(Ft*O-Ht*Wt);mt=$+Ft*W-at.x,_t=K+Ht*W-at.y;let z=mt*mt+_t*_t;if(z<=2)return new St(mt,_t);Gt=Math.sqrt(z/2)}else{let P=!1;Ft>Number.EPSILON?Wt>Number.EPSILON&&(P=!0):Ft<-Number.EPSILON?Wt<-Number.EPSILON&&(P=!0):Math.sign(Ht)===Math.sign(O)&&(P=!0),P?(mt=-Ht,_t=Ft,Gt=Math.sqrt(oe)):(mt=Ft,_t=Ht,Gt=Math.sqrt(oe/2))}return new St(mt/Gt,_t/Gt)}let q=[];for(let at=0,ut=D.length,pt=ut-1,mt=at+1;at<ut;at++,pt++,mt++)pt===ut&&(pt=0),mt===ut&&(mt=0),q[at]=Z(D[at],D[pt],D[mt]);let X=[],Y,st=q.concat();for(let at=0,ut=I;at<ut;at++){let pt=L[at];Y=[];for(let mt=0,_t=pt.length,Gt=_t-1,Ft=mt+1;mt<_t;mt++,Gt++,Ft++)Gt===_t&&(Gt=0),Ft===_t&&(Ft=0),Y[mt]=Z(pt[mt],pt[Gt],pt[Ft]);X.push(Y),st=st.concat(Y)}let xt;if(m===0)xt=xs.triangulateShape(D,L);else{let at=[],ut=[];for(let pt=0;pt<m;pt++){let mt=pt/m,_t=f*Math.cos(mt*Math.PI/2),Gt=p*Math.sin(mt*Math.PI/2)+x;for(let Ft=0,Ht=D.length;Ft<Ht;Ft++){let Wt=U(D[Ft],q[Ft],Gt);yt(Wt.x,Wt.y,-_t),mt===0&&at.push(Wt)}for(let Ft=0,Ht=I;Ft<Ht;Ft++){let Wt=L[Ft];Y=X[Ft];let O=[];for(let oe=0,te=Wt.length;oe<te;oe++){let P=U(Wt[oe],Y[oe],Gt);yt(P.x,P.y,-_t),mt===0&&O.push(P)}mt===0&&ut.push(O)}}xt=xs.triangulateShape(at,ut)}let kt=xt.length,$t=p+x;for(let at=0;at<H;at++){let ut=h?U(R[at],st[at],$t):R[at];y?(C.copy(S.normals[0]).multiplyScalar(ut.x),M.copy(S.binormals[0]).multiplyScalar(ut.y),_.copy(E[0]).add(C).add(M),yt(_.x,_.y,_.z)):yt(ut.x,ut.y,0)}for(let at=1;at<=u;at++)for(let ut=0;ut<H;ut++){let pt=h?U(R[ut],st[ut],$t):R[ut];y?(C.copy(S.normals[at]).multiplyScalar(pt.x),M.copy(S.binormals[at]).multiplyScalar(pt.y),_.copy(E[at]).add(C).add(M),yt(_.x,_.y,_.z)):yt(pt.x,pt.y,d/u*at)}for(let at=m-1;at>=0;at--){let ut=at/m,pt=f*Math.cos(ut*Math.PI/2),mt=p*Math.sin(ut*Math.PI/2)+x;for(let _t=0,Gt=D.length;_t<Gt;_t++){let Ft=U(D[_t],q[_t],mt);yt(Ft.x,Ft.y,d+pt)}for(let _t=0,Gt=L.length;_t<Gt;_t++){let Ft=L[_t];Y=X[_t];for(let Ht=0,Wt=Ft.length;Ht<Wt;Ht++){let O=U(Ft[Ht],Y[Ht],mt);y?yt(O.x,O.y+E[u-1].y,E[u-1].x+pt):yt(O.x,O.y,d+pt)}}}Jt(),nt();function Jt(){let at=i.length/3;if(h){let ut=0,pt=H*ut;for(let mt=0;mt<kt;mt++){let _t=xt[mt];zt(_t[2]+pt,_t[1]+pt,_t[0]+pt)}ut=u+m*2,pt=H*ut;for(let mt=0;mt<kt;mt++){let _t=xt[mt];zt(_t[0]+pt,_t[1]+pt,_t[2]+pt)}}else{for(let ut=0;ut<kt;ut++){let pt=xt[ut];zt(pt[2],pt[1],pt[0])}for(let ut=0;ut<kt;ut++){let pt=xt[ut];zt(pt[0]+H*u,pt[1]+H*u,pt[2]+H*u)}}n.addGroup(at,i.length/3-at,0)}function nt(){let at=i.length/3,ut=0;rt(D,ut),ut+=D.length;for(let pt=0,mt=L.length;pt<mt;pt++){let _t=L[pt];rt(_t,ut),ut+=_t.length}n.addGroup(at,i.length/3-at,1)}function rt(at,ut){let pt=at.length;for(;--pt>=0;){let mt=pt,_t=pt-1;_t<0&&(_t=at.length-1);for(let Gt=0,Ft=u+m*2;Gt<Ft;Gt++){let Ht=H*Gt,Wt=H*(Gt+1),O=ut+mt+Ht,oe=ut+_t+Ht,te=ut+_t+Wt,P=ut+mt+Wt;Ct(O,oe,te,P)}}}function yt(at,ut,pt){l.push(at),l.push(ut),l.push(pt)}function zt(at,ut,pt){Vt(at),Vt(ut),Vt(pt);let mt=i.length/3,_t=v.generateTopUV(n,i,mt-3,mt-2,mt-1);ae(_t[0]),ae(_t[1]),ae(_t[2])}function Ct(at,ut,pt,mt){Vt(at),Vt(ut),Vt(mt),Vt(ut),Vt(pt),Vt(mt);let _t=i.length/3,Gt=v.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);ae(Gt[0]),ae(Gt[1]),ae(Gt[3]),ae(Gt[1]),ae(Gt[2]),ae(Gt[3])}function Vt(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function ae(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fh[i.type]().fromJSON(i)),new s(n,t.options)}},ug={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new St(r,o),new St(a,l),new St(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-d),new St(h,1-p),new St(x,1-g)]:[new St(a,1-l),new St(u,1-d),new St(f,1-p),new St(m,1-g)]}};function dg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var po=class s extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let v=g*h-o;for(let E=0;E<c;E++){let y=E*d-r;p.push(y,-v,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let E=v+c*g,y=v+c*(g+1),S=v+1+c*(g+1),M=v+1+c*g;f.push(E,y,M),f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var mo=class s extends Je{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new V,h=new V,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],E=g/n,y=o+E*a,S=t*Math.cos(y),M=Math.sqrt(t*t-S*S),C=0;g===0&&o===0?C=.5/e:g===n&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let A=_/e,R=i+A*r;d.x=-M*Math.cos(R),d.y=S,d.z=M*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+C,1-E),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){let E=u[g][v+1],y=u[g][v],S=u[g+1][v],M=u[g+1][v+1];(g!==0||o>0)&&f.push(E,y,M),(g!==n-1||l<Math.PI)&&f.push(y,S,M)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ys=class s extends Je{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],d=[],h=new V,f=new V,p=new V;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let v=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,E=(i+1)*(x-1)+m,y=(i+1)*x+m;l.push(g,v,y),l.push(v,E,y)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Rd(i))i.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Rd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function Rd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Af={clone:ws,merge:an},pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=fg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new St().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ka=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ja=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ah(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Hi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends Hi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=t,a=2*e-n;break;case dh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:o=t,l=2*n-e;break;case dh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let S=0;S!==a;++S)r[S]=g*o[u+S]+v*o[c+S]+E*o[l+S]+y*o[d+S];return r}},tl=class extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},el=class extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends Hi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,v=d[g],E=d[g+1],y=t*h+p*2,S=u[y],M=u[y+1],C=xg(n,e,v,S,i);r[p]=Ef(C,x,E,M,m)}return r}};function Ef(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function gg(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function xg(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Ef(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=gg(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ah(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case ch:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ah(this.settings)&&(Id(this.settings.inTangents,t),Id(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ym(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[h+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ah(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Id(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ua;var Wi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Gr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};il.prototype.ValueTypeName="color";var sl=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};sl.prototype.ValueTypeName="number";var rl=class extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Tn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Gr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Tn{constructor(t,e,n,i){super(t,e,n,i)}};ol.prototype.ValueTypeName="vector";var al=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tf=new al,ll=class{constructor(t){this.manager=t!==void 0?t:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xo=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lh=new fe,Pd=new V,Ld=new V,_o=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pd),Ld.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ld),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wa=new V,Aa=new on,Qn=new V,vo=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wa,Aa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wa,Aa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new V,Nd=new St,Dd=new St,$e=class extends vo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Nd,Dd),e.subVectors(Dd,Nd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Uc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xh=class extends _o{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}},yo=class extends lr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cr=class extends vo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_h=class extends _o{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xs=-90,Ys=1,cl=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(Xs,Ys,t,e);i.layers=this.layers,this.add(i);let r=new $e(Xs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new $e(Xs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new $e(Xs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new $e(Xs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new $e(Xs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hl=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var qh="\\[\\]\\.:\\/",_g=new RegExp("["+qh+"]","g"),Xh="[^"+qh+"]",vg="[^"+qh.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",Xh),bg=/(WCOD+)?/.source.replace("WCOD",vg),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),wg=new RegExp("^"+yg+bg+Sg+Mg+"$"),Ag=["material","materials","bones","map"],vh=class{constructor(t,e,n){let i=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(t){let e=wg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=vh;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rM=new Float32Array(1);var yh=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Yh(s,t,e,n){let i=Eg(n);switch(e){case zh:return s*t;case xl:return s*t/i.components*i.byteLength;case _l:return s*t/i.components*i.byteLength;case Ki:return s*t*2/i.components*i.byteLength;case vl:return s*t*2/i.components*i.byteLength;case kh:return s*t*3/i.components*i.byteLength;case Dn:return s*t*4/i.components*i.byteLength;case yl:return s*t*4/i.components*i.byteLength;case Ao:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case To:case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:case wl:return Math.max(s,16)*Math.max(t,8)/4;case bl:case Ml:return Math.max(s,8)*Math.max(t,8)/2;case Al:case El:case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tl:case Ro:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ql:case Xl:case Yl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $l:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Io:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eg(s){switch(s){case vn:case Fh:return{byteLength:1,components:1};case dr:case Uh:case $n:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Yn:case pl:case Nn:return{byteLength:4,components:1};case Bh:case Oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cg(s){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t0=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,T0=`uniform sampler2D dfgLUT;
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
}`,C0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,px=`float getShadowMask() {
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
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Wx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,Xx=`#define LAMBERT
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
}`,Yx=`#define MATCAP
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
}`,$x=`#define MATCAP
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
}`,Zx=`#define NORMAL
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
}`,Kx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,jx=`#define PHONG
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
}`,Qx=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,e_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Rg,alphahash_pars_fragment:Ig,alphamap_fragment:Pg,alphamap_pars_fragment:Lg,alphatest_fragment:Ng,alphatest_pars_fragment:Dg,aomap_fragment:Fg,aomap_pars_fragment:Ug,batching_pars_vertex:Bg,batching_vertex:Og,begin_vertex:zg,beginnormal_vertex:kg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:Yg,color_fragment:$g,color_pars_fragment:Zg,color_pars_vertex:Kg,color_vertex:Jg,common:jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:t0,displacementmap_pars_vertex:e0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:b0,envmap_vertex:u0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:x0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:v0,lights_pars_begin:y0,lights_toon_fragment:S0,lights_toon_pars_fragment:M0,lights_phong_fragment:w0,lights_phong_pars_fragment:A0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:C0,lights_fragment_maps:R0,lights_fragment_end:I0,lightprobes_pars_fragment:P0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:F0,map_fragment:U0,map_pars_fragment:B0,map_particle_fragment:O0,map_particle_pars_fragment:z0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:H0,morphnormal_vertex:W0,morphtarget_pars_vertex:q0,morphtarget_vertex:X0,normal_fragment_begin:Y0,normal_fragment_maps:$0,normal_pars_fragment:Z0,normal_pars_vertex:K0,normal_vertex:J0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:ex,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:sx,premultiplied_alpha_fragment:rx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:lx,roughnessmap_fragment:cx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:dx,shadowmap_vertex:fx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:xx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:yx,tonemapping_fragment:bx,tonemapping_pars_fragment:Sx,transmission_fragment:Mx,transmission_pars_fragment:wx,uv_pars_fragment:Ax,uv_pars_vertex:Ex,uv_vertex:Tx,worldpos_vertex:Cx,background_vert:Rx,background_frag:Ix,backgroundCube_vert:Px,backgroundCube_frag:Lx,cube_vert:Nx,cube_frag:Dx,depth_vert:Fx,depth_frag:Ux,distance_vert:Bx,distance_frag:Ox,equirect_vert:zx,equirect_frag:kx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Hx,meshbasic_frag:Wx,meshlambert_vert:qx,meshlambert_frag:Xx,meshmatcap_vert:Yx,meshmatcap_frag:$x,meshnormal_vert:Zx,meshnormal_frag:Kx,meshphong_vert:Jx,meshphong_frag:jx,meshphysical_vert:Qx,meshphysical_frag:t_,meshtoon_vert:e_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},Mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},oi={basic:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:an([Mt.common,Mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:an([Mt.lights,Mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var tc={r:0,b:0,g:0},c_=new fe,Kf=new Zt;Kf.set(-1,0,0,0,1,0,0,0,1);function h_(s,t,e,n,i,r){let o=new Kt(0),a=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let y=v.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(v){let E=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===Mo)?(c===void 0&&(c=new ve(new wi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ws(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=se.getTransfer(y.colorSpace)!==de,(u!==y||d!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ve(new po(2,2),new En({name:"BackgroundMaterial",uniforms:ws(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(tc,Wh(s)),e.buffers.color.setClear(tc.r,tc.g,tc.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function u_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(L,B,N,I,D){let U=!1,H=d(L,I,N,B);r!==H&&(r=H,c(r.object)),U=f(L,I,N,D),U&&p(L,I,N,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(L,B,N,I),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function u(L){return s.deleteVertexArray(L)}function d(L,B,N,I){let D=I.wireframe===!0,U=n[B.id];U===void 0&&(U={},n[B.id]=U);let H=L.isInstancedMesh===!0?L.id:0,Z=U[H];Z===void 0&&(Z={},U[H]=Z);let q=Z[N.id];q===void 0&&(q={},Z[N.id]=q);let X=q[D];return X===void 0&&(X=h(l()),q[D]=X),X}function h(L){let B=[],N=[],I=[];for(let D=0;D<e;D++)B[D]=0,N[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,B,N,I){let D=r.attributes,U=B.attributes,H=0,Z=N.getAttributes();for(let q in Z)if(Z[q].location>=0){let Y=D[q],st=U[q];if(st===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),Y===void 0||Y.attribute!==st||st&&Y.data!==st.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(L,B,N,I){let D={},U=B.attributes,H=0,Z=N.getAttributes();for(let q in Z)if(Z[q].location>=0){let Y=U[q];Y===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));let st={};st.attribute=Y,Y&&Y.data&&(st.data=Y.data),D[q]=st,H++}r.attributes=D,r.attributesNum=H,r.index=I}function x(){let L=r.newAttributes;for(let B=0,N=L.length;B<N;B++)L[B]=0}function m(L){g(L,0)}function g(L,B){let N=r.newAttributes,I=r.enabledAttributes,D=r.attributeDivisors;N[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),D[L]!==B&&(s.vertexAttribDivisor(L,B),D[L]=B)}function v(){let L=r.newAttributes,B=r.enabledAttributes;for(let N=0,I=B.length;N<I;N++)B[N]!==L[N]&&(s.disableVertexAttribArray(N),B[N]=0)}function E(L,B,N,I,D,U,H){H===!0?s.vertexAttribIPointer(L,B,N,D,U):s.vertexAttribPointer(L,B,N,I,D,U)}function y(L,B,N,I){x();let D=I.attributes,U=N.getAttributes(),H=B.defaultAttributeValues;for(let Z in U){let q=U[Z];if(q.location>=0){let X=D[Z];if(X===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Y=X.normalized,st=X.itemSize,xt=t.get(X);if(xt===void 0)continue;let kt=xt.buffer,$t=xt.type,Jt=xt.bytesPerElement,nt=$t===s.INT||$t===s.UNSIGNED_INT||X.gpuType===pl;if(X.isInterleavedBufferAttribute){let rt=X.data,yt=rt.stride,zt=X.offset;if(rt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<q.locationSize;Ct++)g(q.location+Ct,rt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ct=0;Ct<q.locationSize;Ct++)m(q.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Ct=0;Ct<q.locationSize;Ct++)E(q.location+Ct,st/q.locationSize,$t,Y,yt*Jt,(zt+st/q.locationSize*Ct)*Jt,nt)}else{if(X.isInstancedBufferAttribute){for(let rt=0;rt<q.locationSize;rt++)g(q.location+rt,X.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let rt=0;rt<q.locationSize;rt++)m(q.location+rt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let rt=0;rt<q.locationSize;rt++)E(q.location+rt,st/q.locationSize,$t,Y,st*Jt,st/q.locationSize*rt*Jt,nt)}}else if(H!==void 0){let Y=H[Z];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(q.location,Y);break;case 3:s.vertexAttrib3fv(q.location,Y);break;case 4:s.vertexAttrib4fv(q.location,Y);break;default:s.vertexAttrib1fv(q.location,Y)}}}}v()}function S(){A();for(let L in n){let B=n[L];for(let N in B){let I=B[N];for(let D in I){let U=I[D];for(let H in U)u(U[H].object),delete U[H];delete I[D]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let N in B){let I=B[N];for(let D in I){let U=I[D];for(let H in U)u(U[H].object),delete U[H];delete I[D]}}delete n[L.id]}function C(L){for(let B in n){let N=n[B];for(let I in N){let D=N[I];if(D[L.id]===void 0)continue;let U=D[L.id];for(let H in U)u(U[H].object),delete U[H];delete D[L.id]}}}function _(L){for(let B in n){let N=n[B],I=L.isInstancedMesh===!0?L.id:0,D=N[I];if(D!==void 0){for(let U in D){let H=D[U];for(let Z in H)u(H[Z].object),delete H[Z];delete D[U]}delete N[I],Object.keys(N).length===0&&delete n[B]}}}function A(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function d_(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function f_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Dn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vn&&C!==Nn&&!_&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:M}}function p_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Gn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,E=v*4,y=g.clippingState||null;l.value=y,y=u(p,h,E,f);for(let S=0;S!==E;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var gr=4,m_=6,g_=20,x_=256,Po=new cr,Cf=new Kt,$h=null,Zh=0,Kh=0,Jh=!1,__=new V,As=new V,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=__}=r;$h=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($h,Zh,Kh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:$n,format:Dn,colorSpace:Hr,depthBuffer:!1},i=Rf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(r)),this._blurMaterial=b_(r,t,e),this._ggxMaterial=y_(r,t,e)}return i}_compileMaterial(t){let e=new ve(new Je,t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,i,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Cf),d.toneMapping=Xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new wi,new Pn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(Cf),g=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let S=this._cubeSize;mr(i,y*S,E>2?S:0,S,S),d.setRenderTarget(i),g&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Yi||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Po)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-gr?n-p+gr:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,mr(r,m,g,3*x,2*x),i.setRenderTarget(r),i.render(a,Po),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,mr(t,m,g,3*x,2*x),i.setRenderTarget(t),i.render(a,Po)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],d=3*u*(i>this._lodMax-gr?i-this._lodMax+gr:0),h=4*(this._cubeSize-u);mr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(l,Po)}};function v_(s){let t=[],e=[],n=s,i=s-gr+1+m_;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,p=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,E=g>2?0:-1,y=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];p.set(y,f*h*g);for(let S=0;S<h;S++){let M=u[S*2]*2-1,C=u[S*2+1]*2-1;g===0?As.set(1,C,M):g===1?As.set(-M,1,-C):g===2?As.set(-M,C,1):g===3?As.set(-1,C,-M):g===4?As.set(-M,-1,C):As.set(M,C,-1),As.toArray(x,(g*h+S)*f)}}let m=new Je;m.setAttribute("position",new un(p,f)),m.setAttribute("outputDirection",new un(x,f)),e.push(new ve(m,null)),n>gr&&n--}return{lodMeshes:e,sizeLods:t}}function Rf(s,t,e){let n=new _n(s,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function y_(s,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function b_(s,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:g_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function If(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pf(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new no(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wi(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:si});r.uniforms.tEquirect.value=e;let o=new ve(i,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Ze),new cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function S_(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ul||f===dl)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new ic(p.height);return x.fromEquirectangularTexture(s,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,p=f===ul||f===dl,x=f===Yi||f===Ms;if(p||x){let m=e.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new nc(s)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new nc(s)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===ul?h.mapping=Yi:f===dl&&(h.mapping=Ms),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function M_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_s("WebGLRenderer: "+n+" extension not supported."),i}}}function w_(s,t,e,n){let i={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],s.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let E=0,y=v.length;E<y;E+=3){let S=v[E+0],M=v[E+1],C=v[E+2];h.push(S,M,M,C,C,S)}}else{let v=p.array;x=p.version;for(let E=0,y=v.length/3-1;E<y;E+=3){let S=E+0,M=E+1,C=E+2;h.push(S,M,M,C,C,S)}}let m=new(p.count>=65535?Jr:Kr)(h,1);m.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function A_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){s.drawElements(n,h,r,d*o),e.update(h,n,1)}function c(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function E_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function T_(s,t,e){let n=new WeakMap,i=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*S*4*d),C=new Xr(M,y,S,d);C.type=Nn,C.needsUpdate=!0;let _=E*4;for(let R=0;R<d;R++){let L=m[R],B=g[R],N=v[R],I=y*S*4*R;for(let D=0;D<L.count;D++){let U=D*_;f===!0&&(i.fromBufferAttribute(L,D),M[I+U+0]=i.x,M[I+U+1]=i.y,M[I+U+2]=i.z,M[I+U+3]=0),p===!0&&(i.fromBufferAttribute(B,D),M[I+U+4]=i.x,M[I+U+5]=i.y,M[I+U+6]=i.z,M[I+U+7]=0),x===!0&&(i.fromBufferAttribute(N,D),M[I+U+8]=i.x,M[I+U+9]=i.y,M[I+U+10]=i.z,M[I+U+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new St(y,S)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function C_(s,t,e,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var R_={[Ch]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Nh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function I_(s,t,e,n,i,r){let o=new _n(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Je;c.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let u=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ve(c,u),h=new cr(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,v=[],E=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<v.length;M++){let C=v[M];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){v=y,E=v.length>0&&v[0].isRenderPass===!0;let S=o.width,M=o.height;v.length>0&&a===null&&(a=new _n(S,M,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new _n(S,M,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let _=v[C];_.setSize&&_.setSize(S,M)}},this.begin=function(y,S){if(x||y.toneMapping===Xn&&v.length===0)return!1;if(g=S,S!==null){let M=S.width,C=S.height;(o.width!==M||o.height!==C)&&this.setSize(M,C)}return E===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=m,x=!0;let M=o,C=a;for(let _=0;_<v.length;_++){let A=v[_];A.enabled!==!1&&(A.render(y,C,M,S),A.needsSwap!==!1&&(M=C,C=C===a?l:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,u.defines={},se.getTransfer(f)===de&&(u.defines.SRGB_TRANSFER="");let _=R_[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(d,h),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Jf=new dn,tu=new Gi(1,1),jf=new Xr,Qf=new ka,tp=new no,Lf=[],Nf=[],Df=new Float32Array(16),Ff=new Float32Array(9),Uf=new Float32Array(4);function _r(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Lf[i];if(r===void 0&&(r=new Float32Array(i),Lf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function oc(s,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function P_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function L_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function N_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function D_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function F_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Uf.set(n),s.uniformMatrix2fv(this.addr,!1,Uf),ke(e,n)}}function U_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ff.set(n),s.uniformMatrix3fv(this.addr,!1,Ff),ke(e,n)}}function B_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Df.set(n),s.uniformMatrix4fv(this.addr,!1,Df),ke(e,n)}}function O_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function z_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function k_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function V_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function G_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function H_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function W_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function X_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(tu.compareFunction=e.isReversedDepthBuffer()?Ql:jl,r=tu):r=Jf,e.setTexture2D(t||r,i)}function Y_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qf,i)}function $_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tp,i)}function Z_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jf,i)}function K_(s){switch(s){case 5126:return P_;case 35664:return L_;case 35665:return N_;case 35666:return D_;case 35674:return F_;case 35675:return U_;case 35676:return B_;case 5124:case 35670:return O_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return V_;case 5125:return G_;case 36294:return H_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(s,t){s.uniform1fv(this.addr,t)}function j_(s,t){let e=_r(t,this.size,2);s.uniform2fv(this.addr,e)}function Q_(s,t){let e=_r(t,this.size,3);s.uniform3fv(this.addr,e)}function tv(s,t){let e=_r(t,this.size,4);s.uniform4fv(this.addr,e)}function ev(s,t){let e=_r(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function nv(s,t){let e=_r(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function iv(s,t){let e=_r(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sv(s,t){s.uniform1iv(this.addr,t)}function rv(s,t){s.uniform2iv(this.addr,t)}function ov(s,t){s.uniform3iv(this.addr,t)}function av(s,t){s.uniform4iv(this.addr,t)}function lv(s,t){s.uniform1uiv(this.addr,t)}function cv(s,t){s.uniform2uiv(this.addr,t)}function hv(s,t){s.uniform3uiv(this.addr,t)}function uv(s,t){s.uniform4uiv(this.addr,t)}function dv(s,t,e){let n=this.cache,i=t.length,r=oc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=tu:o=Jf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function fv(s,t,e){let n=this.cache,i=t.length,r=oc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qf,r[o])}function pv(s,t,e){let n=this.cache,i=t.length,r=oc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||tp,r[o])}function mv(s,t,e){let n=this.cache,i=t.length,r=oc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jf,r[o])}function gv(s){switch(s){case 5126:return J_;case 35664:return j_;case 35665:return Q_;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}var eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K_(e.type)}},nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gv(e.type)}},iu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function Bf(s,t){s.seq.push(t),s.map[t.id]=t}function xv(s,t,e){let n=s.name,i=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bf(e,c===void 0?new eu(a,s,t):new nu(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new iu(a),Bf(e,d)),e=d}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xv(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Of(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var _v=37297,vv=0;function yv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zf=new Zt;function bv(s){se._getMatrix(zf,se.workingColorSpace,s);let t=`mat3( ${zf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Wr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function kf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+yv(s.getShaderSource(t),a)}else return r}function Sv(s,t){let e=bv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mv={[Ch]:"Linear",[Rh]:"Reinhard",[Ih]:"Cineon",[So]:"ACESFilmic",[Lh]:"AgX",[Nh]:"Neutral",[Ph]:"Custom"};function wv(s,t){let e=Mv[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new V;function Av(){se.getLuminanceCoefficients(ec);let s=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function Tv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function No(s){return s!==""}function Vf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(s){return s.replace(Rv,Pv)}var Iv=new Map;function Pv(s,t){let e=Qt[t];if(e===void 0){let n=Iv.get(t);if(n!==void 0)e=Qt[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return su(e)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(s){return s.replace(Lv,Nv)}function Nv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Dv={[bs]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function Fv(s){return Dv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uv={[Yi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE_UV"};function Bv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ov={[Ms]:"ENVMAP_MODE_REFRACTION"};function zv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ov[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kv={[Th]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function Vv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kv[s.combine]||"ENVMAP_BLENDING_NONE"}function Gv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Fv(e),c=Bv(e),u=zv(e),d=Vv(e),h=Gv(e),f=Ev(e),p=Tv(r),x=i.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(No).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(No).join(`
`),g.length>0&&(g+=`
`)):(m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Sv("linearToOutputTexel",e.outputColorSpace),Av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(No).join(`
`)),o=su(o),o=Vf(o,e),o=Gf(o,e),a=su(a),a=Vf(a,e),a=Gf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=v+m+o,y=v+g+a,S=Of(i,i.VERTEX_SHADER,E),M=Of(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(L){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(M)||"",D=B.trim(),U=N.trim(),H=I.trim(),Z=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,M);else{let X=kf(i,S,"vertex"),Y=kf(i,M,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+X+`
`+Y)}else D!==""?qt("WebGLProgram: Program Info Log:",D):(U===""||H==="")&&(q=!1);q&&(L.diagnostics={runnable:Z,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:g}})}i.deleteShader(S),i.deleteShader(M),_=new xr(i,x),A=Cv(i,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,_v)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var Wv=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ou(t),e.set(t,n)),n}},ou=class{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}};function qv(s){return s===Ki||s===Ro||s===Io}function Xv(s,t,e,n,i,r){let o=new Yr,a=new ru,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,A,R,L,B,N){let I=L.fog,D=B.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=t.get(_.envMap||U,H),q=Z&&Z.mapping===Mo?Z.image.height:null,X=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,st=Y!==void 0?Y.length:0,xt=0;D.morphAttributes.position!==void 0&&(xt=1),D.morphAttributes.normal!==void 0&&(xt=2),D.morphAttributes.color!==void 0&&(xt=3);let kt,$t,Jt,nt;if(X){let Se=oi[X];kt=Se.vertexShader,$t=Se.fragmentShader}else{kt=_.vertexShader,$t=_.fragmentShader;let Se=a.getVertexShaderStage(_),he=a.getFragmentShaderStage(_);a.update(_,Se,he),Jt=Se.id,nt=he.id}let rt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,Ct=B.isBatchedMesh===!0,Vt=!!_.map,ae=!!_.matcap,at=!!Z,ut=!!_.aoMap,pt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,_t=!!_.normalMap,Gt=!!_.displacementMap,Ft=!!_.emissiveMap,Ht=!!_.metalnessMap,Wt=!!_.roughnessMap,O=_.anisotropy>0,oe=_.clearcoat>0,te=_.dispersion>0,P=_.retroreflectivity>0,b=_.iridescence>0,$=_.sheen>0,K=_.transmission>0,it=O&&!!_.anisotropyMap,gt=oe&&!!_.clearcoatMap,W=oe&&!!_.clearcoatNormalMap,z=oe&&!!_.clearcoatRoughnessMap,F=b&&!!_.iridescenceMap,et=b&&!!_.iridescenceThicknessMap,lt=$&&!!_.sheenColorMap,ft=$&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ct=!!_.specularColorMap,Et=!!_.specularIntensityMap,Ut=K&&!!_.transmissionMap,k=K&&!!_.thicknessMap,vt=!!_.gradientMap,ot=!!_.alphaMap,bt=_.alphaTest>0,Tt=!!_.alphaHash,ht=!!_.extensions,Ot=Xn;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ot=s.toneMapping);let Dt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:$t,defines:_.defines,customVertexShaderID:Jt,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:ae,envMap:at,envMapMode:at&&Z.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:pt,bumpMap:mt,normalMap:_t,displacementMap:Gt,emissiveMap:Ft,normalMapObjectSpace:_t&&_.normalMapType===af,normalMapTangentSpace:_t&&_.normalMapType===Jl,packedNormalMap:_t&&_.normalMapType===Jl&&qv(_.normalMap.format),metalnessMap:Ht,roughnessMap:Wt,anisotropy:O,anisotropyMap:it,clearcoat:oe,clearcoatMap:gt,clearcoatNormalMap:W,clearcoatRoughnessMap:z,dispersion:te,retroreflection:P,iridescence:b,iridescenceMap:F,iridescenceThicknessMap:et,sheen:$,sheenColorMap:lt,sheenRoughnessMap:ft,specularMap:Q,specularColorMap:ct,specularIntensityMap:Et,transmission:K,transmissionMap:Ut,thicknessMap:k,gradientMap:vt,opaque:_.transparent===!1&&_.blending===ur&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:bt,alphaHash:Tt,combine:_.combine,mapUv:Vt&&p(_.map.channel),aoMapUv:ut&&p(_.aoMap.channel),lightMapUv:pt&&p(_.lightMap.channel),bumpMapUv:mt&&p(_.bumpMap.channel),normalMapUv:_t&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:Ft&&p(_.emissiveMap.channel),metalnessMapUv:Ht&&p(_.metalnessMap.channel),roughnessMapUv:Wt&&p(_.roughnessMap.channel),anisotropyMapUv:it&&p(_.anisotropyMap.channel),clearcoatMapUv:gt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:W&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:et&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ft&&p(_.sheenRoughnessMap.channel),specularMapUv:Q&&p(_.specularMap.channel),specularColorMapUv:ct&&p(_.specularColorMap.channel),specularIntensityMapUv:Et&&p(_.specularIntensityMap.channel),transmissionMapUv:Ut&&p(_.transmissionMap.channel),thicknessMapUv:k&&p(_.thicknessMap.channel),alphaMapUv:ot&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||O),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(Vt||ot),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:xt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(A,_),v(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){let A=f[_.type],R;if(A){let L=oi[A];R=Af.clone(L.uniforms)}else R=_.uniforms;return R}function y(_,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new Hv(s,A,_,i),c.push(R),u.set(A,R)),R}function S(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:C}}function Yv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function $v(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let v=s[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},s[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=g),t++,v}function l(h,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let E=a(h,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(h,f,p,x,m,g){let v=a(h,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||$v),n.length>1&&n.sort(f||qf),i.length>1&&i.sort(f||qf)}function d(){for(let h=t,f=s.length;h<f;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Zv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Xf,s.set(n,[o])):i>=r.length?(o=new Xf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Kt};break;case"SpotLight":e={position:new V,direction:new V,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function Jv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var jv=0;function Qv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ty(s){let t=new Kv,e=Jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,r=new fe,o=new fe;function a(c){let u=0,d=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,E=0,y=0,S=0,M=0,C=0,_=0,A=0,R=0;c.sort(Qv);for(let B=0,N=c.length;B<N;B++){let I=c[B],D=I.color,U=I.intensity,H=I.distance,Z=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ki?Z=I.shadow.map.texture:Z=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=D.r*U,d+=D.g*U,h+=D.b*U;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],U);R++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,Y=e.get(I);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=Z;let st=X.getViewportCount();for(let xt=0;xt<st;xt++)n.sunShadowMatrix[x+xt]=X.getMatrix(xt),n.sunShadowCascade[x+xt]=X._cascadeData[xt];x+=st,p++}n.sun[f]=q,f++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,Y=e.get(I);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=q,m++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(D).multiplyScalar(U),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[v]=q;let X=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,X.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[v]=X.matrix,I.castShadow){let Y=e.get(I);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Z,C++}v++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(D).multiplyScalar(U),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=q,E++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let X=I.shadow,Y=e.get(I);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,M++}n.point[g]=q,g++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(U),q.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[y]=q,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==E||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=E,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=R,n.version=jv++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let y=c[v];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),h++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Yf(s){let t=new ty(s),e=[],n=[],i=[];function r(h){d.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){i.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ey(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Yf(s),t.set(i,[a])):r>=o.length?(a=new Yf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`,sy=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ry=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],$f=new fe,Lo=new V,Qh=new V;function oy(s,t,e){let n=new nr,i=new St,r=new St,o=new Ce,a=new Ja,l=new ja,c={},u=e.maxTextureSize,d={[Xi]:fn,[fn]:Xi,[Ln]:Ln},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Je;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let g=this.type;this.render=function(M,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Bd&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let A=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(si),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=g!==this.type;N&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(D=>D.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,D=M.length;I<D;I++){let U=M[I],H=U.shadow;if(H===void 0){qt("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let Z=H.getFrameExtents();i.multiply(Z),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,H.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===hr){if(U.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new _n(i.x,i.y,{format:Ki,type:$n,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Gi(i.x,i.y,Nn),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=ei,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We}else U.isPointLight?(H.map=new ic(i.x),H.map.depthTexture=new Ha(i.x,Yn)):(H.map=new _n(i.x,i.y),H.map.depthTexture=new Gi(i.x,i.y,Yn)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=ei,this.type===bs?(H.map.depthTexture.compareFunction=q?Ql:jl,H.map.depthTexture.minFilter=Ze,H.map.depthTexture.magFilter=Ze):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let X=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();U.isPointLight!==!0&&H.updateMatrices(U,_);for(let Y=0;Y<X;Y++){let st=H.getCamera(Y);if(U.isPointLight){let xt=H.camera,kt=H.matrix,$t=U.distance||xt.far;$t!==xt.far&&(xt.far=$t,xt.updateProjectionMatrix()),Lo.setFromMatrixPosition(U.matrixWorld),xt.position.copy(Lo),Qh.copy(xt.position),Qh.add(sy[Y]),xt.up.copy(ry[Y]),xt.lookAt(Qh),xt.updateMatrixWorld(),kt.makeTranslation(-Lo.x,-Lo.y,-Lo.z),$f.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),H._frustum.setFromProjectionMatrix($f,xt.coordinateSystem,xt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(H.map),s.clear());let xt=H.getViewport(Y);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),B.viewport(o)}n=H.getFrustum(Y),y(C,_,st,U,this.type)}H.isPointLightShadow!==!0&&this.type===hr&&v(H,_),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(A,R,L)};function v(M,C){let _=t.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new _n(i.x,i.y,{format:Ki,type:$n}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(C,null,_,h,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(C,null,_,f,x,null)}function E(M,C,_,A){let R=null,L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=R.uuid,N=C.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let D=I[N];D===void 0&&(D=R.clone(),I[N]=D,C.addEventListener("dispose",S)),R=D}if(R.visible=C.visible,R.wireframe=C.wireframe,A===hr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=s.properties.get(R);B.light=_}return R}function y(M,C,_,A,R){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===hr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let N=t.update(M),I=M.material;if(Array.isArray(I)){let D=N.groups;for(let U=0,H=D.length;U<H;U++){let Z=D[U],q=I[Z.materialIndex];if(q&&q.visible){let X=E(M,q,A,R);M.onBeforeShadow(s,M,C,_,N,X,Z),s.renderBufferDirect(_,null,N,X,M,Z),M.onAfterShadow(s,M,C,_,N,X,Z)}}}else if(I.visible){let D=E(M,I,A,R);M.onBeforeShadow(s,M,C,_,N,D,null),s.renderBufferDirect(_,null,N,D,M,null),M.onAfterShadow(s,M,C,_,N,D,null)}}let B=M.children;for(let N=0,I=B.length;N<I;N++)y(B[N],C,_,A,R)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let A=c[_],R=M.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function ay(s,t){function e(){let k=!1,vt=new Ce,ot=null,bt=new Ce(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!k&&(s.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,ht,Ot,Dt,Se){Se===!0&&(Tt*=Dt,ht*=Dt,Ot*=Dt),vt.set(Tt,ht,Ot,Dt),bt.equals(vt)===!1&&(s.clearColor(Tt,ht,Ot,Dt),bt.copy(vt))},reset:function(){k=!1,ot=null,bt.set(-1,0,0,0)}}}function n(){let k=!1,vt=!1,ot=null,bt=null,Tt=null;return{setReversed:function(ht){if(vt!==ht){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return vt},setTest:function(ht){ht?rt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!k&&(s.depthMask(ht),ot=ht)},setFunc:function(ht){if(vt&&(ht=vf[ht]),bt!==ht){switch(ht){case Ca:s.depthFunc(s.NEVER);break;case Ra:s.depthFunc(s.ALWAYS);break;case Ia:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Pa:s.depthFunc(s.EQUAL);break;case La:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Da:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=ht}},setLocked:function(ht){k=ht},setClear:function(ht){Tt!==ht&&(Tt=ht,vt&&(ht=1-ht),s.clearDepth(ht))},reset:function(){k=!1,ot=null,bt=null,Tt=null,vt=!1}}}function i(){let k=!1,vt=null,ot=null,bt=null,Tt=null,ht=null,Ot=null,Dt=null,Se=null;return{setTest:function(he){k||(he?rt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(he){vt!==he&&!k&&(s.stencilMask(he),vt=he)},setFunc:function(he,On,Jn){(ot!==he||bt!==On||Tt!==Jn)&&(s.stencilFunc(he,On,Jn),ot=he,bt=On,Tt=Jn)},setOp:function(he,On,Jn){(ht!==he||Ot!==On||Dt!==Jn)&&(s.stencilOp(he,On,Jn),ht=he,Ot=On,Dt=Jn)},setLocked:function(he){k=he},setClear:function(he){Se!==he&&(s.clearStencil(he),Se=he)},reset:function(){k=!1,vt=null,ot=null,bt=null,Tt=null,ht=null,Ot=null,Dt=null,Se=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,y=null,S=null,M=null,C=null,_=new Kt(0,0,0),A=0,R=!1,L=null,B=null,N=null,I=null,D=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Z>=2);let X=null,Y={},st=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),kt=new Ce().fromArray(st),$t=new Ce().fromArray(xt);function Jt(k,vt,ot,bt){let Tt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(k,ht),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<ot;Ot++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(vt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(vt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return ht}let nt={};nt[s.TEXTURE_2D]=Jt(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=Jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=Jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=Jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(Zs),mt(!1),_t(bh),rt(s.CULL_FACE),ut(si);function rt(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function yt(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function zt(k,vt){return h[k]!==vt?(s.bindFramebuffer(k,vt),h[k]=vt,k===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=vt),k===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ct(k,vt){let ot=p,bt=!1;if(k){ot=f.get(vt),ot===void 0&&(ot=[],f.set(vt,ot));let Tt=k.textures;if(ot.length!==Tt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ot=Tt.length;ht<Ot;ht++)ot[ht]=s.COLOR_ATTACHMENT0+ht;ot.length=Tt.length,bt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,bt=!0);bt&&s.drawBuffers(ot)}function Vt(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let ae={[Ss]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[kd]:s.FUNC_REVERSE_SUBTRACT};ae[Vd]=s.MIN,ae[Gd]=s.MAX;let at={[Hd]:s.ZERO,[Wd]:s.ONE,[qd]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[Jd]:s.SRC_ALPHA_SATURATE,[Zd]:s.DST_COLOR,[Yd]:s.DST_ALPHA,[Xd]:s.ONE_MINUS_SRC_COLOR,[Eh]:s.ONE_MINUS_SRC_ALPHA,[Kd]:s.ONE_MINUS_DST_COLOR,[$d]:s.ONE_MINUS_DST_ALPHA,[jd]:s.CONSTANT_COLOR,[Qd]:s.ONE_MINUS_CONSTANT_COLOR,[tf]:s.CONSTANT_ALPHA,[ef]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(k,vt,ot,bt,Tt,ht,Ot,Dt,Se,he){if(k===si){m===!0&&(yt(s.BLEND),m=!1);return}if(m===!1&&(rt(s.BLEND),m=!0),k!==Od){if(k!==g||he!==R){if((v!==Ss||S!==Ss)&&(s.blendEquation(s.FUNC_ADD),v=Ss,S=Ss),he)switch(k){case ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sh:s.blendFunc(s.ONE,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",k);break}else switch(k){case ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mh:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",k);break}E=null,y=null,M=null,C=null,_.set(0,0,0),A=0,g=k,R=he}return}Tt=Tt||vt,ht=ht||ot,Ot=Ot||bt,(vt!==v||Tt!==S)&&(s.blendEquationSeparate(ae[vt],ae[Tt]),v=vt,S=Tt),(ot!==E||bt!==y||ht!==M||Ot!==C)&&(s.blendFuncSeparate(at[ot],at[bt],at[ht],at[Ot]),E=ot,y=bt,M=ht,C=Ot),(Dt.equals(_)===!1||Se!==A)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Se),_.copy(Dt),A=Se),g=k,R=!1}function pt(k,vt){k.side===Ln?yt(s.CULL_FACE):rt(s.CULL_FACE);let ot=k.side===fn;vt&&(ot=!ot),mt(ot),k.blending===ur&&k.transparent===!1?ut(si):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let bt=k.stencilWrite;a.setTest(bt),bt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(k){L!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),L=k)}function _t(k){k!==Fd?(rt(s.CULL_FACE),k!==B&&(k===bh?s.cullFace(s.BACK):k===Ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),B=k}function Gt(k){k!==N&&(H&&s.lineWidth(k),N=k)}function Ft(k,vt,ot){k?(rt(s.POLYGON_OFFSET_FILL),(I!==vt||D!==ot)&&(I=vt,D=ot,o.getReversed()&&(vt=-vt),s.polygonOffset(vt,ot))):yt(s.POLYGON_OFFSET_FILL)}function Ht(k){k?rt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=s.TEXTURE0+U-1),X!==k&&(s.activeTexture(k),X=k)}function O(k,vt,ot){ot===void 0&&(X===null?ot=s.TEXTURE0+U-1:ot=X);let bt=Y[ot];bt===void 0&&(bt={type:void 0,texture:void 0},Y[ot]=bt),(bt.type!==k||bt.texture!==vt)&&(X!==ot&&(s.activeTexture(ot),X=ot),s.bindTexture(k,vt||nt[k]),bt.type=k,bt.texture=vt)}function oe(){let k=Y[X];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function te(){try{s.compressedTexImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function b(){try{s.texSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function $(){try{s.texSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function it(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function gt(){try{s.texStorage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function W(){try{s.texStorage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function z(){try{s.texImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function F(){try{s.texImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function et(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function lt(k,vt){d[k]!==vt&&(s.pixelStorei(k,vt),d[k]=vt)}function ft(k){kt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),kt.copy(k))}function Q(k){$t.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),$t.copy(k))}function ct(k,vt){let ot=c.get(vt);ot===void 0&&(ot=new WeakMap,c.set(vt,ot));let bt=ot.get(k);bt===void 0&&(bt=s.getUniformBlockIndex(vt,k.name),ot.set(k,bt))}function Et(k,vt){let bt=c.get(vt).get(k);l.get(vt)!==bt&&(s.uniformBlockBinding(vt,bt,k.__bindingPointIndex),l.set(vt,bt))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},X=null,Y={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,E=null,y=null,S=null,M=null,C=null,_=new Kt(0,0,0),A=0,R=!1,L=null,B=null,N=null,I=null,D=null,kt.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:yt,bindFramebuffer:zt,drawBuffers:Ct,useProgram:Vt,setBlending:ut,setMaterial:pt,setFlipSided:mt,setCullFace:_t,setLineWidth:Gt,setPolygonOffset:Ft,setScissorTest:Ht,activeTexture:Wt,bindTexture:O,unbindTexture:oe,compressedTexImage2D:te,compressedTexImage3D:P,texImage2D:z,texImage3D:F,pixelStorei:lt,getParameter:et,updateUBOMapping:ct,uniformBlockBinding:Et,texStorage2D:gt,texStorage3D:W,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:it,scissor:ft,viewport:Q,reset:Ut}}function ly(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap,d=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):qr("canvas")}function m(P,b,$){let K=1,it=te(P);if((it.width>$||it.height>$)&&(K=$/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let gt=Math.floor(K*it.width),W=Math.floor(K*it.height);h===void 0&&(h=x(gt,W));let z=b?x(gt,W):h;return z.width=gt,z.height=W,z.getContext("2d").drawImage(P,0,0,gt,W),qt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+gt+"x"+W+")."),z}else return"data"in P&&qt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,b,$,K,it,gt=!1){if(P!==null){if(s[P]!==void 0)return s[P];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let W;K&&(W=t.get("EXT_texture_norm16"),W||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=b;if(b===s.RED&&($===s.FLOAT&&(z=s.R32F),$===s.HALF_FLOAT&&(z=s.R16F),$===s.UNSIGNED_BYTE&&(z=s.R8),$===s.UNSIGNED_SHORT&&W&&(z=W.R16_EXT),$===s.SHORT&&W&&(z=W.R16_SNORM_EXT)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(z=s.R8UI),$===s.UNSIGNED_SHORT&&(z=s.R16UI),$===s.UNSIGNED_INT&&(z=s.R32UI),$===s.BYTE&&(z=s.R8I),$===s.SHORT&&(z=s.R16I),$===s.INT&&(z=s.R32I)),b===s.RG&&($===s.FLOAT&&(z=s.RG32F),$===s.HALF_FLOAT&&(z=s.RG16F),$===s.UNSIGNED_BYTE&&(z=s.RG8),$===s.UNSIGNED_SHORT&&W&&(z=W.RG16_EXT),$===s.SHORT&&W&&(z=W.RG16_SNORM_EXT)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(z=s.RG8UI),$===s.UNSIGNED_SHORT&&(z=s.RG16UI),$===s.UNSIGNED_INT&&(z=s.RG32UI),$===s.BYTE&&(z=s.RG8I),$===s.SHORT&&(z=s.RG16I),$===s.INT&&(z=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(z=s.RGB8UI),$===s.UNSIGNED_SHORT&&(z=s.RGB16UI),$===s.UNSIGNED_INT&&(z=s.RGB32UI),$===s.BYTE&&(z=s.RGB8I),$===s.SHORT&&(z=s.RGB16I),$===s.INT&&(z=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(z=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(z=s.RGBA16UI),$===s.UNSIGNED_INT&&(z=s.RGBA32UI),$===s.BYTE&&(z=s.RGBA8I),$===s.SHORT&&(z=s.RGBA16I),$===s.INT&&(z=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_SHORT&&W&&(z=W.RGB16_EXT),$===s.SHORT&&W&&(z=W.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(z=s.R11F_G11F_B10F)),b===s.RGBA){let F=gt?Wr:se.getTransfer(it);$===s.FLOAT&&(z=s.RGBA32F),$===s.HALF_FLOAT&&(z=s.RGBA16F),$===s.UNSIGNED_BYTE&&(z=F===de?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&W&&(z=W.RGBA16_EXT),$===s.SHORT&&W&&(z=W.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function S(P,b){let $;return P?b===null||b===Yn||b===fr?$=s.DEPTH24_STENCIL8:b===Nn?$=s.DEPTH32F_STENCIL8:b===dr&&($=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===fr?$=s.DEPTH_COMPONENT24:b===Nn?$=s.DEPTH_COMPONENT32F:b===dr&&($=s.DEPTH_COMPONENT16),$}function M(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==We&&P.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){let b=P.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function _(P){let b=P.target;b.removeEventListener("dispose",_),L(b)}function A(P){let b=n.get(P);if(b.__webglInit===void 0)return;let $=P.source,K=f.get($);if(K){let it=K[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(P),Object.keys(K).length===0&&f.delete($)}n.remove(P)}function R(P){let b=n.get(P);s.deleteTexture(b.__webglTexture);let $=P.source,K=f.get($);delete K[b.__cacheKey],o.memory.textures--}function L(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let it=0;it<b.__webglFramebuffer[K].length;it++)s.deleteFramebuffer(b.__webglFramebuffer[K][it]);else s.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)s.deleteFramebuffer(b.__webglFramebuffer[K]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let $=P.textures;for(let K=0,it=$.length;K<it;K++){let gt=n.get($[K]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove($[K])}n.remove(P)}let B=0;function N(){B=0}function I(){return B}function D(P){B=P}function U(){let P=B;return P>=i.maxTextures&&qt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function H(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Z(P,b){let $=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let K=P.image;if(K===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt($,P,b);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function q(P,b){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){yt($,P,b);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function X(P,b){let $=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){yt($,P,b);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function Y(P,b){let $=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){zt($,P,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}let st={[Ks]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},xt={[We]:s.NEAREST,[rf]:s.NEAREST_MIPMAP_NEAREST,[wo]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},kt={[cf]:s.NEVER,[pf]:s.ALWAYS,[hf]:s.LESS,[jl]:s.LEQUAL,[uf]:s.EQUAL,[Ql]:s.GEQUAL,[df]:s.GREATER,[ff]:s.NOTEQUAL};function $t(P,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===fl||b.magFilter===wo||b.magFilter===$i||b.minFilter===Ze||b.minFilter===fl||b.minFilter===wo||b.minFilter===$i)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,xt[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,kt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==wo&&b.minFilter!==$i||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(P,b){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));let K=b.source,it=f.get(K);it===void 0&&(it={},f.set(K,it));let gt=H(b);if(gt!==P.__cacheKey){it[gt]===void 0&&(it[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),it[gt].usedTimes++;let W=it[P.__cacheKey];W!==void 0&&(it[P.__cacheKey].usedTimes--,W.usedTimes===0&&R(b)),P.__cacheKey=gt,P.__webglTexture=it[gt].texture}return $}function nt(P,b,$){return Math.floor(Math.floor(P/$)/b)}function rt(P,b,$,K){let gt=P.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,K,b.data);else{gt.sort((lt,ft)=>lt.start-ft.start);let W=0;for(let lt=1;lt<gt.length;lt++){let ft=gt[W],Q=gt[lt],ct=ft.start+ft.count,Et=nt(Q.start,b.width,4),Ut=nt(ft.start,b.width,4);Q.start<=ct+1&&Et===Ut&&nt(Q.start+Q.count-1,b.width,4)===Et?ft.count=Math.max(ft.count,Q.start+Q.count-ft.start):(++W,gt[W]=Q)}gt.length=W+1;let z=e.getParameter(s.UNPACK_ROW_LENGTH),F=e.getParameter(s.UNPACK_SKIP_PIXELS),et=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let lt=0,ft=gt.length;lt<ft;lt++){let Q=gt[lt],ct=Math.floor(Q.start/4),Et=Math.ceil(Q.count/4),Ut=ct%b.width,k=Math.floor(ct/b.width),vt=Et,ot=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,Ut,k,vt,ot,$,K,b.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,F),e.pixelStorei(s.UNPACK_SKIP_ROWS,et)}}function yt(P,b,$){let K=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=s.TEXTURE_3D);let it=Jt(P,b),gt=b.source;e.bindTexture(K,P.__webglTexture,s.TEXTURE0+$);let W=n.get(gt);if(gt.version!==W.__version||it===!0){if(e.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ot=se.getPrimaries(se.workingColorSpace),bt=b.colorSpace===Ai?null:se.getPrimaries(b.colorSpace),Tt=b.colorSpace===Ai||ot===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let F=m(b.image,!1,i.maxTextureSize);F=oe(b,F);let et=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),ft=y(b.internalFormat,et,lt,b.normalized,b.colorSpace,b.isVideoTexture);$t(K,b);let Q,ct=b.mipmaps,Et=b.isVideoTexture!==!0,Ut=W.__version===void 0||it===!0,k=gt.dataReady,vt=M(b,F);if(b.isDepthTexture)ft=S(b.format===Zi,b.type),Ut&&(Et?e.texStorage2D(s.TEXTURE_2D,1,ft,F.width,F.height):e.texImage2D(s.TEXTURE_2D,0,ft,F.width,F.height,0,et,lt,null));else if(b.isDataTexture)if(ct.length>0){Et&&Ut&&e.texStorage2D(s.TEXTURE_2D,vt,ft,ct[0].width,ct[0].height);for(let ot=0,bt=ct.length;ot<bt;ot++)Q=ct[ot],Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Q.width,Q.height,et,lt,Q.data):e.texImage2D(s.TEXTURE_2D,ot,ft,Q.width,Q.height,0,et,lt,Q.data);b.generateMipmaps=!1}else Et?(Ut&&e.texStorage2D(s.TEXTURE_2D,vt,ft,F.width,F.height),k&&rt(b,F,et,lt)):e.texImage2D(s.TEXTURE_2D,0,ft,F.width,F.height,0,et,lt,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Et&&Ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ft,ct[0].width,ct[0].height,F.depth);for(let ot=0,bt=ct.length;ot<bt;ot++)if(Q=ct[ot],b.format!==Dn)if(et!==null)if(Et){if(k)if(b.layerUpdates.size>0){let Tt=Yh(Q.width,Q.height,b.format,b.type);for(let ht of b.layerUpdates){let Ot=Q.data.subarray(ht*Tt/Q.data.BYTES_PER_ELEMENT,(ht+1)*Tt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,ht,Q.width,Q.height,1,et,Ot)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Q.width,Q.height,F.depth,et,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,ft,Q.width,Q.height,F.depth,0,Q.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Q.width,Q.height,F.depth,et,lt,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,ft,Q.width,Q.height,F.depth,0,et,lt,Q.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Et&&Ut&&e.texStorage2D(s.TEXTURE_2D,vt,ft,ct[0].width,ct[0].height);for(let ot=0,bt=ct.length;ot<bt;ot++)Q=ct[ot],b.format!==Dn?et!==null?Et?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Q.width,Q.height,et,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,ft,Q.width,Q.height,0,Q.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Q.width,Q.height,et,lt,Q.data):e.texImage2D(s.TEXTURE_2D,ot,ft,Q.width,Q.height,0,et,lt,Q.data)}else if(b.isDataArrayTexture)if(Et){if(Ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,vt,ft,F.width,F.height,F.depth),k)if(b.layerUpdates.size>0){let ot=Yh(F.width,F.height,b.format,b.type);for(let bt of b.layerUpdates){let Tt=F.data.subarray(bt*ot/F.data.BYTES_PER_ELEMENT,(bt+1)*ot/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,bt,F.width,F.height,1,et,lt,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,et,lt,F.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,F.width,F.height,F.depth,0,et,lt,F.data);else if(b.isData3DTexture)Et?(Ut&&e.texStorage3D(s.TEXTURE_3D,vt,ft,F.width,F.height,F.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,et,lt,F.data)):e.texImage3D(s.TEXTURE_3D,0,ft,F.width,F.height,F.depth,0,et,lt,F.data);else if(b.isFramebufferTexture){if(Ut)if(Et)e.texStorage2D(s.TEXTURE_2D,vt,ft,F.width,F.height);else{let ot=F.width,bt=F.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,ft,ot,bt,0,et,lt,null),ot>>=1,bt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ot=s.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),F.parentNode!==ot){ot.appendChild(F),d.add(b),ot.onpaint=bt=>{let Tt=bt.changedElements;for(let ht of d)Tt.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,F);else{let Tt=s.RGBA,ht=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,ht,Ot,F)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ct.length>0){if(Et&&Ut){let ot=te(ct[0]);e.texStorage2D(s.TEXTURE_2D,vt,ft,ot.width,ot.height)}for(let ot=0,bt=ct.length;ot<bt;ot++)Q=ct[ot],Et?k&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,et,lt,Q):e.texImage2D(s.TEXTURE_2D,ot,ft,et,lt,Q);b.generateMipmaps=!1}else if(Et){if(Ut){let ot=te(F);e.texStorage2D(s.TEXTURE_2D,vt,ft,ot.width,ot.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et,lt,F)}else e.texImage2D(s.TEXTURE_2D,0,ft,et,lt,F);g(b)&&v(K),W.__version=gt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function zt(P,b,$){if(b.image.length!==6)return;let K=Jt(P,b),it=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);let gt=n.get(it);if(it.version!==gt.__version||K===!0){e.activeTexture(s.TEXTURE0+$);let W=se.getPrimaries(se.workingColorSpace),z=b.colorSpace===Ai?null:se.getPrimaries(b.colorSpace),F=b.colorSpace===Ai||W===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);let et=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let ht=0;ht<6;ht++)!et&&!lt?ft[ht]=m(b.image[ht],!0,i.maxCubemapSize):ft[ht]=lt?b.image[ht].image:b.image[ht],ft[ht]=oe(b,ft[ht]);let Q=ft[0],ct=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),Ut=y(b.internalFormat,ct,Et,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,vt=gt.__version===void 0||K===!0,ot=it.dataReady,bt=M(b,Q);$t(s.TEXTURE_CUBE_MAP,b);let Tt;if(et){k&&vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Ut,Q.width,Q.height);for(let ht=0;ht<6;ht++){Tt=ft[ht].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];b.format!==Dn?ct!==null?k?ot&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,0,0,Dt.width,Dt.height,ct,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,Ut,Dt.width,Dt.height,0,Dt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,0,0,Dt.width,Dt.height,ct,Et,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot,Ut,Dt.width,Dt.height,0,ct,Et,Dt.data)}}}else{if(Tt=b.mipmaps,k&&vt){Tt.length>0&&bt++;let ht=te(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Ut,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(lt){k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ft[ht].width,ft[ht].height,ct,Et,ft[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ut,ft[ht].width,ft[ht].height,0,ct,Et,ft[ht].data);for(let Ot=0;Ot<Tt.length;Ot++){let Se=Tt[Ot].image[ht].image;k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,0,0,Se.width,Se.height,ct,Et,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,Ut,Se.width,Se.height,0,ct,Et,Se.data)}}else{k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ct,Et,ft[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Ut,ct,Et,ft[ht]);for(let Ot=0;Ot<Tt.length;Ot++){let Dt=Tt[Ot];k?ot&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,0,0,ct,Et,Dt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ot+1,Ut,ct,Et,Dt.image[ht])}}}g(b)&&v(s.TEXTURE_CUBE_MAP),gt.__version=it.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ct(P,b,$,K,it,gt){let W=r.convert($.format,$.colorSpace),z=r.convert($.type),F=y($.internalFormat,W,z,$.normalized,$.colorSpace),et=n.get(b),lt=n.get($);if(lt.__renderTarget=b,!et.__hasExternalTextures){let ft=Math.max(1,b.width>>gt),Q=Math.max(1,b.height>>gt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,gt,F,ft,Q,b.depth,0,W,z,null):e.texImage2D(it,gt,F,ft,Q,0,W,z,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Wt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,it,lt.__webglTexture,0,Ht(b)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,it,lt.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(P,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){let K=b.depthTexture,it=K&&K.isDepthTexture?K.type:null,gt=S(b.stencilBuffer,it),W=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Wt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),gt,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,P)}else{let K=b.textures;for(let it=0;it<K.length;it++){let gt=K[it],W=r.convert(gt.format,gt.colorSpace),z=r.convert(gt.type),F=y(gt.internalFormat,W,z,gt.normalized,gt.colorSpace);Wt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),F,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),F,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,F,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(P,b,$){let K=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(b.depthTexture);if(it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(it.__webglInit===void 0&&(it.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),it.__webglTexture===void 0){it.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),$t(s.TEXTURE_CUBE_MAP,b.depthTexture);let et=r.convert(b.depthTexture.format),lt=r.convert(b.depthTexture.type),ft;b.depthTexture.format===ei?ft=s.DEPTH_COMPONENT24:b.depthTexture.format===Zi&&(ft=s.DEPTH24_STENCIL8);for(let Q=0;Q<6;Q++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ft,b.width,b.height,0,et,lt,null)}}else Z(b.depthTexture,0);let gt=it.__webglTexture,W=Ht(b),z=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,F=b.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ei)Wt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,F,z,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,F,z,gt,0);else if(b.depthTexture.format===Zi)Wt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,F,z,gt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,F,z,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){let b=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=K}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let K=0;K<6;K++)ae(b.__webglFramebuffer[K],P,K);else{let K=P.texture.mipmaps;K&&K.length>0?ae(b.__webglFramebuffer[0],P,0):ae(b.__webglFramebuffer,P,0)}else if($){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=s.createRenderbuffer(),Vt(b.__webglDepthbuffer[K],P,!1);else{let it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,gt)}}else{let K=P.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Vt(b.__webglDepthbuffer,P,!1);else{let it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,gt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(P,b,$){let K=n.get(P);b!==void 0&&Ct(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&at(P)}function pt(P){let b=P.texture,$=n.get(P),K=n.get(b);P.addEventListener("dispose",_);let it=P.textures,gt=P.isWebGLCubeRenderTarget===!0,W=it.length>1;if(W||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=b.version,o.memory.textures++),gt){$.__webglFramebuffer=[];for(let z=0;z<6;z++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[z]=[];for(let F=0;F<b.mipmaps.length;F++)$.__webglFramebuffer[z][F]=s.createFramebuffer()}else $.__webglFramebuffer[z]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let z=0;z<b.mipmaps.length;z++)$.__webglFramebuffer[z]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(W)for(let z=0,F=it.length;z<F;z++){let et=n.get(it[z]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Wt(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let z=0;z<it.length;z++){let F=it[z];$.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[z]);let et=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),ft=y(F.internalFormat,et,lt,F.normalized,F.colorSpace,P.isXRRenderTarget===!0),Q=Ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,ft,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,$.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),$t(s.TEXTURE_CUBE_MAP,b);for(let z=0;z<6;z++)if(b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)Ct($.__webglFramebuffer[z][F],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,F);else Ct($.__webglFramebuffer[z],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);g(b)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){for(let z=0,F=it.length;z<F;z++){let et=it[z],lt=n.get(et),ft=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),$t(ft,et),Ct($.__webglFramebuffer,P,et,s.COLOR_ATTACHMENT0+z,ft,0),g(et)&&v(ft)}e.unbindTexture()}else{let z=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(z=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(z,K.__webglTexture),$t(z,b),b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)Ct($.__webglFramebuffer[F],P,b,s.COLOR_ATTACHMENT0,z,F);else Ct($.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,z,0);g(b)&&v(z),e.unbindTexture()}P.depthBuffer&&at(P)}function mt(P){let b=P.textures;for(let $=0,K=b.length;$<K;$++){let it=b[$];if(g(it)){let gt=E(P),W=n.get(it).__webglTexture;e.bindTexture(gt,W),v(gt),e.unbindTexture()}}}let _t=[],Gt=[];function Ft(P){if(P.samples>0){if(Wt(P)===!1){let b=P.textures,$=P.width,K=P.height,it=s.COLOR_BUFFER_BIT,gt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=n.get(P),z=b.length>1;if(z)for(let et=0;et<b.length;et++)e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,W.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let F=P.texture.mipmaps;F&&F.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let et=0;et<b.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let lt=n.get(b[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,$,K,0,0,$,K,it,s.NEAREST),l===!0&&(_t.length=0,Gt.length=0,_t.push(s.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(_t.push(gt),Gt.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let et=0;et<b.length;et++){e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,W.__webglColorRenderbuffer[et]);let lt=n.get(b[et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,W.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ht(P){return Math.min(i.maxSamples,P.samples)}function Wt(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(P){let b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function oe(P,b){let $=P.colorSpace,K=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Hr&&$!==Ai&&(se.getTransfer($)===de?(K!==Dn||it!==vn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",$)),b}function te(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=ut,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cy(s,t){function e(n,i=Ai){let r,o=se.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return s.BYTE;if(n===Uh)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===pl)return s.INT;if(n===Yn)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===$n)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===kh)return s.RGB;if(n===Dn)return s.RGBA;if(n===ei)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===xl)return s.RED;if(n===_l)return s.RED_INTEGER;if(n===Ki)return s.RG;if(n===vl)return s.RG_INTEGER;if(n===yl)return s.RGBA_INTEGER;if(n===Ao||n===Eo||n===To||n===Co)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Sl||n===Ml||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Ro||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===El)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cl)return r.COMPRESSED_R11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Ll||n===Nl||n===Dl||n===Fl||n===Ul||n===Bl||n===Ol||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Xl||n===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ql)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Zl||n===Io||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:hy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lu=class extends ni{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new au,g={},v=e.getContextAttributes(),E=null,y=null,S=[],M=[],C=new St,_=null,A=null,R=new $e;R.viewport=new Ce;let L=new $e;L.viewport=new Ce;let B=[R,L],N=new hl,I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let rt=S[nt];return rt===void 0&&(rt=new tr,S[nt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(nt){let rt=S[nt];return rt===void 0&&(rt=new tr,S[nt]=rt),rt.getGripSpace()},this.getHand=function(nt){let rt=S[nt];return rt===void 0&&(rt=new tr,S[nt]=rt),rt.getHandSpace()};function U(nt){let rt=M.indexOf(nt.inputSource);if(rt===-1)return;let yt=S[rt];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,c||o),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let nt=0;nt<S.length;nt++){let rt=M[nt];rt!==null&&(M[nt]=null,S[nt].disconnect(rt))}I=null,D=null,m.reset();for(let nt in g)delete g[nt];if(t.setRenderTarget(E),f=null,h=null,d=null,i=null,y=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),A!==null){let nt=A.camera;nt.fov=A.fov,nt.zoom=A.zoom,nt.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(nt){if(i=nt,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,zt=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?Zi:ei,zt=v.stencil?fr:Yn);let Vt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new _n(h.textureWidth,h.textureHeight,{format:Dn,type:vn,depthTexture:new Gi(h.textureWidth,h.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(nt){for(let rt=0;rt<nt.removed.length;rt++){let yt=nt.removed[rt],zt=M.indexOf(yt);zt>=0&&(M[zt]=null,S[zt].disconnect(yt))}for(let rt=0;rt<nt.added.length;rt++){let yt=nt.added[rt],zt=M.indexOf(yt);if(zt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=M.length){M.push(yt),zt=Vt;break}else if(M[Vt]===null){M[Vt]=yt,zt=Vt;break}if(zt===-1)break}let Ct=S[zt];Ct&&Ct.connect(yt)}}let q=new V,X=new V;function Y(nt,rt,yt){q.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);let zt=q.distanceTo(X),Ct=rt.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,ae=Ct[14]/(Ct[10]-1),at=Ct[14]/(Ct[10]+1),ut=(Ct[9]+1)/Ct[5],pt=(Ct[9]-1)/Ct[5],mt=(Ct[8]-1)/Ct[0],_t=(Vt[8]+1)/Vt[0],Gt=ae*mt,Ft=ae*_t,Ht=zt/(-mt+_t),Wt=Ht*-mt;if(rt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Wt),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(rt.projectionMatrix),nt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let O=ae+Ht,oe=at+Ht,te=Gt-Wt,P=Ft+(zt-Wt),b=ut*at/oe*O,$=pt*at/oe*O;nt.projectionMatrix.makePerspective(te,P,b,$,O,oe),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function st(nt,rt){rt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(rt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(i===null)return;let rt=nt.near,yt=nt.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),N.near=L.near=R.near=rt,N.far=L.far=R.far=yt,(I!==N.near||D!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,D=N.far),N.layers.mask=nt.layers.mask|6,R.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let zt=nt.parent,Ct=N.cameras;st(N,zt);for(let Vt=0;Vt<Ct.length;Vt++)st(Ct[Vt],zt);Ct.length===2?Y(N,R,L):N.projectionMatrix.copy(R.projectionMatrix),A===null&&nt.isPerspectiveCamera&&(A={camera:nt,fov:nt.fov,zoom:nt.zoom}),xt(nt,N,zt)};function xt(nt,rt,yt){yt===null?nt.matrix.copy(rt.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(rt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(rt.projectionMatrix),nt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ba*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(nt){l=nt,h!==null&&(h.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(nt){return g[nt]};let kt=null;function $t(nt,rt){if(u=rt.getViewerPose(c||o),p=rt,u!==null){let yt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let zt=!1;yt.length!==N.cameras.length&&(N.cameras.length=0,zt=!0);for(let at=0;at<yt.length;at++){let ut=yt[at],pt=null;if(f!==null)pt=f.getViewport(ut);else{let _t=d.getViewSubImage(h,ut);pt=_t.viewport,at===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let mt=B[at];mt===void 0&&(mt=new $e,mt.layers.enable(at),mt.viewport=new Ce,B[at]=mt),mt.matrix.fromArray(ut.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ut.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(pt.x,pt.y,pt.width,pt.height),at===0&&(N.matrix.copy(mt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),zt===!0&&N.cameras.push(mt)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let at=d.getDepthInformation(yt[0]);at&&at.isValid&&at.texture&&m.init(at,i.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let at=0;at<yt.length;at++){let ut=yt[at].camera;if(ut){let pt=g[ut];pt||(pt=new io,g[ut]=pt);let mt=d.getCameraImage(ut);pt.sourceTexture=mt}}}}for(let yt=0;yt<S.length;yt++){let zt=M[yt],Ct=S[yt];zt!==null&&Ct!==void 0&&Ct.update(zt,rt,c||o)}kt&&kt(nt,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}let Jt=new Zf;Jt.setAnimationLoop($t),this.setAnimationLoop=function(nt){kt=nt},this.dispose=function(){}}},dy=new fe,ep=new Zt;ep.set(-1,0,0,0,1,0,0,0,1);function fy(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),E=v.envMap,y=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ep),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function py(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(m(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",v));let C=S.program;n.updateUBOMapping(y,C);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let S=d();y.__bindingPointIndex=S;let M=s.createBuffer(),C=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=i[y.id],M=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,A=M.length;_<A;_++){let R=M[_];if(Array.isArray(R))for(let L=0,B=R.length;L<B;L++)f(R[L],_,L,C);else f(R,_,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,M,C){if(x(y,S,M,C)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let L=0;L<A.length;L++){let B=A[L],N=g(B);p(B,y.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function x(y,S,M,C){let _=y.value,A=S+"_"+M;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let R=C[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let S=y.uniforms,M=0,C=16;for(let A=0,R=S.length;A<R;A++){let L=Array.isArray(S[A])?S[A]:[S[A]];for(let B=0,N=L.length;B<N;B++){let I=L[B],D=Array.isArray(I.value)?I.value:[I.value];for(let U=0,H=D.length;U<H;U++){let Z=D[U],q=g(Z),X=M%C,Y=X%q.boundary,st=X+Y;M+=Y,st!==0&&C-st<q.storage&&(M+=C-st),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=q.storage}}}let _=M%C;return _>0&&(M+=C-_),y.__size=M,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){let S=y.target;S.removeEventListener("dispose",v);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function E(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:E}}var my=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function gy(){return ri===null&&(ri=new Qr(my,16,16,Ki,$n),ri.name="DFG_LUT",ri.minFilter=Ze,ri.magFilter=Ze,ri.wrapS=ti,ri.wrapT=ti,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var sc=class{constructor(t={}){let{canvas:e=gf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([yl,vl,_l]),g=new Set([vn,Yn,dr,fr,ml,gl]),v=new Uint32Array(4),E=new Int32Array(4),y=new V,S=null,M=null,C=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,B=null,N=null,I=null,D=null;this._outputColorSpace=Ye;let U=0,H=0,Z=null,q=-1,X=null,Y=new Ce,st=new Ce,xt=null,kt=new Kt(0),$t=0,Jt=e.width,nt=e.height,rt=1,yt=null,zt=null,Ct=new Ce(0,0,Jt,nt),Vt=new Ce(0,0,Jt,nt),ae=!1,at=new nr,ut=!1,pt=!1,mt=new fe,_t=new V,Gt=new Ce,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Wt(){return Z===null?rt:1}let O=n;function oe(w,G){return e.getContext(w,G)}let te,P,b,$,K,it,gt,W,z,F,et,lt,ft,Q,ct,Et,Ut,k,vt,ot,bt,Tt,ht;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",On,!1),O===null){let G="webgl2";if(O=oe(G,w),O===null)throw oe(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(w){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Yt("WebGLRenderer: "+w.message),w}function Ot(){te=new M_(O),te.init(),bt=new cy(O,te),P=new f_(O,te,t,bt),b=new ay(O,te),P.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),N=O.createFramebuffer(),I=O.createFramebuffer(),D=O.createFramebuffer(),$=new E_(O),K=new Yv,it=new ly(O,te,b,K,P,bt,$),gt=new S_(R),W=new Cg(O),Tt=new u_(O,W),z=new w_(O,W,$,Tt),F=new C_(O,z,W,Tt,$),k=new T_(O,P,it),ct=new p_(K),et=new Xv(R,gt,te,P,Tt,ct),lt=new fy(R,K),ft=new Zv,Q=new ey(te),Ut=new h_(R,gt,b,F,p,l),Et=new oy(R,F,P),ht=new py(O,$,P,b),vt=new d_(O,te,$),ot=new A_(O,te,$),$.programs=et.programs,R.capabilities=P,R.extensions=te,R.properties=K,R.renderLists=ft,R.shadowMap=Et,R.state=b,R.info=$}x!==vn&&(A=new I_(x,e.width,e.height,a,i,r));let Dt=new lu(R,O);this.xr=Dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(w){w!==void 0&&(rt=w,this.setSize(Jt,nt,!1))},this.getSize=function(w){return w.set(Jt,nt)},this.setSize=function(w,G,tt=!0){if(Dt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=w,nt=G,e.width=Math.floor(w*rt),e.height=Math.floor(G*rt),tt===!0&&(e.style.width=w+"px",e.style.height=G+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Jt*rt,nt*rt).floor()},this.setDrawingBufferSize=function(w,G,tt){Jt=w,nt=G,rt=tt,e.width=Math.floor(w*tt),e.height=Math.floor(G*tt),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(x===vn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,G,tt,J){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,G,tt,J),b.viewport(Y.copy(Ct).multiplyScalar(rt).round())},this.getScissor=function(w){return w.copy(Vt)},this.setScissor=function(w,G,tt,J){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,G,tt,J),b.scissor(st.copy(Vt).multiplyScalar(rt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){b.setScissorTest(ae=w)},this.setOpaqueSort=function(w){yt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,tt=!0){let J=0;if(w){let j=!1;if(Z!==null){let At=Z.texture.format;j=m.has(At)}if(j){let At=Z.texture.type,It=g.has(At),wt=Ut.getClearColor(),Pt=Ut.getClearAlpha(),Bt=wt.r,jt=wt.g,ne=wt.b;It?(v[0]=Bt,v[1]=jt,v[2]=ne,v[3]=Pt,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Bt,E[1]=jt,E[2]=ne,E[3]=Pt,O.clearBufferiv(O.COLOR,0,E))}else J|=O.COLOR_BUFFER_BIT}G&&(J|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Ut.dispose(),ft.dispose(),Q.dispose(),K.dispose(),gt.dispose(),F.dispose(),Tt.dispose(),ht.dispose(),et.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Zu),Dt.removeEventListener("sessionend",Ku),ds.stop()};function Se(w){w.preventDefault(),Gh("WebGLRenderer: Context Lost."),L=!0}function he(){Gh("WebGLRenderer: Context Restored."),L=!1;let w=$.autoReset,G=Et.enabled,tt=Et.autoUpdate,J=Et.needsUpdate,j=Et.type;Ot(),$.autoReset=w,Et.enabled=G,Et.autoUpdate=tt,Et.needsUpdate=J,Et.type=j}function On(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jn(w){let G=w.target;G.removeEventListener("dispose",Jn),dm(G)}function dm(w){fm(w),K.remove(w)}function fm(w){let G=K.get(w).programs;G!==void 0&&(G.forEach(function(tt){et.releaseProgram(tt)}),w.isShaderMaterial&&et.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,tt,J,j,At){G===null&&(G=Ft);let It=j.isMesh&&j.matrixWorld.determinantAffine()<0,wt=gm(w,G,tt,J,j);b.setMaterial(J,It);let Pt=tt.index,Bt=1;if(J.wireframe===!0){if(Pt=z.getWireframeAttribute(tt),Pt===void 0)return;Bt=2}let jt=tt.drawRange,ne=tt.attributes.position,Lt=jt.start*Bt,ue=(jt.start+jt.count)*Bt;At!==null&&(Lt=Math.max(Lt,At.start*Bt),ue=Math.min(ue,(At.start+At.count)*Bt)),Pt!==null?(Lt=Math.max(Lt,0),ue=Math.min(ue,Pt.count)):ne!=null&&(Lt=Math.max(Lt,0),ue=Math.min(ue,ne.count));let Fe=ue-Lt;if(Fe<0||Fe===1/0)return;Tt.setup(j,J,wt,tt,Pt);let Ae,_e=vt;if(Pt!==null&&(Ae=W.get(Pt),_e=ot,_e.setIndex(Ae)),j.isMesh)J.wireframe===!0?(b.setLineWidth(J.wireframeLinewidth*Wt()),_e.setMode(O.LINES)):_e.setMode(O.TRIANGLES);else if(j.isLine){let en=J.linewidth;en===void 0&&(en=1),b.setLineWidth(en*Wt()),j.isLineSegments?_e.setMode(O.LINES):j.isLineLoop?_e.setMode(O.LINE_LOOP):_e.setMode(O.LINE_STRIP)}else j.isPoints?_e.setMode(O.POINTS):j.isSprite&&_e.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(te.get("WEBGL_multi_draw"))_e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let en=j._multiDrawStarts,Rt=j._multiDrawCounts,hn=j._multiDrawCount,le=Pt?W.get(Pt).bytesPerElement:1,Rn=K.get(J).currentProgram.getUniforms();for(let jn=0;jn<hn;jn++)Rn.setValue(O,"_gl_DrawID",jn),_e.render(en[jn]/le,Rt[jn])}else if(j.isInstancedMesh)_e.renderInstances(Lt,Fe,j.count);else if(tt.isInstancedBufferGeometry){let en=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Rt=Math.min(tt.instanceCount,en);_e.renderInstances(Lt,Fe,Rt)}else _e.render(Lt,Fe)};function $u(w,G,tt,J){B!==null&&w.isNodeMaterial&&B.setObject(J,w),ut===!0&&ct.setState(w,tt,!1),w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,ea(w,G,J),w.side=Xi,w.needsUpdate=!0,ea(w,G,J),w.side=Ln):ea(w,G,J)}this.compile=function(w,G,tt=null){tt===null&&(tt=w),B!==null&&B.renderStart(w,G,tt),M=Q.get(tt),M.init(G),_.push(M),tt.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),w!==tt&&w.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),B!==null&&B.updateLights(M.state.lightsArray),pt=this.localClippingEnabled,ut=ct.init(this.clippingPlanes,pt),ut===!0&&ct.setGlobalState(this.clippingPlanes,G),B!==null&&Et.render(M.state.shadowsArray,tt,G);let J=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let At=j.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let wt=At[It];$u(wt,tt,G,j),J.add(wt)}else $u(At,tt,G,j),J.add(At)}),M=_.pop(),B!==null&&B.renderEnd(),J},this.compileAsync=function(w,G,tt=null){let J=this.compile(w,G,tt);return new Promise(j=>{function At(){if(J.forEach(function(It){let Pt=K.get(It).currentProgram;(Pt===void 0||Pt.isReady())&&J.delete(It)}),J.size===0){j(w);return}setTimeout(At,10)}te.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Dc=null;function pm(w){Dc&&Dc(w)}function Zu(){ds.stop()}function Ku(){ds.start()}let ds=new Zf;ds.setAnimationLoop(pm),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(w){Dc=w,Dt.setAnimationLoop(w),w===null?ds.stop():ds.start()},Dt.addEventListener("sessionstart",Zu),Dt.addEventListener("sessionend",Ku),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(w,G);let tt=Dt.enabled===!0&&Dt.isPresenting===!0,J=A!==null&&(Z===null||tt)&&A.begin(R,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(G),G=Dt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,G,Z),M=Q.get(w,_.length),M.init(G),M.state.textureUnits=it.getTextureUnits(),_.push(M),mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),at.setFromProjectionMatrix(mt,Hn,G.reversedDepth),pt=this.localClippingEnabled,ut=ct.init(this.clippingPlanes,pt),S=ft.get(w,C.length),S.init(),C.push(S),Dt.enabled===!0&&Dt.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&Fc(It,G,-1/0,R.sortObjects)}Fc(w,G,0,R.sortObjects),S.finish(),B!==null&&B.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(yt,zt),Ht=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Ht&&Ut.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&ct.beginShadows();let j=M.state.shadowsArray;if(Et.render(j,w,G),ut===!0&&ct.endShadows(),(J&&A.hasRenderPass())===!1){let It=S.opaque,wt=S.transmissive;if(M.setupLights(),G.isArrayCamera){let Pt=G.cameras;if(wt.length>0)for(let Bt=0,jt=Pt.length;Bt<jt;Bt++){let ne=Pt[Bt];ju(It,wt,w,ne)}Ht&&Ut.render(w);for(let Bt=0,jt=Pt.length;Bt<jt;Bt++){let ne=Pt[Bt];Ju(S,w,ne,ne.viewport)}}else wt.length>0&&ju(It,wt,w,G),Ht&&Ut.render(w),Ju(S,w,G)}Z!==null&&H===0&&(it.updateMultisampleRenderTarget(Z),it.updateRenderTargetMipmap(Z)),J&&A.end(R),w.isScene===!0&&w.onAfterRender(R,w,G),Tt.resetDefaultState(),q=-1,X=null,_.pop(),_.length>0?(M=_[_.length-1],it.setTextureUnits(M.state.textureUnits),ut===!0&&ct.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,B!==null&&B.renderEnd()};function Fc(w,G,tt,J){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(at)){J&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);let It=F.update(w),wt=w.material;wt.visible&&S.push(w,It,wt,tt,Gt.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(at))){let It=F.update(w),wt=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Gt.copy(It.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(wt)){let Pt=It.groups;for(let Bt=0,jt=Pt.length;Bt<jt;Bt++){let ne=Pt[Bt],Lt=wt[ne.materialIndex];Lt&&Lt.visible&&S.push(w,It,Lt,tt,Gt.z,ne,G)}}else wt.visible&&S.push(w,It,wt,tt,Gt.z,null,G)}}let At=w.children;for(let It=0,wt=At.length;It<wt;It++)Fc(At[It],G,tt,J)}function Ju(w,G,tt,J){let{opaque:j,transmissive:At,transparent:It}=w;M.setupLightsView(tt),ut===!0&&ct.setGlobalState(R.clippingPlanes,tt),J&&b.viewport(Y.copy(J)),j.length>0&&ta(j,G,tt),At.length>0&&ta(At,G,tt),It.length>0&&ta(It,G,tt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ju(w,G,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[J.id]===void 0){let Lt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[J.id]=new _n(1,1,{generateMipmaps:!0,type:Lt?$n:vn,minFilter:$i,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let At=M.state.transmissionRenderTarget[J.id],It=J.viewport||Y;At.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(At),R.getClearColor(kt),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),Ht&&Ut.render(tt);let jt=R.toneMapping;R.toneMapping=Xn;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),M.setupLightsView(J),ut===!0&&ct.setGlobalState(R.clippingPlanes,J),ta(w,tt,J),it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At),te.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ue=0,Fe=G.length;ue<Fe;ue++){let Ae=G[ue],{object:_e,geometry:en,material:Rt,group:hn}=Ae;if(Rt.side===Ln&&_e.layers.test(J.layers)){let le=Rt.side;Rt.side=fn,Rt.needsUpdate=!0,Qu(_e,tt,J,en,Rt,hn),Rt.side=le,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(it.updateMultisampleRenderTarget(At),it.updateRenderTargetMipmap(At))}R.setRenderTarget(wt,Pt,Bt),R.setClearColor(kt,$t),ne!==void 0&&(J.viewport=ne),R.toneMapping=jt}function ta(w,G,tt){let J=G.isScene===!0?G.overrideMaterial:null;for(let j=0,At=w.length;j<At;j++){let It=w[j],{object:wt,geometry:Pt,group:Bt}=It,jt=It.material;jt.allowOverride===!0&&J!==null&&(jt=J),wt.layers.test(tt.layers)&&Qu(wt,G,tt,Pt,jt,Bt)}}function Qu(w,G,tt,J,j,At){B!==null&&j.isNodeMaterial&&B.setObject(w,j),w.onBeforeRender(R,G,tt,J,j,At),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(R,G,tt,J,w,At),j.transparent===!0&&j.side===Ln&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,R.renderBufferDirect(tt,G,J,j,w,At),j.side=Xi,j.needsUpdate=!0,R.renderBufferDirect(tt,G,J,j,w,At),j.side=Ln):R.renderBufferDirect(tt,G,J,j,w,At),w.onAfterRender(R,G,tt,J,j,At)}function ea(w,G,tt){G.isScene!==!0&&(G=Ft);let J=K.get(w),j=M.state.lights,At=M.state.shadowsArray,It=j.state.version,wt=et.getParameters(w,j.state,At,G,tt,M.state.lightProbeGridArray),Pt=et.getProgramCacheKey(wt),Bt=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;let jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=gt.get(w.envMap||J.environment,jt),J.envMapRotation=J.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Bt===void 0&&(w.addEventListener("dispose",Jn),Bt=new Map,J.programs=Bt);let ne=Bt.get(Pt);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===It)return ed(w,wt),ne}else wt.uniforms=et.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,tt,wt),w.onBeforeCompile(wt,R),ne=et.acquireProgram(wt,Pt),Bt.set(Pt,ne),J.uniforms=wt.uniforms;let Lt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),ed(w,wt),J.needsLights=_m(w),J.lightsStateVersion=It,J.needsLights&&(Lt.ambientLightColor.value=j.state.ambient,Lt.lightProbe.value=j.state.probe,Lt.sunLights.value=j.state.sun,Lt.sunLightShadows.value=j.state.sunShadow,Lt.directionalLights.value=j.state.directional,Lt.directionalLightShadows.value=j.state.directionalShadow,Lt.spotLights.value=j.state.spot,Lt.spotLightShadows.value=j.state.spotShadow,Lt.rectAreaLights.value=j.state.rectArea,Lt.ltc_1.value=j.state.rectAreaLTC1,Lt.ltc_2.value=j.state.rectAreaLTC2,Lt.pointLights.value=j.state.point,Lt.pointLightShadows.value=j.state.pointShadow,Lt.hemisphereLights.value=j.state.hemi,Lt.sunShadowMatrix.value=j.state.sunShadowMatrix,Lt.sunShadowCascade.value=j.state.sunShadowCascade,Lt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Lt.spotLightMatrix.value=j.state.spotLightMatrix,Lt.spotLightMap.value=j.state.spotLightMap,Lt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=M.state.lightProbeGridArray.length>0,J.currentProgram=ne,J.uniformsList=null,ne}function td(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=xr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ed(w,G){let tt=K.get(w);tt.outputColorSpace=G.outputColorSpace,tt.batching=G.batching,tt.batchingColor=G.batchingColor,tt.instancing=G.instancing,tt.instancingColor=G.instancingColor,tt.instancingMorph=G.instancingMorph,tt.skinning=G.skinning,tt.morphTargets=G.morphTargets,tt.morphNormals=G.morphNormals,tt.morphColors=G.morphColors,tt.morphTargetsCount=G.morphTargetsCount,tt.numClippingPlanes=G.numClippingPlanes,tt.numIntersection=G.numClipIntersection,tt.vertexAlphas=G.vertexAlphas,tt.vertexTangents=G.vertexTangents,tt.toneMapping=G.toneMapping}function mm(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let tt=0,J=w.length;tt<J;tt++){let j=w[tt];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function gm(w,G,tt,J,j){G.isScene!==!0&&(G=Ft),it.resetTextureUnits();let At=G.fog,It=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,wt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:se.workingColorSpace,Pt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Bt=gt.get(J.envMap||It,Pt),jt=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ne=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Lt=!!tt.morphAttributes.position,ue=!!tt.morphAttributes.normal,Fe=!!tt.morphAttributes.color,Ae=Xn;J.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let _e=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,en=_e!==void 0?_e.length:0,Rt=K.get(J),hn=M.state.lights;if(ut===!0&&(pt===!0||w!==X)){let Me=w===X&&J.id===q;ct.setState(J,w,Me)}let le=!1;J.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==hn.state.version||Rt.outputColorSpace!==wt||j.isBatchedMesh&&Rt.batching===!1||!j.isBatchedMesh&&Rt.batching===!0||j.isBatchedMesh&&Rt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Rt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Rt.instancing===!1||!j.isInstancedMesh&&Rt.instancing===!0||j.isSkinnedMesh&&Rt.skinning===!1||!j.isSkinnedMesh&&Rt.skinning===!0||j.isInstancedMesh&&Rt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Rt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Rt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Rt.instancingMorph===!1&&j.morphTexture!==null||Rt.envMap!==Bt||J.fog===!0&&Rt.fog!==At||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ct.numPlanes||Rt.numIntersection!==ct.numIntersection)||Rt.vertexAlphas!==jt||Rt.vertexTangents!==ne||Rt.morphTargets!==Lt||Rt.morphNormals!==ue||Rt.morphColors!==Fe||Rt.toneMapping!==Ae||Rt.morphTargetsCount!==en||!!Rt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Rt.__version=J.version);let Rn=Rt.currentProgram;le===!0&&(Rn=ea(J,G,j),B&&J.isNodeMaterial&&B.onUpdateProgram(J,Rn,Rt));let jn=!1,Ni=!1,Ls=!1,ge=Rn.getUniforms(),De=Rt.uniforms;if(b.useProgram(Rn.program)&&(jn=!0,Ni=!0,Ls=!0),J.id!==q&&(q=J.id,Ni=!0),Rt.needsLights){let Me=mm(M.state.lightProbeGridArray,j);Rt.lightProbeGrid!==Me&&(Rt.lightProbeGrid=Me,Ni=!0)}if(jn||X!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(O,"projectionMatrix",w.projectionMatrix),ge.setValue(O,"viewMatrix",w.matrixWorldInverse);let Fi=ge.map.cameraPosition;Fi!==void 0&&Fi.setValue(O,_t.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&ge.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ge.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Ni=!0,Ls=!0)}if(Rt.needsLights&&(hn.state.sunShadowMap.length>0&&ge.setValue(O,"sunShadowMap",hn.state.sunShadowMap,it),hn.state.directionalShadowMap.length>0&&ge.setValue(O,"directionalShadowMap",hn.state.directionalShadowMap,it),hn.state.spotShadowMap.length>0&&ge.setValue(O,"spotShadowMap",hn.state.spotShadowMap,it),hn.state.pointShadowMap.length>0&&ge.setValue(O,"pointShadowMap",hn.state.pointShadowMap,it)),j.isSkinnedMesh){ge.setOptional(O,j,"bindMatrix"),ge.setOptional(O,j,"bindMatrixInverse");let Me=j.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ge.setValue(O,"boneTexture",Me.boneTexture,it))}j.isBatchedMesh&&(ge.setOptional(O,j,"batchingTexture"),ge.setValue(O,"batchingTexture",j._matricesTexture,it),ge.setOptional(O,j,"batchingIdTexture"),ge.setValue(O,"batchingIdTexture",j._indirectTexture,it),ge.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&ge.setValue(O,"batchingColorTexture",j._colorsTexture,it));let Di=tt.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&k.update(j,tt,Rn),(Ni||Rt.receiveShadow!==j.receiveShadow)&&(Rt.receiveShadow=j.receiveShadow,ge.setValue(O,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(De.envMapIntensity.value=G.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=gy()),Ni){if(ge.setValue(O,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&xm(De,Ls),At&&J.fog===!0&&lt.refreshFogUniforms(De,At),lt.refreshMaterialUniforms(De,J,rt,nt,M.state.transmissionRenderTarget[w.id]),Rt.needsLights&&Rt.lightProbeGrid){let Me=Rt.lightProbeGrid;De.probesSH.value=Me.texture,De.probesMin.value.copy(Me.boundingBox.min),De.probesMax.value.copy(Me.boundingBox.max),De.probesResolution.value.copy(Me.resolution)}xr.upload(O,td(Rt),De,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(xr.upload(O,td(Rt),De,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ge.setValue(O,"center",j.center),ge.setValue(O,"modelViewMatrix",j.modelViewMatrix),ge.setValue(O,"normalMatrix",j.normalMatrix),ge.setValue(O,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let Me=J.uniformsGroups;for(let Fi=0,Ns=Me.length;Fi<Ns;Fi++){let id=Me[Fi];ht.update(id,Rn),ht.bind(id,Rn)}}return Rn}function xm(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function _m(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,G,tt){let J=K.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(w.texture).__webglTexture=G,K.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let tt=K.get(w);tt.__webglFramebuffer=G,tt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,tt=0){Z=w,U=G,H=tt;let J=null,j=!1,At=!1;if(w){let wt=K.get(w);if(wt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(O.FRAMEBUFFER,wt.__webglFramebuffer),Y.copy(w.viewport),st.copy(w.scissor),xt=w.scissorTest,b.viewport(Y),b.scissor(st),b.setScissorTest(xt),q=-1;return}else if(wt.__webglFramebuffer===void 0)it.setupRenderTarget(w);else if(wt.__hasExternalTextures)it.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let jt=w.depthTexture;if(wt.__boundDepthTexture!==jt){if(jt!==null&&K.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(w)}}let Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(At=!0);let Bt=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[G])?J=Bt[G][tt]:J=Bt[G],j=!0):w.samples>0&&it.useMultisampledRTT(w)===!1?J=K.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?J=Bt[tt]:J=Bt,Y.copy(w.viewport),st.copy(w.scissor),xt=w.scissorTest}else Y.copy(Ct).multiplyScalar(rt).floor(),st.copy(Vt).multiplyScalar(rt).floor(),xt=ae;if(tt!==0&&(J=N),b.bindFramebuffer(O.FRAMEBUFFER,J)&&b.drawBuffers(w,J),b.viewport(Y),b.scissor(st),b.setScissorTest(xt),j){let wt=K.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,tt)}else if(At){let wt=G;for(let Pt=0;Pt<w.textures.length;Pt++){let Bt=K.get(w.textures[Pt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pt,Bt.__webglTexture,tt,wt)}}else if(w!==null&&tt!==0){let wt=K.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,tt)}q=-1};function nd(w){let G=K.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=P.textureFormatReadable(w.format),G.__typeReadable=P.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,tt,J,j,At,It,wt=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt){b.bindFramebuffer(O.FRAMEBUFFER,Pt);try{let Bt=w.textures[wt],jt=Bt.format,ne=Bt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Lt=nd(Bt);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-J&&tt>=0&&tt<=w.height-j&&O.readPixels(G,tt,J,j,bt.convert(jt),bt.convert(ne),At)}finally{let Bt=Z!==null?K.get(Z).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,G,tt,J,j,At,It,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt)if(G>=0&&G<=w.width-J&&tt>=0&&tt<=w.height-j){b.bindFramebuffer(O.FRAMEBUFFER,Pt);let Bt=w.textures[wt],jt=Bt.format,ne=Bt.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+wt);let Lt=nd(Bt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.bufferData(O.PIXEL_PACK_BUFFER,At.byteLength,O.STREAM_READ),O.readPixels(G,tt,J,j,bt.convert(jt),bt.convert(ne),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Fe=Z!==null?K.get(Z).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,Fe);let Ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _f(O,Ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,At),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ue),O.deleteSync(Ae),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,tt=0){let J=Math.pow(2,-tt),j=Math.floor(w.image.width*J),At=Math.floor(w.image.height*J),It=G!==null?G.x:0,wt=G!==null?G.y:0;it.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,tt,0,0,It,wt,j,At),b.unbindTexture()},this.copyTextureToTexture=function(w,G,tt=null,J=null,j=0,At=0){let It,wt,Pt,Bt,jt,ne,Lt,ue,Fe,Ae=w.isCompressedTexture?w.mipmaps[At]:w.image;if(tt!==null)It=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Pt=tt.isBox3?tt.max.z-tt.min.z:1,Bt=tt.min.x,jt=tt.min.y,ne=tt.isBox3?tt.min.z:0;else{let De=Math.pow(2,-j);It=Math.floor(Ae.width*De),wt=Math.floor(Ae.height*De),w.isDataArrayTexture?Pt=Ae.depth:w.isData3DTexture?Pt=Math.floor(Ae.depth*De):Pt=1,Bt=0,jt=0,ne=0}J!==null?(Lt=J.x,ue=J.y,Fe=J.z):(Lt=0,ue=0,Fe=0);let _e=bt.convert(G.format),en=bt.convert(G.type),Rt;G.isData3DTexture?(it.setTexture3D(G,0),Rt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(it.setTexture2DArray(G,0),Rt=O.TEXTURE_2D_ARRAY):(it.setTexture2D(G,0),Rt=O.TEXTURE_2D),b.activeTexture(O.TEXTURE0),b.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let hn=b.getParameter(O.UNPACK_ROW_LENGTH),le=b.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=b.getParameter(O.UNPACK_SKIP_PIXELS),jn=b.getParameter(O.UNPACK_SKIP_ROWS),Ni=b.getParameter(O.UNPACK_SKIP_IMAGES);b.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(O.UNPACK_SKIP_ROWS,jt),b.pixelStorei(O.UNPACK_SKIP_IMAGES,ne);let Ls=w.isDataArrayTexture||w.isData3DTexture,ge=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let De=K.get(w),Di=K.get(G),Me=K.get(De.__renderTarget),Fi=K.get(Di.__renderTarget);b.bindFramebuffer(O.READ_FRAMEBUFFER,Me.__webglFramebuffer),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ns=0;Ns<Pt;Ns++)Ls&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(w).__webglTexture,j,ne+Ns),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.get(G).__webglTexture,At,Fe+Ns)),O.blitFramebuffer(Bt,jt,It,wt,Lt,ue,It,wt,O.DEPTH_BUFFER_BIT,O.NEAREST);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||K.has(w)){let De=K.get(w),Di=K.get(G);b.bindFramebuffer(O.READ_FRAMEBUFFER,I),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let Me=0;Me<Pt;Me++)Ls?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.__webglTexture,j,ne+Me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,De.__webglTexture,j),ge?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Di.__webglTexture,At,Fe+Me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Di.__webglTexture,At),j!==0?O.blitFramebuffer(Bt,jt,It,wt,Lt,ue,It,wt,O.COLOR_BUFFER_BIT,O.NEAREST):ge?O.copyTexSubImage3D(Rt,At,Lt,ue,Fe+Me,Bt,jt,It,wt):O.copyTexSubImage2D(Rt,At,Lt,ue,Bt,jt,It,wt);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Rt,At,Lt,ue,Fe,It,wt,Pt,_e,en,Ae.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,At,Lt,ue,Fe,It,wt,Pt,_e,Ae.data):O.texSubImage3D(Rt,At,Lt,ue,Fe,It,wt,Pt,_e,en,Ae):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,At,Lt,ue,It,wt,_e,en,Ae.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,At,Lt,ue,Ae.width,Ae.height,_e,Ae.data):O.texSubImage2D(O.TEXTURE_2D,At,Lt,ue,It,wt,_e,en,Ae);b.pixelStorei(O.UNPACK_ROW_LENGTH,hn),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),b.pixelStorei(O.UNPACK_SKIP_ROWS,jn),b.pixelStorei(O.UNPACK_SKIP_IMAGES,Ni),At===0&&G.generateMipmaps&&O.generateMipmap(Rt),b.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&it.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?it.setTextureCube(w,0):w.isData3DTexture?it.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?it.setTexture2DArray(w,0):it.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){U=0,H=0,Z=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var es={ug:-3.15,eg:0,og:3.15,dg:6.3},Do=.12,Ji=2.2,ji=[],np=[],hu=[],ac=[],cu=[],ip=[],xy=0;function we(s,t,e,n,i,r,o={}){let a={id:`${s}-${++xy}`,kind:t,size:e,position:n,rotation:[0,0,0],color:i,floor:r,...o};return np.push(a),a}function Qe(s,t,e,n,i,r,o,a){let l=es[e]??0,c={id:s,name:t,floor:e,color:a,bounds:{minX:n,maxX:n+r,minY:l,maxY:l+(e==="dg"?4.5:3.15),minZ:i,maxZ:i+o}};return ji.push(c),c}Qe("living","Wohnzimmer","eg",8.5,0,5.5,7,"#75988c");Qe("dining","Esszimmer","eg",0,0,5.5,7,"#d5b387");Qe("kitchen","K\xFCche","eg",0,7,5.5,5,"#8ead9e");Qe("hall","Eingang & Flur","eg",5.5,5,3,7,"#d6c4aa");Qe("cloakroom","Garderobe","eg",8.5,7,2.5,5,"#bdc6b4");Qe("guest-wc","G\xE4ste-WC","eg",11,7,3,3,"#a7bdc0");Qe("storage","Abstellraum","eg",11,10,3,2,"#c5b89c");Qe("stairs","Treppenhaus \xB7 EG","eg",5.5,0,3,5,"#d2b694");for(let[s,t,e]of[["ug",["Werkstatt","Waschk\xFCche","Vorratsraum","Haustechnik"],["workshop","laundry","pantry","utility"]],["og",["Schlafzimmer","Arbeitszimmer","Kinderzimmer","Bad"],["bedroom","office","nursery","bathroom"]]]){for(let[i,r,o]of[[0,0,0],[1,8.5,0],[2,0,7],[3,8.5,7]])Qe(e[i],t[i],s,r,o,5.5,5,["#c7a784","#a5b9b8","#c9b1a4","#a2b8bd"][i]);let n=s==="ug"?"cellar":"upper";Qe(`${n}-hall`,s==="ug"?"Kellerflur":"Flur & Lesenische",s,0,5,14,2,"#d1c1aa"),Qe(`${n}-hall-south`,s==="ug"?"Kellerflur":"Lesenische",s,5.5,7,3,5,"#d1c1aa").bonusId=`${n}-hall`,Qe(`${n}-core`,`Treppenhaus \xB7 ${s==="ug"?"Keller":"OG"}`,s,5.5,0,3,5,"#d2b694")}Qe("attic","Dachspitz","dg",0,5,14,7,"#b58e6e");Qe("attic-west","Dachspitz \xB7 Koffer","dg",0,0,5.5,5,"#b58e6e").bonusId="attic";Qe("attic-east","Dachspitz \xB7 Bastelplatz","dg",8.5,0,5.5,5,"#b58e6e").bonusId="attic";Qe("attic-core","Treppenhaus \xB7 Dach","dg",5.5,0,3,5,"#d2b694");var vr=Qe("garden","Garten","garden",-5,-7,24,25,"#91aa6d");vr.bounds.minY=-.15;vr.bounds.maxY=14;var je=(s,t,e,n,i,r,o,a=1,l=!1)=>({a:s,b:t,type:"door",id:e,name:n,threshold:i,rooms:[r,o],swing:a,hingeEnd:l}),Ve=(s,t,e=!1,n=.95,i=2.3)=>({a:s,b:t,type:"window",open:e,sill:n,head:i});function sp(s,t,e,n,i,r){we(`${s}-cross-horizontal`,"window-bar",e?[i,.06,.2]:[.2,.06,i],[...n],"#fffdf5",t),we(`${s}-cross-vertical`,"window-bar",e?[.06,r,.2]:[.2,r,.06],[...n],"#fffdf5",t)}function ye(s,t,e,n,i,r=[],o=3.15){let a=es[s],l=s==="ug"?"#b5b5a4":s==="dg"?"#ded0b8":"#e6dfca",c=`${s}-wall-${t?"z":"x"}${e}-${n}`,u=(h,f,p,x,m="wall",g=l)=>{f-h<=.001||x-p<=.001||we(c,m,t?[f-h,x-p,Do]:[Do,x-p,f-h],t?[(h+f)/2,a+(p+x)/2,e]:[e,a+(p+x)/2,(h+f)/2],g,s)},d=n;for(let h of[...r].sort((f,p)=>f.a-p.a)){u(d,h.a,0,o);let f=h.type==="door"?0:h.sill,p=h.type==="door"?Ji:h.head;u(h.a,h.b,0,f),u(h.a,h.b,p,o);let x=h.b-h.a,m=t?[(h.a+h.b)/2,a+(f+p)/2,e]:[e,a+(f+p)/2,(h.a+h.b)/2];if(ac.push({id:h.id||`${c}-window-${h.a}`,floor:s,type:h.type,open:h.open??!1,horizontal:t,fixed:e,from:h.a,to:h.b,sill:a+f,head:a+p,position:m}),h.type==="door"){let g=h.hingeEnd?h.b:h.a,v=t?[g,a+Ji/2,e]:[e,a+Ji/2,g],E=h.hingeEnd?-1:1,y=(t?-h.swing*E:h.swing*E)*Math.PI/2;hu.push({id:h.id,name:h.name,threshold:h.threshold,rooms:h.rooms,floor:s,size:[x-.025,Ji-.025,.055],position:m,rotation:[0,t?0:Math.PI/2,0],hinge:{position:v,axis:"y",angle:y},color:s==="ug"?"#788c82":"#b99469",open:!1});let S=.035;for(let M of[h.a-S/2,h.b+S/2])we(`${h.id}-frame`,"trim",t?[S,Ji,.18]:[.18,Ji,S],t?[M,a+Ji/2,e]:[e,a+Ji/2,M],"#f1e6cc",s)}else{h.open||(u(h.a,h.b,f,p,"glass","#a5d2dc"),sp(`${c}-window-${h.a}`,s,t,m,x,p-f));let g=.035;for(let v of[f,p])we(`${c}-sill`,"trim",t?[x,g,.18]:[.18,g,x],[m[0],a+v,m[2]],"#fbefcf",s);for(let v of[h.a,h.b])we(`${c}-jamb`,"trim",t?[g,p-f,.15]:[.15,p-f,g],t?[v,m[1],e]:[e,m[1],v],"#fbefcf",s)}d=h.b}u(d,i,0,o)}function Qi(s,t,e,n,i,r,o,a=es[t]){we(s,"floor",[i,.14,r],[e+i/2,a-.07,n+r/2],o,t)}for(let s of["ug","eg","og","dg"])s==="ug"?Qi("cellar-floor",s,0,0,14,12,"#9d9f92"):(Qi("west-floor",s,0,0,5.5,12,s==="dg"?"#9d7953":"#b99671"),Qi("east-floor",s,8.5,0,5.5,12,s==="dg"?"#a68159":"#b99671"),Qi("hall-floor",s,5.5,4,3,8,"#c8b391"));Qi("garden-west","garden",-5,-7,5,25,"#83a363",0);Qi("garden-east","garden",14,-7,5,25,"#8aab69",0);Qi("garden-north","garden",0,-7,14,7,"#8cae6a",0);Qi("garden-south","garden",0,12,14,6,"#92ad72",0);we("terrace","paving",[14,.045,3.5],[7,-.005,-1.75],"#c6bba5","garden");we("front-path","paving",[1.5,.045,6],[7,-.005,15],"#c7bfaa","garden");ye("eg",!0,0,0,14,[je(1.75,3.15,"dining-terrace","Esszimmer \u2192 Terrasse",8,"dining","garden",-1),je(11.5,13.1,"living-terrace","Wohnzimmer \u2192 Terrasse",4,"living","garden",-1)]);ye("eg",!0,12,0,14,[Ve(3.5,4.9,!0),je(6.3,7.7,"front-door","Haust\xFCr",6,"hall","garden",-1),Ve(12.45,13.5)]);ye("eg",!1,0,0,12,[Ve(1.3,3.1),Ve(9,10.4)]);ye("eg",!1,14,0,12,[Ve(1.2,2.4),Ve(8.8,9.5)]);ye("eg",!1,5.5,0,12,[je(5.3,6.6,"hall-dining","Flur \u2192 Esszimmer",5,"hall","dining",-1),je(10,11.3,"kitchen-hall","Flur \u2192 K\xFCche",7,"hall","kitchen",-1)]);ye("eg",!1,8.5,0,12,[je(5.55,6.85,"living-hall","Wohnzimmer \u2192 Flur",2,"living","hall",1),je(8.4,9.6,"hall-cloakroom","Flur \u2192 Garderobe",8,"hall","cloakroom",1)]);ye("eg",!0,5,5.5,8.5,[je(6.3,7.7,"hall-stairs","Flur \u2192 Treppenhaus",9,"hall","stairs",1)]);ye("eg",!0,7,0,5.5,[je(3.5,4.9,"dining-kitchen","Esszimmer \u2192 K\xFCche",7,"dining","kitchen",1)]);ye("eg",!0,7,8.5,14);ye("eg",!1,11,7,12,[je(7.55,8.7,"cloakroom-wc","Garderobe \u2192 G\xE4ste-WC",10,"cloakroom","guest-wc",1),je(10.35,11.55,"cloakroom-storage","Garderobe \u2192 Abstellraum",12,"cloakroom","storage",1,!0)]);ye("eg",!0,10,11,14);for(let[s,t]of[["hall-stairs",1],["front-door",-1]]){let e=hu.find(n=>n.id===s);e.position[2]+=.095*t,e.hinge.position[2]+=.095*t,e.hinge.angle*=2}for(let s of["ug","og"]){let t=s==="ug",e=t?"cellar":"upper",n=t?["workshop","laundry","pantry","utility"]:["bedroom","office","nursery","bathroom"],i=t?[14,17,20,23]:[17,19,22,24];ye(s,!1,5.5,0,5),ye(s,!1,8.5,0,5),ye(s,!0,5,0,14,[je(2.7,4,n[0],ji.find(r=>r.id===n[0]).name,i[0],`${e}-hall`,n[0],-1),je(6.3,7.7,`${e}-stairs`,t?"Treppenhaus \u2192 Keller":"Treppenhaus \u2192 Obergeschoss",t?12:14,`${e}-core`,`${e}-hall`,1),je(10,11.4,n[1],ji.find(r=>r.id===n[1]).name,i[1],`${e}-hall`,n[1],-1)]),ye(s,!0,7,0,5.5,[je(3,4.4,n[2],ji.find(r=>r.id===n[2]).name,i[2],`${e}-hall`,n[2],1)]),ye(s,!0,7,8.5,14,[je(10,11.4,n[3],ji.find(r=>r.id===n[3]).name,i[3],`${e}-hall`,n[3],1)]),ye(s,!1,5.5,7,12),ye(s,!1,8.5,7,12),ye(s,!0,0,0,14,t?[Ve(1.1,2.8,!1,2.1,2.75),Ve(10.5,12,!1,2.1,2.75)]:[Ve(1.2,3.2),Ve(10.5,12)]),ye(s,!0,12,0,14,t?[]:[Ve(1.2,3.2),Ve(10.5,12)]),ye(s,!1,0,0,12,t?[]:[Ve(1.4,3.1),Ve(8.5,10.2,!0)]),ye(s,!1,14,0,12,t?[]:[Ve(1.6,3.3,!0),Ve(9.8,11.2)])}for(let s of["ug","eg","og"]){let t=es[s],e=10,n=3.15/2/e,i=3/e;for(let r=0;r<e;r++)we("stair-left","stairs",[.85,.12,i+.015],[6.125,t+n*(r+1)-.06,3.85-i*(r+.5)],"#bba480",s),we("stair-right","stairs",[.85,.12,i+.015],[7.875,t+3.15/2+n*(r+1)-.06,.85+i*(r+.5)],"#bba480",s);we("stair-middle-landing","stairs",[2.6,.13,.5],[7,t+3.15/2-.065,.6],"#bba480",s);for(let r of[5.75,8.25])for(let o of[1.2,2.35,3.5])we("stair-post","railing",[.035,.65,.035],[r,t+.7+(r<7?(3.85-o)/3:1+(o-.85)/3)*1.5,o],"#776952",s)}var rp=3.1/7,ts=Math.atan(rp),ai=s=>7.45+Math.min(s,14-s)*rp;ye("dg",!1,0,0,12,[],1.15);ye("dg",!1,14,0,12,[],1.15);ye("dg",!1,5.5,0,5,[],3);ye("dg",!1,8.5,0,5,[],3);ye("dg",!0,5,5.5,8.5,[je(6.3,7.7,"attic-stairs","Treppenhaus \u2192 Dachspitz",28,"attic-core","attic",1)],3);function op(s,t){let e=[...new Set([0,14,...Array.from({length:55},(n,i)=>(i+1)*.25),...t.flatMap(n=>[n.a,n.b])])].sort((n,i)=>n-i);for(let n=1;n<e.length;n++){let i=e[n-1],r=e[n],o=Math.min(ai(i),ai(r))-6.3-.025,a=t.find(c=>(i+r)/2>c.a&&(i+r)/2<c.b),l=a?[[0,a.sill],[a.head,o]]:[[0,o]];for(let[c,u]of l)u>c&&we("gable","wall",[r-i,u-c,Do],[(i+r)/2,6.3+(c+u)/2,s],"#ded0b8","dg")}for(let n of t){let i=[(n.a+n.b)/2,6.3+(n.sill+n.head)/2,s];ac.push({id:`dg-gable-window-${s}-${n.a}`,floor:"dg",type:"window",open:!1,horizontal:!0,fixed:s,from:n.a,to:n.b,sill:6.3+n.sill,head:6.3+n.head,position:i}),we("gable-window","glass",[n.b-n.a,n.head-n.sill,Do],i,"#a5d2dc","dg"),sp(`gable-window-${s}-${n.a}`,"dg",!0,i,n.b-n.a,n.head-n.sill);for(let r of[n.sill,n.head])we("gable-window-frame","trim",[n.b-n.a,.035,.18],[i[0],6.3+r,s],"#fbefcf","dg");for(let r of[n.a,n.b])we("gable-window-frame","trim",[.035,n.head-n.sill,.18],[r,i[1],s],"#fbefcf","dg")}for(let n of[3.5,10.5])we("gable-sloping-cap","wall",[7/Math.cos(ts),.25,Do],[n,ai(n)-.105,s],"#ded0b8","dg",{rotation:[0,0,n<7?ts:-ts]})}op(0,[Ve(1.8,3.2,!1,.6,1.65),Ve(10.5,12,!1,.6,1.65)]);op(12,[Ve(6,8,!1,.65,1.7)]);function Fo(s,t,e,n,i){we(s,"roof",[(e-t)/Math.cos(ts),.14,i-n],[(t+e)/2,ai((t+e)/2),(n+i)/2],"#98705b","dg",{rotation:[0,0,t>=7?-ts:ts]})}Fo("roof-west-front",0,7,0,7.25);Fo("roof-west-back",0,7,9.15,12);Fo("roof-west-eave",0,.35,7.25,9.15);Fo("roof-west-upper",2,7,7.25,9.15);Fo("roof-east",7,14,0,12);ac.push({id:"attic-roof-window",type:"roof-window",floor:"dg",open:!0,bounds:{minX:.35,maxX:2,minZ:7.25,maxZ:9.15},position:[1.175,ai(1.175),8.2]});for(let s of[7.25,9.15])we("roof-window-frame","trim",[1.65/Math.cos(ts),.055,.055],[1.175,ai(1.175),s],"#f3e2bf","dg",{rotation:[0,0,ts]});for(let s of[.35,2])we("roof-window-frame","trim",[.055,.055,1.9],[s,ai(s),8.2],"#f3e2bf","dg");for(let s of[6.75,10.3]){for(let t of[3.4,10.6])we("attic-post","beam",[.16,ai(t)-6.3,.16],[t,(6.3+ai(t))/2,s],"#74543a","dg");we("attic-crossbeam","beam",[8,.16,.16],[7,8.7,s],"#74543a","dg")}function uu(s){return ji.find(t=>t.id===s)?.floor||"garden"}function re(s,t,e,n,i,r,o){return we(`${s}-${t}`,e,n,i,r,uu(s),{roomId:s,...o})}function ns(s,t,e,n,i,r,o,a,l={}){let c={id:`${s}-${t}`,name:t,roomId:s,floor:uu(s),x:e,z:n,width:i,depth:r,height:o,kind:a,...l};return ip.push(c),c}function Ei(s){return es[uu(s)]??0}function yn(s,t,e,n,i,r,o=.78,a="#be986a"){ns(s,t,e,n,i,r,o,"table",{underClearance:o-.065});let l=Ei(s);re(s,t,"tabletop",[i,.065,r],[e+i/2,l+o-.0325,n+r/2],a);for(let c of[e+.07,e+i-.07])for(let u of[n+.07,n+r-.07])re(s,t,"table-leg",[.045,o-.065,.045],[c,l+(o-.065)/2,u],"#806548")}function pn(s,t,e,n,i=.6,r=.65,o="#80998c",a="south"){let l=Ei(s),c=.49;ns(s,t,e,n,i,r,.94,"chair",{underClearance:.435}),re(s,t,"chair-seat",[i,.055,r],[e+i/2,l+c-.0275,n+r/2],o);for(let d of[e+.055,e+i-.055])for(let h of[n+.055,n+r-.055])re(s,t,"chair-leg",[.035,.435,.035],[d,l+.2175,h],"#856c4c");let u=a==="south"||a==="north";re(s,t,"chair-back",u?[i,.45,.045]:[.045,.45,r],[u?e+i/2:a==="east"?e+.0225:e+i-.0225,l+.715,u?a==="south"?n+.0225:n+r-.0225:n+r/2],o)}function me(s,t,e,n,i,r,o=1.7,a=null,l="#b28c60",c=!1){let u=Ei(s);if(ns(s,t,e,n,i,r,o,"cabinet",{back:a}),c){let d=i>=r;for(let h of[0,(d?i:r)-.045])re(s,t,"shelf-side",d?[.045,o,r]:[i,o,.045],[d?e+h+.0225:e+i/2,u+o/2,d?n+r/2:n+h+.0225],l);for(let h=.06;h<o;h+=.43)re(s,t,"shelf-board",[i,.035,r],[e+i/2,u+h,n+r/2],l);for(let h=0;h<5;h++){let f=.43*(h%Math.max(1,Math.floor(o/.43)))+.18;re(s,`${t}-books`,"books",d?[.24,.23,r*.72]:[i*.72,.23,.24],[d?e+i*(.2+.14*h):e+i/2,u+f,d?n+r/2:n+r*(.2+.14*h)],["#759386","#b17559","#d2b66d","#658491","#b699a6"][h])}}else{re(s,t,"cabinet",[i,o,r],[e+i/2,u+o/2,n+r/2],l);let d=i>=r;for(let h=0;h<Math.max(1,Math.floor((d?i:r)/.55));h++){let f=Math.max(1,Math.floor((d?i:r)/.55)),p=d?[e+(h+.5)*i/f,u+o*.56,n+r-.012]:[e+i-.012,u+o*.56,n+(h+.5)*r/f];re(s,`${t}-handle`,"detail",d?[.12,.035,.018]:[.018,.035,.12],p,"#554d3f")}}}function ln(s,t,e,n,i,r,o,a){ns(s,t,e,n,i,r,o,"solid"),re(s,t,"furniture",[i,o,r],[e+i/2,Ei(s)+o/2,n+r/2],a)}function lc(s,t,e,n=.3,i=1.05){let r=Ei(s);ns(s,"Pflanze",t-n,e-n,n*2,n*2,i,"plant"),re(s,"pot","plant-pot",[n,.3,n],[t,r+.15,e],"#b68460"),re(s,"stem","plant-stem",[.035,i*.7,.035],[t,r+i*.47,e],"#627a48");for(let o=0;o<4;o++)re(s,"leaf","foliage",[n*.85,.07,n*.52],[t+Math.cos(o*1.8)*n*.45,r+i*(.65+.09*o),e+Math.sin(o*1.8)*n*.45],["#779551","#52784b"][o%2],{rotation:[0,o*1.8,.28*(o%2?1:-1)]})}function ap(s,t,e,n,i){let r=Ei(s);ns(s,"Bett",t,e,n,i,.75,"bed"),re(s,"bed-base","bed",[n,.3,i],[t+n/2,r+.24,e+i/2],"#99704e"),re(s,"mattress","bed",[n-.06,.2,i-.06],[t+n/2,r+.49,e+i/2],"#ede1cc");let o=i>=n;re(s,"headboard","bed",o?[n,.85,.075]:[.075,.85,i],[o?t+n/2:t+.04,r+.425,o?e+.04:e+i/2],"#a47c56"),re(s,"blanket","bed",o?[n-.08,.06,i*.6]:[n*.6,.06,i-.08],[o?t+n/2:t+n*.65,r+.62,o?e+i*.65:e+i/2],s==="nursery"?"#87b2b0":"#b58e9b"),re(s,"pillow","bed",o?[n*.7,.12,.43]:[.43,.12,i*.7],[o?t+n/2:t+.4,r+.66,o?e+.4:e+i/2],"#fff1d8")}function lp(s,t,e){let n=Ei(s);ns(s,"Toilette",t,e,.78,.6,.82,"sanitary"),re(s,"cistern","sanitary",[.18,.82,.6],[t+.69,n+.41,e+.3],"#f5eee0"),re(s,"toilet-base","sanitary",[.43,.36,.35],[t+.34,n+.18,e+.3],"#ebe7db"),re(s,"toilet-seat","sanitary",[.57,.07,.51],[t+.315,n+.435,e+.3],"#faf5e7")}function cp(s,t,e,n,i){ln(s,"Waschtisch",t,e,n,i,.76,"#9baeb1"),re(s,"basin","sanitary",[n,.09,i],[t+n/2,Ei(s)+.805,e+i/2],"#f7eedc")}var xe=(s,t,e)=>({axis:s,value:t,edge:e});yn("dining","Esstisch",1.8,2.3,1.8,2.4);for(let s of[2.5,4])pn("dining",`Stuhl-west-${s}`,.85,s,.65,.6,"#ba9664","east"),pn("dining",`Stuhl-east-${s}`,3.95,s,.65,.6,"#ba9664","west");pn("dining","Stuhl-nord",2.4,1.3);pn("dining","Stuhl-sued",2.4,5.15,.6,.65,"#ba9664","north");me("dining","Geschirrschrank",3.65,.07,1.8,.5,1.9,xe("z",0,"min"));me("dining","Sideboard",.07,5.35,.55,1.3,.85,xe("x",0,"min"));lc("dining",1.2,6.3);ln("kitchen","Zeile-Nord",.07,7.07,2.63,.63,.9,"#93afa0");ln("kitchen","Zeile-West",.07,7.7,.63,3.15,.9,"#93afa0");me("kitchen","Kuehlschrank",.07,11.1,.78,.83,1.88,xe("x",0,"min"),"#d9ded1");yn("kitchen","Kuecheninsel",1.8,9,2.1,.95,.9,"#d9c9a7");pn("kitchen","Kuechenhocker",1.85,10.35,.6,.6);re("kitchen","sink","detail",[.9,.03,.4],[.98,.925,7.38],"#7e9797");for(let s of[8.2,8.65])re("kitchen","hob","detail",[.32,.018,.32],[.385,.925,s],"#4e5b5a");ln("living","Sofa-base",13,3,.93,2.75,.38,"#668e7d");re("living","sofa-back","sofa",[.2,.87,2.75],[13.83,.435,4.375],"#4e7566");for(let s of[3.05,5.45])re("living","sofa-arm","sofa",[.93,.66,.25],[13.465,.33,s+.125],"#5d8271");for(let s=0;s<3;s++)re("living","sofa-cushion","sofa",[.7,.14,.69],[13.35,.45,3.48+.76*s],"#8aa48b");yn("living","Couchtisch",11.15,3.65,1.2,1.2,.67,"#bc9566");me("living","TV-Bank",8.57,2.65,.33,1.75,.5,xe("x",8.5,"min"),"#b69871");re("living","television","detail",[.055,.72,1.3],[8.77,.94,3.5],"#344c50");me("living","Buecherregal",9,.07,2,.5,1.85,xe("z",0,"min"),"#b99466",!0);pn("living","Sessel",10.1,1.25,.85,.85,"#c18f66");lc("living",13.4,6.4,.3);me("hall","Flurkonsole",5.57,7.15,.33,1.1,.78,xe("x",5.5,"min"));yn("hall","Sitzbank",8,10.35,.43,1,.45);lc("hall",5.95,11.5,.23);me("cloakroom","Garderobe",9.05,11.4,1.9,.53,1.95,xe("z",12,"max"),"#a5ad92");yn("cloakroom","Schuhbank",8.57,10.65,.43,.72,.44);me("cloakroom","Schuhschrank",8.9,7.07,1.6,.33,.95,xe("z",7,"min"));lp("guest-wc",13.15,8.1);cp("guest-wc",12.4,7.07,.9,.43);me("guest-wc","Handtuecher",11.45,9.5,1.15,.43,1.2,xe("z",10,"max"),"#aec0b6");me("storage","Abstellregal",12.55,10.07,1.38,.38,1.55,xe("z",10,"min"),"#af9c76",!0);me("storage","Putzschrank",13.5,10.75,.43,1.18,1.9,xe("x",14,"max"));yn("workshop","Werkbank",.6,.07,3.5,.8,.87);me("workshop","Werkzeugschrank",4.88,.5,.55,2.7,1.85,xe("x",5.5,"max"),"#929c8b");pn("workshop","Hocker",1.8,1.4);ln("workshop","Werkzeugkiste",.07,3,.78,.8,.5,"#ba8650");for(let s of[8.57,9.7])ln("laundry","Waschgeraet",s,.07,1,.98,.92,"#dfe3d8"),re("laundry","Waschfenster","detail",[.58,.58,.024],[s+.5,-3.15+.46,1.06],"#729498");yn("laundry","Waeschetisch",12,.07,1.8,.63);ln("laundry","Waeschekorb",12.5,2.3,.8,.8,.6,"#bbaf8c");yn("laundry","Waeschestaender",9,2,1.8,.8,1,"#bec5bd");me("pantry","Vorratsregal-links",.07,7.7,.63,3.4,1.85,xe("x",0,"min"),"#b49569",!0);me("pantry","Vorratsregal-rechts",4.8,8.6,.63,3.1,1.85,xe("x",5.5,"max"),"#b49569",!0);me("pantry","Vorratsschrank",1.4,11.45,2.5,.48,1.65,xe("z",12,"max"));ln("utility","Warmwasserspeicher",12.35,7.85,1.1,1.1,1.9,"#aebeb9");ln("utility","Heizung",11.8,11.15,1.6,.78,1.2,"#b8b6a7");me("utility","Technikschrank",8.57,8.8,.63,1.6,1.7,xe("x",8.5,"min"),"#7c9790");me("cellar-hall-south","Flurschrank",6.05,11.5,1.9,.43,1.35,xe("z",12,"max"));me("cellar-hall","Regal-West",.07,5.45,.33,1.1,1.1,xe("x",0,"min"));me("cellar-hall","Regal-Ost",13.6,5.3,.33,1.3,1.1,xe("x",14,"max"));ap("bedroom",1.65,.07,2,2.55);ln("bedroom","Nachttisch-links",.95,.1,.5,.5,.52,"#b18c67");ln("bedroom","Nachttisch-rechts",3.85,.1,.5,.5,.52,"#b18c67");me("bedroom","Kleiderschrank",.07,3.15,.58,1.6,2.05,xe("x",0,"min"),"#b8aa92");yn("office","Schreibtisch",9,.07,2.8,.8);pn("office","Schreibtischstuhl",10,1.3);re("office","monitor","detail",[1.05,.55,.045],[10.225,4.18,.27],"#3e585a");me("office","Buecherregal-Nord",13.4,.07,.53,1.18,1.8,xe("x",14,"max"),"#b7986e",!0);me("office","Buecherregal-Sued",13.4,3.55,.53,1.2,1.8,xe("x",14,"max"),"#b7986e",!0);ap("nursery",.07,7.07,2.4,1.2);yn("nursery","Kinderschreibtisch",3,11.15,2.3,.78,.74);pn("nursery","Kinderstuhl",3.8,10.15,.6,.65,"#d9b269","north");me("nursery","Spielzeugschrank",4.85,8.7,.58,1,1.4,xe("x",5.5,"max"),"#87a6a0",!0);for(let[s,t,e]of[[0,2.1,9.75],[1,2.65,10.25],[2,3,9.75]])ln("nursery",`Bauklotz-${s}`,t,e,.2,.2,.2,["#c78256","#90a576","#d7bc6e"][s]);ns("bathroom","Badewanne",11.75,7.07,2.18,1,.65,"bath");re("bathroom","bath-bottom","sanitary",[2.18,.12,1],[12.84,3.21,7.57],"#e7e8dc");for(let s of[7.12,8.02])re("bathroom","bath-rim","sanitary",[2.18,.58,.1],[12.84,3.5,s],"#f2efe3");for(let s of[11.8,13.88])re("bathroom","bath-end","sanitary",[.1,.58,1],[s,3.5,7.57],"#f2efe3");cp("bathroom",8.57,9,.48,1.15);lp("bathroom",13.15,11.3);me("bathroom","Badschrank",12.1,11.5,.95,.43,1.05,xe("z",12,"max"),"#a6bab6");pn("upper-hall-south","Lesesessel",6.05,10.2,.9,.85,"#ac8779");me("upper-hall-south","Leseregal",7.9,8.8,.53,2.55,1.75,xe("x",8.5,"max"),"#ad8e61",!0);me("upper-hall","Konsole-West",.07,5.4,.38,1.2,.8,xe("x",0,"min"));me("upper-hall","Schrank-Ost",13.4,5.2,.53,1.6,1.4,xe("x",14,"max"));for(let[s,t,e,n,i]of[[0,1.6,.6,1.3,.8],[1,3.5,.5,1.25,1],[2,1.9,2,1,.65]])ln("attic-west",`Koffer-${s}`,t,e,n,i,.48+s*.13,["#9b7658","#c3a071","#889687"][s]);yn("attic-east","Basteltisch",9.15,.07,2.4,1.1);pn("attic-east","Bastelstuhl",9.95,1.55);me("attic-east","Kniestockregal",12.15,.35,.5,2.3,.98,null,"#ac8d65",!0);yn("attic","Dachtisch",8.3,8.1,1.8,1);ln("attic","Truhe-Ost",10.7,10.75,1.3,.75,.65,"#a5855d");ln("attic","Truhe-West",2,10.65,1.4,.75,.58,"#aa8c62");me("attic","Dachschrank",3.65,11.5,1.8,.43,1.2,xe("z",12,"max"));yn("garden","Terrassentisch",5,-2.4,2.4,1.1,.8,"#c0ad83");for(let s of[5.15,6.65])pn("garden",`Terrassenstuhl-N-${s}`,s,-3.25,.6,.65,"#9daa84"),pn("garden",`Terrassenstuhl-S-${s}`,s,-1,.6,.65,"#9daa84","north");pn("garden","Terrassenstuhl-West",4.15,-2.15,.65,.6,"#9daa84","east");pn("garden","Terrassenstuhl-Ost",7.7,-2.15,.65,.6,"#9daa84","west");yn("garden","Gartenbank",-4,4,2.5,.65,.52);ln("garden","Hochbeet",15.65,4.9,1.8,4.1,.65,"#9c865e");for(let s=0;s<4;s++)for(let t of[16.1,16.9])lc("garden",t,5.4+.9*s,.18,1.02);for(let[s,t,e]of[[15.5,-3.2,1.25],[-2,-4,1.1],[-2.75,13.5,.95]]){re("garden","tree-trunk","tree",[.35,3.3,.35],[s,1.65,t],"#816442");for(let n=0;n<3;n++)re("garden","tree-crown","foliage",[e*1.25,e*.9,e*1.1],[s+Math.cos(n*2.1)*.45,3.1+n*.35,t+Math.sin(n*2.1)*.4],["#719754","#89aa66","#648c50"][n],{rotation:[0,n*.8,.08]})}for(let s of[-7,18])we("boundary-hedge","boundary",[24,1.5,.25],[7,.75,s],"#6d8d59","garden");for(let s of[-5,19])we("boundary-hedge","boundary",[.25,1.5,25],[s,.75,5.5],"#6d8d59","garden");function Re(s,t){let e=Ei(s);for(let[n,i,r,o=!1]of t)cu.push({id:`${s}-star-${cu.filter(a=>a.roomId===s).length+1}`,roomId:s,x:n,y:e+i,z:r,radius:o?.14:.22,under:o})}Re("living",[[11.2,1.08,5.45],[10.1,1.3,4.6],[9.65,1.15,6.4],[12.15,1.05,2.5],[11.75,.29,4.25,!0],[10.52,.22,1.68,!0],[12.2,1.6,1.1]]);Re("dining",[[2.7,.33,3.55,!0],[4.275,.22,4.3,!0],[4.8,1.35,1.55],[1.1,1.15,4.8],[3.7,1.2,6.1],[2.2,1.4,.9]]);Re("kitchen",[[2.9,.42,9.45,!0],[4.4,1.3,11.45],[2.15,.22,10.65,!0],[3.9,1.45,8.1],[1.2,1.6,8.5]]);Re("hall",[[7,1.3,8.8],[7.7,1.25,6.45],[6.6,1.6,10.7],[6.2,1.25,9.3]]);Re("cloakroom",[[9.8,1.25,9.3],[10.3,1.3,8.1]]);Re("guest-wc",[[12.3,1.3,8.65],[11.75,.65,9.2]]);Re("storage",[[12.2,1.3,11.1],[12,.42,10.6]]);Re("workshop",[[2.35,.38,.47,!0],[3.85,1.4,2.8],[2.1,.22,1.725,!0],[1.3,1.3,3.2]]);Re("laundry",[[11.65,1.3,2.9],[12.8,1.1,1.75],[12.9,.35,.39,!0],[9.8,.4,2.4,!0]]);Re("pantry",[[2.3,1.2,8.1],[3.6,1.55,10.7],[4.15,.55,9.6],[1.3,1.5,9.3]]);Re("utility",[[10,1.25,10.85],[11.1,1.45,8.7],[12,.55,9.85]]);Re("cellar-hall",[[4.7,1.2,6],[11.8,1.3,6]]);Re("cellar-hall-south",[[7,1.2,9.1],[6.4,.65,10.4]]);Re("bedroom",[[4.75,1.25,2.5],[1.1,1.1,2],[3.45,1.4,3.55],[4.4,.55,1.3]]);Re("office",[[10.4,.34,.47,!0],[12,1.35,2.7],[10.3,.22,1.625,!0],[12.5,1.6,1.1]]);Re("nursery",[[4.15,.33,11.55,!0],[1.65,.75,10.8],[3.75,1.2,7.85],[4.1,.22,10.475,!0],[1.1,1.35,9.2]]);Re("bathroom",[[10,1.1,10.7],[11.1,1.5,8.7],[12.8,.4,7.6]]);Re("upper-hall",[[4.5,1.2,6],[12.3,1.2,6]]);Re("upper-hall-south",[[6.6,1.1,11.4],[7.1,1.5,8.4]]);Re("attic-west",[[2.8,1.25,2.8],[4.5,1.55,3.8]]);Re("attic-east",[[10.35,.34,.6,!0],[11.9,1.3,3.2]]);Re("attic",[[5.3,1.4,7.75],[9.2,.34,8.6,!0],[4.6,1.15,10],[1.2,1.4,8.2],[7.1,2.15,9.4]]);Re("garden",[[6.2,.36,-1.85,!0],[5.45,.22,-.675,!0],[-2.75,.23,4.32,!0],[15.6,1.4,13.6],[17.9,1.3,-1.5],[-2.1,1.5,10.5],[10.2,1.65,-4],[4.2,1.4,13.5],[15.3,4.6,2.4],[-1.2,4.6,9.3],[-.8,8.1,8.2],[7.5,11.7,7.2]]);for(let[s,t]of[["cellar-core","ug"],["stairs","eg"],["upper-core","og"],["attic-core","dg"]])Re(s,[[7,1.4,2.2],[7,2.5,3.3]]);var Ti={id:1,name:"Ein ganzes Haus",startRoomId:"living",rooms:ji,doors:hu,obstacles:np,openings:ac,furniture:ip,collectibles:cu,thermals:[{id:"stairwell-lift",x:7,y:-3.05,z:2.2,r:.43,height:13,strength:2.6},{id:"garden-east-lift",x:16.1,y:.15,z:1.7,r:.9,height:10.9,strength:2.1},{id:"garden-west-lift",x:-1.65,y:.15,z:8.2,r:.8,height:10.7,strength:2.1},{id:"living-updraft",x:12.3,y:.1,z:5.9,r:.45,height:2.6,strength:1.3}],connections:[["cellar-core","stairs"],["stairs","upper-core"],["upper-core","attic-core"],["cellar-hall","cellar-hall-south"],["upper-hall","upper-hall-south"],["attic","attic-west"],["attic","attic-east"],["kitchen","garden"],["office","garden"],["nursery","garden"],["attic","garden"]],start:{x:11.2,y:1.05,z:6.2,heading:0},bounds:{minX:-5,maxX:19,minY:-3.15,maxY:14,minZ:-7,maxZ:18},towers:[]};function hp(s){let{x:t,y:e,z:n}=s;if(![t,e,n].every(Number.isFinite))return null;let i=o=>{let a=o.bounds;return t>=a.minX&&t<a.maxX&&e>=a.minY-.025&&e<a.maxY&&n>=a.minZ&&n<a.maxZ},r=ji.find(o=>o.floor!=="garden"&&i(o));return r?r.floor==="dg"&&e>ai(Math.max(0,Math.min(14,t)))+.12?i(vr)?vr:null:r:i(vr)?vr:null}function yr(s,t=!1){let e=[...s.rotation||[0,0,0]],n=[...s.position];if(t&&s.hinge){let i=s.hinge.position,r=s.hinge.angle,o=n[0]-i[0],a=n[2]-i[2];n[0]=i[0]+Math.cos(r)*o+Math.sin(r)*a,n[2]=i[2]-Math.sin(r)*o+Math.cos(r)*a,e[1]+=r}return{size:[...s.size],position:n,rotation:e}}var _y=["classic","glider","dart","stunt"];var dp={classic:{span:.55,length:.42,tail:.15,speed:1,turn:1,sink:1,color:16773580},glider:{span:.65,length:.41,tail:.19,speed:.88,turn:.82,sink:.76,color:16770734},dart:{span:.43,length:.49,tail:.14,speed:1.2,turn:.8,sink:1.18,color:14740991},stunt:{span:.49,length:.35,tail:.17,speed:.95,turn:1.24,sink:1.12,color:16766154}};function vy(s,t){let e=[0,1,2].map(n=>s.reduce((i,r)=>i+r[n],0)/s.length);return t.map(n=>{let[i,r,o]=n.map(d=>s[d]),a=r.map((d,h)=>d-i[h]),l=o.map((d,h)=>d-i[h]);return[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]].reduce((d,h,f)=>d+h*(i[f]-e[f]),0)<0?[...n].reverse():n})}function cc(s,t,e,n,i,r=0,o=0){let a=t.length,l=[-1,1].flatMap(u=>t.map(([d,h])=>[d*i,(o+Math.abs(d)*r+u*e/2)*i,h*i])),c=[Array.from({length:a},(u,d)=>d),Array.from({length:a},(u,d)=>d+a)];for(let u=0;u<a;u++)c.push([u,(u+1)%a,(u+1)%a+a,u+a]);return{id:s,kind:"convex",vertices:l,faces:vy(l,c),color:n}}function up(s,t,e,n=20){return Array.from({length:n},(i,r)=>{let o=r*Math.PI*2/n;return[s/2*Math.cos(o),e+t/2*Math.sin(o)]})}function yy(s,t){let e=-t.length/2,n=t.length/2,i=t.span/2,r=[[0,e],[.024,n-.008],[-.024,n-.008]],o=[[0,n-.078],[t.tail/2,n],[-t.tail/2,n]];return s==="dart"?{wing:[[0,e+.015],[i,n-.025],[0,n-.025]],fuselage:r,tail:o}:s==="glider"?{wing:Array.from({length:17},(a,l)=>{let c=-Math.PI/2+l*Math.PI/16;return[l===0||l===16?0:i*Math.cos(c),-.015+.105*Math.sin(c)]}),fuselage:up(.056,t.length,0),tail:up(t.tail,.08,n-.04)}:s==="stunt"?{wing:[[0,-.065],[i,-.065],[i,.045],[0,.045]],fuselage:[[0,e],[.028,e+.04],[.028,n-.008],[-.028,n-.008],[-.028,e+.04]],tail:[[-t.tail/2,n-.064],[t.tail/2,n-.064],[t.tail/2,n],[-t.tail/2,n]]}:{wing:[[0,e+.025],[i,.035],[i,.145],[0,n-.035]],fuselage:r,tail:[[-t.tail/2,n-.05],[t.tail/2,n-.05],[t.tail*.38,n],[-t.tail*.38,n]]}}function Uo(s="classic",t=1){s=_y.includes(s)?s:"classic",t=Number.isFinite(Number(t))?Math.max(.55,Math.min(1.5,Number(t))):1;let e=dp[s],n=yy(s,e),i=t*.78,r=[cc("left-wing",n.wing.map(([o,a])=>[-o,a]),.008,e.color,i,.045),cc("right-wing",n.wing,.008,e.color,i,.045),cc("fuselage",n.fuselage,.044,16768916,i,0,-.014),cc("tail",n.tail,.008,e.color,i,0,.011)];return{form:s,size:t,span:e.span*i,length:e.length*i,parts:r,boundingRadius:Math.max(...r.flatMap(o=>o.vertices.map(a=>Math.hypot(...a))))}}function fp(s="classic",t=1){let e=Uo(s,t),n=dp[e.form],i=e.size;return{speed:1.65*n.speed*(.94+.06*i),turnRate:1.8*n.turn/Math.pow(i,.65),pitchRate:.8/Math.pow(i,.35),sinkRate:.095*n.sink/Math.pow(i,.6),energyLoss:.035*n.sink/Math.pow(i,.55),glideRatio:1.65/.095*n.speed*(.94+.06*i)/n.sink*Math.pow(i,.6)}}var by=new Map(Ti.rooms.map(s=>[s.id,s])),Sy=new Set(["cellar-core","stairs","upper-core","attic-core"]),My=new Map(Ti.collectibles.map(s=>{let t=!!s.under,e=by.get(s.roomId)?.floor==="ug"||Sy.has(s.roomId);return[s.id,Object.freeze({id:s.id,roomId:s.roomId,under:t,zone:e,basePoints:150+(t?150:0)+(e?150:0)})]}));function pp(s){let t=typeof s=="string"?s:s?.id,e=My.get(t);if(!e)throw new Error("Dieser Stern geh\xF6rt nicht zum Haus.");return e}var wy=(s,t,e)=>Math.max(t,Math.min(e,s)),Ay=new Set(["wall","floor","roof"]);function mp(s,t,e=()=>({width:s.clientWidth,height:s.clientHeight})){let n=t.house||t.level||Ti,i=new sc({canvas:s,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.6)),i.shadowMap.enabled=!0,i.shadowMap.type=bs,i.outputColorSpace=Ye,i.toneMapping=So,i.toneMappingExposure=1.18;let r=new Zr;r.background=new Kt("#c9ddd5"),r.fog=new $r("#c9ddd5",30,90);let o=new $e(64,1,.035,120);o.position.set(n.start.x,n.start.y+1.3,n.start.z+2.2),o.lookAt(n.start.x,n.start.y,n.start.z-.5),r.add(new xo("#fff3d9","#718169",2.7));let a=new bo("#ffefce",2.7);a.position.set(-9,24,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:.5,far:65}),a.shadow.normalBias=.025,a.shadow.bias=-15e-5,r.add(a,a.target);let l=new yo("#fff1d0",4,11,2);r.add(l);let c=new Map,u=new Set,d=new Set,h=new wi(1,1,1);u.add(h);let f=new Map;for(let W of["ug","eg","og","dg","garden"]){let z=new rn;z.name=`Etage ${W}`,f.set(W,z),r.add(z)}let p=[],x=new Map,m=[],g=[];function v(W,z={}){let F=`${W}:${JSON.stringify(z)}`;return c.has(F)||c.set(F,new qn({color:W,roughness:.86,flatShading:!0,...z})),c.get(F)}function E(W=!1){let z=document.createElement("canvas");z.width=z.height=256;let F=z.getContext("2d");if(F.fillStyle=W?"#edf4d8":"#fff1dc",F.fillRect(0,0,256,256),W)for(let lt=0;lt<1200;lt++)F.fillStyle=lt%2?"#d5e0bd":"#eef3d9",F.fillRect(lt*67%256,lt*113%256,1,3);else{F.strokeStyle="#c9b594",F.lineWidth=1;for(let lt=0;lt<=256;lt+=32){F.beginPath(),F.moveTo(0,lt),F.lineTo(256,lt),F.stroke();for(let ft=lt/32%2*96;ft<256;ft+=128)F.beginPath(),F.moveTo(ft,lt),F.lineTo(ft,lt+32),F.stroke()}for(let lt=0;lt<90;lt++)F.fillStyle=lt%2?"#dfd0b8":"#e8dbc4",F.fillRect(lt*73%256,lt*19%256,12+lt%21,1)}let et=new sr(z);return et.colorSpace=Ye,et.wrapS=et.wrapT=Ks,et.repeat.set(3,3),d.add(et),et}let y=E(),S=E(!0),M=new fe,C=new on,_=new Wn,A=W=>M.compose(new V(...W.position),C.setFromEuler(_.set(...W.rotation||[0,0,0])),new V(...W.size)),R=new Map;for(let W of n.obstacles){let z=f.get(W.floor)||f.get("garden");if(Ay.has(W.kind)){let F=v(W.color).clone();F.transparent=!0,W.kind==="floor"&&(F.map=W.floor==="garden"?S:y);let et=new ve(h,F);et.name=W.id,et.position.set(...W.position),et.scale.set(...W.size),et.rotation.set(...W.rotation||[0,0,0]),et.castShadow=W.kind!=="floor",et.receiveShadow=!0,z.add(et),p.push({mesh:et,part:W,opacity:1})}else{let F=`${W.floor}|${W.color}|${W.kind==="glass"?"glass":"opaque"}`;R.has(F)||R.set(F,{group:z,color:W.color,glass:W.kind==="glass",parts:[]}),R.get(F).parts.push(W)}}for(let{group:W,color:z,glass:F,parts:et}of R.values()){let lt=new er(h,v(z,F?{transparent:!0,opacity:.36,roughness:.12,depthWrite:!1}:{}),et.length);et.forEach((ft,Q)=>lt.setMatrixAt(Q,A(ft))),lt.instanceMatrix.needsUpdate=!0,lt.castShadow=!F,lt.receiveShadow=!0,lt.frustumCulled=!1,W.add(lt)}let L=new wi(.54,.23,.012);u.add(L);function B(W){let z=document.createElement("canvas");z.width=256,z.height=112;let F=z.getContext("2d");F.fillStyle="#f5e5bc",F.fillRect(0,0,256,112),F.strokeStyle="#ad8b58",F.lineWidth=4,F.strokeRect(4,4,248,104),F.fillStyle="#463e30",F.font="bold 44px system-ui",F.textAlign="center",F.textBaseline="middle",F.fillText(W.signText??`${W.threshold} \u2605`,128,58);for(let Q of[15,241])F.beginPath(),F.arc(Q,56,3,0,Math.PI*2),F.fill();let et=new sr(z);et.colorSpace=Ye,d.add(et);let lt=v("#ad8b58",{roughness:.7}),ft=new qn({map:et,roughness:.85});return[-1,1].map(Q=>{let ct=new ve(L,[lt,lt,lt,lt,ft,lt]);return ct.name=`${W.id}-sign-${Q<0?"back":"front"}`,ct.position.set(0,.37,Q*(W.size[2]/2+.0065)),ct.rotation.y=Q<0?Math.PI:0,ct.castShadow=ct.receiveShadow=!0,ct})}for(let W of n.doors){let z=new rn;z.name=W.id;let F=new ve(h,v(W.color||"#b99469"));F.name=`${W.id}-leaf`,F.castShadow=F.receiveShadow=!0;let et=yr(W,!1);z.position.set(...et.position),z.rotation.set(...et.rotation),F.scale.set(...et.size),z.add(F,...B(W)),r.add(z),x.set(W.id,{door:W,mesh:z,leaf:F,opened:!1})}function N(W,z=!0){let F=x.get(W);if(!F)return;F.opened=!!z;let et=yr(F.door,F.opened);F.mesh.position.set(...et.position),F.mesh.rotation.set(...et.rotation),F.leaf.scale.set(...et.size)}let I=new rn;I.name="Papierflieger",r.add(I);let D=new Set,U=new Set,H="none",Z="classic",q=1,X=54,Y=new Float32Array(X*3),st=new Je;st.setAttribute("position",new un(Y,3)),u.add(st);let xt=new eo(st,new ir({color:"#fff2d0",transparent:!0,opacity:.75,depthTest:!0,depthWrite:!1,toneMapped:!1}));xt.frustumCulled=!1,xt.renderOrder=20,r.add(xt);let kt=new er(h,new Pn({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,toneMapped:!1}),28);kt.frustumCulled=!1,kt.visible=!1,kt.renderOrder=20,r.add(kt);function $t(W="classic",z=1,F="none"){let et=Uo(W,z);Z=et.form,q=et.size,H=F||"none";for(let lt of U)lt.dispose();U.clear();for(let lt of D)lt.dispose();D.clear(),I.clear();for(let lt of et.parts){let ft=[];for(let Ut of lt.faces)for(let k=1;k+1<Ut.length;k++)for(let vt of[Ut[0],Ut[k],Ut[k+1]])ft.push(...lt.vertices[vt]);let Q=new Je;Q.setAttribute("position",new Pe(ft,3)),Q.computeVertexNormals();let ct=new qn({color:lt.color,roughness:.77,side:Ln,flatShading:!0}),Et=new ve(Q,ct);Et.name=lt.id,Et.castShadow=Et.receiveShadow=!0,I.add(Et),U.add(Q),D.add(ct)}xt.material.color.set(H==="confetti"?"#c598e8":H==="spark"?"#e9bd5e":H==="mint"?"#80d6ba":"#fcf1ce"),xt.visible=H==="mint"||H==="spark",kt.visible=H==="spark"||H==="confetti";for(let lt=0;lt<28;lt++)kt.setColorAt(lt,new Kt(H==="confetti"?["#d58c7e","#79c6b2","#e9c774","#a7a0d6"][lt%4]:"#f7d581"));return kt.instanceColor.needsUpdate=!0,et}function Jt(W=n.start){for(let z=0;z<X;z++)Y[z*3]=W.x,Y[z*3+1]=W.y,Y[z*3+2]=W.z;st.attributes.position.needsUpdate=!0}function nt(W){Y.copyWithin(3,0,Y.length-3),Y[0]=W.x,Y[1]=W.y,Y[2]=W.z,st.attributes.position.needsUpdate=!0}$t(),Jt(),I.position.set(n.start.x,n.start.y,n.start.z);let rt=new rn;rt.position.set(n.start.x,0,n.start.z),r.add(rt);let yt=new ys(.23,.014,5,28);u.add(yt);let zt=new ve(yt,new Pn({color:"#e5b45f",transparent:!0,opacity:.75}));zt.rotation.x=Math.PI/2,zt.position.y=.045,rt.add(zt);function Ct(W=0){zt.scale.setScalar(1+Math.max(0,W)*.3),zt.material.opacity=.5+Math.min(1,W)*.45}let Vt=new or;for(let W=0;W<10;W++){let z=W*Math.PI/5+Math.PI/2,F=W%2?.052:.115,et=Math.cos(z)*F,lt=Math.sin(z)*F;W?Vt.lineTo(et,lt):Vt.moveTo(et,lt)}Vt.closePath();let ae=new fo(Vt,{depth:.025,bevelEnabled:!1});u.add(ae);let at=new ys(.165,.007,4,22);u.add(at);let ut=[new qn({color:"#ffd46c",emissive:"#b26e13",emissiveIntensity:.8,roughness:.42}),new qn({color:"#bed9f3",emissive:"#477294",emissiveIntensity:.22,roughness:.42})],pt=[new Pn({color:"#ffdf8a",transparent:!0,opacity:.8,depthWrite:!1}),new Pn({color:"#b7d6ed",transparent:!0,opacity:.45,depthWrite:!1})],mt=new Pn({color:"#fff1b7",toneMapped:!1});for(let W of[...ut,...pt,mt])c.set(`star-${W.id}`,W);for(let W of n.collectibles){let z=pp(W),F=new rn,et=new ve(ae,ut[0]),lt=[],ft=new rn;F.name=W.id,F.position.set(W.x,W.y,W.z),F.add(et,ft);for(let Q=0;Q<Number(z.under)+Number(z.zone);Q++){let ct=new ve(at,pt[0]);ct.scale.setScalar(1+Q*.28),lt.push(ct),F.add(ct)}for(let Q=0;Q<3;Q++){let ct=new ve(ae,mt),Et=Q*Math.PI*2/3;ct.position.set(Math.cos(Et)*.17,Math.sin(Et)*.17,.02),ct.scale.setScalar(.16),ft.add(ct)}W.under&&F.scale.setScalar(.72),r.add(F),m.push({data:W,mesh:F,star:et,rings:lt,sparkles:ft,discovered:!1,collected:!1})}function _t(W){let z=[];for(let F of m)!F.collected&&W(F.data)&&(F.collected=!0,F.mesh.visible=!1,z.push(F.data.id));return z}function Gt(W=[]){let z=new Set(W);for(let F of m){F.collected=!1,F.mesh.visible=!0,F.discovered=z.has(F.data.id),F.star.material=ut[Number(F.discovered)];for(let et of F.rings)et.material=pt[Number(F.discovered)];F.sparkles.visible=!F.discovered}}for(let W of n.thermals){let z=new ys(W.r*.75,.009,4,26);u.add(z);for(let F=0;F<7;F++){let et=new ve(z,new Pn({color:"#75d4c6",transparent:!0,opacity:.26,depthWrite:!1}));et.rotation.x=Math.PI/2,r.add(et),g.push({mesh:et,thermal:W,phase:F/7})}}let Ft=[];for(let W of t.blocks||[]){let z=new ve(h,v("#dab87f"));z.scale.set(...W.size),z.castShadow=!0,r.add(z),Ft.push(z)}let Ht=new on,Wt=new V,O=new V,oe=new V;function te(W,z){Ht.setFromEuler(_.set(...W.rotation||[0,0,0])).invert(),oe.set(...W.position),Wt.copy(o.position).sub(oe).applyQuaternion(Ht),O.copy(z).sub(oe).applyQuaternion(Ht).sub(Wt);let F=0,et=1;for(let[lt,ft]of["x","y","z"].entries()){let Q=-W.size[lt]/2-.025,ct=W.size[lt]/2+.025,Et=O[ft];if(Math.abs(Et)<1e-7){if(Wt[ft]<Q||Wt[ft]>ct)return!1}else{let Ut=(Q-Wt[ft])/Et,k=(ct-Wt[ft])/Et;if(F=Math.max(F,Math.min(Ut,k)),et=Math.min(et,Math.max(Ut,k)),F>et)return!1}}return et>0&&F<.97}let P={ceiling:!1,distance:1/0,intensity:0};function b(W){let z=typeof t.getCeilingAt=="function"?t.getCeilingAt(W):1/0;return P.distance=z-W.y,P.ceiling=P.distance<.45,P.intensity=wy((.55-P.distance)/.5,0,1),P.ceiling}function $(W=1/60,z=0){let F=t.plane?.position||I.position,et=hp(F),lt=et&&et.floor!=="garden",ft=Q=>!lt||Q==="garden"||(es[Q]??-9)<=(es[et.floor]??0)+3.15;for(let[Q,ct]of f)ct.visible=ft(Q);for(let Q of p){let ct=te(Q.part,F),Et=ct?Q.part.kind==="floor"||Q.part.kind==="roof"?.07:.13:1;Q.opacity+=(Et-Q.opacity)*Math.min(1,Math.max(.02,W)*14),Q.mesh.material.opacity=Q.opacity,Q.mesh.material.depthWrite=Q.opacity>.7,Q.mesh.castShadow=Q.part.kind!=="floor"&&Q.opacity>.8}for(let Q of x.values())Q.mesh.visible=ft(Q.door.floor);for(let Q=0;Q<m.length;Q++){let ct=m[Q];if(ct.collected)continue;let Et=n.rooms.find(Ut=>Ut.id===ct.data.roomId);ct.mesh.visible=!lt||Et?.floor===et.floor||Et?.floor==="garden",ct.mesh.rotation.y=z*(ct.discovered?.5:.85)+Q*.61,ct.mesh.position.y=ct.data.y+Math.sin(z*1.7+Q)*(ct.data.under?.009:.026);for(let Ut=0;Ut<ct.sparkles.children.length;Ut++)ct.sparkles.children[Ut].scale.setScalar(.09+.12*Math.sin(z*3+Q+Ut*2)**2)}for(let Q of g){let ct=(z*.18+Q.phase)%1;Q.mesh.position.set(Q.thermal.x,Q.thermal.y+ct*Q.thermal.height,Q.thermal.z),Q.mesh.material.opacity=Math.sin(ct*Math.PI)*.28,Q.mesh.visible=Math.abs(Q.mesh.position.y-F.y)<4}for(let Q=0;Q<Ft.length;Q++)Ft[Q].position.copy(t.blocks[Q].body.position),Ft[Q].quaternion.copy(t.blocks[Q].body.quaternion);if(l.position.set(F.x,F.y+.6,F.z),l.intensity=et?.floor==="ug"?7:3,a.target.position.set(F.x,1,F.z),a.target.updateMatrixWorld(),a.position.set(F.x-12,24,F.z-14),H==="spark"||H==="confetti"){let Q=Math.hypot(Y[0]-Y[18],Y[1]-Y[19],Y[2]-Y[20])>.035;kt.visible=Q;for(let ct=0;ct<28;ct++){let Et=Math.min(X-1,2+ct)*3,Ut=1-ct/32,k=(H==="confetti"?.037:.022)*Ut*(H==="spark"?.6+.4*Math.sin(z*8+ct)**2:1),vt=new V(Y[Et]+Math.sin(ct*2.4)*.045,Y[Et+1]+Math.cos(ct*1.7)*.035-ct*.001,Y[Et+2]);M.compose(vt,C.setFromEuler(_.set(z*2+ct,ct*.7,z*1.4+ct)),new V(k,H==="confetti"?k*.22:k,k)),kt.setMatrixAt(ct,M)}kt.instanceMatrix.needsUpdate=!0}b(F)}function K(){let W=e()||{},z=Math.max(1,W.width||s.clientWidth||1),F=Math.max(1,W.height||s.clientHeight||1);i.setSize(z,F,!1),o.aspect=z/F,o.updateProjectionMatrix()}function it(){i.render(r,o)}K(),window.addEventListener("gameviewportchange",K);function gt(){window.removeEventListener("gameviewportchange",K);let W=new Set([...c.values(),...D]),z=new Set([...u,...U]);r.traverse(F=>{if(F.geometry&&z.add(F.geometry),F.material)for(let et of Array.isArray(F.material)?F.material:[F.material])W.add(et);F.shadow?.map&&F.shadow.map.dispose()});for(let F of z)F.dispose();for(let F of W)F.dispose();for(let F of d)F.dispose();r.clear(),i.dispose()}return{renderer:i,scene:r,camera:o,plane:I,sling:rt,thermals:n.thermals,update:$,setAircraft:$t,setDoorOpen:N,collectStars:_t,resetCollectibles:Gt,resetTrail:Jt,updateTrail:nt,updateSling:Ct,updateCeiling:b,warnings:P,render:it,resize:K,dispose:gt,totalCollectibles:m.length,get collected(){return m.filter(W=>W.collected).length},get aircraft(){return{form:Z,size:q,effect:H}},sync:()=>$(1/60,0),wind:W=>$(1/60,W),collect:W=>_t(z=>Math.hypot(z.x-W.x,z.y-W.y,z.z-W.z)<=z.radius).length}}var ss=class s{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new T);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new T);let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new s);let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],x=i[0],m=i[1],g=i[2],v=i[3],E=i[4],y=i[5],S=i[6],M=i[7],C=i[8];return r[0]=o*x+a*v+l*S,r[1]=o*m+a*E+l*M,r[2]=o*g+a*y+l*C,r[3]=c*x+u*v+d*S,r[4]=c*m+u*E+d*M,r[5]=c*g+u*y+d*C,r[6]=h*x+f*v+p*S,r[7]=h*m+f*E+p*M,r[8]=h*g+f*y+p*C,e}scale(t,e){e===void 0&&(e=new s);let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new T);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let l=3,c=l,u,d=4,h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=d;do h=d-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){let f=r[o+i*a]/r[o+i*o];u=d;do h=d-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*f;while(--u)}}while(--l);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new s);let e=3,n=6,i=Ey,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,l=a,c,u=n,d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do d=u-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){let h=i[r+n*o]/i[r+n*r];c=u;do d=u-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{let h=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{let h=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,l=i+i,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=i*l,x=r*o,m=r*a,g=r*l,v=this.elements;return v[0]=1-(h+p),v[1]=u-g,v[2]=d+m,v[3]=u+g,v[4]=1-(c+p),v[5]=f-x,v[6]=d-m,v[7]=f+x,v[8]=1-(c+h),this}transpose(t){t===void 0&&(t=new s);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Ey=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],T=class s{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new s);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*i,e.y=l*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new s(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new s(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ss([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new s),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new s),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=Ty,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=Cy;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(gp),gp.almostEquals(t,e)}clone(){return new s(this.x,this.y,this.z)}};T.ZERO=new T(0,0,0);T.UNIT_X=new T(1,0,0);T.UNIT_Y=new T(0,1,0);T.UNIT_Z=new T(0,0,1);var Ty=new T,Cy=new T,gp=new T,Cn=class s{constructor(t){t===void 0&&(t={}),this.lowerBound=new T,this.upperBound=new T,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,xp),c=xp),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,l){let c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){let n=_p,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=_p,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){let f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}},xp=new T,_p=[new T,new T,new T,new T,new T,new T,new T,new T],mc=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},gc=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}},Be=class s{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new T),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Ry,i=Iy;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+i*c-r*l,e.y=i*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-i*a,e.w=o*u-n*a-i*l-r*c,e}inverse(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new T);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,d=c*i+l*n-o*r,h=c*r+o*i-a*n,f=-o*n-a*i-l*r;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){let d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,x,m;return f=i*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),x=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(x=1-e,m=e),n.x=x*i+m*l,n.y=x*r+m*c,n.z=x*o+m*u,n.w=x*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new s);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(r*d+o*u-a*c),i.y+=h*(o*d+a*l-r*u),i.z+=h*(a*d+r*c-o*l),i.w+=h*(-r*l-o*c-a*u),i}},Ry=new T,Iy=new T,Py={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Nt=class s{constructor(t){t===void 0&&(t={}),this.id=s.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Nt.idCounter=0;Nt.types=Py;var pe=class s{constructor(t){t===void 0&&(t={}),this.position=new T,this.quaternion=new Be,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new T),n.vsub(t,i),e.conjugate(vp),vp.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new T),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new T),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new T),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},vp=new Be,Vo=class s extends Nt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:Nt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new T;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new T;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){let r=new T,o=new T;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,l,c){let u=new T,d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);let x=u.dot(o);x>h&&(h=x,d=p)}let f=[];for(let p=0;p<n.faces[d].length;p++){let x=n.vertices[n.faces[d][p]],m=new T;m.copy(x),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,r,o,a,l){let c=new T,u=new T,d=new T,h=new T,f=new T,p=new T,x=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);let v=m.testSepAxis(c,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{let g=a?a.length:m.faces.length;for(let v=0;v<g;v++){let E=a?a[v]:v;c.copy(m.faceNormals[E]),n.vmult(c,c);let y=m.testSepAxis(c,t,e,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],u);let v=m.testSepAxis(u,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}else{let g=l?l.length:t.faces.length;for(let v=0;v<g;v++){let E=l?l[v]:v;u.copy(t.faceNormals[E]),r.vmult(u,u);let y=m.testSepAxis(u,t,e,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],f),h.cross(f,p),!p.almostZero()){p.normalize();let E=m.testSepAxis(p,t,e,n,i,r);if(E===!1)return!1;E<x&&(x=E,o.copy(p))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){let a=this;s.project(a,t,n,i,du),s.project(e,t,r,o,fu);let l=du[0],c=du[1],u=fu[0],d=fu[1];if(l<d||u<c)return!1;let h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){let n=new T,i=new T;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){let l=new T,c=new T,u=new T,d=new T,h=new T,f=new T,p=new T,x=new T,m=this,g=[],v=i,E=g,y=-1,S=Number.MAX_VALUE;for(let R=0;R<m.faces.length;R++){l.copy(m.faceNormals[R]),n.vmult(l,l);let L=l.dot(t);L<S&&(S=L,y=R)}if(y<0)return;let M=m.faces[y];M.connectedFaces=[];for(let R=0;R<m.faces.length;R++)for(let L=0;L<m.faces[R].length;L++)M.indexOf(m.faces[R][L])!==-1&&R!==y&&M.connectedFaces.indexOf(R)===-1&&M.connectedFaces.push(R);let C=M.length;for(let R=0;R<C;R++){let L=m.vertices[M[R]],B=m.vertices[M[(R+1)%C]];L.vsub(B,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(L),n.vmult(f,f),e.vadd(f,f);let N=M.connectedFaces[R];p.copy(this.faceNormals[N]);let I=this.getPlaneConstantOfFace(N);x.copy(p),n.vmult(x,x);let D=I-x.dot(e);for(this.clipFaceAgainstPlane(v,E,x,D);v.length;)v.shift();for(;E.length;)v.push(E.shift())}p.copy(this.faceNormals[y]);let _=this.getPlaneConstantOfFace(y);x.copy(p),n.vmult(x,x);let A=_-x.dot(e);for(let R=0;R<v.length;R++){let L=x.dot(v[R])+A;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){let B=v[R];if(L<=1e-6){let N={point:B,normal:x,depth:L};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+i,r<0)if(o<0){let d=new T;d.copy(c),e.push(d)}else{let d=new T;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){let d=new T;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new T);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new T);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let r=this.vertices,o,a,l,c,u,d,h=new T;for(let f=0;f<r.length;f++){h.copy(r[f]),e.vmult(h,h),t.vadd(h,h);let p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new T);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){let o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=i[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new T;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=i[a],c=e[n[a][0]],u=new T;t.vsub(c,u);let d=l.dot(u),h=new T;o.vsub(c,h);let f=l.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,i,r){let o=t.vertices.length,a=Ny,l=0,c=0,u=Dy,d=t.vertices;u.setZero(),pe.vectorToLocalFrame(n,i,e,a),pe.pointToLocalFrame(n,i,u,u);let h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},du=[],fu=[],Ly=new T,Ny=new T,Dy=new T,Go=class s extends Nt{constructor(t){super({type:Nt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=T,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Vo({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new T),s.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)is.set(r[o][0],r[o][1],r[o][2]),e.vmult(is,is),t.vadd(is,is),n(is.x,is.y,is.z)}calculateWorldAABB(t,e,n,i){let r=this.halfExtents;li[0].set(r.x,r.y,r.z),li[1].set(-r.x,r.y,r.z),li[2].set(-r.x,-r.y,r.z),li[3].set(-r.x,-r.y,-r.z),li[4].set(r.x,-r.y,-r.z),li[5].set(r.x,r.y,-r.z),li[6].set(-r.x,r.y,-r.z),li[7].set(r.x,-r.y,r.z);let o=li[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=li[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}},is=new T,li=[new T,new T,new T,new T,new T,new T,new T,new T],Tu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Cu={AWAKE:0,SLEEPY:1,SLEEPING:2},ee=class s extends gc{constructor(t){t===void 0&&(t={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new T,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new T,this.previousPosition=new T,this.interpolatedPosition=new T,this.initPosition=new T,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new T,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new T,this.force=new T;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?s.STATIC:s.DYNAMIC,typeof t.type==typeof s.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new T,this.quaternion=new Be,this.initQuaternion=new Be,this.previousQuaternion=new Be,this.interpolatedQuaternion=new Be,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new T,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new T,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new T,this.invInertia=new T,this.invInertiaWorld=new ss,this.invMassSolve=0,this.invInertiaSolve=new T,this.invInertiaWorldSolve=new ss,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new T(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new T(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new T,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,t===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(s.sleepyEvent)):e===s.SLEEPY&&n>i?this.wakeUp():e===s.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new T),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new T),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new T,r=new Be;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Fy,o=Uy,a=this.quaternion,l=this.aabb,c=By;for(let u=0;u!==i;u++){let d=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Oy,i=zy;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new T),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=Vy;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new T),this.type!==s.DYNAMIC)return;let n=Gy,i=Hy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new T),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=e,i=Wy;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=qy;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new T),this.type!==s.DYNAMIC)return;let n=Xy,i=Yy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=$y;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Go.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new T;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;let p=d.elements,x=this.angularFactor,m=l.x*x.x,g=l.y*x.y,v=l.z*x.z;r.x+=t*(p[0]*m+p[1]*g+p[2]*v),r.y+=t*(p[3]*m+p[4]*g+p[5]*v),r.z+=t*(p[6]*m+p[7]*g+p[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};ee.idCounter=0;ee.COLLIDE_EVENT_NAME="collide";ee.DYNAMIC=Tu.DYNAMIC;ee.STATIC=Tu.STATIC;ee.KINEMATIC=Tu.KINEMATIC;ee.AWAKE=Cu.AWAKE;ee.SLEEPY=Cu.SLEEPY;ee.SLEEPING=Cu.SLEEPING;ee.wakeupEvent={type:"wakeup"};ee.sleepyEvent={type:"sleepy"};ee.sleepEvent={type:"sleep"};var Fy=new T,Uy=new Be,By=new Cn,Oy=new ss,zy=new ss,ky=new ss,Vy=new T,Gy=new T,Hy=new T,Wy=new T,qy=new T,Xy=new T,Yy=new T,$y=new T,xc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ee.STATIC)!==0||t.sleepState===ee.SLEEPING)&&((e.type&ee.STATIC)!==0||e.sleepState===ee.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=Zy;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=Ky,i=Jy,r=jy,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new T;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Zy=new T;new T;new Be;new T;var Ky={keys:[]},Jy=[],jy=[];new T;var IA=new T;new T;var _u=class extends xc{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Mr=class{constructor(){this.rayFromWorld=new T,this.rayToWorld=new T,this.hitNormalWorld=new T,this.hitPointWorld=new T,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},Pp,Lp,Np,Dp,Fp,Up,Bp,Ru={CLOSEST:1,ANY:2,ALL:4};Pp=Nt.types.SPHERE;Lp=Nt.types.PLANE;Np=Nt.types.BOX;Dp=Nt.types.CYLINDER;Fp=Nt.types.CONVEXPOLYHEDRON;Up=Nt.types.HEIGHTFIELD;Bp=Nt.types.TRIMESH;var Fn=class s{get[Pp](){return this._intersectSphere}get[Lp](){return this._intersectPlane}get[Np](){return this._intersectBox}get[Dp](){return this._intersectConvex}get[Fp](){return this._intersectConvex}get[Up](){return this._intersectHeightfield}get[Bp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new T),e===void 0&&(e=new T),this.from=t.clone(),this.to=e.clone(),this.direction=new T,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new Mr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||s.ANY,this.result=e.result||new Mr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(yp),pu.length=0,t.broadphase.aabbQuery(t,yp,pu),this.intersectBodies(pu),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=Qy,r=tb;for(let o=0,a=t.shapes.length;o<a;o++){let l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(gb(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,l=this.direction,c=new T(0,0,1);e.vmult(c,c);let u=new T;o.vsub(n,u);let d=u.dot(c);a.vsub(n,u);let h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let p=new T,x=new T,m=new T;o.vsub(n,p);let g=-c.dot(p)/f;l.scale(g,x),o.vadd(x,m),this.reportIntersection(c,m,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;let o=eb;o.from.copy(this.from),o.to.copy(this.to),pe.pointToLocalFrame(n,e,o.from,o.from),pe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=nb,l,c,u,d;l=c=0,u=d=t.data.length-1;let h=new Cn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),pe.pointToWorldFrame(n,e,t.pillarOffset,hc),this._intersectConvex(t.pillarConvex,e,hc,i,r,bp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),pe.pointToWorldFrame(n,e,t.pillarOffset,hc),this._intersectConvex(t.pillarConvex,e,hc,i,r,bp)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=ib,p=sb;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1);else{let x=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=rb,l=Sp,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,x=this.to,m=p.distanceTo(x),g=c?c.length:u.length,v=this.result;for(let E=0;!v.shouldStop&&E<g;E++){let y=c?c[E]:E,S=u[y],M=h[y],C=e,_=n;l.copy(d[S[0]]),C.vmult(l,l),l.vadd(_,l),l.vsub(p,l),C.vmult(M,a);let A=f.dot(a);if(Math.abs(A)<this.precision)continue;let R=a.dot(l)/A;if(!(R<0)){f.scale(R,bn),bn.vadd(p,bn),Zn.copy(d[S[0]]),C.vmult(Zn,Zn),_.vadd(Zn,Zn);for(let L=1;!v.shouldStop&&L<S.length-1;L++){ci.copy(d[S[L]]),hi.copy(d[S[L+1]]),C.vmult(ci,ci),C.vmult(hi,hi),_.vadd(ci,ci),_.vadd(hi,hi);let B=bn.distanceTo(p);!(s.pointInTriangle(bn,Zn,ci,hi)||s.pointInTriangle(bn,ci,Zn,hi))||B>m||this.reportIntersection(a,bn,r,i,y)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=lb,l=pb,c=mb,u=Sp,d=cb,h=hb,f=ub,p=fb,x=db,m=t.indices;t.vertices;let g=this.from,v=this.to,E=this.direction;c.position.copy(n),c.quaternion.copy(e),pe.vectorToLocalFrame(n,e,E,d),pe.pointToLocalFrame(n,e,g,h),pe.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();let y=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let S=0,M=l.length;!this.result.shouldStop&&S!==M;S++){let C=l[S];t.getNormal(C,a),t.getVertex(m[C*3],Zn),Zn.vsub(h,u);let _=d.dot(a),A=a.dot(u)/_;if(A<0)continue;d.scale(A,bn),bn.vadd(h,bn),t.getVertex(m[C*3+1],ci),t.getVertex(m[C*3+2],hi);let R=bn.distanceSquared(h);!(s.pointInTriangle(bn,ci,Zn,hi)||s.pointInTriangle(bn,Zn,ci,hi))||R>y||(pe.vectorToWorldFrame(e,a,x),pe.pointToWorldFrame(n,e,bn,p),this.reportIntersection(x,p,r,i,C))}l.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case s.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case s.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ts),n.vsub(e,Bo),t.vsub(e,mu);let r=Ts.dot(Ts),o=Ts.dot(Bo),a=Ts.dot(mu),l=Bo.dot(Bo),c=Bo.dot(mu),u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}};Fn.CLOSEST=Ru.CLOSEST;Fn.ANY=Ru.ANY;Fn.ALL=Ru.ALL;var yp=new Cn,pu=[],Bo=new T,mu=new T,Qy=new T,tb=new Be,bn=new T,Zn=new T,ci=new T,hi=new T;new T;new Mr;var bp={faceList:[0]},hc=new T,eb=new Fn,nb=[],ib=new T,sb=new T,rb=new T,ob=new T,ab=new T,Sp=new T,lb=new T,cb=new T,hb=new T,ub=new T,db=new T,fb=new T;new Cn;var pb=[],mb=new pe,Ts=new T,uc=new T;function gb(s,t,e){e.vsub(s,Ts);let n=Ts.dot(t);return t.scale(n,uc),uc.vadd(s,uc),e.distanceTo(uc)}var _c=class s extends xc{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,l=i+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let i=this.axisList,r=i.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=i[a];for(l=a+1;l<r;l++){let u=i[l];if(this.needBroadphaseCollision(c,u)){if(!s.checkBounds(c,u,o))break;this.intersectionTest(c,u,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){let r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?s.insertionSortX(t):e===1?s.insertionSortY(t):e===2&&s.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let p=a[f],x=p.position.x;t+=x,e+=x*x;let m=p.position.y;n+=m,i+=m*m;let g=p.position.z;r+=g,o+=g*g}let u=e-t*t*c,d=i-n*n*c,h=o-r*r*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,r="x";i===1&&(r="y"),i===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},vc=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},vu=class s{constructor(t,e,n){n===void 0&&(n={}),n=vc.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};vu.idCounter=0;var yc=class{constructor(){this.spatial=new T,this.rotational=new T}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Ho=class s{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new yc,this.jacobianElementB=new yc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,Mp),a.scale(u,wp),n.invInertiaWorldSolve.vmult(o,Ap),i.invInertiaWorldSolve.vmult(l,Ep),t.multiplyVectors(Mp,Ap)+e.multiplyVectors(wp,Ep)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve,c=r+o;return a.vmult(t.rotational,dc),c+=dc.dot(t.rotational),l.vmult(e.rotational,dc),c+=dc.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=xb;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ho.idCounter=0;var Mp=new T,wp=new T,Ap=new T,Ep=new T,dc=new T,xb=new T,yu=class extends Ho{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new T,this.rj=new T,this.ni=new T}computeB(t){let e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=_b,c=vb,u=i.velocity,d=i.angularVelocity;i.force,i.torque;let h=r.velocity,f=r.angularVelocity;r.force,r.torque;let p=yb,x=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);let v=g.dot(p),E=this.restitution+1,y=E*h.dot(g)-E*u.dot(g)+f.dot(c)-d.dot(l),S=this.computeGiMf();return-v*e-y*n-t*S}getImpactVelocityAlongNormal(){let t=bb,e=Sb,n=Mb,i=wb,r=Ab;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}},_b=new T,vb=new T,yb=new T,bb=new T,Sb=new T,Mb=new T,wb=new T,Ab=new T;var PA=new T,LA=new T;var NA=new T,DA=new T;new T;new T;var FA=new T,UA=new T;var BA=new T,OA=new T,bc=class extends Ho{constructor(t,e,n){super(t,e,-n,n),this.ri=new T,this.rj=new T,this.t=new T}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=Eb,o=Tb,a=this.t;n.cross(a,r),i.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}},Eb=new T,Tb=new T,Sc=class s{constructor(t,e,n){n=vc.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Sc.idCounter=0;var Mc=class s{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=s.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Mc.idCounter=0;var zA=new T,kA=new T,VA=new T,GA=new T,HA=new T,WA=new T,qA=new T,XA=new T,YA=new T,$A=new T,ZA=new T;var KA=new T,JA=new T;new T;new T;new T;var jA=new T,QA=new T,tE=new T;new Fn;new T;var eE=new T,nE=new T,iE=[new T(1,0,0),new T(0,1,0),new T(0,0,1)],sE=new T;var rE=new T,oE=new T,aE=new T;var lE=new T,cE=new T,hE=new T,uE=new T;var dE=new T,fE=new T,pE=new T;var mE=new T,gE=new T;var xE=new T,_E=new T,vE=new T,yE=new T,bE=new T,SE=new T,ME=new T;var wE=new T;var AE=new T,EE=new T,TE=new T,CE=new T,RE=new T,IE=new T,PE=new T,LE=new T,NE=new T;var DE=new T,FE=new Cn;var UE=new T,BE=new Cn,OE=new T,zE=new T,kE=new T,VE=new T,GE=new T,HE=new T,WE=new T,qE=new Cn,XE=new T,YE=new pe,$E=new Cn,bu=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Su=class extends bu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t,d,h,f,p,x,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();let g=Rb,v=Ib,E=Cb;g.length=a,v.length=a,E.length=a;for(let y=0;y!==a;y++){let S=o[y];E[y]=0,v[y]=S.computeB(u),g[y]=1/S.computeC()}if(a!==0){for(let M=0;M!==c;M++){let C=l[M],_=C.vlambda,A=C.wlambda;_.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let M=0;M!==a;M++){let C=o[M];d=v[M],h=g[M],m=E[M],x=C.computeGWlambda(),f=h*(d-x-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),E[M]+=f,p+=f>0?f:-f,C.addToWlambda(f)}if(p*p<r)break}for(let M=0;M!==c;M++){let C=l[M],_=C.velocity,A=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),_.vadd(C.vlambda,_),C.wlambda.vmul(C.angularFactor,C.wlambda),A.vadd(C.wlambda,A)}let y=o.length,S=1/u;for(;y--;)o[y].multiplier=E[y]*S}return n}},Cb=[],Rb=[],Ib=[];var ZE=ee.STATIC;var Mu=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},wu=class extends Mu{constructor(){super(...arguments),this.type=T}constructObject(){return new T}},Te={sphereSphere:Nt.types.SPHERE,spherePlane:Nt.types.SPHERE|Nt.types.PLANE,boxBox:Nt.types.BOX|Nt.types.BOX,sphereBox:Nt.types.SPHERE|Nt.types.BOX,planeBox:Nt.types.PLANE|Nt.types.BOX,convexConvex:Nt.types.CONVEXPOLYHEDRON,sphereConvex:Nt.types.SPHERE|Nt.types.CONVEXPOLYHEDRON,planeConvex:Nt.types.PLANE|Nt.types.CONVEXPOLYHEDRON,boxConvex:Nt.types.BOX|Nt.types.CONVEXPOLYHEDRON,sphereHeightfield:Nt.types.SPHERE|Nt.types.HEIGHTFIELD,boxHeightfield:Nt.types.BOX|Nt.types.HEIGHTFIELD,convexHeightfield:Nt.types.CONVEXPOLYHEDRON|Nt.types.HEIGHTFIELD,sphereParticle:Nt.types.PARTICLE|Nt.types.SPHERE,planeParticle:Nt.types.PLANE|Nt.types.PARTICLE,boxParticle:Nt.types.BOX|Nt.types.PARTICLE,convexParticle:Nt.types.PARTICLE|Nt.types.CONVEXPOLYHEDRON,cylinderCylinder:Nt.types.CYLINDER,sphereCylinder:Nt.types.SPHERE|Nt.types.CYLINDER,planeCylinder:Nt.types.PLANE|Nt.types.CYLINDER,boxCylinder:Nt.types.BOX|Nt.types.CYLINDER,convexCylinder:Nt.types.CONVEXPOLYHEDRON|Nt.types.CYLINDER,heightfieldCylinder:Nt.types.HEIGHTFIELD|Nt.types.CYLINDER,particleCylinder:Nt.types.PARTICLE|Nt.types.CYLINDER,sphereTrimesh:Nt.types.SPHERE|Nt.types.TRIMESH,planeTrimesh:Nt.types.PLANE|Nt.types.TRIMESH},Au=class{get[Te.sphereSphere](){return this.sphereSphere}get[Te.spherePlane](){return this.spherePlane}get[Te.boxBox](){return this.boxBox}get[Te.sphereBox](){return this.sphereBox}get[Te.planeBox](){return this.planeBox}get[Te.convexConvex](){return this.convexConvex}get[Te.sphereConvex](){return this.sphereConvex}get[Te.planeConvex](){return this.planeConvex}get[Te.boxConvex](){return this.boxConvex}get[Te.sphereHeightfield](){return this.sphereHeightfield}get[Te.boxHeightfield](){return this.boxHeightfield}get[Te.convexHeightfield](){return this.convexHeightfield}get[Te.sphereParticle](){return this.sphereParticle}get[Te.planeParticle](){return this.planeParticle}get[Te.boxParticle](){return this.boxParticle}get[Te.convexParticle](){return this.convexParticle}get[Te.cylinderCylinder](){return this.convexConvex}get[Te.sphereCylinder](){return this.sphereConvex}get[Te.planeCylinder](){return this.planeConvex}get[Te.boxCylinder](){return this.boxConvex}get[Te.convexCylinder](){return this.convexConvex}get[Te.heightfieldCylinder](){return this.heightfieldCylinder}get[Te.particleCylinder](){return this.particleCylinder}get[Te.sphereTrimesh](){return this.sphereTrimesh}get[Te.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new wu,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new yu(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,u=r.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){let h=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let p=this.frictionEquationPool,x=p.length?p.pop():new bc(n,i,h*f),m=p.length?p.pop():new bc(n,i,h*f);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-h*f,x.maxForce=m.maxForce=h*f,x.ri.copy(t.ri),x.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=t.enabled,e.push(x,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Es.setZero(),br.setZero(),Sr.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Es.vadd(e.ni,Es),br.vadd(e.ri,br),Sr.vadd(e.rj,Sr)):(Es.vsub(e.ni,Es),br.vadd(e.rj,br),Sr.vadd(e.ri,Sr));let o=1/t;br.scale(o,n.ri),Sr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Es.normalize(),Es.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let l=Nb,c=Db,u=Pb,d=Lb;for(let h=0,f=t.length;h!==f;h++){let p=t[h],x=e[h],m=null;p.material&&x.material&&(m=n.getContactMaterial(p.material,x.material)||null);let g=p.type&ee.KINEMATIC&&x.type&ee.STATIC||p.type&ee.STATIC&&x.type&ee.KINEMATIC||p.type&ee.KINEMATIC&&x.type&ee.KINEMATIC;for(let v=0;v<p.shapes.length;v++){p.quaternion.mult(p.shapeOrientations[v],l),p.quaternion.vmult(p.shapeOffsets[v],u),u.vadd(p.position,u);let E=p.shapes[v];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],c),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);let S=x.shapes[y];if(!(E.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&E.collisionFilterGroup)||u.distanceTo(d)>E.boundingSphereRadius+S.boundingSphereRadius)continue;let M=null;E.material&&S.material&&(M=n.getContactMaterial(E.material,S.material)||null),this.currentContactMaterial=M||m||n.defaultContactMaterial;let C=E.type|S.type,_=this[C];if(_){let A=!1;E.type<S.type?A=_.call(this,E,S,u,d,l,c,p,x,E,S,g):A=_.call(this,S,E,d,u,c,l,x,p,E,S,g),A&&g&&(n.shapeOverlapKeeper.set(E.id,S.id),n.bodyOverlapKeeper.set(p.id,x.id))}}}}}sphereSphere(t,e,n,i,r,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,l,c,u,d){let h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,fc),h.ni.scale(h.ni.dot(fc),Tp),fc.vsub(Tp,h.rj),-fc.dot(h.ni)<=t.radius){if(d)return!0;let f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}sphereBox(t,e,n,i,r,o,a,l,c,u,d){let h=this.v3pool,f=oS;n.vsub(i,pc),e.getSideNormals(f,o);let p=t.radius,x=!1,m=lS,g=cS,v=hS,E=null,y=0,S=0,M=0,C=null;for(let U=0,H=f.length;U!==H&&x===!1;U++){let Z=iS;Z.copy(f[U]);let q=Z.length();Z.normalize();let X=pc.dot(Z);if(X<q+p&&X>0){let Y=sS,st=rS;Y.copy(f[(U+1)%3]),st.copy(f[(U+2)%3]);let xt=Y.length(),kt=st.length();Y.normalize(),st.normalize();let $t=pc.dot(Y),Jt=pc.dot(st);if($t<xt&&$t>-xt&&Jt<kt&&Jt>-kt){let nt=Math.abs(X-q-p);if((C===null||nt<C)&&(C=nt,S=$t,M=Jt,E=q,m.copy(Z),g.copy(Y),v.copy(st),y++,d))return!0}}}if(y){x=!0;let U=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(E,m),g.scale(S,g),m.vadd(g,m),v.scale(M,v),m.vadd(v,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let _=h.get(),A=aS;for(let U=0;U!==2&&!x;U++)for(let H=0;H!==2&&!x;H++)for(let Z=0;Z!==2&&!x;Z++)if(_.set(0,0,0),U?_.vadd(f[0],_):_.vsub(f[0],_),H?_.vadd(f[1],_):_.vsub(f[1],_),Z?_.vadd(f[2],_):_.vsub(f[2],_),i.vadd(_,A),A.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;x=!0;let q=this.createContactEquation(a,l,t,e,c,u);q.ri.copy(A),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(p,q.ri),q.rj.copy(_),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(_),_=null;let R=h.get(),L=h.get(),B=h.get(),N=h.get(),I=h.get(),D=f.length;for(let U=0;U!==D&&!x;U++)for(let H=0;H!==D&&!x;H++)if(U%3!==H%3){f[H].cross(f[U],R),R.normalize(),f[U].vadd(f[H],L),B.copy(n),B.vsub(L,B),B.vsub(i,B);let Z=B.dot(R);R.scale(Z,N);let q=0;for(;q===U%3||q===H%3;)q++;I.copy(n),I.vsub(N,I),I.vsub(L,I),I.vsub(i,I);let X=Math.abs(Z),Y=I.length();if(X<f[q].length()&&Y<p){if(d)return!0;x=!0;let st=this.createContactEquation(a,l,t,e,c,u);L.vadd(N,st.rj),st.rj.copy(st.rj),I.negate(st.ni),st.ni.normalize(),st.ri.copy(st.rj),st.ri.vadd(i,st.ri),st.ri.vsub(n,st.ri),st.ri.normalize(),st.ri.scale(p,st.ri),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(l.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}h.release(R,L,B,N,I)}planeBox(t,e,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,l,t,e,d)}convexConvex(t,e,n,i,r,o,a,l,c,u,d,h,f){let p=AS;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,p,h,f)){let x=[],m=ES;t.clipAgainstHull(n,r,e,i,o,p,-100,100,x);let g=0;for(let v=0;v!==x.length;v++){if(d)return!0;let E=this.createContactEquation(a,l,t,e,c,u),y=E.ri,S=E.rj;p.negate(E.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,y),S.copy(x[v].point),y.vsub(n,y),S.vsub(i,S),y.vadd(n,y),y.vsub(a.position,y),S.vadd(i,S),S.vsub(l.position,S),this.result.push(E),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,r,o,a,l,c,u,d){let h=this.v3pool;n.vsub(i,uS);let f=e.faceNormals,p=e.faces,x=e.vertices,m=t.radius,g=!1;for(let v=0;v!==x.length;v++){let E=x[v],y=mS;o.vmult(E,y),i.vadd(y,y);let S=pS;if(y.vsub(n,S),S.lengthSquared()<m*m){if(d)return!0;g=!0;let M=this.createContactEquation(a,l,t,e,c,u);M.ri.copy(S),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(m,M.ri),y.vsub(i,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let v=0,E=p.length;v!==E&&g===!1;v++){let y=f[v],S=p[v],M=gS;o.vmult(y,M);let C=xS;o.vmult(x[S[0]],C),C.vadd(i,C);let _=_S;M.scale(-m,_),n.vadd(_,_);let A=vS;_.vsub(C,A);let R=A.dot(M),L=yS;if(n.vsub(C,L),R<0&&L.dot(M)>0){let B=[];for(let N=0,I=S.length;N!==I;N++){let D=h.get();o.vmult(x[S[N]],D),i.vadd(D,D),B.push(D)}if(nS(B,M,n)){if(d)return!0;g=!0;let N=this.createContactEquation(a,l,t,e,c,u);M.scale(-m,N.ri),M.negate(N.ni);let I=h.get();M.scale(-R,I);let D=h.get();M.scale(-m,D),n.vsub(i,N.rj),N.rj.vadd(D,N.rj),N.rj.vadd(I,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(I),h.release(D),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let U=0,H=B.length;U!==H;U++)h.release(B[U]);return}else for(let N=0;N!==S.length;N++){let I=h.get(),D=h.get();o.vmult(x[S[(N+1)%S.length]],I),o.vmult(x[S[(N+2)%S.length]],D),i.vadd(I,I),i.vadd(D,D);let U=dS;D.vsub(I,U);let H=fS;U.unit(H);let Z=h.get(),q=h.get();n.vsub(I,q);let X=q.dot(H);H.scale(X,Z),Z.vadd(I,Z);let Y=h.get();if(Z.vsub(n,Y),X>0&&X*X<U.lengthSquared()&&Y.lengthSquared()<m*m){if(d)return!0;let st=this.createContactEquation(a,l,t,e,c,u);Z.vsub(i,st.rj),Z.vsub(n,st.ni),st.ni.normalize(),st.ni.scale(m,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(l.position,st.rj),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult);for(let xt=0,kt=B.length;xt!==kt;xt++)h.release(B[xt]);h.release(I),h.release(D),h.release(Z),h.release(Y),h.release(q);return}h.release(I),h.release(D),h.release(Z),h.release(Y),h.release(q)}for(let N=0,I=B.length;N!==I;N++)h.release(B[N])}}}planeConvex(t,e,n,i,r,o,a,l,c,u,d){let h=bS,f=SS;f.set(0,0,1),r.vmult(f,f);let p=0,x=MS;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,x),f.dot(x)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,u),E=wS;f.scale(f.dot(x),E),h.vsub(E,E),E.vsub(n,v.ri),v.ni.copy(f),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,l,c,u,d){let h=e.data,f=t.radius,p=e.elementSize,x=OS,m=BS;pe.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,v=Math.ceil((m.x+f)/p)+1,E=Math.floor((m.y-f)/p)-1,y=Math.ceil((m.y+f)/p)+1;if(v<0||y<0||g>h.length||E>h[0].length)return;g<0&&(g=0),v<0&&(v=0),E<0&&(E=0),y<0&&(y=0),g>=h.length&&(g=h.length-1),v>=h.length&&(v=h.length-1),y>=h[0].length&&(y=h[0].length-1),E>=h[0].length&&(E=h[0].length-1);let S=[];e.getRectMinMax(g,E,v,y,S);let M=S[0],C=S[1];if(m.z-f>C||m.z+f<M)return;let _=this.result;for(let A=g;A<v;A++)for(let R=E;R<y;R++){let L=_.length,B=!1;if(e.getConvexTrianglePillar(A,R,!1),pe.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&B||(e.getConvexTrianglePillar(A,R,!0),pe.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,l,t,e,d)),d&&B))return!0;if(_.length-L>2)return}}boxHeightfield(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,l,c,u,d){let h=e.data,f=e.elementSize,p=t.boundingSphereRadius,x=FS,m=US,g=DS;pe.pointToLocalFrame(i,o,n,g);let v=Math.floor((g.x-p)/f)-1,E=Math.ceil((g.x+p)/f)+1,y=Math.floor((g.y-p)/f)-1,S=Math.ceil((g.y+p)/f)+1;if(E<0||S<0||v>h.length||y>h[0].length)return;v<0&&(v=0),E<0&&(E=0),y<0&&(y=0),S<0&&(S=0),v>=h.length&&(v=h.length-1),E>=h.length&&(E=h.length-1),S>=h[0].length&&(S=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);let M=[];e.getRectMinMax(v,y,E,S,M);let C=M[0],_=M[1];if(!(g.z-p>_||g.z+p<C))for(let A=v;A<E;A++)for(let R=y;R<S;R++){let L=!1;if(e.getConvexTrianglePillar(A,R,!1),pe.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&L||(e.getConvexTrianglePillar(A,R,!0),pe.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,l,null,null,d,m,null)),d&&L))return!0}}sphereParticle(t,e,n,i,r,o,a,l,c,u,d){let h=IS;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;let p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,l,c,u,d){let h=TS;h.set(0,0,1),a.quaternion.vmult(h,h);let f=CS;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,e,t,c,u);x.ni.copy(h),x.ni.negate(x.ni),x.ri.set(0,0,0);let m=RS;h.scale(h.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,l,t,e,d)}convexParticle(t,e,n,i,r,o,a,l,c,u,d){let h=-1,f=LS,p=NS,x=null,m=PS;if(m.copy(i),m.vsub(n,m),r.conjugate(Cp),Cp.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,v=t.faces.length;g!==v;g++){let E=[t.worldVertices[t.faces[g][0]]],y=t.worldFaceNormals[g];i.vsub(E[0],Rp);let S=-y.dot(Rp);if(x===null||Math.abs(S)<Math.abs(x)){if(d)return!0;x=S,h=g,f.copy(y)}}if(h!==-1){let g=this.createContactEquation(l,a,e,t,c,u);f.scale(x,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);let v=g.ri,E=g.rj;v.vadd(i,v),v.vsub(l.position,v),E.vadd(n,E),E.vsub(a.position,E),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,o,r,l,a,c,u,d)}particleCylinder(t,e,n,i,r,o,a,l,c,u,d){return this.convexParticle(e,t,i,n,o,r,l,a,c,u,d)}sphereTrimesh(t,e,n,i,r,o,a,l,c,u,d){let h=Gb,f=Hb,p=Wb,x=qb,m=Xb,g=Yb,v=Jb,E=Vb,y=zb,S=jb;pe.pointToLocalFrame(i,o,n,m);let M=t.radius;v.lowerBound.set(m.x-M,m.y-M,m.z-M),v.upperBound.set(m.x+M,m.y+M,m.z+M),e.getTrianglesInAABB(v,S);let C=kb,_=t.radius*t.radius;for(let N=0;N<S.length;N++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[S[N]*3+I],C),C.vsub(m,y),y.lengthSquared()<=_){if(E.copy(C),pe.pointToWorldFrame(i,o,E,C),C.vsub(n,y),d)return!0;let D=this.createContactEquation(a,l,t,e,c,u);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(C),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let N=0;N<S.length;N++)for(let I=0;I<3;I++){e.getVertex(e.indices[S[N]*3+I],h),e.getVertex(e.indices[S[N]*3+(I+1)%3],f),f.vsub(h,p),m.vsub(f,g);let D=g.dot(p);m.vsub(h,g);let U=g.dot(p);if(U>0&&D<0&&(m.vsub(h,g),x.copy(p),x.normalize(),U=g.dot(x),x.scale(U,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;let Z=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,Z.ni),Z.ni.normalize(),Z.ni.scale(t.radius,Z.ri),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),pe.pointToWorldFrame(i,o,g,g),g.vsub(l.position,Z.rj),pe.vectorToWorldFrame(o,Z.ni,Z.ni),pe.vectorToWorldFrame(o,Z.ri,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}let A=$b,R=Zb,L=Kb,B=Ob;for(let N=0,I=S.length;N!==I;N++){e.getTriangleVertices(S[N],A,R,L),e.getNormal(S[N],B),m.vsub(A,g);let D=g.dot(B);if(B.scale(D,g),m.vsub(g,g),D=g.distanceTo(m),Fn.pointInTriangle(g,A,R,L)&&D<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),pe.pointToWorldFrame(i,o,g,g),g.vsub(l.position,U.rj),pe.vectorToWorldFrame(o,U.ni,U.ni),pe.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,r,o,a,l,c,u,d){let h=new T,f=Fb;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);let x=new T;x.copy(h),pe.pointToWorldFrame(i,o,x,h);let m=Ub;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,u);v.ni.copy(f);let E=Bb;f.scale(m.dot(f),E),h.vsub(E,E),v.ri.copy(E),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Es=new T,br=new T,Sr=new T,Pb=new T,Lb=new T,Nb=new Be,Db=new Be,Fb=new T,Ub=new T,Bb=new T,Ob=new T,zb=new T;new T;var kb=new T,Vb=new T,Gb=new T,Hb=new T,Wb=new T,qb=new T,Xb=new T,Yb=new T,$b=new T,Zb=new T,Kb=new T,Jb=new Cn,jb=[],fc=new T,Tp=new T,Qb=new T,tS=new T,eS=new T;function nS(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=Qb;s[(r+1)%i].vsub(o,a);let l=tS;a.cross(t,l);let c=eS;e.vsub(o,c);let u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var pc=new T,iS=new T,sS=new T,rS=new T,oS=[new T,new T,new T,new T,new T,new T],aS=new T,lS=new T,cS=new T,hS=new T,uS=new T,dS=new T,fS=new T,pS=new T,mS=new T,gS=new T,xS=new T,_S=new T,vS=new T,yS=new T;new T;new T;var bS=new T,SS=new T,MS=new T,wS=new T,AS=new T,ES=new T,TS=new T,CS=new T,RS=new T,IS=new T,Cp=new Be,PS=new T;new T;var LS=new T,Rp=new T,NS=new T,DS=new T,FS=new T,US=[0],BS=new T,OS=new T,wc=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let l=0;l<r;l++){let c=!1,u=n[l];for(;u>i[a];)a++;c=u===i[a],c||Ip(t,u)}a=0;for(let l=0;l<o;l++){let c=!1,u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||Ip(e,u)}}};function Ip(s,t){s.push((t&4294901760)>>16,t&65535)}var gu=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,Eu=class{constructor(){this.data={keys:[]}}get(t,e){let n=gu(t,e);return this.data[n]}set(t,e,n){let i=gu(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=gu(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Ac=class extends gc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new T,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new T,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new _u,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Su,this.constraints=[],this.narrowphase=new Au(this),this.collisionMatrix=new mc,this.collisionMatrixPrevious=new mc,this.bodyOverlapKeeper=new wc,this.shapeOverlapKeeper=new wc,this.contactmaterials=[],this.contactMaterialTable=new Eu,this.defaultMaterial=new Mc("default"),this.defaultContactMaterial=new Sc(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Mr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Fn.ALL,n.from=t,n.to=e,n.callback=i,xu.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Fn.ANY,n.from=t,n.to=e,n.result=i,xu.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Fn.CLOSEST,n.from=t,n.to=e,n.result=i,xu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ee&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Ge.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=HS,i=WS,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=ee.DYNAMIC,h=-1/0,f=this.constraints,p=GS;l.length();let x=l.x,m=l.y,g=l.z,v=0;for(c&&(h=Ge.now()),v=0;v!==r;v++){let N=o[v];if(N.type===d){let I=N.force,D=N.mass;I.x+=D*x,I.y+=D*m,I.z+=D*g}}for(let N=0,I=this.subsystems.length;N!==I;N++)this.subsystems[N].update();c&&(h=Ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Ge.now()-h);let E=f.length;for(v=0;v!==E;v++){let N=f[v];if(!N.collideConnected)for(let I=n.length-1;I>=0;I-=1)(N.bodyA===n[I]&&N.bodyB===i[I]||N.bodyB===n[I]&&N.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(h=Ge.now());let y=VS,S=e.length;for(v=0;v!==S;v++)y.push(e[v]);e.length=0;let M=this.frictionEquations.length;for(v=0;v!==M;v++)p.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,p),c&&(u.narrowphase=Ge.now()-h),c&&(h=Ge.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let C=e.length;for(let N=0;N!==C;N++){let I=e[N],D=I.bi,U=I.bj,H=I.si,Z=I.sj,q;if(D.material&&U.material?q=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(I.restitution=D.material.restitution*U.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===ee.DYNAMIC&&D.sleepState===ee.SLEEPING&&U.sleepState===ee.AWAKE&&U.type!==ee.STATIC){let X=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),Y=U.sleepSpeedLimit**2;X>=Y*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===ee.DYNAMIC&&U.sleepState===ee.SLEEPING&&D.sleepState===ee.AWAKE&&D.type!==ee.STATIC){let X=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),Y=D.sleepSpeedLimit**2;X>=Y*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(Oo.body=U,Oo.contact=I,D.dispatchEvent(Oo),Oo.body=D,U.dispatchEvent(Oo)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(H.id,Z.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ge.now()-h,h=Ge.now()),v=0;v!==r;v++){let N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(E=f.length,v=0;v!==E;v++){let N=f[v];N.update();for(let I=0,D=N.equations.length;I!==D;I++){let U=N.equations[I];a.addEquation(U)}}a.solve(t,this),c&&(u.solve=Ge.now()-h),a.removeAllEquations();let _=Math.pow;for(v=0;v!==r;v++){let N=o[v];if(N.type&d){let I=_(1-N.linearDamping,t),D=N.velocity;D.scale(I,D);let U=N.angularVelocity;if(U){let H=_(1-N.angularDamping,t);U.scale(H,U)}}}this.dispatchEvent(kS),c&&(h=Ge.now());let R=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,R,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ge.now()-h),this.stepnumber+=1,this.dispatchEvent(zS);let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==r;v++){let N=o[v];N.sleepTick(this.time),N.sleepState!==ee.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ci,Ri),t){for(let r=0,o=Ci.length;r<o;r+=2)zo.bodyA=this.getBodyById(Ci[r]),zo.bodyB=this.getBodyById(Ci[r+1]),this.dispatchEvent(zo);zo.bodyA=zo.bodyB=null}if(e){for(let r=0,o=Ri.length;r<o;r+=2)ko.bodyA=this.getBodyById(Ri[r]),ko.bodyB=this.getBodyById(Ri[r+1]),this.dispatchEvent(ko);ko.bodyA=ko.bodyB=null}Ci.length=Ri.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ci,Ri),n){for(let r=0,o=Ci.length;r<o;r+=2){let a=this.getShapeById(Ci[r]),l=this.getShapeById(Ci[r+1]);Ii.shapeA=a,Ii.shapeB=l,a&&(Ii.bodyA=a.body),l&&(Ii.bodyB=l.body),this.dispatchEvent(Ii)}Ii.bodyA=Ii.bodyB=Ii.shapeA=Ii.shapeB=null}if(i){for(let r=0,o=Ri.length;r<o;r+=2){let a=this.getShapeById(Ri[r]),l=this.getShapeById(Ri[r+1]);Pi.shapeA=a,Pi.shapeB=l,a&&(Pi.bodyA=a.body),l&&(Pi.bodyB=l.body),this.dispatchEvent(Pi)}Pi.bodyA=Pi.bodyB=Pi.shapeA=Pi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Cn;var xu=new Fn,Ge=globalThis.performance||{};if(!Ge.now){let s=Date.now();Ge.timing&&Ge.timing.navigationStart&&(s=Ge.timing.navigationStart),Ge.now=()=>Date.now()-s}new T;var zS={type:"postStep"},kS={type:"preStep"},Oo={type:ee.COLLIDE_EVENT_NAME,body:null,contact:null},VS=[],GS=[],HS=[],WS=[],Ci=[],Ri=[],zo={type:"beginContact",bodyA:null,bodyB:null},ko={type:"endContact",bodyA:null,bodyB:null},Ii={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var qS=.24,gn=1e-8,mn=s=>Array.isArray(s)?s:[s.x,s.y,s.z],di=(s,t)=>s.map((e,n)=>e+t[n]),ce=(s,t)=>s.map((e,n)=>e-t[n]),Kn=(s,t)=>s.map(e=>e*t),Le=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],Ec=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],rs=s=>Le(s,s),wr=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Ar=(s,t,e)=>Math.max(t,Math.min(e,s)),ui=s=>new T(...mn(s)),Er=(s,t)=>{let e=2*(t.y*s[2]-t.z*s[1]),n=2*(t.z*s[0]-t.x*s[2]),i=2*(t.x*s[1]-t.y*s[0]);return[s[0]+t.w*e+t.y*i-t.z*n,s[1]+t.w*n+t.z*e-t.x*i,s[2]+t.w*i+t.x*n-t.y*e]},Op=(s,t)=>Er(s,new Be(-t.x,-t.y,-t.z,t.w));function Lu(s,t){let e=rs(t);if(e<1e-12)return;let n=Kn(t,1/Math.sqrt(e));s.some(i=>Math.abs(Le(i,n))>1-1e-7)||s.push(n)}function XS(s){let t=[],e=[],n=[];for(let i of s.faces){let[r,o,a]=i.map(l=>s.vertices[l]);Lu(t,Ec(ce(o,r),ce(a,r)));for(let l=0;l<i.length;l++)Lu(e,ce(s.vertices[i[(l+1)%i.length]],s.vertices[i[l]]));for(let l=1;l<i.length-1;l++)n.push([r,s.vertices[i[l]],s.vertices[i[l+1]]])}return{...s,normals:t,edges:e,triangles:n}}function zp(s,t){return t.faces.every(e=>{let[n,i,r]=e.map(o=>t.vertices[o]);return Le(ce(s,n),Ec(ce(i,n),ce(r,n)))<=gn})}function YS(s,t,e,n,i){let r=s.vertices.map(f=>Er(f,t)),o=s.normals.map(f=>Er(f,t)),a=s.edges.map(f=>Er(f,t)),l=[...o,...i.axes];for(let f of a)for(let p of i.axes)Lu(l,Ec(f,p));let c=ce(e,i.position),u=0,d=1,h=[0,0,0];for(let f of l){let p=r.map(M=>Le(M,f)),x=Le(c,f),m=Math.min(...p)+x,g=Math.max(...p)+x,v=i.half.reduce((M,C,_)=>M+C*Math.abs(Le(i.axes[_],f)),0),E=Le(n,f);if(Math.abs(E)<gn){if(m>v+gn||g<-v-gn)return null;continue}let y=(-v-g)/E,S=(v-m)/E;if(y>S&&([y,S]=[S,y]),y>u&&(u=y,h=Kn(f,E>0?-1:1)),d=Math.min(d,S),u>d+gn)return null}return d>=0&&u<=1?{t:Math.max(0,u),normal:h}:null}function Iu(s,t,e,n=0){let i=ce(s,e.position),r=ce(t,s),o=e.axes.map(u=>Le(i,u)),a=e.axes.map(u=>Le(r,u)),l=0,c=1;for(let u=0;u<3;u++){let d=e.half[u]+n;if(Math.abs(a[u])<gn){if(Math.abs(o[u])>d)return null;continue}let h=(-d-o[u])/a[u],f=(d-o[u])/a[u];if(h>f&&([h,f]=[f,h]),l=Math.max(l,h),c=Math.min(c,f),l>c)return null}return l}function Pu(s,t,e,n){let i=ce(e,t),r=ce(n,t),o=ce(s,t),a=Le(i,o),l=Le(r,o);if(a<=0&&l<=0)return t;let c=ce(s,e),u=Le(i,c),d=Le(r,c);if(u>=0&&d<=u)return e;let h=a*d-u*l;if(h<=0&&a>=0&&u<=0)return di(t,Kn(i,a/(a-u)));let f=ce(s,n),p=Le(i,f),x=Le(r,f);if(x>=0&&p<=x)return n;let m=p*l-a*x;if(m<=0&&l>=0&&x<=0)return di(t,Kn(r,l/(l-x)));let g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return di(e,Kn(ce(n,e),(d-u)/(d-u+p-x)));let v=1/(g+m+h);return di(t,di(Kn(i,m*v),Kn(r,h*v)))}function $S(s,t,e,n){let i=ce(t,s),r=ce(n,e),o=ce(s,e),a=Le(i,i),l=Le(i,r),c=Le(r,r),u=Le(i,o),d=Le(r,o);if(a<gn)return{t:0,point:di(e,Kn(r,c>gn?Ar(d/c,0,1):0))};let h=a*c-l*l,f=h>gn?Ar((l*d-c*u)/h,0,1):0,p=c>gn?(l*f+d)/c:0;return p<0?(p=0,f=Ar(-u/a,0,1)):p>1&&(p=1,f=Ar((l-u)/a,0,1)),{t:f,point:di(e,Kn(r,p))}}function ZS(s,t,e,n,i){let r=ce(t,s),o=Ec(ce(n,e),ce(i,e)),a=Le(o,r);if(Math.abs(a)>gn){let c=Le(o,ce(e,s))/a;if(c>=0&&c<=1){let u=wr(s,t,c),d=Pu(u,e,n,i);if(rs(ce(u,d))<1e-12)return{distance2:0,t:c,point:d}}}let l=[{t:0,point:Pu(s,e,n,i)},{t:1,point:Pu(t,e,n,i)}];for(let[c,u]of[[e,n],[n,i],[i,e]])l.push($S(s,t,c,u));for(let c of l)c.distance2=rs(ce(wr(s,t,c.t),c.point));return l.reduce((c,u)=>u.distance2<c.distance2?u:c)}function kp(s=Ti,t={form:"classic",size:1}){let e=new Ac({gravity:new T(0,0,0),allowSleep:!0});e.broadphase=new _c(e);let n=[],i=[],r=new Map,o,a,l=[];function c(C){C.position=mn(C.body.position),C.axes=[[1,0,0],[0,1,0],[0,0,1]].map(_=>Er(_,C.body.quaternion)),C.body.aabbNeedsUpdate=!0,C.body.updateAABB(),C.min=mn(C.body.aabb.lowerBound),C.max=mn(C.body.aabb.upperBound),e.broadphase.dirty=!0}function u(C,_,A="solid",R=[0,0,0],L){let B=new ee({mass:0,shape:new Go(new T(...C.map(I=>I/2))),position:ui(_)});B.quaternion.setFromEuler(...R,"XYZ"),B.kind=A,B.obstacleId=L,e.addBody(B);let N={body:B,half:C.map(I=>I/2),kind:A,id:L};return c(N),i.push(N),N}for(let C of s.obstacles??[])u(C.size,C.position,C.kind??"solid",C.rotation??[0,0,0],C.id);for(let C of s.doors??[]){let _=yr(C,!1),A=u(_.size,_.position,"door",_.rotation,C.id);r.set(C.id,{door:C,obstacle:A,open:!1})}let d=mn(s.start??[0,1,0]),h=new ee({mass:1,position:ui(d),linearDamping:0,angularDamping:1,fixedRotation:!0,allowSleep:!1});h.kind="plane",e.addBody(h);function f(C="classic",_=1){for(o=Uo(C,_),a=o.parts.map(XS);h.shapes.length;)h.removeShape(h.shapes[0]);for(let A of a){let R=[0,1,2].map(L=>A.vertices.reduce((B,N)=>B+N[L],0)/A.vertices.length);h.addShape(new Vo({vertices:A.vertices.map(L=>ui(ce(L,R))),faces:A.faces}),ui(R))}return h.updateMassProperties(),h.updateBoundingRadius(),h.aabbNeedsUpdate=!0,l=[],e.broadphase.dirty=!0,o}f(t.form,t.size);function p(C,_=!0){let A=r.get(C);if(!A)return!1;let R=yr(A.door,_);return A.obstacle.body.position.copy(ui(R.position)),A.obstacle.body.quaternion.setFromEuler(...R.rotation,"XYZ"),A.open=!!_,c(A.obstacle),!0}function x(){for(let C of r.keys())p(C,!1);h.position.copy(ui(d)),h.previousPosition.copy(h.position),h.interpolatedPosition.copy(h.position),h.quaternion.set(0,0,0,1),h.previousQuaternion.copy(h.quaternion),h.interpolatedQuaternion.copy(h.quaternion);for(let C of["velocity","angularVelocity","force","torque"])h[C].setZero();h.collisionFilterMask=-1,h.aabbNeedsUpdate=!0,h.wakeUp(),e.accumulator=0,e.time=0,e.stepnumber=0,e.contacts.length=0,e.frictionEquations.length=0,e.collisionMatrix.reset(),e.collisionMatrixPrevious.reset(),e.broadphase.dirty=!0,l=[]}function m(C,_){let A=o.boundingRadius;return i.filter(R=>[0,1,2].every(L=>Math.min(C[L],_[L])-A<=R.max[L]&&Math.max(C[L],_[L])+A>=R.min[L]))}function g(C,_,A){let R=ce(_,C),L=null;for(let B of m(C,_))for(let N of a){let I=YS(N,A,C,R,B);I&&(!L||I.t<L.t)&&(L={...I,body:B.body})}return L}function v(C,_=h.velocity,A=h.quaternion){if(!Number.isFinite(C)||C<0)throw new TypeError("advance requires a non-negative finite timestep");let R=mn(h.position),L=Kn(mn(_),C),B=h.quaternion.clone(),N=new Be(A.x,A.y,A.z,A.w);N.normalize();let I=2*Math.acos(Ar(Math.abs(B.x*N.x+B.y*N.y+B.z*N.z+B.w*N.w),0,1)),D=Math.max(1,Math.min(512,Math.ceil(Math.sqrt(rs(L))/.12)),Math.ceil(I/.012));h.previousPosition.copy(h.position),h.previousQuaternion.copy(B),h.velocity.copy(ui(_)),l=[];let U=R,H=B,Z=null;for(let X=0;X<D;X++){let Y=di(R,Kn(L,(X+1)/D)),st=new Be,xt=new Be;if(B.slerp(N,(X+.5)/D,st),B.slerp(N,(X+1)/D,xt),h.collisionFilterMask!==0&&(Z=g(U,Y,st),!Z)){let kt=g(Y,Y,xt);kt&&(Z={...kt,t:0})}if(Z){let kt=Math.sqrt(rs(ce(Y,U))),$t=Math.max(0,Z.t-(kt>gn?.001/kt:0)),Jt=wr(U,Y,$t);$t>0&&(H=st),l.push({from:U,to:Jt,orientation:H}),U=Jt;break}l.push({from:U,to:Y,orientation:st}),U=Y,H=xt}h.position.copy(ui(U)),h.quaternion.copy(H),h.interpolatedPosition.copy(h.position),h.interpolatedQuaternion.copy(h.quaternion),h.aabbNeedsUpdate=!0,e.broadphase.dirty=!0,e.time+=C,e.stepnumber+=D;let q={collided:!!Z,body:Z?.body??null,normal:Z?ui(Z.normal):null,steps:D,safePosition:h.position.clone()};return Z&&(h.velocity.setZero(),h.dispatchEvent({type:"collide",body:Z.body,contact:{bi:h,bj:Z.body,ni:ui(Z.normal)}})),q}function E(C,_){return C=mn(C),_=mn(_),!i.some(A=>{let R=Iu(C,_,A);return R!==null&&R<1-1e-6})}function y(C,_=h.previousPosition,A=0){let R=mn(C.position??C),L=Math.max(0,Number(C.collectRadius??qS))+Math.max(0,Number(A)||0),B=mn(_),N=l.length&&rs(ce(B,l[0].from))<1e-8?l:[{from:B,to:mn(h.position),orientation:h.quaternion}];for(let I of N){let D=ce(I.to,I.from),U=rs(D),H=wr(I.from,I.to,U>gn?Ar(Le(ce(R,I.from),D)/U,0,1):0);if(rs(ce(R,H))>(L+o.boundingRadius)**2)continue;let Z=Op(ce(R,I.from),I.orientation),q=Op(ce(R,I.to),I.orientation);for(let X of a){if((zp(Z,X)||zp(q,X))&&E(R,R))return!0;for(let Y of X.triangles){let st=ZS(Z,q,...Y);if(st.distance2>L**2+gn)continue;let xt=di(wr(I.from,I.to,st.t),Er(st.point,I.orientation));if(E(xt,R))return!0}}}return!1}function S(C,_,A=.18){C=mn(C),_=mn(_);let R=1;for(let I of i){let D=Iu(C,_,I,A);D!==null&&(R=Math.min(R,Math.max(0,D-.015)))}let[L,B,N]=wr(C,_,R);return{x:L,y:B,z:N}}function M(C){let _=mn(C),A=di(_,[0,50,0]),R=1/0;for(let L of i){if(!/ceiling|roof|floor|slab/.test(L.kind))continue;let B=Iu(_,A,L);B!==null&&B>gn&&(R=Math.min(R,_[1]+50*B))}return R}return x(),{world:e,plane:h,blocks:n,level:s,reset:x,configureAircraft:f,setDoorOpen:p,advance:v,canCollectStar:y,hasLineOfSight:E,traceCamera:S,getCeilingAt:M,get aircraft(){return o},doorBodies:r}}var KS=new Set(["hall-cloakroom","cloakroom-wc","cloakroom-storage","bedroom","bathroom"]),Vp=s=>s.floor==="ug"||s.id.includes("stairs")||KS.has(s.id),Li=structuredClone(Ti);Li.collectibles=[];Li.name="Papierduell";Li.doors=Li.doors.map(s=>({...s,duelOpen:!Vp(s),signText:Vp(s)?"ZU":"OFFEN"}));var Gp=Object.freeze(Li.doors.filter(s=>s.duelOpen).map(s=>s.id)),Cs=Object.freeze(["p1","p2","p3","p4","p5"]),fi=Object.freeze({p1:"#68cdb4",p2:"#e48b7e",p3:"#78b9ef",p4:"#ba9bea",p5:"#e9c25d"}),nT=Object.freeze([Object.freeze({id:"p1",x:-3.8,y:1.5,z:-5.5,heading:1.85}),Object.freeze({id:"p2",x:17.2,y:1.5,z:16,heading:-Math.PI/2+.2}),Object.freeze({id:"p3",x:17.2,y:1.5,z:-5.5,heading:Math.PI-.15}),Object.freeze({id:"p4",x:-3.8,y:1.5,z:16,heading:.12}),Object.freeze({id:"p5",x:7,y:1.5,z:5.6,heading:Math.PI})]),Tc=Object.freeze({minPlayers:2,maxPlayers:5,hp:100,shotDamage:20,shotCooldown:.35,shotSpeed:9,lifetime:2.5,roundSeconds:180,shotRadius:.025,wallDamage:10,wallCooldown:1.25,recoverySeconds:.5,stepSeconds:1/30});function Hp({position:s,input:t,heading:e,speed:n,tuning:i,thermal:r,lift:o=!1}){let a=!!(r&&Math.abs(t.pitch)>.25&&Math.abs(t.steer)<.35),l=r?t.pitch<-.25?-r.strength*.65:r.strength:0;return{ride:a,x:a?(r.x-s.x)*2:Math.sin(e)*n,z:a?(r.z-s.z)*2:-Math.cos(e)*n,targetVertical:-i.sinkRate+t.pitch*i.pitchRate+l+(o?1.9:0)}}var Tr=Object.freeze(fp("classic",1)),Nu=(s,t,e)=>Math.max(t,Math.min(e,s)),JS=s=>({steer:typeof s?.steer=="number"&&Number.isFinite(s.steer)?Nu(s.steer,-1,1):0,pitch:typeof s?.pitch=="number"&&Number.isFinite(s.pitch)?Nu(s.pitch,-1,1):0,fire:s?.fire===!0});function jS(s,t,e=0){let n=Math.cos(s/2),i=Math.sin(s/2),r=Math.cos(-t/2),o=Math.sin(-t/2),a=Math.cos(e/2),l=Math.sin(e/2);return{x:i*r*a+n*o*l,y:n*o*a-i*r*l,z:n*r*l-i*o*a,w:n*r*a+i*o*l}}function QS(s,t,e,n=Li){let i=JS(t),r=(f,p,x)=>p+(f-p)*Math.exp(-x*e),o={steer:r(s.input?.steer??0,i.steer,9),pitch:r(s.input?.pitch??0,i.pitch,7)},a=Math.atan2(Math.sin(s.heading+o.steer*Tr.turnRate*e),Math.cos(s.heading+o.steer*Tr.turnRate*e)),l=s.position,c=n.thermals?.find(f=>Math.hypot(l.x-f.x,l.z-f.z)<f.r&&l.y>=f.y&&l.y<f.y+f.height),u=Hp({position:l,input:o,heading:a,speed:Tr.speed,tuning:Tr,thermal:c,lift:!1}),d=r(s.verticalSpeed??0,u.targetVertical,4),h=jS(Math.atan2(d,u.ride?Math.max(2,Tr.speed):Tr.speed)*.7,a,-o.steer*.42);return{heading:a,input:o,verticalSpeed:d,quaternion:h,velocity:{x:u.x,y:d,z:u.z}}}function Wp(s,t,e){let n=Number.isFinite(e)?Nu(e,0,.1):0,i={...s,position:{...s.position},quaternion:{...s.quaternion},input:{...s.input||{}}};if(s.recovering||s.eliminated||s.hp<=0)return i;for(;n>1e-9;){let r=Math.min(n,Tc.stepSeconds),o=QS(i,t,r);i={...i,...o,position:{x:i.position.x+o.velocity.x*r,y:i.position.y+o.velocity.y*r,z:i.position.z+o.velocity.z*r}},n-=r}return delete i.velocity,i}function qp(s){let t=kp(Li,{form:"classic",size:1}),e=mp(s,t,()=>({width:innerWidth,height:innerHeight}));for(let A of Gp)t.setDoorOpen(A,!0),e.setDoorOpen(A,!0);e.sling.visible=!1;let n=Object.fromEntries(Cs.map((A,R)=>{let L=R===0?e.plane:e.plane.clone(!0);return L.name=`Papierflieger ${A}`,R&&e.scene.add(L),[A,L]}));for(let[A,R]of Object.entries(n))R.traverse(L=>{L.isMesh&&(L.material=L.material.clone(),L.material.color.lerp(new Kt(fi[A]),.6))}),R.visible=!1;let i=new rn;e.scene.add(i);let r=new mo(Tc.shotRadius,8,6),o=Object.fromEntries(Cs.map(A=>[A,new qn({color:fi[A],emissive:fi[A],emissiveIntensity:.8,roughness:.85})])),a=new Map,l=new Map,c=new V,u=new V,d=new V,h=new V,f=new V,p=new on,x=document.getElementById("duel-reticle"),m=null,g=performance.now(),v=!1,E=-1,y={},S=0,M=null;function C(A,R="p1",L=1/60,B={}){if(L=Math.max(0,Math.min(.05,L)),S+=L,!A&&m){m=null,v=!1,E=-1,y={},l.clear(),M=null;for(let H of Object.values(n))H.visible=!1;i.clear(),a.clear()}if(A&&A!==m){A.tick<E&&(v=!1,l.clear(),y={}),E=A.tick,g=performance.now(),m=A;let Z=new Set(A.players.map(X=>X.id));for(let[X,Y]of Object.entries(n))Z.has(X)||(Y.visible=!1,l.delete(X));for(let X of A.players){let Y=n[X.id];if(!Y)continue;let xt=!l.get(X.id)||!v;l.set(X.id,{player:X,from:xt?new V().copy(X.position):Y.position.clone(),fromQ:xt?new on().copy(X.quaternion):Y.quaternion.clone()}),xt&&(Y.position.copy(X.position),Y.quaternion.copy(X.quaternion)),Y.visible=X.hp>0,y[X.id]!==void 0&&X.hp<y[X.id]&&(Y.userData.hitUntil=S+.22),y[X.id]=X.hp}let q=new Set(A.projectiles.map(X=>X.id));for(let[X,Y]of a)q.has(X)||(i.remove(Y),a.delete(X));for(let X of A.projectiles){let Y=a.get(X.id);Y||(Y=new ve(r,o[X.owner]||o.p1),Y.position.copy(X.position),a.set(X.id,Y),i.add(Y)),Y.userData.from=Y.position.clone(),Y.userData.target=new V().copy(X.position)}}let N=Math.min(.1,Math.max(0,(performance.now()-g)/1e3)),I=Math.min(1,N/.1);for(let[H,Z]of l){let q=n[H];if(H===R){let X=B.active&&Z.player.hp>0&&!Z.player.recovering?Wp(Z.player,B,N):Z.player,Y=q.position.distanceTo(X.position)>.6?1:1-Math.exp(-L*28);q.position.lerp(X.position,Y),p.copy(X.quaternion),q.quaternion.slerp(p,Y)}else q.position.lerpVectors(Z.from,Z.player.position,I),q.quaternion.copy(Z.fromQ).slerp(p.copy(Z.player.quaternion),I);q.traverse(X=>{X.isMesh&&(X.material.emissive.set(S<(q.userData.hitUntil||0)?"#e24b3b":"#000000"),X.material.emissiveIntensity=.75)})}for(let H of a.values())H.position.lerpVectors(H.userData.from,H.userData.target,I);let D=l.get(R)?.player.hp>0?R:l.get(M)?.player.hp>0?M:[...l].find(([,H])=>H.player.hp>0)?.[0]||R;D!==M&&(M=D,v=!1);let U=n[M];U&&l.has(M)?(t.plane.position.copy(U.position),t.plane.quaternion.copy(U.quaternion),h.set(0,0,-1).applyQuaternion(U.quaternion),c.copy(U.position).addScaledVector(h,-1.45),c.y+=.55,c.copy(t.traceCamera(U.position,c,.1)),u.copy(U.position).addScaledVector(h,2.8),u.y+=.04,v?(e.camera.position.lerp(c,1-Math.exp(-L*10)),d.lerp(u,1-Math.exp(-L*12))):(e.camera.position.copy(c),d.copy(u),v=!0),e.camera.position.copy(t.traceCamera(U.position,e.camera.position,.09)),e.camera.lookAt(d),x&&(e.camera.updateMatrixWorld(),f.copy(U.position).addScaledVector(h,8).project(e.camera),x.style.left=`${(f.x*.5+.5)*100}%`,x.style.top=`${(-f.y*.5+.5)*100}%`)):(e.camera.position.set(9,5.2,-8),e.camera.lookAt(7,.9,0)),e.update(L,S),e.render()}function _(){r.dispose(),Object.values(o).forEach(A=>A.dispose()),e.dispose()}return{update:C,resize:e.resize,dispose:_}}var Cc="stubenflieger.duel.v1:",Wo=s=>Math.max(-1,Math.min(1,Number.isFinite(s)?s:0));function Rc(s){if(typeof s!="string"||!s.startsWith("#"))return null;let t=new URLSearchParams(s.slice(1)).get("room");return typeof t=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)?t.toLowerCase():null}function Xp(s){let t=String(s||"").trim().replace(/\s+/g," ");if(t.length<2||t.length>18||!/^[\p{L}\p{N} _.'-]+$/u.test(t))throw new Error("W\xE4hle einen Namen mit 2\u201318 Buchstaben, Zahlen, Leerzeichen oder . _ -");return t}function Yp(s,t={}){let e=(...n)=>n.some(i=>s.has(i));return{steer:Wo(Number(e("KeyD","ArrowRight"))-Number(e("KeyA","ArrowLeft"))+(t.steer||0)),pitch:Wo(Number(e("KeyW","ArrowUp"))-Number(e("KeyS","ArrowDown"))+(t.pitch||0)),fire:e("Space")||t.fire===!0}}function $p(s,t){let e=Rc(`#room=${t}`);if(!e)throw new Error("Diese Einladung ist ung\xFCltig.");return`${new URL(s).origin}/duel#room=${e}`}function Zp(s){let t=Number.isFinite(s)?Math.max(0,Math.ceil(s)):0;return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ic(s,t,e){let n=s.filter(i=>!i.left);return!!(e&&e===t&&n.length>=2&&n.length<=5&&n.some(i=>i.id===e)&&n.every(i=>i.connected&&i.ready))}function Cr(s,t){return!!(t?.left||t?.eliminated||s?.eliminated||Number.isFinite(s?.hp)&&s.hp<=0)}function Kp(s,t,e){if(s==="draw"||!s)return"Unentschieden.";if(s===e)return"Du hast gewonnen!";let n=t.find(i=>i.id===s);return n?`${n.name} gewinnt.`:"Die Runde ist beendet."}var dt=s=>document.getElementById(s),Ne=(s,t)=>{dt(s).hidden=!t},Jo=new Set,Sn={steer:0,pitch:0,fire:!1},Gu,be=null,Un=null,Oe=null,Du="",Hu=0,Xe=null,Xt="entry",tn=[],os=null,mi=null,nm=180,im=3,Nc=null,Yo="",as=!1,Rs=!1,$o=!1,Is=!1,Xo,Fu=0,Rr=0,Uu=0,Zo=0,Ko=null,ls=null,cs=null,Bu,Jp,jp,Qp,Ou,Pc=new Map,Lc=new Set,tm="entry",qo=0,zu=!1,sm=new Map,rm=new Map;function qe(s,t,e){let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}for(let[s,t]of Cs.entries()){let e=qe("div","pilot-card");e.id=`lobby-${t}`,e.style.setProperty("--player-color",fi[t]);let n=qe("div","pilot-identity");n.append(qe("strong","pilot-name"),qe("span","host-badge","Gastgeber")),e.append(qe("span","pilot-number",String(s+1).padStart(2,"0")),n,qe("span","pilot-state")),dt("lobby-players").append(e),sm.set(t,e);let i=qe("div","opponent-card");i.id=`health-${t}`,i.style.setProperty("--player-color",fi[t]);let r=qe("div","opponent-heading");r.append(qe("span","opponent-label"),qe("strong","opponent-hp"));let o=qe("div","health-meter");o.setAttribute("role","meter"),o.setAttribute("aria-valuemin","0"),o.setAttribute("aria-valuemax","100"),o.append(qe("span")),i.append(r,o,qe("span","opponent-state")),dt("opponents").append(i),rm.set(t,i)}function Bn(s=""){dt("duel-errors").textContent=s,Ne("duel-errors",!!s)}function om(s){dt("session-warning").textContent=s,Ne("session-warning",!!s)}function ku(s){clearTimeout(Bu),dt("duel-feedback").textContent=Xt==="playing"?s:"",Bu=setTimeout(()=>{dt("duel-feedback").textContent=""},1400)}function jo(){if(!(!be||!Un))try{sessionStorage.setItem(Cc+be,JSON.stringify({token:Un,slot:Oe,name:Du,seq:Hu}))}catch{om("Dein Platz kann nach einem Neuladen in diesem Browser verloren gehen. Lass diese Seite w\xE4hrend des Duells ge\xF6ffnet.")}}function tM(s){try{let t=JSON.parse(sessionStorage.getItem(Cc+s)||"null");return t&&typeof t.token=="string"&&typeof t.name=="string"?t:null}catch{return null}}function Wu(){try{be&&sessionStorage.removeItem(Cc+be)}catch{}}var cn=()=>Xe?.readyState===WebSocket.OPEN;function hs(s){if(!cn())return!1;try{return Xe.send(JSON.stringify(s)),!0}catch{return!1}}function us(){return Cr(mi?.players?.find(s=>s.id===Oe),Ir())}function Qo(){return us()?{steer:0,pitch:0,fire:!1}:Yp(Jo,Sn)}function am(s=!1){Xt!=="playing"||us()||!cn()||!s&&document.hidden||hs({type:"input",seq:++Hu,...s?{steer:0,pitch:0,fire:!1}:Qo()})}function Ps(){clearTimeout(Ou),Jo.clear(),Sn.steer=Sn.pitch=0,Sn.fire=!1;let s=ls,t=cs;ls=cs=null,s!==null&&dt("duel-stick").hasPointerCapture(s)&&dt("duel-stick").releasePointerCapture(s),t!==null&&dt("fire-button").hasPointerCapture(t)&&dt("fire-button").releasePointerCapture(t),dt("duel-stick-knob").style.transform="",dt("fire-button").classList.remove("active"),am(!0)}function Ir(){return tn.find(s=>s.id===Oe)}function Vu(){let s=dt("connection-status");if(s.className="connection",!be){s.textContent="F\xFCr 2\u20135 Piloten";return}cn()?(s.classList.add("online"),s.textContent=Ko===null?"Verbunden":`Verbunden \xB7 ${Ko} ms`):(s.classList.add("lost"),s.textContent=Xt==="expired"?"Duell beendet":"Verbindung wird aufgebaut \u2026")}function eM(){let s=mi?.players||[],t=(a,l)=>l?.left||l?.eliminated||a?.eliminated?0:Math.max(0,Math.min(100,Math.round(a?.hp??100)));function e(a,l,c){a.setAttribute("aria-label",`${c}: Lebenspunkte`),a.setAttribute("aria-valuenow",l),a.setAttribute("aria-valuetext",`${l} von 100 Lebenspunkten`),a.firstElementChild.style.width=`${l}%`,a.classList.toggle("low",l<=30)}let n=Ir(),i=s.find(a=>a.id===Oe),r=t(i,n);dt("own-name").textContent=`${n?.name||"Du"} \xB7 DU`,dt("own-hp").textContent=r,dt("own-card").style.setProperty("--player-color",fi[Oe]||fi.p1),dt("own-card").classList.toggle("is-out",Cr(i,n)),e(dt("own-meter"),r,n?.name||"Du");for(let[a,l]of rm){let c=tn.find(p=>p.id===a),u=s.find(p=>p.id===a);if(l.hidden=a===Oe||!c&&!u,l.hidden)continue;let d=t(u,c),h=Cr(u,c),f=c?.name||"Pilot";l.querySelector(".opponent-label").textContent=f,l.querySelector(".opponent-label").title=f,l.querySelector(".opponent-hp").textContent=d,e(l.querySelector(".health-meter"),d,f),l.classList.toggle("is-out",h),l.querySelector(".opponent-state").textContent=c?.left?"Verlassen":h?"Ausgeschieden":c?.connected===!1?"Verbindung fehlt":"Im Flug"}let o=s.filter(a=>!Cr(a,tn.find(l=>l.id===a.id))).length;dt("remaining-pilots").textContent=`${o||(Xt==="countdown"?tn.filter(a=>!a.left).length:0)} im Flug`,dt("duel-time").textContent=Zp(nm)}function nM(){let s=Nc??mi?.winner;return Xt==="expired"&&Yo==="replaced"?{title:"Du fliegst im anderen Fenster.",text:"Dein Platz ist dort aktiv. Spiele dort weiter oder er\xF6ffne hier ein neues Duell."}:Xt==="expired"?{title:"Dieses Duell ist beendet.",text:"Der Raum ist nicht mehr verf\xFCgbar. Er\xF6ffne ein neues Duell und teile eine frische Einladung."}:{title:Kp(s,tn,Oe),text:{timeout:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",time:"Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.",disconnect:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",disconnected:"Die Verbindung eines Piloten kam nicht rechtzeitig zur\xFCck.",leave:"Ein Pilot hat das laufende Duell verlassen.",left:"Ein Pilot hat das laufende Duell verlassen.",forfeit:"Ein Pilot hat das laufende Duell verlassen.",health:"Die letzten Treffer haben die Runde entschieden.",damage:"Die letzten Treffer haben die Runde entschieden.",knockout:"Die letzten Treffer haben die Runde entschieden.",last_alive:"Nur ein Flugzeug ist noch in der Luft. Die Runde ist entschieden.",server_restart:"Das Duell wurde durch einen Neustart unterbrochen und endet unentschieden. Ihr k\xF6nnt gemeinsam eine neue Runde beginnen.",server_error:"Das Duell musste wegen eines Verbindungsfehlers beendet werden und wird als unentschieden gewertet. Ihr k\xF6nnt eine neue Runde versuchen."}[Yo||mi?.reason]||"Guter Flug! Mit einer Revanche startet ihr alle wieder mit 100 Lebenspunkten."}}function pi(){let s=us(),t=["countdown","playing","reconnecting"].includes(Xt);Ne("duel-entry",Xt==="entry"),Ne("duel-lobby",Xt==="lobby"),Ne("duel-result",Xt==="finished"||Xt==="expired"),Ne("duel-hud",t),Ne("duel-help",t&&!s),Ne("duel-spectator",t&&s),Ne("duel-countdown",Xt==="countdown"),Ne("duel-feedback",Xt==="playing"),Xt!=="playing"&&(clearTimeout(Bu),dt("duel-feedback").textContent=""),Ne("duel-touch",Xt==="playing"&&cn()&&!s),Ne("duel-reticle",Xt==="playing"&&cn()&&!s),Ne("leave-duel",!!(be&&Un)),Ne("back-solo",!Un),document.body.classList.toggle("playing",Xt==="playing"),document.body.classList.toggle("spectating",s&&t),s&&!zu&&(Ps(),ku("Du schaust jetzt zu. Die Runde l\xE4uft weiter.")),zu=s,dt("create-duel").disabled=dt("join-duel").disabled=as,dt("create-duel").textContent=as?"Wird er\xF6ffnet \u2026":"Duell er\xF6ffnen \u2197",dt("join-duel").textContent=as?"Du kommst gleich dazu \u2026":"Duell beitreten \u2197",dt("duel-name").disabled=as,Ne("create-duel",!be),Ne("join-duel",!!be),Ne("entry-new-duel",!!be),dt("entry-eyebrow").textContent=be?"DU BIST EINGELADEN":"DEIN PRIVATES DUELL",dt("entry-form-title").textContent=be?"Steig mit ein.":"Bereit f\xFCr Gegenwind?",dt("entry-note").textContent=be?"W\xE4hle deinen Namen. Wenn alle bereit sind, startet der Gastgeber eure Runde.":"Ohne Konto. Teile den Link mit bis zu vier Freunden.",be&&(dt("invite-link").value=$p(location.origin,be));for(let[a,l]of sm){let c=tn.find(u=>u.id===a&&!u.left);l.querySelector(".pilot-name").textContent=c?.name?c.name+(a===Oe?" \xB7 DU":""):"Freier Platz",l.querySelector(".pilot-state").textContent=c?.name?c.connected?c.ready?"Bereit":"Noch nicht bereit":"Verbindung fehlt":"Freunde einladen",l.querySelector(".host-badge").hidden=!c||a!==os,l.classList.toggle("is-empty",!c),l.classList.toggle("is-ready",!!(c?.ready&&c?.connected))}let e=tn.filter(a=>!a.left),n=tn.find(a=>a.id===os),i=Oe===os;dt("lobby-count").textContent=`${e.length} / 5 Piloten`,dt("lobby-copy").textContent=i?"Lade bis zu vier Freunde ein. Wenn alle bereit sind, bestimmst du als Gastgeber, wann es losgeht.":`${n?.name||"Der Gastgeber"} startet die Runde, wenn mindestens zwei Piloten dabei und alle bereit sind.`;let r=!!Ir()?.ready;dt("ready-button").textContent=r?"Doch noch warten":"Ich bin bereit \u2197",dt("ready-button").setAttribute("aria-pressed",String(r)),dt("ready-button").disabled=!cn()||Xt!=="lobby",dt("ready-button").className=i?"secondary wide":"primary",Ne("start-duel",i),dt("start-duel").textContent=e.length<2?"Auf Mitspieler warten":`Mit ${e.length} Piloten starten \u2197`,dt("start-duel").disabled=!cn()||Xt!=="lobby"||!Ic(tn,os,Oe),dt("start-status").textContent=i?e.length<2?"Zum Start fehlt noch mindestens ein Mitspieler.":Ic(tn,os,Oe)?"Alle sind bereit. Du kannst starten oder auf weitere Freunde warten.":"Alle angemeldeten Piloten m\xFCssen verbunden und bereit sein.":r?"Du bist bereit. Der Gastgeber startet eure Runde.":"Markiere dich als bereit, sobald du losfliegen kannst.",dt("countdown-value").textContent=Math.max(1,Math.ceil(im)),eM(),Vu();let o=Xt==="reconnecting"||!cn()&&!!Un&&!["expired","entry"].includes(Xt);if(Ne("duel-network",o),dt("network-title").textContent=cn()?"Ein Pilot ist kurz weg \u2026":"Verbindung wird wiederhergestellt \u2026",dt("network-copy").textContent=cn()?"Bis zu 20 Sekunden bleibt Zeit, zur\xFCckzukommen.":"Dein Platz bleibt kurz reserviert. Lass diese Seite ge\xF6ffnet.",Xt==="finished"||Xt==="expired"){let a=nM();dt("duel-result-title").textContent=a.title,dt("duel-result-copy").textContent=a.text,Ne("rematch-button",Xt!=="expired"),Ne("rematch-status",Xt!=="expired");let l=tn.filter(u=>u.connected&&!u.left),c=l.filter(u=>u.rematch||u.id===Oe&&Is).length;dt("rematch-button").disabled=Is||!cn()||l.length<2||!!Ir()?.left,dt("rematch-button").textContent=Is?"Du bist f\xFCr die Revanche bereit":"Revanche \u2197",dt("rematch-status").textContent=l.length<2?"F\xFCr eine Revanche m\xFCssen mindestens zwei Piloten verbunden sein.":`${c} / ${l.length} f\xFCr die Revanche bereit. Danach geht es zur\xFCck in die Lobby; der Gastgeber startet die neue Runde.`,dt("result-score").replaceChildren();for(let u of mi?.players||[]){let d=tn.find(p=>p.id===u.id),h=qe("div","result-pilot"),f=qe("strong");h.dataset.playerId=u.id,h.style.setProperty("--player-color",fi[u.id]),f.textContent=Math.max(0,Math.round(u.hp)),h.append(qe("i","player-dot"),qe("span","result-name",(d?.name||"Pilot")+(u.id===Oe?" \xB7 DU":"")),f,qe("small","result-place",u.id===(Nc??mi?.winner)?"Gewonnen":d?.left?"Verlassen":Cr(u,d)?"Ausgeschieden":"Im Ziel")),dt("result-score").append(h)}}tm!==Xt&&(Xt!=="playing"&&Ps(),Xt==="playing"&&dt("duel-canvas").focus({preventScroll:!0}),Xt==="lobby"&&dt("ready-button").focus({preventScroll:!0}),Xt==="finished"&&dt("rematch-button").focus({preventScroll:!0}),Xt==="expired"&&dt("new-duel").focus({preventScroll:!0}),tm=Xt)}async function iM(s,t){let e;try{e=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:AbortSignal.timeout(1e4)})}catch{throw new Error("Die Verbindung klappt gerade nicht. Pr\xFCfe dein Internet und versuche es noch einmal.")}let n=await e.json().catch(()=>({}));if(!e.ok){let i=new Error(n.error||"Dieses Duell ist gerade nicht erreichbar.");throw i.status=e.status,i}return n}async function lm(s=null){if(as)return;try{Du=Xp(s?.name||dt("duel-name").value)}catch(e){Bn(e.message),dt("duel-name").focus();return}as=!0,Bn(),pi();let t=++qo;try{let e=await iM(be?`/api/duels/${be}/join`:"/api/duels",{name:Du,...s?{token:s.token}:{}});if(t!==qo)return;if(!Rc(`#room=${e.room}`)||typeof e.token!="string"||!Cs.includes(e.slot))throw new Error("Die Einladung konnte nicht ge\xF6ffnet werden. Bitte versuche es erneut.");be=e.room,Un=e.token,Oe=e.slot,Hu=Number.isSafeInteger(s?.seq)?s.seq:0,history.replaceState(null,"",`/duel#room=${be}`),jo(),Xt="lobby",Rs=!1,Rr=0,Fu=0,tn=[],qu()}catch(e){if(t!==qo)return;s&&[401,403,404,410].includes(e.status)&&Wu(),Bn(e.message)}finally{t===qo&&(as=!1,pi())}}function sM(s){let t=new Set;for(let e of s.projectiles||[])t.add(e.id),e.owner===Oe&&!Lc.has(e.id)&&(dt("duel-reticle").classList.add("shot"),clearTimeout(Jp),Jp=setTimeout(()=>dt("duel-reticle").classList.remove("shot"),120));Lc=t;for(let e of s.players||[]){let n=Pc.get(e.id);typeof n=="number"&&e.hp<n&&(e.id===Oe?(document.body.classList.add("took-hit"),clearTimeout(Qp),Qp=setTimeout(()=>document.body.classList.remove("took-hit"),180),ku(`Du: \u2212${Math.round(n-e.hp)} Lebenspunkte`)):(dt("duel-reticle").classList.add("hit"),clearTimeout(jp),jp=setTimeout(()=>dt("duel-reticle").classList.remove("hit"),180),ku(`${tn.find(i=>i.id===e.id)?.name||"Pilot"}: \u2212${Math.round(n-e.hp)} Lebenspunkte`))),Pc.set(e.id,e.hp)}}function qu(){if(!be||!Un||Rs||$o)return;if(clearTimeout(Xo),Xe){let e=Xe;Xe=null,e.close()}let s=new URL(`/api/duels/${be}/socket`,location.origin);s.protocol=location.protocol==="https:"?"wss:":"ws:",s.searchParams.set("token",Un);let t=new WebSocket(s);Xe=t,Vu(),t.onopen=()=>{Xe===t&&(Fu=0,Rr=0,Uu=Zo=Date.now(),Ko=null,Bn(),hs({type:"ping",sentAt:Date.now()}),pi())},t.onmessage=e=>{if(Xe===t){Uu=Date.now();try{let n=JSON.parse(e.data);if(n.type==="welcome"&&Cs.includes(n.slot)&&(Oe=n.slot,jo()),n.type==="pong"&&(Ko=Math.min(9999,Math.max(0,Date.now()-Number(n.sentAt))),Vu()),n.type==="error"&&Bn(typeof n.message=="string"?n.message:"Das hat gerade nicht geklappt."),n.type!=="state"||!["lobby","countdown","playing","finished","reconnecting","expired"].includes(n.phase))return;Zo=Date.now(),Xt=n.phase,tn=Array.isArray(n.players)?n.players:[],os=n.hostId||null,im=Number(n.countdown)||3,nm=Number.isFinite(n.remaining)?n.remaining:180,Nc=n.winner??n.snapshot?.winner??null,Yo=n.reason||n.snapshot?.reason||"",(Xt==="lobby"||Xt==="countdown")&&(Is=!1,Pc.clear(),Lc.clear()),Xt==="finished"&&(Is=!!Ir()?.rematch),n.snapshot?(sM(n.snapshot),mi=n.snapshot):(Xt==="lobby"||Xt==="countdown")&&(mi=null),Xt==="expired"&&(Rs=!0,t.close(1e3,"expired")),pi()}catch{Bn("Ein Spielstand konnte nicht gelesen werden. Die Verbindung wird weiter gepr\xFCft.")}}},t.onerror=()=>{Xe===t&&(dt("connection-status").textContent="Verbindung unterbrochen")},t.onclose=e=>{if(Xe!==t)return;if(Xe=null,Ps(),e.code===4009||["In einem anderen Fenster verbunden.","Verbindung ersetzt."].includes(e.reason)){Rs=!0,clearTimeout(Xo),Wu(),Un=null,Xt="expired",Yo="replaced",pi();return}if(pi(),Rs||$o||!Un||Xt==="expired")return;if(Rr||(Rr=Date.now()+2e4),Date.now()>=Rr){Xt="expired",Rs=!0,Bn("Die Verbindung kam nicht rechtzeitig zur\xFCck. Du kannst ein neues Duell er\xF6ffnen."),pi();return}let n=Math.min(3e3,400*2**Fu++);Xo=setTimeout(qu,Math.min(n,Math.max(0,Rr-Date.now())))}}function Xu({notify:s=!0,forget:t=!0}={}){if(qo++,as=!1,Rs=!0,clearTimeout(Xo),Ps(),s&&hs({type:"leave"}),t&&Wu(),Xe){let e=Xe;Xe=null,e.close(1e3,"leave")}Un=Oe=os=null,tn=[],mi=null,Xt="entry",Ko=null,zu=!1,Nc=null,Yo="",Pc.clear(),Lc.clear(),Is=!1}function Yu(){Xu(),be=null,history.replaceState(null,"","/duel"),Bn(),om(""),pi(),dt("duel-name").focus()}async function cm(){if(be=Rc(location.hash),pi(),location.hash&&!be&&Bn("Diese Einladung ist nicht g\xFCltig. Du kannst hier ein neues Duell er\xF6ffnen."),be){let s=tM(be);s&&(dt("duel-name").value=s.name,await lm(s))}}dt("duel-name-form").addEventListener("submit",s=>{s.preventDefault(),lm()});dt("ready-button").onclick=()=>{Bn(),hs({type:"ready",ready:!Ir()?.ready})};dt("start-duel").onclick=()=>{Ic(tn,os,Oe)&&(Bn(),hs({type:"start"}))};dt("rematch-button").onclick=()=>{hs({type:"rematch"})&&(Is=!0,pi())};dt("leave-duel").onclick=Yu;dt("new-duel").onclick=Yu;dt("entry-new-duel").onclick=Yu;for(let s of["solo-link","back-solo","result-solo"])dt(s).addEventListener("click",()=>Xu());dt("copy-invite").onclick=async()=>{let s=dt("invite-link");try{await navigator.clipboard.writeText(s.value),dt("invite-status").textContent="Einladung kopiert. Schick sie bis zu vier Freunden."}catch{s.focus(),s.select(),s.setSelectionRange(0,s.value.length),dt("invite-status").textContent="Der Link ist markiert. Kopiere ihn \xFCber das Men\xFC deines Browsers."}};Ne("share-invite",typeof navigator.share=="function");dt("share-invite").onclick=async()=>{try{await navigator.share({title:"Stubenflieger \xB7 Unser Duell",text:"Flieg mit mir ein Papierflieger-Duell!",url:dt("invite-link").value})}catch(s){s.name!=="AbortError"&&(dt("invite-link").focus(),dt("invite-link").select(),dt("invite-status").textContent="Teilen ist gerade nicht m\xF6glich. Kopiere den markierten Link.")}};document.addEventListener("keydown",s=>{s.defaultPrevented||s.ctrlKey||s.altKey||s.metaKey||s.isComposing||Xt!=="playing"||us()||!cn()||s.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"]),a,button:not(#fire-button)')||["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&(s.preventDefault(),Jo.add(s.code),dt("fire-button").classList.toggle("active",Qo().fire))});document.addEventListener("keyup",s=>{Jo.delete(s.code),dt("fire-button").classList.toggle("active",Qo().fire)});window.addEventListener("blur",Ps);document.addEventListener("visibilitychange",()=>{Ps(),jo(),!document.hidden&&cn()&&hs({type:"ping",sentAt:Date.now()})});function hm(s){if(s.pointerId!==ls)return;let t=dt("duel-stick").getBoundingClientRect(),e=t.width/2-22,n=(s.clientX-t.left-t.width/2)/e,i=(s.clientY-t.top-t.height/2)/e,r=Math.max(1,Math.hypot(n,i));Sn.steer=Wo(n/r),Sn.pitch=Wo(-i/r),dt("duel-stick-knob").style.transform=`translate(${Sn.steer*e}px, ${-Sn.pitch*e}px)`}dt("duel-stick").addEventListener("pointerdown",s=>{Xt!=="playing"||us()||ls!==null||s.pointerType==="mouse"&&s.button!==0||(s.preventDefault(),ls=s.pointerId,dt("duel-stick").setPointerCapture(ls),hm(s))});dt("duel-stick").addEventListener("pointermove",hm);for(let s of["pointerup","pointercancel","lostpointercapture"])dt("duel-stick").addEventListener(s,t=>{t.pointerId===ls&&(ls=null,Sn.steer=Sn.pitch=0,dt("duel-stick-knob").style.transform="")});dt("fire-button").addEventListener("pointerdown",s=>{Xt!=="playing"||us()||cs!==null||s.pointerType==="mouse"&&s.button!==0||(s.preventDefault(),cs=s.pointerId,dt("fire-button").setPointerCapture(cs),Sn.fire=!0,dt("fire-button").classList.add("active"))});dt("fire-button").addEventListener("click",s=>{s.detail!==0||Xt!=="playing"||us()||(Sn.fire=!0,dt("fire-button").classList.add("active"),clearTimeout(Ou),Ou=setTimeout(()=>{cs===null&&(Sn.fire=!1),dt("fire-button").classList.toggle("active",Qo().fire)},120))});for(let s of["pointerup","pointercancel","lostpointercapture"])dt("fire-button").addEventListener(s,t=>{t.pointerId===cs&&(cs=null,Sn.fire=!1,dt("fire-button").classList.toggle("active",Jo.has("Space")))});window.addEventListener("hashchange",()=>{Xu(),be=null,cm()});window.addEventListener("pagehide",()=>{if(Ps(),jo(),$o=!0,clearTimeout(Xo),Xe){let s=Xe;Xe=null,s.close(1e3,"pagehide")}});window.addEventListener("pageshow",s=>{s.persisted&&($o=!1,be&&Un&&qu())});window.addEventListener("resize",()=>Gu?.resize());setInterval(()=>am(),50);setInterval(()=>{$o||!cn()||(hs({type:"ping",sentAt:Date.now()}),jo(),!document.hidden&&(Date.now()-Uu>15e3||Xt==="playing"&&Date.now()-Zo>1e4)&&Xe.close(4e3,"stale"))},5e3);var em=performance.now();function um(s){let t=Math.min(.1,Math.max(0,(s-em)/1e3));em=s;let e=Xt==="playing"&&!us()&&cn()&&!document.hidden&&Date.now()-Zo<1500;if(Xt==="playing"&&cn()){let n=Date.now()-Zo>=1500;Ne("duel-network",n),n&&(dt("network-title").textContent="Der Spielstand kommt gerade nicht an \u2026",dt("network-copy").textContent="Wir pr\xFCfen die Verbindung. Dein Flug geht weiter, sobald die Daten wieder da sind.")}Gu?.update(mi,Oe,t,{...Qo(),active:e}),requestAnimationFrame(um)}try{Gu=qp(dt("duel-canvas")),requestAnimationFrame(um),cm()}catch{Bn("Die 3D-Ansicht konnte nicht starten. Lade die Seite in einem aktuellen Browser neu."),dt("create-duel").disabled=dt("join-duel").disabled=!0}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
